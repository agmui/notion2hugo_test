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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSIRV7UY%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWw0%2BAA1VdJUgG9AlYTVn3hJASEue9uN%2FT669NXU8uqQIhAOXKewbFdOjmNoLx7r2gCo1MjhKTnew0djSHpqQZ0%2BujKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY8rddbjDnAhot0oUq3AP6YI1l1sob62UB81gJJrg5e5HZGYEi8YkL%2B3QxFlSXYgfhW56rQqo7rUEJk2Lzmr6qKiormAKKeqZK4La7%2BScUzYCI4nSw9fdnkO5q17%2FlAYhAva0tcd%2FCsFlzIvgxOo7sXQBWoS7XgPYyDi25rKFHRgOJWoMG%2B9RMTIK5b1LvaxKC8T3tc5ELjytn4khhEC019tSqtHxCvP9OuG7k45QFTTfGC%2BB8wBkPqgoYu6RLwPD3ibEWq7csvuQBrab52LXFk5I6Kd7VEsqSBCjcSR3EuQesVLvQ47OAN4h8iYHbz1ldiV%2Bp%2Fubz%2FHPbhriQt2PFy64e23CiXuWDAnQVxkeawXSyhZsCRHErSKo%2FqJeR2NlpFuDMPZMsmiETaqtGpv%2FHyt5GSTicrqYN6nJDXSDhNDUyyEe9fpvLrq1sYZu5fsr%2FlkeBQkBJmegWtvUq9dGNBBu2KXbfF9P7G9CtoncGV1FdsGdSPv3O0COZAZDr3SlfF9uehUeW3mBNhwFrUsReTTMhWCvBmrI0PAM5S9TbBzPTMfSP%2FNsXgKjUOF1zOGBqGnQpTE1hi0KTBusrXi4ww%2BMP8yZ%2FOHzVT64kwzKe7WCdRnsqDbQZumymw6Cn2st1MQ0jDxCsJdzuXzDuxNq9BjqkAb44K885f3jMZCN%2BWwC7eBFOtrrR%2FjBnRmYy%2Bs0MN6RpqKRb8P6pScdSN%2FQYoiFrkP6MpS9DaNukydy1yj1wKnC%2F4udihVy459wwvXZALBfkKrbhIlICWs7afy6Pgye%2BL2KZbdQxVVV7sH86MBhCq633iBfP3T26a%2BKTSPmZlFZLFLn23IYm9jqptTOm77igKfOLUgJXs2B6ebTERiBl1EEJw8%2B1&X-Amz-Signature=52be10e48a12e7fffc49fa465843ee1c5b6475de874c8d2d667f4e50cb882bac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
