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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTLBRZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMiVWQQQlC4T6Z0BTdZvoFI3M1MMA3CNUT880Yj8%2BEuwIhAINaAyy7esVqe7kT2hu94z%2Fhai%2F6OZ1iQVp%2BkuEfz7cxKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy%2BOEXl%2BgClKzMDZ4q3APpEzwtZMufJ%2BoRKLmSYuLdo8v7QkbIxcbBI0IUbORUVm1tY61oi1Jt1OkSg2A73bbKVHUZ2vA24otvAsLEldKfuRzy6NzcRBsg9RdFu1%2B%2FK7XYVNcQGZh7zxODNjFlgdINjB7z9l10Img%2B%2F%2BiwMH0P%2Fuc5jYZiZF01HTL711%2FoRngBZJO3gLRGRmBXeY3MnhJFkWeePJ0iRfYO337G3AkN9tI0lpH0UejvvDIsk9Zbs7b%2Bngon57W56eUUpVT0lwYtFH4k1YKL267YGKHyqgV4HDCznZp%2FIp8EbdM7s%2FJmnjFO8gqkNRZLgGcBT7Vtd%2FJlz8uGuP38Cknlivp73%2BN%2BNQ9PbffrCNXu9RCOKX4qRJyhJfPWoxppDzaEwKAWbMKbSmKIJXr69hSsRJqgnAk358%2FDSSYe%2B5Jpn4YLT6VZhlfC2yQIay%2FOmYdM8qNWNXmDo0AbSM8LhuDym4PLcW%2BzRseqWQWy%2FUolFWj713fgRiqa5CxS%2BLDQYDNBe4GcPjHCqA3n5%2BtPSxjbI%2BQpesPL4uW8Sx7yYdvVfyL5%2B%2FTFtGMg66mC4PB0sazwYfvS0BunU55qTklbcFlr03FxF4yY%2B0cupmDMZ7M3q%2F91IW0xqExVo2Yr3Z29in7csDC4kP%2FCBjqkAYPNZWddXh5AGlLsJc%2B87eDTrdw2W1fhBumvPa92MrzqrvUd4nvKxo5rj3H2l%2BlqmKA%2Becq1fZ%2B5KQhyLLBUGYLsulNTGAc42fOusnEdIwLniGcKO1qAasXllQDXGkQPstEso%2B795SVdAWL21a4jYjXhvW17KhNfCa2I40al%2BYmuBw%2FZXwn7vd2N3TygEptBgOiITUziVlLL6x1ACqOCw%2BjgFJe1&X-Amz-Signature=d0b97c0eb9d13f28dfa53c1fe72e0a63f335a3d1a5007a8f67d3f63d578979f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTLBRZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMiVWQQQlC4T6Z0BTdZvoFI3M1MMA3CNUT880Yj8%2BEuwIhAINaAyy7esVqe7kT2hu94z%2Fhai%2F6OZ1iQVp%2BkuEfz7cxKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy%2BOEXl%2BgClKzMDZ4q3APpEzwtZMufJ%2BoRKLmSYuLdo8v7QkbIxcbBI0IUbORUVm1tY61oi1Jt1OkSg2A73bbKVHUZ2vA24otvAsLEldKfuRzy6NzcRBsg9RdFu1%2B%2FK7XYVNcQGZh7zxODNjFlgdINjB7z9l10Img%2B%2F%2BiwMH0P%2Fuc5jYZiZF01HTL711%2FoRngBZJO3gLRGRmBXeY3MnhJFkWeePJ0iRfYO337G3AkN9tI0lpH0UejvvDIsk9Zbs7b%2Bngon57W56eUUpVT0lwYtFH4k1YKL267YGKHyqgV4HDCznZp%2FIp8EbdM7s%2FJmnjFO8gqkNRZLgGcBT7Vtd%2FJlz8uGuP38Cknlivp73%2BN%2BNQ9PbffrCNXu9RCOKX4qRJyhJfPWoxppDzaEwKAWbMKbSmKIJXr69hSsRJqgnAk358%2FDSSYe%2B5Jpn4YLT6VZhlfC2yQIay%2FOmYdM8qNWNXmDo0AbSM8LhuDym4PLcW%2BzRseqWQWy%2FUolFWj713fgRiqa5CxS%2BLDQYDNBe4GcPjHCqA3n5%2BtPSxjbI%2BQpesPL4uW8Sx7yYdvVfyL5%2B%2FTFtGMg66mC4PB0sazwYfvS0BunU55qTklbcFlr03FxF4yY%2B0cupmDMZ7M3q%2F91IW0xqExVo2Yr3Z29in7csDC4kP%2FCBjqkAYPNZWddXh5AGlLsJc%2B87eDTrdw2W1fhBumvPa92MrzqrvUd4nvKxo5rj3H2l%2BlqmKA%2Becq1fZ%2B5KQhyLLBUGYLsulNTGAc42fOusnEdIwLniGcKO1qAasXllQDXGkQPstEso%2B795SVdAWL21a4jYjXhvW17KhNfCa2I40al%2BYmuBw%2FZXwn7vd2N3TygEptBgOiITUziVlLL6x1ACqOCw%2BjgFJe1&X-Amz-Signature=2063f9357f752bb3835b8eeecbdbd5eea0e6bb39f89a8909b9d1011a8ba1605f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTLBRZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMiVWQQQlC4T6Z0BTdZvoFI3M1MMA3CNUT880Yj8%2BEuwIhAINaAyy7esVqe7kT2hu94z%2Fhai%2F6OZ1iQVp%2BkuEfz7cxKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy%2BOEXl%2BgClKzMDZ4q3APpEzwtZMufJ%2BoRKLmSYuLdo8v7QkbIxcbBI0IUbORUVm1tY61oi1Jt1OkSg2A73bbKVHUZ2vA24otvAsLEldKfuRzy6NzcRBsg9RdFu1%2B%2FK7XYVNcQGZh7zxODNjFlgdINjB7z9l10Img%2B%2F%2BiwMH0P%2Fuc5jYZiZF01HTL711%2FoRngBZJO3gLRGRmBXeY3MnhJFkWeePJ0iRfYO337G3AkN9tI0lpH0UejvvDIsk9Zbs7b%2Bngon57W56eUUpVT0lwYtFH4k1YKL267YGKHyqgV4HDCznZp%2FIp8EbdM7s%2FJmnjFO8gqkNRZLgGcBT7Vtd%2FJlz8uGuP38Cknlivp73%2BN%2BNQ9PbffrCNXu9RCOKX4qRJyhJfPWoxppDzaEwKAWbMKbSmKIJXr69hSsRJqgnAk358%2FDSSYe%2B5Jpn4YLT6VZhlfC2yQIay%2FOmYdM8qNWNXmDo0AbSM8LhuDym4PLcW%2BzRseqWQWy%2FUolFWj713fgRiqa5CxS%2BLDQYDNBe4GcPjHCqA3n5%2BtPSxjbI%2BQpesPL4uW8Sx7yYdvVfyL5%2B%2FTFtGMg66mC4PB0sazwYfvS0BunU55qTklbcFlr03FxF4yY%2B0cupmDMZ7M3q%2F91IW0xqExVo2Yr3Z29in7csDC4kP%2FCBjqkAYPNZWddXh5AGlLsJc%2B87eDTrdw2W1fhBumvPa92MrzqrvUd4nvKxo5rj3H2l%2BlqmKA%2Becq1fZ%2B5KQhyLLBUGYLsulNTGAc42fOusnEdIwLniGcKO1qAasXllQDXGkQPstEso%2B795SVdAWL21a4jYjXhvW17KhNfCa2I40al%2BYmuBw%2FZXwn7vd2N3TygEptBgOiITUziVlLL6x1ACqOCw%2BjgFJe1&X-Amz-Signature=65876931ce822395ad9f65d8ef2203dbbaf9a71e02efe7d021bcab5ad17dab81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTLBRZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMiVWQQQlC4T6Z0BTdZvoFI3M1MMA3CNUT880Yj8%2BEuwIhAINaAyy7esVqe7kT2hu94z%2Fhai%2F6OZ1iQVp%2BkuEfz7cxKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy%2BOEXl%2BgClKzMDZ4q3APpEzwtZMufJ%2BoRKLmSYuLdo8v7QkbIxcbBI0IUbORUVm1tY61oi1Jt1OkSg2A73bbKVHUZ2vA24otvAsLEldKfuRzy6NzcRBsg9RdFu1%2B%2FK7XYVNcQGZh7zxODNjFlgdINjB7z9l10Img%2B%2F%2BiwMH0P%2Fuc5jYZiZF01HTL711%2FoRngBZJO3gLRGRmBXeY3MnhJFkWeePJ0iRfYO337G3AkN9tI0lpH0UejvvDIsk9Zbs7b%2Bngon57W56eUUpVT0lwYtFH4k1YKL267YGKHyqgV4HDCznZp%2FIp8EbdM7s%2FJmnjFO8gqkNRZLgGcBT7Vtd%2FJlz8uGuP38Cknlivp73%2BN%2BNQ9PbffrCNXu9RCOKX4qRJyhJfPWoxppDzaEwKAWbMKbSmKIJXr69hSsRJqgnAk358%2FDSSYe%2B5Jpn4YLT6VZhlfC2yQIay%2FOmYdM8qNWNXmDo0AbSM8LhuDym4PLcW%2BzRseqWQWy%2FUolFWj713fgRiqa5CxS%2BLDQYDNBe4GcPjHCqA3n5%2BtPSxjbI%2BQpesPL4uW8Sx7yYdvVfyL5%2B%2FTFtGMg66mC4PB0sazwYfvS0BunU55qTklbcFlr03FxF4yY%2B0cupmDMZ7M3q%2F91IW0xqExVo2Yr3Z29in7csDC4kP%2FCBjqkAYPNZWddXh5AGlLsJc%2B87eDTrdw2W1fhBumvPa92MrzqrvUd4nvKxo5rj3H2l%2BlqmKA%2Becq1fZ%2B5KQhyLLBUGYLsulNTGAc42fOusnEdIwLniGcKO1qAasXllQDXGkQPstEso%2B795SVdAWL21a4jYjXhvW17KhNfCa2I40al%2BYmuBw%2FZXwn7vd2N3TygEptBgOiITUziVlLL6x1ACqOCw%2BjgFJe1&X-Amz-Signature=13c9afb63c1d1615f121c4989daded6900c7b5c0c6ff5c2607d51bc889cd79d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTLBRZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMiVWQQQlC4T6Z0BTdZvoFI3M1MMA3CNUT880Yj8%2BEuwIhAINaAyy7esVqe7kT2hu94z%2Fhai%2F6OZ1iQVp%2BkuEfz7cxKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy%2BOEXl%2BgClKzMDZ4q3APpEzwtZMufJ%2BoRKLmSYuLdo8v7QkbIxcbBI0IUbORUVm1tY61oi1Jt1OkSg2A73bbKVHUZ2vA24otvAsLEldKfuRzy6NzcRBsg9RdFu1%2B%2FK7XYVNcQGZh7zxODNjFlgdINjB7z9l10Img%2B%2F%2BiwMH0P%2Fuc5jYZiZF01HTL711%2FoRngBZJO3gLRGRmBXeY3MnhJFkWeePJ0iRfYO337G3AkN9tI0lpH0UejvvDIsk9Zbs7b%2Bngon57W56eUUpVT0lwYtFH4k1YKL267YGKHyqgV4HDCznZp%2FIp8EbdM7s%2FJmnjFO8gqkNRZLgGcBT7Vtd%2FJlz8uGuP38Cknlivp73%2BN%2BNQ9PbffrCNXu9RCOKX4qRJyhJfPWoxppDzaEwKAWbMKbSmKIJXr69hSsRJqgnAk358%2FDSSYe%2B5Jpn4YLT6VZhlfC2yQIay%2FOmYdM8qNWNXmDo0AbSM8LhuDym4PLcW%2BzRseqWQWy%2FUolFWj713fgRiqa5CxS%2BLDQYDNBe4GcPjHCqA3n5%2BtPSxjbI%2BQpesPL4uW8Sx7yYdvVfyL5%2B%2FTFtGMg66mC4PB0sazwYfvS0BunU55qTklbcFlr03FxF4yY%2B0cupmDMZ7M3q%2F91IW0xqExVo2Yr3Z29in7csDC4kP%2FCBjqkAYPNZWddXh5AGlLsJc%2B87eDTrdw2W1fhBumvPa92MrzqrvUd4nvKxo5rj3H2l%2BlqmKA%2Becq1fZ%2B5KQhyLLBUGYLsulNTGAc42fOusnEdIwLniGcKO1qAasXllQDXGkQPstEso%2B795SVdAWL21a4jYjXhvW17KhNfCa2I40al%2BYmuBw%2FZXwn7vd2N3TygEptBgOiITUziVlLL6x1ACqOCw%2BjgFJe1&X-Amz-Signature=2d8114a3582867cb1abc68658254ed20481b7524b34e1cd8dc0200d6eed67db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTLBRZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMiVWQQQlC4T6Z0BTdZvoFI3M1MMA3CNUT880Yj8%2BEuwIhAINaAyy7esVqe7kT2hu94z%2Fhai%2F6OZ1iQVp%2BkuEfz7cxKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy%2BOEXl%2BgClKzMDZ4q3APpEzwtZMufJ%2BoRKLmSYuLdo8v7QkbIxcbBI0IUbORUVm1tY61oi1Jt1OkSg2A73bbKVHUZ2vA24otvAsLEldKfuRzy6NzcRBsg9RdFu1%2B%2FK7XYVNcQGZh7zxODNjFlgdINjB7z9l10Img%2B%2F%2BiwMH0P%2Fuc5jYZiZF01HTL711%2FoRngBZJO3gLRGRmBXeY3MnhJFkWeePJ0iRfYO337G3AkN9tI0lpH0UejvvDIsk9Zbs7b%2Bngon57W56eUUpVT0lwYtFH4k1YKL267YGKHyqgV4HDCznZp%2FIp8EbdM7s%2FJmnjFO8gqkNRZLgGcBT7Vtd%2FJlz8uGuP38Cknlivp73%2BN%2BNQ9PbffrCNXu9RCOKX4qRJyhJfPWoxppDzaEwKAWbMKbSmKIJXr69hSsRJqgnAk358%2FDSSYe%2B5Jpn4YLT6VZhlfC2yQIay%2FOmYdM8qNWNXmDo0AbSM8LhuDym4PLcW%2BzRseqWQWy%2FUolFWj713fgRiqa5CxS%2BLDQYDNBe4GcPjHCqA3n5%2BtPSxjbI%2BQpesPL4uW8Sx7yYdvVfyL5%2B%2FTFtGMg66mC4PB0sazwYfvS0BunU55qTklbcFlr03FxF4yY%2B0cupmDMZ7M3q%2F91IW0xqExVo2Yr3Z29in7csDC4kP%2FCBjqkAYPNZWddXh5AGlLsJc%2B87eDTrdw2W1fhBumvPa92MrzqrvUd4nvKxo5rj3H2l%2BlqmKA%2Becq1fZ%2B5KQhyLLBUGYLsulNTGAc42fOusnEdIwLniGcKO1qAasXllQDXGkQPstEso%2B795SVdAWL21a4jYjXhvW17KhNfCa2I40al%2BYmuBw%2FZXwn7vd2N3TygEptBgOiITUziVlLL6x1ACqOCw%2BjgFJe1&X-Amz-Signature=ab00c963825c2a6611f3095c5974d9b7c9aee56c8f3e70b6756dae2147009880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTLBRZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMiVWQQQlC4T6Z0BTdZvoFI3M1MMA3CNUT880Yj8%2BEuwIhAINaAyy7esVqe7kT2hu94z%2Fhai%2F6OZ1iQVp%2BkuEfz7cxKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy%2BOEXl%2BgClKzMDZ4q3APpEzwtZMufJ%2BoRKLmSYuLdo8v7QkbIxcbBI0IUbORUVm1tY61oi1Jt1OkSg2A73bbKVHUZ2vA24otvAsLEldKfuRzy6NzcRBsg9RdFu1%2B%2FK7XYVNcQGZh7zxODNjFlgdINjB7z9l10Img%2B%2F%2BiwMH0P%2Fuc5jYZiZF01HTL711%2FoRngBZJO3gLRGRmBXeY3MnhJFkWeePJ0iRfYO337G3AkN9tI0lpH0UejvvDIsk9Zbs7b%2Bngon57W56eUUpVT0lwYtFH4k1YKL267YGKHyqgV4HDCznZp%2FIp8EbdM7s%2FJmnjFO8gqkNRZLgGcBT7Vtd%2FJlz8uGuP38Cknlivp73%2BN%2BNQ9PbffrCNXu9RCOKX4qRJyhJfPWoxppDzaEwKAWbMKbSmKIJXr69hSsRJqgnAk358%2FDSSYe%2B5Jpn4YLT6VZhlfC2yQIay%2FOmYdM8qNWNXmDo0AbSM8LhuDym4PLcW%2BzRseqWQWy%2FUolFWj713fgRiqa5CxS%2BLDQYDNBe4GcPjHCqA3n5%2BtPSxjbI%2BQpesPL4uW8Sx7yYdvVfyL5%2B%2FTFtGMg66mC4PB0sazwYfvS0BunU55qTklbcFlr03FxF4yY%2B0cupmDMZ7M3q%2F91IW0xqExVo2Yr3Z29in7csDC4kP%2FCBjqkAYPNZWddXh5AGlLsJc%2B87eDTrdw2W1fhBumvPa92MrzqrvUd4nvKxo5rj3H2l%2BlqmKA%2Becq1fZ%2B5KQhyLLBUGYLsulNTGAc42fOusnEdIwLniGcKO1qAasXllQDXGkQPstEso%2B795SVdAWL21a4jYjXhvW17KhNfCa2I40al%2BYmuBw%2FZXwn7vd2N3TygEptBgOiITUziVlLL6x1ACqOCw%2BjgFJe1&X-Amz-Signature=bb56b4641e284620a390027244bdf5a50da88e64bc5e959b788087ab58e6de7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTLBRZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMiVWQQQlC4T6Z0BTdZvoFI3M1MMA3CNUT880Yj8%2BEuwIhAINaAyy7esVqe7kT2hu94z%2Fhai%2F6OZ1iQVp%2BkuEfz7cxKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy%2BOEXl%2BgClKzMDZ4q3APpEzwtZMufJ%2BoRKLmSYuLdo8v7QkbIxcbBI0IUbORUVm1tY61oi1Jt1OkSg2A73bbKVHUZ2vA24otvAsLEldKfuRzy6NzcRBsg9RdFu1%2B%2FK7XYVNcQGZh7zxODNjFlgdINjB7z9l10Img%2B%2F%2BiwMH0P%2Fuc5jYZiZF01HTL711%2FoRngBZJO3gLRGRmBXeY3MnhJFkWeePJ0iRfYO337G3AkN9tI0lpH0UejvvDIsk9Zbs7b%2Bngon57W56eUUpVT0lwYtFH4k1YKL267YGKHyqgV4HDCznZp%2FIp8EbdM7s%2FJmnjFO8gqkNRZLgGcBT7Vtd%2FJlz8uGuP38Cknlivp73%2BN%2BNQ9PbffrCNXu9RCOKX4qRJyhJfPWoxppDzaEwKAWbMKbSmKIJXr69hSsRJqgnAk358%2FDSSYe%2B5Jpn4YLT6VZhlfC2yQIay%2FOmYdM8qNWNXmDo0AbSM8LhuDym4PLcW%2BzRseqWQWy%2FUolFWj713fgRiqa5CxS%2BLDQYDNBe4GcPjHCqA3n5%2BtPSxjbI%2BQpesPL4uW8Sx7yYdvVfyL5%2B%2FTFtGMg66mC4PB0sazwYfvS0BunU55qTklbcFlr03FxF4yY%2B0cupmDMZ7M3q%2F91IW0xqExVo2Yr3Z29in7csDC4kP%2FCBjqkAYPNZWddXh5AGlLsJc%2B87eDTrdw2W1fhBumvPa92MrzqrvUd4nvKxo5rj3H2l%2BlqmKA%2Becq1fZ%2B5KQhyLLBUGYLsulNTGAc42fOusnEdIwLniGcKO1qAasXllQDXGkQPstEso%2B795SVdAWL21a4jYjXhvW17KhNfCa2I40al%2BYmuBw%2FZXwn7vd2N3TygEptBgOiITUziVlLL6x1ACqOCw%2BjgFJe1&X-Amz-Signature=35a324b41919dcc35faec139bb84c488add3e3e7b6d75932da1847a3fb2e39cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
