function dateFormat1(date) {
    // Format: 04/20/2024 13:45:30
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let year = date.getFullYear();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
  }
  
  function dateFormat2(date) {
    // Format: Thu 20/4/2024 13.45
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dayOfWeek = date.toLocaleString('en-us', { weekday: 'short' });
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    return `${dayOfWeek} ${day}/${month}/${year} ${hours}.${minutes}`;
  }
  
  function dateFormat3(date) {
    // Format: 2024-04-20 3:45 Thursday
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let hours = date.getHours();
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let dayOfWeek = date.toLocaleString('en-us', { weekday: 'long' });
    return `${year}-${month}-${day} ${hours}:${minutes} ${dayOfWeek}`;
  }
  
  function dateFormat4(date) {
    // Format: April 20th, 2024 01.45.30 PM
    let month = date.toLocaleString('en-us', { month: 'long' });
    let day = date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours() % 12 || 12;
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${month} ${day}th, ${year} ${String(hours).padStart(2, '0')}.${minutes}.${seconds} ${ampm}`;
  }
  
  function dateFormat5(date) {
    // Format: 20 April 2024 at 01:45 PM
    let day = date.getDate();
    let month = date.toLocaleString('en-us', { month: 'long' });
    let year = date.getFullYear();
    let hours = date.getHours() % 12 || 12;
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${day} ${month} ${year} at ${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
  }

  let date = new Date('2024-04-20T13:45:30');
  console.log(dateFormat1(date)); 
  console.log(dateFormat2(date)); 
  console.log(dateFormat3(date)); 
  console.log(dateFormat4(date)); 
  console.log(dateFormat5(date)); 
  