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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6L52WYR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlVUEZ1Q3g8pYdmOwvwlVOfHRo49ewWoxwUSudMouqnAiAWem5yLCz9z1gLumTbUI08kmfZsW853wyznxUtM5iHMyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhlxx%2FgyZwvy%2FBqQ7KtwD9KO3AhlmN%2BtFhWxV2hBzH4q3PMci4rn1oBr4XHB2b0Hy4iKjJ29LUhMeyb9V4%2FTNgxq%2Fo6DH9fTnjECOr0XhPBD986JT4%2F2GJ2uDLmM0xnEyl%2Bv20CNmLnQ3kQGUDzKNcvYOKzFWEYohsUgWbIRlZ%2FopGqHDt15aQcAwyrY%2BSIKmVLNZhzckTeWobSmeCmnPf3LZudG5MWzmnGLcTR5Ba9bsgAgB1ro9PfU4w5tx6pNRmaNZ7SDEDDc5i3p1P4ITGwu8k3gCr9eUhhWBTOifnBiPJg7NMnxGCb8azULK9zHdgmrg0g6h3%2FTKrhiNJDGLP3RCITP5ah6bE%2BGAYfPeIVeCWfo4I%2FE7BA0cXpsHmP1%2BVlgaYU%2Bvb8A5l3vZJwsXEwi0jMorH1gsx2DVyQXQACLM2VpyyVazIk4M9clEWCP10Abq4PoCMwKulQbzRc%2FYFbKXcgW7LyVT1rXLcCzF92hGRgG5A0c7873GD%2BNIsGApbLXOEc7Zmem44HfcjzwXkfyYa%2Fe8V4T5OYnPmQNpeAnQL2BBoXq8KfppbEUvgtQU5Ky3HLt%2BsQ7Kdtuo150MStOGEHpippu8J6p%2FFKa9Pg6K%2BjNE8cS4LMLxalVqwDiTv9Dwyq%2F8yiDTypwwyL3TwgY6pgEwIvUBQ%2Bgoyf7ih7%2BiLOuO4uxavyms9WBlifIg4fx9uEOvr%2BjkDGJ2Xd8HdmTkPfD76n%2FhqSQw9PNFRHMPvsAwpJMviZbngjfcxmQFUxx5DxpEpE7SKKo5L1%2FUgwpPpjniOk66lOQds%2BgC4Y4Y3hfDRE%2BFTsjSVMnJvw6%2BYrXgR9fEZVAnPM%2BoVzmgtiLRNE2Iw%2FD5uCtyIaU9TWKvpyQz5mekSIBT&X-Amz-Signature=0bb71796f5dd7ad570783f6ddf21df5eeda242630d6c9e1ca8521a4113c621f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
