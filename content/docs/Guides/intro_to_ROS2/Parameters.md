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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2DQU2MI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCV3Trko3lTkgyoeNt3cfl%2B%2FBs%2F%2BinH7bSX0jn3zBmBQIhAI9Z9v637mmr06zYMG5rJeaeRzgNx9fY0rwryBHROPjqKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4hfMWozres6FIZvkq3APfTuZ6HBs96nVRlcHVlltPdfQ3Ij99oLDIVy4HAZWUEFW61v8bqyF6O5Zejgsh9MhmbLM3iHvXH%2FoCHfWukjm0SJaWFNtL5iJlqPohPVFL2jYBbIs9jsn72KRpZZWzeIrZBvHS0wJsHjg749J16KChIRLUbEH2IqesKZqIEOFvo3j%2BD9d3kzRK7Kghf4CGxCTYA4NWmJu9NO0dnrL7KdeU6%2Bz3T47I70Dg3sBX%2FNoVJ0SMi%2F7Fa0BHENJrPP5VgaFh612RPwwWlPkDBBEeX%2BYRb2RYMHFpjxC2V0DIZYW9ZE1TdSMK06p79c3a2lvD0Tv7lpQOLiWbrfogTo0K2Kc2fJ8kzuaNNNCaolyXkGuXR7V1BkSqNsU6tzpnpzRREdCulaNDfKpPCccMpSuSpvOmizfnK4hE4MTE3L1pnDdb0fskI5I9G2efL3E3kM2Z%2BOyuAXs5pzNp2gKaXqgBheNirZXnLMl5a1iDlDSJzUvKMwna7IShR2m3059hduft5P2IN3SF5B5Uuzx3IEyDd%2F9HcE4O%2B1kZWpA06N0t8r8iobJenS4kSISfyKAxTouU71dU%2F0%2BnkuCRijrJd6mqpkXdouO6uEQUD7LAH1BiykK3MbJgqJrWYM0TNbD2%2FzCVsIK%2FBjqkAcTbK5I0szdtDy0K3oYwycMdV2ADVznMB6LnxwCxqJ5uQqFUjqKltFXgmnrw9a9zHd7AE%2FI%2B55HFSM4rdjKtZzA9fnp5GjGHL3aIMek%2FE0sh0czqVWzOeh6m9TsNbLRr9HTlTmEmwFkuhbkprZYDLOsWQdF8VIkYMpdH7IzFRxSUjxw%2B13x788ejX1%2BkczyH5pKFEliXC7cVyAf7k9pjGq6Ivvhn&X-Amz-Signature=e9433801845e3e72668e11552e9f0c8c49a1857e2a851483a0a436e3b9ee1b44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
