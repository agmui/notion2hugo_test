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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VGF74D%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIBLcHbrvqgW8VbwFvN1vIKPYqVKb%2BnsdR%2FyVWfXn1909AiEAhWR5FH3zX2kO%2Fg1676I0ss6OVZHRcLbAgNtknhVksxEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZaR0bY7nSam2r7oyrcA9ZLj8lGX6lQggn7NkK0sjZZgfN176AYNC0NPvNsIe7sn7rhEcQsOPpznheDfwLm3LgQHqLk9gZiudqOPqCMWYR41VYXIQ4l%2BYbgoGQp68AU252A4SCC06%2B4WoDD4j7RwSmZcKCZG1GnXRtVZWz%2FhfGJVRu6zUF6PWMTwEJGVIZtkvnEpcEakcMM35058EmfE4TQsY460nuyYM1CTHjAMTDZUvlYy277N6A84u7BOX0QeXJEFa%2BQVjG7A4xp0AnromQNOp3hz5s8HPr1DOWMGIQiTHHmJaycgwOvX1XrJuAhvOu9Caa9bF8SmTLcfd3pkFdgPlWOAztTfdE%2BR9X%2BrKVxugibJDAGQsDaodM0NtKJodeTQs%2FhvcH74kvdslVus8QlDLTYxh0fkHw23v6kv1q3donMiXa6FLHtesSJ%2BdLYaQC3N%2FWJZr%2FWf90p5imMXwdPuMGzo2dOQ%2F4Vh6%2FA0elk2M1ummA9bajxf9mKlaavfiz2UqtGTXqNku%2FKqF1oBvIlIABr0RcGo4ry9Q6uIFqw8iSKH4IZa0zA6wRODO2Rq1Ycd4QPP3sRqrxy%2FAMZaVU2QWe2iYMR1Rpc%2F01AuxhIJPfxuPr3ujSWoz57UjNDfouPYX20y3duCwpsMPKFhcEGOqUBwpGXZD8rJu%2Bu57NL1%2BPep%2BdqH1gIlkbZxjO3BszTHa57r1LaAqHqETJdBgDq6tJUDjmbMVsrws8dcDPxpTKLb5c4e48Ui2TsWNQj69Rah58heX7QT9BzIAOqkFlt6KqhQ0fyltFeBQUl8Kx0mWAKb4lIYCxrc6h018H5nBfpVMsEOVdpn5SrJ7Hc0N160Mrv8OoACw%2FaZBT7hiwEH7BjQqvamkFA&X-Amz-Signature=f9e038f6376e90d21c965dde14d4e4dd10aa56991d562bba16cf48fafd041f84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
