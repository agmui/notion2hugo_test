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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6OTYQ2U%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDs9%2FRN%2F3cAWyr6e3C0YiS0H6yVk609bk10ezv60UwDTgIhAPKlXUCpbdXG02ZYTrcIYED22Yas9iLM5Zw4jn1M9wj3Kv8DCFQQABoMNjM3NDIzMTgzODA1IgyKAemUfyLaE3JQ2bcq3APZlhRT3ebkZzAEK3GAuds7pkHSCK1DoLO%2F9PWrSIj8I7St2zjZvzc1EIsg8UcmAqfam400xyqeBsIrcxDKgKKpqWj32AsvYSJ1tdS%2Fn3Lp2uCYYlSUpAaZzxsIMS8a%2FW3v0mViIIAQMJU18lOFcyESglVx3X6nrWCi2o14ANLyQ3325DL0a%2Bg5OmNWs3sqWSzj8xOnndHRt0mzbLn3fExoZqZ9vDbkwXQOubL0z1b1vVeAHGRXYhrZ8Bk%2Fhm%2BawUYi31HE8itSEb1ZT5njc1SnJg8LJqTWGxPPgsb3fAs5PzMdyG4vjib9M52tWQGpZ3jym9dHtVeUPftoYBI1cm2xJzznzGXVHWJ82NBDkjRTSrwlsXy%2BkisUh8dtPGzIfvZR7T6I2Ny1e9ttq1%2BAIy9sZ5AAHL2oDTQxDO4nKSj11BdMOotj8mmgnKLKtyI4pwvCKf6JRKjsGnec4GlqOt3DAEMfTOMrrrVeiFPBfoqxsBjeylSMtoTYEZ67tsI5igVEFEmpnounsh%2BVJp8aIspHuldc9%2BV5QhpXLuOpkizt%2F%2Bhi41nB5IcotAPyORcFdDd0NmplPl%2FzuAGnJFYYWr8F2NEpsQ55TySgI06vwnUk1A3F35WX0GaR%2FBViojCll77CBjqkAdT5mCye5kzJrpyGtOfSmmMUW0thGzG7CnD%2B3icFpv13nkNwXc%2BKElhj8cIl9FHCuH%2BpaN0QwPzSufHHQompjlWdSiA8FlZUmrXuWlhI4BWaeywHGFJW3LEx4UfiCBPNj%2BSf9QuJxSFx%2BhJ%2B%2FPqdlPj%2FSvmo9PDMLXv7bMSf%2BCNRgUGXiMwhblQrYecmrMLaERmEOtU0tfH0Yb9UoTwh4JGnSRNh&X-Amz-Signature=ae1fb2da135266bf15742d8fb8aae94c0730355f27c2401bb1fb02d059422699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
