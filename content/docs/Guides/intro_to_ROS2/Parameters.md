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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I67QVFK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD3Fw2kMwmlCJuj7EITpxVizxz8VuibWcGw5zcbVsAsCgIhALjT63YIbNWRu7%2FwASxTBnZbIeZsSziCqtEpbjVlUh36KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfvaiW2PtAH9T50iAq3AOc23YRTftH0NgxMvNy%2BY8WV7mBJJFe2ynVfJuOBWSotwljEhZDmPUptF7SF9z3FEyLfwuWtxod8O60BtXnmZWxA1OwLGm5Of9qMxpTHWLogcR8q8m2m1L1JVXmxQmqKR%2F5BT%2Blx%2FxMscZ8WTMrx%2Bmuilee59Wxlyo4jsayG2hQhw4rM047eJpbiURhBfefhnX1kcD52DN9uyiGLROBKua0HhgYmvqU%2BPwLUU%2BaqGL7dxi7TGoMkH0ARB2BGWe0QUKpB0MDwx7lKuVscd5LfZSAoinTgfZ9tJ9VvaK5mBBj4OozjBlv2sQHR72UPAonANiIKgV9HuGKBwzQ%2BWT0MaeUcnseWLF%2FNcTnCjSB6ATa5oxNyKk5cxdwhADKuDCrrzRJ9rfwf3qkIHpPOuIDgG2L0nL00cJFtVGNC4Z1LwBvxPZqeKkJCZXt1Oxoa5w5hRaxLPD7u3GpDTRSTOntPH%2FP6pf0Azycmb2HzgVKLTWEZZOPl8kLAx2ZwrO7uWn69J4TVyf1W%2BooG2YTbriL827qogQ0L0eDIAqOAA7%2FzXwJxaczbpt2rK01bWtWzqTQKDfDCUaOPvAHHW0KOaL2moiQKjnebKrEiWqxlM0MxVgS70AH8evqjAGc2WKfCTDOuv7ABjqkAczv4tyDyTi23Vs%2FbAa2o0qlK4BViUMFFMmo2PFBKccHkGXFKQGn%2B7rkgKOaX%2BcOvr72SfYm%2BS6Wo%2BTuEcdVuoL7aqCJ7WvQJHGucBg%2FhTyv9exzo0tWlQhb5g80Ew%2F%2BTo%2F1QjPcPjWy1RZhOxm%2Fp64c7s8j6f3sTqffTSK13lIswRUMDKxSPDNQQYtK%2F9NtQYI%2FZI%2FuCU80fy3L2t1o3x9ojfuy&X-Amz-Signature=2becc19f99810cf5fbc2ab89114a9f31b29bcb950a14fe1277c6ec09fff5f41d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
