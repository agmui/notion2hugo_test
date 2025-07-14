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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDGD6B2C%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGF7maZlnsJSYJHQUuWFyJjHalfSjGEnDScilKIwf3xiAiEA8jhsYv%2BHWg%2FHhtMc%2FlD86IzWTe8cj8Gv0go%2Bgpk2r4Qq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH30NdCrUhW3ff4GIyrcAwrYAVrjHztZHHrUiHQg7CA9r77WO4bPPds8%2BCPkmPpp2Gp8DrWQ%2B8GnT3l7DA3q%2FablWqPy217fjIk7XvyNw6hyc1CdejArVc68hCmZKLiIquYivIXsPAN%2BBC6ibYo%2BlfGts34qHKNSCwcU9ej2ytv9J5hB9H%2BP%2FTtVCXGfTuQn7EN20W5YC0SzYibL0%2F1%2Bj2P%2FlttQSZCfMsmA0sgjQbhDnxw37Rh54lqlt1DulXIyGyekvcbYylsnEhSjC689wxG0qMixEwesq6BiJtm7WOZ47tLblh5zj1085XVqDE0weBds1fZI6vN5VSSFwxws4ynJI5fdCUJUydMnRqcYAHIreITj4rrlyAcmVI5o1XwBJoX8ZVTBKXzQzKG8wdvBkLOgh3aEgh2I4i54xRoty8Le%2B1OBEvV%2BeJuOTu8F5enTYPYnAHJYcBDrMs83w3z1ylmd8ji4WyJcrq6vmy7SGBDfGCSK3HXXCPCHCuPb3VP5MtVmpa7cM2Cv2qOO7LQE8Gp%2FDJUg0qA0LofTXfJvPxHQwC8B5G%2Be%2FPQU%2FMhNlAIiuuXkWf05KRr8AuEZ93ly4OyYtX6I%2Ff7Xyj2tvRk2XZERnVYf2652xdB%2B2TwbRyYyncDX3rg136ulWdOXMJOF1MMGOqUBZFxO8qZWeQrj6boA1GuznIUtrRkxFsGbGLqA%2Buqfq3EFGjjkm4%2BKLmbquW0Gtsuu2ptxyqYTA%2BqAZaq26E8K7vEWkdEt%2FRUShi3C7YRVM7U92hoH7N6ewyN37S%2BBdFI2cCKfT1EoGSGTprhOemorsk%2BTDj796dME%2B0tiNWObMFkMKNVag1CUaX0Us5%2BndZHK5YhYwALIs4s4%2FTaeNtOzs8Y86sMT&X-Amz-Signature=857a3fcda593f35d01d8d57c594c2fb6d81d7744bf184c94cfa78df196a48dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
