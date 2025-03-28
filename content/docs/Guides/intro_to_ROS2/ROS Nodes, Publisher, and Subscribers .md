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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQI6YIZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbkQ%2FhyD1swxfCdRoGwMv0I4MYagn3vQn%2BhEUXa3oOKQIhAMOzix%2BM%2B%2FRrysqtk1xnJ4kNMu1GHJY0fHXd07bWstE2Kv8DCGgQABoMNjM3NDIzMTgzODA1Igy9W8mCQz7HSLBZDIYq3ANnAxylPiCmiAlc5uFE3hs3apcKzxvFYgqDn7Ff%2F%2B4PH934vlCiYhFqeUbZr87aCK%2FO8Pri7xLvx3%2BQnAYHDfJOaobPpZtdfGPniUMeBEa30%2FukY6e%2BHUzsmmmBdjB3qjm8Ct5CowTMEOT%2F6WQd0vkG0%2BRGHlMsViyRno1FfipQ878CJX4R5BLHwJkK7MsbXNcX4XduG4K6YjErT6h3oSv7UEh4S5Xn1pWpWa4BEGybLfg2sWSGCJFTdMkky0eR7AcBmju6cBEcWtC%2Fzd09a2Ro52Y9wWoUKWBRtC%2Bngs9oy57xES8ibGA%2BiZpwBjAM%2FKvIjGCYubHVc3Y7yk6IHf274njJtOsOjkLVRtTG7y6t8JCVWJW6yrFlxuW7A99sdzeDK7286a1LkPohEOQwAuhsXpECTJ7TF%2FhW1Mj8Z%2By0Z7WCPAyOavbK8aULYk1k9uGFKijHq7P%2FDqqZ4AeHm9eoVt4QqHW14vPJUZc7ulIwSe5Qt2BZDhlDahYUSkiqPrkEDYx3xW0OCsDj0mSZ%2BCIqyxJIcPFAexhAYgbZ8h7qfjtvTst3S9sFFeV6RPtJe2tyI%2FuojkEIj8Er273Lt8Iby3lsPsYOtAmQdwUwth%2BVB3fhftMDGqJgs2d5sTDlxJy%2FBjqkAaNXZJfCddODZfB8AXr50pYGTwLGNLPZh8PDJtI2ptco28uc68LeTbsbN3BtxOzar0aeF0QhdimK4YwALXzhsL%2FYpWKAKLlbUyx5qkCWl9B%2FsvdgTBC5zeXhLK6PrbgkWYH4gwjOHF8OmZLmBf3aaZ%2FqXh63%2B5KMdxjaTCx2MggOHmkr3EqOa%2FqbJhQr8cgVwWDKr1IV1dE2ozqIW9xh63OiB143&X-Amz-Signature=ed9ddd6e391ebc09514b6c3c50ab648e3cb5a891adc11a89374df40cca9a8309&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQI6YIZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbkQ%2FhyD1swxfCdRoGwMv0I4MYagn3vQn%2BhEUXa3oOKQIhAMOzix%2BM%2B%2FRrysqtk1xnJ4kNMu1GHJY0fHXd07bWstE2Kv8DCGgQABoMNjM3NDIzMTgzODA1Igy9W8mCQz7HSLBZDIYq3ANnAxylPiCmiAlc5uFE3hs3apcKzxvFYgqDn7Ff%2F%2B4PH934vlCiYhFqeUbZr87aCK%2FO8Pri7xLvx3%2BQnAYHDfJOaobPpZtdfGPniUMeBEa30%2FukY6e%2BHUzsmmmBdjB3qjm8Ct5CowTMEOT%2F6WQd0vkG0%2BRGHlMsViyRno1FfipQ878CJX4R5BLHwJkK7MsbXNcX4XduG4K6YjErT6h3oSv7UEh4S5Xn1pWpWa4BEGybLfg2sWSGCJFTdMkky0eR7AcBmju6cBEcWtC%2Fzd09a2Ro52Y9wWoUKWBRtC%2Bngs9oy57xES8ibGA%2BiZpwBjAM%2FKvIjGCYubHVc3Y7yk6IHf274njJtOsOjkLVRtTG7y6t8JCVWJW6yrFlxuW7A99sdzeDK7286a1LkPohEOQwAuhsXpECTJ7TF%2FhW1Mj8Z%2By0Z7WCPAyOavbK8aULYk1k9uGFKijHq7P%2FDqqZ4AeHm9eoVt4QqHW14vPJUZc7ulIwSe5Qt2BZDhlDahYUSkiqPrkEDYx3xW0OCsDj0mSZ%2BCIqyxJIcPFAexhAYgbZ8h7qfjtvTst3S9sFFeV6RPtJe2tyI%2FuojkEIj8Er273Lt8Iby3lsPsYOtAmQdwUwth%2BVB3fhftMDGqJgs2d5sTDlxJy%2FBjqkAaNXZJfCddODZfB8AXr50pYGTwLGNLPZh8PDJtI2ptco28uc68LeTbsbN3BtxOzar0aeF0QhdimK4YwALXzhsL%2FYpWKAKLlbUyx5qkCWl9B%2FsvdgTBC5zeXhLK6PrbgkWYH4gwjOHF8OmZLmBf3aaZ%2FqXh63%2B5KMdxjaTCx2MggOHmkr3EqOa%2FqbJhQr8cgVwWDKr1IV1dE2ozqIW9xh63OiB143&X-Amz-Signature=8dc179b6eb4d7c694840c787a4ea9939f6a49567d49562c778ea06061dbf5497&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQI6YIZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbkQ%2FhyD1swxfCdRoGwMv0I4MYagn3vQn%2BhEUXa3oOKQIhAMOzix%2BM%2B%2FRrysqtk1xnJ4kNMu1GHJY0fHXd07bWstE2Kv8DCGgQABoMNjM3NDIzMTgzODA1Igy9W8mCQz7HSLBZDIYq3ANnAxylPiCmiAlc5uFE3hs3apcKzxvFYgqDn7Ff%2F%2B4PH934vlCiYhFqeUbZr87aCK%2FO8Pri7xLvx3%2BQnAYHDfJOaobPpZtdfGPniUMeBEa30%2FukY6e%2BHUzsmmmBdjB3qjm8Ct5CowTMEOT%2F6WQd0vkG0%2BRGHlMsViyRno1FfipQ878CJX4R5BLHwJkK7MsbXNcX4XduG4K6YjErT6h3oSv7UEh4S5Xn1pWpWa4BEGybLfg2sWSGCJFTdMkky0eR7AcBmju6cBEcWtC%2Fzd09a2Ro52Y9wWoUKWBRtC%2Bngs9oy57xES8ibGA%2BiZpwBjAM%2FKvIjGCYubHVc3Y7yk6IHf274njJtOsOjkLVRtTG7y6t8JCVWJW6yrFlxuW7A99sdzeDK7286a1LkPohEOQwAuhsXpECTJ7TF%2FhW1Mj8Z%2By0Z7WCPAyOavbK8aULYk1k9uGFKijHq7P%2FDqqZ4AeHm9eoVt4QqHW14vPJUZc7ulIwSe5Qt2BZDhlDahYUSkiqPrkEDYx3xW0OCsDj0mSZ%2BCIqyxJIcPFAexhAYgbZ8h7qfjtvTst3S9sFFeV6RPtJe2tyI%2FuojkEIj8Er273Lt8Iby3lsPsYOtAmQdwUwth%2BVB3fhftMDGqJgs2d5sTDlxJy%2FBjqkAaNXZJfCddODZfB8AXr50pYGTwLGNLPZh8PDJtI2ptco28uc68LeTbsbN3BtxOzar0aeF0QhdimK4YwALXzhsL%2FYpWKAKLlbUyx5qkCWl9B%2FsvdgTBC5zeXhLK6PrbgkWYH4gwjOHF8OmZLmBf3aaZ%2FqXh63%2B5KMdxjaTCx2MggOHmkr3EqOa%2FqbJhQr8cgVwWDKr1IV1dE2ozqIW9xh63OiB143&X-Amz-Signature=b5cc988e654a83aa528db62d9aa61ac62c82de6d96f40aa2e6d959091940e4bd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQI6YIZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbkQ%2FhyD1swxfCdRoGwMv0I4MYagn3vQn%2BhEUXa3oOKQIhAMOzix%2BM%2B%2FRrysqtk1xnJ4kNMu1GHJY0fHXd07bWstE2Kv8DCGgQABoMNjM3NDIzMTgzODA1Igy9W8mCQz7HSLBZDIYq3ANnAxylPiCmiAlc5uFE3hs3apcKzxvFYgqDn7Ff%2F%2B4PH934vlCiYhFqeUbZr87aCK%2FO8Pri7xLvx3%2BQnAYHDfJOaobPpZtdfGPniUMeBEa30%2FukY6e%2BHUzsmmmBdjB3qjm8Ct5CowTMEOT%2F6WQd0vkG0%2BRGHlMsViyRno1FfipQ878CJX4R5BLHwJkK7MsbXNcX4XduG4K6YjErT6h3oSv7UEh4S5Xn1pWpWa4BEGybLfg2sWSGCJFTdMkky0eR7AcBmju6cBEcWtC%2Fzd09a2Ro52Y9wWoUKWBRtC%2Bngs9oy57xES8ibGA%2BiZpwBjAM%2FKvIjGCYubHVc3Y7yk6IHf274njJtOsOjkLVRtTG7y6t8JCVWJW6yrFlxuW7A99sdzeDK7286a1LkPohEOQwAuhsXpECTJ7TF%2FhW1Mj8Z%2By0Z7WCPAyOavbK8aULYk1k9uGFKijHq7P%2FDqqZ4AeHm9eoVt4QqHW14vPJUZc7ulIwSe5Qt2BZDhlDahYUSkiqPrkEDYx3xW0OCsDj0mSZ%2BCIqyxJIcPFAexhAYgbZ8h7qfjtvTst3S9sFFeV6RPtJe2tyI%2FuojkEIj8Er273Lt8Iby3lsPsYOtAmQdwUwth%2BVB3fhftMDGqJgs2d5sTDlxJy%2FBjqkAaNXZJfCddODZfB8AXr50pYGTwLGNLPZh8PDJtI2ptco28uc68LeTbsbN3BtxOzar0aeF0QhdimK4YwALXzhsL%2FYpWKAKLlbUyx5qkCWl9B%2FsvdgTBC5zeXhLK6PrbgkWYH4gwjOHF8OmZLmBf3aaZ%2FqXh63%2B5KMdxjaTCx2MggOHmkr3EqOa%2FqbJhQr8cgVwWDKr1IV1dE2ozqIW9xh63OiB143&X-Amz-Signature=2844d4efeb242e08571f7d63cf01443d31844a636043e8d4f4468edbfc533b8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQI6YIZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbkQ%2FhyD1swxfCdRoGwMv0I4MYagn3vQn%2BhEUXa3oOKQIhAMOzix%2BM%2B%2FRrysqtk1xnJ4kNMu1GHJY0fHXd07bWstE2Kv8DCGgQABoMNjM3NDIzMTgzODA1Igy9W8mCQz7HSLBZDIYq3ANnAxylPiCmiAlc5uFE3hs3apcKzxvFYgqDn7Ff%2F%2B4PH934vlCiYhFqeUbZr87aCK%2FO8Pri7xLvx3%2BQnAYHDfJOaobPpZtdfGPniUMeBEa30%2FukY6e%2BHUzsmmmBdjB3qjm8Ct5CowTMEOT%2F6WQd0vkG0%2BRGHlMsViyRno1FfipQ878CJX4R5BLHwJkK7MsbXNcX4XduG4K6YjErT6h3oSv7UEh4S5Xn1pWpWa4BEGybLfg2sWSGCJFTdMkky0eR7AcBmju6cBEcWtC%2Fzd09a2Ro52Y9wWoUKWBRtC%2Bngs9oy57xES8ibGA%2BiZpwBjAM%2FKvIjGCYubHVc3Y7yk6IHf274njJtOsOjkLVRtTG7y6t8JCVWJW6yrFlxuW7A99sdzeDK7286a1LkPohEOQwAuhsXpECTJ7TF%2FhW1Mj8Z%2By0Z7WCPAyOavbK8aULYk1k9uGFKijHq7P%2FDqqZ4AeHm9eoVt4QqHW14vPJUZc7ulIwSe5Qt2BZDhlDahYUSkiqPrkEDYx3xW0OCsDj0mSZ%2BCIqyxJIcPFAexhAYgbZ8h7qfjtvTst3S9sFFeV6RPtJe2tyI%2FuojkEIj8Er273Lt8Iby3lsPsYOtAmQdwUwth%2BVB3fhftMDGqJgs2d5sTDlxJy%2FBjqkAaNXZJfCddODZfB8AXr50pYGTwLGNLPZh8PDJtI2ptco28uc68LeTbsbN3BtxOzar0aeF0QhdimK4YwALXzhsL%2FYpWKAKLlbUyx5qkCWl9B%2FsvdgTBC5zeXhLK6PrbgkWYH4gwjOHF8OmZLmBf3aaZ%2FqXh63%2B5KMdxjaTCx2MggOHmkr3EqOa%2FqbJhQr8cgVwWDKr1IV1dE2ozqIW9xh63OiB143&X-Amz-Signature=30681fb39ace88ca1c1b5e234734110f99292c9db14fd54a8b60d20b0ec40a79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQI6YIZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbkQ%2FhyD1swxfCdRoGwMv0I4MYagn3vQn%2BhEUXa3oOKQIhAMOzix%2BM%2B%2FRrysqtk1xnJ4kNMu1GHJY0fHXd07bWstE2Kv8DCGgQABoMNjM3NDIzMTgzODA1Igy9W8mCQz7HSLBZDIYq3ANnAxylPiCmiAlc5uFE3hs3apcKzxvFYgqDn7Ff%2F%2B4PH934vlCiYhFqeUbZr87aCK%2FO8Pri7xLvx3%2BQnAYHDfJOaobPpZtdfGPniUMeBEa30%2FukY6e%2BHUzsmmmBdjB3qjm8Ct5CowTMEOT%2F6WQd0vkG0%2BRGHlMsViyRno1FfipQ878CJX4R5BLHwJkK7MsbXNcX4XduG4K6YjErT6h3oSv7UEh4S5Xn1pWpWa4BEGybLfg2sWSGCJFTdMkky0eR7AcBmju6cBEcWtC%2Fzd09a2Ro52Y9wWoUKWBRtC%2Bngs9oy57xES8ibGA%2BiZpwBjAM%2FKvIjGCYubHVc3Y7yk6IHf274njJtOsOjkLVRtTG7y6t8JCVWJW6yrFlxuW7A99sdzeDK7286a1LkPohEOQwAuhsXpECTJ7TF%2FhW1Mj8Z%2By0Z7WCPAyOavbK8aULYk1k9uGFKijHq7P%2FDqqZ4AeHm9eoVt4QqHW14vPJUZc7ulIwSe5Qt2BZDhlDahYUSkiqPrkEDYx3xW0OCsDj0mSZ%2BCIqyxJIcPFAexhAYgbZ8h7qfjtvTst3S9sFFeV6RPtJe2tyI%2FuojkEIj8Er273Lt8Iby3lsPsYOtAmQdwUwth%2BVB3fhftMDGqJgs2d5sTDlxJy%2FBjqkAaNXZJfCddODZfB8AXr50pYGTwLGNLPZh8PDJtI2ptco28uc68LeTbsbN3BtxOzar0aeF0QhdimK4YwALXzhsL%2FYpWKAKLlbUyx5qkCWl9B%2FsvdgTBC5zeXhLK6PrbgkWYH4gwjOHF8OmZLmBf3aaZ%2FqXh63%2B5KMdxjaTCx2MggOHmkr3EqOa%2FqbJhQr8cgVwWDKr1IV1dE2ozqIW9xh63OiB143&X-Amz-Signature=8c2d9aca23ea79d43bbe9f6b8487607dcd3a0beef04ea816174f0242213906ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQI6YIZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbkQ%2FhyD1swxfCdRoGwMv0I4MYagn3vQn%2BhEUXa3oOKQIhAMOzix%2BM%2B%2FRrysqtk1xnJ4kNMu1GHJY0fHXd07bWstE2Kv8DCGgQABoMNjM3NDIzMTgzODA1Igy9W8mCQz7HSLBZDIYq3ANnAxylPiCmiAlc5uFE3hs3apcKzxvFYgqDn7Ff%2F%2B4PH934vlCiYhFqeUbZr87aCK%2FO8Pri7xLvx3%2BQnAYHDfJOaobPpZtdfGPniUMeBEa30%2FukY6e%2BHUzsmmmBdjB3qjm8Ct5CowTMEOT%2F6WQd0vkG0%2BRGHlMsViyRno1FfipQ878CJX4R5BLHwJkK7MsbXNcX4XduG4K6YjErT6h3oSv7UEh4S5Xn1pWpWa4BEGybLfg2sWSGCJFTdMkky0eR7AcBmju6cBEcWtC%2Fzd09a2Ro52Y9wWoUKWBRtC%2Bngs9oy57xES8ibGA%2BiZpwBjAM%2FKvIjGCYubHVc3Y7yk6IHf274njJtOsOjkLVRtTG7y6t8JCVWJW6yrFlxuW7A99sdzeDK7286a1LkPohEOQwAuhsXpECTJ7TF%2FhW1Mj8Z%2By0Z7WCPAyOavbK8aULYk1k9uGFKijHq7P%2FDqqZ4AeHm9eoVt4QqHW14vPJUZc7ulIwSe5Qt2BZDhlDahYUSkiqPrkEDYx3xW0OCsDj0mSZ%2BCIqyxJIcPFAexhAYgbZ8h7qfjtvTst3S9sFFeV6RPtJe2tyI%2FuojkEIj8Er273Lt8Iby3lsPsYOtAmQdwUwth%2BVB3fhftMDGqJgs2d5sTDlxJy%2FBjqkAaNXZJfCddODZfB8AXr50pYGTwLGNLPZh8PDJtI2ptco28uc68LeTbsbN3BtxOzar0aeF0QhdimK4YwALXzhsL%2FYpWKAKLlbUyx5qkCWl9B%2FsvdgTBC5zeXhLK6PrbgkWYH4gwjOHF8OmZLmBf3aaZ%2FqXh63%2B5KMdxjaTCx2MggOHmkr3EqOa%2FqbJhQr8cgVwWDKr1IV1dE2ozqIW9xh63OiB143&X-Amz-Signature=b0988c0eb0c5811f95d920987dd12758b2733b1a6eb77ad4c447875092b8349d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQI6YIZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbkQ%2FhyD1swxfCdRoGwMv0I4MYagn3vQn%2BhEUXa3oOKQIhAMOzix%2BM%2B%2FRrysqtk1xnJ4kNMu1GHJY0fHXd07bWstE2Kv8DCGgQABoMNjM3NDIzMTgzODA1Igy9W8mCQz7HSLBZDIYq3ANnAxylPiCmiAlc5uFE3hs3apcKzxvFYgqDn7Ff%2F%2B4PH934vlCiYhFqeUbZr87aCK%2FO8Pri7xLvx3%2BQnAYHDfJOaobPpZtdfGPniUMeBEa30%2FukY6e%2BHUzsmmmBdjB3qjm8Ct5CowTMEOT%2F6WQd0vkG0%2BRGHlMsViyRno1FfipQ878CJX4R5BLHwJkK7MsbXNcX4XduG4K6YjErT6h3oSv7UEh4S5Xn1pWpWa4BEGybLfg2sWSGCJFTdMkky0eR7AcBmju6cBEcWtC%2Fzd09a2Ro52Y9wWoUKWBRtC%2Bngs9oy57xES8ibGA%2BiZpwBjAM%2FKvIjGCYubHVc3Y7yk6IHf274njJtOsOjkLVRtTG7y6t8JCVWJW6yrFlxuW7A99sdzeDK7286a1LkPohEOQwAuhsXpECTJ7TF%2FhW1Mj8Z%2By0Z7WCPAyOavbK8aULYk1k9uGFKijHq7P%2FDqqZ4AeHm9eoVt4QqHW14vPJUZc7ulIwSe5Qt2BZDhlDahYUSkiqPrkEDYx3xW0OCsDj0mSZ%2BCIqyxJIcPFAexhAYgbZ8h7qfjtvTst3S9sFFeV6RPtJe2tyI%2FuojkEIj8Er273Lt8Iby3lsPsYOtAmQdwUwth%2BVB3fhftMDGqJgs2d5sTDlxJy%2FBjqkAaNXZJfCddODZfB8AXr50pYGTwLGNLPZh8PDJtI2ptco28uc68LeTbsbN3BtxOzar0aeF0QhdimK4YwALXzhsL%2FYpWKAKLlbUyx5qkCWl9B%2FsvdgTBC5zeXhLK6PrbgkWYH4gwjOHF8OmZLmBf3aaZ%2FqXh63%2B5KMdxjaTCx2MggOHmkr3EqOa%2FqbJhQr8cgVwWDKr1IV1dE2ozqIW9xh63OiB143&X-Amz-Signature=3c75bf770974eafa43707d0b56c0f39f43dab3eb21d6959aa44b96e2a6e5c15b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
