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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K4KKT7T%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH2GKGmD4RU49CQvbM2hrfPnZ%2F%2FkEyOJLx%2Fw9mqQD4tKAiBCkcmNQTRujutSxOGUApEIx%2BVjrWCj%2B9zF5cVp%2FvTSriqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgT8xZ8xEublrs8hKtwDzrIRCrjzF3LgM2Iu9cG0vNgCMit8FP%2BU6%2F107loLlXvgjg8xWjzO3MP53AlMG6qeIlObOx3m33H5%2Bl5H1%2FuqzpdFkNKFyub07mjYelZ0gQEbsk9xkAG%2FGusoT6rw%2BgAxypIJ2SEsXQhwHFgo%2B8QgvV6CiDaTdf6YF%2BIYzRgKk6wX6js%2F64DLb8pbC37EAu6OhKb5vnTmiIMEXwRamXQMZpSPNiWQRwL9qJG657NDotNfdH%2BncyMj7MFhnZNYWqspIumpIjWw4skCcIPuwBBZd2I%2F9NpD73oNjbXd6K7tK%2BYlI3DQHUU5Og%2BhkNdB6fWTbCoNYsDm5F2mShTvCylrWWovZzPymsnPe3JzQ67VipPcI9Ku2s1Tg0mpymZHDFFhl%2FmoX4rnevIketQYFmP6N5Uc8oPjsf0T0OKRNbsprvnz%2BIXgAIQlGXxyZ9ygnrPoKOSf0oPjGIIB7q3wX9ET4ezn4wnE0jYGKewd6nEkoYDv0C3Mx%2BggZRBqQXocr8syd2Rt%2Fa0DY1M4wVS1dUxgOCz9cpsdZohSsoMO12YSS6oeV2ImG7DhkNbxU3%2B69TAqSdfGu%2FZmyXM4pqy%2FJD9YJAaiHCqQRGlrBd%2FM7WZW%2FgrHror%2BothWCXJVX6own4z5vgY6pgGfBmFWvGKE05XG%2Fh%2FllBTQDbxYuSlO25f7QXy7Mug%2B6X6kiGoUeaL%2F0jvmkM22YdujG7u9RzWDHWXav0go%2BfCRneq7uAgf6f0wpxGIFh%2BedVUpUERLT5XbFND3Tw0wO%2BLkn5DNqYaI4vdW0LTyrP02APUYM6Mg3Gdow7MpzbYiFtquSFpQnd8SdTHd77S6FtfvsVeCdhUuMZhHZpjGVgcX0Kn1I4R6&X-Amz-Signature=3391f0e9a51f20ea2bb4bd152fd245d55393f496b163a9d8cab9a437c731c2bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K4KKT7T%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH2GKGmD4RU49CQvbM2hrfPnZ%2F%2FkEyOJLx%2Fw9mqQD4tKAiBCkcmNQTRujutSxOGUApEIx%2BVjrWCj%2B9zF5cVp%2FvTSriqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgT8xZ8xEublrs8hKtwDzrIRCrjzF3LgM2Iu9cG0vNgCMit8FP%2BU6%2F107loLlXvgjg8xWjzO3MP53AlMG6qeIlObOx3m33H5%2Bl5H1%2FuqzpdFkNKFyub07mjYelZ0gQEbsk9xkAG%2FGusoT6rw%2BgAxypIJ2SEsXQhwHFgo%2B8QgvV6CiDaTdf6YF%2BIYzRgKk6wX6js%2F64DLb8pbC37EAu6OhKb5vnTmiIMEXwRamXQMZpSPNiWQRwL9qJG657NDotNfdH%2BncyMj7MFhnZNYWqspIumpIjWw4skCcIPuwBBZd2I%2F9NpD73oNjbXd6K7tK%2BYlI3DQHUU5Og%2BhkNdB6fWTbCoNYsDm5F2mShTvCylrWWovZzPymsnPe3JzQ67VipPcI9Ku2s1Tg0mpymZHDFFhl%2FmoX4rnevIketQYFmP6N5Uc8oPjsf0T0OKRNbsprvnz%2BIXgAIQlGXxyZ9ygnrPoKOSf0oPjGIIB7q3wX9ET4ezn4wnE0jYGKewd6nEkoYDv0C3Mx%2BggZRBqQXocr8syd2Rt%2Fa0DY1M4wVS1dUxgOCz9cpsdZohSsoMO12YSS6oeV2ImG7DhkNbxU3%2B69TAqSdfGu%2FZmyXM4pqy%2FJD9YJAaiHCqQRGlrBd%2FM7WZW%2FgrHror%2BothWCXJVX6own4z5vgY6pgGfBmFWvGKE05XG%2Fh%2FllBTQDbxYuSlO25f7QXy7Mug%2B6X6kiGoUeaL%2F0jvmkM22YdujG7u9RzWDHWXav0go%2BfCRneq7uAgf6f0wpxGIFh%2BedVUpUERLT5XbFND3Tw0wO%2BLkn5DNqYaI4vdW0LTyrP02APUYM6Mg3Gdow7MpzbYiFtquSFpQnd8SdTHd77S6FtfvsVeCdhUuMZhHZpjGVgcX0Kn1I4R6&X-Amz-Signature=8f87a6103098cb7b78cf0bf519f0688571382e66c5c4e5725022e75cbcccb2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K4KKT7T%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH2GKGmD4RU49CQvbM2hrfPnZ%2F%2FkEyOJLx%2Fw9mqQD4tKAiBCkcmNQTRujutSxOGUApEIx%2BVjrWCj%2B9zF5cVp%2FvTSriqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgT8xZ8xEublrs8hKtwDzrIRCrjzF3LgM2Iu9cG0vNgCMit8FP%2BU6%2F107loLlXvgjg8xWjzO3MP53AlMG6qeIlObOx3m33H5%2Bl5H1%2FuqzpdFkNKFyub07mjYelZ0gQEbsk9xkAG%2FGusoT6rw%2BgAxypIJ2SEsXQhwHFgo%2B8QgvV6CiDaTdf6YF%2BIYzRgKk6wX6js%2F64DLb8pbC37EAu6OhKb5vnTmiIMEXwRamXQMZpSPNiWQRwL9qJG657NDotNfdH%2BncyMj7MFhnZNYWqspIumpIjWw4skCcIPuwBBZd2I%2F9NpD73oNjbXd6K7tK%2BYlI3DQHUU5Og%2BhkNdB6fWTbCoNYsDm5F2mShTvCylrWWovZzPymsnPe3JzQ67VipPcI9Ku2s1Tg0mpymZHDFFhl%2FmoX4rnevIketQYFmP6N5Uc8oPjsf0T0OKRNbsprvnz%2BIXgAIQlGXxyZ9ygnrPoKOSf0oPjGIIB7q3wX9ET4ezn4wnE0jYGKewd6nEkoYDv0C3Mx%2BggZRBqQXocr8syd2Rt%2Fa0DY1M4wVS1dUxgOCz9cpsdZohSsoMO12YSS6oeV2ImG7DhkNbxU3%2B69TAqSdfGu%2FZmyXM4pqy%2FJD9YJAaiHCqQRGlrBd%2FM7WZW%2FgrHror%2BothWCXJVX6own4z5vgY6pgGfBmFWvGKE05XG%2Fh%2FllBTQDbxYuSlO25f7QXy7Mug%2B6X6kiGoUeaL%2F0jvmkM22YdujG7u9RzWDHWXav0go%2BfCRneq7uAgf6f0wpxGIFh%2BedVUpUERLT5XbFND3Tw0wO%2BLkn5DNqYaI4vdW0LTyrP02APUYM6Mg3Gdow7MpzbYiFtquSFpQnd8SdTHd77S6FtfvsVeCdhUuMZhHZpjGVgcX0Kn1I4R6&X-Amz-Signature=a7bfbcfe68b334e4e55c0a5bc70596782d3e969ab2309f90f6a29e6af46924ba&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K4KKT7T%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH2GKGmD4RU49CQvbM2hrfPnZ%2F%2FkEyOJLx%2Fw9mqQD4tKAiBCkcmNQTRujutSxOGUApEIx%2BVjrWCj%2B9zF5cVp%2FvTSriqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgT8xZ8xEublrs8hKtwDzrIRCrjzF3LgM2Iu9cG0vNgCMit8FP%2BU6%2F107loLlXvgjg8xWjzO3MP53AlMG6qeIlObOx3m33H5%2Bl5H1%2FuqzpdFkNKFyub07mjYelZ0gQEbsk9xkAG%2FGusoT6rw%2BgAxypIJ2SEsXQhwHFgo%2B8QgvV6CiDaTdf6YF%2BIYzRgKk6wX6js%2F64DLb8pbC37EAu6OhKb5vnTmiIMEXwRamXQMZpSPNiWQRwL9qJG657NDotNfdH%2BncyMj7MFhnZNYWqspIumpIjWw4skCcIPuwBBZd2I%2F9NpD73oNjbXd6K7tK%2BYlI3DQHUU5Og%2BhkNdB6fWTbCoNYsDm5F2mShTvCylrWWovZzPymsnPe3JzQ67VipPcI9Ku2s1Tg0mpymZHDFFhl%2FmoX4rnevIketQYFmP6N5Uc8oPjsf0T0OKRNbsprvnz%2BIXgAIQlGXxyZ9ygnrPoKOSf0oPjGIIB7q3wX9ET4ezn4wnE0jYGKewd6nEkoYDv0C3Mx%2BggZRBqQXocr8syd2Rt%2Fa0DY1M4wVS1dUxgOCz9cpsdZohSsoMO12YSS6oeV2ImG7DhkNbxU3%2B69TAqSdfGu%2FZmyXM4pqy%2FJD9YJAaiHCqQRGlrBd%2FM7WZW%2FgrHror%2BothWCXJVX6own4z5vgY6pgGfBmFWvGKE05XG%2Fh%2FllBTQDbxYuSlO25f7QXy7Mug%2B6X6kiGoUeaL%2F0jvmkM22YdujG7u9RzWDHWXav0go%2BfCRneq7uAgf6f0wpxGIFh%2BedVUpUERLT5XbFND3Tw0wO%2BLkn5DNqYaI4vdW0LTyrP02APUYM6Mg3Gdow7MpzbYiFtquSFpQnd8SdTHd77S6FtfvsVeCdhUuMZhHZpjGVgcX0Kn1I4R6&X-Amz-Signature=1c1a2fd0d52fc85910c8c3d0f2bc37cd385da78510c1e9e7144e7094c8fbde73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K4KKT7T%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH2GKGmD4RU49CQvbM2hrfPnZ%2F%2FkEyOJLx%2Fw9mqQD4tKAiBCkcmNQTRujutSxOGUApEIx%2BVjrWCj%2B9zF5cVp%2FvTSriqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgT8xZ8xEublrs8hKtwDzrIRCrjzF3LgM2Iu9cG0vNgCMit8FP%2BU6%2F107loLlXvgjg8xWjzO3MP53AlMG6qeIlObOx3m33H5%2Bl5H1%2FuqzpdFkNKFyub07mjYelZ0gQEbsk9xkAG%2FGusoT6rw%2BgAxypIJ2SEsXQhwHFgo%2B8QgvV6CiDaTdf6YF%2BIYzRgKk6wX6js%2F64DLb8pbC37EAu6OhKb5vnTmiIMEXwRamXQMZpSPNiWQRwL9qJG657NDotNfdH%2BncyMj7MFhnZNYWqspIumpIjWw4skCcIPuwBBZd2I%2F9NpD73oNjbXd6K7tK%2BYlI3DQHUU5Og%2BhkNdB6fWTbCoNYsDm5F2mShTvCylrWWovZzPymsnPe3JzQ67VipPcI9Ku2s1Tg0mpymZHDFFhl%2FmoX4rnevIketQYFmP6N5Uc8oPjsf0T0OKRNbsprvnz%2BIXgAIQlGXxyZ9ygnrPoKOSf0oPjGIIB7q3wX9ET4ezn4wnE0jYGKewd6nEkoYDv0C3Mx%2BggZRBqQXocr8syd2Rt%2Fa0DY1M4wVS1dUxgOCz9cpsdZohSsoMO12YSS6oeV2ImG7DhkNbxU3%2B69TAqSdfGu%2FZmyXM4pqy%2FJD9YJAaiHCqQRGlrBd%2FM7WZW%2FgrHror%2BothWCXJVX6own4z5vgY6pgGfBmFWvGKE05XG%2Fh%2FllBTQDbxYuSlO25f7QXy7Mug%2B6X6kiGoUeaL%2F0jvmkM22YdujG7u9RzWDHWXav0go%2BfCRneq7uAgf6f0wpxGIFh%2BedVUpUERLT5XbFND3Tw0wO%2BLkn5DNqYaI4vdW0LTyrP02APUYM6Mg3Gdow7MpzbYiFtquSFpQnd8SdTHd77S6FtfvsVeCdhUuMZhHZpjGVgcX0Kn1I4R6&X-Amz-Signature=19650c46d4ce1197ea530908a9d4107ad3abd6c28696ccd7d3942e1d6249d6f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K4KKT7T%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH2GKGmD4RU49CQvbM2hrfPnZ%2F%2FkEyOJLx%2Fw9mqQD4tKAiBCkcmNQTRujutSxOGUApEIx%2BVjrWCj%2B9zF5cVp%2FvTSriqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgT8xZ8xEublrs8hKtwDzrIRCrjzF3LgM2Iu9cG0vNgCMit8FP%2BU6%2F107loLlXvgjg8xWjzO3MP53AlMG6qeIlObOx3m33H5%2Bl5H1%2FuqzpdFkNKFyub07mjYelZ0gQEbsk9xkAG%2FGusoT6rw%2BgAxypIJ2SEsXQhwHFgo%2B8QgvV6CiDaTdf6YF%2BIYzRgKk6wX6js%2F64DLb8pbC37EAu6OhKb5vnTmiIMEXwRamXQMZpSPNiWQRwL9qJG657NDotNfdH%2BncyMj7MFhnZNYWqspIumpIjWw4skCcIPuwBBZd2I%2F9NpD73oNjbXd6K7tK%2BYlI3DQHUU5Og%2BhkNdB6fWTbCoNYsDm5F2mShTvCylrWWovZzPymsnPe3JzQ67VipPcI9Ku2s1Tg0mpymZHDFFhl%2FmoX4rnevIketQYFmP6N5Uc8oPjsf0T0OKRNbsprvnz%2BIXgAIQlGXxyZ9ygnrPoKOSf0oPjGIIB7q3wX9ET4ezn4wnE0jYGKewd6nEkoYDv0C3Mx%2BggZRBqQXocr8syd2Rt%2Fa0DY1M4wVS1dUxgOCz9cpsdZohSsoMO12YSS6oeV2ImG7DhkNbxU3%2B69TAqSdfGu%2FZmyXM4pqy%2FJD9YJAaiHCqQRGlrBd%2FM7WZW%2FgrHror%2BothWCXJVX6own4z5vgY6pgGfBmFWvGKE05XG%2Fh%2FllBTQDbxYuSlO25f7QXy7Mug%2B6X6kiGoUeaL%2F0jvmkM22YdujG7u9RzWDHWXav0go%2BfCRneq7uAgf6f0wpxGIFh%2BedVUpUERLT5XbFND3Tw0wO%2BLkn5DNqYaI4vdW0LTyrP02APUYM6Mg3Gdow7MpzbYiFtquSFpQnd8SdTHd77S6FtfvsVeCdhUuMZhHZpjGVgcX0Kn1I4R6&X-Amz-Signature=278e98130d16a174231e07df7ad0e31f27dd2f3a9d92e0f95fea0cae39fe33c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K4KKT7T%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH2GKGmD4RU49CQvbM2hrfPnZ%2F%2FkEyOJLx%2Fw9mqQD4tKAiBCkcmNQTRujutSxOGUApEIx%2BVjrWCj%2B9zF5cVp%2FvTSriqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgT8xZ8xEublrs8hKtwDzrIRCrjzF3LgM2Iu9cG0vNgCMit8FP%2BU6%2F107loLlXvgjg8xWjzO3MP53AlMG6qeIlObOx3m33H5%2Bl5H1%2FuqzpdFkNKFyub07mjYelZ0gQEbsk9xkAG%2FGusoT6rw%2BgAxypIJ2SEsXQhwHFgo%2B8QgvV6CiDaTdf6YF%2BIYzRgKk6wX6js%2F64DLb8pbC37EAu6OhKb5vnTmiIMEXwRamXQMZpSPNiWQRwL9qJG657NDotNfdH%2BncyMj7MFhnZNYWqspIumpIjWw4skCcIPuwBBZd2I%2F9NpD73oNjbXd6K7tK%2BYlI3DQHUU5Og%2BhkNdB6fWTbCoNYsDm5F2mShTvCylrWWovZzPymsnPe3JzQ67VipPcI9Ku2s1Tg0mpymZHDFFhl%2FmoX4rnevIketQYFmP6N5Uc8oPjsf0T0OKRNbsprvnz%2BIXgAIQlGXxyZ9ygnrPoKOSf0oPjGIIB7q3wX9ET4ezn4wnE0jYGKewd6nEkoYDv0C3Mx%2BggZRBqQXocr8syd2Rt%2Fa0DY1M4wVS1dUxgOCz9cpsdZohSsoMO12YSS6oeV2ImG7DhkNbxU3%2B69TAqSdfGu%2FZmyXM4pqy%2FJD9YJAaiHCqQRGlrBd%2FM7WZW%2FgrHror%2BothWCXJVX6own4z5vgY6pgGfBmFWvGKE05XG%2Fh%2FllBTQDbxYuSlO25f7QXy7Mug%2B6X6kiGoUeaL%2F0jvmkM22YdujG7u9RzWDHWXav0go%2BfCRneq7uAgf6f0wpxGIFh%2BedVUpUERLT5XbFND3Tw0wO%2BLkn5DNqYaI4vdW0LTyrP02APUYM6Mg3Gdow7MpzbYiFtquSFpQnd8SdTHd77S6FtfvsVeCdhUuMZhHZpjGVgcX0Kn1I4R6&X-Amz-Signature=00d96b36045de12bedd5dde5e2aaa010f18357528abc69f7d60022d7f071527a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K4KKT7T%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH2GKGmD4RU49CQvbM2hrfPnZ%2F%2FkEyOJLx%2Fw9mqQD4tKAiBCkcmNQTRujutSxOGUApEIx%2BVjrWCj%2B9zF5cVp%2FvTSriqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgT8xZ8xEublrs8hKtwDzrIRCrjzF3LgM2Iu9cG0vNgCMit8FP%2BU6%2F107loLlXvgjg8xWjzO3MP53AlMG6qeIlObOx3m33H5%2Bl5H1%2FuqzpdFkNKFyub07mjYelZ0gQEbsk9xkAG%2FGusoT6rw%2BgAxypIJ2SEsXQhwHFgo%2B8QgvV6CiDaTdf6YF%2BIYzRgKk6wX6js%2F64DLb8pbC37EAu6OhKb5vnTmiIMEXwRamXQMZpSPNiWQRwL9qJG657NDotNfdH%2BncyMj7MFhnZNYWqspIumpIjWw4skCcIPuwBBZd2I%2F9NpD73oNjbXd6K7tK%2BYlI3DQHUU5Og%2BhkNdB6fWTbCoNYsDm5F2mShTvCylrWWovZzPymsnPe3JzQ67VipPcI9Ku2s1Tg0mpymZHDFFhl%2FmoX4rnevIketQYFmP6N5Uc8oPjsf0T0OKRNbsprvnz%2BIXgAIQlGXxyZ9ygnrPoKOSf0oPjGIIB7q3wX9ET4ezn4wnE0jYGKewd6nEkoYDv0C3Mx%2BggZRBqQXocr8syd2Rt%2Fa0DY1M4wVS1dUxgOCz9cpsdZohSsoMO12YSS6oeV2ImG7DhkNbxU3%2B69TAqSdfGu%2FZmyXM4pqy%2FJD9YJAaiHCqQRGlrBd%2FM7WZW%2FgrHror%2BothWCXJVX6own4z5vgY6pgGfBmFWvGKE05XG%2Fh%2FllBTQDbxYuSlO25f7QXy7Mug%2B6X6kiGoUeaL%2F0jvmkM22YdujG7u9RzWDHWXav0go%2BfCRneq7uAgf6f0wpxGIFh%2BedVUpUERLT5XbFND3Tw0wO%2BLkn5DNqYaI4vdW0LTyrP02APUYM6Mg3Gdow7MpzbYiFtquSFpQnd8SdTHd77S6FtfvsVeCdhUuMZhHZpjGVgcX0Kn1I4R6&X-Amz-Signature=aebd4d4b0ae35f9adc6f33de6edd2d913b7a01987efd149848cd1b9d8e38dd21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
