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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6Z3X7R3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcLNUI4aWoDyRk57VRNNHoFV7fyQWt%2BGiMWpwSSjyWZAiAVnt8xPqrJen7XM7kLqchhPRZqzp%2F9MUdLvzOIuTftPSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxr%2FIAeoSJaYzhJa3KtwD3O19LkPRof%2BymRESDS6kHG58J2JX%2BOuNm0L9hJ1hRCSmJW64VGosS%2Fd2EJU3VKP6ZJ62ONcymWaaRURmHtsLnXItJRiZhawloIJphPuC8EPi8CGxyNGJneyJLSkSshPq%2FFn0vUBt%2BKALWAoTFOA0GX4ze2zEp2mC01l2avd8ob%2F3VlwgR05HEhA8b4WynVWTpylzQKhlUf%2BJDA5mlnyTh9I1YP2V1enJpopOsNzxJFmIVNVeRQ3BHUyJSiBfsZxBNLNIFPLhn4MPXTsqR0Pqxy%2BBwOPJk45WiyyWYfT0fs8ntOdhMJxg2ghd0Jr8YDyVVwhUWa1Sgl1Eozo4CzsVzkdZZgGBP2ygYQIkpzupIrwan4%2FRj%2FKLig%2BSfdOGiBsYro0jeiyV7MfAeS64TvrMZGfDxu67lP0CIxwPYrEbSp%2Bycg600TZz%2FGN56rbRsTOxGnQufP6aqGLgunyvEtJKL9PK1r%2F8iGK7R4sYhsOtuO28Sm%2BYOM9ZvbllF%2BMPpMolgFzNnCx%2Fx4WUOpe%2BEaNP9rsMpsI3I3YxdhcGxigqYhLhUi4t4LTKTa%2F3zh6X%2BX0AZJN2StgxCwbhh9E1lf8hcJjuUnOok0gOCXG292pSFO6IevjmKs%2F3hP9YBGkwqdLpvQY6pgGrqBgBJSFAyKLwUrNLvSKbvx%2FSqisySnvH%2B3yJoCbUGBg4zva9Xfp1D8v6ivLXYDteo1i2yypwjekNNKCrC9p7CmrZPTPb95zLDoJy0zTzBJin%2FweHR6ezsKt37nM3i%2FdPOthe2Enr7eR6oc2tuOApTxayAjDvbWpe9TnOcmIpoNRGeoCVjsrl%2FdADtCs%2BIPbcqdSMLufMYJwwM0KCOCXRzwBeq8FT&X-Amz-Signature=3f583c945a98db7c705ccecbf71fc4bbc976e92b20aa1306e6f17839b97be8b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
