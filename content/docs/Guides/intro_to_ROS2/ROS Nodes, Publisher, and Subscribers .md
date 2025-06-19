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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGPJQPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETLP30QXZ7MxN2RQ9ulVeFlfT8LJpo7DO0yQriiE4clAiEA7SK8Izmi8MXpTHddZBOy%2BA5eELvWYS3QTVrFEo0ahIYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8BMPZyp7lY4RNtyircA9D%2Fc5K795QHsGqUehChP1gGc%2B7pxLCwRoV%2BW6n01uk826DfGwjev7d%2BUYuoJ7FI%2Fi4fJYpw%2Fb6c%2Brn1Jdd6P%2F1h%2BTiMXbOQQrLllEqK78%2BA2jhKYyysP27pxHlQhDCc7LVLJPycDIcLVgvx9pciSYpP%2FL%2B4Sib8PheB6%2Bn79DjVY8LWEau2TJhv8qCPW%2BsUcxdqXDL7ZBwLrvlNFeilYkJeODzFI251dM6q1dDyEPIYL%2BEDpkUnlPR8cBLZGGqGAbg0sTJ104XT2yKwZmVWXjmatjo1BIE9Hryy74q3oXZ0vf6zD55o4FXaWJ7ER7Q9vAyVoa0fbjn82KbVeIQ9nXbx3b35PD8ZA6pfoDbiaUL5SAZ7aPDbPANoLbrLnQ7buVdrTiZHxcUXCaDwgNTkLVOl4fdDkC5RvgO%2FGMzwLnbfqpF%2BbdvHCpezgI7BPvuPfXyL%2FO6kygQNY5d34W%2FmF%2B1wTY%2FjDP2APneyC5XrO9yWks6odZKPLa45gLImyAzAT%2F2%2Fb%2FfpMKwus8EmZ02y%2BjqamLAS6JNW%2FQf0jnRqjTIdBTDF32cEdFlyHTHtu8XcfK%2FxV8dxJIwT05AZ%2BA%2BZUFndw9wXmXhEMjggXrXebjG4cnYwSRuuUFkSKkOFMIKJ0MIGOqUBAXoi7CCnVnGQT6m7BXWAbg21Tr6V%2FRrM0xpSu6B1JLoqJkgZ0gdXLymbvO5%2FeXN2l3aQdCwCdeaOqccoLoOgDL8WId%2B6je7JSR%2BoAGayHY96lMcyVYeyvKb5VqhumUkcBC4VFDggUHGlz%2B8J%2F5kLHgnqL1XiL9rBJbezk4Y97DP1o8LXNNHFOFEsZpEnB1jY0Uw%2F4vZ5%2FrQn%2BdR7Nxr4ocqy4szM&X-Amz-Signature=e13d54a8eb60f2576ea2eb4abb76020b5f7496fed4c29440d456f7df248e8cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGPJQPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETLP30QXZ7MxN2RQ9ulVeFlfT8LJpo7DO0yQriiE4clAiEA7SK8Izmi8MXpTHddZBOy%2BA5eELvWYS3QTVrFEo0ahIYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8BMPZyp7lY4RNtyircA9D%2Fc5K795QHsGqUehChP1gGc%2B7pxLCwRoV%2BW6n01uk826DfGwjev7d%2BUYuoJ7FI%2Fi4fJYpw%2Fb6c%2Brn1Jdd6P%2F1h%2BTiMXbOQQrLllEqK78%2BA2jhKYyysP27pxHlQhDCc7LVLJPycDIcLVgvx9pciSYpP%2FL%2B4Sib8PheB6%2Bn79DjVY8LWEau2TJhv8qCPW%2BsUcxdqXDL7ZBwLrvlNFeilYkJeODzFI251dM6q1dDyEPIYL%2BEDpkUnlPR8cBLZGGqGAbg0sTJ104XT2yKwZmVWXjmatjo1BIE9Hryy74q3oXZ0vf6zD55o4FXaWJ7ER7Q9vAyVoa0fbjn82KbVeIQ9nXbx3b35PD8ZA6pfoDbiaUL5SAZ7aPDbPANoLbrLnQ7buVdrTiZHxcUXCaDwgNTkLVOl4fdDkC5RvgO%2FGMzwLnbfqpF%2BbdvHCpezgI7BPvuPfXyL%2FO6kygQNY5d34W%2FmF%2B1wTY%2FjDP2APneyC5XrO9yWks6odZKPLa45gLImyAzAT%2F2%2Fb%2FfpMKwus8EmZ02y%2BjqamLAS6JNW%2FQf0jnRqjTIdBTDF32cEdFlyHTHtu8XcfK%2FxV8dxJIwT05AZ%2BA%2BZUFndw9wXmXhEMjggXrXebjG4cnYwSRuuUFkSKkOFMIKJ0MIGOqUBAXoi7CCnVnGQT6m7BXWAbg21Tr6V%2FRrM0xpSu6B1JLoqJkgZ0gdXLymbvO5%2FeXN2l3aQdCwCdeaOqccoLoOgDL8WId%2B6je7JSR%2BoAGayHY96lMcyVYeyvKb5VqhumUkcBC4VFDggUHGlz%2B8J%2F5kLHgnqL1XiL9rBJbezk4Y97DP1o8LXNNHFOFEsZpEnB1jY0Uw%2F4vZ5%2FrQn%2BdR7Nxr4ocqy4szM&X-Amz-Signature=f2d1b135143dc2ea2e6f478b3303bf358759719ceb1d285f1f31f7c0e34869fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGPJQPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETLP30QXZ7MxN2RQ9ulVeFlfT8LJpo7DO0yQriiE4clAiEA7SK8Izmi8MXpTHddZBOy%2BA5eELvWYS3QTVrFEo0ahIYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8BMPZyp7lY4RNtyircA9D%2Fc5K795QHsGqUehChP1gGc%2B7pxLCwRoV%2BW6n01uk826DfGwjev7d%2BUYuoJ7FI%2Fi4fJYpw%2Fb6c%2Brn1Jdd6P%2F1h%2BTiMXbOQQrLllEqK78%2BA2jhKYyysP27pxHlQhDCc7LVLJPycDIcLVgvx9pciSYpP%2FL%2B4Sib8PheB6%2Bn79DjVY8LWEau2TJhv8qCPW%2BsUcxdqXDL7ZBwLrvlNFeilYkJeODzFI251dM6q1dDyEPIYL%2BEDpkUnlPR8cBLZGGqGAbg0sTJ104XT2yKwZmVWXjmatjo1BIE9Hryy74q3oXZ0vf6zD55o4FXaWJ7ER7Q9vAyVoa0fbjn82KbVeIQ9nXbx3b35PD8ZA6pfoDbiaUL5SAZ7aPDbPANoLbrLnQ7buVdrTiZHxcUXCaDwgNTkLVOl4fdDkC5RvgO%2FGMzwLnbfqpF%2BbdvHCpezgI7BPvuPfXyL%2FO6kygQNY5d34W%2FmF%2B1wTY%2FjDP2APneyC5XrO9yWks6odZKPLa45gLImyAzAT%2F2%2Fb%2FfpMKwus8EmZ02y%2BjqamLAS6JNW%2FQf0jnRqjTIdBTDF32cEdFlyHTHtu8XcfK%2FxV8dxJIwT05AZ%2BA%2BZUFndw9wXmXhEMjggXrXebjG4cnYwSRuuUFkSKkOFMIKJ0MIGOqUBAXoi7CCnVnGQT6m7BXWAbg21Tr6V%2FRrM0xpSu6B1JLoqJkgZ0gdXLymbvO5%2FeXN2l3aQdCwCdeaOqccoLoOgDL8WId%2B6je7JSR%2BoAGayHY96lMcyVYeyvKb5VqhumUkcBC4VFDggUHGlz%2B8J%2F5kLHgnqL1XiL9rBJbezk4Y97DP1o8LXNNHFOFEsZpEnB1jY0Uw%2F4vZ5%2FrQn%2BdR7Nxr4ocqy4szM&X-Amz-Signature=1bbda142a0ed57eeb4a404b687d308a93e10bb5207fb54f1011adbeb14b8302d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGPJQPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETLP30QXZ7MxN2RQ9ulVeFlfT8LJpo7DO0yQriiE4clAiEA7SK8Izmi8MXpTHddZBOy%2BA5eELvWYS3QTVrFEo0ahIYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8BMPZyp7lY4RNtyircA9D%2Fc5K795QHsGqUehChP1gGc%2B7pxLCwRoV%2BW6n01uk826DfGwjev7d%2BUYuoJ7FI%2Fi4fJYpw%2Fb6c%2Brn1Jdd6P%2F1h%2BTiMXbOQQrLllEqK78%2BA2jhKYyysP27pxHlQhDCc7LVLJPycDIcLVgvx9pciSYpP%2FL%2B4Sib8PheB6%2Bn79DjVY8LWEau2TJhv8qCPW%2BsUcxdqXDL7ZBwLrvlNFeilYkJeODzFI251dM6q1dDyEPIYL%2BEDpkUnlPR8cBLZGGqGAbg0sTJ104XT2yKwZmVWXjmatjo1BIE9Hryy74q3oXZ0vf6zD55o4FXaWJ7ER7Q9vAyVoa0fbjn82KbVeIQ9nXbx3b35PD8ZA6pfoDbiaUL5SAZ7aPDbPANoLbrLnQ7buVdrTiZHxcUXCaDwgNTkLVOl4fdDkC5RvgO%2FGMzwLnbfqpF%2BbdvHCpezgI7BPvuPfXyL%2FO6kygQNY5d34W%2FmF%2B1wTY%2FjDP2APneyC5XrO9yWks6odZKPLa45gLImyAzAT%2F2%2Fb%2FfpMKwus8EmZ02y%2BjqamLAS6JNW%2FQf0jnRqjTIdBTDF32cEdFlyHTHtu8XcfK%2FxV8dxJIwT05AZ%2BA%2BZUFndw9wXmXhEMjggXrXebjG4cnYwSRuuUFkSKkOFMIKJ0MIGOqUBAXoi7CCnVnGQT6m7BXWAbg21Tr6V%2FRrM0xpSu6B1JLoqJkgZ0gdXLymbvO5%2FeXN2l3aQdCwCdeaOqccoLoOgDL8WId%2B6je7JSR%2BoAGayHY96lMcyVYeyvKb5VqhumUkcBC4VFDggUHGlz%2B8J%2F5kLHgnqL1XiL9rBJbezk4Y97DP1o8LXNNHFOFEsZpEnB1jY0Uw%2F4vZ5%2FrQn%2BdR7Nxr4ocqy4szM&X-Amz-Signature=30ea1034046802cb778ce8912214ccd9ab6f3a0ca0b52d67dc17faa5466ff494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGPJQPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETLP30QXZ7MxN2RQ9ulVeFlfT8LJpo7DO0yQriiE4clAiEA7SK8Izmi8MXpTHddZBOy%2BA5eELvWYS3QTVrFEo0ahIYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8BMPZyp7lY4RNtyircA9D%2Fc5K795QHsGqUehChP1gGc%2B7pxLCwRoV%2BW6n01uk826DfGwjev7d%2BUYuoJ7FI%2Fi4fJYpw%2Fb6c%2Brn1Jdd6P%2F1h%2BTiMXbOQQrLllEqK78%2BA2jhKYyysP27pxHlQhDCc7LVLJPycDIcLVgvx9pciSYpP%2FL%2B4Sib8PheB6%2Bn79DjVY8LWEau2TJhv8qCPW%2BsUcxdqXDL7ZBwLrvlNFeilYkJeODzFI251dM6q1dDyEPIYL%2BEDpkUnlPR8cBLZGGqGAbg0sTJ104XT2yKwZmVWXjmatjo1BIE9Hryy74q3oXZ0vf6zD55o4FXaWJ7ER7Q9vAyVoa0fbjn82KbVeIQ9nXbx3b35PD8ZA6pfoDbiaUL5SAZ7aPDbPANoLbrLnQ7buVdrTiZHxcUXCaDwgNTkLVOl4fdDkC5RvgO%2FGMzwLnbfqpF%2BbdvHCpezgI7BPvuPfXyL%2FO6kygQNY5d34W%2FmF%2B1wTY%2FjDP2APneyC5XrO9yWks6odZKPLa45gLImyAzAT%2F2%2Fb%2FfpMKwus8EmZ02y%2BjqamLAS6JNW%2FQf0jnRqjTIdBTDF32cEdFlyHTHtu8XcfK%2FxV8dxJIwT05AZ%2BA%2BZUFndw9wXmXhEMjggXrXebjG4cnYwSRuuUFkSKkOFMIKJ0MIGOqUBAXoi7CCnVnGQT6m7BXWAbg21Tr6V%2FRrM0xpSu6B1JLoqJkgZ0gdXLymbvO5%2FeXN2l3aQdCwCdeaOqccoLoOgDL8WId%2B6je7JSR%2BoAGayHY96lMcyVYeyvKb5VqhumUkcBC4VFDggUHGlz%2B8J%2F5kLHgnqL1XiL9rBJbezk4Y97DP1o8LXNNHFOFEsZpEnB1jY0Uw%2F4vZ5%2FrQn%2BdR7Nxr4ocqy4szM&X-Amz-Signature=c8a4bd72aa9067c76ef84b6977d61063c395bef0fb5b4330a85f850f626998a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGPJQPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETLP30QXZ7MxN2RQ9ulVeFlfT8LJpo7DO0yQriiE4clAiEA7SK8Izmi8MXpTHddZBOy%2BA5eELvWYS3QTVrFEo0ahIYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8BMPZyp7lY4RNtyircA9D%2Fc5K795QHsGqUehChP1gGc%2B7pxLCwRoV%2BW6n01uk826DfGwjev7d%2BUYuoJ7FI%2Fi4fJYpw%2Fb6c%2Brn1Jdd6P%2F1h%2BTiMXbOQQrLllEqK78%2BA2jhKYyysP27pxHlQhDCc7LVLJPycDIcLVgvx9pciSYpP%2FL%2B4Sib8PheB6%2Bn79DjVY8LWEau2TJhv8qCPW%2BsUcxdqXDL7ZBwLrvlNFeilYkJeODzFI251dM6q1dDyEPIYL%2BEDpkUnlPR8cBLZGGqGAbg0sTJ104XT2yKwZmVWXjmatjo1BIE9Hryy74q3oXZ0vf6zD55o4FXaWJ7ER7Q9vAyVoa0fbjn82KbVeIQ9nXbx3b35PD8ZA6pfoDbiaUL5SAZ7aPDbPANoLbrLnQ7buVdrTiZHxcUXCaDwgNTkLVOl4fdDkC5RvgO%2FGMzwLnbfqpF%2BbdvHCpezgI7BPvuPfXyL%2FO6kygQNY5d34W%2FmF%2B1wTY%2FjDP2APneyC5XrO9yWks6odZKPLa45gLImyAzAT%2F2%2Fb%2FfpMKwus8EmZ02y%2BjqamLAS6JNW%2FQf0jnRqjTIdBTDF32cEdFlyHTHtu8XcfK%2FxV8dxJIwT05AZ%2BA%2BZUFndw9wXmXhEMjggXrXebjG4cnYwSRuuUFkSKkOFMIKJ0MIGOqUBAXoi7CCnVnGQT6m7BXWAbg21Tr6V%2FRrM0xpSu6B1JLoqJkgZ0gdXLymbvO5%2FeXN2l3aQdCwCdeaOqccoLoOgDL8WId%2B6je7JSR%2BoAGayHY96lMcyVYeyvKb5VqhumUkcBC4VFDggUHGlz%2B8J%2F5kLHgnqL1XiL9rBJbezk4Y97DP1o8LXNNHFOFEsZpEnB1jY0Uw%2F4vZ5%2FrQn%2BdR7Nxr4ocqy4szM&X-Amz-Signature=c0353578d4abdd3ff4c0d639213da58ea8e7dbf0e3095244f2791332ebfdcdb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGPJQPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETLP30QXZ7MxN2RQ9ulVeFlfT8LJpo7DO0yQriiE4clAiEA7SK8Izmi8MXpTHddZBOy%2BA5eELvWYS3QTVrFEo0ahIYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8BMPZyp7lY4RNtyircA9D%2Fc5K795QHsGqUehChP1gGc%2B7pxLCwRoV%2BW6n01uk826DfGwjev7d%2BUYuoJ7FI%2Fi4fJYpw%2Fb6c%2Brn1Jdd6P%2F1h%2BTiMXbOQQrLllEqK78%2BA2jhKYyysP27pxHlQhDCc7LVLJPycDIcLVgvx9pciSYpP%2FL%2B4Sib8PheB6%2Bn79DjVY8LWEau2TJhv8qCPW%2BsUcxdqXDL7ZBwLrvlNFeilYkJeODzFI251dM6q1dDyEPIYL%2BEDpkUnlPR8cBLZGGqGAbg0sTJ104XT2yKwZmVWXjmatjo1BIE9Hryy74q3oXZ0vf6zD55o4FXaWJ7ER7Q9vAyVoa0fbjn82KbVeIQ9nXbx3b35PD8ZA6pfoDbiaUL5SAZ7aPDbPANoLbrLnQ7buVdrTiZHxcUXCaDwgNTkLVOl4fdDkC5RvgO%2FGMzwLnbfqpF%2BbdvHCpezgI7BPvuPfXyL%2FO6kygQNY5d34W%2FmF%2B1wTY%2FjDP2APneyC5XrO9yWks6odZKPLa45gLImyAzAT%2F2%2Fb%2FfpMKwus8EmZ02y%2BjqamLAS6JNW%2FQf0jnRqjTIdBTDF32cEdFlyHTHtu8XcfK%2FxV8dxJIwT05AZ%2BA%2BZUFndw9wXmXhEMjggXrXebjG4cnYwSRuuUFkSKkOFMIKJ0MIGOqUBAXoi7CCnVnGQT6m7BXWAbg21Tr6V%2FRrM0xpSu6B1JLoqJkgZ0gdXLymbvO5%2FeXN2l3aQdCwCdeaOqccoLoOgDL8WId%2B6je7JSR%2BoAGayHY96lMcyVYeyvKb5VqhumUkcBC4VFDggUHGlz%2B8J%2F5kLHgnqL1XiL9rBJbezk4Y97DP1o8LXNNHFOFEsZpEnB1jY0Uw%2F4vZ5%2FrQn%2BdR7Nxr4ocqy4szM&X-Amz-Signature=5482cdb2593186dacbb07e51f6d92abf6ff5387ea64989928ff9442e4fdeccfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGPJQPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETLP30QXZ7MxN2RQ9ulVeFlfT8LJpo7DO0yQriiE4clAiEA7SK8Izmi8MXpTHddZBOy%2BA5eELvWYS3QTVrFEo0ahIYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8BMPZyp7lY4RNtyircA9D%2Fc5K795QHsGqUehChP1gGc%2B7pxLCwRoV%2BW6n01uk826DfGwjev7d%2BUYuoJ7FI%2Fi4fJYpw%2Fb6c%2Brn1Jdd6P%2F1h%2BTiMXbOQQrLllEqK78%2BA2jhKYyysP27pxHlQhDCc7LVLJPycDIcLVgvx9pciSYpP%2FL%2B4Sib8PheB6%2Bn79DjVY8LWEau2TJhv8qCPW%2BsUcxdqXDL7ZBwLrvlNFeilYkJeODzFI251dM6q1dDyEPIYL%2BEDpkUnlPR8cBLZGGqGAbg0sTJ104XT2yKwZmVWXjmatjo1BIE9Hryy74q3oXZ0vf6zD55o4FXaWJ7ER7Q9vAyVoa0fbjn82KbVeIQ9nXbx3b35PD8ZA6pfoDbiaUL5SAZ7aPDbPANoLbrLnQ7buVdrTiZHxcUXCaDwgNTkLVOl4fdDkC5RvgO%2FGMzwLnbfqpF%2BbdvHCpezgI7BPvuPfXyL%2FO6kygQNY5d34W%2FmF%2B1wTY%2FjDP2APneyC5XrO9yWks6odZKPLa45gLImyAzAT%2F2%2Fb%2FfpMKwus8EmZ02y%2BjqamLAS6JNW%2FQf0jnRqjTIdBTDF32cEdFlyHTHtu8XcfK%2FxV8dxJIwT05AZ%2BA%2BZUFndw9wXmXhEMjggXrXebjG4cnYwSRuuUFkSKkOFMIKJ0MIGOqUBAXoi7CCnVnGQT6m7BXWAbg21Tr6V%2FRrM0xpSu6B1JLoqJkgZ0gdXLymbvO5%2FeXN2l3aQdCwCdeaOqccoLoOgDL8WId%2B6je7JSR%2BoAGayHY96lMcyVYeyvKb5VqhumUkcBC4VFDggUHGlz%2B8J%2F5kLHgnqL1XiL9rBJbezk4Y97DP1o8LXNNHFOFEsZpEnB1jY0Uw%2F4vZ5%2FrQn%2BdR7Nxr4ocqy4szM&X-Amz-Signature=1e8806949440a7b792f5f1088fcd439e2e46d82f57a0941f5e0fb600fdd3a878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
