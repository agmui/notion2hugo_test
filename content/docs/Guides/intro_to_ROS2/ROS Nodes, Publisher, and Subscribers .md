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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCPLPN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBAeB3TAM5fw0S1RZ7RiJ1a29XaXw1RlaL2xMoSphbC2AiEAyWr9E6A8tyK%2FPnRWCit4uQYckNWTDai1kDYTdBg7iH0qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGKCp4npHBCPN5LqCrcAx0ygHwlPj%2Bh8pbum9uYe8Y1Vx38BWGhP1ThFJ2c2vw9nhBl8k7ahORPv%2BltOz2MLXCe%2FMQ9hbmJIO0w1P5uziidFTLNeuLOe8%2FZwZKBDxSUj%2FIehVjYv%2BFH%2BIQ0vJ3uYl2ensaBbQky4fcJGPgPX6XokoUcnyN0Z%2Frf7crcjaWV3ps8LalGbz6Jwx1c1qVNDSt4efiTCzG147aZvOrec3LQFNHf%2FAG6ldfiwCTm5X6rj0z42J3%2FcGvDRHILmT3LnRUszWtzmjtXdwrcYmQ2G0r%2BlbmIqBI78ypGLVUFlG%2FohBSsjpxcTuCpPUnut%2BLZ%2ByCej%2B5yuWrCiwRpLPswPG13k6tZwe0psiqxZfTp3pRXsiOEszWsJEgFTKIDuzDWjpVFG4e%2FMLtVG6oU5uLHThGNLC1tRyI42eYlV%2Fob81x0EeLrjXh0q1USKb1bU81UHbtyGEB%2B49C%2FtA4G43wBUn8NYTWrgR4HkPoZhZWXiPnCQkU1tWz9HvPGQJuw9u5rD59rIaHKFud7V4EC0Nx0JudRo5iFwo8JauIunuSyoRZnBLVS3VWN%2Bn4Y1%2Bkqjuk%2FV9j3k8ZcrMYhZWm%2B1GzjMv5nGu%2FcJD5OvUMB852%2B8bx2uJQBBgIZIw%2BTOPBOMKa85r8GOqUB8jRXQGSJkqvR2KiX4HKsV4i0Lrg4oSe4GrF31cBZlPnhz4Z96ofxXOd3ygNSe1Qut3cfcJSUM7hOrdfgAaA8%2FTNtQHda6D98PsAJgx0ScVg8hwGDxKvat%2F8a0IH12tb3OTwJhypByv8TCeMWruUOAAt03pihSsfpNm4HK5A4c82MKhSO4gYB0q04Efbe0FZrEiZCfMAcdSVbMSThxrvHKN5iZEiN&X-Amz-Signature=cdd437b6e9e94c6336adc655be608d07f55fe4e1c5b0a5e09b9534f1670d0800&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCPLPN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBAeB3TAM5fw0S1RZ7RiJ1a29XaXw1RlaL2xMoSphbC2AiEAyWr9E6A8tyK%2FPnRWCit4uQYckNWTDai1kDYTdBg7iH0qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGKCp4npHBCPN5LqCrcAx0ygHwlPj%2Bh8pbum9uYe8Y1Vx38BWGhP1ThFJ2c2vw9nhBl8k7ahORPv%2BltOz2MLXCe%2FMQ9hbmJIO0w1P5uziidFTLNeuLOe8%2FZwZKBDxSUj%2FIehVjYv%2BFH%2BIQ0vJ3uYl2ensaBbQky4fcJGPgPX6XokoUcnyN0Z%2Frf7crcjaWV3ps8LalGbz6Jwx1c1qVNDSt4efiTCzG147aZvOrec3LQFNHf%2FAG6ldfiwCTm5X6rj0z42J3%2FcGvDRHILmT3LnRUszWtzmjtXdwrcYmQ2G0r%2BlbmIqBI78ypGLVUFlG%2FohBSsjpxcTuCpPUnut%2BLZ%2ByCej%2B5yuWrCiwRpLPswPG13k6tZwe0psiqxZfTp3pRXsiOEszWsJEgFTKIDuzDWjpVFG4e%2FMLtVG6oU5uLHThGNLC1tRyI42eYlV%2Fob81x0EeLrjXh0q1USKb1bU81UHbtyGEB%2B49C%2FtA4G43wBUn8NYTWrgR4HkPoZhZWXiPnCQkU1tWz9HvPGQJuw9u5rD59rIaHKFud7V4EC0Nx0JudRo5iFwo8JauIunuSyoRZnBLVS3VWN%2Bn4Y1%2Bkqjuk%2FV9j3k8ZcrMYhZWm%2B1GzjMv5nGu%2FcJD5OvUMB852%2B8bx2uJQBBgIZIw%2BTOPBOMKa85r8GOqUB8jRXQGSJkqvR2KiX4HKsV4i0Lrg4oSe4GrF31cBZlPnhz4Z96ofxXOd3ygNSe1Qut3cfcJSUM7hOrdfgAaA8%2FTNtQHda6D98PsAJgx0ScVg8hwGDxKvat%2F8a0IH12tb3OTwJhypByv8TCeMWruUOAAt03pihSsfpNm4HK5A4c82MKhSO4gYB0q04Efbe0FZrEiZCfMAcdSVbMSThxrvHKN5iZEiN&X-Amz-Signature=ba31eb89d728dd81d059b0d37494243b34d48ff93a89e76d5fd74c26ec8330e6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCPLPN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBAeB3TAM5fw0S1RZ7RiJ1a29XaXw1RlaL2xMoSphbC2AiEAyWr9E6A8tyK%2FPnRWCit4uQYckNWTDai1kDYTdBg7iH0qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGKCp4npHBCPN5LqCrcAx0ygHwlPj%2Bh8pbum9uYe8Y1Vx38BWGhP1ThFJ2c2vw9nhBl8k7ahORPv%2BltOz2MLXCe%2FMQ9hbmJIO0w1P5uziidFTLNeuLOe8%2FZwZKBDxSUj%2FIehVjYv%2BFH%2BIQ0vJ3uYl2ensaBbQky4fcJGPgPX6XokoUcnyN0Z%2Frf7crcjaWV3ps8LalGbz6Jwx1c1qVNDSt4efiTCzG147aZvOrec3LQFNHf%2FAG6ldfiwCTm5X6rj0z42J3%2FcGvDRHILmT3LnRUszWtzmjtXdwrcYmQ2G0r%2BlbmIqBI78ypGLVUFlG%2FohBSsjpxcTuCpPUnut%2BLZ%2ByCej%2B5yuWrCiwRpLPswPG13k6tZwe0psiqxZfTp3pRXsiOEszWsJEgFTKIDuzDWjpVFG4e%2FMLtVG6oU5uLHThGNLC1tRyI42eYlV%2Fob81x0EeLrjXh0q1USKb1bU81UHbtyGEB%2B49C%2FtA4G43wBUn8NYTWrgR4HkPoZhZWXiPnCQkU1tWz9HvPGQJuw9u5rD59rIaHKFud7V4EC0Nx0JudRo5iFwo8JauIunuSyoRZnBLVS3VWN%2Bn4Y1%2Bkqjuk%2FV9j3k8ZcrMYhZWm%2B1GzjMv5nGu%2FcJD5OvUMB852%2B8bx2uJQBBgIZIw%2BTOPBOMKa85r8GOqUB8jRXQGSJkqvR2KiX4HKsV4i0Lrg4oSe4GrF31cBZlPnhz4Z96ofxXOd3ygNSe1Qut3cfcJSUM7hOrdfgAaA8%2FTNtQHda6D98PsAJgx0ScVg8hwGDxKvat%2F8a0IH12tb3OTwJhypByv8TCeMWruUOAAt03pihSsfpNm4HK5A4c82MKhSO4gYB0q04Efbe0FZrEiZCfMAcdSVbMSThxrvHKN5iZEiN&X-Amz-Signature=bf72109736223faadeeba5c4552655823320f6618fce4062492dff8653352d33&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCPLPN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBAeB3TAM5fw0S1RZ7RiJ1a29XaXw1RlaL2xMoSphbC2AiEAyWr9E6A8tyK%2FPnRWCit4uQYckNWTDai1kDYTdBg7iH0qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGKCp4npHBCPN5LqCrcAx0ygHwlPj%2Bh8pbum9uYe8Y1Vx38BWGhP1ThFJ2c2vw9nhBl8k7ahORPv%2BltOz2MLXCe%2FMQ9hbmJIO0w1P5uziidFTLNeuLOe8%2FZwZKBDxSUj%2FIehVjYv%2BFH%2BIQ0vJ3uYl2ensaBbQky4fcJGPgPX6XokoUcnyN0Z%2Frf7crcjaWV3ps8LalGbz6Jwx1c1qVNDSt4efiTCzG147aZvOrec3LQFNHf%2FAG6ldfiwCTm5X6rj0z42J3%2FcGvDRHILmT3LnRUszWtzmjtXdwrcYmQ2G0r%2BlbmIqBI78ypGLVUFlG%2FohBSsjpxcTuCpPUnut%2BLZ%2ByCej%2B5yuWrCiwRpLPswPG13k6tZwe0psiqxZfTp3pRXsiOEszWsJEgFTKIDuzDWjpVFG4e%2FMLtVG6oU5uLHThGNLC1tRyI42eYlV%2Fob81x0EeLrjXh0q1USKb1bU81UHbtyGEB%2B49C%2FtA4G43wBUn8NYTWrgR4HkPoZhZWXiPnCQkU1tWz9HvPGQJuw9u5rD59rIaHKFud7V4EC0Nx0JudRo5iFwo8JauIunuSyoRZnBLVS3VWN%2Bn4Y1%2Bkqjuk%2FV9j3k8ZcrMYhZWm%2B1GzjMv5nGu%2FcJD5OvUMB852%2B8bx2uJQBBgIZIw%2BTOPBOMKa85r8GOqUB8jRXQGSJkqvR2KiX4HKsV4i0Lrg4oSe4GrF31cBZlPnhz4Z96ofxXOd3ygNSe1Qut3cfcJSUM7hOrdfgAaA8%2FTNtQHda6D98PsAJgx0ScVg8hwGDxKvat%2F8a0IH12tb3OTwJhypByv8TCeMWruUOAAt03pihSsfpNm4HK5A4c82MKhSO4gYB0q04Efbe0FZrEiZCfMAcdSVbMSThxrvHKN5iZEiN&X-Amz-Signature=5ec23a4910bc9a6212e4622e1b5b7fbc4631c11363d6a9e907f4a44d896fa0dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCPLPN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBAeB3TAM5fw0S1RZ7RiJ1a29XaXw1RlaL2xMoSphbC2AiEAyWr9E6A8tyK%2FPnRWCit4uQYckNWTDai1kDYTdBg7iH0qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGKCp4npHBCPN5LqCrcAx0ygHwlPj%2Bh8pbum9uYe8Y1Vx38BWGhP1ThFJ2c2vw9nhBl8k7ahORPv%2BltOz2MLXCe%2FMQ9hbmJIO0w1P5uziidFTLNeuLOe8%2FZwZKBDxSUj%2FIehVjYv%2BFH%2BIQ0vJ3uYl2ensaBbQky4fcJGPgPX6XokoUcnyN0Z%2Frf7crcjaWV3ps8LalGbz6Jwx1c1qVNDSt4efiTCzG147aZvOrec3LQFNHf%2FAG6ldfiwCTm5X6rj0z42J3%2FcGvDRHILmT3LnRUszWtzmjtXdwrcYmQ2G0r%2BlbmIqBI78ypGLVUFlG%2FohBSsjpxcTuCpPUnut%2BLZ%2ByCej%2B5yuWrCiwRpLPswPG13k6tZwe0psiqxZfTp3pRXsiOEszWsJEgFTKIDuzDWjpVFG4e%2FMLtVG6oU5uLHThGNLC1tRyI42eYlV%2Fob81x0EeLrjXh0q1USKb1bU81UHbtyGEB%2B49C%2FtA4G43wBUn8NYTWrgR4HkPoZhZWXiPnCQkU1tWz9HvPGQJuw9u5rD59rIaHKFud7V4EC0Nx0JudRo5iFwo8JauIunuSyoRZnBLVS3VWN%2Bn4Y1%2Bkqjuk%2FV9j3k8ZcrMYhZWm%2B1GzjMv5nGu%2FcJD5OvUMB852%2B8bx2uJQBBgIZIw%2BTOPBOMKa85r8GOqUB8jRXQGSJkqvR2KiX4HKsV4i0Lrg4oSe4GrF31cBZlPnhz4Z96ofxXOd3ygNSe1Qut3cfcJSUM7hOrdfgAaA8%2FTNtQHda6D98PsAJgx0ScVg8hwGDxKvat%2F8a0IH12tb3OTwJhypByv8TCeMWruUOAAt03pihSsfpNm4HK5A4c82MKhSO4gYB0q04Efbe0FZrEiZCfMAcdSVbMSThxrvHKN5iZEiN&X-Amz-Signature=7c9b1914ef017c6ef8dbe76ce894783a68aee8a6cc1fd3e9eac77c7bbc45c26f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCPLPN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBAeB3TAM5fw0S1RZ7RiJ1a29XaXw1RlaL2xMoSphbC2AiEAyWr9E6A8tyK%2FPnRWCit4uQYckNWTDai1kDYTdBg7iH0qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGKCp4npHBCPN5LqCrcAx0ygHwlPj%2Bh8pbum9uYe8Y1Vx38BWGhP1ThFJ2c2vw9nhBl8k7ahORPv%2BltOz2MLXCe%2FMQ9hbmJIO0w1P5uziidFTLNeuLOe8%2FZwZKBDxSUj%2FIehVjYv%2BFH%2BIQ0vJ3uYl2ensaBbQky4fcJGPgPX6XokoUcnyN0Z%2Frf7crcjaWV3ps8LalGbz6Jwx1c1qVNDSt4efiTCzG147aZvOrec3LQFNHf%2FAG6ldfiwCTm5X6rj0z42J3%2FcGvDRHILmT3LnRUszWtzmjtXdwrcYmQ2G0r%2BlbmIqBI78ypGLVUFlG%2FohBSsjpxcTuCpPUnut%2BLZ%2ByCej%2B5yuWrCiwRpLPswPG13k6tZwe0psiqxZfTp3pRXsiOEszWsJEgFTKIDuzDWjpVFG4e%2FMLtVG6oU5uLHThGNLC1tRyI42eYlV%2Fob81x0EeLrjXh0q1USKb1bU81UHbtyGEB%2B49C%2FtA4G43wBUn8NYTWrgR4HkPoZhZWXiPnCQkU1tWz9HvPGQJuw9u5rD59rIaHKFud7V4EC0Nx0JudRo5iFwo8JauIunuSyoRZnBLVS3VWN%2Bn4Y1%2Bkqjuk%2FV9j3k8ZcrMYhZWm%2B1GzjMv5nGu%2FcJD5OvUMB852%2B8bx2uJQBBgIZIw%2BTOPBOMKa85r8GOqUB8jRXQGSJkqvR2KiX4HKsV4i0Lrg4oSe4GrF31cBZlPnhz4Z96ofxXOd3ygNSe1Qut3cfcJSUM7hOrdfgAaA8%2FTNtQHda6D98PsAJgx0ScVg8hwGDxKvat%2F8a0IH12tb3OTwJhypByv8TCeMWruUOAAt03pihSsfpNm4HK5A4c82MKhSO4gYB0q04Efbe0FZrEiZCfMAcdSVbMSThxrvHKN5iZEiN&X-Amz-Signature=bc8db7cf3c8ddde19fa3e1db46003eb4ab785d7fda927550920f91352c17e3d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCPLPN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBAeB3TAM5fw0S1RZ7RiJ1a29XaXw1RlaL2xMoSphbC2AiEAyWr9E6A8tyK%2FPnRWCit4uQYckNWTDai1kDYTdBg7iH0qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGKCp4npHBCPN5LqCrcAx0ygHwlPj%2Bh8pbum9uYe8Y1Vx38BWGhP1ThFJ2c2vw9nhBl8k7ahORPv%2BltOz2MLXCe%2FMQ9hbmJIO0w1P5uziidFTLNeuLOe8%2FZwZKBDxSUj%2FIehVjYv%2BFH%2BIQ0vJ3uYl2ensaBbQky4fcJGPgPX6XokoUcnyN0Z%2Frf7crcjaWV3ps8LalGbz6Jwx1c1qVNDSt4efiTCzG147aZvOrec3LQFNHf%2FAG6ldfiwCTm5X6rj0z42J3%2FcGvDRHILmT3LnRUszWtzmjtXdwrcYmQ2G0r%2BlbmIqBI78ypGLVUFlG%2FohBSsjpxcTuCpPUnut%2BLZ%2ByCej%2B5yuWrCiwRpLPswPG13k6tZwe0psiqxZfTp3pRXsiOEszWsJEgFTKIDuzDWjpVFG4e%2FMLtVG6oU5uLHThGNLC1tRyI42eYlV%2Fob81x0EeLrjXh0q1USKb1bU81UHbtyGEB%2B49C%2FtA4G43wBUn8NYTWrgR4HkPoZhZWXiPnCQkU1tWz9HvPGQJuw9u5rD59rIaHKFud7V4EC0Nx0JudRo5iFwo8JauIunuSyoRZnBLVS3VWN%2Bn4Y1%2Bkqjuk%2FV9j3k8ZcrMYhZWm%2B1GzjMv5nGu%2FcJD5OvUMB852%2B8bx2uJQBBgIZIw%2BTOPBOMKa85r8GOqUB8jRXQGSJkqvR2KiX4HKsV4i0Lrg4oSe4GrF31cBZlPnhz4Z96ofxXOd3ygNSe1Qut3cfcJSUM7hOrdfgAaA8%2FTNtQHda6D98PsAJgx0ScVg8hwGDxKvat%2F8a0IH12tb3OTwJhypByv8TCeMWruUOAAt03pihSsfpNm4HK5A4c82MKhSO4gYB0q04Efbe0FZrEiZCfMAcdSVbMSThxrvHKN5iZEiN&X-Amz-Signature=f8f9ddb20b68a405ae2392ea8512e3f35bde181b4ea27fa1ee27107d86c9acfa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCPLPN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBAeB3TAM5fw0S1RZ7RiJ1a29XaXw1RlaL2xMoSphbC2AiEAyWr9E6A8tyK%2FPnRWCit4uQYckNWTDai1kDYTdBg7iH0qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGKCp4npHBCPN5LqCrcAx0ygHwlPj%2Bh8pbum9uYe8Y1Vx38BWGhP1ThFJ2c2vw9nhBl8k7ahORPv%2BltOz2MLXCe%2FMQ9hbmJIO0w1P5uziidFTLNeuLOe8%2FZwZKBDxSUj%2FIehVjYv%2BFH%2BIQ0vJ3uYl2ensaBbQky4fcJGPgPX6XokoUcnyN0Z%2Frf7crcjaWV3ps8LalGbz6Jwx1c1qVNDSt4efiTCzG147aZvOrec3LQFNHf%2FAG6ldfiwCTm5X6rj0z42J3%2FcGvDRHILmT3LnRUszWtzmjtXdwrcYmQ2G0r%2BlbmIqBI78ypGLVUFlG%2FohBSsjpxcTuCpPUnut%2BLZ%2ByCej%2B5yuWrCiwRpLPswPG13k6tZwe0psiqxZfTp3pRXsiOEszWsJEgFTKIDuzDWjpVFG4e%2FMLtVG6oU5uLHThGNLC1tRyI42eYlV%2Fob81x0EeLrjXh0q1USKb1bU81UHbtyGEB%2B49C%2FtA4G43wBUn8NYTWrgR4HkPoZhZWXiPnCQkU1tWz9HvPGQJuw9u5rD59rIaHKFud7V4EC0Nx0JudRo5iFwo8JauIunuSyoRZnBLVS3VWN%2Bn4Y1%2Bkqjuk%2FV9j3k8ZcrMYhZWm%2B1GzjMv5nGu%2FcJD5OvUMB852%2B8bx2uJQBBgIZIw%2BTOPBOMKa85r8GOqUB8jRXQGSJkqvR2KiX4HKsV4i0Lrg4oSe4GrF31cBZlPnhz4Z96ofxXOd3ygNSe1Qut3cfcJSUM7hOrdfgAaA8%2FTNtQHda6D98PsAJgx0ScVg8hwGDxKvat%2F8a0IH12tb3OTwJhypByv8TCeMWruUOAAt03pihSsfpNm4HK5A4c82MKhSO4gYB0q04Efbe0FZrEiZCfMAcdSVbMSThxrvHKN5iZEiN&X-Amz-Signature=bbc46d876b57e0d55e07789724da0d32eae543be4acb9a086e7feaf15a47a0e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
