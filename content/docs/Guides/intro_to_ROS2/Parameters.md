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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4I72OX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICEk0s%2FijmZC1cM%2BALzOOWtNooD3BRS004qL%2FNs5PS0BAiAcRY5%2BOEb0R2ytUZFu2zm2GDC5iGxLg7ZK0CM1XfWffir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeF0XxD5bcW7X3%2F4lKtwD3%2FXEnU1FpdteeBLQBZZMBoHOv93CxMiOGyf8dHXLaVE7ftF6LPNfavF5m3bZ%2F1vr9l8uXw4Zy2i9AcgKFy87xTSu9vSa3J7RQ%2BVI1P9wNHxtlp4mXH12C4QRyTQ0LSNQKdXO6gDIXgRyqaATawtIkxvVuntiNCkZMVpYerE4fahoiwWYKgIUVGgWNo%2F6b1pUJi1wHqFff4h3PznnBfMj%2BQdVVHprSSLknksTKSbpaynLXU0O61TjK88TflFJF%2FrYQvnHGrXTE%2F6MsQtJe%2B1GyKzUj9NdBhMqbz4ft1xM%2F51mORWGw%2FmpULpM9SUVnJ3oWl%2Fzi37KRGVy%2F%2B6f71vdIK7HKzFPssNWQpwGj0ZxOUcGbatqIgEansW34nIhqHGCVLcFeR3GCDDNrJOqzWEI2HYRXvG%2BhEe1yMfegQsiTbvOvfW7lN8G0R2KoYvUpe%2FjICx964SMQkC2s8IFM2i1Crc3KONdyg5WC09rUw5FX6PuP0KT%2FD62RPRKNZ%2FD9GmW2An%2FMy1Ybt7qhiIrx5Fhx66EWBW%2FmkXGJ507Qm%2B1z2Mv7e7Zdz0KC9ZIWOQZIfPwW1BfV%2B1h8eoVKM3P%2FBBEd2GpGJpmgY04F2S6egrfxVp%2BvyLR3eNowe5k%2FOQwqaSaxAY6pgGeM5i%2FxmLjxZwzMGoz9bgs9e3HvimmCFcEzvTlM96kQfCr4vrPv%2B7r6sHMPZ9abd%2FzIqJnf7e%2BXYnObbsMVmgBgtOLIS7xtOi6QyMm8PqTnE%2B8Y8yY4f%2BNuR8VFgU2Eiz136LmtDbUxX8BYjSkqqdOrrHUe5D57XclXiWvDtFpJJNaNFDC3SHRmT5YCgOkDnb7JSYcO4TZl%2FTx8PPp2nvSiKCMCY5x&X-Amz-Signature=c4ba2c1f4ec6808e642ace421466393c7d82b53aab4ab4dd4ee281ea5afc00ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
