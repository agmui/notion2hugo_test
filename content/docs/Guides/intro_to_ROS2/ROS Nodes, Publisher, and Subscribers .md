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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=792ee2c4a192b9e2020b045374c5bc3b802b9d623ba90ba4d605442946c03867&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=e06981c54b80518cfbdf8eff951ee4930ba02d43762756654da787d91241c8ce&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=b7381cdc789e15c39b4c33c1577bed7d0eef23e6fb5874ecac68482489e7de4a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=80edcdf4b416e362d086318db1456f0b3d7cfa970593fe55d8f2abb749d68a45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=bbd92e971c3ab38c40647bb81e200f6f58dc03a9a699d4c2980886901f1eb4a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=f5c98388ceeac79b6f8c965b184fb17a6b41c8fd9c6a1beadff1b413493907fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=56bc33eb085ff67800cc915b3894521f8a11f248b9e8412c71f8cfafcb0dc8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3MXZ6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSEAtA%2FUojU%2F5Wa6c%2BvwB0HML%2Bxlcmxpyc0OIROuwWQIgEsWesu4gANfdf4E1G8RSY2XzMnGDYtwacWlNC8lQ4x0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUFgRnqmwUD5Y1XwircA%2FCOrmoaP5ezpCGhqqqg1VdStxOYf29F6aJHfAlw2xjxedsyUncPNCsPu7Sbjfbx5j87JbE0g0wkgO8tQelr8lCx1RdqMpVfeaZCk7b96n4FS20bOWj1Yy0FG5i77YxBIr0MCSBmdhW3XJca0SgHw6i6r8mfOlIo85%2BFhpEUGFKxy78IeMBjKGPv5pbeDZi8S2J83u24HzyOsha7IHcxzov4hu95kAuv%2BIxTcOr7tLlCc4xGOEMEA0QNDKeWcXOlFR7%2Ba0goJHWLILnaFlMvmiGc6odVj2QuOrtM19RS1z%2BbKbU8c0vlbVvqDIuWPkLu4iDcp0e2UPMaCgL%2Fq7y2jDpuwCyz%2BJf30JEV1gwcYUUw08jMXqSx9bGE8bCZKH3kbRrUlWQi85pG9UN9t42wL99xiqYUlV3xcWvfUq%2FUW8reJUJv6MT43yc6yFRghNfC1f%2BTKinAl6Q%2B%2Faoqi34jwoQTfghltBTmu52X04ZcMGaBEPQCqp87Oqa%2FnkfEcSv9Rx7R8%2BJdffzinwDLZlxMRkqL%2Bxkrfs%2F30Q59EpPMyJoZCHza3f63Z3dgB141a4V1iuDgNycTTzp7GRd%2FaWM2Mi0KpIOveiK1orgBsXVJLRNFABo1sonIlMb79qyiMMKQpL0GOqUBOj90T522USPAUjr5SJfDy4fF8ZR7IEXpskTusIJsVhr3C18B0KKQEr3xuH3%2F2VCN0EGP3K2PDfx8cKu0prq%2FbRo45AnHF2d%2BRlnWjamxIEssjvCkwM78NAgb7YxQysLv%2BO%2BM35iIpF%2FbNvonGkPwoBcTT96XQTzzweWVoIFRTEvFYTkSd8BrDqAjLSUncfqaKEaiE3BGvgcM7SrjZ6HXytqNc0NE&X-Amz-Signature=ab95bcd06375f5cb340a2bc931940b9c3e55421717962825d92a8ec4eabea5db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
