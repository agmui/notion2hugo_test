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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CVICVZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2jw%2FGsO7c6VgraoynUvGD1OTTnWp9xeYpLSsGvMhZcAiBxUicCq0PG4%2FHy6ZDjY%2FXdg2XMJbMIt5eLXe10I0R2tCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMhqwn8c7femDV0M%2BfKtwD6AHRqpWVCG3kniQsZkB3DP62yOYPG%2FD0%2BcF1erUwm1Bsass7dN6kUfon98AiV7ofbfwoQ3cXNt7iSLdvNE5Q%2B5dSoFgikYxYDn7olpr4yjouSDnh1sUaRBdJxdG3%2FQny%2B7J9uZmcF%2FBMm8y5PWQ2YW%2FWe4YEK1gm4FqCKytSova00Ae8eQItWFQdJzN%2FmdStcG06%2B2WF1mbPaDNysQHlKCcjLHsevZO1vMs0MZTyo7mO3VL0GeQIFnIfUr%2B7ydK0pU320l5uc0WQR9PfUvyzk%2BqAWBmxEDi4MEUSjyg9oB%2Bzn8cD6nnS7aPKkiwxeXLxtyE1NTePq1Qg7pYMN7yGI%2F85zfz1OyuqbIVPidcvgoo%2BnGd028L5K1YeuMFHumz0z20wbAQxFWL1B4j0yaHxXUgBYoZHQ%2BSU46S%2FZAJxk6UyrwCmX8yYKjvq8kjOz%2B%2B%2ByUWzTNTKIxZotJiuvTVQw5TfMjekJZhxORSSbKkwzrM877Fx5G7UaJ2BfsDF9%2BOU%2BJHXpoWrEKzD%2FjAyhuaXoDlbO%2Bx%2FmQ7m4XektoLh1jEwdibBT9kbOwb%2Bxa%2FkXUmYedAWLZAi2dImwBSjjnT7g7tJH2MnwrLTXje5as9oHrqX3d3aAT83WvmdRY8w%2BLePwgY6pgGDbVd9exd01Ra8NfEWqXhmY4bkW7GJCBuefXnymYL1C9P1ewVTafImwleH6np4fwajUpsRAsPrSQITidQm7zNxdVzhJm5sLOHBKoxalcaxMcPN8a0XYFJGUt4W4cqfw6F4q3aRSMg3zL0A%2FHtkMLDQb81OE3Uy%2FDjAch4BrWQuNWcKaKFWCQpbr3Bh7Idv8%2BrxUxZKbjJmrCmguVfQ%2F3JI7vLlamAW&X-Amz-Signature=33f3377683d042a0c4cb2c1441db0bc05d5d680be4c8b8f3dcce0a9438495fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CVICVZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2jw%2FGsO7c6VgraoynUvGD1OTTnWp9xeYpLSsGvMhZcAiBxUicCq0PG4%2FHy6ZDjY%2FXdg2XMJbMIt5eLXe10I0R2tCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMhqwn8c7femDV0M%2BfKtwD6AHRqpWVCG3kniQsZkB3DP62yOYPG%2FD0%2BcF1erUwm1Bsass7dN6kUfon98AiV7ofbfwoQ3cXNt7iSLdvNE5Q%2B5dSoFgikYxYDn7olpr4yjouSDnh1sUaRBdJxdG3%2FQny%2B7J9uZmcF%2FBMm8y5PWQ2YW%2FWe4YEK1gm4FqCKytSova00Ae8eQItWFQdJzN%2FmdStcG06%2B2WF1mbPaDNysQHlKCcjLHsevZO1vMs0MZTyo7mO3VL0GeQIFnIfUr%2B7ydK0pU320l5uc0WQR9PfUvyzk%2BqAWBmxEDi4MEUSjyg9oB%2Bzn8cD6nnS7aPKkiwxeXLxtyE1NTePq1Qg7pYMN7yGI%2F85zfz1OyuqbIVPidcvgoo%2BnGd028L5K1YeuMFHumz0z20wbAQxFWL1B4j0yaHxXUgBYoZHQ%2BSU46S%2FZAJxk6UyrwCmX8yYKjvq8kjOz%2B%2B%2ByUWzTNTKIxZotJiuvTVQw5TfMjekJZhxORSSbKkwzrM877Fx5G7UaJ2BfsDF9%2BOU%2BJHXpoWrEKzD%2FjAyhuaXoDlbO%2Bx%2FmQ7m4XektoLh1jEwdibBT9kbOwb%2Bxa%2FkXUmYedAWLZAi2dImwBSjjnT7g7tJH2MnwrLTXje5as9oHrqX3d3aAT83WvmdRY8w%2BLePwgY6pgGDbVd9exd01Ra8NfEWqXhmY4bkW7GJCBuefXnymYL1C9P1ewVTafImwleH6np4fwajUpsRAsPrSQITidQm7zNxdVzhJm5sLOHBKoxalcaxMcPN8a0XYFJGUt4W4cqfw6F4q3aRSMg3zL0A%2FHtkMLDQb81OE3Uy%2FDjAch4BrWQuNWcKaKFWCQpbr3Bh7Idv8%2BrxUxZKbjJmrCmguVfQ%2F3JI7vLlamAW&X-Amz-Signature=98e32a8943f4067536d4c0945bdf29fa4a29a87ed936a1246ec8226f203f0ce3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CVICVZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2jw%2FGsO7c6VgraoynUvGD1OTTnWp9xeYpLSsGvMhZcAiBxUicCq0PG4%2FHy6ZDjY%2FXdg2XMJbMIt5eLXe10I0R2tCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMhqwn8c7femDV0M%2BfKtwD6AHRqpWVCG3kniQsZkB3DP62yOYPG%2FD0%2BcF1erUwm1Bsass7dN6kUfon98AiV7ofbfwoQ3cXNt7iSLdvNE5Q%2B5dSoFgikYxYDn7olpr4yjouSDnh1sUaRBdJxdG3%2FQny%2B7J9uZmcF%2FBMm8y5PWQ2YW%2FWe4YEK1gm4FqCKytSova00Ae8eQItWFQdJzN%2FmdStcG06%2B2WF1mbPaDNysQHlKCcjLHsevZO1vMs0MZTyo7mO3VL0GeQIFnIfUr%2B7ydK0pU320l5uc0WQR9PfUvyzk%2BqAWBmxEDi4MEUSjyg9oB%2Bzn8cD6nnS7aPKkiwxeXLxtyE1NTePq1Qg7pYMN7yGI%2F85zfz1OyuqbIVPidcvgoo%2BnGd028L5K1YeuMFHumz0z20wbAQxFWL1B4j0yaHxXUgBYoZHQ%2BSU46S%2FZAJxk6UyrwCmX8yYKjvq8kjOz%2B%2B%2ByUWzTNTKIxZotJiuvTVQw5TfMjekJZhxORSSbKkwzrM877Fx5G7UaJ2BfsDF9%2BOU%2BJHXpoWrEKzD%2FjAyhuaXoDlbO%2Bx%2FmQ7m4XektoLh1jEwdibBT9kbOwb%2Bxa%2FkXUmYedAWLZAi2dImwBSjjnT7g7tJH2MnwrLTXje5as9oHrqX3d3aAT83WvmdRY8w%2BLePwgY6pgGDbVd9exd01Ra8NfEWqXhmY4bkW7GJCBuefXnymYL1C9P1ewVTafImwleH6np4fwajUpsRAsPrSQITidQm7zNxdVzhJm5sLOHBKoxalcaxMcPN8a0XYFJGUt4W4cqfw6F4q3aRSMg3zL0A%2FHtkMLDQb81OE3Uy%2FDjAch4BrWQuNWcKaKFWCQpbr3Bh7Idv8%2BrxUxZKbjJmrCmguVfQ%2F3JI7vLlamAW&X-Amz-Signature=63eb66f0716859f5fe71c964b2302db96a444e68487562b6bdc0026ec5d027e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CVICVZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2jw%2FGsO7c6VgraoynUvGD1OTTnWp9xeYpLSsGvMhZcAiBxUicCq0PG4%2FHy6ZDjY%2FXdg2XMJbMIt5eLXe10I0R2tCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMhqwn8c7femDV0M%2BfKtwD6AHRqpWVCG3kniQsZkB3DP62yOYPG%2FD0%2BcF1erUwm1Bsass7dN6kUfon98AiV7ofbfwoQ3cXNt7iSLdvNE5Q%2B5dSoFgikYxYDn7olpr4yjouSDnh1sUaRBdJxdG3%2FQny%2B7J9uZmcF%2FBMm8y5PWQ2YW%2FWe4YEK1gm4FqCKytSova00Ae8eQItWFQdJzN%2FmdStcG06%2B2WF1mbPaDNysQHlKCcjLHsevZO1vMs0MZTyo7mO3VL0GeQIFnIfUr%2B7ydK0pU320l5uc0WQR9PfUvyzk%2BqAWBmxEDi4MEUSjyg9oB%2Bzn8cD6nnS7aPKkiwxeXLxtyE1NTePq1Qg7pYMN7yGI%2F85zfz1OyuqbIVPidcvgoo%2BnGd028L5K1YeuMFHumz0z20wbAQxFWL1B4j0yaHxXUgBYoZHQ%2BSU46S%2FZAJxk6UyrwCmX8yYKjvq8kjOz%2B%2B%2ByUWzTNTKIxZotJiuvTVQw5TfMjekJZhxORSSbKkwzrM877Fx5G7UaJ2BfsDF9%2BOU%2BJHXpoWrEKzD%2FjAyhuaXoDlbO%2Bx%2FmQ7m4XektoLh1jEwdibBT9kbOwb%2Bxa%2FkXUmYedAWLZAi2dImwBSjjnT7g7tJH2MnwrLTXje5as9oHrqX3d3aAT83WvmdRY8w%2BLePwgY6pgGDbVd9exd01Ra8NfEWqXhmY4bkW7GJCBuefXnymYL1C9P1ewVTafImwleH6np4fwajUpsRAsPrSQITidQm7zNxdVzhJm5sLOHBKoxalcaxMcPN8a0XYFJGUt4W4cqfw6F4q3aRSMg3zL0A%2FHtkMLDQb81OE3Uy%2FDjAch4BrWQuNWcKaKFWCQpbr3Bh7Idv8%2BrxUxZKbjJmrCmguVfQ%2F3JI7vLlamAW&X-Amz-Signature=78ef6f6b11a31bc74ca1fea38c8bbf378f83869f50299812688422bdb6fb161b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CVICVZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2jw%2FGsO7c6VgraoynUvGD1OTTnWp9xeYpLSsGvMhZcAiBxUicCq0PG4%2FHy6ZDjY%2FXdg2XMJbMIt5eLXe10I0R2tCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMhqwn8c7femDV0M%2BfKtwD6AHRqpWVCG3kniQsZkB3DP62yOYPG%2FD0%2BcF1erUwm1Bsass7dN6kUfon98AiV7ofbfwoQ3cXNt7iSLdvNE5Q%2B5dSoFgikYxYDn7olpr4yjouSDnh1sUaRBdJxdG3%2FQny%2B7J9uZmcF%2FBMm8y5PWQ2YW%2FWe4YEK1gm4FqCKytSova00Ae8eQItWFQdJzN%2FmdStcG06%2B2WF1mbPaDNysQHlKCcjLHsevZO1vMs0MZTyo7mO3VL0GeQIFnIfUr%2B7ydK0pU320l5uc0WQR9PfUvyzk%2BqAWBmxEDi4MEUSjyg9oB%2Bzn8cD6nnS7aPKkiwxeXLxtyE1NTePq1Qg7pYMN7yGI%2F85zfz1OyuqbIVPidcvgoo%2BnGd028L5K1YeuMFHumz0z20wbAQxFWL1B4j0yaHxXUgBYoZHQ%2BSU46S%2FZAJxk6UyrwCmX8yYKjvq8kjOz%2B%2B%2ByUWzTNTKIxZotJiuvTVQw5TfMjekJZhxORSSbKkwzrM877Fx5G7UaJ2BfsDF9%2BOU%2BJHXpoWrEKzD%2FjAyhuaXoDlbO%2Bx%2FmQ7m4XektoLh1jEwdibBT9kbOwb%2Bxa%2FkXUmYedAWLZAi2dImwBSjjnT7g7tJH2MnwrLTXje5as9oHrqX3d3aAT83WvmdRY8w%2BLePwgY6pgGDbVd9exd01Ra8NfEWqXhmY4bkW7GJCBuefXnymYL1C9P1ewVTafImwleH6np4fwajUpsRAsPrSQITidQm7zNxdVzhJm5sLOHBKoxalcaxMcPN8a0XYFJGUt4W4cqfw6F4q3aRSMg3zL0A%2FHtkMLDQb81OE3Uy%2FDjAch4BrWQuNWcKaKFWCQpbr3Bh7Idv8%2BrxUxZKbjJmrCmguVfQ%2F3JI7vLlamAW&X-Amz-Signature=8342ecc6ee7ac0a500c98477c8b24054f75a032b6afae04c73c01b557e622e51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CVICVZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2jw%2FGsO7c6VgraoynUvGD1OTTnWp9xeYpLSsGvMhZcAiBxUicCq0PG4%2FHy6ZDjY%2FXdg2XMJbMIt5eLXe10I0R2tCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMhqwn8c7femDV0M%2BfKtwD6AHRqpWVCG3kniQsZkB3DP62yOYPG%2FD0%2BcF1erUwm1Bsass7dN6kUfon98AiV7ofbfwoQ3cXNt7iSLdvNE5Q%2B5dSoFgikYxYDn7olpr4yjouSDnh1sUaRBdJxdG3%2FQny%2B7J9uZmcF%2FBMm8y5PWQ2YW%2FWe4YEK1gm4FqCKytSova00Ae8eQItWFQdJzN%2FmdStcG06%2B2WF1mbPaDNysQHlKCcjLHsevZO1vMs0MZTyo7mO3VL0GeQIFnIfUr%2B7ydK0pU320l5uc0WQR9PfUvyzk%2BqAWBmxEDi4MEUSjyg9oB%2Bzn8cD6nnS7aPKkiwxeXLxtyE1NTePq1Qg7pYMN7yGI%2F85zfz1OyuqbIVPidcvgoo%2BnGd028L5K1YeuMFHumz0z20wbAQxFWL1B4j0yaHxXUgBYoZHQ%2BSU46S%2FZAJxk6UyrwCmX8yYKjvq8kjOz%2B%2B%2ByUWzTNTKIxZotJiuvTVQw5TfMjekJZhxORSSbKkwzrM877Fx5G7UaJ2BfsDF9%2BOU%2BJHXpoWrEKzD%2FjAyhuaXoDlbO%2Bx%2FmQ7m4XektoLh1jEwdibBT9kbOwb%2Bxa%2FkXUmYedAWLZAi2dImwBSjjnT7g7tJH2MnwrLTXje5as9oHrqX3d3aAT83WvmdRY8w%2BLePwgY6pgGDbVd9exd01Ra8NfEWqXhmY4bkW7GJCBuefXnymYL1C9P1ewVTafImwleH6np4fwajUpsRAsPrSQITidQm7zNxdVzhJm5sLOHBKoxalcaxMcPN8a0XYFJGUt4W4cqfw6F4q3aRSMg3zL0A%2FHtkMLDQb81OE3Uy%2FDjAch4BrWQuNWcKaKFWCQpbr3Bh7Idv8%2BrxUxZKbjJmrCmguVfQ%2F3JI7vLlamAW&X-Amz-Signature=8e2684c8875c97d1faf37e2188f1fb9150c25af020dbbb4586fd361a2012a477&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CVICVZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2jw%2FGsO7c6VgraoynUvGD1OTTnWp9xeYpLSsGvMhZcAiBxUicCq0PG4%2FHy6ZDjY%2FXdg2XMJbMIt5eLXe10I0R2tCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMhqwn8c7femDV0M%2BfKtwD6AHRqpWVCG3kniQsZkB3DP62yOYPG%2FD0%2BcF1erUwm1Bsass7dN6kUfon98AiV7ofbfwoQ3cXNt7iSLdvNE5Q%2B5dSoFgikYxYDn7olpr4yjouSDnh1sUaRBdJxdG3%2FQny%2B7J9uZmcF%2FBMm8y5PWQ2YW%2FWe4YEK1gm4FqCKytSova00Ae8eQItWFQdJzN%2FmdStcG06%2B2WF1mbPaDNysQHlKCcjLHsevZO1vMs0MZTyo7mO3VL0GeQIFnIfUr%2B7ydK0pU320l5uc0WQR9PfUvyzk%2BqAWBmxEDi4MEUSjyg9oB%2Bzn8cD6nnS7aPKkiwxeXLxtyE1NTePq1Qg7pYMN7yGI%2F85zfz1OyuqbIVPidcvgoo%2BnGd028L5K1YeuMFHumz0z20wbAQxFWL1B4j0yaHxXUgBYoZHQ%2BSU46S%2FZAJxk6UyrwCmX8yYKjvq8kjOz%2B%2B%2ByUWzTNTKIxZotJiuvTVQw5TfMjekJZhxORSSbKkwzrM877Fx5G7UaJ2BfsDF9%2BOU%2BJHXpoWrEKzD%2FjAyhuaXoDlbO%2Bx%2FmQ7m4XektoLh1jEwdibBT9kbOwb%2Bxa%2FkXUmYedAWLZAi2dImwBSjjnT7g7tJH2MnwrLTXje5as9oHrqX3d3aAT83WvmdRY8w%2BLePwgY6pgGDbVd9exd01Ra8NfEWqXhmY4bkW7GJCBuefXnymYL1C9P1ewVTafImwleH6np4fwajUpsRAsPrSQITidQm7zNxdVzhJm5sLOHBKoxalcaxMcPN8a0XYFJGUt4W4cqfw6F4q3aRSMg3zL0A%2FHtkMLDQb81OE3Uy%2FDjAch4BrWQuNWcKaKFWCQpbr3Bh7Idv8%2BrxUxZKbjJmrCmguVfQ%2F3JI7vLlamAW&X-Amz-Signature=2058c61cd0089923a524830267eefc55084f850dd6dda95c53d9634c8f3aeb56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CVICVZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2jw%2FGsO7c6VgraoynUvGD1OTTnWp9xeYpLSsGvMhZcAiBxUicCq0PG4%2FHy6ZDjY%2FXdg2XMJbMIt5eLXe10I0R2tCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMhqwn8c7femDV0M%2BfKtwD6AHRqpWVCG3kniQsZkB3DP62yOYPG%2FD0%2BcF1erUwm1Bsass7dN6kUfon98AiV7ofbfwoQ3cXNt7iSLdvNE5Q%2B5dSoFgikYxYDn7olpr4yjouSDnh1sUaRBdJxdG3%2FQny%2B7J9uZmcF%2FBMm8y5PWQ2YW%2FWe4YEK1gm4FqCKytSova00Ae8eQItWFQdJzN%2FmdStcG06%2B2WF1mbPaDNysQHlKCcjLHsevZO1vMs0MZTyo7mO3VL0GeQIFnIfUr%2B7ydK0pU320l5uc0WQR9PfUvyzk%2BqAWBmxEDi4MEUSjyg9oB%2Bzn8cD6nnS7aPKkiwxeXLxtyE1NTePq1Qg7pYMN7yGI%2F85zfz1OyuqbIVPidcvgoo%2BnGd028L5K1YeuMFHumz0z20wbAQxFWL1B4j0yaHxXUgBYoZHQ%2BSU46S%2FZAJxk6UyrwCmX8yYKjvq8kjOz%2B%2B%2ByUWzTNTKIxZotJiuvTVQw5TfMjekJZhxORSSbKkwzrM877Fx5G7UaJ2BfsDF9%2BOU%2BJHXpoWrEKzD%2FjAyhuaXoDlbO%2Bx%2FmQ7m4XektoLh1jEwdibBT9kbOwb%2Bxa%2FkXUmYedAWLZAi2dImwBSjjnT7g7tJH2MnwrLTXje5as9oHrqX3d3aAT83WvmdRY8w%2BLePwgY6pgGDbVd9exd01Ra8NfEWqXhmY4bkW7GJCBuefXnymYL1C9P1ewVTafImwleH6np4fwajUpsRAsPrSQITidQm7zNxdVzhJm5sLOHBKoxalcaxMcPN8a0XYFJGUt4W4cqfw6F4q3aRSMg3zL0A%2FHtkMLDQb81OE3Uy%2FDjAch4BrWQuNWcKaKFWCQpbr3Bh7Idv8%2BrxUxZKbjJmrCmguVfQ%2F3JI7vLlamAW&X-Amz-Signature=ee765bb8267487bb943f1442dfaf1bd515c96a0c06935edaff25ec20c135492b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
