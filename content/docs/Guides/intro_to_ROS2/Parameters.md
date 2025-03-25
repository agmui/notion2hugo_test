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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQUA4YUW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCShXjPiR2eg0PIaLo%2BsXyBHSb8a8BwtG3BkXWec7xCtQIhAKqOWV42JgSGmUs0GyTsxzE38oyQN8Li5fppb3F1%2BGRLKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8bhtHq%2FXaBIHEWasq3ANWAMTXxzP3eyeBngWTjTQtS%2BKo5KduWPxIMHSX3IAqq5R2CLIzx9YCXxjncrTT5JBHFAtSk5d8wXuKy5DETNem%2FG1ij16UcEv76Wu6uH1CVB5LqheT6GeFh3kLFXF9WGRiAOmTzxh6LaB8a0yxKg49dlevU1FGAB7kLvEto8lqbjtP83uwMMhbq9lx%2Feelx2ptaV6bWczZgQ6ygrf3n%2Bm%2BuptCfty5bFK9lkv0GpTCbgo9g%2FoYbccXFQN%2FP9Kk5pyTpaxOv6pI7cHzj8UKpVR8EWUvMl4%2Fi31SZ%2FzyLwN37g2Qxw10%2FziHPxmYdk0DjOwH4vS9JIdObYMPqvbGH%2F%2FI7ozkFcHXerLI1hw9iSbq1AFjXYpXuUD3AOmA73uvzK3cIPxBc325JCTkarBOlGrm%2B5P8A1zgjP5wWun0HEBiTBIMSQsHn7i9Idc2Ojz1ZXfY%2FRo77etzX2a46QjtpyJuy5Yq6j6v8xWc%2FQsS6pHoRTQzaPDuD6m0qY8d8kF5Y5rOKiDQuHLjh%2FFhsMmvJR7Zao79NMUWeGfYPBegYzbMmMS5VtnFN9UCjTf8fM4VBRHeuU2%2BZQg2GZB1aikuLwOVmC%2FeHmVZ8sBRpTFbW6BJxl7HWvtfWUOqNMQfqjCe0oi%2FBjqkAQq5D05OiwNjBKGnwK9R2kpvjUKaMNjufFRcAU40laH0p9KY%2BGYdbIm1ZAyikHeJa%2FNUNzZSjDY8L8SLII8nFgFHptnFsFrH3fzMCsmLKzsK20ZHc4jQxbdKjXCnEx%2Bp%2F%2Fsi5aivZYel1n2oxjy1SmkOxG0Z49dW9vSwbrwTGm55TADGB3u2xuYORS3GavZFFxeUw9foKNtM9PxcoePKOD299jdW&X-Amz-Signature=e4105b20aa02a07025d0ec3a0d221d1bd70ae8655499fd8d1946009d29bf5d86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
