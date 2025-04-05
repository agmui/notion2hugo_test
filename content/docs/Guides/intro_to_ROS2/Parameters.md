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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCYWTZOH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnGmSUr3fdQzB3WKBhTYj0u49jvxNbnU4ng0qVxPiukAiEAycTspSFupRNTmowKs1jKK45VFvi2kWe3Z4%2F8Ss2tV2gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIOfjUd9qdDouyqDXSrcA2cftTibpon7Ssw%2FZtAT%2F3WdSQ%2BpJPiNsNCteSFStP5HFrv3590XvTMgM0Uvq1Md2SqDja3nl6M5EG6Qmd%2FAxs0wH9HFQ2dGz9PW6F6AqPnChjRfmkVYYakzd%2BtLgXIS1uW6ph0y5J3BZ%2B1yuUGFt3g8kKic57bNLATs6ZWUemK4mkxQHSgue%2F7ePqzkP%2FXWGDGPHDiB%2Fce8JO5rpQ%2FP0XtvyUCyS2k42SeGubw3ii6KwDdcsMkcsLkYnCXlA8AZo8%2BO19fHb4zh2JmhzkWqI%2BB2C%2B0%2BX5w7i88672nBwrvDRvROxMYfjqreTE3g1GWHjXpSbO7vgsPmBiwSYnKqhGfDeFJnQyhZPPUV8HGP5C45Mt4x9OqI0MaO%2BaFOC4TI9nFuweF6KWO1LDx5OsDuBAJxesYqrvVK6b7MQA6NZK04JORRB%2BPKDTSO3NjqRPZl5Kmq0gFoaHyPwk7gWfEqtmfPYzaHe9dft0TJgOZM7TECmwAEFv124VlJfuxxrq%2FVqZTc4Fq1yvUn0yWsuemkzYhQxkwmEjuf7k2m5LmpdBNNp3%2Biq%2BLQD2YWNmqCWJnomiAP%2BwM0fmMhFhJ%2Fb0Vh3P0d4IA4NadUjaRzbmWzxYX%2BZUzkSkI6SdEWh8YpMIHkw78GOqUBdcdDholXjCHR%2FnZj2aeCIIxxTyb9gVJXFT873M7j70g0mUlzI83B8SlXxWI4V5Y9u5IKI%2F4N%2FsXAmJsW4ml2EJIry7u248p2QdvwTBCK62N%2BUO%2BKoV6BfWOPQZN%2B2xlYeqqc55VlSHyUhN9f%2FPwieyRZ0kW2MAJNea9XPAXjdaPKHgsReQ0LHNqgxvm%2FCRFB%2B2zZkLcYhm8kdJ8GnIXWZou%2FElMH&X-Amz-Signature=4e643a8ace9669fcebc4971586bed3860157b6d990104a3334618687d8fd2f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
