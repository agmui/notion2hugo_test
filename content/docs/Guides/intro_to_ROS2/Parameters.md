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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BYLINDP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGJhc8r6ONdr1YKqyAo2c%2FjGh1hWISZ7smdZMEl0xv5wIhALIOgMC7Bf4DexSA8Hm10IJ21EXE76oV56VSJviyAOSzKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8YkjGdTPYZfAliLkq3AMMlJhf8eqqw%2FuQZBodEBQrQ6jxfK6xCfq%2BtCmbZFDTy6pDq7zBUpflVwkvECDC2fZB6mONjOtwEt%2BPxaSnXIrzDPIXNc5l4zCfZ3Sx0jX4W7qblLeo2Yvdel7M3fddu%2B%2B1UZVWyHtJTOOiY5v0bpHCS2IDzE9qWU%2BtDSST%2BkVoNcPUu%2F9re%2FWdSXTZOTqLkLGPkMhlD6fUw8e8XXBJRvxGvX%2FTdKPDE6yDDs19we7L09g0ZgkpIVJAkYke9A7BzP6IAlDmTIMS9xBEfxvhMQ2CJCJTsZBHjU1dKFP8nSt0wCPIn2lp5QJZBnjHVq1cYWq%2FZwg8%2FJo9nrf7p3CSZCI2lykTaDw8ExEUEPyHNOrC7dpJOXDcRSx4Lg%2FKOyjPPDjQ6TsZcp%2Fy6scv2ePnOwMOag9fBYz3eNq%2FrvuNTmPdFZAsGdAALZLSf217Ay%2FqrKHaInsNxvoLOKFWlHeXH%2Fp1G3FYo95B7SjLLODd3znf%2Bo%2FWKEwcu%2B5r5BzlemEPfuBtY2abrdbrrQPPyZLoeMzJPtJBs1zC0Wef%2FhZ6rt7qdYIfIc0BQIH%2BZx9WYfjn3rcZcf5srRsxsb79VTFzkot9cT0LFIp43KTh7K0%2FsDr2s%2FfWBOh0Auywn2KWATCdk5XDBjqkAfHMe4ewTV1mWhB0zofuxyXXTo6VafT9yCkm3r5IqL4AXBuXlHX9cTiiwEpM%2B6ZQ314Ma%2F8%2FPefWIPcMDOAhr6j00o%2BCSvhCDet6JKhprPtiT%2BxUP0WU%2BP582fS%2F3ojz6BbwYNCYaCxj%2FE16hIp68dIHMp5LxQ7gnDspgfJOOZJd%2BVMqaezm7KkklnjF7T9xsW2XlZd8GcrLDPgQGURGNLCBJQUK&X-Amz-Signature=7e193204c8060198ea8e2d6fc687e7308274bdb78146e65a409ccd6cf85527c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
