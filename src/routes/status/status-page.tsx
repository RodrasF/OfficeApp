import React from 'react';

function StatusPage() {
  const sendNotification = async (): Promise<void> => {
    if (Notification.permission === 'granted') {
      const notification = new Notification('Notification Title', {
        body: 'Notification body text',
        icon: 'path/to/icon.png',
      });

      notification.addEventListener('click', () => {
        window.location.href = '/status';
        window.focus(); // Focus the browser window
      });
    } else if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const notification = new Notification('Notification Title', {
          body: 'Notification body text',
          icon: 'path/to/icon.png',
        });
      }
    }
  };

  const handleLocation = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;

    const certainLatitude = latitude;
    const certainLongitude = longitude;
    // Check if user is in a certain location
    if (latitude === certainLatitude && longitude === certainLongitude) {
      // Send notification to user's phone
      sendNotification()
        .catch((err) => console.log(err));
    }
  };

  const checkLocation = () => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocation);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  React.useEffect(() => {
    checkLocation();
  }, []);

  return (
    <div>
      {/* Your status page content goes here */}
    </div>
  );
}

export default StatusPage;
