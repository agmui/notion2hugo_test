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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2AMUAP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHNPXCIGiJWcz%2BXY9jZ7%2BxqB8Y17MJx%2FjBFk3BO2%2FqSAiAXwUGbJx%2BRrqCW%2FbDHPeN8Dp%2F9Y6qQYry9ohZB1xg%2B8Cr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY33S1y3btjdchO3WKtwDyaEv5suDFnBylItIuC84kF3fFLM9ue7Nk%2F2kh6uRUckF30ddrp%2BkmXncmdt5YpRF5YV1fHDeQRcBshcTV0FFSLu7pBY9rAQa01cxbmSWDH5KYQd8bop40BgW0XBtQVOD9V3u2qZNCjDzhVg%2F5iVMNQ9ofXfdKJIHfr%2FMNmOhpxRy8LWLRP3y%2Fy0H0s7BYCt4dT%2BdRN3j4e4Z%2FOd6yJVB2FtQGbE7n3cFz5Bn%2Fzr0yEC9fB1bjB6HkVVHyK1G88oEwnYPXvEnf%2B80GEuyZQSfTVSOdS5HD123UvXsC4K0zx4D2eldAfgvNt2CjHUt65d6UjX6N7GhGKjAMVjjFjA2P53Zerlur1zVm1gOBiCLupYIyetISJU8Uik6QYskXmQcixmrnJrp2zEXYbtvQavmE%2FOOcxtD12GPgPmOxms4hUopsRd%2BZbydQqHS%2BqfaXS6jzH0X9fF%2BWbaHPn4c8QKQp%2BLgsX2BdPUdrgA8XuWvJN2VJPFIAkcsgYoN0FSO1d1%2FjFnc36etDWchU5xgeIN8Pcpj2chEu%2B2yS4xGRP5XIyltMV7c66v4MJU%2F7MzSUt8%2BCjj1jxuGN3zRQSDQgwqEx1Xg84zhW%2B%2F%2BNTtDwbkYTgfgQkDrh1Va6c7534Ewx6m0wAY6pgHPypB7mZ8O8K8z0aPCGz5vKFC6W8oVAgy03bbtvNWn0mrVwAySLiIlBx%2BCR3u30VGj%2FsGw4Lh19gmZ0%2FNRT4kg%2F0Zqe7vwLbN0JWvbZqQIIS%2FPYAVCuBNumxZDus24jJMJ2fEjI4A32YZ2fgKCz0%2F%2Bldi0BvTNjBhs%2FcI5GWbGtTG4VgTTT4zq0RDhtHSFrQE3rGMcyU%2BLK2ZX8u6dtSjq3SANZygg&X-Amz-Signature=a39343971447a841be3133316b2a937393b17d3cf95c4c9b34d6429279a30ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2AMUAP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHNPXCIGiJWcz%2BXY9jZ7%2BxqB8Y17MJx%2FjBFk3BO2%2FqSAiAXwUGbJx%2BRrqCW%2FbDHPeN8Dp%2F9Y6qQYry9ohZB1xg%2B8Cr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY33S1y3btjdchO3WKtwDyaEv5suDFnBylItIuC84kF3fFLM9ue7Nk%2F2kh6uRUckF30ddrp%2BkmXncmdt5YpRF5YV1fHDeQRcBshcTV0FFSLu7pBY9rAQa01cxbmSWDH5KYQd8bop40BgW0XBtQVOD9V3u2qZNCjDzhVg%2F5iVMNQ9ofXfdKJIHfr%2FMNmOhpxRy8LWLRP3y%2Fy0H0s7BYCt4dT%2BdRN3j4e4Z%2FOd6yJVB2FtQGbE7n3cFz5Bn%2Fzr0yEC9fB1bjB6HkVVHyK1G88oEwnYPXvEnf%2B80GEuyZQSfTVSOdS5HD123UvXsC4K0zx4D2eldAfgvNt2CjHUt65d6UjX6N7GhGKjAMVjjFjA2P53Zerlur1zVm1gOBiCLupYIyetISJU8Uik6QYskXmQcixmrnJrp2zEXYbtvQavmE%2FOOcxtD12GPgPmOxms4hUopsRd%2BZbydQqHS%2BqfaXS6jzH0X9fF%2BWbaHPn4c8QKQp%2BLgsX2BdPUdrgA8XuWvJN2VJPFIAkcsgYoN0FSO1d1%2FjFnc36etDWchU5xgeIN8Pcpj2chEu%2B2yS4xGRP5XIyltMV7c66v4MJU%2F7MzSUt8%2BCjj1jxuGN3zRQSDQgwqEx1Xg84zhW%2B%2F%2BNTtDwbkYTgfgQkDrh1Va6c7534Ewx6m0wAY6pgHPypB7mZ8O8K8z0aPCGz5vKFC6W8oVAgy03bbtvNWn0mrVwAySLiIlBx%2BCR3u30VGj%2FsGw4Lh19gmZ0%2FNRT4kg%2F0Zqe7vwLbN0JWvbZqQIIS%2FPYAVCuBNumxZDus24jJMJ2fEjI4A32YZ2fgKCz0%2F%2Bldi0BvTNjBhs%2FcI5GWbGtTG4VgTTT4zq0RDhtHSFrQE3rGMcyU%2BLK2ZX8u6dtSjq3SANZygg&X-Amz-Signature=143895cfe13d3c1e75b8a907a91cc1817ed1b23ada5d56113f34faf846ff17bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2AMUAP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHNPXCIGiJWcz%2BXY9jZ7%2BxqB8Y17MJx%2FjBFk3BO2%2FqSAiAXwUGbJx%2BRrqCW%2FbDHPeN8Dp%2F9Y6qQYry9ohZB1xg%2B8Cr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY33S1y3btjdchO3WKtwDyaEv5suDFnBylItIuC84kF3fFLM9ue7Nk%2F2kh6uRUckF30ddrp%2BkmXncmdt5YpRF5YV1fHDeQRcBshcTV0FFSLu7pBY9rAQa01cxbmSWDH5KYQd8bop40BgW0XBtQVOD9V3u2qZNCjDzhVg%2F5iVMNQ9ofXfdKJIHfr%2FMNmOhpxRy8LWLRP3y%2Fy0H0s7BYCt4dT%2BdRN3j4e4Z%2FOd6yJVB2FtQGbE7n3cFz5Bn%2Fzr0yEC9fB1bjB6HkVVHyK1G88oEwnYPXvEnf%2B80GEuyZQSfTVSOdS5HD123UvXsC4K0zx4D2eldAfgvNt2CjHUt65d6UjX6N7GhGKjAMVjjFjA2P53Zerlur1zVm1gOBiCLupYIyetISJU8Uik6QYskXmQcixmrnJrp2zEXYbtvQavmE%2FOOcxtD12GPgPmOxms4hUopsRd%2BZbydQqHS%2BqfaXS6jzH0X9fF%2BWbaHPn4c8QKQp%2BLgsX2BdPUdrgA8XuWvJN2VJPFIAkcsgYoN0FSO1d1%2FjFnc36etDWchU5xgeIN8Pcpj2chEu%2B2yS4xGRP5XIyltMV7c66v4MJU%2F7MzSUt8%2BCjj1jxuGN3zRQSDQgwqEx1Xg84zhW%2B%2F%2BNTtDwbkYTgfgQkDrh1Va6c7534Ewx6m0wAY6pgHPypB7mZ8O8K8z0aPCGz5vKFC6W8oVAgy03bbtvNWn0mrVwAySLiIlBx%2BCR3u30VGj%2FsGw4Lh19gmZ0%2FNRT4kg%2F0Zqe7vwLbN0JWvbZqQIIS%2FPYAVCuBNumxZDus24jJMJ2fEjI4A32YZ2fgKCz0%2F%2Bldi0BvTNjBhs%2FcI5GWbGtTG4VgTTT4zq0RDhtHSFrQE3rGMcyU%2BLK2ZX8u6dtSjq3SANZygg&X-Amz-Signature=2d3fc4b135138ac1bee50c2c97e06b40850e70e50c0c8d9e2fdd325146e51ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2AMUAP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHNPXCIGiJWcz%2BXY9jZ7%2BxqB8Y17MJx%2FjBFk3BO2%2FqSAiAXwUGbJx%2BRrqCW%2FbDHPeN8Dp%2F9Y6qQYry9ohZB1xg%2B8Cr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY33S1y3btjdchO3WKtwDyaEv5suDFnBylItIuC84kF3fFLM9ue7Nk%2F2kh6uRUckF30ddrp%2BkmXncmdt5YpRF5YV1fHDeQRcBshcTV0FFSLu7pBY9rAQa01cxbmSWDH5KYQd8bop40BgW0XBtQVOD9V3u2qZNCjDzhVg%2F5iVMNQ9ofXfdKJIHfr%2FMNmOhpxRy8LWLRP3y%2Fy0H0s7BYCt4dT%2BdRN3j4e4Z%2FOd6yJVB2FtQGbE7n3cFz5Bn%2Fzr0yEC9fB1bjB6HkVVHyK1G88oEwnYPXvEnf%2B80GEuyZQSfTVSOdS5HD123UvXsC4K0zx4D2eldAfgvNt2CjHUt65d6UjX6N7GhGKjAMVjjFjA2P53Zerlur1zVm1gOBiCLupYIyetISJU8Uik6QYskXmQcixmrnJrp2zEXYbtvQavmE%2FOOcxtD12GPgPmOxms4hUopsRd%2BZbydQqHS%2BqfaXS6jzH0X9fF%2BWbaHPn4c8QKQp%2BLgsX2BdPUdrgA8XuWvJN2VJPFIAkcsgYoN0FSO1d1%2FjFnc36etDWchU5xgeIN8Pcpj2chEu%2B2yS4xGRP5XIyltMV7c66v4MJU%2F7MzSUt8%2BCjj1jxuGN3zRQSDQgwqEx1Xg84zhW%2B%2F%2BNTtDwbkYTgfgQkDrh1Va6c7534Ewx6m0wAY6pgHPypB7mZ8O8K8z0aPCGz5vKFC6W8oVAgy03bbtvNWn0mrVwAySLiIlBx%2BCR3u30VGj%2FsGw4Lh19gmZ0%2FNRT4kg%2F0Zqe7vwLbN0JWvbZqQIIS%2FPYAVCuBNumxZDus24jJMJ2fEjI4A32YZ2fgKCz0%2F%2Bldi0BvTNjBhs%2FcI5GWbGtTG4VgTTT4zq0RDhtHSFrQE3rGMcyU%2BLK2ZX8u6dtSjq3SANZygg&X-Amz-Signature=695f049bfbfa547b1265e33c77a5e13ae2e09abb14c82d3795ac9415cef9f48b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2AMUAP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHNPXCIGiJWcz%2BXY9jZ7%2BxqB8Y17MJx%2FjBFk3BO2%2FqSAiAXwUGbJx%2BRrqCW%2FbDHPeN8Dp%2F9Y6qQYry9ohZB1xg%2B8Cr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY33S1y3btjdchO3WKtwDyaEv5suDFnBylItIuC84kF3fFLM9ue7Nk%2F2kh6uRUckF30ddrp%2BkmXncmdt5YpRF5YV1fHDeQRcBshcTV0FFSLu7pBY9rAQa01cxbmSWDH5KYQd8bop40BgW0XBtQVOD9V3u2qZNCjDzhVg%2F5iVMNQ9ofXfdKJIHfr%2FMNmOhpxRy8LWLRP3y%2Fy0H0s7BYCt4dT%2BdRN3j4e4Z%2FOd6yJVB2FtQGbE7n3cFz5Bn%2Fzr0yEC9fB1bjB6HkVVHyK1G88oEwnYPXvEnf%2B80GEuyZQSfTVSOdS5HD123UvXsC4K0zx4D2eldAfgvNt2CjHUt65d6UjX6N7GhGKjAMVjjFjA2P53Zerlur1zVm1gOBiCLupYIyetISJU8Uik6QYskXmQcixmrnJrp2zEXYbtvQavmE%2FOOcxtD12GPgPmOxms4hUopsRd%2BZbydQqHS%2BqfaXS6jzH0X9fF%2BWbaHPn4c8QKQp%2BLgsX2BdPUdrgA8XuWvJN2VJPFIAkcsgYoN0FSO1d1%2FjFnc36etDWchU5xgeIN8Pcpj2chEu%2B2yS4xGRP5XIyltMV7c66v4MJU%2F7MzSUt8%2BCjj1jxuGN3zRQSDQgwqEx1Xg84zhW%2B%2F%2BNTtDwbkYTgfgQkDrh1Va6c7534Ewx6m0wAY6pgHPypB7mZ8O8K8z0aPCGz5vKFC6W8oVAgy03bbtvNWn0mrVwAySLiIlBx%2BCR3u30VGj%2FsGw4Lh19gmZ0%2FNRT4kg%2F0Zqe7vwLbN0JWvbZqQIIS%2FPYAVCuBNumxZDus24jJMJ2fEjI4A32YZ2fgKCz0%2F%2Bldi0BvTNjBhs%2FcI5GWbGtTG4VgTTT4zq0RDhtHSFrQE3rGMcyU%2BLK2ZX8u6dtSjq3SANZygg&X-Amz-Signature=d9427e664fde1f6703533da3f469b6010a3c3c1077de37f0fd17fb12e17cdade&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2AMUAP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHNPXCIGiJWcz%2BXY9jZ7%2BxqB8Y17MJx%2FjBFk3BO2%2FqSAiAXwUGbJx%2BRrqCW%2FbDHPeN8Dp%2F9Y6qQYry9ohZB1xg%2B8Cr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY33S1y3btjdchO3WKtwDyaEv5suDFnBylItIuC84kF3fFLM9ue7Nk%2F2kh6uRUckF30ddrp%2BkmXncmdt5YpRF5YV1fHDeQRcBshcTV0FFSLu7pBY9rAQa01cxbmSWDH5KYQd8bop40BgW0XBtQVOD9V3u2qZNCjDzhVg%2F5iVMNQ9ofXfdKJIHfr%2FMNmOhpxRy8LWLRP3y%2Fy0H0s7BYCt4dT%2BdRN3j4e4Z%2FOd6yJVB2FtQGbE7n3cFz5Bn%2Fzr0yEC9fB1bjB6HkVVHyK1G88oEwnYPXvEnf%2B80GEuyZQSfTVSOdS5HD123UvXsC4K0zx4D2eldAfgvNt2CjHUt65d6UjX6N7GhGKjAMVjjFjA2P53Zerlur1zVm1gOBiCLupYIyetISJU8Uik6QYskXmQcixmrnJrp2zEXYbtvQavmE%2FOOcxtD12GPgPmOxms4hUopsRd%2BZbydQqHS%2BqfaXS6jzH0X9fF%2BWbaHPn4c8QKQp%2BLgsX2BdPUdrgA8XuWvJN2VJPFIAkcsgYoN0FSO1d1%2FjFnc36etDWchU5xgeIN8Pcpj2chEu%2B2yS4xGRP5XIyltMV7c66v4MJU%2F7MzSUt8%2BCjj1jxuGN3zRQSDQgwqEx1Xg84zhW%2B%2F%2BNTtDwbkYTgfgQkDrh1Va6c7534Ewx6m0wAY6pgHPypB7mZ8O8K8z0aPCGz5vKFC6W8oVAgy03bbtvNWn0mrVwAySLiIlBx%2BCR3u30VGj%2FsGw4Lh19gmZ0%2FNRT4kg%2F0Zqe7vwLbN0JWvbZqQIIS%2FPYAVCuBNumxZDus24jJMJ2fEjI4A32YZ2fgKCz0%2F%2Bldi0BvTNjBhs%2FcI5GWbGtTG4VgTTT4zq0RDhtHSFrQE3rGMcyU%2BLK2ZX8u6dtSjq3SANZygg&X-Amz-Signature=3c96dc0b3d4c1b98c88ad4739294a0e5a6ce8351e298f5dabb7ee0857fb27d19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2AMUAP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHNPXCIGiJWcz%2BXY9jZ7%2BxqB8Y17MJx%2FjBFk3BO2%2FqSAiAXwUGbJx%2BRrqCW%2FbDHPeN8Dp%2F9Y6qQYry9ohZB1xg%2B8Cr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY33S1y3btjdchO3WKtwDyaEv5suDFnBylItIuC84kF3fFLM9ue7Nk%2F2kh6uRUckF30ddrp%2BkmXncmdt5YpRF5YV1fHDeQRcBshcTV0FFSLu7pBY9rAQa01cxbmSWDH5KYQd8bop40BgW0XBtQVOD9V3u2qZNCjDzhVg%2F5iVMNQ9ofXfdKJIHfr%2FMNmOhpxRy8LWLRP3y%2Fy0H0s7BYCt4dT%2BdRN3j4e4Z%2FOd6yJVB2FtQGbE7n3cFz5Bn%2Fzr0yEC9fB1bjB6HkVVHyK1G88oEwnYPXvEnf%2B80GEuyZQSfTVSOdS5HD123UvXsC4K0zx4D2eldAfgvNt2CjHUt65d6UjX6N7GhGKjAMVjjFjA2P53Zerlur1zVm1gOBiCLupYIyetISJU8Uik6QYskXmQcixmrnJrp2zEXYbtvQavmE%2FOOcxtD12GPgPmOxms4hUopsRd%2BZbydQqHS%2BqfaXS6jzH0X9fF%2BWbaHPn4c8QKQp%2BLgsX2BdPUdrgA8XuWvJN2VJPFIAkcsgYoN0FSO1d1%2FjFnc36etDWchU5xgeIN8Pcpj2chEu%2B2yS4xGRP5XIyltMV7c66v4MJU%2F7MzSUt8%2BCjj1jxuGN3zRQSDQgwqEx1Xg84zhW%2B%2F%2BNTtDwbkYTgfgQkDrh1Va6c7534Ewx6m0wAY6pgHPypB7mZ8O8K8z0aPCGz5vKFC6W8oVAgy03bbtvNWn0mrVwAySLiIlBx%2BCR3u30VGj%2FsGw4Lh19gmZ0%2FNRT4kg%2F0Zqe7vwLbN0JWvbZqQIIS%2FPYAVCuBNumxZDus24jJMJ2fEjI4A32YZ2fgKCz0%2F%2Bldi0BvTNjBhs%2FcI5GWbGtTG4VgTTT4zq0RDhtHSFrQE3rGMcyU%2BLK2ZX8u6dtSjq3SANZygg&X-Amz-Signature=5c23d4d3c6058b1c47ea6e9c8184cc8d9bf554a9456594e4a9d41669d8cdf5ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2AMUAP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHNPXCIGiJWcz%2BXY9jZ7%2BxqB8Y17MJx%2FjBFk3BO2%2FqSAiAXwUGbJx%2BRrqCW%2FbDHPeN8Dp%2F9Y6qQYry9ohZB1xg%2B8Cr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY33S1y3btjdchO3WKtwDyaEv5suDFnBylItIuC84kF3fFLM9ue7Nk%2F2kh6uRUckF30ddrp%2BkmXncmdt5YpRF5YV1fHDeQRcBshcTV0FFSLu7pBY9rAQa01cxbmSWDH5KYQd8bop40BgW0XBtQVOD9V3u2qZNCjDzhVg%2F5iVMNQ9ofXfdKJIHfr%2FMNmOhpxRy8LWLRP3y%2Fy0H0s7BYCt4dT%2BdRN3j4e4Z%2FOd6yJVB2FtQGbE7n3cFz5Bn%2Fzr0yEC9fB1bjB6HkVVHyK1G88oEwnYPXvEnf%2B80GEuyZQSfTVSOdS5HD123UvXsC4K0zx4D2eldAfgvNt2CjHUt65d6UjX6N7GhGKjAMVjjFjA2P53Zerlur1zVm1gOBiCLupYIyetISJU8Uik6QYskXmQcixmrnJrp2zEXYbtvQavmE%2FOOcxtD12GPgPmOxms4hUopsRd%2BZbydQqHS%2BqfaXS6jzH0X9fF%2BWbaHPn4c8QKQp%2BLgsX2BdPUdrgA8XuWvJN2VJPFIAkcsgYoN0FSO1d1%2FjFnc36etDWchU5xgeIN8Pcpj2chEu%2B2yS4xGRP5XIyltMV7c66v4MJU%2F7MzSUt8%2BCjj1jxuGN3zRQSDQgwqEx1Xg84zhW%2B%2F%2BNTtDwbkYTgfgQkDrh1Va6c7534Ewx6m0wAY6pgHPypB7mZ8O8K8z0aPCGz5vKFC6W8oVAgy03bbtvNWn0mrVwAySLiIlBx%2BCR3u30VGj%2FsGw4Lh19gmZ0%2FNRT4kg%2F0Zqe7vwLbN0JWvbZqQIIS%2FPYAVCuBNumxZDus24jJMJ2fEjI4A32YZ2fgKCz0%2F%2Bldi0BvTNjBhs%2FcI5GWbGtTG4VgTTT4zq0RDhtHSFrQE3rGMcyU%2BLK2ZX8u6dtSjq3SANZygg&X-Amz-Signature=6f0c85cd36d3bfb2db5ba7c7fc881d59244db57614ebcf32820de306fcedd791&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
