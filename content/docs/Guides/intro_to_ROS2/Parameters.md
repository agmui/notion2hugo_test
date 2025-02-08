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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3T57MFV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD7u2p%2BMV0h%2Bi70KwggAfERJQPNtXHdYtmV%2Bhs4gJDQGAIhAO7lOu18DrsjBeVJx2ks3GhxUrqZmeqziZSPSHGKab0bKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIRDZtMjGOxF1V1Eq3ANuVPv249bR0wGZ1RyqvdrbYUrI0WJ%2F9th%2FFM%2BxNxAR4AuYARXWnQt9QLQHwpIKWZrt2uWKmZF4AbxbcYx78tqiE7vDcLMas%2Ff18OtHIn5Uv%2FP%2BFMDjgQI%2Bkp7t1DTJjEG0jB7stfkYq7%2FYAzPkZYZeWTZUAf7r80pOQ%2BnfOpeeb00qTvXoLrMQthfLLhiEnlKpWRph8G%2BX3pBgMZkasLeQCHYRVDivD6aG%2BYXjovE0rut078QF1Dgb6bjBvUEK4LiHItq8SCncVLsmgSempR8gbdac3SPr7DKzf5Y8z%2FIBD5BrWzds32eIh2QeXEkI4V8zV%2FaL3wVD0kee0TPq3JPf8yHkTROsOHGhm0EN8gyImsnxnI1yW3%2BCCD41F1PZBnCXMDglMGVAeSSTqFhTl42%2BhgYoipcRjiByOzq9j6J%2FfqCgTGIk2ypo5hRWO4gC%2BWErVHW8pokoHXio%2F6YG05fsoFTdBlf8s4u3V%2BBb4fushb96TzDfgYknOhPItH6q1QNWwUQ2lG1QRuHYmTAtYG32vF760Li5%2FWE4MWjCzv%2B6LqG5URadW8G4FWBXKPzMf4MZYNSdiS0xXu04YIUEsw52uavpkBH9JbKOzOWvDlzasVygxj7jI%2FCUO8vldjCahp29BjqkAYqHxDsYK8NJpuW%2FFCWuLwKFYmxqElBjawDX3dbwkwb8ciLnsPfV4zYvtGHjEFb9LHsjZYJ1gCGPNL5Wgo2tnreSxjMI4SthcRPy1bdmiv8uHLrmWJnWHGjxwW7VBihhF%2Fg%2BYEJakYEgcTLNNCc4qlj3jDgLAvrMpxKA8N33EPUPDKI7%2BbXsius9Uhgp8licVm53Vrd%2BGWL%2BSsdtcST3snFK8GvG&X-Amz-Signature=941dbcbe0c060cb4727b01285ac50f5b9f997972b6f7cbfe853eeecf6c1c62c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
