let chai = require('chai');  
let chaiHttp = require('chai-http');
/*eslint-disable */
let should = chai.should();  
/*eslint-enable */
let server = require('../app');

chai.use(chaiHttp);

/*eslint-disable */
describe('Node Server', () => {  
	it('(GET /) returns the homepage', (done)=> {
		/*eslint-enable */
		chai.request(server)
			.get('/')
			.end( (err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.property('name').to.be.an('string');
				res.body.should.have.property('surname').to.be.an('string');
				res.body.should.have.property('age').to.be.an('number');
				res.body.should.have.property('location').to.be.an('string');
				done();
			});
	});
});