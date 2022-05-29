using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace minesweeper
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        bool[,] mine;
        int velicina = 50;
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
                        klik(o);
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
                int brojMina = 0;
                for (int i = -1; i <= 1; i++)
                    for (int j = -1; j <= 1; j++)
                        if (
                            x + i >= 0 &&
                            x + i < 8 &&
                            y + j >= 0 &&
                            y + j < 8)
                            if (mine[x + i, y + j])
                                brojMina++;
                labels[x, y].Text = "" + brojMina;
                labels[x, y].Visible = true;
            }
        }

    }
}
