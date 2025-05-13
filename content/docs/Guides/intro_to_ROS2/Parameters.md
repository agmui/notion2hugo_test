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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDP2M2RP%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEKZgtJzTv7O7g7ko1HR9A6HPzImznn0e4vWiLGzEE44AiEA3hBLG4qhFAQuwUSM2lieIE9EEOjxEUxB5JHOJgKu1IQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlbUwyhM%2BuhqS8DeyrcAygd8nR7dD%2BqQlvaXLWbQLK868l2GT1XFDCbIURE9ZhLWRDgnfnEnuHT1%2B6oXgxq95kF1KIBQI3%2BdMOmgUgKlwK%2FmTuXcUILcHNpSW8T39X6p3I2WgzghMx%2FPYHHxV2gD%2B%2FqTi3ltBBQ8s6YfZfyGYUk5Yz13C0c1N0MBIUeaBb6n2iP%2FW0jGESXbA6OtoDL83ejqN2sRQaPnA1kYcub2CFGD90YJofLNQLxyRI6jW1HDl51sc%2B6h%2BzYPQy8H24TflTk6ETzs4WDDDISGhUII6WVso4H1XBgTRI7HBDL2D%2BEl0kdnYHQYUitcLF9Qty28Jo1VkgS%2B5aYTcX1Upvew2Rcn6i4VyuZmPgCtWjLRTnnEQinTSxp6pKOVA6HX3KF2sccFzwf45rKZsjzEKSnSzN2%2BhQtaolzL4%2F9JpTwvL2XIWtf%2BuOg4FOF4BYyL%2B4DdGaGHx%2BHNce9bvo4eoYovfTIxNWzqILQyFxD4joGXf2gEaOXT%2Bsn%2F3L2g8unoWEnvX4L8u24CVRyzog2lpt0qF%2BuFd6rescnEMud%2BDBDTbnqK63ul9kmhCq4CNHM8AmEDyw%2BKgWMJb61Jg8p31UM71CqJTHu%2FT%2FESsGVPBuyH9wfHXCRHMFJUgk5Zd3aMLr3isEGOqUBYqAfl8JOFtTf00aRXp7vWV8a9Th7%2BZsUhSDY2MeyLrL99It9sxVPKk62i6BBAX5K4WPRXbiHjbrHmCXIB8xhMwTw%2Ff1Oz2Q79RQfRN%2BDGDPLEf1x4rN4JFMnhWSOXR3BgoqUwQIdA59sm4QU2fBBMrBJBSBpMwSH%2FhEYX8z1QpFwI%2FagI0w1Wbe4iUz1rZ14g9igdrjTxNvRITpf3xtUv18%2Ba88q&X-Amz-Signature=203c70a5147ba849e6a3554ef9f505ee9c463eb6a7b926c5fefa4af093d0f02d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
