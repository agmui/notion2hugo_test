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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NLU2CWH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASdjgrFyrV2yGATwNYiI2I2cyJdt2eJXw3gzKWAiPyLAiEAnkTdj3MDkxDGIKsUKt5R7dzXZhR6XDILmltx%2Fr2urUEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJU1l56Id%2B%2B0pszazircA7Ci%2BBqC7PviAOku9XWahYbisk3sT%2FQFye48ZRf0Ce9wHNCunm%2F%2Fvw9YVcza0RVmyHczvVuZPrDXUpCb3iokV1zokoVKe4uqD6NxbQlH%2FSUg2ONhFYLyJSMh6GzDK4w%2BFP721QCcJsIqmoePXpoFKr5SjBoonusFx1jHnwB066ZM9hj6prJxQ0JoMVuu3SE6rQmiKGWlV6p5C7ytQYLHqUv8HU4dQRjzgKKrGlJr4qy%2BaVDbQGwXqj8e0qN1%2B78xV9YCM2oU9suQWvvXaUox8zo349e%2FHWtaIZf3dt%2FWzJjAgTVZmudMXfEcmd8%2F0kfWOeenahALZfGw3A%2B%2BOPOBHgrU%2BnFVyCUK1Wtje0lkqm3ts4DgWazAbreDJQ6IHx%2BBAtoa0iAYuQiqjKQv%2BvekcSajMkG%2BOR8cQ0c0Hn9kH92mArRhaPUmQy5chHd2x2AXKqUrEAWZrIlhQNdd9baSM0alQTkd%2B4CmWUGjQHCHDZ5T0xoGdPO0KXxD0O%2B9xCEtT4bu4tALZG7xVxHBYB%2FD3gytD48Fvdg46W23vhehw9HCYMYRdGNWXAROjForIQersaFk89oiOO63cTPTih8LdZdVuk5WImfLdS2fnRYYAyZsdNy3kd2IZ4ejgeGOMOatjr8GOqUBOaLgr9OCP6mS%2BP33w5MH75OvWnTN%2BYGQ5lmZaslvHBjy0e1Jom17G5JNHA4wMIGzXVW61NzXVDUyQI28qAekzbLgg4zwmElrZ%2Bm2blWabOppVbqrHF2Y74WdiDi9z%2BUFhFqopP0QFEX9SUCG1LenRl9lVqBR%2BycWnc4GIzw3NpRYKqk%2Byn7Eq6y2yXb0Y8BSHkSE6Rh3VTa87MrTaNeOa%2FZDmEsM&X-Amz-Signature=df3a36365209c73555151bcaaa8fb1954ec5813b3916b3025533314f12f233da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
