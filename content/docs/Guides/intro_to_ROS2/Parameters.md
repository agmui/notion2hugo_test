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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FTEOT2G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHda4IgGxJJz1b0D%2BcTA%2BZs4eAFCzj%2FxQ4LNaQcsoMpiAiEAj0ywOLefYhJWekSBHrvaRS%2F6RUdfTusuXpFm5TziYtcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN%2BhcgpixnyAjGRmMircA4ZkPBMM0TyX098VA%2FX1RIvkH2mdGUR78NnZ7eS%2BTKu0SmF3nLnPqJHSwccvK6hTIZ2VpiCy6HKfI2BzfHlTVnkPgYG5wU1XuNumVeh%2F0NGOFJgoDuUce9T0yda5zfY%2BLIjXPtIezRDkDxPnPoZnD6vIV7x8I3VhoV8F6T40fWnRKEDQ19JVMXakpBETweh7MDZkEUooA7ArjJeCmVEr%2FmE2aooFXJhLN5IS%2BA2lxptmHLU9Cfb5UwsbM1hEMErBNdlde3RsbYEr4tFH9JpukJyJf60y6f3OY7YZB7c5e7GY5iqrYcqaAfV5hNR7t0J%2FMIaUVrbvtN5SVtRbQ2A%2FirOAXKYQzkt1XVPVDllUjh%2F2%2F8KqHYV17IzKm96d%2BYI97H0vULyQlxJ206BvBlsVyT7kZaHhhyJyndyuySgCA5vVAdGu%2FBmwRdEIAJZCklHqYdQFF5oc5ATwttGioJrDiwCg4p9EBTO7Ui9R6DfUOCpeWnxM4HagldSSpl5UMzxdY7rO8WACaBvMguOyY4udEPrbxUQcE10JEQD6rs8i8e4yfB7aTctzlPVcC%2FZgRO18tXwbpvou2N36Ho4NKNgeJWAGlqNUANItTmOxtVF5LORGywGejWnrMIyjx6l%2BMI2GksQGOqUBLwHMMExqZD%2F%2BkWOMx6%2Beg6tCOgXFfZ4umIm%2FG9fA99xqwpPtIO1LTubb0tR1yeQcicI6zf2t7CbhC9r6MgMUMx8mQXn2uAf1II6276Pc9B4LkW0Lr%2FnB8y9lxu2G%2FmxxurBEueELZ%2BvTekOPJgd5m%2F6TP0J6RhK6zNut7xfEEFLA4D%2BYRGcAyHYNaTQDsYaF%2FYkt88%2B43PoGWZhoBbBgWE9s6RLQ&X-Amz-Signature=d2cce1f3c278e205d95aa907ba7ddfafb61001420bb9cb3e41028529b919f230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
