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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXXI7YW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD8lCxMPk1S5R2%2BNDZAklwUz8OFpCDkWAIjy8oWrCPmAIgLRmmcaSrw%2B4TYB10MCP9siH7Kujrj9dyUNGi1FvJ0SYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMW6BiOO5QWIqZCoyrcAxAp%2BsUzOvpzqVukCmxyHAWIsOkpNf4U2rT8qwxxbbuVsZ3Hh%2FznjbKKpnIaf8JgPGw%2BOXYln8%2BBV2isKu8RGGB86mMiRavYvirl5EHwlec19gtSffHAS7%2Bi9BNfcgJ%2Ft36BGu0kFtjNOkMLIUXHvoOCJsci0V3yvKptegBi%2FUzaoD9LGodqoWdkokUUAa28uYQ7QROd0Rsqz4RqW8Nd6BHcicGgeSjjmF573NCNsa7SQmEGIOlZ8O8KtFlK7qleD1Klc%2FVEc1m2ifWnhCJZ2Q6qQgG5n06a6Y6OaEurw5aoY71lLiBlv0pRKlxHVrM6438kWx4TvV9RQSD%2BJDQxncLTvWgXNS8Yo2JnZYfNPt5n36XkzR%2FJ8lFGW5wUjGQmRU19lTPMSmoupI2EAcv1xoQYK93%2FerhzDRuXkPlQhh5vINSOK61V2dLS9yfcVatI635CzTxuzNXCr3bOwklSnnrGhaThAVPTIb2pTLLTry8nz2MCsHBDpeqzj8Rc3fs6MgwYs97oxhDf9U5vLfrblJIL97%2BzvgciDdodTow6zBp7ptaHBr2YVMN4SH1%2BnroEoOrXAK%2Bf8vpnxwMzZfzACP4y%2BnXPiHNfijathk5NjJkLsi3iUUII8LrEsN0%2FMNOztsMGOqUBgUiS3b24WwIOJUVTt8C9AbREOYKWtTxkxSpIbFge7FH6MGjACn4cUyMf9GEN%2BnpgLYXmZYw2ROJ%2BprilF52DzKY4vjCxvOwFkrXKHJ0WSQQ57%2B8IHloO5KfLdVyMsvG%2B36Ql9tf8q1gfsZWTeZqPjM0dBT%2F25gw8PmNsVgacGVGrrDYB534DUJhLTuwLqVRTaFCnVeb9tPSwBd0ZQoDKazITV6Hn&X-Amz-Signature=1fe99a883c5a854626d22358d1563e02cef6655fd39575f0af5e7c06ca3c3e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXXI7YW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD8lCxMPk1S5R2%2BNDZAklwUz8OFpCDkWAIjy8oWrCPmAIgLRmmcaSrw%2B4TYB10MCP9siH7Kujrj9dyUNGi1FvJ0SYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMW6BiOO5QWIqZCoyrcAxAp%2BsUzOvpzqVukCmxyHAWIsOkpNf4U2rT8qwxxbbuVsZ3Hh%2FznjbKKpnIaf8JgPGw%2BOXYln8%2BBV2isKu8RGGB86mMiRavYvirl5EHwlec19gtSffHAS7%2Bi9BNfcgJ%2Ft36BGu0kFtjNOkMLIUXHvoOCJsci0V3yvKptegBi%2FUzaoD9LGodqoWdkokUUAa28uYQ7QROd0Rsqz4RqW8Nd6BHcicGgeSjjmF573NCNsa7SQmEGIOlZ8O8KtFlK7qleD1Klc%2FVEc1m2ifWnhCJZ2Q6qQgG5n06a6Y6OaEurw5aoY71lLiBlv0pRKlxHVrM6438kWx4TvV9RQSD%2BJDQxncLTvWgXNS8Yo2JnZYfNPt5n36XkzR%2FJ8lFGW5wUjGQmRU19lTPMSmoupI2EAcv1xoQYK93%2FerhzDRuXkPlQhh5vINSOK61V2dLS9yfcVatI635CzTxuzNXCr3bOwklSnnrGhaThAVPTIb2pTLLTry8nz2MCsHBDpeqzj8Rc3fs6MgwYs97oxhDf9U5vLfrblJIL97%2BzvgciDdodTow6zBp7ptaHBr2YVMN4SH1%2BnroEoOrXAK%2Bf8vpnxwMzZfzACP4y%2BnXPiHNfijathk5NjJkLsi3iUUII8LrEsN0%2FMNOztsMGOqUBgUiS3b24WwIOJUVTt8C9AbREOYKWtTxkxSpIbFge7FH6MGjACn4cUyMf9GEN%2BnpgLYXmZYw2ROJ%2BprilF52DzKY4vjCxvOwFkrXKHJ0WSQQ57%2B8IHloO5KfLdVyMsvG%2B36Ql9tf8q1gfsZWTeZqPjM0dBT%2F25gw8PmNsVgacGVGrrDYB534DUJhLTuwLqVRTaFCnVeb9tPSwBd0ZQoDKazITV6Hn&X-Amz-Signature=f7d78097c3652271fd26bd92430edbf142470097ec335d1078e4b9161d38e9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXXI7YW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD8lCxMPk1S5R2%2BNDZAklwUz8OFpCDkWAIjy8oWrCPmAIgLRmmcaSrw%2B4TYB10MCP9siH7Kujrj9dyUNGi1FvJ0SYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMW6BiOO5QWIqZCoyrcAxAp%2BsUzOvpzqVukCmxyHAWIsOkpNf4U2rT8qwxxbbuVsZ3Hh%2FznjbKKpnIaf8JgPGw%2BOXYln8%2BBV2isKu8RGGB86mMiRavYvirl5EHwlec19gtSffHAS7%2Bi9BNfcgJ%2Ft36BGu0kFtjNOkMLIUXHvoOCJsci0V3yvKptegBi%2FUzaoD9LGodqoWdkokUUAa28uYQ7QROd0Rsqz4RqW8Nd6BHcicGgeSjjmF573NCNsa7SQmEGIOlZ8O8KtFlK7qleD1Klc%2FVEc1m2ifWnhCJZ2Q6qQgG5n06a6Y6OaEurw5aoY71lLiBlv0pRKlxHVrM6438kWx4TvV9RQSD%2BJDQxncLTvWgXNS8Yo2JnZYfNPt5n36XkzR%2FJ8lFGW5wUjGQmRU19lTPMSmoupI2EAcv1xoQYK93%2FerhzDRuXkPlQhh5vINSOK61V2dLS9yfcVatI635CzTxuzNXCr3bOwklSnnrGhaThAVPTIb2pTLLTry8nz2MCsHBDpeqzj8Rc3fs6MgwYs97oxhDf9U5vLfrblJIL97%2BzvgciDdodTow6zBp7ptaHBr2YVMN4SH1%2BnroEoOrXAK%2Bf8vpnxwMzZfzACP4y%2BnXPiHNfijathk5NjJkLsi3iUUII8LrEsN0%2FMNOztsMGOqUBgUiS3b24WwIOJUVTt8C9AbREOYKWtTxkxSpIbFge7FH6MGjACn4cUyMf9GEN%2BnpgLYXmZYw2ROJ%2BprilF52DzKY4vjCxvOwFkrXKHJ0WSQQ57%2B8IHloO5KfLdVyMsvG%2B36Ql9tf8q1gfsZWTeZqPjM0dBT%2F25gw8PmNsVgacGVGrrDYB534DUJhLTuwLqVRTaFCnVeb9tPSwBd0ZQoDKazITV6Hn&X-Amz-Signature=a8bfec85e7089c31eeeac6ca3c237fa1ffa3c6930a88222853314fcf9e91d290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXXI7YW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD8lCxMPk1S5R2%2BNDZAklwUz8OFpCDkWAIjy8oWrCPmAIgLRmmcaSrw%2B4TYB10MCP9siH7Kujrj9dyUNGi1FvJ0SYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMW6BiOO5QWIqZCoyrcAxAp%2BsUzOvpzqVukCmxyHAWIsOkpNf4U2rT8qwxxbbuVsZ3Hh%2FznjbKKpnIaf8JgPGw%2BOXYln8%2BBV2isKu8RGGB86mMiRavYvirl5EHwlec19gtSffHAS7%2Bi9BNfcgJ%2Ft36BGu0kFtjNOkMLIUXHvoOCJsci0V3yvKptegBi%2FUzaoD9LGodqoWdkokUUAa28uYQ7QROd0Rsqz4RqW8Nd6BHcicGgeSjjmF573NCNsa7SQmEGIOlZ8O8KtFlK7qleD1Klc%2FVEc1m2ifWnhCJZ2Q6qQgG5n06a6Y6OaEurw5aoY71lLiBlv0pRKlxHVrM6438kWx4TvV9RQSD%2BJDQxncLTvWgXNS8Yo2JnZYfNPt5n36XkzR%2FJ8lFGW5wUjGQmRU19lTPMSmoupI2EAcv1xoQYK93%2FerhzDRuXkPlQhh5vINSOK61V2dLS9yfcVatI635CzTxuzNXCr3bOwklSnnrGhaThAVPTIb2pTLLTry8nz2MCsHBDpeqzj8Rc3fs6MgwYs97oxhDf9U5vLfrblJIL97%2BzvgciDdodTow6zBp7ptaHBr2YVMN4SH1%2BnroEoOrXAK%2Bf8vpnxwMzZfzACP4y%2BnXPiHNfijathk5NjJkLsi3iUUII8LrEsN0%2FMNOztsMGOqUBgUiS3b24WwIOJUVTt8C9AbREOYKWtTxkxSpIbFge7FH6MGjACn4cUyMf9GEN%2BnpgLYXmZYw2ROJ%2BprilF52DzKY4vjCxvOwFkrXKHJ0WSQQ57%2B8IHloO5KfLdVyMsvG%2B36Ql9tf8q1gfsZWTeZqPjM0dBT%2F25gw8PmNsVgacGVGrrDYB534DUJhLTuwLqVRTaFCnVeb9tPSwBd0ZQoDKazITV6Hn&X-Amz-Signature=8b55d761cf997ef03854b4be9e339dc9be4089b361cba28cf4930652824ae27c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXXI7YW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD8lCxMPk1S5R2%2BNDZAklwUz8OFpCDkWAIjy8oWrCPmAIgLRmmcaSrw%2B4TYB10MCP9siH7Kujrj9dyUNGi1FvJ0SYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMW6BiOO5QWIqZCoyrcAxAp%2BsUzOvpzqVukCmxyHAWIsOkpNf4U2rT8qwxxbbuVsZ3Hh%2FznjbKKpnIaf8JgPGw%2BOXYln8%2BBV2isKu8RGGB86mMiRavYvirl5EHwlec19gtSffHAS7%2Bi9BNfcgJ%2Ft36BGu0kFtjNOkMLIUXHvoOCJsci0V3yvKptegBi%2FUzaoD9LGodqoWdkokUUAa28uYQ7QROd0Rsqz4RqW8Nd6BHcicGgeSjjmF573NCNsa7SQmEGIOlZ8O8KtFlK7qleD1Klc%2FVEc1m2ifWnhCJZ2Q6qQgG5n06a6Y6OaEurw5aoY71lLiBlv0pRKlxHVrM6438kWx4TvV9RQSD%2BJDQxncLTvWgXNS8Yo2JnZYfNPt5n36XkzR%2FJ8lFGW5wUjGQmRU19lTPMSmoupI2EAcv1xoQYK93%2FerhzDRuXkPlQhh5vINSOK61V2dLS9yfcVatI635CzTxuzNXCr3bOwklSnnrGhaThAVPTIb2pTLLTry8nz2MCsHBDpeqzj8Rc3fs6MgwYs97oxhDf9U5vLfrblJIL97%2BzvgciDdodTow6zBp7ptaHBr2YVMN4SH1%2BnroEoOrXAK%2Bf8vpnxwMzZfzACP4y%2BnXPiHNfijathk5NjJkLsi3iUUII8LrEsN0%2FMNOztsMGOqUBgUiS3b24WwIOJUVTt8C9AbREOYKWtTxkxSpIbFge7FH6MGjACn4cUyMf9GEN%2BnpgLYXmZYw2ROJ%2BprilF52DzKY4vjCxvOwFkrXKHJ0WSQQ57%2B8IHloO5KfLdVyMsvG%2B36Ql9tf8q1gfsZWTeZqPjM0dBT%2F25gw8PmNsVgacGVGrrDYB534DUJhLTuwLqVRTaFCnVeb9tPSwBd0ZQoDKazITV6Hn&X-Amz-Signature=921ab0a3fe010b80859680ce04295ee2221f796b78f469e4e0e44e3138239ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXXI7YW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD8lCxMPk1S5R2%2BNDZAklwUz8OFpCDkWAIjy8oWrCPmAIgLRmmcaSrw%2B4TYB10MCP9siH7Kujrj9dyUNGi1FvJ0SYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMW6BiOO5QWIqZCoyrcAxAp%2BsUzOvpzqVukCmxyHAWIsOkpNf4U2rT8qwxxbbuVsZ3Hh%2FznjbKKpnIaf8JgPGw%2BOXYln8%2BBV2isKu8RGGB86mMiRavYvirl5EHwlec19gtSffHAS7%2Bi9BNfcgJ%2Ft36BGu0kFtjNOkMLIUXHvoOCJsci0V3yvKptegBi%2FUzaoD9LGodqoWdkokUUAa28uYQ7QROd0Rsqz4RqW8Nd6BHcicGgeSjjmF573NCNsa7SQmEGIOlZ8O8KtFlK7qleD1Klc%2FVEc1m2ifWnhCJZ2Q6qQgG5n06a6Y6OaEurw5aoY71lLiBlv0pRKlxHVrM6438kWx4TvV9RQSD%2BJDQxncLTvWgXNS8Yo2JnZYfNPt5n36XkzR%2FJ8lFGW5wUjGQmRU19lTPMSmoupI2EAcv1xoQYK93%2FerhzDRuXkPlQhh5vINSOK61V2dLS9yfcVatI635CzTxuzNXCr3bOwklSnnrGhaThAVPTIb2pTLLTry8nz2MCsHBDpeqzj8Rc3fs6MgwYs97oxhDf9U5vLfrblJIL97%2BzvgciDdodTow6zBp7ptaHBr2YVMN4SH1%2BnroEoOrXAK%2Bf8vpnxwMzZfzACP4y%2BnXPiHNfijathk5NjJkLsi3iUUII8LrEsN0%2FMNOztsMGOqUBgUiS3b24WwIOJUVTt8C9AbREOYKWtTxkxSpIbFge7FH6MGjACn4cUyMf9GEN%2BnpgLYXmZYw2ROJ%2BprilF52DzKY4vjCxvOwFkrXKHJ0WSQQ57%2B8IHloO5KfLdVyMsvG%2B36Ql9tf8q1gfsZWTeZqPjM0dBT%2F25gw8PmNsVgacGVGrrDYB534DUJhLTuwLqVRTaFCnVeb9tPSwBd0ZQoDKazITV6Hn&X-Amz-Signature=78126d4c5124cfc92af21dfc831d67953ae73d40176d0a66ba1c032dafb77638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXXI7YW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD8lCxMPk1S5R2%2BNDZAklwUz8OFpCDkWAIjy8oWrCPmAIgLRmmcaSrw%2B4TYB10MCP9siH7Kujrj9dyUNGi1FvJ0SYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMW6BiOO5QWIqZCoyrcAxAp%2BsUzOvpzqVukCmxyHAWIsOkpNf4U2rT8qwxxbbuVsZ3Hh%2FznjbKKpnIaf8JgPGw%2BOXYln8%2BBV2isKu8RGGB86mMiRavYvirl5EHwlec19gtSffHAS7%2Bi9BNfcgJ%2Ft36BGu0kFtjNOkMLIUXHvoOCJsci0V3yvKptegBi%2FUzaoD9LGodqoWdkokUUAa28uYQ7QROd0Rsqz4RqW8Nd6BHcicGgeSjjmF573NCNsa7SQmEGIOlZ8O8KtFlK7qleD1Klc%2FVEc1m2ifWnhCJZ2Q6qQgG5n06a6Y6OaEurw5aoY71lLiBlv0pRKlxHVrM6438kWx4TvV9RQSD%2BJDQxncLTvWgXNS8Yo2JnZYfNPt5n36XkzR%2FJ8lFGW5wUjGQmRU19lTPMSmoupI2EAcv1xoQYK93%2FerhzDRuXkPlQhh5vINSOK61V2dLS9yfcVatI635CzTxuzNXCr3bOwklSnnrGhaThAVPTIb2pTLLTry8nz2MCsHBDpeqzj8Rc3fs6MgwYs97oxhDf9U5vLfrblJIL97%2BzvgciDdodTow6zBp7ptaHBr2YVMN4SH1%2BnroEoOrXAK%2Bf8vpnxwMzZfzACP4y%2BnXPiHNfijathk5NjJkLsi3iUUII8LrEsN0%2FMNOztsMGOqUBgUiS3b24WwIOJUVTt8C9AbREOYKWtTxkxSpIbFge7FH6MGjACn4cUyMf9GEN%2BnpgLYXmZYw2ROJ%2BprilF52DzKY4vjCxvOwFkrXKHJ0WSQQ57%2B8IHloO5KfLdVyMsvG%2B36Ql9tf8q1gfsZWTeZqPjM0dBT%2F25gw8PmNsVgacGVGrrDYB534DUJhLTuwLqVRTaFCnVeb9tPSwBd0ZQoDKazITV6Hn&X-Amz-Signature=f12d6b3989dc8617942a5d2fbe88fc177327d06bb542d9e2d29801d4981bac1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXXI7YW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD8lCxMPk1S5R2%2BNDZAklwUz8OFpCDkWAIjy8oWrCPmAIgLRmmcaSrw%2B4TYB10MCP9siH7Kujrj9dyUNGi1FvJ0SYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMW6BiOO5QWIqZCoyrcAxAp%2BsUzOvpzqVukCmxyHAWIsOkpNf4U2rT8qwxxbbuVsZ3Hh%2FznjbKKpnIaf8JgPGw%2BOXYln8%2BBV2isKu8RGGB86mMiRavYvirl5EHwlec19gtSffHAS7%2Bi9BNfcgJ%2Ft36BGu0kFtjNOkMLIUXHvoOCJsci0V3yvKptegBi%2FUzaoD9LGodqoWdkokUUAa28uYQ7QROd0Rsqz4RqW8Nd6BHcicGgeSjjmF573NCNsa7SQmEGIOlZ8O8KtFlK7qleD1Klc%2FVEc1m2ifWnhCJZ2Q6qQgG5n06a6Y6OaEurw5aoY71lLiBlv0pRKlxHVrM6438kWx4TvV9RQSD%2BJDQxncLTvWgXNS8Yo2JnZYfNPt5n36XkzR%2FJ8lFGW5wUjGQmRU19lTPMSmoupI2EAcv1xoQYK93%2FerhzDRuXkPlQhh5vINSOK61V2dLS9yfcVatI635CzTxuzNXCr3bOwklSnnrGhaThAVPTIb2pTLLTry8nz2MCsHBDpeqzj8Rc3fs6MgwYs97oxhDf9U5vLfrblJIL97%2BzvgciDdodTow6zBp7ptaHBr2YVMN4SH1%2BnroEoOrXAK%2Bf8vpnxwMzZfzACP4y%2BnXPiHNfijathk5NjJkLsi3iUUII8LrEsN0%2FMNOztsMGOqUBgUiS3b24WwIOJUVTt8C9AbREOYKWtTxkxSpIbFge7FH6MGjACn4cUyMf9GEN%2BnpgLYXmZYw2ROJ%2BprilF52DzKY4vjCxvOwFkrXKHJ0WSQQ57%2B8IHloO5KfLdVyMsvG%2B36Ql9tf8q1gfsZWTeZqPjM0dBT%2F25gw8PmNsVgacGVGrrDYB534DUJhLTuwLqVRTaFCnVeb9tPSwBd0ZQoDKazITV6Hn&X-Amz-Signature=071b611dd86e080fe4b25f973e7ecec9156f18b5a31c74324df20f2e94f00b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
