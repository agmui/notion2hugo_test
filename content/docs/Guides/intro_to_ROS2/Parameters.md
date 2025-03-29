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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRJWE3G%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHWKGB9ta4qNpSOTNF0Dpl9ZnIc2fHwYTdKkkcJuRXLLAiBXQWBtKO7EGHPBDWGdvQMth2bVd25SCRynedtkyCvgxSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMwh2F79clqYMAY%2FieKtwDYEdpAuOrUWbrNbDlzkrA%2FAQmH8lvOQf4%2Fq7x06ojhGbGDF4yFf6CuNmlM12AUP34446WmYoL7FIAM%2FaMHtuOeWQqrC8%2Fm%2B8cV47zVKhgPqhhORJZe7Dlf0w%2Bf7M5ylbQzjtesKHtwXBC8QtuxLT5xIr6vCYNFrZuLKF0ruyMyORuVSqtx8adceLm9bgt34opki0OWjZ3CvbqR9x7TK1VgSOPZUx6hLug%2BPbKAi0jzumV2tIb8%2Fi5k44SiejzkIsTVpLVPyHpvdyLfcaC0u3acZq5Tutv0%2BHral74o5TEzT9OJPiDrwCh1pqZKoSMa5NJgXkqqva0dII56oSOjxO%2B9KCBmlWYrrLl%2BDCQ4oANcxdl0m0GHywwQnDUIoHy8tw0qUmPaRgZr2MKHv47iloNcCRLxGZggP1YyfBHAL9gt1FFfBAfzBRuS0ww%2BwwaglaMdbe2B%2B24%2BFp4bGMX1DsBfHf2mchdIWFt9nwyGhN%2Bn3DaY08U4Iqj14Yfik8DcfptRnvBulQxiCtZi22fxcEElEUm5qdqZJ7mmr8MV7xRZ5QM%2BjBJtVktW1c%2F%2B1QvVzLcUm8ssjtvz6h80vkMpqst5NtTux7ALqJ2rtDDfIyIpQiIXFxJ08b60PrkV%2BMwgZ%2BgvwY6pgECZgguQmkMEb48xIZrXLcQ3RGG3vJ%2BMUJturoOV6tCHooy8%2BAPkjiWV3H6B5mlmfkFlV9DpXSkweiC8Auw1pGxfcJtEBUFhfD5%2F%2BZCggayIV2eHVFShrR0SRniypBk9w%2BfBXGpmg79ZAE%2BzxQ2Lq5x81l2w3%2F8abAWMft%2F48i1HafOTCG69Uyn0iHBhSTeL0cQm5XbFnPx3%2FYGLpYjLclxc4KDOObF&X-Amz-Signature=7da6c84720133831eb6cf1a6aaa40c5931bd875ef48165fc290c2a9f8631ebce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
