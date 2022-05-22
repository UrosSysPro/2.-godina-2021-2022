using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace atari_breakout
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        Graphics g;
        SolidBrush brush;
        Pen pen;

        private void Form1_Load(object sender, EventArgs e)
        {
            g = CreateGraphics();
            brush = new SolidBrush(Color.Black);
            pen = new Pen(brush);  
        }

        
    }
}
