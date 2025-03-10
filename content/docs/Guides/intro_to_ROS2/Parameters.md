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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4LERQM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHqEMNlIO1c27w3KndSFo8Jg2vlT66orJFMi%2BryLGvEiAiAwTCESHHUCPehyN8IbUzpXQPOKubL6vzhSvSxogIsEQSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FpJlvKJEmAfbnrKBKtwDePneiuw%2Bp5D2naZwEkHjunEzIXSczjNGrMbkXjgO3bF8TfGUYh2aZE3IUf4mAK%2B41yN0WFgndEIhLJNIahQvlr%2B9Qdmli5MeUIdqRgY8UiOfJ0LlquFtj9uqiq0u6703xdC6V05FUbkulBiPeOExNPnhizox9snLwG0ck4RJobjv6wvGH0nn7J3VBQuAVO%2BOkHWErdy7lra5qrC%2FGQIbPiRJdYVp0naL99f4sgCvqws67XDE5RU0TJmkc0xBFvBkKgfv%2BITt0ry5WY32X5HTWmy0Xt2RBHKLEiAlFJhgiDydio6r5ALEwCZMWK9iK918RmxcmyUwp5xjDhDhresMWuzmAdCZaD3FhKFETpt86Dp9CvcCxa0isp56BIS4qsskXszPJ1rwC1sq85AVQHPczup18huohzDwSaBQaoNDbjurbGagZCM0ogRx%2BVzMp8Sj2H83JC6oSSJL5vgmcEZXWup5QNsD4DqUGasLjEklgfmFJ3jnMbRTQpWxjvzSpKtkO3bAXcN%2F1ip4MvlKjcAhRlH4VRdzGF9MXXRun5ubbM86tU9uQCLIeaqw7DVaqey1hA%2BrJqkDBc0wA3MLnFhj7X3xwk0Otab%2FQFhK%2BWzaDUm0YnYSKOngNdNDlaUw1oq6vgY6pgE9RW02clPL%2BlvmAsydBCFjdz1E0Q8O%2FJWowK0%2FB4qcvPuAHNUToE4w27aF3AEnFSsP540k4REpTvcnTslipJSABX9dAOtHuV2tjp07GiGHHekck7wqC41ZWUud59I%2FRa8h5HiGcY1x%2FFFS4hyPdmaR5DjKgr4od22b1xdY8Ujb6WKTELoLUmSNPgiIR9k9BwNov0PAsTnK0Gfmow8SWkbjiqmIVxpj&X-Amz-Signature=25de5adb3b111bec9f332063a46342a63c31c27423a0fb8745efda0cbd85dca9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
