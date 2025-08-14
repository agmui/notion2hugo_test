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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MS3QBR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCCYi26dFPbOhValTDHYujNXFvQ5ehXyIbHClJEb87bYgIgZwiERSbmPPRBUArmVGDSDbmCHUsdB2nALffxWnXelc8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIPCY%2FvMylj3Jrc5JCrcA6eA1%2FrKb59wkYRYJYMrGZ9QGd%2BmZG3CndBB%2FNV9DN5z%2BYbBSd8ME8vpWdG4BfoxEouGv%2FlJFD0CSLOgobaCIIfrQUX1FW2fdHvamDi4wI4kA3gZmeCHx%2FouefwzEuN%2BZc%2FaVhPEBekPqbtUwcJiUFuQEEb4xiBFZTMmugoghD5WO455bDFiXLLpV5M0jJGsgK7Ds6wQGOJ%2Fj9sgsIv63OUZ6%2BvssUsqnk4odC6nY57L9amllfbNcwlgPzxNLWD450irNYNxhJbsgWYk1R5bjZxOiD7QMoVqmFUx1BLi7NyN5Olnu6P7JOnUJ41AROni0StpD2plBObctIqUJONaWfZOqLykj9d9WdsBH0EP7uciL50ys4ZkNyz9dc36dgJbFQTIWVhOLTKFearEN%2Fx%2FxDIlLkHXMIX6sFRxziollg94l43FhCaQ0m%2FlYKIB9aWPBSD%2Fm2ADTolhsirMzFO2W1pcEPs4Ff8Wlse3NPk%2FZGyUOMhvi%2ByoihqKCMNiIMQbHRSSB0vQWCPnD1%2FLYngRqpZ7vD6%2FErLyOZ0mUQpu4zp88dEUTEfvdvvcObNijlQI231JgXv5YJ%2B0O8kNwzZqKCVgcB5eXn6ev9aCeDGiDntsrmsVlx1jXsI2LZGKMNrC%2BMQGOqUBxaWyC%2FPgo%2Bl5mm9ajhdfky%2B3r4O%2FwaSk5mwDRhXmUdNTKdDhrYRDOaM2FIB1CsbVd4NXEzlm3HbUkYIe3T6SeuYHRvQWMHm1Dtf55Gfoa4toLFMDFjKQswr8%2B8I2iAnLIZCQWKEMnRYMlUrGsCRz2mhJQq093EhhksZkcO666O1uuRocstPRaRh0PYT4%2ByMifXX2KBdUaByo%2FNyJMut2T0TrIcfR&X-Amz-Signature=bb0682a2642a389a3c06d74f20e657e7444a22a1540ae8ed4e580134ed2229d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
