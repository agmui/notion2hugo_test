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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV77ELUE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTAuU7Xk8VK2njoxQx2EpPX7T7DPNNspVmhWHKjrqshwIgA8J%2FC2WZL%2FrY81bK5VXByANFx4xIJ76z0zi%2BokW4mHIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6NZE7r8n9Fn7UJNyrcA3olFaQLuG56g7cM7jEK5%2FVKWMIQCHzvwQwIITQ2gzgA7PF4bGtRaR0Uaar%2BoVJ3pUHWnsSTjzAaPTYGkAmlWpz3WQv4K6xkkTfyzT7ee8NHHWElqnr0oLBJLISkgxiqDV%2BmavCxIVPqvoymHnocZWTgSHJrrIXWit4RKbTGcl1KWxDO2cCaOXcwuK7dRuDXXmrEoRecYzjb2t2R3mtAC4Yb4h1rw3I8WhrwSomlp9cXx1YJQaKuQ%2BhoEzTDwfaHsrbjpi8QgKIfaAq0JFIQx5Tr%2BcvtVRwJ0taD4aztl1VAJ%2BiHYLTIA5Ipc0hc%2BCB%2FuFPSEMRQ1vG9Vq8IBInE60sAssQmw5bjVKLWre%2Fd27plV27pt7SofR1z9azvBbCSbwgaY6PME01t0xFBfw3uy%2FQoJ48S7M7cWuq6p8ZQehLKsOT%2FoBJcv47aSNObIEjBPdrWruSQvCgbNDwNpeU8rsHF4AhbU0KsLEPSv%2BIfQ6C2MZKfE%2FeBgDC%2BjY5dBKWVfnl%2B232RvgggRCTWTxV5bok1ssLBC22sZ3UzK4axZQgQZ8%2BFo%2BM82bRDJAz0vknLIbIqvWtlzobFXf47L44erZXB5Gq7mBoG%2F8R%2F8KkD6pKKBgd9%2FHFrrFGHW39JMNL2nL4GOqUBDjpuxbSkNR6PVE13C3ruW7%2BNL8kNWXk4wHQ2PN%2BOvJXvbtWEgtQ0lTuwvtcnD2DKrjR6lYqDB71LyDo8n0kzcxai1xu3ZBBCGSJd1OlCL2so7riLg%2B5vFwtK3Hn2Ulp0M6QDythhE2fmg8Rw7lPiP6ZavCQRPXlbZiIv8w64vTIeFue8xrMurqA%2BC1JZwFaKNYjZ1zkVMdZpcZtqnKiMQ%2F7XdGC4&X-Amz-Signature=0389936919eebe7979151ffa83f5bb8e047dd4d2b6810398ab73d7fd89299bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
