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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7HQMB3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3mjaLbE2wOoj2jZh3Tj951nMqqvdXEwPHeA%2B%2B8m9xvQIgVWzY8uoC2hHTGjJhxwl7tLUhaAGFR5Xr2DT1tfrX7YIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDH5%2FQxv2OYQuM74wfSrcA%2FRzDP4P9e%2FuR9PBhEs7btt3wdHTNWQJ7V%2B%2F2Y36grH%2BX1re3wm3QLI66ocQbyfAsDUB%2FJY0IadsvxvfFyheb2x5YpYRX%2BSmdmoaLeyNuGbVJKE%2B14tyFEetkR8mjJEzc7m05SWoqqBdsL2bObFSKrk7KeLB9LXNBY097SA7XzGabR3sb3KD0aGXnHfxtw%2F6dAhjbQ8CtNznhji8VSkgjTFxYheilO%2F%2B9VVMhnMU3KjUNlFuEBF5dkppoi1Kc1z7%2BLnEMfG9Xwz0mcVbe%2FqKPP4B%2FT8y9PqA4NuEGxuzB91dgwwAzDhkvrTVT7U0mFQCjpVxnuoSypEtWQcbbah8rvr%2FABnfGGfiklel%2FAp3OyOZFV47s2XDoqqx6U7TFL0mrc6TiehqR9pHeJDC%2BNK9o1ekdSTxnt2yZGwsYwZdsFmgo1cDxRXphjx7%2FXTKFxZe1g3lnxw%2FwG6b1T1WgAlm4x%2FhiWEUsISX07cRS%2FrtoymWsTxL2BodtYL7g3bEp9MUVb8t1r1U4Ve0rMogJXS97dpCsyHOGm%2FM1wJ1cqxVh7BGUd%2FU7wD4eZAiGGKCncrpWylfTwvQeR%2FfZqu3IVXWR66UexaHWc%2FHygbaFa3DAaf54eE8j9m1T9TaYIMhMKyC9r8GOqUBFoWZuQYuh815nbABkqudCOtAg%2BfKJhpYh1lV%2BHme0TvPYTYGnMgF8QD4xrumt5yi6EpxOMBv%2BythtkYZrzkzLaxenkKZ%2Fk2mKcecgXE9AKIF2VALXQMF6E929TTjbDm9za9HRFkJ3OYWqGijJ%2BMSg16fZfRvoGBt%2BRpU2BAffWCyj%2FynoopOzKkztKe857GmFlqsl%2FcBZOWu%2F1%2F4xVhoOt7C7Hi8&X-Amz-Signature=22071046c098d0b6ae691f3d80a2575388685deeb661679383d1057c4d5b1c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
