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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIVYAJC%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhg14s6W9pJ3npl9iLckqhuU%2BhHKCQFIn7Y8yiPOFTsAiB1B0CNYbP%2FpdmUJmGXh6Qgn55coYA2du%2FSZ094J5kyxCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMjSY9UWg%2BAbB9Ym68KtwD8pUUHuxrWQlPhwqiCUagaCeKkcSSTmELkoWST9GulQ0dJm3Xo%2Bm%2B5ctwpyfdVf3iy8rItiVUzdHR10IzxXuTEWcUril3KjOKrlaUXC6ZXuKTJK4Yj1%2F7rB0aTB%2FSyo4lGRD6vcpbwZ9fNMT%2BZUYe5Bm27nv6omLBmwUAlCKE8RiO3ICzWAKeO6jPxfGB3mdzh1QDJ1Sg1MMGUOHXpL4mJw6IbDWCL3ZWo8Wewje3B0rJirXGYx5vz657eTqlX4Z%2FfyJrA4VOjA2FK3buhA3617JXNcCx%2FyxeBxDlKiYYGhdiaVtto7KhKPVzhgHKAKqIvcr1SxoEI2jButhNHL6HLbfXhRRRLXMe05mYDs4rCIPNo6eRsCURouu5h%2BwHrg4koXIX9q7YuTixJK0yAW6l6082h2Gfp8KWZk%2FJuefZuY%2FRhu7G1S%2BiyclLUTFacZ8n%2Bnfbf%2F7D3u1j%2FAowt32BHAsKn0%2FY0y70r14qStdV%2FzVFqeh7WIdYvMStnpNuif9NlmmBJGdX5AdFTL7VKWmTzfYAP7BH8eEMXAgConElD2DTE7b%2BYdFtXEiG0fK0MJAWI9SEDmM6v9Z7xlvIX4qhN%2F64oxCI3rmQr5xpEDMdC6vA5bcPqTqTHRQqpbow49bzvQY6pgFPvcJ5G6BCS%2Bi%2B46FqH5TQqkxyrUo7ygt8aYbvreq8%2FsHOpmJWRrFb7Z8hHW40k2DTX%2BxgVXJmGxliIEkf2l7VR9BtIiEaFsEaWGM4G0grsO8%2BrO9jTAfZe8fsl5ZIF7vzKUAxkDkRWSphTqclyOABRDPeczhqaUKPHlGb3lzirslmg7RO0ceelpb2NYILVK%2FrnDblI3%2BkJhrrlLvxJMAa4z%2B87soo&X-Amz-Signature=ba829faccaee78ddc72fe62c36f9d682861c26b767b189d36bd75b2b7a7323ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIVYAJC%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhg14s6W9pJ3npl9iLckqhuU%2BhHKCQFIn7Y8yiPOFTsAiB1B0CNYbP%2FpdmUJmGXh6Qgn55coYA2du%2FSZ094J5kyxCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMjSY9UWg%2BAbB9Ym68KtwD8pUUHuxrWQlPhwqiCUagaCeKkcSSTmELkoWST9GulQ0dJm3Xo%2Bm%2B5ctwpyfdVf3iy8rItiVUzdHR10IzxXuTEWcUril3KjOKrlaUXC6ZXuKTJK4Yj1%2F7rB0aTB%2FSyo4lGRD6vcpbwZ9fNMT%2BZUYe5Bm27nv6omLBmwUAlCKE8RiO3ICzWAKeO6jPxfGB3mdzh1QDJ1Sg1MMGUOHXpL4mJw6IbDWCL3ZWo8Wewje3B0rJirXGYx5vz657eTqlX4Z%2FfyJrA4VOjA2FK3buhA3617JXNcCx%2FyxeBxDlKiYYGhdiaVtto7KhKPVzhgHKAKqIvcr1SxoEI2jButhNHL6HLbfXhRRRLXMe05mYDs4rCIPNo6eRsCURouu5h%2BwHrg4koXIX9q7YuTixJK0yAW6l6082h2Gfp8KWZk%2FJuefZuY%2FRhu7G1S%2BiyclLUTFacZ8n%2Bnfbf%2F7D3u1j%2FAowt32BHAsKn0%2FY0y70r14qStdV%2FzVFqeh7WIdYvMStnpNuif9NlmmBJGdX5AdFTL7VKWmTzfYAP7BH8eEMXAgConElD2DTE7b%2BYdFtXEiG0fK0MJAWI9SEDmM6v9Z7xlvIX4qhN%2F64oxCI3rmQr5xpEDMdC6vA5bcPqTqTHRQqpbow49bzvQY6pgFPvcJ5G6BCS%2Bi%2B46FqH5TQqkxyrUo7ygt8aYbvreq8%2FsHOpmJWRrFb7Z8hHW40k2DTX%2BxgVXJmGxliIEkf2l7VR9BtIiEaFsEaWGM4G0grsO8%2BrO9jTAfZe8fsl5ZIF7vzKUAxkDkRWSphTqclyOABRDPeczhqaUKPHlGb3lzirslmg7RO0ceelpb2NYILVK%2FrnDblI3%2BkJhrrlLvxJMAa4z%2B87soo&X-Amz-Signature=a90f0deef4a766ee2fa14dc28bb821fbc542e103267516b26ac81a76e787b0c5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIVYAJC%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhg14s6W9pJ3npl9iLckqhuU%2BhHKCQFIn7Y8yiPOFTsAiB1B0CNYbP%2FpdmUJmGXh6Qgn55coYA2du%2FSZ094J5kyxCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMjSY9UWg%2BAbB9Ym68KtwD8pUUHuxrWQlPhwqiCUagaCeKkcSSTmELkoWST9GulQ0dJm3Xo%2Bm%2B5ctwpyfdVf3iy8rItiVUzdHR10IzxXuTEWcUril3KjOKrlaUXC6ZXuKTJK4Yj1%2F7rB0aTB%2FSyo4lGRD6vcpbwZ9fNMT%2BZUYe5Bm27nv6omLBmwUAlCKE8RiO3ICzWAKeO6jPxfGB3mdzh1QDJ1Sg1MMGUOHXpL4mJw6IbDWCL3ZWo8Wewje3B0rJirXGYx5vz657eTqlX4Z%2FfyJrA4VOjA2FK3buhA3617JXNcCx%2FyxeBxDlKiYYGhdiaVtto7KhKPVzhgHKAKqIvcr1SxoEI2jButhNHL6HLbfXhRRRLXMe05mYDs4rCIPNo6eRsCURouu5h%2BwHrg4koXIX9q7YuTixJK0yAW6l6082h2Gfp8KWZk%2FJuefZuY%2FRhu7G1S%2BiyclLUTFacZ8n%2Bnfbf%2F7D3u1j%2FAowt32BHAsKn0%2FY0y70r14qStdV%2FzVFqeh7WIdYvMStnpNuif9NlmmBJGdX5AdFTL7VKWmTzfYAP7BH8eEMXAgConElD2DTE7b%2BYdFtXEiG0fK0MJAWI9SEDmM6v9Z7xlvIX4qhN%2F64oxCI3rmQr5xpEDMdC6vA5bcPqTqTHRQqpbow49bzvQY6pgFPvcJ5G6BCS%2Bi%2B46FqH5TQqkxyrUo7ygt8aYbvreq8%2FsHOpmJWRrFb7Z8hHW40k2DTX%2BxgVXJmGxliIEkf2l7VR9BtIiEaFsEaWGM4G0grsO8%2BrO9jTAfZe8fsl5ZIF7vzKUAxkDkRWSphTqclyOABRDPeczhqaUKPHlGb3lzirslmg7RO0ceelpb2NYILVK%2FrnDblI3%2BkJhrrlLvxJMAa4z%2B87soo&X-Amz-Signature=4894f6f8000783e6acc94897578ef156eed5d98c8feb2cc2c790449e8e00bba2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIVYAJC%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhg14s6W9pJ3npl9iLckqhuU%2BhHKCQFIn7Y8yiPOFTsAiB1B0CNYbP%2FpdmUJmGXh6Qgn55coYA2du%2FSZ094J5kyxCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMjSY9UWg%2BAbB9Ym68KtwD8pUUHuxrWQlPhwqiCUagaCeKkcSSTmELkoWST9GulQ0dJm3Xo%2Bm%2B5ctwpyfdVf3iy8rItiVUzdHR10IzxXuTEWcUril3KjOKrlaUXC6ZXuKTJK4Yj1%2F7rB0aTB%2FSyo4lGRD6vcpbwZ9fNMT%2BZUYe5Bm27nv6omLBmwUAlCKE8RiO3ICzWAKeO6jPxfGB3mdzh1QDJ1Sg1MMGUOHXpL4mJw6IbDWCL3ZWo8Wewje3B0rJirXGYx5vz657eTqlX4Z%2FfyJrA4VOjA2FK3buhA3617JXNcCx%2FyxeBxDlKiYYGhdiaVtto7KhKPVzhgHKAKqIvcr1SxoEI2jButhNHL6HLbfXhRRRLXMe05mYDs4rCIPNo6eRsCURouu5h%2BwHrg4koXIX9q7YuTixJK0yAW6l6082h2Gfp8KWZk%2FJuefZuY%2FRhu7G1S%2BiyclLUTFacZ8n%2Bnfbf%2F7D3u1j%2FAowt32BHAsKn0%2FY0y70r14qStdV%2FzVFqeh7WIdYvMStnpNuif9NlmmBJGdX5AdFTL7VKWmTzfYAP7BH8eEMXAgConElD2DTE7b%2BYdFtXEiG0fK0MJAWI9SEDmM6v9Z7xlvIX4qhN%2F64oxCI3rmQr5xpEDMdC6vA5bcPqTqTHRQqpbow49bzvQY6pgFPvcJ5G6BCS%2Bi%2B46FqH5TQqkxyrUo7ygt8aYbvreq8%2FsHOpmJWRrFb7Z8hHW40k2DTX%2BxgVXJmGxliIEkf2l7VR9BtIiEaFsEaWGM4G0grsO8%2BrO9jTAfZe8fsl5ZIF7vzKUAxkDkRWSphTqclyOABRDPeczhqaUKPHlGb3lzirslmg7RO0ceelpb2NYILVK%2FrnDblI3%2BkJhrrlLvxJMAa4z%2B87soo&X-Amz-Signature=fc55483ca6df435eaf568f3adfa8c32aae1c144442e9e90ec67e6b8ff173d1aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIVYAJC%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhg14s6W9pJ3npl9iLckqhuU%2BhHKCQFIn7Y8yiPOFTsAiB1B0CNYbP%2FpdmUJmGXh6Qgn55coYA2du%2FSZ094J5kyxCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMjSY9UWg%2BAbB9Ym68KtwD8pUUHuxrWQlPhwqiCUagaCeKkcSSTmELkoWST9GulQ0dJm3Xo%2Bm%2B5ctwpyfdVf3iy8rItiVUzdHR10IzxXuTEWcUril3KjOKrlaUXC6ZXuKTJK4Yj1%2F7rB0aTB%2FSyo4lGRD6vcpbwZ9fNMT%2BZUYe5Bm27nv6omLBmwUAlCKE8RiO3ICzWAKeO6jPxfGB3mdzh1QDJ1Sg1MMGUOHXpL4mJw6IbDWCL3ZWo8Wewje3B0rJirXGYx5vz657eTqlX4Z%2FfyJrA4VOjA2FK3buhA3617JXNcCx%2FyxeBxDlKiYYGhdiaVtto7KhKPVzhgHKAKqIvcr1SxoEI2jButhNHL6HLbfXhRRRLXMe05mYDs4rCIPNo6eRsCURouu5h%2BwHrg4koXIX9q7YuTixJK0yAW6l6082h2Gfp8KWZk%2FJuefZuY%2FRhu7G1S%2BiyclLUTFacZ8n%2Bnfbf%2F7D3u1j%2FAowt32BHAsKn0%2FY0y70r14qStdV%2FzVFqeh7WIdYvMStnpNuif9NlmmBJGdX5AdFTL7VKWmTzfYAP7BH8eEMXAgConElD2DTE7b%2BYdFtXEiG0fK0MJAWI9SEDmM6v9Z7xlvIX4qhN%2F64oxCI3rmQr5xpEDMdC6vA5bcPqTqTHRQqpbow49bzvQY6pgFPvcJ5G6BCS%2Bi%2B46FqH5TQqkxyrUo7ygt8aYbvreq8%2FsHOpmJWRrFb7Z8hHW40k2DTX%2BxgVXJmGxliIEkf2l7VR9BtIiEaFsEaWGM4G0grsO8%2BrO9jTAfZe8fsl5ZIF7vzKUAxkDkRWSphTqclyOABRDPeczhqaUKPHlGb3lzirslmg7RO0ceelpb2NYILVK%2FrnDblI3%2BkJhrrlLvxJMAa4z%2B87soo&X-Amz-Signature=56cb06520a71a192ef66f4380ae0f44f1ec0da97ddbecbe3591193914c0a411a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIVYAJC%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhg14s6W9pJ3npl9iLckqhuU%2BhHKCQFIn7Y8yiPOFTsAiB1B0CNYbP%2FpdmUJmGXh6Qgn55coYA2du%2FSZ094J5kyxCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMjSY9UWg%2BAbB9Ym68KtwD8pUUHuxrWQlPhwqiCUagaCeKkcSSTmELkoWST9GulQ0dJm3Xo%2Bm%2B5ctwpyfdVf3iy8rItiVUzdHR10IzxXuTEWcUril3KjOKrlaUXC6ZXuKTJK4Yj1%2F7rB0aTB%2FSyo4lGRD6vcpbwZ9fNMT%2BZUYe5Bm27nv6omLBmwUAlCKE8RiO3ICzWAKeO6jPxfGB3mdzh1QDJ1Sg1MMGUOHXpL4mJw6IbDWCL3ZWo8Wewje3B0rJirXGYx5vz657eTqlX4Z%2FfyJrA4VOjA2FK3buhA3617JXNcCx%2FyxeBxDlKiYYGhdiaVtto7KhKPVzhgHKAKqIvcr1SxoEI2jButhNHL6HLbfXhRRRLXMe05mYDs4rCIPNo6eRsCURouu5h%2BwHrg4koXIX9q7YuTixJK0yAW6l6082h2Gfp8KWZk%2FJuefZuY%2FRhu7G1S%2BiyclLUTFacZ8n%2Bnfbf%2F7D3u1j%2FAowt32BHAsKn0%2FY0y70r14qStdV%2FzVFqeh7WIdYvMStnpNuif9NlmmBJGdX5AdFTL7VKWmTzfYAP7BH8eEMXAgConElD2DTE7b%2BYdFtXEiG0fK0MJAWI9SEDmM6v9Z7xlvIX4qhN%2F64oxCI3rmQr5xpEDMdC6vA5bcPqTqTHRQqpbow49bzvQY6pgFPvcJ5G6BCS%2Bi%2B46FqH5TQqkxyrUo7ygt8aYbvreq8%2FsHOpmJWRrFb7Z8hHW40k2DTX%2BxgVXJmGxliIEkf2l7VR9BtIiEaFsEaWGM4G0grsO8%2BrO9jTAfZe8fsl5ZIF7vzKUAxkDkRWSphTqclyOABRDPeczhqaUKPHlGb3lzirslmg7RO0ceelpb2NYILVK%2FrnDblI3%2BkJhrrlLvxJMAa4z%2B87soo&X-Amz-Signature=c12e9ad1d721e38d36c37e672b998f5803a95874f51d666126eabd865239bca8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIVYAJC%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhg14s6W9pJ3npl9iLckqhuU%2BhHKCQFIn7Y8yiPOFTsAiB1B0CNYbP%2FpdmUJmGXh6Qgn55coYA2du%2FSZ094J5kyxCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMjSY9UWg%2BAbB9Ym68KtwD8pUUHuxrWQlPhwqiCUagaCeKkcSSTmELkoWST9GulQ0dJm3Xo%2Bm%2B5ctwpyfdVf3iy8rItiVUzdHR10IzxXuTEWcUril3KjOKrlaUXC6ZXuKTJK4Yj1%2F7rB0aTB%2FSyo4lGRD6vcpbwZ9fNMT%2BZUYe5Bm27nv6omLBmwUAlCKE8RiO3ICzWAKeO6jPxfGB3mdzh1QDJ1Sg1MMGUOHXpL4mJw6IbDWCL3ZWo8Wewje3B0rJirXGYx5vz657eTqlX4Z%2FfyJrA4VOjA2FK3buhA3617JXNcCx%2FyxeBxDlKiYYGhdiaVtto7KhKPVzhgHKAKqIvcr1SxoEI2jButhNHL6HLbfXhRRRLXMe05mYDs4rCIPNo6eRsCURouu5h%2BwHrg4koXIX9q7YuTixJK0yAW6l6082h2Gfp8KWZk%2FJuefZuY%2FRhu7G1S%2BiyclLUTFacZ8n%2Bnfbf%2F7D3u1j%2FAowt32BHAsKn0%2FY0y70r14qStdV%2FzVFqeh7WIdYvMStnpNuif9NlmmBJGdX5AdFTL7VKWmTzfYAP7BH8eEMXAgConElD2DTE7b%2BYdFtXEiG0fK0MJAWI9SEDmM6v9Z7xlvIX4qhN%2F64oxCI3rmQr5xpEDMdC6vA5bcPqTqTHRQqpbow49bzvQY6pgFPvcJ5G6BCS%2Bi%2B46FqH5TQqkxyrUo7ygt8aYbvreq8%2FsHOpmJWRrFb7Z8hHW40k2DTX%2BxgVXJmGxliIEkf2l7VR9BtIiEaFsEaWGM4G0grsO8%2BrO9jTAfZe8fsl5ZIF7vzKUAxkDkRWSphTqclyOABRDPeczhqaUKPHlGb3lzirslmg7RO0ceelpb2NYILVK%2FrnDblI3%2BkJhrrlLvxJMAa4z%2B87soo&X-Amz-Signature=947af7df8ef4232cb214e161f35af64838efbe2bff1109cbcd3029259b2847b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIVYAJC%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhg14s6W9pJ3npl9iLckqhuU%2BhHKCQFIn7Y8yiPOFTsAiB1B0CNYbP%2FpdmUJmGXh6Qgn55coYA2du%2FSZ094J5kyxCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMjSY9UWg%2BAbB9Ym68KtwD8pUUHuxrWQlPhwqiCUagaCeKkcSSTmELkoWST9GulQ0dJm3Xo%2Bm%2B5ctwpyfdVf3iy8rItiVUzdHR10IzxXuTEWcUril3KjOKrlaUXC6ZXuKTJK4Yj1%2F7rB0aTB%2FSyo4lGRD6vcpbwZ9fNMT%2BZUYe5Bm27nv6omLBmwUAlCKE8RiO3ICzWAKeO6jPxfGB3mdzh1QDJ1Sg1MMGUOHXpL4mJw6IbDWCL3ZWo8Wewje3B0rJirXGYx5vz657eTqlX4Z%2FfyJrA4VOjA2FK3buhA3617JXNcCx%2FyxeBxDlKiYYGhdiaVtto7KhKPVzhgHKAKqIvcr1SxoEI2jButhNHL6HLbfXhRRRLXMe05mYDs4rCIPNo6eRsCURouu5h%2BwHrg4koXIX9q7YuTixJK0yAW6l6082h2Gfp8KWZk%2FJuefZuY%2FRhu7G1S%2BiyclLUTFacZ8n%2Bnfbf%2F7D3u1j%2FAowt32BHAsKn0%2FY0y70r14qStdV%2FzVFqeh7WIdYvMStnpNuif9NlmmBJGdX5AdFTL7VKWmTzfYAP7BH8eEMXAgConElD2DTE7b%2BYdFtXEiG0fK0MJAWI9SEDmM6v9Z7xlvIX4qhN%2F64oxCI3rmQr5xpEDMdC6vA5bcPqTqTHRQqpbow49bzvQY6pgFPvcJ5G6BCS%2Bi%2B46FqH5TQqkxyrUo7ygt8aYbvreq8%2FsHOpmJWRrFb7Z8hHW40k2DTX%2BxgVXJmGxliIEkf2l7VR9BtIiEaFsEaWGM4G0grsO8%2BrO9jTAfZe8fsl5ZIF7vzKUAxkDkRWSphTqclyOABRDPeczhqaUKPHlGb3lzirslmg7RO0ceelpb2NYILVK%2FrnDblI3%2BkJhrrlLvxJMAa4z%2B87soo&X-Amz-Signature=0063028ff160b2119a6da0fee7c1ef69b8370d9e58ed56b26369ed8bc9db0ee7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
