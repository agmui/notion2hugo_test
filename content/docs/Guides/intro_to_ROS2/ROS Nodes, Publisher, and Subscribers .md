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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYJDQSF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCrZ4m1W6mUg6QcbG9pqvQdTyvJpjtDOCEjnIGlU5MimQIhANBig6LJvueOBpcKNJ5ucxKfqi6u%2Bn7JtX9DdfaFAVBxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHpMg6CovKmWXgYR0q3AMu9v%2FhWELF4h7LW5roXeUi3u1L6aT3e%2BeulsKceZc9MAjkOON3O4TYPJPol1DaPxIUaKtK37VLtHH5WK1aJWNKQuQ7NJfp%2FeUHBlyNDfl%2Feh7ldI86ljBNZBXnnB4evomNR8u8drH7IODz4OX%2BVWp9InhpYb94Mkw0MBbbdTHhRkUjfKyri9U6xC9UNmzh1Jd88sepWnLgckUsVr3MXiSPUNg1pDyydr4DZLo8CMKQJ%2BAA0WVqSZwdbr9rMzaKcrqpIVAueC%2BwKGekJqoB3CCxL6pTCjBHos%2B75QLQXjIsfJOVimxDE3LeT0u%2F1Wb7qJQkW63n3xglgtBzF1i1avFU3B8xqBUx6x54ZhFhZVCWI%2B059H1gw6M1oBdNwiLOTYOzZ51Mi3TZ8opQjFJFuVMu1Lg0XE6jMWWzPZQbMJVtX3ZfNTeX4DDnBoJVEja3GrTgi9OKjvBRmdXavlOLMhgQpFu5Gn0AQ8LPp8ceqXWTlIhWZOrBth9Xox04H0VM8hoHx3hBaZ8gZ4Tv2SCBSkBmv9E%2BsbD%2BJdoopUQfCDjuOu%2Fwdbmp8pwx%2FN2QWXiS%2BWwxYMwcjDYFgQp8VmuXxuDCXqOVslCfYhjoPFvmFV3zUJnm364zjX2X8gXxGTDRg6PABjqkAZeK3vJ0lELD1DJ6E4gpnelGxbUEcKVSj3WrcJ1zU%2BSv4y9NPEJBo%2BdOZvfIU6p6avN2HrnmtCprtIj8l%2BfFcr0wHBkQCk%2FGV0Rubq4L%2FseJjy5nafkxRVK2gbVD5l8vlUUX5K0ZxbVajV2%2FIT1EC1H3YZ%2Faa%2BnPi6f4O%2F%2By5VhzIoVv6V6nnnrALTathJ4wDeOShSFwqfUAgGbSMYEB6gmgmnDx&X-Amz-Signature=e4d26bad44340d8eded372c8d78d4794af0cf8280840a9f023469857931d73e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYJDQSF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCrZ4m1W6mUg6QcbG9pqvQdTyvJpjtDOCEjnIGlU5MimQIhANBig6LJvueOBpcKNJ5ucxKfqi6u%2Bn7JtX9DdfaFAVBxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHpMg6CovKmWXgYR0q3AMu9v%2FhWELF4h7LW5roXeUi3u1L6aT3e%2BeulsKceZc9MAjkOON3O4TYPJPol1DaPxIUaKtK37VLtHH5WK1aJWNKQuQ7NJfp%2FeUHBlyNDfl%2Feh7ldI86ljBNZBXnnB4evomNR8u8drH7IODz4OX%2BVWp9InhpYb94Mkw0MBbbdTHhRkUjfKyri9U6xC9UNmzh1Jd88sepWnLgckUsVr3MXiSPUNg1pDyydr4DZLo8CMKQJ%2BAA0WVqSZwdbr9rMzaKcrqpIVAueC%2BwKGekJqoB3CCxL6pTCjBHos%2B75QLQXjIsfJOVimxDE3LeT0u%2F1Wb7qJQkW63n3xglgtBzF1i1avFU3B8xqBUx6x54ZhFhZVCWI%2B059H1gw6M1oBdNwiLOTYOzZ51Mi3TZ8opQjFJFuVMu1Lg0XE6jMWWzPZQbMJVtX3ZfNTeX4DDnBoJVEja3GrTgi9OKjvBRmdXavlOLMhgQpFu5Gn0AQ8LPp8ceqXWTlIhWZOrBth9Xox04H0VM8hoHx3hBaZ8gZ4Tv2SCBSkBmv9E%2BsbD%2BJdoopUQfCDjuOu%2Fwdbmp8pwx%2FN2QWXiS%2BWwxYMwcjDYFgQp8VmuXxuDCXqOVslCfYhjoPFvmFV3zUJnm364zjX2X8gXxGTDRg6PABjqkAZeK3vJ0lELD1DJ6E4gpnelGxbUEcKVSj3WrcJ1zU%2BSv4y9NPEJBo%2BdOZvfIU6p6avN2HrnmtCprtIj8l%2BfFcr0wHBkQCk%2FGV0Rubq4L%2FseJjy5nafkxRVK2gbVD5l8vlUUX5K0ZxbVajV2%2FIT1EC1H3YZ%2Faa%2BnPi6f4O%2F%2By5VhzIoVv6V6nnnrALTathJ4wDeOShSFwqfUAgGbSMYEB6gmgmnDx&X-Amz-Signature=66b46c3b69cf7d86ff45c4179efbd200b2505378ffcd2bf896307c344a906b48&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYJDQSF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCrZ4m1W6mUg6QcbG9pqvQdTyvJpjtDOCEjnIGlU5MimQIhANBig6LJvueOBpcKNJ5ucxKfqi6u%2Bn7JtX9DdfaFAVBxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHpMg6CovKmWXgYR0q3AMu9v%2FhWELF4h7LW5roXeUi3u1L6aT3e%2BeulsKceZc9MAjkOON3O4TYPJPol1DaPxIUaKtK37VLtHH5WK1aJWNKQuQ7NJfp%2FeUHBlyNDfl%2Feh7ldI86ljBNZBXnnB4evomNR8u8drH7IODz4OX%2BVWp9InhpYb94Mkw0MBbbdTHhRkUjfKyri9U6xC9UNmzh1Jd88sepWnLgckUsVr3MXiSPUNg1pDyydr4DZLo8CMKQJ%2BAA0WVqSZwdbr9rMzaKcrqpIVAueC%2BwKGekJqoB3CCxL6pTCjBHos%2B75QLQXjIsfJOVimxDE3LeT0u%2F1Wb7qJQkW63n3xglgtBzF1i1avFU3B8xqBUx6x54ZhFhZVCWI%2B059H1gw6M1oBdNwiLOTYOzZ51Mi3TZ8opQjFJFuVMu1Lg0XE6jMWWzPZQbMJVtX3ZfNTeX4DDnBoJVEja3GrTgi9OKjvBRmdXavlOLMhgQpFu5Gn0AQ8LPp8ceqXWTlIhWZOrBth9Xox04H0VM8hoHx3hBaZ8gZ4Tv2SCBSkBmv9E%2BsbD%2BJdoopUQfCDjuOu%2Fwdbmp8pwx%2FN2QWXiS%2BWwxYMwcjDYFgQp8VmuXxuDCXqOVslCfYhjoPFvmFV3zUJnm364zjX2X8gXxGTDRg6PABjqkAZeK3vJ0lELD1DJ6E4gpnelGxbUEcKVSj3WrcJ1zU%2BSv4y9NPEJBo%2BdOZvfIU6p6avN2HrnmtCprtIj8l%2BfFcr0wHBkQCk%2FGV0Rubq4L%2FseJjy5nafkxRVK2gbVD5l8vlUUX5K0ZxbVajV2%2FIT1EC1H3YZ%2Faa%2BnPi6f4O%2F%2By5VhzIoVv6V6nnnrALTathJ4wDeOShSFwqfUAgGbSMYEB6gmgmnDx&X-Amz-Signature=db0a5987ffaec9e172584e288787ab9bee8022eb2ea4762a1bec5dcb9d99e2cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYJDQSF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCrZ4m1W6mUg6QcbG9pqvQdTyvJpjtDOCEjnIGlU5MimQIhANBig6LJvueOBpcKNJ5ucxKfqi6u%2Bn7JtX9DdfaFAVBxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHpMg6CovKmWXgYR0q3AMu9v%2FhWELF4h7LW5roXeUi3u1L6aT3e%2BeulsKceZc9MAjkOON3O4TYPJPol1DaPxIUaKtK37VLtHH5WK1aJWNKQuQ7NJfp%2FeUHBlyNDfl%2Feh7ldI86ljBNZBXnnB4evomNR8u8drH7IODz4OX%2BVWp9InhpYb94Mkw0MBbbdTHhRkUjfKyri9U6xC9UNmzh1Jd88sepWnLgckUsVr3MXiSPUNg1pDyydr4DZLo8CMKQJ%2BAA0WVqSZwdbr9rMzaKcrqpIVAueC%2BwKGekJqoB3CCxL6pTCjBHos%2B75QLQXjIsfJOVimxDE3LeT0u%2F1Wb7qJQkW63n3xglgtBzF1i1avFU3B8xqBUx6x54ZhFhZVCWI%2B059H1gw6M1oBdNwiLOTYOzZ51Mi3TZ8opQjFJFuVMu1Lg0XE6jMWWzPZQbMJVtX3ZfNTeX4DDnBoJVEja3GrTgi9OKjvBRmdXavlOLMhgQpFu5Gn0AQ8LPp8ceqXWTlIhWZOrBth9Xox04H0VM8hoHx3hBaZ8gZ4Tv2SCBSkBmv9E%2BsbD%2BJdoopUQfCDjuOu%2Fwdbmp8pwx%2FN2QWXiS%2BWwxYMwcjDYFgQp8VmuXxuDCXqOVslCfYhjoPFvmFV3zUJnm364zjX2X8gXxGTDRg6PABjqkAZeK3vJ0lELD1DJ6E4gpnelGxbUEcKVSj3WrcJ1zU%2BSv4y9NPEJBo%2BdOZvfIU6p6avN2HrnmtCprtIj8l%2BfFcr0wHBkQCk%2FGV0Rubq4L%2FseJjy5nafkxRVK2gbVD5l8vlUUX5K0ZxbVajV2%2FIT1EC1H3YZ%2Faa%2BnPi6f4O%2F%2By5VhzIoVv6V6nnnrALTathJ4wDeOShSFwqfUAgGbSMYEB6gmgmnDx&X-Amz-Signature=a11e23cc125dffaa2545432480293afde1718ea78a4b6294fcafc2fb4bd39a60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYJDQSF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCrZ4m1W6mUg6QcbG9pqvQdTyvJpjtDOCEjnIGlU5MimQIhANBig6LJvueOBpcKNJ5ucxKfqi6u%2Bn7JtX9DdfaFAVBxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHpMg6CovKmWXgYR0q3AMu9v%2FhWELF4h7LW5roXeUi3u1L6aT3e%2BeulsKceZc9MAjkOON3O4TYPJPol1DaPxIUaKtK37VLtHH5WK1aJWNKQuQ7NJfp%2FeUHBlyNDfl%2Feh7ldI86ljBNZBXnnB4evomNR8u8drH7IODz4OX%2BVWp9InhpYb94Mkw0MBbbdTHhRkUjfKyri9U6xC9UNmzh1Jd88sepWnLgckUsVr3MXiSPUNg1pDyydr4DZLo8CMKQJ%2BAA0WVqSZwdbr9rMzaKcrqpIVAueC%2BwKGekJqoB3CCxL6pTCjBHos%2B75QLQXjIsfJOVimxDE3LeT0u%2F1Wb7qJQkW63n3xglgtBzF1i1avFU3B8xqBUx6x54ZhFhZVCWI%2B059H1gw6M1oBdNwiLOTYOzZ51Mi3TZ8opQjFJFuVMu1Lg0XE6jMWWzPZQbMJVtX3ZfNTeX4DDnBoJVEja3GrTgi9OKjvBRmdXavlOLMhgQpFu5Gn0AQ8LPp8ceqXWTlIhWZOrBth9Xox04H0VM8hoHx3hBaZ8gZ4Tv2SCBSkBmv9E%2BsbD%2BJdoopUQfCDjuOu%2Fwdbmp8pwx%2FN2QWXiS%2BWwxYMwcjDYFgQp8VmuXxuDCXqOVslCfYhjoPFvmFV3zUJnm364zjX2X8gXxGTDRg6PABjqkAZeK3vJ0lELD1DJ6E4gpnelGxbUEcKVSj3WrcJ1zU%2BSv4y9NPEJBo%2BdOZvfIU6p6avN2HrnmtCprtIj8l%2BfFcr0wHBkQCk%2FGV0Rubq4L%2FseJjy5nafkxRVK2gbVD5l8vlUUX5K0ZxbVajV2%2FIT1EC1H3YZ%2Faa%2BnPi6f4O%2F%2By5VhzIoVv6V6nnnrALTathJ4wDeOShSFwqfUAgGbSMYEB6gmgmnDx&X-Amz-Signature=f179d28664df51dcaf063e742e5a235315df5faa7464fb6e1a79c9d7e05af647&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYJDQSF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCrZ4m1W6mUg6QcbG9pqvQdTyvJpjtDOCEjnIGlU5MimQIhANBig6LJvueOBpcKNJ5ucxKfqi6u%2Bn7JtX9DdfaFAVBxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHpMg6CovKmWXgYR0q3AMu9v%2FhWELF4h7LW5roXeUi3u1L6aT3e%2BeulsKceZc9MAjkOON3O4TYPJPol1DaPxIUaKtK37VLtHH5WK1aJWNKQuQ7NJfp%2FeUHBlyNDfl%2Feh7ldI86ljBNZBXnnB4evomNR8u8drH7IODz4OX%2BVWp9InhpYb94Mkw0MBbbdTHhRkUjfKyri9U6xC9UNmzh1Jd88sepWnLgckUsVr3MXiSPUNg1pDyydr4DZLo8CMKQJ%2BAA0WVqSZwdbr9rMzaKcrqpIVAueC%2BwKGekJqoB3CCxL6pTCjBHos%2B75QLQXjIsfJOVimxDE3LeT0u%2F1Wb7qJQkW63n3xglgtBzF1i1avFU3B8xqBUx6x54ZhFhZVCWI%2B059H1gw6M1oBdNwiLOTYOzZ51Mi3TZ8opQjFJFuVMu1Lg0XE6jMWWzPZQbMJVtX3ZfNTeX4DDnBoJVEja3GrTgi9OKjvBRmdXavlOLMhgQpFu5Gn0AQ8LPp8ceqXWTlIhWZOrBth9Xox04H0VM8hoHx3hBaZ8gZ4Tv2SCBSkBmv9E%2BsbD%2BJdoopUQfCDjuOu%2Fwdbmp8pwx%2FN2QWXiS%2BWwxYMwcjDYFgQp8VmuXxuDCXqOVslCfYhjoPFvmFV3zUJnm364zjX2X8gXxGTDRg6PABjqkAZeK3vJ0lELD1DJ6E4gpnelGxbUEcKVSj3WrcJ1zU%2BSv4y9NPEJBo%2BdOZvfIU6p6avN2HrnmtCprtIj8l%2BfFcr0wHBkQCk%2FGV0Rubq4L%2FseJjy5nafkxRVK2gbVD5l8vlUUX5K0ZxbVajV2%2FIT1EC1H3YZ%2Faa%2BnPi6f4O%2F%2By5VhzIoVv6V6nnnrALTathJ4wDeOShSFwqfUAgGbSMYEB6gmgmnDx&X-Amz-Signature=152738231e96f39986272e7875b2d4bfd9e70a0c7a6c14930fc282630a6eab74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYJDQSF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCrZ4m1W6mUg6QcbG9pqvQdTyvJpjtDOCEjnIGlU5MimQIhANBig6LJvueOBpcKNJ5ucxKfqi6u%2Bn7JtX9DdfaFAVBxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHpMg6CovKmWXgYR0q3AMu9v%2FhWELF4h7LW5roXeUi3u1L6aT3e%2BeulsKceZc9MAjkOON3O4TYPJPol1DaPxIUaKtK37VLtHH5WK1aJWNKQuQ7NJfp%2FeUHBlyNDfl%2Feh7ldI86ljBNZBXnnB4evomNR8u8drH7IODz4OX%2BVWp9InhpYb94Mkw0MBbbdTHhRkUjfKyri9U6xC9UNmzh1Jd88sepWnLgckUsVr3MXiSPUNg1pDyydr4DZLo8CMKQJ%2BAA0WVqSZwdbr9rMzaKcrqpIVAueC%2BwKGekJqoB3CCxL6pTCjBHos%2B75QLQXjIsfJOVimxDE3LeT0u%2F1Wb7qJQkW63n3xglgtBzF1i1avFU3B8xqBUx6x54ZhFhZVCWI%2B059H1gw6M1oBdNwiLOTYOzZ51Mi3TZ8opQjFJFuVMu1Lg0XE6jMWWzPZQbMJVtX3ZfNTeX4DDnBoJVEja3GrTgi9OKjvBRmdXavlOLMhgQpFu5Gn0AQ8LPp8ceqXWTlIhWZOrBth9Xox04H0VM8hoHx3hBaZ8gZ4Tv2SCBSkBmv9E%2BsbD%2BJdoopUQfCDjuOu%2Fwdbmp8pwx%2FN2QWXiS%2BWwxYMwcjDYFgQp8VmuXxuDCXqOVslCfYhjoPFvmFV3zUJnm364zjX2X8gXxGTDRg6PABjqkAZeK3vJ0lELD1DJ6E4gpnelGxbUEcKVSj3WrcJ1zU%2BSv4y9NPEJBo%2BdOZvfIU6p6avN2HrnmtCprtIj8l%2BfFcr0wHBkQCk%2FGV0Rubq4L%2FseJjy5nafkxRVK2gbVD5l8vlUUX5K0ZxbVajV2%2FIT1EC1H3YZ%2Faa%2BnPi6f4O%2F%2By5VhzIoVv6V6nnnrALTathJ4wDeOShSFwqfUAgGbSMYEB6gmgmnDx&X-Amz-Signature=9d76a999b6f5f1fc8e25d209107ffdc23b67bb712f60d17db1aef357f268f989&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYJDQSF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCrZ4m1W6mUg6QcbG9pqvQdTyvJpjtDOCEjnIGlU5MimQIhANBig6LJvueOBpcKNJ5ucxKfqi6u%2Bn7JtX9DdfaFAVBxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHpMg6CovKmWXgYR0q3AMu9v%2FhWELF4h7LW5roXeUi3u1L6aT3e%2BeulsKceZc9MAjkOON3O4TYPJPol1DaPxIUaKtK37VLtHH5WK1aJWNKQuQ7NJfp%2FeUHBlyNDfl%2Feh7ldI86ljBNZBXnnB4evomNR8u8drH7IODz4OX%2BVWp9InhpYb94Mkw0MBbbdTHhRkUjfKyri9U6xC9UNmzh1Jd88sepWnLgckUsVr3MXiSPUNg1pDyydr4DZLo8CMKQJ%2BAA0WVqSZwdbr9rMzaKcrqpIVAueC%2BwKGekJqoB3CCxL6pTCjBHos%2B75QLQXjIsfJOVimxDE3LeT0u%2F1Wb7qJQkW63n3xglgtBzF1i1avFU3B8xqBUx6x54ZhFhZVCWI%2B059H1gw6M1oBdNwiLOTYOzZ51Mi3TZ8opQjFJFuVMu1Lg0XE6jMWWzPZQbMJVtX3ZfNTeX4DDnBoJVEja3GrTgi9OKjvBRmdXavlOLMhgQpFu5Gn0AQ8LPp8ceqXWTlIhWZOrBth9Xox04H0VM8hoHx3hBaZ8gZ4Tv2SCBSkBmv9E%2BsbD%2BJdoopUQfCDjuOu%2Fwdbmp8pwx%2FN2QWXiS%2BWwxYMwcjDYFgQp8VmuXxuDCXqOVslCfYhjoPFvmFV3zUJnm364zjX2X8gXxGTDRg6PABjqkAZeK3vJ0lELD1DJ6E4gpnelGxbUEcKVSj3WrcJ1zU%2BSv4y9NPEJBo%2BdOZvfIU6p6avN2HrnmtCprtIj8l%2BfFcr0wHBkQCk%2FGV0Rubq4L%2FseJjy5nafkxRVK2gbVD5l8vlUUX5K0ZxbVajV2%2FIT1EC1H3YZ%2Faa%2BnPi6f4O%2F%2By5VhzIoVv6V6nnnrALTathJ4wDeOShSFwqfUAgGbSMYEB6gmgmnDx&X-Amz-Signature=fe6c080ee178bd8ef487b7f207239da37683f02fadf1256ddff4981a747b0665&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
