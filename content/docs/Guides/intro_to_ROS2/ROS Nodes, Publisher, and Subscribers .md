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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XDAN6CE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIC9o7Hf8%2FMx8duLPFLr7MJrzhDbqgnc1WtHSMDyc0APKAiALRR9r5cca%2FMdOZZIrwov98BvIXzcTWaMqvqDWLkvgXCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8pfohp9gQ7gfmCwdKtwD3ZVHYvXn6A%2FHGcJowGFUC984kZ%2Fpi1bjQBueEshRdKEHf83EACKSiOrhe0yO8Vv7g7lTTGyj3OCFaPplJo6qxUMpPhinlUkAThOmWQ%2FV1AaHUrczhFiJd0P8Z5h3mXtDVwv6vsHo4KOScg6%2BVS5si%2BL2Scz6ypKrF31vT3%2FjUbAIOyc%2FCgwOQXJZI07oe%2B2Br3aCQK6b2th0mx8AO7iMYhuXnTOz8e77NCZdsD%2BRPDJh4O6fw3VYUNvla7zEQ%2Fr1t2Mf5K%2FZzhRkNttL80fqgXeQypCYqux%2BDtfXY05BjJ5L2ro%2F4%2FEF7wMgV6xi3nLmw%2F%2FviavWO4Hh8cqHyBDXtsc8aA6BkB10pdEed%2FSFtYU%2Fo%2FRb1UJherTnocnsvJbEXNDE6k5aGlMyPZWdcNm4qbI%2FtDVQs0his03H3afl74H%2Bz4J8ZuJi14xTgFL1ymRyF0IzI2AzrtEOvR7H0rllUB7LAF82Cz%2FC3oDjYCd4f9TdL5GWzZIEitzCUJ7tFDRUbdvUvk1KVymgeXVSLQvSlXZEHd4mBwndF%2FZ8RYNsIA%2BVopbeZJLykxFe2nMRgmtlmXHnYfbHWJyNzrMgfLHTBbHwcwfomBK%2Br2Vw29D0ZnMGLFqNfaSVBVLweakwqPiLxAY6pgF2L739K8v5cIFQiMyL2J8cXxISx9d4KsUbw%2Bu51AFCzjM3rkPwgnaW%2BwUxzvA3RfzD5j%2FXVPGo1UEXW0XtOAnflpJWQGGCABAxmuHeYrzp54YhC829aQvGmZCRO1XhPOpOw5Mr3WNp2ieleZtp20YZplZEwppJwApiNVjLBdTD9%2F9eEpuzST26gpVRfJHOrvOn%2BbmavSRlPdtaBmP4iqjye5Gh%2Feh%2B&X-Amz-Signature=93f9f8247b825331e57275de3595de9988a521156a321384a4c4798049b7d7cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XDAN6CE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIC9o7Hf8%2FMx8duLPFLr7MJrzhDbqgnc1WtHSMDyc0APKAiALRR9r5cca%2FMdOZZIrwov98BvIXzcTWaMqvqDWLkvgXCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8pfohp9gQ7gfmCwdKtwD3ZVHYvXn6A%2FHGcJowGFUC984kZ%2Fpi1bjQBueEshRdKEHf83EACKSiOrhe0yO8Vv7g7lTTGyj3OCFaPplJo6qxUMpPhinlUkAThOmWQ%2FV1AaHUrczhFiJd0P8Z5h3mXtDVwv6vsHo4KOScg6%2BVS5si%2BL2Scz6ypKrF31vT3%2FjUbAIOyc%2FCgwOQXJZI07oe%2B2Br3aCQK6b2th0mx8AO7iMYhuXnTOz8e77NCZdsD%2BRPDJh4O6fw3VYUNvla7zEQ%2Fr1t2Mf5K%2FZzhRkNttL80fqgXeQypCYqux%2BDtfXY05BjJ5L2ro%2F4%2FEF7wMgV6xi3nLmw%2F%2FviavWO4Hh8cqHyBDXtsc8aA6BkB10pdEed%2FSFtYU%2Fo%2FRb1UJherTnocnsvJbEXNDE6k5aGlMyPZWdcNm4qbI%2FtDVQs0his03H3afl74H%2Bz4J8ZuJi14xTgFL1ymRyF0IzI2AzrtEOvR7H0rllUB7LAF82Cz%2FC3oDjYCd4f9TdL5GWzZIEitzCUJ7tFDRUbdvUvk1KVymgeXVSLQvSlXZEHd4mBwndF%2FZ8RYNsIA%2BVopbeZJLykxFe2nMRgmtlmXHnYfbHWJyNzrMgfLHTBbHwcwfomBK%2Br2Vw29D0ZnMGLFqNfaSVBVLweakwqPiLxAY6pgF2L739K8v5cIFQiMyL2J8cXxISx9d4KsUbw%2Bu51AFCzjM3rkPwgnaW%2BwUxzvA3RfzD5j%2FXVPGo1UEXW0XtOAnflpJWQGGCABAxmuHeYrzp54YhC829aQvGmZCRO1XhPOpOw5Mr3WNp2ieleZtp20YZplZEwppJwApiNVjLBdTD9%2F9eEpuzST26gpVRfJHOrvOn%2BbmavSRlPdtaBmP4iqjye5Gh%2Feh%2B&X-Amz-Signature=ff6416774b92fa89fadfc8e7df6ac66b63087c31c4f272cd1ea19897b87f18b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XDAN6CE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIC9o7Hf8%2FMx8duLPFLr7MJrzhDbqgnc1WtHSMDyc0APKAiALRR9r5cca%2FMdOZZIrwov98BvIXzcTWaMqvqDWLkvgXCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8pfohp9gQ7gfmCwdKtwD3ZVHYvXn6A%2FHGcJowGFUC984kZ%2Fpi1bjQBueEshRdKEHf83EACKSiOrhe0yO8Vv7g7lTTGyj3OCFaPplJo6qxUMpPhinlUkAThOmWQ%2FV1AaHUrczhFiJd0P8Z5h3mXtDVwv6vsHo4KOScg6%2BVS5si%2BL2Scz6ypKrF31vT3%2FjUbAIOyc%2FCgwOQXJZI07oe%2B2Br3aCQK6b2th0mx8AO7iMYhuXnTOz8e77NCZdsD%2BRPDJh4O6fw3VYUNvla7zEQ%2Fr1t2Mf5K%2FZzhRkNttL80fqgXeQypCYqux%2BDtfXY05BjJ5L2ro%2F4%2FEF7wMgV6xi3nLmw%2F%2FviavWO4Hh8cqHyBDXtsc8aA6BkB10pdEed%2FSFtYU%2Fo%2FRb1UJherTnocnsvJbEXNDE6k5aGlMyPZWdcNm4qbI%2FtDVQs0his03H3afl74H%2Bz4J8ZuJi14xTgFL1ymRyF0IzI2AzrtEOvR7H0rllUB7LAF82Cz%2FC3oDjYCd4f9TdL5GWzZIEitzCUJ7tFDRUbdvUvk1KVymgeXVSLQvSlXZEHd4mBwndF%2FZ8RYNsIA%2BVopbeZJLykxFe2nMRgmtlmXHnYfbHWJyNzrMgfLHTBbHwcwfomBK%2Br2Vw29D0ZnMGLFqNfaSVBVLweakwqPiLxAY6pgF2L739K8v5cIFQiMyL2J8cXxISx9d4KsUbw%2Bu51AFCzjM3rkPwgnaW%2BwUxzvA3RfzD5j%2FXVPGo1UEXW0XtOAnflpJWQGGCABAxmuHeYrzp54YhC829aQvGmZCRO1XhPOpOw5Mr3WNp2ieleZtp20YZplZEwppJwApiNVjLBdTD9%2F9eEpuzST26gpVRfJHOrvOn%2BbmavSRlPdtaBmP4iqjye5Gh%2Feh%2B&X-Amz-Signature=f1362e074495504fbf98300198645fe2ac0ed2193e17fe58804247049062d47f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XDAN6CE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIC9o7Hf8%2FMx8duLPFLr7MJrzhDbqgnc1WtHSMDyc0APKAiALRR9r5cca%2FMdOZZIrwov98BvIXzcTWaMqvqDWLkvgXCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8pfohp9gQ7gfmCwdKtwD3ZVHYvXn6A%2FHGcJowGFUC984kZ%2Fpi1bjQBueEshRdKEHf83EACKSiOrhe0yO8Vv7g7lTTGyj3OCFaPplJo6qxUMpPhinlUkAThOmWQ%2FV1AaHUrczhFiJd0P8Z5h3mXtDVwv6vsHo4KOScg6%2BVS5si%2BL2Scz6ypKrF31vT3%2FjUbAIOyc%2FCgwOQXJZI07oe%2B2Br3aCQK6b2th0mx8AO7iMYhuXnTOz8e77NCZdsD%2BRPDJh4O6fw3VYUNvla7zEQ%2Fr1t2Mf5K%2FZzhRkNttL80fqgXeQypCYqux%2BDtfXY05BjJ5L2ro%2F4%2FEF7wMgV6xi3nLmw%2F%2FviavWO4Hh8cqHyBDXtsc8aA6BkB10pdEed%2FSFtYU%2Fo%2FRb1UJherTnocnsvJbEXNDE6k5aGlMyPZWdcNm4qbI%2FtDVQs0his03H3afl74H%2Bz4J8ZuJi14xTgFL1ymRyF0IzI2AzrtEOvR7H0rllUB7LAF82Cz%2FC3oDjYCd4f9TdL5GWzZIEitzCUJ7tFDRUbdvUvk1KVymgeXVSLQvSlXZEHd4mBwndF%2FZ8RYNsIA%2BVopbeZJLykxFe2nMRgmtlmXHnYfbHWJyNzrMgfLHTBbHwcwfomBK%2Br2Vw29D0ZnMGLFqNfaSVBVLweakwqPiLxAY6pgF2L739K8v5cIFQiMyL2J8cXxISx9d4KsUbw%2Bu51AFCzjM3rkPwgnaW%2BwUxzvA3RfzD5j%2FXVPGo1UEXW0XtOAnflpJWQGGCABAxmuHeYrzp54YhC829aQvGmZCRO1XhPOpOw5Mr3WNp2ieleZtp20YZplZEwppJwApiNVjLBdTD9%2F9eEpuzST26gpVRfJHOrvOn%2BbmavSRlPdtaBmP4iqjye5Gh%2Feh%2B&X-Amz-Signature=006870887dd62798f5e96667e312da98a65359de263030a16d72aea32003b935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XDAN6CE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIC9o7Hf8%2FMx8duLPFLr7MJrzhDbqgnc1WtHSMDyc0APKAiALRR9r5cca%2FMdOZZIrwov98BvIXzcTWaMqvqDWLkvgXCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8pfohp9gQ7gfmCwdKtwD3ZVHYvXn6A%2FHGcJowGFUC984kZ%2Fpi1bjQBueEshRdKEHf83EACKSiOrhe0yO8Vv7g7lTTGyj3OCFaPplJo6qxUMpPhinlUkAThOmWQ%2FV1AaHUrczhFiJd0P8Z5h3mXtDVwv6vsHo4KOScg6%2BVS5si%2BL2Scz6ypKrF31vT3%2FjUbAIOyc%2FCgwOQXJZI07oe%2B2Br3aCQK6b2th0mx8AO7iMYhuXnTOz8e77NCZdsD%2BRPDJh4O6fw3VYUNvla7zEQ%2Fr1t2Mf5K%2FZzhRkNttL80fqgXeQypCYqux%2BDtfXY05BjJ5L2ro%2F4%2FEF7wMgV6xi3nLmw%2F%2FviavWO4Hh8cqHyBDXtsc8aA6BkB10pdEed%2FSFtYU%2Fo%2FRb1UJherTnocnsvJbEXNDE6k5aGlMyPZWdcNm4qbI%2FtDVQs0his03H3afl74H%2Bz4J8ZuJi14xTgFL1ymRyF0IzI2AzrtEOvR7H0rllUB7LAF82Cz%2FC3oDjYCd4f9TdL5GWzZIEitzCUJ7tFDRUbdvUvk1KVymgeXVSLQvSlXZEHd4mBwndF%2FZ8RYNsIA%2BVopbeZJLykxFe2nMRgmtlmXHnYfbHWJyNzrMgfLHTBbHwcwfomBK%2Br2Vw29D0ZnMGLFqNfaSVBVLweakwqPiLxAY6pgF2L739K8v5cIFQiMyL2J8cXxISx9d4KsUbw%2Bu51AFCzjM3rkPwgnaW%2BwUxzvA3RfzD5j%2FXVPGo1UEXW0XtOAnflpJWQGGCABAxmuHeYrzp54YhC829aQvGmZCRO1XhPOpOw5Mr3WNp2ieleZtp20YZplZEwppJwApiNVjLBdTD9%2F9eEpuzST26gpVRfJHOrvOn%2BbmavSRlPdtaBmP4iqjye5Gh%2Feh%2B&X-Amz-Signature=d3a22b262298cae647c2f67011b44a2d19f3138a933bc6ce73386f94c27cc945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XDAN6CE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIC9o7Hf8%2FMx8duLPFLr7MJrzhDbqgnc1WtHSMDyc0APKAiALRR9r5cca%2FMdOZZIrwov98BvIXzcTWaMqvqDWLkvgXCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8pfohp9gQ7gfmCwdKtwD3ZVHYvXn6A%2FHGcJowGFUC984kZ%2Fpi1bjQBueEshRdKEHf83EACKSiOrhe0yO8Vv7g7lTTGyj3OCFaPplJo6qxUMpPhinlUkAThOmWQ%2FV1AaHUrczhFiJd0P8Z5h3mXtDVwv6vsHo4KOScg6%2BVS5si%2BL2Scz6ypKrF31vT3%2FjUbAIOyc%2FCgwOQXJZI07oe%2B2Br3aCQK6b2th0mx8AO7iMYhuXnTOz8e77NCZdsD%2BRPDJh4O6fw3VYUNvla7zEQ%2Fr1t2Mf5K%2FZzhRkNttL80fqgXeQypCYqux%2BDtfXY05BjJ5L2ro%2F4%2FEF7wMgV6xi3nLmw%2F%2FviavWO4Hh8cqHyBDXtsc8aA6BkB10pdEed%2FSFtYU%2Fo%2FRb1UJherTnocnsvJbEXNDE6k5aGlMyPZWdcNm4qbI%2FtDVQs0his03H3afl74H%2Bz4J8ZuJi14xTgFL1ymRyF0IzI2AzrtEOvR7H0rllUB7LAF82Cz%2FC3oDjYCd4f9TdL5GWzZIEitzCUJ7tFDRUbdvUvk1KVymgeXVSLQvSlXZEHd4mBwndF%2FZ8RYNsIA%2BVopbeZJLykxFe2nMRgmtlmXHnYfbHWJyNzrMgfLHTBbHwcwfomBK%2Br2Vw29D0ZnMGLFqNfaSVBVLweakwqPiLxAY6pgF2L739K8v5cIFQiMyL2J8cXxISx9d4KsUbw%2Bu51AFCzjM3rkPwgnaW%2BwUxzvA3RfzD5j%2FXVPGo1UEXW0XtOAnflpJWQGGCABAxmuHeYrzp54YhC829aQvGmZCRO1XhPOpOw5Mr3WNp2ieleZtp20YZplZEwppJwApiNVjLBdTD9%2F9eEpuzST26gpVRfJHOrvOn%2BbmavSRlPdtaBmP4iqjye5Gh%2Feh%2B&X-Amz-Signature=a0035b63a4bac0eb7ad5276bf9e00c91adbd800697d1411bd26fe938338c1e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XDAN6CE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIC9o7Hf8%2FMx8duLPFLr7MJrzhDbqgnc1WtHSMDyc0APKAiALRR9r5cca%2FMdOZZIrwov98BvIXzcTWaMqvqDWLkvgXCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8pfohp9gQ7gfmCwdKtwD3ZVHYvXn6A%2FHGcJowGFUC984kZ%2Fpi1bjQBueEshRdKEHf83EACKSiOrhe0yO8Vv7g7lTTGyj3OCFaPplJo6qxUMpPhinlUkAThOmWQ%2FV1AaHUrczhFiJd0P8Z5h3mXtDVwv6vsHo4KOScg6%2BVS5si%2BL2Scz6ypKrF31vT3%2FjUbAIOyc%2FCgwOQXJZI07oe%2B2Br3aCQK6b2th0mx8AO7iMYhuXnTOz8e77NCZdsD%2BRPDJh4O6fw3VYUNvla7zEQ%2Fr1t2Mf5K%2FZzhRkNttL80fqgXeQypCYqux%2BDtfXY05BjJ5L2ro%2F4%2FEF7wMgV6xi3nLmw%2F%2FviavWO4Hh8cqHyBDXtsc8aA6BkB10pdEed%2FSFtYU%2Fo%2FRb1UJherTnocnsvJbEXNDE6k5aGlMyPZWdcNm4qbI%2FtDVQs0his03H3afl74H%2Bz4J8ZuJi14xTgFL1ymRyF0IzI2AzrtEOvR7H0rllUB7LAF82Cz%2FC3oDjYCd4f9TdL5GWzZIEitzCUJ7tFDRUbdvUvk1KVymgeXVSLQvSlXZEHd4mBwndF%2FZ8RYNsIA%2BVopbeZJLykxFe2nMRgmtlmXHnYfbHWJyNzrMgfLHTBbHwcwfomBK%2Br2Vw29D0ZnMGLFqNfaSVBVLweakwqPiLxAY6pgF2L739K8v5cIFQiMyL2J8cXxISx9d4KsUbw%2Bu51AFCzjM3rkPwgnaW%2BwUxzvA3RfzD5j%2FXVPGo1UEXW0XtOAnflpJWQGGCABAxmuHeYrzp54YhC829aQvGmZCRO1XhPOpOw5Mr3WNp2ieleZtp20YZplZEwppJwApiNVjLBdTD9%2F9eEpuzST26gpVRfJHOrvOn%2BbmavSRlPdtaBmP4iqjye5Gh%2Feh%2B&X-Amz-Signature=ab94515dfbc191703f81da8ef87f32a812c2ce1e742d9d8443366cbf42038880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XDAN6CE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIC9o7Hf8%2FMx8duLPFLr7MJrzhDbqgnc1WtHSMDyc0APKAiALRR9r5cca%2FMdOZZIrwov98BvIXzcTWaMqvqDWLkvgXCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8pfohp9gQ7gfmCwdKtwD3ZVHYvXn6A%2FHGcJowGFUC984kZ%2Fpi1bjQBueEshRdKEHf83EACKSiOrhe0yO8Vv7g7lTTGyj3OCFaPplJo6qxUMpPhinlUkAThOmWQ%2FV1AaHUrczhFiJd0P8Z5h3mXtDVwv6vsHo4KOScg6%2BVS5si%2BL2Scz6ypKrF31vT3%2FjUbAIOyc%2FCgwOQXJZI07oe%2B2Br3aCQK6b2th0mx8AO7iMYhuXnTOz8e77NCZdsD%2BRPDJh4O6fw3VYUNvla7zEQ%2Fr1t2Mf5K%2FZzhRkNttL80fqgXeQypCYqux%2BDtfXY05BjJ5L2ro%2F4%2FEF7wMgV6xi3nLmw%2F%2FviavWO4Hh8cqHyBDXtsc8aA6BkB10pdEed%2FSFtYU%2Fo%2FRb1UJherTnocnsvJbEXNDE6k5aGlMyPZWdcNm4qbI%2FtDVQs0his03H3afl74H%2Bz4J8ZuJi14xTgFL1ymRyF0IzI2AzrtEOvR7H0rllUB7LAF82Cz%2FC3oDjYCd4f9TdL5GWzZIEitzCUJ7tFDRUbdvUvk1KVymgeXVSLQvSlXZEHd4mBwndF%2FZ8RYNsIA%2BVopbeZJLykxFe2nMRgmtlmXHnYfbHWJyNzrMgfLHTBbHwcwfomBK%2Br2Vw29D0ZnMGLFqNfaSVBVLweakwqPiLxAY6pgF2L739K8v5cIFQiMyL2J8cXxISx9d4KsUbw%2Bu51AFCzjM3rkPwgnaW%2BwUxzvA3RfzD5j%2FXVPGo1UEXW0XtOAnflpJWQGGCABAxmuHeYrzp54YhC829aQvGmZCRO1XhPOpOw5Mr3WNp2ieleZtp20YZplZEwppJwApiNVjLBdTD9%2F9eEpuzST26gpVRfJHOrvOn%2BbmavSRlPdtaBmP4iqjye5Gh%2Feh%2B&X-Amz-Signature=c4e9c62d0d73b9728ba5997368025ea4e1181890ce4dd8a39ae5ecbc1e19d7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
