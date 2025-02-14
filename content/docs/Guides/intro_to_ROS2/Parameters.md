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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65MMRTZ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4bRDVo4XzS9pY7uIlTX8L6WRyLBcB8%2FjyxI%2BRSH7IYwIgD8z3GJdaSmNUok1crYq%2BOmZu2%2Bqllv3FRA0ZDimoYGIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEABX65fugPtcg%2BPPyrcA%2F%2F3DiaYycRseHA8rjJcrXjX0FU9di0EGe0LCI8Kn8vbRHavVECXb%2FEh%2BXg0iN68Q9Z30Yphuwg1VXLU3%2FkP12jR5jYOzGWkjqsfSsy%2FvfbLl2O6t2ue0gVrV8KzsBbgksxVHsUwCleEqr%2FlmxArXs5%2Fu%2Btazbw8NAdtqmkmbinOQEYjiuCKJmqU6HoZ1JBSajC8Zyo1sl3NuQ7k6Ikdd7CZ1mDQ7SDg07%2BqKAmntwGJTLz2WwzBRz54Zp0gKENBz291D8hMCDxWtwKURDbbQ%2FzdgpGOGtkEuuqwaJkDsYcyuVapmpRKamsz%2FRJVXfRN3kLrYqHTkZvwVs7pTX2fNPY7s1VWFPr384%2Bm%2BVU%2B7lE0mtNQuBvOgZ4wGpBWbUWc2jBLOWd3aWQbofk9bv4zPMC69b1BwOYaTOuuFakOr9R3dFvG3rDSyC1vyl42jFuorHou7RzvktB4fCybzmxzmJ3ivZ0DSixwtM%2BshiZOf1NoFR5d3TW%2BxPCGIu55keZGhOmdBAxRYjdEs2e8IVGRQzIzB0JIrlqctw3u2olSxS3%2FnqP1PVu9SrJ4MH48J%2BRHzLbyLzq8Nablz2mfn0C7tkFYN6%2Fl05QX7XVkbaN5mfeluWj8ZwLn7oZUMQxhMJyru70GOqUBHclr5KKyvYXoCDRKCHSfa8PCchxVOA41S6Un77a1P%2FlXLxmqdNwlXMr54pHwhB1XjinQerdlwtT7fVyTdJhewTfQefc%2FgjkwPOTOcZrX1kwfjH1N%2BzmEUs4fEqJO1s%2FRJB7Z5EfPCDPV2sOcEIvpI1R9x8LR60uru9KZ6CzPNoHOq%2B%2BsNtEZFAJnrI9Z19EF7QGXXxBT8n6uC7SD691xxnPOYpzo&X-Amz-Signature=06fe0724cfcfe3ff581629f3a28640b0e77582aacee134f211937916ec8c9e62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
