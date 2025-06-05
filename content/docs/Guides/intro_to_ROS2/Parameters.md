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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623RFDJIX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDQNgdsxRE%2BdUHwRAhOlmtvkmouJwsMlj9Kb09g78nuAAiEA8SCG%2FNgeYAZclfRBDFlw6cRRIvJ8HXLDSPw%2FRV73nPoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDK4gpgmvCWIx6L3C1CrcA5Yqj%2Fmi7WGJfSC3e3tWatXti2NcE86tM4tba%2FyU3kZdQ6Xe5O2sxJppX25ef3IgnpMKa6Q75fc5cxRZPtuHs2TX0X1U1ZnUamFw%2BDwEIhMDSiU8ADzN0%2F%2Fr0quQvTvifAuDIywBJmAHujG%2BPdAGJJ7ARyWLD1qyzJ1I2PkNncTbYsyYNxlKN1%2BIFYb97byXEqqAffLRy5wGMEoXJJ0D%2Fi8n9qI2E8txJwyD3sMxeZniMzZN%2BpygAk3O9hISLk5D0Lxw4BZIvx5VDB%2Fict0xWqlLMl%2ButgsMsGrBxfzz%2FMDRs%2F1GtalrMSl8F%2FwahrTyeys04hVytSNiu9lU45UHuC1IVce9E%2F%2BVAoGzY6Vc%2F%2FAKN3fEdP9gfx5k3Wn4UVvWutta%2B3NSJI9dS7nBm%2FuCGTaiykMLKWQ2XD1tF%2Bv7c3RAFsUDMFT8mhCVIQaJBP5oJUh9goo2qQaGdmpF5n94WXV9IJI3eEP17DfMhYW1Hjp3zUUYcnDP6HW5pDMjdgWRUnb9ihHmd7w0TtENOLAUKlaeedQXJk5ol0eBydCe2%2FFp5wArxVDSP09jqZJ6mgATjY9ypBYaC355hr9fYg6GRL46x8Oj76JPWVL0JQDs5e0QjtVDY7FRQirfEEITMKSNhsIGOqUBrQzylab9%2BtDQkTCcgRZb2RpYLZ2pFtgV%2B%2B3CnBhCJgiLxT4SouxWrU9%2B8beTTotYRpdG93vZFGZVJDln4g%2BkGSo%2Fzr74%2BGjkYCxlcwhRCy1cVsxPhbcEKETjXliKbwmXi2EBnZy%2BjdbqjkgOou4x811J%2BWfTETGlOL4gW%2BhlcXep8BksTsz%2FdIoEnwzl2AMNmVA3b2lTze82hLM0WHgOakFFFHhx&X-Amz-Signature=60aea87e626ccaa63672efbb568badba969b224feaafdf1bc79bc49465492ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
