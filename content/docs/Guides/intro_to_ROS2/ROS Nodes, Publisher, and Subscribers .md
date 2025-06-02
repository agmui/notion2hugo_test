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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFHZTOXG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGc%2Bo%2FO%2FWYkWhpSv9Gnux%2F6kUuqkIibz47h%2FhsyMHrSAiEArJJQaImST9SnR86zbEvLCKqa4EHvAgCJ2p2ikZjwQsEqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1CL8zCCGLVZmW9GSrcA2ZdT3HpecmehYuHVWWhSuDJhzGL0xk3zasdtB4b7445gkhPINmwVSmT7yUb6fKWJqzJ7hCvVZMqifbGgZmV9Vo09w%2BfSucOz29DVDb%2B3DTYF%2FUNOoXgtvu7lqxocybBdcU519TEkHsq15xjYfbROjJ8RvWhFeFDgpnGdDQrrO9WHL6xYPT%2BcaIdaiuF8rAGRJgXKsFlVYmegi5z6N2RIR8otncn0FjWaKIGI6TUniyHofEL6Pk8cQW%2FMiYC8HRaZEHcjR3cHg8Ecrnpf8USGyCHf3R6YNtC5fKpWSUuRmQgBigkWSDAgghTRsGdCzFuNvvMlVq1fJqldWw5oj5gHAsexexTtERWfGW3YkHEp4IjLU%2FMEX7pj37Y1S4L1sNoK%2BajI%2BIyJV1IzX8cNR0cYgNYdVt3utUhwvTxCamBBnZ9dcB0kN%2FjakynyUdOJm5VLT60r7zvIA%2FJG0we5Vj9fIHvZl%2B%2FUyK4RFC%2FInwxxrMjhpyN%2FupZvWPluM4%2Bdh%2FrTlrIVsfsekHzk%2Ber5kJmLCxhluJMg8h7slFfDObKAnBxUq6QFmRbzH1HVNydEVAJXN6EHvvWVgeAgQIOPHUht5Q2xrsSZldLN08E3Rq5ZOgobhjGRmvjiFOGI3HRMIX%2B9sEGOqUB89Bd1PRxzFe0CHY9G8E3Js0QLiZSD62t4kENVCpNLZ2WNDc3%2F8XdXq5UCIv2dP363Asc4Ye222x1XrIvXfC3mKme8sHGUqkNUb1BWcwbO1jf20XsOcXZLwLl8E%2Bqa03AQAJYjUg%2F9c7P3SrAo1QJr444U%2Bwo3zUkmj%2FyYlQY5xD2SGOJtAHmw%2FCqh2zuLwpzn7UYxx2fyu3d2VpPalhUVRhZyoEj&X-Amz-Signature=869ae7a5b1db238c8036e5c7330c4f2100e1d12781b262a1286e2f99302c98eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFHZTOXG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGc%2Bo%2FO%2FWYkWhpSv9Gnux%2F6kUuqkIibz47h%2FhsyMHrSAiEArJJQaImST9SnR86zbEvLCKqa4EHvAgCJ2p2ikZjwQsEqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1CL8zCCGLVZmW9GSrcA2ZdT3HpecmehYuHVWWhSuDJhzGL0xk3zasdtB4b7445gkhPINmwVSmT7yUb6fKWJqzJ7hCvVZMqifbGgZmV9Vo09w%2BfSucOz29DVDb%2B3DTYF%2FUNOoXgtvu7lqxocybBdcU519TEkHsq15xjYfbROjJ8RvWhFeFDgpnGdDQrrO9WHL6xYPT%2BcaIdaiuF8rAGRJgXKsFlVYmegi5z6N2RIR8otncn0FjWaKIGI6TUniyHofEL6Pk8cQW%2FMiYC8HRaZEHcjR3cHg8Ecrnpf8USGyCHf3R6YNtC5fKpWSUuRmQgBigkWSDAgghTRsGdCzFuNvvMlVq1fJqldWw5oj5gHAsexexTtERWfGW3YkHEp4IjLU%2FMEX7pj37Y1S4L1sNoK%2BajI%2BIyJV1IzX8cNR0cYgNYdVt3utUhwvTxCamBBnZ9dcB0kN%2FjakynyUdOJm5VLT60r7zvIA%2FJG0we5Vj9fIHvZl%2B%2FUyK4RFC%2FInwxxrMjhpyN%2FupZvWPluM4%2Bdh%2FrTlrIVsfsekHzk%2Ber5kJmLCxhluJMg8h7slFfDObKAnBxUq6QFmRbzH1HVNydEVAJXN6EHvvWVgeAgQIOPHUht5Q2xrsSZldLN08E3Rq5ZOgobhjGRmvjiFOGI3HRMIX%2B9sEGOqUB89Bd1PRxzFe0CHY9G8E3Js0QLiZSD62t4kENVCpNLZ2WNDc3%2F8XdXq5UCIv2dP363Asc4Ye222x1XrIvXfC3mKme8sHGUqkNUb1BWcwbO1jf20XsOcXZLwLl8E%2Bqa03AQAJYjUg%2F9c7P3SrAo1QJr444U%2Bwo3zUkmj%2FyYlQY5xD2SGOJtAHmw%2FCqh2zuLwpzn7UYxx2fyu3d2VpPalhUVRhZyoEj&X-Amz-Signature=70fed95a9cb7cca1b127142241caa875b116ab70e3248a141e00d2e834df3c57&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFHZTOXG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGc%2Bo%2FO%2FWYkWhpSv9Gnux%2F6kUuqkIibz47h%2FhsyMHrSAiEArJJQaImST9SnR86zbEvLCKqa4EHvAgCJ2p2ikZjwQsEqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1CL8zCCGLVZmW9GSrcA2ZdT3HpecmehYuHVWWhSuDJhzGL0xk3zasdtB4b7445gkhPINmwVSmT7yUb6fKWJqzJ7hCvVZMqifbGgZmV9Vo09w%2BfSucOz29DVDb%2B3DTYF%2FUNOoXgtvu7lqxocybBdcU519TEkHsq15xjYfbROjJ8RvWhFeFDgpnGdDQrrO9WHL6xYPT%2BcaIdaiuF8rAGRJgXKsFlVYmegi5z6N2RIR8otncn0FjWaKIGI6TUniyHofEL6Pk8cQW%2FMiYC8HRaZEHcjR3cHg8Ecrnpf8USGyCHf3R6YNtC5fKpWSUuRmQgBigkWSDAgghTRsGdCzFuNvvMlVq1fJqldWw5oj5gHAsexexTtERWfGW3YkHEp4IjLU%2FMEX7pj37Y1S4L1sNoK%2BajI%2BIyJV1IzX8cNR0cYgNYdVt3utUhwvTxCamBBnZ9dcB0kN%2FjakynyUdOJm5VLT60r7zvIA%2FJG0we5Vj9fIHvZl%2B%2FUyK4RFC%2FInwxxrMjhpyN%2FupZvWPluM4%2Bdh%2FrTlrIVsfsekHzk%2Ber5kJmLCxhluJMg8h7slFfDObKAnBxUq6QFmRbzH1HVNydEVAJXN6EHvvWVgeAgQIOPHUht5Q2xrsSZldLN08E3Rq5ZOgobhjGRmvjiFOGI3HRMIX%2B9sEGOqUB89Bd1PRxzFe0CHY9G8E3Js0QLiZSD62t4kENVCpNLZ2WNDc3%2F8XdXq5UCIv2dP363Asc4Ye222x1XrIvXfC3mKme8sHGUqkNUb1BWcwbO1jf20XsOcXZLwLl8E%2Bqa03AQAJYjUg%2F9c7P3SrAo1QJr444U%2Bwo3zUkmj%2FyYlQY5xD2SGOJtAHmw%2FCqh2zuLwpzn7UYxx2fyu3d2VpPalhUVRhZyoEj&X-Amz-Signature=eaf8e5849f9ad4d9f464fb196ef0641b7e23814343e9dbf94f6277ac06f624d4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFHZTOXG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGc%2Bo%2FO%2FWYkWhpSv9Gnux%2F6kUuqkIibz47h%2FhsyMHrSAiEArJJQaImST9SnR86zbEvLCKqa4EHvAgCJ2p2ikZjwQsEqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1CL8zCCGLVZmW9GSrcA2ZdT3HpecmehYuHVWWhSuDJhzGL0xk3zasdtB4b7445gkhPINmwVSmT7yUb6fKWJqzJ7hCvVZMqifbGgZmV9Vo09w%2BfSucOz29DVDb%2B3DTYF%2FUNOoXgtvu7lqxocybBdcU519TEkHsq15xjYfbROjJ8RvWhFeFDgpnGdDQrrO9WHL6xYPT%2BcaIdaiuF8rAGRJgXKsFlVYmegi5z6N2RIR8otncn0FjWaKIGI6TUniyHofEL6Pk8cQW%2FMiYC8HRaZEHcjR3cHg8Ecrnpf8USGyCHf3R6YNtC5fKpWSUuRmQgBigkWSDAgghTRsGdCzFuNvvMlVq1fJqldWw5oj5gHAsexexTtERWfGW3YkHEp4IjLU%2FMEX7pj37Y1S4L1sNoK%2BajI%2BIyJV1IzX8cNR0cYgNYdVt3utUhwvTxCamBBnZ9dcB0kN%2FjakynyUdOJm5VLT60r7zvIA%2FJG0we5Vj9fIHvZl%2B%2FUyK4RFC%2FInwxxrMjhpyN%2FupZvWPluM4%2Bdh%2FrTlrIVsfsekHzk%2Ber5kJmLCxhluJMg8h7slFfDObKAnBxUq6QFmRbzH1HVNydEVAJXN6EHvvWVgeAgQIOPHUht5Q2xrsSZldLN08E3Rq5ZOgobhjGRmvjiFOGI3HRMIX%2B9sEGOqUB89Bd1PRxzFe0CHY9G8E3Js0QLiZSD62t4kENVCpNLZ2WNDc3%2F8XdXq5UCIv2dP363Asc4Ye222x1XrIvXfC3mKme8sHGUqkNUb1BWcwbO1jf20XsOcXZLwLl8E%2Bqa03AQAJYjUg%2F9c7P3SrAo1QJr444U%2Bwo3zUkmj%2FyYlQY5xD2SGOJtAHmw%2FCqh2zuLwpzn7UYxx2fyu3d2VpPalhUVRhZyoEj&X-Amz-Signature=eced6ec0d7da8949fde0aa8020813de33f26035ebeae9c9a5a1945256ac18c21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFHZTOXG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGc%2Bo%2FO%2FWYkWhpSv9Gnux%2F6kUuqkIibz47h%2FhsyMHrSAiEArJJQaImST9SnR86zbEvLCKqa4EHvAgCJ2p2ikZjwQsEqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1CL8zCCGLVZmW9GSrcA2ZdT3HpecmehYuHVWWhSuDJhzGL0xk3zasdtB4b7445gkhPINmwVSmT7yUb6fKWJqzJ7hCvVZMqifbGgZmV9Vo09w%2BfSucOz29DVDb%2B3DTYF%2FUNOoXgtvu7lqxocybBdcU519TEkHsq15xjYfbROjJ8RvWhFeFDgpnGdDQrrO9WHL6xYPT%2BcaIdaiuF8rAGRJgXKsFlVYmegi5z6N2RIR8otncn0FjWaKIGI6TUniyHofEL6Pk8cQW%2FMiYC8HRaZEHcjR3cHg8Ecrnpf8USGyCHf3R6YNtC5fKpWSUuRmQgBigkWSDAgghTRsGdCzFuNvvMlVq1fJqldWw5oj5gHAsexexTtERWfGW3YkHEp4IjLU%2FMEX7pj37Y1S4L1sNoK%2BajI%2BIyJV1IzX8cNR0cYgNYdVt3utUhwvTxCamBBnZ9dcB0kN%2FjakynyUdOJm5VLT60r7zvIA%2FJG0we5Vj9fIHvZl%2B%2FUyK4RFC%2FInwxxrMjhpyN%2FupZvWPluM4%2Bdh%2FrTlrIVsfsekHzk%2Ber5kJmLCxhluJMg8h7slFfDObKAnBxUq6QFmRbzH1HVNydEVAJXN6EHvvWVgeAgQIOPHUht5Q2xrsSZldLN08E3Rq5ZOgobhjGRmvjiFOGI3HRMIX%2B9sEGOqUB89Bd1PRxzFe0CHY9G8E3Js0QLiZSD62t4kENVCpNLZ2WNDc3%2F8XdXq5UCIv2dP363Asc4Ye222x1XrIvXfC3mKme8sHGUqkNUb1BWcwbO1jf20XsOcXZLwLl8E%2Bqa03AQAJYjUg%2F9c7P3SrAo1QJr444U%2Bwo3zUkmj%2FyYlQY5xD2SGOJtAHmw%2FCqh2zuLwpzn7UYxx2fyu3d2VpPalhUVRhZyoEj&X-Amz-Signature=e63dc6bf999303d8de54c030c853bfa572d281178409e4fdeac607a837315a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFHZTOXG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGc%2Bo%2FO%2FWYkWhpSv9Gnux%2F6kUuqkIibz47h%2FhsyMHrSAiEArJJQaImST9SnR86zbEvLCKqa4EHvAgCJ2p2ikZjwQsEqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1CL8zCCGLVZmW9GSrcA2ZdT3HpecmehYuHVWWhSuDJhzGL0xk3zasdtB4b7445gkhPINmwVSmT7yUb6fKWJqzJ7hCvVZMqifbGgZmV9Vo09w%2BfSucOz29DVDb%2B3DTYF%2FUNOoXgtvu7lqxocybBdcU519TEkHsq15xjYfbROjJ8RvWhFeFDgpnGdDQrrO9WHL6xYPT%2BcaIdaiuF8rAGRJgXKsFlVYmegi5z6N2RIR8otncn0FjWaKIGI6TUniyHofEL6Pk8cQW%2FMiYC8HRaZEHcjR3cHg8Ecrnpf8USGyCHf3R6YNtC5fKpWSUuRmQgBigkWSDAgghTRsGdCzFuNvvMlVq1fJqldWw5oj5gHAsexexTtERWfGW3YkHEp4IjLU%2FMEX7pj37Y1S4L1sNoK%2BajI%2BIyJV1IzX8cNR0cYgNYdVt3utUhwvTxCamBBnZ9dcB0kN%2FjakynyUdOJm5VLT60r7zvIA%2FJG0we5Vj9fIHvZl%2B%2FUyK4RFC%2FInwxxrMjhpyN%2FupZvWPluM4%2Bdh%2FrTlrIVsfsekHzk%2Ber5kJmLCxhluJMg8h7slFfDObKAnBxUq6QFmRbzH1HVNydEVAJXN6EHvvWVgeAgQIOPHUht5Q2xrsSZldLN08E3Rq5ZOgobhjGRmvjiFOGI3HRMIX%2B9sEGOqUB89Bd1PRxzFe0CHY9G8E3Js0QLiZSD62t4kENVCpNLZ2WNDc3%2F8XdXq5UCIv2dP363Asc4Ye222x1XrIvXfC3mKme8sHGUqkNUb1BWcwbO1jf20XsOcXZLwLl8E%2Bqa03AQAJYjUg%2F9c7P3SrAo1QJr444U%2Bwo3zUkmj%2FyYlQY5xD2SGOJtAHmw%2FCqh2zuLwpzn7UYxx2fyu3d2VpPalhUVRhZyoEj&X-Amz-Signature=5da3fbe40e8ab7d634d7d729c22877c57f87e87c7d6b6738eb56e44ab51465b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFHZTOXG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGc%2Bo%2FO%2FWYkWhpSv9Gnux%2F6kUuqkIibz47h%2FhsyMHrSAiEArJJQaImST9SnR86zbEvLCKqa4EHvAgCJ2p2ikZjwQsEqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1CL8zCCGLVZmW9GSrcA2ZdT3HpecmehYuHVWWhSuDJhzGL0xk3zasdtB4b7445gkhPINmwVSmT7yUb6fKWJqzJ7hCvVZMqifbGgZmV9Vo09w%2BfSucOz29DVDb%2B3DTYF%2FUNOoXgtvu7lqxocybBdcU519TEkHsq15xjYfbROjJ8RvWhFeFDgpnGdDQrrO9WHL6xYPT%2BcaIdaiuF8rAGRJgXKsFlVYmegi5z6N2RIR8otncn0FjWaKIGI6TUniyHofEL6Pk8cQW%2FMiYC8HRaZEHcjR3cHg8Ecrnpf8USGyCHf3R6YNtC5fKpWSUuRmQgBigkWSDAgghTRsGdCzFuNvvMlVq1fJqldWw5oj5gHAsexexTtERWfGW3YkHEp4IjLU%2FMEX7pj37Y1S4L1sNoK%2BajI%2BIyJV1IzX8cNR0cYgNYdVt3utUhwvTxCamBBnZ9dcB0kN%2FjakynyUdOJm5VLT60r7zvIA%2FJG0we5Vj9fIHvZl%2B%2FUyK4RFC%2FInwxxrMjhpyN%2FupZvWPluM4%2Bdh%2FrTlrIVsfsekHzk%2Ber5kJmLCxhluJMg8h7slFfDObKAnBxUq6QFmRbzH1HVNydEVAJXN6EHvvWVgeAgQIOPHUht5Q2xrsSZldLN08E3Rq5ZOgobhjGRmvjiFOGI3HRMIX%2B9sEGOqUB89Bd1PRxzFe0CHY9G8E3Js0QLiZSD62t4kENVCpNLZ2WNDc3%2F8XdXq5UCIv2dP363Asc4Ye222x1XrIvXfC3mKme8sHGUqkNUb1BWcwbO1jf20XsOcXZLwLl8E%2Bqa03AQAJYjUg%2F9c7P3SrAo1QJr444U%2Bwo3zUkmj%2FyYlQY5xD2SGOJtAHmw%2FCqh2zuLwpzn7UYxx2fyu3d2VpPalhUVRhZyoEj&X-Amz-Signature=53fc3e748314885dca195add5416e71b1068603042553616af12f49d8ab66824&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFHZTOXG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGc%2Bo%2FO%2FWYkWhpSv9Gnux%2F6kUuqkIibz47h%2FhsyMHrSAiEArJJQaImST9SnR86zbEvLCKqa4EHvAgCJ2p2ikZjwQsEqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1CL8zCCGLVZmW9GSrcA2ZdT3HpecmehYuHVWWhSuDJhzGL0xk3zasdtB4b7445gkhPINmwVSmT7yUb6fKWJqzJ7hCvVZMqifbGgZmV9Vo09w%2BfSucOz29DVDb%2B3DTYF%2FUNOoXgtvu7lqxocybBdcU519TEkHsq15xjYfbROjJ8RvWhFeFDgpnGdDQrrO9WHL6xYPT%2BcaIdaiuF8rAGRJgXKsFlVYmegi5z6N2RIR8otncn0FjWaKIGI6TUniyHofEL6Pk8cQW%2FMiYC8HRaZEHcjR3cHg8Ecrnpf8USGyCHf3R6YNtC5fKpWSUuRmQgBigkWSDAgghTRsGdCzFuNvvMlVq1fJqldWw5oj5gHAsexexTtERWfGW3YkHEp4IjLU%2FMEX7pj37Y1S4L1sNoK%2BajI%2BIyJV1IzX8cNR0cYgNYdVt3utUhwvTxCamBBnZ9dcB0kN%2FjakynyUdOJm5VLT60r7zvIA%2FJG0we5Vj9fIHvZl%2B%2FUyK4RFC%2FInwxxrMjhpyN%2FupZvWPluM4%2Bdh%2FrTlrIVsfsekHzk%2Ber5kJmLCxhluJMg8h7slFfDObKAnBxUq6QFmRbzH1HVNydEVAJXN6EHvvWVgeAgQIOPHUht5Q2xrsSZldLN08E3Rq5ZOgobhjGRmvjiFOGI3HRMIX%2B9sEGOqUB89Bd1PRxzFe0CHY9G8E3Js0QLiZSD62t4kENVCpNLZ2WNDc3%2F8XdXq5UCIv2dP363Asc4Ye222x1XrIvXfC3mKme8sHGUqkNUb1BWcwbO1jf20XsOcXZLwLl8E%2Bqa03AQAJYjUg%2F9c7P3SrAo1QJr444U%2Bwo3zUkmj%2FyYlQY5xD2SGOJtAHmw%2FCqh2zuLwpzn7UYxx2fyu3d2VpPalhUVRhZyoEj&X-Amz-Signature=ebe7e748b2431eb8f5a8ed5fc4fecd711ea4f67a4e48977d45da8b98381a4c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
