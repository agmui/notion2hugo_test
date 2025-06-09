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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFO4EJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETReIPLQd5%2FkDIb9BnmEcMOKA4LRa8TCvKiASgdiPQUAiEAwDyxaIBOikZaJ6JHYxpW1jGiPFvA5a3M11aDoKgDKi8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMStYNPzNSXxR6NKDCrcA6QgFTZAAQj2wJW9YUo8ODo%2F9ghs7ciZPEbrF87TvwqgUgV5Jj2er3a3SptXks7pMViBGBnFLoXFjSpLGXGG63rKP32MBRzd3k8scIR6Zi87PNIfvfXGXY4ufSsx0mQfxECJUYN9nvr20Ltzz4ar016MhPdljTMUzmaFpcK35OGUYjItm8UK6X3TIM4DbduKQN0TawXBz4fav91LYDayLnUQjDLhONzoA6XVp17f5gk0vN7I1b2SE%2FClgPMGEx7%2FHCI9PZgL%2BXB2ZovLXSYVgm1G7wF8fFRUP63EEPJtZdFTJkBdA0E742D4GII%2Fd8qjo%2FNMabQRo3GKpMADErr2FP13Rq26ZpAwfoZA%2BVP0ZqQNu7xMERJJqGLNEmGospPt2bT9vK8dAG3oERQl1wcnIP0fqQKzG5Ficbv%2BqAZSK9bb0IWr8JJ3XdewcKrD6dU0RqhVYhZedHbO8tK6xeRUA0F4oCcQiLju7GOCmTN6AC17GeSJ28dGIStbnsBZJwxuECbQh8HB6sauFIcB1404WccjzrK6eNscBVSXS7FQQ350t946P8QAG86H1PlkpGP7rhFhxMzYmks1WGDvWyTQiJ5iPusR2g11yUO79av%2FdqhWxYDG4sZ5hsVfL%2BRDMJfWm8IGOqUBA1WBjZK8H1gPdtwYvcztgcMy7frT7o9n3yqU7vxI1hUxjo7XAGL%2FZg8peVapjKi3z1wfg5TIBkohloC9G2L1n2aGQ3dmkpI1Nbs%2B2ya8b2xfaIV6agPr6fJEhsrBUT4YhunJkoD4qc%2FH%2Fasv1%2Fp8KXyGq0nnIwRPYgJVXAKPrkir4H5qw9ormhV8GnlgTQNGy0qNQyvaLFJoHfFAUi3sTxJj5BEL&X-Amz-Signature=5b26f4eb686f560c529587f3a3b40b7c50473aff752075eca1b8c0a16389c595&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFO4EJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETReIPLQd5%2FkDIb9BnmEcMOKA4LRa8TCvKiASgdiPQUAiEAwDyxaIBOikZaJ6JHYxpW1jGiPFvA5a3M11aDoKgDKi8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMStYNPzNSXxR6NKDCrcA6QgFTZAAQj2wJW9YUo8ODo%2F9ghs7ciZPEbrF87TvwqgUgV5Jj2er3a3SptXks7pMViBGBnFLoXFjSpLGXGG63rKP32MBRzd3k8scIR6Zi87PNIfvfXGXY4ufSsx0mQfxECJUYN9nvr20Ltzz4ar016MhPdljTMUzmaFpcK35OGUYjItm8UK6X3TIM4DbduKQN0TawXBz4fav91LYDayLnUQjDLhONzoA6XVp17f5gk0vN7I1b2SE%2FClgPMGEx7%2FHCI9PZgL%2BXB2ZovLXSYVgm1G7wF8fFRUP63EEPJtZdFTJkBdA0E742D4GII%2Fd8qjo%2FNMabQRo3GKpMADErr2FP13Rq26ZpAwfoZA%2BVP0ZqQNu7xMERJJqGLNEmGospPt2bT9vK8dAG3oERQl1wcnIP0fqQKzG5Ficbv%2BqAZSK9bb0IWr8JJ3XdewcKrD6dU0RqhVYhZedHbO8tK6xeRUA0F4oCcQiLju7GOCmTN6AC17GeSJ28dGIStbnsBZJwxuECbQh8HB6sauFIcB1404WccjzrK6eNscBVSXS7FQQ350t946P8QAG86H1PlkpGP7rhFhxMzYmks1WGDvWyTQiJ5iPusR2g11yUO79av%2FdqhWxYDG4sZ5hsVfL%2BRDMJfWm8IGOqUBA1WBjZK8H1gPdtwYvcztgcMy7frT7o9n3yqU7vxI1hUxjo7XAGL%2FZg8peVapjKi3z1wfg5TIBkohloC9G2L1n2aGQ3dmkpI1Nbs%2B2ya8b2xfaIV6agPr6fJEhsrBUT4YhunJkoD4qc%2FH%2Fasv1%2Fp8KXyGq0nnIwRPYgJVXAKPrkir4H5qw9ormhV8GnlgTQNGy0qNQyvaLFJoHfFAUi3sTxJj5BEL&X-Amz-Signature=61de731041108ba388cddefc7b933e65c64c57d524e2416db75dfbd9b58a4880&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFO4EJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETReIPLQd5%2FkDIb9BnmEcMOKA4LRa8TCvKiASgdiPQUAiEAwDyxaIBOikZaJ6JHYxpW1jGiPFvA5a3M11aDoKgDKi8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMStYNPzNSXxR6NKDCrcA6QgFTZAAQj2wJW9YUo8ODo%2F9ghs7ciZPEbrF87TvwqgUgV5Jj2er3a3SptXks7pMViBGBnFLoXFjSpLGXGG63rKP32MBRzd3k8scIR6Zi87PNIfvfXGXY4ufSsx0mQfxECJUYN9nvr20Ltzz4ar016MhPdljTMUzmaFpcK35OGUYjItm8UK6X3TIM4DbduKQN0TawXBz4fav91LYDayLnUQjDLhONzoA6XVp17f5gk0vN7I1b2SE%2FClgPMGEx7%2FHCI9PZgL%2BXB2ZovLXSYVgm1G7wF8fFRUP63EEPJtZdFTJkBdA0E742D4GII%2Fd8qjo%2FNMabQRo3GKpMADErr2FP13Rq26ZpAwfoZA%2BVP0ZqQNu7xMERJJqGLNEmGospPt2bT9vK8dAG3oERQl1wcnIP0fqQKzG5Ficbv%2BqAZSK9bb0IWr8JJ3XdewcKrD6dU0RqhVYhZedHbO8tK6xeRUA0F4oCcQiLju7GOCmTN6AC17GeSJ28dGIStbnsBZJwxuECbQh8HB6sauFIcB1404WccjzrK6eNscBVSXS7FQQ350t946P8QAG86H1PlkpGP7rhFhxMzYmks1WGDvWyTQiJ5iPusR2g11yUO79av%2FdqhWxYDG4sZ5hsVfL%2BRDMJfWm8IGOqUBA1WBjZK8H1gPdtwYvcztgcMy7frT7o9n3yqU7vxI1hUxjo7XAGL%2FZg8peVapjKi3z1wfg5TIBkohloC9G2L1n2aGQ3dmkpI1Nbs%2B2ya8b2xfaIV6agPr6fJEhsrBUT4YhunJkoD4qc%2FH%2Fasv1%2Fp8KXyGq0nnIwRPYgJVXAKPrkir4H5qw9ormhV8GnlgTQNGy0qNQyvaLFJoHfFAUi3sTxJj5BEL&X-Amz-Signature=9e4876c7db4c1fa2d6fbff0c02ec2cb6e30634dab48d0d76b91c84402f44fd6d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFO4EJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETReIPLQd5%2FkDIb9BnmEcMOKA4LRa8TCvKiASgdiPQUAiEAwDyxaIBOikZaJ6JHYxpW1jGiPFvA5a3M11aDoKgDKi8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMStYNPzNSXxR6NKDCrcA6QgFTZAAQj2wJW9YUo8ODo%2F9ghs7ciZPEbrF87TvwqgUgV5Jj2er3a3SptXks7pMViBGBnFLoXFjSpLGXGG63rKP32MBRzd3k8scIR6Zi87PNIfvfXGXY4ufSsx0mQfxECJUYN9nvr20Ltzz4ar016MhPdljTMUzmaFpcK35OGUYjItm8UK6X3TIM4DbduKQN0TawXBz4fav91LYDayLnUQjDLhONzoA6XVp17f5gk0vN7I1b2SE%2FClgPMGEx7%2FHCI9PZgL%2BXB2ZovLXSYVgm1G7wF8fFRUP63EEPJtZdFTJkBdA0E742D4GII%2Fd8qjo%2FNMabQRo3GKpMADErr2FP13Rq26ZpAwfoZA%2BVP0ZqQNu7xMERJJqGLNEmGospPt2bT9vK8dAG3oERQl1wcnIP0fqQKzG5Ficbv%2BqAZSK9bb0IWr8JJ3XdewcKrD6dU0RqhVYhZedHbO8tK6xeRUA0F4oCcQiLju7GOCmTN6AC17GeSJ28dGIStbnsBZJwxuECbQh8HB6sauFIcB1404WccjzrK6eNscBVSXS7FQQ350t946P8QAG86H1PlkpGP7rhFhxMzYmks1WGDvWyTQiJ5iPusR2g11yUO79av%2FdqhWxYDG4sZ5hsVfL%2BRDMJfWm8IGOqUBA1WBjZK8H1gPdtwYvcztgcMy7frT7o9n3yqU7vxI1hUxjo7XAGL%2FZg8peVapjKi3z1wfg5TIBkohloC9G2L1n2aGQ3dmkpI1Nbs%2B2ya8b2xfaIV6agPr6fJEhsrBUT4YhunJkoD4qc%2FH%2Fasv1%2Fp8KXyGq0nnIwRPYgJVXAKPrkir4H5qw9ormhV8GnlgTQNGy0qNQyvaLFJoHfFAUi3sTxJj5BEL&X-Amz-Signature=388a64874c6701cbc2c048dc730112611fb76e3bce04d88889b299d973264503&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFO4EJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETReIPLQd5%2FkDIb9BnmEcMOKA4LRa8TCvKiASgdiPQUAiEAwDyxaIBOikZaJ6JHYxpW1jGiPFvA5a3M11aDoKgDKi8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMStYNPzNSXxR6NKDCrcA6QgFTZAAQj2wJW9YUo8ODo%2F9ghs7ciZPEbrF87TvwqgUgV5Jj2er3a3SptXks7pMViBGBnFLoXFjSpLGXGG63rKP32MBRzd3k8scIR6Zi87PNIfvfXGXY4ufSsx0mQfxECJUYN9nvr20Ltzz4ar016MhPdljTMUzmaFpcK35OGUYjItm8UK6X3TIM4DbduKQN0TawXBz4fav91LYDayLnUQjDLhONzoA6XVp17f5gk0vN7I1b2SE%2FClgPMGEx7%2FHCI9PZgL%2BXB2ZovLXSYVgm1G7wF8fFRUP63EEPJtZdFTJkBdA0E742D4GII%2Fd8qjo%2FNMabQRo3GKpMADErr2FP13Rq26ZpAwfoZA%2BVP0ZqQNu7xMERJJqGLNEmGospPt2bT9vK8dAG3oERQl1wcnIP0fqQKzG5Ficbv%2BqAZSK9bb0IWr8JJ3XdewcKrD6dU0RqhVYhZedHbO8tK6xeRUA0F4oCcQiLju7GOCmTN6AC17GeSJ28dGIStbnsBZJwxuECbQh8HB6sauFIcB1404WccjzrK6eNscBVSXS7FQQ350t946P8QAG86H1PlkpGP7rhFhxMzYmks1WGDvWyTQiJ5iPusR2g11yUO79av%2FdqhWxYDG4sZ5hsVfL%2BRDMJfWm8IGOqUBA1WBjZK8H1gPdtwYvcztgcMy7frT7o9n3yqU7vxI1hUxjo7XAGL%2FZg8peVapjKi3z1wfg5TIBkohloC9G2L1n2aGQ3dmkpI1Nbs%2B2ya8b2xfaIV6agPr6fJEhsrBUT4YhunJkoD4qc%2FH%2Fasv1%2Fp8KXyGq0nnIwRPYgJVXAKPrkir4H5qw9ormhV8GnlgTQNGy0qNQyvaLFJoHfFAUi3sTxJj5BEL&X-Amz-Signature=e29389ab1f1d7aed2736169d6f30b0fa08a002246408736c7baf1ce7adb48eff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFO4EJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETReIPLQd5%2FkDIb9BnmEcMOKA4LRa8TCvKiASgdiPQUAiEAwDyxaIBOikZaJ6JHYxpW1jGiPFvA5a3M11aDoKgDKi8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMStYNPzNSXxR6NKDCrcA6QgFTZAAQj2wJW9YUo8ODo%2F9ghs7ciZPEbrF87TvwqgUgV5Jj2er3a3SptXks7pMViBGBnFLoXFjSpLGXGG63rKP32MBRzd3k8scIR6Zi87PNIfvfXGXY4ufSsx0mQfxECJUYN9nvr20Ltzz4ar016MhPdljTMUzmaFpcK35OGUYjItm8UK6X3TIM4DbduKQN0TawXBz4fav91LYDayLnUQjDLhONzoA6XVp17f5gk0vN7I1b2SE%2FClgPMGEx7%2FHCI9PZgL%2BXB2ZovLXSYVgm1G7wF8fFRUP63EEPJtZdFTJkBdA0E742D4GII%2Fd8qjo%2FNMabQRo3GKpMADErr2FP13Rq26ZpAwfoZA%2BVP0ZqQNu7xMERJJqGLNEmGospPt2bT9vK8dAG3oERQl1wcnIP0fqQKzG5Ficbv%2BqAZSK9bb0IWr8JJ3XdewcKrD6dU0RqhVYhZedHbO8tK6xeRUA0F4oCcQiLju7GOCmTN6AC17GeSJ28dGIStbnsBZJwxuECbQh8HB6sauFIcB1404WccjzrK6eNscBVSXS7FQQ350t946P8QAG86H1PlkpGP7rhFhxMzYmks1WGDvWyTQiJ5iPusR2g11yUO79av%2FdqhWxYDG4sZ5hsVfL%2BRDMJfWm8IGOqUBA1WBjZK8H1gPdtwYvcztgcMy7frT7o9n3yqU7vxI1hUxjo7XAGL%2FZg8peVapjKi3z1wfg5TIBkohloC9G2L1n2aGQ3dmkpI1Nbs%2B2ya8b2xfaIV6agPr6fJEhsrBUT4YhunJkoD4qc%2FH%2Fasv1%2Fp8KXyGq0nnIwRPYgJVXAKPrkir4H5qw9ormhV8GnlgTQNGy0qNQyvaLFJoHfFAUi3sTxJj5BEL&X-Amz-Signature=f828661f1eb6c47980d0a60712b6f68c8ffb03d859753e30ecf9c5d89c3c1998&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFO4EJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETReIPLQd5%2FkDIb9BnmEcMOKA4LRa8TCvKiASgdiPQUAiEAwDyxaIBOikZaJ6JHYxpW1jGiPFvA5a3M11aDoKgDKi8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMStYNPzNSXxR6NKDCrcA6QgFTZAAQj2wJW9YUo8ODo%2F9ghs7ciZPEbrF87TvwqgUgV5Jj2er3a3SptXks7pMViBGBnFLoXFjSpLGXGG63rKP32MBRzd3k8scIR6Zi87PNIfvfXGXY4ufSsx0mQfxECJUYN9nvr20Ltzz4ar016MhPdljTMUzmaFpcK35OGUYjItm8UK6X3TIM4DbduKQN0TawXBz4fav91LYDayLnUQjDLhONzoA6XVp17f5gk0vN7I1b2SE%2FClgPMGEx7%2FHCI9PZgL%2BXB2ZovLXSYVgm1G7wF8fFRUP63EEPJtZdFTJkBdA0E742D4GII%2Fd8qjo%2FNMabQRo3GKpMADErr2FP13Rq26ZpAwfoZA%2BVP0ZqQNu7xMERJJqGLNEmGospPt2bT9vK8dAG3oERQl1wcnIP0fqQKzG5Ficbv%2BqAZSK9bb0IWr8JJ3XdewcKrD6dU0RqhVYhZedHbO8tK6xeRUA0F4oCcQiLju7GOCmTN6AC17GeSJ28dGIStbnsBZJwxuECbQh8HB6sauFIcB1404WccjzrK6eNscBVSXS7FQQ350t946P8QAG86H1PlkpGP7rhFhxMzYmks1WGDvWyTQiJ5iPusR2g11yUO79av%2FdqhWxYDG4sZ5hsVfL%2BRDMJfWm8IGOqUBA1WBjZK8H1gPdtwYvcztgcMy7frT7o9n3yqU7vxI1hUxjo7XAGL%2FZg8peVapjKi3z1wfg5TIBkohloC9G2L1n2aGQ3dmkpI1Nbs%2B2ya8b2xfaIV6agPr6fJEhsrBUT4YhunJkoD4qc%2FH%2Fasv1%2Fp8KXyGq0nnIwRPYgJVXAKPrkir4H5qw9ormhV8GnlgTQNGy0qNQyvaLFJoHfFAUi3sTxJj5BEL&X-Amz-Signature=0adf07b8bff6491054f38f2be23403facab88bddbd2643c57780a6d32045fe04&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFO4EJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETReIPLQd5%2FkDIb9BnmEcMOKA4LRa8TCvKiASgdiPQUAiEAwDyxaIBOikZaJ6JHYxpW1jGiPFvA5a3M11aDoKgDKi8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMStYNPzNSXxR6NKDCrcA6QgFTZAAQj2wJW9YUo8ODo%2F9ghs7ciZPEbrF87TvwqgUgV5Jj2er3a3SptXks7pMViBGBnFLoXFjSpLGXGG63rKP32MBRzd3k8scIR6Zi87PNIfvfXGXY4ufSsx0mQfxECJUYN9nvr20Ltzz4ar016MhPdljTMUzmaFpcK35OGUYjItm8UK6X3TIM4DbduKQN0TawXBz4fav91LYDayLnUQjDLhONzoA6XVp17f5gk0vN7I1b2SE%2FClgPMGEx7%2FHCI9PZgL%2BXB2ZovLXSYVgm1G7wF8fFRUP63EEPJtZdFTJkBdA0E742D4GII%2Fd8qjo%2FNMabQRo3GKpMADErr2FP13Rq26ZpAwfoZA%2BVP0ZqQNu7xMERJJqGLNEmGospPt2bT9vK8dAG3oERQl1wcnIP0fqQKzG5Ficbv%2BqAZSK9bb0IWr8JJ3XdewcKrD6dU0RqhVYhZedHbO8tK6xeRUA0F4oCcQiLju7GOCmTN6AC17GeSJ28dGIStbnsBZJwxuECbQh8HB6sauFIcB1404WccjzrK6eNscBVSXS7FQQ350t946P8QAG86H1PlkpGP7rhFhxMzYmks1WGDvWyTQiJ5iPusR2g11yUO79av%2FdqhWxYDG4sZ5hsVfL%2BRDMJfWm8IGOqUBA1WBjZK8H1gPdtwYvcztgcMy7frT7o9n3yqU7vxI1hUxjo7XAGL%2FZg8peVapjKi3z1wfg5TIBkohloC9G2L1n2aGQ3dmkpI1Nbs%2B2ya8b2xfaIV6agPr6fJEhsrBUT4YhunJkoD4qc%2FH%2Fasv1%2Fp8KXyGq0nnIwRPYgJVXAKPrkir4H5qw9ormhV8GnlgTQNGy0qNQyvaLFJoHfFAUi3sTxJj5BEL&X-Amz-Signature=f2a2f4e96f5beb288ff1d97040868cbdb0a1a4764653e79e70f1d6e1eb085dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
