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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTN5YIF4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhIADQh3Thej6yMQ96bu%2FfsMPjtJf0QkWiFhPJyWQsCwIhAOb%2FiJiSSuWH4Ceh220Rf2w%2Bl%2BfexUbyaP6250Zl8mivKv8DCGgQABoMNjM3NDIzMTgzODA1IgxjDjrBTRg%2BN%2FWxIlAq3AOkeuBtxK2%2FM9wT7k3J2WIXOt1O03xySJ50leBncuSk%2Fr80eX1eCk6hR4ZalFR1s36clmZc5aZkz%2BMbC%2F%2FQJF01yjnYkoOVCnZYSfTQc4V9cUOXGIM37YfLAurcO2gY0%2F1LNd6spEh0gF9VcT%2FioRm0jpIYdsFPo7dZWDGJk%2BaTBjcgmnGyj%2FkEHEoqbCuyc36Xsbx3QYRR%2B98gxinhXG1atE9cVD%2F9puDLnmGZZcxmHqR6o%2F7HqpIvbqlwZjG8AcSTx2QIUWDScwfQ9ziCVD%2Ff2lnDbfX7pKAy8b8c04d61cTE27sJU8gHb6P0HxBwnfyotjjp8%2BqDNgMgqwjyzWcYgM9nrSG8Ox%2Bv9h0Zp46vOkFurBy40KYR9Gx31Jn7U6gLakBSYMbWuLJbsVIc08%2FtdZm279a%2FfiXm1SGPFb8ZR6zYdUYKm9a8b2eplHh6tH1dYgV0lWA4RkbWgrI2uV88lcC3KE4O0I09OZL4%2BG38uo2xnL5cK9KTDnTQ9Xqr0uDa1qb4kGWAzJff0TdpyJHTMZVLBKrFbQTfSVV8v%2B5%2B8%2Bba1NJMK8e6ftPt4z6NfCvQPqisPU8GKYj4El3Su3523Tw4SRUAmtwrj3S3gqIJI9ZPsTHiIMbnc0Ud6zDNxu%2FABjqkAdVo9dLpyiwrVtZfPWUonyi7Dsk0i3boSS8lbFjXpNqMDOX4Je5wn8s9Y%2FugjErrFu%2B0%2FWmA4cYBH%2BnfO1DE77UZ3LHS9WGmsDjqx6VxLMQE55ric9lCQjkRAiRER%2BThOABjTXr1Ui9Lf4wjycKu4lPz05EaQl%2BXl9szlQPMAFNetJDA010iW1nrjPPPQtphy2ZihtzB4TXG%2Frxft81M5O6gZKiY&X-Amz-Signature=d4b2bb52aa1a5f74535f210bf598afa4784492af41f6324658fed9ee0a5e3901&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTN5YIF4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhIADQh3Thej6yMQ96bu%2FfsMPjtJf0QkWiFhPJyWQsCwIhAOb%2FiJiSSuWH4Ceh220Rf2w%2Bl%2BfexUbyaP6250Zl8mivKv8DCGgQABoMNjM3NDIzMTgzODA1IgxjDjrBTRg%2BN%2FWxIlAq3AOkeuBtxK2%2FM9wT7k3J2WIXOt1O03xySJ50leBncuSk%2Fr80eX1eCk6hR4ZalFR1s36clmZc5aZkz%2BMbC%2F%2FQJF01yjnYkoOVCnZYSfTQc4V9cUOXGIM37YfLAurcO2gY0%2F1LNd6spEh0gF9VcT%2FioRm0jpIYdsFPo7dZWDGJk%2BaTBjcgmnGyj%2FkEHEoqbCuyc36Xsbx3QYRR%2B98gxinhXG1atE9cVD%2F9puDLnmGZZcxmHqR6o%2F7HqpIvbqlwZjG8AcSTx2QIUWDScwfQ9ziCVD%2Ff2lnDbfX7pKAy8b8c04d61cTE27sJU8gHb6P0HxBwnfyotjjp8%2BqDNgMgqwjyzWcYgM9nrSG8Ox%2Bv9h0Zp46vOkFurBy40KYR9Gx31Jn7U6gLakBSYMbWuLJbsVIc08%2FtdZm279a%2FfiXm1SGPFb8ZR6zYdUYKm9a8b2eplHh6tH1dYgV0lWA4RkbWgrI2uV88lcC3KE4O0I09OZL4%2BG38uo2xnL5cK9KTDnTQ9Xqr0uDa1qb4kGWAzJff0TdpyJHTMZVLBKrFbQTfSVV8v%2B5%2B8%2Bba1NJMK8e6ftPt4z6NfCvQPqisPU8GKYj4El3Su3523Tw4SRUAmtwrj3S3gqIJI9ZPsTHiIMbnc0Ud6zDNxu%2FABjqkAdVo9dLpyiwrVtZfPWUonyi7Dsk0i3boSS8lbFjXpNqMDOX4Je5wn8s9Y%2FugjErrFu%2B0%2FWmA4cYBH%2BnfO1DE77UZ3LHS9WGmsDjqx6VxLMQE55ric9lCQjkRAiRER%2BThOABjTXr1Ui9Lf4wjycKu4lPz05EaQl%2BXl9szlQPMAFNetJDA010iW1nrjPPPQtphy2ZihtzB4TXG%2Frxft81M5O6gZKiY&X-Amz-Signature=bc8e4a7909cc2f4f202b358d757fc212d8971b842d691362df33e7cb84f30bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTN5YIF4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhIADQh3Thej6yMQ96bu%2FfsMPjtJf0QkWiFhPJyWQsCwIhAOb%2FiJiSSuWH4Ceh220Rf2w%2Bl%2BfexUbyaP6250Zl8mivKv8DCGgQABoMNjM3NDIzMTgzODA1IgxjDjrBTRg%2BN%2FWxIlAq3AOkeuBtxK2%2FM9wT7k3J2WIXOt1O03xySJ50leBncuSk%2Fr80eX1eCk6hR4ZalFR1s36clmZc5aZkz%2BMbC%2F%2FQJF01yjnYkoOVCnZYSfTQc4V9cUOXGIM37YfLAurcO2gY0%2F1LNd6spEh0gF9VcT%2FioRm0jpIYdsFPo7dZWDGJk%2BaTBjcgmnGyj%2FkEHEoqbCuyc36Xsbx3QYRR%2B98gxinhXG1atE9cVD%2F9puDLnmGZZcxmHqR6o%2F7HqpIvbqlwZjG8AcSTx2QIUWDScwfQ9ziCVD%2Ff2lnDbfX7pKAy8b8c04d61cTE27sJU8gHb6P0HxBwnfyotjjp8%2BqDNgMgqwjyzWcYgM9nrSG8Ox%2Bv9h0Zp46vOkFurBy40KYR9Gx31Jn7U6gLakBSYMbWuLJbsVIc08%2FtdZm279a%2FfiXm1SGPFb8ZR6zYdUYKm9a8b2eplHh6tH1dYgV0lWA4RkbWgrI2uV88lcC3KE4O0I09OZL4%2BG38uo2xnL5cK9KTDnTQ9Xqr0uDa1qb4kGWAzJff0TdpyJHTMZVLBKrFbQTfSVV8v%2B5%2B8%2Bba1NJMK8e6ftPt4z6NfCvQPqisPU8GKYj4El3Su3523Tw4SRUAmtwrj3S3gqIJI9ZPsTHiIMbnc0Ud6zDNxu%2FABjqkAdVo9dLpyiwrVtZfPWUonyi7Dsk0i3boSS8lbFjXpNqMDOX4Je5wn8s9Y%2FugjErrFu%2B0%2FWmA4cYBH%2BnfO1DE77UZ3LHS9WGmsDjqx6VxLMQE55ric9lCQjkRAiRER%2BThOABjTXr1Ui9Lf4wjycKu4lPz05EaQl%2BXl9szlQPMAFNetJDA010iW1nrjPPPQtphy2ZihtzB4TXG%2Frxft81M5O6gZKiY&X-Amz-Signature=1dcd1d746d8993167e2e1bf1a1ff2d3b49635eb397ff208e3e798d603b2d3325&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTN5YIF4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhIADQh3Thej6yMQ96bu%2FfsMPjtJf0QkWiFhPJyWQsCwIhAOb%2FiJiSSuWH4Ceh220Rf2w%2Bl%2BfexUbyaP6250Zl8mivKv8DCGgQABoMNjM3NDIzMTgzODA1IgxjDjrBTRg%2BN%2FWxIlAq3AOkeuBtxK2%2FM9wT7k3J2WIXOt1O03xySJ50leBncuSk%2Fr80eX1eCk6hR4ZalFR1s36clmZc5aZkz%2BMbC%2F%2FQJF01yjnYkoOVCnZYSfTQc4V9cUOXGIM37YfLAurcO2gY0%2F1LNd6spEh0gF9VcT%2FioRm0jpIYdsFPo7dZWDGJk%2BaTBjcgmnGyj%2FkEHEoqbCuyc36Xsbx3QYRR%2B98gxinhXG1atE9cVD%2F9puDLnmGZZcxmHqR6o%2F7HqpIvbqlwZjG8AcSTx2QIUWDScwfQ9ziCVD%2Ff2lnDbfX7pKAy8b8c04d61cTE27sJU8gHb6P0HxBwnfyotjjp8%2BqDNgMgqwjyzWcYgM9nrSG8Ox%2Bv9h0Zp46vOkFurBy40KYR9Gx31Jn7U6gLakBSYMbWuLJbsVIc08%2FtdZm279a%2FfiXm1SGPFb8ZR6zYdUYKm9a8b2eplHh6tH1dYgV0lWA4RkbWgrI2uV88lcC3KE4O0I09OZL4%2BG38uo2xnL5cK9KTDnTQ9Xqr0uDa1qb4kGWAzJff0TdpyJHTMZVLBKrFbQTfSVV8v%2B5%2B8%2Bba1NJMK8e6ftPt4z6NfCvQPqisPU8GKYj4El3Su3523Tw4SRUAmtwrj3S3gqIJI9ZPsTHiIMbnc0Ud6zDNxu%2FABjqkAdVo9dLpyiwrVtZfPWUonyi7Dsk0i3boSS8lbFjXpNqMDOX4Je5wn8s9Y%2FugjErrFu%2B0%2FWmA4cYBH%2BnfO1DE77UZ3LHS9WGmsDjqx6VxLMQE55ric9lCQjkRAiRER%2BThOABjTXr1Ui9Lf4wjycKu4lPz05EaQl%2BXl9szlQPMAFNetJDA010iW1nrjPPPQtphy2ZihtzB4TXG%2Frxft81M5O6gZKiY&X-Amz-Signature=a876b8a272d58b013ecd9195e32aaa1040084f609b9cbe950adb1976314c0ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTN5YIF4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhIADQh3Thej6yMQ96bu%2FfsMPjtJf0QkWiFhPJyWQsCwIhAOb%2FiJiSSuWH4Ceh220Rf2w%2Bl%2BfexUbyaP6250Zl8mivKv8DCGgQABoMNjM3NDIzMTgzODA1IgxjDjrBTRg%2BN%2FWxIlAq3AOkeuBtxK2%2FM9wT7k3J2WIXOt1O03xySJ50leBncuSk%2Fr80eX1eCk6hR4ZalFR1s36clmZc5aZkz%2BMbC%2F%2FQJF01yjnYkoOVCnZYSfTQc4V9cUOXGIM37YfLAurcO2gY0%2F1LNd6spEh0gF9VcT%2FioRm0jpIYdsFPo7dZWDGJk%2BaTBjcgmnGyj%2FkEHEoqbCuyc36Xsbx3QYRR%2B98gxinhXG1atE9cVD%2F9puDLnmGZZcxmHqR6o%2F7HqpIvbqlwZjG8AcSTx2QIUWDScwfQ9ziCVD%2Ff2lnDbfX7pKAy8b8c04d61cTE27sJU8gHb6P0HxBwnfyotjjp8%2BqDNgMgqwjyzWcYgM9nrSG8Ox%2Bv9h0Zp46vOkFurBy40KYR9Gx31Jn7U6gLakBSYMbWuLJbsVIc08%2FtdZm279a%2FfiXm1SGPFb8ZR6zYdUYKm9a8b2eplHh6tH1dYgV0lWA4RkbWgrI2uV88lcC3KE4O0I09OZL4%2BG38uo2xnL5cK9KTDnTQ9Xqr0uDa1qb4kGWAzJff0TdpyJHTMZVLBKrFbQTfSVV8v%2B5%2B8%2Bba1NJMK8e6ftPt4z6NfCvQPqisPU8GKYj4El3Su3523Tw4SRUAmtwrj3S3gqIJI9ZPsTHiIMbnc0Ud6zDNxu%2FABjqkAdVo9dLpyiwrVtZfPWUonyi7Dsk0i3boSS8lbFjXpNqMDOX4Je5wn8s9Y%2FugjErrFu%2B0%2FWmA4cYBH%2BnfO1DE77UZ3LHS9WGmsDjqx6VxLMQE55ric9lCQjkRAiRER%2BThOABjTXr1Ui9Lf4wjycKu4lPz05EaQl%2BXl9szlQPMAFNetJDA010iW1nrjPPPQtphy2ZihtzB4TXG%2Frxft81M5O6gZKiY&X-Amz-Signature=516230a34c99a4c1596a7447d76692de6af0dbf7ac912cc2692a1f0db43f142b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTN5YIF4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhIADQh3Thej6yMQ96bu%2FfsMPjtJf0QkWiFhPJyWQsCwIhAOb%2FiJiSSuWH4Ceh220Rf2w%2Bl%2BfexUbyaP6250Zl8mivKv8DCGgQABoMNjM3NDIzMTgzODA1IgxjDjrBTRg%2BN%2FWxIlAq3AOkeuBtxK2%2FM9wT7k3J2WIXOt1O03xySJ50leBncuSk%2Fr80eX1eCk6hR4ZalFR1s36clmZc5aZkz%2BMbC%2F%2FQJF01yjnYkoOVCnZYSfTQc4V9cUOXGIM37YfLAurcO2gY0%2F1LNd6spEh0gF9VcT%2FioRm0jpIYdsFPo7dZWDGJk%2BaTBjcgmnGyj%2FkEHEoqbCuyc36Xsbx3QYRR%2B98gxinhXG1atE9cVD%2F9puDLnmGZZcxmHqR6o%2F7HqpIvbqlwZjG8AcSTx2QIUWDScwfQ9ziCVD%2Ff2lnDbfX7pKAy8b8c04d61cTE27sJU8gHb6P0HxBwnfyotjjp8%2BqDNgMgqwjyzWcYgM9nrSG8Ox%2Bv9h0Zp46vOkFurBy40KYR9Gx31Jn7U6gLakBSYMbWuLJbsVIc08%2FtdZm279a%2FfiXm1SGPFb8ZR6zYdUYKm9a8b2eplHh6tH1dYgV0lWA4RkbWgrI2uV88lcC3KE4O0I09OZL4%2BG38uo2xnL5cK9KTDnTQ9Xqr0uDa1qb4kGWAzJff0TdpyJHTMZVLBKrFbQTfSVV8v%2B5%2B8%2Bba1NJMK8e6ftPt4z6NfCvQPqisPU8GKYj4El3Su3523Tw4SRUAmtwrj3S3gqIJI9ZPsTHiIMbnc0Ud6zDNxu%2FABjqkAdVo9dLpyiwrVtZfPWUonyi7Dsk0i3boSS8lbFjXpNqMDOX4Je5wn8s9Y%2FugjErrFu%2B0%2FWmA4cYBH%2BnfO1DE77UZ3LHS9WGmsDjqx6VxLMQE55ric9lCQjkRAiRER%2BThOABjTXr1Ui9Lf4wjycKu4lPz05EaQl%2BXl9szlQPMAFNetJDA010iW1nrjPPPQtphy2ZihtzB4TXG%2Frxft81M5O6gZKiY&X-Amz-Signature=f05087256ed3c368becd3e2254473e66923b3e0b5629592afd0f9536b1126ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTN5YIF4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhIADQh3Thej6yMQ96bu%2FfsMPjtJf0QkWiFhPJyWQsCwIhAOb%2FiJiSSuWH4Ceh220Rf2w%2Bl%2BfexUbyaP6250Zl8mivKv8DCGgQABoMNjM3NDIzMTgzODA1IgxjDjrBTRg%2BN%2FWxIlAq3AOkeuBtxK2%2FM9wT7k3J2WIXOt1O03xySJ50leBncuSk%2Fr80eX1eCk6hR4ZalFR1s36clmZc5aZkz%2BMbC%2F%2FQJF01yjnYkoOVCnZYSfTQc4V9cUOXGIM37YfLAurcO2gY0%2F1LNd6spEh0gF9VcT%2FioRm0jpIYdsFPo7dZWDGJk%2BaTBjcgmnGyj%2FkEHEoqbCuyc36Xsbx3QYRR%2B98gxinhXG1atE9cVD%2F9puDLnmGZZcxmHqR6o%2F7HqpIvbqlwZjG8AcSTx2QIUWDScwfQ9ziCVD%2Ff2lnDbfX7pKAy8b8c04d61cTE27sJU8gHb6P0HxBwnfyotjjp8%2BqDNgMgqwjyzWcYgM9nrSG8Ox%2Bv9h0Zp46vOkFurBy40KYR9Gx31Jn7U6gLakBSYMbWuLJbsVIc08%2FtdZm279a%2FfiXm1SGPFb8ZR6zYdUYKm9a8b2eplHh6tH1dYgV0lWA4RkbWgrI2uV88lcC3KE4O0I09OZL4%2BG38uo2xnL5cK9KTDnTQ9Xqr0uDa1qb4kGWAzJff0TdpyJHTMZVLBKrFbQTfSVV8v%2B5%2B8%2Bba1NJMK8e6ftPt4z6NfCvQPqisPU8GKYj4El3Su3523Tw4SRUAmtwrj3S3gqIJI9ZPsTHiIMbnc0Ud6zDNxu%2FABjqkAdVo9dLpyiwrVtZfPWUonyi7Dsk0i3boSS8lbFjXpNqMDOX4Je5wn8s9Y%2FugjErrFu%2B0%2FWmA4cYBH%2BnfO1DE77UZ3LHS9WGmsDjqx6VxLMQE55ric9lCQjkRAiRER%2BThOABjTXr1Ui9Lf4wjycKu4lPz05EaQl%2BXl9szlQPMAFNetJDA010iW1nrjPPPQtphy2ZihtzB4TXG%2Frxft81M5O6gZKiY&X-Amz-Signature=bc508c11fd37b72a895058e384e35b2b4dfc13944e6f4102c1ac91a557ab4bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTN5YIF4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhIADQh3Thej6yMQ96bu%2FfsMPjtJf0QkWiFhPJyWQsCwIhAOb%2FiJiSSuWH4Ceh220Rf2w%2Bl%2BfexUbyaP6250Zl8mivKv8DCGgQABoMNjM3NDIzMTgzODA1IgxjDjrBTRg%2BN%2FWxIlAq3AOkeuBtxK2%2FM9wT7k3J2WIXOt1O03xySJ50leBncuSk%2Fr80eX1eCk6hR4ZalFR1s36clmZc5aZkz%2BMbC%2F%2FQJF01yjnYkoOVCnZYSfTQc4V9cUOXGIM37YfLAurcO2gY0%2F1LNd6spEh0gF9VcT%2FioRm0jpIYdsFPo7dZWDGJk%2BaTBjcgmnGyj%2FkEHEoqbCuyc36Xsbx3QYRR%2B98gxinhXG1atE9cVD%2F9puDLnmGZZcxmHqR6o%2F7HqpIvbqlwZjG8AcSTx2QIUWDScwfQ9ziCVD%2Ff2lnDbfX7pKAy8b8c04d61cTE27sJU8gHb6P0HxBwnfyotjjp8%2BqDNgMgqwjyzWcYgM9nrSG8Ox%2Bv9h0Zp46vOkFurBy40KYR9Gx31Jn7U6gLakBSYMbWuLJbsVIc08%2FtdZm279a%2FfiXm1SGPFb8ZR6zYdUYKm9a8b2eplHh6tH1dYgV0lWA4RkbWgrI2uV88lcC3KE4O0I09OZL4%2BG38uo2xnL5cK9KTDnTQ9Xqr0uDa1qb4kGWAzJff0TdpyJHTMZVLBKrFbQTfSVV8v%2B5%2B8%2Bba1NJMK8e6ftPt4z6NfCvQPqisPU8GKYj4El3Su3523Tw4SRUAmtwrj3S3gqIJI9ZPsTHiIMbnc0Ud6zDNxu%2FABjqkAdVo9dLpyiwrVtZfPWUonyi7Dsk0i3boSS8lbFjXpNqMDOX4Je5wn8s9Y%2FugjErrFu%2B0%2FWmA4cYBH%2BnfO1DE77UZ3LHS9WGmsDjqx6VxLMQE55ric9lCQjkRAiRER%2BThOABjTXr1Ui9Lf4wjycKu4lPz05EaQl%2BXl9szlQPMAFNetJDA010iW1nrjPPPQtphy2ZihtzB4TXG%2Frxft81M5O6gZKiY&X-Amz-Signature=2414ef656a3a94f76dfdc0cfa89e1d0852ae38f70fb30146bef128230c098015&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
