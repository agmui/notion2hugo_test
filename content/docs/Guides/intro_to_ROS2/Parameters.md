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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFGTJBL%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDuh3qVTrtctF8j36faUEKe1IPvYb5uqrWDIuUDoYTO9AiBDBWNzJiSOV1v3oEXCh7DpeJbQWVEtUj3rAgWpRNoyyiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi4O91YODDXl9FkfpKtwD62rBnJPdHcJ153jmFHdrj1gIm03V7uz9suK4hQPFyTmOjEzRZCqtl9yEPIxsTywJipHX9kfHqL%2BIUJskgCM7ksrZ4qVtasdHoez8Pj%2FRCiAVPEs7xo1b9ow7FnX0vTW8CiS5P7NnJmhv7%2F8b83d5qCF%2BefuURU6L9%2FLDLjazvCQh01L1iQlOuWBHrdjnQh8WoboQsnEs7SSfXYsCtj%2BX0GHoigNItNiN%2BA0KWdNEya5020jSZyeuTBUM36dULWF5mDaPhFEAj2YWZCJ1sFx61j8P1soqLdUnX8ik9t5%2FPz0qqJ2HzKRYJTa2ml%2BDYmtULr1Ql%2BaqfecCkh%2BGB86%2F9e4RZ5CU%2BuJyYe%2F1A1a%2B42O%2FakiDw9lDRRMnUhGDcOC4lGhoLWeb52WcwmhL1Yv9nCboLZ8Xw12LdCboXlL4L2rj3vzjQTGDRPH90T4sw3cMxO6EAXIEiFcM2eZ2aiCn2HnmDP9P3YbX2CWRMU%2BE%2B0%2BriYLzhvWtVswUOeEqYoKmpU156JnToa4tpk%2BXM78PpTF%2BHGbyCe1WdLBx%2F043rAxhiZzEIwSHrq3gYkVqnv%2Bc6pH3r9zLf2GhqxUc18Vd6TLCvJM8HipbJYLTTxGvBv24QgHQPBMSaBOIFCowyr3evwY6pgFp3MZ2DHLDUJEzvH%2Bu3Q%2FNcdpd50qPVovM8jNcJySGI%2FmiNIelk%2B3r%2FAcplIMD22DlbOtDSqEzGzBrjciqFnb54uOPgpL%2B4Jr35AO3Fk8XEl7VWujxpGafGPDmA2Q%2F5OXG9DPEvYURywzav9s1TBlqhgk9WGaaplSB0nGwMlGGn9jQGUl8xvd2f3N2ZW814sXwpVrpNhCJdRpzd4pPC8kprc%2BscX78&X-Amz-Signature=12c5b0397ac3411504ce4ce917b84eb772382a0b1049fdae396c20591a84a882&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
