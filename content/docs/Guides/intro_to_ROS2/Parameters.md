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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEBNYYXK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhJ7Vxni1RqHjpD4tVXMkJEYko6Uw%2FxVMgg3VYevpuTAiAHslMJ%2BS4SatAoiOkKx3KOzzmn%2BDsbIA0slKNFBU%2F7NyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bd%2B9xJNM%2FOT4jkqZKtwDe2ooHSfxGGpdD1lHoOlmRNbjoGWnkYQWyrZXfK%2FDOfFUJjVaavBk2JpAP1UZ5v1Gh5jGG400AgohiEo7fGZSP48AQlMor%2B5waWQIQE74%2BvYa%2BlCUiRsv02xeWXazWzi1GKNCWWZmrIbPGJiam4%2FGQ5bRulG4JToF4WIAUGqPaxBFtweeFKyzXOKsv1PC4xt1bEtN6udpkFk3AI4RJRUHUUXZO4o0quhwHiGeDUirD8fL6gvuCa2aHjlFFyMBDbNLEoNphieq5XED0fovqV49GG5w4e2myqX6QwBoLuVvUg37XK4gJvNV3oj6dAjOZlrNMGPEzq5XG2h98puYW8hsNaF7QlghcsuVzhWejDZ%2FVniddMG9tDqJPFxlMzcOKYDNHtaE0r4VnNwuZfUrdBcaCJ7E%2B9NJyTMhnw3%2BeUeLSwscUNqACEXHI6I9zX1G%2FHNzJ1K6ZwR7yWAk1bk6hQTgyJPi46rqwbP2DPP%2FmcUz6Lj4OMEoSNNuPvuW6oQNWetzvtQUZ4%2BKHaDI%2BdfeDOkYWJY9jXnxE7tDdTALVNwCo%2BWnLjxYDQWvzc9AS%2FDYhcse0MAnCoKLmlFmg6iwcX4i4o6EPwx5zOnA5V9W96St4DgaEEyzPmv7qd1FAkEws7KWwgY6pgGG4nZhdmYeLsjfJq92C%2Brx3tLQLT2jGeRd6j6FNXwMhXvG2zyMCrznjW9UD%2B%2FpMrY3bp8f6fxB6ypEydlr7%2FxxStKKMX7xQwXBsXf18uFSyDIHob0L6f%2BNkTBvXYCoF1jR3Da0IN1EQPz3pvZsUbqIbhV%2FJ5wpvwMN5%2F0WnXXKxUAde7goNaQQHLCUvKMccvCFZXTRT4tBfD7kn5FJlbPYQb7mFwBT&X-Amz-Signature=830670d5578099188854d9727d4d14f65c07ba96e5c10687eec0580ce06e5450&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
