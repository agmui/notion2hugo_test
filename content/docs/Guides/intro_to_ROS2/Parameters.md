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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DUJMMO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrR91lUL65eiU11Q%2FfeJDCRDSYt4QtpuAAKiIjzDzHtwIgNLmU%2F8NJnIHsq%2Bt9uxpwLhCxywv99UoTR1HmaJF5rrUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJHIpaeBt0PNrdECUSrcA4av2DNXelK5wnR6NOPLLPiQyn8avsHZweEEyhDSP49WvWVy7XVi2xR8isu0H5uO1RRn9ShTUxorPsPfzqbTqGilQbMHAD9Pd747UGvwjbpgWZxkdA1wEDfiKMAiBeA0m3jGxG8buiEZofasrK%2BG0xH397juXXJh4d%2FxP1d2QQZYPFm%2BbTR5p1jcSwNEtNSxaLkWPzw5Wu52fqivjAM0eoErJ8TqhJnKPcTiaURhlDKm9sld0%2BlBk7RMV8Z974sZ38lRy9cQ%2BpiJPfbLeGfE%2Fg3Ree9LA%2Fmwc9Bhssb%2FeOLCzr2Tphe%2F4Z7FvSygPj8Uqgr2GRqdYtCPXnB5FPfrtXgfZdDnJ0rdicnljJhEudo9wEq%2BEmWf7K%2Fnn%2BtxKn8bWekqbaFI78j1tlTTGX7tyCG6AlmCzv56pQYeIBYmuw%2BJHpWl0l95eMArpdBGxGWsDRDR3%2F6j2wTYf%2Br700alO%2Fbq1nqwnjpls9as2cVwfmIxO57F6UxR81Q5htH5ju3DzwhUjM988xB8fvReRkH4VhtQhcNSS4s%2B896w1rSma31LmhkvJlxAOiX1AlTns7HYcCjW40taLm2dsySRQxDfvaG5m4ou8jSelPJtDNkyb9hri%2BKjLdaFkw6vmEjJMPG8%2FL8GOqUBFTqz6kJUTKfE4uvBRdC7s%2FjH0hdwVWq7sZIjMpJk1z1EI4QnXuVei9dd6NKsfpm8y4btWkozg%2Fdvi5B%2Bzi%2BkIER7nP%2BqG3z2EQ1S0V3MaMXFbRGRXDs87K153%2Bwm8YUzq%2FXg%2FnUCnSjdIfRmCqEJjnoUfDHX2z7zT1xDybW9aX9MOoNq183JfEdp5suWiXXhUSH0wwMIFOuK6BnS4WlE5w4vGyPw&X-Amz-Signature=e88bc6339406aad90546177895c39c51f61f581453b116665337c8353fe82472&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
