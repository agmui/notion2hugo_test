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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUMW3G2C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDYxpDnDiogopL7EuXC1wONNdBNJLgThjzzUJX54pN2hQIhAKC7oqrH%2BPMlNFWsjVCYxw0h1%2FHOauEN64upHVqWIrOHKv8DCEYQABoMNjM3NDIzMTgzODA1IgzfJpJTa4RANTQdjJ0q3ANOlg1PX8LFKl71e%2BRZiQv3oTm0vrk3r3NwJOIgd4swMu5nK8grxvi7g8s9orEyR8zmmKKiv3ZSx9VymheYFJz9jQJ7CCmHmf4A1zmRV3e57%2F%2FRGJTnnjXo7458Ohkd1T51xoxBCJIxqP7vZ2ntMIQAR10YE3Dp3VnvZoUQr0hteayPwGdSY71YEDwcHUT4s%2FSKJ07fTYxAJt7b%2BnesMKZhm%2Bg8QietoeTfg%2BuYqKatT7ED7c6U9ecyr4vFrNfUyi%2FMlgeYVSAn1gCnbw%2FvLEHfUQ%2BrzRNY6mGoo6ddWuiwOxgIdjlFs6hJchSvBbkHwO6597vG1tY%2Bdu7bkfvFwjiSMC76lVqeh4kvYSydBoVh0NvreDn7S4cc6bmKGPbevX88cdLJqVipLlrMxwC5Z8gWANTUTVikJFrrs%2ByavEwzxSxPyzr1lSqmJlb4yyAVal7PyZxH6rPTq5W7DPxwhhm7llvPfp0mV04Qv2QiOLS4vp4xJLxwnNsZBT3938SZ%2FJoOAeKeNlrcO9ndXLhd0yJpC12ePnh8mv1Cs1Kkeil0YzgRxF7OwZ%2FGkOe%2BwK1olOfm2EH646qGS4LnlSVJg9JBqss7U8rKdl00Nk34Y0T7bd48aGIQn9PxZvoQ8jCMh47EBjqkASdnoB4NMljttPrGAIMfVZVPlTD3Dw8zDIiC6b7Mnd5Us30lWD5V8ze5qJmPL5kChzarGT6as%2F9GEtGBysxLAwhhaBlPjEDeePHkqm8JciL2xVdVAgIO%2F5jQFIbNNk5RgrRO4LDGlbfT2EGv4e8iXwMBG49mdBgWJbfS%2B5ZgLAYEZ6hIf2WNdg6ua3USsLgtEnJwEGsVscpBoVRQnP%2B0UY7ztsL3&X-Amz-Signature=98538d1c32f0afd6f87288b106b9ea95fbae35d74f9b4bd69d296defbb924516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
