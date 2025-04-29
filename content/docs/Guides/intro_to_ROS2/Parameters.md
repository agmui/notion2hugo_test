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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGN3BHE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmaIbleIk6pFQQ%2FiBs5fZ7yfZjbY9VnsRszf3htiCEXAiBWypZLEa%2F5P11kSaHPiW%2B2DJzRoHkeeE8KToAcPQ5qViqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMswA6229KJfwCinXHKtwDLA5PYx8fq87RoV2PuJsXuC0XjkgbfqsrFwp1dCyZAT%2FNRL5LYxoEWNsSebbT%2FjcOiOZdYLR8vE%2F3%2Fh6bKaHBESBOXepoWpvTPj%2Bfa7CProva3SjrJzVR8B7vT6o256jxQPg1acH8aK61%2BEoztxtSrGkCkmpjCwdTkVlSkJAWvsqAJHg1F9G96yd6PZy8WFvGEXuhjdjB9Qnf8Sb7I%2BTrgjZEJW3F6EYHEUbI9tx5pi6d4NwB61uNcFE0vSYLxcVvQuxw2nbPwBcJrVGnVbOXz79PMJ9YzYZtYVZIZcARn9MOuf6fmvEFMy8ZVhCUA%2BkRb0%2BoxXKcBgEm1c0NgW61atbH%2F37zKMLuvnveSBYKWT4tnwrNfKK26cRJRtYW3qplwmcgEt1J2xOqIOenacG%2BBSikollM0Aexi3JPoPMgKJEatD4fU20mTYsy%2FkDezGGGN3LLjBHTCv28Esb%2F%2FFSNeXWMtgRoVHe2M%2BQnVpfSwkff%2B%2F%2BjZSxyFccqNQ2oh%2Ff9VYt4hQCbp%2FTYe1E%2BSq6t89Tha8TFre8thozl4OCUcj9ckPiSfjP6uczZU8BsElXlzBgRM2sDnwTnSD5b5RfgmXcZTr59MEJ%2BhTXKfNUhUuCZz98iD9z5Ueo3qZkwpODCwAY6pgGyN4C6tnQ4clc6jPQ7k%2BjdlmNA8uqx8XA2vljUMhQDJRRuczlM%2B4vb5WnaFdO9eHaTerPQPkVwPwmVsCRN%2FiOkZ1K3zpX5O%2BAkoDdbLTELqkwUbd%2F5bZ2w7ruM1EEYLzJC3N9Oq94LMUYOA8EExP9CBHntpri%2FgaRFiXp512dnmVLkT0uu4lDihaXmsVr5Q4uSm1%2FZMUmafTQVjXHnjC0JrmP9YuWp&X-Amz-Signature=6a167c41f1cba317931bfd8ac295807e1b6e102152721e5a9fb5aec53c64717e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
