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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVPE6N7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB%2FeXofTA5f3nv6px1M9CX5JABiamJTFS7Jjkg%2F5ee%2F4AiBe7%2Fv0R8OeVVKuOugScDE77QZWG0NUHpsgBWgWsOE2nSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMf1E1nmxqleEvrW4%2FKtwDCfyzaXj%2BWoAh%2Bhsk3xe80fmfoyadkfKHZ2DhvdUnq9lN78D5qCw6VD8wzOUMLQcu8coTajh9x1ESoN1hIXMhfr41QwLmVlBf6XY%2FiArHPLb8KOu00P6wZfEtg0X620bSiRSZY%2Fvg37OlXfD0hN%2FJ48Y%2BhaGu7epjJqN%2FclJ%2BeGYW2yjkSWONYAUj%2BzkR30XzApMkLKwoawRcKY5C%2F%2BT7w8scpUbolOdal4Regz76EUi6rQasnytg%2FOyVtUB3EAgDFCBRd0zkBITysuiwzEintmwOGKL9C3Ua3oP7ILNnF2mwjMZbH4v2WWeaY1c6Hi63IQNbreG8qxHCnYaXBFdYnBOEo0umLPCwX7wYx%2BuijuC6454x8rMT1dqjBtj%2BCU4vGl8oDhKiBKKHyTF9h84bydyYUlFJAicVLR3yjaLuqv6WlrXbz0dUwMNQ9E9o24ztAnDuHByj2%2BSwRwZ1vq2jV9PScIetUqZs8wm%2BNHsBAO6XlxS9v8sr0%2BG4jOJaF1UBAHcMZcjHdWT4J6gvYmkayAUzX1CVoL0W4XWNEUbrPrIeBbRyFbBFi0NB%2BpIxXYSqQoxP3kUvrCldW8UUxfBrlYs9pDukYg212YqNVYTyiDlcUvvtAZ4reSQk9EEwu%2BO6wgY6pgGfgiNkCR3qRfvZf7T%2FZkp7aT5fgCW3lUIZ45hyb%2F1o8uWxj3CfISiT%2BgbNq1LzArpqS9d79g%2BRLttPMeXe1gHL873uV0gORW5s8Z7RxMSheAx4fUNC6i9uL0O94CcePqSXsnmhnnjd6lowfdIlbzKjfitPQxvrj8oLE6wMFO0XZlnVmJQnaOn3gsSe61vd%2Bie%2BdwYMSY3aAUDJ4jYNy6ud8gYURu9Q&X-Amz-Signature=cb80a8e0f4e2f55eec377d4e881c1984d3f3d8b2f72923d9d1b699d395941df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVPE6N7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB%2FeXofTA5f3nv6px1M9CX5JABiamJTFS7Jjkg%2F5ee%2F4AiBe7%2Fv0R8OeVVKuOugScDE77QZWG0NUHpsgBWgWsOE2nSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMf1E1nmxqleEvrW4%2FKtwDCfyzaXj%2BWoAh%2Bhsk3xe80fmfoyadkfKHZ2DhvdUnq9lN78D5qCw6VD8wzOUMLQcu8coTajh9x1ESoN1hIXMhfr41QwLmVlBf6XY%2FiArHPLb8KOu00P6wZfEtg0X620bSiRSZY%2Fvg37OlXfD0hN%2FJ48Y%2BhaGu7epjJqN%2FclJ%2BeGYW2yjkSWONYAUj%2BzkR30XzApMkLKwoawRcKY5C%2F%2BT7w8scpUbolOdal4Regz76EUi6rQasnytg%2FOyVtUB3EAgDFCBRd0zkBITysuiwzEintmwOGKL9C3Ua3oP7ILNnF2mwjMZbH4v2WWeaY1c6Hi63IQNbreG8qxHCnYaXBFdYnBOEo0umLPCwX7wYx%2BuijuC6454x8rMT1dqjBtj%2BCU4vGl8oDhKiBKKHyTF9h84bydyYUlFJAicVLR3yjaLuqv6WlrXbz0dUwMNQ9E9o24ztAnDuHByj2%2BSwRwZ1vq2jV9PScIetUqZs8wm%2BNHsBAO6XlxS9v8sr0%2BG4jOJaF1UBAHcMZcjHdWT4J6gvYmkayAUzX1CVoL0W4XWNEUbrPrIeBbRyFbBFi0NB%2BpIxXYSqQoxP3kUvrCldW8UUxfBrlYs9pDukYg212YqNVYTyiDlcUvvtAZ4reSQk9EEwu%2BO6wgY6pgGfgiNkCR3qRfvZf7T%2FZkp7aT5fgCW3lUIZ45hyb%2F1o8uWxj3CfISiT%2BgbNq1LzArpqS9d79g%2BRLttPMeXe1gHL873uV0gORW5s8Z7RxMSheAx4fUNC6i9uL0O94CcePqSXsnmhnnjd6lowfdIlbzKjfitPQxvrj8oLE6wMFO0XZlnVmJQnaOn3gsSe61vd%2Bie%2BdwYMSY3aAUDJ4jYNy6ud8gYURu9Q&X-Amz-Signature=5d1cd95925ceabb4d19cbcf39298b6f749f159445f824ffcc89c4b76dc632cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVPE6N7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB%2FeXofTA5f3nv6px1M9CX5JABiamJTFS7Jjkg%2F5ee%2F4AiBe7%2Fv0R8OeVVKuOugScDE77QZWG0NUHpsgBWgWsOE2nSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMf1E1nmxqleEvrW4%2FKtwDCfyzaXj%2BWoAh%2Bhsk3xe80fmfoyadkfKHZ2DhvdUnq9lN78D5qCw6VD8wzOUMLQcu8coTajh9x1ESoN1hIXMhfr41QwLmVlBf6XY%2FiArHPLb8KOu00P6wZfEtg0X620bSiRSZY%2Fvg37OlXfD0hN%2FJ48Y%2BhaGu7epjJqN%2FclJ%2BeGYW2yjkSWONYAUj%2BzkR30XzApMkLKwoawRcKY5C%2F%2BT7w8scpUbolOdal4Regz76EUi6rQasnytg%2FOyVtUB3EAgDFCBRd0zkBITysuiwzEintmwOGKL9C3Ua3oP7ILNnF2mwjMZbH4v2WWeaY1c6Hi63IQNbreG8qxHCnYaXBFdYnBOEo0umLPCwX7wYx%2BuijuC6454x8rMT1dqjBtj%2BCU4vGl8oDhKiBKKHyTF9h84bydyYUlFJAicVLR3yjaLuqv6WlrXbz0dUwMNQ9E9o24ztAnDuHByj2%2BSwRwZ1vq2jV9PScIetUqZs8wm%2BNHsBAO6XlxS9v8sr0%2BG4jOJaF1UBAHcMZcjHdWT4J6gvYmkayAUzX1CVoL0W4XWNEUbrPrIeBbRyFbBFi0NB%2BpIxXYSqQoxP3kUvrCldW8UUxfBrlYs9pDukYg212YqNVYTyiDlcUvvtAZ4reSQk9EEwu%2BO6wgY6pgGfgiNkCR3qRfvZf7T%2FZkp7aT5fgCW3lUIZ45hyb%2F1o8uWxj3CfISiT%2BgbNq1LzArpqS9d79g%2BRLttPMeXe1gHL873uV0gORW5s8Z7RxMSheAx4fUNC6i9uL0O94CcePqSXsnmhnnjd6lowfdIlbzKjfitPQxvrj8oLE6wMFO0XZlnVmJQnaOn3gsSe61vd%2Bie%2BdwYMSY3aAUDJ4jYNy6ud8gYURu9Q&X-Amz-Signature=19b9bfc32d1c3fa806bbf8c7eff1d495ac55a87adfc45161f90d0e1093e20cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVPE6N7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB%2FeXofTA5f3nv6px1M9CX5JABiamJTFS7Jjkg%2F5ee%2F4AiBe7%2Fv0R8OeVVKuOugScDE77QZWG0NUHpsgBWgWsOE2nSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMf1E1nmxqleEvrW4%2FKtwDCfyzaXj%2BWoAh%2Bhsk3xe80fmfoyadkfKHZ2DhvdUnq9lN78D5qCw6VD8wzOUMLQcu8coTajh9x1ESoN1hIXMhfr41QwLmVlBf6XY%2FiArHPLb8KOu00P6wZfEtg0X620bSiRSZY%2Fvg37OlXfD0hN%2FJ48Y%2BhaGu7epjJqN%2FclJ%2BeGYW2yjkSWONYAUj%2BzkR30XzApMkLKwoawRcKY5C%2F%2BT7w8scpUbolOdal4Regz76EUi6rQasnytg%2FOyVtUB3EAgDFCBRd0zkBITysuiwzEintmwOGKL9C3Ua3oP7ILNnF2mwjMZbH4v2WWeaY1c6Hi63IQNbreG8qxHCnYaXBFdYnBOEo0umLPCwX7wYx%2BuijuC6454x8rMT1dqjBtj%2BCU4vGl8oDhKiBKKHyTF9h84bydyYUlFJAicVLR3yjaLuqv6WlrXbz0dUwMNQ9E9o24ztAnDuHByj2%2BSwRwZ1vq2jV9PScIetUqZs8wm%2BNHsBAO6XlxS9v8sr0%2BG4jOJaF1UBAHcMZcjHdWT4J6gvYmkayAUzX1CVoL0W4XWNEUbrPrIeBbRyFbBFi0NB%2BpIxXYSqQoxP3kUvrCldW8UUxfBrlYs9pDukYg212YqNVYTyiDlcUvvtAZ4reSQk9EEwu%2BO6wgY6pgGfgiNkCR3qRfvZf7T%2FZkp7aT5fgCW3lUIZ45hyb%2F1o8uWxj3CfISiT%2BgbNq1LzArpqS9d79g%2BRLttPMeXe1gHL873uV0gORW5s8Z7RxMSheAx4fUNC6i9uL0O94CcePqSXsnmhnnjd6lowfdIlbzKjfitPQxvrj8oLE6wMFO0XZlnVmJQnaOn3gsSe61vd%2Bie%2BdwYMSY3aAUDJ4jYNy6ud8gYURu9Q&X-Amz-Signature=6b42b7ef8192a38297e848a6a8b2af33165ff97b0a6af9b824171fea7a9c3829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVPE6N7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB%2FeXofTA5f3nv6px1M9CX5JABiamJTFS7Jjkg%2F5ee%2F4AiBe7%2Fv0R8OeVVKuOugScDE77QZWG0NUHpsgBWgWsOE2nSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMf1E1nmxqleEvrW4%2FKtwDCfyzaXj%2BWoAh%2Bhsk3xe80fmfoyadkfKHZ2DhvdUnq9lN78D5qCw6VD8wzOUMLQcu8coTajh9x1ESoN1hIXMhfr41QwLmVlBf6XY%2FiArHPLb8KOu00P6wZfEtg0X620bSiRSZY%2Fvg37OlXfD0hN%2FJ48Y%2BhaGu7epjJqN%2FclJ%2BeGYW2yjkSWONYAUj%2BzkR30XzApMkLKwoawRcKY5C%2F%2BT7w8scpUbolOdal4Regz76EUi6rQasnytg%2FOyVtUB3EAgDFCBRd0zkBITysuiwzEintmwOGKL9C3Ua3oP7ILNnF2mwjMZbH4v2WWeaY1c6Hi63IQNbreG8qxHCnYaXBFdYnBOEo0umLPCwX7wYx%2BuijuC6454x8rMT1dqjBtj%2BCU4vGl8oDhKiBKKHyTF9h84bydyYUlFJAicVLR3yjaLuqv6WlrXbz0dUwMNQ9E9o24ztAnDuHByj2%2BSwRwZ1vq2jV9PScIetUqZs8wm%2BNHsBAO6XlxS9v8sr0%2BG4jOJaF1UBAHcMZcjHdWT4J6gvYmkayAUzX1CVoL0W4XWNEUbrPrIeBbRyFbBFi0NB%2BpIxXYSqQoxP3kUvrCldW8UUxfBrlYs9pDukYg212YqNVYTyiDlcUvvtAZ4reSQk9EEwu%2BO6wgY6pgGfgiNkCR3qRfvZf7T%2FZkp7aT5fgCW3lUIZ45hyb%2F1o8uWxj3CfISiT%2BgbNq1LzArpqS9d79g%2BRLttPMeXe1gHL873uV0gORW5s8Z7RxMSheAx4fUNC6i9uL0O94CcePqSXsnmhnnjd6lowfdIlbzKjfitPQxvrj8oLE6wMFO0XZlnVmJQnaOn3gsSe61vd%2Bie%2BdwYMSY3aAUDJ4jYNy6ud8gYURu9Q&X-Amz-Signature=15902c1c2888fe943187a38168372fa14898425bb4e854c7cf29ecbed7de6382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVPE6N7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB%2FeXofTA5f3nv6px1M9CX5JABiamJTFS7Jjkg%2F5ee%2F4AiBe7%2Fv0R8OeVVKuOugScDE77QZWG0NUHpsgBWgWsOE2nSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMf1E1nmxqleEvrW4%2FKtwDCfyzaXj%2BWoAh%2Bhsk3xe80fmfoyadkfKHZ2DhvdUnq9lN78D5qCw6VD8wzOUMLQcu8coTajh9x1ESoN1hIXMhfr41QwLmVlBf6XY%2FiArHPLb8KOu00P6wZfEtg0X620bSiRSZY%2Fvg37OlXfD0hN%2FJ48Y%2BhaGu7epjJqN%2FclJ%2BeGYW2yjkSWONYAUj%2BzkR30XzApMkLKwoawRcKY5C%2F%2BT7w8scpUbolOdal4Regz76EUi6rQasnytg%2FOyVtUB3EAgDFCBRd0zkBITysuiwzEintmwOGKL9C3Ua3oP7ILNnF2mwjMZbH4v2WWeaY1c6Hi63IQNbreG8qxHCnYaXBFdYnBOEo0umLPCwX7wYx%2BuijuC6454x8rMT1dqjBtj%2BCU4vGl8oDhKiBKKHyTF9h84bydyYUlFJAicVLR3yjaLuqv6WlrXbz0dUwMNQ9E9o24ztAnDuHByj2%2BSwRwZ1vq2jV9PScIetUqZs8wm%2BNHsBAO6XlxS9v8sr0%2BG4jOJaF1UBAHcMZcjHdWT4J6gvYmkayAUzX1CVoL0W4XWNEUbrPrIeBbRyFbBFi0NB%2BpIxXYSqQoxP3kUvrCldW8UUxfBrlYs9pDukYg212YqNVYTyiDlcUvvtAZ4reSQk9EEwu%2BO6wgY6pgGfgiNkCR3qRfvZf7T%2FZkp7aT5fgCW3lUIZ45hyb%2F1o8uWxj3CfISiT%2BgbNq1LzArpqS9d79g%2BRLttPMeXe1gHL873uV0gORW5s8Z7RxMSheAx4fUNC6i9uL0O94CcePqSXsnmhnnjd6lowfdIlbzKjfitPQxvrj8oLE6wMFO0XZlnVmJQnaOn3gsSe61vd%2Bie%2BdwYMSY3aAUDJ4jYNy6ud8gYURu9Q&X-Amz-Signature=f8cbedd7f8d745d22665c28fd0c61ba39d054962ad8da9d7bcf99f6f192bc18b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVPE6N7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB%2FeXofTA5f3nv6px1M9CX5JABiamJTFS7Jjkg%2F5ee%2F4AiBe7%2Fv0R8OeVVKuOugScDE77QZWG0NUHpsgBWgWsOE2nSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMf1E1nmxqleEvrW4%2FKtwDCfyzaXj%2BWoAh%2Bhsk3xe80fmfoyadkfKHZ2DhvdUnq9lN78D5qCw6VD8wzOUMLQcu8coTajh9x1ESoN1hIXMhfr41QwLmVlBf6XY%2FiArHPLb8KOu00P6wZfEtg0X620bSiRSZY%2Fvg37OlXfD0hN%2FJ48Y%2BhaGu7epjJqN%2FclJ%2BeGYW2yjkSWONYAUj%2BzkR30XzApMkLKwoawRcKY5C%2F%2BT7w8scpUbolOdal4Regz76EUi6rQasnytg%2FOyVtUB3EAgDFCBRd0zkBITysuiwzEintmwOGKL9C3Ua3oP7ILNnF2mwjMZbH4v2WWeaY1c6Hi63IQNbreG8qxHCnYaXBFdYnBOEo0umLPCwX7wYx%2BuijuC6454x8rMT1dqjBtj%2BCU4vGl8oDhKiBKKHyTF9h84bydyYUlFJAicVLR3yjaLuqv6WlrXbz0dUwMNQ9E9o24ztAnDuHByj2%2BSwRwZ1vq2jV9PScIetUqZs8wm%2BNHsBAO6XlxS9v8sr0%2BG4jOJaF1UBAHcMZcjHdWT4J6gvYmkayAUzX1CVoL0W4XWNEUbrPrIeBbRyFbBFi0NB%2BpIxXYSqQoxP3kUvrCldW8UUxfBrlYs9pDukYg212YqNVYTyiDlcUvvtAZ4reSQk9EEwu%2BO6wgY6pgGfgiNkCR3qRfvZf7T%2FZkp7aT5fgCW3lUIZ45hyb%2F1o8uWxj3CfISiT%2BgbNq1LzArpqS9d79g%2BRLttPMeXe1gHL873uV0gORW5s8Z7RxMSheAx4fUNC6i9uL0O94CcePqSXsnmhnnjd6lowfdIlbzKjfitPQxvrj8oLE6wMFO0XZlnVmJQnaOn3gsSe61vd%2Bie%2BdwYMSY3aAUDJ4jYNy6ud8gYURu9Q&X-Amz-Signature=f9e15f5766d659281bad33ceb2f11295e093615a546cdc7d467782088c884308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVPE6N7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB%2FeXofTA5f3nv6px1M9CX5JABiamJTFS7Jjkg%2F5ee%2F4AiBe7%2Fv0R8OeVVKuOugScDE77QZWG0NUHpsgBWgWsOE2nSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMf1E1nmxqleEvrW4%2FKtwDCfyzaXj%2BWoAh%2Bhsk3xe80fmfoyadkfKHZ2DhvdUnq9lN78D5qCw6VD8wzOUMLQcu8coTajh9x1ESoN1hIXMhfr41QwLmVlBf6XY%2FiArHPLb8KOu00P6wZfEtg0X620bSiRSZY%2Fvg37OlXfD0hN%2FJ48Y%2BhaGu7epjJqN%2FclJ%2BeGYW2yjkSWONYAUj%2BzkR30XzApMkLKwoawRcKY5C%2F%2BT7w8scpUbolOdal4Regz76EUi6rQasnytg%2FOyVtUB3EAgDFCBRd0zkBITysuiwzEintmwOGKL9C3Ua3oP7ILNnF2mwjMZbH4v2WWeaY1c6Hi63IQNbreG8qxHCnYaXBFdYnBOEo0umLPCwX7wYx%2BuijuC6454x8rMT1dqjBtj%2BCU4vGl8oDhKiBKKHyTF9h84bydyYUlFJAicVLR3yjaLuqv6WlrXbz0dUwMNQ9E9o24ztAnDuHByj2%2BSwRwZ1vq2jV9PScIetUqZs8wm%2BNHsBAO6XlxS9v8sr0%2BG4jOJaF1UBAHcMZcjHdWT4J6gvYmkayAUzX1CVoL0W4XWNEUbrPrIeBbRyFbBFi0NB%2BpIxXYSqQoxP3kUvrCldW8UUxfBrlYs9pDukYg212YqNVYTyiDlcUvvtAZ4reSQk9EEwu%2BO6wgY6pgGfgiNkCR3qRfvZf7T%2FZkp7aT5fgCW3lUIZ45hyb%2F1o8uWxj3CfISiT%2BgbNq1LzArpqS9d79g%2BRLttPMeXe1gHL873uV0gORW5s8Z7RxMSheAx4fUNC6i9uL0O94CcePqSXsnmhnnjd6lowfdIlbzKjfitPQxvrj8oLE6wMFO0XZlnVmJQnaOn3gsSe61vd%2Bie%2BdwYMSY3aAUDJ4jYNy6ud8gYURu9Q&X-Amz-Signature=30124433ad19310157310ab5ff9cbde69392a979cb9e4077958ba00d5d79c685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
