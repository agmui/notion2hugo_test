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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLG4VKLK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmVm0FDorrRwGRH99yILuP4R80o7dKWROe9JXQ1qJzzAiEAp0nfj1zR447P6UXG3iMrOFJDYC%2BZYW78O51B9e0SM7Aq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEcug5B6BSwRAKUhLCrcAzm%2B2X%2FACblf3oeRNrfaaIb5%2FQUW3fDAmhoYOIqfrlGVP%2FiUo2QxGEGBs3CZr8UXq6k2Jugi%2Fkt1%2FFaykr0t5%2BpdlpvYGRK57K4CYr8G6zAzN13Xk%2F7wCQUyvPw3VwnbeOjyGVtDYBj2tDPSGWiI52iZTYaOVjVjkUTtNZG0TdK64sW%2B%2FyZGxDSVVp1Y0rkV9A%2Boo%2FhDnqh9xAiNgvuiHYNl%2FId4LK1fYI9%2B0grGNfdoBEeiQDjX3NTw3EHwVr5c9%2BZhLGUp0sG5Nggr0p8adJIy%2Fp6ALvsaCRThYSxMUPBVSuwkPZJaR0QhONCxBJsXs5z1%2FOkjhWI1Nbf02gosgpp0DRXn3Xe%2Bjo7vXJMvbG2l04wJHKG4CSF%2FEsb6%2FPgLr8ezkBw4hP2rxbXU44MBmktpssDld%2FOwLwBCK7gDeaLmUHRrAOeGKR9%2FUT4nUrhHjQDTzfh8Bgm%2B02T3lWltZ8LoFSlS7%2FA%2BBViggtQRTDHvFGUeg%2BWSHtlq%2F1bhDM%2BoBVVKG2%2B8EoUUalmPvUnXk0di9vOoiMyE1B%2BxJDC%2FAKcki8KwgLbRysnzMtDP%2F0%2BGgtMtYGKx0uu1vcFk0Ek2r47XbLy0gWByN9fNN4uSHD%2FlSwvwk3DR8nY%2Fw4KjMLbJ2MEGOqUBTT7l6saj35USJZopVQHO%2F5OO9Jt7uAOZfeLm73tchr214RAlk9UJg07OeQt%2BNs%2FqhfBrLa8vA12gZ%2FZ3lKIa29Q7avehdNSpLRHgzfDFDh3h2CnEJCoq8hMgiFxf2m9Cs5fjQhSXzaUy9VI6qbC7fJujM4YnQCBtD6vRnVMSZyjtK3a2Vrlum2WB7BOWIQCiswR6WIzlpkW1smqaDm1FGoLaR7oj&X-Amz-Signature=7885c984e05e2dcc532e63b025594b95670f3d3399e2d6cd7595dc20750cbc0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
