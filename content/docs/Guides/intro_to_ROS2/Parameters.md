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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMQOK6NP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8IX3KEZAlxwL6vmy0abmMZJRO9e8wuSyvvnHm4YFPwIhANjRzFEzTlRY1dYuZr29wbAkOMUoH2yTR7RrX7UfS8o5KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYYK95u3mGca1zyNEq3AN683zZvO%2BMY7sZa5yb6sSvPswYL4bM7%2BVTxxsOxDQjZA8E2BEUo7xbNPHbKYANqmtP2J5syMLFLQwNDiKLZyJBVTt6IAWy1nA%2Bvrxj412ZQGQxickH7Exs5xjQ1R7pRzd5fnwk31r%2FJe5eVOCCCs2MM%2FVOQmC9wpRmvCxlpT55rOzJ8uo8rLO2XbegyAFGwsLxYfOYUxHiPKvcv2WTigW0gayEOfe4o1%2FXsmVfihX3aFzJ0UFlXzt5pHLJJaYmvkR7i7UHmcjeWOJ%2B7Wvtf2bU3s8svCVsRdE7gd%2FM6nErkCosX%2BG0Rc3yeAGWyuGtD25uGkHcieOU4RxazXNXeRrBt6cW%2FXANpva6Ap0%2F2km0mrHjfsVecL%2F9auXiuDjvzpi%2FU9kP%2F9qqP9eqM0u0tydwXjawdIO0SeDtBNQXUvxeiaGKuWveYjmIjj6MIEJwWtuMaXByVFTmlBBO3xDrjfzbKY4WPXme9WgPvnFOV5dff918IC4gqEGA4wWy6LcwWFPRoyZimSLxTdfIYLO8HKghEGKhgGsVABw63hCCd%2BM%2Bs8ehMeBST4JGOsCmv7mZ8042VOcLfW%2BP376yEelNLe7lP966MDGO88fhxTwaJeROPTI5RHvMxZFiCToy3TDS4pPDBjqkAU%2BWAbWnOuV8REHnF4Ahk%2B%2BG6izND1bj6u6pAuRgEo%2BXrdQznMzWZK3r7CKeBHVpaE4UNupTO%2BnybkJPYkpDRJavKwpvP5jnl2%2BjPi4k%2B4oQp%2BoUZofRTzkInPELcGreXpeu0el%2B6kNSSVQ9Ob%2BNMuvj2Mv15ER9CA%2BqVAe2ns%2FjS3JIvYP8HB6NMEu3T1WAznsBiMbOOYwEs7%2FGGvI0kMi9xbf6&X-Amz-Signature=1136be2fdfe91089766592b99aa52a82501cd71e2e0b03f85274395a0cf282f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
