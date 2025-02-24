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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AG4LZ77%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEwqXrnmBkNWXfJG66hFh9hSxAemkQXCTb29%2BAbBgyKwIgJ6o0E0al8r6f4kzAN4eLzExBOL1n9O%2BzAUwvwvg9DRgq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNRq5yM1ow3SIiSmOSrcA5WM2m75ytM%2FLB7yHkM3F8%2BZ4Y%2BcGUQ9m%2BxTr1iBaNX%2F7WW0lQMihulwES4%2ByM7HJRJ%2B7AXuV5IswAOTj7U4qhOwook22KdeyBH8Z3jISUprVwIRReic7OS5hZlW5QeeQ0xahgIhssVUzmSTgpyVH%2Fu5%2FxO6gkcLXm%2FyXx0sUFnFTkA8URw8lbjdX%2BkoUyf3NoyulwTpuBPRgdqmUUPmXGEIWd1Vy8f%2FILt8FsIOAkQdnQAwiuUD%2B3fIJUZ37zvWxrDu%2FCwpAm1Meu9c9wnSRbAE8szmAK1l18XHttdMpJJuc0BVrZwxzJBNDYN2js2qG0Ah8dRn%2F2Xo7SHcxIC7GBNnVNZef3spMbgeMBfogWT7d2qbwHWqXIiz6pEkWwNAPaiBMPcV3VYnyEDedpKClczx1fUG%2Bl38GaZSuVU3QgaWPw2NpdFGQ72%2FzZDc5I20LgyNGmC26cDlu2EHKjEDoK7Qy5eCzesgf5QQ%2Ff9RxBIUiN82fI41zIYHt64zZTBGwBd17askDIFNt9viJzPri%2FP5gD3VKN1aOi3XURCduHgKKUSItJ%2FEyo3EWZkW4mEftpX4d9E8wSxB75pxwZH8G%2Fyjdx0DlQBplJdvBFZz5EYMcM3hvu9ELyJEicKeMMf98b0GOqUBH3FrpwmI8sCT1SVu4XbuEG0%2FDVu72IGauq6yMTvTt0zUFTYqS9%2BI8dXReV2WUBlUMV4j091qNxLwxeM5Mya7zML9rWuJTI%2FFbY7TUwDewPeM9vQYQVJ1n06G4GuTOVMbSNFsmZMkLAtxvzBZFp4LH7EN5XyPXRRCrckZjxVgpB%2BaLDFBD%2F9vZGHEfdX3rrfVh%2BF4aO3NfMJ2PhGDm4U3tlxosPBr&X-Amz-Signature=6a739d61afc6f68e8a1c6799b18334deeeb41dc88df39286a2d3eb105a86cfe5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
