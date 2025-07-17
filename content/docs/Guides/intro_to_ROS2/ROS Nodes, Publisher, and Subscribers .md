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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMSLAVIW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBOnRX4F5hPY%2BJqI%2F7a1y5Psf74%2BmjWqH3ygz06YufFWAiEAs%2BOcyW58cY%2FOYs%2BZZnuEKyKW8rh6NpP4MpTIhqqgNrIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBp8BNJT5jqfI1hTcSrcA%2B7ngMOsUKmkCZRv%2BOSqW%2Bw%2FXmicoGQQblFd4m106%2BtqgTw6d7GmoaovS6lw9pHncpWLQ1yxudJCvhP59WT6rIlu6hYGUlh3ZuAYy4CjOyqfLq%2B5Z%2BrTNdGgpgdG5Yc3QQqEiaYgU%2FLpayHjLOIQNl1IMhHFJC%2FpklYea9K4VEGby1U3SK21XLfGJX0jDpvMqoR6JTsWxgWLHqK4nBHJDjMF957EmAV9jf%2BBybE%2Bj2OMuoIlCP9VK%2FvauUbtDUGLJmuFIwWLSStfhJWvurK0kkArzdLw4F7BRjOSsFwYz8N%2BZH8KqoMr7xvWB8vLd2cq83GCwNE%2BmHlsAmrgKubOSr8Cy3gVkJO8TkevVqS6GZoflx3tH9k2DFcpLfS8evCplBRHjqDN9Xs%2F7NhwltLDNYxqUy4GI5X1jQIa7QyBvj41EYB2pRIN6PVuBbFoFeoSiiBjaP6QhUnCCBFJsinMRSS3FxzmTKSfCrfXXvk94GsSVb4JKz54YCRMGhUnexf%2BR0tlvnGf%2B7T3g0llPjQqZyjT5bbsJ2Wayo9NQy6iSbKf6m5aOIE23tG6VjljKqLlHQI6aiF5q3cc2%2BsociCgG%2Btqkqesc6eU3MR6BlknG8XLQ%2BAT5FjFlC2VsCmDMPWN5cMGOqUBehhM47You4MDe%2BTdnDsUw5LFiwpbZZ1nYTXaH9CUQeXu7YSBZyStJKD%2FJFj1TWYy5D%2BnT5Gyb1L4ORREU%2FmdaHaH82%2F%2B0pBF6%2FudJLJ5t90S1BGTJT%2BvwRrHNJjQBu5Kp7cIIOObUz7qiYIgbdyXgPYjd7UYVEEleEBiZiTHZ%2B1H%2BcA1fIVqFRXfDpp5wdxpYYcChjGIc9TqQW6kZDYcUicHrwB3&X-Amz-Signature=c491dd418574c1e521f815ef7b50998e9725f13a11aebcf7efd898fafb207c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMSLAVIW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBOnRX4F5hPY%2BJqI%2F7a1y5Psf74%2BmjWqH3ygz06YufFWAiEAs%2BOcyW58cY%2FOYs%2BZZnuEKyKW8rh6NpP4MpTIhqqgNrIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBp8BNJT5jqfI1hTcSrcA%2B7ngMOsUKmkCZRv%2BOSqW%2Bw%2FXmicoGQQblFd4m106%2BtqgTw6d7GmoaovS6lw9pHncpWLQ1yxudJCvhP59WT6rIlu6hYGUlh3ZuAYy4CjOyqfLq%2B5Z%2BrTNdGgpgdG5Yc3QQqEiaYgU%2FLpayHjLOIQNl1IMhHFJC%2FpklYea9K4VEGby1U3SK21XLfGJX0jDpvMqoR6JTsWxgWLHqK4nBHJDjMF957EmAV9jf%2BBybE%2Bj2OMuoIlCP9VK%2FvauUbtDUGLJmuFIwWLSStfhJWvurK0kkArzdLw4F7BRjOSsFwYz8N%2BZH8KqoMr7xvWB8vLd2cq83GCwNE%2BmHlsAmrgKubOSr8Cy3gVkJO8TkevVqS6GZoflx3tH9k2DFcpLfS8evCplBRHjqDN9Xs%2F7NhwltLDNYxqUy4GI5X1jQIa7QyBvj41EYB2pRIN6PVuBbFoFeoSiiBjaP6QhUnCCBFJsinMRSS3FxzmTKSfCrfXXvk94GsSVb4JKz54YCRMGhUnexf%2BR0tlvnGf%2B7T3g0llPjQqZyjT5bbsJ2Wayo9NQy6iSbKf6m5aOIE23tG6VjljKqLlHQI6aiF5q3cc2%2BsociCgG%2Btqkqesc6eU3MR6BlknG8XLQ%2BAT5FjFlC2VsCmDMPWN5cMGOqUBehhM47You4MDe%2BTdnDsUw5LFiwpbZZ1nYTXaH9CUQeXu7YSBZyStJKD%2FJFj1TWYy5D%2BnT5Gyb1L4ORREU%2FmdaHaH82%2F%2B0pBF6%2FudJLJ5t90S1BGTJT%2BvwRrHNJjQBu5Kp7cIIOObUz7qiYIgbdyXgPYjd7UYVEEleEBiZiTHZ%2B1H%2BcA1fIVqFRXfDpp5wdxpYYcChjGIc9TqQW6kZDYcUicHrwB3&X-Amz-Signature=a126c2cf49dfee87f5376bcee0c7b9756eb98d1ce748844a9c2607df9ade4efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMSLAVIW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBOnRX4F5hPY%2BJqI%2F7a1y5Psf74%2BmjWqH3ygz06YufFWAiEAs%2BOcyW58cY%2FOYs%2BZZnuEKyKW8rh6NpP4MpTIhqqgNrIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBp8BNJT5jqfI1hTcSrcA%2B7ngMOsUKmkCZRv%2BOSqW%2Bw%2FXmicoGQQblFd4m106%2BtqgTw6d7GmoaovS6lw9pHncpWLQ1yxudJCvhP59WT6rIlu6hYGUlh3ZuAYy4CjOyqfLq%2B5Z%2BrTNdGgpgdG5Yc3QQqEiaYgU%2FLpayHjLOIQNl1IMhHFJC%2FpklYea9K4VEGby1U3SK21XLfGJX0jDpvMqoR6JTsWxgWLHqK4nBHJDjMF957EmAV9jf%2BBybE%2Bj2OMuoIlCP9VK%2FvauUbtDUGLJmuFIwWLSStfhJWvurK0kkArzdLw4F7BRjOSsFwYz8N%2BZH8KqoMr7xvWB8vLd2cq83GCwNE%2BmHlsAmrgKubOSr8Cy3gVkJO8TkevVqS6GZoflx3tH9k2DFcpLfS8evCplBRHjqDN9Xs%2F7NhwltLDNYxqUy4GI5X1jQIa7QyBvj41EYB2pRIN6PVuBbFoFeoSiiBjaP6QhUnCCBFJsinMRSS3FxzmTKSfCrfXXvk94GsSVb4JKz54YCRMGhUnexf%2BR0tlvnGf%2B7T3g0llPjQqZyjT5bbsJ2Wayo9NQy6iSbKf6m5aOIE23tG6VjljKqLlHQI6aiF5q3cc2%2BsociCgG%2Btqkqesc6eU3MR6BlknG8XLQ%2BAT5FjFlC2VsCmDMPWN5cMGOqUBehhM47You4MDe%2BTdnDsUw5LFiwpbZZ1nYTXaH9CUQeXu7YSBZyStJKD%2FJFj1TWYy5D%2BnT5Gyb1L4ORREU%2FmdaHaH82%2F%2B0pBF6%2FudJLJ5t90S1BGTJT%2BvwRrHNJjQBu5Kp7cIIOObUz7qiYIgbdyXgPYjd7UYVEEleEBiZiTHZ%2B1H%2BcA1fIVqFRXfDpp5wdxpYYcChjGIc9TqQW6kZDYcUicHrwB3&X-Amz-Signature=c6abe340813466d535a4683fb262b15ae6474ee47cf580e0ac526c58276df7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMSLAVIW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBOnRX4F5hPY%2BJqI%2F7a1y5Psf74%2BmjWqH3ygz06YufFWAiEAs%2BOcyW58cY%2FOYs%2BZZnuEKyKW8rh6NpP4MpTIhqqgNrIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBp8BNJT5jqfI1hTcSrcA%2B7ngMOsUKmkCZRv%2BOSqW%2Bw%2FXmicoGQQblFd4m106%2BtqgTw6d7GmoaovS6lw9pHncpWLQ1yxudJCvhP59WT6rIlu6hYGUlh3ZuAYy4CjOyqfLq%2B5Z%2BrTNdGgpgdG5Yc3QQqEiaYgU%2FLpayHjLOIQNl1IMhHFJC%2FpklYea9K4VEGby1U3SK21XLfGJX0jDpvMqoR6JTsWxgWLHqK4nBHJDjMF957EmAV9jf%2BBybE%2Bj2OMuoIlCP9VK%2FvauUbtDUGLJmuFIwWLSStfhJWvurK0kkArzdLw4F7BRjOSsFwYz8N%2BZH8KqoMr7xvWB8vLd2cq83GCwNE%2BmHlsAmrgKubOSr8Cy3gVkJO8TkevVqS6GZoflx3tH9k2DFcpLfS8evCplBRHjqDN9Xs%2F7NhwltLDNYxqUy4GI5X1jQIa7QyBvj41EYB2pRIN6PVuBbFoFeoSiiBjaP6QhUnCCBFJsinMRSS3FxzmTKSfCrfXXvk94GsSVb4JKz54YCRMGhUnexf%2BR0tlvnGf%2B7T3g0llPjQqZyjT5bbsJ2Wayo9NQy6iSbKf6m5aOIE23tG6VjljKqLlHQI6aiF5q3cc2%2BsociCgG%2Btqkqesc6eU3MR6BlknG8XLQ%2BAT5FjFlC2VsCmDMPWN5cMGOqUBehhM47You4MDe%2BTdnDsUw5LFiwpbZZ1nYTXaH9CUQeXu7YSBZyStJKD%2FJFj1TWYy5D%2BnT5Gyb1L4ORREU%2FmdaHaH82%2F%2B0pBF6%2FudJLJ5t90S1BGTJT%2BvwRrHNJjQBu5Kp7cIIOObUz7qiYIgbdyXgPYjd7UYVEEleEBiZiTHZ%2B1H%2BcA1fIVqFRXfDpp5wdxpYYcChjGIc9TqQW6kZDYcUicHrwB3&X-Amz-Signature=56c5a36628e6a980c303bbf0532c45c17cbbfb4b5e7731c10768880ab5e582e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMSLAVIW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBOnRX4F5hPY%2BJqI%2F7a1y5Psf74%2BmjWqH3ygz06YufFWAiEAs%2BOcyW58cY%2FOYs%2BZZnuEKyKW8rh6NpP4MpTIhqqgNrIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBp8BNJT5jqfI1hTcSrcA%2B7ngMOsUKmkCZRv%2BOSqW%2Bw%2FXmicoGQQblFd4m106%2BtqgTw6d7GmoaovS6lw9pHncpWLQ1yxudJCvhP59WT6rIlu6hYGUlh3ZuAYy4CjOyqfLq%2B5Z%2BrTNdGgpgdG5Yc3QQqEiaYgU%2FLpayHjLOIQNl1IMhHFJC%2FpklYea9K4VEGby1U3SK21XLfGJX0jDpvMqoR6JTsWxgWLHqK4nBHJDjMF957EmAV9jf%2BBybE%2Bj2OMuoIlCP9VK%2FvauUbtDUGLJmuFIwWLSStfhJWvurK0kkArzdLw4F7BRjOSsFwYz8N%2BZH8KqoMr7xvWB8vLd2cq83GCwNE%2BmHlsAmrgKubOSr8Cy3gVkJO8TkevVqS6GZoflx3tH9k2DFcpLfS8evCplBRHjqDN9Xs%2F7NhwltLDNYxqUy4GI5X1jQIa7QyBvj41EYB2pRIN6PVuBbFoFeoSiiBjaP6QhUnCCBFJsinMRSS3FxzmTKSfCrfXXvk94GsSVb4JKz54YCRMGhUnexf%2BR0tlvnGf%2B7T3g0llPjQqZyjT5bbsJ2Wayo9NQy6iSbKf6m5aOIE23tG6VjljKqLlHQI6aiF5q3cc2%2BsociCgG%2Btqkqesc6eU3MR6BlknG8XLQ%2BAT5FjFlC2VsCmDMPWN5cMGOqUBehhM47You4MDe%2BTdnDsUw5LFiwpbZZ1nYTXaH9CUQeXu7YSBZyStJKD%2FJFj1TWYy5D%2BnT5Gyb1L4ORREU%2FmdaHaH82%2F%2B0pBF6%2FudJLJ5t90S1BGTJT%2BvwRrHNJjQBu5Kp7cIIOObUz7qiYIgbdyXgPYjd7UYVEEleEBiZiTHZ%2B1H%2BcA1fIVqFRXfDpp5wdxpYYcChjGIc9TqQW6kZDYcUicHrwB3&X-Amz-Signature=1a172659ecd55c59f8845bbf838dcfc5e43333a66998eb5d19ced51d7719c7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMSLAVIW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBOnRX4F5hPY%2BJqI%2F7a1y5Psf74%2BmjWqH3ygz06YufFWAiEAs%2BOcyW58cY%2FOYs%2BZZnuEKyKW8rh6NpP4MpTIhqqgNrIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBp8BNJT5jqfI1hTcSrcA%2B7ngMOsUKmkCZRv%2BOSqW%2Bw%2FXmicoGQQblFd4m106%2BtqgTw6d7GmoaovS6lw9pHncpWLQ1yxudJCvhP59WT6rIlu6hYGUlh3ZuAYy4CjOyqfLq%2B5Z%2BrTNdGgpgdG5Yc3QQqEiaYgU%2FLpayHjLOIQNl1IMhHFJC%2FpklYea9K4VEGby1U3SK21XLfGJX0jDpvMqoR6JTsWxgWLHqK4nBHJDjMF957EmAV9jf%2BBybE%2Bj2OMuoIlCP9VK%2FvauUbtDUGLJmuFIwWLSStfhJWvurK0kkArzdLw4F7BRjOSsFwYz8N%2BZH8KqoMr7xvWB8vLd2cq83GCwNE%2BmHlsAmrgKubOSr8Cy3gVkJO8TkevVqS6GZoflx3tH9k2DFcpLfS8evCplBRHjqDN9Xs%2F7NhwltLDNYxqUy4GI5X1jQIa7QyBvj41EYB2pRIN6PVuBbFoFeoSiiBjaP6QhUnCCBFJsinMRSS3FxzmTKSfCrfXXvk94GsSVb4JKz54YCRMGhUnexf%2BR0tlvnGf%2B7T3g0llPjQqZyjT5bbsJ2Wayo9NQy6iSbKf6m5aOIE23tG6VjljKqLlHQI6aiF5q3cc2%2BsociCgG%2Btqkqesc6eU3MR6BlknG8XLQ%2BAT5FjFlC2VsCmDMPWN5cMGOqUBehhM47You4MDe%2BTdnDsUw5LFiwpbZZ1nYTXaH9CUQeXu7YSBZyStJKD%2FJFj1TWYy5D%2BnT5Gyb1L4ORREU%2FmdaHaH82%2F%2B0pBF6%2FudJLJ5t90S1BGTJT%2BvwRrHNJjQBu5Kp7cIIOObUz7qiYIgbdyXgPYjd7UYVEEleEBiZiTHZ%2B1H%2BcA1fIVqFRXfDpp5wdxpYYcChjGIc9TqQW6kZDYcUicHrwB3&X-Amz-Signature=4cf3c44bcda908f5ca0c68a984dd171a509d45963db9d83e90d6e3d3e61f1387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMSLAVIW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBOnRX4F5hPY%2BJqI%2F7a1y5Psf74%2BmjWqH3ygz06YufFWAiEAs%2BOcyW58cY%2FOYs%2BZZnuEKyKW8rh6NpP4MpTIhqqgNrIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBp8BNJT5jqfI1hTcSrcA%2B7ngMOsUKmkCZRv%2BOSqW%2Bw%2FXmicoGQQblFd4m106%2BtqgTw6d7GmoaovS6lw9pHncpWLQ1yxudJCvhP59WT6rIlu6hYGUlh3ZuAYy4CjOyqfLq%2B5Z%2BrTNdGgpgdG5Yc3QQqEiaYgU%2FLpayHjLOIQNl1IMhHFJC%2FpklYea9K4VEGby1U3SK21XLfGJX0jDpvMqoR6JTsWxgWLHqK4nBHJDjMF957EmAV9jf%2BBybE%2Bj2OMuoIlCP9VK%2FvauUbtDUGLJmuFIwWLSStfhJWvurK0kkArzdLw4F7BRjOSsFwYz8N%2BZH8KqoMr7xvWB8vLd2cq83GCwNE%2BmHlsAmrgKubOSr8Cy3gVkJO8TkevVqS6GZoflx3tH9k2DFcpLfS8evCplBRHjqDN9Xs%2F7NhwltLDNYxqUy4GI5X1jQIa7QyBvj41EYB2pRIN6PVuBbFoFeoSiiBjaP6QhUnCCBFJsinMRSS3FxzmTKSfCrfXXvk94GsSVb4JKz54YCRMGhUnexf%2BR0tlvnGf%2B7T3g0llPjQqZyjT5bbsJ2Wayo9NQy6iSbKf6m5aOIE23tG6VjljKqLlHQI6aiF5q3cc2%2BsociCgG%2Btqkqesc6eU3MR6BlknG8XLQ%2BAT5FjFlC2VsCmDMPWN5cMGOqUBehhM47You4MDe%2BTdnDsUw5LFiwpbZZ1nYTXaH9CUQeXu7YSBZyStJKD%2FJFj1TWYy5D%2BnT5Gyb1L4ORREU%2FmdaHaH82%2F%2B0pBF6%2FudJLJ5t90S1BGTJT%2BvwRrHNJjQBu5Kp7cIIOObUz7qiYIgbdyXgPYjd7UYVEEleEBiZiTHZ%2B1H%2BcA1fIVqFRXfDpp5wdxpYYcChjGIc9TqQW6kZDYcUicHrwB3&X-Amz-Signature=7589431792a8f9a416cf5195e77ffaa43cef836bfbcfc817e9d2d53ca8761561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMSLAVIW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBOnRX4F5hPY%2BJqI%2F7a1y5Psf74%2BmjWqH3ygz06YufFWAiEAs%2BOcyW58cY%2FOYs%2BZZnuEKyKW8rh6NpP4MpTIhqqgNrIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBp8BNJT5jqfI1hTcSrcA%2B7ngMOsUKmkCZRv%2BOSqW%2Bw%2FXmicoGQQblFd4m106%2BtqgTw6d7GmoaovS6lw9pHncpWLQ1yxudJCvhP59WT6rIlu6hYGUlh3ZuAYy4CjOyqfLq%2B5Z%2BrTNdGgpgdG5Yc3QQqEiaYgU%2FLpayHjLOIQNl1IMhHFJC%2FpklYea9K4VEGby1U3SK21XLfGJX0jDpvMqoR6JTsWxgWLHqK4nBHJDjMF957EmAV9jf%2BBybE%2Bj2OMuoIlCP9VK%2FvauUbtDUGLJmuFIwWLSStfhJWvurK0kkArzdLw4F7BRjOSsFwYz8N%2BZH8KqoMr7xvWB8vLd2cq83GCwNE%2BmHlsAmrgKubOSr8Cy3gVkJO8TkevVqS6GZoflx3tH9k2DFcpLfS8evCplBRHjqDN9Xs%2F7NhwltLDNYxqUy4GI5X1jQIa7QyBvj41EYB2pRIN6PVuBbFoFeoSiiBjaP6QhUnCCBFJsinMRSS3FxzmTKSfCrfXXvk94GsSVb4JKz54YCRMGhUnexf%2BR0tlvnGf%2B7T3g0llPjQqZyjT5bbsJ2Wayo9NQy6iSbKf6m5aOIE23tG6VjljKqLlHQI6aiF5q3cc2%2BsociCgG%2Btqkqesc6eU3MR6BlknG8XLQ%2BAT5FjFlC2VsCmDMPWN5cMGOqUBehhM47You4MDe%2BTdnDsUw5LFiwpbZZ1nYTXaH9CUQeXu7YSBZyStJKD%2FJFj1TWYy5D%2BnT5Gyb1L4ORREU%2FmdaHaH82%2F%2B0pBF6%2FudJLJ5t90S1BGTJT%2BvwRrHNJjQBu5Kp7cIIOObUz7qiYIgbdyXgPYjd7UYVEEleEBiZiTHZ%2B1H%2BcA1fIVqFRXfDpp5wdxpYYcChjGIc9TqQW6kZDYcUicHrwB3&X-Amz-Signature=0693836eb7fc5abde15613356488a9fcbf7664d547e89a2f95f7f679e818399a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
