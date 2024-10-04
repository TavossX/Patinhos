var patinhos = 5;
while(patinhos > 0){
    console.log(`${patinhos} patinhos foram passear`);
    console.log(`Além das montanhas para brincar`);
    console.log(`A mamãe gritou: Quá, quá, quá, quá`);

        if(patinhos > 1){
            console.log(`Mas só ${patinhos - 1} patinhos voltaram de lá\n`);
        }else{
            console.log(`Mas nenhum patinho voltou de lá!\n`);
        }
        patinhos--;
}