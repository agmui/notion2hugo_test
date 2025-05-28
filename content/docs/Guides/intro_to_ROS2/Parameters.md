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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VK2A3W%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDer3yP%2FZuECxLMsdllU6BcbR7KN7Jn7f2XGjsZee8EnwIgPRL7LdNJeyoWSLraTsXeKqcukdf0aVkAPQsLwEfPtIoq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDMamzYgksCl4VBy%2FwCrcA%2FLU2JGOzIkLN0FPGSM85Y%2FdQ2m5IQpDFLUUrd%2FwF2%2BeMHnW%2F8nj6gH0rFSSQE62vdVj3YdM9Kf2ziIx2Yjv4U%2FTkXzuGWc6VH%2BGPLLSHfhdy3SDVdfidLD3yHGkpX9ZtgNUmP3NAB%2BjVmY5ISXr%2F3x0CrPIBNVN9yqqSkIuoXyShzkMpUjTSPg8NkGRlf83Cix7JxSzBZiK%2BRBORpeDbO65t9VHzLQGWTMgllhyNiLbtqI0733Yo7fiwVbRUroOihxsaP8lCvpcU3eOvht4DbHYmz9wk%2F41Hac9P7jt%2FEcinZZg7HYDzgMXDegBAEmDGme2s7arasdykwYJCVvyZtJyZ6Ca9SQL5H%2B2lAHtK7A8dEw56rl1rMWBMlnlpXv9DrnjPdH70Ffscfn5mXUEVVDJEsHTYfVXbBZLox%2FNHD8mQ5P%2FvQNXqLtjIefPU0QyCsEVjdguU%2FGnDosvPk%2BGfj2Uon6S40w%2FdXeoNSeJcKgK9%2FS%2Ff7%2B%2BEHux2PTeMsOtlBtIUH91GWrKPdwzbwoJkywFF027MTpPs6zeFjfZLb6DJRP5DxfJPq5d6cM6HL9wsxuQfagdeJO0pSc5%2BDRKEWhPRcIS%2Bf9Y5%2FCho3WbRc4b5g7sL6W5akDWox8dMKXI2cEGOqUBi2L%2BU%2F%2FD%2FFqrzzwiiTZgR3XqO32Ab%2BLFW8Yb3ktxQ1dVSY%2FopqSHu3hvOLkk%2FakdBVbXpGOYkzLl5bF8EyaAbArbax%2BO2TQXtCZDdAjCbk%2Frun7GvEYqdIRzLyo9avnhE%2B2zgGNahgRKBU%2FfWT2hwcWLrT1ls9GcHXqz4%2FByBysDJCyk9CAZF5GlBB2CXHbKciTKdGVix6aVfXYdCmiiyvr5tDAu&X-Amz-Signature=c98b47789afa5c331ba54b9e59e7bd7f8dfc7d073ce99db464dbe12868f2123c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
