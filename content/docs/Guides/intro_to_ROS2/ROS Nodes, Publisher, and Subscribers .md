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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URENQZQZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFocF6P4rQUqlCKnyB1EyC0IQ1qGW5FnQzH%2Fbj%2FDs1%2FgIhAMcechfccxxYt2p27RKcGWKm16JwQcm2LutQmXPRzSfnKv8DCHQQABoMNjM3NDIzMTgzODA1IgzzIGcymHoUcTnjxZYq3AP56VCikGo77p7beGwQXLUJ19IFOKuSebrvvLw4GVg7i%2FK2zGlDIWbnuS5WXj%2F8WFzXEvZ29uw4vcZI3t0tngPKOsdp%2FSqYc2a0A5ixKJaU5dCUjsGfCSrdzKNUc5mzpOnMMnU4ZGwEVktr1ZQJHJMHv2Z1mn7kq7duzcQzI6K6plZBzxQvD2mPDUYyIGejiKHuqVqCwjo3IJ8YYt5GOXQjo0NnJUVqc98KjltoHlw0nlqOpdz9HD7H%2BLlyHr0JZlzxfXtL5qnqfSc%2BF6UFCY6DcsOJnx8d7A25arymKhZJIUsyA04BDV0KfmjrGbVLyn2OtT8%2FMy4oyl9CP3vs36PuPWezYpKPPK0ZRi6xB5egEx3MZSbN0oc1TxvyO8cVLrw1sBfQOTtWBbmPQACam9tFQumW2RN6a9MKWgbfpJXGzHp1AsgqtmYH2bgNnR2DjxKONUAcWUaRFhvtZTZe550xuAXLNUMA9XiSTHmzLHIN5t5i3CJ1LRe4fQn9730LCt9vBUOXJDJ8x2ZP1VBlQQbdaRKKlmmMP6g0wqUo9bwJpgbgH4p8fthtyT6rFr3pn%2F4NLors%2BjTzvwEPk1XMGryjstXA2s3%2FZpwXlLLRD9VrfexN0Bf3nd5%2FWrFmhDCrr5DCBjqkAW6gLFUvDl4g8fXnHyBK9RmYWnGt6V0px1COAG1bPlrqGNCnePdeThAKf3Xx0X3o8acVIiq9uU7X0Mq7aG%2BEKcyZQcrnQsj8Au9NaiC1wtsiYFH0RsRv1lP9XhIQrnzSHeANnygeJcKLDbMqyJz8FgSV%2Fu3kfIkhHDs7wOAWX%2FQ%2B%2BrkWx92yisvFsNmwlI8PoCe6usDAs1csMAKaJNXQnFCocmc%2F&X-Amz-Signature=6ae615a28e943d80c6ddc3cc4f02ef2128d82c10e922ba279fe23552ab11c351&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URENQZQZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFocF6P4rQUqlCKnyB1EyC0IQ1qGW5FnQzH%2Fbj%2FDs1%2FgIhAMcechfccxxYt2p27RKcGWKm16JwQcm2LutQmXPRzSfnKv8DCHQQABoMNjM3NDIzMTgzODA1IgzzIGcymHoUcTnjxZYq3AP56VCikGo77p7beGwQXLUJ19IFOKuSebrvvLw4GVg7i%2FK2zGlDIWbnuS5WXj%2F8WFzXEvZ29uw4vcZI3t0tngPKOsdp%2FSqYc2a0A5ixKJaU5dCUjsGfCSrdzKNUc5mzpOnMMnU4ZGwEVktr1ZQJHJMHv2Z1mn7kq7duzcQzI6K6plZBzxQvD2mPDUYyIGejiKHuqVqCwjo3IJ8YYt5GOXQjo0NnJUVqc98KjltoHlw0nlqOpdz9HD7H%2BLlyHr0JZlzxfXtL5qnqfSc%2BF6UFCY6DcsOJnx8d7A25arymKhZJIUsyA04BDV0KfmjrGbVLyn2OtT8%2FMy4oyl9CP3vs36PuPWezYpKPPK0ZRi6xB5egEx3MZSbN0oc1TxvyO8cVLrw1sBfQOTtWBbmPQACam9tFQumW2RN6a9MKWgbfpJXGzHp1AsgqtmYH2bgNnR2DjxKONUAcWUaRFhvtZTZe550xuAXLNUMA9XiSTHmzLHIN5t5i3CJ1LRe4fQn9730LCt9vBUOXJDJ8x2ZP1VBlQQbdaRKKlmmMP6g0wqUo9bwJpgbgH4p8fthtyT6rFr3pn%2F4NLors%2BjTzvwEPk1XMGryjstXA2s3%2FZpwXlLLRD9VrfexN0Bf3nd5%2FWrFmhDCrr5DCBjqkAW6gLFUvDl4g8fXnHyBK9RmYWnGt6V0px1COAG1bPlrqGNCnePdeThAKf3Xx0X3o8acVIiq9uU7X0Mq7aG%2BEKcyZQcrnQsj8Au9NaiC1wtsiYFH0RsRv1lP9XhIQrnzSHeANnygeJcKLDbMqyJz8FgSV%2Fu3kfIkhHDs7wOAWX%2FQ%2B%2BrkWx92yisvFsNmwlI8PoCe6usDAs1csMAKaJNXQnFCocmc%2F&X-Amz-Signature=c27ccecad236273aa66842493fa29b2f08cc15303aee3f6bc76a8b514c78ab2c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URENQZQZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFocF6P4rQUqlCKnyB1EyC0IQ1qGW5FnQzH%2Fbj%2FDs1%2FgIhAMcechfccxxYt2p27RKcGWKm16JwQcm2LutQmXPRzSfnKv8DCHQQABoMNjM3NDIzMTgzODA1IgzzIGcymHoUcTnjxZYq3AP56VCikGo77p7beGwQXLUJ19IFOKuSebrvvLw4GVg7i%2FK2zGlDIWbnuS5WXj%2F8WFzXEvZ29uw4vcZI3t0tngPKOsdp%2FSqYc2a0A5ixKJaU5dCUjsGfCSrdzKNUc5mzpOnMMnU4ZGwEVktr1ZQJHJMHv2Z1mn7kq7duzcQzI6K6plZBzxQvD2mPDUYyIGejiKHuqVqCwjo3IJ8YYt5GOXQjo0NnJUVqc98KjltoHlw0nlqOpdz9HD7H%2BLlyHr0JZlzxfXtL5qnqfSc%2BF6UFCY6DcsOJnx8d7A25arymKhZJIUsyA04BDV0KfmjrGbVLyn2OtT8%2FMy4oyl9CP3vs36PuPWezYpKPPK0ZRi6xB5egEx3MZSbN0oc1TxvyO8cVLrw1sBfQOTtWBbmPQACam9tFQumW2RN6a9MKWgbfpJXGzHp1AsgqtmYH2bgNnR2DjxKONUAcWUaRFhvtZTZe550xuAXLNUMA9XiSTHmzLHIN5t5i3CJ1LRe4fQn9730LCt9vBUOXJDJ8x2ZP1VBlQQbdaRKKlmmMP6g0wqUo9bwJpgbgH4p8fthtyT6rFr3pn%2F4NLors%2BjTzvwEPk1XMGryjstXA2s3%2FZpwXlLLRD9VrfexN0Bf3nd5%2FWrFmhDCrr5DCBjqkAW6gLFUvDl4g8fXnHyBK9RmYWnGt6V0px1COAG1bPlrqGNCnePdeThAKf3Xx0X3o8acVIiq9uU7X0Mq7aG%2BEKcyZQcrnQsj8Au9NaiC1wtsiYFH0RsRv1lP9XhIQrnzSHeANnygeJcKLDbMqyJz8FgSV%2Fu3kfIkhHDs7wOAWX%2FQ%2B%2BrkWx92yisvFsNmwlI8PoCe6usDAs1csMAKaJNXQnFCocmc%2F&X-Amz-Signature=dc590073736d65a89fc981ee3c8a88c102385d432f891149dcdf7c4ef5b28199&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URENQZQZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFocF6P4rQUqlCKnyB1EyC0IQ1qGW5FnQzH%2Fbj%2FDs1%2FgIhAMcechfccxxYt2p27RKcGWKm16JwQcm2LutQmXPRzSfnKv8DCHQQABoMNjM3NDIzMTgzODA1IgzzIGcymHoUcTnjxZYq3AP56VCikGo77p7beGwQXLUJ19IFOKuSebrvvLw4GVg7i%2FK2zGlDIWbnuS5WXj%2F8WFzXEvZ29uw4vcZI3t0tngPKOsdp%2FSqYc2a0A5ixKJaU5dCUjsGfCSrdzKNUc5mzpOnMMnU4ZGwEVktr1ZQJHJMHv2Z1mn7kq7duzcQzI6K6plZBzxQvD2mPDUYyIGejiKHuqVqCwjo3IJ8YYt5GOXQjo0NnJUVqc98KjltoHlw0nlqOpdz9HD7H%2BLlyHr0JZlzxfXtL5qnqfSc%2BF6UFCY6DcsOJnx8d7A25arymKhZJIUsyA04BDV0KfmjrGbVLyn2OtT8%2FMy4oyl9CP3vs36PuPWezYpKPPK0ZRi6xB5egEx3MZSbN0oc1TxvyO8cVLrw1sBfQOTtWBbmPQACam9tFQumW2RN6a9MKWgbfpJXGzHp1AsgqtmYH2bgNnR2DjxKONUAcWUaRFhvtZTZe550xuAXLNUMA9XiSTHmzLHIN5t5i3CJ1LRe4fQn9730LCt9vBUOXJDJ8x2ZP1VBlQQbdaRKKlmmMP6g0wqUo9bwJpgbgH4p8fthtyT6rFr3pn%2F4NLors%2BjTzvwEPk1XMGryjstXA2s3%2FZpwXlLLRD9VrfexN0Bf3nd5%2FWrFmhDCrr5DCBjqkAW6gLFUvDl4g8fXnHyBK9RmYWnGt6V0px1COAG1bPlrqGNCnePdeThAKf3Xx0X3o8acVIiq9uU7X0Mq7aG%2BEKcyZQcrnQsj8Au9NaiC1wtsiYFH0RsRv1lP9XhIQrnzSHeANnygeJcKLDbMqyJz8FgSV%2Fu3kfIkhHDs7wOAWX%2FQ%2B%2BrkWx92yisvFsNmwlI8PoCe6usDAs1csMAKaJNXQnFCocmc%2F&X-Amz-Signature=d3633b0373ca25a5d98c221e1776660a6c84eefcc4ce9189e9adbdf15cf98c00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URENQZQZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFocF6P4rQUqlCKnyB1EyC0IQ1qGW5FnQzH%2Fbj%2FDs1%2FgIhAMcechfccxxYt2p27RKcGWKm16JwQcm2LutQmXPRzSfnKv8DCHQQABoMNjM3NDIzMTgzODA1IgzzIGcymHoUcTnjxZYq3AP56VCikGo77p7beGwQXLUJ19IFOKuSebrvvLw4GVg7i%2FK2zGlDIWbnuS5WXj%2F8WFzXEvZ29uw4vcZI3t0tngPKOsdp%2FSqYc2a0A5ixKJaU5dCUjsGfCSrdzKNUc5mzpOnMMnU4ZGwEVktr1ZQJHJMHv2Z1mn7kq7duzcQzI6K6plZBzxQvD2mPDUYyIGejiKHuqVqCwjo3IJ8YYt5GOXQjo0NnJUVqc98KjltoHlw0nlqOpdz9HD7H%2BLlyHr0JZlzxfXtL5qnqfSc%2BF6UFCY6DcsOJnx8d7A25arymKhZJIUsyA04BDV0KfmjrGbVLyn2OtT8%2FMy4oyl9CP3vs36PuPWezYpKPPK0ZRi6xB5egEx3MZSbN0oc1TxvyO8cVLrw1sBfQOTtWBbmPQACam9tFQumW2RN6a9MKWgbfpJXGzHp1AsgqtmYH2bgNnR2DjxKONUAcWUaRFhvtZTZe550xuAXLNUMA9XiSTHmzLHIN5t5i3CJ1LRe4fQn9730LCt9vBUOXJDJ8x2ZP1VBlQQbdaRKKlmmMP6g0wqUo9bwJpgbgH4p8fthtyT6rFr3pn%2F4NLors%2BjTzvwEPk1XMGryjstXA2s3%2FZpwXlLLRD9VrfexN0Bf3nd5%2FWrFmhDCrr5DCBjqkAW6gLFUvDl4g8fXnHyBK9RmYWnGt6V0px1COAG1bPlrqGNCnePdeThAKf3Xx0X3o8acVIiq9uU7X0Mq7aG%2BEKcyZQcrnQsj8Au9NaiC1wtsiYFH0RsRv1lP9XhIQrnzSHeANnygeJcKLDbMqyJz8FgSV%2Fu3kfIkhHDs7wOAWX%2FQ%2B%2BrkWx92yisvFsNmwlI8PoCe6usDAs1csMAKaJNXQnFCocmc%2F&X-Amz-Signature=9b62dfb6ce2a0759e0b01de72e308ac76e4c0b7d29ee1925d5e2f8249e75fa4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URENQZQZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFocF6P4rQUqlCKnyB1EyC0IQ1qGW5FnQzH%2Fbj%2FDs1%2FgIhAMcechfccxxYt2p27RKcGWKm16JwQcm2LutQmXPRzSfnKv8DCHQQABoMNjM3NDIzMTgzODA1IgzzIGcymHoUcTnjxZYq3AP56VCikGo77p7beGwQXLUJ19IFOKuSebrvvLw4GVg7i%2FK2zGlDIWbnuS5WXj%2F8WFzXEvZ29uw4vcZI3t0tngPKOsdp%2FSqYc2a0A5ixKJaU5dCUjsGfCSrdzKNUc5mzpOnMMnU4ZGwEVktr1ZQJHJMHv2Z1mn7kq7duzcQzI6K6plZBzxQvD2mPDUYyIGejiKHuqVqCwjo3IJ8YYt5GOXQjo0NnJUVqc98KjltoHlw0nlqOpdz9HD7H%2BLlyHr0JZlzxfXtL5qnqfSc%2BF6UFCY6DcsOJnx8d7A25arymKhZJIUsyA04BDV0KfmjrGbVLyn2OtT8%2FMy4oyl9CP3vs36PuPWezYpKPPK0ZRi6xB5egEx3MZSbN0oc1TxvyO8cVLrw1sBfQOTtWBbmPQACam9tFQumW2RN6a9MKWgbfpJXGzHp1AsgqtmYH2bgNnR2DjxKONUAcWUaRFhvtZTZe550xuAXLNUMA9XiSTHmzLHIN5t5i3CJ1LRe4fQn9730LCt9vBUOXJDJ8x2ZP1VBlQQbdaRKKlmmMP6g0wqUo9bwJpgbgH4p8fthtyT6rFr3pn%2F4NLors%2BjTzvwEPk1XMGryjstXA2s3%2FZpwXlLLRD9VrfexN0Bf3nd5%2FWrFmhDCrr5DCBjqkAW6gLFUvDl4g8fXnHyBK9RmYWnGt6V0px1COAG1bPlrqGNCnePdeThAKf3Xx0X3o8acVIiq9uU7X0Mq7aG%2BEKcyZQcrnQsj8Au9NaiC1wtsiYFH0RsRv1lP9XhIQrnzSHeANnygeJcKLDbMqyJz8FgSV%2Fu3kfIkhHDs7wOAWX%2FQ%2B%2BrkWx92yisvFsNmwlI8PoCe6usDAs1csMAKaJNXQnFCocmc%2F&X-Amz-Signature=11e55d854291450abdea7f2e356a6ebddc846af62b69a93cd9c3fe092a879a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URENQZQZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFocF6P4rQUqlCKnyB1EyC0IQ1qGW5FnQzH%2Fbj%2FDs1%2FgIhAMcechfccxxYt2p27RKcGWKm16JwQcm2LutQmXPRzSfnKv8DCHQQABoMNjM3NDIzMTgzODA1IgzzIGcymHoUcTnjxZYq3AP56VCikGo77p7beGwQXLUJ19IFOKuSebrvvLw4GVg7i%2FK2zGlDIWbnuS5WXj%2F8WFzXEvZ29uw4vcZI3t0tngPKOsdp%2FSqYc2a0A5ixKJaU5dCUjsGfCSrdzKNUc5mzpOnMMnU4ZGwEVktr1ZQJHJMHv2Z1mn7kq7duzcQzI6K6plZBzxQvD2mPDUYyIGejiKHuqVqCwjo3IJ8YYt5GOXQjo0NnJUVqc98KjltoHlw0nlqOpdz9HD7H%2BLlyHr0JZlzxfXtL5qnqfSc%2BF6UFCY6DcsOJnx8d7A25arymKhZJIUsyA04BDV0KfmjrGbVLyn2OtT8%2FMy4oyl9CP3vs36PuPWezYpKPPK0ZRi6xB5egEx3MZSbN0oc1TxvyO8cVLrw1sBfQOTtWBbmPQACam9tFQumW2RN6a9MKWgbfpJXGzHp1AsgqtmYH2bgNnR2DjxKONUAcWUaRFhvtZTZe550xuAXLNUMA9XiSTHmzLHIN5t5i3CJ1LRe4fQn9730LCt9vBUOXJDJ8x2ZP1VBlQQbdaRKKlmmMP6g0wqUo9bwJpgbgH4p8fthtyT6rFr3pn%2F4NLors%2BjTzvwEPk1XMGryjstXA2s3%2FZpwXlLLRD9VrfexN0Bf3nd5%2FWrFmhDCrr5DCBjqkAW6gLFUvDl4g8fXnHyBK9RmYWnGt6V0px1COAG1bPlrqGNCnePdeThAKf3Xx0X3o8acVIiq9uU7X0Mq7aG%2BEKcyZQcrnQsj8Au9NaiC1wtsiYFH0RsRv1lP9XhIQrnzSHeANnygeJcKLDbMqyJz8FgSV%2Fu3kfIkhHDs7wOAWX%2FQ%2B%2BrkWx92yisvFsNmwlI8PoCe6usDAs1csMAKaJNXQnFCocmc%2F&X-Amz-Signature=65f55c6808471fbd9b7f171740288a0015ab40b999c1397a0a3e564f285cef96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URENQZQZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFocF6P4rQUqlCKnyB1EyC0IQ1qGW5FnQzH%2Fbj%2FDs1%2FgIhAMcechfccxxYt2p27RKcGWKm16JwQcm2LutQmXPRzSfnKv8DCHQQABoMNjM3NDIzMTgzODA1IgzzIGcymHoUcTnjxZYq3AP56VCikGo77p7beGwQXLUJ19IFOKuSebrvvLw4GVg7i%2FK2zGlDIWbnuS5WXj%2F8WFzXEvZ29uw4vcZI3t0tngPKOsdp%2FSqYc2a0A5ixKJaU5dCUjsGfCSrdzKNUc5mzpOnMMnU4ZGwEVktr1ZQJHJMHv2Z1mn7kq7duzcQzI6K6plZBzxQvD2mPDUYyIGejiKHuqVqCwjo3IJ8YYt5GOXQjo0NnJUVqc98KjltoHlw0nlqOpdz9HD7H%2BLlyHr0JZlzxfXtL5qnqfSc%2BF6UFCY6DcsOJnx8d7A25arymKhZJIUsyA04BDV0KfmjrGbVLyn2OtT8%2FMy4oyl9CP3vs36PuPWezYpKPPK0ZRi6xB5egEx3MZSbN0oc1TxvyO8cVLrw1sBfQOTtWBbmPQACam9tFQumW2RN6a9MKWgbfpJXGzHp1AsgqtmYH2bgNnR2DjxKONUAcWUaRFhvtZTZe550xuAXLNUMA9XiSTHmzLHIN5t5i3CJ1LRe4fQn9730LCt9vBUOXJDJ8x2ZP1VBlQQbdaRKKlmmMP6g0wqUo9bwJpgbgH4p8fthtyT6rFr3pn%2F4NLors%2BjTzvwEPk1XMGryjstXA2s3%2FZpwXlLLRD9VrfexN0Bf3nd5%2FWrFmhDCrr5DCBjqkAW6gLFUvDl4g8fXnHyBK9RmYWnGt6V0px1COAG1bPlrqGNCnePdeThAKf3Xx0X3o8acVIiq9uU7X0Mq7aG%2BEKcyZQcrnQsj8Au9NaiC1wtsiYFH0RsRv1lP9XhIQrnzSHeANnygeJcKLDbMqyJz8FgSV%2Fu3kfIkhHDs7wOAWX%2FQ%2B%2BrkWx92yisvFsNmwlI8PoCe6usDAs1csMAKaJNXQnFCocmc%2F&X-Amz-Signature=6d893470baf694ad20181ade2f7e9980db6395de92b512142b60d5b5666a1e22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
