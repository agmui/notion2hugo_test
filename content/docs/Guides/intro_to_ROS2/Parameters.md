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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSKPDUY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFxMmTS936NuXE22b%2B1QV7CX5Sl7oVq8%2FA8MpZfnemYyAiEAze7b794QoEaL1GAKzPJQoVcgxEtKzxlGa4nlM9%2FjrzIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpAWVowrR11qwiFSircA1EH%2Bi6oy1tjl9vCy7Y33aVTf91X9fIe%2B8c91ax6DSwSm%2Fj3u4D4ylsMK%2BggadxlTmY8TrS2j37jJMand6q2dYZ%2BLSEOmQiD0tNvHA%2BG%2Bnc62sxhchaVCiuu5UwLjLMTztz9oYl8%2B4M8Jade126SeTuUWhiJhEf4TmAzikii20hoZwK1vUDaGujE9T7vbGftlnhig39VjFCqZy%2FFaDs4HlAE37OfgNnIomqx0oPzNuoY%2FhBON4goQDgD3OhgmMhplyxwT9E5lUwIohSfJqJ3Ys5XoBPfUhFkUI10Gbl8%2FwCPlNrCeGTf%2F%2BErUE3Jhpz6RrOeCUm%2FZwMbGPRNddx5ZtSkZ1vq72wcgy0QJX2E%2FZUS0ONHwd7vtTQu8BEP1KT1oE%2FJQj78PttEfI8ShQ73dZw3XnlyPkCGLRvdk4vGnTlFaX6e9FtnisdawI4CRuWEiDaLmjqJrLrGyb1Eg03cJZKw5TC1sEtte9fXWpfFhbtckQZQLCC1%2FR6Q77MCWS%2Bgki%2By%2BuG5LvUkpcAJI%2Bm%2FbvFZdU8jgLuCYz%2BcIB26mB5epDw7QhHmf%2BPlsOppuoPrecUD7GMzF55bZmDK7xMFpXE5HJM%2B7qsvyJLxmo%2FMSWE%2BYhg94i6q20StYxXZMK7p18AGOqUBhhDyUUynucl5hWu9At3OMpc7LBY2VriMVeoC6oPkrCPsRUPO67IAaN99DLTzl7YCDkLpaINeNt61gwNl0es6bUIK29TXJP%2FR8AvUXYxmqzYvxTsRXosX9EspV89hxD6LgEWBXRrVJ4kjVXqXrLawNaljqz1sg5ynqVQghF8%2FXRbCOeIcvWSxxLJ%2FGhMWCdgk8TAm5oTOIeQXTEt0tHZLiHrz6co3&X-Amz-Signature=57b44842523a92c55f38d460c1efcfd408c4ce58644ac9564c9446d88f1ce376&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
