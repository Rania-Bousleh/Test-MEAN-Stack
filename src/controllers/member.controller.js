'use strict';
const Member = require('../models/member.model');
exports.findAll = function(req, res) {
Member.findAll(function(err, member) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', member);
  res.send(member);
});
};
exports.create = function(req, res) {
const new_member = new Member(req.body);
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Member.create(new_member, function(err, member) {
  if (err)
  res.send(err);
  res.json({error:false,message:"member added successfully!",data:member});
});
}
};

exports.delete = function(req, res) {
Member.delete( req.params.id, function(err, member) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'member successfully deleted' });
});
};