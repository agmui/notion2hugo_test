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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IK37M27%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwvufcH%2Fvy5Gl3vJIuwue5%2Fsnw02byqE9UNjoC4YGIyAiEAj34qpG%2BqhDjocANI7xzplIBos%2B27owTFbr%2FMH18%2B5dIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyvZ8hVFurLTV1lVircAxF%2FLZjFIeGi93EjBlxge7aewe0lxhDkiyWg4y5cXit1WE1NR84X5N%2F6C80WtiPs7ZSHRRo2MBsJ%2B%2BSVu8%2FrtyTLBOD%2FJ7xuNX1WZD5WvFIyqHWHvPyWiUqr89D3FaLDdOFdkhg90hJ9A9GFCwpYfvJnTeziG%2FLRaioD1zt%2FP3h3JhK39tMSYW5J2OpijWf6z%2F8XseHRaEu7VZZVOIqfm%2BBVrtNwUp%2FZTdLBoQgOfhOolQ9wtH3GWEsBTxJRCx1MmKuPvfXkxiWUu5ce0dk5qehpqLi34i8HVfUNiOO8oJmp6w0kmgC%2FYGbvoKW1hbyX5QQU8%2B%2F7YlicxHyG22mS3eYOohnwXOaIzotGSIk1S8DiAZez41OQ4K%2BLBL9rhgrbzRXAtCQZTNFbze1eNmkLV1OQrF0x9yZuFtZu%2B9Ewa0ar%2BnH9yyTfY6bWjRPZZGlQSeB6uYmBX%2FB48DVyk3UykSmiCnJGtpl%2BPv6evR7pxuZJdnm8J2cq2oLZlWiHRk7cdF1ll%2Fyq4YZv7Wc8TQfh4NXCaKMtWTm%2FsKU49KNOW8Ta6SyUtMc5TSjWcSJnStK7WdxBi9IwbBTm3syjw8l9TTwve83wZi%2FgQ8V4XxhViEobt6N0alzMQ4Hlw%2FpYMKbL%2FsIGOqUBBF3cLMX%2Fk%2F7bjgchuGgQIKmyJ%2Bo5CrMoTkTedsFdP9jUWMBstbhFTgHDBJknKLhY74aknybTE%2FToJUI9WleWZmW90ww0VkQbAr%2Bc96B6OfZRh7%2FwMXPm76gKMByOjH%2FU9gYD046DPC2Z%2Bc9cATYYXrYBm7rlV6u6FLebiQ%2FCUNzzVvbqiH7H3BfnCNEEgi2YF%2BA9uO2gv534a4SgDqeNi6MKpU67&X-Amz-Signature=9a933f1aa77dc377f40ae7746788b943faaa214ee4abea24080dd086b73143f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IK37M27%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwvufcH%2Fvy5Gl3vJIuwue5%2Fsnw02byqE9UNjoC4YGIyAiEAj34qpG%2BqhDjocANI7xzplIBos%2B27owTFbr%2FMH18%2B5dIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyvZ8hVFurLTV1lVircAxF%2FLZjFIeGi93EjBlxge7aewe0lxhDkiyWg4y5cXit1WE1NR84X5N%2F6C80WtiPs7ZSHRRo2MBsJ%2B%2BSVu8%2FrtyTLBOD%2FJ7xuNX1WZD5WvFIyqHWHvPyWiUqr89D3FaLDdOFdkhg90hJ9A9GFCwpYfvJnTeziG%2FLRaioD1zt%2FP3h3JhK39tMSYW5J2OpijWf6z%2F8XseHRaEu7VZZVOIqfm%2BBVrtNwUp%2FZTdLBoQgOfhOolQ9wtH3GWEsBTxJRCx1MmKuPvfXkxiWUu5ce0dk5qehpqLi34i8HVfUNiOO8oJmp6w0kmgC%2FYGbvoKW1hbyX5QQU8%2B%2F7YlicxHyG22mS3eYOohnwXOaIzotGSIk1S8DiAZez41OQ4K%2BLBL9rhgrbzRXAtCQZTNFbze1eNmkLV1OQrF0x9yZuFtZu%2B9Ewa0ar%2BnH9yyTfY6bWjRPZZGlQSeB6uYmBX%2FB48DVyk3UykSmiCnJGtpl%2BPv6evR7pxuZJdnm8J2cq2oLZlWiHRk7cdF1ll%2Fyq4YZv7Wc8TQfh4NXCaKMtWTm%2FsKU49KNOW8Ta6SyUtMc5TSjWcSJnStK7WdxBi9IwbBTm3syjw8l9TTwve83wZi%2FgQ8V4XxhViEobt6N0alzMQ4Hlw%2FpYMKbL%2FsIGOqUBBF3cLMX%2Fk%2F7bjgchuGgQIKmyJ%2Bo5CrMoTkTedsFdP9jUWMBstbhFTgHDBJknKLhY74aknybTE%2FToJUI9WleWZmW90ww0VkQbAr%2Bc96B6OfZRh7%2FwMXPm76gKMByOjH%2FU9gYD046DPC2Z%2Bc9cATYYXrYBm7rlV6u6FLebiQ%2FCUNzzVvbqiH7H3BfnCNEEgi2YF%2BA9uO2gv534a4SgDqeNi6MKpU67&X-Amz-Signature=f09d66d873b6b2d59334a666cd7d264bd3b803c8fc4e81fffca57f9397a472ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IK37M27%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwvufcH%2Fvy5Gl3vJIuwue5%2Fsnw02byqE9UNjoC4YGIyAiEAj34qpG%2BqhDjocANI7xzplIBos%2B27owTFbr%2FMH18%2B5dIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyvZ8hVFurLTV1lVircAxF%2FLZjFIeGi93EjBlxge7aewe0lxhDkiyWg4y5cXit1WE1NR84X5N%2F6C80WtiPs7ZSHRRo2MBsJ%2B%2BSVu8%2FrtyTLBOD%2FJ7xuNX1WZD5WvFIyqHWHvPyWiUqr89D3FaLDdOFdkhg90hJ9A9GFCwpYfvJnTeziG%2FLRaioD1zt%2FP3h3JhK39tMSYW5J2OpijWf6z%2F8XseHRaEu7VZZVOIqfm%2BBVrtNwUp%2FZTdLBoQgOfhOolQ9wtH3GWEsBTxJRCx1MmKuPvfXkxiWUu5ce0dk5qehpqLi34i8HVfUNiOO8oJmp6w0kmgC%2FYGbvoKW1hbyX5QQU8%2B%2F7YlicxHyG22mS3eYOohnwXOaIzotGSIk1S8DiAZez41OQ4K%2BLBL9rhgrbzRXAtCQZTNFbze1eNmkLV1OQrF0x9yZuFtZu%2B9Ewa0ar%2BnH9yyTfY6bWjRPZZGlQSeB6uYmBX%2FB48DVyk3UykSmiCnJGtpl%2BPv6evR7pxuZJdnm8J2cq2oLZlWiHRk7cdF1ll%2Fyq4YZv7Wc8TQfh4NXCaKMtWTm%2FsKU49KNOW8Ta6SyUtMc5TSjWcSJnStK7WdxBi9IwbBTm3syjw8l9TTwve83wZi%2FgQ8V4XxhViEobt6N0alzMQ4Hlw%2FpYMKbL%2FsIGOqUBBF3cLMX%2Fk%2F7bjgchuGgQIKmyJ%2Bo5CrMoTkTedsFdP9jUWMBstbhFTgHDBJknKLhY74aknybTE%2FToJUI9WleWZmW90ww0VkQbAr%2Bc96B6OfZRh7%2FwMXPm76gKMByOjH%2FU9gYD046DPC2Z%2Bc9cATYYXrYBm7rlV6u6FLebiQ%2FCUNzzVvbqiH7H3BfnCNEEgi2YF%2BA9uO2gv534a4SgDqeNi6MKpU67&X-Amz-Signature=c8758657a85be0c0a3cec1d0cb19b6c0cf546082ab1e5f258f37959cbbb43c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IK37M27%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwvufcH%2Fvy5Gl3vJIuwue5%2Fsnw02byqE9UNjoC4YGIyAiEAj34qpG%2BqhDjocANI7xzplIBos%2B27owTFbr%2FMH18%2B5dIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyvZ8hVFurLTV1lVircAxF%2FLZjFIeGi93EjBlxge7aewe0lxhDkiyWg4y5cXit1WE1NR84X5N%2F6C80WtiPs7ZSHRRo2MBsJ%2B%2BSVu8%2FrtyTLBOD%2FJ7xuNX1WZD5WvFIyqHWHvPyWiUqr89D3FaLDdOFdkhg90hJ9A9GFCwpYfvJnTeziG%2FLRaioD1zt%2FP3h3JhK39tMSYW5J2OpijWf6z%2F8XseHRaEu7VZZVOIqfm%2BBVrtNwUp%2FZTdLBoQgOfhOolQ9wtH3GWEsBTxJRCx1MmKuPvfXkxiWUu5ce0dk5qehpqLi34i8HVfUNiOO8oJmp6w0kmgC%2FYGbvoKW1hbyX5QQU8%2B%2F7YlicxHyG22mS3eYOohnwXOaIzotGSIk1S8DiAZez41OQ4K%2BLBL9rhgrbzRXAtCQZTNFbze1eNmkLV1OQrF0x9yZuFtZu%2B9Ewa0ar%2BnH9yyTfY6bWjRPZZGlQSeB6uYmBX%2FB48DVyk3UykSmiCnJGtpl%2BPv6evR7pxuZJdnm8J2cq2oLZlWiHRk7cdF1ll%2Fyq4YZv7Wc8TQfh4NXCaKMtWTm%2FsKU49KNOW8Ta6SyUtMc5TSjWcSJnStK7WdxBi9IwbBTm3syjw8l9TTwve83wZi%2FgQ8V4XxhViEobt6N0alzMQ4Hlw%2FpYMKbL%2FsIGOqUBBF3cLMX%2Fk%2F7bjgchuGgQIKmyJ%2Bo5CrMoTkTedsFdP9jUWMBstbhFTgHDBJknKLhY74aknybTE%2FToJUI9WleWZmW90ww0VkQbAr%2Bc96B6OfZRh7%2FwMXPm76gKMByOjH%2FU9gYD046DPC2Z%2Bc9cATYYXrYBm7rlV6u6FLebiQ%2FCUNzzVvbqiH7H3BfnCNEEgi2YF%2BA9uO2gv534a4SgDqeNi6MKpU67&X-Amz-Signature=14ff419b1610e3b40d9a2016c5db87d03984a856214b904b65cf1dea49d6dfbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IK37M27%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwvufcH%2Fvy5Gl3vJIuwue5%2Fsnw02byqE9UNjoC4YGIyAiEAj34qpG%2BqhDjocANI7xzplIBos%2B27owTFbr%2FMH18%2B5dIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyvZ8hVFurLTV1lVircAxF%2FLZjFIeGi93EjBlxge7aewe0lxhDkiyWg4y5cXit1WE1NR84X5N%2F6C80WtiPs7ZSHRRo2MBsJ%2B%2BSVu8%2FrtyTLBOD%2FJ7xuNX1WZD5WvFIyqHWHvPyWiUqr89D3FaLDdOFdkhg90hJ9A9GFCwpYfvJnTeziG%2FLRaioD1zt%2FP3h3JhK39tMSYW5J2OpijWf6z%2F8XseHRaEu7VZZVOIqfm%2BBVrtNwUp%2FZTdLBoQgOfhOolQ9wtH3GWEsBTxJRCx1MmKuPvfXkxiWUu5ce0dk5qehpqLi34i8HVfUNiOO8oJmp6w0kmgC%2FYGbvoKW1hbyX5QQU8%2B%2F7YlicxHyG22mS3eYOohnwXOaIzotGSIk1S8DiAZez41OQ4K%2BLBL9rhgrbzRXAtCQZTNFbze1eNmkLV1OQrF0x9yZuFtZu%2B9Ewa0ar%2BnH9yyTfY6bWjRPZZGlQSeB6uYmBX%2FB48DVyk3UykSmiCnJGtpl%2BPv6evR7pxuZJdnm8J2cq2oLZlWiHRk7cdF1ll%2Fyq4YZv7Wc8TQfh4NXCaKMtWTm%2FsKU49KNOW8Ta6SyUtMc5TSjWcSJnStK7WdxBi9IwbBTm3syjw8l9TTwve83wZi%2FgQ8V4XxhViEobt6N0alzMQ4Hlw%2FpYMKbL%2FsIGOqUBBF3cLMX%2Fk%2F7bjgchuGgQIKmyJ%2Bo5CrMoTkTedsFdP9jUWMBstbhFTgHDBJknKLhY74aknybTE%2FToJUI9WleWZmW90ww0VkQbAr%2Bc96B6OfZRh7%2FwMXPm76gKMByOjH%2FU9gYD046DPC2Z%2Bc9cATYYXrYBm7rlV6u6FLebiQ%2FCUNzzVvbqiH7H3BfnCNEEgi2YF%2BA9uO2gv534a4SgDqeNi6MKpU67&X-Amz-Signature=8e73f60f286303fc9d2425a929507f60c16284137b4c47fad29d781da3c1481a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IK37M27%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwvufcH%2Fvy5Gl3vJIuwue5%2Fsnw02byqE9UNjoC4YGIyAiEAj34qpG%2BqhDjocANI7xzplIBos%2B27owTFbr%2FMH18%2B5dIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyvZ8hVFurLTV1lVircAxF%2FLZjFIeGi93EjBlxge7aewe0lxhDkiyWg4y5cXit1WE1NR84X5N%2F6C80WtiPs7ZSHRRo2MBsJ%2B%2BSVu8%2FrtyTLBOD%2FJ7xuNX1WZD5WvFIyqHWHvPyWiUqr89D3FaLDdOFdkhg90hJ9A9GFCwpYfvJnTeziG%2FLRaioD1zt%2FP3h3JhK39tMSYW5J2OpijWf6z%2F8XseHRaEu7VZZVOIqfm%2BBVrtNwUp%2FZTdLBoQgOfhOolQ9wtH3GWEsBTxJRCx1MmKuPvfXkxiWUu5ce0dk5qehpqLi34i8HVfUNiOO8oJmp6w0kmgC%2FYGbvoKW1hbyX5QQU8%2B%2F7YlicxHyG22mS3eYOohnwXOaIzotGSIk1S8DiAZez41OQ4K%2BLBL9rhgrbzRXAtCQZTNFbze1eNmkLV1OQrF0x9yZuFtZu%2B9Ewa0ar%2BnH9yyTfY6bWjRPZZGlQSeB6uYmBX%2FB48DVyk3UykSmiCnJGtpl%2BPv6evR7pxuZJdnm8J2cq2oLZlWiHRk7cdF1ll%2Fyq4YZv7Wc8TQfh4NXCaKMtWTm%2FsKU49KNOW8Ta6SyUtMc5TSjWcSJnStK7WdxBi9IwbBTm3syjw8l9TTwve83wZi%2FgQ8V4XxhViEobt6N0alzMQ4Hlw%2FpYMKbL%2FsIGOqUBBF3cLMX%2Fk%2F7bjgchuGgQIKmyJ%2Bo5CrMoTkTedsFdP9jUWMBstbhFTgHDBJknKLhY74aknybTE%2FToJUI9WleWZmW90ww0VkQbAr%2Bc96B6OfZRh7%2FwMXPm76gKMByOjH%2FU9gYD046DPC2Z%2Bc9cATYYXrYBm7rlV6u6FLebiQ%2FCUNzzVvbqiH7H3BfnCNEEgi2YF%2BA9uO2gv534a4SgDqeNi6MKpU67&X-Amz-Signature=28c7f3f352b8ee17870cde8684fa860b776be8a08f723e32c8cf9c4972f85e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IK37M27%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwvufcH%2Fvy5Gl3vJIuwue5%2Fsnw02byqE9UNjoC4YGIyAiEAj34qpG%2BqhDjocANI7xzplIBos%2B27owTFbr%2FMH18%2B5dIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyvZ8hVFurLTV1lVircAxF%2FLZjFIeGi93EjBlxge7aewe0lxhDkiyWg4y5cXit1WE1NR84X5N%2F6C80WtiPs7ZSHRRo2MBsJ%2B%2BSVu8%2FrtyTLBOD%2FJ7xuNX1WZD5WvFIyqHWHvPyWiUqr89D3FaLDdOFdkhg90hJ9A9GFCwpYfvJnTeziG%2FLRaioD1zt%2FP3h3JhK39tMSYW5J2OpijWf6z%2F8XseHRaEu7VZZVOIqfm%2BBVrtNwUp%2FZTdLBoQgOfhOolQ9wtH3GWEsBTxJRCx1MmKuPvfXkxiWUu5ce0dk5qehpqLi34i8HVfUNiOO8oJmp6w0kmgC%2FYGbvoKW1hbyX5QQU8%2B%2F7YlicxHyG22mS3eYOohnwXOaIzotGSIk1S8DiAZez41OQ4K%2BLBL9rhgrbzRXAtCQZTNFbze1eNmkLV1OQrF0x9yZuFtZu%2B9Ewa0ar%2BnH9yyTfY6bWjRPZZGlQSeB6uYmBX%2FB48DVyk3UykSmiCnJGtpl%2BPv6evR7pxuZJdnm8J2cq2oLZlWiHRk7cdF1ll%2Fyq4YZv7Wc8TQfh4NXCaKMtWTm%2FsKU49KNOW8Ta6SyUtMc5TSjWcSJnStK7WdxBi9IwbBTm3syjw8l9TTwve83wZi%2FgQ8V4XxhViEobt6N0alzMQ4Hlw%2FpYMKbL%2FsIGOqUBBF3cLMX%2Fk%2F7bjgchuGgQIKmyJ%2Bo5CrMoTkTedsFdP9jUWMBstbhFTgHDBJknKLhY74aknybTE%2FToJUI9WleWZmW90ww0VkQbAr%2Bc96B6OfZRh7%2FwMXPm76gKMByOjH%2FU9gYD046DPC2Z%2Bc9cATYYXrYBm7rlV6u6FLebiQ%2FCUNzzVvbqiH7H3BfnCNEEgi2YF%2BA9uO2gv534a4SgDqeNi6MKpU67&X-Amz-Signature=a55b08cafaecb864c28ead14f1f45783c921c6fcc47e127410571b7f5cdcf711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IK37M27%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwvufcH%2Fvy5Gl3vJIuwue5%2Fsnw02byqE9UNjoC4YGIyAiEAj34qpG%2BqhDjocANI7xzplIBos%2B27owTFbr%2FMH18%2B5dIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyvZ8hVFurLTV1lVircAxF%2FLZjFIeGi93EjBlxge7aewe0lxhDkiyWg4y5cXit1WE1NR84X5N%2F6C80WtiPs7ZSHRRo2MBsJ%2B%2BSVu8%2FrtyTLBOD%2FJ7xuNX1WZD5WvFIyqHWHvPyWiUqr89D3FaLDdOFdkhg90hJ9A9GFCwpYfvJnTeziG%2FLRaioD1zt%2FP3h3JhK39tMSYW5J2OpijWf6z%2F8XseHRaEu7VZZVOIqfm%2BBVrtNwUp%2FZTdLBoQgOfhOolQ9wtH3GWEsBTxJRCx1MmKuPvfXkxiWUu5ce0dk5qehpqLi34i8HVfUNiOO8oJmp6w0kmgC%2FYGbvoKW1hbyX5QQU8%2B%2F7YlicxHyG22mS3eYOohnwXOaIzotGSIk1S8DiAZez41OQ4K%2BLBL9rhgrbzRXAtCQZTNFbze1eNmkLV1OQrF0x9yZuFtZu%2B9Ewa0ar%2BnH9yyTfY6bWjRPZZGlQSeB6uYmBX%2FB48DVyk3UykSmiCnJGtpl%2BPv6evR7pxuZJdnm8J2cq2oLZlWiHRk7cdF1ll%2Fyq4YZv7Wc8TQfh4NXCaKMtWTm%2FsKU49KNOW8Ta6SyUtMc5TSjWcSJnStK7WdxBi9IwbBTm3syjw8l9TTwve83wZi%2FgQ8V4XxhViEobt6N0alzMQ4Hlw%2FpYMKbL%2FsIGOqUBBF3cLMX%2Fk%2F7bjgchuGgQIKmyJ%2Bo5CrMoTkTedsFdP9jUWMBstbhFTgHDBJknKLhY74aknybTE%2FToJUI9WleWZmW90ww0VkQbAr%2Bc96B6OfZRh7%2FwMXPm76gKMByOjH%2FU9gYD046DPC2Z%2Bc9cATYYXrYBm7rlV6u6FLebiQ%2FCUNzzVvbqiH7H3BfnCNEEgi2YF%2BA9uO2gv534a4SgDqeNi6MKpU67&X-Amz-Signature=7ad835027c90b9bc41867d55651a2077a124a0b3437bacd47d372a9e5fba2e36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
