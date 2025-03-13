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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZYRF6T%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNiPYe9SR4f5bpbTPtVYz7UOpx%2Fe9kdy94Yl89eQKplAIgD6gsqAWcIdQ15Y2UZPXxsYEHk3zplEZ21zWSbgnRJ0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjKNGklq7exykHhXSrcA8ZscJqPENncd2NDTJyRg0%2Fz1wf3yzDlb5%2FO59bGjxl6OrziBHblVMSFmuz0qBAYhaYI0pW%2Bxgw0pfaRGa%2FN8fN%2B6Bmlt8FFnps3eYpDVRrNTizk%2BlA5BCILHAtrqjNXM3Lv1r5YXX%2B9KfnsxxcDExRkcBrnVe5UUhelWW9taEj%2BtURW4nNvNlzh1BTiNrQSIlvoWcL1grMkS6TCIQnsOJ0GedV%2F3r6W6Ogw%2BKRYdrAiLfLXhRX07h5mCEHDfYSorkG9DoTlV9e74rCYuNyBUrzHuVNmBRREBZ1qz%2Bo2yxtnVgFcqVXJwLjkVVtfRSN2v3RX8nDYBV5v%2B9Spi1oVH%2F6SUv4g%2B89pPzNguPlxi%2FAcDM0rFnqva%2FchmHkUG%2F2MqdeGGs065C6XcE%2BBNMMHEix0T%2BbCtsKcduHS0P9e%2FxFt0JgGN9BthJnvAVtdmFgmWVgf%2FfsVtRqsj3y%2BC%2BF5B4mwC6a7zOZHZKFLycE8a2J4c9MGV37o8ZqqDJhC2NyV%2Bwp3umpRq8tqDRFAind%2FC%2B%2FNcOfp9BaHzbqXhsZBXk%2BYYsrCDXP0ev4mKOrCXFZWVKYr8Y2QHddnExSoqTCCtii8zf%2BIi9wFRpGIs8eUVspRxLFhT%2Bj0vMwOBim2MJi1zL4GOqUB5UQYORSeLkRUi%2FdlXOLf7F3PToAeOY7VIkDNH4aE8u7BYfsTlu2QtKkZ38o7ZOnZt%2BvatKA6yPl3RBTxOAC9ZDQaAn8EtcHWz%2FZcDuicdgJN4amR3yEKoBB%2BXpQ4vWyWHt0r87e%2BvIRf%2BhHcI9dOwFWDygTGVI6gmM8UNuVnP1rxNlmzl3oJmekVgH4ZS0Ir5L%2FkMMLi1Gtd5At0VjS0T68Q07BJ&X-Amz-Signature=56710a74abf92e9e35fbca75ae3887315adadb6f71f364770ac86cde07ec74a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZYRF6T%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNiPYe9SR4f5bpbTPtVYz7UOpx%2Fe9kdy94Yl89eQKplAIgD6gsqAWcIdQ15Y2UZPXxsYEHk3zplEZ21zWSbgnRJ0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjKNGklq7exykHhXSrcA8ZscJqPENncd2NDTJyRg0%2Fz1wf3yzDlb5%2FO59bGjxl6OrziBHblVMSFmuz0qBAYhaYI0pW%2Bxgw0pfaRGa%2FN8fN%2B6Bmlt8FFnps3eYpDVRrNTizk%2BlA5BCILHAtrqjNXM3Lv1r5YXX%2B9KfnsxxcDExRkcBrnVe5UUhelWW9taEj%2BtURW4nNvNlzh1BTiNrQSIlvoWcL1grMkS6TCIQnsOJ0GedV%2F3r6W6Ogw%2BKRYdrAiLfLXhRX07h5mCEHDfYSorkG9DoTlV9e74rCYuNyBUrzHuVNmBRREBZ1qz%2Bo2yxtnVgFcqVXJwLjkVVtfRSN2v3RX8nDYBV5v%2B9Spi1oVH%2F6SUv4g%2B89pPzNguPlxi%2FAcDM0rFnqva%2FchmHkUG%2F2MqdeGGs065C6XcE%2BBNMMHEix0T%2BbCtsKcduHS0P9e%2FxFt0JgGN9BthJnvAVtdmFgmWVgf%2FfsVtRqsj3y%2BC%2BF5B4mwC6a7zOZHZKFLycE8a2J4c9MGV37o8ZqqDJhC2NyV%2Bwp3umpRq8tqDRFAind%2FC%2B%2FNcOfp9BaHzbqXhsZBXk%2BYYsrCDXP0ev4mKOrCXFZWVKYr8Y2QHddnExSoqTCCtii8zf%2BIi9wFRpGIs8eUVspRxLFhT%2Bj0vMwOBim2MJi1zL4GOqUB5UQYORSeLkRUi%2FdlXOLf7F3PToAeOY7VIkDNH4aE8u7BYfsTlu2QtKkZ38o7ZOnZt%2BvatKA6yPl3RBTxOAC9ZDQaAn8EtcHWz%2FZcDuicdgJN4amR3yEKoBB%2BXpQ4vWyWHt0r87e%2BvIRf%2BhHcI9dOwFWDygTGVI6gmM8UNuVnP1rxNlmzl3oJmekVgH4ZS0Ir5L%2FkMMLi1Gtd5At0VjS0T68Q07BJ&X-Amz-Signature=e8856c395bfcade6061bf13a9e45d4976f53bbd7590fbd3cb8092f1bea945e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZYRF6T%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNiPYe9SR4f5bpbTPtVYz7UOpx%2Fe9kdy94Yl89eQKplAIgD6gsqAWcIdQ15Y2UZPXxsYEHk3zplEZ21zWSbgnRJ0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjKNGklq7exykHhXSrcA8ZscJqPENncd2NDTJyRg0%2Fz1wf3yzDlb5%2FO59bGjxl6OrziBHblVMSFmuz0qBAYhaYI0pW%2Bxgw0pfaRGa%2FN8fN%2B6Bmlt8FFnps3eYpDVRrNTizk%2BlA5BCILHAtrqjNXM3Lv1r5YXX%2B9KfnsxxcDExRkcBrnVe5UUhelWW9taEj%2BtURW4nNvNlzh1BTiNrQSIlvoWcL1grMkS6TCIQnsOJ0GedV%2F3r6W6Ogw%2BKRYdrAiLfLXhRX07h5mCEHDfYSorkG9DoTlV9e74rCYuNyBUrzHuVNmBRREBZ1qz%2Bo2yxtnVgFcqVXJwLjkVVtfRSN2v3RX8nDYBV5v%2B9Spi1oVH%2F6SUv4g%2B89pPzNguPlxi%2FAcDM0rFnqva%2FchmHkUG%2F2MqdeGGs065C6XcE%2BBNMMHEix0T%2BbCtsKcduHS0P9e%2FxFt0JgGN9BthJnvAVtdmFgmWVgf%2FfsVtRqsj3y%2BC%2BF5B4mwC6a7zOZHZKFLycE8a2J4c9MGV37o8ZqqDJhC2NyV%2Bwp3umpRq8tqDRFAind%2FC%2B%2FNcOfp9BaHzbqXhsZBXk%2BYYsrCDXP0ev4mKOrCXFZWVKYr8Y2QHddnExSoqTCCtii8zf%2BIi9wFRpGIs8eUVspRxLFhT%2Bj0vMwOBim2MJi1zL4GOqUB5UQYORSeLkRUi%2FdlXOLf7F3PToAeOY7VIkDNH4aE8u7BYfsTlu2QtKkZ38o7ZOnZt%2BvatKA6yPl3RBTxOAC9ZDQaAn8EtcHWz%2FZcDuicdgJN4amR3yEKoBB%2BXpQ4vWyWHt0r87e%2BvIRf%2BhHcI9dOwFWDygTGVI6gmM8UNuVnP1rxNlmzl3oJmekVgH4ZS0Ir5L%2FkMMLi1Gtd5At0VjS0T68Q07BJ&X-Amz-Signature=2c81f5da5083f68645011524d7910f9d42c3541bd88a57d19bcb92af55884ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZYRF6T%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNiPYe9SR4f5bpbTPtVYz7UOpx%2Fe9kdy94Yl89eQKplAIgD6gsqAWcIdQ15Y2UZPXxsYEHk3zplEZ21zWSbgnRJ0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjKNGklq7exykHhXSrcA8ZscJqPENncd2NDTJyRg0%2Fz1wf3yzDlb5%2FO59bGjxl6OrziBHblVMSFmuz0qBAYhaYI0pW%2Bxgw0pfaRGa%2FN8fN%2B6Bmlt8FFnps3eYpDVRrNTizk%2BlA5BCILHAtrqjNXM3Lv1r5YXX%2B9KfnsxxcDExRkcBrnVe5UUhelWW9taEj%2BtURW4nNvNlzh1BTiNrQSIlvoWcL1grMkS6TCIQnsOJ0GedV%2F3r6W6Ogw%2BKRYdrAiLfLXhRX07h5mCEHDfYSorkG9DoTlV9e74rCYuNyBUrzHuVNmBRREBZ1qz%2Bo2yxtnVgFcqVXJwLjkVVtfRSN2v3RX8nDYBV5v%2B9Spi1oVH%2F6SUv4g%2B89pPzNguPlxi%2FAcDM0rFnqva%2FchmHkUG%2F2MqdeGGs065C6XcE%2BBNMMHEix0T%2BbCtsKcduHS0P9e%2FxFt0JgGN9BthJnvAVtdmFgmWVgf%2FfsVtRqsj3y%2BC%2BF5B4mwC6a7zOZHZKFLycE8a2J4c9MGV37o8ZqqDJhC2NyV%2Bwp3umpRq8tqDRFAind%2FC%2B%2FNcOfp9BaHzbqXhsZBXk%2BYYsrCDXP0ev4mKOrCXFZWVKYr8Y2QHddnExSoqTCCtii8zf%2BIi9wFRpGIs8eUVspRxLFhT%2Bj0vMwOBim2MJi1zL4GOqUB5UQYORSeLkRUi%2FdlXOLf7F3PToAeOY7VIkDNH4aE8u7BYfsTlu2QtKkZ38o7ZOnZt%2BvatKA6yPl3RBTxOAC9ZDQaAn8EtcHWz%2FZcDuicdgJN4amR3yEKoBB%2BXpQ4vWyWHt0r87e%2BvIRf%2BhHcI9dOwFWDygTGVI6gmM8UNuVnP1rxNlmzl3oJmekVgH4ZS0Ir5L%2FkMMLi1Gtd5At0VjS0T68Q07BJ&X-Amz-Signature=1dc2c918866f2a73e4805f3b1506470f7bd4351a0cd1ecdf6d1a0c00cae64e04&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZYRF6T%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNiPYe9SR4f5bpbTPtVYz7UOpx%2Fe9kdy94Yl89eQKplAIgD6gsqAWcIdQ15Y2UZPXxsYEHk3zplEZ21zWSbgnRJ0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjKNGklq7exykHhXSrcA8ZscJqPENncd2NDTJyRg0%2Fz1wf3yzDlb5%2FO59bGjxl6OrziBHblVMSFmuz0qBAYhaYI0pW%2Bxgw0pfaRGa%2FN8fN%2B6Bmlt8FFnps3eYpDVRrNTizk%2BlA5BCILHAtrqjNXM3Lv1r5YXX%2B9KfnsxxcDExRkcBrnVe5UUhelWW9taEj%2BtURW4nNvNlzh1BTiNrQSIlvoWcL1grMkS6TCIQnsOJ0GedV%2F3r6W6Ogw%2BKRYdrAiLfLXhRX07h5mCEHDfYSorkG9DoTlV9e74rCYuNyBUrzHuVNmBRREBZ1qz%2Bo2yxtnVgFcqVXJwLjkVVtfRSN2v3RX8nDYBV5v%2B9Spi1oVH%2F6SUv4g%2B89pPzNguPlxi%2FAcDM0rFnqva%2FchmHkUG%2F2MqdeGGs065C6XcE%2BBNMMHEix0T%2BbCtsKcduHS0P9e%2FxFt0JgGN9BthJnvAVtdmFgmWVgf%2FfsVtRqsj3y%2BC%2BF5B4mwC6a7zOZHZKFLycE8a2J4c9MGV37o8ZqqDJhC2NyV%2Bwp3umpRq8tqDRFAind%2FC%2B%2FNcOfp9BaHzbqXhsZBXk%2BYYsrCDXP0ev4mKOrCXFZWVKYr8Y2QHddnExSoqTCCtii8zf%2BIi9wFRpGIs8eUVspRxLFhT%2Bj0vMwOBim2MJi1zL4GOqUB5UQYORSeLkRUi%2FdlXOLf7F3PToAeOY7VIkDNH4aE8u7BYfsTlu2QtKkZ38o7ZOnZt%2BvatKA6yPl3RBTxOAC9ZDQaAn8EtcHWz%2FZcDuicdgJN4amR3yEKoBB%2BXpQ4vWyWHt0r87e%2BvIRf%2BhHcI9dOwFWDygTGVI6gmM8UNuVnP1rxNlmzl3oJmekVgH4ZS0Ir5L%2FkMMLi1Gtd5At0VjS0T68Q07BJ&X-Amz-Signature=2b7374d748724c461be5816758a405c3d1833667415d0d91389f2ac54a88e997&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZYRF6T%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNiPYe9SR4f5bpbTPtVYz7UOpx%2Fe9kdy94Yl89eQKplAIgD6gsqAWcIdQ15Y2UZPXxsYEHk3zplEZ21zWSbgnRJ0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjKNGklq7exykHhXSrcA8ZscJqPENncd2NDTJyRg0%2Fz1wf3yzDlb5%2FO59bGjxl6OrziBHblVMSFmuz0qBAYhaYI0pW%2Bxgw0pfaRGa%2FN8fN%2B6Bmlt8FFnps3eYpDVRrNTizk%2BlA5BCILHAtrqjNXM3Lv1r5YXX%2B9KfnsxxcDExRkcBrnVe5UUhelWW9taEj%2BtURW4nNvNlzh1BTiNrQSIlvoWcL1grMkS6TCIQnsOJ0GedV%2F3r6W6Ogw%2BKRYdrAiLfLXhRX07h5mCEHDfYSorkG9DoTlV9e74rCYuNyBUrzHuVNmBRREBZ1qz%2Bo2yxtnVgFcqVXJwLjkVVtfRSN2v3RX8nDYBV5v%2B9Spi1oVH%2F6SUv4g%2B89pPzNguPlxi%2FAcDM0rFnqva%2FchmHkUG%2F2MqdeGGs065C6XcE%2BBNMMHEix0T%2BbCtsKcduHS0P9e%2FxFt0JgGN9BthJnvAVtdmFgmWVgf%2FfsVtRqsj3y%2BC%2BF5B4mwC6a7zOZHZKFLycE8a2J4c9MGV37o8ZqqDJhC2NyV%2Bwp3umpRq8tqDRFAind%2FC%2B%2FNcOfp9BaHzbqXhsZBXk%2BYYsrCDXP0ev4mKOrCXFZWVKYr8Y2QHddnExSoqTCCtii8zf%2BIi9wFRpGIs8eUVspRxLFhT%2Bj0vMwOBim2MJi1zL4GOqUB5UQYORSeLkRUi%2FdlXOLf7F3PToAeOY7VIkDNH4aE8u7BYfsTlu2QtKkZ38o7ZOnZt%2BvatKA6yPl3RBTxOAC9ZDQaAn8EtcHWz%2FZcDuicdgJN4amR3yEKoBB%2BXpQ4vWyWHt0r87e%2BvIRf%2BhHcI9dOwFWDygTGVI6gmM8UNuVnP1rxNlmzl3oJmekVgH4ZS0Ir5L%2FkMMLi1Gtd5At0VjS0T68Q07BJ&X-Amz-Signature=0e6e9d9f369f69806bac68e8e6494acdf134972488a4b50e684ca3491728f3ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZYRF6T%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNiPYe9SR4f5bpbTPtVYz7UOpx%2Fe9kdy94Yl89eQKplAIgD6gsqAWcIdQ15Y2UZPXxsYEHk3zplEZ21zWSbgnRJ0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjKNGklq7exykHhXSrcA8ZscJqPENncd2NDTJyRg0%2Fz1wf3yzDlb5%2FO59bGjxl6OrziBHblVMSFmuz0qBAYhaYI0pW%2Bxgw0pfaRGa%2FN8fN%2B6Bmlt8FFnps3eYpDVRrNTizk%2BlA5BCILHAtrqjNXM3Lv1r5YXX%2B9KfnsxxcDExRkcBrnVe5UUhelWW9taEj%2BtURW4nNvNlzh1BTiNrQSIlvoWcL1grMkS6TCIQnsOJ0GedV%2F3r6W6Ogw%2BKRYdrAiLfLXhRX07h5mCEHDfYSorkG9DoTlV9e74rCYuNyBUrzHuVNmBRREBZ1qz%2Bo2yxtnVgFcqVXJwLjkVVtfRSN2v3RX8nDYBV5v%2B9Spi1oVH%2F6SUv4g%2B89pPzNguPlxi%2FAcDM0rFnqva%2FchmHkUG%2F2MqdeGGs065C6XcE%2BBNMMHEix0T%2BbCtsKcduHS0P9e%2FxFt0JgGN9BthJnvAVtdmFgmWVgf%2FfsVtRqsj3y%2BC%2BF5B4mwC6a7zOZHZKFLycE8a2J4c9MGV37o8ZqqDJhC2NyV%2Bwp3umpRq8tqDRFAind%2FC%2B%2FNcOfp9BaHzbqXhsZBXk%2BYYsrCDXP0ev4mKOrCXFZWVKYr8Y2QHddnExSoqTCCtii8zf%2BIi9wFRpGIs8eUVspRxLFhT%2Bj0vMwOBim2MJi1zL4GOqUB5UQYORSeLkRUi%2FdlXOLf7F3PToAeOY7VIkDNH4aE8u7BYfsTlu2QtKkZ38o7ZOnZt%2BvatKA6yPl3RBTxOAC9ZDQaAn8EtcHWz%2FZcDuicdgJN4amR3yEKoBB%2BXpQ4vWyWHt0r87e%2BvIRf%2BhHcI9dOwFWDygTGVI6gmM8UNuVnP1rxNlmzl3oJmekVgH4ZS0Ir5L%2FkMMLi1Gtd5At0VjS0T68Q07BJ&X-Amz-Signature=2001e3241ad0c7aad9e6d47414c22de37bf29230416ae28d60a8eefe20de9d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZYRF6T%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNiPYe9SR4f5bpbTPtVYz7UOpx%2Fe9kdy94Yl89eQKplAIgD6gsqAWcIdQ15Y2UZPXxsYEHk3zplEZ21zWSbgnRJ0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjKNGklq7exykHhXSrcA8ZscJqPENncd2NDTJyRg0%2Fz1wf3yzDlb5%2FO59bGjxl6OrziBHblVMSFmuz0qBAYhaYI0pW%2Bxgw0pfaRGa%2FN8fN%2B6Bmlt8FFnps3eYpDVRrNTizk%2BlA5BCILHAtrqjNXM3Lv1r5YXX%2B9KfnsxxcDExRkcBrnVe5UUhelWW9taEj%2BtURW4nNvNlzh1BTiNrQSIlvoWcL1grMkS6TCIQnsOJ0GedV%2F3r6W6Ogw%2BKRYdrAiLfLXhRX07h5mCEHDfYSorkG9DoTlV9e74rCYuNyBUrzHuVNmBRREBZ1qz%2Bo2yxtnVgFcqVXJwLjkVVtfRSN2v3RX8nDYBV5v%2B9Spi1oVH%2F6SUv4g%2B89pPzNguPlxi%2FAcDM0rFnqva%2FchmHkUG%2F2MqdeGGs065C6XcE%2BBNMMHEix0T%2BbCtsKcduHS0P9e%2FxFt0JgGN9BthJnvAVtdmFgmWVgf%2FfsVtRqsj3y%2BC%2BF5B4mwC6a7zOZHZKFLycE8a2J4c9MGV37o8ZqqDJhC2NyV%2Bwp3umpRq8tqDRFAind%2FC%2B%2FNcOfp9BaHzbqXhsZBXk%2BYYsrCDXP0ev4mKOrCXFZWVKYr8Y2QHddnExSoqTCCtii8zf%2BIi9wFRpGIs8eUVspRxLFhT%2Bj0vMwOBim2MJi1zL4GOqUB5UQYORSeLkRUi%2FdlXOLf7F3PToAeOY7VIkDNH4aE8u7BYfsTlu2QtKkZ38o7ZOnZt%2BvatKA6yPl3RBTxOAC9ZDQaAn8EtcHWz%2FZcDuicdgJN4amR3yEKoBB%2BXpQ4vWyWHt0r87e%2BvIRf%2BhHcI9dOwFWDygTGVI6gmM8UNuVnP1rxNlmzl3oJmekVgH4ZS0Ir5L%2FkMMLi1Gtd5At0VjS0T68Q07BJ&X-Amz-Signature=b0b7303d0f7ca4f42a199f34528b67cb40a0ef0d75bbeb3167a9f4aec9bae25a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
