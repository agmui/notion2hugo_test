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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRFKWSK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCcnsREAnlgK6%2FOkw8cxwyRN%2FP3BwNv8qbU6hhVFSXxWAIhAJqPvGVSxa7q4SPnFJ6Rwqqo9RimCIzzIv29jHrEwqmhKv8DCCUQABoMNjM3NDIzMTgzODA1Igw7zr7PxDgMkjbIPEcq3ANhRNAleYkcfIgCISvC6bug0v8lxetdsCfSO3hWehbgQq3llIe2amD4cJTd%2BvfYqpQ5Hy%2BLRvpx1bSPi88k4onfeE0nOSMoMt6gAnbqw7sJyCP6MbxdsUZoLJBYj85AkMVMukke7SxbXyJDlH7zbSWQOvlhtQ33Q5aVXXz42P%2BDKRkeSiyL%2BtW5%2FKAMoJAvDDSbb3R2Pvj1gFGjWmpf5HB%2B7C%2BSGH0WdJAIhKUf7b8xrrpwgOaULCMQ4F%2FZUbRjnO1McPocBFXjXMYKJyLajsBpNzpi0fQBypZ0Dr6wRMoR0XC0%2F6NV7Eq9Ijz87Q74Hzn1q8Dbepo1yay8uGfil1OTB7Zw8NKFd3LIbYDjduOPrLDjdGV38oFanGHovPzLgpJxNcsxu%2Feis0HZNVNzEnDkhSbyCbbhgvqktIUic%2Bqpiapp4o2qTgknZAeo4vzjkTvk3fCrHHnAIpFy3IKhea%2BnMBVR2IBWHxhyCebtg0k1F9rN15cmpI7yHl4ulBrNmYHzfSJ%2BUPxDWh6lUroWF5cbbBjCSJtnIXPDcD5ehnvZGA3q8IgOFBm9yWrgb4u%2BhWYRW7y2hbL%2Bn%2Fb97XLcZGGoXgwAHZP%2B6CTzg16FRnXu7w9Up%2BY%2Fr%2FOoQs0BRzDuooa9BjqkAWASEI71IJJOgm594pyfi0%2F5aTDWFZfgcJw3xLak5UrZZx1iEl3xcJF8WVC1OSCTM8%2BFTVaxb84GK3YoT50RTZKirPPoRcIkruMRXHEOBRWii2p02A1PYhG82F%2FF%2BBzHnBKOXn1S4Y3H98BL4yiYi1dex76ELqnjOJPsMOzFL%2BgNDbFXuxa3FvGOBOx3QNbablwwwra3FPWZcLarSbQmjyuINxs6&X-Amz-Signature=8fbf52b453e4904ae4541ec4a8784ab8f6abd3d9e935f633fbefbc34cc07c68c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRFKWSK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCcnsREAnlgK6%2FOkw8cxwyRN%2FP3BwNv8qbU6hhVFSXxWAIhAJqPvGVSxa7q4SPnFJ6Rwqqo9RimCIzzIv29jHrEwqmhKv8DCCUQABoMNjM3NDIzMTgzODA1Igw7zr7PxDgMkjbIPEcq3ANhRNAleYkcfIgCISvC6bug0v8lxetdsCfSO3hWehbgQq3llIe2amD4cJTd%2BvfYqpQ5Hy%2BLRvpx1bSPi88k4onfeE0nOSMoMt6gAnbqw7sJyCP6MbxdsUZoLJBYj85AkMVMukke7SxbXyJDlH7zbSWQOvlhtQ33Q5aVXXz42P%2BDKRkeSiyL%2BtW5%2FKAMoJAvDDSbb3R2Pvj1gFGjWmpf5HB%2B7C%2BSGH0WdJAIhKUf7b8xrrpwgOaULCMQ4F%2FZUbRjnO1McPocBFXjXMYKJyLajsBpNzpi0fQBypZ0Dr6wRMoR0XC0%2F6NV7Eq9Ijz87Q74Hzn1q8Dbepo1yay8uGfil1OTB7Zw8NKFd3LIbYDjduOPrLDjdGV38oFanGHovPzLgpJxNcsxu%2Feis0HZNVNzEnDkhSbyCbbhgvqktIUic%2Bqpiapp4o2qTgknZAeo4vzjkTvk3fCrHHnAIpFy3IKhea%2BnMBVR2IBWHxhyCebtg0k1F9rN15cmpI7yHl4ulBrNmYHzfSJ%2BUPxDWh6lUroWF5cbbBjCSJtnIXPDcD5ehnvZGA3q8IgOFBm9yWrgb4u%2BhWYRW7y2hbL%2Bn%2Fb97XLcZGGoXgwAHZP%2B6CTzg16FRnXu7w9Up%2BY%2Fr%2FOoQs0BRzDuooa9BjqkAWASEI71IJJOgm594pyfi0%2F5aTDWFZfgcJw3xLak5UrZZx1iEl3xcJF8WVC1OSCTM8%2BFTVaxb84GK3YoT50RTZKirPPoRcIkruMRXHEOBRWii2p02A1PYhG82F%2FF%2BBzHnBKOXn1S4Y3H98BL4yiYi1dex76ELqnjOJPsMOzFL%2BgNDbFXuxa3FvGOBOx3QNbablwwwra3FPWZcLarSbQmjyuINxs6&X-Amz-Signature=93ce6c2734c13fc7dc20454a6b0223349daa355ef5ca3b018ea1266ee14ca66c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRFKWSK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCcnsREAnlgK6%2FOkw8cxwyRN%2FP3BwNv8qbU6hhVFSXxWAIhAJqPvGVSxa7q4SPnFJ6Rwqqo9RimCIzzIv29jHrEwqmhKv8DCCUQABoMNjM3NDIzMTgzODA1Igw7zr7PxDgMkjbIPEcq3ANhRNAleYkcfIgCISvC6bug0v8lxetdsCfSO3hWehbgQq3llIe2amD4cJTd%2BvfYqpQ5Hy%2BLRvpx1bSPi88k4onfeE0nOSMoMt6gAnbqw7sJyCP6MbxdsUZoLJBYj85AkMVMukke7SxbXyJDlH7zbSWQOvlhtQ33Q5aVXXz42P%2BDKRkeSiyL%2BtW5%2FKAMoJAvDDSbb3R2Pvj1gFGjWmpf5HB%2B7C%2BSGH0WdJAIhKUf7b8xrrpwgOaULCMQ4F%2FZUbRjnO1McPocBFXjXMYKJyLajsBpNzpi0fQBypZ0Dr6wRMoR0XC0%2F6NV7Eq9Ijz87Q74Hzn1q8Dbepo1yay8uGfil1OTB7Zw8NKFd3LIbYDjduOPrLDjdGV38oFanGHovPzLgpJxNcsxu%2Feis0HZNVNzEnDkhSbyCbbhgvqktIUic%2Bqpiapp4o2qTgknZAeo4vzjkTvk3fCrHHnAIpFy3IKhea%2BnMBVR2IBWHxhyCebtg0k1F9rN15cmpI7yHl4ulBrNmYHzfSJ%2BUPxDWh6lUroWF5cbbBjCSJtnIXPDcD5ehnvZGA3q8IgOFBm9yWrgb4u%2BhWYRW7y2hbL%2Bn%2Fb97XLcZGGoXgwAHZP%2B6CTzg16FRnXu7w9Up%2BY%2Fr%2FOoQs0BRzDuooa9BjqkAWASEI71IJJOgm594pyfi0%2F5aTDWFZfgcJw3xLak5UrZZx1iEl3xcJF8WVC1OSCTM8%2BFTVaxb84GK3YoT50RTZKirPPoRcIkruMRXHEOBRWii2p02A1PYhG82F%2FF%2BBzHnBKOXn1S4Y3H98BL4yiYi1dex76ELqnjOJPsMOzFL%2BgNDbFXuxa3FvGOBOx3QNbablwwwra3FPWZcLarSbQmjyuINxs6&X-Amz-Signature=b83bb8870190a09849a3b077dfded611e6e86292fdf52874ea51065adb46ec95&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRFKWSK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCcnsREAnlgK6%2FOkw8cxwyRN%2FP3BwNv8qbU6hhVFSXxWAIhAJqPvGVSxa7q4SPnFJ6Rwqqo9RimCIzzIv29jHrEwqmhKv8DCCUQABoMNjM3NDIzMTgzODA1Igw7zr7PxDgMkjbIPEcq3ANhRNAleYkcfIgCISvC6bug0v8lxetdsCfSO3hWehbgQq3llIe2amD4cJTd%2BvfYqpQ5Hy%2BLRvpx1bSPi88k4onfeE0nOSMoMt6gAnbqw7sJyCP6MbxdsUZoLJBYj85AkMVMukke7SxbXyJDlH7zbSWQOvlhtQ33Q5aVXXz42P%2BDKRkeSiyL%2BtW5%2FKAMoJAvDDSbb3R2Pvj1gFGjWmpf5HB%2B7C%2BSGH0WdJAIhKUf7b8xrrpwgOaULCMQ4F%2FZUbRjnO1McPocBFXjXMYKJyLajsBpNzpi0fQBypZ0Dr6wRMoR0XC0%2F6NV7Eq9Ijz87Q74Hzn1q8Dbepo1yay8uGfil1OTB7Zw8NKFd3LIbYDjduOPrLDjdGV38oFanGHovPzLgpJxNcsxu%2Feis0HZNVNzEnDkhSbyCbbhgvqktIUic%2Bqpiapp4o2qTgknZAeo4vzjkTvk3fCrHHnAIpFy3IKhea%2BnMBVR2IBWHxhyCebtg0k1F9rN15cmpI7yHl4ulBrNmYHzfSJ%2BUPxDWh6lUroWF5cbbBjCSJtnIXPDcD5ehnvZGA3q8IgOFBm9yWrgb4u%2BhWYRW7y2hbL%2Bn%2Fb97XLcZGGoXgwAHZP%2B6CTzg16FRnXu7w9Up%2BY%2Fr%2FOoQs0BRzDuooa9BjqkAWASEI71IJJOgm594pyfi0%2F5aTDWFZfgcJw3xLak5UrZZx1iEl3xcJF8WVC1OSCTM8%2BFTVaxb84GK3YoT50RTZKirPPoRcIkruMRXHEOBRWii2p02A1PYhG82F%2FF%2BBzHnBKOXn1S4Y3H98BL4yiYi1dex76ELqnjOJPsMOzFL%2BgNDbFXuxa3FvGOBOx3QNbablwwwra3FPWZcLarSbQmjyuINxs6&X-Amz-Signature=65e2b47caac8b2ef9a742615346eac46f5f2f1cd47d5aa58278bb6736ab542b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRFKWSK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCcnsREAnlgK6%2FOkw8cxwyRN%2FP3BwNv8qbU6hhVFSXxWAIhAJqPvGVSxa7q4SPnFJ6Rwqqo9RimCIzzIv29jHrEwqmhKv8DCCUQABoMNjM3NDIzMTgzODA1Igw7zr7PxDgMkjbIPEcq3ANhRNAleYkcfIgCISvC6bug0v8lxetdsCfSO3hWehbgQq3llIe2amD4cJTd%2BvfYqpQ5Hy%2BLRvpx1bSPi88k4onfeE0nOSMoMt6gAnbqw7sJyCP6MbxdsUZoLJBYj85AkMVMukke7SxbXyJDlH7zbSWQOvlhtQ33Q5aVXXz42P%2BDKRkeSiyL%2BtW5%2FKAMoJAvDDSbb3R2Pvj1gFGjWmpf5HB%2B7C%2BSGH0WdJAIhKUf7b8xrrpwgOaULCMQ4F%2FZUbRjnO1McPocBFXjXMYKJyLajsBpNzpi0fQBypZ0Dr6wRMoR0XC0%2F6NV7Eq9Ijz87Q74Hzn1q8Dbepo1yay8uGfil1OTB7Zw8NKFd3LIbYDjduOPrLDjdGV38oFanGHovPzLgpJxNcsxu%2Feis0HZNVNzEnDkhSbyCbbhgvqktIUic%2Bqpiapp4o2qTgknZAeo4vzjkTvk3fCrHHnAIpFy3IKhea%2BnMBVR2IBWHxhyCebtg0k1F9rN15cmpI7yHl4ulBrNmYHzfSJ%2BUPxDWh6lUroWF5cbbBjCSJtnIXPDcD5ehnvZGA3q8IgOFBm9yWrgb4u%2BhWYRW7y2hbL%2Bn%2Fb97XLcZGGoXgwAHZP%2B6CTzg16FRnXu7w9Up%2BY%2Fr%2FOoQs0BRzDuooa9BjqkAWASEI71IJJOgm594pyfi0%2F5aTDWFZfgcJw3xLak5UrZZx1iEl3xcJF8WVC1OSCTM8%2BFTVaxb84GK3YoT50RTZKirPPoRcIkruMRXHEOBRWii2p02A1PYhG82F%2FF%2BBzHnBKOXn1S4Y3H98BL4yiYi1dex76ELqnjOJPsMOzFL%2BgNDbFXuxa3FvGOBOx3QNbablwwwra3FPWZcLarSbQmjyuINxs6&X-Amz-Signature=42da3a294dc30f9de3648c38dd112e24dccaddf8e558b769d8a7c293e504dd4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRFKWSK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCcnsREAnlgK6%2FOkw8cxwyRN%2FP3BwNv8qbU6hhVFSXxWAIhAJqPvGVSxa7q4SPnFJ6Rwqqo9RimCIzzIv29jHrEwqmhKv8DCCUQABoMNjM3NDIzMTgzODA1Igw7zr7PxDgMkjbIPEcq3ANhRNAleYkcfIgCISvC6bug0v8lxetdsCfSO3hWehbgQq3llIe2amD4cJTd%2BvfYqpQ5Hy%2BLRvpx1bSPi88k4onfeE0nOSMoMt6gAnbqw7sJyCP6MbxdsUZoLJBYj85AkMVMukke7SxbXyJDlH7zbSWQOvlhtQ33Q5aVXXz42P%2BDKRkeSiyL%2BtW5%2FKAMoJAvDDSbb3R2Pvj1gFGjWmpf5HB%2B7C%2BSGH0WdJAIhKUf7b8xrrpwgOaULCMQ4F%2FZUbRjnO1McPocBFXjXMYKJyLajsBpNzpi0fQBypZ0Dr6wRMoR0XC0%2F6NV7Eq9Ijz87Q74Hzn1q8Dbepo1yay8uGfil1OTB7Zw8NKFd3LIbYDjduOPrLDjdGV38oFanGHovPzLgpJxNcsxu%2Feis0HZNVNzEnDkhSbyCbbhgvqktIUic%2Bqpiapp4o2qTgknZAeo4vzjkTvk3fCrHHnAIpFy3IKhea%2BnMBVR2IBWHxhyCebtg0k1F9rN15cmpI7yHl4ulBrNmYHzfSJ%2BUPxDWh6lUroWF5cbbBjCSJtnIXPDcD5ehnvZGA3q8IgOFBm9yWrgb4u%2BhWYRW7y2hbL%2Bn%2Fb97XLcZGGoXgwAHZP%2B6CTzg16FRnXu7w9Up%2BY%2Fr%2FOoQs0BRzDuooa9BjqkAWASEI71IJJOgm594pyfi0%2F5aTDWFZfgcJw3xLak5UrZZx1iEl3xcJF8WVC1OSCTM8%2BFTVaxb84GK3YoT50RTZKirPPoRcIkruMRXHEOBRWii2p02A1PYhG82F%2FF%2BBzHnBKOXn1S4Y3H98BL4yiYi1dex76ELqnjOJPsMOzFL%2BgNDbFXuxa3FvGOBOx3QNbablwwwra3FPWZcLarSbQmjyuINxs6&X-Amz-Signature=fc3931d3dc43a66de3634ba872a3032696d2a3c8b62862fdeb098d8d6c2298c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRFKWSK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCcnsREAnlgK6%2FOkw8cxwyRN%2FP3BwNv8qbU6hhVFSXxWAIhAJqPvGVSxa7q4SPnFJ6Rwqqo9RimCIzzIv29jHrEwqmhKv8DCCUQABoMNjM3NDIzMTgzODA1Igw7zr7PxDgMkjbIPEcq3ANhRNAleYkcfIgCISvC6bug0v8lxetdsCfSO3hWehbgQq3llIe2amD4cJTd%2BvfYqpQ5Hy%2BLRvpx1bSPi88k4onfeE0nOSMoMt6gAnbqw7sJyCP6MbxdsUZoLJBYj85AkMVMukke7SxbXyJDlH7zbSWQOvlhtQ33Q5aVXXz42P%2BDKRkeSiyL%2BtW5%2FKAMoJAvDDSbb3R2Pvj1gFGjWmpf5HB%2B7C%2BSGH0WdJAIhKUf7b8xrrpwgOaULCMQ4F%2FZUbRjnO1McPocBFXjXMYKJyLajsBpNzpi0fQBypZ0Dr6wRMoR0XC0%2F6NV7Eq9Ijz87Q74Hzn1q8Dbepo1yay8uGfil1OTB7Zw8NKFd3LIbYDjduOPrLDjdGV38oFanGHovPzLgpJxNcsxu%2Feis0HZNVNzEnDkhSbyCbbhgvqktIUic%2Bqpiapp4o2qTgknZAeo4vzjkTvk3fCrHHnAIpFy3IKhea%2BnMBVR2IBWHxhyCebtg0k1F9rN15cmpI7yHl4ulBrNmYHzfSJ%2BUPxDWh6lUroWF5cbbBjCSJtnIXPDcD5ehnvZGA3q8IgOFBm9yWrgb4u%2BhWYRW7y2hbL%2Bn%2Fb97XLcZGGoXgwAHZP%2B6CTzg16FRnXu7w9Up%2BY%2Fr%2FOoQs0BRzDuooa9BjqkAWASEI71IJJOgm594pyfi0%2F5aTDWFZfgcJw3xLak5UrZZx1iEl3xcJF8WVC1OSCTM8%2BFTVaxb84GK3YoT50RTZKirPPoRcIkruMRXHEOBRWii2p02A1PYhG82F%2FF%2BBzHnBKOXn1S4Y3H98BL4yiYi1dex76ELqnjOJPsMOzFL%2BgNDbFXuxa3FvGOBOx3QNbablwwwra3FPWZcLarSbQmjyuINxs6&X-Amz-Signature=0de33f7892ad51d311e0445e2cf3a90b8105a8d4501379e07403d64693169bfc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRFKWSK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCcnsREAnlgK6%2FOkw8cxwyRN%2FP3BwNv8qbU6hhVFSXxWAIhAJqPvGVSxa7q4SPnFJ6Rwqqo9RimCIzzIv29jHrEwqmhKv8DCCUQABoMNjM3NDIzMTgzODA1Igw7zr7PxDgMkjbIPEcq3ANhRNAleYkcfIgCISvC6bug0v8lxetdsCfSO3hWehbgQq3llIe2amD4cJTd%2BvfYqpQ5Hy%2BLRvpx1bSPi88k4onfeE0nOSMoMt6gAnbqw7sJyCP6MbxdsUZoLJBYj85AkMVMukke7SxbXyJDlH7zbSWQOvlhtQ33Q5aVXXz42P%2BDKRkeSiyL%2BtW5%2FKAMoJAvDDSbb3R2Pvj1gFGjWmpf5HB%2B7C%2BSGH0WdJAIhKUf7b8xrrpwgOaULCMQ4F%2FZUbRjnO1McPocBFXjXMYKJyLajsBpNzpi0fQBypZ0Dr6wRMoR0XC0%2F6NV7Eq9Ijz87Q74Hzn1q8Dbepo1yay8uGfil1OTB7Zw8NKFd3LIbYDjduOPrLDjdGV38oFanGHovPzLgpJxNcsxu%2Feis0HZNVNzEnDkhSbyCbbhgvqktIUic%2Bqpiapp4o2qTgknZAeo4vzjkTvk3fCrHHnAIpFy3IKhea%2BnMBVR2IBWHxhyCebtg0k1F9rN15cmpI7yHl4ulBrNmYHzfSJ%2BUPxDWh6lUroWF5cbbBjCSJtnIXPDcD5ehnvZGA3q8IgOFBm9yWrgb4u%2BhWYRW7y2hbL%2Bn%2Fb97XLcZGGoXgwAHZP%2B6CTzg16FRnXu7w9Up%2BY%2Fr%2FOoQs0BRzDuooa9BjqkAWASEI71IJJOgm594pyfi0%2F5aTDWFZfgcJw3xLak5UrZZx1iEl3xcJF8WVC1OSCTM8%2BFTVaxb84GK3YoT50RTZKirPPoRcIkruMRXHEOBRWii2p02A1PYhG82F%2FF%2BBzHnBKOXn1S4Y3H98BL4yiYi1dex76ELqnjOJPsMOzFL%2BgNDbFXuxa3FvGOBOx3QNbablwwwra3FPWZcLarSbQmjyuINxs6&X-Amz-Signature=cbaea1226e0544296ea2c4c6a45b1c4a0e0c560671318e8037cbb961d6f5d8b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
