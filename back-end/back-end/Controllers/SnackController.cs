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
    [Route("api/snacks")]
    [ApiController]
    public class SnackController : ControllerBase
    {
        private readonly ILogger<SnackController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public SnackController(
            ILogger<SnackController> logger,
            ApplicationDbContext context,
            IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet] // api/snakcs
        public async Task<ActionResult<List<SnackDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO)
        {

            var queryable = context.Snacks.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var snacks = await queryable.OrderBy(x => x.Nombre).Paginar(paginacionDTO).ToListAsync();
            return mapper.Map<List<SnackDTO>>(snacks);
        }

        [HttpGet("todos")]
        [AllowAnonymous]
        public async Task<ActionResult<List<SnackDTO>>> Todos()
        {
            var snaks = await context.Snacks.ToListAsync();
            return mapper.Map<List<SnackDTO>>(snaks);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<SnackDTO>> Get(int Id)
        {
            var snaks = await context.Snacks.FirstOrDefaultAsync(x => x.Id == Id);

            if (snaks == null)
            {
                return NotFound();
            }

            return mapper.Map<SnackDTO>(snaks);
        }
        
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] SnakCreacionDTO snakCreacionDTO)
        {
            var snaks = mapper.Map<Snack>(snakCreacionDTO);
            context.Add(snaks);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int Id, [FromBody] SnakCreacionDTO snakCreacionDTO)
        {
            var snack = await context.Snacks.FirstOrDefaultAsync(x => x.Id == Id);

            if (snack == null)
            {
                return NotFound();
            }

            snack = mapper.Map(snakCreacionDTO, snack);

            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await context.Snacks.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Snack() { Id = id });
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
