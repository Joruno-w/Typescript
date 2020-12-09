type Callback<T,U> = (k:T,v:U)=>void
class Dictionary<K,V>{
    private keys: K[] = [];
    private vals: V[] = [];
    get size(){
        return this.keys.length;
    }

    set(key:K,val:V){
        const i = this.keys.indexOf(key);
        if (i < 0){
            this.keys.push(key);
            this.vals.push(val);
        }else{
            this.vals[i] = val;
        }
    }

    forEach(callback: Callback<K, V>){
        this.keys.forEach((n,i)=>{
            callback(n,this.vals[i]);
        });
    }

    delete(key:K) {
        if (!this.has(key)) return false;
        const i = this.keys.indexOf(key);
        this.keys.splice(i,1);
        this.vals.splice(i,1);
    }

    has(key:K):boolean{
        return this.keys.includes(key);
    }
}
