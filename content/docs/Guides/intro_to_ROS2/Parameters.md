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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUCKBBXX%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDA7QWJgfYo2zfxRu219gbtcezm%2Fw%2BxLbw7HvLkUEc8AAIgaeTg28neXpcaGWZsGrCgn27EbOU%2BnZIzqGHB%2BQ2kfSUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCn2w2L41dppfHVcyCrcAzjCAzBaPO%2BWq%2FbbFSd%2Fpm46TiGyOi7sAYxMM4f4vbCwOvTEk7smhuJPjphxynTlnMmbmRlUaIWeqe0TuBtNSBi6%2BAosZx%2FtQUbUoSxOKsD%2Bralluu91vbJJKZMXNBa6mNH0Zc4xPPPGkL4YGGzNK1r1u1NPh0uLt9bLeVtK1keyYXs43wd6DSL3A3775JT7LbIJ2JUj%2BYkuiPQw9WlEGxO8a8mdDKeiAmB%2BSjB7A83ezGmnTfOLNpJwQoJFfgX%2BNMtFjSAzpQ%2Bm1CGk6wjdcNi1bKx04PBN4BW85Ibxbzz%2FJLXN8dtwsE%2BHl%2Fmy%2BQsjHIbJ3vxbt0B%2F%2B6NaVgsQ1AgnVlNVzljBio%2FOmtbC6qj%2BefKhp4%2FpojEIblqUAud2rcd2mJpYclxgQ1p5xv0tVDq0YT0a2TLZdG4Vs%2FHpBKSQm7S6FcpA38U8WEc4Xpx8AgBIWXFaao14Tol1U5bGGXd7jds31l2Bk5KZahq9HOlCajjLnVh%2Fe7JPTFejD0sD0khEZpNSFCERRfAZFGgU9yC3k1DxhqHHSdPdkSL3q4t%2F%2FH%2BoK0MnOYbKazzQd5vZXeWhWOYZzb8El%2BMEhcfqx%2BO%2FrgyCDq%2FBHwTkO6ie%2FO4T06pZmUOFZ%2FvzoOarMKXn0cEGOqUBDjG2bfqQBm2DFRliVQtpPE4ZGfjGa5%2B17fnR7VAM0P0G5d7sIIzj%2Fvh99yyizJ3GT8PMrCGdyp%2BFJELKweJicFnW6oGD%2BUq8DnJ7pZ3Aqvt4DSQajfOVqGrwWrEBny1YmbRBUbZQ5nBYUYO%2FYNhvPSOClSmvJPXtEyqScynHo3PCtcKNyrIX4N84rJEMrJR6uUI4SHwo4ZTJogNOkV1NgU3nkovz&X-Amz-Signature=2954aaf1d8132768ae4399d11ed9974ecd4aa0122a53e6f4b04894b42ddc9154&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
