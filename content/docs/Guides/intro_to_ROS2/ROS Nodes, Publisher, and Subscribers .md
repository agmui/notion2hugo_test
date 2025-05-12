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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI65QAS4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCy7NtVyi5X%2FyMpmekZ4jXW1FKCuRDJ7%2FY7FNpYAAr5owIhAIQPyMJWr%2FVbGHkMf%2B1cyYmR6tpMHs0uxgRA3Zp%2BhgP6KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTh%2B11finXK%2B72tGUq3APBgxoTI0O3KIVG6Wj%2B7Bx3x2pycOFI5WCgI5L%2BrSUaxkcrrUQ0K6otBCutc%2Frjk3UycW%2FrzkeVb9OxDT6%2B9xl4OKRZUkjy4gsO961%2FW2Uvxwjx6yXyi1LkpU2UfUv4%2F6sn0fjqpOF7rrOf1r%2FQDKcWKXExQ5AqIkEYMZJ5LxOZFVaR%2FtWZkJFXbeuxbY9Z2xyXu5bggp%2BmPRXzLf0NHDcBoTCX1sz%2BJAuntBhvwlsFts%2F4F7ImuFUjT1A4LcldmWj8aVGgvJOmTa68o%2FdB00xmusW3iDC6YbV9n9Plxim0B7UR04Xl6nrfqP04KL%2FQ3dAwkp0GgRdbfIKfh%2Fhnz27sn0WutOe86WMbtz%2FUEfN9WgogAKTWWYwajrLBX9SaisQvVQBb%2Ba9YoYCoAERqoU2ZqaHThrN6xBNo3p3xduSgCd7cR8mVUv%2FlMcMjcEGEVVwn8X7lzbIMCb4VZnupzg5d%2Bpvh4S5Oo19j5j2ky2BHDpTd5Clwg7LO8LgzFtAh9IkT6e2FZooFWq1f%2FroB%2FWIwvRWiZ2FjfR13guFgYKeZms1jY1G6MLvYkI2h3b0jZDyWIr2IOVD5UuejGhIlW2XB9cKq9T37UQK6m2pPZCQdtEJ7abJaec6tQZsFAzCLhoXBBjqkATXMcPLYUU1hhknv5DmtbBDIRLVbeSc4WVd8dHrlTkD4JTVUwcGE59pK4qncT%2FL9U7bff9Hsy5aq0S6K%2BcbmE91sbMORtX6UMpLJ9OBsQq9V9cj8niDdH3WeYTNBsaluua7Vcr9Kvo%2FkMqJSbESZU2R%2BxhZyiQUSJWYDVeDHIId5q1FeO4jyntITkQH%2BfSzBr4IilGSVdbs4AEXctRy0BJbMNq5M&X-Amz-Signature=28898fc30d61cb772170fab3e331725ad6d99c519337440513393aff58909a3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI65QAS4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCy7NtVyi5X%2FyMpmekZ4jXW1FKCuRDJ7%2FY7FNpYAAr5owIhAIQPyMJWr%2FVbGHkMf%2B1cyYmR6tpMHs0uxgRA3Zp%2BhgP6KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTh%2B11finXK%2B72tGUq3APBgxoTI0O3KIVG6Wj%2B7Bx3x2pycOFI5WCgI5L%2BrSUaxkcrrUQ0K6otBCutc%2Frjk3UycW%2FrzkeVb9OxDT6%2B9xl4OKRZUkjy4gsO961%2FW2Uvxwjx6yXyi1LkpU2UfUv4%2F6sn0fjqpOF7rrOf1r%2FQDKcWKXExQ5AqIkEYMZJ5LxOZFVaR%2FtWZkJFXbeuxbY9Z2xyXu5bggp%2BmPRXzLf0NHDcBoTCX1sz%2BJAuntBhvwlsFts%2F4F7ImuFUjT1A4LcldmWj8aVGgvJOmTa68o%2FdB00xmusW3iDC6YbV9n9Plxim0B7UR04Xl6nrfqP04KL%2FQ3dAwkp0GgRdbfIKfh%2Fhnz27sn0WutOe86WMbtz%2FUEfN9WgogAKTWWYwajrLBX9SaisQvVQBb%2Ba9YoYCoAERqoU2ZqaHThrN6xBNo3p3xduSgCd7cR8mVUv%2FlMcMjcEGEVVwn8X7lzbIMCb4VZnupzg5d%2Bpvh4S5Oo19j5j2ky2BHDpTd5Clwg7LO8LgzFtAh9IkT6e2FZooFWq1f%2FroB%2FWIwvRWiZ2FjfR13guFgYKeZms1jY1G6MLvYkI2h3b0jZDyWIr2IOVD5UuejGhIlW2XB9cKq9T37UQK6m2pPZCQdtEJ7abJaec6tQZsFAzCLhoXBBjqkATXMcPLYUU1hhknv5DmtbBDIRLVbeSc4WVd8dHrlTkD4JTVUwcGE59pK4qncT%2FL9U7bff9Hsy5aq0S6K%2BcbmE91sbMORtX6UMpLJ9OBsQq9V9cj8niDdH3WeYTNBsaluua7Vcr9Kvo%2FkMqJSbESZU2R%2BxhZyiQUSJWYDVeDHIId5q1FeO4jyntITkQH%2BfSzBr4IilGSVdbs4AEXctRy0BJbMNq5M&X-Amz-Signature=0e269e0eeceef165643c6e86ae9bbb4ad7675b8f64b79f5f1bbe8748d566d2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI65QAS4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCy7NtVyi5X%2FyMpmekZ4jXW1FKCuRDJ7%2FY7FNpYAAr5owIhAIQPyMJWr%2FVbGHkMf%2B1cyYmR6tpMHs0uxgRA3Zp%2BhgP6KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTh%2B11finXK%2B72tGUq3APBgxoTI0O3KIVG6Wj%2B7Bx3x2pycOFI5WCgI5L%2BrSUaxkcrrUQ0K6otBCutc%2Frjk3UycW%2FrzkeVb9OxDT6%2B9xl4OKRZUkjy4gsO961%2FW2Uvxwjx6yXyi1LkpU2UfUv4%2F6sn0fjqpOF7rrOf1r%2FQDKcWKXExQ5AqIkEYMZJ5LxOZFVaR%2FtWZkJFXbeuxbY9Z2xyXu5bggp%2BmPRXzLf0NHDcBoTCX1sz%2BJAuntBhvwlsFts%2F4F7ImuFUjT1A4LcldmWj8aVGgvJOmTa68o%2FdB00xmusW3iDC6YbV9n9Plxim0B7UR04Xl6nrfqP04KL%2FQ3dAwkp0GgRdbfIKfh%2Fhnz27sn0WutOe86WMbtz%2FUEfN9WgogAKTWWYwajrLBX9SaisQvVQBb%2Ba9YoYCoAERqoU2ZqaHThrN6xBNo3p3xduSgCd7cR8mVUv%2FlMcMjcEGEVVwn8X7lzbIMCb4VZnupzg5d%2Bpvh4S5Oo19j5j2ky2BHDpTd5Clwg7LO8LgzFtAh9IkT6e2FZooFWq1f%2FroB%2FWIwvRWiZ2FjfR13guFgYKeZms1jY1G6MLvYkI2h3b0jZDyWIr2IOVD5UuejGhIlW2XB9cKq9T37UQK6m2pPZCQdtEJ7abJaec6tQZsFAzCLhoXBBjqkATXMcPLYUU1hhknv5DmtbBDIRLVbeSc4WVd8dHrlTkD4JTVUwcGE59pK4qncT%2FL9U7bff9Hsy5aq0S6K%2BcbmE91sbMORtX6UMpLJ9OBsQq9V9cj8niDdH3WeYTNBsaluua7Vcr9Kvo%2FkMqJSbESZU2R%2BxhZyiQUSJWYDVeDHIId5q1FeO4jyntITkQH%2BfSzBr4IilGSVdbs4AEXctRy0BJbMNq5M&X-Amz-Signature=73a2babe582ca5b0fc618b6be4e0638191f7d3835cc525f3dd9a0cee40cb2b52&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI65QAS4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCy7NtVyi5X%2FyMpmekZ4jXW1FKCuRDJ7%2FY7FNpYAAr5owIhAIQPyMJWr%2FVbGHkMf%2B1cyYmR6tpMHs0uxgRA3Zp%2BhgP6KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTh%2B11finXK%2B72tGUq3APBgxoTI0O3KIVG6Wj%2B7Bx3x2pycOFI5WCgI5L%2BrSUaxkcrrUQ0K6otBCutc%2Frjk3UycW%2FrzkeVb9OxDT6%2B9xl4OKRZUkjy4gsO961%2FW2Uvxwjx6yXyi1LkpU2UfUv4%2F6sn0fjqpOF7rrOf1r%2FQDKcWKXExQ5AqIkEYMZJ5LxOZFVaR%2FtWZkJFXbeuxbY9Z2xyXu5bggp%2BmPRXzLf0NHDcBoTCX1sz%2BJAuntBhvwlsFts%2F4F7ImuFUjT1A4LcldmWj8aVGgvJOmTa68o%2FdB00xmusW3iDC6YbV9n9Plxim0B7UR04Xl6nrfqP04KL%2FQ3dAwkp0GgRdbfIKfh%2Fhnz27sn0WutOe86WMbtz%2FUEfN9WgogAKTWWYwajrLBX9SaisQvVQBb%2Ba9YoYCoAERqoU2ZqaHThrN6xBNo3p3xduSgCd7cR8mVUv%2FlMcMjcEGEVVwn8X7lzbIMCb4VZnupzg5d%2Bpvh4S5Oo19j5j2ky2BHDpTd5Clwg7LO8LgzFtAh9IkT6e2FZooFWq1f%2FroB%2FWIwvRWiZ2FjfR13guFgYKeZms1jY1G6MLvYkI2h3b0jZDyWIr2IOVD5UuejGhIlW2XB9cKq9T37UQK6m2pPZCQdtEJ7abJaec6tQZsFAzCLhoXBBjqkATXMcPLYUU1hhknv5DmtbBDIRLVbeSc4WVd8dHrlTkD4JTVUwcGE59pK4qncT%2FL9U7bff9Hsy5aq0S6K%2BcbmE91sbMORtX6UMpLJ9OBsQq9V9cj8niDdH3WeYTNBsaluua7Vcr9Kvo%2FkMqJSbESZU2R%2BxhZyiQUSJWYDVeDHIId5q1FeO4jyntITkQH%2BfSzBr4IilGSVdbs4AEXctRy0BJbMNq5M&X-Amz-Signature=a300f085fa257acf4aac7fd16f3acc361261c2f00939c04999b5d512bf2d7433&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI65QAS4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCy7NtVyi5X%2FyMpmekZ4jXW1FKCuRDJ7%2FY7FNpYAAr5owIhAIQPyMJWr%2FVbGHkMf%2B1cyYmR6tpMHs0uxgRA3Zp%2BhgP6KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTh%2B11finXK%2B72tGUq3APBgxoTI0O3KIVG6Wj%2B7Bx3x2pycOFI5WCgI5L%2BrSUaxkcrrUQ0K6otBCutc%2Frjk3UycW%2FrzkeVb9OxDT6%2B9xl4OKRZUkjy4gsO961%2FW2Uvxwjx6yXyi1LkpU2UfUv4%2F6sn0fjqpOF7rrOf1r%2FQDKcWKXExQ5AqIkEYMZJ5LxOZFVaR%2FtWZkJFXbeuxbY9Z2xyXu5bggp%2BmPRXzLf0NHDcBoTCX1sz%2BJAuntBhvwlsFts%2F4F7ImuFUjT1A4LcldmWj8aVGgvJOmTa68o%2FdB00xmusW3iDC6YbV9n9Plxim0B7UR04Xl6nrfqP04KL%2FQ3dAwkp0GgRdbfIKfh%2Fhnz27sn0WutOe86WMbtz%2FUEfN9WgogAKTWWYwajrLBX9SaisQvVQBb%2Ba9YoYCoAERqoU2ZqaHThrN6xBNo3p3xduSgCd7cR8mVUv%2FlMcMjcEGEVVwn8X7lzbIMCb4VZnupzg5d%2Bpvh4S5Oo19j5j2ky2BHDpTd5Clwg7LO8LgzFtAh9IkT6e2FZooFWq1f%2FroB%2FWIwvRWiZ2FjfR13guFgYKeZms1jY1G6MLvYkI2h3b0jZDyWIr2IOVD5UuejGhIlW2XB9cKq9T37UQK6m2pPZCQdtEJ7abJaec6tQZsFAzCLhoXBBjqkATXMcPLYUU1hhknv5DmtbBDIRLVbeSc4WVd8dHrlTkD4JTVUwcGE59pK4qncT%2FL9U7bff9Hsy5aq0S6K%2BcbmE91sbMORtX6UMpLJ9OBsQq9V9cj8niDdH3WeYTNBsaluua7Vcr9Kvo%2FkMqJSbESZU2R%2BxhZyiQUSJWYDVeDHIId5q1FeO4jyntITkQH%2BfSzBr4IilGSVdbs4AEXctRy0BJbMNq5M&X-Amz-Signature=79b55d52fbf9976eac2344eaec3b9c35912f9afb95cac1e3b6ae138acda6b68d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI65QAS4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCy7NtVyi5X%2FyMpmekZ4jXW1FKCuRDJ7%2FY7FNpYAAr5owIhAIQPyMJWr%2FVbGHkMf%2B1cyYmR6tpMHs0uxgRA3Zp%2BhgP6KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTh%2B11finXK%2B72tGUq3APBgxoTI0O3KIVG6Wj%2B7Bx3x2pycOFI5WCgI5L%2BrSUaxkcrrUQ0K6otBCutc%2Frjk3UycW%2FrzkeVb9OxDT6%2B9xl4OKRZUkjy4gsO961%2FW2Uvxwjx6yXyi1LkpU2UfUv4%2F6sn0fjqpOF7rrOf1r%2FQDKcWKXExQ5AqIkEYMZJ5LxOZFVaR%2FtWZkJFXbeuxbY9Z2xyXu5bggp%2BmPRXzLf0NHDcBoTCX1sz%2BJAuntBhvwlsFts%2F4F7ImuFUjT1A4LcldmWj8aVGgvJOmTa68o%2FdB00xmusW3iDC6YbV9n9Plxim0B7UR04Xl6nrfqP04KL%2FQ3dAwkp0GgRdbfIKfh%2Fhnz27sn0WutOe86WMbtz%2FUEfN9WgogAKTWWYwajrLBX9SaisQvVQBb%2Ba9YoYCoAERqoU2ZqaHThrN6xBNo3p3xduSgCd7cR8mVUv%2FlMcMjcEGEVVwn8X7lzbIMCb4VZnupzg5d%2Bpvh4S5Oo19j5j2ky2BHDpTd5Clwg7LO8LgzFtAh9IkT6e2FZooFWq1f%2FroB%2FWIwvRWiZ2FjfR13guFgYKeZms1jY1G6MLvYkI2h3b0jZDyWIr2IOVD5UuejGhIlW2XB9cKq9T37UQK6m2pPZCQdtEJ7abJaec6tQZsFAzCLhoXBBjqkATXMcPLYUU1hhknv5DmtbBDIRLVbeSc4WVd8dHrlTkD4JTVUwcGE59pK4qncT%2FL9U7bff9Hsy5aq0S6K%2BcbmE91sbMORtX6UMpLJ9OBsQq9V9cj8niDdH3WeYTNBsaluua7Vcr9Kvo%2FkMqJSbESZU2R%2BxhZyiQUSJWYDVeDHIId5q1FeO4jyntITkQH%2BfSzBr4IilGSVdbs4AEXctRy0BJbMNq5M&X-Amz-Signature=a0f8c8cdc40397ceb518847bfca2930679449f9511cf3d70bf878c78641860fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI65QAS4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCy7NtVyi5X%2FyMpmekZ4jXW1FKCuRDJ7%2FY7FNpYAAr5owIhAIQPyMJWr%2FVbGHkMf%2B1cyYmR6tpMHs0uxgRA3Zp%2BhgP6KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTh%2B11finXK%2B72tGUq3APBgxoTI0O3KIVG6Wj%2B7Bx3x2pycOFI5WCgI5L%2BrSUaxkcrrUQ0K6otBCutc%2Frjk3UycW%2FrzkeVb9OxDT6%2B9xl4OKRZUkjy4gsO961%2FW2Uvxwjx6yXyi1LkpU2UfUv4%2F6sn0fjqpOF7rrOf1r%2FQDKcWKXExQ5AqIkEYMZJ5LxOZFVaR%2FtWZkJFXbeuxbY9Z2xyXu5bggp%2BmPRXzLf0NHDcBoTCX1sz%2BJAuntBhvwlsFts%2F4F7ImuFUjT1A4LcldmWj8aVGgvJOmTa68o%2FdB00xmusW3iDC6YbV9n9Plxim0B7UR04Xl6nrfqP04KL%2FQ3dAwkp0GgRdbfIKfh%2Fhnz27sn0WutOe86WMbtz%2FUEfN9WgogAKTWWYwajrLBX9SaisQvVQBb%2Ba9YoYCoAERqoU2ZqaHThrN6xBNo3p3xduSgCd7cR8mVUv%2FlMcMjcEGEVVwn8X7lzbIMCb4VZnupzg5d%2Bpvh4S5Oo19j5j2ky2BHDpTd5Clwg7LO8LgzFtAh9IkT6e2FZooFWq1f%2FroB%2FWIwvRWiZ2FjfR13guFgYKeZms1jY1G6MLvYkI2h3b0jZDyWIr2IOVD5UuejGhIlW2XB9cKq9T37UQK6m2pPZCQdtEJ7abJaec6tQZsFAzCLhoXBBjqkATXMcPLYUU1hhknv5DmtbBDIRLVbeSc4WVd8dHrlTkD4JTVUwcGE59pK4qncT%2FL9U7bff9Hsy5aq0S6K%2BcbmE91sbMORtX6UMpLJ9OBsQq9V9cj8niDdH3WeYTNBsaluua7Vcr9Kvo%2FkMqJSbESZU2R%2BxhZyiQUSJWYDVeDHIId5q1FeO4jyntITkQH%2BfSzBr4IilGSVdbs4AEXctRy0BJbMNq5M&X-Amz-Signature=8adb4302463533aa199aab6b489e918c9af5976d3294628baa3d129ae400e007&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI65QAS4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCy7NtVyi5X%2FyMpmekZ4jXW1FKCuRDJ7%2FY7FNpYAAr5owIhAIQPyMJWr%2FVbGHkMf%2B1cyYmR6tpMHs0uxgRA3Zp%2BhgP6KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTh%2B11finXK%2B72tGUq3APBgxoTI0O3KIVG6Wj%2B7Bx3x2pycOFI5WCgI5L%2BrSUaxkcrrUQ0K6otBCutc%2Frjk3UycW%2FrzkeVb9OxDT6%2B9xl4OKRZUkjy4gsO961%2FW2Uvxwjx6yXyi1LkpU2UfUv4%2F6sn0fjqpOF7rrOf1r%2FQDKcWKXExQ5AqIkEYMZJ5LxOZFVaR%2FtWZkJFXbeuxbY9Z2xyXu5bggp%2BmPRXzLf0NHDcBoTCX1sz%2BJAuntBhvwlsFts%2F4F7ImuFUjT1A4LcldmWj8aVGgvJOmTa68o%2FdB00xmusW3iDC6YbV9n9Plxim0B7UR04Xl6nrfqP04KL%2FQ3dAwkp0GgRdbfIKfh%2Fhnz27sn0WutOe86WMbtz%2FUEfN9WgogAKTWWYwajrLBX9SaisQvVQBb%2Ba9YoYCoAERqoU2ZqaHThrN6xBNo3p3xduSgCd7cR8mVUv%2FlMcMjcEGEVVwn8X7lzbIMCb4VZnupzg5d%2Bpvh4S5Oo19j5j2ky2BHDpTd5Clwg7LO8LgzFtAh9IkT6e2FZooFWq1f%2FroB%2FWIwvRWiZ2FjfR13guFgYKeZms1jY1G6MLvYkI2h3b0jZDyWIr2IOVD5UuejGhIlW2XB9cKq9T37UQK6m2pPZCQdtEJ7abJaec6tQZsFAzCLhoXBBjqkATXMcPLYUU1hhknv5DmtbBDIRLVbeSc4WVd8dHrlTkD4JTVUwcGE59pK4qncT%2FL9U7bff9Hsy5aq0S6K%2BcbmE91sbMORtX6UMpLJ9OBsQq9V9cj8niDdH3WeYTNBsaluua7Vcr9Kvo%2FkMqJSbESZU2R%2BxhZyiQUSJWYDVeDHIId5q1FeO4jyntITkQH%2BfSzBr4IilGSVdbs4AEXctRy0BJbMNq5M&X-Amz-Signature=49a3a569ab49d17490d92adf8b5277755734dc62e17c20e92cbbc072e247f9b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
