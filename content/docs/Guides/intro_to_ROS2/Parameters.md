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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQL3LXPV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFi9iIQk2ZzJrPycfj04pRgUd%2FPYWKyC4kY%2BhBXbZlwAiEAiijY1QtJtkYbERhUW%2BogHNYTxuFLTwX04vrCx6Zv9Lgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDN3QjEi4qjjPAAUX%2BSrcA9HG7hc6mGOwNb%2Fmx1VecmaWU0eNL2WyWk%2FeY87Yll3TGUkkFkzRpZBHPEyT8OhoOo2KNS760cAKq1GxtzYyN6%2BzG9wAEIcMK5ylIzu97716x%2BJhtVu%2BZP5X9pVDbE6l451UfXZyATaNIrT5VvjNxsYSFgkXSgTTYegdNg6UOGt5Lp1UUPJwp8aF0pkK0KNgHvZCvE%2F6YKaZFQHITwlfxhBDcQVQSXojlPiVd%2FAthwWdxunPCaxSpUzQaOTWCZEUFV%2FAus2Sre8DEeyEBOISbpIdGscFfFGk1BWdf1A5FoOMrbfDJlxcea7q4ZNPRbgcmAJ6ie8NJdDHuRc6WVk2b4%2FIslR8B%2FyhJAjZpLWIrPac0ns4XURPULrJ2yGM45NK2Snsk1D187rep3Xwty8Kt90BfFy7nmckiWRXh2L1lgLS6Wr%2B7c0HdK2J6zHYxihA6irpuHHVfKRZOkZkLIgmmJctZeJm9qGf%2FWi3IWOZigP5HXg%2BjByn0pE3LZnQq%2Bed%2BoEIcvPhpoiuqnRYI4oiYqF2Ih5S0LICnCwgk4mL9qoswEzsm7j6udcyAGt1iABBXJs15SG8cNQqlAzcxc9A%2BXKGL8BpJMvXYk33J3LGl%2FHLAYW4ud49xF7%2FGlDUMOrtwL8GOqUBP%2FSjiqeIwq9v9qVCrbjf7yYxnko3%2BQIHlf4DrNkOoAzf%2F1OiQpM2CoRcc35Kg6JVy9sZTKuASTXVxCHEPoOrUTBHgjW0Oc1ukUPktgy7zSaDFqAj0ioT7LvL%2FeeO4kiIofpQvK4gEJFic6zUss4EWrDAHxpjrovG1iIguCFgW7ziAKByquanfC9tscCtrMpg%2FI9A614KadpKuo9Es2IHsgh4hez9&X-Amz-Signature=5884a3f60ad2fd05d43c484c91691761c0dd77b4aa60ad617f8551777a7427fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
