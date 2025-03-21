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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGLOH6S%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD8dB0Sh3obPPXG%2Bon%2FESC8apKfqNAtL717XXNrf2%2BnqQIhAJuKrP5jcoTzh%2FtDtADOSdqtepA8aknWdYoMLQ6SRLC3KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqeGCkhzv8mD6ORNIq3AOcq9Ejb030xeT9fvgp9X6rRYPbyZP9O%2FecuC2bWJy32T4Qaau6s0ezbnUh6LDaM5N6BpIqGMwX2USEwMoM4Vni7jLsZDaLHaRxnuZiY4cQZwwayGOhHQsAKLmncn7JTn3351YjM2QXcCX%2B4szs5VYYY8mXrMwrpwPGVlZgbEGE%2Bi7dDAMGC%2FHI%2FEWFY1zAx4702D4O0SAuT9W%2BEfESn1lhfP6amgdANMYs59i1iMeHPJAZ3BNPpSG7sIcUBbewAdZuAHaRlb%2B3ex5uO5ibryNSqKe%2BuY%2FyjD6keVEjnhsmx4JrdsFTSkeQLzCRi91c0%2B9xtawcmKVeY5zWVhQpJz5oUlE9O7WSWMnwZOn%2BfLQvgbcHUbW81blkerxLsk39Fm5OP2Ug1y2xrHegLbz8h2sNWCNptUZ5F%2Bl66G%2BarLZKaSlFSl0Hpfjh630kfbAGYVs7QOzA8Oi824r27RmzvSmyeyjlIDAVIlreO6dK3MX8AHxJQBM1VSwJ2EhVDDh7S6WSQ9YmS75pp8KLO3mRbhdk9vE4733rlBeLTzrJFgWIhin5dp0r3y3wCJYuoiOtTC%2F1Vv%2FzxQbHSIQIcRXEO5eQ0fEsqIkveKhNKOme9OjyyQ1J4u%2FP5qPXbnZ%2F4TCL2%2Fa%2BBjqkAW38iIzg1ZSs%2Fa9RdLxBCk33RvaUaFlPjOu47gY0bBMJH87%2FxGM1qCwyPC0DhVnSGv8sCdDfstwVh0c%2F%2B5bL4lD1b3YGUkIrFa40AdGKhOgDsSKgy2yAXcp%2Bqii4mLoMuoxXX8WZEeeRgfYKNM%2FDFTlOgOYIL%2Bt6GPemoLkvdqS7v2r2wfsJrfbJvqxI6x8X8eHyOG2TGOv79QPK2jLLmjceniC%2B&X-Amz-Signature=40ddf86c5cf9950a997badc3b7afefb57a00b034cdca937c39311e0fbb56090c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGLOH6S%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD8dB0Sh3obPPXG%2Bon%2FESC8apKfqNAtL717XXNrf2%2BnqQIhAJuKrP5jcoTzh%2FtDtADOSdqtepA8aknWdYoMLQ6SRLC3KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqeGCkhzv8mD6ORNIq3AOcq9Ejb030xeT9fvgp9X6rRYPbyZP9O%2FecuC2bWJy32T4Qaau6s0ezbnUh6LDaM5N6BpIqGMwX2USEwMoM4Vni7jLsZDaLHaRxnuZiY4cQZwwayGOhHQsAKLmncn7JTn3351YjM2QXcCX%2B4szs5VYYY8mXrMwrpwPGVlZgbEGE%2Bi7dDAMGC%2FHI%2FEWFY1zAx4702D4O0SAuT9W%2BEfESn1lhfP6amgdANMYs59i1iMeHPJAZ3BNPpSG7sIcUBbewAdZuAHaRlb%2B3ex5uO5ibryNSqKe%2BuY%2FyjD6keVEjnhsmx4JrdsFTSkeQLzCRi91c0%2B9xtawcmKVeY5zWVhQpJz5oUlE9O7WSWMnwZOn%2BfLQvgbcHUbW81blkerxLsk39Fm5OP2Ug1y2xrHegLbz8h2sNWCNptUZ5F%2Bl66G%2BarLZKaSlFSl0Hpfjh630kfbAGYVs7QOzA8Oi824r27RmzvSmyeyjlIDAVIlreO6dK3MX8AHxJQBM1VSwJ2EhVDDh7S6WSQ9YmS75pp8KLO3mRbhdk9vE4733rlBeLTzrJFgWIhin5dp0r3y3wCJYuoiOtTC%2F1Vv%2FzxQbHSIQIcRXEO5eQ0fEsqIkveKhNKOme9OjyyQ1J4u%2FP5qPXbnZ%2F4TCL2%2Fa%2BBjqkAW38iIzg1ZSs%2Fa9RdLxBCk33RvaUaFlPjOu47gY0bBMJH87%2FxGM1qCwyPC0DhVnSGv8sCdDfstwVh0c%2F%2B5bL4lD1b3YGUkIrFa40AdGKhOgDsSKgy2yAXcp%2Bqii4mLoMuoxXX8WZEeeRgfYKNM%2FDFTlOgOYIL%2Bt6GPemoLkvdqS7v2r2wfsJrfbJvqxI6x8X8eHyOG2TGOv79QPK2jLLmjceniC%2B&X-Amz-Signature=85cdc5327cfb0cec97f02cfdcb61a28fa2a87d46d50fca35362b2d9aba8619d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGLOH6S%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD8dB0Sh3obPPXG%2Bon%2FESC8apKfqNAtL717XXNrf2%2BnqQIhAJuKrP5jcoTzh%2FtDtADOSdqtepA8aknWdYoMLQ6SRLC3KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqeGCkhzv8mD6ORNIq3AOcq9Ejb030xeT9fvgp9X6rRYPbyZP9O%2FecuC2bWJy32T4Qaau6s0ezbnUh6LDaM5N6BpIqGMwX2USEwMoM4Vni7jLsZDaLHaRxnuZiY4cQZwwayGOhHQsAKLmncn7JTn3351YjM2QXcCX%2B4szs5VYYY8mXrMwrpwPGVlZgbEGE%2Bi7dDAMGC%2FHI%2FEWFY1zAx4702D4O0SAuT9W%2BEfESn1lhfP6amgdANMYs59i1iMeHPJAZ3BNPpSG7sIcUBbewAdZuAHaRlb%2B3ex5uO5ibryNSqKe%2BuY%2FyjD6keVEjnhsmx4JrdsFTSkeQLzCRi91c0%2B9xtawcmKVeY5zWVhQpJz5oUlE9O7WSWMnwZOn%2BfLQvgbcHUbW81blkerxLsk39Fm5OP2Ug1y2xrHegLbz8h2sNWCNptUZ5F%2Bl66G%2BarLZKaSlFSl0Hpfjh630kfbAGYVs7QOzA8Oi824r27RmzvSmyeyjlIDAVIlreO6dK3MX8AHxJQBM1VSwJ2EhVDDh7S6WSQ9YmS75pp8KLO3mRbhdk9vE4733rlBeLTzrJFgWIhin5dp0r3y3wCJYuoiOtTC%2F1Vv%2FzxQbHSIQIcRXEO5eQ0fEsqIkveKhNKOme9OjyyQ1J4u%2FP5qPXbnZ%2F4TCL2%2Fa%2BBjqkAW38iIzg1ZSs%2Fa9RdLxBCk33RvaUaFlPjOu47gY0bBMJH87%2FxGM1qCwyPC0DhVnSGv8sCdDfstwVh0c%2F%2B5bL4lD1b3YGUkIrFa40AdGKhOgDsSKgy2yAXcp%2Bqii4mLoMuoxXX8WZEeeRgfYKNM%2FDFTlOgOYIL%2Bt6GPemoLkvdqS7v2r2wfsJrfbJvqxI6x8X8eHyOG2TGOv79QPK2jLLmjceniC%2B&X-Amz-Signature=91a6bd88e1ea568700b8baa26c7f09e11b7fbd0f785b2a8f6514f51328e7655e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGLOH6S%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD8dB0Sh3obPPXG%2Bon%2FESC8apKfqNAtL717XXNrf2%2BnqQIhAJuKrP5jcoTzh%2FtDtADOSdqtepA8aknWdYoMLQ6SRLC3KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqeGCkhzv8mD6ORNIq3AOcq9Ejb030xeT9fvgp9X6rRYPbyZP9O%2FecuC2bWJy32T4Qaau6s0ezbnUh6LDaM5N6BpIqGMwX2USEwMoM4Vni7jLsZDaLHaRxnuZiY4cQZwwayGOhHQsAKLmncn7JTn3351YjM2QXcCX%2B4szs5VYYY8mXrMwrpwPGVlZgbEGE%2Bi7dDAMGC%2FHI%2FEWFY1zAx4702D4O0SAuT9W%2BEfESn1lhfP6amgdANMYs59i1iMeHPJAZ3BNPpSG7sIcUBbewAdZuAHaRlb%2B3ex5uO5ibryNSqKe%2BuY%2FyjD6keVEjnhsmx4JrdsFTSkeQLzCRi91c0%2B9xtawcmKVeY5zWVhQpJz5oUlE9O7WSWMnwZOn%2BfLQvgbcHUbW81blkerxLsk39Fm5OP2Ug1y2xrHegLbz8h2sNWCNptUZ5F%2Bl66G%2BarLZKaSlFSl0Hpfjh630kfbAGYVs7QOzA8Oi824r27RmzvSmyeyjlIDAVIlreO6dK3MX8AHxJQBM1VSwJ2EhVDDh7S6WSQ9YmS75pp8KLO3mRbhdk9vE4733rlBeLTzrJFgWIhin5dp0r3y3wCJYuoiOtTC%2F1Vv%2FzxQbHSIQIcRXEO5eQ0fEsqIkveKhNKOme9OjyyQ1J4u%2FP5qPXbnZ%2F4TCL2%2Fa%2BBjqkAW38iIzg1ZSs%2Fa9RdLxBCk33RvaUaFlPjOu47gY0bBMJH87%2FxGM1qCwyPC0DhVnSGv8sCdDfstwVh0c%2F%2B5bL4lD1b3YGUkIrFa40AdGKhOgDsSKgy2yAXcp%2Bqii4mLoMuoxXX8WZEeeRgfYKNM%2FDFTlOgOYIL%2Bt6GPemoLkvdqS7v2r2wfsJrfbJvqxI6x8X8eHyOG2TGOv79QPK2jLLmjceniC%2B&X-Amz-Signature=0d19b6a0f53bd3002a9202942365ec2e5c6d5880a69bde91429969e20a6751b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGLOH6S%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD8dB0Sh3obPPXG%2Bon%2FESC8apKfqNAtL717XXNrf2%2BnqQIhAJuKrP5jcoTzh%2FtDtADOSdqtepA8aknWdYoMLQ6SRLC3KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqeGCkhzv8mD6ORNIq3AOcq9Ejb030xeT9fvgp9X6rRYPbyZP9O%2FecuC2bWJy32T4Qaau6s0ezbnUh6LDaM5N6BpIqGMwX2USEwMoM4Vni7jLsZDaLHaRxnuZiY4cQZwwayGOhHQsAKLmncn7JTn3351YjM2QXcCX%2B4szs5VYYY8mXrMwrpwPGVlZgbEGE%2Bi7dDAMGC%2FHI%2FEWFY1zAx4702D4O0SAuT9W%2BEfESn1lhfP6amgdANMYs59i1iMeHPJAZ3BNPpSG7sIcUBbewAdZuAHaRlb%2B3ex5uO5ibryNSqKe%2BuY%2FyjD6keVEjnhsmx4JrdsFTSkeQLzCRi91c0%2B9xtawcmKVeY5zWVhQpJz5oUlE9O7WSWMnwZOn%2BfLQvgbcHUbW81blkerxLsk39Fm5OP2Ug1y2xrHegLbz8h2sNWCNptUZ5F%2Bl66G%2BarLZKaSlFSl0Hpfjh630kfbAGYVs7QOzA8Oi824r27RmzvSmyeyjlIDAVIlreO6dK3MX8AHxJQBM1VSwJ2EhVDDh7S6WSQ9YmS75pp8KLO3mRbhdk9vE4733rlBeLTzrJFgWIhin5dp0r3y3wCJYuoiOtTC%2F1Vv%2FzxQbHSIQIcRXEO5eQ0fEsqIkveKhNKOme9OjyyQ1J4u%2FP5qPXbnZ%2F4TCL2%2Fa%2BBjqkAW38iIzg1ZSs%2Fa9RdLxBCk33RvaUaFlPjOu47gY0bBMJH87%2FxGM1qCwyPC0DhVnSGv8sCdDfstwVh0c%2F%2B5bL4lD1b3YGUkIrFa40AdGKhOgDsSKgy2yAXcp%2Bqii4mLoMuoxXX8WZEeeRgfYKNM%2FDFTlOgOYIL%2Bt6GPemoLkvdqS7v2r2wfsJrfbJvqxI6x8X8eHyOG2TGOv79QPK2jLLmjceniC%2B&X-Amz-Signature=be2b5eb4e215f19da61dbaae3a1c2576f0a46b9f5859bfd2ad9ba457f2eb9a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGLOH6S%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD8dB0Sh3obPPXG%2Bon%2FESC8apKfqNAtL717XXNrf2%2BnqQIhAJuKrP5jcoTzh%2FtDtADOSdqtepA8aknWdYoMLQ6SRLC3KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqeGCkhzv8mD6ORNIq3AOcq9Ejb030xeT9fvgp9X6rRYPbyZP9O%2FecuC2bWJy32T4Qaau6s0ezbnUh6LDaM5N6BpIqGMwX2USEwMoM4Vni7jLsZDaLHaRxnuZiY4cQZwwayGOhHQsAKLmncn7JTn3351YjM2QXcCX%2B4szs5VYYY8mXrMwrpwPGVlZgbEGE%2Bi7dDAMGC%2FHI%2FEWFY1zAx4702D4O0SAuT9W%2BEfESn1lhfP6amgdANMYs59i1iMeHPJAZ3BNPpSG7sIcUBbewAdZuAHaRlb%2B3ex5uO5ibryNSqKe%2BuY%2FyjD6keVEjnhsmx4JrdsFTSkeQLzCRi91c0%2B9xtawcmKVeY5zWVhQpJz5oUlE9O7WSWMnwZOn%2BfLQvgbcHUbW81blkerxLsk39Fm5OP2Ug1y2xrHegLbz8h2sNWCNptUZ5F%2Bl66G%2BarLZKaSlFSl0Hpfjh630kfbAGYVs7QOzA8Oi824r27RmzvSmyeyjlIDAVIlreO6dK3MX8AHxJQBM1VSwJ2EhVDDh7S6WSQ9YmS75pp8KLO3mRbhdk9vE4733rlBeLTzrJFgWIhin5dp0r3y3wCJYuoiOtTC%2F1Vv%2FzxQbHSIQIcRXEO5eQ0fEsqIkveKhNKOme9OjyyQ1J4u%2FP5qPXbnZ%2F4TCL2%2Fa%2BBjqkAW38iIzg1ZSs%2Fa9RdLxBCk33RvaUaFlPjOu47gY0bBMJH87%2FxGM1qCwyPC0DhVnSGv8sCdDfstwVh0c%2F%2B5bL4lD1b3YGUkIrFa40AdGKhOgDsSKgy2yAXcp%2Bqii4mLoMuoxXX8WZEeeRgfYKNM%2FDFTlOgOYIL%2Bt6GPemoLkvdqS7v2r2wfsJrfbJvqxI6x8X8eHyOG2TGOv79QPK2jLLmjceniC%2B&X-Amz-Signature=e3769df39352cf52467fd5edf7857ae1f4d4c659aa93178541f4428dd23daefc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGLOH6S%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD8dB0Sh3obPPXG%2Bon%2FESC8apKfqNAtL717XXNrf2%2BnqQIhAJuKrP5jcoTzh%2FtDtADOSdqtepA8aknWdYoMLQ6SRLC3KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqeGCkhzv8mD6ORNIq3AOcq9Ejb030xeT9fvgp9X6rRYPbyZP9O%2FecuC2bWJy32T4Qaau6s0ezbnUh6LDaM5N6BpIqGMwX2USEwMoM4Vni7jLsZDaLHaRxnuZiY4cQZwwayGOhHQsAKLmncn7JTn3351YjM2QXcCX%2B4szs5VYYY8mXrMwrpwPGVlZgbEGE%2Bi7dDAMGC%2FHI%2FEWFY1zAx4702D4O0SAuT9W%2BEfESn1lhfP6amgdANMYs59i1iMeHPJAZ3BNPpSG7sIcUBbewAdZuAHaRlb%2B3ex5uO5ibryNSqKe%2BuY%2FyjD6keVEjnhsmx4JrdsFTSkeQLzCRi91c0%2B9xtawcmKVeY5zWVhQpJz5oUlE9O7WSWMnwZOn%2BfLQvgbcHUbW81blkerxLsk39Fm5OP2Ug1y2xrHegLbz8h2sNWCNptUZ5F%2Bl66G%2BarLZKaSlFSl0Hpfjh630kfbAGYVs7QOzA8Oi824r27RmzvSmyeyjlIDAVIlreO6dK3MX8AHxJQBM1VSwJ2EhVDDh7S6WSQ9YmS75pp8KLO3mRbhdk9vE4733rlBeLTzrJFgWIhin5dp0r3y3wCJYuoiOtTC%2F1Vv%2FzxQbHSIQIcRXEO5eQ0fEsqIkveKhNKOme9OjyyQ1J4u%2FP5qPXbnZ%2F4TCL2%2Fa%2BBjqkAW38iIzg1ZSs%2Fa9RdLxBCk33RvaUaFlPjOu47gY0bBMJH87%2FxGM1qCwyPC0DhVnSGv8sCdDfstwVh0c%2F%2B5bL4lD1b3YGUkIrFa40AdGKhOgDsSKgy2yAXcp%2Bqii4mLoMuoxXX8WZEeeRgfYKNM%2FDFTlOgOYIL%2Bt6GPemoLkvdqS7v2r2wfsJrfbJvqxI6x8X8eHyOG2TGOv79QPK2jLLmjceniC%2B&X-Amz-Signature=e9ba0d17cc5fcb8cc1995c5ef60f223dc369e390e22a4fcbdd7ffb221439aba8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGLOH6S%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD8dB0Sh3obPPXG%2Bon%2FESC8apKfqNAtL717XXNrf2%2BnqQIhAJuKrP5jcoTzh%2FtDtADOSdqtepA8aknWdYoMLQ6SRLC3KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqeGCkhzv8mD6ORNIq3AOcq9Ejb030xeT9fvgp9X6rRYPbyZP9O%2FecuC2bWJy32T4Qaau6s0ezbnUh6LDaM5N6BpIqGMwX2USEwMoM4Vni7jLsZDaLHaRxnuZiY4cQZwwayGOhHQsAKLmncn7JTn3351YjM2QXcCX%2B4szs5VYYY8mXrMwrpwPGVlZgbEGE%2Bi7dDAMGC%2FHI%2FEWFY1zAx4702D4O0SAuT9W%2BEfESn1lhfP6amgdANMYs59i1iMeHPJAZ3BNPpSG7sIcUBbewAdZuAHaRlb%2B3ex5uO5ibryNSqKe%2BuY%2FyjD6keVEjnhsmx4JrdsFTSkeQLzCRi91c0%2B9xtawcmKVeY5zWVhQpJz5oUlE9O7WSWMnwZOn%2BfLQvgbcHUbW81blkerxLsk39Fm5OP2Ug1y2xrHegLbz8h2sNWCNptUZ5F%2Bl66G%2BarLZKaSlFSl0Hpfjh630kfbAGYVs7QOzA8Oi824r27RmzvSmyeyjlIDAVIlreO6dK3MX8AHxJQBM1VSwJ2EhVDDh7S6WSQ9YmS75pp8KLO3mRbhdk9vE4733rlBeLTzrJFgWIhin5dp0r3y3wCJYuoiOtTC%2F1Vv%2FzxQbHSIQIcRXEO5eQ0fEsqIkveKhNKOme9OjyyQ1J4u%2FP5qPXbnZ%2F4TCL2%2Fa%2BBjqkAW38iIzg1ZSs%2Fa9RdLxBCk33RvaUaFlPjOu47gY0bBMJH87%2FxGM1qCwyPC0DhVnSGv8sCdDfstwVh0c%2F%2B5bL4lD1b3YGUkIrFa40AdGKhOgDsSKgy2yAXcp%2Bqii4mLoMuoxXX8WZEeeRgfYKNM%2FDFTlOgOYIL%2Bt6GPemoLkvdqS7v2r2wfsJrfbJvqxI6x8X8eHyOG2TGOv79QPK2jLLmjceniC%2B&X-Amz-Signature=995ccbd2423f5b0f5db2e548e1c962296ad45ae00f57ea3d31f5d010ba61cfe6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
