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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAYKCGL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBB6LIktd%2BvuTO90loiyYf4wKuI0g7bl9%2FXnv%2Bf%2BF0O5AiA7niFBfYRBsqHzVgijZvL%2F4t9oYpU2SrbxV%2BgHVPeW%2FiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ShqIgiEh5RgvfjmKtwDRkTHmRIeGxZDfNZS%2BGA2yLjHEPjebvFCacEkJeoL4BPRmHOpV4trsEcOW%2FOZmwVNVPIG%2Be6mpUc3XIJIaBUNz2uIzhvXQgbIBEb6aNAuOKtTF41Jl0qVmYIqi2bdGnupRL9eTkhs%2BY%2Bg2EreEOkPnizm1r4xjzzz4MeF4DkyjreHJg3ZqXxHBRJAGeWzoxNdhu689i57MftrQp9T%2Bd8VlbXlUpJvOi7VSfAgxMbLFKKjgGCAGpuU3NOJqq3eQ6WimC%2Bl9tst6NIec2DO4B%2BDgKjYeFH7Obthq7fv1Iw6q%2F%2Fj02VR%2FuR%2FLGZxxr41GxWOyUcM6TI4FA7tFIdIeg65TjVJBdyhgzwpQq91vP9G1w63aMcNHa14x%2F92r7HjGezoik8P8Rxu4wGESjGfrR6yrsPQIYncsWf9AFivOWejo%2Bb9E22sfrF%2FLcSwxTXeje0gl1VzU9W2esiarl%2FTXxjc0MgWxv%2By%2F%2FpNObZYY13jGUklDqFVnuhyg0%2Bn8nHcwJsH9LvHQ5BUkVp16pmOMHVHxal53oKd0DML8g%2FFakIvEeGxbQzONmIgE07ChgPnm4DgNNJnPUx8yH35rA8KrU%2Bk1aUhQExUd0PxOyrx6FQnCcmC0PgoYBk3n%2B%2BiuOAw88u8vgY6pgGF9H1sdzuSQnm7iuYjOXkWjpNezvoXdybvGd%2B6fmxPc%2BjHEd9itNSQKXOyNGbucclLeweExTLIfRjnokXtUJBHZKXL33iC0wqk9L%2BWF7u%2FlwF7kxXWU5YKhmlGiwm%2BmcoGyyt%2FeJaoA%2FLE%2FuqsQS377sl7bo8PB1TW4hPK16QFt64RCmIUEthoGOVMDxgZTOJNwewWbefkTaNf4fqVeaMQzPX0zESn&X-Amz-Signature=4623437c8102c028255a33f7b8d764f93843c9b6d8e1818b62cb029f9171195e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAYKCGL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBB6LIktd%2BvuTO90loiyYf4wKuI0g7bl9%2FXnv%2Bf%2BF0O5AiA7niFBfYRBsqHzVgijZvL%2F4t9oYpU2SrbxV%2BgHVPeW%2FiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ShqIgiEh5RgvfjmKtwDRkTHmRIeGxZDfNZS%2BGA2yLjHEPjebvFCacEkJeoL4BPRmHOpV4trsEcOW%2FOZmwVNVPIG%2Be6mpUc3XIJIaBUNz2uIzhvXQgbIBEb6aNAuOKtTF41Jl0qVmYIqi2bdGnupRL9eTkhs%2BY%2Bg2EreEOkPnizm1r4xjzzz4MeF4DkyjreHJg3ZqXxHBRJAGeWzoxNdhu689i57MftrQp9T%2Bd8VlbXlUpJvOi7VSfAgxMbLFKKjgGCAGpuU3NOJqq3eQ6WimC%2Bl9tst6NIec2DO4B%2BDgKjYeFH7Obthq7fv1Iw6q%2F%2Fj02VR%2FuR%2FLGZxxr41GxWOyUcM6TI4FA7tFIdIeg65TjVJBdyhgzwpQq91vP9G1w63aMcNHa14x%2F92r7HjGezoik8P8Rxu4wGESjGfrR6yrsPQIYncsWf9AFivOWejo%2Bb9E22sfrF%2FLcSwxTXeje0gl1VzU9W2esiarl%2FTXxjc0MgWxv%2By%2F%2FpNObZYY13jGUklDqFVnuhyg0%2Bn8nHcwJsH9LvHQ5BUkVp16pmOMHVHxal53oKd0DML8g%2FFakIvEeGxbQzONmIgE07ChgPnm4DgNNJnPUx8yH35rA8KrU%2Bk1aUhQExUd0PxOyrx6FQnCcmC0PgoYBk3n%2B%2BiuOAw88u8vgY6pgGF9H1sdzuSQnm7iuYjOXkWjpNezvoXdybvGd%2B6fmxPc%2BjHEd9itNSQKXOyNGbucclLeweExTLIfRjnokXtUJBHZKXL33iC0wqk9L%2BWF7u%2FlwF7kxXWU5YKhmlGiwm%2BmcoGyyt%2FeJaoA%2FLE%2FuqsQS377sl7bo8PB1TW4hPK16QFt64RCmIUEthoGOVMDxgZTOJNwewWbefkTaNf4fqVeaMQzPX0zESn&X-Amz-Signature=6ac6df0d26dfa87c6939ff2ac71fa524c94fbb5859b1f50423a427452469e0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAYKCGL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBB6LIktd%2BvuTO90loiyYf4wKuI0g7bl9%2FXnv%2Bf%2BF0O5AiA7niFBfYRBsqHzVgijZvL%2F4t9oYpU2SrbxV%2BgHVPeW%2FiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ShqIgiEh5RgvfjmKtwDRkTHmRIeGxZDfNZS%2BGA2yLjHEPjebvFCacEkJeoL4BPRmHOpV4trsEcOW%2FOZmwVNVPIG%2Be6mpUc3XIJIaBUNz2uIzhvXQgbIBEb6aNAuOKtTF41Jl0qVmYIqi2bdGnupRL9eTkhs%2BY%2Bg2EreEOkPnizm1r4xjzzz4MeF4DkyjreHJg3ZqXxHBRJAGeWzoxNdhu689i57MftrQp9T%2Bd8VlbXlUpJvOi7VSfAgxMbLFKKjgGCAGpuU3NOJqq3eQ6WimC%2Bl9tst6NIec2DO4B%2BDgKjYeFH7Obthq7fv1Iw6q%2F%2Fj02VR%2FuR%2FLGZxxr41GxWOyUcM6TI4FA7tFIdIeg65TjVJBdyhgzwpQq91vP9G1w63aMcNHa14x%2F92r7HjGezoik8P8Rxu4wGESjGfrR6yrsPQIYncsWf9AFivOWejo%2Bb9E22sfrF%2FLcSwxTXeje0gl1VzU9W2esiarl%2FTXxjc0MgWxv%2By%2F%2FpNObZYY13jGUklDqFVnuhyg0%2Bn8nHcwJsH9LvHQ5BUkVp16pmOMHVHxal53oKd0DML8g%2FFakIvEeGxbQzONmIgE07ChgPnm4DgNNJnPUx8yH35rA8KrU%2Bk1aUhQExUd0PxOyrx6FQnCcmC0PgoYBk3n%2B%2BiuOAw88u8vgY6pgGF9H1sdzuSQnm7iuYjOXkWjpNezvoXdybvGd%2B6fmxPc%2BjHEd9itNSQKXOyNGbucclLeweExTLIfRjnokXtUJBHZKXL33iC0wqk9L%2BWF7u%2FlwF7kxXWU5YKhmlGiwm%2BmcoGyyt%2FeJaoA%2FLE%2FuqsQS377sl7bo8PB1TW4hPK16QFt64RCmIUEthoGOVMDxgZTOJNwewWbefkTaNf4fqVeaMQzPX0zESn&X-Amz-Signature=5232848fff6452eed9cae13ebfd6f074684d631903a5afe171336c6c02487fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAYKCGL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBB6LIktd%2BvuTO90loiyYf4wKuI0g7bl9%2FXnv%2Bf%2BF0O5AiA7niFBfYRBsqHzVgijZvL%2F4t9oYpU2SrbxV%2BgHVPeW%2FiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ShqIgiEh5RgvfjmKtwDRkTHmRIeGxZDfNZS%2BGA2yLjHEPjebvFCacEkJeoL4BPRmHOpV4trsEcOW%2FOZmwVNVPIG%2Be6mpUc3XIJIaBUNz2uIzhvXQgbIBEb6aNAuOKtTF41Jl0qVmYIqi2bdGnupRL9eTkhs%2BY%2Bg2EreEOkPnizm1r4xjzzz4MeF4DkyjreHJg3ZqXxHBRJAGeWzoxNdhu689i57MftrQp9T%2Bd8VlbXlUpJvOi7VSfAgxMbLFKKjgGCAGpuU3NOJqq3eQ6WimC%2Bl9tst6NIec2DO4B%2BDgKjYeFH7Obthq7fv1Iw6q%2F%2Fj02VR%2FuR%2FLGZxxr41GxWOyUcM6TI4FA7tFIdIeg65TjVJBdyhgzwpQq91vP9G1w63aMcNHa14x%2F92r7HjGezoik8P8Rxu4wGESjGfrR6yrsPQIYncsWf9AFivOWejo%2Bb9E22sfrF%2FLcSwxTXeje0gl1VzU9W2esiarl%2FTXxjc0MgWxv%2By%2F%2FpNObZYY13jGUklDqFVnuhyg0%2Bn8nHcwJsH9LvHQ5BUkVp16pmOMHVHxal53oKd0DML8g%2FFakIvEeGxbQzONmIgE07ChgPnm4DgNNJnPUx8yH35rA8KrU%2Bk1aUhQExUd0PxOyrx6FQnCcmC0PgoYBk3n%2B%2BiuOAw88u8vgY6pgGF9H1sdzuSQnm7iuYjOXkWjpNezvoXdybvGd%2B6fmxPc%2BjHEd9itNSQKXOyNGbucclLeweExTLIfRjnokXtUJBHZKXL33iC0wqk9L%2BWF7u%2FlwF7kxXWU5YKhmlGiwm%2BmcoGyyt%2FeJaoA%2FLE%2FuqsQS377sl7bo8PB1TW4hPK16QFt64RCmIUEthoGOVMDxgZTOJNwewWbefkTaNf4fqVeaMQzPX0zESn&X-Amz-Signature=7463408da3b408a046fda53152f0b48232d06e55ce8deff339e8396f1010d093&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAYKCGL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBB6LIktd%2BvuTO90loiyYf4wKuI0g7bl9%2FXnv%2Bf%2BF0O5AiA7niFBfYRBsqHzVgijZvL%2F4t9oYpU2SrbxV%2BgHVPeW%2FiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ShqIgiEh5RgvfjmKtwDRkTHmRIeGxZDfNZS%2BGA2yLjHEPjebvFCacEkJeoL4BPRmHOpV4trsEcOW%2FOZmwVNVPIG%2Be6mpUc3XIJIaBUNz2uIzhvXQgbIBEb6aNAuOKtTF41Jl0qVmYIqi2bdGnupRL9eTkhs%2BY%2Bg2EreEOkPnizm1r4xjzzz4MeF4DkyjreHJg3ZqXxHBRJAGeWzoxNdhu689i57MftrQp9T%2Bd8VlbXlUpJvOi7VSfAgxMbLFKKjgGCAGpuU3NOJqq3eQ6WimC%2Bl9tst6NIec2DO4B%2BDgKjYeFH7Obthq7fv1Iw6q%2F%2Fj02VR%2FuR%2FLGZxxr41GxWOyUcM6TI4FA7tFIdIeg65TjVJBdyhgzwpQq91vP9G1w63aMcNHa14x%2F92r7HjGezoik8P8Rxu4wGESjGfrR6yrsPQIYncsWf9AFivOWejo%2Bb9E22sfrF%2FLcSwxTXeje0gl1VzU9W2esiarl%2FTXxjc0MgWxv%2By%2F%2FpNObZYY13jGUklDqFVnuhyg0%2Bn8nHcwJsH9LvHQ5BUkVp16pmOMHVHxal53oKd0DML8g%2FFakIvEeGxbQzONmIgE07ChgPnm4DgNNJnPUx8yH35rA8KrU%2Bk1aUhQExUd0PxOyrx6FQnCcmC0PgoYBk3n%2B%2BiuOAw88u8vgY6pgGF9H1sdzuSQnm7iuYjOXkWjpNezvoXdybvGd%2B6fmxPc%2BjHEd9itNSQKXOyNGbucclLeweExTLIfRjnokXtUJBHZKXL33iC0wqk9L%2BWF7u%2FlwF7kxXWU5YKhmlGiwm%2BmcoGyyt%2FeJaoA%2FLE%2FuqsQS377sl7bo8PB1TW4hPK16QFt64RCmIUEthoGOVMDxgZTOJNwewWbefkTaNf4fqVeaMQzPX0zESn&X-Amz-Signature=eec9b9203e7ea9ad65582c86f1340e8f04de46c2a2b200496d2b71029b379df1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAYKCGL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBB6LIktd%2BvuTO90loiyYf4wKuI0g7bl9%2FXnv%2Bf%2BF0O5AiA7niFBfYRBsqHzVgijZvL%2F4t9oYpU2SrbxV%2BgHVPeW%2FiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ShqIgiEh5RgvfjmKtwDRkTHmRIeGxZDfNZS%2BGA2yLjHEPjebvFCacEkJeoL4BPRmHOpV4trsEcOW%2FOZmwVNVPIG%2Be6mpUc3XIJIaBUNz2uIzhvXQgbIBEb6aNAuOKtTF41Jl0qVmYIqi2bdGnupRL9eTkhs%2BY%2Bg2EreEOkPnizm1r4xjzzz4MeF4DkyjreHJg3ZqXxHBRJAGeWzoxNdhu689i57MftrQp9T%2Bd8VlbXlUpJvOi7VSfAgxMbLFKKjgGCAGpuU3NOJqq3eQ6WimC%2Bl9tst6NIec2DO4B%2BDgKjYeFH7Obthq7fv1Iw6q%2F%2Fj02VR%2FuR%2FLGZxxr41GxWOyUcM6TI4FA7tFIdIeg65TjVJBdyhgzwpQq91vP9G1w63aMcNHa14x%2F92r7HjGezoik8P8Rxu4wGESjGfrR6yrsPQIYncsWf9AFivOWejo%2Bb9E22sfrF%2FLcSwxTXeje0gl1VzU9W2esiarl%2FTXxjc0MgWxv%2By%2F%2FpNObZYY13jGUklDqFVnuhyg0%2Bn8nHcwJsH9LvHQ5BUkVp16pmOMHVHxal53oKd0DML8g%2FFakIvEeGxbQzONmIgE07ChgPnm4DgNNJnPUx8yH35rA8KrU%2Bk1aUhQExUd0PxOyrx6FQnCcmC0PgoYBk3n%2B%2BiuOAw88u8vgY6pgGF9H1sdzuSQnm7iuYjOXkWjpNezvoXdybvGd%2B6fmxPc%2BjHEd9itNSQKXOyNGbucclLeweExTLIfRjnokXtUJBHZKXL33iC0wqk9L%2BWF7u%2FlwF7kxXWU5YKhmlGiwm%2BmcoGyyt%2FeJaoA%2FLE%2FuqsQS377sl7bo8PB1TW4hPK16QFt64RCmIUEthoGOVMDxgZTOJNwewWbefkTaNf4fqVeaMQzPX0zESn&X-Amz-Signature=a3dd8f5f4ed705be5a98728459f7f752a852ec064573ca8655a37419aa693dde&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAYKCGL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBB6LIktd%2BvuTO90loiyYf4wKuI0g7bl9%2FXnv%2Bf%2BF0O5AiA7niFBfYRBsqHzVgijZvL%2F4t9oYpU2SrbxV%2BgHVPeW%2FiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ShqIgiEh5RgvfjmKtwDRkTHmRIeGxZDfNZS%2BGA2yLjHEPjebvFCacEkJeoL4BPRmHOpV4trsEcOW%2FOZmwVNVPIG%2Be6mpUc3XIJIaBUNz2uIzhvXQgbIBEb6aNAuOKtTF41Jl0qVmYIqi2bdGnupRL9eTkhs%2BY%2Bg2EreEOkPnizm1r4xjzzz4MeF4DkyjreHJg3ZqXxHBRJAGeWzoxNdhu689i57MftrQp9T%2Bd8VlbXlUpJvOi7VSfAgxMbLFKKjgGCAGpuU3NOJqq3eQ6WimC%2Bl9tst6NIec2DO4B%2BDgKjYeFH7Obthq7fv1Iw6q%2F%2Fj02VR%2FuR%2FLGZxxr41GxWOyUcM6TI4FA7tFIdIeg65TjVJBdyhgzwpQq91vP9G1w63aMcNHa14x%2F92r7HjGezoik8P8Rxu4wGESjGfrR6yrsPQIYncsWf9AFivOWejo%2Bb9E22sfrF%2FLcSwxTXeje0gl1VzU9W2esiarl%2FTXxjc0MgWxv%2By%2F%2FpNObZYY13jGUklDqFVnuhyg0%2Bn8nHcwJsH9LvHQ5BUkVp16pmOMHVHxal53oKd0DML8g%2FFakIvEeGxbQzONmIgE07ChgPnm4DgNNJnPUx8yH35rA8KrU%2Bk1aUhQExUd0PxOyrx6FQnCcmC0PgoYBk3n%2B%2BiuOAw88u8vgY6pgGF9H1sdzuSQnm7iuYjOXkWjpNezvoXdybvGd%2B6fmxPc%2BjHEd9itNSQKXOyNGbucclLeweExTLIfRjnokXtUJBHZKXL33iC0wqk9L%2BWF7u%2FlwF7kxXWU5YKhmlGiwm%2BmcoGyyt%2FeJaoA%2FLE%2FuqsQS377sl7bo8PB1TW4hPK16QFt64RCmIUEthoGOVMDxgZTOJNwewWbefkTaNf4fqVeaMQzPX0zESn&X-Amz-Signature=75d462f4bf89a4c659c6ed116c83c8a0af7e12729abeafe27f530fc740f19635&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAYKCGL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBB6LIktd%2BvuTO90loiyYf4wKuI0g7bl9%2FXnv%2Bf%2BF0O5AiA7niFBfYRBsqHzVgijZvL%2F4t9oYpU2SrbxV%2BgHVPeW%2FiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ShqIgiEh5RgvfjmKtwDRkTHmRIeGxZDfNZS%2BGA2yLjHEPjebvFCacEkJeoL4BPRmHOpV4trsEcOW%2FOZmwVNVPIG%2Be6mpUc3XIJIaBUNz2uIzhvXQgbIBEb6aNAuOKtTF41Jl0qVmYIqi2bdGnupRL9eTkhs%2BY%2Bg2EreEOkPnizm1r4xjzzz4MeF4DkyjreHJg3ZqXxHBRJAGeWzoxNdhu689i57MftrQp9T%2Bd8VlbXlUpJvOi7VSfAgxMbLFKKjgGCAGpuU3NOJqq3eQ6WimC%2Bl9tst6NIec2DO4B%2BDgKjYeFH7Obthq7fv1Iw6q%2F%2Fj02VR%2FuR%2FLGZxxr41GxWOyUcM6TI4FA7tFIdIeg65TjVJBdyhgzwpQq91vP9G1w63aMcNHa14x%2F92r7HjGezoik8P8Rxu4wGESjGfrR6yrsPQIYncsWf9AFivOWejo%2Bb9E22sfrF%2FLcSwxTXeje0gl1VzU9W2esiarl%2FTXxjc0MgWxv%2By%2F%2FpNObZYY13jGUklDqFVnuhyg0%2Bn8nHcwJsH9LvHQ5BUkVp16pmOMHVHxal53oKd0DML8g%2FFakIvEeGxbQzONmIgE07ChgPnm4DgNNJnPUx8yH35rA8KrU%2Bk1aUhQExUd0PxOyrx6FQnCcmC0PgoYBk3n%2B%2BiuOAw88u8vgY6pgGF9H1sdzuSQnm7iuYjOXkWjpNezvoXdybvGd%2B6fmxPc%2BjHEd9itNSQKXOyNGbucclLeweExTLIfRjnokXtUJBHZKXL33iC0wqk9L%2BWF7u%2FlwF7kxXWU5YKhmlGiwm%2BmcoGyyt%2FeJaoA%2FLE%2FuqsQS377sl7bo8PB1TW4hPK16QFt64RCmIUEthoGOVMDxgZTOJNwewWbefkTaNf4fqVeaMQzPX0zESn&X-Amz-Signature=10a2f78e591cb17074580d443273907cdc5a0279e8d7e3f3ac3ca636fc5f702e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
