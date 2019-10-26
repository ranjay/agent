//During the test the env variable is set to test
process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let Task = require("../models/task");
let Agent = require("../models/agent");

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe("Tasks", () => {
  beforeEach(done => {
    //Before each test we empty the database
    Task.remove({}, err => {
      done();
    });
  });

  describe("/GET agent", () => {
    it("it should GET all the agents", done => {
      chai
        .request(server)
        .get("/agent/list")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(3);
          done();
        });
    });
  });
  /*
   * Test the /GET route
   */
  describe("/GET task", () => {
    it("it should GET all the tasks", done => {
      chai
        .request(server)
        .get("/task/list")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  /*
   * Test the /POST route
   */
  describe("/POST task", () => {
    it("it should POST a task and assign agent1", done => {
      let task = { name: "Task1", skill: "skill1", priority: "Low" };
      chai
        .request(server)
        .post("/task/create")
        .send(task)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.agent.should.be.eq('Agent1');
          done();
        });
    });
  });

  describe("/POST task", () => {
    it("it should POST a task and assign agent2", done => {
      let task = { name: "Task2", skill: "skill2", priority: "Low" };
      chai
        .request(server)
        .post("/task/create")
        .send(task)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.agent.should.be.eq('Agent2');
          done();
        });
    });
  });

  describe("/POST task", () => {
    it("it should POST a task and assign agent1", done => {
      let task = { name: "Task3", skill: "skill1", priority: "High" };
      chai
        .request(server)
        .post("/task/create")
        .send(task)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.agent.should.be.eq('Agent1');
          done();
        });
    });
  });


});
