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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLDHQMS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCeQ30ozvMcJOfAo1W9XJ0m0EWKmbmCEHvuwoTSSqP9qQIhAIbXhwO%2Fudjakb7oeRL5mdnn%2FDFw339ZJmBpKGaYT1XwKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLo8jSj1GgrBycPxIq3ANYAkwZUbEzLoxKLn8dKXg5drE14%2FDBHY3eNidKFYHcTvam0gKsgfR5OPUWv03ZB3vpeR%2FWX4dab5QyzHYbmwyPq7K5aYZpSt%2FFVL8I2SZFj3oOpKg%2ByXKnuJSjwJyBnJBA5LB%2FDOvIjGPe6YD32HZeo%2FEscvMt9ZqF80bGDEtflF8jBLGsoyQXDE10k%2BC97He4kvE%2FeHwvvIvcu0VLoavHn23OUAToCdI%2BjWjZ8Shg8syRcmGFrAPdiRiAx43W7%2FnNknLT5Oz72IYqpOGtLvF%2BxAnGtzSQ1qqJ%2F45jq6aaXfoJA2rae5Qkduop%2BRgB1vFCKxq6WNLCbbkyjDR%2B9xQWUyyYfH3vACbMRTys7m9MW8C%2Fdj1y7BAUP%2FnnKtc26B1zwCIVIJ1SvT%2FMz6kBJofb26igaWtAF%2FsVJasBnzyY0Ba0haVqgy8LskL8rUvxH9Ra5eI2AO3q%2FEQArrNiZbkZKfWVlROIjBwuC1Z6hHrIQxMeOSjyj9Qc0XCwPpj61KAD9cQVDkfir0oW1qYtqQa8pSyjC%2BGOFqzPSWzpTUL1yfCQxnBz9u7OSvoWqgZ08BHOBhEirpsuhtIBgUp%2FSKAZeGsc0%2BLyxZAcz1aO9PgNmtVX5EZoAalHpOzS6DDq8ZfABjqkAQNNPztM%2F1h6345GEi2Nea8Oynra3M9jQcAYVcuCY0eyymul6ADAb0xGG6U51pPtp2wDbAOKYcbH2ljiq08Xo3LH7oHzDsYyiwWlgeubSUpQueVfEYTpRL%2F5FwS%2FiPwcbyyiEpd3qlmKxNyVqwi%2BPFDUBhR6CBJa0DHndDIFH078OXbWgplZdjXigUrBRAEuFyzjVu%2FssrhlX%2Bbmj%2Fdp%2B2RcsxB6&X-Amz-Signature=92819c4d2c640b52c30d6a9cae35d359b0ae2f41288e930603b9f26d54d7f5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
