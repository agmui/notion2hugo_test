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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NHIDPD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKFXJpfR%2BYkKJGsoIbVSE4j8%2F9flasUfM%2BgkZScZyRlwIgDgVkS92z4EPrVAwLAKSld68x%2BtagiChDKwtJHYPCimoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FCaFmlyDIeZdvjdircA5ckPZVByNKTJeR4fFPC5u%2B82bV7GZLRXTFYjv32ZjToD9CUHKLSJ1vN73bgSRA9d5oXSfFh9ZMsRC2yVl4jjf2phPKBOU4M3gIc5vexEBWpREnzgMcZqBSqqgzL30BY%2FSVBE%2BZlFFsFSAHqQDvMmKAMoptsDvP9visrzWBNIPLEyPV7IoyvqDNW8acQkLjsu2dnNJWl%2FbnPXFDhySJ%2BR2OGePAZfKz5%2Ft5XOZU%2FmMu4VEw4fbynnG7kGYL4J6x7Mtaa%2FJFi3WRRkNwP4NMpOfGQwv7rpzCYhummx0lCOqvUgCqtomQS3%2B0lsdBle2CiFHwwhvQgHHwPMwO6x7apQwMyfrmAsvUX3SIb6dTvtDJaG5sKTNFxuPZkWv7w1S6jD8aPo7yRkA5hFzmUrBaPYJ079QBekLM6efpsKY%2Fkm0MBF44tIcCpUYcb%2FTx%2Fw1g7QEtFCZLSTOsCjDcME4d8ryjQ40z%2BbujRJsOw0sd4CLvrW0dRXuoQ2o7jJKST0aRl2UaHPbDZ1ZgITASST7bOIqtbaU51gN8R4%2FRfFePdd%2BwkZgouaDOteodiiP5jmYrk%2Ffnx10nDf5%2Fm1bNkByYycmv2YjdyKLvP%2FPNfhkTafyn9SxOrg5phkOs3In%2FgMP%2Be6b0GOqUB%2Fzp4EdZOQn0ut53yv6nBeR0CC7dei2WLq6kItd38MrPJfiFemuj0UJpfCWuJkREtXzVrjskmEmdOQbG0yKSxwelkZGlK2qMvJM8gaK7mGD8DhF%2FG4kjgY2wmcZAY2P34ps5P%2B4GwjcV5YbMrw9yzibky%2BR4I%2FfUv00Zxc87R%2BxbDyXZRyt%2BJNdGA9BEhhnNSOMv9QeVGlNc7DFvSfKdkx3v99m3B&X-Amz-Signature=c07c6c7f9134e08bfa62db56864c6e238c4ac8ebcffff530544a050f83459a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
