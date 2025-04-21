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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QOT667G%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIClyXghwDetcYLLK6MXDA3MOIe%2FS7yfo8qTBH8I4mM%2BYAiEAxNY%2BHe0Po2Sl6gVkCYUQXaDLaT5oeMO2sd%2FkoedsOSEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZDQ5rJT6Ge%2F4YAuircA4w49bLv7FfCycaHDQDSkc0JKNry5yLnGz0vhc4yVbedt7vARYVlNqqQPuAjfU8oeTVdov%2F3%2FfwsqftkBvvFTfzesEnFKQRb3sZdKgoQcgBi5ypeQZt31CXFIhcISmHb24xMG1FFgy3h8j3UDYFGhd2k%2FTGSPi38f1SwAWOJ50g%2BTFQy9B3jsgtu9fBuWoJpzMYaAUlN4SWOLsTSJ0gsGcJMI14InDUQy75llj%2BdGKxGUtkDm5w%2BHxeqD2FDp95tbN6hNA2N5BbaYLC4DPqab%2BmeslY3VyRGr8hq5OAux5R%2BJZkup0rbn9D0aPgp9TckUB%2BpSszn3m5fcYbaofzTTetfkeP0r7ypvctVIr3ziZa8oIxE%2BQ%2FPbP03KMXHKOS%2FoVrzJ46SG5X4WtZIy%2F0ysz82feWKvKBV2jyWQylygKQZQrO9n8b%2FGojo0nMf0LziUb9mQmUxm%2Fcs9eplO1CKdRAadxH0PoN6lddgod86xfHbPSrkymdY%2Fd3epXwYOCTu%2FuGlzMA2n4M4jQX%2FdyDPTFQVK9f87q7jpeMMiXqTBQ6kbRZ%2Bczps6Oeo9iAUL%2BplWmXMnII82vHFkdJwBtTs%2BlRk7O0t1H%2Bk3FtQij%2BBBwIkoF84TNflN2xP%2BA%2B3MNaGmcAGOqUBEup6CsHXXTs%2B8THd7BMm9epu2tXPiX%2FDAwt9siaOe%2Bh4KqZZuJ3Pbs8ITD4DPaLEM%2BU%2F5X7sETBTL%2BaKb8RtPQTl08JF3aZykFQIZeusS%2B%2FHGpADz4lTmVL4v6B4l6hnzso%2B4LgDDI5stwhCPWyjKPZCDqwg9v%2BcElkdY6KHPjuVTvaMI5kKnP4j0%2BFyGQMA1ArukbIt3qpgbic%2BgMdM%2F4oeGeuE&X-Amz-Signature=5db298f506d3f30424767dd07304eec0fdc8bfce408f55938b094af05200984c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
