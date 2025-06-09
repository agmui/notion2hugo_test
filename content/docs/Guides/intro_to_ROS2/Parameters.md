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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MICPQMA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJ0qE%2Fi2fku338tUJHDMfy6iyxyJ%2BeDPiAT0Nr44HX0AiAWossxbQtUDVFkWKv%2BcVXXGY9MC4zhk1pAH3gGFjykuSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG%2B2YJaEEOz0pdzHsKtwD%2Bggn8K%2Bx4Nz0VFx2nKMHEfYckJxDlJCMVdEy9mmka2Fwmh1owguKQpf1sBG1mpKK%2Fz6i7yB4dNyWyH6GYn9vx0ULvBf0XWG2Y3e%2BoQ1MVneXn6Xzc5mVcZDPzmwIuUu89F329mQkHSo8IlrR73zimNYc1zjQdQEl982SweSfm0ykCqUU2%2FPwtsnYlvLil2pgLjXyP6WMPCbgvsLbWPf%2F9SKcA%2FlEH5O9gGCCHAUp8kQdNfIHyKYc4nCFczyULa6KQGUhlTVsoFjsTpkF1I%2F2o0H5o4C1QOgck9WSGuAJgajQ%2FfE4ToYvRJFJj4SJOJbx4LBzKvmgQ20opxc6hkpGrU2ID2g7Xo7IY8wiKMG4jqpHCTtGje0bYBq0aBy3V1ldJTHnKTFskA8LpJXq42QKe41uaywXiEEmmZ19cjCKinxmX3mTXfLToQ1Fkmd3xRPbeg%2FhmUW84tdm%2BMJcsxs8N%2FBbzRgS8ze9cuPRWwF9mWVFkqRq4V65u0Zl3tNn8v%2BNNigHzUY86be1Dvl4sgDdQIdx8a5KOsTXdf5aApxqHS9ogb42KCSWutpPOSP8AWfj0cU2Tkd2UXDHWX0Hios38KoKWJEzB0PgYOm9Rp0HtdhNJRNJp9hmVQstI%2Fww2J2bwgY6pgF5wrxXEL%2FphNuWvatzdwJSZYFiDGHZc7wy4st%2F3zHgAF0B%2FzpozeJJ4RK4QKKrV6nVY%2BuitHR7JcisTcEPu4TP9wB0gxgPWJpsYdxTB%2Br%2FDVgcCofNmj9Yk1uQItGsHc7zmCOiTfooliXiCMQL4O1R6CBCd7bvXlcQ3d1v3k915jLHVT%2FRMDvLuQCQ2F%2BFuYhdEKfrYvQOW6s4uLo%2FqlZTBRAaeFiT&X-Amz-Signature=695adaa95cbab7878768858174fad8824a0f2b15dd67752061ee7bd927b1571d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
