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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVXXOVV%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLJ51yQeekQrDtVF4COQxlaCIhmc%2FWl7NN%2B%2FhFLmYptgIgMX3VDn2YMFtYVrGScvFQzZdGe3u0hXEzaDFJDjDku9Aq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHCqV5dP1XS6HiYgfCrcAzVVu0S2lbzqLdSfjGwQBRzk8PtiX5VgVyiz%2FjvSADeTq6MY69I5Bfq4d9Vwu5hrNlnQrE94u7uBfST7nCztdx38xwNTNqtZbEtSIR3CtJNaTSjnfyHWi3P7CHKkDRgS9HAGyCTsZaVTC1zkYSTEODQBNdA951h%2Bz4f15QLoaFFr0sj5viyYhFhyn8tf%2BLh4ZAXVILfISpSoM2%2FMgqqITYQU4ZS2AMk2BszpFrfIUgYxhSqeeIIgOIvm2BxQXss92qLygOp05PxoS%2FOV%2BnHoxZrjacy8LRSNpkraAuWlXAo3Ph%2FhVUdxU42GACDGBOjMizsCBWW8dmnP3xnwn5Q7yEU5ZJHVvPIasjUWtdckPVZr35XhBuVc%2FwT%2Ff6EaplsWt3mguOv%2B3uI5vl1f3guMBu4LJMHjwRhrqWxeTzA%2BoLbM6KRUmeDKDfF0UNVXoGmWfy4rxJVtTRxKuHyO%2FZnqhaZ802Uu6NWSSQR8eRit3W1G0VwUhGAZWMFOYdLsY9MSih8hW%2FHESfAoEyf1Aq7PbOGexrmmyeIIcg%2B578Tybe4iyhWe%2BK72qxTbmIASOj19e6cao6cnc5YTLHyRvbsAUoHwlVqnae2Jz7jVHOvvFGlT3mfn%2BM%2FcsZqgYCpIMJKI5L4GOqUBpbSFz2%2F0cIAh6sqEC%2B0xbRmTfBLi%2FPU9LLt3BwY%2FgYGiLT0GstsaoMceXRi9It8deIMeqC5xfFiJbX4JOosPtk%2B65j7wYp4HuBFXfN%2F7ul7Fzx3vLVQlB84%2BFkPWBBnTELD5wJ%2FyOz6ZnLmHegr%2B39ThGraLG3mDux3V6W6wnLYgtxcgP5p2Qg3j1mgn6Q68AgMHcAghLGThhxgfCTKCQPj%2BS06u&X-Amz-Signature=c129a2872caf5d63a134cf5df359a665c520e48aad8947dbe30a74e8cf3537da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
