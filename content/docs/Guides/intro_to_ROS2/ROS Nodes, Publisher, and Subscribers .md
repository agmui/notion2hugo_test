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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SB3F64%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDUkjqCNaCLT0q%2BXMHYuv24kx7jADyk4%2ByueV5OlQvj%2BQIhAOVcE6IHmU%2BeIuzq8Es%2FgRzhJDIHDpZdSfNSXpOyXSC1KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym9cN33Zv1TOD9%2FKUq3APHUHTf2zTG1xvroPEaZtHZM0aA1tkQxDZE%2BWK7%2BxmpIngXR06DltfbNIpEU0IUFlyoG9PYdiHPTlRJZRaEemCTp73MEzEVBdSEuOAoAufYFBetM7S0UdVJOSOcRiLcob11gB6yZAbgQ7rBlkGKcy4cGEqD5cGtOK2VGBbuzU18fHev%2B6fAhBj1Dzr1bIDhS5sZZYRs3emZOz%2B2fkvJ5JVw%2BZDGk2yVgCPUwqsr5gBG%2FWrr7NyIexMHX6ojDt1beU1NsrTDGRrPaexKJtOc4Clwr7mxuU8TI2pCmqpOFTF2iYKJtY6etm%2BhSYNKuUqS5sHrZZHeZf3%2BwcrbpbecxkdsXFCDblB3Rb1q%2BCed1qoGb4OAxudRSQ27R7qaDLlbUyb8YyKcD8ysjx%2B1zVglB1Wfxy%2BAk6O7mn1tLVy%2BvOmssJMXw%2BSkJMczykkz5vN%2FjPY2xb9QIXPSkY99bKhZQaoRCJpnMHPJ9YQ9Okl7C6RUw%2Br9Vd3WNVe4iC9OpwCDLHI03%2F6A3eLoeJwhKgaZjF5QygKhU3KbqmWQ3OiSIbvar3PCo8FR1wHvMy9J640%2F7ATEMLF2lsBO4fEpijdSxHQS9AGrk7JsWobpXzPWCkqpuuB7T5c46jK2MtnJizDVseC%2FBjqkAdu8gZa7ZAmLbtKAYjAkUJRfks8whmgJcehgbgXSJi8uD%2F%2FrAOJ1mrig6Jy%2Bfw9C8l8s9PMil5w9LJe8Yd6L0381p4FVDDnt6e%2BP6dpR054IoWtb3Rt7YbUeX87DXpuRQHPafjhWrkQZzYKCacHPu0EBqPBu8VpA35x5wsKqPPFf7%2FpMhmWDbgt6xUtjFwJvEsq8x8bD7OSjQvwMPJcdlaxY5E1N&X-Amz-Signature=e1d3ad88a31eee9860db0d35c29ce35749522ac08eb5f066af3860ac1b67c10d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SB3F64%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDUkjqCNaCLT0q%2BXMHYuv24kx7jADyk4%2ByueV5OlQvj%2BQIhAOVcE6IHmU%2BeIuzq8Es%2FgRzhJDIHDpZdSfNSXpOyXSC1KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym9cN33Zv1TOD9%2FKUq3APHUHTf2zTG1xvroPEaZtHZM0aA1tkQxDZE%2BWK7%2BxmpIngXR06DltfbNIpEU0IUFlyoG9PYdiHPTlRJZRaEemCTp73MEzEVBdSEuOAoAufYFBetM7S0UdVJOSOcRiLcob11gB6yZAbgQ7rBlkGKcy4cGEqD5cGtOK2VGBbuzU18fHev%2B6fAhBj1Dzr1bIDhS5sZZYRs3emZOz%2B2fkvJ5JVw%2BZDGk2yVgCPUwqsr5gBG%2FWrr7NyIexMHX6ojDt1beU1NsrTDGRrPaexKJtOc4Clwr7mxuU8TI2pCmqpOFTF2iYKJtY6etm%2BhSYNKuUqS5sHrZZHeZf3%2BwcrbpbecxkdsXFCDblB3Rb1q%2BCed1qoGb4OAxudRSQ27R7qaDLlbUyb8YyKcD8ysjx%2B1zVglB1Wfxy%2BAk6O7mn1tLVy%2BvOmssJMXw%2BSkJMczykkz5vN%2FjPY2xb9QIXPSkY99bKhZQaoRCJpnMHPJ9YQ9Okl7C6RUw%2Br9Vd3WNVe4iC9OpwCDLHI03%2F6A3eLoeJwhKgaZjF5QygKhU3KbqmWQ3OiSIbvar3PCo8FR1wHvMy9J640%2F7ATEMLF2lsBO4fEpijdSxHQS9AGrk7JsWobpXzPWCkqpuuB7T5c46jK2MtnJizDVseC%2FBjqkAdu8gZa7ZAmLbtKAYjAkUJRfks8whmgJcehgbgXSJi8uD%2F%2FrAOJ1mrig6Jy%2Bfw9C8l8s9PMil5w9LJe8Yd6L0381p4FVDDnt6e%2BP6dpR054IoWtb3Rt7YbUeX87DXpuRQHPafjhWrkQZzYKCacHPu0EBqPBu8VpA35x5wsKqPPFf7%2FpMhmWDbgt6xUtjFwJvEsq8x8bD7OSjQvwMPJcdlaxY5E1N&X-Amz-Signature=c6170c059e4ab82ecee8ee418352b15c5bd22381414d64806df34f0d27d32e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SB3F64%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDUkjqCNaCLT0q%2BXMHYuv24kx7jADyk4%2ByueV5OlQvj%2BQIhAOVcE6IHmU%2BeIuzq8Es%2FgRzhJDIHDpZdSfNSXpOyXSC1KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym9cN33Zv1TOD9%2FKUq3APHUHTf2zTG1xvroPEaZtHZM0aA1tkQxDZE%2BWK7%2BxmpIngXR06DltfbNIpEU0IUFlyoG9PYdiHPTlRJZRaEemCTp73MEzEVBdSEuOAoAufYFBetM7S0UdVJOSOcRiLcob11gB6yZAbgQ7rBlkGKcy4cGEqD5cGtOK2VGBbuzU18fHev%2B6fAhBj1Dzr1bIDhS5sZZYRs3emZOz%2B2fkvJ5JVw%2BZDGk2yVgCPUwqsr5gBG%2FWrr7NyIexMHX6ojDt1beU1NsrTDGRrPaexKJtOc4Clwr7mxuU8TI2pCmqpOFTF2iYKJtY6etm%2BhSYNKuUqS5sHrZZHeZf3%2BwcrbpbecxkdsXFCDblB3Rb1q%2BCed1qoGb4OAxudRSQ27R7qaDLlbUyb8YyKcD8ysjx%2B1zVglB1Wfxy%2BAk6O7mn1tLVy%2BvOmssJMXw%2BSkJMczykkz5vN%2FjPY2xb9QIXPSkY99bKhZQaoRCJpnMHPJ9YQ9Okl7C6RUw%2Br9Vd3WNVe4iC9OpwCDLHI03%2F6A3eLoeJwhKgaZjF5QygKhU3KbqmWQ3OiSIbvar3PCo8FR1wHvMy9J640%2F7ATEMLF2lsBO4fEpijdSxHQS9AGrk7JsWobpXzPWCkqpuuB7T5c46jK2MtnJizDVseC%2FBjqkAdu8gZa7ZAmLbtKAYjAkUJRfks8whmgJcehgbgXSJi8uD%2F%2FrAOJ1mrig6Jy%2Bfw9C8l8s9PMil5w9LJe8Yd6L0381p4FVDDnt6e%2BP6dpR054IoWtb3Rt7YbUeX87DXpuRQHPafjhWrkQZzYKCacHPu0EBqPBu8VpA35x5wsKqPPFf7%2FpMhmWDbgt6xUtjFwJvEsq8x8bD7OSjQvwMPJcdlaxY5E1N&X-Amz-Signature=d383d266898bbc956d5ac95f94a39d7fe74e5e72cb9d56945872d8dbb6f279a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SB3F64%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDUkjqCNaCLT0q%2BXMHYuv24kx7jADyk4%2ByueV5OlQvj%2BQIhAOVcE6IHmU%2BeIuzq8Es%2FgRzhJDIHDpZdSfNSXpOyXSC1KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym9cN33Zv1TOD9%2FKUq3APHUHTf2zTG1xvroPEaZtHZM0aA1tkQxDZE%2BWK7%2BxmpIngXR06DltfbNIpEU0IUFlyoG9PYdiHPTlRJZRaEemCTp73MEzEVBdSEuOAoAufYFBetM7S0UdVJOSOcRiLcob11gB6yZAbgQ7rBlkGKcy4cGEqD5cGtOK2VGBbuzU18fHev%2B6fAhBj1Dzr1bIDhS5sZZYRs3emZOz%2B2fkvJ5JVw%2BZDGk2yVgCPUwqsr5gBG%2FWrr7NyIexMHX6ojDt1beU1NsrTDGRrPaexKJtOc4Clwr7mxuU8TI2pCmqpOFTF2iYKJtY6etm%2BhSYNKuUqS5sHrZZHeZf3%2BwcrbpbecxkdsXFCDblB3Rb1q%2BCed1qoGb4OAxudRSQ27R7qaDLlbUyb8YyKcD8ysjx%2B1zVglB1Wfxy%2BAk6O7mn1tLVy%2BvOmssJMXw%2BSkJMczykkz5vN%2FjPY2xb9QIXPSkY99bKhZQaoRCJpnMHPJ9YQ9Okl7C6RUw%2Br9Vd3WNVe4iC9OpwCDLHI03%2F6A3eLoeJwhKgaZjF5QygKhU3KbqmWQ3OiSIbvar3PCo8FR1wHvMy9J640%2F7ATEMLF2lsBO4fEpijdSxHQS9AGrk7JsWobpXzPWCkqpuuB7T5c46jK2MtnJizDVseC%2FBjqkAdu8gZa7ZAmLbtKAYjAkUJRfks8whmgJcehgbgXSJi8uD%2F%2FrAOJ1mrig6Jy%2Bfw9C8l8s9PMil5w9LJe8Yd6L0381p4FVDDnt6e%2BP6dpR054IoWtb3Rt7YbUeX87DXpuRQHPafjhWrkQZzYKCacHPu0EBqPBu8VpA35x5wsKqPPFf7%2FpMhmWDbgt6xUtjFwJvEsq8x8bD7OSjQvwMPJcdlaxY5E1N&X-Amz-Signature=e92f788e86515794fd53ada86494ad83ad9e45dbb7294473537406ef3d09663f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SB3F64%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDUkjqCNaCLT0q%2BXMHYuv24kx7jADyk4%2ByueV5OlQvj%2BQIhAOVcE6IHmU%2BeIuzq8Es%2FgRzhJDIHDpZdSfNSXpOyXSC1KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym9cN33Zv1TOD9%2FKUq3APHUHTf2zTG1xvroPEaZtHZM0aA1tkQxDZE%2BWK7%2BxmpIngXR06DltfbNIpEU0IUFlyoG9PYdiHPTlRJZRaEemCTp73MEzEVBdSEuOAoAufYFBetM7S0UdVJOSOcRiLcob11gB6yZAbgQ7rBlkGKcy4cGEqD5cGtOK2VGBbuzU18fHev%2B6fAhBj1Dzr1bIDhS5sZZYRs3emZOz%2B2fkvJ5JVw%2BZDGk2yVgCPUwqsr5gBG%2FWrr7NyIexMHX6ojDt1beU1NsrTDGRrPaexKJtOc4Clwr7mxuU8TI2pCmqpOFTF2iYKJtY6etm%2BhSYNKuUqS5sHrZZHeZf3%2BwcrbpbecxkdsXFCDblB3Rb1q%2BCed1qoGb4OAxudRSQ27R7qaDLlbUyb8YyKcD8ysjx%2B1zVglB1Wfxy%2BAk6O7mn1tLVy%2BvOmssJMXw%2BSkJMczykkz5vN%2FjPY2xb9QIXPSkY99bKhZQaoRCJpnMHPJ9YQ9Okl7C6RUw%2Br9Vd3WNVe4iC9OpwCDLHI03%2F6A3eLoeJwhKgaZjF5QygKhU3KbqmWQ3OiSIbvar3PCo8FR1wHvMy9J640%2F7ATEMLF2lsBO4fEpijdSxHQS9AGrk7JsWobpXzPWCkqpuuB7T5c46jK2MtnJizDVseC%2FBjqkAdu8gZa7ZAmLbtKAYjAkUJRfks8whmgJcehgbgXSJi8uD%2F%2FrAOJ1mrig6Jy%2Bfw9C8l8s9PMil5w9LJe8Yd6L0381p4FVDDnt6e%2BP6dpR054IoWtb3Rt7YbUeX87DXpuRQHPafjhWrkQZzYKCacHPu0EBqPBu8VpA35x5wsKqPPFf7%2FpMhmWDbgt6xUtjFwJvEsq8x8bD7OSjQvwMPJcdlaxY5E1N&X-Amz-Signature=701d3f7b2a4370525c02d314e603486816f5ef789a7637a4800d0d6ef326c371&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SB3F64%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDUkjqCNaCLT0q%2BXMHYuv24kx7jADyk4%2ByueV5OlQvj%2BQIhAOVcE6IHmU%2BeIuzq8Es%2FgRzhJDIHDpZdSfNSXpOyXSC1KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym9cN33Zv1TOD9%2FKUq3APHUHTf2zTG1xvroPEaZtHZM0aA1tkQxDZE%2BWK7%2BxmpIngXR06DltfbNIpEU0IUFlyoG9PYdiHPTlRJZRaEemCTp73MEzEVBdSEuOAoAufYFBetM7S0UdVJOSOcRiLcob11gB6yZAbgQ7rBlkGKcy4cGEqD5cGtOK2VGBbuzU18fHev%2B6fAhBj1Dzr1bIDhS5sZZYRs3emZOz%2B2fkvJ5JVw%2BZDGk2yVgCPUwqsr5gBG%2FWrr7NyIexMHX6ojDt1beU1NsrTDGRrPaexKJtOc4Clwr7mxuU8TI2pCmqpOFTF2iYKJtY6etm%2BhSYNKuUqS5sHrZZHeZf3%2BwcrbpbecxkdsXFCDblB3Rb1q%2BCed1qoGb4OAxudRSQ27R7qaDLlbUyb8YyKcD8ysjx%2B1zVglB1Wfxy%2BAk6O7mn1tLVy%2BvOmssJMXw%2BSkJMczykkz5vN%2FjPY2xb9QIXPSkY99bKhZQaoRCJpnMHPJ9YQ9Okl7C6RUw%2Br9Vd3WNVe4iC9OpwCDLHI03%2F6A3eLoeJwhKgaZjF5QygKhU3KbqmWQ3OiSIbvar3PCo8FR1wHvMy9J640%2F7ATEMLF2lsBO4fEpijdSxHQS9AGrk7JsWobpXzPWCkqpuuB7T5c46jK2MtnJizDVseC%2FBjqkAdu8gZa7ZAmLbtKAYjAkUJRfks8whmgJcehgbgXSJi8uD%2F%2FrAOJ1mrig6Jy%2Bfw9C8l8s9PMil5w9LJe8Yd6L0381p4FVDDnt6e%2BP6dpR054IoWtb3Rt7YbUeX87DXpuRQHPafjhWrkQZzYKCacHPu0EBqPBu8VpA35x5wsKqPPFf7%2FpMhmWDbgt6xUtjFwJvEsq8x8bD7OSjQvwMPJcdlaxY5E1N&X-Amz-Signature=c0fe50499b69a52cf7064118f79747653c4f8e2b64726a5ed52de56d6050afbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SB3F64%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDUkjqCNaCLT0q%2BXMHYuv24kx7jADyk4%2ByueV5OlQvj%2BQIhAOVcE6IHmU%2BeIuzq8Es%2FgRzhJDIHDpZdSfNSXpOyXSC1KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym9cN33Zv1TOD9%2FKUq3APHUHTf2zTG1xvroPEaZtHZM0aA1tkQxDZE%2BWK7%2BxmpIngXR06DltfbNIpEU0IUFlyoG9PYdiHPTlRJZRaEemCTp73MEzEVBdSEuOAoAufYFBetM7S0UdVJOSOcRiLcob11gB6yZAbgQ7rBlkGKcy4cGEqD5cGtOK2VGBbuzU18fHev%2B6fAhBj1Dzr1bIDhS5sZZYRs3emZOz%2B2fkvJ5JVw%2BZDGk2yVgCPUwqsr5gBG%2FWrr7NyIexMHX6ojDt1beU1NsrTDGRrPaexKJtOc4Clwr7mxuU8TI2pCmqpOFTF2iYKJtY6etm%2BhSYNKuUqS5sHrZZHeZf3%2BwcrbpbecxkdsXFCDblB3Rb1q%2BCed1qoGb4OAxudRSQ27R7qaDLlbUyb8YyKcD8ysjx%2B1zVglB1Wfxy%2BAk6O7mn1tLVy%2BvOmssJMXw%2BSkJMczykkz5vN%2FjPY2xb9QIXPSkY99bKhZQaoRCJpnMHPJ9YQ9Okl7C6RUw%2Br9Vd3WNVe4iC9OpwCDLHI03%2F6A3eLoeJwhKgaZjF5QygKhU3KbqmWQ3OiSIbvar3PCo8FR1wHvMy9J640%2F7ATEMLF2lsBO4fEpijdSxHQS9AGrk7JsWobpXzPWCkqpuuB7T5c46jK2MtnJizDVseC%2FBjqkAdu8gZa7ZAmLbtKAYjAkUJRfks8whmgJcehgbgXSJi8uD%2F%2FrAOJ1mrig6Jy%2Bfw9C8l8s9PMil5w9LJe8Yd6L0381p4FVDDnt6e%2BP6dpR054IoWtb3Rt7YbUeX87DXpuRQHPafjhWrkQZzYKCacHPu0EBqPBu8VpA35x5wsKqPPFf7%2FpMhmWDbgt6xUtjFwJvEsq8x8bD7OSjQvwMPJcdlaxY5E1N&X-Amz-Signature=ddda5e45aa62db11d92b12a3d8b6283915fe8d3906670c0771d0f9240bdd8275&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SB3F64%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDUkjqCNaCLT0q%2BXMHYuv24kx7jADyk4%2ByueV5OlQvj%2BQIhAOVcE6IHmU%2BeIuzq8Es%2FgRzhJDIHDpZdSfNSXpOyXSC1KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym9cN33Zv1TOD9%2FKUq3APHUHTf2zTG1xvroPEaZtHZM0aA1tkQxDZE%2BWK7%2BxmpIngXR06DltfbNIpEU0IUFlyoG9PYdiHPTlRJZRaEemCTp73MEzEVBdSEuOAoAufYFBetM7S0UdVJOSOcRiLcob11gB6yZAbgQ7rBlkGKcy4cGEqD5cGtOK2VGBbuzU18fHev%2B6fAhBj1Dzr1bIDhS5sZZYRs3emZOz%2B2fkvJ5JVw%2BZDGk2yVgCPUwqsr5gBG%2FWrr7NyIexMHX6ojDt1beU1NsrTDGRrPaexKJtOc4Clwr7mxuU8TI2pCmqpOFTF2iYKJtY6etm%2BhSYNKuUqS5sHrZZHeZf3%2BwcrbpbecxkdsXFCDblB3Rb1q%2BCed1qoGb4OAxudRSQ27R7qaDLlbUyb8YyKcD8ysjx%2B1zVglB1Wfxy%2BAk6O7mn1tLVy%2BvOmssJMXw%2BSkJMczykkz5vN%2FjPY2xb9QIXPSkY99bKhZQaoRCJpnMHPJ9YQ9Okl7C6RUw%2Br9Vd3WNVe4iC9OpwCDLHI03%2F6A3eLoeJwhKgaZjF5QygKhU3KbqmWQ3OiSIbvar3PCo8FR1wHvMy9J640%2F7ATEMLF2lsBO4fEpijdSxHQS9AGrk7JsWobpXzPWCkqpuuB7T5c46jK2MtnJizDVseC%2FBjqkAdu8gZa7ZAmLbtKAYjAkUJRfks8whmgJcehgbgXSJi8uD%2F%2FrAOJ1mrig6Jy%2Bfw9C8l8s9PMil5w9LJe8Yd6L0381p4FVDDnt6e%2BP6dpR054IoWtb3Rt7YbUeX87DXpuRQHPafjhWrkQZzYKCacHPu0EBqPBu8VpA35x5wsKqPPFf7%2FpMhmWDbgt6xUtjFwJvEsq8x8bD7OSjQvwMPJcdlaxY5E1N&X-Amz-Signature=e0ea9776ab48c065088432670da88e73583a8eb82cbad46628e05216483cd006&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
