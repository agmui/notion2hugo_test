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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI6UUNTI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJi96douzeYXvLOzpr%2FnUXJWOWiE3dsBhEg0XMllIfcQIhAIfkDn8os8TGYFu4P2UVl54N42lipJhPDfmQhf52ZODZKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKpT4c3VziKeVwKxEq3ANDCU2DSIbhGvFgyNKJG0mwp1xu7uu2OugFCD0%2Ff4ggAkcbA%2B1w8VVf%2BZWCwghphhmDRHFjXzZDPVd8SSuO%2FZMAgEUj5y%2FIkDgbsh0Lq%2FxK3yKJ9rSwnDvgQCl54oxekKv5eDH%2BYyMd5%2BcNusLvoQf2mRLW7zGmxbWb0f0AmOsrrSDZK1xvdbrSxLked2Jm7vcMiHrWW7RdNUyg1PjghsaEcGMDqOXtPyje3Joi62kv6fMfeEvZMW%2Bq0tY6wbgoA93aSF%2FQ2S8TO2zppQmnhDy4tvhhnYtMyAo1M5AVNPyVajtJKk2UN%2FyzmtKvWawTJ3Ok9A0j7ATvyIVYEVBXKPsuZm8avlOExCVr9s3XxXgL%2Bu%2FbBotW9Ui6VKl3D1X3xQcJYYwsLtLf3Zw2CFIWHJDreDGFYjorqe9MmZvkTCr56no5oz2ErMtw%2F8fedk1nfK45GvzlACX6JYLAMTNJs3DYkQE9pdzv5KoddqtH02ncJo%2BrXfyKiw9gWoBqsaQC3ilICqp5D6WNYS6IX4GQKuXJ%2FAgj%2FRZsO7yfYIL5hkCnYIoTcSjkBUD95DXDnQETIfvYq6DZ5lUMmIEPhn7M%2BwnYgI%2BhEBmjWCIarD3QjoDMSrWHFyu%2Fp0EkjNPjyDDLnfnDBjqkAR%2BNet8hImjiqp7CGh6h7VNZiZ3EdsJVvrMT6fNUVqSqm5xWrAxIn2zyLZ%2FmK4ShtnU%2FFNdTm%2B9GtrXIiNLVoTmR2JqbilvTXr%2B897M6nc2TIR6MEKqZoVfGW75S2jCXMXdDRtQwjfVnqJaTetT2W4tB3Vex7LPQfTxY8vYdCefe4VJPRHqfnZg7Vczr%2BCEPTnmaBZ77beL5ys5PPIF%2B4EYRhm9a&X-Amz-Signature=201a26b288ad69b3b6b728705b9550d5bcdfb15903fe6e6f19b5a789b85f15f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
