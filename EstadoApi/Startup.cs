using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EstadoApi.Startup))]
namespace EstadoApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
