using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ServiceModel;

namespace WCFHost
{
    class Program
    {
        static void Main()
        {
            using (ServiceHost host = new ServiceHost(typeof(WcfServiceLibrary1.Service1)))
            {
                host.Open();
                Console.WriteLine("Service started @ " + DateTime.Now.ToString());
                Console.ReadLine();
            }
        }
    }
}
