using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("triangulo");
            //estructura repetitiva for
            int valor;
            string linea;

            for (int i = 0; i < 5; i++)//triangulo izqda
            {
                      
                for (int j = 0; j < i+1; j++)
                {
                    Console.Write(i + 1);
                }
                Console.WriteLine();
            }
            for (int i = 0; i < 5; i++)//triangulo drcha
            {
                for (int j = 0; j < 5 - (i + 1); j++)
                {
                    Console.Write(" ");
                }
                for (int j = 0; j < i + 1; j++)
                {
                    Console.Write(i + 1);
                }
                Console.WriteLine();
            }
            int num = 1;
            for (int i = 0; i < 5; i++)//triangulo central
            {
                for (int j = 0; j < 5 - (i + 1); j++)
                {
                    Console.Write(" ");
                }
                for (int j = 0; j < num; j++)
                {
                    Console.Write(num);
                    Console.Write(num);
                }
                Console.WriteLine();
                num++;
            }
        }
    }
}


                
          
			    

			    
           
        
