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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQSZ7WV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFkD8wb3MkoJUqB1orImDGiq8VwwN97X2PO5zLRAkTo4AiAOV08u2whjY5cnhW44ohr6Ef26oZ%2BhUKDcxVkMiARWLCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMTU%2BL5F053P0ha80aKtwDNHt0bmEgYKSwVB7qZzLepWXtQK%2FjaeXWB%2F9RAWmW2hNxq2zZ7rsjwwmA37ZyL3FgSKhnKMwSXYU2E9MXldphfon6lcl3e9HIa6MirIY2JQn9y9H52tMuGibCARiSImjCPLWa1MHwkK5iOj%2F135YxmGkHohw3z4zez9q9Mw%2BDQ0cnv%2BQzL6VzfomKmRrkNqZKELZLtXvc97Zk%2F8Hc9BTnzxl7NykMeyW08%2B0zHgc7K2mq7VyzxVtImTj%2BNOWm6fD2U7hAJMXmIXiuDjoklgT96Yyec3imvfytJnvVFQlKXhxcBmXH%2FeRpFGZ7Y6%2FuoLvaM8QdibidcuyZrpZ8xBywUHvkyoW04ZWh5ZHB%2FtbKUXiTce7zSiwjFWG0T8frxo91B%2B%2FCx7Qz0d5xZQPOfOU6MDFkvXO1%2BPBg8001jhXrqXR01Gh5BL3A5HqEWiTc9%2B%2BOSe7oQYhSng%2FXoz%2Bw%2FA0ciR1W4dEu%2B5jlhK6uuTyijqCi7BD30BXYfz1wmPG7klziLsm5jHm4c9FZiZrP2tP0DO2YEABsUyi4j5PHpnRW3oGbwbqvMK%2FZLAPoCX2GJ%2B7WaUEyWCJgDtBbiHsGa8nb8CH28CmvBQJCUlu1EZO%2Fll%2B8Xnl18RxJVC5mBtswo%2BrzwgY6pgHbBsYT59rKl1cs86mgRAyurEVsKY%2FW8QEmfQVPRdFYjktpRtCOyuVCfjQT9%2FDIr2MDzH80EUNhLAh%2BfauCjpIv5AXnnVvTxJDDePIVWDr5hBjNSGTt0gwlZZbqWokIWrGKCJnklHzMpVzxpAz1uJ8JV%2BnS1R5HF%2BaJ1BuBxHSWC7yTUWY%2BFdiObm9LBkIyBke24US9UHLjYTwx074sJ3066k%2FsyCY5&X-Amz-Signature=efde3dd8802d0f5aaba560f61a418c187d6cedb703175d6943edc44ae07b5576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQSZ7WV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFkD8wb3MkoJUqB1orImDGiq8VwwN97X2PO5zLRAkTo4AiAOV08u2whjY5cnhW44ohr6Ef26oZ%2BhUKDcxVkMiARWLCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMTU%2BL5F053P0ha80aKtwDNHt0bmEgYKSwVB7qZzLepWXtQK%2FjaeXWB%2F9RAWmW2hNxq2zZ7rsjwwmA37ZyL3FgSKhnKMwSXYU2E9MXldphfon6lcl3e9HIa6MirIY2JQn9y9H52tMuGibCARiSImjCPLWa1MHwkK5iOj%2F135YxmGkHohw3z4zez9q9Mw%2BDQ0cnv%2BQzL6VzfomKmRrkNqZKELZLtXvc97Zk%2F8Hc9BTnzxl7NykMeyW08%2B0zHgc7K2mq7VyzxVtImTj%2BNOWm6fD2U7hAJMXmIXiuDjoklgT96Yyec3imvfytJnvVFQlKXhxcBmXH%2FeRpFGZ7Y6%2FuoLvaM8QdibidcuyZrpZ8xBywUHvkyoW04ZWh5ZHB%2FtbKUXiTce7zSiwjFWG0T8frxo91B%2B%2FCx7Qz0d5xZQPOfOU6MDFkvXO1%2BPBg8001jhXrqXR01Gh5BL3A5HqEWiTc9%2B%2BOSe7oQYhSng%2FXoz%2Bw%2FA0ciR1W4dEu%2B5jlhK6uuTyijqCi7BD30BXYfz1wmPG7klziLsm5jHm4c9FZiZrP2tP0DO2YEABsUyi4j5PHpnRW3oGbwbqvMK%2FZLAPoCX2GJ%2B7WaUEyWCJgDtBbiHsGa8nb8CH28CmvBQJCUlu1EZO%2Fll%2B8Xnl18RxJVC5mBtswo%2BrzwgY6pgHbBsYT59rKl1cs86mgRAyurEVsKY%2FW8QEmfQVPRdFYjktpRtCOyuVCfjQT9%2FDIr2MDzH80EUNhLAh%2BfauCjpIv5AXnnVvTxJDDePIVWDr5hBjNSGTt0gwlZZbqWokIWrGKCJnklHzMpVzxpAz1uJ8JV%2BnS1R5HF%2BaJ1BuBxHSWC7yTUWY%2BFdiObm9LBkIyBke24US9UHLjYTwx074sJ3066k%2FsyCY5&X-Amz-Signature=ee0e10b006a710fdab75d5dda15d5a95af48fa122fcf52c16485936987d4f9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQSZ7WV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFkD8wb3MkoJUqB1orImDGiq8VwwN97X2PO5zLRAkTo4AiAOV08u2whjY5cnhW44ohr6Ef26oZ%2BhUKDcxVkMiARWLCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMTU%2BL5F053P0ha80aKtwDNHt0bmEgYKSwVB7qZzLepWXtQK%2FjaeXWB%2F9RAWmW2hNxq2zZ7rsjwwmA37ZyL3FgSKhnKMwSXYU2E9MXldphfon6lcl3e9HIa6MirIY2JQn9y9H52tMuGibCARiSImjCPLWa1MHwkK5iOj%2F135YxmGkHohw3z4zez9q9Mw%2BDQ0cnv%2BQzL6VzfomKmRrkNqZKELZLtXvc97Zk%2F8Hc9BTnzxl7NykMeyW08%2B0zHgc7K2mq7VyzxVtImTj%2BNOWm6fD2U7hAJMXmIXiuDjoklgT96Yyec3imvfytJnvVFQlKXhxcBmXH%2FeRpFGZ7Y6%2FuoLvaM8QdibidcuyZrpZ8xBywUHvkyoW04ZWh5ZHB%2FtbKUXiTce7zSiwjFWG0T8frxo91B%2B%2FCx7Qz0d5xZQPOfOU6MDFkvXO1%2BPBg8001jhXrqXR01Gh5BL3A5HqEWiTc9%2B%2BOSe7oQYhSng%2FXoz%2Bw%2FA0ciR1W4dEu%2B5jlhK6uuTyijqCi7BD30BXYfz1wmPG7klziLsm5jHm4c9FZiZrP2tP0DO2YEABsUyi4j5PHpnRW3oGbwbqvMK%2FZLAPoCX2GJ%2B7WaUEyWCJgDtBbiHsGa8nb8CH28CmvBQJCUlu1EZO%2Fll%2B8Xnl18RxJVC5mBtswo%2BrzwgY6pgHbBsYT59rKl1cs86mgRAyurEVsKY%2FW8QEmfQVPRdFYjktpRtCOyuVCfjQT9%2FDIr2MDzH80EUNhLAh%2BfauCjpIv5AXnnVvTxJDDePIVWDr5hBjNSGTt0gwlZZbqWokIWrGKCJnklHzMpVzxpAz1uJ8JV%2BnS1R5HF%2BaJ1BuBxHSWC7yTUWY%2BFdiObm9LBkIyBke24US9UHLjYTwx074sJ3066k%2FsyCY5&X-Amz-Signature=df55afbea95daf0605358589f5d1b75f78815983dcbccc161244a2e025049d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQSZ7WV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFkD8wb3MkoJUqB1orImDGiq8VwwN97X2PO5zLRAkTo4AiAOV08u2whjY5cnhW44ohr6Ef26oZ%2BhUKDcxVkMiARWLCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMTU%2BL5F053P0ha80aKtwDNHt0bmEgYKSwVB7qZzLepWXtQK%2FjaeXWB%2F9RAWmW2hNxq2zZ7rsjwwmA37ZyL3FgSKhnKMwSXYU2E9MXldphfon6lcl3e9HIa6MirIY2JQn9y9H52tMuGibCARiSImjCPLWa1MHwkK5iOj%2F135YxmGkHohw3z4zez9q9Mw%2BDQ0cnv%2BQzL6VzfomKmRrkNqZKELZLtXvc97Zk%2F8Hc9BTnzxl7NykMeyW08%2B0zHgc7K2mq7VyzxVtImTj%2BNOWm6fD2U7hAJMXmIXiuDjoklgT96Yyec3imvfytJnvVFQlKXhxcBmXH%2FeRpFGZ7Y6%2FuoLvaM8QdibidcuyZrpZ8xBywUHvkyoW04ZWh5ZHB%2FtbKUXiTce7zSiwjFWG0T8frxo91B%2B%2FCx7Qz0d5xZQPOfOU6MDFkvXO1%2BPBg8001jhXrqXR01Gh5BL3A5HqEWiTc9%2B%2BOSe7oQYhSng%2FXoz%2Bw%2FA0ciR1W4dEu%2B5jlhK6uuTyijqCi7BD30BXYfz1wmPG7klziLsm5jHm4c9FZiZrP2tP0DO2YEABsUyi4j5PHpnRW3oGbwbqvMK%2FZLAPoCX2GJ%2B7WaUEyWCJgDtBbiHsGa8nb8CH28CmvBQJCUlu1EZO%2Fll%2B8Xnl18RxJVC5mBtswo%2BrzwgY6pgHbBsYT59rKl1cs86mgRAyurEVsKY%2FW8QEmfQVPRdFYjktpRtCOyuVCfjQT9%2FDIr2MDzH80EUNhLAh%2BfauCjpIv5AXnnVvTxJDDePIVWDr5hBjNSGTt0gwlZZbqWokIWrGKCJnklHzMpVzxpAz1uJ8JV%2BnS1R5HF%2BaJ1BuBxHSWC7yTUWY%2BFdiObm9LBkIyBke24US9UHLjYTwx074sJ3066k%2FsyCY5&X-Amz-Signature=39d71b4a1f30ed940c68671d4a84cce044f7f965be36f13ea3b5251518e72946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQSZ7WV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFkD8wb3MkoJUqB1orImDGiq8VwwN97X2PO5zLRAkTo4AiAOV08u2whjY5cnhW44ohr6Ef26oZ%2BhUKDcxVkMiARWLCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMTU%2BL5F053P0ha80aKtwDNHt0bmEgYKSwVB7qZzLepWXtQK%2FjaeXWB%2F9RAWmW2hNxq2zZ7rsjwwmA37ZyL3FgSKhnKMwSXYU2E9MXldphfon6lcl3e9HIa6MirIY2JQn9y9H52tMuGibCARiSImjCPLWa1MHwkK5iOj%2F135YxmGkHohw3z4zez9q9Mw%2BDQ0cnv%2BQzL6VzfomKmRrkNqZKELZLtXvc97Zk%2F8Hc9BTnzxl7NykMeyW08%2B0zHgc7K2mq7VyzxVtImTj%2BNOWm6fD2U7hAJMXmIXiuDjoklgT96Yyec3imvfytJnvVFQlKXhxcBmXH%2FeRpFGZ7Y6%2FuoLvaM8QdibidcuyZrpZ8xBywUHvkyoW04ZWh5ZHB%2FtbKUXiTce7zSiwjFWG0T8frxo91B%2B%2FCx7Qz0d5xZQPOfOU6MDFkvXO1%2BPBg8001jhXrqXR01Gh5BL3A5HqEWiTc9%2B%2BOSe7oQYhSng%2FXoz%2Bw%2FA0ciR1W4dEu%2B5jlhK6uuTyijqCi7BD30BXYfz1wmPG7klziLsm5jHm4c9FZiZrP2tP0DO2YEABsUyi4j5PHpnRW3oGbwbqvMK%2FZLAPoCX2GJ%2B7WaUEyWCJgDtBbiHsGa8nb8CH28CmvBQJCUlu1EZO%2Fll%2B8Xnl18RxJVC5mBtswo%2BrzwgY6pgHbBsYT59rKl1cs86mgRAyurEVsKY%2FW8QEmfQVPRdFYjktpRtCOyuVCfjQT9%2FDIr2MDzH80EUNhLAh%2BfauCjpIv5AXnnVvTxJDDePIVWDr5hBjNSGTt0gwlZZbqWokIWrGKCJnklHzMpVzxpAz1uJ8JV%2BnS1R5HF%2BaJ1BuBxHSWC7yTUWY%2BFdiObm9LBkIyBke24US9UHLjYTwx074sJ3066k%2FsyCY5&X-Amz-Signature=199139c1b3b4f7582cd8cc924644ee19a87249255ea7d5ba90b5166662c4b8b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQSZ7WV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFkD8wb3MkoJUqB1orImDGiq8VwwN97X2PO5zLRAkTo4AiAOV08u2whjY5cnhW44ohr6Ef26oZ%2BhUKDcxVkMiARWLCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMTU%2BL5F053P0ha80aKtwDNHt0bmEgYKSwVB7qZzLepWXtQK%2FjaeXWB%2F9RAWmW2hNxq2zZ7rsjwwmA37ZyL3FgSKhnKMwSXYU2E9MXldphfon6lcl3e9HIa6MirIY2JQn9y9H52tMuGibCARiSImjCPLWa1MHwkK5iOj%2F135YxmGkHohw3z4zez9q9Mw%2BDQ0cnv%2BQzL6VzfomKmRrkNqZKELZLtXvc97Zk%2F8Hc9BTnzxl7NykMeyW08%2B0zHgc7K2mq7VyzxVtImTj%2BNOWm6fD2U7hAJMXmIXiuDjoklgT96Yyec3imvfytJnvVFQlKXhxcBmXH%2FeRpFGZ7Y6%2FuoLvaM8QdibidcuyZrpZ8xBywUHvkyoW04ZWh5ZHB%2FtbKUXiTce7zSiwjFWG0T8frxo91B%2B%2FCx7Qz0d5xZQPOfOU6MDFkvXO1%2BPBg8001jhXrqXR01Gh5BL3A5HqEWiTc9%2B%2BOSe7oQYhSng%2FXoz%2Bw%2FA0ciR1W4dEu%2B5jlhK6uuTyijqCi7BD30BXYfz1wmPG7klziLsm5jHm4c9FZiZrP2tP0DO2YEABsUyi4j5PHpnRW3oGbwbqvMK%2FZLAPoCX2GJ%2B7WaUEyWCJgDtBbiHsGa8nb8CH28CmvBQJCUlu1EZO%2Fll%2B8Xnl18RxJVC5mBtswo%2BrzwgY6pgHbBsYT59rKl1cs86mgRAyurEVsKY%2FW8QEmfQVPRdFYjktpRtCOyuVCfjQT9%2FDIr2MDzH80EUNhLAh%2BfauCjpIv5AXnnVvTxJDDePIVWDr5hBjNSGTt0gwlZZbqWokIWrGKCJnklHzMpVzxpAz1uJ8JV%2BnS1R5HF%2BaJ1BuBxHSWC7yTUWY%2BFdiObm9LBkIyBke24US9UHLjYTwx074sJ3066k%2FsyCY5&X-Amz-Signature=0d3692d36e3cba680e27e3a42be84d918bb2e03afc674ae0f4b4cf1dd0ae568c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQSZ7WV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFkD8wb3MkoJUqB1orImDGiq8VwwN97X2PO5zLRAkTo4AiAOV08u2whjY5cnhW44ohr6Ef26oZ%2BhUKDcxVkMiARWLCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMTU%2BL5F053P0ha80aKtwDNHt0bmEgYKSwVB7qZzLepWXtQK%2FjaeXWB%2F9RAWmW2hNxq2zZ7rsjwwmA37ZyL3FgSKhnKMwSXYU2E9MXldphfon6lcl3e9HIa6MirIY2JQn9y9H52tMuGibCARiSImjCPLWa1MHwkK5iOj%2F135YxmGkHohw3z4zez9q9Mw%2BDQ0cnv%2BQzL6VzfomKmRrkNqZKELZLtXvc97Zk%2F8Hc9BTnzxl7NykMeyW08%2B0zHgc7K2mq7VyzxVtImTj%2BNOWm6fD2U7hAJMXmIXiuDjoklgT96Yyec3imvfytJnvVFQlKXhxcBmXH%2FeRpFGZ7Y6%2FuoLvaM8QdibidcuyZrpZ8xBywUHvkyoW04ZWh5ZHB%2FtbKUXiTce7zSiwjFWG0T8frxo91B%2B%2FCx7Qz0d5xZQPOfOU6MDFkvXO1%2BPBg8001jhXrqXR01Gh5BL3A5HqEWiTc9%2B%2BOSe7oQYhSng%2FXoz%2Bw%2FA0ciR1W4dEu%2B5jlhK6uuTyijqCi7BD30BXYfz1wmPG7klziLsm5jHm4c9FZiZrP2tP0DO2YEABsUyi4j5PHpnRW3oGbwbqvMK%2FZLAPoCX2GJ%2B7WaUEyWCJgDtBbiHsGa8nb8CH28CmvBQJCUlu1EZO%2Fll%2B8Xnl18RxJVC5mBtswo%2BrzwgY6pgHbBsYT59rKl1cs86mgRAyurEVsKY%2FW8QEmfQVPRdFYjktpRtCOyuVCfjQT9%2FDIr2MDzH80EUNhLAh%2BfauCjpIv5AXnnVvTxJDDePIVWDr5hBjNSGTt0gwlZZbqWokIWrGKCJnklHzMpVzxpAz1uJ8JV%2BnS1R5HF%2BaJ1BuBxHSWC7yTUWY%2BFdiObm9LBkIyBke24US9UHLjYTwx074sJ3066k%2FsyCY5&X-Amz-Signature=2798ae765e83ee294f3b313c4b820d30507aa7f2ed193781fdc3b1ecf2fff4f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQSZ7WV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFkD8wb3MkoJUqB1orImDGiq8VwwN97X2PO5zLRAkTo4AiAOV08u2whjY5cnhW44ohr6Ef26oZ%2BhUKDcxVkMiARWLCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMTU%2BL5F053P0ha80aKtwDNHt0bmEgYKSwVB7qZzLepWXtQK%2FjaeXWB%2F9RAWmW2hNxq2zZ7rsjwwmA37ZyL3FgSKhnKMwSXYU2E9MXldphfon6lcl3e9HIa6MirIY2JQn9y9H52tMuGibCARiSImjCPLWa1MHwkK5iOj%2F135YxmGkHohw3z4zez9q9Mw%2BDQ0cnv%2BQzL6VzfomKmRrkNqZKELZLtXvc97Zk%2F8Hc9BTnzxl7NykMeyW08%2B0zHgc7K2mq7VyzxVtImTj%2BNOWm6fD2U7hAJMXmIXiuDjoklgT96Yyec3imvfytJnvVFQlKXhxcBmXH%2FeRpFGZ7Y6%2FuoLvaM8QdibidcuyZrpZ8xBywUHvkyoW04ZWh5ZHB%2FtbKUXiTce7zSiwjFWG0T8frxo91B%2B%2FCx7Qz0d5xZQPOfOU6MDFkvXO1%2BPBg8001jhXrqXR01Gh5BL3A5HqEWiTc9%2B%2BOSe7oQYhSng%2FXoz%2Bw%2FA0ciR1W4dEu%2B5jlhK6uuTyijqCi7BD30BXYfz1wmPG7klziLsm5jHm4c9FZiZrP2tP0DO2YEABsUyi4j5PHpnRW3oGbwbqvMK%2FZLAPoCX2GJ%2B7WaUEyWCJgDtBbiHsGa8nb8CH28CmvBQJCUlu1EZO%2Fll%2B8Xnl18RxJVC5mBtswo%2BrzwgY6pgHbBsYT59rKl1cs86mgRAyurEVsKY%2FW8QEmfQVPRdFYjktpRtCOyuVCfjQT9%2FDIr2MDzH80EUNhLAh%2BfauCjpIv5AXnnVvTxJDDePIVWDr5hBjNSGTt0gwlZZbqWokIWrGKCJnklHzMpVzxpAz1uJ8JV%2BnS1R5HF%2BaJ1BuBxHSWC7yTUWY%2BFdiObm9LBkIyBke24US9UHLjYTwx074sJ3066k%2FsyCY5&X-Amz-Signature=3cc060d99b1774cb0692ec7c037d3fcd3d1aea4d142f5cdaefa8b4bda0b57c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
