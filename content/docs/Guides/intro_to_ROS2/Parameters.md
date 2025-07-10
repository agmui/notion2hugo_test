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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45ITXMF%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSvQUhutqZ%2BI9KfhGDuaq770Enc4hYKmCSx2AJkKp3kwIhAKaXPLbkRI085lWXQLr1l16z4cTtmXUhycH8Tg91YEajKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl7i01%2BCNVY%2FE49fkq3AMuL11jz9EdTYGQGnu3Ys%2FgtX7gvkVA4jMuOr5MnV7WBjEcNHyXfmo1tu8OKDbAyf9EFgO8DfdhQhqpkj%2BLXR8nPP3ZyZDXHFMpynxdKTyvkePEes6%2FR2cWUxlV%2FRS6W%2FqMc6rgYWdmVTHRxftUcAQvUE7%2BwQeMxVF6WlaS0h7iYbK%2FDQnIGdLEN6lUQ0s8RcRyACoE7N7j3YGMKKgOPeB%2Bl%2B8rdmR5hAkmMXYUThGV2Syf85PbpYRm6INaC%2BaunRIvNAfI50wzl6a3BVe2gJ32mJKz8FrlFxyjWfZPrrb1n9gI9O3YL34pxsHj7OeECJRIn6dJH0m2BByjxxeU6PbaNWQwLnlUypJE6M%2FmpgWaH635zUKOo6iy7QOEqzUKQz9qF9dYAgr9NKsaltOhryEjW8m4FflNkbCBgMD2Pj32wNO4G%2FCdDWLslIBbAHFiA%2Fm6UwDXZlW7uiRMYLDraL7EHf3hoxGOkOPDrkR1btpg%2BlS04A2StkAhVHb7nzLS94WSniIIMvy4Rioq4SAffozmDsPA%2BdLemJP1%2BmVNTmQ9DtVy7nBy8se%2F8UgulZ0kVU3JH2zqedL9N1pyDTUtsFrxaoqiYNYpEyrCXOsh6p%2BD67RozbRCy7uCemrLWDD6%2Fr7DBjqkAYJQNmtCtLHfnp5tVg%2BRJojgwDgvVBy0urHNEVi%2Bi%2BioJqJlPJr70D5yuUiVS%2BkDwhzuzcxunKiXkFMsb4r61qn6RWptG4oaNK03PCE2hDM%2F7v9gggLgLTxqaRJPmcw75bubnAVToVlVtWB%2BNtY%2FpUTUPhmVvPM92PLKk7mAj%2BINf%2BB3LOY1u7hZk8NKGDSMEJcTUN9v9ftSZ%2FI3ss5VpwqjWNyZ&X-Amz-Signature=8fc3f7bdcb9c8f65a569fc01ec5514fd22039eda5d8451f70f9a95cdd7fee6c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
