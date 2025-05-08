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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQDP4O3D%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fvbtb%2F4UJo2eeAvRX6IwAxko8gGywP7HURuxjSV8N1QIhAK75BaDQL96880Q7XEP7xmlKbCCqe12%2B6kP5s4GXLZexKv8DCHEQABoMNjM3NDIzMTgzODA1IgxBH0X63FYNHjJXis8q3ANHkyhWRL2VrLMpEC2BTNn0zB%2BZxcQ2hdOiTr4C1u0XSc6%2Bd7GWnhJY%2BNKG%2BvgQDGfVKRv%2BLYj8cgLJVG7VMKC%2Bq22xbFKTgh%2FXaF8EdTyCSgVkO8LbGo%2BSYxZYW4VUHQcV1q2TFXVCIIzs8hH8%2BXt3rZqxCB60L4rPQ35R4vJeveij6zQAeZ5WShkO0Gl3FmRY49LKM5mFFfdjNC%2F01FbEEcoEygpyvk0wXqIaH8XwaVN1XMG931siptYwICWWAn3D9pEM6udSGGXEVxXymT9EJ2lhnq79AwbstveATA3TpAEUccZIVn6d9DXltf37l9zDUDVQtt4UMMVqPaOZi2UwYdhiANGQMw%2B0gQjWZo%2B6plmBKWNLqW8mko38VbY5kbWi4FX27eZ4INe6EPqKyaL1m8gW4BKpsa2qtYrnNIrVIBNpAtf3xrRt8OMqqOJU98REnBS%2FLyrZ4hVPnn9iVE9FAf9n8PTPWzMF3PxL%2FfRoNT%2Fq1nLRIAV8L%2BgX9cFTc7U0%2FXWxTEBgj1U0b67VzcOJ0ZTsTaxuFuQl50lQSnKQin1tRuXsUa9befVsMxTyLzxhkOHXWqMk%2FrJs9jc8PHVcE7gvt5XJ7%2FZknwirBF%2FQTyU4LFqv8%2FiQGCC1%2BDCcxfHABjqkAY94Lq9jVf%2F1zi1bd8Gr4arQsVB7txtPvYEoza1TF74rFi03pWXYu8fBg2FmTz7Z4dItZsJDsL8WFg7%2FUElQOK5AqGUhm9Qk7ZzXLSUxIB9OqZcNU14CSY3459vzSuG4FgbQER38zQFkmPwk6e5hYXKkEEYs%2Bw6BF9IEqWlVnU3J5%2B%2BvXOWElObuZJwHoLHlSwIjkcapsYn%2F48z1gQvqzrHvEIVa&X-Amz-Signature=6e5f03dcf6454d310eaa832d5ac1b363f0a3bd4c150892f3383d47dd473074fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQDP4O3D%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fvbtb%2F4UJo2eeAvRX6IwAxko8gGywP7HURuxjSV8N1QIhAK75BaDQL96880Q7XEP7xmlKbCCqe12%2B6kP5s4GXLZexKv8DCHEQABoMNjM3NDIzMTgzODA1IgxBH0X63FYNHjJXis8q3ANHkyhWRL2VrLMpEC2BTNn0zB%2BZxcQ2hdOiTr4C1u0XSc6%2Bd7GWnhJY%2BNKG%2BvgQDGfVKRv%2BLYj8cgLJVG7VMKC%2Bq22xbFKTgh%2FXaF8EdTyCSgVkO8LbGo%2BSYxZYW4VUHQcV1q2TFXVCIIzs8hH8%2BXt3rZqxCB60L4rPQ35R4vJeveij6zQAeZ5WShkO0Gl3FmRY49LKM5mFFfdjNC%2F01FbEEcoEygpyvk0wXqIaH8XwaVN1XMG931siptYwICWWAn3D9pEM6udSGGXEVxXymT9EJ2lhnq79AwbstveATA3TpAEUccZIVn6d9DXltf37l9zDUDVQtt4UMMVqPaOZi2UwYdhiANGQMw%2B0gQjWZo%2B6plmBKWNLqW8mko38VbY5kbWi4FX27eZ4INe6EPqKyaL1m8gW4BKpsa2qtYrnNIrVIBNpAtf3xrRt8OMqqOJU98REnBS%2FLyrZ4hVPnn9iVE9FAf9n8PTPWzMF3PxL%2FfRoNT%2Fq1nLRIAV8L%2BgX9cFTc7U0%2FXWxTEBgj1U0b67VzcOJ0ZTsTaxuFuQl50lQSnKQin1tRuXsUa9befVsMxTyLzxhkOHXWqMk%2FrJs9jc8PHVcE7gvt5XJ7%2FZknwirBF%2FQTyU4LFqv8%2FiQGCC1%2BDCcxfHABjqkAY94Lq9jVf%2F1zi1bd8Gr4arQsVB7txtPvYEoza1TF74rFi03pWXYu8fBg2FmTz7Z4dItZsJDsL8WFg7%2FUElQOK5AqGUhm9Qk7ZzXLSUxIB9OqZcNU14CSY3459vzSuG4FgbQER38zQFkmPwk6e5hYXKkEEYs%2Bw6BF9IEqWlVnU3J5%2B%2BvXOWElObuZJwHoLHlSwIjkcapsYn%2F48z1gQvqzrHvEIVa&X-Amz-Signature=bd6f077ed6e5091570b250163f752c1bca157bbb9f9985c67793bb0d186c59ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQDP4O3D%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fvbtb%2F4UJo2eeAvRX6IwAxko8gGywP7HURuxjSV8N1QIhAK75BaDQL96880Q7XEP7xmlKbCCqe12%2B6kP5s4GXLZexKv8DCHEQABoMNjM3NDIzMTgzODA1IgxBH0X63FYNHjJXis8q3ANHkyhWRL2VrLMpEC2BTNn0zB%2BZxcQ2hdOiTr4C1u0XSc6%2Bd7GWnhJY%2BNKG%2BvgQDGfVKRv%2BLYj8cgLJVG7VMKC%2Bq22xbFKTgh%2FXaF8EdTyCSgVkO8LbGo%2BSYxZYW4VUHQcV1q2TFXVCIIzs8hH8%2BXt3rZqxCB60L4rPQ35R4vJeveij6zQAeZ5WShkO0Gl3FmRY49LKM5mFFfdjNC%2F01FbEEcoEygpyvk0wXqIaH8XwaVN1XMG931siptYwICWWAn3D9pEM6udSGGXEVxXymT9EJ2lhnq79AwbstveATA3TpAEUccZIVn6d9DXltf37l9zDUDVQtt4UMMVqPaOZi2UwYdhiANGQMw%2B0gQjWZo%2B6plmBKWNLqW8mko38VbY5kbWi4FX27eZ4INe6EPqKyaL1m8gW4BKpsa2qtYrnNIrVIBNpAtf3xrRt8OMqqOJU98REnBS%2FLyrZ4hVPnn9iVE9FAf9n8PTPWzMF3PxL%2FfRoNT%2Fq1nLRIAV8L%2BgX9cFTc7U0%2FXWxTEBgj1U0b67VzcOJ0ZTsTaxuFuQl50lQSnKQin1tRuXsUa9befVsMxTyLzxhkOHXWqMk%2FrJs9jc8PHVcE7gvt5XJ7%2FZknwirBF%2FQTyU4LFqv8%2FiQGCC1%2BDCcxfHABjqkAY94Lq9jVf%2F1zi1bd8Gr4arQsVB7txtPvYEoza1TF74rFi03pWXYu8fBg2FmTz7Z4dItZsJDsL8WFg7%2FUElQOK5AqGUhm9Qk7ZzXLSUxIB9OqZcNU14CSY3459vzSuG4FgbQER38zQFkmPwk6e5hYXKkEEYs%2Bw6BF9IEqWlVnU3J5%2B%2BvXOWElObuZJwHoLHlSwIjkcapsYn%2F48z1gQvqzrHvEIVa&X-Amz-Signature=5359c5a73de23f5f3c8c838d66d1e73cbe1e96e34984d4859091de66361da264&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQDP4O3D%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fvbtb%2F4UJo2eeAvRX6IwAxko8gGywP7HURuxjSV8N1QIhAK75BaDQL96880Q7XEP7xmlKbCCqe12%2B6kP5s4GXLZexKv8DCHEQABoMNjM3NDIzMTgzODA1IgxBH0X63FYNHjJXis8q3ANHkyhWRL2VrLMpEC2BTNn0zB%2BZxcQ2hdOiTr4C1u0XSc6%2Bd7GWnhJY%2BNKG%2BvgQDGfVKRv%2BLYj8cgLJVG7VMKC%2Bq22xbFKTgh%2FXaF8EdTyCSgVkO8LbGo%2BSYxZYW4VUHQcV1q2TFXVCIIzs8hH8%2BXt3rZqxCB60L4rPQ35R4vJeveij6zQAeZ5WShkO0Gl3FmRY49LKM5mFFfdjNC%2F01FbEEcoEygpyvk0wXqIaH8XwaVN1XMG931siptYwICWWAn3D9pEM6udSGGXEVxXymT9EJ2lhnq79AwbstveATA3TpAEUccZIVn6d9DXltf37l9zDUDVQtt4UMMVqPaOZi2UwYdhiANGQMw%2B0gQjWZo%2B6plmBKWNLqW8mko38VbY5kbWi4FX27eZ4INe6EPqKyaL1m8gW4BKpsa2qtYrnNIrVIBNpAtf3xrRt8OMqqOJU98REnBS%2FLyrZ4hVPnn9iVE9FAf9n8PTPWzMF3PxL%2FfRoNT%2Fq1nLRIAV8L%2BgX9cFTc7U0%2FXWxTEBgj1U0b67VzcOJ0ZTsTaxuFuQl50lQSnKQin1tRuXsUa9befVsMxTyLzxhkOHXWqMk%2FrJs9jc8PHVcE7gvt5XJ7%2FZknwirBF%2FQTyU4LFqv8%2FiQGCC1%2BDCcxfHABjqkAY94Lq9jVf%2F1zi1bd8Gr4arQsVB7txtPvYEoza1TF74rFi03pWXYu8fBg2FmTz7Z4dItZsJDsL8WFg7%2FUElQOK5AqGUhm9Qk7ZzXLSUxIB9OqZcNU14CSY3459vzSuG4FgbQER38zQFkmPwk6e5hYXKkEEYs%2Bw6BF9IEqWlVnU3J5%2B%2BvXOWElObuZJwHoLHlSwIjkcapsYn%2F48z1gQvqzrHvEIVa&X-Amz-Signature=96702c342e83c4ed1d71100b239c4f9c931a80db3c27cc829c882e487d3b3938&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQDP4O3D%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fvbtb%2F4UJo2eeAvRX6IwAxko8gGywP7HURuxjSV8N1QIhAK75BaDQL96880Q7XEP7xmlKbCCqe12%2B6kP5s4GXLZexKv8DCHEQABoMNjM3NDIzMTgzODA1IgxBH0X63FYNHjJXis8q3ANHkyhWRL2VrLMpEC2BTNn0zB%2BZxcQ2hdOiTr4C1u0XSc6%2Bd7GWnhJY%2BNKG%2BvgQDGfVKRv%2BLYj8cgLJVG7VMKC%2Bq22xbFKTgh%2FXaF8EdTyCSgVkO8LbGo%2BSYxZYW4VUHQcV1q2TFXVCIIzs8hH8%2BXt3rZqxCB60L4rPQ35R4vJeveij6zQAeZ5WShkO0Gl3FmRY49LKM5mFFfdjNC%2F01FbEEcoEygpyvk0wXqIaH8XwaVN1XMG931siptYwICWWAn3D9pEM6udSGGXEVxXymT9EJ2lhnq79AwbstveATA3TpAEUccZIVn6d9DXltf37l9zDUDVQtt4UMMVqPaOZi2UwYdhiANGQMw%2B0gQjWZo%2B6plmBKWNLqW8mko38VbY5kbWi4FX27eZ4INe6EPqKyaL1m8gW4BKpsa2qtYrnNIrVIBNpAtf3xrRt8OMqqOJU98REnBS%2FLyrZ4hVPnn9iVE9FAf9n8PTPWzMF3PxL%2FfRoNT%2Fq1nLRIAV8L%2BgX9cFTc7U0%2FXWxTEBgj1U0b67VzcOJ0ZTsTaxuFuQl50lQSnKQin1tRuXsUa9befVsMxTyLzxhkOHXWqMk%2FrJs9jc8PHVcE7gvt5XJ7%2FZknwirBF%2FQTyU4LFqv8%2FiQGCC1%2BDCcxfHABjqkAY94Lq9jVf%2F1zi1bd8Gr4arQsVB7txtPvYEoza1TF74rFi03pWXYu8fBg2FmTz7Z4dItZsJDsL8WFg7%2FUElQOK5AqGUhm9Qk7ZzXLSUxIB9OqZcNU14CSY3459vzSuG4FgbQER38zQFkmPwk6e5hYXKkEEYs%2Bw6BF9IEqWlVnU3J5%2B%2BvXOWElObuZJwHoLHlSwIjkcapsYn%2F48z1gQvqzrHvEIVa&X-Amz-Signature=00f99eaba8fdce54890ed57da170fc704944c8d80fd05f4ae29ff00676dd7275&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQDP4O3D%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fvbtb%2F4UJo2eeAvRX6IwAxko8gGywP7HURuxjSV8N1QIhAK75BaDQL96880Q7XEP7xmlKbCCqe12%2B6kP5s4GXLZexKv8DCHEQABoMNjM3NDIzMTgzODA1IgxBH0X63FYNHjJXis8q3ANHkyhWRL2VrLMpEC2BTNn0zB%2BZxcQ2hdOiTr4C1u0XSc6%2Bd7GWnhJY%2BNKG%2BvgQDGfVKRv%2BLYj8cgLJVG7VMKC%2Bq22xbFKTgh%2FXaF8EdTyCSgVkO8LbGo%2BSYxZYW4VUHQcV1q2TFXVCIIzs8hH8%2BXt3rZqxCB60L4rPQ35R4vJeveij6zQAeZ5WShkO0Gl3FmRY49LKM5mFFfdjNC%2F01FbEEcoEygpyvk0wXqIaH8XwaVN1XMG931siptYwICWWAn3D9pEM6udSGGXEVxXymT9EJ2lhnq79AwbstveATA3TpAEUccZIVn6d9DXltf37l9zDUDVQtt4UMMVqPaOZi2UwYdhiANGQMw%2B0gQjWZo%2B6plmBKWNLqW8mko38VbY5kbWi4FX27eZ4INe6EPqKyaL1m8gW4BKpsa2qtYrnNIrVIBNpAtf3xrRt8OMqqOJU98REnBS%2FLyrZ4hVPnn9iVE9FAf9n8PTPWzMF3PxL%2FfRoNT%2Fq1nLRIAV8L%2BgX9cFTc7U0%2FXWxTEBgj1U0b67VzcOJ0ZTsTaxuFuQl50lQSnKQin1tRuXsUa9befVsMxTyLzxhkOHXWqMk%2FrJs9jc8PHVcE7gvt5XJ7%2FZknwirBF%2FQTyU4LFqv8%2FiQGCC1%2BDCcxfHABjqkAY94Lq9jVf%2F1zi1bd8Gr4arQsVB7txtPvYEoza1TF74rFi03pWXYu8fBg2FmTz7Z4dItZsJDsL8WFg7%2FUElQOK5AqGUhm9Qk7ZzXLSUxIB9OqZcNU14CSY3459vzSuG4FgbQER38zQFkmPwk6e5hYXKkEEYs%2Bw6BF9IEqWlVnU3J5%2B%2BvXOWElObuZJwHoLHlSwIjkcapsYn%2F48z1gQvqzrHvEIVa&X-Amz-Signature=f757aaa3e617210cd49cde66ce3189f57ef2fa3f355820cea05364df77028ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQDP4O3D%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fvbtb%2F4UJo2eeAvRX6IwAxko8gGywP7HURuxjSV8N1QIhAK75BaDQL96880Q7XEP7xmlKbCCqe12%2B6kP5s4GXLZexKv8DCHEQABoMNjM3NDIzMTgzODA1IgxBH0X63FYNHjJXis8q3ANHkyhWRL2VrLMpEC2BTNn0zB%2BZxcQ2hdOiTr4C1u0XSc6%2Bd7GWnhJY%2BNKG%2BvgQDGfVKRv%2BLYj8cgLJVG7VMKC%2Bq22xbFKTgh%2FXaF8EdTyCSgVkO8LbGo%2BSYxZYW4VUHQcV1q2TFXVCIIzs8hH8%2BXt3rZqxCB60L4rPQ35R4vJeveij6zQAeZ5WShkO0Gl3FmRY49LKM5mFFfdjNC%2F01FbEEcoEygpyvk0wXqIaH8XwaVN1XMG931siptYwICWWAn3D9pEM6udSGGXEVxXymT9EJ2lhnq79AwbstveATA3TpAEUccZIVn6d9DXltf37l9zDUDVQtt4UMMVqPaOZi2UwYdhiANGQMw%2B0gQjWZo%2B6plmBKWNLqW8mko38VbY5kbWi4FX27eZ4INe6EPqKyaL1m8gW4BKpsa2qtYrnNIrVIBNpAtf3xrRt8OMqqOJU98REnBS%2FLyrZ4hVPnn9iVE9FAf9n8PTPWzMF3PxL%2FfRoNT%2Fq1nLRIAV8L%2BgX9cFTc7U0%2FXWxTEBgj1U0b67VzcOJ0ZTsTaxuFuQl50lQSnKQin1tRuXsUa9befVsMxTyLzxhkOHXWqMk%2FrJs9jc8PHVcE7gvt5XJ7%2FZknwirBF%2FQTyU4LFqv8%2FiQGCC1%2BDCcxfHABjqkAY94Lq9jVf%2F1zi1bd8Gr4arQsVB7txtPvYEoza1TF74rFi03pWXYu8fBg2FmTz7Z4dItZsJDsL8WFg7%2FUElQOK5AqGUhm9Qk7ZzXLSUxIB9OqZcNU14CSY3459vzSuG4FgbQER38zQFkmPwk6e5hYXKkEEYs%2Bw6BF9IEqWlVnU3J5%2B%2BvXOWElObuZJwHoLHlSwIjkcapsYn%2F48z1gQvqzrHvEIVa&X-Amz-Signature=db6a92b2d2fea1e688b87ff1df251417906591eb0343bc477a4bde26cce39f58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQDP4O3D%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fvbtb%2F4UJo2eeAvRX6IwAxko8gGywP7HURuxjSV8N1QIhAK75BaDQL96880Q7XEP7xmlKbCCqe12%2B6kP5s4GXLZexKv8DCHEQABoMNjM3NDIzMTgzODA1IgxBH0X63FYNHjJXis8q3ANHkyhWRL2VrLMpEC2BTNn0zB%2BZxcQ2hdOiTr4C1u0XSc6%2Bd7GWnhJY%2BNKG%2BvgQDGfVKRv%2BLYj8cgLJVG7VMKC%2Bq22xbFKTgh%2FXaF8EdTyCSgVkO8LbGo%2BSYxZYW4VUHQcV1q2TFXVCIIzs8hH8%2BXt3rZqxCB60L4rPQ35R4vJeveij6zQAeZ5WShkO0Gl3FmRY49LKM5mFFfdjNC%2F01FbEEcoEygpyvk0wXqIaH8XwaVN1XMG931siptYwICWWAn3D9pEM6udSGGXEVxXymT9EJ2lhnq79AwbstveATA3TpAEUccZIVn6d9DXltf37l9zDUDVQtt4UMMVqPaOZi2UwYdhiANGQMw%2B0gQjWZo%2B6plmBKWNLqW8mko38VbY5kbWi4FX27eZ4INe6EPqKyaL1m8gW4BKpsa2qtYrnNIrVIBNpAtf3xrRt8OMqqOJU98REnBS%2FLyrZ4hVPnn9iVE9FAf9n8PTPWzMF3PxL%2FfRoNT%2Fq1nLRIAV8L%2BgX9cFTc7U0%2FXWxTEBgj1U0b67VzcOJ0ZTsTaxuFuQl50lQSnKQin1tRuXsUa9befVsMxTyLzxhkOHXWqMk%2FrJs9jc8PHVcE7gvt5XJ7%2FZknwirBF%2FQTyU4LFqv8%2FiQGCC1%2BDCcxfHABjqkAY94Lq9jVf%2F1zi1bd8Gr4arQsVB7txtPvYEoza1TF74rFi03pWXYu8fBg2FmTz7Z4dItZsJDsL8WFg7%2FUElQOK5AqGUhm9Qk7ZzXLSUxIB9OqZcNU14CSY3459vzSuG4FgbQER38zQFkmPwk6e5hYXKkEEYs%2Bw6BF9IEqWlVnU3J5%2B%2BvXOWElObuZJwHoLHlSwIjkcapsYn%2F48z1gQvqzrHvEIVa&X-Amz-Signature=fdd6d86b53497e804785b1e3002599a0bd0bbe48656b4a35845be047eb64746b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
