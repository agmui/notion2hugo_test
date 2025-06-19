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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNVYKIN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmmZ6E3QA57s5LWRNvVCVlMJZChU3gSGersxfsI%2F%2Bp7AiA8CFkw6nbJ0uuL%2BlJXjsSIcwGF6dSZT9yEsg1uyeTizyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdUYsLpRy4fChL9rKKtwDwdyCYbWP6NqrYN44CHLLsSdg%2BPqv95Jh1LUdG%2FYrrCDFnjy76ftT0TvrE5JyVPLyepQageox8kRs%2F8aWzMqNrlQhtSHgrPtscqUShnWDi6%2FkMMutEkwqn9%2BrNW2tmzK9MJGgEln83wfW4c4fK%2BcppfAcxq1a2EB4XhyDnfMajQp84E%2FRz8xVU27a4QVCBkHwmjslPXMTKfIBb3hCdrF7YlxPuBR5bc0d8ZfDQ2%2B9jIP8%2BcUpJUogUVmZyUos3o90BqfGbImue184s74PkzubPNBpkDW2WW8QwZi9CW3cm1PxXa7DQBGYXQUwa41vbeL4UiGeAcEgociAYRcudQNc0PAHfQmpJ7SQ9uiiKgIt4lboD2wlWCzQWiDzRzXJH7WMDkXlbUdiozJcYsz%2BJt%2BfeFikMv1kLGXsEg%2FpQhyO%2F%2Bq0TiI0l8fYXQt54xywfBTWC7y%2FKNnX2TfF%2FEKVf8oBmF%2B3s1auGZ9hXv6PavDJw1RgPRGotAXUWo8bGRoIxiuF2RT4V7q8EqZzlKN4i0IhMipUC1P2eKXF3%2F2MIy3f%2FCg6elwS0DyvhzXi5EQ88nro54DUiTrSnrtkpnUpjGIh4LhaYn%2BZsTcaPc3MrI51A6IfBB%2Ft3Qp9RIUo1rEw94POwgY6pgGFSR9y5Bdsw95EeMELWEuoOt1RU3%2BKdZ8mOdiQ%2BEGrPrNoL6gbngV5briuGXq0pBSfz4Zi6XDX80E7aTnOrDwfMp0048YgiOlgljD3qe1bOBWV0HlxWyRYaG8pry3vmTccMGko7GJthBNWajSAY%2FhldHqYEZXnXnmqx405J02Xf7Za3LWdibuXm4TkKVEPkgYpbJGLaratKaHTtY0rpN1laOqmbuHN&X-Amz-Signature=ef4c7622b7ed0a3d21f100c2e59a767780c11693b3dc44b3d8d560a1aa9e8987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNVYKIN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmmZ6E3QA57s5LWRNvVCVlMJZChU3gSGersxfsI%2F%2Bp7AiA8CFkw6nbJ0uuL%2BlJXjsSIcwGF6dSZT9yEsg1uyeTizyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdUYsLpRy4fChL9rKKtwDwdyCYbWP6NqrYN44CHLLsSdg%2BPqv95Jh1LUdG%2FYrrCDFnjy76ftT0TvrE5JyVPLyepQageox8kRs%2F8aWzMqNrlQhtSHgrPtscqUShnWDi6%2FkMMutEkwqn9%2BrNW2tmzK9MJGgEln83wfW4c4fK%2BcppfAcxq1a2EB4XhyDnfMajQp84E%2FRz8xVU27a4QVCBkHwmjslPXMTKfIBb3hCdrF7YlxPuBR5bc0d8ZfDQ2%2B9jIP8%2BcUpJUogUVmZyUos3o90BqfGbImue184s74PkzubPNBpkDW2WW8QwZi9CW3cm1PxXa7DQBGYXQUwa41vbeL4UiGeAcEgociAYRcudQNc0PAHfQmpJ7SQ9uiiKgIt4lboD2wlWCzQWiDzRzXJH7WMDkXlbUdiozJcYsz%2BJt%2BfeFikMv1kLGXsEg%2FpQhyO%2F%2Bq0TiI0l8fYXQt54xywfBTWC7y%2FKNnX2TfF%2FEKVf8oBmF%2B3s1auGZ9hXv6PavDJw1RgPRGotAXUWo8bGRoIxiuF2RT4V7q8EqZzlKN4i0IhMipUC1P2eKXF3%2F2MIy3f%2FCg6elwS0DyvhzXi5EQ88nro54DUiTrSnrtkpnUpjGIh4LhaYn%2BZsTcaPc3MrI51A6IfBB%2Ft3Qp9RIUo1rEw94POwgY6pgGFSR9y5Bdsw95EeMELWEuoOt1RU3%2BKdZ8mOdiQ%2BEGrPrNoL6gbngV5briuGXq0pBSfz4Zi6XDX80E7aTnOrDwfMp0048YgiOlgljD3qe1bOBWV0HlxWyRYaG8pry3vmTccMGko7GJthBNWajSAY%2FhldHqYEZXnXnmqx405J02Xf7Za3LWdibuXm4TkKVEPkgYpbJGLaratKaHTtY0rpN1laOqmbuHN&X-Amz-Signature=ec11cb951ba78da9f809a32102448d685d48fa508dc8e5ba8af051d3ae9d225b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNVYKIN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmmZ6E3QA57s5LWRNvVCVlMJZChU3gSGersxfsI%2F%2Bp7AiA8CFkw6nbJ0uuL%2BlJXjsSIcwGF6dSZT9yEsg1uyeTizyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdUYsLpRy4fChL9rKKtwDwdyCYbWP6NqrYN44CHLLsSdg%2BPqv95Jh1LUdG%2FYrrCDFnjy76ftT0TvrE5JyVPLyepQageox8kRs%2F8aWzMqNrlQhtSHgrPtscqUShnWDi6%2FkMMutEkwqn9%2BrNW2tmzK9MJGgEln83wfW4c4fK%2BcppfAcxq1a2EB4XhyDnfMajQp84E%2FRz8xVU27a4QVCBkHwmjslPXMTKfIBb3hCdrF7YlxPuBR5bc0d8ZfDQ2%2B9jIP8%2BcUpJUogUVmZyUos3o90BqfGbImue184s74PkzubPNBpkDW2WW8QwZi9CW3cm1PxXa7DQBGYXQUwa41vbeL4UiGeAcEgociAYRcudQNc0PAHfQmpJ7SQ9uiiKgIt4lboD2wlWCzQWiDzRzXJH7WMDkXlbUdiozJcYsz%2BJt%2BfeFikMv1kLGXsEg%2FpQhyO%2F%2Bq0TiI0l8fYXQt54xywfBTWC7y%2FKNnX2TfF%2FEKVf8oBmF%2B3s1auGZ9hXv6PavDJw1RgPRGotAXUWo8bGRoIxiuF2RT4V7q8EqZzlKN4i0IhMipUC1P2eKXF3%2F2MIy3f%2FCg6elwS0DyvhzXi5EQ88nro54DUiTrSnrtkpnUpjGIh4LhaYn%2BZsTcaPc3MrI51A6IfBB%2Ft3Qp9RIUo1rEw94POwgY6pgGFSR9y5Bdsw95EeMELWEuoOt1RU3%2BKdZ8mOdiQ%2BEGrPrNoL6gbngV5briuGXq0pBSfz4Zi6XDX80E7aTnOrDwfMp0048YgiOlgljD3qe1bOBWV0HlxWyRYaG8pry3vmTccMGko7GJthBNWajSAY%2FhldHqYEZXnXnmqx405J02Xf7Za3LWdibuXm4TkKVEPkgYpbJGLaratKaHTtY0rpN1laOqmbuHN&X-Amz-Signature=78166437bec07ed2fc9e8bbdb879f18c1dfdbfbb1f9d079afb9de8c9db41bc47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNVYKIN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmmZ6E3QA57s5LWRNvVCVlMJZChU3gSGersxfsI%2F%2Bp7AiA8CFkw6nbJ0uuL%2BlJXjsSIcwGF6dSZT9yEsg1uyeTizyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdUYsLpRy4fChL9rKKtwDwdyCYbWP6NqrYN44CHLLsSdg%2BPqv95Jh1LUdG%2FYrrCDFnjy76ftT0TvrE5JyVPLyepQageox8kRs%2F8aWzMqNrlQhtSHgrPtscqUShnWDi6%2FkMMutEkwqn9%2BrNW2tmzK9MJGgEln83wfW4c4fK%2BcppfAcxq1a2EB4XhyDnfMajQp84E%2FRz8xVU27a4QVCBkHwmjslPXMTKfIBb3hCdrF7YlxPuBR5bc0d8ZfDQ2%2B9jIP8%2BcUpJUogUVmZyUos3o90BqfGbImue184s74PkzubPNBpkDW2WW8QwZi9CW3cm1PxXa7DQBGYXQUwa41vbeL4UiGeAcEgociAYRcudQNc0PAHfQmpJ7SQ9uiiKgIt4lboD2wlWCzQWiDzRzXJH7WMDkXlbUdiozJcYsz%2BJt%2BfeFikMv1kLGXsEg%2FpQhyO%2F%2Bq0TiI0l8fYXQt54xywfBTWC7y%2FKNnX2TfF%2FEKVf8oBmF%2B3s1auGZ9hXv6PavDJw1RgPRGotAXUWo8bGRoIxiuF2RT4V7q8EqZzlKN4i0IhMipUC1P2eKXF3%2F2MIy3f%2FCg6elwS0DyvhzXi5EQ88nro54DUiTrSnrtkpnUpjGIh4LhaYn%2BZsTcaPc3MrI51A6IfBB%2Ft3Qp9RIUo1rEw94POwgY6pgGFSR9y5Bdsw95EeMELWEuoOt1RU3%2BKdZ8mOdiQ%2BEGrPrNoL6gbngV5briuGXq0pBSfz4Zi6XDX80E7aTnOrDwfMp0048YgiOlgljD3qe1bOBWV0HlxWyRYaG8pry3vmTccMGko7GJthBNWajSAY%2FhldHqYEZXnXnmqx405J02Xf7Za3LWdibuXm4TkKVEPkgYpbJGLaratKaHTtY0rpN1laOqmbuHN&X-Amz-Signature=09e16f0b0a7df8f0e47e69754ef839040010850e34c665045f9565a3093dfd33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNVYKIN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmmZ6E3QA57s5LWRNvVCVlMJZChU3gSGersxfsI%2F%2Bp7AiA8CFkw6nbJ0uuL%2BlJXjsSIcwGF6dSZT9yEsg1uyeTizyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdUYsLpRy4fChL9rKKtwDwdyCYbWP6NqrYN44CHLLsSdg%2BPqv95Jh1LUdG%2FYrrCDFnjy76ftT0TvrE5JyVPLyepQageox8kRs%2F8aWzMqNrlQhtSHgrPtscqUShnWDi6%2FkMMutEkwqn9%2BrNW2tmzK9MJGgEln83wfW4c4fK%2BcppfAcxq1a2EB4XhyDnfMajQp84E%2FRz8xVU27a4QVCBkHwmjslPXMTKfIBb3hCdrF7YlxPuBR5bc0d8ZfDQ2%2B9jIP8%2BcUpJUogUVmZyUos3o90BqfGbImue184s74PkzubPNBpkDW2WW8QwZi9CW3cm1PxXa7DQBGYXQUwa41vbeL4UiGeAcEgociAYRcudQNc0PAHfQmpJ7SQ9uiiKgIt4lboD2wlWCzQWiDzRzXJH7WMDkXlbUdiozJcYsz%2BJt%2BfeFikMv1kLGXsEg%2FpQhyO%2F%2Bq0TiI0l8fYXQt54xywfBTWC7y%2FKNnX2TfF%2FEKVf8oBmF%2B3s1auGZ9hXv6PavDJw1RgPRGotAXUWo8bGRoIxiuF2RT4V7q8EqZzlKN4i0IhMipUC1P2eKXF3%2F2MIy3f%2FCg6elwS0DyvhzXi5EQ88nro54DUiTrSnrtkpnUpjGIh4LhaYn%2BZsTcaPc3MrI51A6IfBB%2Ft3Qp9RIUo1rEw94POwgY6pgGFSR9y5Bdsw95EeMELWEuoOt1RU3%2BKdZ8mOdiQ%2BEGrPrNoL6gbngV5briuGXq0pBSfz4Zi6XDX80E7aTnOrDwfMp0048YgiOlgljD3qe1bOBWV0HlxWyRYaG8pry3vmTccMGko7GJthBNWajSAY%2FhldHqYEZXnXnmqx405J02Xf7Za3LWdibuXm4TkKVEPkgYpbJGLaratKaHTtY0rpN1laOqmbuHN&X-Amz-Signature=4c88e2222621f28ccb21fa71c551160c1ced0d3bd760cc28a7f46c7f6ff51302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNVYKIN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmmZ6E3QA57s5LWRNvVCVlMJZChU3gSGersxfsI%2F%2Bp7AiA8CFkw6nbJ0uuL%2BlJXjsSIcwGF6dSZT9yEsg1uyeTizyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdUYsLpRy4fChL9rKKtwDwdyCYbWP6NqrYN44CHLLsSdg%2BPqv95Jh1LUdG%2FYrrCDFnjy76ftT0TvrE5JyVPLyepQageox8kRs%2F8aWzMqNrlQhtSHgrPtscqUShnWDi6%2FkMMutEkwqn9%2BrNW2tmzK9MJGgEln83wfW4c4fK%2BcppfAcxq1a2EB4XhyDnfMajQp84E%2FRz8xVU27a4QVCBkHwmjslPXMTKfIBb3hCdrF7YlxPuBR5bc0d8ZfDQ2%2B9jIP8%2BcUpJUogUVmZyUos3o90BqfGbImue184s74PkzubPNBpkDW2WW8QwZi9CW3cm1PxXa7DQBGYXQUwa41vbeL4UiGeAcEgociAYRcudQNc0PAHfQmpJ7SQ9uiiKgIt4lboD2wlWCzQWiDzRzXJH7WMDkXlbUdiozJcYsz%2BJt%2BfeFikMv1kLGXsEg%2FpQhyO%2F%2Bq0TiI0l8fYXQt54xywfBTWC7y%2FKNnX2TfF%2FEKVf8oBmF%2B3s1auGZ9hXv6PavDJw1RgPRGotAXUWo8bGRoIxiuF2RT4V7q8EqZzlKN4i0IhMipUC1P2eKXF3%2F2MIy3f%2FCg6elwS0DyvhzXi5EQ88nro54DUiTrSnrtkpnUpjGIh4LhaYn%2BZsTcaPc3MrI51A6IfBB%2Ft3Qp9RIUo1rEw94POwgY6pgGFSR9y5Bdsw95EeMELWEuoOt1RU3%2BKdZ8mOdiQ%2BEGrPrNoL6gbngV5briuGXq0pBSfz4Zi6XDX80E7aTnOrDwfMp0048YgiOlgljD3qe1bOBWV0HlxWyRYaG8pry3vmTccMGko7GJthBNWajSAY%2FhldHqYEZXnXnmqx405J02Xf7Za3LWdibuXm4TkKVEPkgYpbJGLaratKaHTtY0rpN1laOqmbuHN&X-Amz-Signature=3de9e2141fba0d972d08e84f63f26dd13fd547d140f41a318012e0c2bbb66c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNVYKIN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmmZ6E3QA57s5LWRNvVCVlMJZChU3gSGersxfsI%2F%2Bp7AiA8CFkw6nbJ0uuL%2BlJXjsSIcwGF6dSZT9yEsg1uyeTizyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdUYsLpRy4fChL9rKKtwDwdyCYbWP6NqrYN44CHLLsSdg%2BPqv95Jh1LUdG%2FYrrCDFnjy76ftT0TvrE5JyVPLyepQageox8kRs%2F8aWzMqNrlQhtSHgrPtscqUShnWDi6%2FkMMutEkwqn9%2BrNW2tmzK9MJGgEln83wfW4c4fK%2BcppfAcxq1a2EB4XhyDnfMajQp84E%2FRz8xVU27a4QVCBkHwmjslPXMTKfIBb3hCdrF7YlxPuBR5bc0d8ZfDQ2%2B9jIP8%2BcUpJUogUVmZyUos3o90BqfGbImue184s74PkzubPNBpkDW2WW8QwZi9CW3cm1PxXa7DQBGYXQUwa41vbeL4UiGeAcEgociAYRcudQNc0PAHfQmpJ7SQ9uiiKgIt4lboD2wlWCzQWiDzRzXJH7WMDkXlbUdiozJcYsz%2BJt%2BfeFikMv1kLGXsEg%2FpQhyO%2F%2Bq0TiI0l8fYXQt54xywfBTWC7y%2FKNnX2TfF%2FEKVf8oBmF%2B3s1auGZ9hXv6PavDJw1RgPRGotAXUWo8bGRoIxiuF2RT4V7q8EqZzlKN4i0IhMipUC1P2eKXF3%2F2MIy3f%2FCg6elwS0DyvhzXi5EQ88nro54DUiTrSnrtkpnUpjGIh4LhaYn%2BZsTcaPc3MrI51A6IfBB%2Ft3Qp9RIUo1rEw94POwgY6pgGFSR9y5Bdsw95EeMELWEuoOt1RU3%2BKdZ8mOdiQ%2BEGrPrNoL6gbngV5briuGXq0pBSfz4Zi6XDX80E7aTnOrDwfMp0048YgiOlgljD3qe1bOBWV0HlxWyRYaG8pry3vmTccMGko7GJthBNWajSAY%2FhldHqYEZXnXnmqx405J02Xf7Za3LWdibuXm4TkKVEPkgYpbJGLaratKaHTtY0rpN1laOqmbuHN&X-Amz-Signature=7e1f259969450c4f65353200b1179df523b16e620c03f680f716eeec7e2e8d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNVYKIN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmmZ6E3QA57s5LWRNvVCVlMJZChU3gSGersxfsI%2F%2Bp7AiA8CFkw6nbJ0uuL%2BlJXjsSIcwGF6dSZT9yEsg1uyeTizyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdUYsLpRy4fChL9rKKtwDwdyCYbWP6NqrYN44CHLLsSdg%2BPqv95Jh1LUdG%2FYrrCDFnjy76ftT0TvrE5JyVPLyepQageox8kRs%2F8aWzMqNrlQhtSHgrPtscqUShnWDi6%2FkMMutEkwqn9%2BrNW2tmzK9MJGgEln83wfW4c4fK%2BcppfAcxq1a2EB4XhyDnfMajQp84E%2FRz8xVU27a4QVCBkHwmjslPXMTKfIBb3hCdrF7YlxPuBR5bc0d8ZfDQ2%2B9jIP8%2BcUpJUogUVmZyUos3o90BqfGbImue184s74PkzubPNBpkDW2WW8QwZi9CW3cm1PxXa7DQBGYXQUwa41vbeL4UiGeAcEgociAYRcudQNc0PAHfQmpJ7SQ9uiiKgIt4lboD2wlWCzQWiDzRzXJH7WMDkXlbUdiozJcYsz%2BJt%2BfeFikMv1kLGXsEg%2FpQhyO%2F%2Bq0TiI0l8fYXQt54xywfBTWC7y%2FKNnX2TfF%2FEKVf8oBmF%2B3s1auGZ9hXv6PavDJw1RgPRGotAXUWo8bGRoIxiuF2RT4V7q8EqZzlKN4i0IhMipUC1P2eKXF3%2F2MIy3f%2FCg6elwS0DyvhzXi5EQ88nro54DUiTrSnrtkpnUpjGIh4LhaYn%2BZsTcaPc3MrI51A6IfBB%2Ft3Qp9RIUo1rEw94POwgY6pgGFSR9y5Bdsw95EeMELWEuoOt1RU3%2BKdZ8mOdiQ%2BEGrPrNoL6gbngV5briuGXq0pBSfz4Zi6XDX80E7aTnOrDwfMp0048YgiOlgljD3qe1bOBWV0HlxWyRYaG8pry3vmTccMGko7GJthBNWajSAY%2FhldHqYEZXnXnmqx405J02Xf7Za3LWdibuXm4TkKVEPkgYpbJGLaratKaHTtY0rpN1laOqmbuHN&X-Amz-Signature=5bb4fbbcf69f463941c6b847bd9286076d4ff6c51b7bda12c00d312c7105a5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
