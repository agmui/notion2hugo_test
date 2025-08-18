---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLVQHTF%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIE7qwt6PR8cC%2BfHTSslVhHryQRW4Q1LTJaGKwtOSCQFJAiB8kNQDEbC%2BJx4g0%2FlZ2J2OddIXHiujKVxc%2F53UJyR3ayqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAOIRrMdfEgxP7ypAKtwDdkSTRpqjmuCDVHFiOsdQ7LZNOddOE9TQzmzZAYINpA286%2B5QKW5FhDNUqr1TsG8WWEOE0vdl5zXv97jV9XY2PAuGJiNWm3YMIDAQuFBpGttwmQeZtZur4zYT3n8sqaoFA6TdC1Qs5eoNKBOsAyDI6AYpeeUszKgjZBAEdxxz0GNIqvqqfPsdsdK%2FazMY00km89w9TKXf5aFArSmGrLoJHV5WxJw4dOHwt4EzcfpXUjGaoh%2BbXKXvmoIrqhCCC8A9HgVnqmG4enayvXWcjOAYEkWMGI7xlSu%2FK8gMZ2F31GSSEdnOtYFy0ib8j%2FeHINtkke912Dh%2FFqkjFYa%2BjzK7rxsA3CNa4708IuFNCWM%2FvzwDqSkcJ9eqhP%2BxLo8EWNtJsOWsmKis4jzfbwiTGHX7eKl86m69nHtXi9uo9Q9cvUjbmS6pRLIEsv2jnKprdKwOfNOiR%2FwH0vfXl77hd80aqE6No7nXCF8TYao8l1kjEVuMENWpV4ejt6Gs4%2FwN3RD2SZ8G%2F75HLtz8wbrMVDeeV%2FFTJRZMtcQSKNdzasecFDQNByI6KDKF4Kr%2Fons%2FD5D0EeDbOZpTjQchNThOu8VxFKev0%2BRvxADjReHCdeoiXXu6%2FuzJjvzdDi1cO3Qw9umJxQY6pgHHj1BFfp3jHUQ6lF9Y%2FScg5QOJ%2BifXHdZZpp5CMEBiA%2BL3fMQWb%2Bn%2BTv0EbGwiYkzRsDRxrrk5aNHdANtksfS4RzAraR2t4oJ%2BJ4PDhWMJIjTwr%2BcwLCv9Kdfyd1iStMoCKd9fDw6nlBJ0GoUpU1UCpkPdmo1dQGKz0B6ahfDosq0ZMyJuPiYRoPBDyK9mKMN%2FS5pymWgZF9d%2BwjlKZisc78w12Yjk&X-Amz-Signature=44e3fe90baa27b1001c9a3d45b7cced538b97d05d71b6afa24c4eb87ba5ae491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLVQHTF%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIE7qwt6PR8cC%2BfHTSslVhHryQRW4Q1LTJaGKwtOSCQFJAiB8kNQDEbC%2BJx4g0%2FlZ2J2OddIXHiujKVxc%2F53UJyR3ayqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAOIRrMdfEgxP7ypAKtwDdkSTRpqjmuCDVHFiOsdQ7LZNOddOE9TQzmzZAYINpA286%2B5QKW5FhDNUqr1TsG8WWEOE0vdl5zXv97jV9XY2PAuGJiNWm3YMIDAQuFBpGttwmQeZtZur4zYT3n8sqaoFA6TdC1Qs5eoNKBOsAyDI6AYpeeUszKgjZBAEdxxz0GNIqvqqfPsdsdK%2FazMY00km89w9TKXf5aFArSmGrLoJHV5WxJw4dOHwt4EzcfpXUjGaoh%2BbXKXvmoIrqhCCC8A9HgVnqmG4enayvXWcjOAYEkWMGI7xlSu%2FK8gMZ2F31GSSEdnOtYFy0ib8j%2FeHINtkke912Dh%2FFqkjFYa%2BjzK7rxsA3CNa4708IuFNCWM%2FvzwDqSkcJ9eqhP%2BxLo8EWNtJsOWsmKis4jzfbwiTGHX7eKl86m69nHtXi9uo9Q9cvUjbmS6pRLIEsv2jnKprdKwOfNOiR%2FwH0vfXl77hd80aqE6No7nXCF8TYao8l1kjEVuMENWpV4ejt6Gs4%2FwN3RD2SZ8G%2F75HLtz8wbrMVDeeV%2FFTJRZMtcQSKNdzasecFDQNByI6KDKF4Kr%2Fons%2FD5D0EeDbOZpTjQchNThOu8VxFKev0%2BRvxADjReHCdeoiXXu6%2FuzJjvzdDi1cO3Qw9umJxQY6pgHHj1BFfp3jHUQ6lF9Y%2FScg5QOJ%2BifXHdZZpp5CMEBiA%2BL3fMQWb%2Bn%2BTv0EbGwiYkzRsDRxrrk5aNHdANtksfS4RzAraR2t4oJ%2BJ4PDhWMJIjTwr%2BcwLCv9Kdfyd1iStMoCKd9fDw6nlBJ0GoUpU1UCpkPdmo1dQGKz0B6ahfDosq0ZMyJuPiYRoPBDyK9mKMN%2FS5pymWgZF9d%2BwjlKZisc78w12Yjk&X-Amz-Signature=bdc4e9936c74ac7100c2c78129ebd1596a79f89d49ec1df76c106eec267b175f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLVQHTF%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIE7qwt6PR8cC%2BfHTSslVhHryQRW4Q1LTJaGKwtOSCQFJAiB8kNQDEbC%2BJx4g0%2FlZ2J2OddIXHiujKVxc%2F53UJyR3ayqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAOIRrMdfEgxP7ypAKtwDdkSTRpqjmuCDVHFiOsdQ7LZNOddOE9TQzmzZAYINpA286%2B5QKW5FhDNUqr1TsG8WWEOE0vdl5zXv97jV9XY2PAuGJiNWm3YMIDAQuFBpGttwmQeZtZur4zYT3n8sqaoFA6TdC1Qs5eoNKBOsAyDI6AYpeeUszKgjZBAEdxxz0GNIqvqqfPsdsdK%2FazMY00km89w9TKXf5aFArSmGrLoJHV5WxJw4dOHwt4EzcfpXUjGaoh%2BbXKXvmoIrqhCCC8A9HgVnqmG4enayvXWcjOAYEkWMGI7xlSu%2FK8gMZ2F31GSSEdnOtYFy0ib8j%2FeHINtkke912Dh%2FFqkjFYa%2BjzK7rxsA3CNa4708IuFNCWM%2FvzwDqSkcJ9eqhP%2BxLo8EWNtJsOWsmKis4jzfbwiTGHX7eKl86m69nHtXi9uo9Q9cvUjbmS6pRLIEsv2jnKprdKwOfNOiR%2FwH0vfXl77hd80aqE6No7nXCF8TYao8l1kjEVuMENWpV4ejt6Gs4%2FwN3RD2SZ8G%2F75HLtz8wbrMVDeeV%2FFTJRZMtcQSKNdzasecFDQNByI6KDKF4Kr%2Fons%2FD5D0EeDbOZpTjQchNThOu8VxFKev0%2BRvxADjReHCdeoiXXu6%2FuzJjvzdDi1cO3Qw9umJxQY6pgHHj1BFfp3jHUQ6lF9Y%2FScg5QOJ%2BifXHdZZpp5CMEBiA%2BL3fMQWb%2Bn%2BTv0EbGwiYkzRsDRxrrk5aNHdANtksfS4RzAraR2t4oJ%2BJ4PDhWMJIjTwr%2BcwLCv9Kdfyd1iStMoCKd9fDw6nlBJ0GoUpU1UCpkPdmo1dQGKz0B6ahfDosq0ZMyJuPiYRoPBDyK9mKMN%2FS5pymWgZF9d%2BwjlKZisc78w12Yjk&X-Amz-Signature=4d271ac0e64e60aa2fef0aeeb436c3ab444bf5a497fb50f5459589de78e3a074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLVQHTF%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIE7qwt6PR8cC%2BfHTSslVhHryQRW4Q1LTJaGKwtOSCQFJAiB8kNQDEbC%2BJx4g0%2FlZ2J2OddIXHiujKVxc%2F53UJyR3ayqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAOIRrMdfEgxP7ypAKtwDdkSTRpqjmuCDVHFiOsdQ7LZNOddOE9TQzmzZAYINpA286%2B5QKW5FhDNUqr1TsG8WWEOE0vdl5zXv97jV9XY2PAuGJiNWm3YMIDAQuFBpGttwmQeZtZur4zYT3n8sqaoFA6TdC1Qs5eoNKBOsAyDI6AYpeeUszKgjZBAEdxxz0GNIqvqqfPsdsdK%2FazMY00km89w9TKXf5aFArSmGrLoJHV5WxJw4dOHwt4EzcfpXUjGaoh%2BbXKXvmoIrqhCCC8A9HgVnqmG4enayvXWcjOAYEkWMGI7xlSu%2FK8gMZ2F31GSSEdnOtYFy0ib8j%2FeHINtkke912Dh%2FFqkjFYa%2BjzK7rxsA3CNa4708IuFNCWM%2FvzwDqSkcJ9eqhP%2BxLo8EWNtJsOWsmKis4jzfbwiTGHX7eKl86m69nHtXi9uo9Q9cvUjbmS6pRLIEsv2jnKprdKwOfNOiR%2FwH0vfXl77hd80aqE6No7nXCF8TYao8l1kjEVuMENWpV4ejt6Gs4%2FwN3RD2SZ8G%2F75HLtz8wbrMVDeeV%2FFTJRZMtcQSKNdzasecFDQNByI6KDKF4Kr%2Fons%2FD5D0EeDbOZpTjQchNThOu8VxFKev0%2BRvxADjReHCdeoiXXu6%2FuzJjvzdDi1cO3Qw9umJxQY6pgHHj1BFfp3jHUQ6lF9Y%2FScg5QOJ%2BifXHdZZpp5CMEBiA%2BL3fMQWb%2Bn%2BTv0EbGwiYkzRsDRxrrk5aNHdANtksfS4RzAraR2t4oJ%2BJ4PDhWMJIjTwr%2BcwLCv9Kdfyd1iStMoCKd9fDw6nlBJ0GoUpU1UCpkPdmo1dQGKz0B6ahfDosq0ZMyJuPiYRoPBDyK9mKMN%2FS5pymWgZF9d%2BwjlKZisc78w12Yjk&X-Amz-Signature=dc77bf5b0b3efab4a52c6ba7d239dba5b172eec4e6dca585661bac1964f79cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLVQHTF%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIE7qwt6PR8cC%2BfHTSslVhHryQRW4Q1LTJaGKwtOSCQFJAiB8kNQDEbC%2BJx4g0%2FlZ2J2OddIXHiujKVxc%2F53UJyR3ayqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAOIRrMdfEgxP7ypAKtwDdkSTRpqjmuCDVHFiOsdQ7LZNOddOE9TQzmzZAYINpA286%2B5QKW5FhDNUqr1TsG8WWEOE0vdl5zXv97jV9XY2PAuGJiNWm3YMIDAQuFBpGttwmQeZtZur4zYT3n8sqaoFA6TdC1Qs5eoNKBOsAyDI6AYpeeUszKgjZBAEdxxz0GNIqvqqfPsdsdK%2FazMY00km89w9TKXf5aFArSmGrLoJHV5WxJw4dOHwt4EzcfpXUjGaoh%2BbXKXvmoIrqhCCC8A9HgVnqmG4enayvXWcjOAYEkWMGI7xlSu%2FK8gMZ2F31GSSEdnOtYFy0ib8j%2FeHINtkke912Dh%2FFqkjFYa%2BjzK7rxsA3CNa4708IuFNCWM%2FvzwDqSkcJ9eqhP%2BxLo8EWNtJsOWsmKis4jzfbwiTGHX7eKl86m69nHtXi9uo9Q9cvUjbmS6pRLIEsv2jnKprdKwOfNOiR%2FwH0vfXl77hd80aqE6No7nXCF8TYao8l1kjEVuMENWpV4ejt6Gs4%2FwN3RD2SZ8G%2F75HLtz8wbrMVDeeV%2FFTJRZMtcQSKNdzasecFDQNByI6KDKF4Kr%2Fons%2FD5D0EeDbOZpTjQchNThOu8VxFKev0%2BRvxADjReHCdeoiXXu6%2FuzJjvzdDi1cO3Qw9umJxQY6pgHHj1BFfp3jHUQ6lF9Y%2FScg5QOJ%2BifXHdZZpp5CMEBiA%2BL3fMQWb%2Bn%2BTv0EbGwiYkzRsDRxrrk5aNHdANtksfS4RzAraR2t4oJ%2BJ4PDhWMJIjTwr%2BcwLCv9Kdfyd1iStMoCKd9fDw6nlBJ0GoUpU1UCpkPdmo1dQGKz0B6ahfDosq0ZMyJuPiYRoPBDyK9mKMN%2FS5pymWgZF9d%2BwjlKZisc78w12Yjk&X-Amz-Signature=376611a94708b2afa72349bbf6549b0fc3ecc84c1d74850e129d5d6243d95782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLVQHTF%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIE7qwt6PR8cC%2BfHTSslVhHryQRW4Q1LTJaGKwtOSCQFJAiB8kNQDEbC%2BJx4g0%2FlZ2J2OddIXHiujKVxc%2F53UJyR3ayqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAOIRrMdfEgxP7ypAKtwDdkSTRpqjmuCDVHFiOsdQ7LZNOddOE9TQzmzZAYINpA286%2B5QKW5FhDNUqr1TsG8WWEOE0vdl5zXv97jV9XY2PAuGJiNWm3YMIDAQuFBpGttwmQeZtZur4zYT3n8sqaoFA6TdC1Qs5eoNKBOsAyDI6AYpeeUszKgjZBAEdxxz0GNIqvqqfPsdsdK%2FazMY00km89w9TKXf5aFArSmGrLoJHV5WxJw4dOHwt4EzcfpXUjGaoh%2BbXKXvmoIrqhCCC8A9HgVnqmG4enayvXWcjOAYEkWMGI7xlSu%2FK8gMZ2F31GSSEdnOtYFy0ib8j%2FeHINtkke912Dh%2FFqkjFYa%2BjzK7rxsA3CNa4708IuFNCWM%2FvzwDqSkcJ9eqhP%2BxLo8EWNtJsOWsmKis4jzfbwiTGHX7eKl86m69nHtXi9uo9Q9cvUjbmS6pRLIEsv2jnKprdKwOfNOiR%2FwH0vfXl77hd80aqE6No7nXCF8TYao8l1kjEVuMENWpV4ejt6Gs4%2FwN3RD2SZ8G%2F75HLtz8wbrMVDeeV%2FFTJRZMtcQSKNdzasecFDQNByI6KDKF4Kr%2Fons%2FD5D0EeDbOZpTjQchNThOu8VxFKev0%2BRvxADjReHCdeoiXXu6%2FuzJjvzdDi1cO3Qw9umJxQY6pgHHj1BFfp3jHUQ6lF9Y%2FScg5QOJ%2BifXHdZZpp5CMEBiA%2BL3fMQWb%2Bn%2BTv0EbGwiYkzRsDRxrrk5aNHdANtksfS4RzAraR2t4oJ%2BJ4PDhWMJIjTwr%2BcwLCv9Kdfyd1iStMoCKd9fDw6nlBJ0GoUpU1UCpkPdmo1dQGKz0B6ahfDosq0ZMyJuPiYRoPBDyK9mKMN%2FS5pymWgZF9d%2BwjlKZisc78w12Yjk&X-Amz-Signature=8839bd7f0c6963b19aad84e5829d4b0bb906b693f98c85865e2eeddbb3943b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLVQHTF%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIE7qwt6PR8cC%2BfHTSslVhHryQRW4Q1LTJaGKwtOSCQFJAiB8kNQDEbC%2BJx4g0%2FlZ2J2OddIXHiujKVxc%2F53UJyR3ayqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAOIRrMdfEgxP7ypAKtwDdkSTRpqjmuCDVHFiOsdQ7LZNOddOE9TQzmzZAYINpA286%2B5QKW5FhDNUqr1TsG8WWEOE0vdl5zXv97jV9XY2PAuGJiNWm3YMIDAQuFBpGttwmQeZtZur4zYT3n8sqaoFA6TdC1Qs5eoNKBOsAyDI6AYpeeUszKgjZBAEdxxz0GNIqvqqfPsdsdK%2FazMY00km89w9TKXf5aFArSmGrLoJHV5WxJw4dOHwt4EzcfpXUjGaoh%2BbXKXvmoIrqhCCC8A9HgVnqmG4enayvXWcjOAYEkWMGI7xlSu%2FK8gMZ2F31GSSEdnOtYFy0ib8j%2FeHINtkke912Dh%2FFqkjFYa%2BjzK7rxsA3CNa4708IuFNCWM%2FvzwDqSkcJ9eqhP%2BxLo8EWNtJsOWsmKis4jzfbwiTGHX7eKl86m69nHtXi9uo9Q9cvUjbmS6pRLIEsv2jnKprdKwOfNOiR%2FwH0vfXl77hd80aqE6No7nXCF8TYao8l1kjEVuMENWpV4ejt6Gs4%2FwN3RD2SZ8G%2F75HLtz8wbrMVDeeV%2FFTJRZMtcQSKNdzasecFDQNByI6KDKF4Kr%2Fons%2FD5D0EeDbOZpTjQchNThOu8VxFKev0%2BRvxADjReHCdeoiXXu6%2FuzJjvzdDi1cO3Qw9umJxQY6pgHHj1BFfp3jHUQ6lF9Y%2FScg5QOJ%2BifXHdZZpp5CMEBiA%2BL3fMQWb%2Bn%2BTv0EbGwiYkzRsDRxrrk5aNHdANtksfS4RzAraR2t4oJ%2BJ4PDhWMJIjTwr%2BcwLCv9Kdfyd1iStMoCKd9fDw6nlBJ0GoUpU1UCpkPdmo1dQGKz0B6ahfDosq0ZMyJuPiYRoPBDyK9mKMN%2FS5pymWgZF9d%2BwjlKZisc78w12Yjk&X-Amz-Signature=6f2a65c2b02de9b314b92c895410de5d213f04534e3c66299ba1b13a932ec690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLVQHTF%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIE7qwt6PR8cC%2BfHTSslVhHryQRW4Q1LTJaGKwtOSCQFJAiB8kNQDEbC%2BJx4g0%2FlZ2J2OddIXHiujKVxc%2F53UJyR3ayqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAOIRrMdfEgxP7ypAKtwDdkSTRpqjmuCDVHFiOsdQ7LZNOddOE9TQzmzZAYINpA286%2B5QKW5FhDNUqr1TsG8WWEOE0vdl5zXv97jV9XY2PAuGJiNWm3YMIDAQuFBpGttwmQeZtZur4zYT3n8sqaoFA6TdC1Qs5eoNKBOsAyDI6AYpeeUszKgjZBAEdxxz0GNIqvqqfPsdsdK%2FazMY00km89w9TKXf5aFArSmGrLoJHV5WxJw4dOHwt4EzcfpXUjGaoh%2BbXKXvmoIrqhCCC8A9HgVnqmG4enayvXWcjOAYEkWMGI7xlSu%2FK8gMZ2F31GSSEdnOtYFy0ib8j%2FeHINtkke912Dh%2FFqkjFYa%2BjzK7rxsA3CNa4708IuFNCWM%2FvzwDqSkcJ9eqhP%2BxLo8EWNtJsOWsmKis4jzfbwiTGHX7eKl86m69nHtXi9uo9Q9cvUjbmS6pRLIEsv2jnKprdKwOfNOiR%2FwH0vfXl77hd80aqE6No7nXCF8TYao8l1kjEVuMENWpV4ejt6Gs4%2FwN3RD2SZ8G%2F75HLtz8wbrMVDeeV%2FFTJRZMtcQSKNdzasecFDQNByI6KDKF4Kr%2Fons%2FD5D0EeDbOZpTjQchNThOu8VxFKev0%2BRvxADjReHCdeoiXXu6%2FuzJjvzdDi1cO3Qw9umJxQY6pgHHj1BFfp3jHUQ6lF9Y%2FScg5QOJ%2BifXHdZZpp5CMEBiA%2BL3fMQWb%2Bn%2BTv0EbGwiYkzRsDRxrrk5aNHdANtksfS4RzAraR2t4oJ%2BJ4PDhWMJIjTwr%2BcwLCv9Kdfyd1iStMoCKd9fDw6nlBJ0GoUpU1UCpkPdmo1dQGKz0B6ahfDosq0ZMyJuPiYRoPBDyK9mKMN%2FS5pymWgZF9d%2BwjlKZisc78w12Yjk&X-Amz-Signature=b2c1b4450f9a71b52f25124704196b5dc48e2c12572d11eba6cba90975648664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
