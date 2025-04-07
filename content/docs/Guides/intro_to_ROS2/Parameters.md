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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYLT3IC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBknDPs%2B389c0yHR9HiJzhn4LDDy%2FJ7%2BMXc%2BUt4Gqa%2FrAiEAkeqnj7ynhnRU16f90IkfUUY2GFFpY619VGHZQFnBFisq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBiuqKgx0PyqKaz4wircA5FkkQH%2F5%2FasMHkTf7EU22TtAJ6bgfT8%2BoN0aDF22TL7rrdrAD0Fjh9S%2BW4%2B5NTingjbw7IJNguwNuSBK%2FrE25K9hUjgoXg2UYiLJq%2F8ogxKiPLTyBLB7jTnZpRQU5Z9OuQQkD7mXmGUtiTh88azE2tolWocYC41PrD3H4r4SHFeSpn2yJ2tSIeDSH5gW6pRlgjQB2RgO1pghptb4WxEDF1xbyge7rXRRbrrVLDgwaz5AXwH56z4MV4kZegTDG1N7WzCf5q9LlZIAMi8bD4tUc0DBuw9XDo4xPJm%2FsoKTUPNLhSaWLbb6Tkr29eospb9k4TtBRY1krjlMY5NpGUJXdlQIs0Kx0D16sp7sdVXq88NdfXjdIQYxhH0UJdU%2FNx8ikzpHiBEq8JavZQLIUCFeEFOlDZ8gqZBMpIzNo7JSFDd018Wuj4tcxDAVxTU9Hq80KS4NYO3wVHO8zD%2FtN8v14p4jyFqz3qHVtNf65vzLlCdMvI0iSe4MYwQTJsMbaNeg5R6aSXn7zhKGeh4uy0DZhG9jF08s1ptqOBwqlzVqvDeLsV7n1ThmIzwJlSeL1d9Vn4yzw0Fe97f2WNXi9kAdKGYsmHX4ulCoE4yLFdq0u37GFmEU3dcBKY39Qp1MPuj0L8GOqUBN1N7xaO8AjQmRD84ydyCCcQXZ434w0qkkWdD8R%2FaronOmSRw3WhZ1XM4FG7WlUxaWbbGQQKX%2B8vc%2FRoxYGDl0hTA6NGkd7J02bDVGRrFwSODcpw6DT5muZZ5xz5vwTUW4eMlzuTfm1XMsKt2jMUqGq6GBXCZspAQ4pasFtxM3bl6XOnEh903ceKPkJgYTPEudJ2NzrxZeWpyLGz9lXApVknqr4%2Bw&X-Amz-Signature=538b73194a749d7bda3f13aae2dc94d0519ced784f7e60c1d11d561fa86e0722&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
