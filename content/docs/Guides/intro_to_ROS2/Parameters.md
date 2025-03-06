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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVDXDMJQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbX6NnYHGvdDKD4X1q5%2B185xVQPzK%2BlFBnNRAz4MyalAiAYR39S%2FosUlqgUK0KNWIe3tYGF6wl7%2F2q9gykvacshYir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2FFYPdwSoaKBB4vAaKtwD4i5PNDTcNvL4jhqPaq%2Ff5x937YiSo3fSGUAbnLf9XTzI8nKqBJ7eY%2B7P2rebC3daeCypsiFdhes4%2BKhPQxOp29orbi7E767ssECGskf52lDbTkRKrXsROVCST4Tn4VFVBrZitDUfxeGmuZEq%2BOViQVl%2Bo8Etscu6sET7Bkxy2m6OOst1QQH6o4NVV%2BHnqiDbWpvvScpCzDU2LTe2rZVDhnpqqvPpaOcXjAYnmreYiWhoxpPA4rtmFxLBbbVZAk49UPfu3HHwqS2JsfuUZQBRcO3Nf%2FBx%2FCPqVtWtP5dz9M7kFu3P39JTucmnaX033BS6phraWT5YOoUzNvIId35CpkmmfSv5dlS9CQ4VrDp43GeFMDmZ9cgrAdpyCAToX7B0hKkDXKwvOpKOyilg0dAm6aBX%2BOD3b4BJhdxh%2FDM9txtKhWiJjnpr2oHRzjqGWtu1%2BMYjL99uP4%2BTT6b1ym%2BuU%2BYL5dxdQJtfNEPHMPJkbvjd8z5XoLaO1a8M%2FEH2hCk2XcxiPP6eyo6PYCfvuol2h9Jj4Ur5YV0SJMjw%2Be4gcDy2jy0Q0pCNtXlCTOXpFQ8dZqcA417cHxbalWjuvqHolK7MX95jhPCkfyvcxvlwh3b0im6MvaItig4g1cQw67SlvgY6pgF%2Bf2gfTEnA6upL8nrlakCrcDdGo%2BffDOo2VUVjQIIyZJvS0SkBKlZe5%2Bm8UyMX9hLNoozKzteimMM1uoRHxgv1jB2JQhIbqpfaHk114wYf4Pu7zc8w5NfR6%2BG1zo8YmtLRzY4TR2zMQqSZ%2Fnsv%2F%2F1yoX0gjDn2jnENjA0GzHlx%2B0NvgHNM5qU4E8BDFLaBKvs1pjJzr3rtFbHMhKAoy8injE5XialE&X-Amz-Signature=86218c6a8acc4207710b97cdabbf7f0288c4e1357ed07030efef1e3e7fdd0b05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
