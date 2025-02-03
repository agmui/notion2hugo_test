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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PLNLQRQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIybdl7XAhSexb6qQCphImsB2amEHufniveQR%2F60qNAiBHrVR9Xz1hHZNkYibWWtGSGVRt5vlsQfl2BBoG5BV%2Fjir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMHsTxExMmuPToDnMPKtwDdSNlT71inDCRbgUiAajIoJjoOB3fYCLiZ805o8MInfJ63cd%2Bujtusl9DTUjMSXO8i56xPuA72c4q7TPewupclrRIsdBB%2Bsq7b6yoxnbc3F4KUcLIjMxUG9%2FpwAQOmDlsZe1mtf7eEauVBoa%2Ba26Z6njQDbtI%2BsxC%2Bq0gitRhnIZUua8OufXG5pgxmgm%2BOyM29n2ohmGEvY0hzodBdEqBUrH095u4MBZch9EzLFMtZYzeoZm0ciRnKhswWG2D6WG4qVoxFAaXl9CmmtJE9LFr6VuO6QfD3a6Cd2qvfn7A7SkB3AINKjHAx2FuhGGTPcOvFei02bxCuBUCG83IjMooWMGYCShJukDzscln6P5qbBkYMRbpSb%2BxW439OfsdoNktfV9rogRJDdD4WSR3zWPVLeQdypH0jmKYy3rGoZpygCZ77dEnod0QMPiGziAMq%2BTURK5DJ1Qsl3SmHewxISJqttDJPP1vbAFD%2FTCupnO%2BAm1UDjX8MM%2BqS%2BHIba8OHxFO3dFrbCAtcnH8LzfntE0jenrUKZDyDKadOpmF3fW8Ou1YQGa26e%2BHeAZY5rMc0AjhsMZCjMWDMERBtXfPLSIKPB%2BSYkJSfsIuQEczMTnNDY%2Bn7PYdgp3U5dORM3owpNmBvQY6pgFl8Te2QG70rj2V%2Bz%2F932yqdcxy5SV%2B0GVhB5YcBl2AwJ1yCRI3XXJ2ptxQtCRy9CeM1ofXvxi1tBJFsQvi1cclvqaDlHmH%2BEM9cmAcBVrqAA3VE9F47TNbQQM0xepREWIL5%2FGL2maqOXqZ2pUUzYH3LJRfSeODxj51dnP0dnKVDEwO%2BIEV4akFYzlX0XK6Ld0EEDVDFhxSHsRaw6PGshTNLfznQeVn&X-Amz-Signature=55fc9521f87e505bacbe90a8207e60e216ba6e23cd9558a04018a59ed4a64d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
