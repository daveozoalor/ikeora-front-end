$(document).ready(function() {
    // Get references to Firebase data
    var ref = new Firebase('https://releafmessagingdemo.firebaseio.com/');
    var messagesRef = ref.child("web/messages");
    //setting myself as the user
    var $username = ref.child("web/users/patrickalexis");

    // Get references to DOM elements
    var $newMessage = $("#newMessage");
    var $messageList = $("#messageList");


    // Add a new message to the message list
    function addMessage(username, text) {
        var el = $("<li class='list-group-item'><b>" + username + ":</b> " + text + "</li>")
        $messageList.append(el);
    }

    // Loop through the last ten messages stored in Firebase
    messagesRef.limitToLast(10).on("child_added", function(snapshot) {
        var message = snapshot.val();

        // Escape unsafe characters
        var username = $username.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
        var text = message.text.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");

        addMessage(username, text);
    });

    // Listen for key presses on the new message input
    $newMessage.keypress(function (e) {
        // Get field values
        var username = $username.val();
        var text = $newMessage.val().trim();

        // Save message to Firebase when enter key is pressed
        if (e.keyCode == 13 && text.length > 0) {
            messagesRef.push({
                username: username,
                text: text
            }, function(error) {
                if (error) {
                    console.log("Error adding new message:", error);
                }
            });

            // Reset new message input
            $newMessage.val("");
        }
    });

});/**
 * Created by pa380 on 4/26/16.
 */
