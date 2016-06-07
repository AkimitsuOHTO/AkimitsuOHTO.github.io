var session, socket;
var pepperAddress = "nao.local:80"

//追加
var alsystem;

$(function(){
  session = new QiSession(pepperAddress);
  socket = session.socket();
  socket.on('connect', function() {
    console.info('接続しました');
  }).on('error', function() {
    console.error('接続できません');
  }).on('disconnect', function() {
    console.error('接続が切れました');
  });
})

// おしゃべり
function say(){
	session.service("ALTextToSpeech").done(function(tts){
	  var value = $("#sayText").val();
	  tts.say(value);
	}).fail(function(error) {
	  console.log("Error");
	});
}

function say2(intIndex){
	session.service("ALAnimatedSpeech").done(function(tts){
	  var value = $("#sayText" + String(intIndex)).val();
	  //tts.setParameter("speed",110);
	  //tts.setParameter("pitchShift",1.1);
	  tts.say(value);
	}).fail(function(error) {
	  console.log("Error");
	});
}

function say3(){
	session.service("ALAnimatedSpeech").done(function(tts){
	  var index = Number($("#selectPage").val());
	  var value = $("#sayText" + String(index - 1)).val();
	  $("#selectPage").val(index + 1);
	  tts.say(value);
	}).fail(function(error) {
	  console.log("Error");
	});
}
