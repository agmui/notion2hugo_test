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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L7W6RH6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAbTX8KJrePd00A5eq5LkfrfleaXufIN7HrrBTlh0q8dAiAcweaUHw7TDdDjyDdclucB37ba%2B2U6P56svglZOSYn8Cr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM2q2lmZf%2FOyywGNLsKtwDmtHDxFELWAQe%2BtjZV%2BpAZtOjzmASZ4gA%2FNxO7CzYoqCVem4r2oxBG5BV7y5XhfaNv%2F53Sx1K6Drgyt8rHz5eQZrvWHifcvnTscAvrsDRAXQcXnOH26le283r0Qtzbj9VlXFvroOmmrO%2FhEkKJTwTVu41GxR%2FIKdZl9sv2131naQAZ07OLe2t5G%2FuBX1SOU3Um1HjoaJAvilFiWSeRhwOXUPeXSeF5b%2FU2KfBR0POP2gCeQyFXn1kyiqyB9OV6d52EQ%2BemAQ2%2BoQZ241jsdfy8yTOHe%2BlDuDHbPnqzym6r8Mr2QoaN0R7U2bI9yNX%2FHLtbukeEM0wmpoHlo08%2FrqeUlDeSmSC8bSoNq8d1hdmLZHk4al385W%2FYx46yRSSOUWn9sJPJj%2BJr0flnprNiAKvtA%2B4ab4fRjp%2BLQuJXEjOqAJzMpDyvhDZetYo6m85u9Pi%2FVKA7s40WbsDSHcBX4CEw4XpfulHEu3PG1Un1Vfy2E4Pi5ZhKio7GkU7eLWP%2FunXJk%2Fv9MzPPZ3zixCuho8AiU9fSzoZKsqUt%2F7tuT2Z7nS3R6qTqWPfTucdxYqGNAUoDc%2BU7F6OvLOBF2Ju7fwvvCIjlZFebA1Oo4Ir8fJDqoASp2YYfzLrjyO9hTQw07PfwwY6pgGd69eJMUn%2F%2BnSh3%2B0h6CC3UP1%2FTWG7AThozOSBiZ6CHJYH6AUkl4lMJ03cjAA70NFhbKC3yiFIEoBgYVCnO3n21548KaSWgZIrFvw0qVdMtLHSXx%2BqbpkP768oXJl7g7uOjzSiYd7KqvKkBuUywYieDh0M9qu6haoEH3sh8SVWnUhTmGrvNqoWBx678jX9YhsPH8uIKVzWVNtCJTg9I4I%2FlfMKFJ3J&X-Amz-Signature=69fa9e7e824dd9be457e6205e755779f8546355675fdaa7cc72761a6ebb15465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
