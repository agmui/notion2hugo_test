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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F3J7PHF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCNNq8mVUwG4uwcOQ6zhf6VI0vRTsVrvGpfaPr2X1N9XAIgFogeZBaIHM9B1bqy%2FpIp%2BqtjwEa0zgqdc5Ugk5yiFiIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDK1A5aueoefFBkU8XircAxSaqxPPgwbpP%2FhOvzUXi4wfwIGNN9N9ZpN%2F3TkEkzUVu0gBPY2tURnKuUsPSrlD38WGrxgKIuCJ2miWLj78dQj4kkmi1hfcLB3eQfbaqSuaM0iLjU%2FAlbtK291w3EhFxo2fQlV2fbASwJL4vWbFRamV8JeiHzUz2oU66AMcS40mYY6qjpaBxUC8W5Fj02NGvvXZbw6twfxnKhGAFlnvH6YS%2BvsWCZf79RgO2ED1vwveUbHD8rf4sfkwAJ91KZJL0Y%2BrF9vv6I3HuODT1gMnCR51t%2FH6H%2FHjzrdivxYp5nLDolUOes3SL2LkMALPuRWBgtyQQ73MCWGtbwAQadj4DKN7yyQe%2BzTjr1U5Q84SPUnBx3TvAEOgb8GApnRb9rcY%2BFrJTdp8uX1EFLzP5sTCsCrvXaz0wVRDPaBHCyUGMUAIoCdNqNEeA5XLS8vHPDfGpRj%2FfcjYSITLO0sAzCQsGDbLMS0wEYDHhZHBq%2BvaKF0KYq6NYgZ3smV1w2uMMPiCisf5b4g%2FXoEC%2BlkdQelEy8cBbo65q8QbGndZbkkRjlt%2BJu3Gp4p1Vp%2FpzUy1hOGFl6%2F0eGXs5ubEAd7CYOTPRM7J260NBU%2FMCRob3jsdquS%2F%2FFfPJA0%2BHAHoEry5MM2C9L0GOqUB5uhDVRUbXxPGKns%2B3GQDvh5QpLwCVBNalEYkKJUS1wpDUgtknT5AEOu8NKpTCNcs5RV%2FzDtxhI%2BVAoKokGoNuFTbpUM3GIDnRhV7ftI2SWtkAMKxFpm3y13CwvcXo7SCctZL2AsfrSZMgm2Oj%2B9fD71%2B%2BeoaxgJSowX0FW71C5wO8RBqspTSA1AWTbE5xu7qnAhxeVReTZPVbddUzD2DGPOa0ref&X-Amz-Signature=af668c21f4485131e6834855eb4cc023361fe0f2efea8c335a08dee2edf9ccf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
