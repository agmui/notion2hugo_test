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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQX3L7QO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClhBbRmYEHlWoIR41yG%2FpWhvApCsg%2FIfvSaMy7dLtxZAiAZdadPbDnLJXD9%2B%2BfAbXHE0HMt6JIU5RQA%2Bi8ODVmzNyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMZ3PltAD36WeKPSmKKtwDWLRVpbFnidUg2D7cma9mFxJqBuDiL1iF0NBqyGIvrfy1aXqopPO8CJQmG0a7Pu6AQha1KAZ6%2F99itHAYHsDu1eJGk0hWz1tM%2B90AKZvK35zDcRxH3enBegOtdmS91eUHqCvG0jr67XSiYKQlwQj4txpD1ZPSZwdWVTGh6N2Z9IDaI9JiTy87MouBXIDFkPiNhrtLt7lmpclHoFgGkH2dMaDhGMytXkztuxKUt4LOmj%2Br%2Fyl72CUV4gxG4pfYDt6lSuvHwXPk0Md0JkD7YWLzAQQHNn8Fjx8KLKCs6ql7i0NVnw8fUlSx2CT1jl%2B3z4ZXkBwwYvXO9Xymk1Q1LWrQ5r2dGKs%2FRMOfZ6BKVFt08QuoImmnMTwTQIMICTELQVWFUW6vLM1YxPhpvNfgNHNbKWEyso81H9AxvDWR%2FtyIU4pSbEXtbIJ3wPYi1%2Bo1IzuN4vymeDPypnVKcX0LVHkPjCicxteS0uzkKTR7vYJbZsOc9C0ut%2B8f8VniTrL7O5yjmNMVyUUNlGcP7cWycYcs%2FMimV%2Ft6Nr1zS2L18LJCQx7%2B%2Bjc%2BEe%2B2S3ECkIoi4rfaBqlhgUAGQ5ck4PRvTX9YS6XJNj%2FM33xlm9fr%2BFxjaW6O%2F7xe5xd7AcPd3DEw%2F%2FTLvwY6pgEsNJOg7GeVsQiyQRWYxJ%2B%2BO%2FjFsM35u2ny5QZddW8W3UDNyHDEPJNbSXxf%2BoN9M%2Bjc9wbIDEI3Fx38rgV1tsviwT%2FCD5EOsfftqZvIVswAkoiOxDwuewaSb8mWIT4GpwIbksh1Vdrlr%2BsSyNl%2B41YSS7IHFx582k79oXDja7s4Wamyz62UZck%2Bc0WYt%2FvZ60CFV8FvGtU3G2b9u%2FcCAfA0YKA%2Fzl1N&X-Amz-Signature=21fc9d28db92320022b878dddf520396d1ea75ec36c3ba46ad1bd4ecafc5dd97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
