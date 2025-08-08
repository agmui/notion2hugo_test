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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHC57FP4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBToxFgEv6B%2FZluf9xLzgfmGTzPaghCdlEO%2Fg2whW3C7AiB%2FrWDBS8S%2Bt0fYiYQ98e8r%2BBQFA2hECfuX3zgMlHsawSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIa5Vv3YnMbcyGjgcKtwDx6HU7Va5AHXgL4%2BnYttul%2BrJprzPweBo4Khrg4Nf85lMcZQBkbTga%2B5yX1dBA5R9fv2KLyJe%2BoPxKPdOvIaACnAs3nX6mE3HmJQLE3ZpSP8JXpJFf0DN0fDkJy9ekJApF8fkTuGNwXUXJGDvhDghiF9XfCrLoLS9vGK%2FTLCNFEdE%2B0dxLUTiZzjASwqZ%2BMIWuLj%2FsnF5EbyuuWYCq0IikoCMjXyw%2FuGP2gtj52RnzNFq6bE2zTzj%2BxQJVxvNyF0kgSgluIRjLRQyRKCWeorOxeiop8UxQvkm2v6ZE8xKU7AnDWyLJZwXbGCH1L704vN%2BGx0jEwBVAhmHWFry6uOKXQ50NmGK18jgVfOqp026rohRRsBYtNWVhJdCUURh3q6VZ%2FZzRxYTuNtEIuMMNtHaLHcOyopfbGKDbTTrMd%2FaCUfUjO0jnq6P4AlYJX8SFY%2Fyri3b1qbO2xYk%2F2HArsR5mcBz%2BjexhGkjWfsoeJhkJLnPdyVrQqUHUI%2F4vAbB8B4rL%2F38SXwKyMN4rQyIVho2lktLcs2AeiuBLWIh0mFvc1sCtjsVZzodTgom2LWOQYFDeGzSV9JEt0oTArak%2FMi3%2FikdsylGyVeArzU1EuPwZbxhUrxe4zf1i8hKpNcwtOrYxAY6pgH46eKIUxGLiCW2SqCyF%2FkAPy08hOeX%2BP81vdD6PUAhJuk6nQLBYfK9OhPydS54mxxLaStm3u6Ce%2F%2FFTpUaPe%2BxDO5UutK8SpM6%2FDhZPMB9eGB7Uac9agLOP0ojsMNlHQwsQ2lBGzXDLof3KmZYdmxzOTKdug1uCvEloZMJmN82W2EREJMn5hSBVpwDeed%2Fcp%2BgOiGrCh1trOu8t46Zs7oXA871nSva&X-Amz-Signature=ef28bd58befaccdb856bc114d197e1403680b6be309fc73d768d980f6960cac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHC57FP4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBToxFgEv6B%2FZluf9xLzgfmGTzPaghCdlEO%2Fg2whW3C7AiB%2FrWDBS8S%2Bt0fYiYQ98e8r%2BBQFA2hECfuX3zgMlHsawSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIa5Vv3YnMbcyGjgcKtwDx6HU7Va5AHXgL4%2BnYttul%2BrJprzPweBo4Khrg4Nf85lMcZQBkbTga%2B5yX1dBA5R9fv2KLyJe%2BoPxKPdOvIaACnAs3nX6mE3HmJQLE3ZpSP8JXpJFf0DN0fDkJy9ekJApF8fkTuGNwXUXJGDvhDghiF9XfCrLoLS9vGK%2FTLCNFEdE%2B0dxLUTiZzjASwqZ%2BMIWuLj%2FsnF5EbyuuWYCq0IikoCMjXyw%2FuGP2gtj52RnzNFq6bE2zTzj%2BxQJVxvNyF0kgSgluIRjLRQyRKCWeorOxeiop8UxQvkm2v6ZE8xKU7AnDWyLJZwXbGCH1L704vN%2BGx0jEwBVAhmHWFry6uOKXQ50NmGK18jgVfOqp026rohRRsBYtNWVhJdCUURh3q6VZ%2FZzRxYTuNtEIuMMNtHaLHcOyopfbGKDbTTrMd%2FaCUfUjO0jnq6P4AlYJX8SFY%2Fyri3b1qbO2xYk%2F2HArsR5mcBz%2BjexhGkjWfsoeJhkJLnPdyVrQqUHUI%2F4vAbB8B4rL%2F38SXwKyMN4rQyIVho2lktLcs2AeiuBLWIh0mFvc1sCtjsVZzodTgom2LWOQYFDeGzSV9JEt0oTArak%2FMi3%2FikdsylGyVeArzU1EuPwZbxhUrxe4zf1i8hKpNcwtOrYxAY6pgH46eKIUxGLiCW2SqCyF%2FkAPy08hOeX%2BP81vdD6PUAhJuk6nQLBYfK9OhPydS54mxxLaStm3u6Ce%2F%2FFTpUaPe%2BxDO5UutK8SpM6%2FDhZPMB9eGB7Uac9agLOP0ojsMNlHQwsQ2lBGzXDLof3KmZYdmxzOTKdug1uCvEloZMJmN82W2EREJMn5hSBVpwDeed%2Fcp%2BgOiGrCh1trOu8t46Zs7oXA871nSva&X-Amz-Signature=32b4115f133cdbec79ac13c4c0d9ed3ca14460a5042ddf3044cae47b0e023308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHC57FP4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBToxFgEv6B%2FZluf9xLzgfmGTzPaghCdlEO%2Fg2whW3C7AiB%2FrWDBS8S%2Bt0fYiYQ98e8r%2BBQFA2hECfuX3zgMlHsawSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIa5Vv3YnMbcyGjgcKtwDx6HU7Va5AHXgL4%2BnYttul%2BrJprzPweBo4Khrg4Nf85lMcZQBkbTga%2B5yX1dBA5R9fv2KLyJe%2BoPxKPdOvIaACnAs3nX6mE3HmJQLE3ZpSP8JXpJFf0DN0fDkJy9ekJApF8fkTuGNwXUXJGDvhDghiF9XfCrLoLS9vGK%2FTLCNFEdE%2B0dxLUTiZzjASwqZ%2BMIWuLj%2FsnF5EbyuuWYCq0IikoCMjXyw%2FuGP2gtj52RnzNFq6bE2zTzj%2BxQJVxvNyF0kgSgluIRjLRQyRKCWeorOxeiop8UxQvkm2v6ZE8xKU7AnDWyLJZwXbGCH1L704vN%2BGx0jEwBVAhmHWFry6uOKXQ50NmGK18jgVfOqp026rohRRsBYtNWVhJdCUURh3q6VZ%2FZzRxYTuNtEIuMMNtHaLHcOyopfbGKDbTTrMd%2FaCUfUjO0jnq6P4AlYJX8SFY%2Fyri3b1qbO2xYk%2F2HArsR5mcBz%2BjexhGkjWfsoeJhkJLnPdyVrQqUHUI%2F4vAbB8B4rL%2F38SXwKyMN4rQyIVho2lktLcs2AeiuBLWIh0mFvc1sCtjsVZzodTgom2LWOQYFDeGzSV9JEt0oTArak%2FMi3%2FikdsylGyVeArzU1EuPwZbxhUrxe4zf1i8hKpNcwtOrYxAY6pgH46eKIUxGLiCW2SqCyF%2FkAPy08hOeX%2BP81vdD6PUAhJuk6nQLBYfK9OhPydS54mxxLaStm3u6Ce%2F%2FFTpUaPe%2BxDO5UutK8SpM6%2FDhZPMB9eGB7Uac9agLOP0ojsMNlHQwsQ2lBGzXDLof3KmZYdmxzOTKdug1uCvEloZMJmN82W2EREJMn5hSBVpwDeed%2Fcp%2BgOiGrCh1trOu8t46Zs7oXA871nSva&X-Amz-Signature=9c8355612e06ce90047c4635ef291694f51868dd29aa8f0fedd648db245cd6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHC57FP4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBToxFgEv6B%2FZluf9xLzgfmGTzPaghCdlEO%2Fg2whW3C7AiB%2FrWDBS8S%2Bt0fYiYQ98e8r%2BBQFA2hECfuX3zgMlHsawSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIa5Vv3YnMbcyGjgcKtwDx6HU7Va5AHXgL4%2BnYttul%2BrJprzPweBo4Khrg4Nf85lMcZQBkbTga%2B5yX1dBA5R9fv2KLyJe%2BoPxKPdOvIaACnAs3nX6mE3HmJQLE3ZpSP8JXpJFf0DN0fDkJy9ekJApF8fkTuGNwXUXJGDvhDghiF9XfCrLoLS9vGK%2FTLCNFEdE%2B0dxLUTiZzjASwqZ%2BMIWuLj%2FsnF5EbyuuWYCq0IikoCMjXyw%2FuGP2gtj52RnzNFq6bE2zTzj%2BxQJVxvNyF0kgSgluIRjLRQyRKCWeorOxeiop8UxQvkm2v6ZE8xKU7AnDWyLJZwXbGCH1L704vN%2BGx0jEwBVAhmHWFry6uOKXQ50NmGK18jgVfOqp026rohRRsBYtNWVhJdCUURh3q6VZ%2FZzRxYTuNtEIuMMNtHaLHcOyopfbGKDbTTrMd%2FaCUfUjO0jnq6P4AlYJX8SFY%2Fyri3b1qbO2xYk%2F2HArsR5mcBz%2BjexhGkjWfsoeJhkJLnPdyVrQqUHUI%2F4vAbB8B4rL%2F38SXwKyMN4rQyIVho2lktLcs2AeiuBLWIh0mFvc1sCtjsVZzodTgom2LWOQYFDeGzSV9JEt0oTArak%2FMi3%2FikdsylGyVeArzU1EuPwZbxhUrxe4zf1i8hKpNcwtOrYxAY6pgH46eKIUxGLiCW2SqCyF%2FkAPy08hOeX%2BP81vdD6PUAhJuk6nQLBYfK9OhPydS54mxxLaStm3u6Ce%2F%2FFTpUaPe%2BxDO5UutK8SpM6%2FDhZPMB9eGB7Uac9agLOP0ojsMNlHQwsQ2lBGzXDLof3KmZYdmxzOTKdug1uCvEloZMJmN82W2EREJMn5hSBVpwDeed%2Fcp%2BgOiGrCh1trOu8t46Zs7oXA871nSva&X-Amz-Signature=ae3e6344a2b3c5e2c7b7faf5a3bb856f782605c17e725d22738fe537aa6b5172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHC57FP4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBToxFgEv6B%2FZluf9xLzgfmGTzPaghCdlEO%2Fg2whW3C7AiB%2FrWDBS8S%2Bt0fYiYQ98e8r%2BBQFA2hECfuX3zgMlHsawSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIa5Vv3YnMbcyGjgcKtwDx6HU7Va5AHXgL4%2BnYttul%2BrJprzPweBo4Khrg4Nf85lMcZQBkbTga%2B5yX1dBA5R9fv2KLyJe%2BoPxKPdOvIaACnAs3nX6mE3HmJQLE3ZpSP8JXpJFf0DN0fDkJy9ekJApF8fkTuGNwXUXJGDvhDghiF9XfCrLoLS9vGK%2FTLCNFEdE%2B0dxLUTiZzjASwqZ%2BMIWuLj%2FsnF5EbyuuWYCq0IikoCMjXyw%2FuGP2gtj52RnzNFq6bE2zTzj%2BxQJVxvNyF0kgSgluIRjLRQyRKCWeorOxeiop8UxQvkm2v6ZE8xKU7AnDWyLJZwXbGCH1L704vN%2BGx0jEwBVAhmHWFry6uOKXQ50NmGK18jgVfOqp026rohRRsBYtNWVhJdCUURh3q6VZ%2FZzRxYTuNtEIuMMNtHaLHcOyopfbGKDbTTrMd%2FaCUfUjO0jnq6P4AlYJX8SFY%2Fyri3b1qbO2xYk%2F2HArsR5mcBz%2BjexhGkjWfsoeJhkJLnPdyVrQqUHUI%2F4vAbB8B4rL%2F38SXwKyMN4rQyIVho2lktLcs2AeiuBLWIh0mFvc1sCtjsVZzodTgom2LWOQYFDeGzSV9JEt0oTArak%2FMi3%2FikdsylGyVeArzU1EuPwZbxhUrxe4zf1i8hKpNcwtOrYxAY6pgH46eKIUxGLiCW2SqCyF%2FkAPy08hOeX%2BP81vdD6PUAhJuk6nQLBYfK9OhPydS54mxxLaStm3u6Ce%2F%2FFTpUaPe%2BxDO5UutK8SpM6%2FDhZPMB9eGB7Uac9agLOP0ojsMNlHQwsQ2lBGzXDLof3KmZYdmxzOTKdug1uCvEloZMJmN82W2EREJMn5hSBVpwDeed%2Fcp%2BgOiGrCh1trOu8t46Zs7oXA871nSva&X-Amz-Signature=274839f1d2c23b07521908ad27fa1cc0669c61ae242764e14ba616f58f15d1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHC57FP4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBToxFgEv6B%2FZluf9xLzgfmGTzPaghCdlEO%2Fg2whW3C7AiB%2FrWDBS8S%2Bt0fYiYQ98e8r%2BBQFA2hECfuX3zgMlHsawSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIa5Vv3YnMbcyGjgcKtwDx6HU7Va5AHXgL4%2BnYttul%2BrJprzPweBo4Khrg4Nf85lMcZQBkbTga%2B5yX1dBA5R9fv2KLyJe%2BoPxKPdOvIaACnAs3nX6mE3HmJQLE3ZpSP8JXpJFf0DN0fDkJy9ekJApF8fkTuGNwXUXJGDvhDghiF9XfCrLoLS9vGK%2FTLCNFEdE%2B0dxLUTiZzjASwqZ%2BMIWuLj%2FsnF5EbyuuWYCq0IikoCMjXyw%2FuGP2gtj52RnzNFq6bE2zTzj%2BxQJVxvNyF0kgSgluIRjLRQyRKCWeorOxeiop8UxQvkm2v6ZE8xKU7AnDWyLJZwXbGCH1L704vN%2BGx0jEwBVAhmHWFry6uOKXQ50NmGK18jgVfOqp026rohRRsBYtNWVhJdCUURh3q6VZ%2FZzRxYTuNtEIuMMNtHaLHcOyopfbGKDbTTrMd%2FaCUfUjO0jnq6P4AlYJX8SFY%2Fyri3b1qbO2xYk%2F2HArsR5mcBz%2BjexhGkjWfsoeJhkJLnPdyVrQqUHUI%2F4vAbB8B4rL%2F38SXwKyMN4rQyIVho2lktLcs2AeiuBLWIh0mFvc1sCtjsVZzodTgom2LWOQYFDeGzSV9JEt0oTArak%2FMi3%2FikdsylGyVeArzU1EuPwZbxhUrxe4zf1i8hKpNcwtOrYxAY6pgH46eKIUxGLiCW2SqCyF%2FkAPy08hOeX%2BP81vdD6PUAhJuk6nQLBYfK9OhPydS54mxxLaStm3u6Ce%2F%2FFTpUaPe%2BxDO5UutK8SpM6%2FDhZPMB9eGB7Uac9agLOP0ojsMNlHQwsQ2lBGzXDLof3KmZYdmxzOTKdug1uCvEloZMJmN82W2EREJMn5hSBVpwDeed%2Fcp%2BgOiGrCh1trOu8t46Zs7oXA871nSva&X-Amz-Signature=77dd8c7fe9984d1c7d455134f81dab74c9feb275f33979c911f36d62a759ebb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHC57FP4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBToxFgEv6B%2FZluf9xLzgfmGTzPaghCdlEO%2Fg2whW3C7AiB%2FrWDBS8S%2Bt0fYiYQ98e8r%2BBQFA2hECfuX3zgMlHsawSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIa5Vv3YnMbcyGjgcKtwDx6HU7Va5AHXgL4%2BnYttul%2BrJprzPweBo4Khrg4Nf85lMcZQBkbTga%2B5yX1dBA5R9fv2KLyJe%2BoPxKPdOvIaACnAs3nX6mE3HmJQLE3ZpSP8JXpJFf0DN0fDkJy9ekJApF8fkTuGNwXUXJGDvhDghiF9XfCrLoLS9vGK%2FTLCNFEdE%2B0dxLUTiZzjASwqZ%2BMIWuLj%2FsnF5EbyuuWYCq0IikoCMjXyw%2FuGP2gtj52RnzNFq6bE2zTzj%2BxQJVxvNyF0kgSgluIRjLRQyRKCWeorOxeiop8UxQvkm2v6ZE8xKU7AnDWyLJZwXbGCH1L704vN%2BGx0jEwBVAhmHWFry6uOKXQ50NmGK18jgVfOqp026rohRRsBYtNWVhJdCUURh3q6VZ%2FZzRxYTuNtEIuMMNtHaLHcOyopfbGKDbTTrMd%2FaCUfUjO0jnq6P4AlYJX8SFY%2Fyri3b1qbO2xYk%2F2HArsR5mcBz%2BjexhGkjWfsoeJhkJLnPdyVrQqUHUI%2F4vAbB8B4rL%2F38SXwKyMN4rQyIVho2lktLcs2AeiuBLWIh0mFvc1sCtjsVZzodTgom2LWOQYFDeGzSV9JEt0oTArak%2FMi3%2FikdsylGyVeArzU1EuPwZbxhUrxe4zf1i8hKpNcwtOrYxAY6pgH46eKIUxGLiCW2SqCyF%2FkAPy08hOeX%2BP81vdD6PUAhJuk6nQLBYfK9OhPydS54mxxLaStm3u6Ce%2F%2FFTpUaPe%2BxDO5UutK8SpM6%2FDhZPMB9eGB7Uac9agLOP0ojsMNlHQwsQ2lBGzXDLof3KmZYdmxzOTKdug1uCvEloZMJmN82W2EREJMn5hSBVpwDeed%2Fcp%2BgOiGrCh1trOu8t46Zs7oXA871nSva&X-Amz-Signature=ad15c08ab6402e5e64bc5abfd12053c56fe8ee245ff8c0a328bd67f23a375539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHC57FP4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBToxFgEv6B%2FZluf9xLzgfmGTzPaghCdlEO%2Fg2whW3C7AiB%2FrWDBS8S%2Bt0fYiYQ98e8r%2BBQFA2hECfuX3zgMlHsawSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIa5Vv3YnMbcyGjgcKtwDx6HU7Va5AHXgL4%2BnYttul%2BrJprzPweBo4Khrg4Nf85lMcZQBkbTga%2B5yX1dBA5R9fv2KLyJe%2BoPxKPdOvIaACnAs3nX6mE3HmJQLE3ZpSP8JXpJFf0DN0fDkJy9ekJApF8fkTuGNwXUXJGDvhDghiF9XfCrLoLS9vGK%2FTLCNFEdE%2B0dxLUTiZzjASwqZ%2BMIWuLj%2FsnF5EbyuuWYCq0IikoCMjXyw%2FuGP2gtj52RnzNFq6bE2zTzj%2BxQJVxvNyF0kgSgluIRjLRQyRKCWeorOxeiop8UxQvkm2v6ZE8xKU7AnDWyLJZwXbGCH1L704vN%2BGx0jEwBVAhmHWFry6uOKXQ50NmGK18jgVfOqp026rohRRsBYtNWVhJdCUURh3q6VZ%2FZzRxYTuNtEIuMMNtHaLHcOyopfbGKDbTTrMd%2FaCUfUjO0jnq6P4AlYJX8SFY%2Fyri3b1qbO2xYk%2F2HArsR5mcBz%2BjexhGkjWfsoeJhkJLnPdyVrQqUHUI%2F4vAbB8B4rL%2F38SXwKyMN4rQyIVho2lktLcs2AeiuBLWIh0mFvc1sCtjsVZzodTgom2LWOQYFDeGzSV9JEt0oTArak%2FMi3%2FikdsylGyVeArzU1EuPwZbxhUrxe4zf1i8hKpNcwtOrYxAY6pgH46eKIUxGLiCW2SqCyF%2FkAPy08hOeX%2BP81vdD6PUAhJuk6nQLBYfK9OhPydS54mxxLaStm3u6Ce%2F%2FFTpUaPe%2BxDO5UutK8SpM6%2FDhZPMB9eGB7Uac9agLOP0ojsMNlHQwsQ2lBGzXDLof3KmZYdmxzOTKdug1uCvEloZMJmN82W2EREJMn5hSBVpwDeed%2Fcp%2BgOiGrCh1trOu8t46Zs7oXA871nSva&X-Amz-Signature=d64c07aa24c9355f4b204b79091f1b001bdf0a227d8a0abdc389e7f2706e30a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
