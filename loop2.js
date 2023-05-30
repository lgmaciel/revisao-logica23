
let x = 0;

while(true) {
    x = x+1;
    console.log('rodando '+x);
    if(x>20) {
        console.log('agora parando no meio do loop...');
        break;
    }
}

console.log('Fim do programa');