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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42I53PC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEaBBcPU%2BOJ0D94t32YsGRdRjk8OG%2BVo7OoqRHgfLQo1AiBzNXxb%2F9xR9crrKCOJNYeDyiXYD478zpxHvRWl34%2BYNiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsMduUze2zP1JiKHWKtwDRqxH%2BTpWgI1ZNZrTsNzCjaGn4ODUYd%2FGFuaOiyhcMy9Stx2RSZlyJgulrFdqjKHwwZCbgwUu%2FqZ1Zq5fvKEs8Q3pj9tHktje6YeHik7S8B5FlXN5dKZigATI2voavk4Rij1KzjFKCguiedp4LH11S5t2YH4cooKB5vUjpzNxjldrFsuc7u9qA1EtmkIeOu92lWe30w8rZfBq1sEL%2F0TayYJAW0g5YTM%2FpmcLC8T02qgZmyfPcaiWRLougOscY0FM4z9dLYBs86DDpoYAZ1d2gcIK06pgem%2FSzwyFPbFZHm5kw2G%2FwXTodQn9gRtAymqWwvWS8N1Lu8a%2Boi8NaM9OuFus0smFIyUY%2Bu8cjkH6j5aDlEOc2CQTqlNxhWZucXDDLSBuegkENR4xPjCwRqir%2BZn8Z%2BGKLXfTCNXLK%2FtHIelSd6IY77mM7MsFjva1GhYj1BP1pNv7uKVap1bJOe0tgm7iRUSxANaVD2Em17eE%2BCDDCy%2FdUlxUjZ8H5M5CVlXHHlL7M3T0IM8PcJsNgS%2BRcbAej7a3WjOld8XBSIwiyd2XLWCGZwvNQwr4Hm1gp5JeeA7CZuBKDHiSlK98N4IwZ3q4nQXYtNqFvVd3QUReis5AkpGmQ4VA2SqebaYwypPXxAY6pgEasFplp2mPp2MX4cKCGCQy18xkRUC3ytBI%2FAX0aVmR47TbsSzV%2F1LK7lqxPxxeo6ujIaelJFmy6oIIAqAzBcZ4kcHkdXM25pNoDs1m947hPM8evCBxvBSh8JG5Ij8RJAGhUBeoKqhWUYI86oreb0hEEPSnN9q2I9LiBBEHdhPQKUOy5ZTOGrsU2SYdPoxXbUQKWpDiH%2FXTudgXBLrnhKYPaAgTeQMD&X-Amz-Signature=68f31d6f9b6a1cc88bb30e8a2c2ca859a4b3205bf57354796c78c14032028c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42I53PC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEaBBcPU%2BOJ0D94t32YsGRdRjk8OG%2BVo7OoqRHgfLQo1AiBzNXxb%2F9xR9crrKCOJNYeDyiXYD478zpxHvRWl34%2BYNiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsMduUze2zP1JiKHWKtwDRqxH%2BTpWgI1ZNZrTsNzCjaGn4ODUYd%2FGFuaOiyhcMy9Stx2RSZlyJgulrFdqjKHwwZCbgwUu%2FqZ1Zq5fvKEs8Q3pj9tHktje6YeHik7S8B5FlXN5dKZigATI2voavk4Rij1KzjFKCguiedp4LH11S5t2YH4cooKB5vUjpzNxjldrFsuc7u9qA1EtmkIeOu92lWe30w8rZfBq1sEL%2F0TayYJAW0g5YTM%2FpmcLC8T02qgZmyfPcaiWRLougOscY0FM4z9dLYBs86DDpoYAZ1d2gcIK06pgem%2FSzwyFPbFZHm5kw2G%2FwXTodQn9gRtAymqWwvWS8N1Lu8a%2Boi8NaM9OuFus0smFIyUY%2Bu8cjkH6j5aDlEOc2CQTqlNxhWZucXDDLSBuegkENR4xPjCwRqir%2BZn8Z%2BGKLXfTCNXLK%2FtHIelSd6IY77mM7MsFjva1GhYj1BP1pNv7uKVap1bJOe0tgm7iRUSxANaVD2Em17eE%2BCDDCy%2FdUlxUjZ8H5M5CVlXHHlL7M3T0IM8PcJsNgS%2BRcbAej7a3WjOld8XBSIwiyd2XLWCGZwvNQwr4Hm1gp5JeeA7CZuBKDHiSlK98N4IwZ3q4nQXYtNqFvVd3QUReis5AkpGmQ4VA2SqebaYwypPXxAY6pgEasFplp2mPp2MX4cKCGCQy18xkRUC3ytBI%2FAX0aVmR47TbsSzV%2F1LK7lqxPxxeo6ujIaelJFmy6oIIAqAzBcZ4kcHkdXM25pNoDs1m947hPM8evCBxvBSh8JG5Ij8RJAGhUBeoKqhWUYI86oreb0hEEPSnN9q2I9LiBBEHdhPQKUOy5ZTOGrsU2SYdPoxXbUQKWpDiH%2FXTudgXBLrnhKYPaAgTeQMD&X-Amz-Signature=7014f92d832c2ada10f8c53e7ccd0cda0eb71562c5489e4b7dd49c6139a22c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42I53PC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEaBBcPU%2BOJ0D94t32YsGRdRjk8OG%2BVo7OoqRHgfLQo1AiBzNXxb%2F9xR9crrKCOJNYeDyiXYD478zpxHvRWl34%2BYNiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsMduUze2zP1JiKHWKtwDRqxH%2BTpWgI1ZNZrTsNzCjaGn4ODUYd%2FGFuaOiyhcMy9Stx2RSZlyJgulrFdqjKHwwZCbgwUu%2FqZ1Zq5fvKEs8Q3pj9tHktje6YeHik7S8B5FlXN5dKZigATI2voavk4Rij1KzjFKCguiedp4LH11S5t2YH4cooKB5vUjpzNxjldrFsuc7u9qA1EtmkIeOu92lWe30w8rZfBq1sEL%2F0TayYJAW0g5YTM%2FpmcLC8T02qgZmyfPcaiWRLougOscY0FM4z9dLYBs86DDpoYAZ1d2gcIK06pgem%2FSzwyFPbFZHm5kw2G%2FwXTodQn9gRtAymqWwvWS8N1Lu8a%2Boi8NaM9OuFus0smFIyUY%2Bu8cjkH6j5aDlEOc2CQTqlNxhWZucXDDLSBuegkENR4xPjCwRqir%2BZn8Z%2BGKLXfTCNXLK%2FtHIelSd6IY77mM7MsFjva1GhYj1BP1pNv7uKVap1bJOe0tgm7iRUSxANaVD2Em17eE%2BCDDCy%2FdUlxUjZ8H5M5CVlXHHlL7M3T0IM8PcJsNgS%2BRcbAej7a3WjOld8XBSIwiyd2XLWCGZwvNQwr4Hm1gp5JeeA7CZuBKDHiSlK98N4IwZ3q4nQXYtNqFvVd3QUReis5AkpGmQ4VA2SqebaYwypPXxAY6pgEasFplp2mPp2MX4cKCGCQy18xkRUC3ytBI%2FAX0aVmR47TbsSzV%2F1LK7lqxPxxeo6ujIaelJFmy6oIIAqAzBcZ4kcHkdXM25pNoDs1m947hPM8evCBxvBSh8JG5Ij8RJAGhUBeoKqhWUYI86oreb0hEEPSnN9q2I9LiBBEHdhPQKUOy5ZTOGrsU2SYdPoxXbUQKWpDiH%2FXTudgXBLrnhKYPaAgTeQMD&X-Amz-Signature=7754418e240bf1391963bcb70bac9578961398b9a86e78451c7f955ded64ae17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42I53PC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEaBBcPU%2BOJ0D94t32YsGRdRjk8OG%2BVo7OoqRHgfLQo1AiBzNXxb%2F9xR9crrKCOJNYeDyiXYD478zpxHvRWl34%2BYNiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsMduUze2zP1JiKHWKtwDRqxH%2BTpWgI1ZNZrTsNzCjaGn4ODUYd%2FGFuaOiyhcMy9Stx2RSZlyJgulrFdqjKHwwZCbgwUu%2FqZ1Zq5fvKEs8Q3pj9tHktje6YeHik7S8B5FlXN5dKZigATI2voavk4Rij1KzjFKCguiedp4LH11S5t2YH4cooKB5vUjpzNxjldrFsuc7u9qA1EtmkIeOu92lWe30w8rZfBq1sEL%2F0TayYJAW0g5YTM%2FpmcLC8T02qgZmyfPcaiWRLougOscY0FM4z9dLYBs86DDpoYAZ1d2gcIK06pgem%2FSzwyFPbFZHm5kw2G%2FwXTodQn9gRtAymqWwvWS8N1Lu8a%2Boi8NaM9OuFus0smFIyUY%2Bu8cjkH6j5aDlEOc2CQTqlNxhWZucXDDLSBuegkENR4xPjCwRqir%2BZn8Z%2BGKLXfTCNXLK%2FtHIelSd6IY77mM7MsFjva1GhYj1BP1pNv7uKVap1bJOe0tgm7iRUSxANaVD2Em17eE%2BCDDCy%2FdUlxUjZ8H5M5CVlXHHlL7M3T0IM8PcJsNgS%2BRcbAej7a3WjOld8XBSIwiyd2XLWCGZwvNQwr4Hm1gp5JeeA7CZuBKDHiSlK98N4IwZ3q4nQXYtNqFvVd3QUReis5AkpGmQ4VA2SqebaYwypPXxAY6pgEasFplp2mPp2MX4cKCGCQy18xkRUC3ytBI%2FAX0aVmR47TbsSzV%2F1LK7lqxPxxeo6ujIaelJFmy6oIIAqAzBcZ4kcHkdXM25pNoDs1m947hPM8evCBxvBSh8JG5Ij8RJAGhUBeoKqhWUYI86oreb0hEEPSnN9q2I9LiBBEHdhPQKUOy5ZTOGrsU2SYdPoxXbUQKWpDiH%2FXTudgXBLrnhKYPaAgTeQMD&X-Amz-Signature=981e6f88c73c067baae85833c8727d2c5c255e764e0f2de0caf6ead57a1c898e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42I53PC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEaBBcPU%2BOJ0D94t32YsGRdRjk8OG%2BVo7OoqRHgfLQo1AiBzNXxb%2F9xR9crrKCOJNYeDyiXYD478zpxHvRWl34%2BYNiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsMduUze2zP1JiKHWKtwDRqxH%2BTpWgI1ZNZrTsNzCjaGn4ODUYd%2FGFuaOiyhcMy9Stx2RSZlyJgulrFdqjKHwwZCbgwUu%2FqZ1Zq5fvKEs8Q3pj9tHktje6YeHik7S8B5FlXN5dKZigATI2voavk4Rij1KzjFKCguiedp4LH11S5t2YH4cooKB5vUjpzNxjldrFsuc7u9qA1EtmkIeOu92lWe30w8rZfBq1sEL%2F0TayYJAW0g5YTM%2FpmcLC8T02qgZmyfPcaiWRLougOscY0FM4z9dLYBs86DDpoYAZ1d2gcIK06pgem%2FSzwyFPbFZHm5kw2G%2FwXTodQn9gRtAymqWwvWS8N1Lu8a%2Boi8NaM9OuFus0smFIyUY%2Bu8cjkH6j5aDlEOc2CQTqlNxhWZucXDDLSBuegkENR4xPjCwRqir%2BZn8Z%2BGKLXfTCNXLK%2FtHIelSd6IY77mM7MsFjva1GhYj1BP1pNv7uKVap1bJOe0tgm7iRUSxANaVD2Em17eE%2BCDDCy%2FdUlxUjZ8H5M5CVlXHHlL7M3T0IM8PcJsNgS%2BRcbAej7a3WjOld8XBSIwiyd2XLWCGZwvNQwr4Hm1gp5JeeA7CZuBKDHiSlK98N4IwZ3q4nQXYtNqFvVd3QUReis5AkpGmQ4VA2SqebaYwypPXxAY6pgEasFplp2mPp2MX4cKCGCQy18xkRUC3ytBI%2FAX0aVmR47TbsSzV%2F1LK7lqxPxxeo6ujIaelJFmy6oIIAqAzBcZ4kcHkdXM25pNoDs1m947hPM8evCBxvBSh8JG5Ij8RJAGhUBeoKqhWUYI86oreb0hEEPSnN9q2I9LiBBEHdhPQKUOy5ZTOGrsU2SYdPoxXbUQKWpDiH%2FXTudgXBLrnhKYPaAgTeQMD&X-Amz-Signature=fab3f63612820cbde62a34e7782baf38cb85c57248984a605fc984a3e007e620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42I53PC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEaBBcPU%2BOJ0D94t32YsGRdRjk8OG%2BVo7OoqRHgfLQo1AiBzNXxb%2F9xR9crrKCOJNYeDyiXYD478zpxHvRWl34%2BYNiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsMduUze2zP1JiKHWKtwDRqxH%2BTpWgI1ZNZrTsNzCjaGn4ODUYd%2FGFuaOiyhcMy9Stx2RSZlyJgulrFdqjKHwwZCbgwUu%2FqZ1Zq5fvKEs8Q3pj9tHktje6YeHik7S8B5FlXN5dKZigATI2voavk4Rij1KzjFKCguiedp4LH11S5t2YH4cooKB5vUjpzNxjldrFsuc7u9qA1EtmkIeOu92lWe30w8rZfBq1sEL%2F0TayYJAW0g5YTM%2FpmcLC8T02qgZmyfPcaiWRLougOscY0FM4z9dLYBs86DDpoYAZ1d2gcIK06pgem%2FSzwyFPbFZHm5kw2G%2FwXTodQn9gRtAymqWwvWS8N1Lu8a%2Boi8NaM9OuFus0smFIyUY%2Bu8cjkH6j5aDlEOc2CQTqlNxhWZucXDDLSBuegkENR4xPjCwRqir%2BZn8Z%2BGKLXfTCNXLK%2FtHIelSd6IY77mM7MsFjva1GhYj1BP1pNv7uKVap1bJOe0tgm7iRUSxANaVD2Em17eE%2BCDDCy%2FdUlxUjZ8H5M5CVlXHHlL7M3T0IM8PcJsNgS%2BRcbAej7a3WjOld8XBSIwiyd2XLWCGZwvNQwr4Hm1gp5JeeA7CZuBKDHiSlK98N4IwZ3q4nQXYtNqFvVd3QUReis5AkpGmQ4VA2SqebaYwypPXxAY6pgEasFplp2mPp2MX4cKCGCQy18xkRUC3ytBI%2FAX0aVmR47TbsSzV%2F1LK7lqxPxxeo6ujIaelJFmy6oIIAqAzBcZ4kcHkdXM25pNoDs1m947hPM8evCBxvBSh8JG5Ij8RJAGhUBeoKqhWUYI86oreb0hEEPSnN9q2I9LiBBEHdhPQKUOy5ZTOGrsU2SYdPoxXbUQKWpDiH%2FXTudgXBLrnhKYPaAgTeQMD&X-Amz-Signature=ceb3eeb36078236df780c5df05f1ea84cbb3f799a83c511a3e29d5b20b45f138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42I53PC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEaBBcPU%2BOJ0D94t32YsGRdRjk8OG%2BVo7OoqRHgfLQo1AiBzNXxb%2F9xR9crrKCOJNYeDyiXYD478zpxHvRWl34%2BYNiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsMduUze2zP1JiKHWKtwDRqxH%2BTpWgI1ZNZrTsNzCjaGn4ODUYd%2FGFuaOiyhcMy9Stx2RSZlyJgulrFdqjKHwwZCbgwUu%2FqZ1Zq5fvKEs8Q3pj9tHktje6YeHik7S8B5FlXN5dKZigATI2voavk4Rij1KzjFKCguiedp4LH11S5t2YH4cooKB5vUjpzNxjldrFsuc7u9qA1EtmkIeOu92lWe30w8rZfBq1sEL%2F0TayYJAW0g5YTM%2FpmcLC8T02qgZmyfPcaiWRLougOscY0FM4z9dLYBs86DDpoYAZ1d2gcIK06pgem%2FSzwyFPbFZHm5kw2G%2FwXTodQn9gRtAymqWwvWS8N1Lu8a%2Boi8NaM9OuFus0smFIyUY%2Bu8cjkH6j5aDlEOc2CQTqlNxhWZucXDDLSBuegkENR4xPjCwRqir%2BZn8Z%2BGKLXfTCNXLK%2FtHIelSd6IY77mM7MsFjva1GhYj1BP1pNv7uKVap1bJOe0tgm7iRUSxANaVD2Em17eE%2BCDDCy%2FdUlxUjZ8H5M5CVlXHHlL7M3T0IM8PcJsNgS%2BRcbAej7a3WjOld8XBSIwiyd2XLWCGZwvNQwr4Hm1gp5JeeA7CZuBKDHiSlK98N4IwZ3q4nQXYtNqFvVd3QUReis5AkpGmQ4VA2SqebaYwypPXxAY6pgEasFplp2mPp2MX4cKCGCQy18xkRUC3ytBI%2FAX0aVmR47TbsSzV%2F1LK7lqxPxxeo6ujIaelJFmy6oIIAqAzBcZ4kcHkdXM25pNoDs1m947hPM8evCBxvBSh8JG5Ij8RJAGhUBeoKqhWUYI86oreb0hEEPSnN9q2I9LiBBEHdhPQKUOy5ZTOGrsU2SYdPoxXbUQKWpDiH%2FXTudgXBLrnhKYPaAgTeQMD&X-Amz-Signature=b78e4cb7613575c9a44adc0436b1ebe49dd02907583d5086bba63b83d6c56f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42I53PC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEaBBcPU%2BOJ0D94t32YsGRdRjk8OG%2BVo7OoqRHgfLQo1AiBzNXxb%2F9xR9crrKCOJNYeDyiXYD478zpxHvRWl34%2BYNiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsMduUze2zP1JiKHWKtwDRqxH%2BTpWgI1ZNZrTsNzCjaGn4ODUYd%2FGFuaOiyhcMy9Stx2RSZlyJgulrFdqjKHwwZCbgwUu%2FqZ1Zq5fvKEs8Q3pj9tHktje6YeHik7S8B5FlXN5dKZigATI2voavk4Rij1KzjFKCguiedp4LH11S5t2YH4cooKB5vUjpzNxjldrFsuc7u9qA1EtmkIeOu92lWe30w8rZfBq1sEL%2F0TayYJAW0g5YTM%2FpmcLC8T02qgZmyfPcaiWRLougOscY0FM4z9dLYBs86DDpoYAZ1d2gcIK06pgem%2FSzwyFPbFZHm5kw2G%2FwXTodQn9gRtAymqWwvWS8N1Lu8a%2Boi8NaM9OuFus0smFIyUY%2Bu8cjkH6j5aDlEOc2CQTqlNxhWZucXDDLSBuegkENR4xPjCwRqir%2BZn8Z%2BGKLXfTCNXLK%2FtHIelSd6IY77mM7MsFjva1GhYj1BP1pNv7uKVap1bJOe0tgm7iRUSxANaVD2Em17eE%2BCDDCy%2FdUlxUjZ8H5M5CVlXHHlL7M3T0IM8PcJsNgS%2BRcbAej7a3WjOld8XBSIwiyd2XLWCGZwvNQwr4Hm1gp5JeeA7CZuBKDHiSlK98N4IwZ3q4nQXYtNqFvVd3QUReis5AkpGmQ4VA2SqebaYwypPXxAY6pgEasFplp2mPp2MX4cKCGCQy18xkRUC3ytBI%2FAX0aVmR47TbsSzV%2F1LK7lqxPxxeo6ujIaelJFmy6oIIAqAzBcZ4kcHkdXM25pNoDs1m947hPM8evCBxvBSh8JG5Ij8RJAGhUBeoKqhWUYI86oreb0hEEPSnN9q2I9LiBBEHdhPQKUOy5ZTOGrsU2SYdPoxXbUQKWpDiH%2FXTudgXBLrnhKYPaAgTeQMD&X-Amz-Signature=5e47fde5bb67b44aa3ac9ea0ca50a3aa42d8b4ccee95b261220f0b6f6a4cdf22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
