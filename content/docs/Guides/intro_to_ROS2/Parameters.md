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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5B3VYJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL9sb2yR%2BZmHeyL%2FX8w5Tfw5oksw7J9V%2BMUZ0rxsRCDgIgY2g82mqsLL83NdH9uZluJSyKcMWnPssbntM3ig09HAAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFu1SRhs3f1LCFwz2SrcA9AE179hoGp%2F5qDlkyOyLTkqAfFnB4akYST6GtPtdoCBrgyaCeNsdTa55Qo366IyBVLrs3v9b29p%2Bs6%2BJXogX9rFG7c2DuqcwZW8gTLiOF94hUyLQJyVPfyDy5Aue97IDdyU01Puz7fsPxPE%2FLmGPOt6v9wrOc0lHwLixdHwEY%2F5F1C81jfrgnH2bMa8fzngwaXDxBGuL6%2FM6WX2hbeeKwbjzDSG%2BGw1KQqblvYBYM00OZXixASK7L51lrwiksdc1sRLCGYyw5YHh4jASn%2FkJQvl6ITZiq8Wx0hnWjh6kUljSscS5r3vgP7vQsz1s47Q7Kszn9XImf%2F6FDIYIeqBUIgmpmFJJMcoJ5Jo20ADrzwDKEEQQAhJK%2FkhLp5%2F%2FB7MZtNAkfc3m3lytsvFjOd7tOrzFLjlfSJtphVuKD37uSDCCceTOMqP0hbV%2BycCZ6mOZao0kY8f9wJM6RG9L4sPXKeO%2B%2BBxuk6AnDr9wb6tGRuGsW%2Fve0b3GDU50J4Ij3AFHBCcUK3UYJz%2FId1tgtxd3L7SZ8ocNp%2B6Uv3sGFKMI%2F1bXERn0YaGdF0S4a4kyfoWc4m9v67Gf8%2FpNfAJcktbQ4C0DUNdF60XxmP24WtUQ%2BamHnlQvfmZnbv5tErdMPeM6sEGOqUBR97CsLlmiGManmfwk9BgSDMrr2tLoUuGIsEKTds%2FqLeGUzy5O1IB5umy%2FzUbyjF5CMuut0zEEdjLOao7vxDzQGHbUkCpD3x0lQnNioBvPkm8YU7c7InfQqXmjGcLx79PAGqv8ZpveITM3V98IlShog8pf4p9U6N4W1TIGofi47Tx1ol92mAYzApGkh1jHj7S6B7sLSydkCOfsqtZmu196vZ4rs8y&X-Amz-Signature=5e9704a6aa93671b2b1d6c43609bf904d3f140addcfb5bffce775c9f188b2cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
