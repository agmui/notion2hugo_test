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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDYXLI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5XcR4GD5oCCesg%2FjQj8FSUDJFLlX%2F5YXaLLYYsFVE%2BAiAqD2HEJDWaPWpHYCfX5YlerbSccriGFrskz1h3kRZCqSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMjBme9JjkltqREDzcKtwDFZ2YpHjBnr%2Bdof436U4sQB1KIkaachNPAQ%2FR84uLxQCRWZ%2Bb11yRoOt%2B%2F0%2FzL2E3g9chVW5PtSHzXN1mofqOxmuAxQ2F1wTg7py5gE2sNhagBEJGAUA0czpIYHJWwpD2yrNC6ezLYO5LMhcCgR2H4EbyuOX2TWnNvoNdoddxtIP6H8v1Zd%2BoE3RdeoXjpwFAgDmIr76jAEjZU3W9BQsQeZdJlGCZ6nWQ8znUb8ar6ViYKrsQHucG4Wnz4bX%2B6EqfvFIgivhBNMHldC1N2y6IFqKBy3v3gZhAH93cdyNGVUeqKF4nP3wNyESnTqVGQN4uYJyTWUrHAd4j0%2FpOElIdYK%2BtCANZ2POfLJmPl%2BbVtj7fDkv6dPe%2BmrSO0JR99aUFJjafmzAPd1I9qOvjMJdWvU71gE8QIyXNLu3PZFwlFhq722kC6XGlZtcu5ekBrR4Z1lRvkXeO7%2BmqWtcSBczNh%2FdyMGIrYujwcgrHVd%2BjV7AH52pRP4osQoNTCV4aVTD%2Fu7DIC0nCXyC9jxkN73%2BBUAFdCkC4mD3%2B3R8s%2Ba1VibodjlHqceymRKLUmDTerCFfGuxOwsp0gxa3JARYH%2B7n3OYAa87yK7gIM1zQVNVRZXWhFyKHLXj4cvjQ9IYw6tKSwgY6pgFqaShhCNY7XXWruJvEMLD8L2KEXuHkfGKXHg8kSpfBEZ6kyjRyvp3EjiqSx4qygJU5L6bPqUpP8LdSiTrfBJaZvE7KAePbUrDRw%2Bj%2BUBEz6HgOaTji6qgleESfBs%2FgQFdkhlXoJ1%2FWtgna7hQhZnC%2Bcc%2F4aLCOjRgMONeqoljDQMXLSJzJw2bqsXRPoU63T2pq2kVTd%2BUjexDVkxX3r1TUbE7lwNxl&X-Amz-Signature=06d74ae7bfeaaa364593b8c4b429ae1f8efa35505fee244dbc52576a2e9694e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDYXLI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5XcR4GD5oCCesg%2FjQj8FSUDJFLlX%2F5YXaLLYYsFVE%2BAiAqD2HEJDWaPWpHYCfX5YlerbSccriGFrskz1h3kRZCqSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMjBme9JjkltqREDzcKtwDFZ2YpHjBnr%2Bdof436U4sQB1KIkaachNPAQ%2FR84uLxQCRWZ%2Bb11yRoOt%2B%2F0%2FzL2E3g9chVW5PtSHzXN1mofqOxmuAxQ2F1wTg7py5gE2sNhagBEJGAUA0czpIYHJWwpD2yrNC6ezLYO5LMhcCgR2H4EbyuOX2TWnNvoNdoddxtIP6H8v1Zd%2BoE3RdeoXjpwFAgDmIr76jAEjZU3W9BQsQeZdJlGCZ6nWQ8znUb8ar6ViYKrsQHucG4Wnz4bX%2B6EqfvFIgivhBNMHldC1N2y6IFqKBy3v3gZhAH93cdyNGVUeqKF4nP3wNyESnTqVGQN4uYJyTWUrHAd4j0%2FpOElIdYK%2BtCANZ2POfLJmPl%2BbVtj7fDkv6dPe%2BmrSO0JR99aUFJjafmzAPd1I9qOvjMJdWvU71gE8QIyXNLu3PZFwlFhq722kC6XGlZtcu5ekBrR4Z1lRvkXeO7%2BmqWtcSBczNh%2FdyMGIrYujwcgrHVd%2BjV7AH52pRP4osQoNTCV4aVTD%2Fu7DIC0nCXyC9jxkN73%2BBUAFdCkC4mD3%2B3R8s%2Ba1VibodjlHqceymRKLUmDTerCFfGuxOwsp0gxa3JARYH%2B7n3OYAa87yK7gIM1zQVNVRZXWhFyKHLXj4cvjQ9IYw6tKSwgY6pgFqaShhCNY7XXWruJvEMLD8L2KEXuHkfGKXHg8kSpfBEZ6kyjRyvp3EjiqSx4qygJU5L6bPqUpP8LdSiTrfBJaZvE7KAePbUrDRw%2Bj%2BUBEz6HgOaTji6qgleESfBs%2FgQFdkhlXoJ1%2FWtgna7hQhZnC%2Bcc%2F4aLCOjRgMONeqoljDQMXLSJzJw2bqsXRPoU63T2pq2kVTd%2BUjexDVkxX3r1TUbE7lwNxl&X-Amz-Signature=7a6fe4bb3b6eaaf942c234391777d6bde565ea2010e4efbbfe82d2bbb395ad55&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDYXLI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5XcR4GD5oCCesg%2FjQj8FSUDJFLlX%2F5YXaLLYYsFVE%2BAiAqD2HEJDWaPWpHYCfX5YlerbSccriGFrskz1h3kRZCqSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMjBme9JjkltqREDzcKtwDFZ2YpHjBnr%2Bdof436U4sQB1KIkaachNPAQ%2FR84uLxQCRWZ%2Bb11yRoOt%2B%2F0%2FzL2E3g9chVW5PtSHzXN1mofqOxmuAxQ2F1wTg7py5gE2sNhagBEJGAUA0czpIYHJWwpD2yrNC6ezLYO5LMhcCgR2H4EbyuOX2TWnNvoNdoddxtIP6H8v1Zd%2BoE3RdeoXjpwFAgDmIr76jAEjZU3W9BQsQeZdJlGCZ6nWQ8znUb8ar6ViYKrsQHucG4Wnz4bX%2B6EqfvFIgivhBNMHldC1N2y6IFqKBy3v3gZhAH93cdyNGVUeqKF4nP3wNyESnTqVGQN4uYJyTWUrHAd4j0%2FpOElIdYK%2BtCANZ2POfLJmPl%2BbVtj7fDkv6dPe%2BmrSO0JR99aUFJjafmzAPd1I9qOvjMJdWvU71gE8QIyXNLu3PZFwlFhq722kC6XGlZtcu5ekBrR4Z1lRvkXeO7%2BmqWtcSBczNh%2FdyMGIrYujwcgrHVd%2BjV7AH52pRP4osQoNTCV4aVTD%2Fu7DIC0nCXyC9jxkN73%2BBUAFdCkC4mD3%2B3R8s%2Ba1VibodjlHqceymRKLUmDTerCFfGuxOwsp0gxa3JARYH%2B7n3OYAa87yK7gIM1zQVNVRZXWhFyKHLXj4cvjQ9IYw6tKSwgY6pgFqaShhCNY7XXWruJvEMLD8L2KEXuHkfGKXHg8kSpfBEZ6kyjRyvp3EjiqSx4qygJU5L6bPqUpP8LdSiTrfBJaZvE7KAePbUrDRw%2Bj%2BUBEz6HgOaTji6qgleESfBs%2FgQFdkhlXoJ1%2FWtgna7hQhZnC%2Bcc%2F4aLCOjRgMONeqoljDQMXLSJzJw2bqsXRPoU63T2pq2kVTd%2BUjexDVkxX3r1TUbE7lwNxl&X-Amz-Signature=98fa147284a8aefd7927a1b45896de160bfa137d9b09e0176930fe8adb713ddb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDYXLI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5XcR4GD5oCCesg%2FjQj8FSUDJFLlX%2F5YXaLLYYsFVE%2BAiAqD2HEJDWaPWpHYCfX5YlerbSccriGFrskz1h3kRZCqSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMjBme9JjkltqREDzcKtwDFZ2YpHjBnr%2Bdof436U4sQB1KIkaachNPAQ%2FR84uLxQCRWZ%2Bb11yRoOt%2B%2F0%2FzL2E3g9chVW5PtSHzXN1mofqOxmuAxQ2F1wTg7py5gE2sNhagBEJGAUA0czpIYHJWwpD2yrNC6ezLYO5LMhcCgR2H4EbyuOX2TWnNvoNdoddxtIP6H8v1Zd%2BoE3RdeoXjpwFAgDmIr76jAEjZU3W9BQsQeZdJlGCZ6nWQ8znUb8ar6ViYKrsQHucG4Wnz4bX%2B6EqfvFIgivhBNMHldC1N2y6IFqKBy3v3gZhAH93cdyNGVUeqKF4nP3wNyESnTqVGQN4uYJyTWUrHAd4j0%2FpOElIdYK%2BtCANZ2POfLJmPl%2BbVtj7fDkv6dPe%2BmrSO0JR99aUFJjafmzAPd1I9qOvjMJdWvU71gE8QIyXNLu3PZFwlFhq722kC6XGlZtcu5ekBrR4Z1lRvkXeO7%2BmqWtcSBczNh%2FdyMGIrYujwcgrHVd%2BjV7AH52pRP4osQoNTCV4aVTD%2Fu7DIC0nCXyC9jxkN73%2BBUAFdCkC4mD3%2B3R8s%2Ba1VibodjlHqceymRKLUmDTerCFfGuxOwsp0gxa3JARYH%2B7n3OYAa87yK7gIM1zQVNVRZXWhFyKHLXj4cvjQ9IYw6tKSwgY6pgFqaShhCNY7XXWruJvEMLD8L2KEXuHkfGKXHg8kSpfBEZ6kyjRyvp3EjiqSx4qygJU5L6bPqUpP8LdSiTrfBJaZvE7KAePbUrDRw%2Bj%2BUBEz6HgOaTji6qgleESfBs%2FgQFdkhlXoJ1%2FWtgna7hQhZnC%2Bcc%2F4aLCOjRgMONeqoljDQMXLSJzJw2bqsXRPoU63T2pq2kVTd%2BUjexDVkxX3r1TUbE7lwNxl&X-Amz-Signature=ad4d23378bdd7ee9ffe2c7c451fcf492f1b7efb1a5bcb957c186825a60fd2d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDYXLI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5XcR4GD5oCCesg%2FjQj8FSUDJFLlX%2F5YXaLLYYsFVE%2BAiAqD2HEJDWaPWpHYCfX5YlerbSccriGFrskz1h3kRZCqSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMjBme9JjkltqREDzcKtwDFZ2YpHjBnr%2Bdof436U4sQB1KIkaachNPAQ%2FR84uLxQCRWZ%2Bb11yRoOt%2B%2F0%2FzL2E3g9chVW5PtSHzXN1mofqOxmuAxQ2F1wTg7py5gE2sNhagBEJGAUA0czpIYHJWwpD2yrNC6ezLYO5LMhcCgR2H4EbyuOX2TWnNvoNdoddxtIP6H8v1Zd%2BoE3RdeoXjpwFAgDmIr76jAEjZU3W9BQsQeZdJlGCZ6nWQ8znUb8ar6ViYKrsQHucG4Wnz4bX%2B6EqfvFIgivhBNMHldC1N2y6IFqKBy3v3gZhAH93cdyNGVUeqKF4nP3wNyESnTqVGQN4uYJyTWUrHAd4j0%2FpOElIdYK%2BtCANZ2POfLJmPl%2BbVtj7fDkv6dPe%2BmrSO0JR99aUFJjafmzAPd1I9qOvjMJdWvU71gE8QIyXNLu3PZFwlFhq722kC6XGlZtcu5ekBrR4Z1lRvkXeO7%2BmqWtcSBczNh%2FdyMGIrYujwcgrHVd%2BjV7AH52pRP4osQoNTCV4aVTD%2Fu7DIC0nCXyC9jxkN73%2BBUAFdCkC4mD3%2B3R8s%2Ba1VibodjlHqceymRKLUmDTerCFfGuxOwsp0gxa3JARYH%2B7n3OYAa87yK7gIM1zQVNVRZXWhFyKHLXj4cvjQ9IYw6tKSwgY6pgFqaShhCNY7XXWruJvEMLD8L2KEXuHkfGKXHg8kSpfBEZ6kyjRyvp3EjiqSx4qygJU5L6bPqUpP8LdSiTrfBJaZvE7KAePbUrDRw%2Bj%2BUBEz6HgOaTji6qgleESfBs%2FgQFdkhlXoJ1%2FWtgna7hQhZnC%2Bcc%2F4aLCOjRgMONeqoljDQMXLSJzJw2bqsXRPoU63T2pq2kVTd%2BUjexDVkxX3r1TUbE7lwNxl&X-Amz-Signature=7713273c6041601af59abcb0d79fae585700084f2e117aae428ba6d2727a7a28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDYXLI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5XcR4GD5oCCesg%2FjQj8FSUDJFLlX%2F5YXaLLYYsFVE%2BAiAqD2HEJDWaPWpHYCfX5YlerbSccriGFrskz1h3kRZCqSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMjBme9JjkltqREDzcKtwDFZ2YpHjBnr%2Bdof436U4sQB1KIkaachNPAQ%2FR84uLxQCRWZ%2Bb11yRoOt%2B%2F0%2FzL2E3g9chVW5PtSHzXN1mofqOxmuAxQ2F1wTg7py5gE2sNhagBEJGAUA0czpIYHJWwpD2yrNC6ezLYO5LMhcCgR2H4EbyuOX2TWnNvoNdoddxtIP6H8v1Zd%2BoE3RdeoXjpwFAgDmIr76jAEjZU3W9BQsQeZdJlGCZ6nWQ8znUb8ar6ViYKrsQHucG4Wnz4bX%2B6EqfvFIgivhBNMHldC1N2y6IFqKBy3v3gZhAH93cdyNGVUeqKF4nP3wNyESnTqVGQN4uYJyTWUrHAd4j0%2FpOElIdYK%2BtCANZ2POfLJmPl%2BbVtj7fDkv6dPe%2BmrSO0JR99aUFJjafmzAPd1I9qOvjMJdWvU71gE8QIyXNLu3PZFwlFhq722kC6XGlZtcu5ekBrR4Z1lRvkXeO7%2BmqWtcSBczNh%2FdyMGIrYujwcgrHVd%2BjV7AH52pRP4osQoNTCV4aVTD%2Fu7DIC0nCXyC9jxkN73%2BBUAFdCkC4mD3%2B3R8s%2Ba1VibodjlHqceymRKLUmDTerCFfGuxOwsp0gxa3JARYH%2B7n3OYAa87yK7gIM1zQVNVRZXWhFyKHLXj4cvjQ9IYw6tKSwgY6pgFqaShhCNY7XXWruJvEMLD8L2KEXuHkfGKXHg8kSpfBEZ6kyjRyvp3EjiqSx4qygJU5L6bPqUpP8LdSiTrfBJaZvE7KAePbUrDRw%2Bj%2BUBEz6HgOaTji6qgleESfBs%2FgQFdkhlXoJ1%2FWtgna7hQhZnC%2Bcc%2F4aLCOjRgMONeqoljDQMXLSJzJw2bqsXRPoU63T2pq2kVTd%2BUjexDVkxX3r1TUbE7lwNxl&X-Amz-Signature=2d7c1fa176555761ecc9f825b5793008de915e635edb5ad38e3602188f459648&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDYXLI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5XcR4GD5oCCesg%2FjQj8FSUDJFLlX%2F5YXaLLYYsFVE%2BAiAqD2HEJDWaPWpHYCfX5YlerbSccriGFrskz1h3kRZCqSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMjBme9JjkltqREDzcKtwDFZ2YpHjBnr%2Bdof436U4sQB1KIkaachNPAQ%2FR84uLxQCRWZ%2Bb11yRoOt%2B%2F0%2FzL2E3g9chVW5PtSHzXN1mofqOxmuAxQ2F1wTg7py5gE2sNhagBEJGAUA0czpIYHJWwpD2yrNC6ezLYO5LMhcCgR2H4EbyuOX2TWnNvoNdoddxtIP6H8v1Zd%2BoE3RdeoXjpwFAgDmIr76jAEjZU3W9BQsQeZdJlGCZ6nWQ8znUb8ar6ViYKrsQHucG4Wnz4bX%2B6EqfvFIgivhBNMHldC1N2y6IFqKBy3v3gZhAH93cdyNGVUeqKF4nP3wNyESnTqVGQN4uYJyTWUrHAd4j0%2FpOElIdYK%2BtCANZ2POfLJmPl%2BbVtj7fDkv6dPe%2BmrSO0JR99aUFJjafmzAPd1I9qOvjMJdWvU71gE8QIyXNLu3PZFwlFhq722kC6XGlZtcu5ekBrR4Z1lRvkXeO7%2BmqWtcSBczNh%2FdyMGIrYujwcgrHVd%2BjV7AH52pRP4osQoNTCV4aVTD%2Fu7DIC0nCXyC9jxkN73%2BBUAFdCkC4mD3%2B3R8s%2Ba1VibodjlHqceymRKLUmDTerCFfGuxOwsp0gxa3JARYH%2B7n3OYAa87yK7gIM1zQVNVRZXWhFyKHLXj4cvjQ9IYw6tKSwgY6pgFqaShhCNY7XXWruJvEMLD8L2KEXuHkfGKXHg8kSpfBEZ6kyjRyvp3EjiqSx4qygJU5L6bPqUpP8LdSiTrfBJaZvE7KAePbUrDRw%2Bj%2BUBEz6HgOaTji6qgleESfBs%2FgQFdkhlXoJ1%2FWtgna7hQhZnC%2Bcc%2F4aLCOjRgMONeqoljDQMXLSJzJw2bqsXRPoU63T2pq2kVTd%2BUjexDVkxX3r1TUbE7lwNxl&X-Amz-Signature=c8e78c16f1a68e56453f8196e5200431372c84e6281b5a7e74001b85e9142ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDYXLI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5XcR4GD5oCCesg%2FjQj8FSUDJFLlX%2F5YXaLLYYsFVE%2BAiAqD2HEJDWaPWpHYCfX5YlerbSccriGFrskz1h3kRZCqSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMjBme9JjkltqREDzcKtwDFZ2YpHjBnr%2Bdof436U4sQB1KIkaachNPAQ%2FR84uLxQCRWZ%2Bb11yRoOt%2B%2F0%2FzL2E3g9chVW5PtSHzXN1mofqOxmuAxQ2F1wTg7py5gE2sNhagBEJGAUA0czpIYHJWwpD2yrNC6ezLYO5LMhcCgR2H4EbyuOX2TWnNvoNdoddxtIP6H8v1Zd%2BoE3RdeoXjpwFAgDmIr76jAEjZU3W9BQsQeZdJlGCZ6nWQ8znUb8ar6ViYKrsQHucG4Wnz4bX%2B6EqfvFIgivhBNMHldC1N2y6IFqKBy3v3gZhAH93cdyNGVUeqKF4nP3wNyESnTqVGQN4uYJyTWUrHAd4j0%2FpOElIdYK%2BtCANZ2POfLJmPl%2BbVtj7fDkv6dPe%2BmrSO0JR99aUFJjafmzAPd1I9qOvjMJdWvU71gE8QIyXNLu3PZFwlFhq722kC6XGlZtcu5ekBrR4Z1lRvkXeO7%2BmqWtcSBczNh%2FdyMGIrYujwcgrHVd%2BjV7AH52pRP4osQoNTCV4aVTD%2Fu7DIC0nCXyC9jxkN73%2BBUAFdCkC4mD3%2B3R8s%2Ba1VibodjlHqceymRKLUmDTerCFfGuxOwsp0gxa3JARYH%2B7n3OYAa87yK7gIM1zQVNVRZXWhFyKHLXj4cvjQ9IYw6tKSwgY6pgFqaShhCNY7XXWruJvEMLD8L2KEXuHkfGKXHg8kSpfBEZ6kyjRyvp3EjiqSx4qygJU5L6bPqUpP8LdSiTrfBJaZvE7KAePbUrDRw%2Bj%2BUBEz6HgOaTji6qgleESfBs%2FgQFdkhlXoJ1%2FWtgna7hQhZnC%2Bcc%2F4aLCOjRgMONeqoljDQMXLSJzJw2bqsXRPoU63T2pq2kVTd%2BUjexDVkxX3r1TUbE7lwNxl&X-Amz-Signature=900b8854131f10be38d602387dc931702570f90fd78e7a9ec85155725d4aefe9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
