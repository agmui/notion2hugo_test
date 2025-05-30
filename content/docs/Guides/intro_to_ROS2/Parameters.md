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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JVQF7Z%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMaHYy7GS0vASJGvojysQ1VJvYDAvgHDJyjUPJCy0B9AIhALEjwQmPaqDgwWbiOn%2FHUr0f05lr6WiJK6ypZ9FX0mE1KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxV21Ou5GY71dDorBsq3AN41AmIMOtDfqp99XLSEDwon93dfe7IZnQJ2i%2FezBPHgg7pGDR9gOU9uwOkJQJoRnDNL4AcBN2dNPNW6vSHYgya4WW%2B86GS2ROa0WzwlUqXycw3ZFzwh2zVUo2W0kQ7%2BV2K%2B%2FePuzS1fasue%2FNjYea4JA5OK2o0NX1BhBwwexS7AHhgdmz7FiuKAO3dznI4WEi1LKF%2BeOHX2q5n2tksVKOouTr9xaw47qs%2FxRkKvBy8UOA7v%2B0EZVo5Jzp3SHohDmTifz0S5Wg4NCiZhED1WzbRVrYK2AGfHpP7MoWamG5wKSHJmS5en72IUM6KxNUX3MtUX7w%2BwuzpLFCRH9V7woqtlODotFpmDB4CmWrqAqi3r59hchZdQM3EMH99tB2DIj%2FDGMHPlFfF7ShSfT6RYw5L%2BJ%2BjtzNItbyYiXKQh1HOj8mHhWWpcBQ49Q8DWLE9fVua4dvKfoMTcYfALjFs0SzNtbZPtEraQhHme0sjc2SebxoeuXOdEQAfuHWvr%2FLDjqaEwOaZQVdZyzWmGPdwX3Tf3wk0KoJwgds1PP6l2QPxMbk4R2WHrucN90%2B4WIqlbj5yVMRfxdormpMTS0hIVijeFiN6E3ovipAd7z6Eo5kcM2xdCNvNi5JTedn6ejDzy%2BXBBjqkAU7MCldZmAqEw2CI3QC%2FsB8pcr%2Bqj%2FJpbJdKq3S6gTKQXYGLQYelBUAFc6Yuo%2FJ3EwUZWRyReOUext5o8fjQsAvjhY7%2FiI90vmo8bnusIFuuMCPNAcnilQaGbSm7M%2Fr6zFZVoJ9Tf1LVChrVCjyD3zO9iD8h4P1ude2sIygIueIevprAGyRKvHQtASnlrSyp%2FdwAhh1H6Sk5nuhGxaWL6uFycvdJ&X-Amz-Signature=2fcbf6f3f6181aad8525ad405f050c358614494237d5e975befccc0cf7d9d253&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
