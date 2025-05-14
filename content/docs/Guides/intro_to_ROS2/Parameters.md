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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI6EP5KH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFvUi%2BB28YmpaDqgY7lnmjzRjSu8Glt7acvkd22qoviLAiEA0ZRHz%2B8tQ%2FyF8wY7MbMXAFG79XhMSabGJ%2Fv2Iba9sgoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7vhAXvbUmp%2B444%2FircA3Cbm%2Fz%2FC9pmT0AGMz%2BxYAPuZWE9%2Bl%2BkE9XJMnRVXTXdG4p6LPmInOTkxjfVOoNhstIwvIHDkUImsYu8YINK67ic4LfOt%2FwfPzTWv2zvPcbFCl0XtsxxZ%2FVMHXADJ9S0BaZPyF0dVYHX85ZFpE6%2FXqeKP%2BHMR3g7f4cU3ZaSDkgAFAULWmK%2BbBvUcW4jS%2FnShAgGUN3x7NHVeUrV1dfhSk5gXfEp5GwaTgcO2pZLVCwIoMNb1r5VL5ns44UaaLXrrTKTe%2Fwf3TzZfii4O7yNj3Lo9WoX0Puiynfe0TsnPa9YuaLlETFJ2%2BsHfjlyZhp8fyw%2B2B1hFvwrgPko84ro%2BEYUG5rogwIuvoYWEBwMc3HZeAG%2FxvZtfWoT%2BmxpOXlx%2FNT9HpUXxoYz5a0FrENyxNa18cXxfO%2FlFVf%2F%2FVff%2FbM7DQuCB92H2Z59YHjidC1iTHxg5hKvrO%2F%2FRoeGYjCTWCZwVLhYkNZQRXjkO5V7FrcSfJbrAQ7LwlFCy0mz3jW8O26Uw9vtkF2fm9AwZSPl5SaBQFapOUTkXrQmvCxyMnGBimt1S8cxvA6doHdOv2qVMMD5MnKu%2FFflQyf9tFYdycB6FxV92TSMwTg8UJGtCj2rF4eyqHGUuLZJYZNAMIySkMEGOqUBFjlWmoJdFY8jRL0Ef%2F1Ypa77uPfm3k2yda9Cd3mc4b61eRMOu90Yp1zs2gVEZm7IbYCm6EBfY3tq4Lbv%2FBO4WaZn21qDzIiD0%2FFPy2QvQxX87sOtlWO%2B%2F8y%2FOFMFaqq75jilv4mB2fGJuiXJ6TdbCqMr2EahPkIKn9WvK98DCJAEcShpucx5ssnYW7P%2F36kt72HcyQDi2O0e92apD44VNYHzFK3A&X-Amz-Signature=af787ff83dc3ff846e7eaeca7ce936af314f61ffebe9c18e0c26cab285c22360&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
