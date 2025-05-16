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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN3TZMQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1gI1a5NZw5u0ydR1Q1me6OQ2mOmM%2FuzlRb0cq4cIKJAiA9IFWzSvU70rI5Q245gQChyA1aFwcoG1btWlKeDERokCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMzVMX%2B%2Bdex2FddEF4KtwDh5ODFOfp5HFhSVx%2FokPYwToiMDzBMalu4outKCquNpOp8%2BlUmekBF%2F1isBg0r8xX0X3YWpB9jWfXAZnrO%2F8p2JwsJbeDX61CjQmjrZGlFiYcmOP4wvjhybavGBTw7fkxJCxugAe915HfOYzEDFuKR0zVFqmZGEZ9g65%2F6FfCQEJuUDqQ9K%2Bq6ulQx29akGO1SS3O3Fmo4aPkWDRvSYTjBORje2G0Yxx2SGDTBALvBNEo5R5kCi%2B59yzJya27aHsdijhlyq3QBWJRm941NukRsRpD2VOYs7aVW7hS2pWjDJZ2OeKbRmQ3gN1Wnb09aqXuxv7Zd1dRVI5VFI9kkbY%2FI1yaUOaw14VcIV5vdkDHOzLkibCd374f%2F%2FihqBjT3CfNyvEkhPx6oRYYpjObCq8bXYeWkEVMyuyi%2BnMLnRrfgG0%2BE%2FDB7N7RKIhkcniuLmCIHPG1jKXKjzalu3PxTfxaoV0yz1c64Dp15M43lB1axX1ClsF%2BHKxaLQ2h7GAJIFekWvwbZJScYV1GuZBcLwC1QRJhk6A8z993WYLt%2Fg9NQxwGJlhiRhKeYRkSAQywvy6gvm2ydVqe2%2Fwog1MNmwzRBruIlqFAUnpP80n0bRT2RIyYK3TFwCouY5WtBWUw5%2F2ZwQY6pgF6CCioF0s0KLytBSwpbLkCDX5nPCDUsi6bgcOiDFdkzDofCaQ8BOObmpQy6uqjpslfIwDHzw2p8zcRMNPk%2F4NlWLOIx1jAgeR6cFiYvxA92HZ3H7uGyTTQAsHY%2FyzTmt1yagbmE4WxjNWnN5j3xyc0uMlCzk4kN%2Fu7r7TllHTWVLMw4Q9HX3IenrJPEbRRh%2FAXYRISDY9bf3HwOkmxJuuPrHEjpgby&X-Amz-Signature=f3186db9f84112e46752aec9bf5c1473fc46d82a2636442c6e2d1114974f0d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN3TZMQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1gI1a5NZw5u0ydR1Q1me6OQ2mOmM%2FuzlRb0cq4cIKJAiA9IFWzSvU70rI5Q245gQChyA1aFwcoG1btWlKeDERokCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMzVMX%2B%2Bdex2FddEF4KtwDh5ODFOfp5HFhSVx%2FokPYwToiMDzBMalu4outKCquNpOp8%2BlUmekBF%2F1isBg0r8xX0X3YWpB9jWfXAZnrO%2F8p2JwsJbeDX61CjQmjrZGlFiYcmOP4wvjhybavGBTw7fkxJCxugAe915HfOYzEDFuKR0zVFqmZGEZ9g65%2F6FfCQEJuUDqQ9K%2Bq6ulQx29akGO1SS3O3Fmo4aPkWDRvSYTjBORje2G0Yxx2SGDTBALvBNEo5R5kCi%2B59yzJya27aHsdijhlyq3QBWJRm941NukRsRpD2VOYs7aVW7hS2pWjDJZ2OeKbRmQ3gN1Wnb09aqXuxv7Zd1dRVI5VFI9kkbY%2FI1yaUOaw14VcIV5vdkDHOzLkibCd374f%2F%2FihqBjT3CfNyvEkhPx6oRYYpjObCq8bXYeWkEVMyuyi%2BnMLnRrfgG0%2BE%2FDB7N7RKIhkcniuLmCIHPG1jKXKjzalu3PxTfxaoV0yz1c64Dp15M43lB1axX1ClsF%2BHKxaLQ2h7GAJIFekWvwbZJScYV1GuZBcLwC1QRJhk6A8z993WYLt%2Fg9NQxwGJlhiRhKeYRkSAQywvy6gvm2ydVqe2%2Fwog1MNmwzRBruIlqFAUnpP80n0bRT2RIyYK3TFwCouY5WtBWUw5%2F2ZwQY6pgF6CCioF0s0KLytBSwpbLkCDX5nPCDUsi6bgcOiDFdkzDofCaQ8BOObmpQy6uqjpslfIwDHzw2p8zcRMNPk%2F4NlWLOIx1jAgeR6cFiYvxA92HZ3H7uGyTTQAsHY%2FyzTmt1yagbmE4WxjNWnN5j3xyc0uMlCzk4kN%2Fu7r7TllHTWVLMw4Q9HX3IenrJPEbRRh%2FAXYRISDY9bf3HwOkmxJuuPrHEjpgby&X-Amz-Signature=c29cbc87b434c4386b0b6d6026dcbe74d033119593d07cba8e4e962c6a50a807&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN3TZMQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1gI1a5NZw5u0ydR1Q1me6OQ2mOmM%2FuzlRb0cq4cIKJAiA9IFWzSvU70rI5Q245gQChyA1aFwcoG1btWlKeDERokCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMzVMX%2B%2Bdex2FddEF4KtwDh5ODFOfp5HFhSVx%2FokPYwToiMDzBMalu4outKCquNpOp8%2BlUmekBF%2F1isBg0r8xX0X3YWpB9jWfXAZnrO%2F8p2JwsJbeDX61CjQmjrZGlFiYcmOP4wvjhybavGBTw7fkxJCxugAe915HfOYzEDFuKR0zVFqmZGEZ9g65%2F6FfCQEJuUDqQ9K%2Bq6ulQx29akGO1SS3O3Fmo4aPkWDRvSYTjBORje2G0Yxx2SGDTBALvBNEo5R5kCi%2B59yzJya27aHsdijhlyq3QBWJRm941NukRsRpD2VOYs7aVW7hS2pWjDJZ2OeKbRmQ3gN1Wnb09aqXuxv7Zd1dRVI5VFI9kkbY%2FI1yaUOaw14VcIV5vdkDHOzLkibCd374f%2F%2FihqBjT3CfNyvEkhPx6oRYYpjObCq8bXYeWkEVMyuyi%2BnMLnRrfgG0%2BE%2FDB7N7RKIhkcniuLmCIHPG1jKXKjzalu3PxTfxaoV0yz1c64Dp15M43lB1axX1ClsF%2BHKxaLQ2h7GAJIFekWvwbZJScYV1GuZBcLwC1QRJhk6A8z993WYLt%2Fg9NQxwGJlhiRhKeYRkSAQywvy6gvm2ydVqe2%2Fwog1MNmwzRBruIlqFAUnpP80n0bRT2RIyYK3TFwCouY5WtBWUw5%2F2ZwQY6pgF6CCioF0s0KLytBSwpbLkCDX5nPCDUsi6bgcOiDFdkzDofCaQ8BOObmpQy6uqjpslfIwDHzw2p8zcRMNPk%2F4NlWLOIx1jAgeR6cFiYvxA92HZ3H7uGyTTQAsHY%2FyzTmt1yagbmE4WxjNWnN5j3xyc0uMlCzk4kN%2Fu7r7TllHTWVLMw4Q9HX3IenrJPEbRRh%2FAXYRISDY9bf3HwOkmxJuuPrHEjpgby&X-Amz-Signature=ac2c11d5657b9bbb401b2a2755ec44bb00d73fa3e3e1570b96b5d3240a4f5828&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN3TZMQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1gI1a5NZw5u0ydR1Q1me6OQ2mOmM%2FuzlRb0cq4cIKJAiA9IFWzSvU70rI5Q245gQChyA1aFwcoG1btWlKeDERokCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMzVMX%2B%2Bdex2FddEF4KtwDh5ODFOfp5HFhSVx%2FokPYwToiMDzBMalu4outKCquNpOp8%2BlUmekBF%2F1isBg0r8xX0X3YWpB9jWfXAZnrO%2F8p2JwsJbeDX61CjQmjrZGlFiYcmOP4wvjhybavGBTw7fkxJCxugAe915HfOYzEDFuKR0zVFqmZGEZ9g65%2F6FfCQEJuUDqQ9K%2Bq6ulQx29akGO1SS3O3Fmo4aPkWDRvSYTjBORje2G0Yxx2SGDTBALvBNEo5R5kCi%2B59yzJya27aHsdijhlyq3QBWJRm941NukRsRpD2VOYs7aVW7hS2pWjDJZ2OeKbRmQ3gN1Wnb09aqXuxv7Zd1dRVI5VFI9kkbY%2FI1yaUOaw14VcIV5vdkDHOzLkibCd374f%2F%2FihqBjT3CfNyvEkhPx6oRYYpjObCq8bXYeWkEVMyuyi%2BnMLnRrfgG0%2BE%2FDB7N7RKIhkcniuLmCIHPG1jKXKjzalu3PxTfxaoV0yz1c64Dp15M43lB1axX1ClsF%2BHKxaLQ2h7GAJIFekWvwbZJScYV1GuZBcLwC1QRJhk6A8z993WYLt%2Fg9NQxwGJlhiRhKeYRkSAQywvy6gvm2ydVqe2%2Fwog1MNmwzRBruIlqFAUnpP80n0bRT2RIyYK3TFwCouY5WtBWUw5%2F2ZwQY6pgF6CCioF0s0KLytBSwpbLkCDX5nPCDUsi6bgcOiDFdkzDofCaQ8BOObmpQy6uqjpslfIwDHzw2p8zcRMNPk%2F4NlWLOIx1jAgeR6cFiYvxA92HZ3H7uGyTTQAsHY%2FyzTmt1yagbmE4WxjNWnN5j3xyc0uMlCzk4kN%2Fu7r7TllHTWVLMw4Q9HX3IenrJPEbRRh%2FAXYRISDY9bf3HwOkmxJuuPrHEjpgby&X-Amz-Signature=ab497477cbb332f25ef7cfc3da6315afba1fac9d8f9fe2ce9a941caafa078936&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN3TZMQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1gI1a5NZw5u0ydR1Q1me6OQ2mOmM%2FuzlRb0cq4cIKJAiA9IFWzSvU70rI5Q245gQChyA1aFwcoG1btWlKeDERokCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMzVMX%2B%2Bdex2FddEF4KtwDh5ODFOfp5HFhSVx%2FokPYwToiMDzBMalu4outKCquNpOp8%2BlUmekBF%2F1isBg0r8xX0X3YWpB9jWfXAZnrO%2F8p2JwsJbeDX61CjQmjrZGlFiYcmOP4wvjhybavGBTw7fkxJCxugAe915HfOYzEDFuKR0zVFqmZGEZ9g65%2F6FfCQEJuUDqQ9K%2Bq6ulQx29akGO1SS3O3Fmo4aPkWDRvSYTjBORje2G0Yxx2SGDTBALvBNEo5R5kCi%2B59yzJya27aHsdijhlyq3QBWJRm941NukRsRpD2VOYs7aVW7hS2pWjDJZ2OeKbRmQ3gN1Wnb09aqXuxv7Zd1dRVI5VFI9kkbY%2FI1yaUOaw14VcIV5vdkDHOzLkibCd374f%2F%2FihqBjT3CfNyvEkhPx6oRYYpjObCq8bXYeWkEVMyuyi%2BnMLnRrfgG0%2BE%2FDB7N7RKIhkcniuLmCIHPG1jKXKjzalu3PxTfxaoV0yz1c64Dp15M43lB1axX1ClsF%2BHKxaLQ2h7GAJIFekWvwbZJScYV1GuZBcLwC1QRJhk6A8z993WYLt%2Fg9NQxwGJlhiRhKeYRkSAQywvy6gvm2ydVqe2%2Fwog1MNmwzRBruIlqFAUnpP80n0bRT2RIyYK3TFwCouY5WtBWUw5%2F2ZwQY6pgF6CCioF0s0KLytBSwpbLkCDX5nPCDUsi6bgcOiDFdkzDofCaQ8BOObmpQy6uqjpslfIwDHzw2p8zcRMNPk%2F4NlWLOIx1jAgeR6cFiYvxA92HZ3H7uGyTTQAsHY%2FyzTmt1yagbmE4WxjNWnN5j3xyc0uMlCzk4kN%2Fu7r7TllHTWVLMw4Q9HX3IenrJPEbRRh%2FAXYRISDY9bf3HwOkmxJuuPrHEjpgby&X-Amz-Signature=fcc4711b6eca6640cc6cb9a40e90469efe1c68a4c25dccab983b7e2debbf591f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN3TZMQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1gI1a5NZw5u0ydR1Q1me6OQ2mOmM%2FuzlRb0cq4cIKJAiA9IFWzSvU70rI5Q245gQChyA1aFwcoG1btWlKeDERokCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMzVMX%2B%2Bdex2FddEF4KtwDh5ODFOfp5HFhSVx%2FokPYwToiMDzBMalu4outKCquNpOp8%2BlUmekBF%2F1isBg0r8xX0X3YWpB9jWfXAZnrO%2F8p2JwsJbeDX61CjQmjrZGlFiYcmOP4wvjhybavGBTw7fkxJCxugAe915HfOYzEDFuKR0zVFqmZGEZ9g65%2F6FfCQEJuUDqQ9K%2Bq6ulQx29akGO1SS3O3Fmo4aPkWDRvSYTjBORje2G0Yxx2SGDTBALvBNEo5R5kCi%2B59yzJya27aHsdijhlyq3QBWJRm941NukRsRpD2VOYs7aVW7hS2pWjDJZ2OeKbRmQ3gN1Wnb09aqXuxv7Zd1dRVI5VFI9kkbY%2FI1yaUOaw14VcIV5vdkDHOzLkibCd374f%2F%2FihqBjT3CfNyvEkhPx6oRYYpjObCq8bXYeWkEVMyuyi%2BnMLnRrfgG0%2BE%2FDB7N7RKIhkcniuLmCIHPG1jKXKjzalu3PxTfxaoV0yz1c64Dp15M43lB1axX1ClsF%2BHKxaLQ2h7GAJIFekWvwbZJScYV1GuZBcLwC1QRJhk6A8z993WYLt%2Fg9NQxwGJlhiRhKeYRkSAQywvy6gvm2ydVqe2%2Fwog1MNmwzRBruIlqFAUnpP80n0bRT2RIyYK3TFwCouY5WtBWUw5%2F2ZwQY6pgF6CCioF0s0KLytBSwpbLkCDX5nPCDUsi6bgcOiDFdkzDofCaQ8BOObmpQy6uqjpslfIwDHzw2p8zcRMNPk%2F4NlWLOIx1jAgeR6cFiYvxA92HZ3H7uGyTTQAsHY%2FyzTmt1yagbmE4WxjNWnN5j3xyc0uMlCzk4kN%2Fu7r7TllHTWVLMw4Q9HX3IenrJPEbRRh%2FAXYRISDY9bf3HwOkmxJuuPrHEjpgby&X-Amz-Signature=b9f60c7d4981075bf5fa2f748dcafe43cd5fe391137dd2003b7418c203ad2770&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN3TZMQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1gI1a5NZw5u0ydR1Q1me6OQ2mOmM%2FuzlRb0cq4cIKJAiA9IFWzSvU70rI5Q245gQChyA1aFwcoG1btWlKeDERokCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMzVMX%2B%2Bdex2FddEF4KtwDh5ODFOfp5HFhSVx%2FokPYwToiMDzBMalu4outKCquNpOp8%2BlUmekBF%2F1isBg0r8xX0X3YWpB9jWfXAZnrO%2F8p2JwsJbeDX61CjQmjrZGlFiYcmOP4wvjhybavGBTw7fkxJCxugAe915HfOYzEDFuKR0zVFqmZGEZ9g65%2F6FfCQEJuUDqQ9K%2Bq6ulQx29akGO1SS3O3Fmo4aPkWDRvSYTjBORje2G0Yxx2SGDTBALvBNEo5R5kCi%2B59yzJya27aHsdijhlyq3QBWJRm941NukRsRpD2VOYs7aVW7hS2pWjDJZ2OeKbRmQ3gN1Wnb09aqXuxv7Zd1dRVI5VFI9kkbY%2FI1yaUOaw14VcIV5vdkDHOzLkibCd374f%2F%2FihqBjT3CfNyvEkhPx6oRYYpjObCq8bXYeWkEVMyuyi%2BnMLnRrfgG0%2BE%2FDB7N7RKIhkcniuLmCIHPG1jKXKjzalu3PxTfxaoV0yz1c64Dp15M43lB1axX1ClsF%2BHKxaLQ2h7GAJIFekWvwbZJScYV1GuZBcLwC1QRJhk6A8z993WYLt%2Fg9NQxwGJlhiRhKeYRkSAQywvy6gvm2ydVqe2%2Fwog1MNmwzRBruIlqFAUnpP80n0bRT2RIyYK3TFwCouY5WtBWUw5%2F2ZwQY6pgF6CCioF0s0KLytBSwpbLkCDX5nPCDUsi6bgcOiDFdkzDofCaQ8BOObmpQy6uqjpslfIwDHzw2p8zcRMNPk%2F4NlWLOIx1jAgeR6cFiYvxA92HZ3H7uGyTTQAsHY%2FyzTmt1yagbmE4WxjNWnN5j3xyc0uMlCzk4kN%2Fu7r7TllHTWVLMw4Q9HX3IenrJPEbRRh%2FAXYRISDY9bf3HwOkmxJuuPrHEjpgby&X-Amz-Signature=539d63cf619f8e255ca27cbe4e206abafa498b3286ddfabb97b92beef1318d64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN3TZMQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1gI1a5NZw5u0ydR1Q1me6OQ2mOmM%2FuzlRb0cq4cIKJAiA9IFWzSvU70rI5Q245gQChyA1aFwcoG1btWlKeDERokCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMzVMX%2B%2Bdex2FddEF4KtwDh5ODFOfp5HFhSVx%2FokPYwToiMDzBMalu4outKCquNpOp8%2BlUmekBF%2F1isBg0r8xX0X3YWpB9jWfXAZnrO%2F8p2JwsJbeDX61CjQmjrZGlFiYcmOP4wvjhybavGBTw7fkxJCxugAe915HfOYzEDFuKR0zVFqmZGEZ9g65%2F6FfCQEJuUDqQ9K%2Bq6ulQx29akGO1SS3O3Fmo4aPkWDRvSYTjBORje2G0Yxx2SGDTBALvBNEo5R5kCi%2B59yzJya27aHsdijhlyq3QBWJRm941NukRsRpD2VOYs7aVW7hS2pWjDJZ2OeKbRmQ3gN1Wnb09aqXuxv7Zd1dRVI5VFI9kkbY%2FI1yaUOaw14VcIV5vdkDHOzLkibCd374f%2F%2FihqBjT3CfNyvEkhPx6oRYYpjObCq8bXYeWkEVMyuyi%2BnMLnRrfgG0%2BE%2FDB7N7RKIhkcniuLmCIHPG1jKXKjzalu3PxTfxaoV0yz1c64Dp15M43lB1axX1ClsF%2BHKxaLQ2h7GAJIFekWvwbZJScYV1GuZBcLwC1QRJhk6A8z993WYLt%2Fg9NQxwGJlhiRhKeYRkSAQywvy6gvm2ydVqe2%2Fwog1MNmwzRBruIlqFAUnpP80n0bRT2RIyYK3TFwCouY5WtBWUw5%2F2ZwQY6pgF6CCioF0s0KLytBSwpbLkCDX5nPCDUsi6bgcOiDFdkzDofCaQ8BOObmpQy6uqjpslfIwDHzw2p8zcRMNPk%2F4NlWLOIx1jAgeR6cFiYvxA92HZ3H7uGyTTQAsHY%2FyzTmt1yagbmE4WxjNWnN5j3xyc0uMlCzk4kN%2Fu7r7TllHTWVLMw4Q9HX3IenrJPEbRRh%2FAXYRISDY9bf3HwOkmxJuuPrHEjpgby&X-Amz-Signature=173d4adb95a425d33da5c1bbecabfbc4f9d8672d4b9dbde87f45a2e53daf0e81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
