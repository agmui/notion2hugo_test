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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQFSBUE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3%2BqGQARUIPdNpe6ULnThsW%2FWW0kp80%2FdF5mifp3RUpAiBQUJjILiAILaLFUdSLIZ91kbg7GxVFsqRJWmLDZDBcTyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHM02o5ura8fRWzapKtwDOHH0vycrsg4HDcNohB%2Bx9PftUrJ7LYnpkAkjRrfKEJ1reETZiTijCZC1d4jL1Wl%2Fd0zdQ0CwFai9hVKMbduDp6OewUe9CPADfByanHGByZkla5l2bSi2dF8bLyOKD3vmnI36Smf5mEla1x9drA74guNUj3qpVqkQFECuPZWJtNvfgVwrC2wbrG1HIK4jWFFujXOu2MLQVdI7pTR6uGPkjVFhLewIsH6GtT4F5ZmtlEkkoKqx2eJUreIb3pTxa65YBdMFnZIGKtGiEXSEKrzXUT4NWkiWjV9q7vhS3GgBJW2pheTXEsuY%2Fwlp%2F78X3dbCnB0kDYnBFCK8PRfdLfAqkGnUC4ZtDmhcdyMcLXVrft8Bph0PgeI8StVpuSh1vWWlOGaPANm7hcsLBMlc3y9aqg1Dq%2BkU8fWSXx%2BAXLCrmYqpQ0IMvmm%2FEH%2Bp4SFTfZ24WM3RHFpMXMDwoTv9GwGD5itNdJBfnNtf2ZGlVmaIGsdU8EEba5dFZ3Aed%2BG17WftblY8arb3pgZW4xFMdEbBNtQku7Ft4ygzLXGsgAyrsQivhIESbmepnEjrGqqwBX0yzoJAV5tQxoaWA08IziexgaBQrAxxt6j4K42bqnAP0bX2IUHWsVaCDXVXrnww9a%2FrwwY6pgGjwTDc%2B%2FCdQZSoP5aW5gE2xfud8Y9c0DGP5lAdMeOiVZQJw6wtRIF0vXxdSPg08TW%2FqRHTtjy8%2F%2B08o3nDyzD9C32DLFQW6Hx%2Fm4bhL4oRo7q56C0FqWGvA5UIO6dmpuCBq0W1U7q828h%2FbiMmdy66nFXe5yqyY4iWd4hKG%2FoF4wexsEYHeUEPVTXxmxDPrC%2FQBqTbanqRAj%2Bca%2FVqa%2FH%2B6rAkx7Hv&X-Amz-Signature=ca48d26776315789e15001b7ca3efce832bf61197dd0def9df09644953825b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQFSBUE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3%2BqGQARUIPdNpe6ULnThsW%2FWW0kp80%2FdF5mifp3RUpAiBQUJjILiAILaLFUdSLIZ91kbg7GxVFsqRJWmLDZDBcTyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHM02o5ura8fRWzapKtwDOHH0vycrsg4HDcNohB%2Bx9PftUrJ7LYnpkAkjRrfKEJ1reETZiTijCZC1d4jL1Wl%2Fd0zdQ0CwFai9hVKMbduDp6OewUe9CPADfByanHGByZkla5l2bSi2dF8bLyOKD3vmnI36Smf5mEla1x9drA74guNUj3qpVqkQFECuPZWJtNvfgVwrC2wbrG1HIK4jWFFujXOu2MLQVdI7pTR6uGPkjVFhLewIsH6GtT4F5ZmtlEkkoKqx2eJUreIb3pTxa65YBdMFnZIGKtGiEXSEKrzXUT4NWkiWjV9q7vhS3GgBJW2pheTXEsuY%2Fwlp%2F78X3dbCnB0kDYnBFCK8PRfdLfAqkGnUC4ZtDmhcdyMcLXVrft8Bph0PgeI8StVpuSh1vWWlOGaPANm7hcsLBMlc3y9aqg1Dq%2BkU8fWSXx%2BAXLCrmYqpQ0IMvmm%2FEH%2Bp4SFTfZ24WM3RHFpMXMDwoTv9GwGD5itNdJBfnNtf2ZGlVmaIGsdU8EEba5dFZ3Aed%2BG17WftblY8arb3pgZW4xFMdEbBNtQku7Ft4ygzLXGsgAyrsQivhIESbmepnEjrGqqwBX0yzoJAV5tQxoaWA08IziexgaBQrAxxt6j4K42bqnAP0bX2IUHWsVaCDXVXrnww9a%2FrwwY6pgGjwTDc%2B%2FCdQZSoP5aW5gE2xfud8Y9c0DGP5lAdMeOiVZQJw6wtRIF0vXxdSPg08TW%2FqRHTtjy8%2F%2B08o3nDyzD9C32DLFQW6Hx%2Fm4bhL4oRo7q56C0FqWGvA5UIO6dmpuCBq0W1U7q828h%2FbiMmdy66nFXe5yqyY4iWd4hKG%2FoF4wexsEYHeUEPVTXxmxDPrC%2FQBqTbanqRAj%2Bca%2FVqa%2FH%2B6rAkx7Hv&X-Amz-Signature=3c88282542aa2f665feccfdfd2d1c8cce030ac4a287bac90592a201bad40ae92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQFSBUE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3%2BqGQARUIPdNpe6ULnThsW%2FWW0kp80%2FdF5mifp3RUpAiBQUJjILiAILaLFUdSLIZ91kbg7GxVFsqRJWmLDZDBcTyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHM02o5ura8fRWzapKtwDOHH0vycrsg4HDcNohB%2Bx9PftUrJ7LYnpkAkjRrfKEJ1reETZiTijCZC1d4jL1Wl%2Fd0zdQ0CwFai9hVKMbduDp6OewUe9CPADfByanHGByZkla5l2bSi2dF8bLyOKD3vmnI36Smf5mEla1x9drA74guNUj3qpVqkQFECuPZWJtNvfgVwrC2wbrG1HIK4jWFFujXOu2MLQVdI7pTR6uGPkjVFhLewIsH6GtT4F5ZmtlEkkoKqx2eJUreIb3pTxa65YBdMFnZIGKtGiEXSEKrzXUT4NWkiWjV9q7vhS3GgBJW2pheTXEsuY%2Fwlp%2F78X3dbCnB0kDYnBFCK8PRfdLfAqkGnUC4ZtDmhcdyMcLXVrft8Bph0PgeI8StVpuSh1vWWlOGaPANm7hcsLBMlc3y9aqg1Dq%2BkU8fWSXx%2BAXLCrmYqpQ0IMvmm%2FEH%2Bp4SFTfZ24WM3RHFpMXMDwoTv9GwGD5itNdJBfnNtf2ZGlVmaIGsdU8EEba5dFZ3Aed%2BG17WftblY8arb3pgZW4xFMdEbBNtQku7Ft4ygzLXGsgAyrsQivhIESbmepnEjrGqqwBX0yzoJAV5tQxoaWA08IziexgaBQrAxxt6j4K42bqnAP0bX2IUHWsVaCDXVXrnww9a%2FrwwY6pgGjwTDc%2B%2FCdQZSoP5aW5gE2xfud8Y9c0DGP5lAdMeOiVZQJw6wtRIF0vXxdSPg08TW%2FqRHTtjy8%2F%2B08o3nDyzD9C32DLFQW6Hx%2Fm4bhL4oRo7q56C0FqWGvA5UIO6dmpuCBq0W1U7q828h%2FbiMmdy66nFXe5yqyY4iWd4hKG%2FoF4wexsEYHeUEPVTXxmxDPrC%2FQBqTbanqRAj%2Bca%2FVqa%2FH%2B6rAkx7Hv&X-Amz-Signature=29216c4025f93011b593ffc1e49d6440d801e346259e1a0ad041399cf7e364ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQFSBUE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3%2BqGQARUIPdNpe6ULnThsW%2FWW0kp80%2FdF5mifp3RUpAiBQUJjILiAILaLFUdSLIZ91kbg7GxVFsqRJWmLDZDBcTyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHM02o5ura8fRWzapKtwDOHH0vycrsg4HDcNohB%2Bx9PftUrJ7LYnpkAkjRrfKEJ1reETZiTijCZC1d4jL1Wl%2Fd0zdQ0CwFai9hVKMbduDp6OewUe9CPADfByanHGByZkla5l2bSi2dF8bLyOKD3vmnI36Smf5mEla1x9drA74guNUj3qpVqkQFECuPZWJtNvfgVwrC2wbrG1HIK4jWFFujXOu2MLQVdI7pTR6uGPkjVFhLewIsH6GtT4F5ZmtlEkkoKqx2eJUreIb3pTxa65YBdMFnZIGKtGiEXSEKrzXUT4NWkiWjV9q7vhS3GgBJW2pheTXEsuY%2Fwlp%2F78X3dbCnB0kDYnBFCK8PRfdLfAqkGnUC4ZtDmhcdyMcLXVrft8Bph0PgeI8StVpuSh1vWWlOGaPANm7hcsLBMlc3y9aqg1Dq%2BkU8fWSXx%2BAXLCrmYqpQ0IMvmm%2FEH%2Bp4SFTfZ24WM3RHFpMXMDwoTv9GwGD5itNdJBfnNtf2ZGlVmaIGsdU8EEba5dFZ3Aed%2BG17WftblY8arb3pgZW4xFMdEbBNtQku7Ft4ygzLXGsgAyrsQivhIESbmepnEjrGqqwBX0yzoJAV5tQxoaWA08IziexgaBQrAxxt6j4K42bqnAP0bX2IUHWsVaCDXVXrnww9a%2FrwwY6pgGjwTDc%2B%2FCdQZSoP5aW5gE2xfud8Y9c0DGP5lAdMeOiVZQJw6wtRIF0vXxdSPg08TW%2FqRHTtjy8%2F%2B08o3nDyzD9C32DLFQW6Hx%2Fm4bhL4oRo7q56C0FqWGvA5UIO6dmpuCBq0W1U7q828h%2FbiMmdy66nFXe5yqyY4iWd4hKG%2FoF4wexsEYHeUEPVTXxmxDPrC%2FQBqTbanqRAj%2Bca%2FVqa%2FH%2B6rAkx7Hv&X-Amz-Signature=ea84ad3da63e120bfc5dc2f7585b5baa50945b411ae570f8db0a52a6511e321d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQFSBUE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3%2BqGQARUIPdNpe6ULnThsW%2FWW0kp80%2FdF5mifp3RUpAiBQUJjILiAILaLFUdSLIZ91kbg7GxVFsqRJWmLDZDBcTyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHM02o5ura8fRWzapKtwDOHH0vycrsg4HDcNohB%2Bx9PftUrJ7LYnpkAkjRrfKEJ1reETZiTijCZC1d4jL1Wl%2Fd0zdQ0CwFai9hVKMbduDp6OewUe9CPADfByanHGByZkla5l2bSi2dF8bLyOKD3vmnI36Smf5mEla1x9drA74guNUj3qpVqkQFECuPZWJtNvfgVwrC2wbrG1HIK4jWFFujXOu2MLQVdI7pTR6uGPkjVFhLewIsH6GtT4F5ZmtlEkkoKqx2eJUreIb3pTxa65YBdMFnZIGKtGiEXSEKrzXUT4NWkiWjV9q7vhS3GgBJW2pheTXEsuY%2Fwlp%2F78X3dbCnB0kDYnBFCK8PRfdLfAqkGnUC4ZtDmhcdyMcLXVrft8Bph0PgeI8StVpuSh1vWWlOGaPANm7hcsLBMlc3y9aqg1Dq%2BkU8fWSXx%2BAXLCrmYqpQ0IMvmm%2FEH%2Bp4SFTfZ24WM3RHFpMXMDwoTv9GwGD5itNdJBfnNtf2ZGlVmaIGsdU8EEba5dFZ3Aed%2BG17WftblY8arb3pgZW4xFMdEbBNtQku7Ft4ygzLXGsgAyrsQivhIESbmepnEjrGqqwBX0yzoJAV5tQxoaWA08IziexgaBQrAxxt6j4K42bqnAP0bX2IUHWsVaCDXVXrnww9a%2FrwwY6pgGjwTDc%2B%2FCdQZSoP5aW5gE2xfud8Y9c0DGP5lAdMeOiVZQJw6wtRIF0vXxdSPg08TW%2FqRHTtjy8%2F%2B08o3nDyzD9C32DLFQW6Hx%2Fm4bhL4oRo7q56C0FqWGvA5UIO6dmpuCBq0W1U7q828h%2FbiMmdy66nFXe5yqyY4iWd4hKG%2FoF4wexsEYHeUEPVTXxmxDPrC%2FQBqTbanqRAj%2Bca%2FVqa%2FH%2B6rAkx7Hv&X-Amz-Signature=dc54f5ecf74629a14e65a5f38ca73ecec4bb98f123bdad853acd1e25788a7cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQFSBUE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3%2BqGQARUIPdNpe6ULnThsW%2FWW0kp80%2FdF5mifp3RUpAiBQUJjILiAILaLFUdSLIZ91kbg7GxVFsqRJWmLDZDBcTyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHM02o5ura8fRWzapKtwDOHH0vycrsg4HDcNohB%2Bx9PftUrJ7LYnpkAkjRrfKEJ1reETZiTijCZC1d4jL1Wl%2Fd0zdQ0CwFai9hVKMbduDp6OewUe9CPADfByanHGByZkla5l2bSi2dF8bLyOKD3vmnI36Smf5mEla1x9drA74guNUj3qpVqkQFECuPZWJtNvfgVwrC2wbrG1HIK4jWFFujXOu2MLQVdI7pTR6uGPkjVFhLewIsH6GtT4F5ZmtlEkkoKqx2eJUreIb3pTxa65YBdMFnZIGKtGiEXSEKrzXUT4NWkiWjV9q7vhS3GgBJW2pheTXEsuY%2Fwlp%2F78X3dbCnB0kDYnBFCK8PRfdLfAqkGnUC4ZtDmhcdyMcLXVrft8Bph0PgeI8StVpuSh1vWWlOGaPANm7hcsLBMlc3y9aqg1Dq%2BkU8fWSXx%2BAXLCrmYqpQ0IMvmm%2FEH%2Bp4SFTfZ24WM3RHFpMXMDwoTv9GwGD5itNdJBfnNtf2ZGlVmaIGsdU8EEba5dFZ3Aed%2BG17WftblY8arb3pgZW4xFMdEbBNtQku7Ft4ygzLXGsgAyrsQivhIESbmepnEjrGqqwBX0yzoJAV5tQxoaWA08IziexgaBQrAxxt6j4K42bqnAP0bX2IUHWsVaCDXVXrnww9a%2FrwwY6pgGjwTDc%2B%2FCdQZSoP5aW5gE2xfud8Y9c0DGP5lAdMeOiVZQJw6wtRIF0vXxdSPg08TW%2FqRHTtjy8%2F%2B08o3nDyzD9C32DLFQW6Hx%2Fm4bhL4oRo7q56C0FqWGvA5UIO6dmpuCBq0W1U7q828h%2FbiMmdy66nFXe5yqyY4iWd4hKG%2FoF4wexsEYHeUEPVTXxmxDPrC%2FQBqTbanqRAj%2Bca%2FVqa%2FH%2B6rAkx7Hv&X-Amz-Signature=14b69e83d185a9755754c96bc5b0fb5ab7187b9abf46f79abba579512aa87b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQFSBUE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3%2BqGQARUIPdNpe6ULnThsW%2FWW0kp80%2FdF5mifp3RUpAiBQUJjILiAILaLFUdSLIZ91kbg7GxVFsqRJWmLDZDBcTyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHM02o5ura8fRWzapKtwDOHH0vycrsg4HDcNohB%2Bx9PftUrJ7LYnpkAkjRrfKEJ1reETZiTijCZC1d4jL1Wl%2Fd0zdQ0CwFai9hVKMbduDp6OewUe9CPADfByanHGByZkla5l2bSi2dF8bLyOKD3vmnI36Smf5mEla1x9drA74guNUj3qpVqkQFECuPZWJtNvfgVwrC2wbrG1HIK4jWFFujXOu2MLQVdI7pTR6uGPkjVFhLewIsH6GtT4F5ZmtlEkkoKqx2eJUreIb3pTxa65YBdMFnZIGKtGiEXSEKrzXUT4NWkiWjV9q7vhS3GgBJW2pheTXEsuY%2Fwlp%2F78X3dbCnB0kDYnBFCK8PRfdLfAqkGnUC4ZtDmhcdyMcLXVrft8Bph0PgeI8StVpuSh1vWWlOGaPANm7hcsLBMlc3y9aqg1Dq%2BkU8fWSXx%2BAXLCrmYqpQ0IMvmm%2FEH%2Bp4SFTfZ24WM3RHFpMXMDwoTv9GwGD5itNdJBfnNtf2ZGlVmaIGsdU8EEba5dFZ3Aed%2BG17WftblY8arb3pgZW4xFMdEbBNtQku7Ft4ygzLXGsgAyrsQivhIESbmepnEjrGqqwBX0yzoJAV5tQxoaWA08IziexgaBQrAxxt6j4K42bqnAP0bX2IUHWsVaCDXVXrnww9a%2FrwwY6pgGjwTDc%2B%2FCdQZSoP5aW5gE2xfud8Y9c0DGP5lAdMeOiVZQJw6wtRIF0vXxdSPg08TW%2FqRHTtjy8%2F%2B08o3nDyzD9C32DLFQW6Hx%2Fm4bhL4oRo7q56C0FqWGvA5UIO6dmpuCBq0W1U7q828h%2FbiMmdy66nFXe5yqyY4iWd4hKG%2FoF4wexsEYHeUEPVTXxmxDPrC%2FQBqTbanqRAj%2Bca%2FVqa%2FH%2B6rAkx7Hv&X-Amz-Signature=2b4306ed02d6129e97fa6530712f3d196ae545fb7a73738d7c060a4eb13e65f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQFSBUE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3%2BqGQARUIPdNpe6ULnThsW%2FWW0kp80%2FdF5mifp3RUpAiBQUJjILiAILaLFUdSLIZ91kbg7GxVFsqRJWmLDZDBcTyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHM02o5ura8fRWzapKtwDOHH0vycrsg4HDcNohB%2Bx9PftUrJ7LYnpkAkjRrfKEJ1reETZiTijCZC1d4jL1Wl%2Fd0zdQ0CwFai9hVKMbduDp6OewUe9CPADfByanHGByZkla5l2bSi2dF8bLyOKD3vmnI36Smf5mEla1x9drA74guNUj3qpVqkQFECuPZWJtNvfgVwrC2wbrG1HIK4jWFFujXOu2MLQVdI7pTR6uGPkjVFhLewIsH6GtT4F5ZmtlEkkoKqx2eJUreIb3pTxa65YBdMFnZIGKtGiEXSEKrzXUT4NWkiWjV9q7vhS3GgBJW2pheTXEsuY%2Fwlp%2F78X3dbCnB0kDYnBFCK8PRfdLfAqkGnUC4ZtDmhcdyMcLXVrft8Bph0PgeI8StVpuSh1vWWlOGaPANm7hcsLBMlc3y9aqg1Dq%2BkU8fWSXx%2BAXLCrmYqpQ0IMvmm%2FEH%2Bp4SFTfZ24WM3RHFpMXMDwoTv9GwGD5itNdJBfnNtf2ZGlVmaIGsdU8EEba5dFZ3Aed%2BG17WftblY8arb3pgZW4xFMdEbBNtQku7Ft4ygzLXGsgAyrsQivhIESbmepnEjrGqqwBX0yzoJAV5tQxoaWA08IziexgaBQrAxxt6j4K42bqnAP0bX2IUHWsVaCDXVXrnww9a%2FrwwY6pgGjwTDc%2B%2FCdQZSoP5aW5gE2xfud8Y9c0DGP5lAdMeOiVZQJw6wtRIF0vXxdSPg08TW%2FqRHTtjy8%2F%2B08o3nDyzD9C32DLFQW6Hx%2Fm4bhL4oRo7q56C0FqWGvA5UIO6dmpuCBq0W1U7q828h%2FbiMmdy66nFXe5yqyY4iWd4hKG%2FoF4wexsEYHeUEPVTXxmxDPrC%2FQBqTbanqRAj%2Bca%2FVqa%2FH%2B6rAkx7Hv&X-Amz-Signature=1da52c7d14df63686ec8c5fa64a1952b6877dec0c9ba71acb96a9ffbc86c35a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
