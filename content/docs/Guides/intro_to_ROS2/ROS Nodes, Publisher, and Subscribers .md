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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLOIW6R%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOmXYmwT0mELrQQIGWBLrSigdQI1X3%2Ft1kS0KTDsOg4AiBbEDNsbA4n9rDWjqizCXefyMPSz93CggqfcfGLLFOkQCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7i5KFllhYSeqqjlKtwDrDscg60wVQozuF5j9At2xtk5U1etjQN0MbOs7H6NEbocFSnkpi0UaJ1JDPFCIXwFI5JGDMZddXo8JeZy1abuDE9U7Xri3O%2Fl7DFGUFV%2FJrJRV7ZabPLCNxDa0kIFSiFw%2F%2FY6o8QILaFOtG5Tboag%2BDMb1UzD1KM1NJPtUyqkClQw2ji%2BXvrWW%2BqdWmsP%2BdQ2yf1CpT9wyjeQuN4aHlV%2Buc08ztCRk5QiQRfNboobKFT1isaoSK7gBcfeRaIHyeemtkDpZatxLv%2BQ3tDmIH4od2EfOX2isE6v8uU%2BUX%2BXx6tHcHDQglunmWpxH6itOIkcozaRPy4kGpZOsi5WNdu2AWhDupckddEu%2F1fj2v4b7KymnokUYhp3xBGXoFKH0psWa%2F%2FcEgT8xZGa5wMo5q7RFWOjSd%2BQ2YAWx1tnKTCVeqRQAjNSMDmIr9H2gMBH5KqkX9NArGiKy%2FKWLGd2ySxMMQgWgw1K8j1L25UmStKtQaZou%2B4qRLfdlINAceJZv2gWBUxNrCnrUktR4KJ4L8GmpdwgnYvTPNT5iVVcXDGNWA1PEgYbWDNc%2FJ1mw5U2gp6TmNTkp6JCpK%2BdkkayGMz8kZsy9PqjNxnnul6ObEiUhP78fDAlOwqayjPAT18woKSNwwY6pgEjcJS%2FxjD8b7%2FEoyb%2FTj3X6JYCE8Z9KUxOIk9Epnsc9e%2FaGt0fIZibuBYQkxHhC1hPbStxeLwcugv8HyceDvlmf4FrHSS%2FWwPpXgPcwnoWq8RUlUWHu78CyI1gnVO2oU1PO8IMaObAyowia%2FVFIHyh6Ksj7ApCeZFSAv8HdE4KGDAuyO8JScI3cxCqhUUytCq48m%2BmbQdfhIv4ragVJ9NoH%2BsQFiHn&X-Amz-Signature=5bd29d0606488e3e625ece6452f2a46bc9943a00d1206bbae83fc3a1e360f38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLOIW6R%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOmXYmwT0mELrQQIGWBLrSigdQI1X3%2Ft1kS0KTDsOg4AiBbEDNsbA4n9rDWjqizCXefyMPSz93CggqfcfGLLFOkQCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7i5KFllhYSeqqjlKtwDrDscg60wVQozuF5j9At2xtk5U1etjQN0MbOs7H6NEbocFSnkpi0UaJ1JDPFCIXwFI5JGDMZddXo8JeZy1abuDE9U7Xri3O%2Fl7DFGUFV%2FJrJRV7ZabPLCNxDa0kIFSiFw%2F%2FY6o8QILaFOtG5Tboag%2BDMb1UzD1KM1NJPtUyqkClQw2ji%2BXvrWW%2BqdWmsP%2BdQ2yf1CpT9wyjeQuN4aHlV%2Buc08ztCRk5QiQRfNboobKFT1isaoSK7gBcfeRaIHyeemtkDpZatxLv%2BQ3tDmIH4od2EfOX2isE6v8uU%2BUX%2BXx6tHcHDQglunmWpxH6itOIkcozaRPy4kGpZOsi5WNdu2AWhDupckddEu%2F1fj2v4b7KymnokUYhp3xBGXoFKH0psWa%2F%2FcEgT8xZGa5wMo5q7RFWOjSd%2BQ2YAWx1tnKTCVeqRQAjNSMDmIr9H2gMBH5KqkX9NArGiKy%2FKWLGd2ySxMMQgWgw1K8j1L25UmStKtQaZou%2B4qRLfdlINAceJZv2gWBUxNrCnrUktR4KJ4L8GmpdwgnYvTPNT5iVVcXDGNWA1PEgYbWDNc%2FJ1mw5U2gp6TmNTkp6JCpK%2BdkkayGMz8kZsy9PqjNxnnul6ObEiUhP78fDAlOwqayjPAT18woKSNwwY6pgEjcJS%2FxjD8b7%2FEoyb%2FTj3X6JYCE8Z9KUxOIk9Epnsc9e%2FaGt0fIZibuBYQkxHhC1hPbStxeLwcugv8HyceDvlmf4FrHSS%2FWwPpXgPcwnoWq8RUlUWHu78CyI1gnVO2oU1PO8IMaObAyowia%2FVFIHyh6Ksj7ApCeZFSAv8HdE4KGDAuyO8JScI3cxCqhUUytCq48m%2BmbQdfhIv4ragVJ9NoH%2BsQFiHn&X-Amz-Signature=db0dacd2016edffe74cf727fb7cc6f30ca91b2248a636f78fc8cbe39045d616a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLOIW6R%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOmXYmwT0mELrQQIGWBLrSigdQI1X3%2Ft1kS0KTDsOg4AiBbEDNsbA4n9rDWjqizCXefyMPSz93CggqfcfGLLFOkQCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7i5KFllhYSeqqjlKtwDrDscg60wVQozuF5j9At2xtk5U1etjQN0MbOs7H6NEbocFSnkpi0UaJ1JDPFCIXwFI5JGDMZddXo8JeZy1abuDE9U7Xri3O%2Fl7DFGUFV%2FJrJRV7ZabPLCNxDa0kIFSiFw%2F%2FY6o8QILaFOtG5Tboag%2BDMb1UzD1KM1NJPtUyqkClQw2ji%2BXvrWW%2BqdWmsP%2BdQ2yf1CpT9wyjeQuN4aHlV%2Buc08ztCRk5QiQRfNboobKFT1isaoSK7gBcfeRaIHyeemtkDpZatxLv%2BQ3tDmIH4od2EfOX2isE6v8uU%2BUX%2BXx6tHcHDQglunmWpxH6itOIkcozaRPy4kGpZOsi5WNdu2AWhDupckddEu%2F1fj2v4b7KymnokUYhp3xBGXoFKH0psWa%2F%2FcEgT8xZGa5wMo5q7RFWOjSd%2BQ2YAWx1tnKTCVeqRQAjNSMDmIr9H2gMBH5KqkX9NArGiKy%2FKWLGd2ySxMMQgWgw1K8j1L25UmStKtQaZou%2B4qRLfdlINAceJZv2gWBUxNrCnrUktR4KJ4L8GmpdwgnYvTPNT5iVVcXDGNWA1PEgYbWDNc%2FJ1mw5U2gp6TmNTkp6JCpK%2BdkkayGMz8kZsy9PqjNxnnul6ObEiUhP78fDAlOwqayjPAT18woKSNwwY6pgEjcJS%2FxjD8b7%2FEoyb%2FTj3X6JYCE8Z9KUxOIk9Epnsc9e%2FaGt0fIZibuBYQkxHhC1hPbStxeLwcugv8HyceDvlmf4FrHSS%2FWwPpXgPcwnoWq8RUlUWHu78CyI1gnVO2oU1PO8IMaObAyowia%2FVFIHyh6Ksj7ApCeZFSAv8HdE4KGDAuyO8JScI3cxCqhUUytCq48m%2BmbQdfhIv4ragVJ9NoH%2BsQFiHn&X-Amz-Signature=71961496abf8c32edfefc4d6c974fe67ced48e3c772f30fbb40a7de2e744dbcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLOIW6R%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOmXYmwT0mELrQQIGWBLrSigdQI1X3%2Ft1kS0KTDsOg4AiBbEDNsbA4n9rDWjqizCXefyMPSz93CggqfcfGLLFOkQCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7i5KFllhYSeqqjlKtwDrDscg60wVQozuF5j9At2xtk5U1etjQN0MbOs7H6NEbocFSnkpi0UaJ1JDPFCIXwFI5JGDMZddXo8JeZy1abuDE9U7Xri3O%2Fl7DFGUFV%2FJrJRV7ZabPLCNxDa0kIFSiFw%2F%2FY6o8QILaFOtG5Tboag%2BDMb1UzD1KM1NJPtUyqkClQw2ji%2BXvrWW%2BqdWmsP%2BdQ2yf1CpT9wyjeQuN4aHlV%2Buc08ztCRk5QiQRfNboobKFT1isaoSK7gBcfeRaIHyeemtkDpZatxLv%2BQ3tDmIH4od2EfOX2isE6v8uU%2BUX%2BXx6tHcHDQglunmWpxH6itOIkcozaRPy4kGpZOsi5WNdu2AWhDupckddEu%2F1fj2v4b7KymnokUYhp3xBGXoFKH0psWa%2F%2FcEgT8xZGa5wMo5q7RFWOjSd%2BQ2YAWx1tnKTCVeqRQAjNSMDmIr9H2gMBH5KqkX9NArGiKy%2FKWLGd2ySxMMQgWgw1K8j1L25UmStKtQaZou%2B4qRLfdlINAceJZv2gWBUxNrCnrUktR4KJ4L8GmpdwgnYvTPNT5iVVcXDGNWA1PEgYbWDNc%2FJ1mw5U2gp6TmNTkp6JCpK%2BdkkayGMz8kZsy9PqjNxnnul6ObEiUhP78fDAlOwqayjPAT18woKSNwwY6pgEjcJS%2FxjD8b7%2FEoyb%2FTj3X6JYCE8Z9KUxOIk9Epnsc9e%2FaGt0fIZibuBYQkxHhC1hPbStxeLwcugv8HyceDvlmf4FrHSS%2FWwPpXgPcwnoWq8RUlUWHu78CyI1gnVO2oU1PO8IMaObAyowia%2FVFIHyh6Ksj7ApCeZFSAv8HdE4KGDAuyO8JScI3cxCqhUUytCq48m%2BmbQdfhIv4ragVJ9NoH%2BsQFiHn&X-Amz-Signature=d1f22c88a9dece6f367763526d6a239eca0fd4f7b808abce22032261a44b2849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLOIW6R%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOmXYmwT0mELrQQIGWBLrSigdQI1X3%2Ft1kS0KTDsOg4AiBbEDNsbA4n9rDWjqizCXefyMPSz93CggqfcfGLLFOkQCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7i5KFllhYSeqqjlKtwDrDscg60wVQozuF5j9At2xtk5U1etjQN0MbOs7H6NEbocFSnkpi0UaJ1JDPFCIXwFI5JGDMZddXo8JeZy1abuDE9U7Xri3O%2Fl7DFGUFV%2FJrJRV7ZabPLCNxDa0kIFSiFw%2F%2FY6o8QILaFOtG5Tboag%2BDMb1UzD1KM1NJPtUyqkClQw2ji%2BXvrWW%2BqdWmsP%2BdQ2yf1CpT9wyjeQuN4aHlV%2Buc08ztCRk5QiQRfNboobKFT1isaoSK7gBcfeRaIHyeemtkDpZatxLv%2BQ3tDmIH4od2EfOX2isE6v8uU%2BUX%2BXx6tHcHDQglunmWpxH6itOIkcozaRPy4kGpZOsi5WNdu2AWhDupckddEu%2F1fj2v4b7KymnokUYhp3xBGXoFKH0psWa%2F%2FcEgT8xZGa5wMo5q7RFWOjSd%2BQ2YAWx1tnKTCVeqRQAjNSMDmIr9H2gMBH5KqkX9NArGiKy%2FKWLGd2ySxMMQgWgw1K8j1L25UmStKtQaZou%2B4qRLfdlINAceJZv2gWBUxNrCnrUktR4KJ4L8GmpdwgnYvTPNT5iVVcXDGNWA1PEgYbWDNc%2FJ1mw5U2gp6TmNTkp6JCpK%2BdkkayGMz8kZsy9PqjNxnnul6ObEiUhP78fDAlOwqayjPAT18woKSNwwY6pgEjcJS%2FxjD8b7%2FEoyb%2FTj3X6JYCE8Z9KUxOIk9Epnsc9e%2FaGt0fIZibuBYQkxHhC1hPbStxeLwcugv8HyceDvlmf4FrHSS%2FWwPpXgPcwnoWq8RUlUWHu78CyI1gnVO2oU1PO8IMaObAyowia%2FVFIHyh6Ksj7ApCeZFSAv8HdE4KGDAuyO8JScI3cxCqhUUytCq48m%2BmbQdfhIv4ragVJ9NoH%2BsQFiHn&X-Amz-Signature=c7b69348c1fe15da3d155ff2eb163e16cf03bf979a2ed86fedf0a847bb6c00f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLOIW6R%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOmXYmwT0mELrQQIGWBLrSigdQI1X3%2Ft1kS0KTDsOg4AiBbEDNsbA4n9rDWjqizCXefyMPSz93CggqfcfGLLFOkQCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7i5KFllhYSeqqjlKtwDrDscg60wVQozuF5j9At2xtk5U1etjQN0MbOs7H6NEbocFSnkpi0UaJ1JDPFCIXwFI5JGDMZddXo8JeZy1abuDE9U7Xri3O%2Fl7DFGUFV%2FJrJRV7ZabPLCNxDa0kIFSiFw%2F%2FY6o8QILaFOtG5Tboag%2BDMb1UzD1KM1NJPtUyqkClQw2ji%2BXvrWW%2BqdWmsP%2BdQ2yf1CpT9wyjeQuN4aHlV%2Buc08ztCRk5QiQRfNboobKFT1isaoSK7gBcfeRaIHyeemtkDpZatxLv%2BQ3tDmIH4od2EfOX2isE6v8uU%2BUX%2BXx6tHcHDQglunmWpxH6itOIkcozaRPy4kGpZOsi5WNdu2AWhDupckddEu%2F1fj2v4b7KymnokUYhp3xBGXoFKH0psWa%2F%2FcEgT8xZGa5wMo5q7RFWOjSd%2BQ2YAWx1tnKTCVeqRQAjNSMDmIr9H2gMBH5KqkX9NArGiKy%2FKWLGd2ySxMMQgWgw1K8j1L25UmStKtQaZou%2B4qRLfdlINAceJZv2gWBUxNrCnrUktR4KJ4L8GmpdwgnYvTPNT5iVVcXDGNWA1PEgYbWDNc%2FJ1mw5U2gp6TmNTkp6JCpK%2BdkkayGMz8kZsy9PqjNxnnul6ObEiUhP78fDAlOwqayjPAT18woKSNwwY6pgEjcJS%2FxjD8b7%2FEoyb%2FTj3X6JYCE8Z9KUxOIk9Epnsc9e%2FaGt0fIZibuBYQkxHhC1hPbStxeLwcugv8HyceDvlmf4FrHSS%2FWwPpXgPcwnoWq8RUlUWHu78CyI1gnVO2oU1PO8IMaObAyowia%2FVFIHyh6Ksj7ApCeZFSAv8HdE4KGDAuyO8JScI3cxCqhUUytCq48m%2BmbQdfhIv4ragVJ9NoH%2BsQFiHn&X-Amz-Signature=bada99f8b1f72e0f4b770c8f5e6b7dff88c9ad87678fb2d79c7eb1fe1097c1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLOIW6R%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOmXYmwT0mELrQQIGWBLrSigdQI1X3%2Ft1kS0KTDsOg4AiBbEDNsbA4n9rDWjqizCXefyMPSz93CggqfcfGLLFOkQCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7i5KFllhYSeqqjlKtwDrDscg60wVQozuF5j9At2xtk5U1etjQN0MbOs7H6NEbocFSnkpi0UaJ1JDPFCIXwFI5JGDMZddXo8JeZy1abuDE9U7Xri3O%2Fl7DFGUFV%2FJrJRV7ZabPLCNxDa0kIFSiFw%2F%2FY6o8QILaFOtG5Tboag%2BDMb1UzD1KM1NJPtUyqkClQw2ji%2BXvrWW%2BqdWmsP%2BdQ2yf1CpT9wyjeQuN4aHlV%2Buc08ztCRk5QiQRfNboobKFT1isaoSK7gBcfeRaIHyeemtkDpZatxLv%2BQ3tDmIH4od2EfOX2isE6v8uU%2BUX%2BXx6tHcHDQglunmWpxH6itOIkcozaRPy4kGpZOsi5WNdu2AWhDupckddEu%2F1fj2v4b7KymnokUYhp3xBGXoFKH0psWa%2F%2FcEgT8xZGa5wMo5q7RFWOjSd%2BQ2YAWx1tnKTCVeqRQAjNSMDmIr9H2gMBH5KqkX9NArGiKy%2FKWLGd2ySxMMQgWgw1K8j1L25UmStKtQaZou%2B4qRLfdlINAceJZv2gWBUxNrCnrUktR4KJ4L8GmpdwgnYvTPNT5iVVcXDGNWA1PEgYbWDNc%2FJ1mw5U2gp6TmNTkp6JCpK%2BdkkayGMz8kZsy9PqjNxnnul6ObEiUhP78fDAlOwqayjPAT18woKSNwwY6pgEjcJS%2FxjD8b7%2FEoyb%2FTj3X6JYCE8Z9KUxOIk9Epnsc9e%2FaGt0fIZibuBYQkxHhC1hPbStxeLwcugv8HyceDvlmf4FrHSS%2FWwPpXgPcwnoWq8RUlUWHu78CyI1gnVO2oU1PO8IMaObAyowia%2FVFIHyh6Ksj7ApCeZFSAv8HdE4KGDAuyO8JScI3cxCqhUUytCq48m%2BmbQdfhIv4ragVJ9NoH%2BsQFiHn&X-Amz-Signature=2a62f8b349a9ff65cd69bb63654f842a77e39cf9f9a6f77633e50a755330d8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLOIW6R%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOmXYmwT0mELrQQIGWBLrSigdQI1X3%2Ft1kS0KTDsOg4AiBbEDNsbA4n9rDWjqizCXefyMPSz93CggqfcfGLLFOkQCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7i5KFllhYSeqqjlKtwDrDscg60wVQozuF5j9At2xtk5U1etjQN0MbOs7H6NEbocFSnkpi0UaJ1JDPFCIXwFI5JGDMZddXo8JeZy1abuDE9U7Xri3O%2Fl7DFGUFV%2FJrJRV7ZabPLCNxDa0kIFSiFw%2F%2FY6o8QILaFOtG5Tboag%2BDMb1UzD1KM1NJPtUyqkClQw2ji%2BXvrWW%2BqdWmsP%2BdQ2yf1CpT9wyjeQuN4aHlV%2Buc08ztCRk5QiQRfNboobKFT1isaoSK7gBcfeRaIHyeemtkDpZatxLv%2BQ3tDmIH4od2EfOX2isE6v8uU%2BUX%2BXx6tHcHDQglunmWpxH6itOIkcozaRPy4kGpZOsi5WNdu2AWhDupckddEu%2F1fj2v4b7KymnokUYhp3xBGXoFKH0psWa%2F%2FcEgT8xZGa5wMo5q7RFWOjSd%2BQ2YAWx1tnKTCVeqRQAjNSMDmIr9H2gMBH5KqkX9NArGiKy%2FKWLGd2ySxMMQgWgw1K8j1L25UmStKtQaZou%2B4qRLfdlINAceJZv2gWBUxNrCnrUktR4KJ4L8GmpdwgnYvTPNT5iVVcXDGNWA1PEgYbWDNc%2FJ1mw5U2gp6TmNTkp6JCpK%2BdkkayGMz8kZsy9PqjNxnnul6ObEiUhP78fDAlOwqayjPAT18woKSNwwY6pgEjcJS%2FxjD8b7%2FEoyb%2FTj3X6JYCE8Z9KUxOIk9Epnsc9e%2FaGt0fIZibuBYQkxHhC1hPbStxeLwcugv8HyceDvlmf4FrHSS%2FWwPpXgPcwnoWq8RUlUWHu78CyI1gnVO2oU1PO8IMaObAyowia%2FVFIHyh6Ksj7ApCeZFSAv8HdE4KGDAuyO8JScI3cxCqhUUytCq48m%2BmbQdfhIv4ragVJ9NoH%2BsQFiHn&X-Amz-Signature=2564f7f5f9052d688724702418a18caf1649ce268e0a83e16c3ec333dffc4f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
