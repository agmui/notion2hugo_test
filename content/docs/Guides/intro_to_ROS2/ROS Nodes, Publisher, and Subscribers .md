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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXYVZBO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICIroO1mVpZaC6rG1OH0t9P5nNIXZGyJyZeqTnYLwVGGAiEAg3g1Hm45Dr4XwXUxjE%2BZMN6joMAzy9at5wzFt1bN0lQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJkqZslhNUqcbibHCrcA55soDth1q%2FEqUzHP9RX9Y75vFmpIN%2FcVW%2B9tN5Lq3UBemPUk8FyaWlkwoqwQgmqpCzOcPgIz6tHbTXbOz%2FHbtYwAWkr2W3SYImGLMpSKXSaRkm0WbpDTA9ePyQE%2BSRINiOXHCJFuPOvjqNzYf3zjx759cx9xtCmQgC2mVCV6rDR1ZgJIF5jQL3Cz0DHZLeRzn0XHtqtJg1k8xXf0%2BcvCDeMykiiiDl9BHpLu%2FbAaSXHfN%2Bdxk6ZPR5ZUYPuN2in0V8ByS%2BHwQi60BNz9XbFjHzFpjb7ZXO%2FoRefqTim%2BNcI8PRqDefPEjcm3re9LAVXZ6wqieP2%2FcB2aeRQ%2BE7ZAq2YrwXONDYqOXnqS7l5eDH2F%2FD1QW4yWm9zGOyO7qiCpaozSQCFgRGtK%2B%2FrHGgiOcNVagyGc7R3Gq9a3msr2OUgdlBk9Xkb0%2FIYKvrb8E3P9f44swIvibuGpwGRbtLLE%2FQIOS67aHoo1TIwYzfRo1B%2F81pnXOM%2Ft1NJ4HZ1OefJv3o%2FGjf58Qa3r59hWBqpKaCszK%2BTDK8QJ5lRJeCp146hfyOzmggVTTLDDpmbol88e%2FBq9bRn6T%2F5FY7sgU9N%2BM8Tj5FndwZcfU0W9AAbM%2Ft%2BA7TXorlZGoYk%2F2FoMJLDqcIGOqUBA7lAr%2Fj81Ddys3xu8bSoMGIbAtgiM3iefjuKN5RtKQaOwsUerLqRmfeRTHyXHiakDIAiw6FO9jZVpBJuN%2FG0NKiHQfaRl4%2FILupKyTI7d4UUM7chKObOkkzrlPm9cAyYeuUBzYBgnc2SPZjd9HHt%2Bjk8Q0HVqhehSzX%2F%2F2UYV6oaSHChXrgVkZJttgzx2fB8HNPmkqxuEEXsSM07aCFALRpndtax&X-Amz-Signature=fb4164ac444e7267537260bcaecd8aed4f0bae6728f0e2f152d5c1e7fa6bc77b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXYVZBO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICIroO1mVpZaC6rG1OH0t9P5nNIXZGyJyZeqTnYLwVGGAiEAg3g1Hm45Dr4XwXUxjE%2BZMN6joMAzy9at5wzFt1bN0lQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJkqZslhNUqcbibHCrcA55soDth1q%2FEqUzHP9RX9Y75vFmpIN%2FcVW%2B9tN5Lq3UBemPUk8FyaWlkwoqwQgmqpCzOcPgIz6tHbTXbOz%2FHbtYwAWkr2W3SYImGLMpSKXSaRkm0WbpDTA9ePyQE%2BSRINiOXHCJFuPOvjqNzYf3zjx759cx9xtCmQgC2mVCV6rDR1ZgJIF5jQL3Cz0DHZLeRzn0XHtqtJg1k8xXf0%2BcvCDeMykiiiDl9BHpLu%2FbAaSXHfN%2Bdxk6ZPR5ZUYPuN2in0V8ByS%2BHwQi60BNz9XbFjHzFpjb7ZXO%2FoRefqTim%2BNcI8PRqDefPEjcm3re9LAVXZ6wqieP2%2FcB2aeRQ%2BE7ZAq2YrwXONDYqOXnqS7l5eDH2F%2FD1QW4yWm9zGOyO7qiCpaozSQCFgRGtK%2B%2FrHGgiOcNVagyGc7R3Gq9a3msr2OUgdlBk9Xkb0%2FIYKvrb8E3P9f44swIvibuGpwGRbtLLE%2FQIOS67aHoo1TIwYzfRo1B%2F81pnXOM%2Ft1NJ4HZ1OefJv3o%2FGjf58Qa3r59hWBqpKaCszK%2BTDK8QJ5lRJeCp146hfyOzmggVTTLDDpmbol88e%2FBq9bRn6T%2F5FY7sgU9N%2BM8Tj5FndwZcfU0W9AAbM%2Ft%2BA7TXorlZGoYk%2F2FoMJLDqcIGOqUBA7lAr%2Fj81Ddys3xu8bSoMGIbAtgiM3iefjuKN5RtKQaOwsUerLqRmfeRTHyXHiakDIAiw6FO9jZVpBJuN%2FG0NKiHQfaRl4%2FILupKyTI7d4UUM7chKObOkkzrlPm9cAyYeuUBzYBgnc2SPZjd9HHt%2Bjk8Q0HVqhehSzX%2F%2F2UYV6oaSHChXrgVkZJttgzx2fB8HNPmkqxuEEXsSM07aCFALRpndtax&X-Amz-Signature=59499837ff38501c609acbb2b58472e59c7310e212ea0654e6957d5540d15a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXYVZBO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICIroO1mVpZaC6rG1OH0t9P5nNIXZGyJyZeqTnYLwVGGAiEAg3g1Hm45Dr4XwXUxjE%2BZMN6joMAzy9at5wzFt1bN0lQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJkqZslhNUqcbibHCrcA55soDth1q%2FEqUzHP9RX9Y75vFmpIN%2FcVW%2B9tN5Lq3UBemPUk8FyaWlkwoqwQgmqpCzOcPgIz6tHbTXbOz%2FHbtYwAWkr2W3SYImGLMpSKXSaRkm0WbpDTA9ePyQE%2BSRINiOXHCJFuPOvjqNzYf3zjx759cx9xtCmQgC2mVCV6rDR1ZgJIF5jQL3Cz0DHZLeRzn0XHtqtJg1k8xXf0%2BcvCDeMykiiiDl9BHpLu%2FbAaSXHfN%2Bdxk6ZPR5ZUYPuN2in0V8ByS%2BHwQi60BNz9XbFjHzFpjb7ZXO%2FoRefqTim%2BNcI8PRqDefPEjcm3re9LAVXZ6wqieP2%2FcB2aeRQ%2BE7ZAq2YrwXONDYqOXnqS7l5eDH2F%2FD1QW4yWm9zGOyO7qiCpaozSQCFgRGtK%2B%2FrHGgiOcNVagyGc7R3Gq9a3msr2OUgdlBk9Xkb0%2FIYKvrb8E3P9f44swIvibuGpwGRbtLLE%2FQIOS67aHoo1TIwYzfRo1B%2F81pnXOM%2Ft1NJ4HZ1OefJv3o%2FGjf58Qa3r59hWBqpKaCszK%2BTDK8QJ5lRJeCp146hfyOzmggVTTLDDpmbol88e%2FBq9bRn6T%2F5FY7sgU9N%2BM8Tj5FndwZcfU0W9AAbM%2Ft%2BA7TXorlZGoYk%2F2FoMJLDqcIGOqUBA7lAr%2Fj81Ddys3xu8bSoMGIbAtgiM3iefjuKN5RtKQaOwsUerLqRmfeRTHyXHiakDIAiw6FO9jZVpBJuN%2FG0NKiHQfaRl4%2FILupKyTI7d4UUM7chKObOkkzrlPm9cAyYeuUBzYBgnc2SPZjd9HHt%2Bjk8Q0HVqhehSzX%2F%2F2UYV6oaSHChXrgVkZJttgzx2fB8HNPmkqxuEEXsSM07aCFALRpndtax&X-Amz-Signature=7bdf43a6f6f59a47aea85af85b1a0156540df7c7a241c97d500e6e9ed7ad2ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXYVZBO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICIroO1mVpZaC6rG1OH0t9P5nNIXZGyJyZeqTnYLwVGGAiEAg3g1Hm45Dr4XwXUxjE%2BZMN6joMAzy9at5wzFt1bN0lQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJkqZslhNUqcbibHCrcA55soDth1q%2FEqUzHP9RX9Y75vFmpIN%2FcVW%2B9tN5Lq3UBemPUk8FyaWlkwoqwQgmqpCzOcPgIz6tHbTXbOz%2FHbtYwAWkr2W3SYImGLMpSKXSaRkm0WbpDTA9ePyQE%2BSRINiOXHCJFuPOvjqNzYf3zjx759cx9xtCmQgC2mVCV6rDR1ZgJIF5jQL3Cz0DHZLeRzn0XHtqtJg1k8xXf0%2BcvCDeMykiiiDl9BHpLu%2FbAaSXHfN%2Bdxk6ZPR5ZUYPuN2in0V8ByS%2BHwQi60BNz9XbFjHzFpjb7ZXO%2FoRefqTim%2BNcI8PRqDefPEjcm3re9LAVXZ6wqieP2%2FcB2aeRQ%2BE7ZAq2YrwXONDYqOXnqS7l5eDH2F%2FD1QW4yWm9zGOyO7qiCpaozSQCFgRGtK%2B%2FrHGgiOcNVagyGc7R3Gq9a3msr2OUgdlBk9Xkb0%2FIYKvrb8E3P9f44swIvibuGpwGRbtLLE%2FQIOS67aHoo1TIwYzfRo1B%2F81pnXOM%2Ft1NJ4HZ1OefJv3o%2FGjf58Qa3r59hWBqpKaCszK%2BTDK8QJ5lRJeCp146hfyOzmggVTTLDDpmbol88e%2FBq9bRn6T%2F5FY7sgU9N%2BM8Tj5FndwZcfU0W9AAbM%2Ft%2BA7TXorlZGoYk%2F2FoMJLDqcIGOqUBA7lAr%2Fj81Ddys3xu8bSoMGIbAtgiM3iefjuKN5RtKQaOwsUerLqRmfeRTHyXHiakDIAiw6FO9jZVpBJuN%2FG0NKiHQfaRl4%2FILupKyTI7d4UUM7chKObOkkzrlPm9cAyYeuUBzYBgnc2SPZjd9HHt%2Bjk8Q0HVqhehSzX%2F%2F2UYV6oaSHChXrgVkZJttgzx2fB8HNPmkqxuEEXsSM07aCFALRpndtax&X-Amz-Signature=f8449d115a3699a0f17c7f7f060105303c0818a2b76ef8db42b97c369eb1a845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXYVZBO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICIroO1mVpZaC6rG1OH0t9P5nNIXZGyJyZeqTnYLwVGGAiEAg3g1Hm45Dr4XwXUxjE%2BZMN6joMAzy9at5wzFt1bN0lQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJkqZslhNUqcbibHCrcA55soDth1q%2FEqUzHP9RX9Y75vFmpIN%2FcVW%2B9tN5Lq3UBemPUk8FyaWlkwoqwQgmqpCzOcPgIz6tHbTXbOz%2FHbtYwAWkr2W3SYImGLMpSKXSaRkm0WbpDTA9ePyQE%2BSRINiOXHCJFuPOvjqNzYf3zjx759cx9xtCmQgC2mVCV6rDR1ZgJIF5jQL3Cz0DHZLeRzn0XHtqtJg1k8xXf0%2BcvCDeMykiiiDl9BHpLu%2FbAaSXHfN%2Bdxk6ZPR5ZUYPuN2in0V8ByS%2BHwQi60BNz9XbFjHzFpjb7ZXO%2FoRefqTim%2BNcI8PRqDefPEjcm3re9LAVXZ6wqieP2%2FcB2aeRQ%2BE7ZAq2YrwXONDYqOXnqS7l5eDH2F%2FD1QW4yWm9zGOyO7qiCpaozSQCFgRGtK%2B%2FrHGgiOcNVagyGc7R3Gq9a3msr2OUgdlBk9Xkb0%2FIYKvrb8E3P9f44swIvibuGpwGRbtLLE%2FQIOS67aHoo1TIwYzfRo1B%2F81pnXOM%2Ft1NJ4HZ1OefJv3o%2FGjf58Qa3r59hWBqpKaCszK%2BTDK8QJ5lRJeCp146hfyOzmggVTTLDDpmbol88e%2FBq9bRn6T%2F5FY7sgU9N%2BM8Tj5FndwZcfU0W9AAbM%2Ft%2BA7TXorlZGoYk%2F2FoMJLDqcIGOqUBA7lAr%2Fj81Ddys3xu8bSoMGIbAtgiM3iefjuKN5RtKQaOwsUerLqRmfeRTHyXHiakDIAiw6FO9jZVpBJuN%2FG0NKiHQfaRl4%2FILupKyTI7d4UUM7chKObOkkzrlPm9cAyYeuUBzYBgnc2SPZjd9HHt%2Bjk8Q0HVqhehSzX%2F%2F2UYV6oaSHChXrgVkZJttgzx2fB8HNPmkqxuEEXsSM07aCFALRpndtax&X-Amz-Signature=8a35fa5a18a0a7b122bc47d9fe8c69a013c278e92a9e9f8ebbf7280149adfe4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXYVZBO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICIroO1mVpZaC6rG1OH0t9P5nNIXZGyJyZeqTnYLwVGGAiEAg3g1Hm45Dr4XwXUxjE%2BZMN6joMAzy9at5wzFt1bN0lQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJkqZslhNUqcbibHCrcA55soDth1q%2FEqUzHP9RX9Y75vFmpIN%2FcVW%2B9tN5Lq3UBemPUk8FyaWlkwoqwQgmqpCzOcPgIz6tHbTXbOz%2FHbtYwAWkr2W3SYImGLMpSKXSaRkm0WbpDTA9ePyQE%2BSRINiOXHCJFuPOvjqNzYf3zjx759cx9xtCmQgC2mVCV6rDR1ZgJIF5jQL3Cz0DHZLeRzn0XHtqtJg1k8xXf0%2BcvCDeMykiiiDl9BHpLu%2FbAaSXHfN%2Bdxk6ZPR5ZUYPuN2in0V8ByS%2BHwQi60BNz9XbFjHzFpjb7ZXO%2FoRefqTim%2BNcI8PRqDefPEjcm3re9LAVXZ6wqieP2%2FcB2aeRQ%2BE7ZAq2YrwXONDYqOXnqS7l5eDH2F%2FD1QW4yWm9zGOyO7qiCpaozSQCFgRGtK%2B%2FrHGgiOcNVagyGc7R3Gq9a3msr2OUgdlBk9Xkb0%2FIYKvrb8E3P9f44swIvibuGpwGRbtLLE%2FQIOS67aHoo1TIwYzfRo1B%2F81pnXOM%2Ft1NJ4HZ1OefJv3o%2FGjf58Qa3r59hWBqpKaCszK%2BTDK8QJ5lRJeCp146hfyOzmggVTTLDDpmbol88e%2FBq9bRn6T%2F5FY7sgU9N%2BM8Tj5FndwZcfU0W9AAbM%2Ft%2BA7TXorlZGoYk%2F2FoMJLDqcIGOqUBA7lAr%2Fj81Ddys3xu8bSoMGIbAtgiM3iefjuKN5RtKQaOwsUerLqRmfeRTHyXHiakDIAiw6FO9jZVpBJuN%2FG0NKiHQfaRl4%2FILupKyTI7d4UUM7chKObOkkzrlPm9cAyYeuUBzYBgnc2SPZjd9HHt%2Bjk8Q0HVqhehSzX%2F%2F2UYV6oaSHChXrgVkZJttgzx2fB8HNPmkqxuEEXsSM07aCFALRpndtax&X-Amz-Signature=dad6e18c1b7abe2ee00d4a87f5308f04767daf893bbf7eaf47d153542765ae55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXYVZBO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICIroO1mVpZaC6rG1OH0t9P5nNIXZGyJyZeqTnYLwVGGAiEAg3g1Hm45Dr4XwXUxjE%2BZMN6joMAzy9at5wzFt1bN0lQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJkqZslhNUqcbibHCrcA55soDth1q%2FEqUzHP9RX9Y75vFmpIN%2FcVW%2B9tN5Lq3UBemPUk8FyaWlkwoqwQgmqpCzOcPgIz6tHbTXbOz%2FHbtYwAWkr2W3SYImGLMpSKXSaRkm0WbpDTA9ePyQE%2BSRINiOXHCJFuPOvjqNzYf3zjx759cx9xtCmQgC2mVCV6rDR1ZgJIF5jQL3Cz0DHZLeRzn0XHtqtJg1k8xXf0%2BcvCDeMykiiiDl9BHpLu%2FbAaSXHfN%2Bdxk6ZPR5ZUYPuN2in0V8ByS%2BHwQi60BNz9XbFjHzFpjb7ZXO%2FoRefqTim%2BNcI8PRqDefPEjcm3re9LAVXZ6wqieP2%2FcB2aeRQ%2BE7ZAq2YrwXONDYqOXnqS7l5eDH2F%2FD1QW4yWm9zGOyO7qiCpaozSQCFgRGtK%2B%2FrHGgiOcNVagyGc7R3Gq9a3msr2OUgdlBk9Xkb0%2FIYKvrb8E3P9f44swIvibuGpwGRbtLLE%2FQIOS67aHoo1TIwYzfRo1B%2F81pnXOM%2Ft1NJ4HZ1OefJv3o%2FGjf58Qa3r59hWBqpKaCszK%2BTDK8QJ5lRJeCp146hfyOzmggVTTLDDpmbol88e%2FBq9bRn6T%2F5FY7sgU9N%2BM8Tj5FndwZcfU0W9AAbM%2Ft%2BA7TXorlZGoYk%2F2FoMJLDqcIGOqUBA7lAr%2Fj81Ddys3xu8bSoMGIbAtgiM3iefjuKN5RtKQaOwsUerLqRmfeRTHyXHiakDIAiw6FO9jZVpBJuN%2FG0NKiHQfaRl4%2FILupKyTI7d4UUM7chKObOkkzrlPm9cAyYeuUBzYBgnc2SPZjd9HHt%2Bjk8Q0HVqhehSzX%2F%2F2UYV6oaSHChXrgVkZJttgzx2fB8HNPmkqxuEEXsSM07aCFALRpndtax&X-Amz-Signature=871d548876cd56a46f1bc3692573163832d761e86df33297480ca29f962b287c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXYVZBO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICIroO1mVpZaC6rG1OH0t9P5nNIXZGyJyZeqTnYLwVGGAiEAg3g1Hm45Dr4XwXUxjE%2BZMN6joMAzy9at5wzFt1bN0lQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJkqZslhNUqcbibHCrcA55soDth1q%2FEqUzHP9RX9Y75vFmpIN%2FcVW%2B9tN5Lq3UBemPUk8FyaWlkwoqwQgmqpCzOcPgIz6tHbTXbOz%2FHbtYwAWkr2W3SYImGLMpSKXSaRkm0WbpDTA9ePyQE%2BSRINiOXHCJFuPOvjqNzYf3zjx759cx9xtCmQgC2mVCV6rDR1ZgJIF5jQL3Cz0DHZLeRzn0XHtqtJg1k8xXf0%2BcvCDeMykiiiDl9BHpLu%2FbAaSXHfN%2Bdxk6ZPR5ZUYPuN2in0V8ByS%2BHwQi60BNz9XbFjHzFpjb7ZXO%2FoRefqTim%2BNcI8PRqDefPEjcm3re9LAVXZ6wqieP2%2FcB2aeRQ%2BE7ZAq2YrwXONDYqOXnqS7l5eDH2F%2FD1QW4yWm9zGOyO7qiCpaozSQCFgRGtK%2B%2FrHGgiOcNVagyGc7R3Gq9a3msr2OUgdlBk9Xkb0%2FIYKvrb8E3P9f44swIvibuGpwGRbtLLE%2FQIOS67aHoo1TIwYzfRo1B%2F81pnXOM%2Ft1NJ4HZ1OefJv3o%2FGjf58Qa3r59hWBqpKaCszK%2BTDK8QJ5lRJeCp146hfyOzmggVTTLDDpmbol88e%2FBq9bRn6T%2F5FY7sgU9N%2BM8Tj5FndwZcfU0W9AAbM%2Ft%2BA7TXorlZGoYk%2F2FoMJLDqcIGOqUBA7lAr%2Fj81Ddys3xu8bSoMGIbAtgiM3iefjuKN5RtKQaOwsUerLqRmfeRTHyXHiakDIAiw6FO9jZVpBJuN%2FG0NKiHQfaRl4%2FILupKyTI7d4UUM7chKObOkkzrlPm9cAyYeuUBzYBgnc2SPZjd9HHt%2Bjk8Q0HVqhehSzX%2F%2F2UYV6oaSHChXrgVkZJttgzx2fB8HNPmkqxuEEXsSM07aCFALRpndtax&X-Amz-Signature=164bfec22d4f884c740d2089f98eba7e3022d548e7090311e973789ae84956b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
