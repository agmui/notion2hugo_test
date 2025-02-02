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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMTL7EA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdeoxQAJZ5OLptetanizLjEQqWa9deXoNYQzzH0VQRUgIgffC30A2r%2BGORtzdiqkliIOVZPGAO1mPWpOA8EnoIbOEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK98muhgAODwo%2Fe6aircAx5iGbQh2F3pll6NqqeIbs%2BKidCMwByQmgRP5e0cS6GnRXVK72eACFkQS17%2FJCjbEL7CPnTQLz3%2FI8FQWFYxftxWiAI51GlqrRFku2aW2xcQ28IzjI6%2B6aXqeQVgXJ1ulfyiTEgF8louxRjlB%2BPGuHmewf1R1HO6EM6jBF4VrW0VDov6N0Lzom0UzTwRhXf1I32bf%2B78pjgJBqBJLX2G7eXQUW4Ft5rc7uSOMCuaGtezuVddZDgcPKvnV494dm5piR7UU6DRndtmroZsQMw8OGyEIh7lsFqcxiMVkTI3PtVjIYUmD1tDP2qKbboGIwgEVNzjshj7Pso3nGfkg0fUPWsKr%2FfdeonXqmnMW7sVz7MB%2BgsD6FyoM47sEpfs6ViIYMwtfZmQ9EzN3MHx3TH5HsmfA6164J0kQ9kt8O80wMtpLq5bgd9vZBaqjmQ%2Bre2VL8qeHC796HIL6KRFQXD7c73A8JvFPLU1oCDuszSc0sQuKVOPtiBehcr2%2FtXywgT2%2BUD%2FN%2F4%2Bpd4itZSnE1P8wsT1Ss7p0w4MfPDW2NNsvirLwGG3tPgfiug6%2Fmkl%2F9ffykCYGFqr5ojAu%2BDU8l%2FOGnOcFGP8DHPH6J5v0LR%2BgJhMFR8EAsPTHAol2dU4MLGd%2FLwGOqUBJpExftdS2tMhmh8i8Fs2OSTbDIWlOQX4EjNBrVv9frTOlGvwVyKtsm%2BrkOiGzOEFK6HLr3l4kJ9jnkPDb8CL3lfxza4fcQKM04U3s5gr9e83CScEepePip0AXWGr4Fi%2FIb1lyt3MN8npQHQm9OGMZDaBpH6hyXgU7NXCE%2Bvfz54dTEJUWN9T6WHO%2FStOm9rgahVjH4mj1ZzPhDT7TplUH35w1dED&X-Amz-Signature=8e642cfd66baaf04be99ae49450589d1920205ab16d5fd91c47a0f80a062edaa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
