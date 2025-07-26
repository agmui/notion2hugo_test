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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR6IM674%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCfLQ3akOXJxbxkYM%2FiI2eGoJXZG9RqsgXAbqiDsjqcXgIhAK0DvVf6H%2Bjm4AE9kZG9YnSnks1%2BGPQyWcYDJWBziRpHKv8DCGYQABoMNjM3NDIzMTgzODA1Igw%2F9hQpkWb6alqkGPEq3APE%2BZ%2BugyZyS6pkA8pSdO4zex0OlOvV71NtwjEwyoME4yycbC4pjAA8%2FogyOLNPRhu31iEP3bliKiqfj5x5Mvhoh%2BamSma0Aa%2FYmiNgQ2E2nixDFYCZE2zSqIEAEl9WJKdDMphPuM%2FszfWmwFbZbhiPmeJxeEbymfyP4jvjUbGj53hVIsqCPQk5qk6M9%2Ft5wIt20LUufrpP%2BYTFmA1I5SCb2Kc%2B9tdbE7ImleKdcvgZLhMnlPA%2BO1Rp8HxT5LSLBjitn0tDC2YR%2FpCvGJKNkz4uwSbqMVykaMfeKI58t6Ih6q%2FD1PfIowsOTRXQNNmBEt%2Fm23lnzKg2%2F%2BC4ubU2TlkSNpD%2BrQ6vzT05vj1CdiqqYH23pG5727rnrspgX1EeOV23ntwWxIsP31uC9RfxleFEjjLLseJH9JE2%2Fdsxaz0gVhcJCnC7hCqfpCDmjSvHO4jUafyqxRqDRjbBeAfNQK1TlPJjY6eiutghomT%2FaMXGPoaaqYpjPJuDBWJOQatGHuqTeWT7Dm0jVKshoGqJAKOQw4px1yHefPMfnPxlUil8VL7lnkanNwVLU86dUrR8aqTDp6gWyj2nNCR1AwYGxSmi%2B7mEJYFKExxxH6q%2FQsnwSoYkHC1czuvUtTe6ODCu%2F5TEBjqkATO2TtR%2FzQ1vwOy1Hd9PO1UWxEzXAH3KbA9Br4fT727eENP2DFny7pR%2BLCDOfF%2B7XTTnANMCL0Est5iwTmimMCxaqsEkDWdl%2FNQMCZcToCnXh4qU7JiYZYw4rtotHC1%2BcVipLs4qorr5agdmX0lFK2UNdFehyz9GCKo30WGv7Mxuze16xGBX%2FGaWm1uMX4rOdOuFbLYlLdc9HIai%2BeNNEguX1Kyt&X-Amz-Signature=a7d69e323faca5433c97363f0e05c2dc1d132dbb24290cd7c82bd290988d84da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
