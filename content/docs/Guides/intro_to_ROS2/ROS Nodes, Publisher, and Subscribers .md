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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFG53REK%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2FA4dHK4YBTTTJ5xSVNTRQhZm7mE%2BajLN6zmInfgqSAIhAMDH1QWLRq3yg9kEkYy66DQCrJXZg2liitGdQPg4QtytKv8DCEIQABoMNjM3NDIzMTgzODA1IgzcJ4QszL9N9ySbZjoq3AN%2BAY0iujTZP06nUDx%2FUtQe3V89vPp%2FJQrYHqfQLfdtXwAZWdlYJYWBa%2BAMBEo6sBDdTONDOBWE94aogMWe%2B1hPW7XDYFYpjxDdWB46FJFIO0QDqRxT7JdTX1iw5xMQxa%2FWRky13R%2FptFoAiXROSybRrWgaHCpUYZIup%2BHdCuxCqhc%2BOYFpxQM%2FQaAq1DXGw3wNGE9H89yUf%2BtLwk2gNuDtVTAP%2BK%2Fnd3Jr08hIn77NvFIzV%2FE8maLN8a1ScBgrwdLSTBZflEhwj10lyF%2BYougpIrMRHGmfJl3BpGVNTRhCQeoiYVbeEb8Yw32qz5dfysPFT%2FUJASAkeD%2BQngccmjHSp62gk4IP4clk%2FUeQ67mejilHr0uFw%2Fdno1Knwk1o2TdyQ%2Bspr50uRe1QnhlUVIRwGDsw%2BamS13dvPKGpupaCeOYqw2R%2FAijFwDi%2FoRtCz%2B23Dhls2YuAcvwEYzKd4a%2BDUf%2FXE31Kc6UwkpMbTSqKplYYW214bKBS2yalUa47tVHFxU%2BkvLtCAbEHdGx7QMI106ePmJT8EWPR1soqNcav%2Bn6OveFCKSZ8%2BiaVgwaGXJaBIr0z0ksqcTH5fnS%2BTKe0ga49zIABx4NVTwaxKqZksklxThibM%2F4huIWhLDCkzt%2B%2BBjqkAZpb4uWi0tMB6AOk2tMoVQ%2BfuXgqMSQWdjbUYOVndOslE%2FrVKWfZh6bFcqy4FAJwOtCEjm4N%2FNmK%2BxGsYB%2FIiF6X3gl6ltV0cCyYenctFrzBzEu1egEX8%2FGq3CZqWlIE%2B8%2BMeiA3l%2F47Z2%2B7qYCShafl%2B8NTdgeoe735xA2aMpjKEnAMs4rlmnCwBvsajxZB7stE%2FoaY4e%2FcX1m4BSU1rw0dHNCE&X-Amz-Signature=1e20f292f75cc99912c415533fb7f5151f60432e914674ca8cf53e10b65a3d90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFG53REK%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2FA4dHK4YBTTTJ5xSVNTRQhZm7mE%2BajLN6zmInfgqSAIhAMDH1QWLRq3yg9kEkYy66DQCrJXZg2liitGdQPg4QtytKv8DCEIQABoMNjM3NDIzMTgzODA1IgzcJ4QszL9N9ySbZjoq3AN%2BAY0iujTZP06nUDx%2FUtQe3V89vPp%2FJQrYHqfQLfdtXwAZWdlYJYWBa%2BAMBEo6sBDdTONDOBWE94aogMWe%2B1hPW7XDYFYpjxDdWB46FJFIO0QDqRxT7JdTX1iw5xMQxa%2FWRky13R%2FptFoAiXROSybRrWgaHCpUYZIup%2BHdCuxCqhc%2BOYFpxQM%2FQaAq1DXGw3wNGE9H89yUf%2BtLwk2gNuDtVTAP%2BK%2Fnd3Jr08hIn77NvFIzV%2FE8maLN8a1ScBgrwdLSTBZflEhwj10lyF%2BYougpIrMRHGmfJl3BpGVNTRhCQeoiYVbeEb8Yw32qz5dfysPFT%2FUJASAkeD%2BQngccmjHSp62gk4IP4clk%2FUeQ67mejilHr0uFw%2Fdno1Knwk1o2TdyQ%2Bspr50uRe1QnhlUVIRwGDsw%2BamS13dvPKGpupaCeOYqw2R%2FAijFwDi%2FoRtCz%2B23Dhls2YuAcvwEYzKd4a%2BDUf%2FXE31Kc6UwkpMbTSqKplYYW214bKBS2yalUa47tVHFxU%2BkvLtCAbEHdGx7QMI106ePmJT8EWPR1soqNcav%2Bn6OveFCKSZ8%2BiaVgwaGXJaBIr0z0ksqcTH5fnS%2BTKe0ga49zIABx4NVTwaxKqZksklxThibM%2F4huIWhLDCkzt%2B%2BBjqkAZpb4uWi0tMB6AOk2tMoVQ%2BfuXgqMSQWdjbUYOVndOslE%2FrVKWfZh6bFcqy4FAJwOtCEjm4N%2FNmK%2BxGsYB%2FIiF6X3gl6ltV0cCyYenctFrzBzEu1egEX8%2FGq3CZqWlIE%2B8%2BMeiA3l%2F47Z2%2B7qYCShafl%2B8NTdgeoe735xA2aMpjKEnAMs4rlmnCwBvsajxZB7stE%2FoaY4e%2FcX1m4BSU1rw0dHNCE&X-Amz-Signature=a92ffd1a9f1f0ce1c69cac873c4acd43140f7014cbcb672aa7f79e6f9e9dfbe9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFG53REK%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2FA4dHK4YBTTTJ5xSVNTRQhZm7mE%2BajLN6zmInfgqSAIhAMDH1QWLRq3yg9kEkYy66DQCrJXZg2liitGdQPg4QtytKv8DCEIQABoMNjM3NDIzMTgzODA1IgzcJ4QszL9N9ySbZjoq3AN%2BAY0iujTZP06nUDx%2FUtQe3V89vPp%2FJQrYHqfQLfdtXwAZWdlYJYWBa%2BAMBEo6sBDdTONDOBWE94aogMWe%2B1hPW7XDYFYpjxDdWB46FJFIO0QDqRxT7JdTX1iw5xMQxa%2FWRky13R%2FptFoAiXROSybRrWgaHCpUYZIup%2BHdCuxCqhc%2BOYFpxQM%2FQaAq1DXGw3wNGE9H89yUf%2BtLwk2gNuDtVTAP%2BK%2Fnd3Jr08hIn77NvFIzV%2FE8maLN8a1ScBgrwdLSTBZflEhwj10lyF%2BYougpIrMRHGmfJl3BpGVNTRhCQeoiYVbeEb8Yw32qz5dfysPFT%2FUJASAkeD%2BQngccmjHSp62gk4IP4clk%2FUeQ67mejilHr0uFw%2Fdno1Knwk1o2TdyQ%2Bspr50uRe1QnhlUVIRwGDsw%2BamS13dvPKGpupaCeOYqw2R%2FAijFwDi%2FoRtCz%2B23Dhls2YuAcvwEYzKd4a%2BDUf%2FXE31Kc6UwkpMbTSqKplYYW214bKBS2yalUa47tVHFxU%2BkvLtCAbEHdGx7QMI106ePmJT8EWPR1soqNcav%2Bn6OveFCKSZ8%2BiaVgwaGXJaBIr0z0ksqcTH5fnS%2BTKe0ga49zIABx4NVTwaxKqZksklxThibM%2F4huIWhLDCkzt%2B%2BBjqkAZpb4uWi0tMB6AOk2tMoVQ%2BfuXgqMSQWdjbUYOVndOslE%2FrVKWfZh6bFcqy4FAJwOtCEjm4N%2FNmK%2BxGsYB%2FIiF6X3gl6ltV0cCyYenctFrzBzEu1egEX8%2FGq3CZqWlIE%2B8%2BMeiA3l%2F47Z2%2B7qYCShafl%2B8NTdgeoe735xA2aMpjKEnAMs4rlmnCwBvsajxZB7stE%2FoaY4e%2FcX1m4BSU1rw0dHNCE&X-Amz-Signature=d0e64f38a05ad216e758325b7cc1bc8d379f547991c4e962a513f44fc7ee8719&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFG53REK%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2FA4dHK4YBTTTJ5xSVNTRQhZm7mE%2BajLN6zmInfgqSAIhAMDH1QWLRq3yg9kEkYy66DQCrJXZg2liitGdQPg4QtytKv8DCEIQABoMNjM3NDIzMTgzODA1IgzcJ4QszL9N9ySbZjoq3AN%2BAY0iujTZP06nUDx%2FUtQe3V89vPp%2FJQrYHqfQLfdtXwAZWdlYJYWBa%2BAMBEo6sBDdTONDOBWE94aogMWe%2B1hPW7XDYFYpjxDdWB46FJFIO0QDqRxT7JdTX1iw5xMQxa%2FWRky13R%2FptFoAiXROSybRrWgaHCpUYZIup%2BHdCuxCqhc%2BOYFpxQM%2FQaAq1DXGw3wNGE9H89yUf%2BtLwk2gNuDtVTAP%2BK%2Fnd3Jr08hIn77NvFIzV%2FE8maLN8a1ScBgrwdLSTBZflEhwj10lyF%2BYougpIrMRHGmfJl3BpGVNTRhCQeoiYVbeEb8Yw32qz5dfysPFT%2FUJASAkeD%2BQngccmjHSp62gk4IP4clk%2FUeQ67mejilHr0uFw%2Fdno1Knwk1o2TdyQ%2Bspr50uRe1QnhlUVIRwGDsw%2BamS13dvPKGpupaCeOYqw2R%2FAijFwDi%2FoRtCz%2B23Dhls2YuAcvwEYzKd4a%2BDUf%2FXE31Kc6UwkpMbTSqKplYYW214bKBS2yalUa47tVHFxU%2BkvLtCAbEHdGx7QMI106ePmJT8EWPR1soqNcav%2Bn6OveFCKSZ8%2BiaVgwaGXJaBIr0z0ksqcTH5fnS%2BTKe0ga49zIABx4NVTwaxKqZksklxThibM%2F4huIWhLDCkzt%2B%2BBjqkAZpb4uWi0tMB6AOk2tMoVQ%2BfuXgqMSQWdjbUYOVndOslE%2FrVKWfZh6bFcqy4FAJwOtCEjm4N%2FNmK%2BxGsYB%2FIiF6X3gl6ltV0cCyYenctFrzBzEu1egEX8%2FGq3CZqWlIE%2B8%2BMeiA3l%2F47Z2%2B7qYCShafl%2B8NTdgeoe735xA2aMpjKEnAMs4rlmnCwBvsajxZB7stE%2FoaY4e%2FcX1m4BSU1rw0dHNCE&X-Amz-Signature=6deafff73aeb793f1d4bed1d1d387340b708b77f0f6bd039a9b0b415c5a6578e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFG53REK%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2FA4dHK4YBTTTJ5xSVNTRQhZm7mE%2BajLN6zmInfgqSAIhAMDH1QWLRq3yg9kEkYy66DQCrJXZg2liitGdQPg4QtytKv8DCEIQABoMNjM3NDIzMTgzODA1IgzcJ4QszL9N9ySbZjoq3AN%2BAY0iujTZP06nUDx%2FUtQe3V89vPp%2FJQrYHqfQLfdtXwAZWdlYJYWBa%2BAMBEo6sBDdTONDOBWE94aogMWe%2B1hPW7XDYFYpjxDdWB46FJFIO0QDqRxT7JdTX1iw5xMQxa%2FWRky13R%2FptFoAiXROSybRrWgaHCpUYZIup%2BHdCuxCqhc%2BOYFpxQM%2FQaAq1DXGw3wNGE9H89yUf%2BtLwk2gNuDtVTAP%2BK%2Fnd3Jr08hIn77NvFIzV%2FE8maLN8a1ScBgrwdLSTBZflEhwj10lyF%2BYougpIrMRHGmfJl3BpGVNTRhCQeoiYVbeEb8Yw32qz5dfysPFT%2FUJASAkeD%2BQngccmjHSp62gk4IP4clk%2FUeQ67mejilHr0uFw%2Fdno1Knwk1o2TdyQ%2Bspr50uRe1QnhlUVIRwGDsw%2BamS13dvPKGpupaCeOYqw2R%2FAijFwDi%2FoRtCz%2B23Dhls2YuAcvwEYzKd4a%2BDUf%2FXE31Kc6UwkpMbTSqKplYYW214bKBS2yalUa47tVHFxU%2BkvLtCAbEHdGx7QMI106ePmJT8EWPR1soqNcav%2Bn6OveFCKSZ8%2BiaVgwaGXJaBIr0z0ksqcTH5fnS%2BTKe0ga49zIABx4NVTwaxKqZksklxThibM%2F4huIWhLDCkzt%2B%2BBjqkAZpb4uWi0tMB6AOk2tMoVQ%2BfuXgqMSQWdjbUYOVndOslE%2FrVKWfZh6bFcqy4FAJwOtCEjm4N%2FNmK%2BxGsYB%2FIiF6X3gl6ltV0cCyYenctFrzBzEu1egEX8%2FGq3CZqWlIE%2B8%2BMeiA3l%2F47Z2%2B7qYCShafl%2B8NTdgeoe735xA2aMpjKEnAMs4rlmnCwBvsajxZB7stE%2FoaY4e%2FcX1m4BSU1rw0dHNCE&X-Amz-Signature=072e5aa923dd48e26f6984ff452f253d5514b7a7a5e4eb7e2588b8200b855823&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFG53REK%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2FA4dHK4YBTTTJ5xSVNTRQhZm7mE%2BajLN6zmInfgqSAIhAMDH1QWLRq3yg9kEkYy66DQCrJXZg2liitGdQPg4QtytKv8DCEIQABoMNjM3NDIzMTgzODA1IgzcJ4QszL9N9ySbZjoq3AN%2BAY0iujTZP06nUDx%2FUtQe3V89vPp%2FJQrYHqfQLfdtXwAZWdlYJYWBa%2BAMBEo6sBDdTONDOBWE94aogMWe%2B1hPW7XDYFYpjxDdWB46FJFIO0QDqRxT7JdTX1iw5xMQxa%2FWRky13R%2FptFoAiXROSybRrWgaHCpUYZIup%2BHdCuxCqhc%2BOYFpxQM%2FQaAq1DXGw3wNGE9H89yUf%2BtLwk2gNuDtVTAP%2BK%2Fnd3Jr08hIn77NvFIzV%2FE8maLN8a1ScBgrwdLSTBZflEhwj10lyF%2BYougpIrMRHGmfJl3BpGVNTRhCQeoiYVbeEb8Yw32qz5dfysPFT%2FUJASAkeD%2BQngccmjHSp62gk4IP4clk%2FUeQ67mejilHr0uFw%2Fdno1Knwk1o2TdyQ%2Bspr50uRe1QnhlUVIRwGDsw%2BamS13dvPKGpupaCeOYqw2R%2FAijFwDi%2FoRtCz%2B23Dhls2YuAcvwEYzKd4a%2BDUf%2FXE31Kc6UwkpMbTSqKplYYW214bKBS2yalUa47tVHFxU%2BkvLtCAbEHdGx7QMI106ePmJT8EWPR1soqNcav%2Bn6OveFCKSZ8%2BiaVgwaGXJaBIr0z0ksqcTH5fnS%2BTKe0ga49zIABx4NVTwaxKqZksklxThibM%2F4huIWhLDCkzt%2B%2BBjqkAZpb4uWi0tMB6AOk2tMoVQ%2BfuXgqMSQWdjbUYOVndOslE%2FrVKWfZh6bFcqy4FAJwOtCEjm4N%2FNmK%2BxGsYB%2FIiF6X3gl6ltV0cCyYenctFrzBzEu1egEX8%2FGq3CZqWlIE%2B8%2BMeiA3l%2F47Z2%2B7qYCShafl%2B8NTdgeoe735xA2aMpjKEnAMs4rlmnCwBvsajxZB7stE%2FoaY4e%2FcX1m4BSU1rw0dHNCE&X-Amz-Signature=2755d2c2ef6b934e581a1ecff6cc4fdbe04c19f1f0a44cb281465fa51a724055&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFG53REK%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2FA4dHK4YBTTTJ5xSVNTRQhZm7mE%2BajLN6zmInfgqSAIhAMDH1QWLRq3yg9kEkYy66DQCrJXZg2liitGdQPg4QtytKv8DCEIQABoMNjM3NDIzMTgzODA1IgzcJ4QszL9N9ySbZjoq3AN%2BAY0iujTZP06nUDx%2FUtQe3V89vPp%2FJQrYHqfQLfdtXwAZWdlYJYWBa%2BAMBEo6sBDdTONDOBWE94aogMWe%2B1hPW7XDYFYpjxDdWB46FJFIO0QDqRxT7JdTX1iw5xMQxa%2FWRky13R%2FptFoAiXROSybRrWgaHCpUYZIup%2BHdCuxCqhc%2BOYFpxQM%2FQaAq1DXGw3wNGE9H89yUf%2BtLwk2gNuDtVTAP%2BK%2Fnd3Jr08hIn77NvFIzV%2FE8maLN8a1ScBgrwdLSTBZflEhwj10lyF%2BYougpIrMRHGmfJl3BpGVNTRhCQeoiYVbeEb8Yw32qz5dfysPFT%2FUJASAkeD%2BQngccmjHSp62gk4IP4clk%2FUeQ67mejilHr0uFw%2Fdno1Knwk1o2TdyQ%2Bspr50uRe1QnhlUVIRwGDsw%2BamS13dvPKGpupaCeOYqw2R%2FAijFwDi%2FoRtCz%2B23Dhls2YuAcvwEYzKd4a%2BDUf%2FXE31Kc6UwkpMbTSqKplYYW214bKBS2yalUa47tVHFxU%2BkvLtCAbEHdGx7QMI106ePmJT8EWPR1soqNcav%2Bn6OveFCKSZ8%2BiaVgwaGXJaBIr0z0ksqcTH5fnS%2BTKe0ga49zIABx4NVTwaxKqZksklxThibM%2F4huIWhLDCkzt%2B%2BBjqkAZpb4uWi0tMB6AOk2tMoVQ%2BfuXgqMSQWdjbUYOVndOslE%2FrVKWfZh6bFcqy4FAJwOtCEjm4N%2FNmK%2BxGsYB%2FIiF6X3gl6ltV0cCyYenctFrzBzEu1egEX8%2FGq3CZqWlIE%2B8%2BMeiA3l%2F47Z2%2B7qYCShafl%2B8NTdgeoe735xA2aMpjKEnAMs4rlmnCwBvsajxZB7stE%2FoaY4e%2FcX1m4BSU1rw0dHNCE&X-Amz-Signature=a2916283ca3d74843488cdc9fecbde997cdd3df2813871aa9f60b06bdcd5d5c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFG53REK%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2FA4dHK4YBTTTJ5xSVNTRQhZm7mE%2BajLN6zmInfgqSAIhAMDH1QWLRq3yg9kEkYy66DQCrJXZg2liitGdQPg4QtytKv8DCEIQABoMNjM3NDIzMTgzODA1IgzcJ4QszL9N9ySbZjoq3AN%2BAY0iujTZP06nUDx%2FUtQe3V89vPp%2FJQrYHqfQLfdtXwAZWdlYJYWBa%2BAMBEo6sBDdTONDOBWE94aogMWe%2B1hPW7XDYFYpjxDdWB46FJFIO0QDqRxT7JdTX1iw5xMQxa%2FWRky13R%2FptFoAiXROSybRrWgaHCpUYZIup%2BHdCuxCqhc%2BOYFpxQM%2FQaAq1DXGw3wNGE9H89yUf%2BtLwk2gNuDtVTAP%2BK%2Fnd3Jr08hIn77NvFIzV%2FE8maLN8a1ScBgrwdLSTBZflEhwj10lyF%2BYougpIrMRHGmfJl3BpGVNTRhCQeoiYVbeEb8Yw32qz5dfysPFT%2FUJASAkeD%2BQngccmjHSp62gk4IP4clk%2FUeQ67mejilHr0uFw%2Fdno1Knwk1o2TdyQ%2Bspr50uRe1QnhlUVIRwGDsw%2BamS13dvPKGpupaCeOYqw2R%2FAijFwDi%2FoRtCz%2B23Dhls2YuAcvwEYzKd4a%2BDUf%2FXE31Kc6UwkpMbTSqKplYYW214bKBS2yalUa47tVHFxU%2BkvLtCAbEHdGx7QMI106ePmJT8EWPR1soqNcav%2Bn6OveFCKSZ8%2BiaVgwaGXJaBIr0z0ksqcTH5fnS%2BTKe0ga49zIABx4NVTwaxKqZksklxThibM%2F4huIWhLDCkzt%2B%2BBjqkAZpb4uWi0tMB6AOk2tMoVQ%2BfuXgqMSQWdjbUYOVndOslE%2FrVKWfZh6bFcqy4FAJwOtCEjm4N%2FNmK%2BxGsYB%2FIiF6X3gl6ltV0cCyYenctFrzBzEu1egEX8%2FGq3CZqWlIE%2B8%2BMeiA3l%2F47Z2%2B7qYCShafl%2B8NTdgeoe735xA2aMpjKEnAMs4rlmnCwBvsajxZB7stE%2FoaY4e%2FcX1m4BSU1rw0dHNCE&X-Amz-Signature=cf680fc8ea4031a473793767ebc7d74b9c8ae3edf61b2cf72600427d1bfcadba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
