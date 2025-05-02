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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VESJYEEU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDdxp%2F0EGWx8WyEKle6GtV6bBOumJT8wgZflQfVJIuFYwIhAJ5y%2FTRiZwFhLVEMBMz4BhvMSXOU6ENe76Qew1nMpqVCKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz72XXHu%2BDvheB6GsMq3APupVAPvH2FsuZ9CnMAedLIzSkJJzjByM9b3vsLQ%2Fh7vRP%2Fn4KmOkDLLRPuOGoJxW7dHXFsfOuWZiinv9FhR0iXA4DkjYvR5eSVq2o9U4Wm7Z0wqWzyrtCzNTHGtwnOg6A%2BxKG77cCtVyUWKPYdN3tZB6rCck%2Fey3jylycWZlMZGMdZHXDwfW16ItQeQ1XncegdynAor03ORbOp1Qyxx26Fmy0aw6D4PB5uYu9Oi2WGF67BEkcjDlXP%2BuC4MBlyxDAm13%2BP9gNJgSkPjYANwu8qSsiTAh3vzLIUTZYFXX1h9xxm0p6HR0MJlFHjOShEDfOlzZZKhZ4NKxOqNCo6xBcor3JBX3Rk%2FF%2F0qI%2FC%2FQ%2B%2B7HYGBY3p%2F1UcGUTy67meBeuuBmJ6nrsnjf9uYErEUSDWx7IXUyOdminzBdNq3VkwJb%2Fi%2FlYJ5tcK4lqv1b64rxwBc1vemBgg0Vk%2BiP6IEZ3x3QMZEdLYK2xns9UnT52XgWA6qmo3GdM8STT9IEPyFy%2BVTcjaoF%2BeiR0pCRfCdUf1dnMTE4zOArBOQe7DQAqmMjOpGagf2pGMk8c09ftFDPl68nYmFQaTXhoE13fSVoecJBaV0UFr5mTddyfsiUegxXeaoQqPHir%2F744VzjC1%2FdPABjqkARZ8rEAGJPsoD2WadZqMj31oOTAliTa1IW9ZqkaPhBZldKQ0U92TKeuO%2Bi%2FoJgLe%2BYzJA%2F%2FrZcGIe56gJoqZMavC2YLb6yy0EozRp3%2FN7u2g0a6AqCmryY36NcAdNyf%2BmfkrIjDZf5diL6Usq8XBOOcLLn7KbzNeeSSQacHc%2FCWPgMVi0l378I27dM6AKA46m%2BIZO4NqUd%2BRFV0APZFPnqAhGfbS&X-Amz-Signature=f423ac0a6c42b1ccc0b3b2fb45332df89c76a5d7ae466cc26a0ca0d51d2fc55d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
