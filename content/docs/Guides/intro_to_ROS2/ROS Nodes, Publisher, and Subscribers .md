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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSC3TXR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2BUec3IRgrNBT8bxO%2BNZ%2BLaZsO7Hz8N7wLzeA0OaOTeQIhAML1FLMGWPWJzSurNrvYFkZzfKB%2FfpDGGxAUR0xvOf2OKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTU2zIECngSaF1a0Aq3AOgPlpjMF0zjmWmMTF%2FMbcH2UUHgqFC8PR4m69NJev3BxI%2Bn4JZLG%2FFTO1U9u%2Fx%2BWqWP2GnuYC9ut4ZH9XfDsuxBpMadpbR0gbEMCka%2Bv0%2FyiHQKf%2B28sGORJRl6w9v95rzUFnvlyGQT5UzcuQjokvJ4RYf6XDduvbSUijFKeKGHWsjneIxnqfhI2rufz8RJ6ov3sRfYcIRG%2BC1LSDX7RNww8oWLkX0aMIA1Jm8HxrORXVlRUewdb7c726s9WPJDSUQv6mgaLVVa8W3%2F37a%2Flb1BrRsNXRaZzJRyX7zhzjb9oestOD%2BHXZliBGCMLVQPB0D7wIQ%2FDq%2B5MeUa00iH7C%2FrpreCUH4a871KfxQGgiHD36%2FQeqbz0yPDrG3XrGu4zyc65AG02TnH0yLFVw1Zmq7SbPIvkDH1jFb4h2cj2S9oQOGYWqDtwHy920YIU8Vbqh7GrccnA%2BkTtpaKNzsgQ6kFfTqbDGlL%2B1OnwrHG5qfmaaXzrM%2Fkd46fHjea6LqkOXExTSejLsdn9YxoFB%2Bl5cFAqSR%2B%2FtzBHNZeh7y9ghM9r%2FlL3UCQCoPwEPneS9Zz%2BZe78Di7lkWQlpiAfH%2ByvB%2F%2B3GNcA%2BSTJfvgWHIkFXrbkFk9oK93D3hzRRoKTCLkvLBBjqkAcPKNci%2BLrDzpcCxxZ8Us%2BmTq%2BhsTgTfKF1oT6XgsvtUXssFitgEyYl2JPXcZKECmZZZTKHYv8h7kFLpVqsldVq5zmCxJ8BWxd24VHnsI37uBv6%2Bjk8C5oLAXmO%2FOGFL13VubMCyqxUvxMIDWzEqmyRNoUCtftHmPpY3VTEjfMjjjfV%2B8l4m7yftc3gdiJuOansuQhI4mY7n3dhNZVedj8TYUB%2F%2F&X-Amz-Signature=c3c1c59d371afc0563a74a65a1d013c3a4f6610c5d36708679e8d1ba02ceb0c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSC3TXR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2BUec3IRgrNBT8bxO%2BNZ%2BLaZsO7Hz8N7wLzeA0OaOTeQIhAML1FLMGWPWJzSurNrvYFkZzfKB%2FfpDGGxAUR0xvOf2OKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTU2zIECngSaF1a0Aq3AOgPlpjMF0zjmWmMTF%2FMbcH2UUHgqFC8PR4m69NJev3BxI%2Bn4JZLG%2FFTO1U9u%2Fx%2BWqWP2GnuYC9ut4ZH9XfDsuxBpMadpbR0gbEMCka%2Bv0%2FyiHQKf%2B28sGORJRl6w9v95rzUFnvlyGQT5UzcuQjokvJ4RYf6XDduvbSUijFKeKGHWsjneIxnqfhI2rufz8RJ6ov3sRfYcIRG%2BC1LSDX7RNww8oWLkX0aMIA1Jm8HxrORXVlRUewdb7c726s9WPJDSUQv6mgaLVVa8W3%2F37a%2Flb1BrRsNXRaZzJRyX7zhzjb9oestOD%2BHXZliBGCMLVQPB0D7wIQ%2FDq%2B5MeUa00iH7C%2FrpreCUH4a871KfxQGgiHD36%2FQeqbz0yPDrG3XrGu4zyc65AG02TnH0yLFVw1Zmq7SbPIvkDH1jFb4h2cj2S9oQOGYWqDtwHy920YIU8Vbqh7GrccnA%2BkTtpaKNzsgQ6kFfTqbDGlL%2B1OnwrHG5qfmaaXzrM%2Fkd46fHjea6LqkOXExTSejLsdn9YxoFB%2Bl5cFAqSR%2B%2FtzBHNZeh7y9ghM9r%2FlL3UCQCoPwEPneS9Zz%2BZe78Di7lkWQlpiAfH%2ByvB%2F%2B3GNcA%2BSTJfvgWHIkFXrbkFk9oK93D3hzRRoKTCLkvLBBjqkAcPKNci%2BLrDzpcCxxZ8Us%2BmTq%2BhsTgTfKF1oT6XgsvtUXssFitgEyYl2JPXcZKECmZZZTKHYv8h7kFLpVqsldVq5zmCxJ8BWxd24VHnsI37uBv6%2Bjk8C5oLAXmO%2FOGFL13VubMCyqxUvxMIDWzEqmyRNoUCtftHmPpY3VTEjfMjjjfV%2B8l4m7yftc3gdiJuOansuQhI4mY7n3dhNZVedj8TYUB%2F%2F&X-Amz-Signature=d98a04b2eb5fa9ae3e9882e6db6b36440f6686701b2360d9d5b285562f112a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSC3TXR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2BUec3IRgrNBT8bxO%2BNZ%2BLaZsO7Hz8N7wLzeA0OaOTeQIhAML1FLMGWPWJzSurNrvYFkZzfKB%2FfpDGGxAUR0xvOf2OKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTU2zIECngSaF1a0Aq3AOgPlpjMF0zjmWmMTF%2FMbcH2UUHgqFC8PR4m69NJev3BxI%2Bn4JZLG%2FFTO1U9u%2Fx%2BWqWP2GnuYC9ut4ZH9XfDsuxBpMadpbR0gbEMCka%2Bv0%2FyiHQKf%2B28sGORJRl6w9v95rzUFnvlyGQT5UzcuQjokvJ4RYf6XDduvbSUijFKeKGHWsjneIxnqfhI2rufz8RJ6ov3sRfYcIRG%2BC1LSDX7RNww8oWLkX0aMIA1Jm8HxrORXVlRUewdb7c726s9WPJDSUQv6mgaLVVa8W3%2F37a%2Flb1BrRsNXRaZzJRyX7zhzjb9oestOD%2BHXZliBGCMLVQPB0D7wIQ%2FDq%2B5MeUa00iH7C%2FrpreCUH4a871KfxQGgiHD36%2FQeqbz0yPDrG3XrGu4zyc65AG02TnH0yLFVw1Zmq7SbPIvkDH1jFb4h2cj2S9oQOGYWqDtwHy920YIU8Vbqh7GrccnA%2BkTtpaKNzsgQ6kFfTqbDGlL%2B1OnwrHG5qfmaaXzrM%2Fkd46fHjea6LqkOXExTSejLsdn9YxoFB%2Bl5cFAqSR%2B%2FtzBHNZeh7y9ghM9r%2FlL3UCQCoPwEPneS9Zz%2BZe78Di7lkWQlpiAfH%2ByvB%2F%2B3GNcA%2BSTJfvgWHIkFXrbkFk9oK93D3hzRRoKTCLkvLBBjqkAcPKNci%2BLrDzpcCxxZ8Us%2BmTq%2BhsTgTfKF1oT6XgsvtUXssFitgEyYl2JPXcZKECmZZZTKHYv8h7kFLpVqsldVq5zmCxJ8BWxd24VHnsI37uBv6%2Bjk8C5oLAXmO%2FOGFL13VubMCyqxUvxMIDWzEqmyRNoUCtftHmPpY3VTEjfMjjjfV%2B8l4m7yftc3gdiJuOansuQhI4mY7n3dhNZVedj8TYUB%2F%2F&X-Amz-Signature=2d8dee600e6e0c91ed6423a6b30492f6fdeb28a11914bde8fcecb4d8ace6caac&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSC3TXR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2BUec3IRgrNBT8bxO%2BNZ%2BLaZsO7Hz8N7wLzeA0OaOTeQIhAML1FLMGWPWJzSurNrvYFkZzfKB%2FfpDGGxAUR0xvOf2OKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTU2zIECngSaF1a0Aq3AOgPlpjMF0zjmWmMTF%2FMbcH2UUHgqFC8PR4m69NJev3BxI%2Bn4JZLG%2FFTO1U9u%2Fx%2BWqWP2GnuYC9ut4ZH9XfDsuxBpMadpbR0gbEMCka%2Bv0%2FyiHQKf%2B28sGORJRl6w9v95rzUFnvlyGQT5UzcuQjokvJ4RYf6XDduvbSUijFKeKGHWsjneIxnqfhI2rufz8RJ6ov3sRfYcIRG%2BC1LSDX7RNww8oWLkX0aMIA1Jm8HxrORXVlRUewdb7c726s9WPJDSUQv6mgaLVVa8W3%2F37a%2Flb1BrRsNXRaZzJRyX7zhzjb9oestOD%2BHXZliBGCMLVQPB0D7wIQ%2FDq%2B5MeUa00iH7C%2FrpreCUH4a871KfxQGgiHD36%2FQeqbz0yPDrG3XrGu4zyc65AG02TnH0yLFVw1Zmq7SbPIvkDH1jFb4h2cj2S9oQOGYWqDtwHy920YIU8Vbqh7GrccnA%2BkTtpaKNzsgQ6kFfTqbDGlL%2B1OnwrHG5qfmaaXzrM%2Fkd46fHjea6LqkOXExTSejLsdn9YxoFB%2Bl5cFAqSR%2B%2FtzBHNZeh7y9ghM9r%2FlL3UCQCoPwEPneS9Zz%2BZe78Di7lkWQlpiAfH%2ByvB%2F%2B3GNcA%2BSTJfvgWHIkFXrbkFk9oK93D3hzRRoKTCLkvLBBjqkAcPKNci%2BLrDzpcCxxZ8Us%2BmTq%2BhsTgTfKF1oT6XgsvtUXssFitgEyYl2JPXcZKECmZZZTKHYv8h7kFLpVqsldVq5zmCxJ8BWxd24VHnsI37uBv6%2Bjk8C5oLAXmO%2FOGFL13VubMCyqxUvxMIDWzEqmyRNoUCtftHmPpY3VTEjfMjjjfV%2B8l4m7yftc3gdiJuOansuQhI4mY7n3dhNZVedj8TYUB%2F%2F&X-Amz-Signature=230e64328c9672af823bc241617fcf17cdb07e632a0abbe6cb71618d45f5cc97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSC3TXR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2BUec3IRgrNBT8bxO%2BNZ%2BLaZsO7Hz8N7wLzeA0OaOTeQIhAML1FLMGWPWJzSurNrvYFkZzfKB%2FfpDGGxAUR0xvOf2OKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTU2zIECngSaF1a0Aq3AOgPlpjMF0zjmWmMTF%2FMbcH2UUHgqFC8PR4m69NJev3BxI%2Bn4JZLG%2FFTO1U9u%2Fx%2BWqWP2GnuYC9ut4ZH9XfDsuxBpMadpbR0gbEMCka%2Bv0%2FyiHQKf%2B28sGORJRl6w9v95rzUFnvlyGQT5UzcuQjokvJ4RYf6XDduvbSUijFKeKGHWsjneIxnqfhI2rufz8RJ6ov3sRfYcIRG%2BC1LSDX7RNww8oWLkX0aMIA1Jm8HxrORXVlRUewdb7c726s9WPJDSUQv6mgaLVVa8W3%2F37a%2Flb1BrRsNXRaZzJRyX7zhzjb9oestOD%2BHXZliBGCMLVQPB0D7wIQ%2FDq%2B5MeUa00iH7C%2FrpreCUH4a871KfxQGgiHD36%2FQeqbz0yPDrG3XrGu4zyc65AG02TnH0yLFVw1Zmq7SbPIvkDH1jFb4h2cj2S9oQOGYWqDtwHy920YIU8Vbqh7GrccnA%2BkTtpaKNzsgQ6kFfTqbDGlL%2B1OnwrHG5qfmaaXzrM%2Fkd46fHjea6LqkOXExTSejLsdn9YxoFB%2Bl5cFAqSR%2B%2FtzBHNZeh7y9ghM9r%2FlL3UCQCoPwEPneS9Zz%2BZe78Di7lkWQlpiAfH%2ByvB%2F%2B3GNcA%2BSTJfvgWHIkFXrbkFk9oK93D3hzRRoKTCLkvLBBjqkAcPKNci%2BLrDzpcCxxZ8Us%2BmTq%2BhsTgTfKF1oT6XgsvtUXssFitgEyYl2JPXcZKECmZZZTKHYv8h7kFLpVqsldVq5zmCxJ8BWxd24VHnsI37uBv6%2Bjk8C5oLAXmO%2FOGFL13VubMCyqxUvxMIDWzEqmyRNoUCtftHmPpY3VTEjfMjjjfV%2B8l4m7yftc3gdiJuOansuQhI4mY7n3dhNZVedj8TYUB%2F%2F&X-Amz-Signature=4fd1c46b6602e419589b1da78dd631056ad2df5b989dd842a7abbfc1affce2f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSC3TXR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2BUec3IRgrNBT8bxO%2BNZ%2BLaZsO7Hz8N7wLzeA0OaOTeQIhAML1FLMGWPWJzSurNrvYFkZzfKB%2FfpDGGxAUR0xvOf2OKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTU2zIECngSaF1a0Aq3AOgPlpjMF0zjmWmMTF%2FMbcH2UUHgqFC8PR4m69NJev3BxI%2Bn4JZLG%2FFTO1U9u%2Fx%2BWqWP2GnuYC9ut4ZH9XfDsuxBpMadpbR0gbEMCka%2Bv0%2FyiHQKf%2B28sGORJRl6w9v95rzUFnvlyGQT5UzcuQjokvJ4RYf6XDduvbSUijFKeKGHWsjneIxnqfhI2rufz8RJ6ov3sRfYcIRG%2BC1LSDX7RNww8oWLkX0aMIA1Jm8HxrORXVlRUewdb7c726s9WPJDSUQv6mgaLVVa8W3%2F37a%2Flb1BrRsNXRaZzJRyX7zhzjb9oestOD%2BHXZliBGCMLVQPB0D7wIQ%2FDq%2B5MeUa00iH7C%2FrpreCUH4a871KfxQGgiHD36%2FQeqbz0yPDrG3XrGu4zyc65AG02TnH0yLFVw1Zmq7SbPIvkDH1jFb4h2cj2S9oQOGYWqDtwHy920YIU8Vbqh7GrccnA%2BkTtpaKNzsgQ6kFfTqbDGlL%2B1OnwrHG5qfmaaXzrM%2Fkd46fHjea6LqkOXExTSejLsdn9YxoFB%2Bl5cFAqSR%2B%2FtzBHNZeh7y9ghM9r%2FlL3UCQCoPwEPneS9Zz%2BZe78Di7lkWQlpiAfH%2ByvB%2F%2B3GNcA%2BSTJfvgWHIkFXrbkFk9oK93D3hzRRoKTCLkvLBBjqkAcPKNci%2BLrDzpcCxxZ8Us%2BmTq%2BhsTgTfKF1oT6XgsvtUXssFitgEyYl2JPXcZKECmZZZTKHYv8h7kFLpVqsldVq5zmCxJ8BWxd24VHnsI37uBv6%2Bjk8C5oLAXmO%2FOGFL13VubMCyqxUvxMIDWzEqmyRNoUCtftHmPpY3VTEjfMjjjfV%2B8l4m7yftc3gdiJuOansuQhI4mY7n3dhNZVedj8TYUB%2F%2F&X-Amz-Signature=960d60dbb3e6d434b1c0c8b229b52b0d1dd1abe49598e5b772ac60735632a0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSC3TXR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2BUec3IRgrNBT8bxO%2BNZ%2BLaZsO7Hz8N7wLzeA0OaOTeQIhAML1FLMGWPWJzSurNrvYFkZzfKB%2FfpDGGxAUR0xvOf2OKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTU2zIECngSaF1a0Aq3AOgPlpjMF0zjmWmMTF%2FMbcH2UUHgqFC8PR4m69NJev3BxI%2Bn4JZLG%2FFTO1U9u%2Fx%2BWqWP2GnuYC9ut4ZH9XfDsuxBpMadpbR0gbEMCka%2Bv0%2FyiHQKf%2B28sGORJRl6w9v95rzUFnvlyGQT5UzcuQjokvJ4RYf6XDduvbSUijFKeKGHWsjneIxnqfhI2rufz8RJ6ov3sRfYcIRG%2BC1LSDX7RNww8oWLkX0aMIA1Jm8HxrORXVlRUewdb7c726s9WPJDSUQv6mgaLVVa8W3%2F37a%2Flb1BrRsNXRaZzJRyX7zhzjb9oestOD%2BHXZliBGCMLVQPB0D7wIQ%2FDq%2B5MeUa00iH7C%2FrpreCUH4a871KfxQGgiHD36%2FQeqbz0yPDrG3XrGu4zyc65AG02TnH0yLFVw1Zmq7SbPIvkDH1jFb4h2cj2S9oQOGYWqDtwHy920YIU8Vbqh7GrccnA%2BkTtpaKNzsgQ6kFfTqbDGlL%2B1OnwrHG5qfmaaXzrM%2Fkd46fHjea6LqkOXExTSejLsdn9YxoFB%2Bl5cFAqSR%2B%2FtzBHNZeh7y9ghM9r%2FlL3UCQCoPwEPneS9Zz%2BZe78Di7lkWQlpiAfH%2ByvB%2F%2B3GNcA%2BSTJfvgWHIkFXrbkFk9oK93D3hzRRoKTCLkvLBBjqkAcPKNci%2BLrDzpcCxxZ8Us%2BmTq%2BhsTgTfKF1oT6XgsvtUXssFitgEyYl2JPXcZKECmZZZTKHYv8h7kFLpVqsldVq5zmCxJ8BWxd24VHnsI37uBv6%2Bjk8C5oLAXmO%2FOGFL13VubMCyqxUvxMIDWzEqmyRNoUCtftHmPpY3VTEjfMjjjfV%2B8l4m7yftc3gdiJuOansuQhI4mY7n3dhNZVedj8TYUB%2F%2F&X-Amz-Signature=30541e655c286924bed072bea20e838185fc6bc30325f97ce63684d73b006c26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSC3TXR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2BUec3IRgrNBT8bxO%2BNZ%2BLaZsO7Hz8N7wLzeA0OaOTeQIhAML1FLMGWPWJzSurNrvYFkZzfKB%2FfpDGGxAUR0xvOf2OKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTU2zIECngSaF1a0Aq3AOgPlpjMF0zjmWmMTF%2FMbcH2UUHgqFC8PR4m69NJev3BxI%2Bn4JZLG%2FFTO1U9u%2Fx%2BWqWP2GnuYC9ut4ZH9XfDsuxBpMadpbR0gbEMCka%2Bv0%2FyiHQKf%2B28sGORJRl6w9v95rzUFnvlyGQT5UzcuQjokvJ4RYf6XDduvbSUijFKeKGHWsjneIxnqfhI2rufz8RJ6ov3sRfYcIRG%2BC1LSDX7RNww8oWLkX0aMIA1Jm8HxrORXVlRUewdb7c726s9WPJDSUQv6mgaLVVa8W3%2F37a%2Flb1BrRsNXRaZzJRyX7zhzjb9oestOD%2BHXZliBGCMLVQPB0D7wIQ%2FDq%2B5MeUa00iH7C%2FrpreCUH4a871KfxQGgiHD36%2FQeqbz0yPDrG3XrGu4zyc65AG02TnH0yLFVw1Zmq7SbPIvkDH1jFb4h2cj2S9oQOGYWqDtwHy920YIU8Vbqh7GrccnA%2BkTtpaKNzsgQ6kFfTqbDGlL%2B1OnwrHG5qfmaaXzrM%2Fkd46fHjea6LqkOXExTSejLsdn9YxoFB%2Bl5cFAqSR%2B%2FtzBHNZeh7y9ghM9r%2FlL3UCQCoPwEPneS9Zz%2BZe78Di7lkWQlpiAfH%2ByvB%2F%2B3GNcA%2BSTJfvgWHIkFXrbkFk9oK93D3hzRRoKTCLkvLBBjqkAcPKNci%2BLrDzpcCxxZ8Us%2BmTq%2BhsTgTfKF1oT6XgsvtUXssFitgEyYl2JPXcZKECmZZZTKHYv8h7kFLpVqsldVq5zmCxJ8BWxd24VHnsI37uBv6%2Bjk8C5oLAXmO%2FOGFL13VubMCyqxUvxMIDWzEqmyRNoUCtftHmPpY3VTEjfMjjjfV%2B8l4m7yftc3gdiJuOansuQhI4mY7n3dhNZVedj8TYUB%2F%2F&X-Amz-Signature=366ac83728f23459879d9613e1b51865aeafdbe051d9ff469e3c51551d2bb86f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
