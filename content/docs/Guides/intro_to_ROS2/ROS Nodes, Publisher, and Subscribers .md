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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MQ4CZ3X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCwyv7bZOI5JHk9gJfVPWG8%2B4HFm%2FV%2B9R8fffIat12vAiEAiiS%2BgQSmeAyEdEMQqWqmMBzw8zaP7aD0%2FXWjjQzQgkoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNYM1bHqNMFpXcP4fircA63%2FqAuijES4QwbpwYlriq8SWkfar9pS87ejzfwNElHkb7onJMGwEOanasmZaiYlFu7%2Fs5G6JWXuQ2QUX2eHhbOnddh6UfST0DJMAbL%2F8OnNQtyvTw4RLdmpxS3wzOTrtIajn0jmYyP5d2wojW7Z5Oyf0qQ1qSdoLgqw91uMbfIv6%2FAxdLygnDssJxzxlLZejuinHwH7cXlrHtA%2FpasVro8VgQhwUJdPDQ37cacPe3MUomOTWFa7pxHeBBLJgMtGJy%2FcGbVraBHiSsB%2BhOO1qOJMmJuw1g728BBmmuh9BQqpGz6Jv8KeEM%2FcVs%2FLypb3gh18RxmLtjqSPRxnx25VOgJG7ifojqENU1nis4kynMSg4umN%2FdDuZ%2BMMDSvJJE4j1OPAfeXw7ONDzrqFo7Mu%2BhkCTe9DFTeY6BWP%2BjAViHMMn3AKw3CUv6%2FqBP85VSMfIe1Sao89Xh%2Bcq05qpNaZtzUOWWDqhQ8a1IGTiFfX%2FyJZ51%2FubKG%2FzmL6hGn1JAP92UGzQ03WSfqxjfVnEP8WiRvscPU5nSpSo9EH0ZFkWVmzwvD9bvlf%2F22cZxlrbZAs0VHnQcvY2J0uUkB6hbsUsoXiXBwKuHTt8hxBLYaKMp0TrNUNrU0ZuZGFk0tzMJeN78AGOqUBZUg%2BWVaJK4URWFkHby0dz%2BirVjH2fbiHy9xq1VGqmE8NHUuEnFqNxzJpyM%2FJtCyU04qsYqqMP3T%2FC5l9eukF5gl%2BhdbqRJkEA7J9hIwz7ADt3TtLoNMp7gJQYPxgeQCzYqi5w4I0oHyYsr345PjNwBqUDs3aSjiKTTpIu4gpBJChUdZ7S9owjMt6jN45Ifqe6ZDLuvsabZ5c7emAiKcjmkm5eOik&X-Amz-Signature=a528c0abf1f471f280133118179b0a489b1c07349b3234848f270feddd608a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MQ4CZ3X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCwyv7bZOI5JHk9gJfVPWG8%2B4HFm%2FV%2B9R8fffIat12vAiEAiiS%2BgQSmeAyEdEMQqWqmMBzw8zaP7aD0%2FXWjjQzQgkoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNYM1bHqNMFpXcP4fircA63%2FqAuijES4QwbpwYlriq8SWkfar9pS87ejzfwNElHkb7onJMGwEOanasmZaiYlFu7%2Fs5G6JWXuQ2QUX2eHhbOnddh6UfST0DJMAbL%2F8OnNQtyvTw4RLdmpxS3wzOTrtIajn0jmYyP5d2wojW7Z5Oyf0qQ1qSdoLgqw91uMbfIv6%2FAxdLygnDssJxzxlLZejuinHwH7cXlrHtA%2FpasVro8VgQhwUJdPDQ37cacPe3MUomOTWFa7pxHeBBLJgMtGJy%2FcGbVraBHiSsB%2BhOO1qOJMmJuw1g728BBmmuh9BQqpGz6Jv8KeEM%2FcVs%2FLypb3gh18RxmLtjqSPRxnx25VOgJG7ifojqENU1nis4kynMSg4umN%2FdDuZ%2BMMDSvJJE4j1OPAfeXw7ONDzrqFo7Mu%2BhkCTe9DFTeY6BWP%2BjAViHMMn3AKw3CUv6%2FqBP85VSMfIe1Sao89Xh%2Bcq05qpNaZtzUOWWDqhQ8a1IGTiFfX%2FyJZ51%2FubKG%2FzmL6hGn1JAP92UGzQ03WSfqxjfVnEP8WiRvscPU5nSpSo9EH0ZFkWVmzwvD9bvlf%2F22cZxlrbZAs0VHnQcvY2J0uUkB6hbsUsoXiXBwKuHTt8hxBLYaKMp0TrNUNrU0ZuZGFk0tzMJeN78AGOqUBZUg%2BWVaJK4URWFkHby0dz%2BirVjH2fbiHy9xq1VGqmE8NHUuEnFqNxzJpyM%2FJtCyU04qsYqqMP3T%2FC5l9eukF5gl%2BhdbqRJkEA7J9hIwz7ADt3TtLoNMp7gJQYPxgeQCzYqi5w4I0oHyYsr345PjNwBqUDs3aSjiKTTpIu4gpBJChUdZ7S9owjMt6jN45Ifqe6ZDLuvsabZ5c7emAiKcjmkm5eOik&X-Amz-Signature=95b622d17ba10f8442e6ca79d7d3e31fdeb4d91fe4ac9ace583e563f7c53d6a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MQ4CZ3X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCwyv7bZOI5JHk9gJfVPWG8%2B4HFm%2FV%2B9R8fffIat12vAiEAiiS%2BgQSmeAyEdEMQqWqmMBzw8zaP7aD0%2FXWjjQzQgkoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNYM1bHqNMFpXcP4fircA63%2FqAuijES4QwbpwYlriq8SWkfar9pS87ejzfwNElHkb7onJMGwEOanasmZaiYlFu7%2Fs5G6JWXuQ2QUX2eHhbOnddh6UfST0DJMAbL%2F8OnNQtyvTw4RLdmpxS3wzOTrtIajn0jmYyP5d2wojW7Z5Oyf0qQ1qSdoLgqw91uMbfIv6%2FAxdLygnDssJxzxlLZejuinHwH7cXlrHtA%2FpasVro8VgQhwUJdPDQ37cacPe3MUomOTWFa7pxHeBBLJgMtGJy%2FcGbVraBHiSsB%2BhOO1qOJMmJuw1g728BBmmuh9BQqpGz6Jv8KeEM%2FcVs%2FLypb3gh18RxmLtjqSPRxnx25VOgJG7ifojqENU1nis4kynMSg4umN%2FdDuZ%2BMMDSvJJE4j1OPAfeXw7ONDzrqFo7Mu%2BhkCTe9DFTeY6BWP%2BjAViHMMn3AKw3CUv6%2FqBP85VSMfIe1Sao89Xh%2Bcq05qpNaZtzUOWWDqhQ8a1IGTiFfX%2FyJZ51%2FubKG%2FzmL6hGn1JAP92UGzQ03WSfqxjfVnEP8WiRvscPU5nSpSo9EH0ZFkWVmzwvD9bvlf%2F22cZxlrbZAs0VHnQcvY2J0uUkB6hbsUsoXiXBwKuHTt8hxBLYaKMp0TrNUNrU0ZuZGFk0tzMJeN78AGOqUBZUg%2BWVaJK4URWFkHby0dz%2BirVjH2fbiHy9xq1VGqmE8NHUuEnFqNxzJpyM%2FJtCyU04qsYqqMP3T%2FC5l9eukF5gl%2BhdbqRJkEA7J9hIwz7ADt3TtLoNMp7gJQYPxgeQCzYqi5w4I0oHyYsr345PjNwBqUDs3aSjiKTTpIu4gpBJChUdZ7S9owjMt6jN45Ifqe6ZDLuvsabZ5c7emAiKcjmkm5eOik&X-Amz-Signature=407187d2e0299074efa18425e4150bba5f53980e219df43e148fefdd34caffe6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MQ4CZ3X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCwyv7bZOI5JHk9gJfVPWG8%2B4HFm%2FV%2B9R8fffIat12vAiEAiiS%2BgQSmeAyEdEMQqWqmMBzw8zaP7aD0%2FXWjjQzQgkoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNYM1bHqNMFpXcP4fircA63%2FqAuijES4QwbpwYlriq8SWkfar9pS87ejzfwNElHkb7onJMGwEOanasmZaiYlFu7%2Fs5G6JWXuQ2QUX2eHhbOnddh6UfST0DJMAbL%2F8OnNQtyvTw4RLdmpxS3wzOTrtIajn0jmYyP5d2wojW7Z5Oyf0qQ1qSdoLgqw91uMbfIv6%2FAxdLygnDssJxzxlLZejuinHwH7cXlrHtA%2FpasVro8VgQhwUJdPDQ37cacPe3MUomOTWFa7pxHeBBLJgMtGJy%2FcGbVraBHiSsB%2BhOO1qOJMmJuw1g728BBmmuh9BQqpGz6Jv8KeEM%2FcVs%2FLypb3gh18RxmLtjqSPRxnx25VOgJG7ifojqENU1nis4kynMSg4umN%2FdDuZ%2BMMDSvJJE4j1OPAfeXw7ONDzrqFo7Mu%2BhkCTe9DFTeY6BWP%2BjAViHMMn3AKw3CUv6%2FqBP85VSMfIe1Sao89Xh%2Bcq05qpNaZtzUOWWDqhQ8a1IGTiFfX%2FyJZ51%2FubKG%2FzmL6hGn1JAP92UGzQ03WSfqxjfVnEP8WiRvscPU5nSpSo9EH0ZFkWVmzwvD9bvlf%2F22cZxlrbZAs0VHnQcvY2J0uUkB6hbsUsoXiXBwKuHTt8hxBLYaKMp0TrNUNrU0ZuZGFk0tzMJeN78AGOqUBZUg%2BWVaJK4URWFkHby0dz%2BirVjH2fbiHy9xq1VGqmE8NHUuEnFqNxzJpyM%2FJtCyU04qsYqqMP3T%2FC5l9eukF5gl%2BhdbqRJkEA7J9hIwz7ADt3TtLoNMp7gJQYPxgeQCzYqi5w4I0oHyYsr345PjNwBqUDs3aSjiKTTpIu4gpBJChUdZ7S9owjMt6jN45Ifqe6ZDLuvsabZ5c7emAiKcjmkm5eOik&X-Amz-Signature=1042fc367b7ec601dc4e07542d27b150dcbe46738c364a3e317f5d505f705162&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MQ4CZ3X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCwyv7bZOI5JHk9gJfVPWG8%2B4HFm%2FV%2B9R8fffIat12vAiEAiiS%2BgQSmeAyEdEMQqWqmMBzw8zaP7aD0%2FXWjjQzQgkoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNYM1bHqNMFpXcP4fircA63%2FqAuijES4QwbpwYlriq8SWkfar9pS87ejzfwNElHkb7onJMGwEOanasmZaiYlFu7%2Fs5G6JWXuQ2QUX2eHhbOnddh6UfST0DJMAbL%2F8OnNQtyvTw4RLdmpxS3wzOTrtIajn0jmYyP5d2wojW7Z5Oyf0qQ1qSdoLgqw91uMbfIv6%2FAxdLygnDssJxzxlLZejuinHwH7cXlrHtA%2FpasVro8VgQhwUJdPDQ37cacPe3MUomOTWFa7pxHeBBLJgMtGJy%2FcGbVraBHiSsB%2BhOO1qOJMmJuw1g728BBmmuh9BQqpGz6Jv8KeEM%2FcVs%2FLypb3gh18RxmLtjqSPRxnx25VOgJG7ifojqENU1nis4kynMSg4umN%2FdDuZ%2BMMDSvJJE4j1OPAfeXw7ONDzrqFo7Mu%2BhkCTe9DFTeY6BWP%2BjAViHMMn3AKw3CUv6%2FqBP85VSMfIe1Sao89Xh%2Bcq05qpNaZtzUOWWDqhQ8a1IGTiFfX%2FyJZ51%2FubKG%2FzmL6hGn1JAP92UGzQ03WSfqxjfVnEP8WiRvscPU5nSpSo9EH0ZFkWVmzwvD9bvlf%2F22cZxlrbZAs0VHnQcvY2J0uUkB6hbsUsoXiXBwKuHTt8hxBLYaKMp0TrNUNrU0ZuZGFk0tzMJeN78AGOqUBZUg%2BWVaJK4URWFkHby0dz%2BirVjH2fbiHy9xq1VGqmE8NHUuEnFqNxzJpyM%2FJtCyU04qsYqqMP3T%2FC5l9eukF5gl%2BhdbqRJkEA7J9hIwz7ADt3TtLoNMp7gJQYPxgeQCzYqi5w4I0oHyYsr345PjNwBqUDs3aSjiKTTpIu4gpBJChUdZ7S9owjMt6jN45Ifqe6ZDLuvsabZ5c7emAiKcjmkm5eOik&X-Amz-Signature=e43dafde20a00de713a99fd913a7f1549e21add21e3e023c0283d70d72bc60c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MQ4CZ3X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCwyv7bZOI5JHk9gJfVPWG8%2B4HFm%2FV%2B9R8fffIat12vAiEAiiS%2BgQSmeAyEdEMQqWqmMBzw8zaP7aD0%2FXWjjQzQgkoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNYM1bHqNMFpXcP4fircA63%2FqAuijES4QwbpwYlriq8SWkfar9pS87ejzfwNElHkb7onJMGwEOanasmZaiYlFu7%2Fs5G6JWXuQ2QUX2eHhbOnddh6UfST0DJMAbL%2F8OnNQtyvTw4RLdmpxS3wzOTrtIajn0jmYyP5d2wojW7Z5Oyf0qQ1qSdoLgqw91uMbfIv6%2FAxdLygnDssJxzxlLZejuinHwH7cXlrHtA%2FpasVro8VgQhwUJdPDQ37cacPe3MUomOTWFa7pxHeBBLJgMtGJy%2FcGbVraBHiSsB%2BhOO1qOJMmJuw1g728BBmmuh9BQqpGz6Jv8KeEM%2FcVs%2FLypb3gh18RxmLtjqSPRxnx25VOgJG7ifojqENU1nis4kynMSg4umN%2FdDuZ%2BMMDSvJJE4j1OPAfeXw7ONDzrqFo7Mu%2BhkCTe9DFTeY6BWP%2BjAViHMMn3AKw3CUv6%2FqBP85VSMfIe1Sao89Xh%2Bcq05qpNaZtzUOWWDqhQ8a1IGTiFfX%2FyJZ51%2FubKG%2FzmL6hGn1JAP92UGzQ03WSfqxjfVnEP8WiRvscPU5nSpSo9EH0ZFkWVmzwvD9bvlf%2F22cZxlrbZAs0VHnQcvY2J0uUkB6hbsUsoXiXBwKuHTt8hxBLYaKMp0TrNUNrU0ZuZGFk0tzMJeN78AGOqUBZUg%2BWVaJK4URWFkHby0dz%2BirVjH2fbiHy9xq1VGqmE8NHUuEnFqNxzJpyM%2FJtCyU04qsYqqMP3T%2FC5l9eukF5gl%2BhdbqRJkEA7J9hIwz7ADt3TtLoNMp7gJQYPxgeQCzYqi5w4I0oHyYsr345PjNwBqUDs3aSjiKTTpIu4gpBJChUdZ7S9owjMt6jN45Ifqe6ZDLuvsabZ5c7emAiKcjmkm5eOik&X-Amz-Signature=10b3443d1e4fb7544c67267799d87b3a262a95986aff24da06252973a3b279da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MQ4CZ3X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCwyv7bZOI5JHk9gJfVPWG8%2B4HFm%2FV%2B9R8fffIat12vAiEAiiS%2BgQSmeAyEdEMQqWqmMBzw8zaP7aD0%2FXWjjQzQgkoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNYM1bHqNMFpXcP4fircA63%2FqAuijES4QwbpwYlriq8SWkfar9pS87ejzfwNElHkb7onJMGwEOanasmZaiYlFu7%2Fs5G6JWXuQ2QUX2eHhbOnddh6UfST0DJMAbL%2F8OnNQtyvTw4RLdmpxS3wzOTrtIajn0jmYyP5d2wojW7Z5Oyf0qQ1qSdoLgqw91uMbfIv6%2FAxdLygnDssJxzxlLZejuinHwH7cXlrHtA%2FpasVro8VgQhwUJdPDQ37cacPe3MUomOTWFa7pxHeBBLJgMtGJy%2FcGbVraBHiSsB%2BhOO1qOJMmJuw1g728BBmmuh9BQqpGz6Jv8KeEM%2FcVs%2FLypb3gh18RxmLtjqSPRxnx25VOgJG7ifojqENU1nis4kynMSg4umN%2FdDuZ%2BMMDSvJJE4j1OPAfeXw7ONDzrqFo7Mu%2BhkCTe9DFTeY6BWP%2BjAViHMMn3AKw3CUv6%2FqBP85VSMfIe1Sao89Xh%2Bcq05qpNaZtzUOWWDqhQ8a1IGTiFfX%2FyJZ51%2FubKG%2FzmL6hGn1JAP92UGzQ03WSfqxjfVnEP8WiRvscPU5nSpSo9EH0ZFkWVmzwvD9bvlf%2F22cZxlrbZAs0VHnQcvY2J0uUkB6hbsUsoXiXBwKuHTt8hxBLYaKMp0TrNUNrU0ZuZGFk0tzMJeN78AGOqUBZUg%2BWVaJK4URWFkHby0dz%2BirVjH2fbiHy9xq1VGqmE8NHUuEnFqNxzJpyM%2FJtCyU04qsYqqMP3T%2FC5l9eukF5gl%2BhdbqRJkEA7J9hIwz7ADt3TtLoNMp7gJQYPxgeQCzYqi5w4I0oHyYsr345PjNwBqUDs3aSjiKTTpIu4gpBJChUdZ7S9owjMt6jN45Ifqe6ZDLuvsabZ5c7emAiKcjmkm5eOik&X-Amz-Signature=8e185d5e91c0b9a3eb6f22cdb0ebaaf830b1a3c862adb0b5debe84993d59e5ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MQ4CZ3X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCwyv7bZOI5JHk9gJfVPWG8%2B4HFm%2FV%2B9R8fffIat12vAiEAiiS%2BgQSmeAyEdEMQqWqmMBzw8zaP7aD0%2FXWjjQzQgkoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNYM1bHqNMFpXcP4fircA63%2FqAuijES4QwbpwYlriq8SWkfar9pS87ejzfwNElHkb7onJMGwEOanasmZaiYlFu7%2Fs5G6JWXuQ2QUX2eHhbOnddh6UfST0DJMAbL%2F8OnNQtyvTw4RLdmpxS3wzOTrtIajn0jmYyP5d2wojW7Z5Oyf0qQ1qSdoLgqw91uMbfIv6%2FAxdLygnDssJxzxlLZejuinHwH7cXlrHtA%2FpasVro8VgQhwUJdPDQ37cacPe3MUomOTWFa7pxHeBBLJgMtGJy%2FcGbVraBHiSsB%2BhOO1qOJMmJuw1g728BBmmuh9BQqpGz6Jv8KeEM%2FcVs%2FLypb3gh18RxmLtjqSPRxnx25VOgJG7ifojqENU1nis4kynMSg4umN%2FdDuZ%2BMMDSvJJE4j1OPAfeXw7ONDzrqFo7Mu%2BhkCTe9DFTeY6BWP%2BjAViHMMn3AKw3CUv6%2FqBP85VSMfIe1Sao89Xh%2Bcq05qpNaZtzUOWWDqhQ8a1IGTiFfX%2FyJZ51%2FubKG%2FzmL6hGn1JAP92UGzQ03WSfqxjfVnEP8WiRvscPU5nSpSo9EH0ZFkWVmzwvD9bvlf%2F22cZxlrbZAs0VHnQcvY2J0uUkB6hbsUsoXiXBwKuHTt8hxBLYaKMp0TrNUNrU0ZuZGFk0tzMJeN78AGOqUBZUg%2BWVaJK4URWFkHby0dz%2BirVjH2fbiHy9xq1VGqmE8NHUuEnFqNxzJpyM%2FJtCyU04qsYqqMP3T%2FC5l9eukF5gl%2BhdbqRJkEA7J9hIwz7ADt3TtLoNMp7gJQYPxgeQCzYqi5w4I0oHyYsr345PjNwBqUDs3aSjiKTTpIu4gpBJChUdZ7S9owjMt6jN45Ifqe6ZDLuvsabZ5c7emAiKcjmkm5eOik&X-Amz-Signature=9882cfe7fecafcf945d8bc2b4d6f40bb4ee3c9954f1f8ae734884eee672ce053&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
