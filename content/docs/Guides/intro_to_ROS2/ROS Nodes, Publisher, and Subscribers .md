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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647LEG4NT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2FRUiIb5%2BSRih%2Fz5ZBw%2BdYzUCWVYrFbmiTZ6ShSnN7AiEA8%2FshzhYZNvOyrurLC2ZBlVWKv6TVn%2BUhagA4t60aJrkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2BYy0l%2BUvB9vXGdircAwHRmRR8eptXaxL3Vusq8iEYjHSb1kIiI1u7e8wqd4cNvAIzHTBww3GEK3A7cEU55bH91tl34QOvvXJyFgrpM1Gl9UQ05VM%2FxQ7zgOmjtWgY37G5B8a5DfMUZSbf34fAmS3Yj%2FXO7uV9dq7tVKQfNW9C%2FZFh6HAaKU3FHTYaanmUkWB3o%2FAtjXr8dEb0jLZa5LbyHcvGKLjNOwHilIqXQGxo3Mz6qaEMqxo%2FGW268iM6iOXSickuibhU63OjXLlMxLJ5s6PcZGjddNO1w3SCSCnR608qMFqrnIf2%2FWAZr9hyI2qqKlzEHpd%2FO7hdkI2G0%2FXMN%2FNlRJKeRPuuJb2xL%2FChtytgOELj7Xe6gXBqq09g8HE%2F5P%2F0GkvbiBmmdcXulSvI5eXG9lhsCb3FPEPihE9BjVo8Z4yV6jfI7pt7GpKVtRfCaVnjbbxPZAgVPkpUQ%2BiEv89hWJ03hNZlTmYdw4819ueOT3TPU23U5fJ%2BaqeCaqEG7AGMZNQeAaYmGfW%2F6iMgB9BjAtwEfeqBgBN6uHnN9sl5JdCUGQ6hXKB3lkDOcsur8aGO93792JUilqGTVY9TrcDO3qgabQt1H4ooz16pNY7bVcrTcPiJIxht6%2BTXKp8TBcDxs4la%2FtjpMJ707rwGOqUBmHDj%2Fd0keN6F7R3jaxlzghfdfltFF5coNez%2F4JInmsK%2BXRNiwvBe5sIHiEEBeWWXYicrgB40LC1nZIgBLB5ID3FwnGnEu3wKr4s4XRV0i6T3za8UWkAoGqLl0k6%2BbfWHV267UQqE94DfC1GwM0b3lhKMUZcKJB%2Fehn4KqOdto4K4EiTwncmTdUeaygyaTBPVGewXv5Kh%2B%2B0edkf5lxy3hpNnJHLz&X-Amz-Signature=050a434e41ba66a359b73edd9023d00e0619fb2bb8338cf6c586fe1b5d432045&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647LEG4NT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2FRUiIb5%2BSRih%2Fz5ZBw%2BdYzUCWVYrFbmiTZ6ShSnN7AiEA8%2FshzhYZNvOyrurLC2ZBlVWKv6TVn%2BUhagA4t60aJrkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2BYy0l%2BUvB9vXGdircAwHRmRR8eptXaxL3Vusq8iEYjHSb1kIiI1u7e8wqd4cNvAIzHTBww3GEK3A7cEU55bH91tl34QOvvXJyFgrpM1Gl9UQ05VM%2FxQ7zgOmjtWgY37G5B8a5DfMUZSbf34fAmS3Yj%2FXO7uV9dq7tVKQfNW9C%2FZFh6HAaKU3FHTYaanmUkWB3o%2FAtjXr8dEb0jLZa5LbyHcvGKLjNOwHilIqXQGxo3Mz6qaEMqxo%2FGW268iM6iOXSickuibhU63OjXLlMxLJ5s6PcZGjddNO1w3SCSCnR608qMFqrnIf2%2FWAZr9hyI2qqKlzEHpd%2FO7hdkI2G0%2FXMN%2FNlRJKeRPuuJb2xL%2FChtytgOELj7Xe6gXBqq09g8HE%2F5P%2F0GkvbiBmmdcXulSvI5eXG9lhsCb3FPEPihE9BjVo8Z4yV6jfI7pt7GpKVtRfCaVnjbbxPZAgVPkpUQ%2BiEv89hWJ03hNZlTmYdw4819ueOT3TPU23U5fJ%2BaqeCaqEG7AGMZNQeAaYmGfW%2F6iMgB9BjAtwEfeqBgBN6uHnN9sl5JdCUGQ6hXKB3lkDOcsur8aGO93792JUilqGTVY9TrcDO3qgabQt1H4ooz16pNY7bVcrTcPiJIxht6%2BTXKp8TBcDxs4la%2FtjpMJ707rwGOqUBmHDj%2Fd0keN6F7R3jaxlzghfdfltFF5coNez%2F4JInmsK%2BXRNiwvBe5sIHiEEBeWWXYicrgB40LC1nZIgBLB5ID3FwnGnEu3wKr4s4XRV0i6T3za8UWkAoGqLl0k6%2BbfWHV267UQqE94DfC1GwM0b3lhKMUZcKJB%2Fehn4KqOdto4K4EiTwncmTdUeaygyaTBPVGewXv5Kh%2B%2B0edkf5lxy3hpNnJHLz&X-Amz-Signature=a368c82c12f896c2ff0aa034dbaa40595485b95dd272564a72e79bb1967bbaf1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647LEG4NT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2FRUiIb5%2BSRih%2Fz5ZBw%2BdYzUCWVYrFbmiTZ6ShSnN7AiEA8%2FshzhYZNvOyrurLC2ZBlVWKv6TVn%2BUhagA4t60aJrkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2BYy0l%2BUvB9vXGdircAwHRmRR8eptXaxL3Vusq8iEYjHSb1kIiI1u7e8wqd4cNvAIzHTBww3GEK3A7cEU55bH91tl34QOvvXJyFgrpM1Gl9UQ05VM%2FxQ7zgOmjtWgY37G5B8a5DfMUZSbf34fAmS3Yj%2FXO7uV9dq7tVKQfNW9C%2FZFh6HAaKU3FHTYaanmUkWB3o%2FAtjXr8dEb0jLZa5LbyHcvGKLjNOwHilIqXQGxo3Mz6qaEMqxo%2FGW268iM6iOXSickuibhU63OjXLlMxLJ5s6PcZGjddNO1w3SCSCnR608qMFqrnIf2%2FWAZr9hyI2qqKlzEHpd%2FO7hdkI2G0%2FXMN%2FNlRJKeRPuuJb2xL%2FChtytgOELj7Xe6gXBqq09g8HE%2F5P%2F0GkvbiBmmdcXulSvI5eXG9lhsCb3FPEPihE9BjVo8Z4yV6jfI7pt7GpKVtRfCaVnjbbxPZAgVPkpUQ%2BiEv89hWJ03hNZlTmYdw4819ueOT3TPU23U5fJ%2BaqeCaqEG7AGMZNQeAaYmGfW%2F6iMgB9BjAtwEfeqBgBN6uHnN9sl5JdCUGQ6hXKB3lkDOcsur8aGO93792JUilqGTVY9TrcDO3qgabQt1H4ooz16pNY7bVcrTcPiJIxht6%2BTXKp8TBcDxs4la%2FtjpMJ707rwGOqUBmHDj%2Fd0keN6F7R3jaxlzghfdfltFF5coNez%2F4JInmsK%2BXRNiwvBe5sIHiEEBeWWXYicrgB40LC1nZIgBLB5ID3FwnGnEu3wKr4s4XRV0i6T3za8UWkAoGqLl0k6%2BbfWHV267UQqE94DfC1GwM0b3lhKMUZcKJB%2Fehn4KqOdto4K4EiTwncmTdUeaygyaTBPVGewXv5Kh%2B%2B0edkf5lxy3hpNnJHLz&X-Amz-Signature=e0497d5ec4f35f58fee303fabb37677a0d8a96358fe53a185c0cf5809e64932c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647LEG4NT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2FRUiIb5%2BSRih%2Fz5ZBw%2BdYzUCWVYrFbmiTZ6ShSnN7AiEA8%2FshzhYZNvOyrurLC2ZBlVWKv6TVn%2BUhagA4t60aJrkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2BYy0l%2BUvB9vXGdircAwHRmRR8eptXaxL3Vusq8iEYjHSb1kIiI1u7e8wqd4cNvAIzHTBww3GEK3A7cEU55bH91tl34QOvvXJyFgrpM1Gl9UQ05VM%2FxQ7zgOmjtWgY37G5B8a5DfMUZSbf34fAmS3Yj%2FXO7uV9dq7tVKQfNW9C%2FZFh6HAaKU3FHTYaanmUkWB3o%2FAtjXr8dEb0jLZa5LbyHcvGKLjNOwHilIqXQGxo3Mz6qaEMqxo%2FGW268iM6iOXSickuibhU63OjXLlMxLJ5s6PcZGjddNO1w3SCSCnR608qMFqrnIf2%2FWAZr9hyI2qqKlzEHpd%2FO7hdkI2G0%2FXMN%2FNlRJKeRPuuJb2xL%2FChtytgOELj7Xe6gXBqq09g8HE%2F5P%2F0GkvbiBmmdcXulSvI5eXG9lhsCb3FPEPihE9BjVo8Z4yV6jfI7pt7GpKVtRfCaVnjbbxPZAgVPkpUQ%2BiEv89hWJ03hNZlTmYdw4819ueOT3TPU23U5fJ%2BaqeCaqEG7AGMZNQeAaYmGfW%2F6iMgB9BjAtwEfeqBgBN6uHnN9sl5JdCUGQ6hXKB3lkDOcsur8aGO93792JUilqGTVY9TrcDO3qgabQt1H4ooz16pNY7bVcrTcPiJIxht6%2BTXKp8TBcDxs4la%2FtjpMJ707rwGOqUBmHDj%2Fd0keN6F7R3jaxlzghfdfltFF5coNez%2F4JInmsK%2BXRNiwvBe5sIHiEEBeWWXYicrgB40LC1nZIgBLB5ID3FwnGnEu3wKr4s4XRV0i6T3za8UWkAoGqLl0k6%2BbfWHV267UQqE94DfC1GwM0b3lhKMUZcKJB%2Fehn4KqOdto4K4EiTwncmTdUeaygyaTBPVGewXv5Kh%2B%2B0edkf5lxy3hpNnJHLz&X-Amz-Signature=b02e6913e511d96b99ab29b8153be7529841a9953f896b060ef097b429335564&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647LEG4NT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2FRUiIb5%2BSRih%2Fz5ZBw%2BdYzUCWVYrFbmiTZ6ShSnN7AiEA8%2FshzhYZNvOyrurLC2ZBlVWKv6TVn%2BUhagA4t60aJrkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2BYy0l%2BUvB9vXGdircAwHRmRR8eptXaxL3Vusq8iEYjHSb1kIiI1u7e8wqd4cNvAIzHTBww3GEK3A7cEU55bH91tl34QOvvXJyFgrpM1Gl9UQ05VM%2FxQ7zgOmjtWgY37G5B8a5DfMUZSbf34fAmS3Yj%2FXO7uV9dq7tVKQfNW9C%2FZFh6HAaKU3FHTYaanmUkWB3o%2FAtjXr8dEb0jLZa5LbyHcvGKLjNOwHilIqXQGxo3Mz6qaEMqxo%2FGW268iM6iOXSickuibhU63OjXLlMxLJ5s6PcZGjddNO1w3SCSCnR608qMFqrnIf2%2FWAZr9hyI2qqKlzEHpd%2FO7hdkI2G0%2FXMN%2FNlRJKeRPuuJb2xL%2FChtytgOELj7Xe6gXBqq09g8HE%2F5P%2F0GkvbiBmmdcXulSvI5eXG9lhsCb3FPEPihE9BjVo8Z4yV6jfI7pt7GpKVtRfCaVnjbbxPZAgVPkpUQ%2BiEv89hWJ03hNZlTmYdw4819ueOT3TPU23U5fJ%2BaqeCaqEG7AGMZNQeAaYmGfW%2F6iMgB9BjAtwEfeqBgBN6uHnN9sl5JdCUGQ6hXKB3lkDOcsur8aGO93792JUilqGTVY9TrcDO3qgabQt1H4ooz16pNY7bVcrTcPiJIxht6%2BTXKp8TBcDxs4la%2FtjpMJ707rwGOqUBmHDj%2Fd0keN6F7R3jaxlzghfdfltFF5coNez%2F4JInmsK%2BXRNiwvBe5sIHiEEBeWWXYicrgB40LC1nZIgBLB5ID3FwnGnEu3wKr4s4XRV0i6T3za8UWkAoGqLl0k6%2BbfWHV267UQqE94DfC1GwM0b3lhKMUZcKJB%2Fehn4KqOdto4K4EiTwncmTdUeaygyaTBPVGewXv5Kh%2B%2B0edkf5lxy3hpNnJHLz&X-Amz-Signature=c7a7570cfa8806b9052f5c740c6ce626a60fcd3d28a97c50aa08ab93dad32ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647LEG4NT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2FRUiIb5%2BSRih%2Fz5ZBw%2BdYzUCWVYrFbmiTZ6ShSnN7AiEA8%2FshzhYZNvOyrurLC2ZBlVWKv6TVn%2BUhagA4t60aJrkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2BYy0l%2BUvB9vXGdircAwHRmRR8eptXaxL3Vusq8iEYjHSb1kIiI1u7e8wqd4cNvAIzHTBww3GEK3A7cEU55bH91tl34QOvvXJyFgrpM1Gl9UQ05VM%2FxQ7zgOmjtWgY37G5B8a5DfMUZSbf34fAmS3Yj%2FXO7uV9dq7tVKQfNW9C%2FZFh6HAaKU3FHTYaanmUkWB3o%2FAtjXr8dEb0jLZa5LbyHcvGKLjNOwHilIqXQGxo3Mz6qaEMqxo%2FGW268iM6iOXSickuibhU63OjXLlMxLJ5s6PcZGjddNO1w3SCSCnR608qMFqrnIf2%2FWAZr9hyI2qqKlzEHpd%2FO7hdkI2G0%2FXMN%2FNlRJKeRPuuJb2xL%2FChtytgOELj7Xe6gXBqq09g8HE%2F5P%2F0GkvbiBmmdcXulSvI5eXG9lhsCb3FPEPihE9BjVo8Z4yV6jfI7pt7GpKVtRfCaVnjbbxPZAgVPkpUQ%2BiEv89hWJ03hNZlTmYdw4819ueOT3TPU23U5fJ%2BaqeCaqEG7AGMZNQeAaYmGfW%2F6iMgB9BjAtwEfeqBgBN6uHnN9sl5JdCUGQ6hXKB3lkDOcsur8aGO93792JUilqGTVY9TrcDO3qgabQt1H4ooz16pNY7bVcrTcPiJIxht6%2BTXKp8TBcDxs4la%2FtjpMJ707rwGOqUBmHDj%2Fd0keN6F7R3jaxlzghfdfltFF5coNez%2F4JInmsK%2BXRNiwvBe5sIHiEEBeWWXYicrgB40LC1nZIgBLB5ID3FwnGnEu3wKr4s4XRV0i6T3za8UWkAoGqLl0k6%2BbfWHV267UQqE94DfC1GwM0b3lhKMUZcKJB%2Fehn4KqOdto4K4EiTwncmTdUeaygyaTBPVGewXv5Kh%2B%2B0edkf5lxy3hpNnJHLz&X-Amz-Signature=76db6b8f0796608c84331d4e0db3343b44290b1d28a31ba9f6bb710212a46f9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647LEG4NT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2FRUiIb5%2BSRih%2Fz5ZBw%2BdYzUCWVYrFbmiTZ6ShSnN7AiEA8%2FshzhYZNvOyrurLC2ZBlVWKv6TVn%2BUhagA4t60aJrkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2BYy0l%2BUvB9vXGdircAwHRmRR8eptXaxL3Vusq8iEYjHSb1kIiI1u7e8wqd4cNvAIzHTBww3GEK3A7cEU55bH91tl34QOvvXJyFgrpM1Gl9UQ05VM%2FxQ7zgOmjtWgY37G5B8a5DfMUZSbf34fAmS3Yj%2FXO7uV9dq7tVKQfNW9C%2FZFh6HAaKU3FHTYaanmUkWB3o%2FAtjXr8dEb0jLZa5LbyHcvGKLjNOwHilIqXQGxo3Mz6qaEMqxo%2FGW268iM6iOXSickuibhU63OjXLlMxLJ5s6PcZGjddNO1w3SCSCnR608qMFqrnIf2%2FWAZr9hyI2qqKlzEHpd%2FO7hdkI2G0%2FXMN%2FNlRJKeRPuuJb2xL%2FChtytgOELj7Xe6gXBqq09g8HE%2F5P%2F0GkvbiBmmdcXulSvI5eXG9lhsCb3FPEPihE9BjVo8Z4yV6jfI7pt7GpKVtRfCaVnjbbxPZAgVPkpUQ%2BiEv89hWJ03hNZlTmYdw4819ueOT3TPU23U5fJ%2BaqeCaqEG7AGMZNQeAaYmGfW%2F6iMgB9BjAtwEfeqBgBN6uHnN9sl5JdCUGQ6hXKB3lkDOcsur8aGO93792JUilqGTVY9TrcDO3qgabQt1H4ooz16pNY7bVcrTcPiJIxht6%2BTXKp8TBcDxs4la%2FtjpMJ707rwGOqUBmHDj%2Fd0keN6F7R3jaxlzghfdfltFF5coNez%2F4JInmsK%2BXRNiwvBe5sIHiEEBeWWXYicrgB40LC1nZIgBLB5ID3FwnGnEu3wKr4s4XRV0i6T3za8UWkAoGqLl0k6%2BbfWHV267UQqE94DfC1GwM0b3lhKMUZcKJB%2Fehn4KqOdto4K4EiTwncmTdUeaygyaTBPVGewXv5Kh%2B%2B0edkf5lxy3hpNnJHLz&X-Amz-Signature=c30c19742b222b7a5dc4470576f37a966ba97fb778d54b62418e28770ae00677&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647LEG4NT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2FRUiIb5%2BSRih%2Fz5ZBw%2BdYzUCWVYrFbmiTZ6ShSnN7AiEA8%2FshzhYZNvOyrurLC2ZBlVWKv6TVn%2BUhagA4t60aJrkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2BYy0l%2BUvB9vXGdircAwHRmRR8eptXaxL3Vusq8iEYjHSb1kIiI1u7e8wqd4cNvAIzHTBww3GEK3A7cEU55bH91tl34QOvvXJyFgrpM1Gl9UQ05VM%2FxQ7zgOmjtWgY37G5B8a5DfMUZSbf34fAmS3Yj%2FXO7uV9dq7tVKQfNW9C%2FZFh6HAaKU3FHTYaanmUkWB3o%2FAtjXr8dEb0jLZa5LbyHcvGKLjNOwHilIqXQGxo3Mz6qaEMqxo%2FGW268iM6iOXSickuibhU63OjXLlMxLJ5s6PcZGjddNO1w3SCSCnR608qMFqrnIf2%2FWAZr9hyI2qqKlzEHpd%2FO7hdkI2G0%2FXMN%2FNlRJKeRPuuJb2xL%2FChtytgOELj7Xe6gXBqq09g8HE%2F5P%2F0GkvbiBmmdcXulSvI5eXG9lhsCb3FPEPihE9BjVo8Z4yV6jfI7pt7GpKVtRfCaVnjbbxPZAgVPkpUQ%2BiEv89hWJ03hNZlTmYdw4819ueOT3TPU23U5fJ%2BaqeCaqEG7AGMZNQeAaYmGfW%2F6iMgB9BjAtwEfeqBgBN6uHnN9sl5JdCUGQ6hXKB3lkDOcsur8aGO93792JUilqGTVY9TrcDO3qgabQt1H4ooz16pNY7bVcrTcPiJIxht6%2BTXKp8TBcDxs4la%2FtjpMJ707rwGOqUBmHDj%2Fd0keN6F7R3jaxlzghfdfltFF5coNez%2F4JInmsK%2BXRNiwvBe5sIHiEEBeWWXYicrgB40LC1nZIgBLB5ID3FwnGnEu3wKr4s4XRV0i6T3za8UWkAoGqLl0k6%2BbfWHV267UQqE94DfC1GwM0b3lhKMUZcKJB%2Fehn4KqOdto4K4EiTwncmTdUeaygyaTBPVGewXv5Kh%2B%2B0edkf5lxy3hpNnJHLz&X-Amz-Signature=e89151d7ffa2dfdfd861ff27613d627449e843ecb0f15e8d36fb24982beace83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
