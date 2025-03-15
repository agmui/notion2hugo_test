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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX6SDODG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVhxDRAvDMkms6VHNFnWm4jTPbb8YJiX%2F94t6STPfZgIgSih%2F15JtyjJcLudQWU3ITCCru3MAdAdq3UgtCGGrew8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoRozY%2F4q4spXgnAircA9sggig77STdXBV1rpMXgX9SyjINYm6Jdl%2BotRBh5qbxUi2OYByc%2F6mA28DQlDLZstPNCzV2x9w2ZgILqpUWwuWr29%2BMGFPjaZUcpoF2bsTieW4HXXj1Zaa3F7pG9%2FXkcUfRUQ4MXV1qusnluk6FEF63IJ5WKV2EWJglMdaK4mOLHJWIgJpfSEd%2BFXpsTwBEBAkuVajb6ezADhRSJS9y7wQJdmr0ptWjAdONU6%2F8DVUJfYGMnwlrPijdaN6rg9gkYmDxPlv9joGHO2PkZDt8owpTyoBGFDoIAGG1OmeLSubQSMRjjH9jMzOnKJeUuRwYl9kWqUZRmiWpQjw%2B%2BiE2%2FZmKbkM3PHy6ZG%2FPYKjJzH%2BOp6EX0xGsC1AYPlAskw6jdNRHWKfOkd%2FYxN7pmdMGelIMiBfWm4CNh1sitk9wYwE9PGT%2FIqWzQzIZFStIWrfQUIPp2AmM7Y3ZHrxX9OKLE6IEmk9FsgDNQUbXN%2F3NOC08s01nhlnYkrGt9oIECv6BPzTXrdo9HLu0LGzI84jam0QYdUaxz7rPV5Y1b8FwWeJFRbAhKQM4Rzxqklkf7%2FZZbBnQCx1YYCJRW4kOqV2fV5AzINJ3BH9zqoyq3M577Cv3wS8bR3C5F6ypYdoaMMKH1L4GOqUB9WE3G18HWyfUtG8aHk6cJbxAyT8RoMwC1W1IMe875zaeOzxFeY1GfQpNQJrc7lfLGwv6FPVx7NlrBwQKzgxAbRTya6SNREwc1kTGQYvLZr%2FuY5pg8JdKRokCaeJfAPzPW1PvXlFkU8uzOBsUAjjfzW2mxPa2xjYMTNwf6lwNimlrH%2F40sIIL4pmLlwqQHTie9w8q05ZhBdcaHmaW4JoMnTnngvXs&X-Amz-Signature=4d987043637ed37dff23153bd450bf5fe4cbe8d53a1fc57e291c5b59f13d80ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX6SDODG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVhxDRAvDMkms6VHNFnWm4jTPbb8YJiX%2F94t6STPfZgIgSih%2F15JtyjJcLudQWU3ITCCru3MAdAdq3UgtCGGrew8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoRozY%2F4q4spXgnAircA9sggig77STdXBV1rpMXgX9SyjINYm6Jdl%2BotRBh5qbxUi2OYByc%2F6mA28DQlDLZstPNCzV2x9w2ZgILqpUWwuWr29%2BMGFPjaZUcpoF2bsTieW4HXXj1Zaa3F7pG9%2FXkcUfRUQ4MXV1qusnluk6FEF63IJ5WKV2EWJglMdaK4mOLHJWIgJpfSEd%2BFXpsTwBEBAkuVajb6ezADhRSJS9y7wQJdmr0ptWjAdONU6%2F8DVUJfYGMnwlrPijdaN6rg9gkYmDxPlv9joGHO2PkZDt8owpTyoBGFDoIAGG1OmeLSubQSMRjjH9jMzOnKJeUuRwYl9kWqUZRmiWpQjw%2B%2BiE2%2FZmKbkM3PHy6ZG%2FPYKjJzH%2BOp6EX0xGsC1AYPlAskw6jdNRHWKfOkd%2FYxN7pmdMGelIMiBfWm4CNh1sitk9wYwE9PGT%2FIqWzQzIZFStIWrfQUIPp2AmM7Y3ZHrxX9OKLE6IEmk9FsgDNQUbXN%2F3NOC08s01nhlnYkrGt9oIECv6BPzTXrdo9HLu0LGzI84jam0QYdUaxz7rPV5Y1b8FwWeJFRbAhKQM4Rzxqklkf7%2FZZbBnQCx1YYCJRW4kOqV2fV5AzINJ3BH9zqoyq3M577Cv3wS8bR3C5F6ypYdoaMMKH1L4GOqUB9WE3G18HWyfUtG8aHk6cJbxAyT8RoMwC1W1IMe875zaeOzxFeY1GfQpNQJrc7lfLGwv6FPVx7NlrBwQKzgxAbRTya6SNREwc1kTGQYvLZr%2FuY5pg8JdKRokCaeJfAPzPW1PvXlFkU8uzOBsUAjjfzW2mxPa2xjYMTNwf6lwNimlrH%2F40sIIL4pmLlwqQHTie9w8q05ZhBdcaHmaW4JoMnTnngvXs&X-Amz-Signature=77312e05726e2010038b19edf9ed53542010e58f4628a9a1c4335838d56b9c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX6SDODG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVhxDRAvDMkms6VHNFnWm4jTPbb8YJiX%2F94t6STPfZgIgSih%2F15JtyjJcLudQWU3ITCCru3MAdAdq3UgtCGGrew8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoRozY%2F4q4spXgnAircA9sggig77STdXBV1rpMXgX9SyjINYm6Jdl%2BotRBh5qbxUi2OYByc%2F6mA28DQlDLZstPNCzV2x9w2ZgILqpUWwuWr29%2BMGFPjaZUcpoF2bsTieW4HXXj1Zaa3F7pG9%2FXkcUfRUQ4MXV1qusnluk6FEF63IJ5WKV2EWJglMdaK4mOLHJWIgJpfSEd%2BFXpsTwBEBAkuVajb6ezADhRSJS9y7wQJdmr0ptWjAdONU6%2F8DVUJfYGMnwlrPijdaN6rg9gkYmDxPlv9joGHO2PkZDt8owpTyoBGFDoIAGG1OmeLSubQSMRjjH9jMzOnKJeUuRwYl9kWqUZRmiWpQjw%2B%2BiE2%2FZmKbkM3PHy6ZG%2FPYKjJzH%2BOp6EX0xGsC1AYPlAskw6jdNRHWKfOkd%2FYxN7pmdMGelIMiBfWm4CNh1sitk9wYwE9PGT%2FIqWzQzIZFStIWrfQUIPp2AmM7Y3ZHrxX9OKLE6IEmk9FsgDNQUbXN%2F3NOC08s01nhlnYkrGt9oIECv6BPzTXrdo9HLu0LGzI84jam0QYdUaxz7rPV5Y1b8FwWeJFRbAhKQM4Rzxqklkf7%2FZZbBnQCx1YYCJRW4kOqV2fV5AzINJ3BH9zqoyq3M577Cv3wS8bR3C5F6ypYdoaMMKH1L4GOqUB9WE3G18HWyfUtG8aHk6cJbxAyT8RoMwC1W1IMe875zaeOzxFeY1GfQpNQJrc7lfLGwv6FPVx7NlrBwQKzgxAbRTya6SNREwc1kTGQYvLZr%2FuY5pg8JdKRokCaeJfAPzPW1PvXlFkU8uzOBsUAjjfzW2mxPa2xjYMTNwf6lwNimlrH%2F40sIIL4pmLlwqQHTie9w8q05ZhBdcaHmaW4JoMnTnngvXs&X-Amz-Signature=735ac2f8155211062724a9700a2c489d2c1051912ce55cef5e9c5601d5f2a04c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX6SDODG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVhxDRAvDMkms6VHNFnWm4jTPbb8YJiX%2F94t6STPfZgIgSih%2F15JtyjJcLudQWU3ITCCru3MAdAdq3UgtCGGrew8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoRozY%2F4q4spXgnAircA9sggig77STdXBV1rpMXgX9SyjINYm6Jdl%2BotRBh5qbxUi2OYByc%2F6mA28DQlDLZstPNCzV2x9w2ZgILqpUWwuWr29%2BMGFPjaZUcpoF2bsTieW4HXXj1Zaa3F7pG9%2FXkcUfRUQ4MXV1qusnluk6FEF63IJ5WKV2EWJglMdaK4mOLHJWIgJpfSEd%2BFXpsTwBEBAkuVajb6ezADhRSJS9y7wQJdmr0ptWjAdONU6%2F8DVUJfYGMnwlrPijdaN6rg9gkYmDxPlv9joGHO2PkZDt8owpTyoBGFDoIAGG1OmeLSubQSMRjjH9jMzOnKJeUuRwYl9kWqUZRmiWpQjw%2B%2BiE2%2FZmKbkM3PHy6ZG%2FPYKjJzH%2BOp6EX0xGsC1AYPlAskw6jdNRHWKfOkd%2FYxN7pmdMGelIMiBfWm4CNh1sitk9wYwE9PGT%2FIqWzQzIZFStIWrfQUIPp2AmM7Y3ZHrxX9OKLE6IEmk9FsgDNQUbXN%2F3NOC08s01nhlnYkrGt9oIECv6BPzTXrdo9HLu0LGzI84jam0QYdUaxz7rPV5Y1b8FwWeJFRbAhKQM4Rzxqklkf7%2FZZbBnQCx1YYCJRW4kOqV2fV5AzINJ3BH9zqoyq3M577Cv3wS8bR3C5F6ypYdoaMMKH1L4GOqUB9WE3G18HWyfUtG8aHk6cJbxAyT8RoMwC1W1IMe875zaeOzxFeY1GfQpNQJrc7lfLGwv6FPVx7NlrBwQKzgxAbRTya6SNREwc1kTGQYvLZr%2FuY5pg8JdKRokCaeJfAPzPW1PvXlFkU8uzOBsUAjjfzW2mxPa2xjYMTNwf6lwNimlrH%2F40sIIL4pmLlwqQHTie9w8q05ZhBdcaHmaW4JoMnTnngvXs&X-Amz-Signature=7b60e49bbc373ca6527b4fb5f55e3ebbf7c3ba293647655434bce7de92a5eb0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX6SDODG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVhxDRAvDMkms6VHNFnWm4jTPbb8YJiX%2F94t6STPfZgIgSih%2F15JtyjJcLudQWU3ITCCru3MAdAdq3UgtCGGrew8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoRozY%2F4q4spXgnAircA9sggig77STdXBV1rpMXgX9SyjINYm6Jdl%2BotRBh5qbxUi2OYByc%2F6mA28DQlDLZstPNCzV2x9w2ZgILqpUWwuWr29%2BMGFPjaZUcpoF2bsTieW4HXXj1Zaa3F7pG9%2FXkcUfRUQ4MXV1qusnluk6FEF63IJ5WKV2EWJglMdaK4mOLHJWIgJpfSEd%2BFXpsTwBEBAkuVajb6ezADhRSJS9y7wQJdmr0ptWjAdONU6%2F8DVUJfYGMnwlrPijdaN6rg9gkYmDxPlv9joGHO2PkZDt8owpTyoBGFDoIAGG1OmeLSubQSMRjjH9jMzOnKJeUuRwYl9kWqUZRmiWpQjw%2B%2BiE2%2FZmKbkM3PHy6ZG%2FPYKjJzH%2BOp6EX0xGsC1AYPlAskw6jdNRHWKfOkd%2FYxN7pmdMGelIMiBfWm4CNh1sitk9wYwE9PGT%2FIqWzQzIZFStIWrfQUIPp2AmM7Y3ZHrxX9OKLE6IEmk9FsgDNQUbXN%2F3NOC08s01nhlnYkrGt9oIECv6BPzTXrdo9HLu0LGzI84jam0QYdUaxz7rPV5Y1b8FwWeJFRbAhKQM4Rzxqklkf7%2FZZbBnQCx1YYCJRW4kOqV2fV5AzINJ3BH9zqoyq3M577Cv3wS8bR3C5F6ypYdoaMMKH1L4GOqUB9WE3G18HWyfUtG8aHk6cJbxAyT8RoMwC1W1IMe875zaeOzxFeY1GfQpNQJrc7lfLGwv6FPVx7NlrBwQKzgxAbRTya6SNREwc1kTGQYvLZr%2FuY5pg8JdKRokCaeJfAPzPW1PvXlFkU8uzOBsUAjjfzW2mxPa2xjYMTNwf6lwNimlrH%2F40sIIL4pmLlwqQHTie9w8q05ZhBdcaHmaW4JoMnTnngvXs&X-Amz-Signature=430a19c5ac2ee3a19db98bd261be96eb556981333925fecf15dc9eda99c7ce2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX6SDODG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVhxDRAvDMkms6VHNFnWm4jTPbb8YJiX%2F94t6STPfZgIgSih%2F15JtyjJcLudQWU3ITCCru3MAdAdq3UgtCGGrew8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoRozY%2F4q4spXgnAircA9sggig77STdXBV1rpMXgX9SyjINYm6Jdl%2BotRBh5qbxUi2OYByc%2F6mA28DQlDLZstPNCzV2x9w2ZgILqpUWwuWr29%2BMGFPjaZUcpoF2bsTieW4HXXj1Zaa3F7pG9%2FXkcUfRUQ4MXV1qusnluk6FEF63IJ5WKV2EWJglMdaK4mOLHJWIgJpfSEd%2BFXpsTwBEBAkuVajb6ezADhRSJS9y7wQJdmr0ptWjAdONU6%2F8DVUJfYGMnwlrPijdaN6rg9gkYmDxPlv9joGHO2PkZDt8owpTyoBGFDoIAGG1OmeLSubQSMRjjH9jMzOnKJeUuRwYl9kWqUZRmiWpQjw%2B%2BiE2%2FZmKbkM3PHy6ZG%2FPYKjJzH%2BOp6EX0xGsC1AYPlAskw6jdNRHWKfOkd%2FYxN7pmdMGelIMiBfWm4CNh1sitk9wYwE9PGT%2FIqWzQzIZFStIWrfQUIPp2AmM7Y3ZHrxX9OKLE6IEmk9FsgDNQUbXN%2F3NOC08s01nhlnYkrGt9oIECv6BPzTXrdo9HLu0LGzI84jam0QYdUaxz7rPV5Y1b8FwWeJFRbAhKQM4Rzxqklkf7%2FZZbBnQCx1YYCJRW4kOqV2fV5AzINJ3BH9zqoyq3M577Cv3wS8bR3C5F6ypYdoaMMKH1L4GOqUB9WE3G18HWyfUtG8aHk6cJbxAyT8RoMwC1W1IMe875zaeOzxFeY1GfQpNQJrc7lfLGwv6FPVx7NlrBwQKzgxAbRTya6SNREwc1kTGQYvLZr%2FuY5pg8JdKRokCaeJfAPzPW1PvXlFkU8uzOBsUAjjfzW2mxPa2xjYMTNwf6lwNimlrH%2F40sIIL4pmLlwqQHTie9w8q05ZhBdcaHmaW4JoMnTnngvXs&X-Amz-Signature=fd912367ceb4740c88481b042b7e5ed3446aee2e29e48d43146da35ce3194b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX6SDODG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVhxDRAvDMkms6VHNFnWm4jTPbb8YJiX%2F94t6STPfZgIgSih%2F15JtyjJcLudQWU3ITCCru3MAdAdq3UgtCGGrew8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoRozY%2F4q4spXgnAircA9sggig77STdXBV1rpMXgX9SyjINYm6Jdl%2BotRBh5qbxUi2OYByc%2F6mA28DQlDLZstPNCzV2x9w2ZgILqpUWwuWr29%2BMGFPjaZUcpoF2bsTieW4HXXj1Zaa3F7pG9%2FXkcUfRUQ4MXV1qusnluk6FEF63IJ5WKV2EWJglMdaK4mOLHJWIgJpfSEd%2BFXpsTwBEBAkuVajb6ezADhRSJS9y7wQJdmr0ptWjAdONU6%2F8DVUJfYGMnwlrPijdaN6rg9gkYmDxPlv9joGHO2PkZDt8owpTyoBGFDoIAGG1OmeLSubQSMRjjH9jMzOnKJeUuRwYl9kWqUZRmiWpQjw%2B%2BiE2%2FZmKbkM3PHy6ZG%2FPYKjJzH%2BOp6EX0xGsC1AYPlAskw6jdNRHWKfOkd%2FYxN7pmdMGelIMiBfWm4CNh1sitk9wYwE9PGT%2FIqWzQzIZFStIWrfQUIPp2AmM7Y3ZHrxX9OKLE6IEmk9FsgDNQUbXN%2F3NOC08s01nhlnYkrGt9oIECv6BPzTXrdo9HLu0LGzI84jam0QYdUaxz7rPV5Y1b8FwWeJFRbAhKQM4Rzxqklkf7%2FZZbBnQCx1YYCJRW4kOqV2fV5AzINJ3BH9zqoyq3M577Cv3wS8bR3C5F6ypYdoaMMKH1L4GOqUB9WE3G18HWyfUtG8aHk6cJbxAyT8RoMwC1W1IMe875zaeOzxFeY1GfQpNQJrc7lfLGwv6FPVx7NlrBwQKzgxAbRTya6SNREwc1kTGQYvLZr%2FuY5pg8JdKRokCaeJfAPzPW1PvXlFkU8uzOBsUAjjfzW2mxPa2xjYMTNwf6lwNimlrH%2F40sIIL4pmLlwqQHTie9w8q05ZhBdcaHmaW4JoMnTnngvXs&X-Amz-Signature=6738d7b7f48595d8f02460106f50bc7da3d2851768917446e31cac09047e45fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX6SDODG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVhxDRAvDMkms6VHNFnWm4jTPbb8YJiX%2F94t6STPfZgIgSih%2F15JtyjJcLudQWU3ITCCru3MAdAdq3UgtCGGrew8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoRozY%2F4q4spXgnAircA9sggig77STdXBV1rpMXgX9SyjINYm6Jdl%2BotRBh5qbxUi2OYByc%2F6mA28DQlDLZstPNCzV2x9w2ZgILqpUWwuWr29%2BMGFPjaZUcpoF2bsTieW4HXXj1Zaa3F7pG9%2FXkcUfRUQ4MXV1qusnluk6FEF63IJ5WKV2EWJglMdaK4mOLHJWIgJpfSEd%2BFXpsTwBEBAkuVajb6ezADhRSJS9y7wQJdmr0ptWjAdONU6%2F8DVUJfYGMnwlrPijdaN6rg9gkYmDxPlv9joGHO2PkZDt8owpTyoBGFDoIAGG1OmeLSubQSMRjjH9jMzOnKJeUuRwYl9kWqUZRmiWpQjw%2B%2BiE2%2FZmKbkM3PHy6ZG%2FPYKjJzH%2BOp6EX0xGsC1AYPlAskw6jdNRHWKfOkd%2FYxN7pmdMGelIMiBfWm4CNh1sitk9wYwE9PGT%2FIqWzQzIZFStIWrfQUIPp2AmM7Y3ZHrxX9OKLE6IEmk9FsgDNQUbXN%2F3NOC08s01nhlnYkrGt9oIECv6BPzTXrdo9HLu0LGzI84jam0QYdUaxz7rPV5Y1b8FwWeJFRbAhKQM4Rzxqklkf7%2FZZbBnQCx1YYCJRW4kOqV2fV5AzINJ3BH9zqoyq3M577Cv3wS8bR3C5F6ypYdoaMMKH1L4GOqUB9WE3G18HWyfUtG8aHk6cJbxAyT8RoMwC1W1IMe875zaeOzxFeY1GfQpNQJrc7lfLGwv6FPVx7NlrBwQKzgxAbRTya6SNREwc1kTGQYvLZr%2FuY5pg8JdKRokCaeJfAPzPW1PvXlFkU8uzOBsUAjjfzW2mxPa2xjYMTNwf6lwNimlrH%2F40sIIL4pmLlwqQHTie9w8q05ZhBdcaHmaW4JoMnTnngvXs&X-Amz-Signature=3131480a2e5b07e2c76b507eb78b28ce4924284c26c6409d861880796895996d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
