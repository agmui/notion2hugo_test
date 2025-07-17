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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYJEVGE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAjUb9%2Bb5%2Fe%2FEvljdym2n%2FA%2Bcz5Z3Q8eAwBVopSxByYZAiBuGT2Z99RHhr2pErYYZcY5CnH5wmVRH2OA%2F%2B0%2F5xMGSSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM7iOMw3lXOoyBrPApKtwD2e5FCIrbldoLag4Y8x%2B9E0xjHDDJRciSJaNtJpH0ybSzC8ECyR4YYf%2Bs7CyklsIL%2BLCwiB7xgHa3t2R8cYpcEadfEdWgfdbza8OnEnUTROPB4oPrexn3qkJF%2Fk9OcGF2HcjHFui13qm0d3Y5uAq7lm7fHgcyTg3buzkmYbmrIoIBRjtqAwvTqlefie7%2BvFWHQQUMWcV2xvvTfKP7Dh2srKv%2BZy2mpk6q0sprtxd8N1p80BUi6slYnCDoLe8QFASH1oNg7sRXAZaPdCXsGnfPAuEhmkCKdk32z8%2Fd2jDQP2i5mojbZ0wTyUujHMB4CwLRzJXxcNGxSvRpTN31TM1qLqTWGSdTCYUHz2vmqQk6DKF%2Bx2OjuqaaPz9zWWPdYmyfJQdqnjb0FmvFFkSyQQmw0KxkMHZ%2B3%2B2qliJlWL7AXLwcYpTpUqyDHysoaxROgpqK5C9sk5tl%2FroaNf4LpnJ2xeURaMSNGa2TR3V7aKo1Exv7n6PehzhZC4JBmxOnOaRQET73roDLtLotVwsXBjlF%2FUOjOocltgPFeRwgauhj9mu76er0oHoda4C3HidDYLYe0q9a1Fidww548dYw3zVHIC%2B14eQBefOpE3gCB7b891MfQfiV81ioF3via5kw%2F%2FjgwwY6pgFpBmW0qfsjPKFnetIoA7JfqVw2ngH5QIjHBE2Kb5aIxIbhsGIwTrxu9tiz2iU%2BpBPonSCP0YMd2NrQu%2BMAOEd0uswZDRuD3uOcOtM0dbBgU6tu%2Bn9Bxh6dBKgZikx%2FvGFY2pcaRenO1PpsbTRHG%2FBildAcH1TXDGEbwtZFsy19LSNC8QReD%2BfoqoYymcXX%2BsPiO0EOtDqn23yP3qmVrjribVeW9WQp&X-Amz-Signature=2bd211a6e4fe6e3e49d74fac4d36f2920600a6b7be2104420a56c78897c0e637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYJEVGE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAjUb9%2Bb5%2Fe%2FEvljdym2n%2FA%2Bcz5Z3Q8eAwBVopSxByYZAiBuGT2Z99RHhr2pErYYZcY5CnH5wmVRH2OA%2F%2B0%2F5xMGSSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM7iOMw3lXOoyBrPApKtwD2e5FCIrbldoLag4Y8x%2B9E0xjHDDJRciSJaNtJpH0ybSzC8ECyR4YYf%2Bs7CyklsIL%2BLCwiB7xgHa3t2R8cYpcEadfEdWgfdbza8OnEnUTROPB4oPrexn3qkJF%2Fk9OcGF2HcjHFui13qm0d3Y5uAq7lm7fHgcyTg3buzkmYbmrIoIBRjtqAwvTqlefie7%2BvFWHQQUMWcV2xvvTfKP7Dh2srKv%2BZy2mpk6q0sprtxd8N1p80BUi6slYnCDoLe8QFASH1oNg7sRXAZaPdCXsGnfPAuEhmkCKdk32z8%2Fd2jDQP2i5mojbZ0wTyUujHMB4CwLRzJXxcNGxSvRpTN31TM1qLqTWGSdTCYUHz2vmqQk6DKF%2Bx2OjuqaaPz9zWWPdYmyfJQdqnjb0FmvFFkSyQQmw0KxkMHZ%2B3%2B2qliJlWL7AXLwcYpTpUqyDHysoaxROgpqK5C9sk5tl%2FroaNf4LpnJ2xeURaMSNGa2TR3V7aKo1Exv7n6PehzhZC4JBmxOnOaRQET73roDLtLotVwsXBjlF%2FUOjOocltgPFeRwgauhj9mu76er0oHoda4C3HidDYLYe0q9a1Fidww548dYw3zVHIC%2B14eQBefOpE3gCB7b891MfQfiV81ioF3via5kw%2F%2FjgwwY6pgFpBmW0qfsjPKFnetIoA7JfqVw2ngH5QIjHBE2Kb5aIxIbhsGIwTrxu9tiz2iU%2BpBPonSCP0YMd2NrQu%2BMAOEd0uswZDRuD3uOcOtM0dbBgU6tu%2Bn9Bxh6dBKgZikx%2FvGFY2pcaRenO1PpsbTRHG%2FBildAcH1TXDGEbwtZFsy19LSNC8QReD%2BfoqoYymcXX%2BsPiO0EOtDqn23yP3qmVrjribVeW9WQp&X-Amz-Signature=3bb19e349ef7bb5b061ec3c303318d588b00009961a4f67122c06e7bfd49cefe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYJEVGE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAjUb9%2Bb5%2Fe%2FEvljdym2n%2FA%2Bcz5Z3Q8eAwBVopSxByYZAiBuGT2Z99RHhr2pErYYZcY5CnH5wmVRH2OA%2F%2B0%2F5xMGSSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM7iOMw3lXOoyBrPApKtwD2e5FCIrbldoLag4Y8x%2B9E0xjHDDJRciSJaNtJpH0ybSzC8ECyR4YYf%2Bs7CyklsIL%2BLCwiB7xgHa3t2R8cYpcEadfEdWgfdbza8OnEnUTROPB4oPrexn3qkJF%2Fk9OcGF2HcjHFui13qm0d3Y5uAq7lm7fHgcyTg3buzkmYbmrIoIBRjtqAwvTqlefie7%2BvFWHQQUMWcV2xvvTfKP7Dh2srKv%2BZy2mpk6q0sprtxd8N1p80BUi6slYnCDoLe8QFASH1oNg7sRXAZaPdCXsGnfPAuEhmkCKdk32z8%2Fd2jDQP2i5mojbZ0wTyUujHMB4CwLRzJXxcNGxSvRpTN31TM1qLqTWGSdTCYUHz2vmqQk6DKF%2Bx2OjuqaaPz9zWWPdYmyfJQdqnjb0FmvFFkSyQQmw0KxkMHZ%2B3%2B2qliJlWL7AXLwcYpTpUqyDHysoaxROgpqK5C9sk5tl%2FroaNf4LpnJ2xeURaMSNGa2TR3V7aKo1Exv7n6PehzhZC4JBmxOnOaRQET73roDLtLotVwsXBjlF%2FUOjOocltgPFeRwgauhj9mu76er0oHoda4C3HidDYLYe0q9a1Fidww548dYw3zVHIC%2B14eQBefOpE3gCB7b891MfQfiV81ioF3via5kw%2F%2FjgwwY6pgFpBmW0qfsjPKFnetIoA7JfqVw2ngH5QIjHBE2Kb5aIxIbhsGIwTrxu9tiz2iU%2BpBPonSCP0YMd2NrQu%2BMAOEd0uswZDRuD3uOcOtM0dbBgU6tu%2Bn9Bxh6dBKgZikx%2FvGFY2pcaRenO1PpsbTRHG%2FBildAcH1TXDGEbwtZFsy19LSNC8QReD%2BfoqoYymcXX%2BsPiO0EOtDqn23yP3qmVrjribVeW9WQp&X-Amz-Signature=0b264677d6118a3ee5a6921843e8962d08009a878cf52a84f2e90afd3d02d4e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYJEVGE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAjUb9%2Bb5%2Fe%2FEvljdym2n%2FA%2Bcz5Z3Q8eAwBVopSxByYZAiBuGT2Z99RHhr2pErYYZcY5CnH5wmVRH2OA%2F%2B0%2F5xMGSSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM7iOMw3lXOoyBrPApKtwD2e5FCIrbldoLag4Y8x%2B9E0xjHDDJRciSJaNtJpH0ybSzC8ECyR4YYf%2Bs7CyklsIL%2BLCwiB7xgHa3t2R8cYpcEadfEdWgfdbza8OnEnUTROPB4oPrexn3qkJF%2Fk9OcGF2HcjHFui13qm0d3Y5uAq7lm7fHgcyTg3buzkmYbmrIoIBRjtqAwvTqlefie7%2BvFWHQQUMWcV2xvvTfKP7Dh2srKv%2BZy2mpk6q0sprtxd8N1p80BUi6slYnCDoLe8QFASH1oNg7sRXAZaPdCXsGnfPAuEhmkCKdk32z8%2Fd2jDQP2i5mojbZ0wTyUujHMB4CwLRzJXxcNGxSvRpTN31TM1qLqTWGSdTCYUHz2vmqQk6DKF%2Bx2OjuqaaPz9zWWPdYmyfJQdqnjb0FmvFFkSyQQmw0KxkMHZ%2B3%2B2qliJlWL7AXLwcYpTpUqyDHysoaxROgpqK5C9sk5tl%2FroaNf4LpnJ2xeURaMSNGa2TR3V7aKo1Exv7n6PehzhZC4JBmxOnOaRQET73roDLtLotVwsXBjlF%2FUOjOocltgPFeRwgauhj9mu76er0oHoda4C3HidDYLYe0q9a1Fidww548dYw3zVHIC%2B14eQBefOpE3gCB7b891MfQfiV81ioF3via5kw%2F%2FjgwwY6pgFpBmW0qfsjPKFnetIoA7JfqVw2ngH5QIjHBE2Kb5aIxIbhsGIwTrxu9tiz2iU%2BpBPonSCP0YMd2NrQu%2BMAOEd0uswZDRuD3uOcOtM0dbBgU6tu%2Bn9Bxh6dBKgZikx%2FvGFY2pcaRenO1PpsbTRHG%2FBildAcH1TXDGEbwtZFsy19LSNC8QReD%2BfoqoYymcXX%2BsPiO0EOtDqn23yP3qmVrjribVeW9WQp&X-Amz-Signature=795516fe65c5ecaf5aa15cab647188cdfd772938e3e550cffe5dcf162319c194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYJEVGE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAjUb9%2Bb5%2Fe%2FEvljdym2n%2FA%2Bcz5Z3Q8eAwBVopSxByYZAiBuGT2Z99RHhr2pErYYZcY5CnH5wmVRH2OA%2F%2B0%2F5xMGSSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM7iOMw3lXOoyBrPApKtwD2e5FCIrbldoLag4Y8x%2B9E0xjHDDJRciSJaNtJpH0ybSzC8ECyR4YYf%2Bs7CyklsIL%2BLCwiB7xgHa3t2R8cYpcEadfEdWgfdbza8OnEnUTROPB4oPrexn3qkJF%2Fk9OcGF2HcjHFui13qm0d3Y5uAq7lm7fHgcyTg3buzkmYbmrIoIBRjtqAwvTqlefie7%2BvFWHQQUMWcV2xvvTfKP7Dh2srKv%2BZy2mpk6q0sprtxd8N1p80BUi6slYnCDoLe8QFASH1oNg7sRXAZaPdCXsGnfPAuEhmkCKdk32z8%2Fd2jDQP2i5mojbZ0wTyUujHMB4CwLRzJXxcNGxSvRpTN31TM1qLqTWGSdTCYUHz2vmqQk6DKF%2Bx2OjuqaaPz9zWWPdYmyfJQdqnjb0FmvFFkSyQQmw0KxkMHZ%2B3%2B2qliJlWL7AXLwcYpTpUqyDHysoaxROgpqK5C9sk5tl%2FroaNf4LpnJ2xeURaMSNGa2TR3V7aKo1Exv7n6PehzhZC4JBmxOnOaRQET73roDLtLotVwsXBjlF%2FUOjOocltgPFeRwgauhj9mu76er0oHoda4C3HidDYLYe0q9a1Fidww548dYw3zVHIC%2B14eQBefOpE3gCB7b891MfQfiV81ioF3via5kw%2F%2FjgwwY6pgFpBmW0qfsjPKFnetIoA7JfqVw2ngH5QIjHBE2Kb5aIxIbhsGIwTrxu9tiz2iU%2BpBPonSCP0YMd2NrQu%2BMAOEd0uswZDRuD3uOcOtM0dbBgU6tu%2Bn9Bxh6dBKgZikx%2FvGFY2pcaRenO1PpsbTRHG%2FBildAcH1TXDGEbwtZFsy19LSNC8QReD%2BfoqoYymcXX%2BsPiO0EOtDqn23yP3qmVrjribVeW9WQp&X-Amz-Signature=90361e181c8533734e27a2acb1176ac394467e797fef15a0ec8b8e4db1046438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYJEVGE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAjUb9%2Bb5%2Fe%2FEvljdym2n%2FA%2Bcz5Z3Q8eAwBVopSxByYZAiBuGT2Z99RHhr2pErYYZcY5CnH5wmVRH2OA%2F%2B0%2F5xMGSSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM7iOMw3lXOoyBrPApKtwD2e5FCIrbldoLag4Y8x%2B9E0xjHDDJRciSJaNtJpH0ybSzC8ECyR4YYf%2Bs7CyklsIL%2BLCwiB7xgHa3t2R8cYpcEadfEdWgfdbza8OnEnUTROPB4oPrexn3qkJF%2Fk9OcGF2HcjHFui13qm0d3Y5uAq7lm7fHgcyTg3buzkmYbmrIoIBRjtqAwvTqlefie7%2BvFWHQQUMWcV2xvvTfKP7Dh2srKv%2BZy2mpk6q0sprtxd8N1p80BUi6slYnCDoLe8QFASH1oNg7sRXAZaPdCXsGnfPAuEhmkCKdk32z8%2Fd2jDQP2i5mojbZ0wTyUujHMB4CwLRzJXxcNGxSvRpTN31TM1qLqTWGSdTCYUHz2vmqQk6DKF%2Bx2OjuqaaPz9zWWPdYmyfJQdqnjb0FmvFFkSyQQmw0KxkMHZ%2B3%2B2qliJlWL7AXLwcYpTpUqyDHysoaxROgpqK5C9sk5tl%2FroaNf4LpnJ2xeURaMSNGa2TR3V7aKo1Exv7n6PehzhZC4JBmxOnOaRQET73roDLtLotVwsXBjlF%2FUOjOocltgPFeRwgauhj9mu76er0oHoda4C3HidDYLYe0q9a1Fidww548dYw3zVHIC%2B14eQBefOpE3gCB7b891MfQfiV81ioF3via5kw%2F%2FjgwwY6pgFpBmW0qfsjPKFnetIoA7JfqVw2ngH5QIjHBE2Kb5aIxIbhsGIwTrxu9tiz2iU%2BpBPonSCP0YMd2NrQu%2BMAOEd0uswZDRuD3uOcOtM0dbBgU6tu%2Bn9Bxh6dBKgZikx%2FvGFY2pcaRenO1PpsbTRHG%2FBildAcH1TXDGEbwtZFsy19LSNC8QReD%2BfoqoYymcXX%2BsPiO0EOtDqn23yP3qmVrjribVeW9WQp&X-Amz-Signature=8966b9b82b7f6e6b2310d9ac22e74f4834e5cd876f7ba93f243e7398e0e675c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYJEVGE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAjUb9%2Bb5%2Fe%2FEvljdym2n%2FA%2Bcz5Z3Q8eAwBVopSxByYZAiBuGT2Z99RHhr2pErYYZcY5CnH5wmVRH2OA%2F%2B0%2F5xMGSSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM7iOMw3lXOoyBrPApKtwD2e5FCIrbldoLag4Y8x%2B9E0xjHDDJRciSJaNtJpH0ybSzC8ECyR4YYf%2Bs7CyklsIL%2BLCwiB7xgHa3t2R8cYpcEadfEdWgfdbza8OnEnUTROPB4oPrexn3qkJF%2Fk9OcGF2HcjHFui13qm0d3Y5uAq7lm7fHgcyTg3buzkmYbmrIoIBRjtqAwvTqlefie7%2BvFWHQQUMWcV2xvvTfKP7Dh2srKv%2BZy2mpk6q0sprtxd8N1p80BUi6slYnCDoLe8QFASH1oNg7sRXAZaPdCXsGnfPAuEhmkCKdk32z8%2Fd2jDQP2i5mojbZ0wTyUujHMB4CwLRzJXxcNGxSvRpTN31TM1qLqTWGSdTCYUHz2vmqQk6DKF%2Bx2OjuqaaPz9zWWPdYmyfJQdqnjb0FmvFFkSyQQmw0KxkMHZ%2B3%2B2qliJlWL7AXLwcYpTpUqyDHysoaxROgpqK5C9sk5tl%2FroaNf4LpnJ2xeURaMSNGa2TR3V7aKo1Exv7n6PehzhZC4JBmxOnOaRQET73roDLtLotVwsXBjlF%2FUOjOocltgPFeRwgauhj9mu76er0oHoda4C3HidDYLYe0q9a1Fidww548dYw3zVHIC%2B14eQBefOpE3gCB7b891MfQfiV81ioF3via5kw%2F%2FjgwwY6pgFpBmW0qfsjPKFnetIoA7JfqVw2ngH5QIjHBE2Kb5aIxIbhsGIwTrxu9tiz2iU%2BpBPonSCP0YMd2NrQu%2BMAOEd0uswZDRuD3uOcOtM0dbBgU6tu%2Bn9Bxh6dBKgZikx%2FvGFY2pcaRenO1PpsbTRHG%2FBildAcH1TXDGEbwtZFsy19LSNC8QReD%2BfoqoYymcXX%2BsPiO0EOtDqn23yP3qmVrjribVeW9WQp&X-Amz-Signature=4d9a4d5d82dedc7e1cab334a552a299295f8434b507aa4dded7e9fa55cbd6117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYJEVGE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAjUb9%2Bb5%2Fe%2FEvljdym2n%2FA%2Bcz5Z3Q8eAwBVopSxByYZAiBuGT2Z99RHhr2pErYYZcY5CnH5wmVRH2OA%2F%2B0%2F5xMGSSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM7iOMw3lXOoyBrPApKtwD2e5FCIrbldoLag4Y8x%2B9E0xjHDDJRciSJaNtJpH0ybSzC8ECyR4YYf%2Bs7CyklsIL%2BLCwiB7xgHa3t2R8cYpcEadfEdWgfdbza8OnEnUTROPB4oPrexn3qkJF%2Fk9OcGF2HcjHFui13qm0d3Y5uAq7lm7fHgcyTg3buzkmYbmrIoIBRjtqAwvTqlefie7%2BvFWHQQUMWcV2xvvTfKP7Dh2srKv%2BZy2mpk6q0sprtxd8N1p80BUi6slYnCDoLe8QFASH1oNg7sRXAZaPdCXsGnfPAuEhmkCKdk32z8%2Fd2jDQP2i5mojbZ0wTyUujHMB4CwLRzJXxcNGxSvRpTN31TM1qLqTWGSdTCYUHz2vmqQk6DKF%2Bx2OjuqaaPz9zWWPdYmyfJQdqnjb0FmvFFkSyQQmw0KxkMHZ%2B3%2B2qliJlWL7AXLwcYpTpUqyDHysoaxROgpqK5C9sk5tl%2FroaNf4LpnJ2xeURaMSNGa2TR3V7aKo1Exv7n6PehzhZC4JBmxOnOaRQET73roDLtLotVwsXBjlF%2FUOjOocltgPFeRwgauhj9mu76er0oHoda4C3HidDYLYe0q9a1Fidww548dYw3zVHIC%2B14eQBefOpE3gCB7b891MfQfiV81ioF3via5kw%2F%2FjgwwY6pgFpBmW0qfsjPKFnetIoA7JfqVw2ngH5QIjHBE2Kb5aIxIbhsGIwTrxu9tiz2iU%2BpBPonSCP0YMd2NrQu%2BMAOEd0uswZDRuD3uOcOtM0dbBgU6tu%2Bn9Bxh6dBKgZikx%2FvGFY2pcaRenO1PpsbTRHG%2FBildAcH1TXDGEbwtZFsy19LSNC8QReD%2BfoqoYymcXX%2BsPiO0EOtDqn23yP3qmVrjribVeW9WQp&X-Amz-Signature=94ddae7edcfc3b2bcce2f5feedadb27b68683c13824b859734cb78e176d46d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
