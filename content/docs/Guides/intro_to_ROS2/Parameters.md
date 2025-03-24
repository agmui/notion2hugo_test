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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XGI3QN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNu%2F0luuuRBXpbJ%2FfPJvvyBPQdmEIW5aIyI3bHQwq3bAIhAKafKpO3QDhziKEbsKmnr5mUy9lsp%2Fh1pJH6DtHmV9j5KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwenDnwHzhnnivkxEq3ANhGqgCnVSrxwzog5EFk4WebBrgFdAxDk6tITKeM%2F6bG%2BLW%2FCc0ZXimoMHlN2QFB6WdPcFJvsiBgsXyeDiEcZBv0QJ%2FwD1LbeEsociXK4FABTtP%2BuYeArnHCOGlezqwJ8DX7%2FiIZg0%2BXRdUjgaFmHAKV0fuWYyI%2FK4r6Gn4HB6qp0YlAy27f2dR38vStbXzeZ4r2ciOBdelBs4gKy%2B7gSwDXJ%2FiFztDeHaJLrcWZipnASHTax9o4Ca7Ng7FPLpZ7g2JUkq5SnYYpk2GKsb5qVLcxFHDwXl3UBoNjuW293%2BI1rIkVikr2LXKOY930WZrm5VRWEnowXtSN2LhQSyJTn9ThmHzy8ji9fqSlulUEgcYuIhecPSHYCUnAifewpy4RYkOMWjxHIb7S2D%2BxPcboL5NL4dnvOActzrKpuH4FzVyFoibb6ADSadcGVw8CRdNzQfXtomhDPNG8GUx9vuXKKXaPWfG4TYKCsS1fguYGQNEpJx0YcElBleRTXUyOZjC6BxFQCBKsXRX7zAt%2BInzDZyFvCpjgx5aCvQC3Q1G%2Ft1qtgtvUGT4WwyXKEZS%2Fef%2BAly%2FPsdJWp5fsRr4hNJy7W0zZcDGO0wLlHYBkY%2FkvvO9Ua0aeXX36IxxdYUBjzCKsYK%2FBjqkAS4K0qvustNOVq%2Bvj7NqqvW9%2FNky4gEuMOJLVnEPEOxyyHT5gJZAodoqyprK5uwu2czk5updh4sUlWNVa474mViummNBu4dnxiOcU%2Bm8DQU9%2Fk0EwopuJ1YJtM1uhXIh450gFIrVMzgnrLrtob8yldV3p03wsXrhLz0rq3s7OBhzWCAFJ0IZz3abJLGhaTYZXdkFJXSNFxkcWI6zvQYozEND5aWg&X-Amz-Signature=5aec846688d111b25a3f8327844429c773b17c8325db4f5d0a1c42fd42782d10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
