
using Base.Base;
using Base.Model;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Mvc;

namespace EstadoApi.Controllers
{
    public class EstadoController : Controller
    {



        private readonly List<Estado> _estados;


        public EstadoController()
        {
            var estados = new EstadoBase();
            _estados = estados.Estados;
        }



        public ActionResult GetEstados()
        {
            return Json(new { Estados = _estados }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetEstadosFiltered(string term)
        {
            if (term == null) return GetEstados();
            if (term.Length < 2)
                return Json(new { Estados = _estados.Where(e => e.Sigla.Contains(term)).ToList(), JsonRequestBehavior.AllowGet });
            else
                return Json(new { Estados = _estados.Where(e => e.Nome.Contains(term)).ToList(), JsonRequestBehavior.AllowGet});
        }
    }
}