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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZLY2BO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDvTZYijsQ97Ck1bsS2fIF0mX3TZZxsBoeiD6Na0GtO7gIhAIeqr5I0Utk6%2BL18n%2FXuzc0eTONqys3o%2BSwfhJGKtjDkKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXIeYHWdldcBKyLIYq3APnyZH4VEumBOQGsW3syLrDqGfyNjWdDafl8a2Gry0BWVvs77zteionWkuvF6sJUrZIFUgtREwFENPiNlejvViTpEvC32KFybr2eGei%2BjOc%2BrwHLBUnyXYGC9%2B%2FC8miAyWNsy55idtXQgG22P84waT6jrjVfyNABYnnn42X0%2FEANXps86uIsz1mWHUsbg0x0F6B5d0H0mGX%2F754MX1jun0f3uMKeOL9ML5MrB%2FZZxs9R2wNSRNP3ZqY9VfLeMG0pXUCvE6r7Oht87862mywkBcgBDVnqbyQbNQX3yWUq9OdSggAS1sppRwdG3xEv4EEyYukdz9hM3cLC39sUroEmak9yOL3t2E7Q8yURe0MPRj6qc2NDTmujQUl6UIbwAU1OHdW5ahdQh84iLC6NDu1bEP6GR0DxxOT0IS%2BRASNd9kKno%2BcftVZRAFZB952DivjmzosemaJWr32l68nzKjfFjZpLewu3cwAXpcmKSzWUzGP6PswgmTujk35YAeD3Y%2BHltgI%2FT9ef3nw2arXJLRy8Bk0jy%2Fw5lBONMB6urXY1wZcQkoo%2BoQCjzFD8kt9JSikqWwq4XcbwqkIM1WqmWeBNmeLqgcDv7SA%2BF6O%2Bj6RlncE8ibiD4N88f%2BQkNTAoDCS4bzBBjqkASRmi5U43NsIBmat7XzohKGeyiez7fNOeLadh%2Be7eZm5qTZZtaHHyW%2B6vzqr0SK5QWgO0chUTHmBXg0p4ThmRVVCbyC8%2BdFv9UxGlEXf44ibdS2WvoP17q6iJwPWcusLPJTitDozHU3v3EjyTOaVw%2FG00b3xYrfEJVAqKEVixDvFqP8lUa9CXMk5xDlUW7loSi7SNZfxLz%2F09OUcFsTmulG5XKjQ&X-Amz-Signature=029880df2e2886977a56e7e05024377d3fa0a40a1b49ed85f7e03ed27c493622&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
