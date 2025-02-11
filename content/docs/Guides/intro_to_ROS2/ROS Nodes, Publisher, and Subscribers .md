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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMBEEWC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYpVVcSk7M8VW1Gr0lS6xdhMIU4yoxVWXKsugb0upXxgIhAOFI7uNZEQk5jW5%2FEfDNgpOctuv4hS14Z3FkH0qyq1cHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7iy4JZJuBQALblA4q3AM4sxRC%2BuwrnHXqhja5II6QiKmshZ7zS0f2WhXzlidfb36NUFQfNkn7T6X6AQED%2BZzm9w8TUlbI6mrRLz1l267r1QZa5LYeqt9L%2BBcKdhPN4ugpoOoRb3JqJyMR1wm1qE%2FGi2fGKszChyj4mJHLScInD34akO5JEsh3eG7hiG1z08Jq1OhiAAsIjGLkYJL2XVshlWGCmDWD4EUApb0QjI%2F9dVNk9qBllN956sk%2Ba8VduZp5gTZULo6OLtdPqeiiWfFOUAOfyV1jEcWbhnKH1RWWyByepiPwkaQKoxMVR9OKFgf0Wt%2B3jTdZfvc7e%2B0V4Hq8tQX6PMVXB9huAC3Ilb5Qvd%2FM%2FQlx6SJ9ViAbRXr8IkbTBSF9ppcyWu49A4Ht%2Fj8WPKrsl6plL1WT3iNH8DhJlQJBQPqnNVpQqYx4Uy68Q8TiHyfGb1sZ2SgJeQ%2FfTq6pup4bwLc9mU2kTwkcerYXvVGIgskqwZKr1%2BrqN2vRqyabZLJ9Vzr9Md%2FpqD1O67JEPTHvSovb8JCsFgjGIZffmBfePqj0wJlVuXpFOYChGuzGC2CcDoE131ACUuUfkDLEc70GO4TKoTDWnbwb81WTgJo9RL%2B1zm60oZn%2BcYpBsseOLKo0ZW42zFW2fzDu7ay9BjqkATleZQM7ak0tJ9%2FWT%2FPLBcU35TMzOlF8EFpAA03%2FiooZKWuFUWTNrzUDqfB9gKXhw5vBzkB6XfCPwp0sjwNy5Jy8kqutLlS1KKmethBKzcgalxRGYexwtHROyRem5HVvsOfqTtFX6qVWL2L4mmieZzqk9sPLfFuhsV6b06I1xSwy%2B4ZsbpBRi0bqcJeS6KtmWAaK7eX15%2FP8tupqfHd0FofLD83%2F&X-Amz-Signature=767d953f80bbbf088c6947cf8a58e824d6a6a553693d9f765a749553212db310&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMBEEWC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYpVVcSk7M8VW1Gr0lS6xdhMIU4yoxVWXKsugb0upXxgIhAOFI7uNZEQk5jW5%2FEfDNgpOctuv4hS14Z3FkH0qyq1cHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7iy4JZJuBQALblA4q3AM4sxRC%2BuwrnHXqhja5II6QiKmshZ7zS0f2WhXzlidfb36NUFQfNkn7T6X6AQED%2BZzm9w8TUlbI6mrRLz1l267r1QZa5LYeqt9L%2BBcKdhPN4ugpoOoRb3JqJyMR1wm1qE%2FGi2fGKszChyj4mJHLScInD34akO5JEsh3eG7hiG1z08Jq1OhiAAsIjGLkYJL2XVshlWGCmDWD4EUApb0QjI%2F9dVNk9qBllN956sk%2Ba8VduZp5gTZULo6OLtdPqeiiWfFOUAOfyV1jEcWbhnKH1RWWyByepiPwkaQKoxMVR9OKFgf0Wt%2B3jTdZfvc7e%2B0V4Hq8tQX6PMVXB9huAC3Ilb5Qvd%2FM%2FQlx6SJ9ViAbRXr8IkbTBSF9ppcyWu49A4Ht%2Fj8WPKrsl6plL1WT3iNH8DhJlQJBQPqnNVpQqYx4Uy68Q8TiHyfGb1sZ2SgJeQ%2FfTq6pup4bwLc9mU2kTwkcerYXvVGIgskqwZKr1%2BrqN2vRqyabZLJ9Vzr9Md%2FpqD1O67JEPTHvSovb8JCsFgjGIZffmBfePqj0wJlVuXpFOYChGuzGC2CcDoE131ACUuUfkDLEc70GO4TKoTDWnbwb81WTgJo9RL%2B1zm60oZn%2BcYpBsseOLKo0ZW42zFW2fzDu7ay9BjqkATleZQM7ak0tJ9%2FWT%2FPLBcU35TMzOlF8EFpAA03%2FiooZKWuFUWTNrzUDqfB9gKXhw5vBzkB6XfCPwp0sjwNy5Jy8kqutLlS1KKmethBKzcgalxRGYexwtHROyRem5HVvsOfqTtFX6qVWL2L4mmieZzqk9sPLfFuhsV6b06I1xSwy%2B4ZsbpBRi0bqcJeS6KtmWAaK7eX15%2FP8tupqfHd0FofLD83%2F&X-Amz-Signature=e5980c58edf259a7bfa572f5191da679d6886dbd335a10460b89362b0b9b6f9a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMBEEWC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYpVVcSk7M8VW1Gr0lS6xdhMIU4yoxVWXKsugb0upXxgIhAOFI7uNZEQk5jW5%2FEfDNgpOctuv4hS14Z3FkH0qyq1cHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7iy4JZJuBQALblA4q3AM4sxRC%2BuwrnHXqhja5II6QiKmshZ7zS0f2WhXzlidfb36NUFQfNkn7T6X6AQED%2BZzm9w8TUlbI6mrRLz1l267r1QZa5LYeqt9L%2BBcKdhPN4ugpoOoRb3JqJyMR1wm1qE%2FGi2fGKszChyj4mJHLScInD34akO5JEsh3eG7hiG1z08Jq1OhiAAsIjGLkYJL2XVshlWGCmDWD4EUApb0QjI%2F9dVNk9qBllN956sk%2Ba8VduZp5gTZULo6OLtdPqeiiWfFOUAOfyV1jEcWbhnKH1RWWyByepiPwkaQKoxMVR9OKFgf0Wt%2B3jTdZfvc7e%2B0V4Hq8tQX6PMVXB9huAC3Ilb5Qvd%2FM%2FQlx6SJ9ViAbRXr8IkbTBSF9ppcyWu49A4Ht%2Fj8WPKrsl6plL1WT3iNH8DhJlQJBQPqnNVpQqYx4Uy68Q8TiHyfGb1sZ2SgJeQ%2FfTq6pup4bwLc9mU2kTwkcerYXvVGIgskqwZKr1%2BrqN2vRqyabZLJ9Vzr9Md%2FpqD1O67JEPTHvSovb8JCsFgjGIZffmBfePqj0wJlVuXpFOYChGuzGC2CcDoE131ACUuUfkDLEc70GO4TKoTDWnbwb81WTgJo9RL%2B1zm60oZn%2BcYpBsseOLKo0ZW42zFW2fzDu7ay9BjqkATleZQM7ak0tJ9%2FWT%2FPLBcU35TMzOlF8EFpAA03%2FiooZKWuFUWTNrzUDqfB9gKXhw5vBzkB6XfCPwp0sjwNy5Jy8kqutLlS1KKmethBKzcgalxRGYexwtHROyRem5HVvsOfqTtFX6qVWL2L4mmieZzqk9sPLfFuhsV6b06I1xSwy%2B4ZsbpBRi0bqcJeS6KtmWAaK7eX15%2FP8tupqfHd0FofLD83%2F&X-Amz-Signature=dc5aa2ace28838d4f37f8eebfb2d35e363973913ca5d909ffda1f5f9d9d6bb55&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMBEEWC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYpVVcSk7M8VW1Gr0lS6xdhMIU4yoxVWXKsugb0upXxgIhAOFI7uNZEQk5jW5%2FEfDNgpOctuv4hS14Z3FkH0qyq1cHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7iy4JZJuBQALblA4q3AM4sxRC%2BuwrnHXqhja5II6QiKmshZ7zS0f2WhXzlidfb36NUFQfNkn7T6X6AQED%2BZzm9w8TUlbI6mrRLz1l267r1QZa5LYeqt9L%2BBcKdhPN4ugpoOoRb3JqJyMR1wm1qE%2FGi2fGKszChyj4mJHLScInD34akO5JEsh3eG7hiG1z08Jq1OhiAAsIjGLkYJL2XVshlWGCmDWD4EUApb0QjI%2F9dVNk9qBllN956sk%2Ba8VduZp5gTZULo6OLtdPqeiiWfFOUAOfyV1jEcWbhnKH1RWWyByepiPwkaQKoxMVR9OKFgf0Wt%2B3jTdZfvc7e%2B0V4Hq8tQX6PMVXB9huAC3Ilb5Qvd%2FM%2FQlx6SJ9ViAbRXr8IkbTBSF9ppcyWu49A4Ht%2Fj8WPKrsl6plL1WT3iNH8DhJlQJBQPqnNVpQqYx4Uy68Q8TiHyfGb1sZ2SgJeQ%2FfTq6pup4bwLc9mU2kTwkcerYXvVGIgskqwZKr1%2BrqN2vRqyabZLJ9Vzr9Md%2FpqD1O67JEPTHvSovb8JCsFgjGIZffmBfePqj0wJlVuXpFOYChGuzGC2CcDoE131ACUuUfkDLEc70GO4TKoTDWnbwb81WTgJo9RL%2B1zm60oZn%2BcYpBsseOLKo0ZW42zFW2fzDu7ay9BjqkATleZQM7ak0tJ9%2FWT%2FPLBcU35TMzOlF8EFpAA03%2FiooZKWuFUWTNrzUDqfB9gKXhw5vBzkB6XfCPwp0sjwNy5Jy8kqutLlS1KKmethBKzcgalxRGYexwtHROyRem5HVvsOfqTtFX6qVWL2L4mmieZzqk9sPLfFuhsV6b06I1xSwy%2B4ZsbpBRi0bqcJeS6KtmWAaK7eX15%2FP8tupqfHd0FofLD83%2F&X-Amz-Signature=c31a6a255a42e6979cebb3b00dec2714a5a814fd0ad880dadbead5a8e337d51c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMBEEWC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYpVVcSk7M8VW1Gr0lS6xdhMIU4yoxVWXKsugb0upXxgIhAOFI7uNZEQk5jW5%2FEfDNgpOctuv4hS14Z3FkH0qyq1cHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7iy4JZJuBQALblA4q3AM4sxRC%2BuwrnHXqhja5II6QiKmshZ7zS0f2WhXzlidfb36NUFQfNkn7T6X6AQED%2BZzm9w8TUlbI6mrRLz1l267r1QZa5LYeqt9L%2BBcKdhPN4ugpoOoRb3JqJyMR1wm1qE%2FGi2fGKszChyj4mJHLScInD34akO5JEsh3eG7hiG1z08Jq1OhiAAsIjGLkYJL2XVshlWGCmDWD4EUApb0QjI%2F9dVNk9qBllN956sk%2Ba8VduZp5gTZULo6OLtdPqeiiWfFOUAOfyV1jEcWbhnKH1RWWyByepiPwkaQKoxMVR9OKFgf0Wt%2B3jTdZfvc7e%2B0V4Hq8tQX6PMVXB9huAC3Ilb5Qvd%2FM%2FQlx6SJ9ViAbRXr8IkbTBSF9ppcyWu49A4Ht%2Fj8WPKrsl6plL1WT3iNH8DhJlQJBQPqnNVpQqYx4Uy68Q8TiHyfGb1sZ2SgJeQ%2FfTq6pup4bwLc9mU2kTwkcerYXvVGIgskqwZKr1%2BrqN2vRqyabZLJ9Vzr9Md%2FpqD1O67JEPTHvSovb8JCsFgjGIZffmBfePqj0wJlVuXpFOYChGuzGC2CcDoE131ACUuUfkDLEc70GO4TKoTDWnbwb81WTgJo9RL%2B1zm60oZn%2BcYpBsseOLKo0ZW42zFW2fzDu7ay9BjqkATleZQM7ak0tJ9%2FWT%2FPLBcU35TMzOlF8EFpAA03%2FiooZKWuFUWTNrzUDqfB9gKXhw5vBzkB6XfCPwp0sjwNy5Jy8kqutLlS1KKmethBKzcgalxRGYexwtHROyRem5HVvsOfqTtFX6qVWL2L4mmieZzqk9sPLfFuhsV6b06I1xSwy%2B4ZsbpBRi0bqcJeS6KtmWAaK7eX15%2FP8tupqfHd0FofLD83%2F&X-Amz-Signature=63d5cb7a382094667b8b6b1b46f54a5540c725ae135de60863510815448ff9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMBEEWC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYpVVcSk7M8VW1Gr0lS6xdhMIU4yoxVWXKsugb0upXxgIhAOFI7uNZEQk5jW5%2FEfDNgpOctuv4hS14Z3FkH0qyq1cHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7iy4JZJuBQALblA4q3AM4sxRC%2BuwrnHXqhja5II6QiKmshZ7zS0f2WhXzlidfb36NUFQfNkn7T6X6AQED%2BZzm9w8TUlbI6mrRLz1l267r1QZa5LYeqt9L%2BBcKdhPN4ugpoOoRb3JqJyMR1wm1qE%2FGi2fGKszChyj4mJHLScInD34akO5JEsh3eG7hiG1z08Jq1OhiAAsIjGLkYJL2XVshlWGCmDWD4EUApb0QjI%2F9dVNk9qBllN956sk%2Ba8VduZp5gTZULo6OLtdPqeiiWfFOUAOfyV1jEcWbhnKH1RWWyByepiPwkaQKoxMVR9OKFgf0Wt%2B3jTdZfvc7e%2B0V4Hq8tQX6PMVXB9huAC3Ilb5Qvd%2FM%2FQlx6SJ9ViAbRXr8IkbTBSF9ppcyWu49A4Ht%2Fj8WPKrsl6plL1WT3iNH8DhJlQJBQPqnNVpQqYx4Uy68Q8TiHyfGb1sZ2SgJeQ%2FfTq6pup4bwLc9mU2kTwkcerYXvVGIgskqwZKr1%2BrqN2vRqyabZLJ9Vzr9Md%2FpqD1O67JEPTHvSovb8JCsFgjGIZffmBfePqj0wJlVuXpFOYChGuzGC2CcDoE131ACUuUfkDLEc70GO4TKoTDWnbwb81WTgJo9RL%2B1zm60oZn%2BcYpBsseOLKo0ZW42zFW2fzDu7ay9BjqkATleZQM7ak0tJ9%2FWT%2FPLBcU35TMzOlF8EFpAA03%2FiooZKWuFUWTNrzUDqfB9gKXhw5vBzkB6XfCPwp0sjwNy5Jy8kqutLlS1KKmethBKzcgalxRGYexwtHROyRem5HVvsOfqTtFX6qVWL2L4mmieZzqk9sPLfFuhsV6b06I1xSwy%2B4ZsbpBRi0bqcJeS6KtmWAaK7eX15%2FP8tupqfHd0FofLD83%2F&X-Amz-Signature=d3a31fe8ce0d8fb742b9307297568b9b3754b59cb4e026484c63b080533a8b39&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMBEEWC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYpVVcSk7M8VW1Gr0lS6xdhMIU4yoxVWXKsugb0upXxgIhAOFI7uNZEQk5jW5%2FEfDNgpOctuv4hS14Z3FkH0qyq1cHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7iy4JZJuBQALblA4q3AM4sxRC%2BuwrnHXqhja5II6QiKmshZ7zS0f2WhXzlidfb36NUFQfNkn7T6X6AQED%2BZzm9w8TUlbI6mrRLz1l267r1QZa5LYeqt9L%2BBcKdhPN4ugpoOoRb3JqJyMR1wm1qE%2FGi2fGKszChyj4mJHLScInD34akO5JEsh3eG7hiG1z08Jq1OhiAAsIjGLkYJL2XVshlWGCmDWD4EUApb0QjI%2F9dVNk9qBllN956sk%2Ba8VduZp5gTZULo6OLtdPqeiiWfFOUAOfyV1jEcWbhnKH1RWWyByepiPwkaQKoxMVR9OKFgf0Wt%2B3jTdZfvc7e%2B0V4Hq8tQX6PMVXB9huAC3Ilb5Qvd%2FM%2FQlx6SJ9ViAbRXr8IkbTBSF9ppcyWu49A4Ht%2Fj8WPKrsl6plL1WT3iNH8DhJlQJBQPqnNVpQqYx4Uy68Q8TiHyfGb1sZ2SgJeQ%2FfTq6pup4bwLc9mU2kTwkcerYXvVGIgskqwZKr1%2BrqN2vRqyabZLJ9Vzr9Md%2FpqD1O67JEPTHvSovb8JCsFgjGIZffmBfePqj0wJlVuXpFOYChGuzGC2CcDoE131ACUuUfkDLEc70GO4TKoTDWnbwb81WTgJo9RL%2B1zm60oZn%2BcYpBsseOLKo0ZW42zFW2fzDu7ay9BjqkATleZQM7ak0tJ9%2FWT%2FPLBcU35TMzOlF8EFpAA03%2FiooZKWuFUWTNrzUDqfB9gKXhw5vBzkB6XfCPwp0sjwNy5Jy8kqutLlS1KKmethBKzcgalxRGYexwtHROyRem5HVvsOfqTtFX6qVWL2L4mmieZzqk9sPLfFuhsV6b06I1xSwy%2B4ZsbpBRi0bqcJeS6KtmWAaK7eX15%2FP8tupqfHd0FofLD83%2F&X-Amz-Signature=793d3b774cad835cffb9e0b4a5cd48cdb13fee08867d0193454d16c1e5b6e2fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMBEEWC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYpVVcSk7M8VW1Gr0lS6xdhMIU4yoxVWXKsugb0upXxgIhAOFI7uNZEQk5jW5%2FEfDNgpOctuv4hS14Z3FkH0qyq1cHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7iy4JZJuBQALblA4q3AM4sxRC%2BuwrnHXqhja5II6QiKmshZ7zS0f2WhXzlidfb36NUFQfNkn7T6X6AQED%2BZzm9w8TUlbI6mrRLz1l267r1QZa5LYeqt9L%2BBcKdhPN4ugpoOoRb3JqJyMR1wm1qE%2FGi2fGKszChyj4mJHLScInD34akO5JEsh3eG7hiG1z08Jq1OhiAAsIjGLkYJL2XVshlWGCmDWD4EUApb0QjI%2F9dVNk9qBllN956sk%2Ba8VduZp5gTZULo6OLtdPqeiiWfFOUAOfyV1jEcWbhnKH1RWWyByepiPwkaQKoxMVR9OKFgf0Wt%2B3jTdZfvc7e%2B0V4Hq8tQX6PMVXB9huAC3Ilb5Qvd%2FM%2FQlx6SJ9ViAbRXr8IkbTBSF9ppcyWu49A4Ht%2Fj8WPKrsl6plL1WT3iNH8DhJlQJBQPqnNVpQqYx4Uy68Q8TiHyfGb1sZ2SgJeQ%2FfTq6pup4bwLc9mU2kTwkcerYXvVGIgskqwZKr1%2BrqN2vRqyabZLJ9Vzr9Md%2FpqD1O67JEPTHvSovb8JCsFgjGIZffmBfePqj0wJlVuXpFOYChGuzGC2CcDoE131ACUuUfkDLEc70GO4TKoTDWnbwb81WTgJo9RL%2B1zm60oZn%2BcYpBsseOLKo0ZW42zFW2fzDu7ay9BjqkATleZQM7ak0tJ9%2FWT%2FPLBcU35TMzOlF8EFpAA03%2FiooZKWuFUWTNrzUDqfB9gKXhw5vBzkB6XfCPwp0sjwNy5Jy8kqutLlS1KKmethBKzcgalxRGYexwtHROyRem5HVvsOfqTtFX6qVWL2L4mmieZzqk9sPLfFuhsV6b06I1xSwy%2B4ZsbpBRi0bqcJeS6KtmWAaK7eX15%2FP8tupqfHd0FofLD83%2F&X-Amz-Signature=8681b2a6fcb45f57b30b82c18a03a7c98fb0c0b016c9d399b527de72fb1aca49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
