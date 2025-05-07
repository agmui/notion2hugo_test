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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTCSOSK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbYCAKUhlL1AlfYEhcdvb9tXM4LsmoCBGrJJow9i8yzAiBu2Sh42FEXMwH6l%2B1TQsxFaYIUD5efmoEWqSrijFp7pir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMJi9vTjHBwtmLtwmIKtwDKA7PgTelnV8Fu9Ctd%2B8z5oe7WMzRm3jBu49RosMBbxL%2FTYsFMPQqG93JpDMAQrBvVbykRshy1mZ2UKrnD9zwwAdbiCxYDNkCPtL0UwVK1aUQ5MWYGINKuvmIFLzr4NROeOn8p1hjS7nuJ0tLw0YoseP8Eb5IFQykVPr8SOxco03zvG5gWggkS3AhOqBjeI4roSUAbzW3lCzrCaTcX6vSQxTfeidEVVdgyqKD84DmP43YGmFN6U%2B8Vqmo%2B2cvmQKSqqmBYx5fKc1oDo34p3cB6KpDvQIKHdaFrP525CSD7kyrVYnoZ343bHrXOsdCbtoi0Pk45vo%2FaLrCneMHXtrH0zOPqz31ss%2FL96t6qYk4dAk7MCpGQ9Mkxgiov%2FII1q1ns4sF1hj3pGKmnXWBHsP2Pm6NNMfN4PRdEaJbetsWPcmhcE7fmuLF%2FfkWAdx2YBlChl06kyV%2B6eSrOQlJmQ2MqTYGElM0BCHqTtWOsP9Gr8Z9fXNJmNNLA9JPod1EN1EoUuXPejJeP6UP1P8mIxgDdha8q9VSGYlGjfpYrmshWGwXBY%2B6AzpDKCRmh4Jl7exWaAr7DjYDGCIJra3nWmPTEx2m%2Fn2c6AEJqi%2F6Ssp6b%2Be3JkpF5a2BxdJ6DUwwo4PuwAY6pgEdmT6JFQoJhUzV%2BcmZhxrS8Q1O51bxEsNmMQ3rum%2FQeot7Kpry0Zx6owUyU38RMHI%2FktiC3NBqKJ0xMcSEI1soTBolGkjxzydMpRRLSDsoF94m7HY%2Bv1GPljg9I252U1NkuzD0nZl2Y8fxVxN%2B3dBJEUWvXyI6ybYreCpqi4DF3z3TkH80Q7d%2BIPxnyWa8JN82i31PcxWID%2Fc5u0TpyLvKTp1BAioS&X-Amz-Signature=8e34e551a5c770f1a1a933ed22468113bbc23f95067a4947adbff4df8f6d96e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTCSOSK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbYCAKUhlL1AlfYEhcdvb9tXM4LsmoCBGrJJow9i8yzAiBu2Sh42FEXMwH6l%2B1TQsxFaYIUD5efmoEWqSrijFp7pir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMJi9vTjHBwtmLtwmIKtwDKA7PgTelnV8Fu9Ctd%2B8z5oe7WMzRm3jBu49RosMBbxL%2FTYsFMPQqG93JpDMAQrBvVbykRshy1mZ2UKrnD9zwwAdbiCxYDNkCPtL0UwVK1aUQ5MWYGINKuvmIFLzr4NROeOn8p1hjS7nuJ0tLw0YoseP8Eb5IFQykVPr8SOxco03zvG5gWggkS3AhOqBjeI4roSUAbzW3lCzrCaTcX6vSQxTfeidEVVdgyqKD84DmP43YGmFN6U%2B8Vqmo%2B2cvmQKSqqmBYx5fKc1oDo34p3cB6KpDvQIKHdaFrP525CSD7kyrVYnoZ343bHrXOsdCbtoi0Pk45vo%2FaLrCneMHXtrH0zOPqz31ss%2FL96t6qYk4dAk7MCpGQ9Mkxgiov%2FII1q1ns4sF1hj3pGKmnXWBHsP2Pm6NNMfN4PRdEaJbetsWPcmhcE7fmuLF%2FfkWAdx2YBlChl06kyV%2B6eSrOQlJmQ2MqTYGElM0BCHqTtWOsP9Gr8Z9fXNJmNNLA9JPod1EN1EoUuXPejJeP6UP1P8mIxgDdha8q9VSGYlGjfpYrmshWGwXBY%2B6AzpDKCRmh4Jl7exWaAr7DjYDGCIJra3nWmPTEx2m%2Fn2c6AEJqi%2F6Ssp6b%2Be3JkpF5a2BxdJ6DUwwo4PuwAY6pgEdmT6JFQoJhUzV%2BcmZhxrS8Q1O51bxEsNmMQ3rum%2FQeot7Kpry0Zx6owUyU38RMHI%2FktiC3NBqKJ0xMcSEI1soTBolGkjxzydMpRRLSDsoF94m7HY%2Bv1GPljg9I252U1NkuzD0nZl2Y8fxVxN%2B3dBJEUWvXyI6ybYreCpqi4DF3z3TkH80Q7d%2BIPxnyWa8JN82i31PcxWID%2Fc5u0TpyLvKTp1BAioS&X-Amz-Signature=2afef64e13541222e3a44a4eec820aba054c1437379920c9b573dff66eabd747&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTCSOSK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbYCAKUhlL1AlfYEhcdvb9tXM4LsmoCBGrJJow9i8yzAiBu2Sh42FEXMwH6l%2B1TQsxFaYIUD5efmoEWqSrijFp7pir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMJi9vTjHBwtmLtwmIKtwDKA7PgTelnV8Fu9Ctd%2B8z5oe7WMzRm3jBu49RosMBbxL%2FTYsFMPQqG93JpDMAQrBvVbykRshy1mZ2UKrnD9zwwAdbiCxYDNkCPtL0UwVK1aUQ5MWYGINKuvmIFLzr4NROeOn8p1hjS7nuJ0tLw0YoseP8Eb5IFQykVPr8SOxco03zvG5gWggkS3AhOqBjeI4roSUAbzW3lCzrCaTcX6vSQxTfeidEVVdgyqKD84DmP43YGmFN6U%2B8Vqmo%2B2cvmQKSqqmBYx5fKc1oDo34p3cB6KpDvQIKHdaFrP525CSD7kyrVYnoZ343bHrXOsdCbtoi0Pk45vo%2FaLrCneMHXtrH0zOPqz31ss%2FL96t6qYk4dAk7MCpGQ9Mkxgiov%2FII1q1ns4sF1hj3pGKmnXWBHsP2Pm6NNMfN4PRdEaJbetsWPcmhcE7fmuLF%2FfkWAdx2YBlChl06kyV%2B6eSrOQlJmQ2MqTYGElM0BCHqTtWOsP9Gr8Z9fXNJmNNLA9JPod1EN1EoUuXPejJeP6UP1P8mIxgDdha8q9VSGYlGjfpYrmshWGwXBY%2B6AzpDKCRmh4Jl7exWaAr7DjYDGCIJra3nWmPTEx2m%2Fn2c6AEJqi%2F6Ssp6b%2Be3JkpF5a2BxdJ6DUwwo4PuwAY6pgEdmT6JFQoJhUzV%2BcmZhxrS8Q1O51bxEsNmMQ3rum%2FQeot7Kpry0Zx6owUyU38RMHI%2FktiC3NBqKJ0xMcSEI1soTBolGkjxzydMpRRLSDsoF94m7HY%2Bv1GPljg9I252U1NkuzD0nZl2Y8fxVxN%2B3dBJEUWvXyI6ybYreCpqi4DF3z3TkH80Q7d%2BIPxnyWa8JN82i31PcxWID%2Fc5u0TpyLvKTp1BAioS&X-Amz-Signature=a5047fcdbc919de9a846f57a900ed9a28cacc8c4d8e8bf04553317f2061f4afc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTCSOSK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbYCAKUhlL1AlfYEhcdvb9tXM4LsmoCBGrJJow9i8yzAiBu2Sh42FEXMwH6l%2B1TQsxFaYIUD5efmoEWqSrijFp7pir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMJi9vTjHBwtmLtwmIKtwDKA7PgTelnV8Fu9Ctd%2B8z5oe7WMzRm3jBu49RosMBbxL%2FTYsFMPQqG93JpDMAQrBvVbykRshy1mZ2UKrnD9zwwAdbiCxYDNkCPtL0UwVK1aUQ5MWYGINKuvmIFLzr4NROeOn8p1hjS7nuJ0tLw0YoseP8Eb5IFQykVPr8SOxco03zvG5gWggkS3AhOqBjeI4roSUAbzW3lCzrCaTcX6vSQxTfeidEVVdgyqKD84DmP43YGmFN6U%2B8Vqmo%2B2cvmQKSqqmBYx5fKc1oDo34p3cB6KpDvQIKHdaFrP525CSD7kyrVYnoZ343bHrXOsdCbtoi0Pk45vo%2FaLrCneMHXtrH0zOPqz31ss%2FL96t6qYk4dAk7MCpGQ9Mkxgiov%2FII1q1ns4sF1hj3pGKmnXWBHsP2Pm6NNMfN4PRdEaJbetsWPcmhcE7fmuLF%2FfkWAdx2YBlChl06kyV%2B6eSrOQlJmQ2MqTYGElM0BCHqTtWOsP9Gr8Z9fXNJmNNLA9JPod1EN1EoUuXPejJeP6UP1P8mIxgDdha8q9VSGYlGjfpYrmshWGwXBY%2B6AzpDKCRmh4Jl7exWaAr7DjYDGCIJra3nWmPTEx2m%2Fn2c6AEJqi%2F6Ssp6b%2Be3JkpF5a2BxdJ6DUwwo4PuwAY6pgEdmT6JFQoJhUzV%2BcmZhxrS8Q1O51bxEsNmMQ3rum%2FQeot7Kpry0Zx6owUyU38RMHI%2FktiC3NBqKJ0xMcSEI1soTBolGkjxzydMpRRLSDsoF94m7HY%2Bv1GPljg9I252U1NkuzD0nZl2Y8fxVxN%2B3dBJEUWvXyI6ybYreCpqi4DF3z3TkH80Q7d%2BIPxnyWa8JN82i31PcxWID%2Fc5u0TpyLvKTp1BAioS&X-Amz-Signature=18066aab7fee87c31ff3d2015262a6f9dfe2d0c1a3c2d18b0e6b13482d5900d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTCSOSK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbYCAKUhlL1AlfYEhcdvb9tXM4LsmoCBGrJJow9i8yzAiBu2Sh42FEXMwH6l%2B1TQsxFaYIUD5efmoEWqSrijFp7pir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMJi9vTjHBwtmLtwmIKtwDKA7PgTelnV8Fu9Ctd%2B8z5oe7WMzRm3jBu49RosMBbxL%2FTYsFMPQqG93JpDMAQrBvVbykRshy1mZ2UKrnD9zwwAdbiCxYDNkCPtL0UwVK1aUQ5MWYGINKuvmIFLzr4NROeOn8p1hjS7nuJ0tLw0YoseP8Eb5IFQykVPr8SOxco03zvG5gWggkS3AhOqBjeI4roSUAbzW3lCzrCaTcX6vSQxTfeidEVVdgyqKD84DmP43YGmFN6U%2B8Vqmo%2B2cvmQKSqqmBYx5fKc1oDo34p3cB6KpDvQIKHdaFrP525CSD7kyrVYnoZ343bHrXOsdCbtoi0Pk45vo%2FaLrCneMHXtrH0zOPqz31ss%2FL96t6qYk4dAk7MCpGQ9Mkxgiov%2FII1q1ns4sF1hj3pGKmnXWBHsP2Pm6NNMfN4PRdEaJbetsWPcmhcE7fmuLF%2FfkWAdx2YBlChl06kyV%2B6eSrOQlJmQ2MqTYGElM0BCHqTtWOsP9Gr8Z9fXNJmNNLA9JPod1EN1EoUuXPejJeP6UP1P8mIxgDdha8q9VSGYlGjfpYrmshWGwXBY%2B6AzpDKCRmh4Jl7exWaAr7DjYDGCIJra3nWmPTEx2m%2Fn2c6AEJqi%2F6Ssp6b%2Be3JkpF5a2BxdJ6DUwwo4PuwAY6pgEdmT6JFQoJhUzV%2BcmZhxrS8Q1O51bxEsNmMQ3rum%2FQeot7Kpry0Zx6owUyU38RMHI%2FktiC3NBqKJ0xMcSEI1soTBolGkjxzydMpRRLSDsoF94m7HY%2Bv1GPljg9I252U1NkuzD0nZl2Y8fxVxN%2B3dBJEUWvXyI6ybYreCpqi4DF3z3TkH80Q7d%2BIPxnyWa8JN82i31PcxWID%2Fc5u0TpyLvKTp1BAioS&X-Amz-Signature=2bee9bc2e9fedc1c042b23530d73025f4216e52aa7aa9da508e58f11536dac6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTCSOSK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbYCAKUhlL1AlfYEhcdvb9tXM4LsmoCBGrJJow9i8yzAiBu2Sh42FEXMwH6l%2B1TQsxFaYIUD5efmoEWqSrijFp7pir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMJi9vTjHBwtmLtwmIKtwDKA7PgTelnV8Fu9Ctd%2B8z5oe7WMzRm3jBu49RosMBbxL%2FTYsFMPQqG93JpDMAQrBvVbykRshy1mZ2UKrnD9zwwAdbiCxYDNkCPtL0UwVK1aUQ5MWYGINKuvmIFLzr4NROeOn8p1hjS7nuJ0tLw0YoseP8Eb5IFQykVPr8SOxco03zvG5gWggkS3AhOqBjeI4roSUAbzW3lCzrCaTcX6vSQxTfeidEVVdgyqKD84DmP43YGmFN6U%2B8Vqmo%2B2cvmQKSqqmBYx5fKc1oDo34p3cB6KpDvQIKHdaFrP525CSD7kyrVYnoZ343bHrXOsdCbtoi0Pk45vo%2FaLrCneMHXtrH0zOPqz31ss%2FL96t6qYk4dAk7MCpGQ9Mkxgiov%2FII1q1ns4sF1hj3pGKmnXWBHsP2Pm6NNMfN4PRdEaJbetsWPcmhcE7fmuLF%2FfkWAdx2YBlChl06kyV%2B6eSrOQlJmQ2MqTYGElM0BCHqTtWOsP9Gr8Z9fXNJmNNLA9JPod1EN1EoUuXPejJeP6UP1P8mIxgDdha8q9VSGYlGjfpYrmshWGwXBY%2B6AzpDKCRmh4Jl7exWaAr7DjYDGCIJra3nWmPTEx2m%2Fn2c6AEJqi%2F6Ssp6b%2Be3JkpF5a2BxdJ6DUwwo4PuwAY6pgEdmT6JFQoJhUzV%2BcmZhxrS8Q1O51bxEsNmMQ3rum%2FQeot7Kpry0Zx6owUyU38RMHI%2FktiC3NBqKJ0xMcSEI1soTBolGkjxzydMpRRLSDsoF94m7HY%2Bv1GPljg9I252U1NkuzD0nZl2Y8fxVxN%2B3dBJEUWvXyI6ybYreCpqi4DF3z3TkH80Q7d%2BIPxnyWa8JN82i31PcxWID%2Fc5u0TpyLvKTp1BAioS&X-Amz-Signature=021aa5c1c8326c4b2a579b3010d9c9d4f7c3279206190fdd0fb2c84ad1aab9cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTCSOSK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbYCAKUhlL1AlfYEhcdvb9tXM4LsmoCBGrJJow9i8yzAiBu2Sh42FEXMwH6l%2B1TQsxFaYIUD5efmoEWqSrijFp7pir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMJi9vTjHBwtmLtwmIKtwDKA7PgTelnV8Fu9Ctd%2B8z5oe7WMzRm3jBu49RosMBbxL%2FTYsFMPQqG93JpDMAQrBvVbykRshy1mZ2UKrnD9zwwAdbiCxYDNkCPtL0UwVK1aUQ5MWYGINKuvmIFLzr4NROeOn8p1hjS7nuJ0tLw0YoseP8Eb5IFQykVPr8SOxco03zvG5gWggkS3AhOqBjeI4roSUAbzW3lCzrCaTcX6vSQxTfeidEVVdgyqKD84DmP43YGmFN6U%2B8Vqmo%2B2cvmQKSqqmBYx5fKc1oDo34p3cB6KpDvQIKHdaFrP525CSD7kyrVYnoZ343bHrXOsdCbtoi0Pk45vo%2FaLrCneMHXtrH0zOPqz31ss%2FL96t6qYk4dAk7MCpGQ9Mkxgiov%2FII1q1ns4sF1hj3pGKmnXWBHsP2Pm6NNMfN4PRdEaJbetsWPcmhcE7fmuLF%2FfkWAdx2YBlChl06kyV%2B6eSrOQlJmQ2MqTYGElM0BCHqTtWOsP9Gr8Z9fXNJmNNLA9JPod1EN1EoUuXPejJeP6UP1P8mIxgDdha8q9VSGYlGjfpYrmshWGwXBY%2B6AzpDKCRmh4Jl7exWaAr7DjYDGCIJra3nWmPTEx2m%2Fn2c6AEJqi%2F6Ssp6b%2Be3JkpF5a2BxdJ6DUwwo4PuwAY6pgEdmT6JFQoJhUzV%2BcmZhxrS8Q1O51bxEsNmMQ3rum%2FQeot7Kpry0Zx6owUyU38RMHI%2FktiC3NBqKJ0xMcSEI1soTBolGkjxzydMpRRLSDsoF94m7HY%2Bv1GPljg9I252U1NkuzD0nZl2Y8fxVxN%2B3dBJEUWvXyI6ybYreCpqi4DF3z3TkH80Q7d%2BIPxnyWa8JN82i31PcxWID%2Fc5u0TpyLvKTp1BAioS&X-Amz-Signature=e11962ccb1e504267e6df4b9a5d11d49932878aa94b57d83dd205dc80004f77d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTCSOSK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbYCAKUhlL1AlfYEhcdvb9tXM4LsmoCBGrJJow9i8yzAiBu2Sh42FEXMwH6l%2B1TQsxFaYIUD5efmoEWqSrijFp7pir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMJi9vTjHBwtmLtwmIKtwDKA7PgTelnV8Fu9Ctd%2B8z5oe7WMzRm3jBu49RosMBbxL%2FTYsFMPQqG93JpDMAQrBvVbykRshy1mZ2UKrnD9zwwAdbiCxYDNkCPtL0UwVK1aUQ5MWYGINKuvmIFLzr4NROeOn8p1hjS7nuJ0tLw0YoseP8Eb5IFQykVPr8SOxco03zvG5gWggkS3AhOqBjeI4roSUAbzW3lCzrCaTcX6vSQxTfeidEVVdgyqKD84DmP43YGmFN6U%2B8Vqmo%2B2cvmQKSqqmBYx5fKc1oDo34p3cB6KpDvQIKHdaFrP525CSD7kyrVYnoZ343bHrXOsdCbtoi0Pk45vo%2FaLrCneMHXtrH0zOPqz31ss%2FL96t6qYk4dAk7MCpGQ9Mkxgiov%2FII1q1ns4sF1hj3pGKmnXWBHsP2Pm6NNMfN4PRdEaJbetsWPcmhcE7fmuLF%2FfkWAdx2YBlChl06kyV%2B6eSrOQlJmQ2MqTYGElM0BCHqTtWOsP9Gr8Z9fXNJmNNLA9JPod1EN1EoUuXPejJeP6UP1P8mIxgDdha8q9VSGYlGjfpYrmshWGwXBY%2B6AzpDKCRmh4Jl7exWaAr7DjYDGCIJra3nWmPTEx2m%2Fn2c6AEJqi%2F6Ssp6b%2Be3JkpF5a2BxdJ6DUwwo4PuwAY6pgEdmT6JFQoJhUzV%2BcmZhxrS8Q1O51bxEsNmMQ3rum%2FQeot7Kpry0Zx6owUyU38RMHI%2FktiC3NBqKJ0xMcSEI1soTBolGkjxzydMpRRLSDsoF94m7HY%2Bv1GPljg9I252U1NkuzD0nZl2Y8fxVxN%2B3dBJEUWvXyI6ybYreCpqi4DF3z3TkH80Q7d%2BIPxnyWa8JN82i31PcxWID%2Fc5u0TpyLvKTp1BAioS&X-Amz-Signature=cd0737c62c552eadeff38b05fc84ee15c28e154b929b415b0321255722543bca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
