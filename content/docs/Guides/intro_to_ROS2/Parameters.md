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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF5SEBFO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD784BLXtUBv68q3QR31sJDrOjELSGonvz%2FV1ySLXdEdQIgA2WRiANIc6aRHOAbENp9nhqVRKdIQvfRWX%2BZBG8YIPsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFhz4uQ3R5qCDYolHCrcA3E6nhO0uYAqwE5E5hWpFLHNTlh9WGlIUATXyONL1rNssoY6iIeFvgOek7T4skK5ynNaxLZgPLtFY%2BLzxthit%2BVznfrcqYyTMSk5VlXTBCUFzUQ%2FRW7y0AC%2BLrv0iGR27JWVWlLxLYY9A%2BHzqGQnq0%2FLjsv7e3VYz6E8yvOW5SdcFaORF2F%2BrPaGWcX4Xctlbqy2xeIt2UevpVMMhqYW0XwvvjB8sLrkK9wDGZti275KN5VO3qgHPdgg6MmJBSfRF9LH0ABvOwI%2F5v5qTWnT%2BvXsels5zQbjb5hcDYGG2Y%2B%2BjkdrOtZbbiSu28rAdt9Q308ekJhUdPVtav4plUC9a0z%2BTDrkINIZRM9ML%2FZ2YNo4SqyPXdE6x2r2diwvbnrkd3xPjLOV6%2FvLuJCcB4DVfIxif8MDpQK%2BV4zIMQz2khM5avSWdWokRlUIgJNVFO7FlGFo1c8Oe9N0ghHbjsxWGctpjS%2FsKyYl5ozKVv031GvRFWDac00Q3j6t%2FTaV26iMAuC%2FZzoUpoT7DITXooLXcDCtHGIGBlzMMorgy1uGzV8rICSYIzwXrmlZJhOe4r%2F%2Fco5nVzAQ6IpaExgK8sJGYS1QhKL1e0I6DKr0uMajNsL8%2FXiNEh9W4XqSDcJGMPvu1b4GOqUB%2FlhUn1D6pam1WKOSb8XOVzvLRahBXkEOUoHN0dU%2F8JtqTGnAF33HIJAtkzksu5Qr5NAWf8tEUzirOQQTFa41XR6GLUMmrRyjauETilcMlOtlWv3tB01l4VWuC2Cu5gohHP39rg5gOkBigQkkxiMcIcX%2F5%2FpoA4vuynDgX1TdO7sUvbbNRevkhNtvQuUjoZlkWH3tXA4ZGg%2BdBamhOKNbao9CvHa9&X-Amz-Signature=905cfff7c043fbc0f192aab929b1116c70f5e3b03f9d4b32319a9fc127ee0091&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
