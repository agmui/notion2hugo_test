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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFNRAJJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAl8ziRWJjl%2B13Ye8ZDr7zyRaCyK9vDTYHdP6A96M9WVAiEAqeWs9QAaIQ99IOiU37VWf4GyHih5nRkeKNtY91jeBTEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUgShRwAwZ0mQqp6CrcA%2BCU4zu5TdiubXPxlx%2BcTg26GrLVlO4N0I02bzNg1V9NR%2FaeJxvMPjv54RZLSXb8dWEoxydpo%2BFeT7ACqf0ksFMQxjYOC0%2BNsVJnPi22Izjw78zbF1OpydsuZ3TQosedODUaIKRi%2BwYLUgESCBc5caLHY5cdnNzZJa7mQ1WaOaKRHEvqjiuaI2ioPwzPuCbmu0ULIwdFIIkeYXF89Bc9ofgIVlbv%2B9UmH7qBLJx%2BWk7FgQA9JFnlHis4zZigMloUFVeoWem0fdBEZoK9d62aVwsDiIPsHKBGV4h2Ok4D2KQLmUnkzU1yq1e%2BvUSeHoxf%2B9zU6meTOMgyAkI4H1rt4WBYCoZXcBzOMxFMt2jAFACMCHuqpZr4VUYJ23S%2BQnDZEmI3oPdWITCeYgFxjohNrxidskPao%2BUdUn6Ae8jaqrZhgS5ikUQd1QpZFUt66aG3QCxYXwN3DfJjCgEIXMkFt%2FrqO%2BBhH3xD7JBOCb4HJNhTv6%2FSi4FqCkOWswK8Ds2rhoSp6T6kV3t6pzowmcuLPqOblEwprrztBCKHNVcdaQvSQTYclafGSGoTS%2F7zEUREt41Li1LNJV%2FtP6YediZMaXf5VJvSyebCoIrSvYe7sNSSZ%2Bmo%2FwVfGDf%2BRYgPMIDiyMAGOqUBqdYwMq5c0LpcOFVurv%2BrLtt0GOR9IfHbAFDvMjTFlslGkHVeNo5ys2IPxCN4IC9I3ZruWrJutxYWVmwDbv5FNWAnOmyiK2fktdupGRGos3EGdRmTWSvFJ%2BWbOzrp6JnUsWr%2FvNtLqzvnIrQo%2BqSNg2%2FSYtun4AlhazBIuNC1%2BSt0yTcbrIkNr6YTkHjoIEECz%2BjLwBa2kOvy8TBFRrP%2BTdB%2FpDjT&X-Amz-Signature=5478f282520ff893989974e4d435eccb3b34a699c0f431ef343089a1dc2ea5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFNRAJJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAl8ziRWJjl%2B13Ye8ZDr7zyRaCyK9vDTYHdP6A96M9WVAiEAqeWs9QAaIQ99IOiU37VWf4GyHih5nRkeKNtY91jeBTEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUgShRwAwZ0mQqp6CrcA%2BCU4zu5TdiubXPxlx%2BcTg26GrLVlO4N0I02bzNg1V9NR%2FaeJxvMPjv54RZLSXb8dWEoxydpo%2BFeT7ACqf0ksFMQxjYOC0%2BNsVJnPi22Izjw78zbF1OpydsuZ3TQosedODUaIKRi%2BwYLUgESCBc5caLHY5cdnNzZJa7mQ1WaOaKRHEvqjiuaI2ioPwzPuCbmu0ULIwdFIIkeYXF89Bc9ofgIVlbv%2B9UmH7qBLJx%2BWk7FgQA9JFnlHis4zZigMloUFVeoWem0fdBEZoK9d62aVwsDiIPsHKBGV4h2Ok4D2KQLmUnkzU1yq1e%2BvUSeHoxf%2B9zU6meTOMgyAkI4H1rt4WBYCoZXcBzOMxFMt2jAFACMCHuqpZr4VUYJ23S%2BQnDZEmI3oPdWITCeYgFxjohNrxidskPao%2BUdUn6Ae8jaqrZhgS5ikUQd1QpZFUt66aG3QCxYXwN3DfJjCgEIXMkFt%2FrqO%2BBhH3xD7JBOCb4HJNhTv6%2FSi4FqCkOWswK8Ds2rhoSp6T6kV3t6pzowmcuLPqOblEwprrztBCKHNVcdaQvSQTYclafGSGoTS%2F7zEUREt41Li1LNJV%2FtP6YediZMaXf5VJvSyebCoIrSvYe7sNSSZ%2Bmo%2FwVfGDf%2BRYgPMIDiyMAGOqUBqdYwMq5c0LpcOFVurv%2BrLtt0GOR9IfHbAFDvMjTFlslGkHVeNo5ys2IPxCN4IC9I3ZruWrJutxYWVmwDbv5FNWAnOmyiK2fktdupGRGos3EGdRmTWSvFJ%2BWbOzrp6JnUsWr%2FvNtLqzvnIrQo%2BqSNg2%2FSYtun4AlhazBIuNC1%2BSt0yTcbrIkNr6YTkHjoIEECz%2BjLwBa2kOvy8TBFRrP%2BTdB%2FpDjT&X-Amz-Signature=7a3b1a8dc9f7f72dc5cf6d1526836bb06c38d7ee27d67ad39f2a60f8e691e766&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFNRAJJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAl8ziRWJjl%2B13Ye8ZDr7zyRaCyK9vDTYHdP6A96M9WVAiEAqeWs9QAaIQ99IOiU37VWf4GyHih5nRkeKNtY91jeBTEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUgShRwAwZ0mQqp6CrcA%2BCU4zu5TdiubXPxlx%2BcTg26GrLVlO4N0I02bzNg1V9NR%2FaeJxvMPjv54RZLSXb8dWEoxydpo%2BFeT7ACqf0ksFMQxjYOC0%2BNsVJnPi22Izjw78zbF1OpydsuZ3TQosedODUaIKRi%2BwYLUgESCBc5caLHY5cdnNzZJa7mQ1WaOaKRHEvqjiuaI2ioPwzPuCbmu0ULIwdFIIkeYXF89Bc9ofgIVlbv%2B9UmH7qBLJx%2BWk7FgQA9JFnlHis4zZigMloUFVeoWem0fdBEZoK9d62aVwsDiIPsHKBGV4h2Ok4D2KQLmUnkzU1yq1e%2BvUSeHoxf%2B9zU6meTOMgyAkI4H1rt4WBYCoZXcBzOMxFMt2jAFACMCHuqpZr4VUYJ23S%2BQnDZEmI3oPdWITCeYgFxjohNrxidskPao%2BUdUn6Ae8jaqrZhgS5ikUQd1QpZFUt66aG3QCxYXwN3DfJjCgEIXMkFt%2FrqO%2BBhH3xD7JBOCb4HJNhTv6%2FSi4FqCkOWswK8Ds2rhoSp6T6kV3t6pzowmcuLPqOblEwprrztBCKHNVcdaQvSQTYclafGSGoTS%2F7zEUREt41Li1LNJV%2FtP6YediZMaXf5VJvSyebCoIrSvYe7sNSSZ%2Bmo%2FwVfGDf%2BRYgPMIDiyMAGOqUBqdYwMq5c0LpcOFVurv%2BrLtt0GOR9IfHbAFDvMjTFlslGkHVeNo5ys2IPxCN4IC9I3ZruWrJutxYWVmwDbv5FNWAnOmyiK2fktdupGRGos3EGdRmTWSvFJ%2BWbOzrp6JnUsWr%2FvNtLqzvnIrQo%2BqSNg2%2FSYtun4AlhazBIuNC1%2BSt0yTcbrIkNr6YTkHjoIEECz%2BjLwBa2kOvy8TBFRrP%2BTdB%2FpDjT&X-Amz-Signature=0d4916c5407938491bed146749b9444206dfbdf544da98b4943d0da9ddfc5860&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFNRAJJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAl8ziRWJjl%2B13Ye8ZDr7zyRaCyK9vDTYHdP6A96M9WVAiEAqeWs9QAaIQ99IOiU37VWf4GyHih5nRkeKNtY91jeBTEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUgShRwAwZ0mQqp6CrcA%2BCU4zu5TdiubXPxlx%2BcTg26GrLVlO4N0I02bzNg1V9NR%2FaeJxvMPjv54RZLSXb8dWEoxydpo%2BFeT7ACqf0ksFMQxjYOC0%2BNsVJnPi22Izjw78zbF1OpydsuZ3TQosedODUaIKRi%2BwYLUgESCBc5caLHY5cdnNzZJa7mQ1WaOaKRHEvqjiuaI2ioPwzPuCbmu0ULIwdFIIkeYXF89Bc9ofgIVlbv%2B9UmH7qBLJx%2BWk7FgQA9JFnlHis4zZigMloUFVeoWem0fdBEZoK9d62aVwsDiIPsHKBGV4h2Ok4D2KQLmUnkzU1yq1e%2BvUSeHoxf%2B9zU6meTOMgyAkI4H1rt4WBYCoZXcBzOMxFMt2jAFACMCHuqpZr4VUYJ23S%2BQnDZEmI3oPdWITCeYgFxjohNrxidskPao%2BUdUn6Ae8jaqrZhgS5ikUQd1QpZFUt66aG3QCxYXwN3DfJjCgEIXMkFt%2FrqO%2BBhH3xD7JBOCb4HJNhTv6%2FSi4FqCkOWswK8Ds2rhoSp6T6kV3t6pzowmcuLPqOblEwprrztBCKHNVcdaQvSQTYclafGSGoTS%2F7zEUREt41Li1LNJV%2FtP6YediZMaXf5VJvSyebCoIrSvYe7sNSSZ%2Bmo%2FwVfGDf%2BRYgPMIDiyMAGOqUBqdYwMq5c0LpcOFVurv%2BrLtt0GOR9IfHbAFDvMjTFlslGkHVeNo5ys2IPxCN4IC9I3ZruWrJutxYWVmwDbv5FNWAnOmyiK2fktdupGRGos3EGdRmTWSvFJ%2BWbOzrp6JnUsWr%2FvNtLqzvnIrQo%2BqSNg2%2FSYtun4AlhazBIuNC1%2BSt0yTcbrIkNr6YTkHjoIEECz%2BjLwBa2kOvy8TBFRrP%2BTdB%2FpDjT&X-Amz-Signature=f70f54fa64ad6e8cf3f95f90019c4bff20b4e6717744269731dc3f2fd81d523f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFNRAJJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAl8ziRWJjl%2B13Ye8ZDr7zyRaCyK9vDTYHdP6A96M9WVAiEAqeWs9QAaIQ99IOiU37VWf4GyHih5nRkeKNtY91jeBTEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUgShRwAwZ0mQqp6CrcA%2BCU4zu5TdiubXPxlx%2BcTg26GrLVlO4N0I02bzNg1V9NR%2FaeJxvMPjv54RZLSXb8dWEoxydpo%2BFeT7ACqf0ksFMQxjYOC0%2BNsVJnPi22Izjw78zbF1OpydsuZ3TQosedODUaIKRi%2BwYLUgESCBc5caLHY5cdnNzZJa7mQ1WaOaKRHEvqjiuaI2ioPwzPuCbmu0ULIwdFIIkeYXF89Bc9ofgIVlbv%2B9UmH7qBLJx%2BWk7FgQA9JFnlHis4zZigMloUFVeoWem0fdBEZoK9d62aVwsDiIPsHKBGV4h2Ok4D2KQLmUnkzU1yq1e%2BvUSeHoxf%2B9zU6meTOMgyAkI4H1rt4WBYCoZXcBzOMxFMt2jAFACMCHuqpZr4VUYJ23S%2BQnDZEmI3oPdWITCeYgFxjohNrxidskPao%2BUdUn6Ae8jaqrZhgS5ikUQd1QpZFUt66aG3QCxYXwN3DfJjCgEIXMkFt%2FrqO%2BBhH3xD7JBOCb4HJNhTv6%2FSi4FqCkOWswK8Ds2rhoSp6T6kV3t6pzowmcuLPqOblEwprrztBCKHNVcdaQvSQTYclafGSGoTS%2F7zEUREt41Li1LNJV%2FtP6YediZMaXf5VJvSyebCoIrSvYe7sNSSZ%2Bmo%2FwVfGDf%2BRYgPMIDiyMAGOqUBqdYwMq5c0LpcOFVurv%2BrLtt0GOR9IfHbAFDvMjTFlslGkHVeNo5ys2IPxCN4IC9I3ZruWrJutxYWVmwDbv5FNWAnOmyiK2fktdupGRGos3EGdRmTWSvFJ%2BWbOzrp6JnUsWr%2FvNtLqzvnIrQo%2BqSNg2%2FSYtun4AlhazBIuNC1%2BSt0yTcbrIkNr6YTkHjoIEECz%2BjLwBa2kOvy8TBFRrP%2BTdB%2FpDjT&X-Amz-Signature=cd6480da7e99ae2c7e3e8fff830f06d089afceee0fc90ca7d7a2d29abbe5f93d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFNRAJJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAl8ziRWJjl%2B13Ye8ZDr7zyRaCyK9vDTYHdP6A96M9WVAiEAqeWs9QAaIQ99IOiU37VWf4GyHih5nRkeKNtY91jeBTEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUgShRwAwZ0mQqp6CrcA%2BCU4zu5TdiubXPxlx%2BcTg26GrLVlO4N0I02bzNg1V9NR%2FaeJxvMPjv54RZLSXb8dWEoxydpo%2BFeT7ACqf0ksFMQxjYOC0%2BNsVJnPi22Izjw78zbF1OpydsuZ3TQosedODUaIKRi%2BwYLUgESCBc5caLHY5cdnNzZJa7mQ1WaOaKRHEvqjiuaI2ioPwzPuCbmu0ULIwdFIIkeYXF89Bc9ofgIVlbv%2B9UmH7qBLJx%2BWk7FgQA9JFnlHis4zZigMloUFVeoWem0fdBEZoK9d62aVwsDiIPsHKBGV4h2Ok4D2KQLmUnkzU1yq1e%2BvUSeHoxf%2B9zU6meTOMgyAkI4H1rt4WBYCoZXcBzOMxFMt2jAFACMCHuqpZr4VUYJ23S%2BQnDZEmI3oPdWITCeYgFxjohNrxidskPao%2BUdUn6Ae8jaqrZhgS5ikUQd1QpZFUt66aG3QCxYXwN3DfJjCgEIXMkFt%2FrqO%2BBhH3xD7JBOCb4HJNhTv6%2FSi4FqCkOWswK8Ds2rhoSp6T6kV3t6pzowmcuLPqOblEwprrztBCKHNVcdaQvSQTYclafGSGoTS%2F7zEUREt41Li1LNJV%2FtP6YediZMaXf5VJvSyebCoIrSvYe7sNSSZ%2Bmo%2FwVfGDf%2BRYgPMIDiyMAGOqUBqdYwMq5c0LpcOFVurv%2BrLtt0GOR9IfHbAFDvMjTFlslGkHVeNo5ys2IPxCN4IC9I3ZruWrJutxYWVmwDbv5FNWAnOmyiK2fktdupGRGos3EGdRmTWSvFJ%2BWbOzrp6JnUsWr%2FvNtLqzvnIrQo%2BqSNg2%2FSYtun4AlhazBIuNC1%2BSt0yTcbrIkNr6YTkHjoIEECz%2BjLwBa2kOvy8TBFRrP%2BTdB%2FpDjT&X-Amz-Signature=6920b7f2f98110a987305f527f55cb0f4423f5071d004c9b795acba504d520f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFNRAJJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAl8ziRWJjl%2B13Ye8ZDr7zyRaCyK9vDTYHdP6A96M9WVAiEAqeWs9QAaIQ99IOiU37VWf4GyHih5nRkeKNtY91jeBTEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUgShRwAwZ0mQqp6CrcA%2BCU4zu5TdiubXPxlx%2BcTg26GrLVlO4N0I02bzNg1V9NR%2FaeJxvMPjv54RZLSXb8dWEoxydpo%2BFeT7ACqf0ksFMQxjYOC0%2BNsVJnPi22Izjw78zbF1OpydsuZ3TQosedODUaIKRi%2BwYLUgESCBc5caLHY5cdnNzZJa7mQ1WaOaKRHEvqjiuaI2ioPwzPuCbmu0ULIwdFIIkeYXF89Bc9ofgIVlbv%2B9UmH7qBLJx%2BWk7FgQA9JFnlHis4zZigMloUFVeoWem0fdBEZoK9d62aVwsDiIPsHKBGV4h2Ok4D2KQLmUnkzU1yq1e%2BvUSeHoxf%2B9zU6meTOMgyAkI4H1rt4WBYCoZXcBzOMxFMt2jAFACMCHuqpZr4VUYJ23S%2BQnDZEmI3oPdWITCeYgFxjohNrxidskPao%2BUdUn6Ae8jaqrZhgS5ikUQd1QpZFUt66aG3QCxYXwN3DfJjCgEIXMkFt%2FrqO%2BBhH3xD7JBOCb4HJNhTv6%2FSi4FqCkOWswK8Ds2rhoSp6T6kV3t6pzowmcuLPqOblEwprrztBCKHNVcdaQvSQTYclafGSGoTS%2F7zEUREt41Li1LNJV%2FtP6YediZMaXf5VJvSyebCoIrSvYe7sNSSZ%2Bmo%2FwVfGDf%2BRYgPMIDiyMAGOqUBqdYwMq5c0LpcOFVurv%2BrLtt0GOR9IfHbAFDvMjTFlslGkHVeNo5ys2IPxCN4IC9I3ZruWrJutxYWVmwDbv5FNWAnOmyiK2fktdupGRGos3EGdRmTWSvFJ%2BWbOzrp6JnUsWr%2FvNtLqzvnIrQo%2BqSNg2%2FSYtun4AlhazBIuNC1%2BSt0yTcbrIkNr6YTkHjoIEECz%2BjLwBa2kOvy8TBFRrP%2BTdB%2FpDjT&X-Amz-Signature=bc356d64166226b304346d1bca6a9e1b69d6de01065be082cedaf81ee24cf98f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFNRAJJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAl8ziRWJjl%2B13Ye8ZDr7zyRaCyK9vDTYHdP6A96M9WVAiEAqeWs9QAaIQ99IOiU37VWf4GyHih5nRkeKNtY91jeBTEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUgShRwAwZ0mQqp6CrcA%2BCU4zu5TdiubXPxlx%2BcTg26GrLVlO4N0I02bzNg1V9NR%2FaeJxvMPjv54RZLSXb8dWEoxydpo%2BFeT7ACqf0ksFMQxjYOC0%2BNsVJnPi22Izjw78zbF1OpydsuZ3TQosedODUaIKRi%2BwYLUgESCBc5caLHY5cdnNzZJa7mQ1WaOaKRHEvqjiuaI2ioPwzPuCbmu0ULIwdFIIkeYXF89Bc9ofgIVlbv%2B9UmH7qBLJx%2BWk7FgQA9JFnlHis4zZigMloUFVeoWem0fdBEZoK9d62aVwsDiIPsHKBGV4h2Ok4D2KQLmUnkzU1yq1e%2BvUSeHoxf%2B9zU6meTOMgyAkI4H1rt4WBYCoZXcBzOMxFMt2jAFACMCHuqpZr4VUYJ23S%2BQnDZEmI3oPdWITCeYgFxjohNrxidskPao%2BUdUn6Ae8jaqrZhgS5ikUQd1QpZFUt66aG3QCxYXwN3DfJjCgEIXMkFt%2FrqO%2BBhH3xD7JBOCb4HJNhTv6%2FSi4FqCkOWswK8Ds2rhoSp6T6kV3t6pzowmcuLPqOblEwprrztBCKHNVcdaQvSQTYclafGSGoTS%2F7zEUREt41Li1LNJV%2FtP6YediZMaXf5VJvSyebCoIrSvYe7sNSSZ%2Bmo%2FwVfGDf%2BRYgPMIDiyMAGOqUBqdYwMq5c0LpcOFVurv%2BrLtt0GOR9IfHbAFDvMjTFlslGkHVeNo5ys2IPxCN4IC9I3ZruWrJutxYWVmwDbv5FNWAnOmyiK2fktdupGRGos3EGdRmTWSvFJ%2BWbOzrp6JnUsWr%2FvNtLqzvnIrQo%2BqSNg2%2FSYtun4AlhazBIuNC1%2BSt0yTcbrIkNr6YTkHjoIEECz%2BjLwBa2kOvy8TBFRrP%2BTdB%2FpDjT&X-Amz-Signature=2d08ce9251c34b8fe37344a45c9356998517b68bea74f12a1b43a6d5f83cf386&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
