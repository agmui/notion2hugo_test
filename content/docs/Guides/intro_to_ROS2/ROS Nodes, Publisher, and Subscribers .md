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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATR4YBH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvwQd5sTDHf5o41OAU8lL8vwTd%2BrPBZ47c85w3RFMkEAiBxlfuJLAbRw%2B3MD98EWJqGdYo%2Fq0rEyzmOYqdxgJS5uCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMreyYyWg0rHjvpZFqKtwDdX3mf1AtI8qPlx1qtfKxR%2F9jxB6WgoC6j%2BUjBm0hviNvRbozvE0yL0jyi8R3ShY5rKILK9eKE%2FCBGEjFWSsPDhbZq6rA5H%2B%2Fl0N5NGVLwNNp0ZVcUjhhUCPLx13IZvFwm7Ba%2FYA90OMvjnLGtnaCXXqTPW9iUK8VPqhOcC1vAaQGC0anKc3yxe54CO57dXGwLlJUl4pZEBvFFLImtox6d3qS58GESGBzxZdnxLHYXeD4K85qBmepo%2FgtUTs7uWAtettmjuKR68KQxgbq1MpZ%2F%2BuvCz%2F0%2BhKTWRxHRsftRR9wZEdMWM5c%2B0ifMzC2%2BShd4do44M%2BT9E9w2yRqXbdL0S60QRFoJEZjevjM%2FPvZhADhZH8EvaGdly%2BZb4xoQP7CA%2BUbg1Ct8cXFeYw4YyqOAvvGyeqo4gDdlGyLZNTVBMEZwwqFtIanRjA1y5CQquHvvVnpLDeTZiDXDEO7Wwp7vbDhcDveQw%2BmifLX1seMA7LfSovq3OV%2FqH4FOgrcMH0Nss3632P%2F9C0AXqdBcmaHHmO7BAhzBUlfYm7vADOWmGhE1clee5AZG%2Buv9ZlXZ3FjUJN2uIoLxoGz5LuwIdVj%2FseX6kBompDU50JQTTjyPlc0m%2FR%2Bf12D6%2FUUY%2BQwnbPWwgY6pgE%2FfQc2bp7RLUqbGQSh1gFoNPQ9WonF0WJM%2FdeUfQTu%2FXdh%2FBEICNOFGiHk%2Bi%2FyLPK2eMQn9J0ZJ1z0vtGrie1XsLNXefMal%2BEeBDfj%2BCol7nft%2BgwDnIgXsCUV5KHtWoDmk9rw6y%2FtcMmGIR5clU2F0vrn6TDXfjX4Usc9gmT5cT0X%2FRdf5OLx%2F%2BEiSZM8CYgCAYRcVuvTi8D3fTyKQ5gl%2BfJ0T7uN&X-Amz-Signature=77a641a25477f97e2e8aa1dba2bc356ac535cb27e065c03699ca8617e8493b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATR4YBH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvwQd5sTDHf5o41OAU8lL8vwTd%2BrPBZ47c85w3RFMkEAiBxlfuJLAbRw%2B3MD98EWJqGdYo%2Fq0rEyzmOYqdxgJS5uCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMreyYyWg0rHjvpZFqKtwDdX3mf1AtI8qPlx1qtfKxR%2F9jxB6WgoC6j%2BUjBm0hviNvRbozvE0yL0jyi8R3ShY5rKILK9eKE%2FCBGEjFWSsPDhbZq6rA5H%2B%2Fl0N5NGVLwNNp0ZVcUjhhUCPLx13IZvFwm7Ba%2FYA90OMvjnLGtnaCXXqTPW9iUK8VPqhOcC1vAaQGC0anKc3yxe54CO57dXGwLlJUl4pZEBvFFLImtox6d3qS58GESGBzxZdnxLHYXeD4K85qBmepo%2FgtUTs7uWAtettmjuKR68KQxgbq1MpZ%2F%2BuvCz%2F0%2BhKTWRxHRsftRR9wZEdMWM5c%2B0ifMzC2%2BShd4do44M%2BT9E9w2yRqXbdL0S60QRFoJEZjevjM%2FPvZhADhZH8EvaGdly%2BZb4xoQP7CA%2BUbg1Ct8cXFeYw4YyqOAvvGyeqo4gDdlGyLZNTVBMEZwwqFtIanRjA1y5CQquHvvVnpLDeTZiDXDEO7Wwp7vbDhcDveQw%2BmifLX1seMA7LfSovq3OV%2FqH4FOgrcMH0Nss3632P%2F9C0AXqdBcmaHHmO7BAhzBUlfYm7vADOWmGhE1clee5AZG%2Buv9ZlXZ3FjUJN2uIoLxoGz5LuwIdVj%2FseX6kBompDU50JQTTjyPlc0m%2FR%2Bf12D6%2FUUY%2BQwnbPWwgY6pgE%2FfQc2bp7RLUqbGQSh1gFoNPQ9WonF0WJM%2FdeUfQTu%2FXdh%2FBEICNOFGiHk%2Bi%2FyLPK2eMQn9J0ZJ1z0vtGrie1XsLNXefMal%2BEeBDfj%2BCol7nft%2BgwDnIgXsCUV5KHtWoDmk9rw6y%2FtcMmGIR5clU2F0vrn6TDXfjX4Usc9gmT5cT0X%2FRdf5OLx%2F%2BEiSZM8CYgCAYRcVuvTi8D3fTyKQ5gl%2BfJ0T7uN&X-Amz-Signature=c3d19bb2767d817a71e761054a1e738af57e73e2b1bbd577df4397385f38373e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATR4YBH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvwQd5sTDHf5o41OAU8lL8vwTd%2BrPBZ47c85w3RFMkEAiBxlfuJLAbRw%2B3MD98EWJqGdYo%2Fq0rEyzmOYqdxgJS5uCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMreyYyWg0rHjvpZFqKtwDdX3mf1AtI8qPlx1qtfKxR%2F9jxB6WgoC6j%2BUjBm0hviNvRbozvE0yL0jyi8R3ShY5rKILK9eKE%2FCBGEjFWSsPDhbZq6rA5H%2B%2Fl0N5NGVLwNNp0ZVcUjhhUCPLx13IZvFwm7Ba%2FYA90OMvjnLGtnaCXXqTPW9iUK8VPqhOcC1vAaQGC0anKc3yxe54CO57dXGwLlJUl4pZEBvFFLImtox6d3qS58GESGBzxZdnxLHYXeD4K85qBmepo%2FgtUTs7uWAtettmjuKR68KQxgbq1MpZ%2F%2BuvCz%2F0%2BhKTWRxHRsftRR9wZEdMWM5c%2B0ifMzC2%2BShd4do44M%2BT9E9w2yRqXbdL0S60QRFoJEZjevjM%2FPvZhADhZH8EvaGdly%2BZb4xoQP7CA%2BUbg1Ct8cXFeYw4YyqOAvvGyeqo4gDdlGyLZNTVBMEZwwqFtIanRjA1y5CQquHvvVnpLDeTZiDXDEO7Wwp7vbDhcDveQw%2BmifLX1seMA7LfSovq3OV%2FqH4FOgrcMH0Nss3632P%2F9C0AXqdBcmaHHmO7BAhzBUlfYm7vADOWmGhE1clee5AZG%2Buv9ZlXZ3FjUJN2uIoLxoGz5LuwIdVj%2FseX6kBompDU50JQTTjyPlc0m%2FR%2Bf12D6%2FUUY%2BQwnbPWwgY6pgE%2FfQc2bp7RLUqbGQSh1gFoNPQ9WonF0WJM%2FdeUfQTu%2FXdh%2FBEICNOFGiHk%2Bi%2FyLPK2eMQn9J0ZJ1z0vtGrie1XsLNXefMal%2BEeBDfj%2BCol7nft%2BgwDnIgXsCUV5KHtWoDmk9rw6y%2FtcMmGIR5clU2F0vrn6TDXfjX4Usc9gmT5cT0X%2FRdf5OLx%2F%2BEiSZM8CYgCAYRcVuvTi8D3fTyKQ5gl%2BfJ0T7uN&X-Amz-Signature=9de7b73e2f2945271f5c1c6d40cee8423ee23348867496c0b44f0dc05461acf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATR4YBH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvwQd5sTDHf5o41OAU8lL8vwTd%2BrPBZ47c85w3RFMkEAiBxlfuJLAbRw%2B3MD98EWJqGdYo%2Fq0rEyzmOYqdxgJS5uCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMreyYyWg0rHjvpZFqKtwDdX3mf1AtI8qPlx1qtfKxR%2F9jxB6WgoC6j%2BUjBm0hviNvRbozvE0yL0jyi8R3ShY5rKILK9eKE%2FCBGEjFWSsPDhbZq6rA5H%2B%2Fl0N5NGVLwNNp0ZVcUjhhUCPLx13IZvFwm7Ba%2FYA90OMvjnLGtnaCXXqTPW9iUK8VPqhOcC1vAaQGC0anKc3yxe54CO57dXGwLlJUl4pZEBvFFLImtox6d3qS58GESGBzxZdnxLHYXeD4K85qBmepo%2FgtUTs7uWAtettmjuKR68KQxgbq1MpZ%2F%2BuvCz%2F0%2BhKTWRxHRsftRR9wZEdMWM5c%2B0ifMzC2%2BShd4do44M%2BT9E9w2yRqXbdL0S60QRFoJEZjevjM%2FPvZhADhZH8EvaGdly%2BZb4xoQP7CA%2BUbg1Ct8cXFeYw4YyqOAvvGyeqo4gDdlGyLZNTVBMEZwwqFtIanRjA1y5CQquHvvVnpLDeTZiDXDEO7Wwp7vbDhcDveQw%2BmifLX1seMA7LfSovq3OV%2FqH4FOgrcMH0Nss3632P%2F9C0AXqdBcmaHHmO7BAhzBUlfYm7vADOWmGhE1clee5AZG%2Buv9ZlXZ3FjUJN2uIoLxoGz5LuwIdVj%2FseX6kBompDU50JQTTjyPlc0m%2FR%2Bf12D6%2FUUY%2BQwnbPWwgY6pgE%2FfQc2bp7RLUqbGQSh1gFoNPQ9WonF0WJM%2FdeUfQTu%2FXdh%2FBEICNOFGiHk%2Bi%2FyLPK2eMQn9J0ZJ1z0vtGrie1XsLNXefMal%2BEeBDfj%2BCol7nft%2BgwDnIgXsCUV5KHtWoDmk9rw6y%2FtcMmGIR5clU2F0vrn6TDXfjX4Usc9gmT5cT0X%2FRdf5OLx%2F%2BEiSZM8CYgCAYRcVuvTi8D3fTyKQ5gl%2BfJ0T7uN&X-Amz-Signature=76e727eadb6d2d727ac58c96a09f504bdaa5e3637e676562c2f7fdc6d4b553f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATR4YBH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvwQd5sTDHf5o41OAU8lL8vwTd%2BrPBZ47c85w3RFMkEAiBxlfuJLAbRw%2B3MD98EWJqGdYo%2Fq0rEyzmOYqdxgJS5uCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMreyYyWg0rHjvpZFqKtwDdX3mf1AtI8qPlx1qtfKxR%2F9jxB6WgoC6j%2BUjBm0hviNvRbozvE0yL0jyi8R3ShY5rKILK9eKE%2FCBGEjFWSsPDhbZq6rA5H%2B%2Fl0N5NGVLwNNp0ZVcUjhhUCPLx13IZvFwm7Ba%2FYA90OMvjnLGtnaCXXqTPW9iUK8VPqhOcC1vAaQGC0anKc3yxe54CO57dXGwLlJUl4pZEBvFFLImtox6d3qS58GESGBzxZdnxLHYXeD4K85qBmepo%2FgtUTs7uWAtettmjuKR68KQxgbq1MpZ%2F%2BuvCz%2F0%2BhKTWRxHRsftRR9wZEdMWM5c%2B0ifMzC2%2BShd4do44M%2BT9E9w2yRqXbdL0S60QRFoJEZjevjM%2FPvZhADhZH8EvaGdly%2BZb4xoQP7CA%2BUbg1Ct8cXFeYw4YyqOAvvGyeqo4gDdlGyLZNTVBMEZwwqFtIanRjA1y5CQquHvvVnpLDeTZiDXDEO7Wwp7vbDhcDveQw%2BmifLX1seMA7LfSovq3OV%2FqH4FOgrcMH0Nss3632P%2F9C0AXqdBcmaHHmO7BAhzBUlfYm7vADOWmGhE1clee5AZG%2Buv9ZlXZ3FjUJN2uIoLxoGz5LuwIdVj%2FseX6kBompDU50JQTTjyPlc0m%2FR%2Bf12D6%2FUUY%2BQwnbPWwgY6pgE%2FfQc2bp7RLUqbGQSh1gFoNPQ9WonF0WJM%2FdeUfQTu%2FXdh%2FBEICNOFGiHk%2Bi%2FyLPK2eMQn9J0ZJ1z0vtGrie1XsLNXefMal%2BEeBDfj%2BCol7nft%2BgwDnIgXsCUV5KHtWoDmk9rw6y%2FtcMmGIR5clU2F0vrn6TDXfjX4Usc9gmT5cT0X%2FRdf5OLx%2F%2BEiSZM8CYgCAYRcVuvTi8D3fTyKQ5gl%2BfJ0T7uN&X-Amz-Signature=bd84a27f79b988dd012a00b65caf55e21b5f2591b4995ec97c948e9af5d4a1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATR4YBH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvwQd5sTDHf5o41OAU8lL8vwTd%2BrPBZ47c85w3RFMkEAiBxlfuJLAbRw%2B3MD98EWJqGdYo%2Fq0rEyzmOYqdxgJS5uCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMreyYyWg0rHjvpZFqKtwDdX3mf1AtI8qPlx1qtfKxR%2F9jxB6WgoC6j%2BUjBm0hviNvRbozvE0yL0jyi8R3ShY5rKILK9eKE%2FCBGEjFWSsPDhbZq6rA5H%2B%2Fl0N5NGVLwNNp0ZVcUjhhUCPLx13IZvFwm7Ba%2FYA90OMvjnLGtnaCXXqTPW9iUK8VPqhOcC1vAaQGC0anKc3yxe54CO57dXGwLlJUl4pZEBvFFLImtox6d3qS58GESGBzxZdnxLHYXeD4K85qBmepo%2FgtUTs7uWAtettmjuKR68KQxgbq1MpZ%2F%2BuvCz%2F0%2BhKTWRxHRsftRR9wZEdMWM5c%2B0ifMzC2%2BShd4do44M%2BT9E9w2yRqXbdL0S60QRFoJEZjevjM%2FPvZhADhZH8EvaGdly%2BZb4xoQP7CA%2BUbg1Ct8cXFeYw4YyqOAvvGyeqo4gDdlGyLZNTVBMEZwwqFtIanRjA1y5CQquHvvVnpLDeTZiDXDEO7Wwp7vbDhcDveQw%2BmifLX1seMA7LfSovq3OV%2FqH4FOgrcMH0Nss3632P%2F9C0AXqdBcmaHHmO7BAhzBUlfYm7vADOWmGhE1clee5AZG%2Buv9ZlXZ3FjUJN2uIoLxoGz5LuwIdVj%2FseX6kBompDU50JQTTjyPlc0m%2FR%2Bf12D6%2FUUY%2BQwnbPWwgY6pgE%2FfQc2bp7RLUqbGQSh1gFoNPQ9WonF0WJM%2FdeUfQTu%2FXdh%2FBEICNOFGiHk%2Bi%2FyLPK2eMQn9J0ZJ1z0vtGrie1XsLNXefMal%2BEeBDfj%2BCol7nft%2BgwDnIgXsCUV5KHtWoDmk9rw6y%2FtcMmGIR5clU2F0vrn6TDXfjX4Usc9gmT5cT0X%2FRdf5OLx%2F%2BEiSZM8CYgCAYRcVuvTi8D3fTyKQ5gl%2BfJ0T7uN&X-Amz-Signature=ee4c7831e4157e82d967e5cfb1f8244584d6de80ba316961a3c2e3aad073df11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATR4YBH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvwQd5sTDHf5o41OAU8lL8vwTd%2BrPBZ47c85w3RFMkEAiBxlfuJLAbRw%2B3MD98EWJqGdYo%2Fq0rEyzmOYqdxgJS5uCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMreyYyWg0rHjvpZFqKtwDdX3mf1AtI8qPlx1qtfKxR%2F9jxB6WgoC6j%2BUjBm0hviNvRbozvE0yL0jyi8R3ShY5rKILK9eKE%2FCBGEjFWSsPDhbZq6rA5H%2B%2Fl0N5NGVLwNNp0ZVcUjhhUCPLx13IZvFwm7Ba%2FYA90OMvjnLGtnaCXXqTPW9iUK8VPqhOcC1vAaQGC0anKc3yxe54CO57dXGwLlJUl4pZEBvFFLImtox6d3qS58GESGBzxZdnxLHYXeD4K85qBmepo%2FgtUTs7uWAtettmjuKR68KQxgbq1MpZ%2F%2BuvCz%2F0%2BhKTWRxHRsftRR9wZEdMWM5c%2B0ifMzC2%2BShd4do44M%2BT9E9w2yRqXbdL0S60QRFoJEZjevjM%2FPvZhADhZH8EvaGdly%2BZb4xoQP7CA%2BUbg1Ct8cXFeYw4YyqOAvvGyeqo4gDdlGyLZNTVBMEZwwqFtIanRjA1y5CQquHvvVnpLDeTZiDXDEO7Wwp7vbDhcDveQw%2BmifLX1seMA7LfSovq3OV%2FqH4FOgrcMH0Nss3632P%2F9C0AXqdBcmaHHmO7BAhzBUlfYm7vADOWmGhE1clee5AZG%2Buv9ZlXZ3FjUJN2uIoLxoGz5LuwIdVj%2FseX6kBompDU50JQTTjyPlc0m%2FR%2Bf12D6%2FUUY%2BQwnbPWwgY6pgE%2FfQc2bp7RLUqbGQSh1gFoNPQ9WonF0WJM%2FdeUfQTu%2FXdh%2FBEICNOFGiHk%2Bi%2FyLPK2eMQn9J0ZJ1z0vtGrie1XsLNXefMal%2BEeBDfj%2BCol7nft%2BgwDnIgXsCUV5KHtWoDmk9rw6y%2FtcMmGIR5clU2F0vrn6TDXfjX4Usc9gmT5cT0X%2FRdf5OLx%2F%2BEiSZM8CYgCAYRcVuvTi8D3fTyKQ5gl%2BfJ0T7uN&X-Amz-Signature=a1393d9ac337c09e641de527024ab34f9185cd18276661e65595810694379fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATR4YBH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvwQd5sTDHf5o41OAU8lL8vwTd%2BrPBZ47c85w3RFMkEAiBxlfuJLAbRw%2B3MD98EWJqGdYo%2Fq0rEyzmOYqdxgJS5uCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMreyYyWg0rHjvpZFqKtwDdX3mf1AtI8qPlx1qtfKxR%2F9jxB6WgoC6j%2BUjBm0hviNvRbozvE0yL0jyi8R3ShY5rKILK9eKE%2FCBGEjFWSsPDhbZq6rA5H%2B%2Fl0N5NGVLwNNp0ZVcUjhhUCPLx13IZvFwm7Ba%2FYA90OMvjnLGtnaCXXqTPW9iUK8VPqhOcC1vAaQGC0anKc3yxe54CO57dXGwLlJUl4pZEBvFFLImtox6d3qS58GESGBzxZdnxLHYXeD4K85qBmepo%2FgtUTs7uWAtettmjuKR68KQxgbq1MpZ%2F%2BuvCz%2F0%2BhKTWRxHRsftRR9wZEdMWM5c%2B0ifMzC2%2BShd4do44M%2BT9E9w2yRqXbdL0S60QRFoJEZjevjM%2FPvZhADhZH8EvaGdly%2BZb4xoQP7CA%2BUbg1Ct8cXFeYw4YyqOAvvGyeqo4gDdlGyLZNTVBMEZwwqFtIanRjA1y5CQquHvvVnpLDeTZiDXDEO7Wwp7vbDhcDveQw%2BmifLX1seMA7LfSovq3OV%2FqH4FOgrcMH0Nss3632P%2F9C0AXqdBcmaHHmO7BAhzBUlfYm7vADOWmGhE1clee5AZG%2Buv9ZlXZ3FjUJN2uIoLxoGz5LuwIdVj%2FseX6kBompDU50JQTTjyPlc0m%2FR%2Bf12D6%2FUUY%2BQwnbPWwgY6pgE%2FfQc2bp7RLUqbGQSh1gFoNPQ9WonF0WJM%2FdeUfQTu%2FXdh%2FBEICNOFGiHk%2Bi%2FyLPK2eMQn9J0ZJ1z0vtGrie1XsLNXefMal%2BEeBDfj%2BCol7nft%2BgwDnIgXsCUV5KHtWoDmk9rw6y%2FtcMmGIR5clU2F0vrn6TDXfjX4Usc9gmT5cT0X%2FRdf5OLx%2F%2BEiSZM8CYgCAYRcVuvTi8D3fTyKQ5gl%2BfJ0T7uN&X-Amz-Signature=329c460c6adbdea0af449726ff01a70c92ac5e97127bc833899bc863e277522a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
