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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2L6XHR%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3Q8mHxZZ7vWh%2BMenXE2QxArgvMD%2BYS5IDQzckRxGZQIgCDOiED%2BQEDjk5RBDzobQwGAFdAUuDAUt9yfboRfYngUqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH8Z06bDZyQgCwTUCrcA25eWIYXXrjyH7K5Kjc04fk4KHEoaH1DHoJOXx8UwuU%2ForHkPXHO2oWF0ntj5JYfIEpz3sNusXSvBxS7bcMDTfF261UzkvzxLimyq%2BLshd5121V9ecOcMK2l1GyCv9d5ZGor2epU6RpPO7MaUrwWk9zo9hbkO1PB7T3uD7vd6y3fOkdak7%2Fa5m1dyOUGZRoFn22jygrt3e3ob2tiKxix3HOgbQn3VoM3Yed0DJ8kOzYRqhvlJFwoicwWNnY5TB0x4p5aSm9Na9C3oGcMSIGD7Qr%2F3mhvPCKjzMsogDPfwDuViTOo8Vrf9R1uN0oVqNLlK3wvxyZf8j9MSVXZC%2FMCpZkc7B%2FimpOuTQBvkBya28ILrRoYy8e7%2FsK3Ee0wVZiXJmAjGW0%2F813AekKIHqF%2FXmXyN0cOt4y%2BzNa1EDye%2F0i%2F1NM3QEVwbNi%2BUP9Nf7BHnmWhxQTGPIubD9dkuPYpbnKLC2kScRtuU896fGeP4i6rG8nfiQCe54V7QxPbtS48V0Jtb0qq9YUl4A37saiTRSm8o%2FPituVkEk6JKvoCcUYTt3s6PZwq22%2FNU32oNZqAsli1s%2BKYaoz4fgtHnO1ZKQeld9wCOvRvQcd4LUSD%2B6u8HbBhTR9sxJd%2F9%2FYhMLDehb8GOqUB2lprbgwpcsgPmP3K6re%2B1LiZFO3QUFVut9af4SHTBEshHvbaWA7XBPqZ6V5t6C%2F4EUV8hxylNoolY8%2BWcvTzM6oE3EV9q%2BUG3F2v8XV7nuG2Z4pE%2FSi1M4fVvWtStIOTzQ1mO51XI6h5b7PxSVngmeTvvXcGkupl7I6yWZmwsqEaecn%2FRmEBpRMOFwf%2BKEWy4PbTxMOIsbJGjyQa2Co3rkGSHvJQ&X-Amz-Signature=8151a6504b410af340ae6e4f46dc1d08298572234d99f42c7b114baeb151b205&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2L6XHR%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3Q8mHxZZ7vWh%2BMenXE2QxArgvMD%2BYS5IDQzckRxGZQIgCDOiED%2BQEDjk5RBDzobQwGAFdAUuDAUt9yfboRfYngUqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH8Z06bDZyQgCwTUCrcA25eWIYXXrjyH7K5Kjc04fk4KHEoaH1DHoJOXx8UwuU%2ForHkPXHO2oWF0ntj5JYfIEpz3sNusXSvBxS7bcMDTfF261UzkvzxLimyq%2BLshd5121V9ecOcMK2l1GyCv9d5ZGor2epU6RpPO7MaUrwWk9zo9hbkO1PB7T3uD7vd6y3fOkdak7%2Fa5m1dyOUGZRoFn22jygrt3e3ob2tiKxix3HOgbQn3VoM3Yed0DJ8kOzYRqhvlJFwoicwWNnY5TB0x4p5aSm9Na9C3oGcMSIGD7Qr%2F3mhvPCKjzMsogDPfwDuViTOo8Vrf9R1uN0oVqNLlK3wvxyZf8j9MSVXZC%2FMCpZkc7B%2FimpOuTQBvkBya28ILrRoYy8e7%2FsK3Ee0wVZiXJmAjGW0%2F813AekKIHqF%2FXmXyN0cOt4y%2BzNa1EDye%2F0i%2F1NM3QEVwbNi%2BUP9Nf7BHnmWhxQTGPIubD9dkuPYpbnKLC2kScRtuU896fGeP4i6rG8nfiQCe54V7QxPbtS48V0Jtb0qq9YUl4A37saiTRSm8o%2FPituVkEk6JKvoCcUYTt3s6PZwq22%2FNU32oNZqAsli1s%2BKYaoz4fgtHnO1ZKQeld9wCOvRvQcd4LUSD%2B6u8HbBhTR9sxJd%2F9%2FYhMLDehb8GOqUB2lprbgwpcsgPmP3K6re%2B1LiZFO3QUFVut9af4SHTBEshHvbaWA7XBPqZ6V5t6C%2F4EUV8hxylNoolY8%2BWcvTzM6oE3EV9q%2BUG3F2v8XV7nuG2Z4pE%2FSi1M4fVvWtStIOTzQ1mO51XI6h5b7PxSVngmeTvvXcGkupl7I6yWZmwsqEaecn%2FRmEBpRMOFwf%2BKEWy4PbTxMOIsbJGjyQa2Co3rkGSHvJQ&X-Amz-Signature=beef3c28127b1834fac4600ac1c312152339ded754bb45abf42fda3693b9713f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2L6XHR%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3Q8mHxZZ7vWh%2BMenXE2QxArgvMD%2BYS5IDQzckRxGZQIgCDOiED%2BQEDjk5RBDzobQwGAFdAUuDAUt9yfboRfYngUqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH8Z06bDZyQgCwTUCrcA25eWIYXXrjyH7K5Kjc04fk4KHEoaH1DHoJOXx8UwuU%2ForHkPXHO2oWF0ntj5JYfIEpz3sNusXSvBxS7bcMDTfF261UzkvzxLimyq%2BLshd5121V9ecOcMK2l1GyCv9d5ZGor2epU6RpPO7MaUrwWk9zo9hbkO1PB7T3uD7vd6y3fOkdak7%2Fa5m1dyOUGZRoFn22jygrt3e3ob2tiKxix3HOgbQn3VoM3Yed0DJ8kOzYRqhvlJFwoicwWNnY5TB0x4p5aSm9Na9C3oGcMSIGD7Qr%2F3mhvPCKjzMsogDPfwDuViTOo8Vrf9R1uN0oVqNLlK3wvxyZf8j9MSVXZC%2FMCpZkc7B%2FimpOuTQBvkBya28ILrRoYy8e7%2FsK3Ee0wVZiXJmAjGW0%2F813AekKIHqF%2FXmXyN0cOt4y%2BzNa1EDye%2F0i%2F1NM3QEVwbNi%2BUP9Nf7BHnmWhxQTGPIubD9dkuPYpbnKLC2kScRtuU896fGeP4i6rG8nfiQCe54V7QxPbtS48V0Jtb0qq9YUl4A37saiTRSm8o%2FPituVkEk6JKvoCcUYTt3s6PZwq22%2FNU32oNZqAsli1s%2BKYaoz4fgtHnO1ZKQeld9wCOvRvQcd4LUSD%2B6u8HbBhTR9sxJd%2F9%2FYhMLDehb8GOqUB2lprbgwpcsgPmP3K6re%2B1LiZFO3QUFVut9af4SHTBEshHvbaWA7XBPqZ6V5t6C%2F4EUV8hxylNoolY8%2BWcvTzM6oE3EV9q%2BUG3F2v8XV7nuG2Z4pE%2FSi1M4fVvWtStIOTzQ1mO51XI6h5b7PxSVngmeTvvXcGkupl7I6yWZmwsqEaecn%2FRmEBpRMOFwf%2BKEWy4PbTxMOIsbJGjyQa2Co3rkGSHvJQ&X-Amz-Signature=77a031653ecde13c3e9d58c03af5b724c5de8c05253a0651c0a3cc0da4c3a7cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2L6XHR%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3Q8mHxZZ7vWh%2BMenXE2QxArgvMD%2BYS5IDQzckRxGZQIgCDOiED%2BQEDjk5RBDzobQwGAFdAUuDAUt9yfboRfYngUqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH8Z06bDZyQgCwTUCrcA25eWIYXXrjyH7K5Kjc04fk4KHEoaH1DHoJOXx8UwuU%2ForHkPXHO2oWF0ntj5JYfIEpz3sNusXSvBxS7bcMDTfF261UzkvzxLimyq%2BLshd5121V9ecOcMK2l1GyCv9d5ZGor2epU6RpPO7MaUrwWk9zo9hbkO1PB7T3uD7vd6y3fOkdak7%2Fa5m1dyOUGZRoFn22jygrt3e3ob2tiKxix3HOgbQn3VoM3Yed0DJ8kOzYRqhvlJFwoicwWNnY5TB0x4p5aSm9Na9C3oGcMSIGD7Qr%2F3mhvPCKjzMsogDPfwDuViTOo8Vrf9R1uN0oVqNLlK3wvxyZf8j9MSVXZC%2FMCpZkc7B%2FimpOuTQBvkBya28ILrRoYy8e7%2FsK3Ee0wVZiXJmAjGW0%2F813AekKIHqF%2FXmXyN0cOt4y%2BzNa1EDye%2F0i%2F1NM3QEVwbNi%2BUP9Nf7BHnmWhxQTGPIubD9dkuPYpbnKLC2kScRtuU896fGeP4i6rG8nfiQCe54V7QxPbtS48V0Jtb0qq9YUl4A37saiTRSm8o%2FPituVkEk6JKvoCcUYTt3s6PZwq22%2FNU32oNZqAsli1s%2BKYaoz4fgtHnO1ZKQeld9wCOvRvQcd4LUSD%2B6u8HbBhTR9sxJd%2F9%2FYhMLDehb8GOqUB2lprbgwpcsgPmP3K6re%2B1LiZFO3QUFVut9af4SHTBEshHvbaWA7XBPqZ6V5t6C%2F4EUV8hxylNoolY8%2BWcvTzM6oE3EV9q%2BUG3F2v8XV7nuG2Z4pE%2FSi1M4fVvWtStIOTzQ1mO51XI6h5b7PxSVngmeTvvXcGkupl7I6yWZmwsqEaecn%2FRmEBpRMOFwf%2BKEWy4PbTxMOIsbJGjyQa2Co3rkGSHvJQ&X-Amz-Signature=4a34694d83387652e3c3ff7b6e5ba60b06d3b940f791746a1f7bca895cb01e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2L6XHR%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3Q8mHxZZ7vWh%2BMenXE2QxArgvMD%2BYS5IDQzckRxGZQIgCDOiED%2BQEDjk5RBDzobQwGAFdAUuDAUt9yfboRfYngUqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH8Z06bDZyQgCwTUCrcA25eWIYXXrjyH7K5Kjc04fk4KHEoaH1DHoJOXx8UwuU%2ForHkPXHO2oWF0ntj5JYfIEpz3sNusXSvBxS7bcMDTfF261UzkvzxLimyq%2BLshd5121V9ecOcMK2l1GyCv9d5ZGor2epU6RpPO7MaUrwWk9zo9hbkO1PB7T3uD7vd6y3fOkdak7%2Fa5m1dyOUGZRoFn22jygrt3e3ob2tiKxix3HOgbQn3VoM3Yed0DJ8kOzYRqhvlJFwoicwWNnY5TB0x4p5aSm9Na9C3oGcMSIGD7Qr%2F3mhvPCKjzMsogDPfwDuViTOo8Vrf9R1uN0oVqNLlK3wvxyZf8j9MSVXZC%2FMCpZkc7B%2FimpOuTQBvkBya28ILrRoYy8e7%2FsK3Ee0wVZiXJmAjGW0%2F813AekKIHqF%2FXmXyN0cOt4y%2BzNa1EDye%2F0i%2F1NM3QEVwbNi%2BUP9Nf7BHnmWhxQTGPIubD9dkuPYpbnKLC2kScRtuU896fGeP4i6rG8nfiQCe54V7QxPbtS48V0Jtb0qq9YUl4A37saiTRSm8o%2FPituVkEk6JKvoCcUYTt3s6PZwq22%2FNU32oNZqAsli1s%2BKYaoz4fgtHnO1ZKQeld9wCOvRvQcd4LUSD%2B6u8HbBhTR9sxJd%2F9%2FYhMLDehb8GOqUB2lprbgwpcsgPmP3K6re%2B1LiZFO3QUFVut9af4SHTBEshHvbaWA7XBPqZ6V5t6C%2F4EUV8hxylNoolY8%2BWcvTzM6oE3EV9q%2BUG3F2v8XV7nuG2Z4pE%2FSi1M4fVvWtStIOTzQ1mO51XI6h5b7PxSVngmeTvvXcGkupl7I6yWZmwsqEaecn%2FRmEBpRMOFwf%2BKEWy4PbTxMOIsbJGjyQa2Co3rkGSHvJQ&X-Amz-Signature=9f74b6363deff31cf4589ff08a3e4eae5013ee08067645d3bd503fbaddd278f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2L6XHR%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3Q8mHxZZ7vWh%2BMenXE2QxArgvMD%2BYS5IDQzckRxGZQIgCDOiED%2BQEDjk5RBDzobQwGAFdAUuDAUt9yfboRfYngUqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH8Z06bDZyQgCwTUCrcA25eWIYXXrjyH7K5Kjc04fk4KHEoaH1DHoJOXx8UwuU%2ForHkPXHO2oWF0ntj5JYfIEpz3sNusXSvBxS7bcMDTfF261UzkvzxLimyq%2BLshd5121V9ecOcMK2l1GyCv9d5ZGor2epU6RpPO7MaUrwWk9zo9hbkO1PB7T3uD7vd6y3fOkdak7%2Fa5m1dyOUGZRoFn22jygrt3e3ob2tiKxix3HOgbQn3VoM3Yed0DJ8kOzYRqhvlJFwoicwWNnY5TB0x4p5aSm9Na9C3oGcMSIGD7Qr%2F3mhvPCKjzMsogDPfwDuViTOo8Vrf9R1uN0oVqNLlK3wvxyZf8j9MSVXZC%2FMCpZkc7B%2FimpOuTQBvkBya28ILrRoYy8e7%2FsK3Ee0wVZiXJmAjGW0%2F813AekKIHqF%2FXmXyN0cOt4y%2BzNa1EDye%2F0i%2F1NM3QEVwbNi%2BUP9Nf7BHnmWhxQTGPIubD9dkuPYpbnKLC2kScRtuU896fGeP4i6rG8nfiQCe54V7QxPbtS48V0Jtb0qq9YUl4A37saiTRSm8o%2FPituVkEk6JKvoCcUYTt3s6PZwq22%2FNU32oNZqAsli1s%2BKYaoz4fgtHnO1ZKQeld9wCOvRvQcd4LUSD%2B6u8HbBhTR9sxJd%2F9%2FYhMLDehb8GOqUB2lprbgwpcsgPmP3K6re%2B1LiZFO3QUFVut9af4SHTBEshHvbaWA7XBPqZ6V5t6C%2F4EUV8hxylNoolY8%2BWcvTzM6oE3EV9q%2BUG3F2v8XV7nuG2Z4pE%2FSi1M4fVvWtStIOTzQ1mO51XI6h5b7PxSVngmeTvvXcGkupl7I6yWZmwsqEaecn%2FRmEBpRMOFwf%2BKEWy4PbTxMOIsbJGjyQa2Co3rkGSHvJQ&X-Amz-Signature=041402cbec26fe8f66eb1b645c9b85f2a9e094648abe0d8c96e9bb916830c611&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2L6XHR%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3Q8mHxZZ7vWh%2BMenXE2QxArgvMD%2BYS5IDQzckRxGZQIgCDOiED%2BQEDjk5RBDzobQwGAFdAUuDAUt9yfboRfYngUqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH8Z06bDZyQgCwTUCrcA25eWIYXXrjyH7K5Kjc04fk4KHEoaH1DHoJOXx8UwuU%2ForHkPXHO2oWF0ntj5JYfIEpz3sNusXSvBxS7bcMDTfF261UzkvzxLimyq%2BLshd5121V9ecOcMK2l1GyCv9d5ZGor2epU6RpPO7MaUrwWk9zo9hbkO1PB7T3uD7vd6y3fOkdak7%2Fa5m1dyOUGZRoFn22jygrt3e3ob2tiKxix3HOgbQn3VoM3Yed0DJ8kOzYRqhvlJFwoicwWNnY5TB0x4p5aSm9Na9C3oGcMSIGD7Qr%2F3mhvPCKjzMsogDPfwDuViTOo8Vrf9R1uN0oVqNLlK3wvxyZf8j9MSVXZC%2FMCpZkc7B%2FimpOuTQBvkBya28ILrRoYy8e7%2FsK3Ee0wVZiXJmAjGW0%2F813AekKIHqF%2FXmXyN0cOt4y%2BzNa1EDye%2F0i%2F1NM3QEVwbNi%2BUP9Nf7BHnmWhxQTGPIubD9dkuPYpbnKLC2kScRtuU896fGeP4i6rG8nfiQCe54V7QxPbtS48V0Jtb0qq9YUl4A37saiTRSm8o%2FPituVkEk6JKvoCcUYTt3s6PZwq22%2FNU32oNZqAsli1s%2BKYaoz4fgtHnO1ZKQeld9wCOvRvQcd4LUSD%2B6u8HbBhTR9sxJd%2F9%2FYhMLDehb8GOqUB2lprbgwpcsgPmP3K6re%2B1LiZFO3QUFVut9af4SHTBEshHvbaWA7XBPqZ6V5t6C%2F4EUV8hxylNoolY8%2BWcvTzM6oE3EV9q%2BUG3F2v8XV7nuG2Z4pE%2FSi1M4fVvWtStIOTzQ1mO51XI6h5b7PxSVngmeTvvXcGkupl7I6yWZmwsqEaecn%2FRmEBpRMOFwf%2BKEWy4PbTxMOIsbJGjyQa2Co3rkGSHvJQ&X-Amz-Signature=ab8057b03d0287c2bd186abd7dddb42788aeb37c52fd1546a89c147b3abd4caa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2L6XHR%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3Q8mHxZZ7vWh%2BMenXE2QxArgvMD%2BYS5IDQzckRxGZQIgCDOiED%2BQEDjk5RBDzobQwGAFdAUuDAUt9yfboRfYngUqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH8Z06bDZyQgCwTUCrcA25eWIYXXrjyH7K5Kjc04fk4KHEoaH1DHoJOXx8UwuU%2ForHkPXHO2oWF0ntj5JYfIEpz3sNusXSvBxS7bcMDTfF261UzkvzxLimyq%2BLshd5121V9ecOcMK2l1GyCv9d5ZGor2epU6RpPO7MaUrwWk9zo9hbkO1PB7T3uD7vd6y3fOkdak7%2Fa5m1dyOUGZRoFn22jygrt3e3ob2tiKxix3HOgbQn3VoM3Yed0DJ8kOzYRqhvlJFwoicwWNnY5TB0x4p5aSm9Na9C3oGcMSIGD7Qr%2F3mhvPCKjzMsogDPfwDuViTOo8Vrf9R1uN0oVqNLlK3wvxyZf8j9MSVXZC%2FMCpZkc7B%2FimpOuTQBvkBya28ILrRoYy8e7%2FsK3Ee0wVZiXJmAjGW0%2F813AekKIHqF%2FXmXyN0cOt4y%2BzNa1EDye%2F0i%2F1NM3QEVwbNi%2BUP9Nf7BHnmWhxQTGPIubD9dkuPYpbnKLC2kScRtuU896fGeP4i6rG8nfiQCe54V7QxPbtS48V0Jtb0qq9YUl4A37saiTRSm8o%2FPituVkEk6JKvoCcUYTt3s6PZwq22%2FNU32oNZqAsli1s%2BKYaoz4fgtHnO1ZKQeld9wCOvRvQcd4LUSD%2B6u8HbBhTR9sxJd%2F9%2FYhMLDehb8GOqUB2lprbgwpcsgPmP3K6re%2B1LiZFO3QUFVut9af4SHTBEshHvbaWA7XBPqZ6V5t6C%2F4EUV8hxylNoolY8%2BWcvTzM6oE3EV9q%2BUG3F2v8XV7nuG2Z4pE%2FSi1M4fVvWtStIOTzQ1mO51XI6h5b7PxSVngmeTvvXcGkupl7I6yWZmwsqEaecn%2FRmEBpRMOFwf%2BKEWy4PbTxMOIsbJGjyQa2Co3rkGSHvJQ&X-Amz-Signature=9d1eba03adf55ef85acaf831e30ed726e9fe4d22d9b234e380d22c4e9c28d586&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
