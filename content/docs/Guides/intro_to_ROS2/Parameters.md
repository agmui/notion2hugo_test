---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWKPBXIP%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIQDJGnjZS97VrhGhRSOzFB2Mf9NgAmxN153VfCD%2F2MmmXAIfJ0SG9jT%2F2%2BKfiIReCK3UJ80v2GABrZIyfRmHgMa2fyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM7TBlIhPnlwHpIzs%2FKtwDNJo%2BuSBtlDlmo3HBFmbH1x7sbY%2F3oDIs38v3aDlWxnBrrx6%2B8Aq1rzI%2FRc6xN3copngiFNx%2ByejvMKmV%2B5K%2BBEBH1yxULd7%2FZxkJ2R3J33%2FzkDW9C2mh8XG9iuJ%2BeOppc4U0AVdySW%2FxLhymHVS4x1QTKKDh5cM23cgrZnKDH%2Bdbw1c4TgCVzrDRmzeSxSteb5k6xJw%2Fr%2BZQBZKjY2dGyHHV4IOSdm%2By%2FeRACndxveVJIz%2FeB1%2F9%2BI7GJNlmCpYQDvCRMsntURXkGz2JsUi%2BNodc1o16HaqMpoOoqEMA0guhyuRt0%2B%2FSuu1O1VpvO7KC%2BE4k%2BI8JI55XP26DQG6AZ%2FZPoE7qtS4TnztoS6wWDt6q5mKfYGq1ztfnDgtaqricy2bcFE2FlLsWRMPz0MzHYEmovo3Gi6KA29XCcmD37Izp3uEen65%2BrgO8U1di9AwXAXMvi7%2BqvAhQe3J9IFJP0mMrOSDI8hMCxMQ2DTp1riJmjWWmBCB3OW55PXjgoFXxti1xa5JU8BNRaOpRZkSAWXcCWeFDfFlwmdsG9daNlgrsbOCgZluRxLqZnKXtWffmIOALGxd333G3g0TPTqZoBVeQD6M%2Bh%2FlKmjMziszqbnv13peuaD4ICzJnmQ4wqMjJvQY6pgEnrk7XCmB%2B3u%2F08uMYXQRrG5rDRMLlxmHIHEK8c74LokjSW6oskzLxMwluLBZDPV58BMUgtKRqUwBidJ6EuD7%2BBJSgYnie3Aa3eRNJLcJURnhHKLb531FAkd5pxnpr2bOZxiuLoNLkPVKCWyphNvjg27sR%2BiQHv%2BFxCNIG7Ccykewv1C0jecMp4dTsmFcwcRy5rSdBf0Tsglo0kS0V5sYJ2QXyp%2FEu&X-Amz-Signature=c51a63d72c2a1305ebf27277ba599de9c8b8b19a0995c78b7a7a44be610cc005&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
