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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJH5T7X%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDFcVlPmbRyQkgUM27rUZCWGto%2BwZ5dYIZMmUKxIJycMgIgJQ7SKj8xSaGF70dO2xyENlbhXSgQnNX%2F%2F3YLKkODjecq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCOAGUtokZn%2Fgwn6wircA6US2Fc17eF%2BWMF9tnBi4K8ONrBSD%2F6cllkqLmUtL3dAQodfdn7mXoo4%2FRisIZzaUFtXO3xyENy5K1Qpk1pdCAMmhBmRs6QOFPATMbNK0I%2F54Wvx7zWZUpRTkwpkBUVFDviSl7SWTRb8pF0t1WL53jBc8rxgfZk75%2BbOo3x74EGUAM%2Bp3JyM1cvFQm4w%2FJ8Xj3fLKtYNuCzMjXdbe04y4XYzVnV8ytCluhc37MD8%2Fd0RmNZ%2FNXpBPng%2FkPgMKGnlGURvIO%2FlCx0NvB%2FuVivKTgiYwAO26WgRSjtWWIkm6pi%2FGOjdgsqwP5FkNI6bSFcu05OcNPETIJmkPhJ91EgPV3lKq%2FgkTUkRFGrGJ69fvKtjKIBJND7zd8CCRRtRb5LznKPu1qxc5PApPOg2B4jeRiczjZXNKU7GANSPB3hp9ZokDteVKyu7ojgDcoHhsjCAvoovmTVoXrq65PZc2L%2F1gXecsdUOyP%2ByCVqKK3tmbl7%2BThLgg6GKXGgPH8E1X46F1C71LjjItf4ZfgJWWA3Oag1LlqiBIsO2k8YUlyzOaVB41ftQ9k9Ej2AwlXZcoIPgLAxzqJ8bDlQ0%2FwTmXG6TOB%2FRVkPt4qpc21WsvWAZmL16GRLLoFG%2BeyS9uENBMMTv7MIGOqUB5WVakFcLEto429FyMtS2mtHOnrSxkDoqi2OYNMRU3kSqix8IGzq37%2BnEfYTnRNtd%2BGWj%2BpNGdzpx6gbwwtj574G%2FVb1TroeDja3HU1fUysckvyv0nxEOxEGwryNOMG%2BiWUe3jKnfNMPqTQ2%2F%2Bej73qvxiAqQVya6k%2F%2FOkrapYGGQvrqKUn%2BvZKNtaOAJuQTILzBl8dQETdwQntLeSm5Vict%2B%2FHoT&X-Amz-Signature=7a47706cad68c0cd642b3750fd486f7f6c9beb1b5a86bc9af26f538f8075353d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
