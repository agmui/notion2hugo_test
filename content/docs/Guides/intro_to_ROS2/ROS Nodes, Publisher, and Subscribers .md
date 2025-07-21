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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2LIH4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxDBWf2pR9MXZq%2B1%2FrdMEkFuV2t5RWmrU4Zf7YqacypwIhAJ8wT%2FH%2BDBNWt1rKIX6HDwdXIEdrbDjDIHDip9Qmf8i3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUJxKU%2B%2FXipmvpu68q3AM7SIas5uPdeUnZxXhP%2Fgqw055ZgGXBMhrFlJPpPUguKZit7pHYU9cxKOnOD9HCBp7lSjzobVHqLy4PhK%2Fdu58E%2B77oi2sdx82wAUXarlxf9EiLt82JYhf36redEDwfDKWTwPtfXWiIypTQ5fDV8KeBHdJmjYUtMePUvb9bji4Ai2Iq3Lx21EcCSLOTDFlS48ZX7NlvFi5UbHMWNx%2BfVYj3L4c90dB%2BjlxyyoF13yx%2FjmeLi%2BkkGu%2BIVy5%2B0MvHXC6g9J8HxjvXROlG3JMocd%2BOTfwvN2qm12XbrCxebWN%2F5pno%2FF98pwPI%2Fny6jl50CZUJVEs1aCA5ov0bgkJMXiS8bovvkB7LjL26AI39J8tZIhAPyU8s1ss9MQLUr%2BY%2FHGttbaCtBSxsNWapz18OvGCwtz3G1e5jNR8veabYr1a9vLN0ip1lJmqtkfLkpJ1CTHGGbLccpgiqRLO2bjxCRLZMqV%2Bve3yR%2F356sGDpG8yn3w6oR5LmZ%2FtYlL0BqAH2AaOccPnMvWoeRI2YcBogTUF9MpwsIcqIAvsmyCpNW8xtFtaGv%2F3FP47xXVkqh2ifFRhQkxBK9rVveMQTeLuFJWaXCMHqXaz76dHaxnUv6iPg%2Fmd%2BmiztoIGGLegEIzDSjvjDBjqkAabl7%2FDoVG0PuADptsKxBomdk6%2FaFISawDhA56oooDk5WpeYeDoqsfKE8FtJT2B0xfIErr8knLZIR17exbkpXXI7FyIl3Y2NKS%2B9AE0Qq%2FXOH3vd92oKZQXjFfVEVGa6MBft3M36v36BJYYb8G%2BE8L8ZpZOVFum9jrDIM5RZ28jhLpZGItAIv7UtIch3Yw18KzeH7MPc3cCZE4%2BKSEkQu2KJPzuS&X-Amz-Signature=b71bf3ff3aa36888a904c2a59e3179b6b244ab969a7b64f3b4a548c5a65fe99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2LIH4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxDBWf2pR9MXZq%2B1%2FrdMEkFuV2t5RWmrU4Zf7YqacypwIhAJ8wT%2FH%2BDBNWt1rKIX6HDwdXIEdrbDjDIHDip9Qmf8i3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUJxKU%2B%2FXipmvpu68q3AM7SIas5uPdeUnZxXhP%2Fgqw055ZgGXBMhrFlJPpPUguKZit7pHYU9cxKOnOD9HCBp7lSjzobVHqLy4PhK%2Fdu58E%2B77oi2sdx82wAUXarlxf9EiLt82JYhf36redEDwfDKWTwPtfXWiIypTQ5fDV8KeBHdJmjYUtMePUvb9bji4Ai2Iq3Lx21EcCSLOTDFlS48ZX7NlvFi5UbHMWNx%2BfVYj3L4c90dB%2BjlxyyoF13yx%2FjmeLi%2BkkGu%2BIVy5%2B0MvHXC6g9J8HxjvXROlG3JMocd%2BOTfwvN2qm12XbrCxebWN%2F5pno%2FF98pwPI%2Fny6jl50CZUJVEs1aCA5ov0bgkJMXiS8bovvkB7LjL26AI39J8tZIhAPyU8s1ss9MQLUr%2BY%2FHGttbaCtBSxsNWapz18OvGCwtz3G1e5jNR8veabYr1a9vLN0ip1lJmqtkfLkpJ1CTHGGbLccpgiqRLO2bjxCRLZMqV%2Bve3yR%2F356sGDpG8yn3w6oR5LmZ%2FtYlL0BqAH2AaOccPnMvWoeRI2YcBogTUF9MpwsIcqIAvsmyCpNW8xtFtaGv%2F3FP47xXVkqh2ifFRhQkxBK9rVveMQTeLuFJWaXCMHqXaz76dHaxnUv6iPg%2Fmd%2BmiztoIGGLegEIzDSjvjDBjqkAabl7%2FDoVG0PuADptsKxBomdk6%2FaFISawDhA56oooDk5WpeYeDoqsfKE8FtJT2B0xfIErr8knLZIR17exbkpXXI7FyIl3Y2NKS%2B9AE0Qq%2FXOH3vd92oKZQXjFfVEVGa6MBft3M36v36BJYYb8G%2BE8L8ZpZOVFum9jrDIM5RZ28jhLpZGItAIv7UtIch3Yw18KzeH7MPc3cCZE4%2BKSEkQu2KJPzuS&X-Amz-Signature=6777a0f7c0d9358f67db8a5ee4904a7856d3c40796ea4f63f69de27ad4745e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2LIH4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxDBWf2pR9MXZq%2B1%2FrdMEkFuV2t5RWmrU4Zf7YqacypwIhAJ8wT%2FH%2BDBNWt1rKIX6HDwdXIEdrbDjDIHDip9Qmf8i3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUJxKU%2B%2FXipmvpu68q3AM7SIas5uPdeUnZxXhP%2Fgqw055ZgGXBMhrFlJPpPUguKZit7pHYU9cxKOnOD9HCBp7lSjzobVHqLy4PhK%2Fdu58E%2B77oi2sdx82wAUXarlxf9EiLt82JYhf36redEDwfDKWTwPtfXWiIypTQ5fDV8KeBHdJmjYUtMePUvb9bji4Ai2Iq3Lx21EcCSLOTDFlS48ZX7NlvFi5UbHMWNx%2BfVYj3L4c90dB%2BjlxyyoF13yx%2FjmeLi%2BkkGu%2BIVy5%2B0MvHXC6g9J8HxjvXROlG3JMocd%2BOTfwvN2qm12XbrCxebWN%2F5pno%2FF98pwPI%2Fny6jl50CZUJVEs1aCA5ov0bgkJMXiS8bovvkB7LjL26AI39J8tZIhAPyU8s1ss9MQLUr%2BY%2FHGttbaCtBSxsNWapz18OvGCwtz3G1e5jNR8veabYr1a9vLN0ip1lJmqtkfLkpJ1CTHGGbLccpgiqRLO2bjxCRLZMqV%2Bve3yR%2F356sGDpG8yn3w6oR5LmZ%2FtYlL0BqAH2AaOccPnMvWoeRI2YcBogTUF9MpwsIcqIAvsmyCpNW8xtFtaGv%2F3FP47xXVkqh2ifFRhQkxBK9rVveMQTeLuFJWaXCMHqXaz76dHaxnUv6iPg%2Fmd%2BmiztoIGGLegEIzDSjvjDBjqkAabl7%2FDoVG0PuADptsKxBomdk6%2FaFISawDhA56oooDk5WpeYeDoqsfKE8FtJT2B0xfIErr8knLZIR17exbkpXXI7FyIl3Y2NKS%2B9AE0Qq%2FXOH3vd92oKZQXjFfVEVGa6MBft3M36v36BJYYb8G%2BE8L8ZpZOVFum9jrDIM5RZ28jhLpZGItAIv7UtIch3Yw18KzeH7MPc3cCZE4%2BKSEkQu2KJPzuS&X-Amz-Signature=bae110c680957e9b8c8e1ac0a6bf3c3453df3c88a488d10d9bea967623062c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2LIH4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxDBWf2pR9MXZq%2B1%2FrdMEkFuV2t5RWmrU4Zf7YqacypwIhAJ8wT%2FH%2BDBNWt1rKIX6HDwdXIEdrbDjDIHDip9Qmf8i3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUJxKU%2B%2FXipmvpu68q3AM7SIas5uPdeUnZxXhP%2Fgqw055ZgGXBMhrFlJPpPUguKZit7pHYU9cxKOnOD9HCBp7lSjzobVHqLy4PhK%2Fdu58E%2B77oi2sdx82wAUXarlxf9EiLt82JYhf36redEDwfDKWTwPtfXWiIypTQ5fDV8KeBHdJmjYUtMePUvb9bji4Ai2Iq3Lx21EcCSLOTDFlS48ZX7NlvFi5UbHMWNx%2BfVYj3L4c90dB%2BjlxyyoF13yx%2FjmeLi%2BkkGu%2BIVy5%2B0MvHXC6g9J8HxjvXROlG3JMocd%2BOTfwvN2qm12XbrCxebWN%2F5pno%2FF98pwPI%2Fny6jl50CZUJVEs1aCA5ov0bgkJMXiS8bovvkB7LjL26AI39J8tZIhAPyU8s1ss9MQLUr%2BY%2FHGttbaCtBSxsNWapz18OvGCwtz3G1e5jNR8veabYr1a9vLN0ip1lJmqtkfLkpJ1CTHGGbLccpgiqRLO2bjxCRLZMqV%2Bve3yR%2F356sGDpG8yn3w6oR5LmZ%2FtYlL0BqAH2AaOccPnMvWoeRI2YcBogTUF9MpwsIcqIAvsmyCpNW8xtFtaGv%2F3FP47xXVkqh2ifFRhQkxBK9rVveMQTeLuFJWaXCMHqXaz76dHaxnUv6iPg%2Fmd%2BmiztoIGGLegEIzDSjvjDBjqkAabl7%2FDoVG0PuADptsKxBomdk6%2FaFISawDhA56oooDk5WpeYeDoqsfKE8FtJT2B0xfIErr8knLZIR17exbkpXXI7FyIl3Y2NKS%2B9AE0Qq%2FXOH3vd92oKZQXjFfVEVGa6MBft3M36v36BJYYb8G%2BE8L8ZpZOVFum9jrDIM5RZ28jhLpZGItAIv7UtIch3Yw18KzeH7MPc3cCZE4%2BKSEkQu2KJPzuS&X-Amz-Signature=be9b09c12e09b41bf0dbbac63c6d911cbbd7793939cd91bae0d0fe4785d96619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2LIH4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxDBWf2pR9MXZq%2B1%2FrdMEkFuV2t5RWmrU4Zf7YqacypwIhAJ8wT%2FH%2BDBNWt1rKIX6HDwdXIEdrbDjDIHDip9Qmf8i3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUJxKU%2B%2FXipmvpu68q3AM7SIas5uPdeUnZxXhP%2Fgqw055ZgGXBMhrFlJPpPUguKZit7pHYU9cxKOnOD9HCBp7lSjzobVHqLy4PhK%2Fdu58E%2B77oi2sdx82wAUXarlxf9EiLt82JYhf36redEDwfDKWTwPtfXWiIypTQ5fDV8KeBHdJmjYUtMePUvb9bji4Ai2Iq3Lx21EcCSLOTDFlS48ZX7NlvFi5UbHMWNx%2BfVYj3L4c90dB%2BjlxyyoF13yx%2FjmeLi%2BkkGu%2BIVy5%2B0MvHXC6g9J8HxjvXROlG3JMocd%2BOTfwvN2qm12XbrCxebWN%2F5pno%2FF98pwPI%2Fny6jl50CZUJVEs1aCA5ov0bgkJMXiS8bovvkB7LjL26AI39J8tZIhAPyU8s1ss9MQLUr%2BY%2FHGttbaCtBSxsNWapz18OvGCwtz3G1e5jNR8veabYr1a9vLN0ip1lJmqtkfLkpJ1CTHGGbLccpgiqRLO2bjxCRLZMqV%2Bve3yR%2F356sGDpG8yn3w6oR5LmZ%2FtYlL0BqAH2AaOccPnMvWoeRI2YcBogTUF9MpwsIcqIAvsmyCpNW8xtFtaGv%2F3FP47xXVkqh2ifFRhQkxBK9rVveMQTeLuFJWaXCMHqXaz76dHaxnUv6iPg%2Fmd%2BmiztoIGGLegEIzDSjvjDBjqkAabl7%2FDoVG0PuADptsKxBomdk6%2FaFISawDhA56oooDk5WpeYeDoqsfKE8FtJT2B0xfIErr8knLZIR17exbkpXXI7FyIl3Y2NKS%2B9AE0Qq%2FXOH3vd92oKZQXjFfVEVGa6MBft3M36v36BJYYb8G%2BE8L8ZpZOVFum9jrDIM5RZ28jhLpZGItAIv7UtIch3Yw18KzeH7MPc3cCZE4%2BKSEkQu2KJPzuS&X-Amz-Signature=93479890258ecf231cbae68630b86fd42702604a047c27e33654d854767b9199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2LIH4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxDBWf2pR9MXZq%2B1%2FrdMEkFuV2t5RWmrU4Zf7YqacypwIhAJ8wT%2FH%2BDBNWt1rKIX6HDwdXIEdrbDjDIHDip9Qmf8i3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUJxKU%2B%2FXipmvpu68q3AM7SIas5uPdeUnZxXhP%2Fgqw055ZgGXBMhrFlJPpPUguKZit7pHYU9cxKOnOD9HCBp7lSjzobVHqLy4PhK%2Fdu58E%2B77oi2sdx82wAUXarlxf9EiLt82JYhf36redEDwfDKWTwPtfXWiIypTQ5fDV8KeBHdJmjYUtMePUvb9bji4Ai2Iq3Lx21EcCSLOTDFlS48ZX7NlvFi5UbHMWNx%2BfVYj3L4c90dB%2BjlxyyoF13yx%2FjmeLi%2BkkGu%2BIVy5%2B0MvHXC6g9J8HxjvXROlG3JMocd%2BOTfwvN2qm12XbrCxebWN%2F5pno%2FF98pwPI%2Fny6jl50CZUJVEs1aCA5ov0bgkJMXiS8bovvkB7LjL26AI39J8tZIhAPyU8s1ss9MQLUr%2BY%2FHGttbaCtBSxsNWapz18OvGCwtz3G1e5jNR8veabYr1a9vLN0ip1lJmqtkfLkpJ1CTHGGbLccpgiqRLO2bjxCRLZMqV%2Bve3yR%2F356sGDpG8yn3w6oR5LmZ%2FtYlL0BqAH2AaOccPnMvWoeRI2YcBogTUF9MpwsIcqIAvsmyCpNW8xtFtaGv%2F3FP47xXVkqh2ifFRhQkxBK9rVveMQTeLuFJWaXCMHqXaz76dHaxnUv6iPg%2Fmd%2BmiztoIGGLegEIzDSjvjDBjqkAabl7%2FDoVG0PuADptsKxBomdk6%2FaFISawDhA56oooDk5WpeYeDoqsfKE8FtJT2B0xfIErr8knLZIR17exbkpXXI7FyIl3Y2NKS%2B9AE0Qq%2FXOH3vd92oKZQXjFfVEVGa6MBft3M36v36BJYYb8G%2BE8L8ZpZOVFum9jrDIM5RZ28jhLpZGItAIv7UtIch3Yw18KzeH7MPc3cCZE4%2BKSEkQu2KJPzuS&X-Amz-Signature=ab976db39af4612fbef4e0c84d63d40a1fb42fd85d7faf86a73337c93f6450bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2LIH4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxDBWf2pR9MXZq%2B1%2FrdMEkFuV2t5RWmrU4Zf7YqacypwIhAJ8wT%2FH%2BDBNWt1rKIX6HDwdXIEdrbDjDIHDip9Qmf8i3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUJxKU%2B%2FXipmvpu68q3AM7SIas5uPdeUnZxXhP%2Fgqw055ZgGXBMhrFlJPpPUguKZit7pHYU9cxKOnOD9HCBp7lSjzobVHqLy4PhK%2Fdu58E%2B77oi2sdx82wAUXarlxf9EiLt82JYhf36redEDwfDKWTwPtfXWiIypTQ5fDV8KeBHdJmjYUtMePUvb9bji4Ai2Iq3Lx21EcCSLOTDFlS48ZX7NlvFi5UbHMWNx%2BfVYj3L4c90dB%2BjlxyyoF13yx%2FjmeLi%2BkkGu%2BIVy5%2B0MvHXC6g9J8HxjvXROlG3JMocd%2BOTfwvN2qm12XbrCxebWN%2F5pno%2FF98pwPI%2Fny6jl50CZUJVEs1aCA5ov0bgkJMXiS8bovvkB7LjL26AI39J8tZIhAPyU8s1ss9MQLUr%2BY%2FHGttbaCtBSxsNWapz18OvGCwtz3G1e5jNR8veabYr1a9vLN0ip1lJmqtkfLkpJ1CTHGGbLccpgiqRLO2bjxCRLZMqV%2Bve3yR%2F356sGDpG8yn3w6oR5LmZ%2FtYlL0BqAH2AaOccPnMvWoeRI2YcBogTUF9MpwsIcqIAvsmyCpNW8xtFtaGv%2F3FP47xXVkqh2ifFRhQkxBK9rVveMQTeLuFJWaXCMHqXaz76dHaxnUv6iPg%2Fmd%2BmiztoIGGLegEIzDSjvjDBjqkAabl7%2FDoVG0PuADptsKxBomdk6%2FaFISawDhA56oooDk5WpeYeDoqsfKE8FtJT2B0xfIErr8knLZIR17exbkpXXI7FyIl3Y2NKS%2B9AE0Qq%2FXOH3vd92oKZQXjFfVEVGa6MBft3M36v36BJYYb8G%2BE8L8ZpZOVFum9jrDIM5RZ28jhLpZGItAIv7UtIch3Yw18KzeH7MPc3cCZE4%2BKSEkQu2KJPzuS&X-Amz-Signature=c5518ad38578011400398765f628375f53f4acf704c23330cef9df51bdfa6bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2LIH4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxDBWf2pR9MXZq%2B1%2FrdMEkFuV2t5RWmrU4Zf7YqacypwIhAJ8wT%2FH%2BDBNWt1rKIX6HDwdXIEdrbDjDIHDip9Qmf8i3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUJxKU%2B%2FXipmvpu68q3AM7SIas5uPdeUnZxXhP%2Fgqw055ZgGXBMhrFlJPpPUguKZit7pHYU9cxKOnOD9HCBp7lSjzobVHqLy4PhK%2Fdu58E%2B77oi2sdx82wAUXarlxf9EiLt82JYhf36redEDwfDKWTwPtfXWiIypTQ5fDV8KeBHdJmjYUtMePUvb9bji4Ai2Iq3Lx21EcCSLOTDFlS48ZX7NlvFi5UbHMWNx%2BfVYj3L4c90dB%2BjlxyyoF13yx%2FjmeLi%2BkkGu%2BIVy5%2B0MvHXC6g9J8HxjvXROlG3JMocd%2BOTfwvN2qm12XbrCxebWN%2F5pno%2FF98pwPI%2Fny6jl50CZUJVEs1aCA5ov0bgkJMXiS8bovvkB7LjL26AI39J8tZIhAPyU8s1ss9MQLUr%2BY%2FHGttbaCtBSxsNWapz18OvGCwtz3G1e5jNR8veabYr1a9vLN0ip1lJmqtkfLkpJ1CTHGGbLccpgiqRLO2bjxCRLZMqV%2Bve3yR%2F356sGDpG8yn3w6oR5LmZ%2FtYlL0BqAH2AaOccPnMvWoeRI2YcBogTUF9MpwsIcqIAvsmyCpNW8xtFtaGv%2F3FP47xXVkqh2ifFRhQkxBK9rVveMQTeLuFJWaXCMHqXaz76dHaxnUv6iPg%2Fmd%2BmiztoIGGLegEIzDSjvjDBjqkAabl7%2FDoVG0PuADptsKxBomdk6%2FaFISawDhA56oooDk5WpeYeDoqsfKE8FtJT2B0xfIErr8knLZIR17exbkpXXI7FyIl3Y2NKS%2B9AE0Qq%2FXOH3vd92oKZQXjFfVEVGa6MBft3M36v36BJYYb8G%2BE8L8ZpZOVFum9jrDIM5RZ28jhLpZGItAIv7UtIch3Yw18KzeH7MPc3cCZE4%2BKSEkQu2KJPzuS&X-Amz-Signature=64782fa3fac9d32fedd8ea29774169d5524cfb2ee01f03db305a5dccf6966ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
