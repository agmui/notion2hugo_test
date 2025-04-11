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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNS2P3OA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICHh04wmkbswXwFlbdS0SQMKuEugOF6VjIZDmDeyoiFZAiEAufL6uLv%2BW9yHpVObvGMs4pnFElLffCKDWECjPWm78T8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHvK4owRSMAjO7%2B8ircA0fwjcuh9YutK7qOWB7EAcVrm%2FScVOyLrSpqk7c4d2dpTqL0kBEZEh7ttfCgCa%2FgKWbaB3El3q%2FjgNuEKfOsxRF1ptQQvNXSYQYeAkV4pz9D%2FjM007cSw3B2P14vppNR6Tq4mO4OczhoN2UpClyBgS%2F5YA4GGLuMetXxhN8XClMZ7LAK2H49ZthdmJfIFVHC%2BJ79RFTN9D1vzL%2FT7JlpO2UixzpGrC8ADTI63UPvZTe4Pws%2FxLKO7DmgM2jiLIU%2BcTypM3DdUm6r9cOb2OX2tFzgTXJ%2Bqb6UQ37wURM7OENiNpHllrNNPKFe0y5sWOtbc16hCbS9NSxSwvYjolA%2FOprtv73VStI%2BPtie08zqkOV0msci84X%2FJhx1todWashNx2apjPyFfQc5Tr3ahHjUwxzU8WiXxwxpXu0wOA57OxBiK9kfLgGdgb%2FpNlVayUV8FKKBCg6ORekzCGEcwHfZRgwUlhRB7J%2FLtS21vdORtkC%2B9cy4BpQqevvvfwFxu1cMSoOJpN0AjZEazEExV2Cj%2FxAVJW6e4ZvZWHLSd%2BC5HEy%2BbEjCEUy%2BSRNvCTRZgYzCSOk8VTZNJm5EhwRABPn6%2Fqiw8UP6lKKLnTp6yE%2B1ob7S2N06MIQpIp9tIp0oMMOk5r8GOqUB8nVojtG0NZA9JwJt0ymJGnmeJ9MRqA%2BoLPwV%2BMmfwzAt7SGQ3k02%2Bb0xNcGhSsbR%2F%2FhojQGJo7ZqOisBgPYVIBsheiyQpY0jf%2F5DxBcGQV4GnagSgW2XEm%2FE%2F4eq5jhL4m5VHpmg7MdI0HPhiuitMXsOzphcpRj8TH4DFHmeNBUzlRqPRgS4JmGJiUGtIxXChdBDSsOpDvzb4V3kDTO5f7ohyaYn&X-Amz-Signature=038cabf8841a3ba8d7de5ac03e18a211229aa3d47495b547691938ad66e36d06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
