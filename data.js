// url: https://www.ikea.com/us/en/cat/chairs-fu002/
// script
/*
let data = []; 
let elms = document.getElementsByClassName('product-compact')
for(var i=0; i < elms.length; i++) { 
    const curr = elms[i];
    const price = curr.getElementsByClassName('product-compact__price__value')[0].innerText;
    const name = curr.getElementsByClassName('product-compact__name')[0].innerText;
    const image = curr.getElementsByTagName('img')[0].src;
    data.push({
      id: curr.dataset.refId,
      price,
      name,
      image
    })
}
JSON.stringify(data, null, 2)
*/
export default [
  {
    price: 1,
    priceLabel: '-1 Litre',
    name: 'Yüz yıkamak',
    image:
      './assets/1.png'
  },
  {
    price: 0.5,
    priceLabel: '-500 Mililitre',
    name: 'Diş fırçalamak (tek seferlik)',
    image:
      './assets/2.png'
  },
  {
    price: 10,
    priceLabel: '-10 Litre',
    name: 'Duş Almak',
    image:
      './assets/3.png'
  },
  {
    price: 3,
    priceLabel: '-3 Litre',
    name: 'Elde Bulaşık Yıkama',
    image:
      './assets/4.png'
  },
  {
    price: 0.25,
    priceLabel: '-250 Mililitre',
    name: 'Çay, kahve içimi',
    image:
      './assets/5.png'
  },
  {
    price: 2.5,
    priceLabel: '-2.5 Litre',
    name: 'Günlük su içimi',
    image:
      './assets/5.png'
  },
  {
    price: 3,
    priceLabel: '-3 Litre',
    name: 'Tuvalet',
    image:
      'assets/6.png'
  }
];
