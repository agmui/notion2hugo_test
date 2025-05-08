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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMNJV6E%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBR6bn%2BSvDoI0o%2Bm9XgO%2FjBuFc7y5veE8gmyEJCheaHAIhAI9hi7WdJV48eWV%2BLabE1nLTwyNr3jSbgfIWfdEAgK1CKv8DCHAQABoMNjM3NDIzMTgzODA1Igx5rAEMRIYSt5Du0pEq3APQGSKw1nzstifNuJUq53ReUzpptutJtC5mV%2Fq3aJmC2PkkKrzW%2B%2F8vrqaqtDsAc99KuDusKABYQQD13I6kYO4ZwozillAqYzLOJMP0EPYd2iErMfO42q6KwULlr4JaaA18gJvLjhAyAYnz7TNQGRvwSXpcvgRH6imzjfY52yf4D9QcuDApEKOMZHEmOBRzPYppC6Emv3fDE%2F3FP%2F1DGczKJssznuWiWJ0GR8NxeuHKeIIZ%2FwJJkUMBJzWijIVaUwDNZ1uteVYGm9FKBDRekoVwryqYgw5ouy3F8KTaadfFpltyP4%2BvPRhW6N%2F8S8bHbDjZby081YldZqGKJkdxguvu09dooeDKkRPUcta7Ou6giBvNKjoZrd22FpRpIF7%2F93ytX%2FJRmyCO4BIAvq7K01Rlzm2OaXIvSlShrFPA63uI%2BJca8AZAawcPin1rIwihLDkWTsbNflTTygl8k3OHP5C2QYM8M59r%2BzEv6YEfwvmILOA5WTjwxoUhO33KIKQMA9l57n7h3ZtDsDLuQK6Q0Ta0ym17QkAq4B2TJ7hXzSV6njZeqB7KJJLBluLjC1%2BsKOTgHMM1EbRjM0EJMf0ci23KnREg%2FEwBn8%2FDyK9Jcw8hnUJavOCHdXLbycad0TDIq%2FHABjqkAbbgq3bAHxmzYkRFHP90Xx8Sd%2Bf5NvDK6RbUnhOVGAFdhKQAhA93y5vKhC9frZhtIj%2BK4XRd6IOJw6WxfMb02cDqagba2%2BZvwuPBZHAA7IAYJhONizPgoc%2FWwR7r7Y6jpwqm3BD96zAVslCOSrQx8mE1LsOQ76YD1OEktgqVUAdEGTRhTb%2Bk%2F56n2ZvcvUvCPy8IM8rmLd2ISTUolrtJ6AtcyP2w&X-Amz-Signature=6b643c1cfc2ab22af2f0fa4ef7545f3baa1d4c99ec58d9158813835004609256&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMNJV6E%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBR6bn%2BSvDoI0o%2Bm9XgO%2FjBuFc7y5veE8gmyEJCheaHAIhAI9hi7WdJV48eWV%2BLabE1nLTwyNr3jSbgfIWfdEAgK1CKv8DCHAQABoMNjM3NDIzMTgzODA1Igx5rAEMRIYSt5Du0pEq3APQGSKw1nzstifNuJUq53ReUzpptutJtC5mV%2Fq3aJmC2PkkKrzW%2B%2F8vrqaqtDsAc99KuDusKABYQQD13I6kYO4ZwozillAqYzLOJMP0EPYd2iErMfO42q6KwULlr4JaaA18gJvLjhAyAYnz7TNQGRvwSXpcvgRH6imzjfY52yf4D9QcuDApEKOMZHEmOBRzPYppC6Emv3fDE%2F3FP%2F1DGczKJssznuWiWJ0GR8NxeuHKeIIZ%2FwJJkUMBJzWijIVaUwDNZ1uteVYGm9FKBDRekoVwryqYgw5ouy3F8KTaadfFpltyP4%2BvPRhW6N%2F8S8bHbDjZby081YldZqGKJkdxguvu09dooeDKkRPUcta7Ou6giBvNKjoZrd22FpRpIF7%2F93ytX%2FJRmyCO4BIAvq7K01Rlzm2OaXIvSlShrFPA63uI%2BJca8AZAawcPin1rIwihLDkWTsbNflTTygl8k3OHP5C2QYM8M59r%2BzEv6YEfwvmILOA5WTjwxoUhO33KIKQMA9l57n7h3ZtDsDLuQK6Q0Ta0ym17QkAq4B2TJ7hXzSV6njZeqB7KJJLBluLjC1%2BsKOTgHMM1EbRjM0EJMf0ci23KnREg%2FEwBn8%2FDyK9Jcw8hnUJavOCHdXLbycad0TDIq%2FHABjqkAbbgq3bAHxmzYkRFHP90Xx8Sd%2Bf5NvDK6RbUnhOVGAFdhKQAhA93y5vKhC9frZhtIj%2BK4XRd6IOJw6WxfMb02cDqagba2%2BZvwuPBZHAA7IAYJhONizPgoc%2FWwR7r7Y6jpwqm3BD96zAVslCOSrQx8mE1LsOQ76YD1OEktgqVUAdEGTRhTb%2Bk%2F56n2ZvcvUvCPy8IM8rmLd2ISTUolrtJ6AtcyP2w&X-Amz-Signature=b13c4d01b25a5f7c81d818f318aa78f27b18ae58fbd2b9c64af10a444819a69d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMNJV6E%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBR6bn%2BSvDoI0o%2Bm9XgO%2FjBuFc7y5veE8gmyEJCheaHAIhAI9hi7WdJV48eWV%2BLabE1nLTwyNr3jSbgfIWfdEAgK1CKv8DCHAQABoMNjM3NDIzMTgzODA1Igx5rAEMRIYSt5Du0pEq3APQGSKw1nzstifNuJUq53ReUzpptutJtC5mV%2Fq3aJmC2PkkKrzW%2B%2F8vrqaqtDsAc99KuDusKABYQQD13I6kYO4ZwozillAqYzLOJMP0EPYd2iErMfO42q6KwULlr4JaaA18gJvLjhAyAYnz7TNQGRvwSXpcvgRH6imzjfY52yf4D9QcuDApEKOMZHEmOBRzPYppC6Emv3fDE%2F3FP%2F1DGczKJssznuWiWJ0GR8NxeuHKeIIZ%2FwJJkUMBJzWijIVaUwDNZ1uteVYGm9FKBDRekoVwryqYgw5ouy3F8KTaadfFpltyP4%2BvPRhW6N%2F8S8bHbDjZby081YldZqGKJkdxguvu09dooeDKkRPUcta7Ou6giBvNKjoZrd22FpRpIF7%2F93ytX%2FJRmyCO4BIAvq7K01Rlzm2OaXIvSlShrFPA63uI%2BJca8AZAawcPin1rIwihLDkWTsbNflTTygl8k3OHP5C2QYM8M59r%2BzEv6YEfwvmILOA5WTjwxoUhO33KIKQMA9l57n7h3ZtDsDLuQK6Q0Ta0ym17QkAq4B2TJ7hXzSV6njZeqB7KJJLBluLjC1%2BsKOTgHMM1EbRjM0EJMf0ci23KnREg%2FEwBn8%2FDyK9Jcw8hnUJavOCHdXLbycad0TDIq%2FHABjqkAbbgq3bAHxmzYkRFHP90Xx8Sd%2Bf5NvDK6RbUnhOVGAFdhKQAhA93y5vKhC9frZhtIj%2BK4XRd6IOJw6WxfMb02cDqagba2%2BZvwuPBZHAA7IAYJhONizPgoc%2FWwR7r7Y6jpwqm3BD96zAVslCOSrQx8mE1LsOQ76YD1OEktgqVUAdEGTRhTb%2Bk%2F56n2ZvcvUvCPy8IM8rmLd2ISTUolrtJ6AtcyP2w&X-Amz-Signature=6a2e590ea9150d1a30db51ec729fbe64a865dc1cb64ac457cc4f7a7cc7c40f80&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMNJV6E%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBR6bn%2BSvDoI0o%2Bm9XgO%2FjBuFc7y5veE8gmyEJCheaHAIhAI9hi7WdJV48eWV%2BLabE1nLTwyNr3jSbgfIWfdEAgK1CKv8DCHAQABoMNjM3NDIzMTgzODA1Igx5rAEMRIYSt5Du0pEq3APQGSKw1nzstifNuJUq53ReUzpptutJtC5mV%2Fq3aJmC2PkkKrzW%2B%2F8vrqaqtDsAc99KuDusKABYQQD13I6kYO4ZwozillAqYzLOJMP0EPYd2iErMfO42q6KwULlr4JaaA18gJvLjhAyAYnz7TNQGRvwSXpcvgRH6imzjfY52yf4D9QcuDApEKOMZHEmOBRzPYppC6Emv3fDE%2F3FP%2F1DGczKJssznuWiWJ0GR8NxeuHKeIIZ%2FwJJkUMBJzWijIVaUwDNZ1uteVYGm9FKBDRekoVwryqYgw5ouy3F8KTaadfFpltyP4%2BvPRhW6N%2F8S8bHbDjZby081YldZqGKJkdxguvu09dooeDKkRPUcta7Ou6giBvNKjoZrd22FpRpIF7%2F93ytX%2FJRmyCO4BIAvq7K01Rlzm2OaXIvSlShrFPA63uI%2BJca8AZAawcPin1rIwihLDkWTsbNflTTygl8k3OHP5C2QYM8M59r%2BzEv6YEfwvmILOA5WTjwxoUhO33KIKQMA9l57n7h3ZtDsDLuQK6Q0Ta0ym17QkAq4B2TJ7hXzSV6njZeqB7KJJLBluLjC1%2BsKOTgHMM1EbRjM0EJMf0ci23KnREg%2FEwBn8%2FDyK9Jcw8hnUJavOCHdXLbycad0TDIq%2FHABjqkAbbgq3bAHxmzYkRFHP90Xx8Sd%2Bf5NvDK6RbUnhOVGAFdhKQAhA93y5vKhC9frZhtIj%2BK4XRd6IOJw6WxfMb02cDqagba2%2BZvwuPBZHAA7IAYJhONizPgoc%2FWwR7r7Y6jpwqm3BD96zAVslCOSrQx8mE1LsOQ76YD1OEktgqVUAdEGTRhTb%2Bk%2F56n2ZvcvUvCPy8IM8rmLd2ISTUolrtJ6AtcyP2w&X-Amz-Signature=c45a68f707008483864a1f4e2b3b1398edd3cda0fe3af4d49fe7f281a5371692&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMNJV6E%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBR6bn%2BSvDoI0o%2Bm9XgO%2FjBuFc7y5veE8gmyEJCheaHAIhAI9hi7WdJV48eWV%2BLabE1nLTwyNr3jSbgfIWfdEAgK1CKv8DCHAQABoMNjM3NDIzMTgzODA1Igx5rAEMRIYSt5Du0pEq3APQGSKw1nzstifNuJUq53ReUzpptutJtC5mV%2Fq3aJmC2PkkKrzW%2B%2F8vrqaqtDsAc99KuDusKABYQQD13I6kYO4ZwozillAqYzLOJMP0EPYd2iErMfO42q6KwULlr4JaaA18gJvLjhAyAYnz7TNQGRvwSXpcvgRH6imzjfY52yf4D9QcuDApEKOMZHEmOBRzPYppC6Emv3fDE%2F3FP%2F1DGczKJssznuWiWJ0GR8NxeuHKeIIZ%2FwJJkUMBJzWijIVaUwDNZ1uteVYGm9FKBDRekoVwryqYgw5ouy3F8KTaadfFpltyP4%2BvPRhW6N%2F8S8bHbDjZby081YldZqGKJkdxguvu09dooeDKkRPUcta7Ou6giBvNKjoZrd22FpRpIF7%2F93ytX%2FJRmyCO4BIAvq7K01Rlzm2OaXIvSlShrFPA63uI%2BJca8AZAawcPin1rIwihLDkWTsbNflTTygl8k3OHP5C2QYM8M59r%2BzEv6YEfwvmILOA5WTjwxoUhO33KIKQMA9l57n7h3ZtDsDLuQK6Q0Ta0ym17QkAq4B2TJ7hXzSV6njZeqB7KJJLBluLjC1%2BsKOTgHMM1EbRjM0EJMf0ci23KnREg%2FEwBn8%2FDyK9Jcw8hnUJavOCHdXLbycad0TDIq%2FHABjqkAbbgq3bAHxmzYkRFHP90Xx8Sd%2Bf5NvDK6RbUnhOVGAFdhKQAhA93y5vKhC9frZhtIj%2BK4XRd6IOJw6WxfMb02cDqagba2%2BZvwuPBZHAA7IAYJhONizPgoc%2FWwR7r7Y6jpwqm3BD96zAVslCOSrQx8mE1LsOQ76YD1OEktgqVUAdEGTRhTb%2Bk%2F56n2ZvcvUvCPy8IM8rmLd2ISTUolrtJ6AtcyP2w&X-Amz-Signature=64ec5119ea3ae2086b3b9c923a9aeda9a50a848f456bf477c4f0d927c407e223&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMNJV6E%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBR6bn%2BSvDoI0o%2Bm9XgO%2FjBuFc7y5veE8gmyEJCheaHAIhAI9hi7WdJV48eWV%2BLabE1nLTwyNr3jSbgfIWfdEAgK1CKv8DCHAQABoMNjM3NDIzMTgzODA1Igx5rAEMRIYSt5Du0pEq3APQGSKw1nzstifNuJUq53ReUzpptutJtC5mV%2Fq3aJmC2PkkKrzW%2B%2F8vrqaqtDsAc99KuDusKABYQQD13I6kYO4ZwozillAqYzLOJMP0EPYd2iErMfO42q6KwULlr4JaaA18gJvLjhAyAYnz7TNQGRvwSXpcvgRH6imzjfY52yf4D9QcuDApEKOMZHEmOBRzPYppC6Emv3fDE%2F3FP%2F1DGczKJssznuWiWJ0GR8NxeuHKeIIZ%2FwJJkUMBJzWijIVaUwDNZ1uteVYGm9FKBDRekoVwryqYgw5ouy3F8KTaadfFpltyP4%2BvPRhW6N%2F8S8bHbDjZby081YldZqGKJkdxguvu09dooeDKkRPUcta7Ou6giBvNKjoZrd22FpRpIF7%2F93ytX%2FJRmyCO4BIAvq7K01Rlzm2OaXIvSlShrFPA63uI%2BJca8AZAawcPin1rIwihLDkWTsbNflTTygl8k3OHP5C2QYM8M59r%2BzEv6YEfwvmILOA5WTjwxoUhO33KIKQMA9l57n7h3ZtDsDLuQK6Q0Ta0ym17QkAq4B2TJ7hXzSV6njZeqB7KJJLBluLjC1%2BsKOTgHMM1EbRjM0EJMf0ci23KnREg%2FEwBn8%2FDyK9Jcw8hnUJavOCHdXLbycad0TDIq%2FHABjqkAbbgq3bAHxmzYkRFHP90Xx8Sd%2Bf5NvDK6RbUnhOVGAFdhKQAhA93y5vKhC9frZhtIj%2BK4XRd6IOJw6WxfMb02cDqagba2%2BZvwuPBZHAA7IAYJhONizPgoc%2FWwR7r7Y6jpwqm3BD96zAVslCOSrQx8mE1LsOQ76YD1OEktgqVUAdEGTRhTb%2Bk%2F56n2ZvcvUvCPy8IM8rmLd2ISTUolrtJ6AtcyP2w&X-Amz-Signature=9af26760f2171c96bd31ea77a9d48076552c51f4a2d353f760597a6a0f0cda75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMNJV6E%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBR6bn%2BSvDoI0o%2Bm9XgO%2FjBuFc7y5veE8gmyEJCheaHAIhAI9hi7WdJV48eWV%2BLabE1nLTwyNr3jSbgfIWfdEAgK1CKv8DCHAQABoMNjM3NDIzMTgzODA1Igx5rAEMRIYSt5Du0pEq3APQGSKw1nzstifNuJUq53ReUzpptutJtC5mV%2Fq3aJmC2PkkKrzW%2B%2F8vrqaqtDsAc99KuDusKABYQQD13I6kYO4ZwozillAqYzLOJMP0EPYd2iErMfO42q6KwULlr4JaaA18gJvLjhAyAYnz7TNQGRvwSXpcvgRH6imzjfY52yf4D9QcuDApEKOMZHEmOBRzPYppC6Emv3fDE%2F3FP%2F1DGczKJssznuWiWJ0GR8NxeuHKeIIZ%2FwJJkUMBJzWijIVaUwDNZ1uteVYGm9FKBDRekoVwryqYgw5ouy3F8KTaadfFpltyP4%2BvPRhW6N%2F8S8bHbDjZby081YldZqGKJkdxguvu09dooeDKkRPUcta7Ou6giBvNKjoZrd22FpRpIF7%2F93ytX%2FJRmyCO4BIAvq7K01Rlzm2OaXIvSlShrFPA63uI%2BJca8AZAawcPin1rIwihLDkWTsbNflTTygl8k3OHP5C2QYM8M59r%2BzEv6YEfwvmILOA5WTjwxoUhO33KIKQMA9l57n7h3ZtDsDLuQK6Q0Ta0ym17QkAq4B2TJ7hXzSV6njZeqB7KJJLBluLjC1%2BsKOTgHMM1EbRjM0EJMf0ci23KnREg%2FEwBn8%2FDyK9Jcw8hnUJavOCHdXLbycad0TDIq%2FHABjqkAbbgq3bAHxmzYkRFHP90Xx8Sd%2Bf5NvDK6RbUnhOVGAFdhKQAhA93y5vKhC9frZhtIj%2BK4XRd6IOJw6WxfMb02cDqagba2%2BZvwuPBZHAA7IAYJhONizPgoc%2FWwR7r7Y6jpwqm3BD96zAVslCOSrQx8mE1LsOQ76YD1OEktgqVUAdEGTRhTb%2Bk%2F56n2ZvcvUvCPy8IM8rmLd2ISTUolrtJ6AtcyP2w&X-Amz-Signature=265e56c808712a9fee0485460567507b20d6074036fed788ad2b3479865e0d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMNJV6E%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBR6bn%2BSvDoI0o%2Bm9XgO%2FjBuFc7y5veE8gmyEJCheaHAIhAI9hi7WdJV48eWV%2BLabE1nLTwyNr3jSbgfIWfdEAgK1CKv8DCHAQABoMNjM3NDIzMTgzODA1Igx5rAEMRIYSt5Du0pEq3APQGSKw1nzstifNuJUq53ReUzpptutJtC5mV%2Fq3aJmC2PkkKrzW%2B%2F8vrqaqtDsAc99KuDusKABYQQD13I6kYO4ZwozillAqYzLOJMP0EPYd2iErMfO42q6KwULlr4JaaA18gJvLjhAyAYnz7TNQGRvwSXpcvgRH6imzjfY52yf4D9QcuDApEKOMZHEmOBRzPYppC6Emv3fDE%2F3FP%2F1DGczKJssznuWiWJ0GR8NxeuHKeIIZ%2FwJJkUMBJzWijIVaUwDNZ1uteVYGm9FKBDRekoVwryqYgw5ouy3F8KTaadfFpltyP4%2BvPRhW6N%2F8S8bHbDjZby081YldZqGKJkdxguvu09dooeDKkRPUcta7Ou6giBvNKjoZrd22FpRpIF7%2F93ytX%2FJRmyCO4BIAvq7K01Rlzm2OaXIvSlShrFPA63uI%2BJca8AZAawcPin1rIwihLDkWTsbNflTTygl8k3OHP5C2QYM8M59r%2BzEv6YEfwvmILOA5WTjwxoUhO33KIKQMA9l57n7h3ZtDsDLuQK6Q0Ta0ym17QkAq4B2TJ7hXzSV6njZeqB7KJJLBluLjC1%2BsKOTgHMM1EbRjM0EJMf0ci23KnREg%2FEwBn8%2FDyK9Jcw8hnUJavOCHdXLbycad0TDIq%2FHABjqkAbbgq3bAHxmzYkRFHP90Xx8Sd%2Bf5NvDK6RbUnhOVGAFdhKQAhA93y5vKhC9frZhtIj%2BK4XRd6IOJw6WxfMb02cDqagba2%2BZvwuPBZHAA7IAYJhONizPgoc%2FWwR7r7Y6jpwqm3BD96zAVslCOSrQx8mE1LsOQ76YD1OEktgqVUAdEGTRhTb%2Bk%2F56n2ZvcvUvCPy8IM8rmLd2ISTUolrtJ6AtcyP2w&X-Amz-Signature=7b757d0ed9a55e313d820f697c4763a8a498fb8610ef2eb097bd261095a0b5e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
