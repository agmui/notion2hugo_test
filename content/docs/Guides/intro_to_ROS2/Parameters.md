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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSMR4B3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIEP6agvH5BpGj73k4UGSDW5cLbegtqcGK8O6A9b%2F9u28AiEAh%2FVvfKcpysioAqol49VkcbzmhC4Z4pR9TQqqRp2lV%2BIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBePR0a%2B56yYK4noOSrcA9beBbNCs7TakJLfVSeGAfHWQ%2Fh3YDGncisFrYV3tGC7wJYJPGisQEKZxFsFOjIZVPPlaHLaBALzSnyUP2fMUPG%2FtgdqA%2BduQLB6SSAEiXoj0bZpE9aSXPXTP%2FXzQ07y2knNKSewZ%2BOLsZJDs1nV9zleW1f1naYJdLId6DY6OV5ssQ0%2F22dGluLpT0k6F7F9Zg%2Fcp8StGWle1yS%2F1sLiEvGqeDi2M%2F7swV9H%2BHe%2FH6BWWtSW8GuZ%2Fzy0WMMP9Kd19a2n%2Bx6J5f16gd9jfncsJ4cxONieJ58RU3M%2BPwUBm2gHleQKlKInf8qsUcf8omJVBJDXkSWKk6vE%2FOQsBr%2FWjPnM2ZQ33IFiUbGMI99UXHJ2KXyExtQUqjoYvNzi3yvV5XXeEWw7CCgsTiGJ%2BwRB%2FBmbbdFujPVMYKGKW7h1i%2FBB3gJOak9nJx8dVX0gquiH9qwt%2F5Mrt%2FpsCjxrY1uqiifv0qmfPDDZ9NfE2fhORYVxBW77Y6JlO8Zl6DIpEzNH4dS7p3XGm4n5ED5ywb68Fz93Wii%2F1%2FuY3UjuYMuFy3WOzOyYS7RhHUMLfOfnUEH4SBFKMXTSRkQdXTKksplQcGpfZx4WTu0hIq7J2sAOY7uY1XJO6nrddao2t9dsMPTs0MAGOqUBiyuDtIvvVe4a0eVS0707o3EGaLYgVR6eqH%2BYUN8ZcKUoyHyWus%2BKSs5DOnzcW%2FR7dzCV9bQuC1FyFPFCsKvOuA6XT3r5tO9HF8sIAwvA7LI5%2Bvrp4715v2WT7y482dkhs%2BW4BjW2NM46x%2FZG3PRtlL%2BYx68kGBwRRkm9jdupeuAmdUQZ%2FOoibwZRxPvGuIXydNFrqRaD9Ep1cZaD%2BG8vqhl8GTgx&X-Amz-Signature=a82f6de9a3cb292bdc4640579f51ac7e1ed817c16b6a95452b61f7f001593143&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
