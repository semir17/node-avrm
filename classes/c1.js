//denar to euro
const d2e = ( d = 0 ) => {
    let e = d / 61.5;
    return e;
}

//euro to denar
const e2d = ( e = 0 ) => {
    let d = e * 61.5;
    return d;
}

//minute to hour
const m2h = ( m = 0 ) => {
    let h = m / 60;
    return h;
}

//hour to minute
const h2m = ( h = 0 ) => {
    let m = h * 60;
    return m;
}

//meter to inch
const m2i = ( m = 0 ) => {
    let i = m * 36.37;
    return i;
}

//inch to meter
const i2m = ( i = 0 ) => {
    let m = i / 36.37;
    return m;
}

//us dollar to uk pound
const d2p = ( d = 0 ) => {
    let p = d * 0.48;
    return p;
}

//uk pound to us dollar
const p2d = ( p = 0 ) => {
    let d = p / 0.48;
    return p;
}

//gigabyte to terabyte
const g2t = ( g = 0 ) => {
    let t = g / 1024;
    return t;
}

//terabyte to gigabyte
 const t2g = ( t = 0 ) => {
     let g = t * 1024;
     return g;
 }


//callback
const cb = (num,t) => {         
    console.log(t(num));
}

cb(3500, d2e);
cb(100, e2d);
cb(60, m2h);
cb(10, h2m);
cb(55, m2i);
cb(2000, i2m);
cb(100, d2p);
cb(100, p2d);
cb(5000,g2t);
cb (5,t2g),

module.exports ={
    d2e,
    e2d,
    m2h,
    h2m,
    m2i,
    i2m,
    d2p,
    p2d,
    g2t,
    t2g,
}