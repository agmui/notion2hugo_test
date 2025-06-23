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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKD3OBJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBWzetipVfgOH9%2BFCcPaog0hK5BQFhNw8AAvrETTYDY0AiAAz94ItHfdcYqM5%2BtaO2%2B8KHlQobfiypcY5nsbO7AUpir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM3cXTu1Lilxpuhpo2KtwDcEsWzu8O0YVJ3lw82gFQIoCSibSdsL35V74sBI8MAk4hWOWYaFJ8ENebqN1C6KQuScSr7fLdcBYay2ke2vmVP6XYKF8LLtrQqHDU0ILzYwC%2BCqRKRntAU%2Br7k08I1Ja0t6xI6qMRnJ6CcloXxTSi5RB31vbLT9pfYY3Baa3eAnKdAhLv8cxOjpdTWQIg34psRrNsnrpxyxKveMzW%2FY6KlT2yjSQNH0%2B2SV%2FX5YKQMYyMTgzchR2tieFvCk36KbmTTpc5eWTeCQd98%2BshWF%2FRft%2BweA%2FcZ7H2vs1hKrBjbFpmjlE6I6u5m9fIXONQI5yQb%2Fx%2Bhr37fSmSMxpeoEaucu7S7sZhnktruMMBDEsOnTyYYQz7K%2FOphkgUxs7%2FQbKumgfiUS9ynRRfVukEhFrrs4KVSjXfYcfsEMl3GGkrXMewOM4E9fH4p2W333pkkyjt9NDks5KrECqnmBETC4H0m3s%2B39ni0pg2cr0DYM9x41QymWz%2FzLxEDaYAfyyQxuwJ2l%2FhrXGInYjEopL8eoxmdHkXoQAfBZnlHz9It2ghoMAajHrtd94LRNy0ZmYiR6k7zVg4pFM8wsPrxrlHuWtZ4wYwp%2FHgoS6lcBFzapr9jIgOJmlcMIWcrZulFOow%2B4bkwgY6pgE1352lixNCxlol%2B44FqCluKGoaF3oczphWvGXbEgDXvKj3CKyDAVeNMMXGKz%2BXMZMIr6O5Jluk%2B83wlsohtwcn11sacDhIcwhu3pg4wCHa00OR%2BuchEvbwKWr2E2kH%2FiResDgbLtXPpwSjHhBFakEViITTaf%2FxYp2HWZuKjUQE6g7d3kGkxqujkt9fwnsyidvB5PV7mqixBKcEEZOqcXqT2ZGOtOLA&X-Amz-Signature=d308f409e3aa764be1c6d2b973fb7b4c61cf39c0cfd0f8b804803e60d1cf9768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKD3OBJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBWzetipVfgOH9%2BFCcPaog0hK5BQFhNw8AAvrETTYDY0AiAAz94ItHfdcYqM5%2BtaO2%2B8KHlQobfiypcY5nsbO7AUpir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM3cXTu1Lilxpuhpo2KtwDcEsWzu8O0YVJ3lw82gFQIoCSibSdsL35V74sBI8MAk4hWOWYaFJ8ENebqN1C6KQuScSr7fLdcBYay2ke2vmVP6XYKF8LLtrQqHDU0ILzYwC%2BCqRKRntAU%2Br7k08I1Ja0t6xI6qMRnJ6CcloXxTSi5RB31vbLT9pfYY3Baa3eAnKdAhLv8cxOjpdTWQIg34psRrNsnrpxyxKveMzW%2FY6KlT2yjSQNH0%2B2SV%2FX5YKQMYyMTgzchR2tieFvCk36KbmTTpc5eWTeCQd98%2BshWF%2FRft%2BweA%2FcZ7H2vs1hKrBjbFpmjlE6I6u5m9fIXONQI5yQb%2Fx%2Bhr37fSmSMxpeoEaucu7S7sZhnktruMMBDEsOnTyYYQz7K%2FOphkgUxs7%2FQbKumgfiUS9ynRRfVukEhFrrs4KVSjXfYcfsEMl3GGkrXMewOM4E9fH4p2W333pkkyjt9NDks5KrECqnmBETC4H0m3s%2B39ni0pg2cr0DYM9x41QymWz%2FzLxEDaYAfyyQxuwJ2l%2FhrXGInYjEopL8eoxmdHkXoQAfBZnlHz9It2ghoMAajHrtd94LRNy0ZmYiR6k7zVg4pFM8wsPrxrlHuWtZ4wYwp%2FHgoS6lcBFzapr9jIgOJmlcMIWcrZulFOow%2B4bkwgY6pgE1352lixNCxlol%2B44FqCluKGoaF3oczphWvGXbEgDXvKj3CKyDAVeNMMXGKz%2BXMZMIr6O5Jluk%2B83wlsohtwcn11sacDhIcwhu3pg4wCHa00OR%2BuchEvbwKWr2E2kH%2FiResDgbLtXPpwSjHhBFakEViITTaf%2FxYp2HWZuKjUQE6g7d3kGkxqujkt9fwnsyidvB5PV7mqixBKcEEZOqcXqT2ZGOtOLA&X-Amz-Signature=61b5b74f6765ea3a7fe6c4004c09a41e96ba40710b278ab50d18fd4a62c86e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKD3OBJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBWzetipVfgOH9%2BFCcPaog0hK5BQFhNw8AAvrETTYDY0AiAAz94ItHfdcYqM5%2BtaO2%2B8KHlQobfiypcY5nsbO7AUpir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM3cXTu1Lilxpuhpo2KtwDcEsWzu8O0YVJ3lw82gFQIoCSibSdsL35V74sBI8MAk4hWOWYaFJ8ENebqN1C6KQuScSr7fLdcBYay2ke2vmVP6XYKF8LLtrQqHDU0ILzYwC%2BCqRKRntAU%2Br7k08I1Ja0t6xI6qMRnJ6CcloXxTSi5RB31vbLT9pfYY3Baa3eAnKdAhLv8cxOjpdTWQIg34psRrNsnrpxyxKveMzW%2FY6KlT2yjSQNH0%2B2SV%2FX5YKQMYyMTgzchR2tieFvCk36KbmTTpc5eWTeCQd98%2BshWF%2FRft%2BweA%2FcZ7H2vs1hKrBjbFpmjlE6I6u5m9fIXONQI5yQb%2Fx%2Bhr37fSmSMxpeoEaucu7S7sZhnktruMMBDEsOnTyYYQz7K%2FOphkgUxs7%2FQbKumgfiUS9ynRRfVukEhFrrs4KVSjXfYcfsEMl3GGkrXMewOM4E9fH4p2W333pkkyjt9NDks5KrECqnmBETC4H0m3s%2B39ni0pg2cr0DYM9x41QymWz%2FzLxEDaYAfyyQxuwJ2l%2FhrXGInYjEopL8eoxmdHkXoQAfBZnlHz9It2ghoMAajHrtd94LRNy0ZmYiR6k7zVg4pFM8wsPrxrlHuWtZ4wYwp%2FHgoS6lcBFzapr9jIgOJmlcMIWcrZulFOow%2B4bkwgY6pgE1352lixNCxlol%2B44FqCluKGoaF3oczphWvGXbEgDXvKj3CKyDAVeNMMXGKz%2BXMZMIr6O5Jluk%2B83wlsohtwcn11sacDhIcwhu3pg4wCHa00OR%2BuchEvbwKWr2E2kH%2FiResDgbLtXPpwSjHhBFakEViITTaf%2FxYp2HWZuKjUQE6g7d3kGkxqujkt9fwnsyidvB5PV7mqixBKcEEZOqcXqT2ZGOtOLA&X-Amz-Signature=59345ea77ec72ef5d6762ba5a3e1faff1510e92788b361ae9b0dbbf99d216f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKD3OBJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBWzetipVfgOH9%2BFCcPaog0hK5BQFhNw8AAvrETTYDY0AiAAz94ItHfdcYqM5%2BtaO2%2B8KHlQobfiypcY5nsbO7AUpir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM3cXTu1Lilxpuhpo2KtwDcEsWzu8O0YVJ3lw82gFQIoCSibSdsL35V74sBI8MAk4hWOWYaFJ8ENebqN1C6KQuScSr7fLdcBYay2ke2vmVP6XYKF8LLtrQqHDU0ILzYwC%2BCqRKRntAU%2Br7k08I1Ja0t6xI6qMRnJ6CcloXxTSi5RB31vbLT9pfYY3Baa3eAnKdAhLv8cxOjpdTWQIg34psRrNsnrpxyxKveMzW%2FY6KlT2yjSQNH0%2B2SV%2FX5YKQMYyMTgzchR2tieFvCk36KbmTTpc5eWTeCQd98%2BshWF%2FRft%2BweA%2FcZ7H2vs1hKrBjbFpmjlE6I6u5m9fIXONQI5yQb%2Fx%2Bhr37fSmSMxpeoEaucu7S7sZhnktruMMBDEsOnTyYYQz7K%2FOphkgUxs7%2FQbKumgfiUS9ynRRfVukEhFrrs4KVSjXfYcfsEMl3GGkrXMewOM4E9fH4p2W333pkkyjt9NDks5KrECqnmBETC4H0m3s%2B39ni0pg2cr0DYM9x41QymWz%2FzLxEDaYAfyyQxuwJ2l%2FhrXGInYjEopL8eoxmdHkXoQAfBZnlHz9It2ghoMAajHrtd94LRNy0ZmYiR6k7zVg4pFM8wsPrxrlHuWtZ4wYwp%2FHgoS6lcBFzapr9jIgOJmlcMIWcrZulFOow%2B4bkwgY6pgE1352lixNCxlol%2B44FqCluKGoaF3oczphWvGXbEgDXvKj3CKyDAVeNMMXGKz%2BXMZMIr6O5Jluk%2B83wlsohtwcn11sacDhIcwhu3pg4wCHa00OR%2BuchEvbwKWr2E2kH%2FiResDgbLtXPpwSjHhBFakEViITTaf%2FxYp2HWZuKjUQE6g7d3kGkxqujkt9fwnsyidvB5PV7mqixBKcEEZOqcXqT2ZGOtOLA&X-Amz-Signature=7faa74b512b87cbaf805b4754c006dc52d774ec2d595e44d1659594ae1ad4aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKD3OBJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBWzetipVfgOH9%2BFCcPaog0hK5BQFhNw8AAvrETTYDY0AiAAz94ItHfdcYqM5%2BtaO2%2B8KHlQobfiypcY5nsbO7AUpir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM3cXTu1Lilxpuhpo2KtwDcEsWzu8O0YVJ3lw82gFQIoCSibSdsL35V74sBI8MAk4hWOWYaFJ8ENebqN1C6KQuScSr7fLdcBYay2ke2vmVP6XYKF8LLtrQqHDU0ILzYwC%2BCqRKRntAU%2Br7k08I1Ja0t6xI6qMRnJ6CcloXxTSi5RB31vbLT9pfYY3Baa3eAnKdAhLv8cxOjpdTWQIg34psRrNsnrpxyxKveMzW%2FY6KlT2yjSQNH0%2B2SV%2FX5YKQMYyMTgzchR2tieFvCk36KbmTTpc5eWTeCQd98%2BshWF%2FRft%2BweA%2FcZ7H2vs1hKrBjbFpmjlE6I6u5m9fIXONQI5yQb%2Fx%2Bhr37fSmSMxpeoEaucu7S7sZhnktruMMBDEsOnTyYYQz7K%2FOphkgUxs7%2FQbKumgfiUS9ynRRfVukEhFrrs4KVSjXfYcfsEMl3GGkrXMewOM4E9fH4p2W333pkkyjt9NDks5KrECqnmBETC4H0m3s%2B39ni0pg2cr0DYM9x41QymWz%2FzLxEDaYAfyyQxuwJ2l%2FhrXGInYjEopL8eoxmdHkXoQAfBZnlHz9It2ghoMAajHrtd94LRNy0ZmYiR6k7zVg4pFM8wsPrxrlHuWtZ4wYwp%2FHgoS6lcBFzapr9jIgOJmlcMIWcrZulFOow%2B4bkwgY6pgE1352lixNCxlol%2B44FqCluKGoaF3oczphWvGXbEgDXvKj3CKyDAVeNMMXGKz%2BXMZMIr6O5Jluk%2B83wlsohtwcn11sacDhIcwhu3pg4wCHa00OR%2BuchEvbwKWr2E2kH%2FiResDgbLtXPpwSjHhBFakEViITTaf%2FxYp2HWZuKjUQE6g7d3kGkxqujkt9fwnsyidvB5PV7mqixBKcEEZOqcXqT2ZGOtOLA&X-Amz-Signature=bdd2c31b844fa7d91def259d33226a1a76c23c04c7508bd3467819f9521119e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKD3OBJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBWzetipVfgOH9%2BFCcPaog0hK5BQFhNw8AAvrETTYDY0AiAAz94ItHfdcYqM5%2BtaO2%2B8KHlQobfiypcY5nsbO7AUpir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM3cXTu1Lilxpuhpo2KtwDcEsWzu8O0YVJ3lw82gFQIoCSibSdsL35V74sBI8MAk4hWOWYaFJ8ENebqN1C6KQuScSr7fLdcBYay2ke2vmVP6XYKF8LLtrQqHDU0ILzYwC%2BCqRKRntAU%2Br7k08I1Ja0t6xI6qMRnJ6CcloXxTSi5RB31vbLT9pfYY3Baa3eAnKdAhLv8cxOjpdTWQIg34psRrNsnrpxyxKveMzW%2FY6KlT2yjSQNH0%2B2SV%2FX5YKQMYyMTgzchR2tieFvCk36KbmTTpc5eWTeCQd98%2BshWF%2FRft%2BweA%2FcZ7H2vs1hKrBjbFpmjlE6I6u5m9fIXONQI5yQb%2Fx%2Bhr37fSmSMxpeoEaucu7S7sZhnktruMMBDEsOnTyYYQz7K%2FOphkgUxs7%2FQbKumgfiUS9ynRRfVukEhFrrs4KVSjXfYcfsEMl3GGkrXMewOM4E9fH4p2W333pkkyjt9NDks5KrECqnmBETC4H0m3s%2B39ni0pg2cr0DYM9x41QymWz%2FzLxEDaYAfyyQxuwJ2l%2FhrXGInYjEopL8eoxmdHkXoQAfBZnlHz9It2ghoMAajHrtd94LRNy0ZmYiR6k7zVg4pFM8wsPrxrlHuWtZ4wYwp%2FHgoS6lcBFzapr9jIgOJmlcMIWcrZulFOow%2B4bkwgY6pgE1352lixNCxlol%2B44FqCluKGoaF3oczphWvGXbEgDXvKj3CKyDAVeNMMXGKz%2BXMZMIr6O5Jluk%2B83wlsohtwcn11sacDhIcwhu3pg4wCHa00OR%2BuchEvbwKWr2E2kH%2FiResDgbLtXPpwSjHhBFakEViITTaf%2FxYp2HWZuKjUQE6g7d3kGkxqujkt9fwnsyidvB5PV7mqixBKcEEZOqcXqT2ZGOtOLA&X-Amz-Signature=aafee5399cadcd64c8159cd443b72466c866c534cbc71c35fe6b0ad805e81a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKD3OBJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBWzetipVfgOH9%2BFCcPaog0hK5BQFhNw8AAvrETTYDY0AiAAz94ItHfdcYqM5%2BtaO2%2B8KHlQobfiypcY5nsbO7AUpir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM3cXTu1Lilxpuhpo2KtwDcEsWzu8O0YVJ3lw82gFQIoCSibSdsL35V74sBI8MAk4hWOWYaFJ8ENebqN1C6KQuScSr7fLdcBYay2ke2vmVP6XYKF8LLtrQqHDU0ILzYwC%2BCqRKRntAU%2Br7k08I1Ja0t6xI6qMRnJ6CcloXxTSi5RB31vbLT9pfYY3Baa3eAnKdAhLv8cxOjpdTWQIg34psRrNsnrpxyxKveMzW%2FY6KlT2yjSQNH0%2B2SV%2FX5YKQMYyMTgzchR2tieFvCk36KbmTTpc5eWTeCQd98%2BshWF%2FRft%2BweA%2FcZ7H2vs1hKrBjbFpmjlE6I6u5m9fIXONQI5yQb%2Fx%2Bhr37fSmSMxpeoEaucu7S7sZhnktruMMBDEsOnTyYYQz7K%2FOphkgUxs7%2FQbKumgfiUS9ynRRfVukEhFrrs4KVSjXfYcfsEMl3GGkrXMewOM4E9fH4p2W333pkkyjt9NDks5KrECqnmBETC4H0m3s%2B39ni0pg2cr0DYM9x41QymWz%2FzLxEDaYAfyyQxuwJ2l%2FhrXGInYjEopL8eoxmdHkXoQAfBZnlHz9It2ghoMAajHrtd94LRNy0ZmYiR6k7zVg4pFM8wsPrxrlHuWtZ4wYwp%2FHgoS6lcBFzapr9jIgOJmlcMIWcrZulFOow%2B4bkwgY6pgE1352lixNCxlol%2B44FqCluKGoaF3oczphWvGXbEgDXvKj3CKyDAVeNMMXGKz%2BXMZMIr6O5Jluk%2B83wlsohtwcn11sacDhIcwhu3pg4wCHa00OR%2BuchEvbwKWr2E2kH%2FiResDgbLtXPpwSjHhBFakEViITTaf%2FxYp2HWZuKjUQE6g7d3kGkxqujkt9fwnsyidvB5PV7mqixBKcEEZOqcXqT2ZGOtOLA&X-Amz-Signature=4aadc3bdffc7eca50f266b5767d40e8425b7cac369e9a520f43d726939855bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKD3OBJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBWzetipVfgOH9%2BFCcPaog0hK5BQFhNw8AAvrETTYDY0AiAAz94ItHfdcYqM5%2BtaO2%2B8KHlQobfiypcY5nsbO7AUpir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM3cXTu1Lilxpuhpo2KtwDcEsWzu8O0YVJ3lw82gFQIoCSibSdsL35V74sBI8MAk4hWOWYaFJ8ENebqN1C6KQuScSr7fLdcBYay2ke2vmVP6XYKF8LLtrQqHDU0ILzYwC%2BCqRKRntAU%2Br7k08I1Ja0t6xI6qMRnJ6CcloXxTSi5RB31vbLT9pfYY3Baa3eAnKdAhLv8cxOjpdTWQIg34psRrNsnrpxyxKveMzW%2FY6KlT2yjSQNH0%2B2SV%2FX5YKQMYyMTgzchR2tieFvCk36KbmTTpc5eWTeCQd98%2BshWF%2FRft%2BweA%2FcZ7H2vs1hKrBjbFpmjlE6I6u5m9fIXONQI5yQb%2Fx%2Bhr37fSmSMxpeoEaucu7S7sZhnktruMMBDEsOnTyYYQz7K%2FOphkgUxs7%2FQbKumgfiUS9ynRRfVukEhFrrs4KVSjXfYcfsEMl3GGkrXMewOM4E9fH4p2W333pkkyjt9NDks5KrECqnmBETC4H0m3s%2B39ni0pg2cr0DYM9x41QymWz%2FzLxEDaYAfyyQxuwJ2l%2FhrXGInYjEopL8eoxmdHkXoQAfBZnlHz9It2ghoMAajHrtd94LRNy0ZmYiR6k7zVg4pFM8wsPrxrlHuWtZ4wYwp%2FHgoS6lcBFzapr9jIgOJmlcMIWcrZulFOow%2B4bkwgY6pgE1352lixNCxlol%2B44FqCluKGoaF3oczphWvGXbEgDXvKj3CKyDAVeNMMXGKz%2BXMZMIr6O5Jluk%2B83wlsohtwcn11sacDhIcwhu3pg4wCHa00OR%2BuchEvbwKWr2E2kH%2FiResDgbLtXPpwSjHhBFakEViITTaf%2FxYp2HWZuKjUQE6g7d3kGkxqujkt9fwnsyidvB5PV7mqixBKcEEZOqcXqT2ZGOtOLA&X-Amz-Signature=e29de5369c0e360bcd42a3403cd3f9f8d23c292644cd06d8692d1cfd6e831354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
