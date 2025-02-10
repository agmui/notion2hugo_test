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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JJ22V2D%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHebmjnkuw%2FEZp1EYTR%2FzaD2HsqcG4dd49v92aDgopBAIhAMBZBci3Uuc7LH0yPZi%2FXD2Oj4xiBhu0e%2BGCu4qGRhdFKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLB%2BUgGV71kDSig2wq3AMbn5AGOPPepscd5C9UA4mZ6oScdFGaKixSUOSDjsJHiA8v97HXPeZNu35GI5cPmQgJzMzoYoAjB23bu6ryI3BPtitjgt7mW4JF2ru%2FinPVIoDbCgXkJaAPRH7PelnEp5pqTe%2Fg8EGO0IehS%2B%2F80iNZNLB9h8Luj1xZRr%2F1ht%2FU2ydlbAOYi0qboF0T4Xu8JGz1pycaLn4EuML6C%2FJPcD5kZfPtpJKqWTYgRTIYjs21uC29rEalfwQI1%2BbA9AXUVHPHltkwCwN621%2BLIThvJHZT3wxtLynbct6PXTayR9M3KQ72PfyW7whu0MSBLZB%2BMXqcx%2Bud1%2FXOG7Yx7%2BT2XEYEOhwd1PAQW79OSb2GCwAY5PLeyb10Xi1dN7DD3Uq51T2zMc2f6OWs407S6Ouler2H%2FAAUKUu8rsQjVnXoLyUk9l7Hle2OUJJl0tr5hrngHywfLTrl2jg4AkI%2BMlBvZcVHiSuxHrWeUPNOIJDw4wV8OwBQeRRfioobGR%2BxZD%2FbWTZiZpisqk3PtsfG5icBg6pLzICJJMeA7Vfomy7I800hSLislAYZVRwXsiCkLunKf%2FjDgUVdRhhN8lMMoc0uPKnWYhKUAWXAp2Qr%2F%2FM7xqmYw5LCuJBvRMC2uoDphTDnm6W9BjqkAYKmaGRIaPeK02r7fdGrJNQxCATO%2FmmwTUyw4vTT95frXWe5%2BjF2U%2FbDcqaaFGlqJGnie09GNI6WIQFPBrdMlCyGZgsZT1%2F8bheTu2rMxp5xv0O0wZGC26DqFkK3gnlg8gsI1EDMEuIW1%2BFqTdDp345ObAbhgB2GEAz1QJoN4hu4tPXgnrlzy%2FFPE9NG5NiKierTc%2FRiCsjD3VwYAUjXSygvoy0d&X-Amz-Signature=d79f6f2e52873b19bfb8926e51166537102fbbafec1436f091f9938bf1ec0053&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
