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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGV57KLI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDwHwhSdUwh4tzpw3M9xOI4rRIQzCFX1uGRTRskoCZ85QIhAM%2BLjSwRrrDoeFXeRROMG7Qjsv%2BSsGQ4IInVfuLzYwZ%2BKv8DCC4QABoMNjM3NDIzMTgzODA1Igy4OfnX%2FQ380ru3jAwq3APahz4CNnr0eLrm9xJDjNBNa37u7Q2UEnKOE4a4LxwjyPS4di5bK590JXttJDm2tQtPZiEiXU8qU%2BZAH16HpgqvzhZXF2gnkBIs%2BL%2BdrWXkKdp59OjpSMur32qeZeG406%2BwaxgoZtu%2BsvAKvF%2Fi%2FSSAXvl53z2ChzcZNugcQATdiFO6llzTeT1bCJYDu6FtwSX40fkghIbo1SAsrmcZGCIXBE6HCXxYVLl4M9%2BJozENRMMvjeafAf0DwGTNcs3zz%2B5jtJ2ih3MU8sFHa6FbkpJ%2FsUwoN6a9FmufXF8gyjVJ613lO%2Bn%2FdqA7bqxw5Ib0iXh73C3Mqs3eugDR%2FXHvhkeO%2BNtXROcAT7BwcJ%2BSPnBkyaVnA27IJgwom70ehCMM8dDpKKL7SYrUDg4wGErMSAEFYIiAvwa16IiJZQc%2F7K9G4C05pagr6fCH6YiNUukwvgTnVW3PRW7sPx1sPdbz7TQ5QrUkb1IIFcMN9amwz4cCAmssWGrxi%2F5vtwVeoSFi3NpqbKO8QeXx%2FH8Phs5gR7mMlbKqNLvm9BZN67QRVQeSMGa6bGKRNTKxOUQXd0XD6saR%2FpdnSFSeOvD7bc1yfgwC2%2FNyIkPMM%2B5Gx4b72BqxCivQVOqpilTcIIgqVzClgIHCBjqkAc15d1y%2F9gCZAFzIsKXp7UeKb%2FxxjzsDX0InXsNRLSSpj5p%2BaOQWe8OrD6ZCN1IFXZP6rOUA%2BSmglYz5Bt4yjbAKzb2bFhDK7LAkE4d4BZQBh3CgKBb9y4nEsOzyCUv0F5lHuhlRJtEB1h55sWKfiZULLi3QCn3ikM9CiZ4%2FTrbi%2Bu0%2Fw8JGJYDXEwXm6aK8Kq8YaWYcQ8QG7qv5jV7irlai06jQ&X-Amz-Signature=53bdf3f8f946b5c2d056b4682e2008b66f0263b59baa04d66d7899c715fbaffc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGV57KLI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDwHwhSdUwh4tzpw3M9xOI4rRIQzCFX1uGRTRskoCZ85QIhAM%2BLjSwRrrDoeFXeRROMG7Qjsv%2BSsGQ4IInVfuLzYwZ%2BKv8DCC4QABoMNjM3NDIzMTgzODA1Igy4OfnX%2FQ380ru3jAwq3APahz4CNnr0eLrm9xJDjNBNa37u7Q2UEnKOE4a4LxwjyPS4di5bK590JXttJDm2tQtPZiEiXU8qU%2BZAH16HpgqvzhZXF2gnkBIs%2BL%2BdrWXkKdp59OjpSMur32qeZeG406%2BwaxgoZtu%2BsvAKvF%2Fi%2FSSAXvl53z2ChzcZNugcQATdiFO6llzTeT1bCJYDu6FtwSX40fkghIbo1SAsrmcZGCIXBE6HCXxYVLl4M9%2BJozENRMMvjeafAf0DwGTNcs3zz%2B5jtJ2ih3MU8sFHa6FbkpJ%2FsUwoN6a9FmufXF8gyjVJ613lO%2Bn%2FdqA7bqxw5Ib0iXh73C3Mqs3eugDR%2FXHvhkeO%2BNtXROcAT7BwcJ%2BSPnBkyaVnA27IJgwom70ehCMM8dDpKKL7SYrUDg4wGErMSAEFYIiAvwa16IiJZQc%2F7K9G4C05pagr6fCH6YiNUukwvgTnVW3PRW7sPx1sPdbz7TQ5QrUkb1IIFcMN9amwz4cCAmssWGrxi%2F5vtwVeoSFi3NpqbKO8QeXx%2FH8Phs5gR7mMlbKqNLvm9BZN67QRVQeSMGa6bGKRNTKxOUQXd0XD6saR%2FpdnSFSeOvD7bc1yfgwC2%2FNyIkPMM%2B5Gx4b72BqxCivQVOqpilTcIIgqVzClgIHCBjqkAc15d1y%2F9gCZAFzIsKXp7UeKb%2FxxjzsDX0InXsNRLSSpj5p%2BaOQWe8OrD6ZCN1IFXZP6rOUA%2BSmglYz5Bt4yjbAKzb2bFhDK7LAkE4d4BZQBh3CgKBb9y4nEsOzyCUv0F5lHuhlRJtEB1h55sWKfiZULLi3QCn3ikM9CiZ4%2FTrbi%2Bu0%2Fw8JGJYDXEwXm6aK8Kq8YaWYcQ8QG7qv5jV7irlai06jQ&X-Amz-Signature=f4bf5b24ca1a6ae918410049e3ce07a1bb63a93339a3d1e10e03bfc3c947efbe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGV57KLI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDwHwhSdUwh4tzpw3M9xOI4rRIQzCFX1uGRTRskoCZ85QIhAM%2BLjSwRrrDoeFXeRROMG7Qjsv%2BSsGQ4IInVfuLzYwZ%2BKv8DCC4QABoMNjM3NDIzMTgzODA1Igy4OfnX%2FQ380ru3jAwq3APahz4CNnr0eLrm9xJDjNBNa37u7Q2UEnKOE4a4LxwjyPS4di5bK590JXttJDm2tQtPZiEiXU8qU%2BZAH16HpgqvzhZXF2gnkBIs%2BL%2BdrWXkKdp59OjpSMur32qeZeG406%2BwaxgoZtu%2BsvAKvF%2Fi%2FSSAXvl53z2ChzcZNugcQATdiFO6llzTeT1bCJYDu6FtwSX40fkghIbo1SAsrmcZGCIXBE6HCXxYVLl4M9%2BJozENRMMvjeafAf0DwGTNcs3zz%2B5jtJ2ih3MU8sFHa6FbkpJ%2FsUwoN6a9FmufXF8gyjVJ613lO%2Bn%2FdqA7bqxw5Ib0iXh73C3Mqs3eugDR%2FXHvhkeO%2BNtXROcAT7BwcJ%2BSPnBkyaVnA27IJgwom70ehCMM8dDpKKL7SYrUDg4wGErMSAEFYIiAvwa16IiJZQc%2F7K9G4C05pagr6fCH6YiNUukwvgTnVW3PRW7sPx1sPdbz7TQ5QrUkb1IIFcMN9amwz4cCAmssWGrxi%2F5vtwVeoSFi3NpqbKO8QeXx%2FH8Phs5gR7mMlbKqNLvm9BZN67QRVQeSMGa6bGKRNTKxOUQXd0XD6saR%2FpdnSFSeOvD7bc1yfgwC2%2FNyIkPMM%2B5Gx4b72BqxCivQVOqpilTcIIgqVzClgIHCBjqkAc15d1y%2F9gCZAFzIsKXp7UeKb%2FxxjzsDX0InXsNRLSSpj5p%2BaOQWe8OrD6ZCN1IFXZP6rOUA%2BSmglYz5Bt4yjbAKzb2bFhDK7LAkE4d4BZQBh3CgKBb9y4nEsOzyCUv0F5lHuhlRJtEB1h55sWKfiZULLi3QCn3ikM9CiZ4%2FTrbi%2Bu0%2Fw8JGJYDXEwXm6aK8Kq8YaWYcQ8QG7qv5jV7irlai06jQ&X-Amz-Signature=fcbb9ced332e49f33bca1957643fc2488b64674ab2b94a1967847521b19d2a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGV57KLI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDwHwhSdUwh4tzpw3M9xOI4rRIQzCFX1uGRTRskoCZ85QIhAM%2BLjSwRrrDoeFXeRROMG7Qjsv%2BSsGQ4IInVfuLzYwZ%2BKv8DCC4QABoMNjM3NDIzMTgzODA1Igy4OfnX%2FQ380ru3jAwq3APahz4CNnr0eLrm9xJDjNBNa37u7Q2UEnKOE4a4LxwjyPS4di5bK590JXttJDm2tQtPZiEiXU8qU%2BZAH16HpgqvzhZXF2gnkBIs%2BL%2BdrWXkKdp59OjpSMur32qeZeG406%2BwaxgoZtu%2BsvAKvF%2Fi%2FSSAXvl53z2ChzcZNugcQATdiFO6llzTeT1bCJYDu6FtwSX40fkghIbo1SAsrmcZGCIXBE6HCXxYVLl4M9%2BJozENRMMvjeafAf0DwGTNcs3zz%2B5jtJ2ih3MU8sFHa6FbkpJ%2FsUwoN6a9FmufXF8gyjVJ613lO%2Bn%2FdqA7bqxw5Ib0iXh73C3Mqs3eugDR%2FXHvhkeO%2BNtXROcAT7BwcJ%2BSPnBkyaVnA27IJgwom70ehCMM8dDpKKL7SYrUDg4wGErMSAEFYIiAvwa16IiJZQc%2F7K9G4C05pagr6fCH6YiNUukwvgTnVW3PRW7sPx1sPdbz7TQ5QrUkb1IIFcMN9amwz4cCAmssWGrxi%2F5vtwVeoSFi3NpqbKO8QeXx%2FH8Phs5gR7mMlbKqNLvm9BZN67QRVQeSMGa6bGKRNTKxOUQXd0XD6saR%2FpdnSFSeOvD7bc1yfgwC2%2FNyIkPMM%2B5Gx4b72BqxCivQVOqpilTcIIgqVzClgIHCBjqkAc15d1y%2F9gCZAFzIsKXp7UeKb%2FxxjzsDX0InXsNRLSSpj5p%2BaOQWe8OrD6ZCN1IFXZP6rOUA%2BSmglYz5Bt4yjbAKzb2bFhDK7LAkE4d4BZQBh3CgKBb9y4nEsOzyCUv0F5lHuhlRJtEB1h55sWKfiZULLi3QCn3ikM9CiZ4%2FTrbi%2Bu0%2Fw8JGJYDXEwXm6aK8Kq8YaWYcQ8QG7qv5jV7irlai06jQ&X-Amz-Signature=174b8b29de08da2a3b6e1beb23bdb4c2a85cdfe5347f0c23aea7e16942045e35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGV57KLI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDwHwhSdUwh4tzpw3M9xOI4rRIQzCFX1uGRTRskoCZ85QIhAM%2BLjSwRrrDoeFXeRROMG7Qjsv%2BSsGQ4IInVfuLzYwZ%2BKv8DCC4QABoMNjM3NDIzMTgzODA1Igy4OfnX%2FQ380ru3jAwq3APahz4CNnr0eLrm9xJDjNBNa37u7Q2UEnKOE4a4LxwjyPS4di5bK590JXttJDm2tQtPZiEiXU8qU%2BZAH16HpgqvzhZXF2gnkBIs%2BL%2BdrWXkKdp59OjpSMur32qeZeG406%2BwaxgoZtu%2BsvAKvF%2Fi%2FSSAXvl53z2ChzcZNugcQATdiFO6llzTeT1bCJYDu6FtwSX40fkghIbo1SAsrmcZGCIXBE6HCXxYVLl4M9%2BJozENRMMvjeafAf0DwGTNcs3zz%2B5jtJ2ih3MU8sFHa6FbkpJ%2FsUwoN6a9FmufXF8gyjVJ613lO%2Bn%2FdqA7bqxw5Ib0iXh73C3Mqs3eugDR%2FXHvhkeO%2BNtXROcAT7BwcJ%2BSPnBkyaVnA27IJgwom70ehCMM8dDpKKL7SYrUDg4wGErMSAEFYIiAvwa16IiJZQc%2F7K9G4C05pagr6fCH6YiNUukwvgTnVW3PRW7sPx1sPdbz7TQ5QrUkb1IIFcMN9amwz4cCAmssWGrxi%2F5vtwVeoSFi3NpqbKO8QeXx%2FH8Phs5gR7mMlbKqNLvm9BZN67QRVQeSMGa6bGKRNTKxOUQXd0XD6saR%2FpdnSFSeOvD7bc1yfgwC2%2FNyIkPMM%2B5Gx4b72BqxCivQVOqpilTcIIgqVzClgIHCBjqkAc15d1y%2F9gCZAFzIsKXp7UeKb%2FxxjzsDX0InXsNRLSSpj5p%2BaOQWe8OrD6ZCN1IFXZP6rOUA%2BSmglYz5Bt4yjbAKzb2bFhDK7LAkE4d4BZQBh3CgKBb9y4nEsOzyCUv0F5lHuhlRJtEB1h55sWKfiZULLi3QCn3ikM9CiZ4%2FTrbi%2Bu0%2Fw8JGJYDXEwXm6aK8Kq8YaWYcQ8QG7qv5jV7irlai06jQ&X-Amz-Signature=f6f87f31fe04086377d5866c6b26436c986d39cf198138d205d1897560c31676&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGV57KLI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDwHwhSdUwh4tzpw3M9xOI4rRIQzCFX1uGRTRskoCZ85QIhAM%2BLjSwRrrDoeFXeRROMG7Qjsv%2BSsGQ4IInVfuLzYwZ%2BKv8DCC4QABoMNjM3NDIzMTgzODA1Igy4OfnX%2FQ380ru3jAwq3APahz4CNnr0eLrm9xJDjNBNa37u7Q2UEnKOE4a4LxwjyPS4di5bK590JXttJDm2tQtPZiEiXU8qU%2BZAH16HpgqvzhZXF2gnkBIs%2BL%2BdrWXkKdp59OjpSMur32qeZeG406%2BwaxgoZtu%2BsvAKvF%2Fi%2FSSAXvl53z2ChzcZNugcQATdiFO6llzTeT1bCJYDu6FtwSX40fkghIbo1SAsrmcZGCIXBE6HCXxYVLl4M9%2BJozENRMMvjeafAf0DwGTNcs3zz%2B5jtJ2ih3MU8sFHa6FbkpJ%2FsUwoN6a9FmufXF8gyjVJ613lO%2Bn%2FdqA7bqxw5Ib0iXh73C3Mqs3eugDR%2FXHvhkeO%2BNtXROcAT7BwcJ%2BSPnBkyaVnA27IJgwom70ehCMM8dDpKKL7SYrUDg4wGErMSAEFYIiAvwa16IiJZQc%2F7K9G4C05pagr6fCH6YiNUukwvgTnVW3PRW7sPx1sPdbz7TQ5QrUkb1IIFcMN9amwz4cCAmssWGrxi%2F5vtwVeoSFi3NpqbKO8QeXx%2FH8Phs5gR7mMlbKqNLvm9BZN67QRVQeSMGa6bGKRNTKxOUQXd0XD6saR%2FpdnSFSeOvD7bc1yfgwC2%2FNyIkPMM%2B5Gx4b72BqxCivQVOqpilTcIIgqVzClgIHCBjqkAc15d1y%2F9gCZAFzIsKXp7UeKb%2FxxjzsDX0InXsNRLSSpj5p%2BaOQWe8OrD6ZCN1IFXZP6rOUA%2BSmglYz5Bt4yjbAKzb2bFhDK7LAkE4d4BZQBh3CgKBb9y4nEsOzyCUv0F5lHuhlRJtEB1h55sWKfiZULLi3QCn3ikM9CiZ4%2FTrbi%2Bu0%2Fw8JGJYDXEwXm6aK8Kq8YaWYcQ8QG7qv5jV7irlai06jQ&X-Amz-Signature=8ee79c88d2bf78bd1baba062369c02bb822a9ac98475a27b41b55f95327ced91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGV57KLI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDwHwhSdUwh4tzpw3M9xOI4rRIQzCFX1uGRTRskoCZ85QIhAM%2BLjSwRrrDoeFXeRROMG7Qjsv%2BSsGQ4IInVfuLzYwZ%2BKv8DCC4QABoMNjM3NDIzMTgzODA1Igy4OfnX%2FQ380ru3jAwq3APahz4CNnr0eLrm9xJDjNBNa37u7Q2UEnKOE4a4LxwjyPS4di5bK590JXttJDm2tQtPZiEiXU8qU%2BZAH16HpgqvzhZXF2gnkBIs%2BL%2BdrWXkKdp59OjpSMur32qeZeG406%2BwaxgoZtu%2BsvAKvF%2Fi%2FSSAXvl53z2ChzcZNugcQATdiFO6llzTeT1bCJYDu6FtwSX40fkghIbo1SAsrmcZGCIXBE6HCXxYVLl4M9%2BJozENRMMvjeafAf0DwGTNcs3zz%2B5jtJ2ih3MU8sFHa6FbkpJ%2FsUwoN6a9FmufXF8gyjVJ613lO%2Bn%2FdqA7bqxw5Ib0iXh73C3Mqs3eugDR%2FXHvhkeO%2BNtXROcAT7BwcJ%2BSPnBkyaVnA27IJgwom70ehCMM8dDpKKL7SYrUDg4wGErMSAEFYIiAvwa16IiJZQc%2F7K9G4C05pagr6fCH6YiNUukwvgTnVW3PRW7sPx1sPdbz7TQ5QrUkb1IIFcMN9amwz4cCAmssWGrxi%2F5vtwVeoSFi3NpqbKO8QeXx%2FH8Phs5gR7mMlbKqNLvm9BZN67QRVQeSMGa6bGKRNTKxOUQXd0XD6saR%2FpdnSFSeOvD7bc1yfgwC2%2FNyIkPMM%2B5Gx4b72BqxCivQVOqpilTcIIgqVzClgIHCBjqkAc15d1y%2F9gCZAFzIsKXp7UeKb%2FxxjzsDX0InXsNRLSSpj5p%2BaOQWe8OrD6ZCN1IFXZP6rOUA%2BSmglYz5Bt4yjbAKzb2bFhDK7LAkE4d4BZQBh3CgKBb9y4nEsOzyCUv0F5lHuhlRJtEB1h55sWKfiZULLi3QCn3ikM9CiZ4%2FTrbi%2Bu0%2Fw8JGJYDXEwXm6aK8Kq8YaWYcQ8QG7qv5jV7irlai06jQ&X-Amz-Signature=c8e6d1b64aedb0d0a2f2ce9932fcedb8c57b76561421b247f855c91e13f96ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGV57KLI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDwHwhSdUwh4tzpw3M9xOI4rRIQzCFX1uGRTRskoCZ85QIhAM%2BLjSwRrrDoeFXeRROMG7Qjsv%2BSsGQ4IInVfuLzYwZ%2BKv8DCC4QABoMNjM3NDIzMTgzODA1Igy4OfnX%2FQ380ru3jAwq3APahz4CNnr0eLrm9xJDjNBNa37u7Q2UEnKOE4a4LxwjyPS4di5bK590JXttJDm2tQtPZiEiXU8qU%2BZAH16HpgqvzhZXF2gnkBIs%2BL%2BdrWXkKdp59OjpSMur32qeZeG406%2BwaxgoZtu%2BsvAKvF%2Fi%2FSSAXvl53z2ChzcZNugcQATdiFO6llzTeT1bCJYDu6FtwSX40fkghIbo1SAsrmcZGCIXBE6HCXxYVLl4M9%2BJozENRMMvjeafAf0DwGTNcs3zz%2B5jtJ2ih3MU8sFHa6FbkpJ%2FsUwoN6a9FmufXF8gyjVJ613lO%2Bn%2FdqA7bqxw5Ib0iXh73C3Mqs3eugDR%2FXHvhkeO%2BNtXROcAT7BwcJ%2BSPnBkyaVnA27IJgwom70ehCMM8dDpKKL7SYrUDg4wGErMSAEFYIiAvwa16IiJZQc%2F7K9G4C05pagr6fCH6YiNUukwvgTnVW3PRW7sPx1sPdbz7TQ5QrUkb1IIFcMN9amwz4cCAmssWGrxi%2F5vtwVeoSFi3NpqbKO8QeXx%2FH8Phs5gR7mMlbKqNLvm9BZN67QRVQeSMGa6bGKRNTKxOUQXd0XD6saR%2FpdnSFSeOvD7bc1yfgwC2%2FNyIkPMM%2B5Gx4b72BqxCivQVOqpilTcIIgqVzClgIHCBjqkAc15d1y%2F9gCZAFzIsKXp7UeKb%2FxxjzsDX0InXsNRLSSpj5p%2BaOQWe8OrD6ZCN1IFXZP6rOUA%2BSmglYz5Bt4yjbAKzb2bFhDK7LAkE4d4BZQBh3CgKBb9y4nEsOzyCUv0F5lHuhlRJtEB1h55sWKfiZULLi3QCn3ikM9CiZ4%2FTrbi%2Bu0%2Fw8JGJYDXEwXm6aK8Kq8YaWYcQ8QG7qv5jV7irlai06jQ&X-Amz-Signature=4b9e673c32d064e2456cccfa2c6c10540c64b62299eb8c23b7e3d1428af3b79c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
