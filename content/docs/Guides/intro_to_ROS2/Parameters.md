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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNG6GLN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENRJxPoYnE9ICUIkQ12eiB6uXPCbzqTYC3B0NXC7z4MAiEAxSKuSAxmDsUpMSXHq19k6l8YkVM8y9LkHUFZe34Zwa0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNflrf9biKXMwLum5CrcA6mqjiwsuNxHSLWNGFKdxRC1b7VpQ%2F3fdul1wBXYSsLezf3QkEgIypQC%2FP7kvz0qnJJuys09EAzf0sxF1vpSw3ZH4KvQMTnRUmAFHJqmtUSmvH2dzKmJJdiftIWAmtY97H0PjNxJ5gWBxyLGhvBo%2Fq5IdNoFqHNdJPMLNqJfvrYMZOWfrsDxLwnlY4oZuB86pItgZ%2BGprk6qIe%2FkDzr5fPmz5VJ7SqiGlacbyDGxUzqi%2FsoSDebwOhELjLHYANGSKFxWwCbJ0p9MJM8JducLsTJVJDBWRXlcbinBd6cOrnHJuMB708lGvSrwY8I%2BS2oe1jjpWwPla6YWPJ%2FVpvokHKqUknFkvhMNcANuw6BqivQjRurYkm2vvR3tTuxXzR%2BBTsmEW08xCcATr29tQYh%2BYwwqR7NAlZQoWvfrGG%2BkiEqv3irt5MKe%2FDBDVaTJTfULRWZrEP9lI5bVDJVtm8lh1ini4WWVAkCtqdBZbY8CJ9la%2BgT7fUDXXl2ItFGcgHQwVVuhzedOlgclPR1nSM2T3ceoUTWeiO1wDR2zDccYLL%2F%2B3dtqCZhtgaCttrHzk8nOgNty6OB2J6slDlLjksYTGlklyb%2FRY9YZ9YsAJUIvoU5HzTspNXbX8ESD6DV8MLnwi8IGOqUBNEq3sYH9nMrjZZmf%2FZYNW%2B%2BTS9dwDfTezSeuMeIxrvD4xvYte4uqrY3lz5o9ZpYQdiDo2E7gMCUHtMqsokkJ8gtSd9LJ2tagYOYcUe2AoL6kwiWybvrAxnK3X7uqgzHDfK04qsQYg1kBYzKaHDXFlqKDlVSDCbdP28w3%2BQoPKv0ndxACpYcl4ED3auwkBwNHbzHUmPWqhqKIhH96CR4bWSGY58mR&X-Amz-Signature=52d5222cb01d8b4fe10856ba47cdf5c2af7b067cf1ad033365e3e8d71d753742&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
