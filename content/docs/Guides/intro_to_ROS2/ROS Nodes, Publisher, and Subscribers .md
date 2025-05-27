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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMOUQK7K%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSmAjqDdzQrq4NfADjIFi7rzuOs2gPsd%2FViAh4ppTQnAiBfXW7TwvAZhKUxbXOCnzkaZbFxVf6fKqsfL4lMMNSL2Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMejdBVYM55QpPNPO3KtwDByveDLMPPXOfbpJiUB0lyRnSXtU9guGI3wYCI9W6D8A0e6S3ub8TRlEQd1LQYjLdyCwutEP4cY76jWq9jHjJYGLsq8FuSDlIkZNgOhKiMsRJNNR6TCujf%2FzyshZxLawVImchmLslUFtKrwK8XwIrO2c3%2BDQATsGXba1D7uPPnJqSSJjMTAhfF3prPEmLqUsOyOGx4H%2FLK4LENfrX5Yne1faJG%2B3lrSQrlNcXStkcRKc5ha4%2Fz9CROc%2BcKj1OaMNfgTDM2UlQmxdq7FyQomKJlkG5s2xQkG4Iic7hktozbc0SYB7zqQwSKiR%2BQ5FZgqf0jB17t4ISNXn1B2pvIFDo5GUP5uYUUBz5AQKDJpjSAroaiHrrAKZZsF1SvPAMvsElcPpNc1%2Fpb17sf29Fk0RWpqOw1I%2BFngbpkQk0UZYloHMUVBxHT%2FQ%2BKSPDQZNb6iHTQ5Q%2BQc%2BBexu16ej5NW9r94U5gbZOQ26Aimg%2B0oHc%2Bmn7gW0sc%2FfbPY6aT2jbGS6XCXwvmm7Os7Dj4bN35b%2Bvo8HSwRBsvcOZNQM6WahpcRdcgPxl1g2xf4obBqZnAudH5IEwFLJgEhvBp0KWzakl1QUpWR7FEZOPGK53Uoym2N5JIls0hLmN3iLamu4whfzWwQY6pgFUE0%2FPwcclD%2BpuZAIrgvLRkUSn3fyFd1bqPLEN8ZJu42h%2FBSMFUWWACUDZeEg01xfcg29vkF64Jm%2FPq%2F7X2K4Jsy8JVOOW5INMSS7lZ5nxG3Dh8tZ7GpVLKDCBctf8L2FLFccvjUpWjCGyGStUF0LxJyTY7x798arWWb%2FON5l5ZkGOdZmZf05Mj25jWYwxKP3n0jkFnPpIdcxofdthw113VLPSd4J3&X-Amz-Signature=58a51c30474938b400523dc1dd22103277421456eb37c5a2c3978dde23e0715f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMOUQK7K%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSmAjqDdzQrq4NfADjIFi7rzuOs2gPsd%2FViAh4ppTQnAiBfXW7TwvAZhKUxbXOCnzkaZbFxVf6fKqsfL4lMMNSL2Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMejdBVYM55QpPNPO3KtwDByveDLMPPXOfbpJiUB0lyRnSXtU9guGI3wYCI9W6D8A0e6S3ub8TRlEQd1LQYjLdyCwutEP4cY76jWq9jHjJYGLsq8FuSDlIkZNgOhKiMsRJNNR6TCujf%2FzyshZxLawVImchmLslUFtKrwK8XwIrO2c3%2BDQATsGXba1D7uPPnJqSSJjMTAhfF3prPEmLqUsOyOGx4H%2FLK4LENfrX5Yne1faJG%2B3lrSQrlNcXStkcRKc5ha4%2Fz9CROc%2BcKj1OaMNfgTDM2UlQmxdq7FyQomKJlkG5s2xQkG4Iic7hktozbc0SYB7zqQwSKiR%2BQ5FZgqf0jB17t4ISNXn1B2pvIFDo5GUP5uYUUBz5AQKDJpjSAroaiHrrAKZZsF1SvPAMvsElcPpNc1%2Fpb17sf29Fk0RWpqOw1I%2BFngbpkQk0UZYloHMUVBxHT%2FQ%2BKSPDQZNb6iHTQ5Q%2BQc%2BBexu16ej5NW9r94U5gbZOQ26Aimg%2B0oHc%2Bmn7gW0sc%2FfbPY6aT2jbGS6XCXwvmm7Os7Dj4bN35b%2Bvo8HSwRBsvcOZNQM6WahpcRdcgPxl1g2xf4obBqZnAudH5IEwFLJgEhvBp0KWzakl1QUpWR7FEZOPGK53Uoym2N5JIls0hLmN3iLamu4whfzWwQY6pgFUE0%2FPwcclD%2BpuZAIrgvLRkUSn3fyFd1bqPLEN8ZJu42h%2FBSMFUWWACUDZeEg01xfcg29vkF64Jm%2FPq%2F7X2K4Jsy8JVOOW5INMSS7lZ5nxG3Dh8tZ7GpVLKDCBctf8L2FLFccvjUpWjCGyGStUF0LxJyTY7x798arWWb%2FON5l5ZkGOdZmZf05Mj25jWYwxKP3n0jkFnPpIdcxofdthw113VLPSd4J3&X-Amz-Signature=f834673e10f0495ef39b8794cadfc282fdeb3fb74984a709415afd5a3bf16531&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMOUQK7K%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSmAjqDdzQrq4NfADjIFi7rzuOs2gPsd%2FViAh4ppTQnAiBfXW7TwvAZhKUxbXOCnzkaZbFxVf6fKqsfL4lMMNSL2Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMejdBVYM55QpPNPO3KtwDByveDLMPPXOfbpJiUB0lyRnSXtU9guGI3wYCI9W6D8A0e6S3ub8TRlEQd1LQYjLdyCwutEP4cY76jWq9jHjJYGLsq8FuSDlIkZNgOhKiMsRJNNR6TCujf%2FzyshZxLawVImchmLslUFtKrwK8XwIrO2c3%2BDQATsGXba1D7uPPnJqSSJjMTAhfF3prPEmLqUsOyOGx4H%2FLK4LENfrX5Yne1faJG%2B3lrSQrlNcXStkcRKc5ha4%2Fz9CROc%2BcKj1OaMNfgTDM2UlQmxdq7FyQomKJlkG5s2xQkG4Iic7hktozbc0SYB7zqQwSKiR%2BQ5FZgqf0jB17t4ISNXn1B2pvIFDo5GUP5uYUUBz5AQKDJpjSAroaiHrrAKZZsF1SvPAMvsElcPpNc1%2Fpb17sf29Fk0RWpqOw1I%2BFngbpkQk0UZYloHMUVBxHT%2FQ%2BKSPDQZNb6iHTQ5Q%2BQc%2BBexu16ej5NW9r94U5gbZOQ26Aimg%2B0oHc%2Bmn7gW0sc%2FfbPY6aT2jbGS6XCXwvmm7Os7Dj4bN35b%2Bvo8HSwRBsvcOZNQM6WahpcRdcgPxl1g2xf4obBqZnAudH5IEwFLJgEhvBp0KWzakl1QUpWR7FEZOPGK53Uoym2N5JIls0hLmN3iLamu4whfzWwQY6pgFUE0%2FPwcclD%2BpuZAIrgvLRkUSn3fyFd1bqPLEN8ZJu42h%2FBSMFUWWACUDZeEg01xfcg29vkF64Jm%2FPq%2F7X2K4Jsy8JVOOW5INMSS7lZ5nxG3Dh8tZ7GpVLKDCBctf8L2FLFccvjUpWjCGyGStUF0LxJyTY7x798arWWb%2FON5l5ZkGOdZmZf05Mj25jWYwxKP3n0jkFnPpIdcxofdthw113VLPSd4J3&X-Amz-Signature=e660646e4fa3f0319a40c843845ebce88255f02861611fadf460ee9f4fef79bb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMOUQK7K%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSmAjqDdzQrq4NfADjIFi7rzuOs2gPsd%2FViAh4ppTQnAiBfXW7TwvAZhKUxbXOCnzkaZbFxVf6fKqsfL4lMMNSL2Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMejdBVYM55QpPNPO3KtwDByveDLMPPXOfbpJiUB0lyRnSXtU9guGI3wYCI9W6D8A0e6S3ub8TRlEQd1LQYjLdyCwutEP4cY76jWq9jHjJYGLsq8FuSDlIkZNgOhKiMsRJNNR6TCujf%2FzyshZxLawVImchmLslUFtKrwK8XwIrO2c3%2BDQATsGXba1D7uPPnJqSSJjMTAhfF3prPEmLqUsOyOGx4H%2FLK4LENfrX5Yne1faJG%2B3lrSQrlNcXStkcRKc5ha4%2Fz9CROc%2BcKj1OaMNfgTDM2UlQmxdq7FyQomKJlkG5s2xQkG4Iic7hktozbc0SYB7zqQwSKiR%2BQ5FZgqf0jB17t4ISNXn1B2pvIFDo5GUP5uYUUBz5AQKDJpjSAroaiHrrAKZZsF1SvPAMvsElcPpNc1%2Fpb17sf29Fk0RWpqOw1I%2BFngbpkQk0UZYloHMUVBxHT%2FQ%2BKSPDQZNb6iHTQ5Q%2BQc%2BBexu16ej5NW9r94U5gbZOQ26Aimg%2B0oHc%2Bmn7gW0sc%2FfbPY6aT2jbGS6XCXwvmm7Os7Dj4bN35b%2Bvo8HSwRBsvcOZNQM6WahpcRdcgPxl1g2xf4obBqZnAudH5IEwFLJgEhvBp0KWzakl1QUpWR7FEZOPGK53Uoym2N5JIls0hLmN3iLamu4whfzWwQY6pgFUE0%2FPwcclD%2BpuZAIrgvLRkUSn3fyFd1bqPLEN8ZJu42h%2FBSMFUWWACUDZeEg01xfcg29vkF64Jm%2FPq%2F7X2K4Jsy8JVOOW5INMSS7lZ5nxG3Dh8tZ7GpVLKDCBctf8L2FLFccvjUpWjCGyGStUF0LxJyTY7x798arWWb%2FON5l5ZkGOdZmZf05Mj25jWYwxKP3n0jkFnPpIdcxofdthw113VLPSd4J3&X-Amz-Signature=83a23ef33aeff351c7d56e3e55b2334808185cb2cae90da0aee7716801080bba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMOUQK7K%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSmAjqDdzQrq4NfADjIFi7rzuOs2gPsd%2FViAh4ppTQnAiBfXW7TwvAZhKUxbXOCnzkaZbFxVf6fKqsfL4lMMNSL2Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMejdBVYM55QpPNPO3KtwDByveDLMPPXOfbpJiUB0lyRnSXtU9guGI3wYCI9W6D8A0e6S3ub8TRlEQd1LQYjLdyCwutEP4cY76jWq9jHjJYGLsq8FuSDlIkZNgOhKiMsRJNNR6TCujf%2FzyshZxLawVImchmLslUFtKrwK8XwIrO2c3%2BDQATsGXba1D7uPPnJqSSJjMTAhfF3prPEmLqUsOyOGx4H%2FLK4LENfrX5Yne1faJG%2B3lrSQrlNcXStkcRKc5ha4%2Fz9CROc%2BcKj1OaMNfgTDM2UlQmxdq7FyQomKJlkG5s2xQkG4Iic7hktozbc0SYB7zqQwSKiR%2BQ5FZgqf0jB17t4ISNXn1B2pvIFDo5GUP5uYUUBz5AQKDJpjSAroaiHrrAKZZsF1SvPAMvsElcPpNc1%2Fpb17sf29Fk0RWpqOw1I%2BFngbpkQk0UZYloHMUVBxHT%2FQ%2BKSPDQZNb6iHTQ5Q%2BQc%2BBexu16ej5NW9r94U5gbZOQ26Aimg%2B0oHc%2Bmn7gW0sc%2FfbPY6aT2jbGS6XCXwvmm7Os7Dj4bN35b%2Bvo8HSwRBsvcOZNQM6WahpcRdcgPxl1g2xf4obBqZnAudH5IEwFLJgEhvBp0KWzakl1QUpWR7FEZOPGK53Uoym2N5JIls0hLmN3iLamu4whfzWwQY6pgFUE0%2FPwcclD%2BpuZAIrgvLRkUSn3fyFd1bqPLEN8ZJu42h%2FBSMFUWWACUDZeEg01xfcg29vkF64Jm%2FPq%2F7X2K4Jsy8JVOOW5INMSS7lZ5nxG3Dh8tZ7GpVLKDCBctf8L2FLFccvjUpWjCGyGStUF0LxJyTY7x798arWWb%2FON5l5ZkGOdZmZf05Mj25jWYwxKP3n0jkFnPpIdcxofdthw113VLPSd4J3&X-Amz-Signature=d12445e2cc0734da19cba5f63318c1ff3354b07aeb1a0f7f81838e6755a4507a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMOUQK7K%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSmAjqDdzQrq4NfADjIFi7rzuOs2gPsd%2FViAh4ppTQnAiBfXW7TwvAZhKUxbXOCnzkaZbFxVf6fKqsfL4lMMNSL2Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMejdBVYM55QpPNPO3KtwDByveDLMPPXOfbpJiUB0lyRnSXtU9guGI3wYCI9W6D8A0e6S3ub8TRlEQd1LQYjLdyCwutEP4cY76jWq9jHjJYGLsq8FuSDlIkZNgOhKiMsRJNNR6TCujf%2FzyshZxLawVImchmLslUFtKrwK8XwIrO2c3%2BDQATsGXba1D7uPPnJqSSJjMTAhfF3prPEmLqUsOyOGx4H%2FLK4LENfrX5Yne1faJG%2B3lrSQrlNcXStkcRKc5ha4%2Fz9CROc%2BcKj1OaMNfgTDM2UlQmxdq7FyQomKJlkG5s2xQkG4Iic7hktozbc0SYB7zqQwSKiR%2BQ5FZgqf0jB17t4ISNXn1B2pvIFDo5GUP5uYUUBz5AQKDJpjSAroaiHrrAKZZsF1SvPAMvsElcPpNc1%2Fpb17sf29Fk0RWpqOw1I%2BFngbpkQk0UZYloHMUVBxHT%2FQ%2BKSPDQZNb6iHTQ5Q%2BQc%2BBexu16ej5NW9r94U5gbZOQ26Aimg%2B0oHc%2Bmn7gW0sc%2FfbPY6aT2jbGS6XCXwvmm7Os7Dj4bN35b%2Bvo8HSwRBsvcOZNQM6WahpcRdcgPxl1g2xf4obBqZnAudH5IEwFLJgEhvBp0KWzakl1QUpWR7FEZOPGK53Uoym2N5JIls0hLmN3iLamu4whfzWwQY6pgFUE0%2FPwcclD%2BpuZAIrgvLRkUSn3fyFd1bqPLEN8ZJu42h%2FBSMFUWWACUDZeEg01xfcg29vkF64Jm%2FPq%2F7X2K4Jsy8JVOOW5INMSS7lZ5nxG3Dh8tZ7GpVLKDCBctf8L2FLFccvjUpWjCGyGStUF0LxJyTY7x798arWWb%2FON5l5ZkGOdZmZf05Mj25jWYwxKP3n0jkFnPpIdcxofdthw113VLPSd4J3&X-Amz-Signature=a2f9dd08903fc40447d1620c6814b33d17a01fa78903b57b0b3b5ceae41a3dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMOUQK7K%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSmAjqDdzQrq4NfADjIFi7rzuOs2gPsd%2FViAh4ppTQnAiBfXW7TwvAZhKUxbXOCnzkaZbFxVf6fKqsfL4lMMNSL2Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMejdBVYM55QpPNPO3KtwDByveDLMPPXOfbpJiUB0lyRnSXtU9guGI3wYCI9W6D8A0e6S3ub8TRlEQd1LQYjLdyCwutEP4cY76jWq9jHjJYGLsq8FuSDlIkZNgOhKiMsRJNNR6TCujf%2FzyshZxLawVImchmLslUFtKrwK8XwIrO2c3%2BDQATsGXba1D7uPPnJqSSJjMTAhfF3prPEmLqUsOyOGx4H%2FLK4LENfrX5Yne1faJG%2B3lrSQrlNcXStkcRKc5ha4%2Fz9CROc%2BcKj1OaMNfgTDM2UlQmxdq7FyQomKJlkG5s2xQkG4Iic7hktozbc0SYB7zqQwSKiR%2BQ5FZgqf0jB17t4ISNXn1B2pvIFDo5GUP5uYUUBz5AQKDJpjSAroaiHrrAKZZsF1SvPAMvsElcPpNc1%2Fpb17sf29Fk0RWpqOw1I%2BFngbpkQk0UZYloHMUVBxHT%2FQ%2BKSPDQZNb6iHTQ5Q%2BQc%2BBexu16ej5NW9r94U5gbZOQ26Aimg%2B0oHc%2Bmn7gW0sc%2FfbPY6aT2jbGS6XCXwvmm7Os7Dj4bN35b%2Bvo8HSwRBsvcOZNQM6WahpcRdcgPxl1g2xf4obBqZnAudH5IEwFLJgEhvBp0KWzakl1QUpWR7FEZOPGK53Uoym2N5JIls0hLmN3iLamu4whfzWwQY6pgFUE0%2FPwcclD%2BpuZAIrgvLRkUSn3fyFd1bqPLEN8ZJu42h%2FBSMFUWWACUDZeEg01xfcg29vkF64Jm%2FPq%2F7X2K4Jsy8JVOOW5INMSS7lZ5nxG3Dh8tZ7GpVLKDCBctf8L2FLFccvjUpWjCGyGStUF0LxJyTY7x798arWWb%2FON5l5ZkGOdZmZf05Mj25jWYwxKP3n0jkFnPpIdcxofdthw113VLPSd4J3&X-Amz-Signature=fbb6a2b83df6ca2b3eb6e377966890a814a9a5895ac33ebfa050428e03ab8f66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMOUQK7K%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSmAjqDdzQrq4NfADjIFi7rzuOs2gPsd%2FViAh4ppTQnAiBfXW7TwvAZhKUxbXOCnzkaZbFxVf6fKqsfL4lMMNSL2Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMejdBVYM55QpPNPO3KtwDByveDLMPPXOfbpJiUB0lyRnSXtU9guGI3wYCI9W6D8A0e6S3ub8TRlEQd1LQYjLdyCwutEP4cY76jWq9jHjJYGLsq8FuSDlIkZNgOhKiMsRJNNR6TCujf%2FzyshZxLawVImchmLslUFtKrwK8XwIrO2c3%2BDQATsGXba1D7uPPnJqSSJjMTAhfF3prPEmLqUsOyOGx4H%2FLK4LENfrX5Yne1faJG%2B3lrSQrlNcXStkcRKc5ha4%2Fz9CROc%2BcKj1OaMNfgTDM2UlQmxdq7FyQomKJlkG5s2xQkG4Iic7hktozbc0SYB7zqQwSKiR%2BQ5FZgqf0jB17t4ISNXn1B2pvIFDo5GUP5uYUUBz5AQKDJpjSAroaiHrrAKZZsF1SvPAMvsElcPpNc1%2Fpb17sf29Fk0RWpqOw1I%2BFngbpkQk0UZYloHMUVBxHT%2FQ%2BKSPDQZNb6iHTQ5Q%2BQc%2BBexu16ej5NW9r94U5gbZOQ26Aimg%2B0oHc%2Bmn7gW0sc%2FfbPY6aT2jbGS6XCXwvmm7Os7Dj4bN35b%2Bvo8HSwRBsvcOZNQM6WahpcRdcgPxl1g2xf4obBqZnAudH5IEwFLJgEhvBp0KWzakl1QUpWR7FEZOPGK53Uoym2N5JIls0hLmN3iLamu4whfzWwQY6pgFUE0%2FPwcclD%2BpuZAIrgvLRkUSn3fyFd1bqPLEN8ZJu42h%2FBSMFUWWACUDZeEg01xfcg29vkF64Jm%2FPq%2F7X2K4Jsy8JVOOW5INMSS7lZ5nxG3Dh8tZ7GpVLKDCBctf8L2FLFccvjUpWjCGyGStUF0LxJyTY7x798arWWb%2FON5l5ZkGOdZmZf05Mj25jWYwxKP3n0jkFnPpIdcxofdthw113VLPSd4J3&X-Amz-Signature=6002679156b1ac4578c24eac9fae880f65953e47fa2c08b1619fb8e71a3f6567&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
