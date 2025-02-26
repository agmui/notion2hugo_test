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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLYMTQWN%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQC0B%2ByzVw7AdPhupI%2B0kVljeZYAyR3q%2BkNkP735DmdRBQIgci%2BG7HHBE5lD7q9sZItxsp1oZ9SuyoulcHdgx%2FY%2BEf4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJLKbW7t%2BJm0kIWOLSrcA0SoVOwzWjIefLVhR7c1GEoxnJqR7kOEUgM8wqtHVVd4slHbwTPJnmeAiXBnUMzDPIePNYY%2FgiE6t1BqUxmC109SRN60aM%2FiV5dqRYW%2BSH%2Bmc%2BrivA8Urzeu3oIkrCvLcMId102BBVX%2F1wslqjibQpPczTZbzkxAaqxxxFU533rczZDfGsxkgebrPAkHlxI8zVZM12DbbJth3cjq1qffqGOx%2FItklPwFk0gVeH1J%2BblfLdLg1cvYbUnL5u0dSDG2Vzcx0d8%2FT13YypoTlNtQPxrOKoFURwTgh5IOVm9fzzt5U0QCZiBUbgotVf7%2FmmI7Jgv5lV1X6SIy8MwGeXRug6zKjrpMeI%2BwLdQHn4plXUe4RbLnX%2FolV1PcIBKcC7UGuEOx%2FeuW%2BFJD%2BG0Cbs%2FmKAEuaAcYVTc1CrziG4eAGCir5%2FfE3RTXnovXiLuvI02asF5LScRZM%2FWCC8fsCl42LrOXFRdlbf9rpcF%2BJYkSz0mMuuGBnovVaF2pwg%2FJPZRUjVbV7JSgsiGcf%2Beg2N8FHQJohmHYU2tYOB2Thdizt4GlMb%2FD3236eadoXw%2BIwEE48cCay4x3m21fTwS%2BFHxi4E9xi2MTrz0Mt%2BWcVDWW21sJdmxsaZSWcODOlywfMKmB%2B70GOqUBOVigU9fhMR1b9xx%2BUfzegFvuayVtTeH9ZNHkQ%2FElIdvLaQtwFUjh1j1enP8jdl2v7liT%2Fv7I6dTlzU4PvcT3hUwnMv4FXEek25GPj%2FqXtx4kNSLtMjB5ktjZwIGXABP%2BRPc2yXaX1iEKA2%2FEwrAMFd0z52QMi3JT9MLQ1YQi2x%2BeX1woJX8iIFUkIHTVj4TnvvqVEF1G4omYAnIm%2BCqIEQ3w9etM&X-Amz-Signature=8b4674c2297af453ded80abaf5521c6fc79d0ba8894f339ea32e4a7b2934f140&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
