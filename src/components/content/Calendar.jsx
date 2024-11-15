import  { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      title: 'Meeting',
      start: new Date(),
      end: new Date(moment().add(1, 'hour').toDate()),
      allDay: false,
    },
  ]);

  return (
    <div className="calendar-container">
      <h1>Google Calendar</h1>
      <p>Here you can manage your tasks and events using Google Calendar integration. Stay organized and keep track of your schedule.</p>
      <div className="calendar-content">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height:450 }}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
