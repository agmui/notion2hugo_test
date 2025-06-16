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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKNS36L%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGa3flQqfeBJ3Dw6T2l0V%2Bspq1tM2u1RjaL3vGHLAnHDAiAmCetQQiMXjjYtuRt2blqvn3R7nf%2F3TijqFIqEE9ewUSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMjl1pM5hGZ7xVaHIJKtwDDZzJYkwIE%2BJ%2FN5CRo%2FYPTjPkwQWZTVnfGIqrT%2FVVmu8b%2BBV5ML%2BOAkY2cWg0hdxj71KbkmgeAvxE%2BzAw8LM9gSzkfq9cMuS7Zr1OnFpuG%2FPzZnXy%2FUML4CI3zZStfmEDRJqxE1W08tFqOn7Zi8e0fcvftx0SCPQt0%2Fm80iM5n%2BWUTnvMr41WEs1ffAwogy7GIti3KCBeomJJHDI1f5k3X8iFLRSxlNaGFTjxMYhmXLgEL71J7edbnlFxEZiPKpiGiWdgLUgbVjQTcvkJoJcGgJOUOYFt0F1ZYVyeueY4T5o24K59v8eknhZT6jKWXJrYvdotL3CZIrnUSLEwbgXTvbBpl0UvifeYEqTy9zOGwrZWjvRLuOoC%2FpHMsae%2FKBFOwHDaN1EG8uD6nIDHZEK4of18vbEcWpYdMO38c7HvEEOoAiXoDRdEuPlL0PESSrTW8AkgmA73xGi4pCIsAIAM3VQoE3Z3ItvTyaC99sqWkkqYolfE1pYvHia8NguPQU2UC82HoGK4uzis220a0JLJY%2BxFevuWvP5yDKPwiTTuc3f2mAzZjsrgB2MGKkm0ScoeKwLeJHI%2BDnM9ea5BtzwbO9AG4TVg3EZzXXMVzZEsmFJUWm%2BFQUtNU14Qi74w09%2FBwgY6pgG0PsyTddr7UjyfUhugKtJudSlNXLWk3jgpUNpFUq8pRVKeAEipXpq0mtnITqfzP51O2gi4J4SjS2EOgLp44H%2BO3bUiHMDfLI6AbkCItcPNpSrS71f9yMtY4OwTVGckUagCwHEbVdZNzsgl5W9Xn9emz2APHLsK2VLG6N2ZRj4924FdoevWdGSc4vNx9iBm8UogyUmXnbwi7eC%2FjfqR6jEnjqdLZNCc&X-Amz-Signature=dc0f38bc56920bacb324c530afcb794314013821ee2d2b79f57283a3a9eb6df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
