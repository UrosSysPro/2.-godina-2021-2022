using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace minesweaper
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        bool[,] mine;
        int velicina = 70;
        PictureBox[,] pbs;
        Label[,] labels;
        Random r = new Random();
        private void Form1_Load(object sender, EventArgs e)
        {
            mine = new bool[8, 8];
            for (int i = 0; i < 8; i++)
            {
                for (int j = 0; j < 8; j++)
                {
                    mine[i, j] = false;
                }
            }

            for (int i = 0; i < 7; i++)
            {
                int x = r.Next(8);
                int y = r.Next(8);
                mine[x, y] = true;
            }

            labels = new Label[8, 8];
            for (int i = 0; i < 8; i++)
            {
                for (int j = 0; j < 8; j++)
                {
                    labels[i, j] = new Label();
                    labels[i, j].Text = "3";
                    labels[i, j].Visible = false;
                    labels[i, j].AutoSize = true;
                    if (i % 2 == j % 2)
                        labels[i, j].BackColor = Color.DimGray;
                    else
                        labels[i, j].BackColor = Color.Wheat;


                    labels[i, j].Font = new Font("Arial", 20);
                    labels[i, j].Location = new Point(i * velicina + 10, j * velicina + 10);
                    Controls.Add(labels[i, j]);
                }
            }

            pbs = new PictureBox[8, 8];
            for (int i = 0; i < 8; i++)
            {
                for (int j = 0; j < 8; j++)
                {
                    pbs[i, j] = new PictureBox();
                    pbs[i, j].Size = new Size(velicina, velicina);
                    pbs[i, j].Location = new Point(i * velicina, j * velicina);
                    if (i % 2 == j % 2)
                        pbs[i, j].BackColor = Color.DimGray;
                    else
                        pbs[i, j].BackColor = Color.Wheat;

                    pbs[i, j].Click += (o, args) => {
                        MouseEventArgs m = (MouseEventArgs)args;
                        if(m.Button==MouseButtons.Left)
                            klik(o);
                        else
                        {
                            PictureBox p = (PictureBox)o;
                            p.BackColor = Color.Orange;
                        }
                    };
                    Controls.Add(pbs[i, j]);
                }
            }


        }


        public void klik(Object o)
        {
            int x = 0, y = 0;
            for (int i = 0; i < 8; i++)
                for (int j = 0; j < 8; j++)
                    if (pbs[i, j] == o)
                    {
                        x = i; y = j;
                        //MessageBox.Show(i + " " + j);
                    }
            if (mine[x, y])
            {
                for (int i = 0; i < 8; i++)
                    for (int j = 0; j < 8; j++)
                        if (mine[i, j])
                            pbs[i, j].BackColor = Color.Red;

                MessageBox.Show("Game Over");
                Close();
            }
            else
            {
                LinkedList<Point> list = new LinkedList<Point>();
                list.AddFirst(new Point(x,y));

                
                while (list.Count() != 0)
                {
                    Point p = list.Last();
                    list.RemoveLast();

                    int brojMina = 0;
                    for (int i = -1; i <= 1; i++)
                        for (int j = -1; j <= 1; j++)
                            if (p.X + i >= 0 && p.X + i < 8)
                                if (p.Y + j >= 0 && p.Y + j < 8)
                                    if (mine[p.X + i, p.Y + j])
                                        brojMina++;
                    
                    labels[p.X, p.Y].Visible = true;
                    if (p.X % 2 == p.Y % 2)
                        labels[p.X, p.Y].BackColor = Color.Green;
                    else
                        labels[p.X, p.Y].BackColor = Color.YellowGreen;
                    if (p.X % 2 == p.Y % 2)
                        pbs[p.X, p.Y].BackColor = Color.Green;
                    else
                        pbs[p.X, p.Y].BackColor = Color.YellowGreen;
                    if (brojMina == 0)
                    {
                        labels[p.X, p.Y].Text ="";
                        for (int i = -1; i <= 1; i++)
                            for (int j = -1; j <= 1; j++)
                                if (p.X + i >= 0 && p.X + i < 8)
                                    if (p.Y + j >= 0 && p.Y + j < 8)
                                        if (!labels[p.X + i, p.Y + j].Visible)
                                            list.AddFirst(new Point(p.X+i,p.Y+j));
                    }
                    else
                    {
                        labels[p.X, p.Y].Text = brojMina+"";
                    }
                }
            }
        }
    }
}
