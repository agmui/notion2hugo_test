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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD2GQBV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSkys95yUzAFYJWnOJSydp%2Fd1FzjRV6talLOJI6TKkWAiBp72T%2F%2Feglmb%2FkQGncvfkjeFfYLH%2BsS4iTzKNR8FwHzCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMJIi1nzBWd08YCxr5KtwDH78sPkzD2Q5f2ml9plnKTsJrUKMuhVkhVFq2lHM3%2Bkv2yLmKzDr4W8BFxWyu%2BnBBA2PlLHI%2FhDdGKqvYl9F8ZlaBxNJcORcMLGXd4%2FEr9%2BCMjB0cWiMAbBj%2F0Tyft94%2FoUNEh7epOg7juutAWcYuq1Zl7PsmDD6Bb04LjAZ9YYDP14FJJ2uLfKt%2B6x%2F4sHvsbzhY3oJNzzl%2BKlwTtEq3%2Fj7fddfcUrBXXZEcK7wEenLFJVapiIo3qSDpGdwwd1UdeAJFH5FC8fwrj%2BVZKZYg4e4Zn83eLocU49hpFCyY5RAX%2BlLf%2FVVP1QcxvwI%2FH3Y%2Bub7ShVyMdfnjxNKWLNlmcy1rdR%2BegWcS1zTpd50uDDqUiBkGMA0OkdWDAqCQ5u%2BFslz0j6g2zGGRmWLahfyQ1wG6AyA2KILGtB7aX%2FOhSbP2Y8dXoANKvMvW2%2FWldOOOmw9HQ1Giu8AofVylLMO%2BEKBT7LvtvuDQHkb0%2Bhz%2FWsVPPyEIeMlgOPfMEddaRYhuShpPIurcRD1kLnsRMhLT%2BxPCQjyOSt3XBHMxflcNzyuIQiVZFZ%2BsEbBeSkmCZvyI%2BpeEdzOuGYbU%2Fgm5IcRHUhvfufkyT4VYB03Ewim8wMv8AJ2kkFt0BJRyC9Mw5JK4xAY6pgFUdZyVHNj6ny7Plv%2FciYjl8VQ%2BZobVrm%2FwuEG6AHk5nrmYJWwxkzc5iJGd3DGMianmLoEhom1gRzkwtpacBoUNieOCeGePaYCTa9gvGkpTCtnkEykJounabV3EU6DjjdbHZ5YQQOho4LoCFm8JdkeTy2aAwhhXmRqlKi82d4Jx9C3UpVt0lJJBkyk3RDrOKR4fwQjWm7qJa5JUFBt1XVO3iycHYdHz&X-Amz-Signature=3f32b43c3d5dbfdbeea2b976b3e352b218fbe8126e823529f6fd1084a8ed56e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD2GQBV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSkys95yUzAFYJWnOJSydp%2Fd1FzjRV6talLOJI6TKkWAiBp72T%2F%2Feglmb%2FkQGncvfkjeFfYLH%2BsS4iTzKNR8FwHzCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMJIi1nzBWd08YCxr5KtwDH78sPkzD2Q5f2ml9plnKTsJrUKMuhVkhVFq2lHM3%2Bkv2yLmKzDr4W8BFxWyu%2BnBBA2PlLHI%2FhDdGKqvYl9F8ZlaBxNJcORcMLGXd4%2FEr9%2BCMjB0cWiMAbBj%2F0Tyft94%2FoUNEh7epOg7juutAWcYuq1Zl7PsmDD6Bb04LjAZ9YYDP14FJJ2uLfKt%2B6x%2F4sHvsbzhY3oJNzzl%2BKlwTtEq3%2Fj7fddfcUrBXXZEcK7wEenLFJVapiIo3qSDpGdwwd1UdeAJFH5FC8fwrj%2BVZKZYg4e4Zn83eLocU49hpFCyY5RAX%2BlLf%2FVVP1QcxvwI%2FH3Y%2Bub7ShVyMdfnjxNKWLNlmcy1rdR%2BegWcS1zTpd50uDDqUiBkGMA0OkdWDAqCQ5u%2BFslz0j6g2zGGRmWLahfyQ1wG6AyA2KILGtB7aX%2FOhSbP2Y8dXoANKvMvW2%2FWldOOOmw9HQ1Giu8AofVylLMO%2BEKBT7LvtvuDQHkb0%2Bhz%2FWsVPPyEIeMlgOPfMEddaRYhuShpPIurcRD1kLnsRMhLT%2BxPCQjyOSt3XBHMxflcNzyuIQiVZFZ%2BsEbBeSkmCZvyI%2BpeEdzOuGYbU%2Fgm5IcRHUhvfufkyT4VYB03Ewim8wMv8AJ2kkFt0BJRyC9Mw5JK4xAY6pgFUdZyVHNj6ny7Plv%2FciYjl8VQ%2BZobVrm%2FwuEG6AHk5nrmYJWwxkzc5iJGd3DGMianmLoEhom1gRzkwtpacBoUNieOCeGePaYCTa9gvGkpTCtnkEykJounabV3EU6DjjdbHZ5YQQOho4LoCFm8JdkeTy2aAwhhXmRqlKi82d4Jx9C3UpVt0lJJBkyk3RDrOKR4fwQjWm7qJa5JUFBt1XVO3iycHYdHz&X-Amz-Signature=52b94baf3532c4740291585bdd8c0ca84f3d3e665b478d9a23bf12ce1205677c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD2GQBV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSkys95yUzAFYJWnOJSydp%2Fd1FzjRV6talLOJI6TKkWAiBp72T%2F%2Feglmb%2FkQGncvfkjeFfYLH%2BsS4iTzKNR8FwHzCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMJIi1nzBWd08YCxr5KtwDH78sPkzD2Q5f2ml9plnKTsJrUKMuhVkhVFq2lHM3%2Bkv2yLmKzDr4W8BFxWyu%2BnBBA2PlLHI%2FhDdGKqvYl9F8ZlaBxNJcORcMLGXd4%2FEr9%2BCMjB0cWiMAbBj%2F0Tyft94%2FoUNEh7epOg7juutAWcYuq1Zl7PsmDD6Bb04LjAZ9YYDP14FJJ2uLfKt%2B6x%2F4sHvsbzhY3oJNzzl%2BKlwTtEq3%2Fj7fddfcUrBXXZEcK7wEenLFJVapiIo3qSDpGdwwd1UdeAJFH5FC8fwrj%2BVZKZYg4e4Zn83eLocU49hpFCyY5RAX%2BlLf%2FVVP1QcxvwI%2FH3Y%2Bub7ShVyMdfnjxNKWLNlmcy1rdR%2BegWcS1zTpd50uDDqUiBkGMA0OkdWDAqCQ5u%2BFslz0j6g2zGGRmWLahfyQ1wG6AyA2KILGtB7aX%2FOhSbP2Y8dXoANKvMvW2%2FWldOOOmw9HQ1Giu8AofVylLMO%2BEKBT7LvtvuDQHkb0%2Bhz%2FWsVPPyEIeMlgOPfMEddaRYhuShpPIurcRD1kLnsRMhLT%2BxPCQjyOSt3XBHMxflcNzyuIQiVZFZ%2BsEbBeSkmCZvyI%2BpeEdzOuGYbU%2Fgm5IcRHUhvfufkyT4VYB03Ewim8wMv8AJ2kkFt0BJRyC9Mw5JK4xAY6pgFUdZyVHNj6ny7Plv%2FciYjl8VQ%2BZobVrm%2FwuEG6AHk5nrmYJWwxkzc5iJGd3DGMianmLoEhom1gRzkwtpacBoUNieOCeGePaYCTa9gvGkpTCtnkEykJounabV3EU6DjjdbHZ5YQQOho4LoCFm8JdkeTy2aAwhhXmRqlKi82d4Jx9C3UpVt0lJJBkyk3RDrOKR4fwQjWm7qJa5JUFBt1XVO3iycHYdHz&X-Amz-Signature=8b43373f1c3064d905046ed9e0a8b9c4254451ad9ac4db96e94ad55a812e10a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD2GQBV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSkys95yUzAFYJWnOJSydp%2Fd1FzjRV6talLOJI6TKkWAiBp72T%2F%2Feglmb%2FkQGncvfkjeFfYLH%2BsS4iTzKNR8FwHzCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMJIi1nzBWd08YCxr5KtwDH78sPkzD2Q5f2ml9plnKTsJrUKMuhVkhVFq2lHM3%2Bkv2yLmKzDr4W8BFxWyu%2BnBBA2PlLHI%2FhDdGKqvYl9F8ZlaBxNJcORcMLGXd4%2FEr9%2BCMjB0cWiMAbBj%2F0Tyft94%2FoUNEh7epOg7juutAWcYuq1Zl7PsmDD6Bb04LjAZ9YYDP14FJJ2uLfKt%2B6x%2F4sHvsbzhY3oJNzzl%2BKlwTtEq3%2Fj7fddfcUrBXXZEcK7wEenLFJVapiIo3qSDpGdwwd1UdeAJFH5FC8fwrj%2BVZKZYg4e4Zn83eLocU49hpFCyY5RAX%2BlLf%2FVVP1QcxvwI%2FH3Y%2Bub7ShVyMdfnjxNKWLNlmcy1rdR%2BegWcS1zTpd50uDDqUiBkGMA0OkdWDAqCQ5u%2BFslz0j6g2zGGRmWLahfyQ1wG6AyA2KILGtB7aX%2FOhSbP2Y8dXoANKvMvW2%2FWldOOOmw9HQ1Giu8AofVylLMO%2BEKBT7LvtvuDQHkb0%2Bhz%2FWsVPPyEIeMlgOPfMEddaRYhuShpPIurcRD1kLnsRMhLT%2BxPCQjyOSt3XBHMxflcNzyuIQiVZFZ%2BsEbBeSkmCZvyI%2BpeEdzOuGYbU%2Fgm5IcRHUhvfufkyT4VYB03Ewim8wMv8AJ2kkFt0BJRyC9Mw5JK4xAY6pgFUdZyVHNj6ny7Plv%2FciYjl8VQ%2BZobVrm%2FwuEG6AHk5nrmYJWwxkzc5iJGd3DGMianmLoEhom1gRzkwtpacBoUNieOCeGePaYCTa9gvGkpTCtnkEykJounabV3EU6DjjdbHZ5YQQOho4LoCFm8JdkeTy2aAwhhXmRqlKi82d4Jx9C3UpVt0lJJBkyk3RDrOKR4fwQjWm7qJa5JUFBt1XVO3iycHYdHz&X-Amz-Signature=19828306015e08f9d371e670b41c19b5ea3b90d9ef53db26ef00eb226780e3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD2GQBV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSkys95yUzAFYJWnOJSydp%2Fd1FzjRV6talLOJI6TKkWAiBp72T%2F%2Feglmb%2FkQGncvfkjeFfYLH%2BsS4iTzKNR8FwHzCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMJIi1nzBWd08YCxr5KtwDH78sPkzD2Q5f2ml9plnKTsJrUKMuhVkhVFq2lHM3%2Bkv2yLmKzDr4W8BFxWyu%2BnBBA2PlLHI%2FhDdGKqvYl9F8ZlaBxNJcORcMLGXd4%2FEr9%2BCMjB0cWiMAbBj%2F0Tyft94%2FoUNEh7epOg7juutAWcYuq1Zl7PsmDD6Bb04LjAZ9YYDP14FJJ2uLfKt%2B6x%2F4sHvsbzhY3oJNzzl%2BKlwTtEq3%2Fj7fddfcUrBXXZEcK7wEenLFJVapiIo3qSDpGdwwd1UdeAJFH5FC8fwrj%2BVZKZYg4e4Zn83eLocU49hpFCyY5RAX%2BlLf%2FVVP1QcxvwI%2FH3Y%2Bub7ShVyMdfnjxNKWLNlmcy1rdR%2BegWcS1zTpd50uDDqUiBkGMA0OkdWDAqCQ5u%2BFslz0j6g2zGGRmWLahfyQ1wG6AyA2KILGtB7aX%2FOhSbP2Y8dXoANKvMvW2%2FWldOOOmw9HQ1Giu8AofVylLMO%2BEKBT7LvtvuDQHkb0%2Bhz%2FWsVPPyEIeMlgOPfMEddaRYhuShpPIurcRD1kLnsRMhLT%2BxPCQjyOSt3XBHMxflcNzyuIQiVZFZ%2BsEbBeSkmCZvyI%2BpeEdzOuGYbU%2Fgm5IcRHUhvfufkyT4VYB03Ewim8wMv8AJ2kkFt0BJRyC9Mw5JK4xAY6pgFUdZyVHNj6ny7Plv%2FciYjl8VQ%2BZobVrm%2FwuEG6AHk5nrmYJWwxkzc5iJGd3DGMianmLoEhom1gRzkwtpacBoUNieOCeGePaYCTa9gvGkpTCtnkEykJounabV3EU6DjjdbHZ5YQQOho4LoCFm8JdkeTy2aAwhhXmRqlKi82d4Jx9C3UpVt0lJJBkyk3RDrOKR4fwQjWm7qJa5JUFBt1XVO3iycHYdHz&X-Amz-Signature=e6b521497a331001c8f55955f6757d25924409f58a5dff95c2e0fa25305f73dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD2GQBV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSkys95yUzAFYJWnOJSydp%2Fd1FzjRV6talLOJI6TKkWAiBp72T%2F%2Feglmb%2FkQGncvfkjeFfYLH%2BsS4iTzKNR8FwHzCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMJIi1nzBWd08YCxr5KtwDH78sPkzD2Q5f2ml9plnKTsJrUKMuhVkhVFq2lHM3%2Bkv2yLmKzDr4W8BFxWyu%2BnBBA2PlLHI%2FhDdGKqvYl9F8ZlaBxNJcORcMLGXd4%2FEr9%2BCMjB0cWiMAbBj%2F0Tyft94%2FoUNEh7epOg7juutAWcYuq1Zl7PsmDD6Bb04LjAZ9YYDP14FJJ2uLfKt%2B6x%2F4sHvsbzhY3oJNzzl%2BKlwTtEq3%2Fj7fddfcUrBXXZEcK7wEenLFJVapiIo3qSDpGdwwd1UdeAJFH5FC8fwrj%2BVZKZYg4e4Zn83eLocU49hpFCyY5RAX%2BlLf%2FVVP1QcxvwI%2FH3Y%2Bub7ShVyMdfnjxNKWLNlmcy1rdR%2BegWcS1zTpd50uDDqUiBkGMA0OkdWDAqCQ5u%2BFslz0j6g2zGGRmWLahfyQ1wG6AyA2KILGtB7aX%2FOhSbP2Y8dXoANKvMvW2%2FWldOOOmw9HQ1Giu8AofVylLMO%2BEKBT7LvtvuDQHkb0%2Bhz%2FWsVPPyEIeMlgOPfMEddaRYhuShpPIurcRD1kLnsRMhLT%2BxPCQjyOSt3XBHMxflcNzyuIQiVZFZ%2BsEbBeSkmCZvyI%2BpeEdzOuGYbU%2Fgm5IcRHUhvfufkyT4VYB03Ewim8wMv8AJ2kkFt0BJRyC9Mw5JK4xAY6pgFUdZyVHNj6ny7Plv%2FciYjl8VQ%2BZobVrm%2FwuEG6AHk5nrmYJWwxkzc5iJGd3DGMianmLoEhom1gRzkwtpacBoUNieOCeGePaYCTa9gvGkpTCtnkEykJounabV3EU6DjjdbHZ5YQQOho4LoCFm8JdkeTy2aAwhhXmRqlKi82d4Jx9C3UpVt0lJJBkyk3RDrOKR4fwQjWm7qJa5JUFBt1XVO3iycHYdHz&X-Amz-Signature=5ac86fc224638bc604f908e9a99f3b582d0ec4996a0825be51d21ae9b0b4bf72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD2GQBV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSkys95yUzAFYJWnOJSydp%2Fd1FzjRV6talLOJI6TKkWAiBp72T%2F%2Feglmb%2FkQGncvfkjeFfYLH%2BsS4iTzKNR8FwHzCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMJIi1nzBWd08YCxr5KtwDH78sPkzD2Q5f2ml9plnKTsJrUKMuhVkhVFq2lHM3%2Bkv2yLmKzDr4W8BFxWyu%2BnBBA2PlLHI%2FhDdGKqvYl9F8ZlaBxNJcORcMLGXd4%2FEr9%2BCMjB0cWiMAbBj%2F0Tyft94%2FoUNEh7epOg7juutAWcYuq1Zl7PsmDD6Bb04LjAZ9YYDP14FJJ2uLfKt%2B6x%2F4sHvsbzhY3oJNzzl%2BKlwTtEq3%2Fj7fddfcUrBXXZEcK7wEenLFJVapiIo3qSDpGdwwd1UdeAJFH5FC8fwrj%2BVZKZYg4e4Zn83eLocU49hpFCyY5RAX%2BlLf%2FVVP1QcxvwI%2FH3Y%2Bub7ShVyMdfnjxNKWLNlmcy1rdR%2BegWcS1zTpd50uDDqUiBkGMA0OkdWDAqCQ5u%2BFslz0j6g2zGGRmWLahfyQ1wG6AyA2KILGtB7aX%2FOhSbP2Y8dXoANKvMvW2%2FWldOOOmw9HQ1Giu8AofVylLMO%2BEKBT7LvtvuDQHkb0%2Bhz%2FWsVPPyEIeMlgOPfMEddaRYhuShpPIurcRD1kLnsRMhLT%2BxPCQjyOSt3XBHMxflcNzyuIQiVZFZ%2BsEbBeSkmCZvyI%2BpeEdzOuGYbU%2Fgm5IcRHUhvfufkyT4VYB03Ewim8wMv8AJ2kkFt0BJRyC9Mw5JK4xAY6pgFUdZyVHNj6ny7Plv%2FciYjl8VQ%2BZobVrm%2FwuEG6AHk5nrmYJWwxkzc5iJGd3DGMianmLoEhom1gRzkwtpacBoUNieOCeGePaYCTa9gvGkpTCtnkEykJounabV3EU6DjjdbHZ5YQQOho4LoCFm8JdkeTy2aAwhhXmRqlKi82d4Jx9C3UpVt0lJJBkyk3RDrOKR4fwQjWm7qJa5JUFBt1XVO3iycHYdHz&X-Amz-Signature=0e064a01691840ccedee0fc6567b4da340adda15d2731e17a105470708d7d022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD2GQBV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSkys95yUzAFYJWnOJSydp%2Fd1FzjRV6talLOJI6TKkWAiBp72T%2F%2Feglmb%2FkQGncvfkjeFfYLH%2BsS4iTzKNR8FwHzCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMJIi1nzBWd08YCxr5KtwDH78sPkzD2Q5f2ml9plnKTsJrUKMuhVkhVFq2lHM3%2Bkv2yLmKzDr4W8BFxWyu%2BnBBA2PlLHI%2FhDdGKqvYl9F8ZlaBxNJcORcMLGXd4%2FEr9%2BCMjB0cWiMAbBj%2F0Tyft94%2FoUNEh7epOg7juutAWcYuq1Zl7PsmDD6Bb04LjAZ9YYDP14FJJ2uLfKt%2B6x%2F4sHvsbzhY3oJNzzl%2BKlwTtEq3%2Fj7fddfcUrBXXZEcK7wEenLFJVapiIo3qSDpGdwwd1UdeAJFH5FC8fwrj%2BVZKZYg4e4Zn83eLocU49hpFCyY5RAX%2BlLf%2FVVP1QcxvwI%2FH3Y%2Bub7ShVyMdfnjxNKWLNlmcy1rdR%2BegWcS1zTpd50uDDqUiBkGMA0OkdWDAqCQ5u%2BFslz0j6g2zGGRmWLahfyQ1wG6AyA2KILGtB7aX%2FOhSbP2Y8dXoANKvMvW2%2FWldOOOmw9HQ1Giu8AofVylLMO%2BEKBT7LvtvuDQHkb0%2Bhz%2FWsVPPyEIeMlgOPfMEddaRYhuShpPIurcRD1kLnsRMhLT%2BxPCQjyOSt3XBHMxflcNzyuIQiVZFZ%2BsEbBeSkmCZvyI%2BpeEdzOuGYbU%2Fgm5IcRHUhvfufkyT4VYB03Ewim8wMv8AJ2kkFt0BJRyC9Mw5JK4xAY6pgFUdZyVHNj6ny7Plv%2FciYjl8VQ%2BZobVrm%2FwuEG6AHk5nrmYJWwxkzc5iJGd3DGMianmLoEhom1gRzkwtpacBoUNieOCeGePaYCTa9gvGkpTCtnkEykJounabV3EU6DjjdbHZ5YQQOho4LoCFm8JdkeTy2aAwhhXmRqlKi82d4Jx9C3UpVt0lJJBkyk3RDrOKR4fwQjWm7qJa5JUFBt1XVO3iycHYdHz&X-Amz-Signature=c449aff9b752b1aa644f6dc9194f477675a6cea188eff9f144a88c9ac98d6b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
