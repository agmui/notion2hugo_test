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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCZU3XX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGlFlW5V45urkvYvJzE9QJ67l6YIMO3y44DbQKv%2FRemAiAS4TRZwE0hBuJah4x8mrG429rxDR1xy6fqh3BmK7nktyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFnpUcHtYDccpwHnKtwDW6amDnk1ddIqPFanT%2BloEwvFaK5CIivH3GChfbUBmMWFvW7Q5T3Qbt%2Bbf1VTVfWh%2F74%2BpDl37X%2BTALYd91LhE2WzDGNX9JYyXtLM7o6StsBvPihrBIp8eBSZDMzrAPCtz%2F8jDDe%2Btw9W8TmJJ6XSgrVhOwsouZ2hDLg8qWEYuyxpm%2FyWeQhR4QZhUvmdqTNU%2FOWE1AcZRGhQUdBab1tZFlGOmKyzM7Y6p%2BetD%2FRgbqZJURnRYx9%2FgYwgNmzIBg7kynl393GEYu%2FzIrpAAkSmxdxSsYQqgRGTNc0dxuXNYmSLVgRjeoDBM%2B%2BdPFMbZBHQfHBqZ0H%2FyOnhOCAgA64HEXSH1X90bM%2B3G0PbZR3%2FqXYoQSic%2BgeBa4aTuJnlxca0eOFccHjmn%2FuQcZLAN13frf1VkRO14psflFdfhQ8ltAc%2BbBe3LICaTvD2ZOoavVGErNkQyGzlH8BuYAc6w%2BBcNWDrLe0mXKKIk4oGv04l7lHlXKWqprdwiZ91WR45AeBxINqt6rGIB%2FyPgF6o6R1UNIbkvF4kZvaC3HUWfcpiiiclsN0LoiBzwsFLv4sTV21gwwItdP1X9zWwd4F5%2BD4CB%2FYxIaNywdKnrm46POkQ%2FdRcrH%2BPNfKzUz8OFiwwza3LwwY6pgFaN%2BDl%2F9EItZYMO1glOjHvze2Dlm8jK8qg9rKfkIlfkyITWzZHZe1jQH115d9vvYPkEQYKWi6YQKUTx%2FXnM4%2BztlFqvYdCkK1dXSg4hrSJjWrpy8Qut6ItInyNAjIjIpoUu5L8iIX%2FGN7hnb2irV5UVFa0InB64%2FuQOzO%2FWFmaKHkyGkd8VZ20n8jKFj%2FyVhAcaAnwtSi7udfDmgzXc3jtxDYnfAmF&X-Amz-Signature=6c1652e4f62e93e9de976a6518cd0cf67bf15c330991c47a3dbcef0c33ddb61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCZU3XX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGlFlW5V45urkvYvJzE9QJ67l6YIMO3y44DbQKv%2FRemAiAS4TRZwE0hBuJah4x8mrG429rxDR1xy6fqh3BmK7nktyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFnpUcHtYDccpwHnKtwDW6amDnk1ddIqPFanT%2BloEwvFaK5CIivH3GChfbUBmMWFvW7Q5T3Qbt%2Bbf1VTVfWh%2F74%2BpDl37X%2BTALYd91LhE2WzDGNX9JYyXtLM7o6StsBvPihrBIp8eBSZDMzrAPCtz%2F8jDDe%2Btw9W8TmJJ6XSgrVhOwsouZ2hDLg8qWEYuyxpm%2FyWeQhR4QZhUvmdqTNU%2FOWE1AcZRGhQUdBab1tZFlGOmKyzM7Y6p%2BetD%2FRgbqZJURnRYx9%2FgYwgNmzIBg7kynl393GEYu%2FzIrpAAkSmxdxSsYQqgRGTNc0dxuXNYmSLVgRjeoDBM%2B%2BdPFMbZBHQfHBqZ0H%2FyOnhOCAgA64HEXSH1X90bM%2B3G0PbZR3%2FqXYoQSic%2BgeBa4aTuJnlxca0eOFccHjmn%2FuQcZLAN13frf1VkRO14psflFdfhQ8ltAc%2BbBe3LICaTvD2ZOoavVGErNkQyGzlH8BuYAc6w%2BBcNWDrLe0mXKKIk4oGv04l7lHlXKWqprdwiZ91WR45AeBxINqt6rGIB%2FyPgF6o6R1UNIbkvF4kZvaC3HUWfcpiiiclsN0LoiBzwsFLv4sTV21gwwItdP1X9zWwd4F5%2BD4CB%2FYxIaNywdKnrm46POkQ%2FdRcrH%2BPNfKzUz8OFiwwza3LwwY6pgFaN%2BDl%2F9EItZYMO1glOjHvze2Dlm8jK8qg9rKfkIlfkyITWzZHZe1jQH115d9vvYPkEQYKWi6YQKUTx%2FXnM4%2BztlFqvYdCkK1dXSg4hrSJjWrpy8Qut6ItInyNAjIjIpoUu5L8iIX%2FGN7hnb2irV5UVFa0InB64%2FuQOzO%2FWFmaKHkyGkd8VZ20n8jKFj%2FyVhAcaAnwtSi7udfDmgzXc3jtxDYnfAmF&X-Amz-Signature=f3efd6dfbcd14862c6903d7d9fd39383a989bc3678a5c3daecb9bc2dd88c9b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCZU3XX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGlFlW5V45urkvYvJzE9QJ67l6YIMO3y44DbQKv%2FRemAiAS4TRZwE0hBuJah4x8mrG429rxDR1xy6fqh3BmK7nktyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFnpUcHtYDccpwHnKtwDW6amDnk1ddIqPFanT%2BloEwvFaK5CIivH3GChfbUBmMWFvW7Q5T3Qbt%2Bbf1VTVfWh%2F74%2BpDl37X%2BTALYd91LhE2WzDGNX9JYyXtLM7o6StsBvPihrBIp8eBSZDMzrAPCtz%2F8jDDe%2Btw9W8TmJJ6XSgrVhOwsouZ2hDLg8qWEYuyxpm%2FyWeQhR4QZhUvmdqTNU%2FOWE1AcZRGhQUdBab1tZFlGOmKyzM7Y6p%2BetD%2FRgbqZJURnRYx9%2FgYwgNmzIBg7kynl393GEYu%2FzIrpAAkSmxdxSsYQqgRGTNc0dxuXNYmSLVgRjeoDBM%2B%2BdPFMbZBHQfHBqZ0H%2FyOnhOCAgA64HEXSH1X90bM%2B3G0PbZR3%2FqXYoQSic%2BgeBa4aTuJnlxca0eOFccHjmn%2FuQcZLAN13frf1VkRO14psflFdfhQ8ltAc%2BbBe3LICaTvD2ZOoavVGErNkQyGzlH8BuYAc6w%2BBcNWDrLe0mXKKIk4oGv04l7lHlXKWqprdwiZ91WR45AeBxINqt6rGIB%2FyPgF6o6R1UNIbkvF4kZvaC3HUWfcpiiiclsN0LoiBzwsFLv4sTV21gwwItdP1X9zWwd4F5%2BD4CB%2FYxIaNywdKnrm46POkQ%2FdRcrH%2BPNfKzUz8OFiwwza3LwwY6pgFaN%2BDl%2F9EItZYMO1glOjHvze2Dlm8jK8qg9rKfkIlfkyITWzZHZe1jQH115d9vvYPkEQYKWi6YQKUTx%2FXnM4%2BztlFqvYdCkK1dXSg4hrSJjWrpy8Qut6ItInyNAjIjIpoUu5L8iIX%2FGN7hnb2irV5UVFa0InB64%2FuQOzO%2FWFmaKHkyGkd8VZ20n8jKFj%2FyVhAcaAnwtSi7udfDmgzXc3jtxDYnfAmF&X-Amz-Signature=df31bcf74e9510edaee1c8afb18e57b325e60761e6fe906e7f95a5b465584837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCZU3XX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGlFlW5V45urkvYvJzE9QJ67l6YIMO3y44DbQKv%2FRemAiAS4TRZwE0hBuJah4x8mrG429rxDR1xy6fqh3BmK7nktyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFnpUcHtYDccpwHnKtwDW6amDnk1ddIqPFanT%2BloEwvFaK5CIivH3GChfbUBmMWFvW7Q5T3Qbt%2Bbf1VTVfWh%2F74%2BpDl37X%2BTALYd91LhE2WzDGNX9JYyXtLM7o6StsBvPihrBIp8eBSZDMzrAPCtz%2F8jDDe%2Btw9W8TmJJ6XSgrVhOwsouZ2hDLg8qWEYuyxpm%2FyWeQhR4QZhUvmdqTNU%2FOWE1AcZRGhQUdBab1tZFlGOmKyzM7Y6p%2BetD%2FRgbqZJURnRYx9%2FgYwgNmzIBg7kynl393GEYu%2FzIrpAAkSmxdxSsYQqgRGTNc0dxuXNYmSLVgRjeoDBM%2B%2BdPFMbZBHQfHBqZ0H%2FyOnhOCAgA64HEXSH1X90bM%2B3G0PbZR3%2FqXYoQSic%2BgeBa4aTuJnlxca0eOFccHjmn%2FuQcZLAN13frf1VkRO14psflFdfhQ8ltAc%2BbBe3LICaTvD2ZOoavVGErNkQyGzlH8BuYAc6w%2BBcNWDrLe0mXKKIk4oGv04l7lHlXKWqprdwiZ91WR45AeBxINqt6rGIB%2FyPgF6o6R1UNIbkvF4kZvaC3HUWfcpiiiclsN0LoiBzwsFLv4sTV21gwwItdP1X9zWwd4F5%2BD4CB%2FYxIaNywdKnrm46POkQ%2FdRcrH%2BPNfKzUz8OFiwwza3LwwY6pgFaN%2BDl%2F9EItZYMO1glOjHvze2Dlm8jK8qg9rKfkIlfkyITWzZHZe1jQH115d9vvYPkEQYKWi6YQKUTx%2FXnM4%2BztlFqvYdCkK1dXSg4hrSJjWrpy8Qut6ItInyNAjIjIpoUu5L8iIX%2FGN7hnb2irV5UVFa0InB64%2FuQOzO%2FWFmaKHkyGkd8VZ20n8jKFj%2FyVhAcaAnwtSi7udfDmgzXc3jtxDYnfAmF&X-Amz-Signature=a1f25c396eb50072b0186ade0a548b2b72915f6c23b982101fe84617ef300060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCZU3XX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGlFlW5V45urkvYvJzE9QJ67l6YIMO3y44DbQKv%2FRemAiAS4TRZwE0hBuJah4x8mrG429rxDR1xy6fqh3BmK7nktyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFnpUcHtYDccpwHnKtwDW6amDnk1ddIqPFanT%2BloEwvFaK5CIivH3GChfbUBmMWFvW7Q5T3Qbt%2Bbf1VTVfWh%2F74%2BpDl37X%2BTALYd91LhE2WzDGNX9JYyXtLM7o6StsBvPihrBIp8eBSZDMzrAPCtz%2F8jDDe%2Btw9W8TmJJ6XSgrVhOwsouZ2hDLg8qWEYuyxpm%2FyWeQhR4QZhUvmdqTNU%2FOWE1AcZRGhQUdBab1tZFlGOmKyzM7Y6p%2BetD%2FRgbqZJURnRYx9%2FgYwgNmzIBg7kynl393GEYu%2FzIrpAAkSmxdxSsYQqgRGTNc0dxuXNYmSLVgRjeoDBM%2B%2BdPFMbZBHQfHBqZ0H%2FyOnhOCAgA64HEXSH1X90bM%2B3G0PbZR3%2FqXYoQSic%2BgeBa4aTuJnlxca0eOFccHjmn%2FuQcZLAN13frf1VkRO14psflFdfhQ8ltAc%2BbBe3LICaTvD2ZOoavVGErNkQyGzlH8BuYAc6w%2BBcNWDrLe0mXKKIk4oGv04l7lHlXKWqprdwiZ91WR45AeBxINqt6rGIB%2FyPgF6o6R1UNIbkvF4kZvaC3HUWfcpiiiclsN0LoiBzwsFLv4sTV21gwwItdP1X9zWwd4F5%2BD4CB%2FYxIaNywdKnrm46POkQ%2FdRcrH%2BPNfKzUz8OFiwwza3LwwY6pgFaN%2BDl%2F9EItZYMO1glOjHvze2Dlm8jK8qg9rKfkIlfkyITWzZHZe1jQH115d9vvYPkEQYKWi6YQKUTx%2FXnM4%2BztlFqvYdCkK1dXSg4hrSJjWrpy8Qut6ItInyNAjIjIpoUu5L8iIX%2FGN7hnb2irV5UVFa0InB64%2FuQOzO%2FWFmaKHkyGkd8VZ20n8jKFj%2FyVhAcaAnwtSi7udfDmgzXc3jtxDYnfAmF&X-Amz-Signature=4368374fbc7b857ff2f60ce6764a46d718483febd31a1343ae0479b002708406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCZU3XX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGlFlW5V45urkvYvJzE9QJ67l6YIMO3y44DbQKv%2FRemAiAS4TRZwE0hBuJah4x8mrG429rxDR1xy6fqh3BmK7nktyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFnpUcHtYDccpwHnKtwDW6amDnk1ddIqPFanT%2BloEwvFaK5CIivH3GChfbUBmMWFvW7Q5T3Qbt%2Bbf1VTVfWh%2F74%2BpDl37X%2BTALYd91LhE2WzDGNX9JYyXtLM7o6StsBvPihrBIp8eBSZDMzrAPCtz%2F8jDDe%2Btw9W8TmJJ6XSgrVhOwsouZ2hDLg8qWEYuyxpm%2FyWeQhR4QZhUvmdqTNU%2FOWE1AcZRGhQUdBab1tZFlGOmKyzM7Y6p%2BetD%2FRgbqZJURnRYx9%2FgYwgNmzIBg7kynl393GEYu%2FzIrpAAkSmxdxSsYQqgRGTNc0dxuXNYmSLVgRjeoDBM%2B%2BdPFMbZBHQfHBqZ0H%2FyOnhOCAgA64HEXSH1X90bM%2B3G0PbZR3%2FqXYoQSic%2BgeBa4aTuJnlxca0eOFccHjmn%2FuQcZLAN13frf1VkRO14psflFdfhQ8ltAc%2BbBe3LICaTvD2ZOoavVGErNkQyGzlH8BuYAc6w%2BBcNWDrLe0mXKKIk4oGv04l7lHlXKWqprdwiZ91WR45AeBxINqt6rGIB%2FyPgF6o6R1UNIbkvF4kZvaC3HUWfcpiiiclsN0LoiBzwsFLv4sTV21gwwItdP1X9zWwd4F5%2BD4CB%2FYxIaNywdKnrm46POkQ%2FdRcrH%2BPNfKzUz8OFiwwza3LwwY6pgFaN%2BDl%2F9EItZYMO1glOjHvze2Dlm8jK8qg9rKfkIlfkyITWzZHZe1jQH115d9vvYPkEQYKWi6YQKUTx%2FXnM4%2BztlFqvYdCkK1dXSg4hrSJjWrpy8Qut6ItInyNAjIjIpoUu5L8iIX%2FGN7hnb2irV5UVFa0InB64%2FuQOzO%2FWFmaKHkyGkd8VZ20n8jKFj%2FyVhAcaAnwtSi7udfDmgzXc3jtxDYnfAmF&X-Amz-Signature=88c547ad33482787ba549eedde13726f319bbcc4e1045eda257840f705798806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCZU3XX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGlFlW5V45urkvYvJzE9QJ67l6YIMO3y44DbQKv%2FRemAiAS4TRZwE0hBuJah4x8mrG429rxDR1xy6fqh3BmK7nktyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFnpUcHtYDccpwHnKtwDW6amDnk1ddIqPFanT%2BloEwvFaK5CIivH3GChfbUBmMWFvW7Q5T3Qbt%2Bbf1VTVfWh%2F74%2BpDl37X%2BTALYd91LhE2WzDGNX9JYyXtLM7o6StsBvPihrBIp8eBSZDMzrAPCtz%2F8jDDe%2Btw9W8TmJJ6XSgrVhOwsouZ2hDLg8qWEYuyxpm%2FyWeQhR4QZhUvmdqTNU%2FOWE1AcZRGhQUdBab1tZFlGOmKyzM7Y6p%2BetD%2FRgbqZJURnRYx9%2FgYwgNmzIBg7kynl393GEYu%2FzIrpAAkSmxdxSsYQqgRGTNc0dxuXNYmSLVgRjeoDBM%2B%2BdPFMbZBHQfHBqZ0H%2FyOnhOCAgA64HEXSH1X90bM%2B3G0PbZR3%2FqXYoQSic%2BgeBa4aTuJnlxca0eOFccHjmn%2FuQcZLAN13frf1VkRO14psflFdfhQ8ltAc%2BbBe3LICaTvD2ZOoavVGErNkQyGzlH8BuYAc6w%2BBcNWDrLe0mXKKIk4oGv04l7lHlXKWqprdwiZ91WR45AeBxINqt6rGIB%2FyPgF6o6R1UNIbkvF4kZvaC3HUWfcpiiiclsN0LoiBzwsFLv4sTV21gwwItdP1X9zWwd4F5%2BD4CB%2FYxIaNywdKnrm46POkQ%2FdRcrH%2BPNfKzUz8OFiwwza3LwwY6pgFaN%2BDl%2F9EItZYMO1glOjHvze2Dlm8jK8qg9rKfkIlfkyITWzZHZe1jQH115d9vvYPkEQYKWi6YQKUTx%2FXnM4%2BztlFqvYdCkK1dXSg4hrSJjWrpy8Qut6ItInyNAjIjIpoUu5L8iIX%2FGN7hnb2irV5UVFa0InB64%2FuQOzO%2FWFmaKHkyGkd8VZ20n8jKFj%2FyVhAcaAnwtSi7udfDmgzXc3jtxDYnfAmF&X-Amz-Signature=a5f4aec0f05514d9331bfbb703f2978929366900a1ce9c8489bf3ee219a8b512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCZU3XX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGlFlW5V45urkvYvJzE9QJ67l6YIMO3y44DbQKv%2FRemAiAS4TRZwE0hBuJah4x8mrG429rxDR1xy6fqh3BmK7nktyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFnpUcHtYDccpwHnKtwDW6amDnk1ddIqPFanT%2BloEwvFaK5CIivH3GChfbUBmMWFvW7Q5T3Qbt%2Bbf1VTVfWh%2F74%2BpDl37X%2BTALYd91LhE2WzDGNX9JYyXtLM7o6StsBvPihrBIp8eBSZDMzrAPCtz%2F8jDDe%2Btw9W8TmJJ6XSgrVhOwsouZ2hDLg8qWEYuyxpm%2FyWeQhR4QZhUvmdqTNU%2FOWE1AcZRGhQUdBab1tZFlGOmKyzM7Y6p%2BetD%2FRgbqZJURnRYx9%2FgYwgNmzIBg7kynl393GEYu%2FzIrpAAkSmxdxSsYQqgRGTNc0dxuXNYmSLVgRjeoDBM%2B%2BdPFMbZBHQfHBqZ0H%2FyOnhOCAgA64HEXSH1X90bM%2B3G0PbZR3%2FqXYoQSic%2BgeBa4aTuJnlxca0eOFccHjmn%2FuQcZLAN13frf1VkRO14psflFdfhQ8ltAc%2BbBe3LICaTvD2ZOoavVGErNkQyGzlH8BuYAc6w%2BBcNWDrLe0mXKKIk4oGv04l7lHlXKWqprdwiZ91WR45AeBxINqt6rGIB%2FyPgF6o6R1UNIbkvF4kZvaC3HUWfcpiiiclsN0LoiBzwsFLv4sTV21gwwItdP1X9zWwd4F5%2BD4CB%2FYxIaNywdKnrm46POkQ%2FdRcrH%2BPNfKzUz8OFiwwza3LwwY6pgFaN%2BDl%2F9EItZYMO1glOjHvze2Dlm8jK8qg9rKfkIlfkyITWzZHZe1jQH115d9vvYPkEQYKWi6YQKUTx%2FXnM4%2BztlFqvYdCkK1dXSg4hrSJjWrpy8Qut6ItInyNAjIjIpoUu5L8iIX%2FGN7hnb2irV5UVFa0InB64%2FuQOzO%2FWFmaKHkyGkd8VZ20n8jKFj%2FyVhAcaAnwtSi7udfDmgzXc3jtxDYnfAmF&X-Amz-Signature=7223238ce1fbbae420324922541510e49ebd44bfab3cfbee898c97d5841723a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
