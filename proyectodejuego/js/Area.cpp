
#include <iostream>;
#include <math.h>;
#define M_PI           3.14159265358979323846 

using namespace std;
 
int main()
{
    double pi = M_PI;
    float radio, altura, resultado, Area_Base, Area_Lateral;

    cout << "Radio: " << endl;
    cin >> radio;
    cout << "Altura: " << endl;
    cin >> altura;
    
    Area_Base = radio * radio *  pi ;
    cout << "Area de la base: " << endl;
    cout << Area_Base << endl;
    
    Area_Lateral = 2 * pi * radio * altura ;
    cout << "Area Lateral: " << endl;
    cout << Area_Lateral << endl;
    
    resultado = 2 * pi * radio * (radio + altura) ;
    cout << "Area Total es: " << endl;
    cout << resultado << endl;
    
    resultado = radio * radio * altura * pi;
    cout << "Volumen: " << endl;
    cout << resultado << endl;

}