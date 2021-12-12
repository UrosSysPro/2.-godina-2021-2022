using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace KlasaCigla_app04
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        //koordinate gde je korisnik pritisnuo misem (x0, y0)
        //koordinate cigli koje ce se iscrtavati (x1,y1)
        //sirina i visina cigli (a , b)
        //grafika koju koristimo za crtanje (g)
        int x0, y0, x1, y1;
        int a = 40;
        int b = 20;

        private void Form1_MouseUp(object sender, MouseEventArgs e)
        {
            timer1.Stop();
        }

        Graphics g;

        private void Form1_MouseMove(object sender, MouseEventArgs e)
        {
            /*Point point = new Point(x1, y1);
            Cigla cigla = new Cigla(point, a, b);
            cigla.crtajCiglu(g);
            */
        }

        int br = 0;
        private void timer1_Tick(object sender, EventArgs e)
        {
            //Definisemo ciglu koju trenutno iscrtavamo
            Point point = new Point(x1, y1);
            Cigla cigla = new Cigla(point, a, b);

            //Ako je stub cigli dostigao visinu gde je korisnik kliknuo prekidamo sa crtanjem i gasimo timer
            if (y1 >= y0)
            {
                cigla.crtajCiglu(g);
            }
            else
                timer1.Stop();

            //X koordinata sledece cigle je uvek ista
            //Y koordinate sledece cigle

            if (br % 2 == 0)
                x1 = x1 - 10;
            else
                x1 = x1 + 10;
            y1 -= b;
            br++;
        }


        private void Form1_MouseDown(object sender, MouseEventArgs e)
        {
            //koordinate gde je korisnik kliknuo misem
            x0 = e.X;
            y0 = e.Y;

            //koordinate prve cigle koja se iscrtava
            //ona se iscrtava uz samu donju ivicu forme i zato
            //radimo ClientRectangle.Height - (b / 2);
            x1 = x0;
            y1 = ClientRectangle.Height - (b / 2);

            //inicijalizujemo grafiku pomocu koje se crta
            g = CreateGraphics();

            //pokrecemo timer
            timer1.Start();
        }
    }
}
