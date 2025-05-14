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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KK6LRYD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAdjIMQpCmIM3hyS0EfqYp2XJQs9pMUGX1pwvDjRafU%2FAiBfbebvzddRntua8Zdojg845WvFzRD65PA%2BYRs2WqAhmSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMsvumbNvSui0KxbyKKtwDigvENBXE9jQ2oP5kCiZoAuB5X8obEQQXnFzdlhd%2BOE2WoGYGnYXYtjJIGl%2FpviaEHXNbhpQ%2FbzDY%2FgMUz3CI7Bisxk1seqBItQShV4Rq5UzTwYbIuQALp2mztq1DCcOAVYkVwMtqpj1PL%2BhbvqtsVAjclrjt0AaTrNdcVqWLwh%2FKSJe8NSGb5dpmlsVKq1YTULr9eh1vHTIlhj398NP3ug73DEOhKFyNkuYGf%2FY56NV8dNl4fzPqCKEuXRac%2FxGTzpMRDFkmODtSpOWjjkKM8ceFBM9ymr23zzmOuYjRQ5504KHPwO2pAuGoB80%2BNnU5zkJOG4LeQabDpqlBR%2FA6e7xjeclhErH9DyuhKYNd9n%2Bqq8Wge3ajv0Co3Z1MYirwI9APbNR%2FDGJhHQ1n2ruFA%2FEQqOWaIHtZsUbatO4n%2FmTR4fj%2FMV5VzuzD%2FjkTfifzjNaqFj83l%2FYpJD5nTRDVe1ZOUzk%2FGNVYf0XZIJBlnhlolQLT2Xq3c%2FPWU1Iisfl%2B%2F%2FQMXSD%2Bnh3c2wij60g4YJy0jrwLnFVFMA%2BACUlF3WaUg%2Brpqm34IbBxva3xxZd6xwgKaVCSGUiCKXnhuiRoEhhyWIbroeRKBc0VNszPlZYWyDvKknXiCIJiAkQwn9ORwQY6pgGoOm73v%2FOPMCALuUT6ENbl%2FOP6aQPJEu6Ir0CO63sjBG2EoHMNeSpxTnSX4bql9i%2F%2BR6eprgsRGu%2BDUx0NJ44KnzgOZMMf5e3Hk6mhGw2fau4AJaRtHBQ7HZ9BW9asngXeOqSiSewzqlTp8CZhVP0f%2BxuyAeRpDIr4s00E6ytPVLwVAI0wMBHNJROyJSWyUy5lgTZ1vQpNblIGvYKjfguqe8kNJBAw&X-Amz-Signature=8cfe306d65fcf368e4b8d8b7015b838b4b9dfb1d2ce8e797ba06ca82a98cfc66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
