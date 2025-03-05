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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFD2B7IO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpUDgRPJVaK7d2dozGZlVgVAHLfo7ojKbYcytoT3X%2BfAiBtorHAstehe0LM4xrdD6h92%2F8sJyfxXzlznTCaCTbV5ir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMbXG7AF7%2BznD%2BNFd7KtwDEJDi5tayLRod9MXSAH%2Fm4ZspW7CxljhAt%2F8KOVCoF6rTRlFxxkPTRpUe1CnSjcyUFNwv%2B%2FBaJBRl0q53lF4lJrb6LR3pmtQtIixwEaKsSJZzxCZ9aeeyP2%2BDI%2FmM1h5TTjSNlHULEp1GgPUsysKoZ8Lva6u2EzfWYMj77gbvPdSe96dnu8veZ7oTIWuDFf9URtmZNzbaoLla44W%2FDNutH1UkddsEYpHP%2FZj0XF23GJF9%2FcQqbYGb0XZ8vcech3ioyYQbajGeoonYDsy%2F%2FLlsXmCTJQOGk0rSjucCsVrM6Tm7RI%2B3zzfiaMfWVS4AeSCNlAttgp7%2BNDcxXnB6eFecg1yDXSDatyy4Bs6NOIbaO6fgTXp7QsoobaoWNgvaWXeMdPyMGjT8GBZ9aACPY4G1IMcce6NreRS1Emx1l0W9GIq5xUo6ydPg%2FcdSrwAiDcs8ir1hJv%2FlR0cJwkHXoWVwntO1KCPrGJBk%2BHLH63Uipe9qO6mAqfYKoJgUwATAmINm3Hb%2BpS22FW1DMsijftBEdWTvZTXfDuzDciYR561q0wR3AqVvrR0XgUirz3yI2Vh2B08aZQMYPMEaBklqslwXB5wL4Z5AjiStaKVT1AbqflIvKVqG5lgAdQ2FMj4w%2BuCivgY6pgHc%2Fuon5m7qpcxn8m5j5JxIu1%2BzaY%2BwrlKWZDomjoKDe5rxltTLNMat5cBlsfEZu17WAsdwIRcBHK9l%2BlR1EVQ4Rrrt7xBCPIQ8bKLDHl%2FYE5JcNHUe8LdoawmcRbv0QoOodge5LxwsPG4tWCr6HTuuG2th4Rhli4Y1Kihl6u%2BZkg62fVH%2Byhoh7PuGridGgu3A9gGWcxUSg8cVU6ChFI1aMKTyCDpq&X-Amz-Signature=75af92481d9595577377548bc491d719574980b40ddb17c24d820663cabcea75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
