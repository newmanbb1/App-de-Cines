using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PeliculasAPI.DTOs;
using PeliculasAPI.Entidades;
using PeliculasAPI.Utilidades;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeliculasAPI.Controllers
{
    [Route("api/salas")]
    [ApiController]

    public class SalasController : ControllerBase
    {
        private readonly ILogger<SalasController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public SalasController(
            ILogger<SalasController> logger,
            ApplicationDbContext context,
            IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet] // api/generos
        public async Task<ActionResult<List<SalaDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO)
        {

            var queryable = context.Salas.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var generos = await queryable.OrderBy(x => x.Nombre).Paginar(paginacionDTO).ToListAsync();
            return mapper.Map<List<SalaDTO>>(generos);
        }

        [HttpGet("todos")]
        [AllowAnonymous]
        public async Task<ActionResult<List<SalaDTO>>> Todos()
        {
            var salas = await context.Salas.ToListAsync();
            return mapper.Map<List<SalaDTO>>(salas);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<SalaDTO>> Get(int Id)
        {
            var sala = await context.Salas.FirstOrDefaultAsync(x => x.Id == Id);

            if (sala == null)
            {
                return NotFound();
            }

            return mapper.Map<SalaDTO>(sala);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] SalaCreacionDTO salaCreacionDTO)
        {
            var sala = mapper.Map<Sala>(salaCreacionDTO);
            context.Add(sala);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int Id, [FromBody] SalaCreacionDTO salaCreacionDTO)
        {
            var sala = await context.Salas.FirstOrDefaultAsync(x => x.Id == Id);

            if (sala == null)
            {
                return NotFound();
            }

            sala = mapper.Map(salaCreacionDTO, sala);

            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await context.Salas.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Sala() { Id = id });
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
