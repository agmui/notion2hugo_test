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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7BHB7R%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxPFVQMWNnArpRCIqsR9ysKCRUCxyAqaVDNP%2B0Jf8SCQIhAKTYtfQGWxWBEhSp8eesLFObFGcWnZJ8yFUdKFodLwxcKv8DCCMQABoMNjM3NDIzMTgzODA1IgyOkE6A2l4wrUhy8jkq3AOHRKInjBBfZGlgoyB5d4kw56507DTxLnIz97brP2sbAgFFFs09R6PyDVbG043F%2FQG6t7ez3D8pL2%2BhdkAPKW7wlOpXqxUeRtP1V9ZJkH8yH1xPI4qrwTDFZn0v%2FJbLoP%2Bz2uHjGGXEMiV9HEFI6NESKMWJ1YazweZJrEGlNchixQPBdcR8OZ0xmHi00%2Bs8ehSEGvTH1LJtkBDNH32dJ5kYfQ0pT5dhhdK9NRM4V4d1q%2BhbD3p5ubioLdHHTFIGrv1atEDznb2U3T4vQt71ePjzBwIORaaFzBc1xMrzBbMUU0naadKfrXdFodZSfHCSLfj%2BRx2PDfRKX7dGAYLaxVQ0vRnguHEGzH5h3tMKXX5XRlODnFtqZSPqKHuHya9qX0xMRi7ZT426yUoJSlLRL6VWjp0b2%2F%2B51F5F%2FQY8dJURgGxNV0626%2B7%2F5uV9gY%2FeM%2BpLQZfvaQKzgqSzs0tYI9lG%2FdxLNFNWXIbOho5mGg6ffNMNLL%2FI4%2FewXirB94LvyRW1ravzAsPYDgsyxUf8htx7r5gBkHVvDG5LH2wB%2Fh5u%2FflXVRA6FXKnz4oigzOoTSI6LpTwZqoYk%2Beq7mgSf1OLegsrOMuXEYMmaSj8%2F%2BjaVdA%2FF%2FzBsw9XTJN9AjCEzNHDBjqkAbkF9EitUilvFloFwUECXZCvJrmmRrzzplwNV2pyqEnPg4W7ENzYaf04fdgsA%2FbxOWXasebMgJpJuxUbPGcf72IVlNrHmI6r6qZ90PKnzXtbZ%2FTA%2Bm3pVL2Q40yKYUNJfQADPdQIz%2Fq%2FCzwxI3lhsFC0ksrS16n4uEPSuohh9l61ZGg0S%2B2JNBLHoGnSUnn9tYqE1zI%2FeJzwUCs7hICnB2D82BZJ&X-Amz-Signature=02c3e5ae69d2f61328e7985dd21f56c46912b53b3280c6ff8422d797a2c2f33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7BHB7R%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxPFVQMWNnArpRCIqsR9ysKCRUCxyAqaVDNP%2B0Jf8SCQIhAKTYtfQGWxWBEhSp8eesLFObFGcWnZJ8yFUdKFodLwxcKv8DCCMQABoMNjM3NDIzMTgzODA1IgyOkE6A2l4wrUhy8jkq3AOHRKInjBBfZGlgoyB5d4kw56507DTxLnIz97brP2sbAgFFFs09R6PyDVbG043F%2FQG6t7ez3D8pL2%2BhdkAPKW7wlOpXqxUeRtP1V9ZJkH8yH1xPI4qrwTDFZn0v%2FJbLoP%2Bz2uHjGGXEMiV9HEFI6NESKMWJ1YazweZJrEGlNchixQPBdcR8OZ0xmHi00%2Bs8ehSEGvTH1LJtkBDNH32dJ5kYfQ0pT5dhhdK9NRM4V4d1q%2BhbD3p5ubioLdHHTFIGrv1atEDznb2U3T4vQt71ePjzBwIORaaFzBc1xMrzBbMUU0naadKfrXdFodZSfHCSLfj%2BRx2PDfRKX7dGAYLaxVQ0vRnguHEGzH5h3tMKXX5XRlODnFtqZSPqKHuHya9qX0xMRi7ZT426yUoJSlLRL6VWjp0b2%2F%2B51F5F%2FQY8dJURgGxNV0626%2B7%2F5uV9gY%2FeM%2BpLQZfvaQKzgqSzs0tYI9lG%2FdxLNFNWXIbOho5mGg6ffNMNLL%2FI4%2FewXirB94LvyRW1ravzAsPYDgsyxUf8htx7r5gBkHVvDG5LH2wB%2Fh5u%2FflXVRA6FXKnz4oigzOoTSI6LpTwZqoYk%2Beq7mgSf1OLegsrOMuXEYMmaSj8%2F%2BjaVdA%2FF%2FzBsw9XTJN9AjCEzNHDBjqkAbkF9EitUilvFloFwUECXZCvJrmmRrzzplwNV2pyqEnPg4W7ENzYaf04fdgsA%2FbxOWXasebMgJpJuxUbPGcf72IVlNrHmI6r6qZ90PKnzXtbZ%2FTA%2Bm3pVL2Q40yKYUNJfQADPdQIz%2Fq%2FCzwxI3lhsFC0ksrS16n4uEPSuohh9l61ZGg0S%2B2JNBLHoGnSUnn9tYqE1zI%2FeJzwUCs7hICnB2D82BZJ&X-Amz-Signature=332a046a0e7c7fb4b61f57a0c634074bed9e86013e699e76782af169d0ffb22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7BHB7R%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxPFVQMWNnArpRCIqsR9ysKCRUCxyAqaVDNP%2B0Jf8SCQIhAKTYtfQGWxWBEhSp8eesLFObFGcWnZJ8yFUdKFodLwxcKv8DCCMQABoMNjM3NDIzMTgzODA1IgyOkE6A2l4wrUhy8jkq3AOHRKInjBBfZGlgoyB5d4kw56507DTxLnIz97brP2sbAgFFFs09R6PyDVbG043F%2FQG6t7ez3D8pL2%2BhdkAPKW7wlOpXqxUeRtP1V9ZJkH8yH1xPI4qrwTDFZn0v%2FJbLoP%2Bz2uHjGGXEMiV9HEFI6NESKMWJ1YazweZJrEGlNchixQPBdcR8OZ0xmHi00%2Bs8ehSEGvTH1LJtkBDNH32dJ5kYfQ0pT5dhhdK9NRM4V4d1q%2BhbD3p5ubioLdHHTFIGrv1atEDznb2U3T4vQt71ePjzBwIORaaFzBc1xMrzBbMUU0naadKfrXdFodZSfHCSLfj%2BRx2PDfRKX7dGAYLaxVQ0vRnguHEGzH5h3tMKXX5XRlODnFtqZSPqKHuHya9qX0xMRi7ZT426yUoJSlLRL6VWjp0b2%2F%2B51F5F%2FQY8dJURgGxNV0626%2B7%2F5uV9gY%2FeM%2BpLQZfvaQKzgqSzs0tYI9lG%2FdxLNFNWXIbOho5mGg6ffNMNLL%2FI4%2FewXirB94LvyRW1ravzAsPYDgsyxUf8htx7r5gBkHVvDG5LH2wB%2Fh5u%2FflXVRA6FXKnz4oigzOoTSI6LpTwZqoYk%2Beq7mgSf1OLegsrOMuXEYMmaSj8%2F%2BjaVdA%2FF%2FzBsw9XTJN9AjCEzNHDBjqkAbkF9EitUilvFloFwUECXZCvJrmmRrzzplwNV2pyqEnPg4W7ENzYaf04fdgsA%2FbxOWXasebMgJpJuxUbPGcf72IVlNrHmI6r6qZ90PKnzXtbZ%2FTA%2Bm3pVL2Q40yKYUNJfQADPdQIz%2Fq%2FCzwxI3lhsFC0ksrS16n4uEPSuohh9l61ZGg0S%2B2JNBLHoGnSUnn9tYqE1zI%2FeJzwUCs7hICnB2D82BZJ&X-Amz-Signature=91d57069ab2d226769666b6d83aeca0ccb36ccda6bcd52f368fc0c23fcaaa7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7BHB7R%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxPFVQMWNnArpRCIqsR9ysKCRUCxyAqaVDNP%2B0Jf8SCQIhAKTYtfQGWxWBEhSp8eesLFObFGcWnZJ8yFUdKFodLwxcKv8DCCMQABoMNjM3NDIzMTgzODA1IgyOkE6A2l4wrUhy8jkq3AOHRKInjBBfZGlgoyB5d4kw56507DTxLnIz97brP2sbAgFFFs09R6PyDVbG043F%2FQG6t7ez3D8pL2%2BhdkAPKW7wlOpXqxUeRtP1V9ZJkH8yH1xPI4qrwTDFZn0v%2FJbLoP%2Bz2uHjGGXEMiV9HEFI6NESKMWJ1YazweZJrEGlNchixQPBdcR8OZ0xmHi00%2Bs8ehSEGvTH1LJtkBDNH32dJ5kYfQ0pT5dhhdK9NRM4V4d1q%2BhbD3p5ubioLdHHTFIGrv1atEDznb2U3T4vQt71ePjzBwIORaaFzBc1xMrzBbMUU0naadKfrXdFodZSfHCSLfj%2BRx2PDfRKX7dGAYLaxVQ0vRnguHEGzH5h3tMKXX5XRlODnFtqZSPqKHuHya9qX0xMRi7ZT426yUoJSlLRL6VWjp0b2%2F%2B51F5F%2FQY8dJURgGxNV0626%2B7%2F5uV9gY%2FeM%2BpLQZfvaQKzgqSzs0tYI9lG%2FdxLNFNWXIbOho5mGg6ffNMNLL%2FI4%2FewXirB94LvyRW1ravzAsPYDgsyxUf8htx7r5gBkHVvDG5LH2wB%2Fh5u%2FflXVRA6FXKnz4oigzOoTSI6LpTwZqoYk%2Beq7mgSf1OLegsrOMuXEYMmaSj8%2F%2BjaVdA%2FF%2FzBsw9XTJN9AjCEzNHDBjqkAbkF9EitUilvFloFwUECXZCvJrmmRrzzplwNV2pyqEnPg4W7ENzYaf04fdgsA%2FbxOWXasebMgJpJuxUbPGcf72IVlNrHmI6r6qZ90PKnzXtbZ%2FTA%2Bm3pVL2Q40yKYUNJfQADPdQIz%2Fq%2FCzwxI3lhsFC0ksrS16n4uEPSuohh9l61ZGg0S%2B2JNBLHoGnSUnn9tYqE1zI%2FeJzwUCs7hICnB2D82BZJ&X-Amz-Signature=6a03bdd29f9894e6f8a553233c0eba1d0c6385b70c45c7be824424d0cf328633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7BHB7R%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxPFVQMWNnArpRCIqsR9ysKCRUCxyAqaVDNP%2B0Jf8SCQIhAKTYtfQGWxWBEhSp8eesLFObFGcWnZJ8yFUdKFodLwxcKv8DCCMQABoMNjM3NDIzMTgzODA1IgyOkE6A2l4wrUhy8jkq3AOHRKInjBBfZGlgoyB5d4kw56507DTxLnIz97brP2sbAgFFFs09R6PyDVbG043F%2FQG6t7ez3D8pL2%2BhdkAPKW7wlOpXqxUeRtP1V9ZJkH8yH1xPI4qrwTDFZn0v%2FJbLoP%2Bz2uHjGGXEMiV9HEFI6NESKMWJ1YazweZJrEGlNchixQPBdcR8OZ0xmHi00%2Bs8ehSEGvTH1LJtkBDNH32dJ5kYfQ0pT5dhhdK9NRM4V4d1q%2BhbD3p5ubioLdHHTFIGrv1atEDznb2U3T4vQt71ePjzBwIORaaFzBc1xMrzBbMUU0naadKfrXdFodZSfHCSLfj%2BRx2PDfRKX7dGAYLaxVQ0vRnguHEGzH5h3tMKXX5XRlODnFtqZSPqKHuHya9qX0xMRi7ZT426yUoJSlLRL6VWjp0b2%2F%2B51F5F%2FQY8dJURgGxNV0626%2B7%2F5uV9gY%2FeM%2BpLQZfvaQKzgqSzs0tYI9lG%2FdxLNFNWXIbOho5mGg6ffNMNLL%2FI4%2FewXirB94LvyRW1ravzAsPYDgsyxUf8htx7r5gBkHVvDG5LH2wB%2Fh5u%2FflXVRA6FXKnz4oigzOoTSI6LpTwZqoYk%2Beq7mgSf1OLegsrOMuXEYMmaSj8%2F%2BjaVdA%2FF%2FzBsw9XTJN9AjCEzNHDBjqkAbkF9EitUilvFloFwUECXZCvJrmmRrzzplwNV2pyqEnPg4W7ENzYaf04fdgsA%2FbxOWXasebMgJpJuxUbPGcf72IVlNrHmI6r6qZ90PKnzXtbZ%2FTA%2Bm3pVL2Q40yKYUNJfQADPdQIz%2Fq%2FCzwxI3lhsFC0ksrS16n4uEPSuohh9l61ZGg0S%2B2JNBLHoGnSUnn9tYqE1zI%2FeJzwUCs7hICnB2D82BZJ&X-Amz-Signature=c9e3aabdfe43dc8ead3eb87397e99c9e160f1a0a5ed8866ddb6ddcd4c3cb36c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7BHB7R%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxPFVQMWNnArpRCIqsR9ysKCRUCxyAqaVDNP%2B0Jf8SCQIhAKTYtfQGWxWBEhSp8eesLFObFGcWnZJ8yFUdKFodLwxcKv8DCCMQABoMNjM3NDIzMTgzODA1IgyOkE6A2l4wrUhy8jkq3AOHRKInjBBfZGlgoyB5d4kw56507DTxLnIz97brP2sbAgFFFs09R6PyDVbG043F%2FQG6t7ez3D8pL2%2BhdkAPKW7wlOpXqxUeRtP1V9ZJkH8yH1xPI4qrwTDFZn0v%2FJbLoP%2Bz2uHjGGXEMiV9HEFI6NESKMWJ1YazweZJrEGlNchixQPBdcR8OZ0xmHi00%2Bs8ehSEGvTH1LJtkBDNH32dJ5kYfQ0pT5dhhdK9NRM4V4d1q%2BhbD3p5ubioLdHHTFIGrv1atEDznb2U3T4vQt71ePjzBwIORaaFzBc1xMrzBbMUU0naadKfrXdFodZSfHCSLfj%2BRx2PDfRKX7dGAYLaxVQ0vRnguHEGzH5h3tMKXX5XRlODnFtqZSPqKHuHya9qX0xMRi7ZT426yUoJSlLRL6VWjp0b2%2F%2B51F5F%2FQY8dJURgGxNV0626%2B7%2F5uV9gY%2FeM%2BpLQZfvaQKzgqSzs0tYI9lG%2FdxLNFNWXIbOho5mGg6ffNMNLL%2FI4%2FewXirB94LvyRW1ravzAsPYDgsyxUf8htx7r5gBkHVvDG5LH2wB%2Fh5u%2FflXVRA6FXKnz4oigzOoTSI6LpTwZqoYk%2Beq7mgSf1OLegsrOMuXEYMmaSj8%2F%2BjaVdA%2FF%2FzBsw9XTJN9AjCEzNHDBjqkAbkF9EitUilvFloFwUECXZCvJrmmRrzzplwNV2pyqEnPg4W7ENzYaf04fdgsA%2FbxOWXasebMgJpJuxUbPGcf72IVlNrHmI6r6qZ90PKnzXtbZ%2FTA%2Bm3pVL2Q40yKYUNJfQADPdQIz%2Fq%2FCzwxI3lhsFC0ksrS16n4uEPSuohh9l61ZGg0S%2B2JNBLHoGnSUnn9tYqE1zI%2FeJzwUCs7hICnB2D82BZJ&X-Amz-Signature=ce48143bcbd1cf7f248e488a26f90433d78af8bb99db7de11fb1c521d02cac5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7BHB7R%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxPFVQMWNnArpRCIqsR9ysKCRUCxyAqaVDNP%2B0Jf8SCQIhAKTYtfQGWxWBEhSp8eesLFObFGcWnZJ8yFUdKFodLwxcKv8DCCMQABoMNjM3NDIzMTgzODA1IgyOkE6A2l4wrUhy8jkq3AOHRKInjBBfZGlgoyB5d4kw56507DTxLnIz97brP2sbAgFFFs09R6PyDVbG043F%2FQG6t7ez3D8pL2%2BhdkAPKW7wlOpXqxUeRtP1V9ZJkH8yH1xPI4qrwTDFZn0v%2FJbLoP%2Bz2uHjGGXEMiV9HEFI6NESKMWJ1YazweZJrEGlNchixQPBdcR8OZ0xmHi00%2Bs8ehSEGvTH1LJtkBDNH32dJ5kYfQ0pT5dhhdK9NRM4V4d1q%2BhbD3p5ubioLdHHTFIGrv1atEDznb2U3T4vQt71ePjzBwIORaaFzBc1xMrzBbMUU0naadKfrXdFodZSfHCSLfj%2BRx2PDfRKX7dGAYLaxVQ0vRnguHEGzH5h3tMKXX5XRlODnFtqZSPqKHuHya9qX0xMRi7ZT426yUoJSlLRL6VWjp0b2%2F%2B51F5F%2FQY8dJURgGxNV0626%2B7%2F5uV9gY%2FeM%2BpLQZfvaQKzgqSzs0tYI9lG%2FdxLNFNWXIbOho5mGg6ffNMNLL%2FI4%2FewXirB94LvyRW1ravzAsPYDgsyxUf8htx7r5gBkHVvDG5LH2wB%2Fh5u%2FflXVRA6FXKnz4oigzOoTSI6LpTwZqoYk%2Beq7mgSf1OLegsrOMuXEYMmaSj8%2F%2BjaVdA%2FF%2FzBsw9XTJN9AjCEzNHDBjqkAbkF9EitUilvFloFwUECXZCvJrmmRrzzplwNV2pyqEnPg4W7ENzYaf04fdgsA%2FbxOWXasebMgJpJuxUbPGcf72IVlNrHmI6r6qZ90PKnzXtbZ%2FTA%2Bm3pVL2Q40yKYUNJfQADPdQIz%2Fq%2FCzwxI3lhsFC0ksrS16n4uEPSuohh9l61ZGg0S%2B2JNBLHoGnSUnn9tYqE1zI%2FeJzwUCs7hICnB2D82BZJ&X-Amz-Signature=dc9af715961393d6b0443d0e9cfa2e2e0d6bd7af65dfaa79ed556f23e89b2e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7BHB7R%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxPFVQMWNnArpRCIqsR9ysKCRUCxyAqaVDNP%2B0Jf8SCQIhAKTYtfQGWxWBEhSp8eesLFObFGcWnZJ8yFUdKFodLwxcKv8DCCMQABoMNjM3NDIzMTgzODA1IgyOkE6A2l4wrUhy8jkq3AOHRKInjBBfZGlgoyB5d4kw56507DTxLnIz97brP2sbAgFFFs09R6PyDVbG043F%2FQG6t7ez3D8pL2%2BhdkAPKW7wlOpXqxUeRtP1V9ZJkH8yH1xPI4qrwTDFZn0v%2FJbLoP%2Bz2uHjGGXEMiV9HEFI6NESKMWJ1YazweZJrEGlNchixQPBdcR8OZ0xmHi00%2Bs8ehSEGvTH1LJtkBDNH32dJ5kYfQ0pT5dhhdK9NRM4V4d1q%2BhbD3p5ubioLdHHTFIGrv1atEDznb2U3T4vQt71ePjzBwIORaaFzBc1xMrzBbMUU0naadKfrXdFodZSfHCSLfj%2BRx2PDfRKX7dGAYLaxVQ0vRnguHEGzH5h3tMKXX5XRlODnFtqZSPqKHuHya9qX0xMRi7ZT426yUoJSlLRL6VWjp0b2%2F%2B51F5F%2FQY8dJURgGxNV0626%2B7%2F5uV9gY%2FeM%2BpLQZfvaQKzgqSzs0tYI9lG%2FdxLNFNWXIbOho5mGg6ffNMNLL%2FI4%2FewXirB94LvyRW1ravzAsPYDgsyxUf8htx7r5gBkHVvDG5LH2wB%2Fh5u%2FflXVRA6FXKnz4oigzOoTSI6LpTwZqoYk%2Beq7mgSf1OLegsrOMuXEYMmaSj8%2F%2BjaVdA%2FF%2FzBsw9XTJN9AjCEzNHDBjqkAbkF9EitUilvFloFwUECXZCvJrmmRrzzplwNV2pyqEnPg4W7ENzYaf04fdgsA%2FbxOWXasebMgJpJuxUbPGcf72IVlNrHmI6r6qZ90PKnzXtbZ%2FTA%2Bm3pVL2Q40yKYUNJfQADPdQIz%2Fq%2FCzwxI3lhsFC0ksrS16n4uEPSuohh9l61ZGg0S%2B2JNBLHoGnSUnn9tYqE1zI%2FeJzwUCs7hICnB2D82BZJ&X-Amz-Signature=7a4ff7f1b4dffe3f11123f5cb342516191145452074b6fa59e08a5ecbe710f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
