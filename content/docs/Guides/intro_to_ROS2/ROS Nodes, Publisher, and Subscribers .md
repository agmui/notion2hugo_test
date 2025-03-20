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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOF4LWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCxFHNorkj0FB5%2FJn%2Fw7oEdSZd8unurZU6%2Fr9NlCi4RJQIhAIn6fA9AS%2F6kVSopXbqE5FLZ1arf4MGIlwrU%2F9tdqtCVKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdooPFr80FM0pqyowq3APaFPfg4GJJbpbY7HNkUb7pSEs7Nux840%2BFBUE4Q9ETGwFVkpkio5bjj2qFe%2BaeKYHsQPJMOMbPGBdBnB5yHmXgZuHHOnEIop%2F4GYEzGvqKrpQbhdNMYkeyAhRaOjuhJeiWfcaqIxJMlcCgixrrpW0mHk6T%2FZ2mOsHx3jA%2FcM%2FCnxzR006CtDnUWHIbPma%2BGFe%2BGGk0owYk9FMgf5Ij%2BnSdwajMhRFDZG6nyU53kZrLV534SWCPeG3qppIlam097t4r0MapvAsMWKh2zZCrejrdhUM0UUdXcejlzE1IV04B4mnLmgTqzWAYW811KcRl2gf4fje49lJABCXRbnyaqEjvM%2F3%2Fv3DTlNdCogdSWioBCcsvRjPMSOlEwFcMCLAAh7rK7X39ilwgLfDQ%2BPranc3oqiWEWoZJkBIE9suQYydYwGAsBgPy131q3vEmpyBGDuBbjgQ7qDyxmYTWR64Jx9smyzoptnQoq3%2BV8CARBXPw1b%2FPt4JboOL6k465b8UNq0Z0oS9O3T1KntASSwl8BWn6G1WNmg4GsCCDu1aTE2huJ4Nykt3XVL%2BEkjk5RbYtQoWlgWp6wPe5YyV98whphBtmFJv%2F4oKmh1Rs1jqxNUTvtZ8VH4D2pMmtWWijNjD0pu6%2BBjqkAbu45VkjRD%2F66od37NOets%2Bn3S%2BwLncayMHjAPLXmx4B0f9vMpxbdQEXJyqmbDE%2F%2Fuy%2B5gfFeh6AvAvecEsNEeanv%2FS%2BzxK7p720G8s4QihWQYPkrKNUyPR%2F2tkg8Zf6bCr36auZ8NncGNIz8KFOawmLmfHTV9Yyjg7jeHOak8RXzbXR8xzBxJeIgGnxQSS7F%2F481RzI%2BveWvMJjureIi4L3%2B9a9&X-Amz-Signature=3596f666a70e3a5ea2f843e9dde5d08d2ab9fedd027fc9d44c21583bf2049823&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOF4LWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCxFHNorkj0FB5%2FJn%2Fw7oEdSZd8unurZU6%2Fr9NlCi4RJQIhAIn6fA9AS%2F6kVSopXbqE5FLZ1arf4MGIlwrU%2F9tdqtCVKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdooPFr80FM0pqyowq3APaFPfg4GJJbpbY7HNkUb7pSEs7Nux840%2BFBUE4Q9ETGwFVkpkio5bjj2qFe%2BaeKYHsQPJMOMbPGBdBnB5yHmXgZuHHOnEIop%2F4GYEzGvqKrpQbhdNMYkeyAhRaOjuhJeiWfcaqIxJMlcCgixrrpW0mHk6T%2FZ2mOsHx3jA%2FcM%2FCnxzR006CtDnUWHIbPma%2BGFe%2BGGk0owYk9FMgf5Ij%2BnSdwajMhRFDZG6nyU53kZrLV534SWCPeG3qppIlam097t4r0MapvAsMWKh2zZCrejrdhUM0UUdXcejlzE1IV04B4mnLmgTqzWAYW811KcRl2gf4fje49lJABCXRbnyaqEjvM%2F3%2Fv3DTlNdCogdSWioBCcsvRjPMSOlEwFcMCLAAh7rK7X39ilwgLfDQ%2BPranc3oqiWEWoZJkBIE9suQYydYwGAsBgPy131q3vEmpyBGDuBbjgQ7qDyxmYTWR64Jx9smyzoptnQoq3%2BV8CARBXPw1b%2FPt4JboOL6k465b8UNq0Z0oS9O3T1KntASSwl8BWn6G1WNmg4GsCCDu1aTE2huJ4Nykt3XVL%2BEkjk5RbYtQoWlgWp6wPe5YyV98whphBtmFJv%2F4oKmh1Rs1jqxNUTvtZ8VH4D2pMmtWWijNjD0pu6%2BBjqkAbu45VkjRD%2F66od37NOets%2Bn3S%2BwLncayMHjAPLXmx4B0f9vMpxbdQEXJyqmbDE%2F%2Fuy%2B5gfFeh6AvAvecEsNEeanv%2FS%2BzxK7p720G8s4QihWQYPkrKNUyPR%2F2tkg8Zf6bCr36auZ8NncGNIz8KFOawmLmfHTV9Yyjg7jeHOak8RXzbXR8xzBxJeIgGnxQSS7F%2F481RzI%2BveWvMJjureIi4L3%2B9a9&X-Amz-Signature=22c17be8e6dca5631677e10efe6aa649286b47c9e0a1de015c1c6eeeb340fd77&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOF4LWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCxFHNorkj0FB5%2FJn%2Fw7oEdSZd8unurZU6%2Fr9NlCi4RJQIhAIn6fA9AS%2F6kVSopXbqE5FLZ1arf4MGIlwrU%2F9tdqtCVKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdooPFr80FM0pqyowq3APaFPfg4GJJbpbY7HNkUb7pSEs7Nux840%2BFBUE4Q9ETGwFVkpkio5bjj2qFe%2BaeKYHsQPJMOMbPGBdBnB5yHmXgZuHHOnEIop%2F4GYEzGvqKrpQbhdNMYkeyAhRaOjuhJeiWfcaqIxJMlcCgixrrpW0mHk6T%2FZ2mOsHx3jA%2FcM%2FCnxzR006CtDnUWHIbPma%2BGFe%2BGGk0owYk9FMgf5Ij%2BnSdwajMhRFDZG6nyU53kZrLV534SWCPeG3qppIlam097t4r0MapvAsMWKh2zZCrejrdhUM0UUdXcejlzE1IV04B4mnLmgTqzWAYW811KcRl2gf4fje49lJABCXRbnyaqEjvM%2F3%2Fv3DTlNdCogdSWioBCcsvRjPMSOlEwFcMCLAAh7rK7X39ilwgLfDQ%2BPranc3oqiWEWoZJkBIE9suQYydYwGAsBgPy131q3vEmpyBGDuBbjgQ7qDyxmYTWR64Jx9smyzoptnQoq3%2BV8CARBXPw1b%2FPt4JboOL6k465b8UNq0Z0oS9O3T1KntASSwl8BWn6G1WNmg4GsCCDu1aTE2huJ4Nykt3XVL%2BEkjk5RbYtQoWlgWp6wPe5YyV98whphBtmFJv%2F4oKmh1Rs1jqxNUTvtZ8VH4D2pMmtWWijNjD0pu6%2BBjqkAbu45VkjRD%2F66od37NOets%2Bn3S%2BwLncayMHjAPLXmx4B0f9vMpxbdQEXJyqmbDE%2F%2Fuy%2B5gfFeh6AvAvecEsNEeanv%2FS%2BzxK7p720G8s4QihWQYPkrKNUyPR%2F2tkg8Zf6bCr36auZ8NncGNIz8KFOawmLmfHTV9Yyjg7jeHOak8RXzbXR8xzBxJeIgGnxQSS7F%2F481RzI%2BveWvMJjureIi4L3%2B9a9&X-Amz-Signature=a821dfa722e641467b951b5d5a0c13f38c57e45a09dd3d1e5dc0caa81a0b7e15&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOF4LWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCxFHNorkj0FB5%2FJn%2Fw7oEdSZd8unurZU6%2Fr9NlCi4RJQIhAIn6fA9AS%2F6kVSopXbqE5FLZ1arf4MGIlwrU%2F9tdqtCVKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdooPFr80FM0pqyowq3APaFPfg4GJJbpbY7HNkUb7pSEs7Nux840%2BFBUE4Q9ETGwFVkpkio5bjj2qFe%2BaeKYHsQPJMOMbPGBdBnB5yHmXgZuHHOnEIop%2F4GYEzGvqKrpQbhdNMYkeyAhRaOjuhJeiWfcaqIxJMlcCgixrrpW0mHk6T%2FZ2mOsHx3jA%2FcM%2FCnxzR006CtDnUWHIbPma%2BGFe%2BGGk0owYk9FMgf5Ij%2BnSdwajMhRFDZG6nyU53kZrLV534SWCPeG3qppIlam097t4r0MapvAsMWKh2zZCrejrdhUM0UUdXcejlzE1IV04B4mnLmgTqzWAYW811KcRl2gf4fje49lJABCXRbnyaqEjvM%2F3%2Fv3DTlNdCogdSWioBCcsvRjPMSOlEwFcMCLAAh7rK7X39ilwgLfDQ%2BPranc3oqiWEWoZJkBIE9suQYydYwGAsBgPy131q3vEmpyBGDuBbjgQ7qDyxmYTWR64Jx9smyzoptnQoq3%2BV8CARBXPw1b%2FPt4JboOL6k465b8UNq0Z0oS9O3T1KntASSwl8BWn6G1WNmg4GsCCDu1aTE2huJ4Nykt3XVL%2BEkjk5RbYtQoWlgWp6wPe5YyV98whphBtmFJv%2F4oKmh1Rs1jqxNUTvtZ8VH4D2pMmtWWijNjD0pu6%2BBjqkAbu45VkjRD%2F66od37NOets%2Bn3S%2BwLncayMHjAPLXmx4B0f9vMpxbdQEXJyqmbDE%2F%2Fuy%2B5gfFeh6AvAvecEsNEeanv%2FS%2BzxK7p720G8s4QihWQYPkrKNUyPR%2F2tkg8Zf6bCr36auZ8NncGNIz8KFOawmLmfHTV9Yyjg7jeHOak8RXzbXR8xzBxJeIgGnxQSS7F%2F481RzI%2BveWvMJjureIi4L3%2B9a9&X-Amz-Signature=49531d6d7939d6c85fb8f187fe0711b886ba8680ec13c11359fc1622965008dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOF4LWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCxFHNorkj0FB5%2FJn%2Fw7oEdSZd8unurZU6%2Fr9NlCi4RJQIhAIn6fA9AS%2F6kVSopXbqE5FLZ1arf4MGIlwrU%2F9tdqtCVKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdooPFr80FM0pqyowq3APaFPfg4GJJbpbY7HNkUb7pSEs7Nux840%2BFBUE4Q9ETGwFVkpkio5bjj2qFe%2BaeKYHsQPJMOMbPGBdBnB5yHmXgZuHHOnEIop%2F4GYEzGvqKrpQbhdNMYkeyAhRaOjuhJeiWfcaqIxJMlcCgixrrpW0mHk6T%2FZ2mOsHx3jA%2FcM%2FCnxzR006CtDnUWHIbPma%2BGFe%2BGGk0owYk9FMgf5Ij%2BnSdwajMhRFDZG6nyU53kZrLV534SWCPeG3qppIlam097t4r0MapvAsMWKh2zZCrejrdhUM0UUdXcejlzE1IV04B4mnLmgTqzWAYW811KcRl2gf4fje49lJABCXRbnyaqEjvM%2F3%2Fv3DTlNdCogdSWioBCcsvRjPMSOlEwFcMCLAAh7rK7X39ilwgLfDQ%2BPranc3oqiWEWoZJkBIE9suQYydYwGAsBgPy131q3vEmpyBGDuBbjgQ7qDyxmYTWR64Jx9smyzoptnQoq3%2BV8CARBXPw1b%2FPt4JboOL6k465b8UNq0Z0oS9O3T1KntASSwl8BWn6G1WNmg4GsCCDu1aTE2huJ4Nykt3XVL%2BEkjk5RbYtQoWlgWp6wPe5YyV98whphBtmFJv%2F4oKmh1Rs1jqxNUTvtZ8VH4D2pMmtWWijNjD0pu6%2BBjqkAbu45VkjRD%2F66od37NOets%2Bn3S%2BwLncayMHjAPLXmx4B0f9vMpxbdQEXJyqmbDE%2F%2Fuy%2B5gfFeh6AvAvecEsNEeanv%2FS%2BzxK7p720G8s4QihWQYPkrKNUyPR%2F2tkg8Zf6bCr36auZ8NncGNIz8KFOawmLmfHTV9Yyjg7jeHOak8RXzbXR8xzBxJeIgGnxQSS7F%2F481RzI%2BveWvMJjureIi4L3%2B9a9&X-Amz-Signature=eaac44eca375a933029cfda84dc5c2a24a1da191349bfa12ddde78b46b0d9325&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOF4LWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCxFHNorkj0FB5%2FJn%2Fw7oEdSZd8unurZU6%2Fr9NlCi4RJQIhAIn6fA9AS%2F6kVSopXbqE5FLZ1arf4MGIlwrU%2F9tdqtCVKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdooPFr80FM0pqyowq3APaFPfg4GJJbpbY7HNkUb7pSEs7Nux840%2BFBUE4Q9ETGwFVkpkio5bjj2qFe%2BaeKYHsQPJMOMbPGBdBnB5yHmXgZuHHOnEIop%2F4GYEzGvqKrpQbhdNMYkeyAhRaOjuhJeiWfcaqIxJMlcCgixrrpW0mHk6T%2FZ2mOsHx3jA%2FcM%2FCnxzR006CtDnUWHIbPma%2BGFe%2BGGk0owYk9FMgf5Ij%2BnSdwajMhRFDZG6nyU53kZrLV534SWCPeG3qppIlam097t4r0MapvAsMWKh2zZCrejrdhUM0UUdXcejlzE1IV04B4mnLmgTqzWAYW811KcRl2gf4fje49lJABCXRbnyaqEjvM%2F3%2Fv3DTlNdCogdSWioBCcsvRjPMSOlEwFcMCLAAh7rK7X39ilwgLfDQ%2BPranc3oqiWEWoZJkBIE9suQYydYwGAsBgPy131q3vEmpyBGDuBbjgQ7qDyxmYTWR64Jx9smyzoptnQoq3%2BV8CARBXPw1b%2FPt4JboOL6k465b8UNq0Z0oS9O3T1KntASSwl8BWn6G1WNmg4GsCCDu1aTE2huJ4Nykt3XVL%2BEkjk5RbYtQoWlgWp6wPe5YyV98whphBtmFJv%2F4oKmh1Rs1jqxNUTvtZ8VH4D2pMmtWWijNjD0pu6%2BBjqkAbu45VkjRD%2F66od37NOets%2Bn3S%2BwLncayMHjAPLXmx4B0f9vMpxbdQEXJyqmbDE%2F%2Fuy%2B5gfFeh6AvAvecEsNEeanv%2FS%2BzxK7p720G8s4QihWQYPkrKNUyPR%2F2tkg8Zf6bCr36auZ8NncGNIz8KFOawmLmfHTV9Yyjg7jeHOak8RXzbXR8xzBxJeIgGnxQSS7F%2F481RzI%2BveWvMJjureIi4L3%2B9a9&X-Amz-Signature=71292d05bb14d308ebe81aa874f0f6ea2953769a56524835700d327865a1b822&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOF4LWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCxFHNorkj0FB5%2FJn%2Fw7oEdSZd8unurZU6%2Fr9NlCi4RJQIhAIn6fA9AS%2F6kVSopXbqE5FLZ1arf4MGIlwrU%2F9tdqtCVKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdooPFr80FM0pqyowq3APaFPfg4GJJbpbY7HNkUb7pSEs7Nux840%2BFBUE4Q9ETGwFVkpkio5bjj2qFe%2BaeKYHsQPJMOMbPGBdBnB5yHmXgZuHHOnEIop%2F4GYEzGvqKrpQbhdNMYkeyAhRaOjuhJeiWfcaqIxJMlcCgixrrpW0mHk6T%2FZ2mOsHx3jA%2FcM%2FCnxzR006CtDnUWHIbPma%2BGFe%2BGGk0owYk9FMgf5Ij%2BnSdwajMhRFDZG6nyU53kZrLV534SWCPeG3qppIlam097t4r0MapvAsMWKh2zZCrejrdhUM0UUdXcejlzE1IV04B4mnLmgTqzWAYW811KcRl2gf4fje49lJABCXRbnyaqEjvM%2F3%2Fv3DTlNdCogdSWioBCcsvRjPMSOlEwFcMCLAAh7rK7X39ilwgLfDQ%2BPranc3oqiWEWoZJkBIE9suQYydYwGAsBgPy131q3vEmpyBGDuBbjgQ7qDyxmYTWR64Jx9smyzoptnQoq3%2BV8CARBXPw1b%2FPt4JboOL6k465b8UNq0Z0oS9O3T1KntASSwl8BWn6G1WNmg4GsCCDu1aTE2huJ4Nykt3XVL%2BEkjk5RbYtQoWlgWp6wPe5YyV98whphBtmFJv%2F4oKmh1Rs1jqxNUTvtZ8VH4D2pMmtWWijNjD0pu6%2BBjqkAbu45VkjRD%2F66od37NOets%2Bn3S%2BwLncayMHjAPLXmx4B0f9vMpxbdQEXJyqmbDE%2F%2Fuy%2B5gfFeh6AvAvecEsNEeanv%2FS%2BzxK7p720G8s4QihWQYPkrKNUyPR%2F2tkg8Zf6bCr36auZ8NncGNIz8KFOawmLmfHTV9Yyjg7jeHOak8RXzbXR8xzBxJeIgGnxQSS7F%2F481RzI%2BveWvMJjureIi4L3%2B9a9&X-Amz-Signature=1edaa5f20914bc4971d71de75e92afea546cb5bb3c87a49ba5044eafe6f59724&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOF4LWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCxFHNorkj0FB5%2FJn%2Fw7oEdSZd8unurZU6%2Fr9NlCi4RJQIhAIn6fA9AS%2F6kVSopXbqE5FLZ1arf4MGIlwrU%2F9tdqtCVKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdooPFr80FM0pqyowq3APaFPfg4GJJbpbY7HNkUb7pSEs7Nux840%2BFBUE4Q9ETGwFVkpkio5bjj2qFe%2BaeKYHsQPJMOMbPGBdBnB5yHmXgZuHHOnEIop%2F4GYEzGvqKrpQbhdNMYkeyAhRaOjuhJeiWfcaqIxJMlcCgixrrpW0mHk6T%2FZ2mOsHx3jA%2FcM%2FCnxzR006CtDnUWHIbPma%2BGFe%2BGGk0owYk9FMgf5Ij%2BnSdwajMhRFDZG6nyU53kZrLV534SWCPeG3qppIlam097t4r0MapvAsMWKh2zZCrejrdhUM0UUdXcejlzE1IV04B4mnLmgTqzWAYW811KcRl2gf4fje49lJABCXRbnyaqEjvM%2F3%2Fv3DTlNdCogdSWioBCcsvRjPMSOlEwFcMCLAAh7rK7X39ilwgLfDQ%2BPranc3oqiWEWoZJkBIE9suQYydYwGAsBgPy131q3vEmpyBGDuBbjgQ7qDyxmYTWR64Jx9smyzoptnQoq3%2BV8CARBXPw1b%2FPt4JboOL6k465b8UNq0Z0oS9O3T1KntASSwl8BWn6G1WNmg4GsCCDu1aTE2huJ4Nykt3XVL%2BEkjk5RbYtQoWlgWp6wPe5YyV98whphBtmFJv%2F4oKmh1Rs1jqxNUTvtZ8VH4D2pMmtWWijNjD0pu6%2BBjqkAbu45VkjRD%2F66od37NOets%2Bn3S%2BwLncayMHjAPLXmx4B0f9vMpxbdQEXJyqmbDE%2F%2Fuy%2B5gfFeh6AvAvecEsNEeanv%2FS%2BzxK7p720G8s4QihWQYPkrKNUyPR%2F2tkg8Zf6bCr36auZ8NncGNIz8KFOawmLmfHTV9Yyjg7jeHOak8RXzbXR8xzBxJeIgGnxQSS7F%2F481RzI%2BveWvMJjureIi4L3%2B9a9&X-Amz-Signature=35d815ac4368c69585497b23ab1156ac5bf11b3f8b29ba7dca8f9004d10917cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
