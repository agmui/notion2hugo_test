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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDH24GTP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBkRJ7azWVw1Etfl7JGfUvMIqm3%2Bs1P7zd5pD7Pp7KwAiB2r1Ajbkw4h3CM1MfpAdO8YP6fSJmzvGVMsjbU6Q4fOSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMsU0V929Lh3Zfq9RFKtwD3YI0j1aA%2BJaKnDvM0ezx7XmtipQps%2B9i9Ff1DNdSic3n%2F6oykpe9XaVzjT1dsmI57BHk7m9UKqe5V9ky4VXlc0AvxLW29WxEIVU6%2FYeHvWZ0Rlp4kSH%2BkyGzhD7fFo%2FYPwZqFs1h6QzxB3%2Bqvg1bJyGy%2FgL0JawVKF%2FZYMmzGHekrFfrpd6cu7Mj%2FdurOUdQP3OcbqPWrj2lm%2B4nIXRMO0Y%2B4cGsh3kNW0mYIg27YzyrvTQyXZGkBNnkWbxmL5iT%2FJBuPQHl8YX0I7A4y8kmCOvBAxYisyj4lVLbtwedVAH0%2B%2BtPk0BPn3ub3pSDzSLkP8f3LAY2a62YP9Qane0r7mQDNhBANl0j7ntolzQSQ9ig0uklegrEbMS41QROfrH1KvwJWC1RKas21CNKo%2FstS54SHi1cTj5dO5gDKxBsRSazHAaFdbKow63oWR98R0iEEZiMeiXMpnKFNQdUvlr%2BxZPkbzePBFvVzX9VOp5iyyBbKpyk%2FhsqPo%2BGMtdDdpEM4YLUM2Bub%2FqHGcjelwjeyZ3dK3vEyg7qvW7rO0t4WZx8gSM36FBOzknchQwNWatYwhXhrdUdsPidVQA3hbDkBk1dRv68BjczU6rYNP%2Bf7U7OFK42%2FGopVDl85i4wnvy4wAY6pgGEGI%2FBJ6p96neq11NKlZXDFFC0ly%2F%2FvBDfjtFPc7k%2F9a1jgfG8ml0SSSV4%2BPreOQkj5C8JWh8xkMzNDtE1uEPsATyuFvoEB%2FtPFcohdggjtB8RHKpVO%2F1F0yKZM04L9r%2FAtmvLRQGBrhh9g27g4FrVLmXSN3dbs4V1pomhX66s3P%2B9QkXlWX9g2jEtV3n3zNJ%2FDKD%2FiOwn6pYCqSj3WKGtjGAAYPWz&X-Amz-Signature=77e4f7422e20efcf5cddf33ac031e5100b865049cbc4d564f5d92db58dcfa77d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDH24GTP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBkRJ7azWVw1Etfl7JGfUvMIqm3%2Bs1P7zd5pD7Pp7KwAiB2r1Ajbkw4h3CM1MfpAdO8YP6fSJmzvGVMsjbU6Q4fOSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMsU0V929Lh3Zfq9RFKtwD3YI0j1aA%2BJaKnDvM0ezx7XmtipQps%2B9i9Ff1DNdSic3n%2F6oykpe9XaVzjT1dsmI57BHk7m9UKqe5V9ky4VXlc0AvxLW29WxEIVU6%2FYeHvWZ0Rlp4kSH%2BkyGzhD7fFo%2FYPwZqFs1h6QzxB3%2Bqvg1bJyGy%2FgL0JawVKF%2FZYMmzGHekrFfrpd6cu7Mj%2FdurOUdQP3OcbqPWrj2lm%2B4nIXRMO0Y%2B4cGsh3kNW0mYIg27YzyrvTQyXZGkBNnkWbxmL5iT%2FJBuPQHl8YX0I7A4y8kmCOvBAxYisyj4lVLbtwedVAH0%2B%2BtPk0BPn3ub3pSDzSLkP8f3LAY2a62YP9Qane0r7mQDNhBANl0j7ntolzQSQ9ig0uklegrEbMS41QROfrH1KvwJWC1RKas21CNKo%2FstS54SHi1cTj5dO5gDKxBsRSazHAaFdbKow63oWR98R0iEEZiMeiXMpnKFNQdUvlr%2BxZPkbzePBFvVzX9VOp5iyyBbKpyk%2FhsqPo%2BGMtdDdpEM4YLUM2Bub%2FqHGcjelwjeyZ3dK3vEyg7qvW7rO0t4WZx8gSM36FBOzknchQwNWatYwhXhrdUdsPidVQA3hbDkBk1dRv68BjczU6rYNP%2Bf7U7OFK42%2FGopVDl85i4wnvy4wAY6pgGEGI%2FBJ6p96neq11NKlZXDFFC0ly%2F%2FvBDfjtFPc7k%2F9a1jgfG8ml0SSSV4%2BPreOQkj5C8JWh8xkMzNDtE1uEPsATyuFvoEB%2FtPFcohdggjtB8RHKpVO%2F1F0yKZM04L9r%2FAtmvLRQGBrhh9g27g4FrVLmXSN3dbs4V1pomhX66s3P%2B9QkXlWX9g2jEtV3n3zNJ%2FDKD%2FiOwn6pYCqSj3WKGtjGAAYPWz&X-Amz-Signature=3c043192c76c5de9563ac9029e61353e8010f112f7823033f687c11b93e22938&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDH24GTP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBkRJ7azWVw1Etfl7JGfUvMIqm3%2Bs1P7zd5pD7Pp7KwAiB2r1Ajbkw4h3CM1MfpAdO8YP6fSJmzvGVMsjbU6Q4fOSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMsU0V929Lh3Zfq9RFKtwD3YI0j1aA%2BJaKnDvM0ezx7XmtipQps%2B9i9Ff1DNdSic3n%2F6oykpe9XaVzjT1dsmI57BHk7m9UKqe5V9ky4VXlc0AvxLW29WxEIVU6%2FYeHvWZ0Rlp4kSH%2BkyGzhD7fFo%2FYPwZqFs1h6QzxB3%2Bqvg1bJyGy%2FgL0JawVKF%2FZYMmzGHekrFfrpd6cu7Mj%2FdurOUdQP3OcbqPWrj2lm%2B4nIXRMO0Y%2B4cGsh3kNW0mYIg27YzyrvTQyXZGkBNnkWbxmL5iT%2FJBuPQHl8YX0I7A4y8kmCOvBAxYisyj4lVLbtwedVAH0%2B%2BtPk0BPn3ub3pSDzSLkP8f3LAY2a62YP9Qane0r7mQDNhBANl0j7ntolzQSQ9ig0uklegrEbMS41QROfrH1KvwJWC1RKas21CNKo%2FstS54SHi1cTj5dO5gDKxBsRSazHAaFdbKow63oWR98R0iEEZiMeiXMpnKFNQdUvlr%2BxZPkbzePBFvVzX9VOp5iyyBbKpyk%2FhsqPo%2BGMtdDdpEM4YLUM2Bub%2FqHGcjelwjeyZ3dK3vEyg7qvW7rO0t4WZx8gSM36FBOzknchQwNWatYwhXhrdUdsPidVQA3hbDkBk1dRv68BjczU6rYNP%2Bf7U7OFK42%2FGopVDl85i4wnvy4wAY6pgGEGI%2FBJ6p96neq11NKlZXDFFC0ly%2F%2FvBDfjtFPc7k%2F9a1jgfG8ml0SSSV4%2BPreOQkj5C8JWh8xkMzNDtE1uEPsATyuFvoEB%2FtPFcohdggjtB8RHKpVO%2F1F0yKZM04L9r%2FAtmvLRQGBrhh9g27g4FrVLmXSN3dbs4V1pomhX66s3P%2B9QkXlWX9g2jEtV3n3zNJ%2FDKD%2FiOwn6pYCqSj3WKGtjGAAYPWz&X-Amz-Signature=e1afd1420e9df6e2ce00913de8f2fdc07d50b6b260eb27fd7e2552495f6ccc3b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDH24GTP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBkRJ7azWVw1Etfl7JGfUvMIqm3%2Bs1P7zd5pD7Pp7KwAiB2r1Ajbkw4h3CM1MfpAdO8YP6fSJmzvGVMsjbU6Q4fOSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMsU0V929Lh3Zfq9RFKtwD3YI0j1aA%2BJaKnDvM0ezx7XmtipQps%2B9i9Ff1DNdSic3n%2F6oykpe9XaVzjT1dsmI57BHk7m9UKqe5V9ky4VXlc0AvxLW29WxEIVU6%2FYeHvWZ0Rlp4kSH%2BkyGzhD7fFo%2FYPwZqFs1h6QzxB3%2Bqvg1bJyGy%2FgL0JawVKF%2FZYMmzGHekrFfrpd6cu7Mj%2FdurOUdQP3OcbqPWrj2lm%2B4nIXRMO0Y%2B4cGsh3kNW0mYIg27YzyrvTQyXZGkBNnkWbxmL5iT%2FJBuPQHl8YX0I7A4y8kmCOvBAxYisyj4lVLbtwedVAH0%2B%2BtPk0BPn3ub3pSDzSLkP8f3LAY2a62YP9Qane0r7mQDNhBANl0j7ntolzQSQ9ig0uklegrEbMS41QROfrH1KvwJWC1RKas21CNKo%2FstS54SHi1cTj5dO5gDKxBsRSazHAaFdbKow63oWR98R0iEEZiMeiXMpnKFNQdUvlr%2BxZPkbzePBFvVzX9VOp5iyyBbKpyk%2FhsqPo%2BGMtdDdpEM4YLUM2Bub%2FqHGcjelwjeyZ3dK3vEyg7qvW7rO0t4WZx8gSM36FBOzknchQwNWatYwhXhrdUdsPidVQA3hbDkBk1dRv68BjczU6rYNP%2Bf7U7OFK42%2FGopVDl85i4wnvy4wAY6pgGEGI%2FBJ6p96neq11NKlZXDFFC0ly%2F%2FvBDfjtFPc7k%2F9a1jgfG8ml0SSSV4%2BPreOQkj5C8JWh8xkMzNDtE1uEPsATyuFvoEB%2FtPFcohdggjtB8RHKpVO%2F1F0yKZM04L9r%2FAtmvLRQGBrhh9g27g4FrVLmXSN3dbs4V1pomhX66s3P%2B9QkXlWX9g2jEtV3n3zNJ%2FDKD%2FiOwn6pYCqSj3WKGtjGAAYPWz&X-Amz-Signature=3343a46f5a9dff0b8a64e9f2915ba84c8f04fb211322047cc93537c39ec50950&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDH24GTP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBkRJ7azWVw1Etfl7JGfUvMIqm3%2Bs1P7zd5pD7Pp7KwAiB2r1Ajbkw4h3CM1MfpAdO8YP6fSJmzvGVMsjbU6Q4fOSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMsU0V929Lh3Zfq9RFKtwD3YI0j1aA%2BJaKnDvM0ezx7XmtipQps%2B9i9Ff1DNdSic3n%2F6oykpe9XaVzjT1dsmI57BHk7m9UKqe5V9ky4VXlc0AvxLW29WxEIVU6%2FYeHvWZ0Rlp4kSH%2BkyGzhD7fFo%2FYPwZqFs1h6QzxB3%2Bqvg1bJyGy%2FgL0JawVKF%2FZYMmzGHekrFfrpd6cu7Mj%2FdurOUdQP3OcbqPWrj2lm%2B4nIXRMO0Y%2B4cGsh3kNW0mYIg27YzyrvTQyXZGkBNnkWbxmL5iT%2FJBuPQHl8YX0I7A4y8kmCOvBAxYisyj4lVLbtwedVAH0%2B%2BtPk0BPn3ub3pSDzSLkP8f3LAY2a62YP9Qane0r7mQDNhBANl0j7ntolzQSQ9ig0uklegrEbMS41QROfrH1KvwJWC1RKas21CNKo%2FstS54SHi1cTj5dO5gDKxBsRSazHAaFdbKow63oWR98R0iEEZiMeiXMpnKFNQdUvlr%2BxZPkbzePBFvVzX9VOp5iyyBbKpyk%2FhsqPo%2BGMtdDdpEM4YLUM2Bub%2FqHGcjelwjeyZ3dK3vEyg7qvW7rO0t4WZx8gSM36FBOzknchQwNWatYwhXhrdUdsPidVQA3hbDkBk1dRv68BjczU6rYNP%2Bf7U7OFK42%2FGopVDl85i4wnvy4wAY6pgGEGI%2FBJ6p96neq11NKlZXDFFC0ly%2F%2FvBDfjtFPc7k%2F9a1jgfG8ml0SSSV4%2BPreOQkj5C8JWh8xkMzNDtE1uEPsATyuFvoEB%2FtPFcohdggjtB8RHKpVO%2F1F0yKZM04L9r%2FAtmvLRQGBrhh9g27g4FrVLmXSN3dbs4V1pomhX66s3P%2B9QkXlWX9g2jEtV3n3zNJ%2FDKD%2FiOwn6pYCqSj3WKGtjGAAYPWz&X-Amz-Signature=381bed6f49fd1e41b96405820e1a564c511385af0fdf0c9dd768e78af6173921&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDH24GTP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBkRJ7azWVw1Etfl7JGfUvMIqm3%2Bs1P7zd5pD7Pp7KwAiB2r1Ajbkw4h3CM1MfpAdO8YP6fSJmzvGVMsjbU6Q4fOSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMsU0V929Lh3Zfq9RFKtwD3YI0j1aA%2BJaKnDvM0ezx7XmtipQps%2B9i9Ff1DNdSic3n%2F6oykpe9XaVzjT1dsmI57BHk7m9UKqe5V9ky4VXlc0AvxLW29WxEIVU6%2FYeHvWZ0Rlp4kSH%2BkyGzhD7fFo%2FYPwZqFs1h6QzxB3%2Bqvg1bJyGy%2FgL0JawVKF%2FZYMmzGHekrFfrpd6cu7Mj%2FdurOUdQP3OcbqPWrj2lm%2B4nIXRMO0Y%2B4cGsh3kNW0mYIg27YzyrvTQyXZGkBNnkWbxmL5iT%2FJBuPQHl8YX0I7A4y8kmCOvBAxYisyj4lVLbtwedVAH0%2B%2BtPk0BPn3ub3pSDzSLkP8f3LAY2a62YP9Qane0r7mQDNhBANl0j7ntolzQSQ9ig0uklegrEbMS41QROfrH1KvwJWC1RKas21CNKo%2FstS54SHi1cTj5dO5gDKxBsRSazHAaFdbKow63oWR98R0iEEZiMeiXMpnKFNQdUvlr%2BxZPkbzePBFvVzX9VOp5iyyBbKpyk%2FhsqPo%2BGMtdDdpEM4YLUM2Bub%2FqHGcjelwjeyZ3dK3vEyg7qvW7rO0t4WZx8gSM36FBOzknchQwNWatYwhXhrdUdsPidVQA3hbDkBk1dRv68BjczU6rYNP%2Bf7U7OFK42%2FGopVDl85i4wnvy4wAY6pgGEGI%2FBJ6p96neq11NKlZXDFFC0ly%2F%2FvBDfjtFPc7k%2F9a1jgfG8ml0SSSV4%2BPreOQkj5C8JWh8xkMzNDtE1uEPsATyuFvoEB%2FtPFcohdggjtB8RHKpVO%2F1F0yKZM04L9r%2FAtmvLRQGBrhh9g27g4FrVLmXSN3dbs4V1pomhX66s3P%2B9QkXlWX9g2jEtV3n3zNJ%2FDKD%2FiOwn6pYCqSj3WKGtjGAAYPWz&X-Amz-Signature=975cfc6d13671c5030069b88af0a593dabc9ef312d6fb03d73b307045b62a922&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDH24GTP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBkRJ7azWVw1Etfl7JGfUvMIqm3%2Bs1P7zd5pD7Pp7KwAiB2r1Ajbkw4h3CM1MfpAdO8YP6fSJmzvGVMsjbU6Q4fOSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMsU0V929Lh3Zfq9RFKtwD3YI0j1aA%2BJaKnDvM0ezx7XmtipQps%2B9i9Ff1DNdSic3n%2F6oykpe9XaVzjT1dsmI57BHk7m9UKqe5V9ky4VXlc0AvxLW29WxEIVU6%2FYeHvWZ0Rlp4kSH%2BkyGzhD7fFo%2FYPwZqFs1h6QzxB3%2Bqvg1bJyGy%2FgL0JawVKF%2FZYMmzGHekrFfrpd6cu7Mj%2FdurOUdQP3OcbqPWrj2lm%2B4nIXRMO0Y%2B4cGsh3kNW0mYIg27YzyrvTQyXZGkBNnkWbxmL5iT%2FJBuPQHl8YX0I7A4y8kmCOvBAxYisyj4lVLbtwedVAH0%2B%2BtPk0BPn3ub3pSDzSLkP8f3LAY2a62YP9Qane0r7mQDNhBANl0j7ntolzQSQ9ig0uklegrEbMS41QROfrH1KvwJWC1RKas21CNKo%2FstS54SHi1cTj5dO5gDKxBsRSazHAaFdbKow63oWR98R0iEEZiMeiXMpnKFNQdUvlr%2BxZPkbzePBFvVzX9VOp5iyyBbKpyk%2FhsqPo%2BGMtdDdpEM4YLUM2Bub%2FqHGcjelwjeyZ3dK3vEyg7qvW7rO0t4WZx8gSM36FBOzknchQwNWatYwhXhrdUdsPidVQA3hbDkBk1dRv68BjczU6rYNP%2Bf7U7OFK42%2FGopVDl85i4wnvy4wAY6pgGEGI%2FBJ6p96neq11NKlZXDFFC0ly%2F%2FvBDfjtFPc7k%2F9a1jgfG8ml0SSSV4%2BPreOQkj5C8JWh8xkMzNDtE1uEPsATyuFvoEB%2FtPFcohdggjtB8RHKpVO%2F1F0yKZM04L9r%2FAtmvLRQGBrhh9g27g4FrVLmXSN3dbs4V1pomhX66s3P%2B9QkXlWX9g2jEtV3n3zNJ%2FDKD%2FiOwn6pYCqSj3WKGtjGAAYPWz&X-Amz-Signature=8fff22dbb5de1776ca58332dfe0b380e105a5a410ca82bc09f2bf415a0ed6cde&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDH24GTP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBkRJ7azWVw1Etfl7JGfUvMIqm3%2Bs1P7zd5pD7Pp7KwAiB2r1Ajbkw4h3CM1MfpAdO8YP6fSJmzvGVMsjbU6Q4fOSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMsU0V929Lh3Zfq9RFKtwD3YI0j1aA%2BJaKnDvM0ezx7XmtipQps%2B9i9Ff1DNdSic3n%2F6oykpe9XaVzjT1dsmI57BHk7m9UKqe5V9ky4VXlc0AvxLW29WxEIVU6%2FYeHvWZ0Rlp4kSH%2BkyGzhD7fFo%2FYPwZqFs1h6QzxB3%2Bqvg1bJyGy%2FgL0JawVKF%2FZYMmzGHekrFfrpd6cu7Mj%2FdurOUdQP3OcbqPWrj2lm%2B4nIXRMO0Y%2B4cGsh3kNW0mYIg27YzyrvTQyXZGkBNnkWbxmL5iT%2FJBuPQHl8YX0I7A4y8kmCOvBAxYisyj4lVLbtwedVAH0%2B%2BtPk0BPn3ub3pSDzSLkP8f3LAY2a62YP9Qane0r7mQDNhBANl0j7ntolzQSQ9ig0uklegrEbMS41QROfrH1KvwJWC1RKas21CNKo%2FstS54SHi1cTj5dO5gDKxBsRSazHAaFdbKow63oWR98R0iEEZiMeiXMpnKFNQdUvlr%2BxZPkbzePBFvVzX9VOp5iyyBbKpyk%2FhsqPo%2BGMtdDdpEM4YLUM2Bub%2FqHGcjelwjeyZ3dK3vEyg7qvW7rO0t4WZx8gSM36FBOzknchQwNWatYwhXhrdUdsPidVQA3hbDkBk1dRv68BjczU6rYNP%2Bf7U7OFK42%2FGopVDl85i4wnvy4wAY6pgGEGI%2FBJ6p96neq11NKlZXDFFC0ly%2F%2FvBDfjtFPc7k%2F9a1jgfG8ml0SSSV4%2BPreOQkj5C8JWh8xkMzNDtE1uEPsATyuFvoEB%2FtPFcohdggjtB8RHKpVO%2F1F0yKZM04L9r%2FAtmvLRQGBrhh9g27g4FrVLmXSN3dbs4V1pomhX66s3P%2B9QkXlWX9g2jEtV3n3zNJ%2FDKD%2FiOwn6pYCqSj3WKGtjGAAYPWz&X-Amz-Signature=79d73def2124b559dd98882f1419f8017f293774eceb99450703f4ce32929c28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
