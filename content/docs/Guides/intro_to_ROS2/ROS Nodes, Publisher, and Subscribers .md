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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W4UVP63%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8fHHLak295PNSyGPpJguS10rURq7%2Bc8YeGmVQE8c1gIhAKHpwoCVYofJAEwis22TficW4E%2F6VLYxvUsW%2FUi99qCcKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnUpi02kl0TAW4c4Qq3AMTUFd%2FMN5eOqIOxjUgIIcwd%2FIyuW8ZpyInT6JSdjIvHUp%2FDPypssYU2nAkY18USdXlZIP5L1CatU0jTwSMa5IqihzYmPIRmOMpemFGYlfisH86EKqDWYvPtlx%2Bro5T3uxo0Vf751RI%2BXPVsacyvoEpUwyMWpBXpYwJ8pCRUDZvv3BElNfNTtvPifrYwFLUo991A0duJyGXvOu3nXXSzR7xxAVXHaANKPruzLRP2Qucub3Ofdvkk7YSQFgKcWt8Qj%2BYRg%2FHwpSo93e89Fx8xLllxkpjxBdgDg4ZIR9hPobw7TeBiiC6LLyQszz4TtjOy1UgCBlqhET0cvs3rdz%2F%2BOr0E864F9ivvEMulVY6BFNWxMMVJUbj%2F5vFqKTYUg08MgieQfuE3epLt3mfFHB%2FxzlpTLWTKZ8ZqvT%2Fn2G6L0hmeRLW58ZFOp4gbiCx4%2BRq8e5QSyp0yHp2jaIaOHAKbcm3fiDakOxO5YFbvCTxbPwfvuDb8VVUBF4nNyUo%2FpPFj30nW4gFkXwc9Dbhd3rN9O0yXFpK3jhdfj74SoXxzT8D9gVAAR%2BOTMSg1qsF7%2BnMUYsSM7VBx5kcde%2FRS2egMUeNbpRGffs0MlC8P3Mos5Db9cd2Ch0TXeghcYRSfDDdy%2FXABjqkAVgbqwZn9D2KWN7pJQJ6ApADfjAj7criSlrrgEnU%2BHTd%2BMiYioP6lDYXAGcf7qxo3IgRkWpVU4LsN8uqfbQLkvjBqJaf5H39YdzJhYb2Zik3yTh3AlHKvqN2cpMoThK13aVI8H00pWVeSeO%2FsbV2xZNWHN9jOr1rnEm1CLPULGnXyEQXi9OlrtDCpjVK02Dpnf8OwSdAuPHu9I81eA41oj9taG%2Bb&X-Amz-Signature=8788ad0880d074f545389b389978a68644db3896b98764247d087c0accf884dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W4UVP63%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8fHHLak295PNSyGPpJguS10rURq7%2Bc8YeGmVQE8c1gIhAKHpwoCVYofJAEwis22TficW4E%2F6VLYxvUsW%2FUi99qCcKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnUpi02kl0TAW4c4Qq3AMTUFd%2FMN5eOqIOxjUgIIcwd%2FIyuW8ZpyInT6JSdjIvHUp%2FDPypssYU2nAkY18USdXlZIP5L1CatU0jTwSMa5IqihzYmPIRmOMpemFGYlfisH86EKqDWYvPtlx%2Bro5T3uxo0Vf751RI%2BXPVsacyvoEpUwyMWpBXpYwJ8pCRUDZvv3BElNfNTtvPifrYwFLUo991A0duJyGXvOu3nXXSzR7xxAVXHaANKPruzLRP2Qucub3Ofdvkk7YSQFgKcWt8Qj%2BYRg%2FHwpSo93e89Fx8xLllxkpjxBdgDg4ZIR9hPobw7TeBiiC6LLyQszz4TtjOy1UgCBlqhET0cvs3rdz%2F%2BOr0E864F9ivvEMulVY6BFNWxMMVJUbj%2F5vFqKTYUg08MgieQfuE3epLt3mfFHB%2FxzlpTLWTKZ8ZqvT%2Fn2G6L0hmeRLW58ZFOp4gbiCx4%2BRq8e5QSyp0yHp2jaIaOHAKbcm3fiDakOxO5YFbvCTxbPwfvuDb8VVUBF4nNyUo%2FpPFj30nW4gFkXwc9Dbhd3rN9O0yXFpK3jhdfj74SoXxzT8D9gVAAR%2BOTMSg1qsF7%2BnMUYsSM7VBx5kcde%2FRS2egMUeNbpRGffs0MlC8P3Mos5Db9cd2Ch0TXeghcYRSfDDdy%2FXABjqkAVgbqwZn9D2KWN7pJQJ6ApADfjAj7criSlrrgEnU%2BHTd%2BMiYioP6lDYXAGcf7qxo3IgRkWpVU4LsN8uqfbQLkvjBqJaf5H39YdzJhYb2Zik3yTh3AlHKvqN2cpMoThK13aVI8H00pWVeSeO%2FsbV2xZNWHN9jOr1rnEm1CLPULGnXyEQXi9OlrtDCpjVK02Dpnf8OwSdAuPHu9I81eA41oj9taG%2Bb&X-Amz-Signature=3e068ffe0b4632fa9c3c0522af1152dec0f653da66fa5480659a67c132a05aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W4UVP63%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8fHHLak295PNSyGPpJguS10rURq7%2Bc8YeGmVQE8c1gIhAKHpwoCVYofJAEwis22TficW4E%2F6VLYxvUsW%2FUi99qCcKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnUpi02kl0TAW4c4Qq3AMTUFd%2FMN5eOqIOxjUgIIcwd%2FIyuW8ZpyInT6JSdjIvHUp%2FDPypssYU2nAkY18USdXlZIP5L1CatU0jTwSMa5IqihzYmPIRmOMpemFGYlfisH86EKqDWYvPtlx%2Bro5T3uxo0Vf751RI%2BXPVsacyvoEpUwyMWpBXpYwJ8pCRUDZvv3BElNfNTtvPifrYwFLUo991A0duJyGXvOu3nXXSzR7xxAVXHaANKPruzLRP2Qucub3Ofdvkk7YSQFgKcWt8Qj%2BYRg%2FHwpSo93e89Fx8xLllxkpjxBdgDg4ZIR9hPobw7TeBiiC6LLyQszz4TtjOy1UgCBlqhET0cvs3rdz%2F%2BOr0E864F9ivvEMulVY6BFNWxMMVJUbj%2F5vFqKTYUg08MgieQfuE3epLt3mfFHB%2FxzlpTLWTKZ8ZqvT%2Fn2G6L0hmeRLW58ZFOp4gbiCx4%2BRq8e5QSyp0yHp2jaIaOHAKbcm3fiDakOxO5YFbvCTxbPwfvuDb8VVUBF4nNyUo%2FpPFj30nW4gFkXwc9Dbhd3rN9O0yXFpK3jhdfj74SoXxzT8D9gVAAR%2BOTMSg1qsF7%2BnMUYsSM7VBx5kcde%2FRS2egMUeNbpRGffs0MlC8P3Mos5Db9cd2Ch0TXeghcYRSfDDdy%2FXABjqkAVgbqwZn9D2KWN7pJQJ6ApADfjAj7criSlrrgEnU%2BHTd%2BMiYioP6lDYXAGcf7qxo3IgRkWpVU4LsN8uqfbQLkvjBqJaf5H39YdzJhYb2Zik3yTh3AlHKvqN2cpMoThK13aVI8H00pWVeSeO%2FsbV2xZNWHN9jOr1rnEm1CLPULGnXyEQXi9OlrtDCpjVK02Dpnf8OwSdAuPHu9I81eA41oj9taG%2Bb&X-Amz-Signature=f2dec6980414a5ccc2c23794f0e8ff4e0b0a560ee943066c35ecf5958cfbbcb6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W4UVP63%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8fHHLak295PNSyGPpJguS10rURq7%2Bc8YeGmVQE8c1gIhAKHpwoCVYofJAEwis22TficW4E%2F6VLYxvUsW%2FUi99qCcKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnUpi02kl0TAW4c4Qq3AMTUFd%2FMN5eOqIOxjUgIIcwd%2FIyuW8ZpyInT6JSdjIvHUp%2FDPypssYU2nAkY18USdXlZIP5L1CatU0jTwSMa5IqihzYmPIRmOMpemFGYlfisH86EKqDWYvPtlx%2Bro5T3uxo0Vf751RI%2BXPVsacyvoEpUwyMWpBXpYwJ8pCRUDZvv3BElNfNTtvPifrYwFLUo991A0duJyGXvOu3nXXSzR7xxAVXHaANKPruzLRP2Qucub3Ofdvkk7YSQFgKcWt8Qj%2BYRg%2FHwpSo93e89Fx8xLllxkpjxBdgDg4ZIR9hPobw7TeBiiC6LLyQszz4TtjOy1UgCBlqhET0cvs3rdz%2F%2BOr0E864F9ivvEMulVY6BFNWxMMVJUbj%2F5vFqKTYUg08MgieQfuE3epLt3mfFHB%2FxzlpTLWTKZ8ZqvT%2Fn2G6L0hmeRLW58ZFOp4gbiCx4%2BRq8e5QSyp0yHp2jaIaOHAKbcm3fiDakOxO5YFbvCTxbPwfvuDb8VVUBF4nNyUo%2FpPFj30nW4gFkXwc9Dbhd3rN9O0yXFpK3jhdfj74SoXxzT8D9gVAAR%2BOTMSg1qsF7%2BnMUYsSM7VBx5kcde%2FRS2egMUeNbpRGffs0MlC8P3Mos5Db9cd2Ch0TXeghcYRSfDDdy%2FXABjqkAVgbqwZn9D2KWN7pJQJ6ApADfjAj7criSlrrgEnU%2BHTd%2BMiYioP6lDYXAGcf7qxo3IgRkWpVU4LsN8uqfbQLkvjBqJaf5H39YdzJhYb2Zik3yTh3AlHKvqN2cpMoThK13aVI8H00pWVeSeO%2FsbV2xZNWHN9jOr1rnEm1CLPULGnXyEQXi9OlrtDCpjVK02Dpnf8OwSdAuPHu9I81eA41oj9taG%2Bb&X-Amz-Signature=5911582026ec4de2547dd8f43ad1cf3c86622bb612f5aba818b042ddb90e72e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W4UVP63%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8fHHLak295PNSyGPpJguS10rURq7%2Bc8YeGmVQE8c1gIhAKHpwoCVYofJAEwis22TficW4E%2F6VLYxvUsW%2FUi99qCcKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnUpi02kl0TAW4c4Qq3AMTUFd%2FMN5eOqIOxjUgIIcwd%2FIyuW8ZpyInT6JSdjIvHUp%2FDPypssYU2nAkY18USdXlZIP5L1CatU0jTwSMa5IqihzYmPIRmOMpemFGYlfisH86EKqDWYvPtlx%2Bro5T3uxo0Vf751RI%2BXPVsacyvoEpUwyMWpBXpYwJ8pCRUDZvv3BElNfNTtvPifrYwFLUo991A0duJyGXvOu3nXXSzR7xxAVXHaANKPruzLRP2Qucub3Ofdvkk7YSQFgKcWt8Qj%2BYRg%2FHwpSo93e89Fx8xLllxkpjxBdgDg4ZIR9hPobw7TeBiiC6LLyQszz4TtjOy1UgCBlqhET0cvs3rdz%2F%2BOr0E864F9ivvEMulVY6BFNWxMMVJUbj%2F5vFqKTYUg08MgieQfuE3epLt3mfFHB%2FxzlpTLWTKZ8ZqvT%2Fn2G6L0hmeRLW58ZFOp4gbiCx4%2BRq8e5QSyp0yHp2jaIaOHAKbcm3fiDakOxO5YFbvCTxbPwfvuDb8VVUBF4nNyUo%2FpPFj30nW4gFkXwc9Dbhd3rN9O0yXFpK3jhdfj74SoXxzT8D9gVAAR%2BOTMSg1qsF7%2BnMUYsSM7VBx5kcde%2FRS2egMUeNbpRGffs0MlC8P3Mos5Db9cd2Ch0TXeghcYRSfDDdy%2FXABjqkAVgbqwZn9D2KWN7pJQJ6ApADfjAj7criSlrrgEnU%2BHTd%2BMiYioP6lDYXAGcf7qxo3IgRkWpVU4LsN8uqfbQLkvjBqJaf5H39YdzJhYb2Zik3yTh3AlHKvqN2cpMoThK13aVI8H00pWVeSeO%2FsbV2xZNWHN9jOr1rnEm1CLPULGnXyEQXi9OlrtDCpjVK02Dpnf8OwSdAuPHu9I81eA41oj9taG%2Bb&X-Amz-Signature=7b5225df63498e7b65a494066c5882a8ba969eb109f51b6b3f5037f4339c0c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W4UVP63%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8fHHLak295PNSyGPpJguS10rURq7%2Bc8YeGmVQE8c1gIhAKHpwoCVYofJAEwis22TficW4E%2F6VLYxvUsW%2FUi99qCcKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnUpi02kl0TAW4c4Qq3AMTUFd%2FMN5eOqIOxjUgIIcwd%2FIyuW8ZpyInT6JSdjIvHUp%2FDPypssYU2nAkY18USdXlZIP5L1CatU0jTwSMa5IqihzYmPIRmOMpemFGYlfisH86EKqDWYvPtlx%2Bro5T3uxo0Vf751RI%2BXPVsacyvoEpUwyMWpBXpYwJ8pCRUDZvv3BElNfNTtvPifrYwFLUo991A0duJyGXvOu3nXXSzR7xxAVXHaANKPruzLRP2Qucub3Ofdvkk7YSQFgKcWt8Qj%2BYRg%2FHwpSo93e89Fx8xLllxkpjxBdgDg4ZIR9hPobw7TeBiiC6LLyQszz4TtjOy1UgCBlqhET0cvs3rdz%2F%2BOr0E864F9ivvEMulVY6BFNWxMMVJUbj%2F5vFqKTYUg08MgieQfuE3epLt3mfFHB%2FxzlpTLWTKZ8ZqvT%2Fn2G6L0hmeRLW58ZFOp4gbiCx4%2BRq8e5QSyp0yHp2jaIaOHAKbcm3fiDakOxO5YFbvCTxbPwfvuDb8VVUBF4nNyUo%2FpPFj30nW4gFkXwc9Dbhd3rN9O0yXFpK3jhdfj74SoXxzT8D9gVAAR%2BOTMSg1qsF7%2BnMUYsSM7VBx5kcde%2FRS2egMUeNbpRGffs0MlC8P3Mos5Db9cd2Ch0TXeghcYRSfDDdy%2FXABjqkAVgbqwZn9D2KWN7pJQJ6ApADfjAj7criSlrrgEnU%2BHTd%2BMiYioP6lDYXAGcf7qxo3IgRkWpVU4LsN8uqfbQLkvjBqJaf5H39YdzJhYb2Zik3yTh3AlHKvqN2cpMoThK13aVI8H00pWVeSeO%2FsbV2xZNWHN9jOr1rnEm1CLPULGnXyEQXi9OlrtDCpjVK02Dpnf8OwSdAuPHu9I81eA41oj9taG%2Bb&X-Amz-Signature=fd0f33428ddf079a5bb3ab8becbf522a524f24bf2ff46c19267e80afb45b67d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W4UVP63%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8fHHLak295PNSyGPpJguS10rURq7%2Bc8YeGmVQE8c1gIhAKHpwoCVYofJAEwis22TficW4E%2F6VLYxvUsW%2FUi99qCcKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnUpi02kl0TAW4c4Qq3AMTUFd%2FMN5eOqIOxjUgIIcwd%2FIyuW8ZpyInT6JSdjIvHUp%2FDPypssYU2nAkY18USdXlZIP5L1CatU0jTwSMa5IqihzYmPIRmOMpemFGYlfisH86EKqDWYvPtlx%2Bro5T3uxo0Vf751RI%2BXPVsacyvoEpUwyMWpBXpYwJ8pCRUDZvv3BElNfNTtvPifrYwFLUo991A0duJyGXvOu3nXXSzR7xxAVXHaANKPruzLRP2Qucub3Ofdvkk7YSQFgKcWt8Qj%2BYRg%2FHwpSo93e89Fx8xLllxkpjxBdgDg4ZIR9hPobw7TeBiiC6LLyQszz4TtjOy1UgCBlqhET0cvs3rdz%2F%2BOr0E864F9ivvEMulVY6BFNWxMMVJUbj%2F5vFqKTYUg08MgieQfuE3epLt3mfFHB%2FxzlpTLWTKZ8ZqvT%2Fn2G6L0hmeRLW58ZFOp4gbiCx4%2BRq8e5QSyp0yHp2jaIaOHAKbcm3fiDakOxO5YFbvCTxbPwfvuDb8VVUBF4nNyUo%2FpPFj30nW4gFkXwc9Dbhd3rN9O0yXFpK3jhdfj74SoXxzT8D9gVAAR%2BOTMSg1qsF7%2BnMUYsSM7VBx5kcde%2FRS2egMUeNbpRGffs0MlC8P3Mos5Db9cd2Ch0TXeghcYRSfDDdy%2FXABjqkAVgbqwZn9D2KWN7pJQJ6ApADfjAj7criSlrrgEnU%2BHTd%2BMiYioP6lDYXAGcf7qxo3IgRkWpVU4LsN8uqfbQLkvjBqJaf5H39YdzJhYb2Zik3yTh3AlHKvqN2cpMoThK13aVI8H00pWVeSeO%2FsbV2xZNWHN9jOr1rnEm1CLPULGnXyEQXi9OlrtDCpjVK02Dpnf8OwSdAuPHu9I81eA41oj9taG%2Bb&X-Amz-Signature=c049ef8a299c4d83eee77eca6ccf27d112f4b35d88731afb1ed28dbd3e82d42d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W4UVP63%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8fHHLak295PNSyGPpJguS10rURq7%2Bc8YeGmVQE8c1gIhAKHpwoCVYofJAEwis22TficW4E%2F6VLYxvUsW%2FUi99qCcKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnUpi02kl0TAW4c4Qq3AMTUFd%2FMN5eOqIOxjUgIIcwd%2FIyuW8ZpyInT6JSdjIvHUp%2FDPypssYU2nAkY18USdXlZIP5L1CatU0jTwSMa5IqihzYmPIRmOMpemFGYlfisH86EKqDWYvPtlx%2Bro5T3uxo0Vf751RI%2BXPVsacyvoEpUwyMWpBXpYwJ8pCRUDZvv3BElNfNTtvPifrYwFLUo991A0duJyGXvOu3nXXSzR7xxAVXHaANKPruzLRP2Qucub3Ofdvkk7YSQFgKcWt8Qj%2BYRg%2FHwpSo93e89Fx8xLllxkpjxBdgDg4ZIR9hPobw7TeBiiC6LLyQszz4TtjOy1UgCBlqhET0cvs3rdz%2F%2BOr0E864F9ivvEMulVY6BFNWxMMVJUbj%2F5vFqKTYUg08MgieQfuE3epLt3mfFHB%2FxzlpTLWTKZ8ZqvT%2Fn2G6L0hmeRLW58ZFOp4gbiCx4%2BRq8e5QSyp0yHp2jaIaOHAKbcm3fiDakOxO5YFbvCTxbPwfvuDb8VVUBF4nNyUo%2FpPFj30nW4gFkXwc9Dbhd3rN9O0yXFpK3jhdfj74SoXxzT8D9gVAAR%2BOTMSg1qsF7%2BnMUYsSM7VBx5kcde%2FRS2egMUeNbpRGffs0MlC8P3Mos5Db9cd2Ch0TXeghcYRSfDDdy%2FXABjqkAVgbqwZn9D2KWN7pJQJ6ApADfjAj7criSlrrgEnU%2BHTd%2BMiYioP6lDYXAGcf7qxo3IgRkWpVU4LsN8uqfbQLkvjBqJaf5H39YdzJhYb2Zik3yTh3AlHKvqN2cpMoThK13aVI8H00pWVeSeO%2FsbV2xZNWHN9jOr1rnEm1CLPULGnXyEQXi9OlrtDCpjVK02Dpnf8OwSdAuPHu9I81eA41oj9taG%2Bb&X-Amz-Signature=a7e87387f77c0da447450958daabe02802a8c4876c78acf394df7f63ce881dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
