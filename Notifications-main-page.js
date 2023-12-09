function showNotification(options) {
    // Create a new div element for the notification
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = options.html;

    // Append the notification to the body
    document.body.appendChild(notification);

    // Use a timeout to make the notification visible
    setTimeout(function() {
      notification.style.opacity = '1';
    }, 100);

    // Use another timeout to hide the notification after 1.5 seconds
    setTimeout(function() {
      notification.style.opacity = '0';

      // Use another timeout to remove the notification from the DOM
      setTimeout(function() {
        document.body.removeChild(notification);
      }, 500);
    }, 1500);

  }


let notificationCounter = 0;

let isPaused = false;
let pauseUntil = null;

document.getElementById('notificationButton').addEventListener('click', function() {
  showNotification({html: 'Новое уведомление!'});
  var container = document.getElementById('notificationContainer');
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
  
  // Pause the counter for 10 seconds
  isPaused = true;
  pauseUntil = Date.now() + 9000; // Current time + 10 seconds
  
  // Clear notification counter and hide count display
  //notificationCounter = 0;
  //document.getElementById('notificationCount').innerHTML = '0';
  });

  function addNotification(text) {

    notificationCounter++;
    document.getElementById('notificationCount').innerHTML = notificationCounter;
  
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
  
    // create a close button and append it to the li element
    var closeBtn = document.createElement("button");
    closeBtn.innerHTML = "  X";
    closeBtn.className = "close-btn";
    
    li.appendChild(closeBtn);
  
    document.getElementById('notificationsList').appendChild(li);
  }

  document.getElementById('notificationContainer').addEventListener('click', function(e) {
    if (e.target && e.target.className === 'close-btn') {
      // remove the notification
      e.target.parentNode.remove();
      notificationCounter = notificationCounter - 1;
    }
  });
  

/*function checkIsPaused(isPaused, f, delayTime) {
  if (isPaused) {
    return function(){
      setTimeout(() => f.apply(this, arguments), delayTime);
  }
 } else {
    return f;
  }
}

function generateNotifications() {
setInterval(function() {
  let addNotificationDelayed = checkIsPaused(isPaused, addNotification, 10000);
  addNotificationDelayed('Новое уведомление ' + new Date().toLocaleTimeString());
}, 3000);
}

generateNotifications();*/


function delayDecorator(f, delayTime) {
  return function(...args) {
    if (isPaused && Date.now() < pauseUntil) {
      return;
    }
    return f.apply(this, args);
  };
}

let addNotificationDelayed = delayDecorator(addNotification, 10000);

function generateNotifications() {
  setInterval(function() {
    addNotificationDelayed('Новое уведомление ' + new Date().toLocaleTimeString());
  }, 3000);
}

//generateNotifications();


