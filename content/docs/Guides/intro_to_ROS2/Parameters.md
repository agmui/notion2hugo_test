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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGT2TTT5%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIA4bbJeHJi4Wy4qtjg%2BK%2FwdJczSojl1fLRLIEDvIzJnrAiEAtYTvoUGWsbIHn37DE3DhfoXlDUK6F3cuRs%2FF8ypYiBMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNi8XAt%2BHk9ZsuyofSrcA4UXFTQ37DLPlS%2B7i7pJ%2BuTfskfpRpIfArDKIEPGrDFLP0HmOWdNKDsbd4ia5Y15fj12nntiihZcqErdjXpvbOItsOJslSs%2BgTSK4KOB92eKJWqJcxhOwX%2BsqlfO1NlO7fy4RZKKXHu%2FXDRhp4LnRrTlbNIgj1egqSqYYtkr90qTQZtYGKMKU%2ByaKx40GWVvoV%2FJhHCtXeXxZVHFwKqMG83XgIU%2B%2BnMMGxcndDKgsRFa910EacfLXlQ3lxsWhRRJIzE%2BKFnV4V4nQeL3eB0raIM3Z75JR8w8LgYziJ3NEPGoIioMhbsih7uau%2BYNYjNmCbl3dc2RX4E1G16LG4Lkz61J1jVDeQv63Lc5BP9h%2FjASbR%2FqDWLI1UNqHc9uJo9l7T7wOwLkJZGBiBbfi8o9BArQV8gMF%2Bw1oc2BTVgb0vqm%2FlrKcl3Q9kb1cPdmG9g3TnReC0NZWPFynUKsPkO8GgygzSJXVd0foN9I3maBh0ZHxKqPVjnv%2B4qdqjg%2BvAmcShACG2K%2BEH52%2FQ0n2MasqETQMTutOeSnzYCJ86YgM6TCvDt26cDtw5Ep3kprPmfRUi5g1znMrHfhTSxT%2Fp6Xsc%2BsUXmNNoV10czjqRPlfFKG99CxEVxZAnVHQolsMOfukb0GOqUBmC9fOxRY8pp%2BpG8N5BJui9Wob0GBhkKGVS2jPh1McR2DqLi7SMoZXU2EGoT6%2Fg37Qg9PjFPZZ7jihoCsZ4XgPPE26woHZq%2FuaG3jYsSxOaM60rY8C%2B%2BLYlHKJHDqwnFjEjU%2FNNZONRHkMJ4IMCqtKNPuLbhhHhkRTNepfTQNbH4Kf1G4zAdrtSlgqgBj4QzmIhDOJPcQVe5HYBNNbSzf1m3wG8dJ&X-Amz-Signature=79c2ecdffc4fae05a4b951940d420746e7f237519390945583a451332fe83238&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
