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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHI5J73%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUrM0efgWbjt1SrvaZOwcVFuHejbWpkQHwWhvW35%2FIQIhAJD6Zy87gIWMjsCq6qt%2FTNN5EF1L2KiIv35srWVZ4ZutKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHqYYiieD4oB3EkKQq3ANsN64qO6tWhG%2BHIO06337RjBPXqoWUFMrJimZ6xS6T2vGnoUK66Ba%2B9hJb6%2F0rfrn9Zz7MKTSQ%2BJ7OxDJ06Z8qgmLKHRAJXbpeilRLTlR19vrnUpiFdYfYUlrcKMzjLTY0YdUTvfTfqxLZ19eC9o2z04u3o3Tpi2UXQWlc4jp8ojTcmM02icI48w3GKGkTggzE9u95Cr2CxgCFJTR9I5Zw0xFJrPXg4j9KLtkXE2reFrzTyH94Yq1T8%2BtswlTkBkuqBqJH%2FiWPyUaX4%2F31K%2F4CVIEdg9ZV5KGfXbF8MeddH8aFDt%2FJmmvQ%2BlolSM5ylKp9DNWO9%2BJg4juibw9Q%2FXS28nHo%2B7%2B%2B%2F66HsNtSSaCQlgEYcEp3rTHjTREpfkAnG%2FKG8ctxC%2BPju95evRj0ebTWI9RH9DapxQ7sqww52PsORJ94w%2FstFI7EVSnW1SLK2IGK7kepf%2BPcdXMVewZIvjQLhhlEM61XkrRWJQlT4if7Mdt3ycWXKlUg%2BySPoqTSvWCUmMAuFeo5RwJZlUUqqftOdd08t1rHAd2hvO0tkoUDI3W%2FpTHYVnXuA6nVNt%2F%2F%2FKc5nZepsPyoemuoZNtKaNwuKSdUgyxpco%2BzNyaid6ZPUTcTlgmiY%2F3mXvDFwjCr5eG9BjqkAZ8uqJV%2FdEqcy3N9YqGD9dvJ65yJ7bJuTJPjLIxepLMbxH%2FtS5YuL3GGEF4XHrSSvIMbzJCI0IWWZ4tMEwlmGoJN93pqjiHgm8xdBJQ%2FeXNooR9QiI3RmqPq7yEE6B3i%2FR9hPrOb3lOodYPDUojDccqQtIyu0kjI%2FdgIwYRGJS7FRmun82svSlvoz3Q1n65bQdFplyUh5w3%2Fbp%2BBLRgH%2F02C%2FKoz&X-Amz-Signature=49d498a0cffe5be0fbf942a05403bf328f262027a7f5e380ddf6fa0cb54f9363&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHI5J73%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUrM0efgWbjt1SrvaZOwcVFuHejbWpkQHwWhvW35%2FIQIhAJD6Zy87gIWMjsCq6qt%2FTNN5EF1L2KiIv35srWVZ4ZutKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHqYYiieD4oB3EkKQq3ANsN64qO6tWhG%2BHIO06337RjBPXqoWUFMrJimZ6xS6T2vGnoUK66Ba%2B9hJb6%2F0rfrn9Zz7MKTSQ%2BJ7OxDJ06Z8qgmLKHRAJXbpeilRLTlR19vrnUpiFdYfYUlrcKMzjLTY0YdUTvfTfqxLZ19eC9o2z04u3o3Tpi2UXQWlc4jp8ojTcmM02icI48w3GKGkTggzE9u95Cr2CxgCFJTR9I5Zw0xFJrPXg4j9KLtkXE2reFrzTyH94Yq1T8%2BtswlTkBkuqBqJH%2FiWPyUaX4%2F31K%2F4CVIEdg9ZV5KGfXbF8MeddH8aFDt%2FJmmvQ%2BlolSM5ylKp9DNWO9%2BJg4juibw9Q%2FXS28nHo%2B7%2B%2B%2F66HsNtSSaCQlgEYcEp3rTHjTREpfkAnG%2FKG8ctxC%2BPju95evRj0ebTWI9RH9DapxQ7sqww52PsORJ94w%2FstFI7EVSnW1SLK2IGK7kepf%2BPcdXMVewZIvjQLhhlEM61XkrRWJQlT4if7Mdt3ycWXKlUg%2BySPoqTSvWCUmMAuFeo5RwJZlUUqqftOdd08t1rHAd2hvO0tkoUDI3W%2FpTHYVnXuA6nVNt%2F%2F%2FKc5nZepsPyoemuoZNtKaNwuKSdUgyxpco%2BzNyaid6ZPUTcTlgmiY%2F3mXvDFwjCr5eG9BjqkAZ8uqJV%2FdEqcy3N9YqGD9dvJ65yJ7bJuTJPjLIxepLMbxH%2FtS5YuL3GGEF4XHrSSvIMbzJCI0IWWZ4tMEwlmGoJN93pqjiHgm8xdBJQ%2FeXNooR9QiI3RmqPq7yEE6B3i%2FR9hPrOb3lOodYPDUojDccqQtIyu0kjI%2FdgIwYRGJS7FRmun82svSlvoz3Q1n65bQdFplyUh5w3%2Fbp%2BBLRgH%2F02C%2FKoz&X-Amz-Signature=4fd8d7a5f356f7b0c77a47f3ec8268f9eb468de5dc4761889f94c931905da058&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHI5J73%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUrM0efgWbjt1SrvaZOwcVFuHejbWpkQHwWhvW35%2FIQIhAJD6Zy87gIWMjsCq6qt%2FTNN5EF1L2KiIv35srWVZ4ZutKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHqYYiieD4oB3EkKQq3ANsN64qO6tWhG%2BHIO06337RjBPXqoWUFMrJimZ6xS6T2vGnoUK66Ba%2B9hJb6%2F0rfrn9Zz7MKTSQ%2BJ7OxDJ06Z8qgmLKHRAJXbpeilRLTlR19vrnUpiFdYfYUlrcKMzjLTY0YdUTvfTfqxLZ19eC9o2z04u3o3Tpi2UXQWlc4jp8ojTcmM02icI48w3GKGkTggzE9u95Cr2CxgCFJTR9I5Zw0xFJrPXg4j9KLtkXE2reFrzTyH94Yq1T8%2BtswlTkBkuqBqJH%2FiWPyUaX4%2F31K%2F4CVIEdg9ZV5KGfXbF8MeddH8aFDt%2FJmmvQ%2BlolSM5ylKp9DNWO9%2BJg4juibw9Q%2FXS28nHo%2B7%2B%2B%2F66HsNtSSaCQlgEYcEp3rTHjTREpfkAnG%2FKG8ctxC%2BPju95evRj0ebTWI9RH9DapxQ7sqww52PsORJ94w%2FstFI7EVSnW1SLK2IGK7kepf%2BPcdXMVewZIvjQLhhlEM61XkrRWJQlT4if7Mdt3ycWXKlUg%2BySPoqTSvWCUmMAuFeo5RwJZlUUqqftOdd08t1rHAd2hvO0tkoUDI3W%2FpTHYVnXuA6nVNt%2F%2F%2FKc5nZepsPyoemuoZNtKaNwuKSdUgyxpco%2BzNyaid6ZPUTcTlgmiY%2F3mXvDFwjCr5eG9BjqkAZ8uqJV%2FdEqcy3N9YqGD9dvJ65yJ7bJuTJPjLIxepLMbxH%2FtS5YuL3GGEF4XHrSSvIMbzJCI0IWWZ4tMEwlmGoJN93pqjiHgm8xdBJQ%2FeXNooR9QiI3RmqPq7yEE6B3i%2FR9hPrOb3lOodYPDUojDccqQtIyu0kjI%2FdgIwYRGJS7FRmun82svSlvoz3Q1n65bQdFplyUh5w3%2Fbp%2BBLRgH%2F02C%2FKoz&X-Amz-Signature=70d3459663b60054529f81bb282ee04733197accdf5fc22549b95a8c1933a2fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHI5J73%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUrM0efgWbjt1SrvaZOwcVFuHejbWpkQHwWhvW35%2FIQIhAJD6Zy87gIWMjsCq6qt%2FTNN5EF1L2KiIv35srWVZ4ZutKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHqYYiieD4oB3EkKQq3ANsN64qO6tWhG%2BHIO06337RjBPXqoWUFMrJimZ6xS6T2vGnoUK66Ba%2B9hJb6%2F0rfrn9Zz7MKTSQ%2BJ7OxDJ06Z8qgmLKHRAJXbpeilRLTlR19vrnUpiFdYfYUlrcKMzjLTY0YdUTvfTfqxLZ19eC9o2z04u3o3Tpi2UXQWlc4jp8ojTcmM02icI48w3GKGkTggzE9u95Cr2CxgCFJTR9I5Zw0xFJrPXg4j9KLtkXE2reFrzTyH94Yq1T8%2BtswlTkBkuqBqJH%2FiWPyUaX4%2F31K%2F4CVIEdg9ZV5KGfXbF8MeddH8aFDt%2FJmmvQ%2BlolSM5ylKp9DNWO9%2BJg4juibw9Q%2FXS28nHo%2B7%2B%2B%2F66HsNtSSaCQlgEYcEp3rTHjTREpfkAnG%2FKG8ctxC%2BPju95evRj0ebTWI9RH9DapxQ7sqww52PsORJ94w%2FstFI7EVSnW1SLK2IGK7kepf%2BPcdXMVewZIvjQLhhlEM61XkrRWJQlT4if7Mdt3ycWXKlUg%2BySPoqTSvWCUmMAuFeo5RwJZlUUqqftOdd08t1rHAd2hvO0tkoUDI3W%2FpTHYVnXuA6nVNt%2F%2F%2FKc5nZepsPyoemuoZNtKaNwuKSdUgyxpco%2BzNyaid6ZPUTcTlgmiY%2F3mXvDFwjCr5eG9BjqkAZ8uqJV%2FdEqcy3N9YqGD9dvJ65yJ7bJuTJPjLIxepLMbxH%2FtS5YuL3GGEF4XHrSSvIMbzJCI0IWWZ4tMEwlmGoJN93pqjiHgm8xdBJQ%2FeXNooR9QiI3RmqPq7yEE6B3i%2FR9hPrOb3lOodYPDUojDccqQtIyu0kjI%2FdgIwYRGJS7FRmun82svSlvoz3Q1n65bQdFplyUh5w3%2Fbp%2BBLRgH%2F02C%2FKoz&X-Amz-Signature=b75eba83b503edd75b0d1da50b55fe30cd700d743b1576a5d981467a674ec718&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHI5J73%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUrM0efgWbjt1SrvaZOwcVFuHejbWpkQHwWhvW35%2FIQIhAJD6Zy87gIWMjsCq6qt%2FTNN5EF1L2KiIv35srWVZ4ZutKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHqYYiieD4oB3EkKQq3ANsN64qO6tWhG%2BHIO06337RjBPXqoWUFMrJimZ6xS6T2vGnoUK66Ba%2B9hJb6%2F0rfrn9Zz7MKTSQ%2BJ7OxDJ06Z8qgmLKHRAJXbpeilRLTlR19vrnUpiFdYfYUlrcKMzjLTY0YdUTvfTfqxLZ19eC9o2z04u3o3Tpi2UXQWlc4jp8ojTcmM02icI48w3GKGkTggzE9u95Cr2CxgCFJTR9I5Zw0xFJrPXg4j9KLtkXE2reFrzTyH94Yq1T8%2BtswlTkBkuqBqJH%2FiWPyUaX4%2F31K%2F4CVIEdg9ZV5KGfXbF8MeddH8aFDt%2FJmmvQ%2BlolSM5ylKp9DNWO9%2BJg4juibw9Q%2FXS28nHo%2B7%2B%2B%2F66HsNtSSaCQlgEYcEp3rTHjTREpfkAnG%2FKG8ctxC%2BPju95evRj0ebTWI9RH9DapxQ7sqww52PsORJ94w%2FstFI7EVSnW1SLK2IGK7kepf%2BPcdXMVewZIvjQLhhlEM61XkrRWJQlT4if7Mdt3ycWXKlUg%2BySPoqTSvWCUmMAuFeo5RwJZlUUqqftOdd08t1rHAd2hvO0tkoUDI3W%2FpTHYVnXuA6nVNt%2F%2F%2FKc5nZepsPyoemuoZNtKaNwuKSdUgyxpco%2BzNyaid6ZPUTcTlgmiY%2F3mXvDFwjCr5eG9BjqkAZ8uqJV%2FdEqcy3N9YqGD9dvJ65yJ7bJuTJPjLIxepLMbxH%2FtS5YuL3GGEF4XHrSSvIMbzJCI0IWWZ4tMEwlmGoJN93pqjiHgm8xdBJQ%2FeXNooR9QiI3RmqPq7yEE6B3i%2FR9hPrOb3lOodYPDUojDccqQtIyu0kjI%2FdgIwYRGJS7FRmun82svSlvoz3Q1n65bQdFplyUh5w3%2Fbp%2BBLRgH%2F02C%2FKoz&X-Amz-Signature=4c1bf7f49caf75b585b6dbb89df765146a6a1e2ffe82c75c1b14a5cb18f1c95c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHI5J73%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUrM0efgWbjt1SrvaZOwcVFuHejbWpkQHwWhvW35%2FIQIhAJD6Zy87gIWMjsCq6qt%2FTNN5EF1L2KiIv35srWVZ4ZutKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHqYYiieD4oB3EkKQq3ANsN64qO6tWhG%2BHIO06337RjBPXqoWUFMrJimZ6xS6T2vGnoUK66Ba%2B9hJb6%2F0rfrn9Zz7MKTSQ%2BJ7OxDJ06Z8qgmLKHRAJXbpeilRLTlR19vrnUpiFdYfYUlrcKMzjLTY0YdUTvfTfqxLZ19eC9o2z04u3o3Tpi2UXQWlc4jp8ojTcmM02icI48w3GKGkTggzE9u95Cr2CxgCFJTR9I5Zw0xFJrPXg4j9KLtkXE2reFrzTyH94Yq1T8%2BtswlTkBkuqBqJH%2FiWPyUaX4%2F31K%2F4CVIEdg9ZV5KGfXbF8MeddH8aFDt%2FJmmvQ%2BlolSM5ylKp9DNWO9%2BJg4juibw9Q%2FXS28nHo%2B7%2B%2B%2F66HsNtSSaCQlgEYcEp3rTHjTREpfkAnG%2FKG8ctxC%2BPju95evRj0ebTWI9RH9DapxQ7sqww52PsORJ94w%2FstFI7EVSnW1SLK2IGK7kepf%2BPcdXMVewZIvjQLhhlEM61XkrRWJQlT4if7Mdt3ycWXKlUg%2BySPoqTSvWCUmMAuFeo5RwJZlUUqqftOdd08t1rHAd2hvO0tkoUDI3W%2FpTHYVnXuA6nVNt%2F%2F%2FKc5nZepsPyoemuoZNtKaNwuKSdUgyxpco%2BzNyaid6ZPUTcTlgmiY%2F3mXvDFwjCr5eG9BjqkAZ8uqJV%2FdEqcy3N9YqGD9dvJ65yJ7bJuTJPjLIxepLMbxH%2FtS5YuL3GGEF4XHrSSvIMbzJCI0IWWZ4tMEwlmGoJN93pqjiHgm8xdBJQ%2FeXNooR9QiI3RmqPq7yEE6B3i%2FR9hPrOb3lOodYPDUojDccqQtIyu0kjI%2FdgIwYRGJS7FRmun82svSlvoz3Q1n65bQdFplyUh5w3%2Fbp%2BBLRgH%2F02C%2FKoz&X-Amz-Signature=91394a984b951c3e7af74c66c2a779eb191a157a260f6e081981f17009f45d9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHI5J73%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUrM0efgWbjt1SrvaZOwcVFuHejbWpkQHwWhvW35%2FIQIhAJD6Zy87gIWMjsCq6qt%2FTNN5EF1L2KiIv35srWVZ4ZutKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHqYYiieD4oB3EkKQq3ANsN64qO6tWhG%2BHIO06337RjBPXqoWUFMrJimZ6xS6T2vGnoUK66Ba%2B9hJb6%2F0rfrn9Zz7MKTSQ%2BJ7OxDJ06Z8qgmLKHRAJXbpeilRLTlR19vrnUpiFdYfYUlrcKMzjLTY0YdUTvfTfqxLZ19eC9o2z04u3o3Tpi2UXQWlc4jp8ojTcmM02icI48w3GKGkTggzE9u95Cr2CxgCFJTR9I5Zw0xFJrPXg4j9KLtkXE2reFrzTyH94Yq1T8%2BtswlTkBkuqBqJH%2FiWPyUaX4%2F31K%2F4CVIEdg9ZV5KGfXbF8MeddH8aFDt%2FJmmvQ%2BlolSM5ylKp9DNWO9%2BJg4juibw9Q%2FXS28nHo%2B7%2B%2B%2F66HsNtSSaCQlgEYcEp3rTHjTREpfkAnG%2FKG8ctxC%2BPju95evRj0ebTWI9RH9DapxQ7sqww52PsORJ94w%2FstFI7EVSnW1SLK2IGK7kepf%2BPcdXMVewZIvjQLhhlEM61XkrRWJQlT4if7Mdt3ycWXKlUg%2BySPoqTSvWCUmMAuFeo5RwJZlUUqqftOdd08t1rHAd2hvO0tkoUDI3W%2FpTHYVnXuA6nVNt%2F%2F%2FKc5nZepsPyoemuoZNtKaNwuKSdUgyxpco%2BzNyaid6ZPUTcTlgmiY%2F3mXvDFwjCr5eG9BjqkAZ8uqJV%2FdEqcy3N9YqGD9dvJ65yJ7bJuTJPjLIxepLMbxH%2FtS5YuL3GGEF4XHrSSvIMbzJCI0IWWZ4tMEwlmGoJN93pqjiHgm8xdBJQ%2FeXNooR9QiI3RmqPq7yEE6B3i%2FR9hPrOb3lOodYPDUojDccqQtIyu0kjI%2FdgIwYRGJS7FRmun82svSlvoz3Q1n65bQdFplyUh5w3%2Fbp%2BBLRgH%2F02C%2FKoz&X-Amz-Signature=1778554bb9fc3bc72dfa21fb0c40d439324dcd2b1ef59af78be643d197d334b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHI5J73%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUrM0efgWbjt1SrvaZOwcVFuHejbWpkQHwWhvW35%2FIQIhAJD6Zy87gIWMjsCq6qt%2FTNN5EF1L2KiIv35srWVZ4ZutKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHqYYiieD4oB3EkKQq3ANsN64qO6tWhG%2BHIO06337RjBPXqoWUFMrJimZ6xS6T2vGnoUK66Ba%2B9hJb6%2F0rfrn9Zz7MKTSQ%2BJ7OxDJ06Z8qgmLKHRAJXbpeilRLTlR19vrnUpiFdYfYUlrcKMzjLTY0YdUTvfTfqxLZ19eC9o2z04u3o3Tpi2UXQWlc4jp8ojTcmM02icI48w3GKGkTggzE9u95Cr2CxgCFJTR9I5Zw0xFJrPXg4j9KLtkXE2reFrzTyH94Yq1T8%2BtswlTkBkuqBqJH%2FiWPyUaX4%2F31K%2F4CVIEdg9ZV5KGfXbF8MeddH8aFDt%2FJmmvQ%2BlolSM5ylKp9DNWO9%2BJg4juibw9Q%2FXS28nHo%2B7%2B%2B%2F66HsNtSSaCQlgEYcEp3rTHjTREpfkAnG%2FKG8ctxC%2BPju95evRj0ebTWI9RH9DapxQ7sqww52PsORJ94w%2FstFI7EVSnW1SLK2IGK7kepf%2BPcdXMVewZIvjQLhhlEM61XkrRWJQlT4if7Mdt3ycWXKlUg%2BySPoqTSvWCUmMAuFeo5RwJZlUUqqftOdd08t1rHAd2hvO0tkoUDI3W%2FpTHYVnXuA6nVNt%2F%2F%2FKc5nZepsPyoemuoZNtKaNwuKSdUgyxpco%2BzNyaid6ZPUTcTlgmiY%2F3mXvDFwjCr5eG9BjqkAZ8uqJV%2FdEqcy3N9YqGD9dvJ65yJ7bJuTJPjLIxepLMbxH%2FtS5YuL3GGEF4XHrSSvIMbzJCI0IWWZ4tMEwlmGoJN93pqjiHgm8xdBJQ%2FeXNooR9QiI3RmqPq7yEE6B3i%2FR9hPrOb3lOodYPDUojDccqQtIyu0kjI%2FdgIwYRGJS7FRmun82svSlvoz3Q1n65bQdFplyUh5w3%2Fbp%2BBLRgH%2F02C%2FKoz&X-Amz-Signature=fd328496aa3da67d253d524202d0c076fd6cd2f14d98071c2dd9ef50f3b4ca7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
