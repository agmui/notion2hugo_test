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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYUIJL3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCu0iQXp0oTUuu64TFjjLj8IduCLA9tOg9Tvzz%2BVgOYJAIgI%2B9KuAdy8fPYY4MFlH0rw%2FX7yHX2udf1fp1cbHqn7mMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEoPi0Gt8adFgqziBCrcA6prfAUnBpy5AJwUEz4nYrfNnohl3gLFeupW7uy8niTkIo7hTp7WwPOHVPQ8l9HiyCcqEDc7JnfYyaJftprQ2aZ7VcFeZ%2B7b0L1J7zKiDuj7psnTxNUjXg1W82gZmDxmJsO0REN5Ydp8xF%2FOkNRJ39wN2U8qws6%2FXCB58kzvh77oqB7fz5vtvx0L6u4ZH7SiwEn%2BiU%2FbbAgu3YQhiqWdDBdG69rAHCxVsRL3rRcBdkkbjEEZAscwH5WozroEu3v1msyWLukOGiKqXeIR%2BVeLXr%2Fd2I2gqJaPCwrR9fOMffny8SfWMZH7AA1GE5oNqR8U3Ii%2B%2BMhy7LBHDsMXdpNWz7xfooT2LRKwxb0ZkhRFDIjiuJ2zzFeGsUyp5jwkU2IfKZHxHhWVMLH1pS0T3BZWu7xewFXwdszlDsltjtB88rwwa6ixlWKwDzRCgkZtIq%2BWEUOFr%2BmUiH%2BbLP2sOLL3zMTUoBnOs7fkk8hKIptey8oh5G9UL4boS7zE%2FP0Ls8mNR%2BrWtsIeQBubzbbRm78SpGVSbJKpn03F%2Ba9WWtmdopR31uc%2By8awGbTRNbdZxeTLg8hEMX0u4DYIZ3AxX8j%2Fqq3s1nwox2H7BHNK3FLXMJbD6AMQtPZJo7cq%2B%2FLbMPuq5sIGOqUBNrSzc7kXBZx1jUxrKJA26jUhUFe8TekSH10PjRD%2B3L3fjgr%2BK0aiiEbxrQ1ViVu9WNvJaPBCUDxc3SxwphoGb%2BlVGk5Rpo3sSzZRR%2Beaey7aMmVaZvBEvYxbedxX3%2FmmQNkZrb%2FA0uN%2BPKRIWZukfDi0VRuThNaOMJM6k%2BIVdAkaFMuyWu3ljCUmQHKcorX1fHDQOkPRK2q5eBDgYwWmf0OFw6TG&X-Amz-Signature=1675ae27c8322b7a071bea88d72889bf0a1262a5b03eb16886c60c8790b0218a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYUIJL3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCu0iQXp0oTUuu64TFjjLj8IduCLA9tOg9Tvzz%2BVgOYJAIgI%2B9KuAdy8fPYY4MFlH0rw%2FX7yHX2udf1fp1cbHqn7mMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEoPi0Gt8adFgqziBCrcA6prfAUnBpy5AJwUEz4nYrfNnohl3gLFeupW7uy8niTkIo7hTp7WwPOHVPQ8l9HiyCcqEDc7JnfYyaJftprQ2aZ7VcFeZ%2B7b0L1J7zKiDuj7psnTxNUjXg1W82gZmDxmJsO0REN5Ydp8xF%2FOkNRJ39wN2U8qws6%2FXCB58kzvh77oqB7fz5vtvx0L6u4ZH7SiwEn%2BiU%2FbbAgu3YQhiqWdDBdG69rAHCxVsRL3rRcBdkkbjEEZAscwH5WozroEu3v1msyWLukOGiKqXeIR%2BVeLXr%2Fd2I2gqJaPCwrR9fOMffny8SfWMZH7AA1GE5oNqR8U3Ii%2B%2BMhy7LBHDsMXdpNWz7xfooT2LRKwxb0ZkhRFDIjiuJ2zzFeGsUyp5jwkU2IfKZHxHhWVMLH1pS0T3BZWu7xewFXwdszlDsltjtB88rwwa6ixlWKwDzRCgkZtIq%2BWEUOFr%2BmUiH%2BbLP2sOLL3zMTUoBnOs7fkk8hKIptey8oh5G9UL4boS7zE%2FP0Ls8mNR%2BrWtsIeQBubzbbRm78SpGVSbJKpn03F%2Ba9WWtmdopR31uc%2By8awGbTRNbdZxeTLg8hEMX0u4DYIZ3AxX8j%2Fqq3s1nwox2H7BHNK3FLXMJbD6AMQtPZJo7cq%2B%2FLbMPuq5sIGOqUBNrSzc7kXBZx1jUxrKJA26jUhUFe8TekSH10PjRD%2B3L3fjgr%2BK0aiiEbxrQ1ViVu9WNvJaPBCUDxc3SxwphoGb%2BlVGk5Rpo3sSzZRR%2Beaey7aMmVaZvBEvYxbedxX3%2FmmQNkZrb%2FA0uN%2BPKRIWZukfDi0VRuThNaOMJM6k%2BIVdAkaFMuyWu3ljCUmQHKcorX1fHDQOkPRK2q5eBDgYwWmf0OFw6TG&X-Amz-Signature=0828da031d8ed82cfc57264e119169653427aef028362c32b2dccc31b5b8837b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYUIJL3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCu0iQXp0oTUuu64TFjjLj8IduCLA9tOg9Tvzz%2BVgOYJAIgI%2B9KuAdy8fPYY4MFlH0rw%2FX7yHX2udf1fp1cbHqn7mMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEoPi0Gt8adFgqziBCrcA6prfAUnBpy5AJwUEz4nYrfNnohl3gLFeupW7uy8niTkIo7hTp7WwPOHVPQ8l9HiyCcqEDc7JnfYyaJftprQ2aZ7VcFeZ%2B7b0L1J7zKiDuj7psnTxNUjXg1W82gZmDxmJsO0REN5Ydp8xF%2FOkNRJ39wN2U8qws6%2FXCB58kzvh77oqB7fz5vtvx0L6u4ZH7SiwEn%2BiU%2FbbAgu3YQhiqWdDBdG69rAHCxVsRL3rRcBdkkbjEEZAscwH5WozroEu3v1msyWLukOGiKqXeIR%2BVeLXr%2Fd2I2gqJaPCwrR9fOMffny8SfWMZH7AA1GE5oNqR8U3Ii%2B%2BMhy7LBHDsMXdpNWz7xfooT2LRKwxb0ZkhRFDIjiuJ2zzFeGsUyp5jwkU2IfKZHxHhWVMLH1pS0T3BZWu7xewFXwdszlDsltjtB88rwwa6ixlWKwDzRCgkZtIq%2BWEUOFr%2BmUiH%2BbLP2sOLL3zMTUoBnOs7fkk8hKIptey8oh5G9UL4boS7zE%2FP0Ls8mNR%2BrWtsIeQBubzbbRm78SpGVSbJKpn03F%2Ba9WWtmdopR31uc%2By8awGbTRNbdZxeTLg8hEMX0u4DYIZ3AxX8j%2Fqq3s1nwox2H7BHNK3FLXMJbD6AMQtPZJo7cq%2B%2FLbMPuq5sIGOqUBNrSzc7kXBZx1jUxrKJA26jUhUFe8TekSH10PjRD%2B3L3fjgr%2BK0aiiEbxrQ1ViVu9WNvJaPBCUDxc3SxwphoGb%2BlVGk5Rpo3sSzZRR%2Beaey7aMmVaZvBEvYxbedxX3%2FmmQNkZrb%2FA0uN%2BPKRIWZukfDi0VRuThNaOMJM6k%2BIVdAkaFMuyWu3ljCUmQHKcorX1fHDQOkPRK2q5eBDgYwWmf0OFw6TG&X-Amz-Signature=27ffea748dacf65db982bdebff874df1aaabae5945203e1938a585ef37816d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYUIJL3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCu0iQXp0oTUuu64TFjjLj8IduCLA9tOg9Tvzz%2BVgOYJAIgI%2B9KuAdy8fPYY4MFlH0rw%2FX7yHX2udf1fp1cbHqn7mMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEoPi0Gt8adFgqziBCrcA6prfAUnBpy5AJwUEz4nYrfNnohl3gLFeupW7uy8niTkIo7hTp7WwPOHVPQ8l9HiyCcqEDc7JnfYyaJftprQ2aZ7VcFeZ%2B7b0L1J7zKiDuj7psnTxNUjXg1W82gZmDxmJsO0REN5Ydp8xF%2FOkNRJ39wN2U8qws6%2FXCB58kzvh77oqB7fz5vtvx0L6u4ZH7SiwEn%2BiU%2FbbAgu3YQhiqWdDBdG69rAHCxVsRL3rRcBdkkbjEEZAscwH5WozroEu3v1msyWLukOGiKqXeIR%2BVeLXr%2Fd2I2gqJaPCwrR9fOMffny8SfWMZH7AA1GE5oNqR8U3Ii%2B%2BMhy7LBHDsMXdpNWz7xfooT2LRKwxb0ZkhRFDIjiuJ2zzFeGsUyp5jwkU2IfKZHxHhWVMLH1pS0T3BZWu7xewFXwdszlDsltjtB88rwwa6ixlWKwDzRCgkZtIq%2BWEUOFr%2BmUiH%2BbLP2sOLL3zMTUoBnOs7fkk8hKIptey8oh5G9UL4boS7zE%2FP0Ls8mNR%2BrWtsIeQBubzbbRm78SpGVSbJKpn03F%2Ba9WWtmdopR31uc%2By8awGbTRNbdZxeTLg8hEMX0u4DYIZ3AxX8j%2Fqq3s1nwox2H7BHNK3FLXMJbD6AMQtPZJo7cq%2B%2FLbMPuq5sIGOqUBNrSzc7kXBZx1jUxrKJA26jUhUFe8TekSH10PjRD%2B3L3fjgr%2BK0aiiEbxrQ1ViVu9WNvJaPBCUDxc3SxwphoGb%2BlVGk5Rpo3sSzZRR%2Beaey7aMmVaZvBEvYxbedxX3%2FmmQNkZrb%2FA0uN%2BPKRIWZukfDi0VRuThNaOMJM6k%2BIVdAkaFMuyWu3ljCUmQHKcorX1fHDQOkPRK2q5eBDgYwWmf0OFw6TG&X-Amz-Signature=0cec47ea7b107ef2a17eb609fe266acb975e9c2df253e4e4cd88157c14a59926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYUIJL3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCu0iQXp0oTUuu64TFjjLj8IduCLA9tOg9Tvzz%2BVgOYJAIgI%2B9KuAdy8fPYY4MFlH0rw%2FX7yHX2udf1fp1cbHqn7mMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEoPi0Gt8adFgqziBCrcA6prfAUnBpy5AJwUEz4nYrfNnohl3gLFeupW7uy8niTkIo7hTp7WwPOHVPQ8l9HiyCcqEDc7JnfYyaJftprQ2aZ7VcFeZ%2B7b0L1J7zKiDuj7psnTxNUjXg1W82gZmDxmJsO0REN5Ydp8xF%2FOkNRJ39wN2U8qws6%2FXCB58kzvh77oqB7fz5vtvx0L6u4ZH7SiwEn%2BiU%2FbbAgu3YQhiqWdDBdG69rAHCxVsRL3rRcBdkkbjEEZAscwH5WozroEu3v1msyWLukOGiKqXeIR%2BVeLXr%2Fd2I2gqJaPCwrR9fOMffny8SfWMZH7AA1GE5oNqR8U3Ii%2B%2BMhy7LBHDsMXdpNWz7xfooT2LRKwxb0ZkhRFDIjiuJ2zzFeGsUyp5jwkU2IfKZHxHhWVMLH1pS0T3BZWu7xewFXwdszlDsltjtB88rwwa6ixlWKwDzRCgkZtIq%2BWEUOFr%2BmUiH%2BbLP2sOLL3zMTUoBnOs7fkk8hKIptey8oh5G9UL4boS7zE%2FP0Ls8mNR%2BrWtsIeQBubzbbRm78SpGVSbJKpn03F%2Ba9WWtmdopR31uc%2By8awGbTRNbdZxeTLg8hEMX0u4DYIZ3AxX8j%2Fqq3s1nwox2H7BHNK3FLXMJbD6AMQtPZJo7cq%2B%2FLbMPuq5sIGOqUBNrSzc7kXBZx1jUxrKJA26jUhUFe8TekSH10PjRD%2B3L3fjgr%2BK0aiiEbxrQ1ViVu9WNvJaPBCUDxc3SxwphoGb%2BlVGk5Rpo3sSzZRR%2Beaey7aMmVaZvBEvYxbedxX3%2FmmQNkZrb%2FA0uN%2BPKRIWZukfDi0VRuThNaOMJM6k%2BIVdAkaFMuyWu3ljCUmQHKcorX1fHDQOkPRK2q5eBDgYwWmf0OFw6TG&X-Amz-Signature=15ef15b423a3ab286ddf8fd84085865d824b78fcfbfa1ba888b25de8115d759e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYUIJL3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCu0iQXp0oTUuu64TFjjLj8IduCLA9tOg9Tvzz%2BVgOYJAIgI%2B9KuAdy8fPYY4MFlH0rw%2FX7yHX2udf1fp1cbHqn7mMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEoPi0Gt8adFgqziBCrcA6prfAUnBpy5AJwUEz4nYrfNnohl3gLFeupW7uy8niTkIo7hTp7WwPOHVPQ8l9HiyCcqEDc7JnfYyaJftprQ2aZ7VcFeZ%2B7b0L1J7zKiDuj7psnTxNUjXg1W82gZmDxmJsO0REN5Ydp8xF%2FOkNRJ39wN2U8qws6%2FXCB58kzvh77oqB7fz5vtvx0L6u4ZH7SiwEn%2BiU%2FbbAgu3YQhiqWdDBdG69rAHCxVsRL3rRcBdkkbjEEZAscwH5WozroEu3v1msyWLukOGiKqXeIR%2BVeLXr%2Fd2I2gqJaPCwrR9fOMffny8SfWMZH7AA1GE5oNqR8U3Ii%2B%2BMhy7LBHDsMXdpNWz7xfooT2LRKwxb0ZkhRFDIjiuJ2zzFeGsUyp5jwkU2IfKZHxHhWVMLH1pS0T3BZWu7xewFXwdszlDsltjtB88rwwa6ixlWKwDzRCgkZtIq%2BWEUOFr%2BmUiH%2BbLP2sOLL3zMTUoBnOs7fkk8hKIptey8oh5G9UL4boS7zE%2FP0Ls8mNR%2BrWtsIeQBubzbbRm78SpGVSbJKpn03F%2Ba9WWtmdopR31uc%2By8awGbTRNbdZxeTLg8hEMX0u4DYIZ3AxX8j%2Fqq3s1nwox2H7BHNK3FLXMJbD6AMQtPZJo7cq%2B%2FLbMPuq5sIGOqUBNrSzc7kXBZx1jUxrKJA26jUhUFe8TekSH10PjRD%2B3L3fjgr%2BK0aiiEbxrQ1ViVu9WNvJaPBCUDxc3SxwphoGb%2BlVGk5Rpo3sSzZRR%2Beaey7aMmVaZvBEvYxbedxX3%2FmmQNkZrb%2FA0uN%2BPKRIWZukfDi0VRuThNaOMJM6k%2BIVdAkaFMuyWu3ljCUmQHKcorX1fHDQOkPRK2q5eBDgYwWmf0OFw6TG&X-Amz-Signature=cb1c104d37eed5f0cf66d2d4b57fbf16cb67219e1070902e8c02db64a8f3c78c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYUIJL3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCu0iQXp0oTUuu64TFjjLj8IduCLA9tOg9Tvzz%2BVgOYJAIgI%2B9KuAdy8fPYY4MFlH0rw%2FX7yHX2udf1fp1cbHqn7mMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEoPi0Gt8adFgqziBCrcA6prfAUnBpy5AJwUEz4nYrfNnohl3gLFeupW7uy8niTkIo7hTp7WwPOHVPQ8l9HiyCcqEDc7JnfYyaJftprQ2aZ7VcFeZ%2B7b0L1J7zKiDuj7psnTxNUjXg1W82gZmDxmJsO0REN5Ydp8xF%2FOkNRJ39wN2U8qws6%2FXCB58kzvh77oqB7fz5vtvx0L6u4ZH7SiwEn%2BiU%2FbbAgu3YQhiqWdDBdG69rAHCxVsRL3rRcBdkkbjEEZAscwH5WozroEu3v1msyWLukOGiKqXeIR%2BVeLXr%2Fd2I2gqJaPCwrR9fOMffny8SfWMZH7AA1GE5oNqR8U3Ii%2B%2BMhy7LBHDsMXdpNWz7xfooT2LRKwxb0ZkhRFDIjiuJ2zzFeGsUyp5jwkU2IfKZHxHhWVMLH1pS0T3BZWu7xewFXwdszlDsltjtB88rwwa6ixlWKwDzRCgkZtIq%2BWEUOFr%2BmUiH%2BbLP2sOLL3zMTUoBnOs7fkk8hKIptey8oh5G9UL4boS7zE%2FP0Ls8mNR%2BrWtsIeQBubzbbRm78SpGVSbJKpn03F%2Ba9WWtmdopR31uc%2By8awGbTRNbdZxeTLg8hEMX0u4DYIZ3AxX8j%2Fqq3s1nwox2H7BHNK3FLXMJbD6AMQtPZJo7cq%2B%2FLbMPuq5sIGOqUBNrSzc7kXBZx1jUxrKJA26jUhUFe8TekSH10PjRD%2B3L3fjgr%2BK0aiiEbxrQ1ViVu9WNvJaPBCUDxc3SxwphoGb%2BlVGk5Rpo3sSzZRR%2Beaey7aMmVaZvBEvYxbedxX3%2FmmQNkZrb%2FA0uN%2BPKRIWZukfDi0VRuThNaOMJM6k%2BIVdAkaFMuyWu3ljCUmQHKcorX1fHDQOkPRK2q5eBDgYwWmf0OFw6TG&X-Amz-Signature=64b1af5ee0184d8b6eef049a39796f21a47cd3e9090fd62526ea31539e9c6d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYUIJL3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCu0iQXp0oTUuu64TFjjLj8IduCLA9tOg9Tvzz%2BVgOYJAIgI%2B9KuAdy8fPYY4MFlH0rw%2FX7yHX2udf1fp1cbHqn7mMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEoPi0Gt8adFgqziBCrcA6prfAUnBpy5AJwUEz4nYrfNnohl3gLFeupW7uy8niTkIo7hTp7WwPOHVPQ8l9HiyCcqEDc7JnfYyaJftprQ2aZ7VcFeZ%2B7b0L1J7zKiDuj7psnTxNUjXg1W82gZmDxmJsO0REN5Ydp8xF%2FOkNRJ39wN2U8qws6%2FXCB58kzvh77oqB7fz5vtvx0L6u4ZH7SiwEn%2BiU%2FbbAgu3YQhiqWdDBdG69rAHCxVsRL3rRcBdkkbjEEZAscwH5WozroEu3v1msyWLukOGiKqXeIR%2BVeLXr%2Fd2I2gqJaPCwrR9fOMffny8SfWMZH7AA1GE5oNqR8U3Ii%2B%2BMhy7LBHDsMXdpNWz7xfooT2LRKwxb0ZkhRFDIjiuJ2zzFeGsUyp5jwkU2IfKZHxHhWVMLH1pS0T3BZWu7xewFXwdszlDsltjtB88rwwa6ixlWKwDzRCgkZtIq%2BWEUOFr%2BmUiH%2BbLP2sOLL3zMTUoBnOs7fkk8hKIptey8oh5G9UL4boS7zE%2FP0Ls8mNR%2BrWtsIeQBubzbbRm78SpGVSbJKpn03F%2Ba9WWtmdopR31uc%2By8awGbTRNbdZxeTLg8hEMX0u4DYIZ3AxX8j%2Fqq3s1nwox2H7BHNK3FLXMJbD6AMQtPZJo7cq%2B%2FLbMPuq5sIGOqUBNrSzc7kXBZx1jUxrKJA26jUhUFe8TekSH10PjRD%2B3L3fjgr%2BK0aiiEbxrQ1ViVu9WNvJaPBCUDxc3SxwphoGb%2BlVGk5Rpo3sSzZRR%2Beaey7aMmVaZvBEvYxbedxX3%2FmmQNkZrb%2FA0uN%2BPKRIWZukfDi0VRuThNaOMJM6k%2BIVdAkaFMuyWu3ljCUmQHKcorX1fHDQOkPRK2q5eBDgYwWmf0OFw6TG&X-Amz-Signature=74a866fd3f4dde7464650a7065e5aa3f1784a7cb1327a996f6f2630a991faa5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
