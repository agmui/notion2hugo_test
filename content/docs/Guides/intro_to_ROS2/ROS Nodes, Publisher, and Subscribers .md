---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJ723BE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCYLI6szHWDKA0WNbGzSHdI2tArk1n%2FC0PZuZLDZmF1EwIgIFgJnrI5FhknkBjvISPFVvUQ07JVOb16NU7k2%2FiqQQUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtSCVfaYMKywA5%2BtCrcAzizaCF5gVA8hj8T0hN5x0G%2Fwlk%2BT%2Bk7w7%2B2cMuQ3ttktaRy3sRZn9VDWXU3SnHqh%2BHe34uizSrRJmOV%2Fdlx1Scgobj5fPGK%2BUyl3aC0wzaoqwUehwrLeFIaLDdMcGhoGz77QNjM%2BfBwMN1vjVfttvkovMC5x6PFeqEghGVltG5QQ9jSuBvx3M5Ruzs1sl93Em1kIJMSq58um4ie6FRiIU0Go2rX6iVxk5AxmssRfDk9EFsaUKyZ3ZflqVczZ4eay5dPFQvPmoZ%2Bjz0SqdKMNSWlbMn9MywZLA%2F8rYxk%2BOW8thi70G%2BKVOQNYSWecsw0E%2BkWuKW3DX6sIkYdl1L6V5xV1x5fJ233pmWOGrps6gLnaOEeWxVwiSqWTC1j7z52DEqiFosSLw5SvS27T2Wi5ajU0KaZhm209oln64JkwFknmuamEbyNs4dpLxcB8HcG6%2B1e3ntCbokZjG46kLsmlFaKI9%2B%2BygHSe%2Bahhc2Ft59ZmvDrp6oFcv2tZAiKQQJxCO1a5qq%2F8I6UkWRkTY69Zs3n2tFGchuZvQ6OBqsJYkexWUq058lg7ppjTOWCljV9YOxu5yBk88Wbp5MG%2Fi%2FQTVK9NvtUPx2nBl5QEXgRBl5usBR5iNOZBqX74hwWMKiS2cQGOqUBqB5oeTb%2FtBOdaa2fA%2FlkLhAHkm6cHbLCsUbT2beb6MzTW6tfBSHP9eg890%2FVPCwPZS7jl8ethFgglN4l4Y4jwfzY4UGV8ONyvNo0d7g3KP17e6I7YLlilMgJMsYrpev%2B2yyvt0Jxs6v0Kw0YL4Nbk82vxZ30CTjLSS5uFXuYPhwPsZ1GixGkXfah7RJLdxfAcQicYieanMO3s%2FKsFZ41eaVsz2J2&X-Amz-Signature=f38d0f66414ca0fa0337f2c39b900e6b61d8f3bd9fa84e3dfc2b32b1c492477c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJ723BE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCYLI6szHWDKA0WNbGzSHdI2tArk1n%2FC0PZuZLDZmF1EwIgIFgJnrI5FhknkBjvISPFVvUQ07JVOb16NU7k2%2FiqQQUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtSCVfaYMKywA5%2BtCrcAzizaCF5gVA8hj8T0hN5x0G%2Fwlk%2BT%2Bk7w7%2B2cMuQ3ttktaRy3sRZn9VDWXU3SnHqh%2BHe34uizSrRJmOV%2Fdlx1Scgobj5fPGK%2BUyl3aC0wzaoqwUehwrLeFIaLDdMcGhoGz77QNjM%2BfBwMN1vjVfttvkovMC5x6PFeqEghGVltG5QQ9jSuBvx3M5Ruzs1sl93Em1kIJMSq58um4ie6FRiIU0Go2rX6iVxk5AxmssRfDk9EFsaUKyZ3ZflqVczZ4eay5dPFQvPmoZ%2Bjz0SqdKMNSWlbMn9MywZLA%2F8rYxk%2BOW8thi70G%2BKVOQNYSWecsw0E%2BkWuKW3DX6sIkYdl1L6V5xV1x5fJ233pmWOGrps6gLnaOEeWxVwiSqWTC1j7z52DEqiFosSLw5SvS27T2Wi5ajU0KaZhm209oln64JkwFknmuamEbyNs4dpLxcB8HcG6%2B1e3ntCbokZjG46kLsmlFaKI9%2B%2BygHSe%2Bahhc2Ft59ZmvDrp6oFcv2tZAiKQQJxCO1a5qq%2F8I6UkWRkTY69Zs3n2tFGchuZvQ6OBqsJYkexWUq058lg7ppjTOWCljV9YOxu5yBk88Wbp5MG%2Fi%2FQTVK9NvtUPx2nBl5QEXgRBl5usBR5iNOZBqX74hwWMKiS2cQGOqUBqB5oeTb%2FtBOdaa2fA%2FlkLhAHkm6cHbLCsUbT2beb6MzTW6tfBSHP9eg890%2FVPCwPZS7jl8ethFgglN4l4Y4jwfzY4UGV8ONyvNo0d7g3KP17e6I7YLlilMgJMsYrpev%2B2yyvt0Jxs6v0Kw0YL4Nbk82vxZ30CTjLSS5uFXuYPhwPsZ1GixGkXfah7RJLdxfAcQicYieanMO3s%2FKsFZ41eaVsz2J2&X-Amz-Signature=c39eacd2f9879749b994ee5899b2190fb0abba52c07946daba3d8054cf6ed687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJ723BE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCYLI6szHWDKA0WNbGzSHdI2tArk1n%2FC0PZuZLDZmF1EwIgIFgJnrI5FhknkBjvISPFVvUQ07JVOb16NU7k2%2FiqQQUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtSCVfaYMKywA5%2BtCrcAzizaCF5gVA8hj8T0hN5x0G%2Fwlk%2BT%2Bk7w7%2B2cMuQ3ttktaRy3sRZn9VDWXU3SnHqh%2BHe34uizSrRJmOV%2Fdlx1Scgobj5fPGK%2BUyl3aC0wzaoqwUehwrLeFIaLDdMcGhoGz77QNjM%2BfBwMN1vjVfttvkovMC5x6PFeqEghGVltG5QQ9jSuBvx3M5Ruzs1sl93Em1kIJMSq58um4ie6FRiIU0Go2rX6iVxk5AxmssRfDk9EFsaUKyZ3ZflqVczZ4eay5dPFQvPmoZ%2Bjz0SqdKMNSWlbMn9MywZLA%2F8rYxk%2BOW8thi70G%2BKVOQNYSWecsw0E%2BkWuKW3DX6sIkYdl1L6V5xV1x5fJ233pmWOGrps6gLnaOEeWxVwiSqWTC1j7z52DEqiFosSLw5SvS27T2Wi5ajU0KaZhm209oln64JkwFknmuamEbyNs4dpLxcB8HcG6%2B1e3ntCbokZjG46kLsmlFaKI9%2B%2BygHSe%2Bahhc2Ft59ZmvDrp6oFcv2tZAiKQQJxCO1a5qq%2F8I6UkWRkTY69Zs3n2tFGchuZvQ6OBqsJYkexWUq058lg7ppjTOWCljV9YOxu5yBk88Wbp5MG%2Fi%2FQTVK9NvtUPx2nBl5QEXgRBl5usBR5iNOZBqX74hwWMKiS2cQGOqUBqB5oeTb%2FtBOdaa2fA%2FlkLhAHkm6cHbLCsUbT2beb6MzTW6tfBSHP9eg890%2FVPCwPZS7jl8ethFgglN4l4Y4jwfzY4UGV8ONyvNo0d7g3KP17e6I7YLlilMgJMsYrpev%2B2yyvt0Jxs6v0Kw0YL4Nbk82vxZ30CTjLSS5uFXuYPhwPsZ1GixGkXfah7RJLdxfAcQicYieanMO3s%2FKsFZ41eaVsz2J2&X-Amz-Signature=de90ed54b3d0a22b51950624299566d8f256a9bbdf3f7d26bd5831362dde91f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJ723BE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCYLI6szHWDKA0WNbGzSHdI2tArk1n%2FC0PZuZLDZmF1EwIgIFgJnrI5FhknkBjvISPFVvUQ07JVOb16NU7k2%2FiqQQUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtSCVfaYMKywA5%2BtCrcAzizaCF5gVA8hj8T0hN5x0G%2Fwlk%2BT%2Bk7w7%2B2cMuQ3ttktaRy3sRZn9VDWXU3SnHqh%2BHe34uizSrRJmOV%2Fdlx1Scgobj5fPGK%2BUyl3aC0wzaoqwUehwrLeFIaLDdMcGhoGz77QNjM%2BfBwMN1vjVfttvkovMC5x6PFeqEghGVltG5QQ9jSuBvx3M5Ruzs1sl93Em1kIJMSq58um4ie6FRiIU0Go2rX6iVxk5AxmssRfDk9EFsaUKyZ3ZflqVczZ4eay5dPFQvPmoZ%2Bjz0SqdKMNSWlbMn9MywZLA%2F8rYxk%2BOW8thi70G%2BKVOQNYSWecsw0E%2BkWuKW3DX6sIkYdl1L6V5xV1x5fJ233pmWOGrps6gLnaOEeWxVwiSqWTC1j7z52DEqiFosSLw5SvS27T2Wi5ajU0KaZhm209oln64JkwFknmuamEbyNs4dpLxcB8HcG6%2B1e3ntCbokZjG46kLsmlFaKI9%2B%2BygHSe%2Bahhc2Ft59ZmvDrp6oFcv2tZAiKQQJxCO1a5qq%2F8I6UkWRkTY69Zs3n2tFGchuZvQ6OBqsJYkexWUq058lg7ppjTOWCljV9YOxu5yBk88Wbp5MG%2Fi%2FQTVK9NvtUPx2nBl5QEXgRBl5usBR5iNOZBqX74hwWMKiS2cQGOqUBqB5oeTb%2FtBOdaa2fA%2FlkLhAHkm6cHbLCsUbT2beb6MzTW6tfBSHP9eg890%2FVPCwPZS7jl8ethFgglN4l4Y4jwfzY4UGV8ONyvNo0d7g3KP17e6I7YLlilMgJMsYrpev%2B2yyvt0Jxs6v0Kw0YL4Nbk82vxZ30CTjLSS5uFXuYPhwPsZ1GixGkXfah7RJLdxfAcQicYieanMO3s%2FKsFZ41eaVsz2J2&X-Amz-Signature=a4f1bd7aca8f8425cd28c0ea41d793c1505b4d0adce7223c2079b1e4e4ccd35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJ723BE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCYLI6szHWDKA0WNbGzSHdI2tArk1n%2FC0PZuZLDZmF1EwIgIFgJnrI5FhknkBjvISPFVvUQ07JVOb16NU7k2%2FiqQQUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtSCVfaYMKywA5%2BtCrcAzizaCF5gVA8hj8T0hN5x0G%2Fwlk%2BT%2Bk7w7%2B2cMuQ3ttktaRy3sRZn9VDWXU3SnHqh%2BHe34uizSrRJmOV%2Fdlx1Scgobj5fPGK%2BUyl3aC0wzaoqwUehwrLeFIaLDdMcGhoGz77QNjM%2BfBwMN1vjVfttvkovMC5x6PFeqEghGVltG5QQ9jSuBvx3M5Ruzs1sl93Em1kIJMSq58um4ie6FRiIU0Go2rX6iVxk5AxmssRfDk9EFsaUKyZ3ZflqVczZ4eay5dPFQvPmoZ%2Bjz0SqdKMNSWlbMn9MywZLA%2F8rYxk%2BOW8thi70G%2BKVOQNYSWecsw0E%2BkWuKW3DX6sIkYdl1L6V5xV1x5fJ233pmWOGrps6gLnaOEeWxVwiSqWTC1j7z52DEqiFosSLw5SvS27T2Wi5ajU0KaZhm209oln64JkwFknmuamEbyNs4dpLxcB8HcG6%2B1e3ntCbokZjG46kLsmlFaKI9%2B%2BygHSe%2Bahhc2Ft59ZmvDrp6oFcv2tZAiKQQJxCO1a5qq%2F8I6UkWRkTY69Zs3n2tFGchuZvQ6OBqsJYkexWUq058lg7ppjTOWCljV9YOxu5yBk88Wbp5MG%2Fi%2FQTVK9NvtUPx2nBl5QEXgRBl5usBR5iNOZBqX74hwWMKiS2cQGOqUBqB5oeTb%2FtBOdaa2fA%2FlkLhAHkm6cHbLCsUbT2beb6MzTW6tfBSHP9eg890%2FVPCwPZS7jl8ethFgglN4l4Y4jwfzY4UGV8ONyvNo0d7g3KP17e6I7YLlilMgJMsYrpev%2B2yyvt0Jxs6v0Kw0YL4Nbk82vxZ30CTjLSS5uFXuYPhwPsZ1GixGkXfah7RJLdxfAcQicYieanMO3s%2FKsFZ41eaVsz2J2&X-Amz-Signature=6472467df79e17db24f43eb1856f7aeaa07ddcafe35f7fc9850065f77e8cccff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJ723BE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCYLI6szHWDKA0WNbGzSHdI2tArk1n%2FC0PZuZLDZmF1EwIgIFgJnrI5FhknkBjvISPFVvUQ07JVOb16NU7k2%2FiqQQUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtSCVfaYMKywA5%2BtCrcAzizaCF5gVA8hj8T0hN5x0G%2Fwlk%2BT%2Bk7w7%2B2cMuQ3ttktaRy3sRZn9VDWXU3SnHqh%2BHe34uizSrRJmOV%2Fdlx1Scgobj5fPGK%2BUyl3aC0wzaoqwUehwrLeFIaLDdMcGhoGz77QNjM%2BfBwMN1vjVfttvkovMC5x6PFeqEghGVltG5QQ9jSuBvx3M5Ruzs1sl93Em1kIJMSq58um4ie6FRiIU0Go2rX6iVxk5AxmssRfDk9EFsaUKyZ3ZflqVczZ4eay5dPFQvPmoZ%2Bjz0SqdKMNSWlbMn9MywZLA%2F8rYxk%2BOW8thi70G%2BKVOQNYSWecsw0E%2BkWuKW3DX6sIkYdl1L6V5xV1x5fJ233pmWOGrps6gLnaOEeWxVwiSqWTC1j7z52DEqiFosSLw5SvS27T2Wi5ajU0KaZhm209oln64JkwFknmuamEbyNs4dpLxcB8HcG6%2B1e3ntCbokZjG46kLsmlFaKI9%2B%2BygHSe%2Bahhc2Ft59ZmvDrp6oFcv2tZAiKQQJxCO1a5qq%2F8I6UkWRkTY69Zs3n2tFGchuZvQ6OBqsJYkexWUq058lg7ppjTOWCljV9YOxu5yBk88Wbp5MG%2Fi%2FQTVK9NvtUPx2nBl5QEXgRBl5usBR5iNOZBqX74hwWMKiS2cQGOqUBqB5oeTb%2FtBOdaa2fA%2FlkLhAHkm6cHbLCsUbT2beb6MzTW6tfBSHP9eg890%2FVPCwPZS7jl8ethFgglN4l4Y4jwfzY4UGV8ONyvNo0d7g3KP17e6I7YLlilMgJMsYrpev%2B2yyvt0Jxs6v0Kw0YL4Nbk82vxZ30CTjLSS5uFXuYPhwPsZ1GixGkXfah7RJLdxfAcQicYieanMO3s%2FKsFZ41eaVsz2J2&X-Amz-Signature=6d6b6d20e810bd38dab72ac120dcc244228686817eeb294f5964e32e098b2ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJ723BE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCYLI6szHWDKA0WNbGzSHdI2tArk1n%2FC0PZuZLDZmF1EwIgIFgJnrI5FhknkBjvISPFVvUQ07JVOb16NU7k2%2FiqQQUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtSCVfaYMKywA5%2BtCrcAzizaCF5gVA8hj8T0hN5x0G%2Fwlk%2BT%2Bk7w7%2B2cMuQ3ttktaRy3sRZn9VDWXU3SnHqh%2BHe34uizSrRJmOV%2Fdlx1Scgobj5fPGK%2BUyl3aC0wzaoqwUehwrLeFIaLDdMcGhoGz77QNjM%2BfBwMN1vjVfttvkovMC5x6PFeqEghGVltG5QQ9jSuBvx3M5Ruzs1sl93Em1kIJMSq58um4ie6FRiIU0Go2rX6iVxk5AxmssRfDk9EFsaUKyZ3ZflqVczZ4eay5dPFQvPmoZ%2Bjz0SqdKMNSWlbMn9MywZLA%2F8rYxk%2BOW8thi70G%2BKVOQNYSWecsw0E%2BkWuKW3DX6sIkYdl1L6V5xV1x5fJ233pmWOGrps6gLnaOEeWxVwiSqWTC1j7z52DEqiFosSLw5SvS27T2Wi5ajU0KaZhm209oln64JkwFknmuamEbyNs4dpLxcB8HcG6%2B1e3ntCbokZjG46kLsmlFaKI9%2B%2BygHSe%2Bahhc2Ft59ZmvDrp6oFcv2tZAiKQQJxCO1a5qq%2F8I6UkWRkTY69Zs3n2tFGchuZvQ6OBqsJYkexWUq058lg7ppjTOWCljV9YOxu5yBk88Wbp5MG%2Fi%2FQTVK9NvtUPx2nBl5QEXgRBl5usBR5iNOZBqX74hwWMKiS2cQGOqUBqB5oeTb%2FtBOdaa2fA%2FlkLhAHkm6cHbLCsUbT2beb6MzTW6tfBSHP9eg890%2FVPCwPZS7jl8ethFgglN4l4Y4jwfzY4UGV8ONyvNo0d7g3KP17e6I7YLlilMgJMsYrpev%2B2yyvt0Jxs6v0Kw0YL4Nbk82vxZ30CTjLSS5uFXuYPhwPsZ1GixGkXfah7RJLdxfAcQicYieanMO3s%2FKsFZ41eaVsz2J2&X-Amz-Signature=0a685c868cc16cff170e831ba35bdf0e0bac53008c367b1d1b4910cca62cb888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJ723BE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCYLI6szHWDKA0WNbGzSHdI2tArk1n%2FC0PZuZLDZmF1EwIgIFgJnrI5FhknkBjvISPFVvUQ07JVOb16NU7k2%2FiqQQUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtSCVfaYMKywA5%2BtCrcAzizaCF5gVA8hj8T0hN5x0G%2Fwlk%2BT%2Bk7w7%2B2cMuQ3ttktaRy3sRZn9VDWXU3SnHqh%2BHe34uizSrRJmOV%2Fdlx1Scgobj5fPGK%2BUyl3aC0wzaoqwUehwrLeFIaLDdMcGhoGz77QNjM%2BfBwMN1vjVfttvkovMC5x6PFeqEghGVltG5QQ9jSuBvx3M5Ruzs1sl93Em1kIJMSq58um4ie6FRiIU0Go2rX6iVxk5AxmssRfDk9EFsaUKyZ3ZflqVczZ4eay5dPFQvPmoZ%2Bjz0SqdKMNSWlbMn9MywZLA%2F8rYxk%2BOW8thi70G%2BKVOQNYSWecsw0E%2BkWuKW3DX6sIkYdl1L6V5xV1x5fJ233pmWOGrps6gLnaOEeWxVwiSqWTC1j7z52DEqiFosSLw5SvS27T2Wi5ajU0KaZhm209oln64JkwFknmuamEbyNs4dpLxcB8HcG6%2B1e3ntCbokZjG46kLsmlFaKI9%2B%2BygHSe%2Bahhc2Ft59ZmvDrp6oFcv2tZAiKQQJxCO1a5qq%2F8I6UkWRkTY69Zs3n2tFGchuZvQ6OBqsJYkexWUq058lg7ppjTOWCljV9YOxu5yBk88Wbp5MG%2Fi%2FQTVK9NvtUPx2nBl5QEXgRBl5usBR5iNOZBqX74hwWMKiS2cQGOqUBqB5oeTb%2FtBOdaa2fA%2FlkLhAHkm6cHbLCsUbT2beb6MzTW6tfBSHP9eg890%2FVPCwPZS7jl8ethFgglN4l4Y4jwfzY4UGV8ONyvNo0d7g3KP17e6I7YLlilMgJMsYrpev%2B2yyvt0Jxs6v0Kw0YL4Nbk82vxZ30CTjLSS5uFXuYPhwPsZ1GixGkXfah7RJLdxfAcQicYieanMO3s%2FKsFZ41eaVsz2J2&X-Amz-Signature=26c8f19a4259e9a468175e7ca9c041a89ae7475320b0661aa2bf966e0b5f839e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
