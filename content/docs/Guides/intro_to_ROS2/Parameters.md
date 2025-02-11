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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYBUWDN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf8GsgYQyqrq6UR4hDue2shX5%2BQfWrskw8UA3kqbGwpAiEAxzW%2F557993mbvWSqrTvbU0sEeYl5613tDOl%2FoJ%2FEhHwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt%2FMERZd9N4kNg4ICrcA9dXHaav4QkiGdC1ZMixBTD78dVnNBPdPqlMEQjBNY5vbC6H4ARvQAcCmCs%2FHc8pRUqmB%2FsCq84pWN89guEP2%2FcPDIrcyNCKmsaVsKrU%2BnuZgcrsr5W72JsivNGtTZ%2FRK0%2Fxav5WRRHMDMSwZO%2BOoE9DTDnnd58yWuLw7V0VOWoogtC17fI6uZ9UauNALTybC6Dny8yqu7g5hVSEbYP1RH1Vgd1EueT1pW37TXpvKEfpbs6GjVwqOrNM%2BR4XslVXJMXrjkZnDYdPZa7eiHnbTiWdSUOZnxTKwFTvZoUJCUtkI0mfPe498wOgA%2FjAt23EdH4t8r9rMrFR%2BmRXGPLSxTq24UpLnfIBNnZB0sa0z1IHTEjSAz59Dsfgu6iCHuhUc6rxJ2HifYOjdlxpo0ipG9L9GUA5EuYgDxsZVYzZH2Ey5aK5WSsLWMj6hmpWXaFcF53xMWt6L3xQrdZL4vJHttoybow8iKrJCTfutGyHCsLSaWYwQGdAAPXMHk1dxLdx3F8YtLqgEiNpTVWiXBd2subWkc3iwwDRAmCabUms1vwHb49iROJDCyB2Ok9hluHfSbPVyLxXzlpOILvkiqZapNmblAENA%2FahQRkoZ4e%2BXBxuXFDYBmJpfYUTFVKUMJn3qr0GOqUBHcbJqGlLL59aUz6CTClbMX5Xj42uElMght2EYtArEvOhQNNUczu4nCvYBxnbVQn7%2FJ22D4VdMsko0BInEPb3phK2QJwxwM3iXAhifsDJAmx%2FZrSaKr9fF3c7uuZrEOoEpoMADCwrLkhhakuMEmFh59rQmXfpkCbKl6XjeCFvDGUALzoWGVyktRAYeSd4mBHcQIV5AmJgdwsvqICb10MHV6d8UDfb&X-Amz-Signature=cbff0863b05f21ebd5a88f88387b9de0e66aa8156be1ed4cb4e31b4981cff5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
