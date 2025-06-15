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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XD6KOC6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEAbTBY4Lyo7lXGwIe35eB4It2U5UsSiQu%2Fo9qaCLPccAiEAgUrm8EoTVF4vuYvUFayT4aPKeQHd7k3JjMqYjrdViIUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCRAYyn3tWBRQtaLXyrcA2AvkFoxdDQfuz1Y6vs9ye9GVSSxiQpfC1%2Frb3deBA8jeqTRcB3yTbT7ZJjSnlLWLNbfGyJWXsx3G5WmvYO5aTwYUdt76bPxwr8WyD7R2PJjooFScECAwkRiGXJrY0Z0K7EqF0wWLnHHoaIvz4MDVnegKOk7dAqHq5a5YRGQhcDQ%2B0CsZEoZ4H%2FUsI660pTneu%2BnPmR2AqHg55XxX8eTx44g9XoF9%2Fa0V3rIBAky8nzSt%2FTQyHiDhzBK8VckZKGjAuqoAwUjlAitwpd8ml5POZqfFhWn3ofzlZh%2BuQACwP9njJgv0fQDc%2FSGgKYU2yv3hZeCYykPdo9OIL%2BW6a18k%2FquZWMiwShUHWK50wTxHOIPis0Eu89IZOL7sLEp7xysJk6AHIuR%2FpWSD%2F5QWdI7ZKxXCX%2BxLTBcw9oj4eM1jVVwCwqY12YBVbfs1Rgj%2BJZ2aXP84Mz3al%2B7uc3OmsS6ndyqf6hP6JsDynhvm9xE7W7Z%2BVWCqDSzg8cFZmgvUrGAZOPiMEEWzjFr0RjvltzNp2Sn%2FhcT3c3ssyisFY%2Bsyl38NP43yRTsA5VzAX7Meko9wfMIzz8Sxfc9%2BOhvyV1R8Eau9BTKFz9YqRIYkI4ZhbYsB0FLjqtr7kNj24HqMJ3%2FuMIGOqUBFQwNBsra9VyIvenztBtxRXjeIYag5MuvBe8JQ4lpyTZ78jGGwOakBortkMiyTt9Hi2I9fzTIcWtJlZ%2BKGcs2yG98ar4WfEjOqQwb%2B4Q%2FKcYKA6CDABgHHHiC6Qps%2BSXsLS8VfQwyS%2FBjXQ9Z1VnJLxQZlun8f%2FN%2FXDfcfNW%2BpXA53NUe35OzSVXJXL46sicfebApOc5EpY3nbm%2BGMpmlsBNPKwcK&X-Amz-Signature=06cbbe6de319b55dad961b7fa3637495688acc05a28287197840e942b567cfcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XD6KOC6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEAbTBY4Lyo7lXGwIe35eB4It2U5UsSiQu%2Fo9qaCLPccAiEAgUrm8EoTVF4vuYvUFayT4aPKeQHd7k3JjMqYjrdViIUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCRAYyn3tWBRQtaLXyrcA2AvkFoxdDQfuz1Y6vs9ye9GVSSxiQpfC1%2Frb3deBA8jeqTRcB3yTbT7ZJjSnlLWLNbfGyJWXsx3G5WmvYO5aTwYUdt76bPxwr8WyD7R2PJjooFScECAwkRiGXJrY0Z0K7EqF0wWLnHHoaIvz4MDVnegKOk7dAqHq5a5YRGQhcDQ%2B0CsZEoZ4H%2FUsI660pTneu%2BnPmR2AqHg55XxX8eTx44g9XoF9%2Fa0V3rIBAky8nzSt%2FTQyHiDhzBK8VckZKGjAuqoAwUjlAitwpd8ml5POZqfFhWn3ofzlZh%2BuQACwP9njJgv0fQDc%2FSGgKYU2yv3hZeCYykPdo9OIL%2BW6a18k%2FquZWMiwShUHWK50wTxHOIPis0Eu89IZOL7sLEp7xysJk6AHIuR%2FpWSD%2F5QWdI7ZKxXCX%2BxLTBcw9oj4eM1jVVwCwqY12YBVbfs1Rgj%2BJZ2aXP84Mz3al%2B7uc3OmsS6ndyqf6hP6JsDynhvm9xE7W7Z%2BVWCqDSzg8cFZmgvUrGAZOPiMEEWzjFr0RjvltzNp2Sn%2FhcT3c3ssyisFY%2Bsyl38NP43yRTsA5VzAX7Meko9wfMIzz8Sxfc9%2BOhvyV1R8Eau9BTKFz9YqRIYkI4ZhbYsB0FLjqtr7kNj24HqMJ3%2FuMIGOqUBFQwNBsra9VyIvenztBtxRXjeIYag5MuvBe8JQ4lpyTZ78jGGwOakBortkMiyTt9Hi2I9fzTIcWtJlZ%2BKGcs2yG98ar4WfEjOqQwb%2B4Q%2FKcYKA6CDABgHHHiC6Qps%2BSXsLS8VfQwyS%2FBjXQ9Z1VnJLxQZlun8f%2FN%2FXDfcfNW%2BpXA53NUe35OzSVXJXL46sicfebApOc5EpY3nbm%2BGMpmlsBNPKwcK&X-Amz-Signature=88ce0b0445191345c862e3edd9c1ddfc0c44c25e1a658e5f0b4f698e91560d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XD6KOC6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEAbTBY4Lyo7lXGwIe35eB4It2U5UsSiQu%2Fo9qaCLPccAiEAgUrm8EoTVF4vuYvUFayT4aPKeQHd7k3JjMqYjrdViIUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCRAYyn3tWBRQtaLXyrcA2AvkFoxdDQfuz1Y6vs9ye9GVSSxiQpfC1%2Frb3deBA8jeqTRcB3yTbT7ZJjSnlLWLNbfGyJWXsx3G5WmvYO5aTwYUdt76bPxwr8WyD7R2PJjooFScECAwkRiGXJrY0Z0K7EqF0wWLnHHoaIvz4MDVnegKOk7dAqHq5a5YRGQhcDQ%2B0CsZEoZ4H%2FUsI660pTneu%2BnPmR2AqHg55XxX8eTx44g9XoF9%2Fa0V3rIBAky8nzSt%2FTQyHiDhzBK8VckZKGjAuqoAwUjlAitwpd8ml5POZqfFhWn3ofzlZh%2BuQACwP9njJgv0fQDc%2FSGgKYU2yv3hZeCYykPdo9OIL%2BW6a18k%2FquZWMiwShUHWK50wTxHOIPis0Eu89IZOL7sLEp7xysJk6AHIuR%2FpWSD%2F5QWdI7ZKxXCX%2BxLTBcw9oj4eM1jVVwCwqY12YBVbfs1Rgj%2BJZ2aXP84Mz3al%2B7uc3OmsS6ndyqf6hP6JsDynhvm9xE7W7Z%2BVWCqDSzg8cFZmgvUrGAZOPiMEEWzjFr0RjvltzNp2Sn%2FhcT3c3ssyisFY%2Bsyl38NP43yRTsA5VzAX7Meko9wfMIzz8Sxfc9%2BOhvyV1R8Eau9BTKFz9YqRIYkI4ZhbYsB0FLjqtr7kNj24HqMJ3%2FuMIGOqUBFQwNBsra9VyIvenztBtxRXjeIYag5MuvBe8JQ4lpyTZ78jGGwOakBortkMiyTt9Hi2I9fzTIcWtJlZ%2BKGcs2yG98ar4WfEjOqQwb%2B4Q%2FKcYKA6CDABgHHHiC6Qps%2BSXsLS8VfQwyS%2FBjXQ9Z1VnJLxQZlun8f%2FN%2FXDfcfNW%2BpXA53NUe35OzSVXJXL46sicfebApOc5EpY3nbm%2BGMpmlsBNPKwcK&X-Amz-Signature=23de0945a2b77287ad6e0fd16283f5f2efbadbc0ec91e49646bce99d75288b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XD6KOC6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEAbTBY4Lyo7lXGwIe35eB4It2U5UsSiQu%2Fo9qaCLPccAiEAgUrm8EoTVF4vuYvUFayT4aPKeQHd7k3JjMqYjrdViIUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCRAYyn3tWBRQtaLXyrcA2AvkFoxdDQfuz1Y6vs9ye9GVSSxiQpfC1%2Frb3deBA8jeqTRcB3yTbT7ZJjSnlLWLNbfGyJWXsx3G5WmvYO5aTwYUdt76bPxwr8WyD7R2PJjooFScECAwkRiGXJrY0Z0K7EqF0wWLnHHoaIvz4MDVnegKOk7dAqHq5a5YRGQhcDQ%2B0CsZEoZ4H%2FUsI660pTneu%2BnPmR2AqHg55XxX8eTx44g9XoF9%2Fa0V3rIBAky8nzSt%2FTQyHiDhzBK8VckZKGjAuqoAwUjlAitwpd8ml5POZqfFhWn3ofzlZh%2BuQACwP9njJgv0fQDc%2FSGgKYU2yv3hZeCYykPdo9OIL%2BW6a18k%2FquZWMiwShUHWK50wTxHOIPis0Eu89IZOL7sLEp7xysJk6AHIuR%2FpWSD%2F5QWdI7ZKxXCX%2BxLTBcw9oj4eM1jVVwCwqY12YBVbfs1Rgj%2BJZ2aXP84Mz3al%2B7uc3OmsS6ndyqf6hP6JsDynhvm9xE7W7Z%2BVWCqDSzg8cFZmgvUrGAZOPiMEEWzjFr0RjvltzNp2Sn%2FhcT3c3ssyisFY%2Bsyl38NP43yRTsA5VzAX7Meko9wfMIzz8Sxfc9%2BOhvyV1R8Eau9BTKFz9YqRIYkI4ZhbYsB0FLjqtr7kNj24HqMJ3%2FuMIGOqUBFQwNBsra9VyIvenztBtxRXjeIYag5MuvBe8JQ4lpyTZ78jGGwOakBortkMiyTt9Hi2I9fzTIcWtJlZ%2BKGcs2yG98ar4WfEjOqQwb%2B4Q%2FKcYKA6CDABgHHHiC6Qps%2BSXsLS8VfQwyS%2FBjXQ9Z1VnJLxQZlun8f%2FN%2FXDfcfNW%2BpXA53NUe35OzSVXJXL46sicfebApOc5EpY3nbm%2BGMpmlsBNPKwcK&X-Amz-Signature=ef4a8dd71f89434677c947e660586f3f4207f58cc6402aeb0d94869e7fb4fb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XD6KOC6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEAbTBY4Lyo7lXGwIe35eB4It2U5UsSiQu%2Fo9qaCLPccAiEAgUrm8EoTVF4vuYvUFayT4aPKeQHd7k3JjMqYjrdViIUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCRAYyn3tWBRQtaLXyrcA2AvkFoxdDQfuz1Y6vs9ye9GVSSxiQpfC1%2Frb3deBA8jeqTRcB3yTbT7ZJjSnlLWLNbfGyJWXsx3G5WmvYO5aTwYUdt76bPxwr8WyD7R2PJjooFScECAwkRiGXJrY0Z0K7EqF0wWLnHHoaIvz4MDVnegKOk7dAqHq5a5YRGQhcDQ%2B0CsZEoZ4H%2FUsI660pTneu%2BnPmR2AqHg55XxX8eTx44g9XoF9%2Fa0V3rIBAky8nzSt%2FTQyHiDhzBK8VckZKGjAuqoAwUjlAitwpd8ml5POZqfFhWn3ofzlZh%2BuQACwP9njJgv0fQDc%2FSGgKYU2yv3hZeCYykPdo9OIL%2BW6a18k%2FquZWMiwShUHWK50wTxHOIPis0Eu89IZOL7sLEp7xysJk6AHIuR%2FpWSD%2F5QWdI7ZKxXCX%2BxLTBcw9oj4eM1jVVwCwqY12YBVbfs1Rgj%2BJZ2aXP84Mz3al%2B7uc3OmsS6ndyqf6hP6JsDynhvm9xE7W7Z%2BVWCqDSzg8cFZmgvUrGAZOPiMEEWzjFr0RjvltzNp2Sn%2FhcT3c3ssyisFY%2Bsyl38NP43yRTsA5VzAX7Meko9wfMIzz8Sxfc9%2BOhvyV1R8Eau9BTKFz9YqRIYkI4ZhbYsB0FLjqtr7kNj24HqMJ3%2FuMIGOqUBFQwNBsra9VyIvenztBtxRXjeIYag5MuvBe8JQ4lpyTZ78jGGwOakBortkMiyTt9Hi2I9fzTIcWtJlZ%2BKGcs2yG98ar4WfEjOqQwb%2B4Q%2FKcYKA6CDABgHHHiC6Qps%2BSXsLS8VfQwyS%2FBjXQ9Z1VnJLxQZlun8f%2FN%2FXDfcfNW%2BpXA53NUe35OzSVXJXL46sicfebApOc5EpY3nbm%2BGMpmlsBNPKwcK&X-Amz-Signature=f799d4fd050e57a509274d0a1fa17cbc5ffa5c3c6f3f4aff6b2708dae523b52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XD6KOC6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEAbTBY4Lyo7lXGwIe35eB4It2U5UsSiQu%2Fo9qaCLPccAiEAgUrm8EoTVF4vuYvUFayT4aPKeQHd7k3JjMqYjrdViIUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCRAYyn3tWBRQtaLXyrcA2AvkFoxdDQfuz1Y6vs9ye9GVSSxiQpfC1%2Frb3deBA8jeqTRcB3yTbT7ZJjSnlLWLNbfGyJWXsx3G5WmvYO5aTwYUdt76bPxwr8WyD7R2PJjooFScECAwkRiGXJrY0Z0K7EqF0wWLnHHoaIvz4MDVnegKOk7dAqHq5a5YRGQhcDQ%2B0CsZEoZ4H%2FUsI660pTneu%2BnPmR2AqHg55XxX8eTx44g9XoF9%2Fa0V3rIBAky8nzSt%2FTQyHiDhzBK8VckZKGjAuqoAwUjlAitwpd8ml5POZqfFhWn3ofzlZh%2BuQACwP9njJgv0fQDc%2FSGgKYU2yv3hZeCYykPdo9OIL%2BW6a18k%2FquZWMiwShUHWK50wTxHOIPis0Eu89IZOL7sLEp7xysJk6AHIuR%2FpWSD%2F5QWdI7ZKxXCX%2BxLTBcw9oj4eM1jVVwCwqY12YBVbfs1Rgj%2BJZ2aXP84Mz3al%2B7uc3OmsS6ndyqf6hP6JsDynhvm9xE7W7Z%2BVWCqDSzg8cFZmgvUrGAZOPiMEEWzjFr0RjvltzNp2Sn%2FhcT3c3ssyisFY%2Bsyl38NP43yRTsA5VzAX7Meko9wfMIzz8Sxfc9%2BOhvyV1R8Eau9BTKFz9YqRIYkI4ZhbYsB0FLjqtr7kNj24HqMJ3%2FuMIGOqUBFQwNBsra9VyIvenztBtxRXjeIYag5MuvBe8JQ4lpyTZ78jGGwOakBortkMiyTt9Hi2I9fzTIcWtJlZ%2BKGcs2yG98ar4WfEjOqQwb%2B4Q%2FKcYKA6CDABgHHHiC6Qps%2BSXsLS8VfQwyS%2FBjXQ9Z1VnJLxQZlun8f%2FN%2FXDfcfNW%2BpXA53NUe35OzSVXJXL46sicfebApOc5EpY3nbm%2BGMpmlsBNPKwcK&X-Amz-Signature=77aca32f3e76181442cb4c1576107d38b81a239d3dbb854a8e09a21fef3b9de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XD6KOC6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEAbTBY4Lyo7lXGwIe35eB4It2U5UsSiQu%2Fo9qaCLPccAiEAgUrm8EoTVF4vuYvUFayT4aPKeQHd7k3JjMqYjrdViIUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCRAYyn3tWBRQtaLXyrcA2AvkFoxdDQfuz1Y6vs9ye9GVSSxiQpfC1%2Frb3deBA8jeqTRcB3yTbT7ZJjSnlLWLNbfGyJWXsx3G5WmvYO5aTwYUdt76bPxwr8WyD7R2PJjooFScECAwkRiGXJrY0Z0K7EqF0wWLnHHoaIvz4MDVnegKOk7dAqHq5a5YRGQhcDQ%2B0CsZEoZ4H%2FUsI660pTneu%2BnPmR2AqHg55XxX8eTx44g9XoF9%2Fa0V3rIBAky8nzSt%2FTQyHiDhzBK8VckZKGjAuqoAwUjlAitwpd8ml5POZqfFhWn3ofzlZh%2BuQACwP9njJgv0fQDc%2FSGgKYU2yv3hZeCYykPdo9OIL%2BW6a18k%2FquZWMiwShUHWK50wTxHOIPis0Eu89IZOL7sLEp7xysJk6AHIuR%2FpWSD%2F5QWdI7ZKxXCX%2BxLTBcw9oj4eM1jVVwCwqY12YBVbfs1Rgj%2BJZ2aXP84Mz3al%2B7uc3OmsS6ndyqf6hP6JsDynhvm9xE7W7Z%2BVWCqDSzg8cFZmgvUrGAZOPiMEEWzjFr0RjvltzNp2Sn%2FhcT3c3ssyisFY%2Bsyl38NP43yRTsA5VzAX7Meko9wfMIzz8Sxfc9%2BOhvyV1R8Eau9BTKFz9YqRIYkI4ZhbYsB0FLjqtr7kNj24HqMJ3%2FuMIGOqUBFQwNBsra9VyIvenztBtxRXjeIYag5MuvBe8JQ4lpyTZ78jGGwOakBortkMiyTt9Hi2I9fzTIcWtJlZ%2BKGcs2yG98ar4WfEjOqQwb%2B4Q%2FKcYKA6CDABgHHHiC6Qps%2BSXsLS8VfQwyS%2FBjXQ9Z1VnJLxQZlun8f%2FN%2FXDfcfNW%2BpXA53NUe35OzSVXJXL46sicfebApOc5EpY3nbm%2BGMpmlsBNPKwcK&X-Amz-Signature=0b5ff2a6db1a4b8a2a1d7d740ab5d76b35fd058dee7ed5e6408f017f5dc933e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XD6KOC6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEAbTBY4Lyo7lXGwIe35eB4It2U5UsSiQu%2Fo9qaCLPccAiEAgUrm8EoTVF4vuYvUFayT4aPKeQHd7k3JjMqYjrdViIUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCRAYyn3tWBRQtaLXyrcA2AvkFoxdDQfuz1Y6vs9ye9GVSSxiQpfC1%2Frb3deBA8jeqTRcB3yTbT7ZJjSnlLWLNbfGyJWXsx3G5WmvYO5aTwYUdt76bPxwr8WyD7R2PJjooFScECAwkRiGXJrY0Z0K7EqF0wWLnHHoaIvz4MDVnegKOk7dAqHq5a5YRGQhcDQ%2B0CsZEoZ4H%2FUsI660pTneu%2BnPmR2AqHg55XxX8eTx44g9XoF9%2Fa0V3rIBAky8nzSt%2FTQyHiDhzBK8VckZKGjAuqoAwUjlAitwpd8ml5POZqfFhWn3ofzlZh%2BuQACwP9njJgv0fQDc%2FSGgKYU2yv3hZeCYykPdo9OIL%2BW6a18k%2FquZWMiwShUHWK50wTxHOIPis0Eu89IZOL7sLEp7xysJk6AHIuR%2FpWSD%2F5QWdI7ZKxXCX%2BxLTBcw9oj4eM1jVVwCwqY12YBVbfs1Rgj%2BJZ2aXP84Mz3al%2B7uc3OmsS6ndyqf6hP6JsDynhvm9xE7W7Z%2BVWCqDSzg8cFZmgvUrGAZOPiMEEWzjFr0RjvltzNp2Sn%2FhcT3c3ssyisFY%2Bsyl38NP43yRTsA5VzAX7Meko9wfMIzz8Sxfc9%2BOhvyV1R8Eau9BTKFz9YqRIYkI4ZhbYsB0FLjqtr7kNj24HqMJ3%2FuMIGOqUBFQwNBsra9VyIvenztBtxRXjeIYag5MuvBe8JQ4lpyTZ78jGGwOakBortkMiyTt9Hi2I9fzTIcWtJlZ%2BKGcs2yG98ar4WfEjOqQwb%2B4Q%2FKcYKA6CDABgHHHiC6Qps%2BSXsLS8VfQwyS%2FBjXQ9Z1VnJLxQZlun8f%2FN%2FXDfcfNW%2BpXA53NUe35OzSVXJXL46sicfebApOc5EpY3nbm%2BGMpmlsBNPKwcK&X-Amz-Signature=0fefe3a18c6547efb3f4d0a48634991b2a96e69dbd495ba08596d149662cb602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
