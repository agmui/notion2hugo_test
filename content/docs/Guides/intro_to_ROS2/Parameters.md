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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDDDF23%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBXe7z%2FnGnHHSXJQ3i1wxg%2FBYMSsmGZz8vF7c2a5hRuAiEA77lroivfYoTfXRE7%2BJ1VvyvWkd6Nb4X5Y6SWYUKSiiUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDINSeE1f%2BwDNVwx%2F2ircA9IZQkqm8Ja9Muy%2FK4iPXLefjp433JPNAj303zbAbVAlNFGM4gSZQ%2B3fXIVIYraRK0CZwD93tsAt9KhXrJ24UirrDX55uiGow%2BWanVXXsbOQRWhURsYJLESx%2BKMsCgsNFKbOV2y%2B12TZ4ZkgGwNNriPaLnpr90tUycUlM3hal9Dmcv1zcxXAbDaOAxy30GwzC1RfB62E4gCe7hX%2BIM03ymd9r6jktxUoaYm%2BgMlec2FkErZ1exLA9TQAZZE7brx6RGKmYcPq5VPspFQRZyfPBcsxlhiO%2BXVx7dd2johRFRaDOo0eBulpx3Bp6RgWF8LpnL7u8jUsaFZcGFPwNRYXl%2Fhvbj0D9Ag%2BYVWCD%2FuyQcxIBZzhZlLoGmKTA7oRVIWhtAfMeCN0K1jI7I%2FXrj0babrmvJ45sz59GATP2GRILdlwvh0QuwyZpuOOwv7LUUuTm4ejQVDB0WSDM%2FDv2zDya8zO0qnqHEwGNkbT5t5kZtXnMTi9DQzlQXAzsle9Fr6hwUtaK2ejszMK%2B5oPbvh2zhiSkZvlXKQJtwHHJCxLff6PpNA%2BDVvrab5TyTMTnPc5xvSjTPDAhOtqyk2oZbYr9DH%2FANw5jmGW4ixWURaeKOm18fjiQEYCNkOxCNRQMI2DvsAGOqUBFoXlm%2Bklr5%2BxrIgSHO7uc3ClJReem%2Fu68je2k%2BmKfALh5WdOFliVK9Cv0lthTjJRjIDZRnB6l1PJJIHbMpwEvri4xeOn%2BNrwlv4XJCgJc4rZWuvVxYhiGza1w5lqDpYC1%2FWU8WjTwKvWmIlvUv7LKe8Y6AvVei9fb%2F7eagkb1zOLPdU756MaJJOOnbaorlQlFvHopwj8xLVaPWKaCXlPqWE4ra5l&X-Amz-Signature=9cfd10ebea2578cd578a9abc764700b1d73a4aeb60c5429ebdd24760dd0c0a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
