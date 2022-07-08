using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PeliculasAPI.DTOs
{
    public class CineCreacionDTO
    {
        [Required]
        [StringLength(maximumLength: 75)]
        public string Nombre { get; set; }
        [Range(-90, 90)]
        public int Sillas { get; set; }
        public int Salas { get; set; }

        public double Latitud { get; set; }
        [Range(-180000, 180000)]
        public double Longitud { get; set; }
    }
}
