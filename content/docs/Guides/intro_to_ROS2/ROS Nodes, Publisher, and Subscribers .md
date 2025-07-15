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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWPZXSE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCuSfaFjGbQ%2FNN91acdj4APNZnN79MPAPGiqyRsSujRSwIhANh8kn8uh3%2B8YfapkDOzvGaPC5zX7t8dq%2FOlOgNGd7F9Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwCwdLnRHx7cN43Udoq3APOI%2FLarJjn6us9JBCJ8nj0s5tERDdOW3EZ%2F1cXftp5vhUf62IfMI9R4JNRMr6TZCPkQcuFfiOAUFB4GJPRYgOnn%2FPnVn141s8AD2wVUBE9kCcD56eR2fgHGPdZLDl3A4yy2n%2F0ZxxIYfLUdupftI1%2FjFQ7H1My2OiM3Z1UiWLSIgXU7YaZu%2FCjmM2mFFNNpyoZGOhD1WjUCsmk33zg%2FqYzg7NBv1p8sKvhwomzhDp6FupfEL3T%2FX1sYInJ4emJ3BQsGXMbcLWtrciUR6h2PJHkkNW1TAGL0ULKoCRHFJL7aUWTWHFCxRgjf7vwl16BO7zC0TC5s7boL0HBWdSw%2BlnyilSetbCdkY78dPUS7GuO6WGVT80j4Tjo%2B58YImbydnlA57OFjheFGBE6HfhitFI2posmv0flwvusNa2t7gakNw58cWUXuqV%2Fr%2BjDx7zpxLJUjvL05OZbyA1MQFESaiaTtr4VAs%2FL1wjUGDB6ek6%2FY%2FWLib3tIgfddLX04LCC3BQgFERyuV1hgtH0xgzDr0yFQvqUUcOaMlmK8dsK6XKcwfqrrvPDQbWHU06vRwSIfu5zClfLWVNrH%2F6bI8f%2F5Q1vGN2fu6oDjOW2ro4SXyeerDIhp6VyrWFM%2BvJLZTCtpNbDBjqkAQahxir4OBXtrbeoNqkUcEmVsM9fU6krtaZ5%2F5Ip7UIHMRA6Uq0Zc88U5ldgGyFdpBLNLgS5XnscUllsu0n81fxPwvvFvTv9pxEJHX66lyA5jXoGOdWp%2Ff4b415aD1FjECAeOst%2Ba86kf01%2B5u70tjKuo0phK%2BAlev%2F4PMLCzSOyxQfsGzgfXS2PiNmh%2Fq6Nr13IXLRHh0sRs6qztrnefzSvCa67&X-Amz-Signature=57ed2509905d47136264eb560eeb3d1a2d09d216f647697b60ba87560594e315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWPZXSE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCuSfaFjGbQ%2FNN91acdj4APNZnN79MPAPGiqyRsSujRSwIhANh8kn8uh3%2B8YfapkDOzvGaPC5zX7t8dq%2FOlOgNGd7F9Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwCwdLnRHx7cN43Udoq3APOI%2FLarJjn6us9JBCJ8nj0s5tERDdOW3EZ%2F1cXftp5vhUf62IfMI9R4JNRMr6TZCPkQcuFfiOAUFB4GJPRYgOnn%2FPnVn141s8AD2wVUBE9kCcD56eR2fgHGPdZLDl3A4yy2n%2F0ZxxIYfLUdupftI1%2FjFQ7H1My2OiM3Z1UiWLSIgXU7YaZu%2FCjmM2mFFNNpyoZGOhD1WjUCsmk33zg%2FqYzg7NBv1p8sKvhwomzhDp6FupfEL3T%2FX1sYInJ4emJ3BQsGXMbcLWtrciUR6h2PJHkkNW1TAGL0ULKoCRHFJL7aUWTWHFCxRgjf7vwl16BO7zC0TC5s7boL0HBWdSw%2BlnyilSetbCdkY78dPUS7GuO6WGVT80j4Tjo%2B58YImbydnlA57OFjheFGBE6HfhitFI2posmv0flwvusNa2t7gakNw58cWUXuqV%2Fr%2BjDx7zpxLJUjvL05OZbyA1MQFESaiaTtr4VAs%2FL1wjUGDB6ek6%2FY%2FWLib3tIgfddLX04LCC3BQgFERyuV1hgtH0xgzDr0yFQvqUUcOaMlmK8dsK6XKcwfqrrvPDQbWHU06vRwSIfu5zClfLWVNrH%2F6bI8f%2F5Q1vGN2fu6oDjOW2ro4SXyeerDIhp6VyrWFM%2BvJLZTCtpNbDBjqkAQahxir4OBXtrbeoNqkUcEmVsM9fU6krtaZ5%2F5Ip7UIHMRA6Uq0Zc88U5ldgGyFdpBLNLgS5XnscUllsu0n81fxPwvvFvTv9pxEJHX66lyA5jXoGOdWp%2Ff4b415aD1FjECAeOst%2Ba86kf01%2B5u70tjKuo0phK%2BAlev%2F4PMLCzSOyxQfsGzgfXS2PiNmh%2Fq6Nr13IXLRHh0sRs6qztrnefzSvCa67&X-Amz-Signature=0a2465d00cf4fe0c6ed85630b427b07d1d9fd0e1ea402930090eb80540405594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWPZXSE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCuSfaFjGbQ%2FNN91acdj4APNZnN79MPAPGiqyRsSujRSwIhANh8kn8uh3%2B8YfapkDOzvGaPC5zX7t8dq%2FOlOgNGd7F9Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwCwdLnRHx7cN43Udoq3APOI%2FLarJjn6us9JBCJ8nj0s5tERDdOW3EZ%2F1cXftp5vhUf62IfMI9R4JNRMr6TZCPkQcuFfiOAUFB4GJPRYgOnn%2FPnVn141s8AD2wVUBE9kCcD56eR2fgHGPdZLDl3A4yy2n%2F0ZxxIYfLUdupftI1%2FjFQ7H1My2OiM3Z1UiWLSIgXU7YaZu%2FCjmM2mFFNNpyoZGOhD1WjUCsmk33zg%2FqYzg7NBv1p8sKvhwomzhDp6FupfEL3T%2FX1sYInJ4emJ3BQsGXMbcLWtrciUR6h2PJHkkNW1TAGL0ULKoCRHFJL7aUWTWHFCxRgjf7vwl16BO7zC0TC5s7boL0HBWdSw%2BlnyilSetbCdkY78dPUS7GuO6WGVT80j4Tjo%2B58YImbydnlA57OFjheFGBE6HfhitFI2posmv0flwvusNa2t7gakNw58cWUXuqV%2Fr%2BjDx7zpxLJUjvL05OZbyA1MQFESaiaTtr4VAs%2FL1wjUGDB6ek6%2FY%2FWLib3tIgfddLX04LCC3BQgFERyuV1hgtH0xgzDr0yFQvqUUcOaMlmK8dsK6XKcwfqrrvPDQbWHU06vRwSIfu5zClfLWVNrH%2F6bI8f%2F5Q1vGN2fu6oDjOW2ro4SXyeerDIhp6VyrWFM%2BvJLZTCtpNbDBjqkAQahxir4OBXtrbeoNqkUcEmVsM9fU6krtaZ5%2F5Ip7UIHMRA6Uq0Zc88U5ldgGyFdpBLNLgS5XnscUllsu0n81fxPwvvFvTv9pxEJHX66lyA5jXoGOdWp%2Ff4b415aD1FjECAeOst%2Ba86kf01%2B5u70tjKuo0phK%2BAlev%2F4PMLCzSOyxQfsGzgfXS2PiNmh%2Fq6Nr13IXLRHh0sRs6qztrnefzSvCa67&X-Amz-Signature=9ae63be5806f457c73022430b0527a7ed461c1f7523d138ae5daebac105eff0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWPZXSE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCuSfaFjGbQ%2FNN91acdj4APNZnN79MPAPGiqyRsSujRSwIhANh8kn8uh3%2B8YfapkDOzvGaPC5zX7t8dq%2FOlOgNGd7F9Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwCwdLnRHx7cN43Udoq3APOI%2FLarJjn6us9JBCJ8nj0s5tERDdOW3EZ%2F1cXftp5vhUf62IfMI9R4JNRMr6TZCPkQcuFfiOAUFB4GJPRYgOnn%2FPnVn141s8AD2wVUBE9kCcD56eR2fgHGPdZLDl3A4yy2n%2F0ZxxIYfLUdupftI1%2FjFQ7H1My2OiM3Z1UiWLSIgXU7YaZu%2FCjmM2mFFNNpyoZGOhD1WjUCsmk33zg%2FqYzg7NBv1p8sKvhwomzhDp6FupfEL3T%2FX1sYInJ4emJ3BQsGXMbcLWtrciUR6h2PJHkkNW1TAGL0ULKoCRHFJL7aUWTWHFCxRgjf7vwl16BO7zC0TC5s7boL0HBWdSw%2BlnyilSetbCdkY78dPUS7GuO6WGVT80j4Tjo%2B58YImbydnlA57OFjheFGBE6HfhitFI2posmv0flwvusNa2t7gakNw58cWUXuqV%2Fr%2BjDx7zpxLJUjvL05OZbyA1MQFESaiaTtr4VAs%2FL1wjUGDB6ek6%2FY%2FWLib3tIgfddLX04LCC3BQgFERyuV1hgtH0xgzDr0yFQvqUUcOaMlmK8dsK6XKcwfqrrvPDQbWHU06vRwSIfu5zClfLWVNrH%2F6bI8f%2F5Q1vGN2fu6oDjOW2ro4SXyeerDIhp6VyrWFM%2BvJLZTCtpNbDBjqkAQahxir4OBXtrbeoNqkUcEmVsM9fU6krtaZ5%2F5Ip7UIHMRA6Uq0Zc88U5ldgGyFdpBLNLgS5XnscUllsu0n81fxPwvvFvTv9pxEJHX66lyA5jXoGOdWp%2Ff4b415aD1FjECAeOst%2Ba86kf01%2B5u70tjKuo0phK%2BAlev%2F4PMLCzSOyxQfsGzgfXS2PiNmh%2Fq6Nr13IXLRHh0sRs6qztrnefzSvCa67&X-Amz-Signature=4e410aa5eb3607f93fb75b229c210e6292c0ad83af179dcda36cf9dbf202492f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWPZXSE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCuSfaFjGbQ%2FNN91acdj4APNZnN79MPAPGiqyRsSujRSwIhANh8kn8uh3%2B8YfapkDOzvGaPC5zX7t8dq%2FOlOgNGd7F9Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwCwdLnRHx7cN43Udoq3APOI%2FLarJjn6us9JBCJ8nj0s5tERDdOW3EZ%2F1cXftp5vhUf62IfMI9R4JNRMr6TZCPkQcuFfiOAUFB4GJPRYgOnn%2FPnVn141s8AD2wVUBE9kCcD56eR2fgHGPdZLDl3A4yy2n%2F0ZxxIYfLUdupftI1%2FjFQ7H1My2OiM3Z1UiWLSIgXU7YaZu%2FCjmM2mFFNNpyoZGOhD1WjUCsmk33zg%2FqYzg7NBv1p8sKvhwomzhDp6FupfEL3T%2FX1sYInJ4emJ3BQsGXMbcLWtrciUR6h2PJHkkNW1TAGL0ULKoCRHFJL7aUWTWHFCxRgjf7vwl16BO7zC0TC5s7boL0HBWdSw%2BlnyilSetbCdkY78dPUS7GuO6WGVT80j4Tjo%2B58YImbydnlA57OFjheFGBE6HfhitFI2posmv0flwvusNa2t7gakNw58cWUXuqV%2Fr%2BjDx7zpxLJUjvL05OZbyA1MQFESaiaTtr4VAs%2FL1wjUGDB6ek6%2FY%2FWLib3tIgfddLX04LCC3BQgFERyuV1hgtH0xgzDr0yFQvqUUcOaMlmK8dsK6XKcwfqrrvPDQbWHU06vRwSIfu5zClfLWVNrH%2F6bI8f%2F5Q1vGN2fu6oDjOW2ro4SXyeerDIhp6VyrWFM%2BvJLZTCtpNbDBjqkAQahxir4OBXtrbeoNqkUcEmVsM9fU6krtaZ5%2F5Ip7UIHMRA6Uq0Zc88U5ldgGyFdpBLNLgS5XnscUllsu0n81fxPwvvFvTv9pxEJHX66lyA5jXoGOdWp%2Ff4b415aD1FjECAeOst%2Ba86kf01%2B5u70tjKuo0phK%2BAlev%2F4PMLCzSOyxQfsGzgfXS2PiNmh%2Fq6Nr13IXLRHh0sRs6qztrnefzSvCa67&X-Amz-Signature=f463b08a8b21130a066bc192d8794bd2ef615ca42a6f5fe86a0ebe7039f381fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWPZXSE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCuSfaFjGbQ%2FNN91acdj4APNZnN79MPAPGiqyRsSujRSwIhANh8kn8uh3%2B8YfapkDOzvGaPC5zX7t8dq%2FOlOgNGd7F9Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwCwdLnRHx7cN43Udoq3APOI%2FLarJjn6us9JBCJ8nj0s5tERDdOW3EZ%2F1cXftp5vhUf62IfMI9R4JNRMr6TZCPkQcuFfiOAUFB4GJPRYgOnn%2FPnVn141s8AD2wVUBE9kCcD56eR2fgHGPdZLDl3A4yy2n%2F0ZxxIYfLUdupftI1%2FjFQ7H1My2OiM3Z1UiWLSIgXU7YaZu%2FCjmM2mFFNNpyoZGOhD1WjUCsmk33zg%2FqYzg7NBv1p8sKvhwomzhDp6FupfEL3T%2FX1sYInJ4emJ3BQsGXMbcLWtrciUR6h2PJHkkNW1TAGL0ULKoCRHFJL7aUWTWHFCxRgjf7vwl16BO7zC0TC5s7boL0HBWdSw%2BlnyilSetbCdkY78dPUS7GuO6WGVT80j4Tjo%2B58YImbydnlA57OFjheFGBE6HfhitFI2posmv0flwvusNa2t7gakNw58cWUXuqV%2Fr%2BjDx7zpxLJUjvL05OZbyA1MQFESaiaTtr4VAs%2FL1wjUGDB6ek6%2FY%2FWLib3tIgfddLX04LCC3BQgFERyuV1hgtH0xgzDr0yFQvqUUcOaMlmK8dsK6XKcwfqrrvPDQbWHU06vRwSIfu5zClfLWVNrH%2F6bI8f%2F5Q1vGN2fu6oDjOW2ro4SXyeerDIhp6VyrWFM%2BvJLZTCtpNbDBjqkAQahxir4OBXtrbeoNqkUcEmVsM9fU6krtaZ5%2F5Ip7UIHMRA6Uq0Zc88U5ldgGyFdpBLNLgS5XnscUllsu0n81fxPwvvFvTv9pxEJHX66lyA5jXoGOdWp%2Ff4b415aD1FjECAeOst%2Ba86kf01%2B5u70tjKuo0phK%2BAlev%2F4PMLCzSOyxQfsGzgfXS2PiNmh%2Fq6Nr13IXLRHh0sRs6qztrnefzSvCa67&X-Amz-Signature=8dbd9377f797642196c06c5d047e34ff5362250b594587d0c7e19af0c3a70272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWPZXSE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCuSfaFjGbQ%2FNN91acdj4APNZnN79MPAPGiqyRsSujRSwIhANh8kn8uh3%2B8YfapkDOzvGaPC5zX7t8dq%2FOlOgNGd7F9Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwCwdLnRHx7cN43Udoq3APOI%2FLarJjn6us9JBCJ8nj0s5tERDdOW3EZ%2F1cXftp5vhUf62IfMI9R4JNRMr6TZCPkQcuFfiOAUFB4GJPRYgOnn%2FPnVn141s8AD2wVUBE9kCcD56eR2fgHGPdZLDl3A4yy2n%2F0ZxxIYfLUdupftI1%2FjFQ7H1My2OiM3Z1UiWLSIgXU7YaZu%2FCjmM2mFFNNpyoZGOhD1WjUCsmk33zg%2FqYzg7NBv1p8sKvhwomzhDp6FupfEL3T%2FX1sYInJ4emJ3BQsGXMbcLWtrciUR6h2PJHkkNW1TAGL0ULKoCRHFJL7aUWTWHFCxRgjf7vwl16BO7zC0TC5s7boL0HBWdSw%2BlnyilSetbCdkY78dPUS7GuO6WGVT80j4Tjo%2B58YImbydnlA57OFjheFGBE6HfhitFI2posmv0flwvusNa2t7gakNw58cWUXuqV%2Fr%2BjDx7zpxLJUjvL05OZbyA1MQFESaiaTtr4VAs%2FL1wjUGDB6ek6%2FY%2FWLib3tIgfddLX04LCC3BQgFERyuV1hgtH0xgzDr0yFQvqUUcOaMlmK8dsK6XKcwfqrrvPDQbWHU06vRwSIfu5zClfLWVNrH%2F6bI8f%2F5Q1vGN2fu6oDjOW2ro4SXyeerDIhp6VyrWFM%2BvJLZTCtpNbDBjqkAQahxir4OBXtrbeoNqkUcEmVsM9fU6krtaZ5%2F5Ip7UIHMRA6Uq0Zc88U5ldgGyFdpBLNLgS5XnscUllsu0n81fxPwvvFvTv9pxEJHX66lyA5jXoGOdWp%2Ff4b415aD1FjECAeOst%2Ba86kf01%2B5u70tjKuo0phK%2BAlev%2F4PMLCzSOyxQfsGzgfXS2PiNmh%2Fq6Nr13IXLRHh0sRs6qztrnefzSvCa67&X-Amz-Signature=ec3bcd3a2dea2d359af4bb346197354f3bf4cbced8f5a425f3ca84624fdc0b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWPZXSE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCuSfaFjGbQ%2FNN91acdj4APNZnN79MPAPGiqyRsSujRSwIhANh8kn8uh3%2B8YfapkDOzvGaPC5zX7t8dq%2FOlOgNGd7F9Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwCwdLnRHx7cN43Udoq3APOI%2FLarJjn6us9JBCJ8nj0s5tERDdOW3EZ%2F1cXftp5vhUf62IfMI9R4JNRMr6TZCPkQcuFfiOAUFB4GJPRYgOnn%2FPnVn141s8AD2wVUBE9kCcD56eR2fgHGPdZLDl3A4yy2n%2F0ZxxIYfLUdupftI1%2FjFQ7H1My2OiM3Z1UiWLSIgXU7YaZu%2FCjmM2mFFNNpyoZGOhD1WjUCsmk33zg%2FqYzg7NBv1p8sKvhwomzhDp6FupfEL3T%2FX1sYInJ4emJ3BQsGXMbcLWtrciUR6h2PJHkkNW1TAGL0ULKoCRHFJL7aUWTWHFCxRgjf7vwl16BO7zC0TC5s7boL0HBWdSw%2BlnyilSetbCdkY78dPUS7GuO6WGVT80j4Tjo%2B58YImbydnlA57OFjheFGBE6HfhitFI2posmv0flwvusNa2t7gakNw58cWUXuqV%2Fr%2BjDx7zpxLJUjvL05OZbyA1MQFESaiaTtr4VAs%2FL1wjUGDB6ek6%2FY%2FWLib3tIgfddLX04LCC3BQgFERyuV1hgtH0xgzDr0yFQvqUUcOaMlmK8dsK6XKcwfqrrvPDQbWHU06vRwSIfu5zClfLWVNrH%2F6bI8f%2F5Q1vGN2fu6oDjOW2ro4SXyeerDIhp6VyrWFM%2BvJLZTCtpNbDBjqkAQahxir4OBXtrbeoNqkUcEmVsM9fU6krtaZ5%2F5Ip7UIHMRA6Uq0Zc88U5ldgGyFdpBLNLgS5XnscUllsu0n81fxPwvvFvTv9pxEJHX66lyA5jXoGOdWp%2Ff4b415aD1FjECAeOst%2Ba86kf01%2B5u70tjKuo0phK%2BAlev%2F4PMLCzSOyxQfsGzgfXS2PiNmh%2Fq6Nr13IXLRHh0sRs6qztrnefzSvCa67&X-Amz-Signature=ef74cc2a001b2b02fb6ba1fb9aba92c59584fcb37291e5d24311caf4e746638a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
