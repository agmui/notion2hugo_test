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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5XGM74K%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZFIfhYWNSvziE6PPTa7kePYIDXWdH77frWKQrvT0N0gIhAKYYYR%2BsqWissTCuSgFG8K7yPO344luBcB6RT7CFoyGaKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4TziFz0GcCtwdSwMq3ANS3eQB2cg3RAoIW4oCqQDeYihVHdu77T7DMJX7KpGWkIiXmR65xnWwsYr2YtLksDgRiEhpqgMZ2FYbkI1EEDC93JXHX%2FesPRFrBJUrJ7SiIRQUlFKnQ8H17PeCb%2BMaxmstP4VcnfZp9w1X2F1SC6n6Sqasvx8WkzYl1Xh2WlE4gPXF2EvLni3iYd%2Bk61L%2FTGg2kfGQTJn052JjLmQWva%2BERB5e5bgeYync0BWWnZJJrIIFTD8CMQuwVOAxmoTLlRMQc6n7TxMVNmMOi6Igej5%2Fn%2B2QLtbdwVCX9f6Buu7rp9rco2FkQVD9tdXvcEgFgM09mrHG5ssxy7IWlFU9LhExBkUn0FnNc05ukSLcHLwKzYX3bHi7Gby7pO6DsKBAPnF8pJEPAU%2FDCV3Mri6jo6JPArdaFVLhGe6qZL%2B1pbtlU5IsBOpcEhzztHr%2BjT3q8UWDfY0bHb60CJVk4t%2FBZFhNV%2B8t8xXC9IKIg8fUG7T1pLUwg8TNXKHqhej08YfrGi1Tz8D639SblP%2FZh6NJQUzgfG6sGBxfl8wkDxlEijXYL%2BZ4DDTiVImadvBvi6O2bU4I9IXIpbisaZsbm93eXFsWVFQ8KYHsu3REPQtUPGznAPC91gC7E5fDGufTIjCF2srDBjqkAe0sAjwRcHpBtEMUNjL2Mgemgv0wxhxfTNAH26YSG8Ded71l8jr%2BI44ZLXxM03b1Cp%2B29VmZTpgYx%2BjjqnrEVk0mdxcFAsMowQo2GeAvI2za6f5v%2BcRqasgZnFd%2FaLvi2F%2BNwVIrTpaAVm1jRDm0hb%2BnchyrZk4oNZEPIkvCGqjGc77s18J4MGKjj0voioEaabc2k0sgEBr6OU8Ymp6wOg%2BaJypW&X-Amz-Signature=705475dc6963ad22832e663bba9327d63a20286eb341da7cd9e7efc0826955fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
