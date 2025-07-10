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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHC2WWU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEsCukeqMoCsHibW1YjJa2WbZ5ZAOnEkfwyjbc3aKnUAiEAh5EeGu53gb%2BwrpO2QxG1%2BDHB8ve364gBpIZAHK1cNGIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2B7YBySWx7BtGK%2FzCrcAxCyd2%2BSa9lgS%2BOi3l5tl1AFVyWF26tfou7pWVmDZ%2BLjI64MVx%2Bth%2Fbe27J%2BQN5W9bG2pc6kRXHnHfuNbRDBIuCNDTaZ4tVcVu3L6aVlBnZGzTKZj70%2FzQobr2admxC3aa6jDmcT2iSPUvSe3tOOZTjERUJy7EHJuOU4MSNlUPXhHhOB9lWr7m5MiCsrDVJoLJJyQQgnvMFpurjiRHsmQFalrxjKNH%2FowYbwBCsBzVenQk3HJfN11vFGgLhpuYO7Ep0AXwtqekOTN52JVYhudP1yZ%2Faet7Ub1xasj368sH6SYYdj6I2WkxeNnG82f8lfzRyoFjjDQ6MvLzi2femny6IhtIBzkiTJAQFOmKSA3Zhw%2BvgFn1jGuBm7XsPSefa4AHks0v8O2paFhSRhp4H6jKT4UJi4%2FmVfYlSV04VN1Hu%2Fp69QXQKqJdzv83Q0TSuoFDrX5D0WcD4kueoxFkfwA00m0ZyItqyMFPoV23vWlnxvHF2kQdFFEAbLeMQB4QVKcHbVaYz5vd%2Fa864ixaM62GscARTDS6JdDnGch68JucrZl3%2Btg4JqpUVH6LZSZQAONf3FZQErrBPUQbWEBWPY30hf3%2FqLX%2F8%2FxlbgfUnjnZr2smqx0WW25%2B4i2WZiMKr%2FvMMGOqUBQ8OPCsU2PNeWAZbV5l9IgnDrSXPYWbsxB%2B%2B6FOjEqDFKa1%2FuglTHRYwqk2oX02x6SioIc9FViZH4BIC3BpAIw8nbWfRLCE1YfdP4AtgDWI2iWuFekI%2F2hmojvRMjXnBH8c%2FtuXr%2BdvqoEyICFgCFKf%2BP%2FNHzTD2Db0iavFtX6DWZecFQC1hDR8y%2FXYghxwHl0jE7vYS1YMeBJe1T2DmgwIZOKIQy&X-Amz-Signature=9b5d20bb175c499067dac10f8cbd7d84524e75fdb65518d0fab6f31ee2535556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
