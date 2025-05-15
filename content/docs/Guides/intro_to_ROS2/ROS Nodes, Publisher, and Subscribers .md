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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7RAKIJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDjM11OMgowi57a4fmnanwzTJQk%2FYN8q7B%2FdmropRUXRAIhAPUhy%2FfQopl7vVv0XRNgTeNUx25b9DVGOxsw%2FiUs2X7GKv8DCCYQABoMNjM3NDIzMTgzODA1IgzQfWxKlIGpeV%2B7sQsq3AOZ%2Bn1RdC6h47dUfdkAiTonhYYGkL7QvHtx1TPKI%2FCC%2Fue3qF4XgaBFsHkHDx6Rf5TTN4U6I5kLoi4CxvPhx8fKxHMQAOZIDvCeVsm9DHNgt81U1R0uzUDPxk%2Fm9NN2p9%2FRlRjiBh4Qhl0x1Hu0%2FIcCcRcBr2c8C1pm3e%2BJZGTO7tHa5suAe%2BGE1%2BDwfEGWbxi4l72KMjmo%2B4gbr2goqV8IjCEp7Vz1NEHigHQJu%2F53k0BysGYvL%2BxTcN4v3j61ZpMnjKjUyN7ELgKCS0MKOJwqslhnEkBwMCX0MkWuOC7wrhh5R2%2BRdwMloMezRg6umSvlSVpzya6lnSsYaikOkKOx8g8r0ASf%2BzT6WgvW3bSBkSV1OsACqF35upnL%2FsKDyKpBUKa%2FFqZLdngWMubulB7CgS2OYcVKT68Bb06m7a98RZ5tn%2FjgFcb87m9f3xgSk4pgi%2F462zHhuWzzgZkem9kBP%2FkvLNzJzEsd4%2BxssXMKZZaDf9yfALkgEZWPespThDZgTXo5IbyMu%2BeVUQumoF6LpJDgLMQHqMaAYSBfAdKXATTe4bulmV6eLhMakbN560qYdiWZQw9BdCkv4L13GvyPlUG%2FWIJIR8SFvGfuMPpmHcJDXBrzltRk%2BKxm4TCM6pXBBjqkAR1RKt26A2QsOeXz8iqduxdS%2BoYs%2F8h7hcg8S%2FXNHXG%2FP2ilBbZZE5NbjACG0sP9kIebqzHIjMVUywTNcUPLjIRtlSi8wHpJZRWo4LJCqFJtuKb3XjxbN%2BAvR%2Be7Ne0y3AIpIN%2Fy8l8Cm7Im3EtpUGmR18amMZxA9y2rQkKpG1%2FVQeOHn%2FRg2idtIG7W6GLbxBfydDOtBBSXi%2BpY0QXCHNpGosbo&X-Amz-Signature=dee75ea1e0a440ccb9b434ec5b2777012fa4d755e6fb5ff5056f0b15c4bac433&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7RAKIJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDjM11OMgowi57a4fmnanwzTJQk%2FYN8q7B%2FdmropRUXRAIhAPUhy%2FfQopl7vVv0XRNgTeNUx25b9DVGOxsw%2FiUs2X7GKv8DCCYQABoMNjM3NDIzMTgzODA1IgzQfWxKlIGpeV%2B7sQsq3AOZ%2Bn1RdC6h47dUfdkAiTonhYYGkL7QvHtx1TPKI%2FCC%2Fue3qF4XgaBFsHkHDx6Rf5TTN4U6I5kLoi4CxvPhx8fKxHMQAOZIDvCeVsm9DHNgt81U1R0uzUDPxk%2Fm9NN2p9%2FRlRjiBh4Qhl0x1Hu0%2FIcCcRcBr2c8C1pm3e%2BJZGTO7tHa5suAe%2BGE1%2BDwfEGWbxi4l72KMjmo%2B4gbr2goqV8IjCEp7Vz1NEHigHQJu%2F53k0BysGYvL%2BxTcN4v3j61ZpMnjKjUyN7ELgKCS0MKOJwqslhnEkBwMCX0MkWuOC7wrhh5R2%2BRdwMloMezRg6umSvlSVpzya6lnSsYaikOkKOx8g8r0ASf%2BzT6WgvW3bSBkSV1OsACqF35upnL%2FsKDyKpBUKa%2FFqZLdngWMubulB7CgS2OYcVKT68Bb06m7a98RZ5tn%2FjgFcb87m9f3xgSk4pgi%2F462zHhuWzzgZkem9kBP%2FkvLNzJzEsd4%2BxssXMKZZaDf9yfALkgEZWPespThDZgTXo5IbyMu%2BeVUQumoF6LpJDgLMQHqMaAYSBfAdKXATTe4bulmV6eLhMakbN560qYdiWZQw9BdCkv4L13GvyPlUG%2FWIJIR8SFvGfuMPpmHcJDXBrzltRk%2BKxm4TCM6pXBBjqkAR1RKt26A2QsOeXz8iqduxdS%2BoYs%2F8h7hcg8S%2FXNHXG%2FP2ilBbZZE5NbjACG0sP9kIebqzHIjMVUywTNcUPLjIRtlSi8wHpJZRWo4LJCqFJtuKb3XjxbN%2BAvR%2Be7Ne0y3AIpIN%2Fy8l8Cm7Im3EtpUGmR18amMZxA9y2rQkKpG1%2FVQeOHn%2FRg2idtIG7W6GLbxBfydDOtBBSXi%2BpY0QXCHNpGosbo&X-Amz-Signature=67b5ae60ed97e42d21b7d3a4da76f8b7c74e83d408e98f91ba2ca050dbf6303e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7RAKIJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDjM11OMgowi57a4fmnanwzTJQk%2FYN8q7B%2FdmropRUXRAIhAPUhy%2FfQopl7vVv0XRNgTeNUx25b9DVGOxsw%2FiUs2X7GKv8DCCYQABoMNjM3NDIzMTgzODA1IgzQfWxKlIGpeV%2B7sQsq3AOZ%2Bn1RdC6h47dUfdkAiTonhYYGkL7QvHtx1TPKI%2FCC%2Fue3qF4XgaBFsHkHDx6Rf5TTN4U6I5kLoi4CxvPhx8fKxHMQAOZIDvCeVsm9DHNgt81U1R0uzUDPxk%2Fm9NN2p9%2FRlRjiBh4Qhl0x1Hu0%2FIcCcRcBr2c8C1pm3e%2BJZGTO7tHa5suAe%2BGE1%2BDwfEGWbxi4l72KMjmo%2B4gbr2goqV8IjCEp7Vz1NEHigHQJu%2F53k0BysGYvL%2BxTcN4v3j61ZpMnjKjUyN7ELgKCS0MKOJwqslhnEkBwMCX0MkWuOC7wrhh5R2%2BRdwMloMezRg6umSvlSVpzya6lnSsYaikOkKOx8g8r0ASf%2BzT6WgvW3bSBkSV1OsACqF35upnL%2FsKDyKpBUKa%2FFqZLdngWMubulB7CgS2OYcVKT68Bb06m7a98RZ5tn%2FjgFcb87m9f3xgSk4pgi%2F462zHhuWzzgZkem9kBP%2FkvLNzJzEsd4%2BxssXMKZZaDf9yfALkgEZWPespThDZgTXo5IbyMu%2BeVUQumoF6LpJDgLMQHqMaAYSBfAdKXATTe4bulmV6eLhMakbN560qYdiWZQw9BdCkv4L13GvyPlUG%2FWIJIR8SFvGfuMPpmHcJDXBrzltRk%2BKxm4TCM6pXBBjqkAR1RKt26A2QsOeXz8iqduxdS%2BoYs%2F8h7hcg8S%2FXNHXG%2FP2ilBbZZE5NbjACG0sP9kIebqzHIjMVUywTNcUPLjIRtlSi8wHpJZRWo4LJCqFJtuKb3XjxbN%2BAvR%2Be7Ne0y3AIpIN%2Fy8l8Cm7Im3EtpUGmR18amMZxA9y2rQkKpG1%2FVQeOHn%2FRg2idtIG7W6GLbxBfydDOtBBSXi%2BpY0QXCHNpGosbo&X-Amz-Signature=34209bd0d4bbc0c538a2e1fd27e656dc8bc3d100d1ce20529f6e2413fbdd67a5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7RAKIJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDjM11OMgowi57a4fmnanwzTJQk%2FYN8q7B%2FdmropRUXRAIhAPUhy%2FfQopl7vVv0XRNgTeNUx25b9DVGOxsw%2FiUs2X7GKv8DCCYQABoMNjM3NDIzMTgzODA1IgzQfWxKlIGpeV%2B7sQsq3AOZ%2Bn1RdC6h47dUfdkAiTonhYYGkL7QvHtx1TPKI%2FCC%2Fue3qF4XgaBFsHkHDx6Rf5TTN4U6I5kLoi4CxvPhx8fKxHMQAOZIDvCeVsm9DHNgt81U1R0uzUDPxk%2Fm9NN2p9%2FRlRjiBh4Qhl0x1Hu0%2FIcCcRcBr2c8C1pm3e%2BJZGTO7tHa5suAe%2BGE1%2BDwfEGWbxi4l72KMjmo%2B4gbr2goqV8IjCEp7Vz1NEHigHQJu%2F53k0BysGYvL%2BxTcN4v3j61ZpMnjKjUyN7ELgKCS0MKOJwqslhnEkBwMCX0MkWuOC7wrhh5R2%2BRdwMloMezRg6umSvlSVpzya6lnSsYaikOkKOx8g8r0ASf%2BzT6WgvW3bSBkSV1OsACqF35upnL%2FsKDyKpBUKa%2FFqZLdngWMubulB7CgS2OYcVKT68Bb06m7a98RZ5tn%2FjgFcb87m9f3xgSk4pgi%2F462zHhuWzzgZkem9kBP%2FkvLNzJzEsd4%2BxssXMKZZaDf9yfALkgEZWPespThDZgTXo5IbyMu%2BeVUQumoF6LpJDgLMQHqMaAYSBfAdKXATTe4bulmV6eLhMakbN560qYdiWZQw9BdCkv4L13GvyPlUG%2FWIJIR8SFvGfuMPpmHcJDXBrzltRk%2BKxm4TCM6pXBBjqkAR1RKt26A2QsOeXz8iqduxdS%2BoYs%2F8h7hcg8S%2FXNHXG%2FP2ilBbZZE5NbjACG0sP9kIebqzHIjMVUywTNcUPLjIRtlSi8wHpJZRWo4LJCqFJtuKb3XjxbN%2BAvR%2Be7Ne0y3AIpIN%2Fy8l8Cm7Im3EtpUGmR18amMZxA9y2rQkKpG1%2FVQeOHn%2FRg2idtIG7W6GLbxBfydDOtBBSXi%2BpY0QXCHNpGosbo&X-Amz-Signature=a87061483ecc624fc3d52e6d622b1c770ecac18547d984d8d5353bdaf93e544f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7RAKIJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDjM11OMgowi57a4fmnanwzTJQk%2FYN8q7B%2FdmropRUXRAIhAPUhy%2FfQopl7vVv0XRNgTeNUx25b9DVGOxsw%2FiUs2X7GKv8DCCYQABoMNjM3NDIzMTgzODA1IgzQfWxKlIGpeV%2B7sQsq3AOZ%2Bn1RdC6h47dUfdkAiTonhYYGkL7QvHtx1TPKI%2FCC%2Fue3qF4XgaBFsHkHDx6Rf5TTN4U6I5kLoi4CxvPhx8fKxHMQAOZIDvCeVsm9DHNgt81U1R0uzUDPxk%2Fm9NN2p9%2FRlRjiBh4Qhl0x1Hu0%2FIcCcRcBr2c8C1pm3e%2BJZGTO7tHa5suAe%2BGE1%2BDwfEGWbxi4l72KMjmo%2B4gbr2goqV8IjCEp7Vz1NEHigHQJu%2F53k0BysGYvL%2BxTcN4v3j61ZpMnjKjUyN7ELgKCS0MKOJwqslhnEkBwMCX0MkWuOC7wrhh5R2%2BRdwMloMezRg6umSvlSVpzya6lnSsYaikOkKOx8g8r0ASf%2BzT6WgvW3bSBkSV1OsACqF35upnL%2FsKDyKpBUKa%2FFqZLdngWMubulB7CgS2OYcVKT68Bb06m7a98RZ5tn%2FjgFcb87m9f3xgSk4pgi%2F462zHhuWzzgZkem9kBP%2FkvLNzJzEsd4%2BxssXMKZZaDf9yfALkgEZWPespThDZgTXo5IbyMu%2BeVUQumoF6LpJDgLMQHqMaAYSBfAdKXATTe4bulmV6eLhMakbN560qYdiWZQw9BdCkv4L13GvyPlUG%2FWIJIR8SFvGfuMPpmHcJDXBrzltRk%2BKxm4TCM6pXBBjqkAR1RKt26A2QsOeXz8iqduxdS%2BoYs%2F8h7hcg8S%2FXNHXG%2FP2ilBbZZE5NbjACG0sP9kIebqzHIjMVUywTNcUPLjIRtlSi8wHpJZRWo4LJCqFJtuKb3XjxbN%2BAvR%2Be7Ne0y3AIpIN%2Fy8l8Cm7Im3EtpUGmR18amMZxA9y2rQkKpG1%2FVQeOHn%2FRg2idtIG7W6GLbxBfydDOtBBSXi%2BpY0QXCHNpGosbo&X-Amz-Signature=5d8806683bb222ef7a46e89be49655358e6705ef4fa42357f1cf44f39f381b90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7RAKIJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDjM11OMgowi57a4fmnanwzTJQk%2FYN8q7B%2FdmropRUXRAIhAPUhy%2FfQopl7vVv0XRNgTeNUx25b9DVGOxsw%2FiUs2X7GKv8DCCYQABoMNjM3NDIzMTgzODA1IgzQfWxKlIGpeV%2B7sQsq3AOZ%2Bn1RdC6h47dUfdkAiTonhYYGkL7QvHtx1TPKI%2FCC%2Fue3qF4XgaBFsHkHDx6Rf5TTN4U6I5kLoi4CxvPhx8fKxHMQAOZIDvCeVsm9DHNgt81U1R0uzUDPxk%2Fm9NN2p9%2FRlRjiBh4Qhl0x1Hu0%2FIcCcRcBr2c8C1pm3e%2BJZGTO7tHa5suAe%2BGE1%2BDwfEGWbxi4l72KMjmo%2B4gbr2goqV8IjCEp7Vz1NEHigHQJu%2F53k0BysGYvL%2BxTcN4v3j61ZpMnjKjUyN7ELgKCS0MKOJwqslhnEkBwMCX0MkWuOC7wrhh5R2%2BRdwMloMezRg6umSvlSVpzya6lnSsYaikOkKOx8g8r0ASf%2BzT6WgvW3bSBkSV1OsACqF35upnL%2FsKDyKpBUKa%2FFqZLdngWMubulB7CgS2OYcVKT68Bb06m7a98RZ5tn%2FjgFcb87m9f3xgSk4pgi%2F462zHhuWzzgZkem9kBP%2FkvLNzJzEsd4%2BxssXMKZZaDf9yfALkgEZWPespThDZgTXo5IbyMu%2BeVUQumoF6LpJDgLMQHqMaAYSBfAdKXATTe4bulmV6eLhMakbN560qYdiWZQw9BdCkv4L13GvyPlUG%2FWIJIR8SFvGfuMPpmHcJDXBrzltRk%2BKxm4TCM6pXBBjqkAR1RKt26A2QsOeXz8iqduxdS%2BoYs%2F8h7hcg8S%2FXNHXG%2FP2ilBbZZE5NbjACG0sP9kIebqzHIjMVUywTNcUPLjIRtlSi8wHpJZRWo4LJCqFJtuKb3XjxbN%2BAvR%2Be7Ne0y3AIpIN%2Fy8l8Cm7Im3EtpUGmR18amMZxA9y2rQkKpG1%2FVQeOHn%2FRg2idtIG7W6GLbxBfydDOtBBSXi%2BpY0QXCHNpGosbo&X-Amz-Signature=ab15017d383e70e6f9437332553ab957dbfb0a4f5150d5fb1c16f9f60e1de8d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7RAKIJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDjM11OMgowi57a4fmnanwzTJQk%2FYN8q7B%2FdmropRUXRAIhAPUhy%2FfQopl7vVv0XRNgTeNUx25b9DVGOxsw%2FiUs2X7GKv8DCCYQABoMNjM3NDIzMTgzODA1IgzQfWxKlIGpeV%2B7sQsq3AOZ%2Bn1RdC6h47dUfdkAiTonhYYGkL7QvHtx1TPKI%2FCC%2Fue3qF4XgaBFsHkHDx6Rf5TTN4U6I5kLoi4CxvPhx8fKxHMQAOZIDvCeVsm9DHNgt81U1R0uzUDPxk%2Fm9NN2p9%2FRlRjiBh4Qhl0x1Hu0%2FIcCcRcBr2c8C1pm3e%2BJZGTO7tHa5suAe%2BGE1%2BDwfEGWbxi4l72KMjmo%2B4gbr2goqV8IjCEp7Vz1NEHigHQJu%2F53k0BysGYvL%2BxTcN4v3j61ZpMnjKjUyN7ELgKCS0MKOJwqslhnEkBwMCX0MkWuOC7wrhh5R2%2BRdwMloMezRg6umSvlSVpzya6lnSsYaikOkKOx8g8r0ASf%2BzT6WgvW3bSBkSV1OsACqF35upnL%2FsKDyKpBUKa%2FFqZLdngWMubulB7CgS2OYcVKT68Bb06m7a98RZ5tn%2FjgFcb87m9f3xgSk4pgi%2F462zHhuWzzgZkem9kBP%2FkvLNzJzEsd4%2BxssXMKZZaDf9yfALkgEZWPespThDZgTXo5IbyMu%2BeVUQumoF6LpJDgLMQHqMaAYSBfAdKXATTe4bulmV6eLhMakbN560qYdiWZQw9BdCkv4L13GvyPlUG%2FWIJIR8SFvGfuMPpmHcJDXBrzltRk%2BKxm4TCM6pXBBjqkAR1RKt26A2QsOeXz8iqduxdS%2BoYs%2F8h7hcg8S%2FXNHXG%2FP2ilBbZZE5NbjACG0sP9kIebqzHIjMVUywTNcUPLjIRtlSi8wHpJZRWo4LJCqFJtuKb3XjxbN%2BAvR%2Be7Ne0y3AIpIN%2Fy8l8Cm7Im3EtpUGmR18amMZxA9y2rQkKpG1%2FVQeOHn%2FRg2idtIG7W6GLbxBfydDOtBBSXi%2BpY0QXCHNpGosbo&X-Amz-Signature=8933753f24e8ad24c0d038b0925208778ca2c4ae756e0334057b92e847c45f29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7RAKIJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDjM11OMgowi57a4fmnanwzTJQk%2FYN8q7B%2FdmropRUXRAIhAPUhy%2FfQopl7vVv0XRNgTeNUx25b9DVGOxsw%2FiUs2X7GKv8DCCYQABoMNjM3NDIzMTgzODA1IgzQfWxKlIGpeV%2B7sQsq3AOZ%2Bn1RdC6h47dUfdkAiTonhYYGkL7QvHtx1TPKI%2FCC%2Fue3qF4XgaBFsHkHDx6Rf5TTN4U6I5kLoi4CxvPhx8fKxHMQAOZIDvCeVsm9DHNgt81U1R0uzUDPxk%2Fm9NN2p9%2FRlRjiBh4Qhl0x1Hu0%2FIcCcRcBr2c8C1pm3e%2BJZGTO7tHa5suAe%2BGE1%2BDwfEGWbxi4l72KMjmo%2B4gbr2goqV8IjCEp7Vz1NEHigHQJu%2F53k0BysGYvL%2BxTcN4v3j61ZpMnjKjUyN7ELgKCS0MKOJwqslhnEkBwMCX0MkWuOC7wrhh5R2%2BRdwMloMezRg6umSvlSVpzya6lnSsYaikOkKOx8g8r0ASf%2BzT6WgvW3bSBkSV1OsACqF35upnL%2FsKDyKpBUKa%2FFqZLdngWMubulB7CgS2OYcVKT68Bb06m7a98RZ5tn%2FjgFcb87m9f3xgSk4pgi%2F462zHhuWzzgZkem9kBP%2FkvLNzJzEsd4%2BxssXMKZZaDf9yfALkgEZWPespThDZgTXo5IbyMu%2BeVUQumoF6LpJDgLMQHqMaAYSBfAdKXATTe4bulmV6eLhMakbN560qYdiWZQw9BdCkv4L13GvyPlUG%2FWIJIR8SFvGfuMPpmHcJDXBrzltRk%2BKxm4TCM6pXBBjqkAR1RKt26A2QsOeXz8iqduxdS%2BoYs%2F8h7hcg8S%2FXNHXG%2FP2ilBbZZE5NbjACG0sP9kIebqzHIjMVUywTNcUPLjIRtlSi8wHpJZRWo4LJCqFJtuKb3XjxbN%2BAvR%2Be7Ne0y3AIpIN%2Fy8l8Cm7Im3EtpUGmR18amMZxA9y2rQkKpG1%2FVQeOHn%2FRg2idtIG7W6GLbxBfydDOtBBSXi%2BpY0QXCHNpGosbo&X-Amz-Signature=8119bd3dfe09a8057566625da9b1a4ed54dd8f3b4a5332d9224b1764d43e23f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
