import React, { Component } from 'react';
class Gmap extends Component {
render() {
return (
<div className="align-center">
<h2 className="text-center">MY LOCATION</h2>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12967.229572689474!2d106.61747443293213!3d10.779538593111626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c170fe6a067%3A0xd0f6d9711bc0cc94!2zMjI1IMSQLiBMw6ogVsSDbiBRdeG7m2ksIELDrG5oIFRy4buLIMSQw7RuZywgQsOsbmggVMOibiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1700584615846!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
);
}
}
export default Gmap;