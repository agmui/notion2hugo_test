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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAXJGI3O%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeqIA%2BJPYYHbx0%2FALQdxav5PnfpUjOtbwFSHgHVscVCgIhAONAJsmEuR2EGD%2BuDX8%2F74zfcLh7gFqguf%2Fc6L2LrxDmKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4p4XfOcL4C77oWHwq3APhU%2BzIYX%2BnZIvYgPGFChnx6nXiZ4GBH%2BtoLFnFiPPY7XNDxldiSmCe0LrqA0bCYyGwLdgT6LFtV4Sc%2B0Eqqa8DF6r6A0lam1BY7wUQiLq%2Fg%2FUbZ1UCA4VW2EhR%2FKa3nyCBREFxcWwPBwP54KtoYtNMBiU7vdQyY2YLf6ldk5%2BLMsuBedqQXLtgpr5HDdrigwbcT85M2HFe%2BV7HhNg8a7X6S15ZxBLYHjoG%2F9ycpVNvQgS27SnkM5A628uSvCmC2fzU2QW%2Bu6eJdOQzm1%2Bi6hJaXsXr4XiJxI9tTejXdVL0WzO%2F8IJbOY3y41KayvpDvE07Awt6MD4AqljURqpRY7gcu6Zjwy3gW7k95wKDotdCShCi6%2B%2BWTEoEKT7gXOcSjvas16o8EbyYUbZYjEkfpvTnGLZDxjPAyK9V03eTGy0Oy%2BAKCR3le%2Fy0YaDK6QUxPwdg9ikL3m93Vlxg7MhEO%2BReIzNNtj%2BrESIAqSUHIJ1Z3C2rF2%2Fjv90ZfAce3JVN%2BvxppCZBNtJtiMEqEKdjRBn00KfxUAOT2oxJ%2BqjA9npqnh9uL6lgwU7%2F%2BSB9ABKAylQ5ygOegz6ya5YFJJI0WL3GN7zvWViqd8%2BJx2RzN5azmEDEMslRyFntTQ3VpDCZ6rnDBjqkAQb5rgvBmS16tHiXk2xRfIOSH%2FWiTF%2F3%2FRrkaKqCJr32ZkAVSs%2FDulnOkGEHrOOvY3oy5KpWKhkqP0KSJX%2FGwITOIDMJ8avCiKBJ1%2BL%2FEooVtCDJq37MZgRhjuXumRjb6Oudfbrv8LSw2FmVPkLh2bnxBBq%2BOoufPLlH8AdHRs4FFH6cJhntbnxSYfZyFMZIMaidK78uX4xfdQtoFfycTz55poem&X-Amz-Signature=e7bf6a8ccbd2f3712bde50c417d7fb590159b3e798b9cfec4556682db90ce747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
