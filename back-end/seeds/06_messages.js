/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('messages').del()
  await knex('messages').insert([
    { sender_id: 2, recipient_id: 8, launch_request_id: 1, message: 'Hey, thanks for such a great launch!', notification_type:'New message', notification_ack: 'false', timestamp: '2023-04-17 16:52:12'},
    { sender_id: 8, recipient_id: 2, launch_request_id: 1, message: 'No problem!', notification_type:'New message', notification_ack: 'false', timestamp: '2023-04-17 17:52:12'},
    { sender_id: 8, recipient_id: 2, launch_request_id: 3, message: "Sorry we had to deny your request - our rocket is experiencing issues and will be decommissioned.",notification_type: 'Request denied',notification_ack: 'false', timestamp: '2023-04-17 18:52:14'},
    {
      sender_id: 2,
      recipient_id: 8,
      launch_request_id: 3,
      message: "Do you have any availability on other Falcon 9 Rockets at the Cape in the next 6 months?",
      notification_type: "New message",
      notification_ack: 'false',
      timestamp: "2023-04-18T03:25:44.621Z",
    },
    {
      sender_id: 2,
      recipient_id: 8,
      launch_request_id: 1,
      message: "Can you support?",
      notification_type: "New request",
      notification_ack: 'true',
      timestamp: '2023-04-15 16:52:12',
    },
    {
      sender_id: 8,
      recipient_id: 2,
      launch_request_id: 1,
      message: "Yes! We went ahead and accepted your request.",
      notification_type: "Request accepted",
      notification_ack: 'true',
      timestamp: '2023-04-15 16:52:12',
    },
    {
      sender_id: 2,
      recipient_id: 8,
      launch_request_id: 4,
      message: "We need this payload launched in June and we need this to be the only payload onboard.",
      notification_type: "New request",
      notification_ack: 'true',
      timestamp: '2023-04-15 16:52:12',
    },
    {
      sender_id: 2,
      recipient_id: 8,
      launch_request_id: 5,
      message: "Looking to launch our first GPS IIIF.",
      notification_type: "New request",
      notification_ack: 'true',
      timestamp: '2023-04-15 16:52:12',
    },
    {
      sender_id: 1,
      recipient_id: 4,
      launch_request_id: 6,
      message: "Can you support?",
      notification_type: "New request",
      notification_ack: 'true',
      timestamp: '2023-04-15 16:52:12',
    },
    {
      sender_id: 1,
      recipient_id: 7,
      launch_request_id: 8,
      message: "Hoping to launch our small sat into LEO!",
      notification_type: "New request",
      notification_ack: 'true',
      timestamp: '2023-04-15 16:52:12',
    },
    {
      sender_id: 7,
      recipient_id: 1,
      launch_request_id: 8,
      message: "Yes, we can support! We have you scheudled for early 2024.",
      notification_type: "Request accepted",
      notification_ack: 'true',
      timestamp: '2023-04-16 16:52:12',
    },
    {
      sender_id: 1,
      recipient_id: 5,
      launch_request_id: 9,
      message: "Hoping to launch our communications sat into LEO!",
      notification_type: "New request",
      notification_ack: 'true',
      timestamp: '2023-04-19 16:52:12',
    },
    {
      sender_id: 5,
      recipient_id: 1,
      launch_request_id: 9,
      message: "Yes, we can support! Looking forward to launching later this year.",
      notification_type: "Request accepted",
      notification_ack: 'true',
      timestamp: '2023-04-20 16:52:12',
    },
    {
      sender_id: 3,
      recipient_id: 8,
      launch_request_id: 10,
      message: "",
      notification_type: "New request",
      notification_ack: 'true',
      timestamp: '2023-04-19 16:52:12',
    },
    {
      sender_id: 8,
      recipient_id: 3,
      launch_request_id: 10,
      message: "Yes, we can support!",
      notification_type: "Request accepted",
      notification_ack: 'true',
      timestamp: '2023-04-20 16:52:12',
    },
    {
      sender_id: 11,
      recipient_id: 8,
      launch_request_id: 2,
      message: "Can you launch our small sat from 39B?",
      notification_type: "New request",
      notification_ack: 'true',
      timestamp: '2023-04-16 16:52:12',
    },
    {
      sender_id: 8,
      recipient_id: 11,
      launch_request_id: 2,
      message: "Sorry, we can unfortunately not support at this time!",
      notification_type: "Request denied",
      notification_ack: 'false',
      timestamp: '2023-04-18 16:52:12',
    },
    {
      sender_id: 11,
      recipient_id: 8,
      launch_request_id: 7,
      message: "",
      notification_type: "New request",
      notification_ack: 'true',
      timestamp: '2023-04-16 16:52:12',
    },
    {
      sender_id: 11,
      recipient_id: 8,
      launch_request_id: 11,
      message: "We are looking to launch an experimental payload into LEO. We request that we are the only payload onboard.",
      notification_type: "New request",
      notification_ack: 'true',
      timestamp: '2023-04-16 16:52:12',
    },
    {
      sender_id: 8,
      recipient_id: 11,
      launch_request_id: 11,
      message: "Yes, we can support! We will make sure you are the only payload on the vehicle. Our team for classified launches will be in contact shortly.",
      notification_type: "Request accepted",
      notification_ack: 'true',
      timestamp: '2023-04-20 16:52:12',
    },
    {
      sender_id: 3,
      recipient_id: 8,
      launch_request_id: 12,
      message: "Hoping to launch our latest GPS sat",
      notification_type: "New request",
      notification_ack: 'true',
      timestamp: '2023-04-19 16:52:12',
    },
    {
      sender_id: 8,
      recipient_id: 3,
      launch_request_id: 12,
      message: "Great, we have you scheduled for our Falcon Heavy out of 39B",
      notification_type: "Request accepted",
      notification_ack: 'true',
      timestamp: '2023-04-20 16:52:12',
    },
  ]
  );
};
