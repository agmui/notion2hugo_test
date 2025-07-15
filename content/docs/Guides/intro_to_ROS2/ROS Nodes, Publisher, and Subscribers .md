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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P45TCJG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBeyLa6DJY6INZrMGDtow4MIrKmIGpEDPLuKQX%2B%2BJK3bAiEA%2BljMMI3JkVTpMJmSNv7JEdiQcbu%2FzlP0jt1k1S9wGTAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPy3r9GIrg6mRP68PSrcA4tfyPc2%2FBn7Ijfu0PFAuN6hDvtlRLyaQpEcLA3%2BdPB43bN1LrjvZj%2F%2F2TO9UM38%2BOLv1iLdzV4JV9fwKX3zJlaip%2BMcV8o5ml%2BEajtc2Q9cTc74cpNqpNa8x7HxYBvVYnRdKQ2tSzyJ9%2BgE2db6j9VZRsVciq1veliHZhgzNyFzk6Ntfcnli%2F%2BtpWdzcFjzmeLWNW2h4%2BbAANfV6FRb3qAuoflaofZp5moJUUoVealPrDwLz7eqoEsGUa8szSB6q2R5pDE4Qqn4xN86%2B5ujXgXTnKrjwkdYv5P%2Bj6R%2FmKOWVWuFvyPfiW79rzs4n7kWtGa41S2LFHIpzc7jpn5MI66c%2Bq8F2w04r5Ovbi8Y3ptP22pBDWqvUyDLaQxY3OlwX7MAzaOBEHQoCmgSIkEFSDVDs7l5L8vNIeaKsKy3YwgU2oHaNGEIv4k4Cn1xwaFePs6y2UWvPOGBNsek36sxCAOdnUdIkkqnDwRuq8DPIEyLuaFSLtK0Q1q3AIiWg7jVjGn4JAvFWp4yManzarLlAgt4fjJ7NyLC7y8x8BayUiNPF7LnJIJFk6diDCQM%2FvotM4PjUQYnObf1UaIOE7DQ4%2FmSXtVaez3cV%2F7Wq27zAzpd2Da3GpUr3D4uq5lWMO%2Fa2cMGOqUBTY%2BnSQz8jY196tKeMTJE%2FbyLOfNYlT9S9SAyvkmE0PezLy4rR%2FGG3CdIBnS%2Fv1FdhSIr%2FD34NHg5LczaPnRBFErgv16Teh3WkmVPB4XbtwBnqv4NEqM9VZLLfRuLgnVXJyDzvzFJ41w5aR6HOKz2g%2FBLPfTYMy0QpcRmhx%2BjxNPPJCPtKNCeVXRxdIoukWk0ldJamKjdGoVntVOP0W3ByDQPUDbc&X-Amz-Signature=f3bed998a0a4d920787545afa424307cf013a3d7f0113494eaf691797eaae2ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P45TCJG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBeyLa6DJY6INZrMGDtow4MIrKmIGpEDPLuKQX%2B%2BJK3bAiEA%2BljMMI3JkVTpMJmSNv7JEdiQcbu%2FzlP0jt1k1S9wGTAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPy3r9GIrg6mRP68PSrcA4tfyPc2%2FBn7Ijfu0PFAuN6hDvtlRLyaQpEcLA3%2BdPB43bN1LrjvZj%2F%2F2TO9UM38%2BOLv1iLdzV4JV9fwKX3zJlaip%2BMcV8o5ml%2BEajtc2Q9cTc74cpNqpNa8x7HxYBvVYnRdKQ2tSzyJ9%2BgE2db6j9VZRsVciq1veliHZhgzNyFzk6Ntfcnli%2F%2BtpWdzcFjzmeLWNW2h4%2BbAANfV6FRb3qAuoflaofZp5moJUUoVealPrDwLz7eqoEsGUa8szSB6q2R5pDE4Qqn4xN86%2B5ujXgXTnKrjwkdYv5P%2Bj6R%2FmKOWVWuFvyPfiW79rzs4n7kWtGa41S2LFHIpzc7jpn5MI66c%2Bq8F2w04r5Ovbi8Y3ptP22pBDWqvUyDLaQxY3OlwX7MAzaOBEHQoCmgSIkEFSDVDs7l5L8vNIeaKsKy3YwgU2oHaNGEIv4k4Cn1xwaFePs6y2UWvPOGBNsek36sxCAOdnUdIkkqnDwRuq8DPIEyLuaFSLtK0Q1q3AIiWg7jVjGn4JAvFWp4yManzarLlAgt4fjJ7NyLC7y8x8BayUiNPF7LnJIJFk6diDCQM%2FvotM4PjUQYnObf1UaIOE7DQ4%2FmSXtVaez3cV%2F7Wq27zAzpd2Da3GpUr3D4uq5lWMO%2Fa2cMGOqUBTY%2BnSQz8jY196tKeMTJE%2FbyLOfNYlT9S9SAyvkmE0PezLy4rR%2FGG3CdIBnS%2Fv1FdhSIr%2FD34NHg5LczaPnRBFErgv16Teh3WkmVPB4XbtwBnqv4NEqM9VZLLfRuLgnVXJyDzvzFJ41w5aR6HOKz2g%2FBLPfTYMy0QpcRmhx%2BjxNPPJCPtKNCeVXRxdIoukWk0ldJamKjdGoVntVOP0W3ByDQPUDbc&X-Amz-Signature=878845e8f98f1d7d477b43aaf6cdc5041bb2c56cc368b7cd733ecd20127ce3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P45TCJG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBeyLa6DJY6INZrMGDtow4MIrKmIGpEDPLuKQX%2B%2BJK3bAiEA%2BljMMI3JkVTpMJmSNv7JEdiQcbu%2FzlP0jt1k1S9wGTAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPy3r9GIrg6mRP68PSrcA4tfyPc2%2FBn7Ijfu0PFAuN6hDvtlRLyaQpEcLA3%2BdPB43bN1LrjvZj%2F%2F2TO9UM38%2BOLv1iLdzV4JV9fwKX3zJlaip%2BMcV8o5ml%2BEajtc2Q9cTc74cpNqpNa8x7HxYBvVYnRdKQ2tSzyJ9%2BgE2db6j9VZRsVciq1veliHZhgzNyFzk6Ntfcnli%2F%2BtpWdzcFjzmeLWNW2h4%2BbAANfV6FRb3qAuoflaofZp5moJUUoVealPrDwLz7eqoEsGUa8szSB6q2R5pDE4Qqn4xN86%2B5ujXgXTnKrjwkdYv5P%2Bj6R%2FmKOWVWuFvyPfiW79rzs4n7kWtGa41S2LFHIpzc7jpn5MI66c%2Bq8F2w04r5Ovbi8Y3ptP22pBDWqvUyDLaQxY3OlwX7MAzaOBEHQoCmgSIkEFSDVDs7l5L8vNIeaKsKy3YwgU2oHaNGEIv4k4Cn1xwaFePs6y2UWvPOGBNsek36sxCAOdnUdIkkqnDwRuq8DPIEyLuaFSLtK0Q1q3AIiWg7jVjGn4JAvFWp4yManzarLlAgt4fjJ7NyLC7y8x8BayUiNPF7LnJIJFk6diDCQM%2FvotM4PjUQYnObf1UaIOE7DQ4%2FmSXtVaez3cV%2F7Wq27zAzpd2Da3GpUr3D4uq5lWMO%2Fa2cMGOqUBTY%2BnSQz8jY196tKeMTJE%2FbyLOfNYlT9S9SAyvkmE0PezLy4rR%2FGG3CdIBnS%2Fv1FdhSIr%2FD34NHg5LczaPnRBFErgv16Teh3WkmVPB4XbtwBnqv4NEqM9VZLLfRuLgnVXJyDzvzFJ41w5aR6HOKz2g%2FBLPfTYMy0QpcRmhx%2BjxNPPJCPtKNCeVXRxdIoukWk0ldJamKjdGoVntVOP0W3ByDQPUDbc&X-Amz-Signature=8ec828e52543abbd98603503939e4524eb461918b336021bd36c141551c08e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P45TCJG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBeyLa6DJY6INZrMGDtow4MIrKmIGpEDPLuKQX%2B%2BJK3bAiEA%2BljMMI3JkVTpMJmSNv7JEdiQcbu%2FzlP0jt1k1S9wGTAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPy3r9GIrg6mRP68PSrcA4tfyPc2%2FBn7Ijfu0PFAuN6hDvtlRLyaQpEcLA3%2BdPB43bN1LrjvZj%2F%2F2TO9UM38%2BOLv1iLdzV4JV9fwKX3zJlaip%2BMcV8o5ml%2BEajtc2Q9cTc74cpNqpNa8x7HxYBvVYnRdKQ2tSzyJ9%2BgE2db6j9VZRsVciq1veliHZhgzNyFzk6Ntfcnli%2F%2BtpWdzcFjzmeLWNW2h4%2BbAANfV6FRb3qAuoflaofZp5moJUUoVealPrDwLz7eqoEsGUa8szSB6q2R5pDE4Qqn4xN86%2B5ujXgXTnKrjwkdYv5P%2Bj6R%2FmKOWVWuFvyPfiW79rzs4n7kWtGa41S2LFHIpzc7jpn5MI66c%2Bq8F2w04r5Ovbi8Y3ptP22pBDWqvUyDLaQxY3OlwX7MAzaOBEHQoCmgSIkEFSDVDs7l5L8vNIeaKsKy3YwgU2oHaNGEIv4k4Cn1xwaFePs6y2UWvPOGBNsek36sxCAOdnUdIkkqnDwRuq8DPIEyLuaFSLtK0Q1q3AIiWg7jVjGn4JAvFWp4yManzarLlAgt4fjJ7NyLC7y8x8BayUiNPF7LnJIJFk6diDCQM%2FvotM4PjUQYnObf1UaIOE7DQ4%2FmSXtVaez3cV%2F7Wq27zAzpd2Da3GpUr3D4uq5lWMO%2Fa2cMGOqUBTY%2BnSQz8jY196tKeMTJE%2FbyLOfNYlT9S9SAyvkmE0PezLy4rR%2FGG3CdIBnS%2Fv1FdhSIr%2FD34NHg5LczaPnRBFErgv16Teh3WkmVPB4XbtwBnqv4NEqM9VZLLfRuLgnVXJyDzvzFJ41w5aR6HOKz2g%2FBLPfTYMy0QpcRmhx%2BjxNPPJCPtKNCeVXRxdIoukWk0ldJamKjdGoVntVOP0W3ByDQPUDbc&X-Amz-Signature=b4b10debb82c61e9b348c0f7ae08d3f0c1559cd2f235cd06e4401015b38f5cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P45TCJG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBeyLa6DJY6INZrMGDtow4MIrKmIGpEDPLuKQX%2B%2BJK3bAiEA%2BljMMI3JkVTpMJmSNv7JEdiQcbu%2FzlP0jt1k1S9wGTAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPy3r9GIrg6mRP68PSrcA4tfyPc2%2FBn7Ijfu0PFAuN6hDvtlRLyaQpEcLA3%2BdPB43bN1LrjvZj%2F%2F2TO9UM38%2BOLv1iLdzV4JV9fwKX3zJlaip%2BMcV8o5ml%2BEajtc2Q9cTc74cpNqpNa8x7HxYBvVYnRdKQ2tSzyJ9%2BgE2db6j9VZRsVciq1veliHZhgzNyFzk6Ntfcnli%2F%2BtpWdzcFjzmeLWNW2h4%2BbAANfV6FRb3qAuoflaofZp5moJUUoVealPrDwLz7eqoEsGUa8szSB6q2R5pDE4Qqn4xN86%2B5ujXgXTnKrjwkdYv5P%2Bj6R%2FmKOWVWuFvyPfiW79rzs4n7kWtGa41S2LFHIpzc7jpn5MI66c%2Bq8F2w04r5Ovbi8Y3ptP22pBDWqvUyDLaQxY3OlwX7MAzaOBEHQoCmgSIkEFSDVDs7l5L8vNIeaKsKy3YwgU2oHaNGEIv4k4Cn1xwaFePs6y2UWvPOGBNsek36sxCAOdnUdIkkqnDwRuq8DPIEyLuaFSLtK0Q1q3AIiWg7jVjGn4JAvFWp4yManzarLlAgt4fjJ7NyLC7y8x8BayUiNPF7LnJIJFk6diDCQM%2FvotM4PjUQYnObf1UaIOE7DQ4%2FmSXtVaez3cV%2F7Wq27zAzpd2Da3GpUr3D4uq5lWMO%2Fa2cMGOqUBTY%2BnSQz8jY196tKeMTJE%2FbyLOfNYlT9S9SAyvkmE0PezLy4rR%2FGG3CdIBnS%2Fv1FdhSIr%2FD34NHg5LczaPnRBFErgv16Teh3WkmVPB4XbtwBnqv4NEqM9VZLLfRuLgnVXJyDzvzFJ41w5aR6HOKz2g%2FBLPfTYMy0QpcRmhx%2BjxNPPJCPtKNCeVXRxdIoukWk0ldJamKjdGoVntVOP0W3ByDQPUDbc&X-Amz-Signature=b43f9936f19b531aa8c57bec7d52358fda0021c5a10a01f73d911768dad94471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P45TCJG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBeyLa6DJY6INZrMGDtow4MIrKmIGpEDPLuKQX%2B%2BJK3bAiEA%2BljMMI3JkVTpMJmSNv7JEdiQcbu%2FzlP0jt1k1S9wGTAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPy3r9GIrg6mRP68PSrcA4tfyPc2%2FBn7Ijfu0PFAuN6hDvtlRLyaQpEcLA3%2BdPB43bN1LrjvZj%2F%2F2TO9UM38%2BOLv1iLdzV4JV9fwKX3zJlaip%2BMcV8o5ml%2BEajtc2Q9cTc74cpNqpNa8x7HxYBvVYnRdKQ2tSzyJ9%2BgE2db6j9VZRsVciq1veliHZhgzNyFzk6Ntfcnli%2F%2BtpWdzcFjzmeLWNW2h4%2BbAANfV6FRb3qAuoflaofZp5moJUUoVealPrDwLz7eqoEsGUa8szSB6q2R5pDE4Qqn4xN86%2B5ujXgXTnKrjwkdYv5P%2Bj6R%2FmKOWVWuFvyPfiW79rzs4n7kWtGa41S2LFHIpzc7jpn5MI66c%2Bq8F2w04r5Ovbi8Y3ptP22pBDWqvUyDLaQxY3OlwX7MAzaOBEHQoCmgSIkEFSDVDs7l5L8vNIeaKsKy3YwgU2oHaNGEIv4k4Cn1xwaFePs6y2UWvPOGBNsek36sxCAOdnUdIkkqnDwRuq8DPIEyLuaFSLtK0Q1q3AIiWg7jVjGn4JAvFWp4yManzarLlAgt4fjJ7NyLC7y8x8BayUiNPF7LnJIJFk6diDCQM%2FvotM4PjUQYnObf1UaIOE7DQ4%2FmSXtVaez3cV%2F7Wq27zAzpd2Da3GpUr3D4uq5lWMO%2Fa2cMGOqUBTY%2BnSQz8jY196tKeMTJE%2FbyLOfNYlT9S9SAyvkmE0PezLy4rR%2FGG3CdIBnS%2Fv1FdhSIr%2FD34NHg5LczaPnRBFErgv16Teh3WkmVPB4XbtwBnqv4NEqM9VZLLfRuLgnVXJyDzvzFJ41w5aR6HOKz2g%2FBLPfTYMy0QpcRmhx%2BjxNPPJCPtKNCeVXRxdIoukWk0ldJamKjdGoVntVOP0W3ByDQPUDbc&X-Amz-Signature=2cfa78b0f2e97b6e2f6967f8a9ebd8a5f201a36bb8a4455eb5c4aa4c6015bcc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P45TCJG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBeyLa6DJY6INZrMGDtow4MIrKmIGpEDPLuKQX%2B%2BJK3bAiEA%2BljMMI3JkVTpMJmSNv7JEdiQcbu%2FzlP0jt1k1S9wGTAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPy3r9GIrg6mRP68PSrcA4tfyPc2%2FBn7Ijfu0PFAuN6hDvtlRLyaQpEcLA3%2BdPB43bN1LrjvZj%2F%2F2TO9UM38%2BOLv1iLdzV4JV9fwKX3zJlaip%2BMcV8o5ml%2BEajtc2Q9cTc74cpNqpNa8x7HxYBvVYnRdKQ2tSzyJ9%2BgE2db6j9VZRsVciq1veliHZhgzNyFzk6Ntfcnli%2F%2BtpWdzcFjzmeLWNW2h4%2BbAANfV6FRb3qAuoflaofZp5moJUUoVealPrDwLz7eqoEsGUa8szSB6q2R5pDE4Qqn4xN86%2B5ujXgXTnKrjwkdYv5P%2Bj6R%2FmKOWVWuFvyPfiW79rzs4n7kWtGa41S2LFHIpzc7jpn5MI66c%2Bq8F2w04r5Ovbi8Y3ptP22pBDWqvUyDLaQxY3OlwX7MAzaOBEHQoCmgSIkEFSDVDs7l5L8vNIeaKsKy3YwgU2oHaNGEIv4k4Cn1xwaFePs6y2UWvPOGBNsek36sxCAOdnUdIkkqnDwRuq8DPIEyLuaFSLtK0Q1q3AIiWg7jVjGn4JAvFWp4yManzarLlAgt4fjJ7NyLC7y8x8BayUiNPF7LnJIJFk6diDCQM%2FvotM4PjUQYnObf1UaIOE7DQ4%2FmSXtVaez3cV%2F7Wq27zAzpd2Da3GpUr3D4uq5lWMO%2Fa2cMGOqUBTY%2BnSQz8jY196tKeMTJE%2FbyLOfNYlT9S9SAyvkmE0PezLy4rR%2FGG3CdIBnS%2Fv1FdhSIr%2FD34NHg5LczaPnRBFErgv16Teh3WkmVPB4XbtwBnqv4NEqM9VZLLfRuLgnVXJyDzvzFJ41w5aR6HOKz2g%2FBLPfTYMy0QpcRmhx%2BjxNPPJCPtKNCeVXRxdIoukWk0ldJamKjdGoVntVOP0W3ByDQPUDbc&X-Amz-Signature=a82001dd80e2cbe554591d6e1e5c2d43de9650dd818d9222afd7e953cb47e85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P45TCJG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBeyLa6DJY6INZrMGDtow4MIrKmIGpEDPLuKQX%2B%2BJK3bAiEA%2BljMMI3JkVTpMJmSNv7JEdiQcbu%2FzlP0jt1k1S9wGTAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPy3r9GIrg6mRP68PSrcA4tfyPc2%2FBn7Ijfu0PFAuN6hDvtlRLyaQpEcLA3%2BdPB43bN1LrjvZj%2F%2F2TO9UM38%2BOLv1iLdzV4JV9fwKX3zJlaip%2BMcV8o5ml%2BEajtc2Q9cTc74cpNqpNa8x7HxYBvVYnRdKQ2tSzyJ9%2BgE2db6j9VZRsVciq1veliHZhgzNyFzk6Ntfcnli%2F%2BtpWdzcFjzmeLWNW2h4%2BbAANfV6FRb3qAuoflaofZp5moJUUoVealPrDwLz7eqoEsGUa8szSB6q2R5pDE4Qqn4xN86%2B5ujXgXTnKrjwkdYv5P%2Bj6R%2FmKOWVWuFvyPfiW79rzs4n7kWtGa41S2LFHIpzc7jpn5MI66c%2Bq8F2w04r5Ovbi8Y3ptP22pBDWqvUyDLaQxY3OlwX7MAzaOBEHQoCmgSIkEFSDVDs7l5L8vNIeaKsKy3YwgU2oHaNGEIv4k4Cn1xwaFePs6y2UWvPOGBNsek36sxCAOdnUdIkkqnDwRuq8DPIEyLuaFSLtK0Q1q3AIiWg7jVjGn4JAvFWp4yManzarLlAgt4fjJ7NyLC7y8x8BayUiNPF7LnJIJFk6diDCQM%2FvotM4PjUQYnObf1UaIOE7DQ4%2FmSXtVaez3cV%2F7Wq27zAzpd2Da3GpUr3D4uq5lWMO%2Fa2cMGOqUBTY%2BnSQz8jY196tKeMTJE%2FbyLOfNYlT9S9SAyvkmE0PezLy4rR%2FGG3CdIBnS%2Fv1FdhSIr%2FD34NHg5LczaPnRBFErgv16Teh3WkmVPB4XbtwBnqv4NEqM9VZLLfRuLgnVXJyDzvzFJ41w5aR6HOKz2g%2FBLPfTYMy0QpcRmhx%2BjxNPPJCPtKNCeVXRxdIoukWk0ldJamKjdGoVntVOP0W3ByDQPUDbc&X-Amz-Signature=814820ef0b9a9043e8f5be94c95d72a0f433485d87dd5cbc0f04a2f43b06f82a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
