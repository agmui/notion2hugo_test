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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TNBEYEO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRrmTTuP44ukxInIFwa0PZLqvEET8k0QbFi3doRK8d%2BAiEA4vH5WMwm30woIiqafTvZ30%2FXrk4KWpZGa6cY9ooar%2F4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDA8SoJPWQDcNVZ%2BGBircA0FWzCEXxexVWhC8yHYfMBIzHohGHjJLtSyqK7R%2BMdkU9UqIIMNnbp9%2F0JC8RdjgZCVBB7fIRDlmwAOUu15hsBo0me%2BibMwGrxpSopOF86unbir0IlfaSG0h2A3Ll2qohoKCKqnQx2jz7umEDbv4orxO41TYkaBoPfH4o9YACNtz4oQnxrnN2wL3vKGScnRlwti33S1QpjbSIiFQ%2FOcHOjuCZr07cBGTjtgIwoyZYXnaivXqgKi6k9z1QKHiVHau1Dzdu4S6I2MJB95rDXXyfNXOBBUYD6LzQU%2FX24yWIytaIgbyVSWKKA3UaYGUmaAeieIJvUMze%2FUknHxArqxfJv3LzqJNrA4d1QKrj7DdRvc%2BuUP4qkEbm2Od5jO9%2F2i5L3mixVWnOelOPuewdHLAOuw2Yyjuwvna4bAsXTsK0S93pTFdFXcZAid7%2FU83fBXp7QyT%2B5dG%2FKz2MJ372Y8uM4CUJsMDImf4G1zM5cvPpjExKXAyqY8SDPI5pqzhyVaeYq4V9%2BE6zKffzCDIM62PXUeYYm1Z94e05J3yBCp%2FQqYhoNf68V4pyYSb4%2Fidbpr7iAWMzjtJyzuwc6SWi6t1vtyHp1yu9SYiu%2FvgEtH56p1p5A3hl72oYm920E1DMISO78AGOqUB6S1EzYPFVF4%2FG1HJp3dQSlVFO14JsMAiHNG%2BNdKPk7x%2B%2BztgQ91aH6gbwb6NdFpLkxWkgthvg6H9Wo9MQUbuvqcZllPgN77FubixrW61QPPc%2FOTAzBPdDuNxhnfeFmcI%2FO5Inzq1yVjAfNq7Zp%2F45O4mUkEq8MkYI4r%2Bc5ksosdnx3o131%2BMg9XMnu%2BbAKxA64cxjEfvz5nTJ9P43e52Xo1pqFtN&X-Amz-Signature=9c7ecd546e5f4b6d1f724e966b388a156afda084db8e58e07dd6f7ddd6d83a90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
