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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAECBL4S%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICpaADf%2FlLpuVN4GirMejMNXsYptnZwtGYI3f7dtKF64AiEAzgaaZtUjwrNn%2BKy5lzydbUe9aYjToVwB%2BWOR%2BePOcDwq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGl%2BUmB7jv9%2F%2BAD8XyrcA6zua6dZwyFWMh0bOQGcQOajhYrNe5Y7oVtWN4rPeD5I%2FLw3miw9lcIztvzel5xcNWgN9yK8hkzR6zTmrt8LXXP6%2FpdUE9evIqqHIIUzm%2FCxOMN4YQ5IS9BxXSdhojd4IaX%2FCJtNtHVPCS1SR70k8FiXk3cAApolv0hK1D9%2BtfxToAinlsthInJZ0ZZOv%2Fmf9Fa%2BsVJPwFYDmehaWDRKvETD%2BXo6ZcCQwIuK7%2BfUOseZ7XbIQZ0HV6KIXE8leIKyR4egSb1t%2BrII6PQKX9M%2Brlzsb3RbMpEdHiXCALnvHn8FtDKXiHbSJQvXiF3Cra3BneewwFh3Eq9bRdaWyayIq4VSNlOCLiwWij0nKJh5T0%2Bz3ei3lne3hPh0ELyH4HguGVF14NbdvYTqS5RisdjfOZIs9TQEhaU3DTsiVUCntGcLRq65mptZ9SMV80ygRAi%2FAfFLC%2Fb2V2TgSPpfNjpQ3R2jDyTkde1HxaTsYLOb7VPD9DVbdcysKHZOtqPMBEldeOfWIkCqNNwnShsg%2BDlvBwL%2BFftLHm4aEu1y6Fwi9iUs8yLnP3pp8078NPCknU8MAPadkdD5Hf8ZT83PjZGTHq5GlZowaMJ7c%2FbF7AbbeLoRFr3w%2FzPDVyAucUaeMNLY7L4GOqUBv1aWfrSaJM739hHsEdPrywV31Mi5Akp3FkMLGWIDI4Uy2f1QjcX%2FIA4V4pBiA0FC49kelskeJ2bBzf56I5vDZ8T5FRa2m7FSOjDBmoBq%2FNLVJdA3oPrwU22DtxxZhX9dePKm%2BNfoSUcA3f0hc5epkyd3i1acaZ80hVAdRybI7Fb3WGLuLjNzXxt78jYfz%2BdIOaFOfu5oRzODyU57oLshcP33Iq%2BV&X-Amz-Signature=a2351cb4dee07ac2e2b0bc221485bb5f233f15d9d03ffeaa701de436e096c504&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
