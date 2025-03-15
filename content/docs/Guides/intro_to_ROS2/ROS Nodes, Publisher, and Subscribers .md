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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZHT5QH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj3SeOCBykmabwIVq%2FLCij%2FCF6kHOmb6HK8z7NQQuy1AiBiJT5QM6aWWyGjt3aKvJ12wu1xEE98Or0%2Bsv6DYO6b6CqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJQKbTQbZXZMxtprKtwDG8%2FcFtutjHUPSlta2sWkE1o8R29VIO8q6W7xw9N3mLtQm63Q%2BPpXg1tB2L7zzu7aWrUxPd%2BE7ELWFjJB2LGRWvBGK0JjZXfiO8KW2wIgehf4HWWQ8cYMrmT6Zj5HKMd5P68T5PYefIW6fqknuMN0cILv9U0y5T%2FMXB2h9aJHibGJtIFb3q1ohLcMC%2FeXOrfpyo809VRjq%2BR%2BdArbwigX7RYKspYvFLH0d7E5OGm7ikvH4zTdkpyqjEll5asO202%2BF6hvNcMIkWkmTbvckZ7Uf6cFwEw1eII40br3VShaL13y19wZcW5NVQOi%2F09giEojwbJlxbLV4a0wt%2BkeZKVhuVFugPUghT3PbYx%2BJYsmiyTxQCk7uFouX8swUhRF2qgZaOsH2KaVBuJnyX9Szh161EkRVr5yTjOn8Qs6lmAOdSJZixcVV23rBE8VnOcJh5nZCtFJkmHhGxYZQHR1ehq%2BOn51wolYNSgK%2BTspnYMpe1RcexafklIBJGms1hFlNT5VmEcQ5dvpoaGMnyEiytckMTh9H7dl4d1osSTxie3qAcXuuczFLgLBo2bxYM172k8J%2FJ8WlWLrxTwc4%2BPdv7DNGZJeWwhKBGzmZJ5HWn%2Fq1MpIVXRNJJ0lviu2UUUwvMvTvgY6pgEiEQNXomwb062fCqpQjEW6%2BTRW0lqr8Yp5qkVcDnoN%2Bd%2FwaBS84iJx64O%2Bix00MfIiYrk%2FUFuMXB%2BLtqrsPFdLOOMkq0SULDOtqsmpSw9jehEgib0q5cPYL2wEe84IvPxZi52QfzHXSXByEAFMFxo%2FKTfXDgqQ3ulyXVEQxac249dLBhveoNU7G9PENNmWWxWYqqsaQDbmi1zLuUHJ8rQxNJg%2FnsXP&X-Amz-Signature=2736e7b1dd820c4c1d64a816541d4f227c957860bf715cf89777fd2e09449e9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZHT5QH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj3SeOCBykmabwIVq%2FLCij%2FCF6kHOmb6HK8z7NQQuy1AiBiJT5QM6aWWyGjt3aKvJ12wu1xEE98Or0%2Bsv6DYO6b6CqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJQKbTQbZXZMxtprKtwDG8%2FcFtutjHUPSlta2sWkE1o8R29VIO8q6W7xw9N3mLtQm63Q%2BPpXg1tB2L7zzu7aWrUxPd%2BE7ELWFjJB2LGRWvBGK0JjZXfiO8KW2wIgehf4HWWQ8cYMrmT6Zj5HKMd5P68T5PYefIW6fqknuMN0cILv9U0y5T%2FMXB2h9aJHibGJtIFb3q1ohLcMC%2FeXOrfpyo809VRjq%2BR%2BdArbwigX7RYKspYvFLH0d7E5OGm7ikvH4zTdkpyqjEll5asO202%2BF6hvNcMIkWkmTbvckZ7Uf6cFwEw1eII40br3VShaL13y19wZcW5NVQOi%2F09giEojwbJlxbLV4a0wt%2BkeZKVhuVFugPUghT3PbYx%2BJYsmiyTxQCk7uFouX8swUhRF2qgZaOsH2KaVBuJnyX9Szh161EkRVr5yTjOn8Qs6lmAOdSJZixcVV23rBE8VnOcJh5nZCtFJkmHhGxYZQHR1ehq%2BOn51wolYNSgK%2BTspnYMpe1RcexafklIBJGms1hFlNT5VmEcQ5dvpoaGMnyEiytckMTh9H7dl4d1osSTxie3qAcXuuczFLgLBo2bxYM172k8J%2FJ8WlWLrxTwc4%2BPdv7DNGZJeWwhKBGzmZJ5HWn%2Fq1MpIVXRNJJ0lviu2UUUwvMvTvgY6pgEiEQNXomwb062fCqpQjEW6%2BTRW0lqr8Yp5qkVcDnoN%2Bd%2FwaBS84iJx64O%2Bix00MfIiYrk%2FUFuMXB%2BLtqrsPFdLOOMkq0SULDOtqsmpSw9jehEgib0q5cPYL2wEe84IvPxZi52QfzHXSXByEAFMFxo%2FKTfXDgqQ3ulyXVEQxac249dLBhveoNU7G9PENNmWWxWYqqsaQDbmi1zLuUHJ8rQxNJg%2FnsXP&X-Amz-Signature=eb9a0cc0ec9ab60c37a08bfe922ad2923919f409ca03a9b5d0329d4c62ca7d39&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZHT5QH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj3SeOCBykmabwIVq%2FLCij%2FCF6kHOmb6HK8z7NQQuy1AiBiJT5QM6aWWyGjt3aKvJ12wu1xEE98Or0%2Bsv6DYO6b6CqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJQKbTQbZXZMxtprKtwDG8%2FcFtutjHUPSlta2sWkE1o8R29VIO8q6W7xw9N3mLtQm63Q%2BPpXg1tB2L7zzu7aWrUxPd%2BE7ELWFjJB2LGRWvBGK0JjZXfiO8KW2wIgehf4HWWQ8cYMrmT6Zj5HKMd5P68T5PYefIW6fqknuMN0cILv9U0y5T%2FMXB2h9aJHibGJtIFb3q1ohLcMC%2FeXOrfpyo809VRjq%2BR%2BdArbwigX7RYKspYvFLH0d7E5OGm7ikvH4zTdkpyqjEll5asO202%2BF6hvNcMIkWkmTbvckZ7Uf6cFwEw1eII40br3VShaL13y19wZcW5NVQOi%2F09giEojwbJlxbLV4a0wt%2BkeZKVhuVFugPUghT3PbYx%2BJYsmiyTxQCk7uFouX8swUhRF2qgZaOsH2KaVBuJnyX9Szh161EkRVr5yTjOn8Qs6lmAOdSJZixcVV23rBE8VnOcJh5nZCtFJkmHhGxYZQHR1ehq%2BOn51wolYNSgK%2BTspnYMpe1RcexafklIBJGms1hFlNT5VmEcQ5dvpoaGMnyEiytckMTh9H7dl4d1osSTxie3qAcXuuczFLgLBo2bxYM172k8J%2FJ8WlWLrxTwc4%2BPdv7DNGZJeWwhKBGzmZJ5HWn%2Fq1MpIVXRNJJ0lviu2UUUwvMvTvgY6pgEiEQNXomwb062fCqpQjEW6%2BTRW0lqr8Yp5qkVcDnoN%2Bd%2FwaBS84iJx64O%2Bix00MfIiYrk%2FUFuMXB%2BLtqrsPFdLOOMkq0SULDOtqsmpSw9jehEgib0q5cPYL2wEe84IvPxZi52QfzHXSXByEAFMFxo%2FKTfXDgqQ3ulyXVEQxac249dLBhveoNU7G9PENNmWWxWYqqsaQDbmi1zLuUHJ8rQxNJg%2FnsXP&X-Amz-Signature=8b0c3a9a1ca41274f4edc2a9a8c826bb46f569ab29d9ce801e90361a0c34d071&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZHT5QH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj3SeOCBykmabwIVq%2FLCij%2FCF6kHOmb6HK8z7NQQuy1AiBiJT5QM6aWWyGjt3aKvJ12wu1xEE98Or0%2Bsv6DYO6b6CqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJQKbTQbZXZMxtprKtwDG8%2FcFtutjHUPSlta2sWkE1o8R29VIO8q6W7xw9N3mLtQm63Q%2BPpXg1tB2L7zzu7aWrUxPd%2BE7ELWFjJB2LGRWvBGK0JjZXfiO8KW2wIgehf4HWWQ8cYMrmT6Zj5HKMd5P68T5PYefIW6fqknuMN0cILv9U0y5T%2FMXB2h9aJHibGJtIFb3q1ohLcMC%2FeXOrfpyo809VRjq%2BR%2BdArbwigX7RYKspYvFLH0d7E5OGm7ikvH4zTdkpyqjEll5asO202%2BF6hvNcMIkWkmTbvckZ7Uf6cFwEw1eII40br3VShaL13y19wZcW5NVQOi%2F09giEojwbJlxbLV4a0wt%2BkeZKVhuVFugPUghT3PbYx%2BJYsmiyTxQCk7uFouX8swUhRF2qgZaOsH2KaVBuJnyX9Szh161EkRVr5yTjOn8Qs6lmAOdSJZixcVV23rBE8VnOcJh5nZCtFJkmHhGxYZQHR1ehq%2BOn51wolYNSgK%2BTspnYMpe1RcexafklIBJGms1hFlNT5VmEcQ5dvpoaGMnyEiytckMTh9H7dl4d1osSTxie3qAcXuuczFLgLBo2bxYM172k8J%2FJ8WlWLrxTwc4%2BPdv7DNGZJeWwhKBGzmZJ5HWn%2Fq1MpIVXRNJJ0lviu2UUUwvMvTvgY6pgEiEQNXomwb062fCqpQjEW6%2BTRW0lqr8Yp5qkVcDnoN%2Bd%2FwaBS84iJx64O%2Bix00MfIiYrk%2FUFuMXB%2BLtqrsPFdLOOMkq0SULDOtqsmpSw9jehEgib0q5cPYL2wEe84IvPxZi52QfzHXSXByEAFMFxo%2FKTfXDgqQ3ulyXVEQxac249dLBhveoNU7G9PENNmWWxWYqqsaQDbmi1zLuUHJ8rQxNJg%2FnsXP&X-Amz-Signature=157fa50775b8006d67b938e050cc67b28a68e3cc4d381075e7a82e7071352ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZHT5QH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj3SeOCBykmabwIVq%2FLCij%2FCF6kHOmb6HK8z7NQQuy1AiBiJT5QM6aWWyGjt3aKvJ12wu1xEE98Or0%2Bsv6DYO6b6CqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJQKbTQbZXZMxtprKtwDG8%2FcFtutjHUPSlta2sWkE1o8R29VIO8q6W7xw9N3mLtQm63Q%2BPpXg1tB2L7zzu7aWrUxPd%2BE7ELWFjJB2LGRWvBGK0JjZXfiO8KW2wIgehf4HWWQ8cYMrmT6Zj5HKMd5P68T5PYefIW6fqknuMN0cILv9U0y5T%2FMXB2h9aJHibGJtIFb3q1ohLcMC%2FeXOrfpyo809VRjq%2BR%2BdArbwigX7RYKspYvFLH0d7E5OGm7ikvH4zTdkpyqjEll5asO202%2BF6hvNcMIkWkmTbvckZ7Uf6cFwEw1eII40br3VShaL13y19wZcW5NVQOi%2F09giEojwbJlxbLV4a0wt%2BkeZKVhuVFugPUghT3PbYx%2BJYsmiyTxQCk7uFouX8swUhRF2qgZaOsH2KaVBuJnyX9Szh161EkRVr5yTjOn8Qs6lmAOdSJZixcVV23rBE8VnOcJh5nZCtFJkmHhGxYZQHR1ehq%2BOn51wolYNSgK%2BTspnYMpe1RcexafklIBJGms1hFlNT5VmEcQ5dvpoaGMnyEiytckMTh9H7dl4d1osSTxie3qAcXuuczFLgLBo2bxYM172k8J%2FJ8WlWLrxTwc4%2BPdv7DNGZJeWwhKBGzmZJ5HWn%2Fq1MpIVXRNJJ0lviu2UUUwvMvTvgY6pgEiEQNXomwb062fCqpQjEW6%2BTRW0lqr8Yp5qkVcDnoN%2Bd%2FwaBS84iJx64O%2Bix00MfIiYrk%2FUFuMXB%2BLtqrsPFdLOOMkq0SULDOtqsmpSw9jehEgib0q5cPYL2wEe84IvPxZi52QfzHXSXByEAFMFxo%2FKTfXDgqQ3ulyXVEQxac249dLBhveoNU7G9PENNmWWxWYqqsaQDbmi1zLuUHJ8rQxNJg%2FnsXP&X-Amz-Signature=b5ada2d24610c8112e07fe3885363faba2f7f9367e744b128da9ebef3dc9d936&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZHT5QH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj3SeOCBykmabwIVq%2FLCij%2FCF6kHOmb6HK8z7NQQuy1AiBiJT5QM6aWWyGjt3aKvJ12wu1xEE98Or0%2Bsv6DYO6b6CqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJQKbTQbZXZMxtprKtwDG8%2FcFtutjHUPSlta2sWkE1o8R29VIO8q6W7xw9N3mLtQm63Q%2BPpXg1tB2L7zzu7aWrUxPd%2BE7ELWFjJB2LGRWvBGK0JjZXfiO8KW2wIgehf4HWWQ8cYMrmT6Zj5HKMd5P68T5PYefIW6fqknuMN0cILv9U0y5T%2FMXB2h9aJHibGJtIFb3q1ohLcMC%2FeXOrfpyo809VRjq%2BR%2BdArbwigX7RYKspYvFLH0d7E5OGm7ikvH4zTdkpyqjEll5asO202%2BF6hvNcMIkWkmTbvckZ7Uf6cFwEw1eII40br3VShaL13y19wZcW5NVQOi%2F09giEojwbJlxbLV4a0wt%2BkeZKVhuVFugPUghT3PbYx%2BJYsmiyTxQCk7uFouX8swUhRF2qgZaOsH2KaVBuJnyX9Szh161EkRVr5yTjOn8Qs6lmAOdSJZixcVV23rBE8VnOcJh5nZCtFJkmHhGxYZQHR1ehq%2BOn51wolYNSgK%2BTspnYMpe1RcexafklIBJGms1hFlNT5VmEcQ5dvpoaGMnyEiytckMTh9H7dl4d1osSTxie3qAcXuuczFLgLBo2bxYM172k8J%2FJ8WlWLrxTwc4%2BPdv7DNGZJeWwhKBGzmZJ5HWn%2Fq1MpIVXRNJJ0lviu2UUUwvMvTvgY6pgEiEQNXomwb062fCqpQjEW6%2BTRW0lqr8Yp5qkVcDnoN%2Bd%2FwaBS84iJx64O%2Bix00MfIiYrk%2FUFuMXB%2BLtqrsPFdLOOMkq0SULDOtqsmpSw9jehEgib0q5cPYL2wEe84IvPxZi52QfzHXSXByEAFMFxo%2FKTfXDgqQ3ulyXVEQxac249dLBhveoNU7G9PENNmWWxWYqqsaQDbmi1zLuUHJ8rQxNJg%2FnsXP&X-Amz-Signature=92f0b7bf49794495b0797b8950977e9ad2444a6d888de29bb242a3b1c220632b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZHT5QH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj3SeOCBykmabwIVq%2FLCij%2FCF6kHOmb6HK8z7NQQuy1AiBiJT5QM6aWWyGjt3aKvJ12wu1xEE98Or0%2Bsv6DYO6b6CqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJQKbTQbZXZMxtprKtwDG8%2FcFtutjHUPSlta2sWkE1o8R29VIO8q6W7xw9N3mLtQm63Q%2BPpXg1tB2L7zzu7aWrUxPd%2BE7ELWFjJB2LGRWvBGK0JjZXfiO8KW2wIgehf4HWWQ8cYMrmT6Zj5HKMd5P68T5PYefIW6fqknuMN0cILv9U0y5T%2FMXB2h9aJHibGJtIFb3q1ohLcMC%2FeXOrfpyo809VRjq%2BR%2BdArbwigX7RYKspYvFLH0d7E5OGm7ikvH4zTdkpyqjEll5asO202%2BF6hvNcMIkWkmTbvckZ7Uf6cFwEw1eII40br3VShaL13y19wZcW5NVQOi%2F09giEojwbJlxbLV4a0wt%2BkeZKVhuVFugPUghT3PbYx%2BJYsmiyTxQCk7uFouX8swUhRF2qgZaOsH2KaVBuJnyX9Szh161EkRVr5yTjOn8Qs6lmAOdSJZixcVV23rBE8VnOcJh5nZCtFJkmHhGxYZQHR1ehq%2BOn51wolYNSgK%2BTspnYMpe1RcexafklIBJGms1hFlNT5VmEcQ5dvpoaGMnyEiytckMTh9H7dl4d1osSTxie3qAcXuuczFLgLBo2bxYM172k8J%2FJ8WlWLrxTwc4%2BPdv7DNGZJeWwhKBGzmZJ5HWn%2Fq1MpIVXRNJJ0lviu2UUUwvMvTvgY6pgEiEQNXomwb062fCqpQjEW6%2BTRW0lqr8Yp5qkVcDnoN%2Bd%2FwaBS84iJx64O%2Bix00MfIiYrk%2FUFuMXB%2BLtqrsPFdLOOMkq0SULDOtqsmpSw9jehEgib0q5cPYL2wEe84IvPxZi52QfzHXSXByEAFMFxo%2FKTfXDgqQ3ulyXVEQxac249dLBhveoNU7G9PENNmWWxWYqqsaQDbmi1zLuUHJ8rQxNJg%2FnsXP&X-Amz-Signature=72a3a8fc8916b5e9bf69edb584b78efe96035c34aba8f9a8941cca64a22a1e69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZHT5QH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj3SeOCBykmabwIVq%2FLCij%2FCF6kHOmb6HK8z7NQQuy1AiBiJT5QM6aWWyGjt3aKvJ12wu1xEE98Or0%2Bsv6DYO6b6CqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJQKbTQbZXZMxtprKtwDG8%2FcFtutjHUPSlta2sWkE1o8R29VIO8q6W7xw9N3mLtQm63Q%2BPpXg1tB2L7zzu7aWrUxPd%2BE7ELWFjJB2LGRWvBGK0JjZXfiO8KW2wIgehf4HWWQ8cYMrmT6Zj5HKMd5P68T5PYefIW6fqknuMN0cILv9U0y5T%2FMXB2h9aJHibGJtIFb3q1ohLcMC%2FeXOrfpyo809VRjq%2BR%2BdArbwigX7RYKspYvFLH0d7E5OGm7ikvH4zTdkpyqjEll5asO202%2BF6hvNcMIkWkmTbvckZ7Uf6cFwEw1eII40br3VShaL13y19wZcW5NVQOi%2F09giEojwbJlxbLV4a0wt%2BkeZKVhuVFugPUghT3PbYx%2BJYsmiyTxQCk7uFouX8swUhRF2qgZaOsH2KaVBuJnyX9Szh161EkRVr5yTjOn8Qs6lmAOdSJZixcVV23rBE8VnOcJh5nZCtFJkmHhGxYZQHR1ehq%2BOn51wolYNSgK%2BTspnYMpe1RcexafklIBJGms1hFlNT5VmEcQ5dvpoaGMnyEiytckMTh9H7dl4d1osSTxie3qAcXuuczFLgLBo2bxYM172k8J%2FJ8WlWLrxTwc4%2BPdv7DNGZJeWwhKBGzmZJ5HWn%2Fq1MpIVXRNJJ0lviu2UUUwvMvTvgY6pgEiEQNXomwb062fCqpQjEW6%2BTRW0lqr8Yp5qkVcDnoN%2Bd%2FwaBS84iJx64O%2Bix00MfIiYrk%2FUFuMXB%2BLtqrsPFdLOOMkq0SULDOtqsmpSw9jehEgib0q5cPYL2wEe84IvPxZi52QfzHXSXByEAFMFxo%2FKTfXDgqQ3ulyXVEQxac249dLBhveoNU7G9PENNmWWxWYqqsaQDbmi1zLuUHJ8rQxNJg%2FnsXP&X-Amz-Signature=02e2934b69f55a59b79bd499d15f7585853493c62a10e1e1242421106a94b89c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
