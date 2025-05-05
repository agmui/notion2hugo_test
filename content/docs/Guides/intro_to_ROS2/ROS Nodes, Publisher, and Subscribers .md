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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFNEI3QY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDldabx%2BqJgiNOe%2Be5X3tCdI%2BO0QUexfLCK5Cj0dDvtcwIgF%2FQfGfmfcnyrzFvq5NGhsnii66xcs3rqDrWEaYS5i44q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFK51KEbYV7UhLANDircA7GRJv4ERt5e9wJ9pK3rcUujzpvi%2B3G%2B0vCp1MnDU6aczNK9hgC5OoAknnPI1gR%2BCZ8mKVdgN1LmslquhWM%2BmtHy%2BqqHp05wXMIIETId9Nn1Mw8F0z0fOOP125AUCBC6yI8GvLn8FH5Os75dxqykdYQs1crDF0qzp7VRukbZQE0MXdFiKwHBHqNF%2FelUmrkUZ0KNV7DyuKpd7cZf5Gw7ZbSb1RrcyTeubSmWx1jLtT%2B604aOm%2FjJAZ7RBJuq%2FXGjbQDVCghPpSvIoVWEPn39zeR8fIV6vt4pOl9LVdchPxMPXEsoJ7gohJ6mMN8l1R34TMx93CGHO%2BinuaHR5rM8kN%2FwHc35CTI94uY2alXBOXXwNpjcN7zVlyWaC4EO%2Fhrx6dmaUdAIN9KtMIcY9DX6J185K%2FOcBvhIcqfcMDAkUOqbe6ui60nChIJC%2FW0vSJs5%2FZPqEr5eSDWshMT056UtCztX4XOKRoZU1P%2FySG04xpuRxNc7CgOwsdI7qI7%2BrXDBTHv8UNuDiZW%2F%2B9ApU8iYhytnaeOTuRhR04a083wdfRjccKU9wz4iXo6vRenqx%2Fomnka77cCAUVgLtHSZkCgWN4ZnapB8vgPMK6YLrHKWpiRMXyeusOGoCJ%2BzouukMPyV48AGOqUBexw41sTISu0zi2ue869xZ4fHhCWs1zavweb3B49JUsNl6PeyfoywuGjXNyuIIcyQ1RNfusm79VOrQpEeSbhvgXK%2B90k4eGpWAYfS%2BcpymdNGNANtl9y41o%2B6r6p489w7SPJsREZUnElwccPnpZQAyjWZ8tdHXtYjaWqIpnggimNXZexqzqcrWk7Mkk6pgxcds7nZ%2ByLQDijeEa3XwB4m1u0zGmYp&X-Amz-Signature=a3296cef350631892e3bf557978985b46d6a3dcab88114a63763f03ec018f26f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFNEI3QY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDldabx%2BqJgiNOe%2Be5X3tCdI%2BO0QUexfLCK5Cj0dDvtcwIgF%2FQfGfmfcnyrzFvq5NGhsnii66xcs3rqDrWEaYS5i44q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFK51KEbYV7UhLANDircA7GRJv4ERt5e9wJ9pK3rcUujzpvi%2B3G%2B0vCp1MnDU6aczNK9hgC5OoAknnPI1gR%2BCZ8mKVdgN1LmslquhWM%2BmtHy%2BqqHp05wXMIIETId9Nn1Mw8F0z0fOOP125AUCBC6yI8GvLn8FH5Os75dxqykdYQs1crDF0qzp7VRukbZQE0MXdFiKwHBHqNF%2FelUmrkUZ0KNV7DyuKpd7cZf5Gw7ZbSb1RrcyTeubSmWx1jLtT%2B604aOm%2FjJAZ7RBJuq%2FXGjbQDVCghPpSvIoVWEPn39zeR8fIV6vt4pOl9LVdchPxMPXEsoJ7gohJ6mMN8l1R34TMx93CGHO%2BinuaHR5rM8kN%2FwHc35CTI94uY2alXBOXXwNpjcN7zVlyWaC4EO%2Fhrx6dmaUdAIN9KtMIcY9DX6J185K%2FOcBvhIcqfcMDAkUOqbe6ui60nChIJC%2FW0vSJs5%2FZPqEr5eSDWshMT056UtCztX4XOKRoZU1P%2FySG04xpuRxNc7CgOwsdI7qI7%2BrXDBTHv8UNuDiZW%2F%2B9ApU8iYhytnaeOTuRhR04a083wdfRjccKU9wz4iXo6vRenqx%2Fomnka77cCAUVgLtHSZkCgWN4ZnapB8vgPMK6YLrHKWpiRMXyeusOGoCJ%2BzouukMPyV48AGOqUBexw41sTISu0zi2ue869xZ4fHhCWs1zavweb3B49JUsNl6PeyfoywuGjXNyuIIcyQ1RNfusm79VOrQpEeSbhvgXK%2B90k4eGpWAYfS%2BcpymdNGNANtl9y41o%2B6r6p489w7SPJsREZUnElwccPnpZQAyjWZ8tdHXtYjaWqIpnggimNXZexqzqcrWk7Mkk6pgxcds7nZ%2ByLQDijeEa3XwB4m1u0zGmYp&X-Amz-Signature=e6fac09b6680de8febc23c1fc1225d8b6652e981568570bf9f2c676fcc7edfe5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFNEI3QY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDldabx%2BqJgiNOe%2Be5X3tCdI%2BO0QUexfLCK5Cj0dDvtcwIgF%2FQfGfmfcnyrzFvq5NGhsnii66xcs3rqDrWEaYS5i44q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFK51KEbYV7UhLANDircA7GRJv4ERt5e9wJ9pK3rcUujzpvi%2B3G%2B0vCp1MnDU6aczNK9hgC5OoAknnPI1gR%2BCZ8mKVdgN1LmslquhWM%2BmtHy%2BqqHp05wXMIIETId9Nn1Mw8F0z0fOOP125AUCBC6yI8GvLn8FH5Os75dxqykdYQs1crDF0qzp7VRukbZQE0MXdFiKwHBHqNF%2FelUmrkUZ0KNV7DyuKpd7cZf5Gw7ZbSb1RrcyTeubSmWx1jLtT%2B604aOm%2FjJAZ7RBJuq%2FXGjbQDVCghPpSvIoVWEPn39zeR8fIV6vt4pOl9LVdchPxMPXEsoJ7gohJ6mMN8l1R34TMx93CGHO%2BinuaHR5rM8kN%2FwHc35CTI94uY2alXBOXXwNpjcN7zVlyWaC4EO%2Fhrx6dmaUdAIN9KtMIcY9DX6J185K%2FOcBvhIcqfcMDAkUOqbe6ui60nChIJC%2FW0vSJs5%2FZPqEr5eSDWshMT056UtCztX4XOKRoZU1P%2FySG04xpuRxNc7CgOwsdI7qI7%2BrXDBTHv8UNuDiZW%2F%2B9ApU8iYhytnaeOTuRhR04a083wdfRjccKU9wz4iXo6vRenqx%2Fomnka77cCAUVgLtHSZkCgWN4ZnapB8vgPMK6YLrHKWpiRMXyeusOGoCJ%2BzouukMPyV48AGOqUBexw41sTISu0zi2ue869xZ4fHhCWs1zavweb3B49JUsNl6PeyfoywuGjXNyuIIcyQ1RNfusm79VOrQpEeSbhvgXK%2B90k4eGpWAYfS%2BcpymdNGNANtl9y41o%2B6r6p489w7SPJsREZUnElwccPnpZQAyjWZ8tdHXtYjaWqIpnggimNXZexqzqcrWk7Mkk6pgxcds7nZ%2ByLQDijeEa3XwB4m1u0zGmYp&X-Amz-Signature=ac6cda006b30a52d7a22d132da726dea0b43e07a6a040d43b11259506fe3bfc9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFNEI3QY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDldabx%2BqJgiNOe%2Be5X3tCdI%2BO0QUexfLCK5Cj0dDvtcwIgF%2FQfGfmfcnyrzFvq5NGhsnii66xcs3rqDrWEaYS5i44q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFK51KEbYV7UhLANDircA7GRJv4ERt5e9wJ9pK3rcUujzpvi%2B3G%2B0vCp1MnDU6aczNK9hgC5OoAknnPI1gR%2BCZ8mKVdgN1LmslquhWM%2BmtHy%2BqqHp05wXMIIETId9Nn1Mw8F0z0fOOP125AUCBC6yI8GvLn8FH5Os75dxqykdYQs1crDF0qzp7VRukbZQE0MXdFiKwHBHqNF%2FelUmrkUZ0KNV7DyuKpd7cZf5Gw7ZbSb1RrcyTeubSmWx1jLtT%2B604aOm%2FjJAZ7RBJuq%2FXGjbQDVCghPpSvIoVWEPn39zeR8fIV6vt4pOl9LVdchPxMPXEsoJ7gohJ6mMN8l1R34TMx93CGHO%2BinuaHR5rM8kN%2FwHc35CTI94uY2alXBOXXwNpjcN7zVlyWaC4EO%2Fhrx6dmaUdAIN9KtMIcY9DX6J185K%2FOcBvhIcqfcMDAkUOqbe6ui60nChIJC%2FW0vSJs5%2FZPqEr5eSDWshMT056UtCztX4XOKRoZU1P%2FySG04xpuRxNc7CgOwsdI7qI7%2BrXDBTHv8UNuDiZW%2F%2B9ApU8iYhytnaeOTuRhR04a083wdfRjccKU9wz4iXo6vRenqx%2Fomnka77cCAUVgLtHSZkCgWN4ZnapB8vgPMK6YLrHKWpiRMXyeusOGoCJ%2BzouukMPyV48AGOqUBexw41sTISu0zi2ue869xZ4fHhCWs1zavweb3B49JUsNl6PeyfoywuGjXNyuIIcyQ1RNfusm79VOrQpEeSbhvgXK%2B90k4eGpWAYfS%2BcpymdNGNANtl9y41o%2B6r6p489w7SPJsREZUnElwccPnpZQAyjWZ8tdHXtYjaWqIpnggimNXZexqzqcrWk7Mkk6pgxcds7nZ%2ByLQDijeEa3XwB4m1u0zGmYp&X-Amz-Signature=bcb8ee9184c4116876eb92751ecd301b1f3b59c5067a219b19944cf32a532028&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFNEI3QY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDldabx%2BqJgiNOe%2Be5X3tCdI%2BO0QUexfLCK5Cj0dDvtcwIgF%2FQfGfmfcnyrzFvq5NGhsnii66xcs3rqDrWEaYS5i44q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFK51KEbYV7UhLANDircA7GRJv4ERt5e9wJ9pK3rcUujzpvi%2B3G%2B0vCp1MnDU6aczNK9hgC5OoAknnPI1gR%2BCZ8mKVdgN1LmslquhWM%2BmtHy%2BqqHp05wXMIIETId9Nn1Mw8F0z0fOOP125AUCBC6yI8GvLn8FH5Os75dxqykdYQs1crDF0qzp7VRukbZQE0MXdFiKwHBHqNF%2FelUmrkUZ0KNV7DyuKpd7cZf5Gw7ZbSb1RrcyTeubSmWx1jLtT%2B604aOm%2FjJAZ7RBJuq%2FXGjbQDVCghPpSvIoVWEPn39zeR8fIV6vt4pOl9LVdchPxMPXEsoJ7gohJ6mMN8l1R34TMx93CGHO%2BinuaHR5rM8kN%2FwHc35CTI94uY2alXBOXXwNpjcN7zVlyWaC4EO%2Fhrx6dmaUdAIN9KtMIcY9DX6J185K%2FOcBvhIcqfcMDAkUOqbe6ui60nChIJC%2FW0vSJs5%2FZPqEr5eSDWshMT056UtCztX4XOKRoZU1P%2FySG04xpuRxNc7CgOwsdI7qI7%2BrXDBTHv8UNuDiZW%2F%2B9ApU8iYhytnaeOTuRhR04a083wdfRjccKU9wz4iXo6vRenqx%2Fomnka77cCAUVgLtHSZkCgWN4ZnapB8vgPMK6YLrHKWpiRMXyeusOGoCJ%2BzouukMPyV48AGOqUBexw41sTISu0zi2ue869xZ4fHhCWs1zavweb3B49JUsNl6PeyfoywuGjXNyuIIcyQ1RNfusm79VOrQpEeSbhvgXK%2B90k4eGpWAYfS%2BcpymdNGNANtl9y41o%2B6r6p489w7SPJsREZUnElwccPnpZQAyjWZ8tdHXtYjaWqIpnggimNXZexqzqcrWk7Mkk6pgxcds7nZ%2ByLQDijeEa3XwB4m1u0zGmYp&X-Amz-Signature=cf5d848493cad04229f7b9a382524e78c8014fc8e45804fa071c7c34c243606c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFNEI3QY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDldabx%2BqJgiNOe%2Be5X3tCdI%2BO0QUexfLCK5Cj0dDvtcwIgF%2FQfGfmfcnyrzFvq5NGhsnii66xcs3rqDrWEaYS5i44q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFK51KEbYV7UhLANDircA7GRJv4ERt5e9wJ9pK3rcUujzpvi%2B3G%2B0vCp1MnDU6aczNK9hgC5OoAknnPI1gR%2BCZ8mKVdgN1LmslquhWM%2BmtHy%2BqqHp05wXMIIETId9Nn1Mw8F0z0fOOP125AUCBC6yI8GvLn8FH5Os75dxqykdYQs1crDF0qzp7VRukbZQE0MXdFiKwHBHqNF%2FelUmrkUZ0KNV7DyuKpd7cZf5Gw7ZbSb1RrcyTeubSmWx1jLtT%2B604aOm%2FjJAZ7RBJuq%2FXGjbQDVCghPpSvIoVWEPn39zeR8fIV6vt4pOl9LVdchPxMPXEsoJ7gohJ6mMN8l1R34TMx93CGHO%2BinuaHR5rM8kN%2FwHc35CTI94uY2alXBOXXwNpjcN7zVlyWaC4EO%2Fhrx6dmaUdAIN9KtMIcY9DX6J185K%2FOcBvhIcqfcMDAkUOqbe6ui60nChIJC%2FW0vSJs5%2FZPqEr5eSDWshMT056UtCztX4XOKRoZU1P%2FySG04xpuRxNc7CgOwsdI7qI7%2BrXDBTHv8UNuDiZW%2F%2B9ApU8iYhytnaeOTuRhR04a083wdfRjccKU9wz4iXo6vRenqx%2Fomnka77cCAUVgLtHSZkCgWN4ZnapB8vgPMK6YLrHKWpiRMXyeusOGoCJ%2BzouukMPyV48AGOqUBexw41sTISu0zi2ue869xZ4fHhCWs1zavweb3B49JUsNl6PeyfoywuGjXNyuIIcyQ1RNfusm79VOrQpEeSbhvgXK%2B90k4eGpWAYfS%2BcpymdNGNANtl9y41o%2B6r6p489w7SPJsREZUnElwccPnpZQAyjWZ8tdHXtYjaWqIpnggimNXZexqzqcrWk7Mkk6pgxcds7nZ%2ByLQDijeEa3XwB4m1u0zGmYp&X-Amz-Signature=ee4823bab57b8ee973da1787b650f4af2aecf54ece9c2552b2d4234a2968242a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFNEI3QY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDldabx%2BqJgiNOe%2Be5X3tCdI%2BO0QUexfLCK5Cj0dDvtcwIgF%2FQfGfmfcnyrzFvq5NGhsnii66xcs3rqDrWEaYS5i44q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFK51KEbYV7UhLANDircA7GRJv4ERt5e9wJ9pK3rcUujzpvi%2B3G%2B0vCp1MnDU6aczNK9hgC5OoAknnPI1gR%2BCZ8mKVdgN1LmslquhWM%2BmtHy%2BqqHp05wXMIIETId9Nn1Mw8F0z0fOOP125AUCBC6yI8GvLn8FH5Os75dxqykdYQs1crDF0qzp7VRukbZQE0MXdFiKwHBHqNF%2FelUmrkUZ0KNV7DyuKpd7cZf5Gw7ZbSb1RrcyTeubSmWx1jLtT%2B604aOm%2FjJAZ7RBJuq%2FXGjbQDVCghPpSvIoVWEPn39zeR8fIV6vt4pOl9LVdchPxMPXEsoJ7gohJ6mMN8l1R34TMx93CGHO%2BinuaHR5rM8kN%2FwHc35CTI94uY2alXBOXXwNpjcN7zVlyWaC4EO%2Fhrx6dmaUdAIN9KtMIcY9DX6J185K%2FOcBvhIcqfcMDAkUOqbe6ui60nChIJC%2FW0vSJs5%2FZPqEr5eSDWshMT056UtCztX4XOKRoZU1P%2FySG04xpuRxNc7CgOwsdI7qI7%2BrXDBTHv8UNuDiZW%2F%2B9ApU8iYhytnaeOTuRhR04a083wdfRjccKU9wz4iXo6vRenqx%2Fomnka77cCAUVgLtHSZkCgWN4ZnapB8vgPMK6YLrHKWpiRMXyeusOGoCJ%2BzouukMPyV48AGOqUBexw41sTISu0zi2ue869xZ4fHhCWs1zavweb3B49JUsNl6PeyfoywuGjXNyuIIcyQ1RNfusm79VOrQpEeSbhvgXK%2B90k4eGpWAYfS%2BcpymdNGNANtl9y41o%2B6r6p489w7SPJsREZUnElwccPnpZQAyjWZ8tdHXtYjaWqIpnggimNXZexqzqcrWk7Mkk6pgxcds7nZ%2ByLQDijeEa3XwB4m1u0zGmYp&X-Amz-Signature=c4dfd37dd66c62024a6d074b393d97e2ac22483b5b999ab82a6c46627f288b41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFNEI3QY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDldabx%2BqJgiNOe%2Be5X3tCdI%2BO0QUexfLCK5Cj0dDvtcwIgF%2FQfGfmfcnyrzFvq5NGhsnii66xcs3rqDrWEaYS5i44q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFK51KEbYV7UhLANDircA7GRJv4ERt5e9wJ9pK3rcUujzpvi%2B3G%2B0vCp1MnDU6aczNK9hgC5OoAknnPI1gR%2BCZ8mKVdgN1LmslquhWM%2BmtHy%2BqqHp05wXMIIETId9Nn1Mw8F0z0fOOP125AUCBC6yI8GvLn8FH5Os75dxqykdYQs1crDF0qzp7VRukbZQE0MXdFiKwHBHqNF%2FelUmrkUZ0KNV7DyuKpd7cZf5Gw7ZbSb1RrcyTeubSmWx1jLtT%2B604aOm%2FjJAZ7RBJuq%2FXGjbQDVCghPpSvIoVWEPn39zeR8fIV6vt4pOl9LVdchPxMPXEsoJ7gohJ6mMN8l1R34TMx93CGHO%2BinuaHR5rM8kN%2FwHc35CTI94uY2alXBOXXwNpjcN7zVlyWaC4EO%2Fhrx6dmaUdAIN9KtMIcY9DX6J185K%2FOcBvhIcqfcMDAkUOqbe6ui60nChIJC%2FW0vSJs5%2FZPqEr5eSDWshMT056UtCztX4XOKRoZU1P%2FySG04xpuRxNc7CgOwsdI7qI7%2BrXDBTHv8UNuDiZW%2F%2B9ApU8iYhytnaeOTuRhR04a083wdfRjccKU9wz4iXo6vRenqx%2Fomnka77cCAUVgLtHSZkCgWN4ZnapB8vgPMK6YLrHKWpiRMXyeusOGoCJ%2BzouukMPyV48AGOqUBexw41sTISu0zi2ue869xZ4fHhCWs1zavweb3B49JUsNl6PeyfoywuGjXNyuIIcyQ1RNfusm79VOrQpEeSbhvgXK%2B90k4eGpWAYfS%2BcpymdNGNANtl9y41o%2B6r6p489w7SPJsREZUnElwccPnpZQAyjWZ8tdHXtYjaWqIpnggimNXZexqzqcrWk7Mkk6pgxcds7nZ%2ByLQDijeEa3XwB4m1u0zGmYp&X-Amz-Signature=3f8bdbbbb7d8ad8c5a8dc9980fd220db5cd26c242aa492f813a618fec227792e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
