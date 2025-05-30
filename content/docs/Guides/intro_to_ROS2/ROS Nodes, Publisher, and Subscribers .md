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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APHNMHS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIoxQmkhx6byDJoXHmgZMNA%2B2H9S9DcCjOqVOTJN7kTwIgcg33OZTAI%2BssjgYxwWbLWv8c6gkLGbFye%2FlKzz%2FxYUwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEwwU4MUqWBspak%2ByrcA54lAXEU6F1hUYd5dllcyHStARuFw8%2Fz12mZJckWSTW1MLASAzKv0SraBmDX24i43pA%2B5%2BEDs6oN56lv29pROxPYXqXyxtRL9o16YuxDXR7s6f58253JKFk4NU%2BGLX36xRdBhA9JhR0hS6DGDE0I6fBEuLtfSsCnUQYruLSfr7L87c%2FH6GnH27I99yh2S1bJEU%2BN0yTrFYhlRYxe9OuX66tNc5CjwGRP6Wtmy%2BzH6JskcHfdUJ%2BOgHKqPUw7EAUP8hcGtD%2BnmouM27t4LTawFhFO%2FSPhGfqE0ItJoroOPUX5tFAz11Od4tN%2B1Mpsad3NktLmp20%2FTEzAef%2Bzg3nxJxnd0kjc0N%2FQW7znjGKaGb8HTaW4G5QGRBI9l3GOM87994GNI8heq4k%2F6IT%2FJNlVrgupJkkelBEPS7Bsltzlxjw8%2F03A23OWWm0mnwXvp0DyvK%2F%2FUeqlpUEHN75JTbvbUJ53yZb5dJ5y75jUlx%2BocdcwdbLjMnZjkJMnDudrpzUh0KosFE3GpDu7C6mQgpaZAU1g2nyxJN65NoL8y5%2Fht30VjXzqmrouXNH55iBqIzQjDavY6VAoeJaJ%2F1bz2n%2BpkRi9wHHCbN72mCYjJTwwhtAaWqTDG5OHgz1Cy390MIeO5sEGOqUBlMPiV8HnVlSECN8OlznP2RmMF9EzA4lrDLSLmdCW7AvBUcDJzKj6PtYJd1mBXI%2BW5cpc%2BYwF0mZJkC3XawLbFz1IciJIEopV4I5sBIfR7eF4YqR9fqTRJSmRm43huZDbAVOgc%2F5RWYDhitwfZpF%2FEIUXphV3XLURjtu9yAj6grregeblSHUY45%2BxyiZOguMIt8CwoA5R2EQCjP7Dpu0hAnmnO6JU&X-Amz-Signature=9298a4d469646b0fd185e2d39b36780a8e3ae09e279f87b655cfc135789cce0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APHNMHS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIoxQmkhx6byDJoXHmgZMNA%2B2H9S9DcCjOqVOTJN7kTwIgcg33OZTAI%2BssjgYxwWbLWv8c6gkLGbFye%2FlKzz%2FxYUwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEwwU4MUqWBspak%2ByrcA54lAXEU6F1hUYd5dllcyHStARuFw8%2Fz12mZJckWSTW1MLASAzKv0SraBmDX24i43pA%2B5%2BEDs6oN56lv29pROxPYXqXyxtRL9o16YuxDXR7s6f58253JKFk4NU%2BGLX36xRdBhA9JhR0hS6DGDE0I6fBEuLtfSsCnUQYruLSfr7L87c%2FH6GnH27I99yh2S1bJEU%2BN0yTrFYhlRYxe9OuX66tNc5CjwGRP6Wtmy%2BzH6JskcHfdUJ%2BOgHKqPUw7EAUP8hcGtD%2BnmouM27t4LTawFhFO%2FSPhGfqE0ItJoroOPUX5tFAz11Od4tN%2B1Mpsad3NktLmp20%2FTEzAef%2Bzg3nxJxnd0kjc0N%2FQW7znjGKaGb8HTaW4G5QGRBI9l3GOM87994GNI8heq4k%2F6IT%2FJNlVrgupJkkelBEPS7Bsltzlxjw8%2F03A23OWWm0mnwXvp0DyvK%2F%2FUeqlpUEHN75JTbvbUJ53yZb5dJ5y75jUlx%2BocdcwdbLjMnZjkJMnDudrpzUh0KosFE3GpDu7C6mQgpaZAU1g2nyxJN65NoL8y5%2Fht30VjXzqmrouXNH55iBqIzQjDavY6VAoeJaJ%2F1bz2n%2BpkRi9wHHCbN72mCYjJTwwhtAaWqTDG5OHgz1Cy390MIeO5sEGOqUBlMPiV8HnVlSECN8OlznP2RmMF9EzA4lrDLSLmdCW7AvBUcDJzKj6PtYJd1mBXI%2BW5cpc%2BYwF0mZJkC3XawLbFz1IciJIEopV4I5sBIfR7eF4YqR9fqTRJSmRm43huZDbAVOgc%2F5RWYDhitwfZpF%2FEIUXphV3XLURjtu9yAj6grregeblSHUY45%2BxyiZOguMIt8CwoA5R2EQCjP7Dpu0hAnmnO6JU&X-Amz-Signature=285be83c47d40d103ec4daa939e47a3d29a6be3f8d81a9cc7449c1d02a10beb5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APHNMHS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIoxQmkhx6byDJoXHmgZMNA%2B2H9S9DcCjOqVOTJN7kTwIgcg33OZTAI%2BssjgYxwWbLWv8c6gkLGbFye%2FlKzz%2FxYUwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEwwU4MUqWBspak%2ByrcA54lAXEU6F1hUYd5dllcyHStARuFw8%2Fz12mZJckWSTW1MLASAzKv0SraBmDX24i43pA%2B5%2BEDs6oN56lv29pROxPYXqXyxtRL9o16YuxDXR7s6f58253JKFk4NU%2BGLX36xRdBhA9JhR0hS6DGDE0I6fBEuLtfSsCnUQYruLSfr7L87c%2FH6GnH27I99yh2S1bJEU%2BN0yTrFYhlRYxe9OuX66tNc5CjwGRP6Wtmy%2BzH6JskcHfdUJ%2BOgHKqPUw7EAUP8hcGtD%2BnmouM27t4LTawFhFO%2FSPhGfqE0ItJoroOPUX5tFAz11Od4tN%2B1Mpsad3NktLmp20%2FTEzAef%2Bzg3nxJxnd0kjc0N%2FQW7znjGKaGb8HTaW4G5QGRBI9l3GOM87994GNI8heq4k%2F6IT%2FJNlVrgupJkkelBEPS7Bsltzlxjw8%2F03A23OWWm0mnwXvp0DyvK%2F%2FUeqlpUEHN75JTbvbUJ53yZb5dJ5y75jUlx%2BocdcwdbLjMnZjkJMnDudrpzUh0KosFE3GpDu7C6mQgpaZAU1g2nyxJN65NoL8y5%2Fht30VjXzqmrouXNH55iBqIzQjDavY6VAoeJaJ%2F1bz2n%2BpkRi9wHHCbN72mCYjJTwwhtAaWqTDG5OHgz1Cy390MIeO5sEGOqUBlMPiV8HnVlSECN8OlznP2RmMF9EzA4lrDLSLmdCW7AvBUcDJzKj6PtYJd1mBXI%2BW5cpc%2BYwF0mZJkC3XawLbFz1IciJIEopV4I5sBIfR7eF4YqR9fqTRJSmRm43huZDbAVOgc%2F5RWYDhitwfZpF%2FEIUXphV3XLURjtu9yAj6grregeblSHUY45%2BxyiZOguMIt8CwoA5R2EQCjP7Dpu0hAnmnO6JU&X-Amz-Signature=291c364b70123b07365d70c1f6b1698b33e27868206265cc9f3ca826844382f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APHNMHS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIoxQmkhx6byDJoXHmgZMNA%2B2H9S9DcCjOqVOTJN7kTwIgcg33OZTAI%2BssjgYxwWbLWv8c6gkLGbFye%2FlKzz%2FxYUwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEwwU4MUqWBspak%2ByrcA54lAXEU6F1hUYd5dllcyHStARuFw8%2Fz12mZJckWSTW1MLASAzKv0SraBmDX24i43pA%2B5%2BEDs6oN56lv29pROxPYXqXyxtRL9o16YuxDXR7s6f58253JKFk4NU%2BGLX36xRdBhA9JhR0hS6DGDE0I6fBEuLtfSsCnUQYruLSfr7L87c%2FH6GnH27I99yh2S1bJEU%2BN0yTrFYhlRYxe9OuX66tNc5CjwGRP6Wtmy%2BzH6JskcHfdUJ%2BOgHKqPUw7EAUP8hcGtD%2BnmouM27t4LTawFhFO%2FSPhGfqE0ItJoroOPUX5tFAz11Od4tN%2B1Mpsad3NktLmp20%2FTEzAef%2Bzg3nxJxnd0kjc0N%2FQW7znjGKaGb8HTaW4G5QGRBI9l3GOM87994GNI8heq4k%2F6IT%2FJNlVrgupJkkelBEPS7Bsltzlxjw8%2F03A23OWWm0mnwXvp0DyvK%2F%2FUeqlpUEHN75JTbvbUJ53yZb5dJ5y75jUlx%2BocdcwdbLjMnZjkJMnDudrpzUh0KosFE3GpDu7C6mQgpaZAU1g2nyxJN65NoL8y5%2Fht30VjXzqmrouXNH55iBqIzQjDavY6VAoeJaJ%2F1bz2n%2BpkRi9wHHCbN72mCYjJTwwhtAaWqTDG5OHgz1Cy390MIeO5sEGOqUBlMPiV8HnVlSECN8OlznP2RmMF9EzA4lrDLSLmdCW7AvBUcDJzKj6PtYJd1mBXI%2BW5cpc%2BYwF0mZJkC3XawLbFz1IciJIEopV4I5sBIfR7eF4YqR9fqTRJSmRm43huZDbAVOgc%2F5RWYDhitwfZpF%2FEIUXphV3XLURjtu9yAj6grregeblSHUY45%2BxyiZOguMIt8CwoA5R2EQCjP7Dpu0hAnmnO6JU&X-Amz-Signature=a1642b425e8fb64bc485c2fae4eb4906e558fc30f3b9c52261591304a8f52c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APHNMHS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIoxQmkhx6byDJoXHmgZMNA%2B2H9S9DcCjOqVOTJN7kTwIgcg33OZTAI%2BssjgYxwWbLWv8c6gkLGbFye%2FlKzz%2FxYUwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEwwU4MUqWBspak%2ByrcA54lAXEU6F1hUYd5dllcyHStARuFw8%2Fz12mZJckWSTW1MLASAzKv0SraBmDX24i43pA%2B5%2BEDs6oN56lv29pROxPYXqXyxtRL9o16YuxDXR7s6f58253JKFk4NU%2BGLX36xRdBhA9JhR0hS6DGDE0I6fBEuLtfSsCnUQYruLSfr7L87c%2FH6GnH27I99yh2S1bJEU%2BN0yTrFYhlRYxe9OuX66tNc5CjwGRP6Wtmy%2BzH6JskcHfdUJ%2BOgHKqPUw7EAUP8hcGtD%2BnmouM27t4LTawFhFO%2FSPhGfqE0ItJoroOPUX5tFAz11Od4tN%2B1Mpsad3NktLmp20%2FTEzAef%2Bzg3nxJxnd0kjc0N%2FQW7znjGKaGb8HTaW4G5QGRBI9l3GOM87994GNI8heq4k%2F6IT%2FJNlVrgupJkkelBEPS7Bsltzlxjw8%2F03A23OWWm0mnwXvp0DyvK%2F%2FUeqlpUEHN75JTbvbUJ53yZb5dJ5y75jUlx%2BocdcwdbLjMnZjkJMnDudrpzUh0KosFE3GpDu7C6mQgpaZAU1g2nyxJN65NoL8y5%2Fht30VjXzqmrouXNH55iBqIzQjDavY6VAoeJaJ%2F1bz2n%2BpkRi9wHHCbN72mCYjJTwwhtAaWqTDG5OHgz1Cy390MIeO5sEGOqUBlMPiV8HnVlSECN8OlznP2RmMF9EzA4lrDLSLmdCW7AvBUcDJzKj6PtYJd1mBXI%2BW5cpc%2BYwF0mZJkC3XawLbFz1IciJIEopV4I5sBIfR7eF4YqR9fqTRJSmRm43huZDbAVOgc%2F5RWYDhitwfZpF%2FEIUXphV3XLURjtu9yAj6grregeblSHUY45%2BxyiZOguMIt8CwoA5R2EQCjP7Dpu0hAnmnO6JU&X-Amz-Signature=a4c3a80a3bd2deb5e2170cf23979128ad4eb2ff42a986ebed4a037b65aede09d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APHNMHS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIoxQmkhx6byDJoXHmgZMNA%2B2H9S9DcCjOqVOTJN7kTwIgcg33OZTAI%2BssjgYxwWbLWv8c6gkLGbFye%2FlKzz%2FxYUwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEwwU4MUqWBspak%2ByrcA54lAXEU6F1hUYd5dllcyHStARuFw8%2Fz12mZJckWSTW1MLASAzKv0SraBmDX24i43pA%2B5%2BEDs6oN56lv29pROxPYXqXyxtRL9o16YuxDXR7s6f58253JKFk4NU%2BGLX36xRdBhA9JhR0hS6DGDE0I6fBEuLtfSsCnUQYruLSfr7L87c%2FH6GnH27I99yh2S1bJEU%2BN0yTrFYhlRYxe9OuX66tNc5CjwGRP6Wtmy%2BzH6JskcHfdUJ%2BOgHKqPUw7EAUP8hcGtD%2BnmouM27t4LTawFhFO%2FSPhGfqE0ItJoroOPUX5tFAz11Od4tN%2B1Mpsad3NktLmp20%2FTEzAef%2Bzg3nxJxnd0kjc0N%2FQW7znjGKaGb8HTaW4G5QGRBI9l3GOM87994GNI8heq4k%2F6IT%2FJNlVrgupJkkelBEPS7Bsltzlxjw8%2F03A23OWWm0mnwXvp0DyvK%2F%2FUeqlpUEHN75JTbvbUJ53yZb5dJ5y75jUlx%2BocdcwdbLjMnZjkJMnDudrpzUh0KosFE3GpDu7C6mQgpaZAU1g2nyxJN65NoL8y5%2Fht30VjXzqmrouXNH55iBqIzQjDavY6VAoeJaJ%2F1bz2n%2BpkRi9wHHCbN72mCYjJTwwhtAaWqTDG5OHgz1Cy390MIeO5sEGOqUBlMPiV8HnVlSECN8OlznP2RmMF9EzA4lrDLSLmdCW7AvBUcDJzKj6PtYJd1mBXI%2BW5cpc%2BYwF0mZJkC3XawLbFz1IciJIEopV4I5sBIfR7eF4YqR9fqTRJSmRm43huZDbAVOgc%2F5RWYDhitwfZpF%2FEIUXphV3XLURjtu9yAj6grregeblSHUY45%2BxyiZOguMIt8CwoA5R2EQCjP7Dpu0hAnmnO6JU&X-Amz-Signature=14d15df72f62226b4f254ecb3750bbc3d249aad2f90fcc4300f56f47d7359e68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APHNMHS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIoxQmkhx6byDJoXHmgZMNA%2B2H9S9DcCjOqVOTJN7kTwIgcg33OZTAI%2BssjgYxwWbLWv8c6gkLGbFye%2FlKzz%2FxYUwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEwwU4MUqWBspak%2ByrcA54lAXEU6F1hUYd5dllcyHStARuFw8%2Fz12mZJckWSTW1MLASAzKv0SraBmDX24i43pA%2B5%2BEDs6oN56lv29pROxPYXqXyxtRL9o16YuxDXR7s6f58253JKFk4NU%2BGLX36xRdBhA9JhR0hS6DGDE0I6fBEuLtfSsCnUQYruLSfr7L87c%2FH6GnH27I99yh2S1bJEU%2BN0yTrFYhlRYxe9OuX66tNc5CjwGRP6Wtmy%2BzH6JskcHfdUJ%2BOgHKqPUw7EAUP8hcGtD%2BnmouM27t4LTawFhFO%2FSPhGfqE0ItJoroOPUX5tFAz11Od4tN%2B1Mpsad3NktLmp20%2FTEzAef%2Bzg3nxJxnd0kjc0N%2FQW7znjGKaGb8HTaW4G5QGRBI9l3GOM87994GNI8heq4k%2F6IT%2FJNlVrgupJkkelBEPS7Bsltzlxjw8%2F03A23OWWm0mnwXvp0DyvK%2F%2FUeqlpUEHN75JTbvbUJ53yZb5dJ5y75jUlx%2BocdcwdbLjMnZjkJMnDudrpzUh0KosFE3GpDu7C6mQgpaZAU1g2nyxJN65NoL8y5%2Fht30VjXzqmrouXNH55iBqIzQjDavY6VAoeJaJ%2F1bz2n%2BpkRi9wHHCbN72mCYjJTwwhtAaWqTDG5OHgz1Cy390MIeO5sEGOqUBlMPiV8HnVlSECN8OlznP2RmMF9EzA4lrDLSLmdCW7AvBUcDJzKj6PtYJd1mBXI%2BW5cpc%2BYwF0mZJkC3XawLbFz1IciJIEopV4I5sBIfR7eF4YqR9fqTRJSmRm43huZDbAVOgc%2F5RWYDhitwfZpF%2FEIUXphV3XLURjtu9yAj6grregeblSHUY45%2BxyiZOguMIt8CwoA5R2EQCjP7Dpu0hAnmnO6JU&X-Amz-Signature=b70c57928e4c9454d7855e55ebef8c55122fd11b09799d9c5ec17404b0dbd57b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APHNMHS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIoxQmkhx6byDJoXHmgZMNA%2B2H9S9DcCjOqVOTJN7kTwIgcg33OZTAI%2BssjgYxwWbLWv8c6gkLGbFye%2FlKzz%2FxYUwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEwwU4MUqWBspak%2ByrcA54lAXEU6F1hUYd5dllcyHStARuFw8%2Fz12mZJckWSTW1MLASAzKv0SraBmDX24i43pA%2B5%2BEDs6oN56lv29pROxPYXqXyxtRL9o16YuxDXR7s6f58253JKFk4NU%2BGLX36xRdBhA9JhR0hS6DGDE0I6fBEuLtfSsCnUQYruLSfr7L87c%2FH6GnH27I99yh2S1bJEU%2BN0yTrFYhlRYxe9OuX66tNc5CjwGRP6Wtmy%2BzH6JskcHfdUJ%2BOgHKqPUw7EAUP8hcGtD%2BnmouM27t4LTawFhFO%2FSPhGfqE0ItJoroOPUX5tFAz11Od4tN%2B1Mpsad3NktLmp20%2FTEzAef%2Bzg3nxJxnd0kjc0N%2FQW7znjGKaGb8HTaW4G5QGRBI9l3GOM87994GNI8heq4k%2F6IT%2FJNlVrgupJkkelBEPS7Bsltzlxjw8%2F03A23OWWm0mnwXvp0DyvK%2F%2FUeqlpUEHN75JTbvbUJ53yZb5dJ5y75jUlx%2BocdcwdbLjMnZjkJMnDudrpzUh0KosFE3GpDu7C6mQgpaZAU1g2nyxJN65NoL8y5%2Fht30VjXzqmrouXNH55iBqIzQjDavY6VAoeJaJ%2F1bz2n%2BpkRi9wHHCbN72mCYjJTwwhtAaWqTDG5OHgz1Cy390MIeO5sEGOqUBlMPiV8HnVlSECN8OlznP2RmMF9EzA4lrDLSLmdCW7AvBUcDJzKj6PtYJd1mBXI%2BW5cpc%2BYwF0mZJkC3XawLbFz1IciJIEopV4I5sBIfR7eF4YqR9fqTRJSmRm43huZDbAVOgc%2F5RWYDhitwfZpF%2FEIUXphV3XLURjtu9yAj6grregeblSHUY45%2BxyiZOguMIt8CwoA5R2EQCjP7Dpu0hAnmnO6JU&X-Amz-Signature=ed134d7c562ddcec6a95dd1dbbb3495ca10a5e0f152301b301eddd0ee1a996a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
