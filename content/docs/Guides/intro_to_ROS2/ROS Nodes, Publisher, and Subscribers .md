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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YSXOKSP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDuoQ8AHl4DKNtfgauWSKRnuN13Uk21sszriP%2FKnwFBnwIhAOqW1SGandGg2cO030DdOyTvRdr6clM44I9r0g4IKny%2BKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFuxxmP%2F17iV17E3sq3AO%2BNczCrRKUPi3UizAVpBE%2BlJauS59NAD1VH5rQfd9AwXyRNEcHc6iuOsowj0AvijINHUyfD2WO37KFCZQNf8ksWbCC70UO1FKSwik3WA2b1%2FOe6foQfUOEtxoSXPtQ%2Ff3lxAHUFu%2FI8gJfTdKI0Nk5x29JxqAlOeMcFlJu9CW2hE6v7YBLetuGSIeOmGmOE1l%2F2x9xvzVDQfLDxufSEQKglGIg1yLVKR%2BvB%2B9LpggLYvtai6s%2F44zz1%2B27TDf7EdoAhitxkdecG2%2BFHhOsVbwfHepywvMctx2PORO0PfrQipq9EXU34Ov%2B1hewlX330cFS%2BGwE7g8E%2B5kdPkqxoz3kSirOFY%2FEgM58Iz3268qQ5FwyZos9GyLucz5M4icoeQUytxUcRwYXWi6MaGTB%2FDzDdtByRwPoOsu2xavTa%2BSObl%2FJPnT%2BUECrxuc1Ym0kCADjHV0PnmlfuaT3lnWKLg62pUNdI2R%2BeX4WirZCNOh9jDBOPh3N3MpqoZikyBeQ43FGbPkMsaelmWeks6T2oKQxVMCe6FjCQPU6hYXyiBJGinTUgbT7B6iv10s31YHfkT9Aprw6HoDcsyYiYkj17CJs%2FBhy6tOKOgNev%2Fjf7Xw%2Bg2%2B8xlmi4vB5TXrS5zCmrrvBBjqkAXMX2asr%2FqiOou7EmJ%2BWQeWX9cFcS%2Fwl2fBHY0B4WSAEqPUw8HvqwCYBEixh0F%2BO389TrnrSqksRfWfE36il5yaHe0Zg4XPL0Ul5PTV0nFW87OksqiaA0Zj88oATElYxG%2FPFSI6BOlTlz7twT2QzoklXK1tQiXmqqLsvHggZYGINid6jr4yhgSa8u%2BOrshPhr1SFMHfXru0PgA9NqpWp285B9jGT&X-Amz-Signature=460c4056f5e4d33986c588879c3ef9b1ab516586835008880405f3b7f409abbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YSXOKSP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDuoQ8AHl4DKNtfgauWSKRnuN13Uk21sszriP%2FKnwFBnwIhAOqW1SGandGg2cO030DdOyTvRdr6clM44I9r0g4IKny%2BKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFuxxmP%2F17iV17E3sq3AO%2BNczCrRKUPi3UizAVpBE%2BlJauS59NAD1VH5rQfd9AwXyRNEcHc6iuOsowj0AvijINHUyfD2WO37KFCZQNf8ksWbCC70UO1FKSwik3WA2b1%2FOe6foQfUOEtxoSXPtQ%2Ff3lxAHUFu%2FI8gJfTdKI0Nk5x29JxqAlOeMcFlJu9CW2hE6v7YBLetuGSIeOmGmOE1l%2F2x9xvzVDQfLDxufSEQKglGIg1yLVKR%2BvB%2B9LpggLYvtai6s%2F44zz1%2B27TDf7EdoAhitxkdecG2%2BFHhOsVbwfHepywvMctx2PORO0PfrQipq9EXU34Ov%2B1hewlX330cFS%2BGwE7g8E%2B5kdPkqxoz3kSirOFY%2FEgM58Iz3268qQ5FwyZos9GyLucz5M4icoeQUytxUcRwYXWi6MaGTB%2FDzDdtByRwPoOsu2xavTa%2BSObl%2FJPnT%2BUECrxuc1Ym0kCADjHV0PnmlfuaT3lnWKLg62pUNdI2R%2BeX4WirZCNOh9jDBOPh3N3MpqoZikyBeQ43FGbPkMsaelmWeks6T2oKQxVMCe6FjCQPU6hYXyiBJGinTUgbT7B6iv10s31YHfkT9Aprw6HoDcsyYiYkj17CJs%2FBhy6tOKOgNev%2Fjf7Xw%2Bg2%2B8xlmi4vB5TXrS5zCmrrvBBjqkAXMX2asr%2FqiOou7EmJ%2BWQeWX9cFcS%2Fwl2fBHY0B4WSAEqPUw8HvqwCYBEixh0F%2BO389TrnrSqksRfWfE36il5yaHe0Zg4XPL0Ul5PTV0nFW87OksqiaA0Zj88oATElYxG%2FPFSI6BOlTlz7twT2QzoklXK1tQiXmqqLsvHggZYGINid6jr4yhgSa8u%2BOrshPhr1SFMHfXru0PgA9NqpWp285B9jGT&X-Amz-Signature=4140fccbac6236e1ab0572dbda118f207efabd81438798dd9e604dfa797aad65&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YSXOKSP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDuoQ8AHl4DKNtfgauWSKRnuN13Uk21sszriP%2FKnwFBnwIhAOqW1SGandGg2cO030DdOyTvRdr6clM44I9r0g4IKny%2BKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFuxxmP%2F17iV17E3sq3AO%2BNczCrRKUPi3UizAVpBE%2BlJauS59NAD1VH5rQfd9AwXyRNEcHc6iuOsowj0AvijINHUyfD2WO37KFCZQNf8ksWbCC70UO1FKSwik3WA2b1%2FOe6foQfUOEtxoSXPtQ%2Ff3lxAHUFu%2FI8gJfTdKI0Nk5x29JxqAlOeMcFlJu9CW2hE6v7YBLetuGSIeOmGmOE1l%2F2x9xvzVDQfLDxufSEQKglGIg1yLVKR%2BvB%2B9LpggLYvtai6s%2F44zz1%2B27TDf7EdoAhitxkdecG2%2BFHhOsVbwfHepywvMctx2PORO0PfrQipq9EXU34Ov%2B1hewlX330cFS%2BGwE7g8E%2B5kdPkqxoz3kSirOFY%2FEgM58Iz3268qQ5FwyZos9GyLucz5M4icoeQUytxUcRwYXWi6MaGTB%2FDzDdtByRwPoOsu2xavTa%2BSObl%2FJPnT%2BUECrxuc1Ym0kCADjHV0PnmlfuaT3lnWKLg62pUNdI2R%2BeX4WirZCNOh9jDBOPh3N3MpqoZikyBeQ43FGbPkMsaelmWeks6T2oKQxVMCe6FjCQPU6hYXyiBJGinTUgbT7B6iv10s31YHfkT9Aprw6HoDcsyYiYkj17CJs%2FBhy6tOKOgNev%2Fjf7Xw%2Bg2%2B8xlmi4vB5TXrS5zCmrrvBBjqkAXMX2asr%2FqiOou7EmJ%2BWQeWX9cFcS%2Fwl2fBHY0B4WSAEqPUw8HvqwCYBEixh0F%2BO389TrnrSqksRfWfE36il5yaHe0Zg4XPL0Ul5PTV0nFW87OksqiaA0Zj88oATElYxG%2FPFSI6BOlTlz7twT2QzoklXK1tQiXmqqLsvHggZYGINid6jr4yhgSa8u%2BOrshPhr1SFMHfXru0PgA9NqpWp285B9jGT&X-Amz-Signature=1cc4e1a0dfac8d0ac2f13f187c4729f985b4b9d7c96b167372855b8651dae88f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YSXOKSP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDuoQ8AHl4DKNtfgauWSKRnuN13Uk21sszriP%2FKnwFBnwIhAOqW1SGandGg2cO030DdOyTvRdr6clM44I9r0g4IKny%2BKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFuxxmP%2F17iV17E3sq3AO%2BNczCrRKUPi3UizAVpBE%2BlJauS59NAD1VH5rQfd9AwXyRNEcHc6iuOsowj0AvijINHUyfD2WO37KFCZQNf8ksWbCC70UO1FKSwik3WA2b1%2FOe6foQfUOEtxoSXPtQ%2Ff3lxAHUFu%2FI8gJfTdKI0Nk5x29JxqAlOeMcFlJu9CW2hE6v7YBLetuGSIeOmGmOE1l%2F2x9xvzVDQfLDxufSEQKglGIg1yLVKR%2BvB%2B9LpggLYvtai6s%2F44zz1%2B27TDf7EdoAhitxkdecG2%2BFHhOsVbwfHepywvMctx2PORO0PfrQipq9EXU34Ov%2B1hewlX330cFS%2BGwE7g8E%2B5kdPkqxoz3kSirOFY%2FEgM58Iz3268qQ5FwyZos9GyLucz5M4icoeQUytxUcRwYXWi6MaGTB%2FDzDdtByRwPoOsu2xavTa%2BSObl%2FJPnT%2BUECrxuc1Ym0kCADjHV0PnmlfuaT3lnWKLg62pUNdI2R%2BeX4WirZCNOh9jDBOPh3N3MpqoZikyBeQ43FGbPkMsaelmWeks6T2oKQxVMCe6FjCQPU6hYXyiBJGinTUgbT7B6iv10s31YHfkT9Aprw6HoDcsyYiYkj17CJs%2FBhy6tOKOgNev%2Fjf7Xw%2Bg2%2B8xlmi4vB5TXrS5zCmrrvBBjqkAXMX2asr%2FqiOou7EmJ%2BWQeWX9cFcS%2Fwl2fBHY0B4WSAEqPUw8HvqwCYBEixh0F%2BO389TrnrSqksRfWfE36il5yaHe0Zg4XPL0Ul5PTV0nFW87OksqiaA0Zj88oATElYxG%2FPFSI6BOlTlz7twT2QzoklXK1tQiXmqqLsvHggZYGINid6jr4yhgSa8u%2BOrshPhr1SFMHfXru0PgA9NqpWp285B9jGT&X-Amz-Signature=3ae5dad823b449c2ed4f7234f109baacb247f16ff0c06b4ab726e1ed773f1d33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YSXOKSP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDuoQ8AHl4DKNtfgauWSKRnuN13Uk21sszriP%2FKnwFBnwIhAOqW1SGandGg2cO030DdOyTvRdr6clM44I9r0g4IKny%2BKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFuxxmP%2F17iV17E3sq3AO%2BNczCrRKUPi3UizAVpBE%2BlJauS59NAD1VH5rQfd9AwXyRNEcHc6iuOsowj0AvijINHUyfD2WO37KFCZQNf8ksWbCC70UO1FKSwik3WA2b1%2FOe6foQfUOEtxoSXPtQ%2Ff3lxAHUFu%2FI8gJfTdKI0Nk5x29JxqAlOeMcFlJu9CW2hE6v7YBLetuGSIeOmGmOE1l%2F2x9xvzVDQfLDxufSEQKglGIg1yLVKR%2BvB%2B9LpggLYvtai6s%2F44zz1%2B27TDf7EdoAhitxkdecG2%2BFHhOsVbwfHepywvMctx2PORO0PfrQipq9EXU34Ov%2B1hewlX330cFS%2BGwE7g8E%2B5kdPkqxoz3kSirOFY%2FEgM58Iz3268qQ5FwyZos9GyLucz5M4icoeQUytxUcRwYXWi6MaGTB%2FDzDdtByRwPoOsu2xavTa%2BSObl%2FJPnT%2BUECrxuc1Ym0kCADjHV0PnmlfuaT3lnWKLg62pUNdI2R%2BeX4WirZCNOh9jDBOPh3N3MpqoZikyBeQ43FGbPkMsaelmWeks6T2oKQxVMCe6FjCQPU6hYXyiBJGinTUgbT7B6iv10s31YHfkT9Aprw6HoDcsyYiYkj17CJs%2FBhy6tOKOgNev%2Fjf7Xw%2Bg2%2B8xlmi4vB5TXrS5zCmrrvBBjqkAXMX2asr%2FqiOou7EmJ%2BWQeWX9cFcS%2Fwl2fBHY0B4WSAEqPUw8HvqwCYBEixh0F%2BO389TrnrSqksRfWfE36il5yaHe0Zg4XPL0Ul5PTV0nFW87OksqiaA0Zj88oATElYxG%2FPFSI6BOlTlz7twT2QzoklXK1tQiXmqqLsvHggZYGINid6jr4yhgSa8u%2BOrshPhr1SFMHfXru0PgA9NqpWp285B9jGT&X-Amz-Signature=620ff90e6c173d40cfc5b68a3c509d4dde7593fe164efa8f0544882d33b90f13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YSXOKSP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDuoQ8AHl4DKNtfgauWSKRnuN13Uk21sszriP%2FKnwFBnwIhAOqW1SGandGg2cO030DdOyTvRdr6clM44I9r0g4IKny%2BKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFuxxmP%2F17iV17E3sq3AO%2BNczCrRKUPi3UizAVpBE%2BlJauS59NAD1VH5rQfd9AwXyRNEcHc6iuOsowj0AvijINHUyfD2WO37KFCZQNf8ksWbCC70UO1FKSwik3WA2b1%2FOe6foQfUOEtxoSXPtQ%2Ff3lxAHUFu%2FI8gJfTdKI0Nk5x29JxqAlOeMcFlJu9CW2hE6v7YBLetuGSIeOmGmOE1l%2F2x9xvzVDQfLDxufSEQKglGIg1yLVKR%2BvB%2B9LpggLYvtai6s%2F44zz1%2B27TDf7EdoAhitxkdecG2%2BFHhOsVbwfHepywvMctx2PORO0PfrQipq9EXU34Ov%2B1hewlX330cFS%2BGwE7g8E%2B5kdPkqxoz3kSirOFY%2FEgM58Iz3268qQ5FwyZos9GyLucz5M4icoeQUytxUcRwYXWi6MaGTB%2FDzDdtByRwPoOsu2xavTa%2BSObl%2FJPnT%2BUECrxuc1Ym0kCADjHV0PnmlfuaT3lnWKLg62pUNdI2R%2BeX4WirZCNOh9jDBOPh3N3MpqoZikyBeQ43FGbPkMsaelmWeks6T2oKQxVMCe6FjCQPU6hYXyiBJGinTUgbT7B6iv10s31YHfkT9Aprw6HoDcsyYiYkj17CJs%2FBhy6tOKOgNev%2Fjf7Xw%2Bg2%2B8xlmi4vB5TXrS5zCmrrvBBjqkAXMX2asr%2FqiOou7EmJ%2BWQeWX9cFcS%2Fwl2fBHY0B4WSAEqPUw8HvqwCYBEixh0F%2BO389TrnrSqksRfWfE36il5yaHe0Zg4XPL0Ul5PTV0nFW87OksqiaA0Zj88oATElYxG%2FPFSI6BOlTlz7twT2QzoklXK1tQiXmqqLsvHggZYGINid6jr4yhgSa8u%2BOrshPhr1SFMHfXru0PgA9NqpWp285B9jGT&X-Amz-Signature=aa4e7f591c6d8bf612248a8cba838bd7f1700bfe47353bc19a8ad277e41c347d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YSXOKSP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDuoQ8AHl4DKNtfgauWSKRnuN13Uk21sszriP%2FKnwFBnwIhAOqW1SGandGg2cO030DdOyTvRdr6clM44I9r0g4IKny%2BKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFuxxmP%2F17iV17E3sq3AO%2BNczCrRKUPi3UizAVpBE%2BlJauS59NAD1VH5rQfd9AwXyRNEcHc6iuOsowj0AvijINHUyfD2WO37KFCZQNf8ksWbCC70UO1FKSwik3WA2b1%2FOe6foQfUOEtxoSXPtQ%2Ff3lxAHUFu%2FI8gJfTdKI0Nk5x29JxqAlOeMcFlJu9CW2hE6v7YBLetuGSIeOmGmOE1l%2F2x9xvzVDQfLDxufSEQKglGIg1yLVKR%2BvB%2B9LpggLYvtai6s%2F44zz1%2B27TDf7EdoAhitxkdecG2%2BFHhOsVbwfHepywvMctx2PORO0PfrQipq9EXU34Ov%2B1hewlX330cFS%2BGwE7g8E%2B5kdPkqxoz3kSirOFY%2FEgM58Iz3268qQ5FwyZos9GyLucz5M4icoeQUytxUcRwYXWi6MaGTB%2FDzDdtByRwPoOsu2xavTa%2BSObl%2FJPnT%2BUECrxuc1Ym0kCADjHV0PnmlfuaT3lnWKLg62pUNdI2R%2BeX4WirZCNOh9jDBOPh3N3MpqoZikyBeQ43FGbPkMsaelmWeks6T2oKQxVMCe6FjCQPU6hYXyiBJGinTUgbT7B6iv10s31YHfkT9Aprw6HoDcsyYiYkj17CJs%2FBhy6tOKOgNev%2Fjf7Xw%2Bg2%2B8xlmi4vB5TXrS5zCmrrvBBjqkAXMX2asr%2FqiOou7EmJ%2BWQeWX9cFcS%2Fwl2fBHY0B4WSAEqPUw8HvqwCYBEixh0F%2BO389TrnrSqksRfWfE36il5yaHe0Zg4XPL0Ul5PTV0nFW87OksqiaA0Zj88oATElYxG%2FPFSI6BOlTlz7twT2QzoklXK1tQiXmqqLsvHggZYGINid6jr4yhgSa8u%2BOrshPhr1SFMHfXru0PgA9NqpWp285B9jGT&X-Amz-Signature=4b649dacf5799f0565089a30f2831dfa20743d09b02d1fba0210c45199e2f799&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YSXOKSP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDuoQ8AHl4DKNtfgauWSKRnuN13Uk21sszriP%2FKnwFBnwIhAOqW1SGandGg2cO030DdOyTvRdr6clM44I9r0g4IKny%2BKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFuxxmP%2F17iV17E3sq3AO%2BNczCrRKUPi3UizAVpBE%2BlJauS59NAD1VH5rQfd9AwXyRNEcHc6iuOsowj0AvijINHUyfD2WO37KFCZQNf8ksWbCC70UO1FKSwik3WA2b1%2FOe6foQfUOEtxoSXPtQ%2Ff3lxAHUFu%2FI8gJfTdKI0Nk5x29JxqAlOeMcFlJu9CW2hE6v7YBLetuGSIeOmGmOE1l%2F2x9xvzVDQfLDxufSEQKglGIg1yLVKR%2BvB%2B9LpggLYvtai6s%2F44zz1%2B27TDf7EdoAhitxkdecG2%2BFHhOsVbwfHepywvMctx2PORO0PfrQipq9EXU34Ov%2B1hewlX330cFS%2BGwE7g8E%2B5kdPkqxoz3kSirOFY%2FEgM58Iz3268qQ5FwyZos9GyLucz5M4icoeQUytxUcRwYXWi6MaGTB%2FDzDdtByRwPoOsu2xavTa%2BSObl%2FJPnT%2BUECrxuc1Ym0kCADjHV0PnmlfuaT3lnWKLg62pUNdI2R%2BeX4WirZCNOh9jDBOPh3N3MpqoZikyBeQ43FGbPkMsaelmWeks6T2oKQxVMCe6FjCQPU6hYXyiBJGinTUgbT7B6iv10s31YHfkT9Aprw6HoDcsyYiYkj17CJs%2FBhy6tOKOgNev%2Fjf7Xw%2Bg2%2B8xlmi4vB5TXrS5zCmrrvBBjqkAXMX2asr%2FqiOou7EmJ%2BWQeWX9cFcS%2Fwl2fBHY0B4WSAEqPUw8HvqwCYBEixh0F%2BO389TrnrSqksRfWfE36il5yaHe0Zg4XPL0Ul5PTV0nFW87OksqiaA0Zj88oATElYxG%2FPFSI6BOlTlz7twT2QzoklXK1tQiXmqqLsvHggZYGINid6jr4yhgSa8u%2BOrshPhr1SFMHfXru0PgA9NqpWp285B9jGT&X-Amz-Signature=503281f450c2154d006ad527556c0310ac00eea0302acbdc076ca555a715016a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
