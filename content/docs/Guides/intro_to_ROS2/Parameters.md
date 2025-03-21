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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L5W5WMZ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFGUOXmG%2BEScj009pFI%2FbNlambwjEdopxPIPd4mP%2FxiUAiB%2ByrIKN%2F%2BCqd1QYkpGuFPvMKMNrr8lBTJEwZ3o6MGtuSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoM0sD8O91OucnWsEKtwDFekQMcH1qxAB%2F3MzocttOyiSWHfRoSR8Z2jTqARycCwlnrLdr0fvTIhQxgDIlyMicxhpQLczRp2LwvFMk9AXzhVc4jgDmcJVeLj2J38L6hpWAj0fvlW7bMRt2%2BXuu00Ukkr%2BU%2BbW5tOCxVEbGrDqiKuV7PXA6D2ERmTCIPHx4hNpehbiifNFG39LzPDlKxVZLqomwoFwStxpVWWGMHuTh1uKORJmP92UwwduUc88N0MT3bqRNNF42XmDa48%2FyHD7m1OnnkylEtZblLw2IkLQr0gsVORfRl37q8NqqwPENfDTuT8HnfxZ0jAW%2F9KZAUYQYPxx3KgE686RGqIqAmoQ8mq2LAdGQAZgq5kZfo%2F6YQsqnXzK3vp0JmXExJu1nC%2BxkhtD9AB8cVNLWo9CAh4IVRj9azkLyGXwf40oGAPCqqsaZC1sQHYfBedCNmG5ct0sZlG4aZsP5g2V%2FUEz5bY9HN8izE3TxHcSZY1w42N5HtVn2QeymaABhGefO%2B2ofvxpDEaP0ll390mpSG0ayYQ%2BG3z%2FLNxursla0ln9FUTrEL7uQXhMWWMcU%2BFZAwUefKhHXvizuUQpM5F7fDMcdwX6bkY8KX8LIhX9k1McBP2eWfYkw0XwXV65mZznOAcwitv2vgY6pgHRBccgeVfbkSeXSMQ9gDu4Ddcmy7gmk40bpWyNMSPAcqwZxK1%2BKxj52KZVBDI4o7v5KSda3vZ%2Bd5Tco0kBzYrgkbFCVmWyc46JoAG8kAwcQQaCPjA%2Bob04pm2mLhkQbwio02VeqFCwmcnSNayIkiiVI8ZmnmrWPmkbjJ7BaHJ73YjPaAXr%2F%2Fa%2F9XtUbbmyASz0KpfAorVJZ0jQhcujuSfHs%2FqcWx2h&X-Amz-Signature=6eb106e5c81b550ab5104c06180d1b1e17c32b8708a7d0cf9a65abb786a38b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
