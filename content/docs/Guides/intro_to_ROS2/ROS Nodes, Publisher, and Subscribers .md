---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCN3GUO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6g3wPjunCw4UFaYje0kL4%2FVW4Hz6wumecGkRu5SPe%2FAiEA6iQvhSMAjppOwEF%2FAe5ZKgCKIOIQe7oCSu3GWaUK2Joq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDkSPjxkKFfnuwqsACrcA87z%2B5jD6XMIuiMI8vyO8bcCQMlufiAnw4mK6XMPmEq%2BYWzu7InezCNoNnyt4fhh%2FyTvoZzJ05Oz2VhuWBbaDIntWIEDOVEM6A9EJSXjA0zvuJocsrTmo0CNr%2FnaR9UG1EGKenIkZnb95AqXGZG%2B2dyqWsgxQIYDCuGObozEftgoCRZT5J3BWTi3Yu0zmZ3LgerADEU772nKFKdfes52pHR0Ak3emtyFv5TUhozMSCAF1%2Bx6G0Dfejdq7CitC22%2BrjjpXbBL9RwgKuhfwRawKgpxZsp%2Bdb9usYduMZOvnAnMLAw8II%2BFS6nNtZFPsb%2BypQiNkxLhEC7zQC8nOZD6u7AOFxhyZiwYHKaiXDlzvC0EW92dUgvAQo1XLXdSlpQRTKlby5Uu3Fy2Ya7S50iD1X33rcllaHimsnaERbkcuIfH7K6qhSCPmjKdX67Scci5RSi2ib3NJLDs3yIDx1KmEokBUb5XAlcwtPpoaQMPLZVAh1S5EUhOZEW4vdV871EKcB6l%2FsyWM7wtW%2Foiqm7OODcELnORAtF%2BDGVAXYy3LrdJuzaG6cVsveGs96XdyBUpY8cMSMWHD3kfyM9A4lWjTwh%2Ba7EMbmHPzPxolACWneaAVRP%2BCt2dOCrCWVnfMPmLuMAGOqUBXgiBX0NwL3KWFq4KxUkO5BV0xzki90VeEtuvC3SP2rH4onla4eCdgGhw6knh4twqC8Ip0e3BVeL3h01%2BuaEj8gR1Foq7w%2B%2BcC62bq74khdTfpD7O8AWD3NFN0dAF0sUHmPh4ZwaMMSWu5uewQCxqNJQGBOcVFjXuPcB3EOCbqsYO471TIeL6fgaijVzXU6cZJhmmCkz6O7ZYA6inpH2xBXBNff5y&X-Amz-Signature=f06348fa1001cff657879a64d1f61796f601f7fadde0c94f314418c9a3232428&X-Amz-SignedHeaders=host&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCN3GUO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6g3wPjunCw4UFaYje0kL4%2FVW4Hz6wumecGkRu5SPe%2FAiEA6iQvhSMAjppOwEF%2FAe5ZKgCKIOIQe7oCSu3GWaUK2Joq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDkSPjxkKFfnuwqsACrcA87z%2B5jD6XMIuiMI8vyO8bcCQMlufiAnw4mK6XMPmEq%2BYWzu7InezCNoNnyt4fhh%2FyTvoZzJ05Oz2VhuWBbaDIntWIEDOVEM6A9EJSXjA0zvuJocsrTmo0CNr%2FnaR9UG1EGKenIkZnb95AqXGZG%2B2dyqWsgxQIYDCuGObozEftgoCRZT5J3BWTi3Yu0zmZ3LgerADEU772nKFKdfes52pHR0Ak3emtyFv5TUhozMSCAF1%2Bx6G0Dfejdq7CitC22%2BrjjpXbBL9RwgKuhfwRawKgpxZsp%2Bdb9usYduMZOvnAnMLAw8II%2BFS6nNtZFPsb%2BypQiNkxLhEC7zQC8nOZD6u7AOFxhyZiwYHKaiXDlzvC0EW92dUgvAQo1XLXdSlpQRTKlby5Uu3Fy2Ya7S50iD1X33rcllaHimsnaERbkcuIfH7K6qhSCPmjKdX67Scci5RSi2ib3NJLDs3yIDx1KmEokBUb5XAlcwtPpoaQMPLZVAh1S5EUhOZEW4vdV871EKcB6l%2FsyWM7wtW%2Foiqm7OODcELnORAtF%2BDGVAXYy3LrdJuzaG6cVsveGs96XdyBUpY8cMSMWHD3kfyM9A4lWjTwh%2Ba7EMbmHPzPxolACWneaAVRP%2BCt2dOCrCWVnfMPmLuMAGOqUBXgiBX0NwL3KWFq4KxUkO5BV0xzki90VeEtuvC3SP2rH4onla4eCdgGhw6knh4twqC8Ip0e3BVeL3h01%2BuaEj8gR1Foq7w%2B%2BcC62bq74khdTfpD7O8AWD3NFN0dAF0sUHmPh4ZwaMMSWu5uewQCxqNJQGBOcVFjXuPcB3EOCbqsYO471TIeL6fgaijVzXU6cZJhmmCkz6O7ZYA6inpH2xBXBNff5y&X-Amz-Signature=d1530e6775e235954ce661910503f36999b016e3442e9ee0f5b8ffad900f8b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCN3GUO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6g3wPjunCw4UFaYje0kL4%2FVW4Hz6wumecGkRu5SPe%2FAiEA6iQvhSMAjppOwEF%2FAe5ZKgCKIOIQe7oCSu3GWaUK2Joq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDkSPjxkKFfnuwqsACrcA87z%2B5jD6XMIuiMI8vyO8bcCQMlufiAnw4mK6XMPmEq%2BYWzu7InezCNoNnyt4fhh%2FyTvoZzJ05Oz2VhuWBbaDIntWIEDOVEM6A9EJSXjA0zvuJocsrTmo0CNr%2FnaR9UG1EGKenIkZnb95AqXGZG%2B2dyqWsgxQIYDCuGObozEftgoCRZT5J3BWTi3Yu0zmZ3LgerADEU772nKFKdfes52pHR0Ak3emtyFv5TUhozMSCAF1%2Bx6G0Dfejdq7CitC22%2BrjjpXbBL9RwgKuhfwRawKgpxZsp%2Bdb9usYduMZOvnAnMLAw8II%2BFS6nNtZFPsb%2BypQiNkxLhEC7zQC8nOZD6u7AOFxhyZiwYHKaiXDlzvC0EW92dUgvAQo1XLXdSlpQRTKlby5Uu3Fy2Ya7S50iD1X33rcllaHimsnaERbkcuIfH7K6qhSCPmjKdX67Scci5RSi2ib3NJLDs3yIDx1KmEokBUb5XAlcwtPpoaQMPLZVAh1S5EUhOZEW4vdV871EKcB6l%2FsyWM7wtW%2Foiqm7OODcELnORAtF%2BDGVAXYy3LrdJuzaG6cVsveGs96XdyBUpY8cMSMWHD3kfyM9A4lWjTwh%2Ba7EMbmHPzPxolACWneaAVRP%2BCt2dOCrCWVnfMPmLuMAGOqUBXgiBX0NwL3KWFq4KxUkO5BV0xzki90VeEtuvC3SP2rH4onla4eCdgGhw6knh4twqC8Ip0e3BVeL3h01%2BuaEj8gR1Foq7w%2B%2BcC62bq74khdTfpD7O8AWD3NFN0dAF0sUHmPh4ZwaMMSWu5uewQCxqNJQGBOcVFjXuPcB3EOCbqsYO471TIeL6fgaijVzXU6cZJhmmCkz6O7ZYA6inpH2xBXBNff5y&X-Amz-Signature=45a3c0d11413d1d8db33a9f2fa040b4c2960cecd59fe421494c711bed9fd80ac&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCN3GUO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6g3wPjunCw4UFaYje0kL4%2FVW4Hz6wumecGkRu5SPe%2FAiEA6iQvhSMAjppOwEF%2FAe5ZKgCKIOIQe7oCSu3GWaUK2Joq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDkSPjxkKFfnuwqsACrcA87z%2B5jD6XMIuiMI8vyO8bcCQMlufiAnw4mK6XMPmEq%2BYWzu7InezCNoNnyt4fhh%2FyTvoZzJ05Oz2VhuWBbaDIntWIEDOVEM6A9EJSXjA0zvuJocsrTmo0CNr%2FnaR9UG1EGKenIkZnb95AqXGZG%2B2dyqWsgxQIYDCuGObozEftgoCRZT5J3BWTi3Yu0zmZ3LgerADEU772nKFKdfes52pHR0Ak3emtyFv5TUhozMSCAF1%2Bx6G0Dfejdq7CitC22%2BrjjpXbBL9RwgKuhfwRawKgpxZsp%2Bdb9usYduMZOvnAnMLAw8II%2BFS6nNtZFPsb%2BypQiNkxLhEC7zQC8nOZD6u7AOFxhyZiwYHKaiXDlzvC0EW92dUgvAQo1XLXdSlpQRTKlby5Uu3Fy2Ya7S50iD1X33rcllaHimsnaERbkcuIfH7K6qhSCPmjKdX67Scci5RSi2ib3NJLDs3yIDx1KmEokBUb5XAlcwtPpoaQMPLZVAh1S5EUhOZEW4vdV871EKcB6l%2FsyWM7wtW%2Foiqm7OODcELnORAtF%2BDGVAXYy3LrdJuzaG6cVsveGs96XdyBUpY8cMSMWHD3kfyM9A4lWjTwh%2Ba7EMbmHPzPxolACWneaAVRP%2BCt2dOCrCWVnfMPmLuMAGOqUBXgiBX0NwL3KWFq4KxUkO5BV0xzki90VeEtuvC3SP2rH4onla4eCdgGhw6knh4twqC8Ip0e3BVeL3h01%2BuaEj8gR1Foq7w%2B%2BcC62bq74khdTfpD7O8AWD3NFN0dAF0sUHmPh4ZwaMMSWu5uewQCxqNJQGBOcVFjXuPcB3EOCbqsYO471TIeL6fgaijVzXU6cZJhmmCkz6O7ZYA6inpH2xBXBNff5y&X-Amz-Signature=5dc1e1fb571e7602e8a33c209bb80c6aa2e357f091603a5219943fa5b4c2d651&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCN3GUO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6g3wPjunCw4UFaYje0kL4%2FVW4Hz6wumecGkRu5SPe%2FAiEA6iQvhSMAjppOwEF%2FAe5ZKgCKIOIQe7oCSu3GWaUK2Joq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDkSPjxkKFfnuwqsACrcA87z%2B5jD6XMIuiMI8vyO8bcCQMlufiAnw4mK6XMPmEq%2BYWzu7InezCNoNnyt4fhh%2FyTvoZzJ05Oz2VhuWBbaDIntWIEDOVEM6A9EJSXjA0zvuJocsrTmo0CNr%2FnaR9UG1EGKenIkZnb95AqXGZG%2B2dyqWsgxQIYDCuGObozEftgoCRZT5J3BWTi3Yu0zmZ3LgerADEU772nKFKdfes52pHR0Ak3emtyFv5TUhozMSCAF1%2Bx6G0Dfejdq7CitC22%2BrjjpXbBL9RwgKuhfwRawKgpxZsp%2Bdb9usYduMZOvnAnMLAw8II%2BFS6nNtZFPsb%2BypQiNkxLhEC7zQC8nOZD6u7AOFxhyZiwYHKaiXDlzvC0EW92dUgvAQo1XLXdSlpQRTKlby5Uu3Fy2Ya7S50iD1X33rcllaHimsnaERbkcuIfH7K6qhSCPmjKdX67Scci5RSi2ib3NJLDs3yIDx1KmEokBUb5XAlcwtPpoaQMPLZVAh1S5EUhOZEW4vdV871EKcB6l%2FsyWM7wtW%2Foiqm7OODcELnORAtF%2BDGVAXYy3LrdJuzaG6cVsveGs96XdyBUpY8cMSMWHD3kfyM9A4lWjTwh%2Ba7EMbmHPzPxolACWneaAVRP%2BCt2dOCrCWVnfMPmLuMAGOqUBXgiBX0NwL3KWFq4KxUkO5BV0xzki90VeEtuvC3SP2rH4onla4eCdgGhw6knh4twqC8Ip0e3BVeL3h01%2BuaEj8gR1Foq7w%2B%2BcC62bq74khdTfpD7O8AWD3NFN0dAF0sUHmPh4ZwaMMSWu5uewQCxqNJQGBOcVFjXuPcB3EOCbqsYO471TIeL6fgaijVzXU6cZJhmmCkz6O7ZYA6inpH2xBXBNff5y&X-Amz-Signature=ae1aaf29e737d500aeb53b57bf1ec715446b5471e1b6a70df41c4c41eb065eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCN3GUO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6g3wPjunCw4UFaYje0kL4%2FVW4Hz6wumecGkRu5SPe%2FAiEA6iQvhSMAjppOwEF%2FAe5ZKgCKIOIQe7oCSu3GWaUK2Joq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDkSPjxkKFfnuwqsACrcA87z%2B5jD6XMIuiMI8vyO8bcCQMlufiAnw4mK6XMPmEq%2BYWzu7InezCNoNnyt4fhh%2FyTvoZzJ05Oz2VhuWBbaDIntWIEDOVEM6A9EJSXjA0zvuJocsrTmo0CNr%2FnaR9UG1EGKenIkZnb95AqXGZG%2B2dyqWsgxQIYDCuGObozEftgoCRZT5J3BWTi3Yu0zmZ3LgerADEU772nKFKdfes52pHR0Ak3emtyFv5TUhozMSCAF1%2Bx6G0Dfejdq7CitC22%2BrjjpXbBL9RwgKuhfwRawKgpxZsp%2Bdb9usYduMZOvnAnMLAw8II%2BFS6nNtZFPsb%2BypQiNkxLhEC7zQC8nOZD6u7AOFxhyZiwYHKaiXDlzvC0EW92dUgvAQo1XLXdSlpQRTKlby5Uu3Fy2Ya7S50iD1X33rcllaHimsnaERbkcuIfH7K6qhSCPmjKdX67Scci5RSi2ib3NJLDs3yIDx1KmEokBUb5XAlcwtPpoaQMPLZVAh1S5EUhOZEW4vdV871EKcB6l%2FsyWM7wtW%2Foiqm7OODcELnORAtF%2BDGVAXYy3LrdJuzaG6cVsveGs96XdyBUpY8cMSMWHD3kfyM9A4lWjTwh%2Ba7EMbmHPzPxolACWneaAVRP%2BCt2dOCrCWVnfMPmLuMAGOqUBXgiBX0NwL3KWFq4KxUkO5BV0xzki90VeEtuvC3SP2rH4onla4eCdgGhw6knh4twqC8Ip0e3BVeL3h01%2BuaEj8gR1Foq7w%2B%2BcC62bq74khdTfpD7O8AWD3NFN0dAF0sUHmPh4ZwaMMSWu5uewQCxqNJQGBOcVFjXuPcB3EOCbqsYO471TIeL6fgaijVzXU6cZJhmmCkz6O7ZYA6inpH2xBXBNff5y&X-Amz-Signature=48981e622792f8756c25f473b2e066fff09a81fb3a966d6aa48d75fef7523d64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCN3GUO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6g3wPjunCw4UFaYje0kL4%2FVW4Hz6wumecGkRu5SPe%2FAiEA6iQvhSMAjppOwEF%2FAe5ZKgCKIOIQe7oCSu3GWaUK2Joq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDkSPjxkKFfnuwqsACrcA87z%2B5jD6XMIuiMI8vyO8bcCQMlufiAnw4mK6XMPmEq%2BYWzu7InezCNoNnyt4fhh%2FyTvoZzJ05Oz2VhuWBbaDIntWIEDOVEM6A9EJSXjA0zvuJocsrTmo0CNr%2FnaR9UG1EGKenIkZnb95AqXGZG%2B2dyqWsgxQIYDCuGObozEftgoCRZT5J3BWTi3Yu0zmZ3LgerADEU772nKFKdfes52pHR0Ak3emtyFv5TUhozMSCAF1%2Bx6G0Dfejdq7CitC22%2BrjjpXbBL9RwgKuhfwRawKgpxZsp%2Bdb9usYduMZOvnAnMLAw8II%2BFS6nNtZFPsb%2BypQiNkxLhEC7zQC8nOZD6u7AOFxhyZiwYHKaiXDlzvC0EW92dUgvAQo1XLXdSlpQRTKlby5Uu3Fy2Ya7S50iD1X33rcllaHimsnaERbkcuIfH7K6qhSCPmjKdX67Scci5RSi2ib3NJLDs3yIDx1KmEokBUb5XAlcwtPpoaQMPLZVAh1S5EUhOZEW4vdV871EKcB6l%2FsyWM7wtW%2Foiqm7OODcELnORAtF%2BDGVAXYy3LrdJuzaG6cVsveGs96XdyBUpY8cMSMWHD3kfyM9A4lWjTwh%2Ba7EMbmHPzPxolACWneaAVRP%2BCt2dOCrCWVnfMPmLuMAGOqUBXgiBX0NwL3KWFq4KxUkO5BV0xzki90VeEtuvC3SP2rH4onla4eCdgGhw6knh4twqC8Ip0e3BVeL3h01%2BuaEj8gR1Foq7w%2B%2BcC62bq74khdTfpD7O8AWD3NFN0dAF0sUHmPh4ZwaMMSWu5uewQCxqNJQGBOcVFjXuPcB3EOCbqsYO471TIeL6fgaijVzXU6cZJhmmCkz6O7ZYA6inpH2xBXBNff5y&X-Amz-Signature=5ef061c4420429d70faef197eace660badf22b2c82edd4a833cadbefc166447e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCN3GUO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6g3wPjunCw4UFaYje0kL4%2FVW4Hz6wumecGkRu5SPe%2FAiEA6iQvhSMAjppOwEF%2FAe5ZKgCKIOIQe7oCSu3GWaUK2Joq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDkSPjxkKFfnuwqsACrcA87z%2B5jD6XMIuiMI8vyO8bcCQMlufiAnw4mK6XMPmEq%2BYWzu7InezCNoNnyt4fhh%2FyTvoZzJ05Oz2VhuWBbaDIntWIEDOVEM6A9EJSXjA0zvuJocsrTmo0CNr%2FnaR9UG1EGKenIkZnb95AqXGZG%2B2dyqWsgxQIYDCuGObozEftgoCRZT5J3BWTi3Yu0zmZ3LgerADEU772nKFKdfes52pHR0Ak3emtyFv5TUhozMSCAF1%2Bx6G0Dfejdq7CitC22%2BrjjpXbBL9RwgKuhfwRawKgpxZsp%2Bdb9usYduMZOvnAnMLAw8II%2BFS6nNtZFPsb%2BypQiNkxLhEC7zQC8nOZD6u7AOFxhyZiwYHKaiXDlzvC0EW92dUgvAQo1XLXdSlpQRTKlby5Uu3Fy2Ya7S50iD1X33rcllaHimsnaERbkcuIfH7K6qhSCPmjKdX67Scci5RSi2ib3NJLDs3yIDx1KmEokBUb5XAlcwtPpoaQMPLZVAh1S5EUhOZEW4vdV871EKcB6l%2FsyWM7wtW%2Foiqm7OODcELnORAtF%2BDGVAXYy3LrdJuzaG6cVsveGs96XdyBUpY8cMSMWHD3kfyM9A4lWjTwh%2Ba7EMbmHPzPxolACWneaAVRP%2BCt2dOCrCWVnfMPmLuMAGOqUBXgiBX0NwL3KWFq4KxUkO5BV0xzki90VeEtuvC3SP2rH4onla4eCdgGhw6knh4twqC8Ip0e3BVeL3h01%2BuaEj8gR1Foq7w%2B%2BcC62bq74khdTfpD7O8AWD3NFN0dAF0sUHmPh4ZwaMMSWu5uewQCxqNJQGBOcVFjXuPcB3EOCbqsYO471TIeL6fgaijVzXU6cZJhmmCkz6O7ZYA6inpH2xBXBNff5y&X-Amz-Signature=6e14cc6031bcac124cc5c8bbf2e90051b2649e82a53b5d4d95fc40832282a8aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
