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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5HVHOV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIESifqGmL7cIedwP6FCKHcBdPeT1DmD9e8YNYk51X8NjAiApZCORWzNsb2Noiirym5AXEGnXdZ3mUKpAnpltzCPtYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMuC3ngzs%2FaFOCZ3r5KtwDycCFx4gzhCqvdOIjm4ZO5QaGQ6HBQScfHEE%2FMjxcv%2FxiZQLtXUzp7Dfe7Un9iCJFnKNfORSE%2BCLcogEv6vnd%2BJk7VbfynwqMlHau1Ce8TxShyFRWEetlLEXbZRTlH1NDS0w7i4kjejEV4NJJIdSfXZR3hwQ89cQUA99k8xU%2FJm72y2fjxd55FMZx5incNaz%2FrzXF0vm2vgzFJ84lLiq6eZxDIzqDC%2BjSyfAbyb3tCs4PR0KgTxdxCK63SvGFi%2FKSRP4mOfRHcfrZ305nCC0Wutn1%2B61e9GJVM6qMHqtIfqkht6AwNvMHLi%2Bn0YwkoTex61Ky0vlJt%2FBG5kCfccelBHPvt1PWc7XHZQMBDjzeyGNwiHXKnKgVP%2FuidJnuSfCbI7%2BXblJ6PBjxGSFqYnMamjogjG5qTsMayvh%2BLmyoVjyZdCUkLqwUNK%2Bs76OvmVCG%2FGlTBuRpMS%2FfAiPIZr9keQD31sHseFBsiq3jd%2FLzf5jaxieDmFZbKJ1%2BoZgIJ9RYVJPEU3JAUo5aMCzFm4IK2xv60gYs5N%2FPggz%2FMeAgbsZoEGS8KjhZfaE5u2V5ajImvfuYAi9z37OP3z7ys7FPlWmJMVafRygInZVkPjlHS5zW2jybxyLcPclgSuow7K3HxAY6pgFAIQoCbrrNMndpfe6g13v2nUavgJbZWtkGTQQCP8g3ip9IruASBgO2%2F7iOAcMFcf8TN5j6KnIhoJZhWPXBBx5jLyHLyrD7mOE1OJK9r8X1FfJGEUWy791ViR6d0qWdJmKp348g%2FyF6nv7TlEWTuVUJYi2uTyVb8Fumk%2FJzM6my7yDmq22WgdEJTbeudwLlLhixQpCrJfhevGdn6BOxDlu75HPrcNjc&X-Amz-Signature=7589d48b481c1492786eb51eb2daaf7ca7d7812b8baa6a711067d0a5e095b855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5HVHOV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIESifqGmL7cIedwP6FCKHcBdPeT1DmD9e8YNYk51X8NjAiApZCORWzNsb2Noiirym5AXEGnXdZ3mUKpAnpltzCPtYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMuC3ngzs%2FaFOCZ3r5KtwDycCFx4gzhCqvdOIjm4ZO5QaGQ6HBQScfHEE%2FMjxcv%2FxiZQLtXUzp7Dfe7Un9iCJFnKNfORSE%2BCLcogEv6vnd%2BJk7VbfynwqMlHau1Ce8TxShyFRWEetlLEXbZRTlH1NDS0w7i4kjejEV4NJJIdSfXZR3hwQ89cQUA99k8xU%2FJm72y2fjxd55FMZx5incNaz%2FrzXF0vm2vgzFJ84lLiq6eZxDIzqDC%2BjSyfAbyb3tCs4PR0KgTxdxCK63SvGFi%2FKSRP4mOfRHcfrZ305nCC0Wutn1%2B61e9GJVM6qMHqtIfqkht6AwNvMHLi%2Bn0YwkoTex61Ky0vlJt%2FBG5kCfccelBHPvt1PWc7XHZQMBDjzeyGNwiHXKnKgVP%2FuidJnuSfCbI7%2BXblJ6PBjxGSFqYnMamjogjG5qTsMayvh%2BLmyoVjyZdCUkLqwUNK%2Bs76OvmVCG%2FGlTBuRpMS%2FfAiPIZr9keQD31sHseFBsiq3jd%2FLzf5jaxieDmFZbKJ1%2BoZgIJ9RYVJPEU3JAUo5aMCzFm4IK2xv60gYs5N%2FPggz%2FMeAgbsZoEGS8KjhZfaE5u2V5ajImvfuYAi9z37OP3z7ys7FPlWmJMVafRygInZVkPjlHS5zW2jybxyLcPclgSuow7K3HxAY6pgFAIQoCbrrNMndpfe6g13v2nUavgJbZWtkGTQQCP8g3ip9IruASBgO2%2F7iOAcMFcf8TN5j6KnIhoJZhWPXBBx5jLyHLyrD7mOE1OJK9r8X1FfJGEUWy791ViR6d0qWdJmKp348g%2FyF6nv7TlEWTuVUJYi2uTyVb8Fumk%2FJzM6my7yDmq22WgdEJTbeudwLlLhixQpCrJfhevGdn6BOxDlu75HPrcNjc&X-Amz-Signature=d62ae8345976d6325abfc363cfe5d7f5c0f7219ee7f9899cd74c9a05ad179448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5HVHOV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIESifqGmL7cIedwP6FCKHcBdPeT1DmD9e8YNYk51X8NjAiApZCORWzNsb2Noiirym5AXEGnXdZ3mUKpAnpltzCPtYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMuC3ngzs%2FaFOCZ3r5KtwDycCFx4gzhCqvdOIjm4ZO5QaGQ6HBQScfHEE%2FMjxcv%2FxiZQLtXUzp7Dfe7Un9iCJFnKNfORSE%2BCLcogEv6vnd%2BJk7VbfynwqMlHau1Ce8TxShyFRWEetlLEXbZRTlH1NDS0w7i4kjejEV4NJJIdSfXZR3hwQ89cQUA99k8xU%2FJm72y2fjxd55FMZx5incNaz%2FrzXF0vm2vgzFJ84lLiq6eZxDIzqDC%2BjSyfAbyb3tCs4PR0KgTxdxCK63SvGFi%2FKSRP4mOfRHcfrZ305nCC0Wutn1%2B61e9GJVM6qMHqtIfqkht6AwNvMHLi%2Bn0YwkoTex61Ky0vlJt%2FBG5kCfccelBHPvt1PWc7XHZQMBDjzeyGNwiHXKnKgVP%2FuidJnuSfCbI7%2BXblJ6PBjxGSFqYnMamjogjG5qTsMayvh%2BLmyoVjyZdCUkLqwUNK%2Bs76OvmVCG%2FGlTBuRpMS%2FfAiPIZr9keQD31sHseFBsiq3jd%2FLzf5jaxieDmFZbKJ1%2BoZgIJ9RYVJPEU3JAUo5aMCzFm4IK2xv60gYs5N%2FPggz%2FMeAgbsZoEGS8KjhZfaE5u2V5ajImvfuYAi9z37OP3z7ys7FPlWmJMVafRygInZVkPjlHS5zW2jybxyLcPclgSuow7K3HxAY6pgFAIQoCbrrNMndpfe6g13v2nUavgJbZWtkGTQQCP8g3ip9IruASBgO2%2F7iOAcMFcf8TN5j6KnIhoJZhWPXBBx5jLyHLyrD7mOE1OJK9r8X1FfJGEUWy791ViR6d0qWdJmKp348g%2FyF6nv7TlEWTuVUJYi2uTyVb8Fumk%2FJzM6my7yDmq22WgdEJTbeudwLlLhixQpCrJfhevGdn6BOxDlu75HPrcNjc&X-Amz-Signature=3a01d28bf5037d47952f28cf0c259fddba84b0f866f4cf8498875edc9c0f7320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5HVHOV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIESifqGmL7cIedwP6FCKHcBdPeT1DmD9e8YNYk51X8NjAiApZCORWzNsb2Noiirym5AXEGnXdZ3mUKpAnpltzCPtYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMuC3ngzs%2FaFOCZ3r5KtwDycCFx4gzhCqvdOIjm4ZO5QaGQ6HBQScfHEE%2FMjxcv%2FxiZQLtXUzp7Dfe7Un9iCJFnKNfORSE%2BCLcogEv6vnd%2BJk7VbfynwqMlHau1Ce8TxShyFRWEetlLEXbZRTlH1NDS0w7i4kjejEV4NJJIdSfXZR3hwQ89cQUA99k8xU%2FJm72y2fjxd55FMZx5incNaz%2FrzXF0vm2vgzFJ84lLiq6eZxDIzqDC%2BjSyfAbyb3tCs4PR0KgTxdxCK63SvGFi%2FKSRP4mOfRHcfrZ305nCC0Wutn1%2B61e9GJVM6qMHqtIfqkht6AwNvMHLi%2Bn0YwkoTex61Ky0vlJt%2FBG5kCfccelBHPvt1PWc7XHZQMBDjzeyGNwiHXKnKgVP%2FuidJnuSfCbI7%2BXblJ6PBjxGSFqYnMamjogjG5qTsMayvh%2BLmyoVjyZdCUkLqwUNK%2Bs76OvmVCG%2FGlTBuRpMS%2FfAiPIZr9keQD31sHseFBsiq3jd%2FLzf5jaxieDmFZbKJ1%2BoZgIJ9RYVJPEU3JAUo5aMCzFm4IK2xv60gYs5N%2FPggz%2FMeAgbsZoEGS8KjhZfaE5u2V5ajImvfuYAi9z37OP3z7ys7FPlWmJMVafRygInZVkPjlHS5zW2jybxyLcPclgSuow7K3HxAY6pgFAIQoCbrrNMndpfe6g13v2nUavgJbZWtkGTQQCP8g3ip9IruASBgO2%2F7iOAcMFcf8TN5j6KnIhoJZhWPXBBx5jLyHLyrD7mOE1OJK9r8X1FfJGEUWy791ViR6d0qWdJmKp348g%2FyF6nv7TlEWTuVUJYi2uTyVb8Fumk%2FJzM6my7yDmq22WgdEJTbeudwLlLhixQpCrJfhevGdn6BOxDlu75HPrcNjc&X-Amz-Signature=cdd9103ed3ee4d96900905c346d6d294ec9b5978e127d6da1bc1f4be10c4d86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5HVHOV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIESifqGmL7cIedwP6FCKHcBdPeT1DmD9e8YNYk51X8NjAiApZCORWzNsb2Noiirym5AXEGnXdZ3mUKpAnpltzCPtYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMuC3ngzs%2FaFOCZ3r5KtwDycCFx4gzhCqvdOIjm4ZO5QaGQ6HBQScfHEE%2FMjxcv%2FxiZQLtXUzp7Dfe7Un9iCJFnKNfORSE%2BCLcogEv6vnd%2BJk7VbfynwqMlHau1Ce8TxShyFRWEetlLEXbZRTlH1NDS0w7i4kjejEV4NJJIdSfXZR3hwQ89cQUA99k8xU%2FJm72y2fjxd55FMZx5incNaz%2FrzXF0vm2vgzFJ84lLiq6eZxDIzqDC%2BjSyfAbyb3tCs4PR0KgTxdxCK63SvGFi%2FKSRP4mOfRHcfrZ305nCC0Wutn1%2B61e9GJVM6qMHqtIfqkht6AwNvMHLi%2Bn0YwkoTex61Ky0vlJt%2FBG5kCfccelBHPvt1PWc7XHZQMBDjzeyGNwiHXKnKgVP%2FuidJnuSfCbI7%2BXblJ6PBjxGSFqYnMamjogjG5qTsMayvh%2BLmyoVjyZdCUkLqwUNK%2Bs76OvmVCG%2FGlTBuRpMS%2FfAiPIZr9keQD31sHseFBsiq3jd%2FLzf5jaxieDmFZbKJ1%2BoZgIJ9RYVJPEU3JAUo5aMCzFm4IK2xv60gYs5N%2FPggz%2FMeAgbsZoEGS8KjhZfaE5u2V5ajImvfuYAi9z37OP3z7ys7FPlWmJMVafRygInZVkPjlHS5zW2jybxyLcPclgSuow7K3HxAY6pgFAIQoCbrrNMndpfe6g13v2nUavgJbZWtkGTQQCP8g3ip9IruASBgO2%2F7iOAcMFcf8TN5j6KnIhoJZhWPXBBx5jLyHLyrD7mOE1OJK9r8X1FfJGEUWy791ViR6d0qWdJmKp348g%2FyF6nv7TlEWTuVUJYi2uTyVb8Fumk%2FJzM6my7yDmq22WgdEJTbeudwLlLhixQpCrJfhevGdn6BOxDlu75HPrcNjc&X-Amz-Signature=2246a965ff801ede8a799d7b7e1f28af976ef7e7ba9e38f7be06400ff3faa0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5HVHOV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIESifqGmL7cIedwP6FCKHcBdPeT1DmD9e8YNYk51X8NjAiApZCORWzNsb2Noiirym5AXEGnXdZ3mUKpAnpltzCPtYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMuC3ngzs%2FaFOCZ3r5KtwDycCFx4gzhCqvdOIjm4ZO5QaGQ6HBQScfHEE%2FMjxcv%2FxiZQLtXUzp7Dfe7Un9iCJFnKNfORSE%2BCLcogEv6vnd%2BJk7VbfynwqMlHau1Ce8TxShyFRWEetlLEXbZRTlH1NDS0w7i4kjejEV4NJJIdSfXZR3hwQ89cQUA99k8xU%2FJm72y2fjxd55FMZx5incNaz%2FrzXF0vm2vgzFJ84lLiq6eZxDIzqDC%2BjSyfAbyb3tCs4PR0KgTxdxCK63SvGFi%2FKSRP4mOfRHcfrZ305nCC0Wutn1%2B61e9GJVM6qMHqtIfqkht6AwNvMHLi%2Bn0YwkoTex61Ky0vlJt%2FBG5kCfccelBHPvt1PWc7XHZQMBDjzeyGNwiHXKnKgVP%2FuidJnuSfCbI7%2BXblJ6PBjxGSFqYnMamjogjG5qTsMayvh%2BLmyoVjyZdCUkLqwUNK%2Bs76OvmVCG%2FGlTBuRpMS%2FfAiPIZr9keQD31sHseFBsiq3jd%2FLzf5jaxieDmFZbKJ1%2BoZgIJ9RYVJPEU3JAUo5aMCzFm4IK2xv60gYs5N%2FPggz%2FMeAgbsZoEGS8KjhZfaE5u2V5ajImvfuYAi9z37OP3z7ys7FPlWmJMVafRygInZVkPjlHS5zW2jybxyLcPclgSuow7K3HxAY6pgFAIQoCbrrNMndpfe6g13v2nUavgJbZWtkGTQQCP8g3ip9IruASBgO2%2F7iOAcMFcf8TN5j6KnIhoJZhWPXBBx5jLyHLyrD7mOE1OJK9r8X1FfJGEUWy791ViR6d0qWdJmKp348g%2FyF6nv7TlEWTuVUJYi2uTyVb8Fumk%2FJzM6my7yDmq22WgdEJTbeudwLlLhixQpCrJfhevGdn6BOxDlu75HPrcNjc&X-Amz-Signature=fc60ce516e8cb2c76b56a27fa35d38e6afc03c859d6a5d4850b832bdf245f552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5HVHOV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIESifqGmL7cIedwP6FCKHcBdPeT1DmD9e8YNYk51X8NjAiApZCORWzNsb2Noiirym5AXEGnXdZ3mUKpAnpltzCPtYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMuC3ngzs%2FaFOCZ3r5KtwDycCFx4gzhCqvdOIjm4ZO5QaGQ6HBQScfHEE%2FMjxcv%2FxiZQLtXUzp7Dfe7Un9iCJFnKNfORSE%2BCLcogEv6vnd%2BJk7VbfynwqMlHau1Ce8TxShyFRWEetlLEXbZRTlH1NDS0w7i4kjejEV4NJJIdSfXZR3hwQ89cQUA99k8xU%2FJm72y2fjxd55FMZx5incNaz%2FrzXF0vm2vgzFJ84lLiq6eZxDIzqDC%2BjSyfAbyb3tCs4PR0KgTxdxCK63SvGFi%2FKSRP4mOfRHcfrZ305nCC0Wutn1%2B61e9GJVM6qMHqtIfqkht6AwNvMHLi%2Bn0YwkoTex61Ky0vlJt%2FBG5kCfccelBHPvt1PWc7XHZQMBDjzeyGNwiHXKnKgVP%2FuidJnuSfCbI7%2BXblJ6PBjxGSFqYnMamjogjG5qTsMayvh%2BLmyoVjyZdCUkLqwUNK%2Bs76OvmVCG%2FGlTBuRpMS%2FfAiPIZr9keQD31sHseFBsiq3jd%2FLzf5jaxieDmFZbKJ1%2BoZgIJ9RYVJPEU3JAUo5aMCzFm4IK2xv60gYs5N%2FPggz%2FMeAgbsZoEGS8KjhZfaE5u2V5ajImvfuYAi9z37OP3z7ys7FPlWmJMVafRygInZVkPjlHS5zW2jybxyLcPclgSuow7K3HxAY6pgFAIQoCbrrNMndpfe6g13v2nUavgJbZWtkGTQQCP8g3ip9IruASBgO2%2F7iOAcMFcf8TN5j6KnIhoJZhWPXBBx5jLyHLyrD7mOE1OJK9r8X1FfJGEUWy791ViR6d0qWdJmKp348g%2FyF6nv7TlEWTuVUJYi2uTyVb8Fumk%2FJzM6my7yDmq22WgdEJTbeudwLlLhixQpCrJfhevGdn6BOxDlu75HPrcNjc&X-Amz-Signature=f2995203d1cdccac7cf58cac002b077ca6226a22d92182d9c94f9e723d6f80e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5HVHOV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIESifqGmL7cIedwP6FCKHcBdPeT1DmD9e8YNYk51X8NjAiApZCORWzNsb2Noiirym5AXEGnXdZ3mUKpAnpltzCPtYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMuC3ngzs%2FaFOCZ3r5KtwDycCFx4gzhCqvdOIjm4ZO5QaGQ6HBQScfHEE%2FMjxcv%2FxiZQLtXUzp7Dfe7Un9iCJFnKNfORSE%2BCLcogEv6vnd%2BJk7VbfynwqMlHau1Ce8TxShyFRWEetlLEXbZRTlH1NDS0w7i4kjejEV4NJJIdSfXZR3hwQ89cQUA99k8xU%2FJm72y2fjxd55FMZx5incNaz%2FrzXF0vm2vgzFJ84lLiq6eZxDIzqDC%2BjSyfAbyb3tCs4PR0KgTxdxCK63SvGFi%2FKSRP4mOfRHcfrZ305nCC0Wutn1%2B61e9GJVM6qMHqtIfqkht6AwNvMHLi%2Bn0YwkoTex61Ky0vlJt%2FBG5kCfccelBHPvt1PWc7XHZQMBDjzeyGNwiHXKnKgVP%2FuidJnuSfCbI7%2BXblJ6PBjxGSFqYnMamjogjG5qTsMayvh%2BLmyoVjyZdCUkLqwUNK%2Bs76OvmVCG%2FGlTBuRpMS%2FfAiPIZr9keQD31sHseFBsiq3jd%2FLzf5jaxieDmFZbKJ1%2BoZgIJ9RYVJPEU3JAUo5aMCzFm4IK2xv60gYs5N%2FPggz%2FMeAgbsZoEGS8KjhZfaE5u2V5ajImvfuYAi9z37OP3z7ys7FPlWmJMVafRygInZVkPjlHS5zW2jybxyLcPclgSuow7K3HxAY6pgFAIQoCbrrNMndpfe6g13v2nUavgJbZWtkGTQQCP8g3ip9IruASBgO2%2F7iOAcMFcf8TN5j6KnIhoJZhWPXBBx5jLyHLyrD7mOE1OJK9r8X1FfJGEUWy791ViR6d0qWdJmKp348g%2FyF6nv7TlEWTuVUJYi2uTyVb8Fumk%2FJzM6my7yDmq22WgdEJTbeudwLlLhixQpCrJfhevGdn6BOxDlu75HPrcNjc&X-Amz-Signature=0dfbb726bc4884da7c0c8a6006453c6a1830c5d873b396df47ccb4e1069e8954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
