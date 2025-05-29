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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3RICK2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBlT826Sr9TXfNghr7aRmh4jNL%2FqnuLW%2FblBIyGI8AnAiEAkDycWeNl9pDn5zjydOg8epT67U%2F8mB%2Bg4PSfZ0%2FgZ14qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1pUPsKdhxeHsZdlircAzi8rSSPGmiQ4hgtW3R7x%2B%2B%2FUm5fVNns4PlhtgCzh4TRPFPyddsAbqGjXaJLrXk%2FAdYKXdFbXrbD8FrLjFte%2F3y2oJKOVFfOik5f0dZKjZNP%2BFtw0g1E37hUfDfvRk8s5Xx%2BfpZMmOJRjT96FmBWrRARSSyfryMtAZt3oBeKH%2BErr4e5Y65yHMuFbi11ApehXkLFfXFQSQU27TUxmk6JOUjM2PGARN4hLqYGCWVGVLbFT8q3W2XCswnsCxcxK9vNotJWq7pUUiYdMD6trOMnvuKfDDXHJFGrVDfu4zQZAS7JM4lzCQmBAjhuAHZvY3DA2sS%2FxPNusGWBM6xDurf75onG7XbyxXNi9lFOEZwlWx6wnxNcL4J4somF3lyDysQZVaat7dh9Imvzf18Y4%2B4vvgbD8gCRVX%2Fjfsw6HRECir1dBVQDG4dA93vI8P0ZaeoEza1ErGRtYx1bEA3awAxxKvjlUeHWNTJAouard%2FjkdE837qeDBX6TcNha502ynkv6N%2BXwPhweMX6nZCdCwWinNUHIiITb2KP7lqrGZbNfXnvcqXuGmGqQI1%2FCry0iqSqFeXT9xxdlbF0mDrZ6nWscDj0t5itVk5FYPko7JM9%2Fz1KBmdaAvuOzjjB03pOWMIuy4cEGOqUBc0cP13cKoIThMGgzTvNHnK5K%2BirNWo1jmXPPkAwiqUN8i%2FcSkeCrK7meN93WMZ%2BpaPwvHlsCHWuqYTS9WfScvb4AK%2F%2FWKvr8TiPZ5X56CIesgmDJzwZKnG8bo7MP8X7aosaMRpOfoNyVvf%2FAvu2HOyilllCS7XWhkCV%2F4nHoriLu%2Bsknxsez3RnS9O9beHOU%2Fd5G9D61H%2BS8DyeBHERJDLClLxbC&X-Amz-Signature=7d28061643e6a544426de483bc0e41f1ce763460e2fa6b129cd6b7a7c22f7ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3RICK2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBlT826Sr9TXfNghr7aRmh4jNL%2FqnuLW%2FblBIyGI8AnAiEAkDycWeNl9pDn5zjydOg8epT67U%2F8mB%2Bg4PSfZ0%2FgZ14qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1pUPsKdhxeHsZdlircAzi8rSSPGmiQ4hgtW3R7x%2B%2B%2FUm5fVNns4PlhtgCzh4TRPFPyddsAbqGjXaJLrXk%2FAdYKXdFbXrbD8FrLjFte%2F3y2oJKOVFfOik5f0dZKjZNP%2BFtw0g1E37hUfDfvRk8s5Xx%2BfpZMmOJRjT96FmBWrRARSSyfryMtAZt3oBeKH%2BErr4e5Y65yHMuFbi11ApehXkLFfXFQSQU27TUxmk6JOUjM2PGARN4hLqYGCWVGVLbFT8q3W2XCswnsCxcxK9vNotJWq7pUUiYdMD6trOMnvuKfDDXHJFGrVDfu4zQZAS7JM4lzCQmBAjhuAHZvY3DA2sS%2FxPNusGWBM6xDurf75onG7XbyxXNi9lFOEZwlWx6wnxNcL4J4somF3lyDysQZVaat7dh9Imvzf18Y4%2B4vvgbD8gCRVX%2Fjfsw6HRECir1dBVQDG4dA93vI8P0ZaeoEza1ErGRtYx1bEA3awAxxKvjlUeHWNTJAouard%2FjkdE837qeDBX6TcNha502ynkv6N%2BXwPhweMX6nZCdCwWinNUHIiITb2KP7lqrGZbNfXnvcqXuGmGqQI1%2FCry0iqSqFeXT9xxdlbF0mDrZ6nWscDj0t5itVk5FYPko7JM9%2Fz1KBmdaAvuOzjjB03pOWMIuy4cEGOqUBc0cP13cKoIThMGgzTvNHnK5K%2BirNWo1jmXPPkAwiqUN8i%2FcSkeCrK7meN93WMZ%2BpaPwvHlsCHWuqYTS9WfScvb4AK%2F%2FWKvr8TiPZ5X56CIesgmDJzwZKnG8bo7MP8X7aosaMRpOfoNyVvf%2FAvu2HOyilllCS7XWhkCV%2F4nHoriLu%2Bsknxsez3RnS9O9beHOU%2Fd5G9D61H%2BS8DyeBHERJDLClLxbC&X-Amz-Signature=3cc44d9c483f8469583445951e0a9ad30abf6d06b8fa1233aa3e0bff09492f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3RICK2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBlT826Sr9TXfNghr7aRmh4jNL%2FqnuLW%2FblBIyGI8AnAiEAkDycWeNl9pDn5zjydOg8epT67U%2F8mB%2Bg4PSfZ0%2FgZ14qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1pUPsKdhxeHsZdlircAzi8rSSPGmiQ4hgtW3R7x%2B%2B%2FUm5fVNns4PlhtgCzh4TRPFPyddsAbqGjXaJLrXk%2FAdYKXdFbXrbD8FrLjFte%2F3y2oJKOVFfOik5f0dZKjZNP%2BFtw0g1E37hUfDfvRk8s5Xx%2BfpZMmOJRjT96FmBWrRARSSyfryMtAZt3oBeKH%2BErr4e5Y65yHMuFbi11ApehXkLFfXFQSQU27TUxmk6JOUjM2PGARN4hLqYGCWVGVLbFT8q3W2XCswnsCxcxK9vNotJWq7pUUiYdMD6trOMnvuKfDDXHJFGrVDfu4zQZAS7JM4lzCQmBAjhuAHZvY3DA2sS%2FxPNusGWBM6xDurf75onG7XbyxXNi9lFOEZwlWx6wnxNcL4J4somF3lyDysQZVaat7dh9Imvzf18Y4%2B4vvgbD8gCRVX%2Fjfsw6HRECir1dBVQDG4dA93vI8P0ZaeoEza1ErGRtYx1bEA3awAxxKvjlUeHWNTJAouard%2FjkdE837qeDBX6TcNha502ynkv6N%2BXwPhweMX6nZCdCwWinNUHIiITb2KP7lqrGZbNfXnvcqXuGmGqQI1%2FCry0iqSqFeXT9xxdlbF0mDrZ6nWscDj0t5itVk5FYPko7JM9%2Fz1KBmdaAvuOzjjB03pOWMIuy4cEGOqUBc0cP13cKoIThMGgzTvNHnK5K%2BirNWo1jmXPPkAwiqUN8i%2FcSkeCrK7meN93WMZ%2BpaPwvHlsCHWuqYTS9WfScvb4AK%2F%2FWKvr8TiPZ5X56CIesgmDJzwZKnG8bo7MP8X7aosaMRpOfoNyVvf%2FAvu2HOyilllCS7XWhkCV%2F4nHoriLu%2Bsknxsez3RnS9O9beHOU%2Fd5G9D61H%2BS8DyeBHERJDLClLxbC&X-Amz-Signature=90b121ac6403ede2e161a1efbd630f28a0e58783e884f4534a8e616c5212b4a7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3RICK2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBlT826Sr9TXfNghr7aRmh4jNL%2FqnuLW%2FblBIyGI8AnAiEAkDycWeNl9pDn5zjydOg8epT67U%2F8mB%2Bg4PSfZ0%2FgZ14qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1pUPsKdhxeHsZdlircAzi8rSSPGmiQ4hgtW3R7x%2B%2B%2FUm5fVNns4PlhtgCzh4TRPFPyddsAbqGjXaJLrXk%2FAdYKXdFbXrbD8FrLjFte%2F3y2oJKOVFfOik5f0dZKjZNP%2BFtw0g1E37hUfDfvRk8s5Xx%2BfpZMmOJRjT96FmBWrRARSSyfryMtAZt3oBeKH%2BErr4e5Y65yHMuFbi11ApehXkLFfXFQSQU27TUxmk6JOUjM2PGARN4hLqYGCWVGVLbFT8q3W2XCswnsCxcxK9vNotJWq7pUUiYdMD6trOMnvuKfDDXHJFGrVDfu4zQZAS7JM4lzCQmBAjhuAHZvY3DA2sS%2FxPNusGWBM6xDurf75onG7XbyxXNi9lFOEZwlWx6wnxNcL4J4somF3lyDysQZVaat7dh9Imvzf18Y4%2B4vvgbD8gCRVX%2Fjfsw6HRECir1dBVQDG4dA93vI8P0ZaeoEza1ErGRtYx1bEA3awAxxKvjlUeHWNTJAouard%2FjkdE837qeDBX6TcNha502ynkv6N%2BXwPhweMX6nZCdCwWinNUHIiITb2KP7lqrGZbNfXnvcqXuGmGqQI1%2FCry0iqSqFeXT9xxdlbF0mDrZ6nWscDj0t5itVk5FYPko7JM9%2Fz1KBmdaAvuOzjjB03pOWMIuy4cEGOqUBc0cP13cKoIThMGgzTvNHnK5K%2BirNWo1jmXPPkAwiqUN8i%2FcSkeCrK7meN93WMZ%2BpaPwvHlsCHWuqYTS9WfScvb4AK%2F%2FWKvr8TiPZ5X56CIesgmDJzwZKnG8bo7MP8X7aosaMRpOfoNyVvf%2FAvu2HOyilllCS7XWhkCV%2F4nHoriLu%2Bsknxsez3RnS9O9beHOU%2Fd5G9D61H%2BS8DyeBHERJDLClLxbC&X-Amz-Signature=e8b1294c1c00caeafba3b80cc10d1bda8abdecc38734786d9db9d1fc042a8e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3RICK2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBlT826Sr9TXfNghr7aRmh4jNL%2FqnuLW%2FblBIyGI8AnAiEAkDycWeNl9pDn5zjydOg8epT67U%2F8mB%2Bg4PSfZ0%2FgZ14qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1pUPsKdhxeHsZdlircAzi8rSSPGmiQ4hgtW3R7x%2B%2B%2FUm5fVNns4PlhtgCzh4TRPFPyddsAbqGjXaJLrXk%2FAdYKXdFbXrbD8FrLjFte%2F3y2oJKOVFfOik5f0dZKjZNP%2BFtw0g1E37hUfDfvRk8s5Xx%2BfpZMmOJRjT96FmBWrRARSSyfryMtAZt3oBeKH%2BErr4e5Y65yHMuFbi11ApehXkLFfXFQSQU27TUxmk6JOUjM2PGARN4hLqYGCWVGVLbFT8q3W2XCswnsCxcxK9vNotJWq7pUUiYdMD6trOMnvuKfDDXHJFGrVDfu4zQZAS7JM4lzCQmBAjhuAHZvY3DA2sS%2FxPNusGWBM6xDurf75onG7XbyxXNi9lFOEZwlWx6wnxNcL4J4somF3lyDysQZVaat7dh9Imvzf18Y4%2B4vvgbD8gCRVX%2Fjfsw6HRECir1dBVQDG4dA93vI8P0ZaeoEza1ErGRtYx1bEA3awAxxKvjlUeHWNTJAouard%2FjkdE837qeDBX6TcNha502ynkv6N%2BXwPhweMX6nZCdCwWinNUHIiITb2KP7lqrGZbNfXnvcqXuGmGqQI1%2FCry0iqSqFeXT9xxdlbF0mDrZ6nWscDj0t5itVk5FYPko7JM9%2Fz1KBmdaAvuOzjjB03pOWMIuy4cEGOqUBc0cP13cKoIThMGgzTvNHnK5K%2BirNWo1jmXPPkAwiqUN8i%2FcSkeCrK7meN93WMZ%2BpaPwvHlsCHWuqYTS9WfScvb4AK%2F%2FWKvr8TiPZ5X56CIesgmDJzwZKnG8bo7MP8X7aosaMRpOfoNyVvf%2FAvu2HOyilllCS7XWhkCV%2F4nHoriLu%2Bsknxsez3RnS9O9beHOU%2Fd5G9D61H%2BS8DyeBHERJDLClLxbC&X-Amz-Signature=7ba93a8666bee3ed7e728d67e254c58e6e91dca179f68b81b7006711bc9e8c59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3RICK2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBlT826Sr9TXfNghr7aRmh4jNL%2FqnuLW%2FblBIyGI8AnAiEAkDycWeNl9pDn5zjydOg8epT67U%2F8mB%2Bg4PSfZ0%2FgZ14qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1pUPsKdhxeHsZdlircAzi8rSSPGmiQ4hgtW3R7x%2B%2B%2FUm5fVNns4PlhtgCzh4TRPFPyddsAbqGjXaJLrXk%2FAdYKXdFbXrbD8FrLjFte%2F3y2oJKOVFfOik5f0dZKjZNP%2BFtw0g1E37hUfDfvRk8s5Xx%2BfpZMmOJRjT96FmBWrRARSSyfryMtAZt3oBeKH%2BErr4e5Y65yHMuFbi11ApehXkLFfXFQSQU27TUxmk6JOUjM2PGARN4hLqYGCWVGVLbFT8q3W2XCswnsCxcxK9vNotJWq7pUUiYdMD6trOMnvuKfDDXHJFGrVDfu4zQZAS7JM4lzCQmBAjhuAHZvY3DA2sS%2FxPNusGWBM6xDurf75onG7XbyxXNi9lFOEZwlWx6wnxNcL4J4somF3lyDysQZVaat7dh9Imvzf18Y4%2B4vvgbD8gCRVX%2Fjfsw6HRECir1dBVQDG4dA93vI8P0ZaeoEza1ErGRtYx1bEA3awAxxKvjlUeHWNTJAouard%2FjkdE837qeDBX6TcNha502ynkv6N%2BXwPhweMX6nZCdCwWinNUHIiITb2KP7lqrGZbNfXnvcqXuGmGqQI1%2FCry0iqSqFeXT9xxdlbF0mDrZ6nWscDj0t5itVk5FYPko7JM9%2Fz1KBmdaAvuOzjjB03pOWMIuy4cEGOqUBc0cP13cKoIThMGgzTvNHnK5K%2BirNWo1jmXPPkAwiqUN8i%2FcSkeCrK7meN93WMZ%2BpaPwvHlsCHWuqYTS9WfScvb4AK%2F%2FWKvr8TiPZ5X56CIesgmDJzwZKnG8bo7MP8X7aosaMRpOfoNyVvf%2FAvu2HOyilllCS7XWhkCV%2F4nHoriLu%2Bsknxsez3RnS9O9beHOU%2Fd5G9D61H%2BS8DyeBHERJDLClLxbC&X-Amz-Signature=763731410e5ae6774df6e1661ad5fcb7d40376cb8adbb216f0fff788c2b98f64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3RICK2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBlT826Sr9TXfNghr7aRmh4jNL%2FqnuLW%2FblBIyGI8AnAiEAkDycWeNl9pDn5zjydOg8epT67U%2F8mB%2Bg4PSfZ0%2FgZ14qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1pUPsKdhxeHsZdlircAzi8rSSPGmiQ4hgtW3R7x%2B%2B%2FUm5fVNns4PlhtgCzh4TRPFPyddsAbqGjXaJLrXk%2FAdYKXdFbXrbD8FrLjFte%2F3y2oJKOVFfOik5f0dZKjZNP%2BFtw0g1E37hUfDfvRk8s5Xx%2BfpZMmOJRjT96FmBWrRARSSyfryMtAZt3oBeKH%2BErr4e5Y65yHMuFbi11ApehXkLFfXFQSQU27TUxmk6JOUjM2PGARN4hLqYGCWVGVLbFT8q3W2XCswnsCxcxK9vNotJWq7pUUiYdMD6trOMnvuKfDDXHJFGrVDfu4zQZAS7JM4lzCQmBAjhuAHZvY3DA2sS%2FxPNusGWBM6xDurf75onG7XbyxXNi9lFOEZwlWx6wnxNcL4J4somF3lyDysQZVaat7dh9Imvzf18Y4%2B4vvgbD8gCRVX%2Fjfsw6HRECir1dBVQDG4dA93vI8P0ZaeoEza1ErGRtYx1bEA3awAxxKvjlUeHWNTJAouard%2FjkdE837qeDBX6TcNha502ynkv6N%2BXwPhweMX6nZCdCwWinNUHIiITb2KP7lqrGZbNfXnvcqXuGmGqQI1%2FCry0iqSqFeXT9xxdlbF0mDrZ6nWscDj0t5itVk5FYPko7JM9%2Fz1KBmdaAvuOzjjB03pOWMIuy4cEGOqUBc0cP13cKoIThMGgzTvNHnK5K%2BirNWo1jmXPPkAwiqUN8i%2FcSkeCrK7meN93WMZ%2BpaPwvHlsCHWuqYTS9WfScvb4AK%2F%2FWKvr8TiPZ5X56CIesgmDJzwZKnG8bo7MP8X7aosaMRpOfoNyVvf%2FAvu2HOyilllCS7XWhkCV%2F4nHoriLu%2Bsknxsez3RnS9O9beHOU%2Fd5G9D61H%2BS8DyeBHERJDLClLxbC&X-Amz-Signature=a17cc0508319a941ceb53679f006eae93442eaf7e1335a59599b7ebb609040f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3RICK2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBlT826Sr9TXfNghr7aRmh4jNL%2FqnuLW%2FblBIyGI8AnAiEAkDycWeNl9pDn5zjydOg8epT67U%2F8mB%2Bg4PSfZ0%2FgZ14qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1pUPsKdhxeHsZdlircAzi8rSSPGmiQ4hgtW3R7x%2B%2B%2FUm5fVNns4PlhtgCzh4TRPFPyddsAbqGjXaJLrXk%2FAdYKXdFbXrbD8FrLjFte%2F3y2oJKOVFfOik5f0dZKjZNP%2BFtw0g1E37hUfDfvRk8s5Xx%2BfpZMmOJRjT96FmBWrRARSSyfryMtAZt3oBeKH%2BErr4e5Y65yHMuFbi11ApehXkLFfXFQSQU27TUxmk6JOUjM2PGARN4hLqYGCWVGVLbFT8q3W2XCswnsCxcxK9vNotJWq7pUUiYdMD6trOMnvuKfDDXHJFGrVDfu4zQZAS7JM4lzCQmBAjhuAHZvY3DA2sS%2FxPNusGWBM6xDurf75onG7XbyxXNi9lFOEZwlWx6wnxNcL4J4somF3lyDysQZVaat7dh9Imvzf18Y4%2B4vvgbD8gCRVX%2Fjfsw6HRECir1dBVQDG4dA93vI8P0ZaeoEza1ErGRtYx1bEA3awAxxKvjlUeHWNTJAouard%2FjkdE837qeDBX6TcNha502ynkv6N%2BXwPhweMX6nZCdCwWinNUHIiITb2KP7lqrGZbNfXnvcqXuGmGqQI1%2FCry0iqSqFeXT9xxdlbF0mDrZ6nWscDj0t5itVk5FYPko7JM9%2Fz1KBmdaAvuOzjjB03pOWMIuy4cEGOqUBc0cP13cKoIThMGgzTvNHnK5K%2BirNWo1jmXPPkAwiqUN8i%2FcSkeCrK7meN93WMZ%2BpaPwvHlsCHWuqYTS9WfScvb4AK%2F%2FWKvr8TiPZ5X56CIesgmDJzwZKnG8bo7MP8X7aosaMRpOfoNyVvf%2FAvu2HOyilllCS7XWhkCV%2F4nHoriLu%2Bsknxsez3RnS9O9beHOU%2Fd5G9D61H%2BS8DyeBHERJDLClLxbC&X-Amz-Signature=b1110f0a91cb42a79a49c73c801df4d6f22b5ac5326e13fdc7bb77f466e237a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
