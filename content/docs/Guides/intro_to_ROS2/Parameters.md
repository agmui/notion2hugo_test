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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJW3CRR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEmXV32GkCa9MPsejPhL3ipQUC4eMEQe9DylVgPGryhGAiBrscjw56QgXx82RB8Ma6oia1uJLK4egcJbXmXKvNK9tCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM1PyCDqz%2BeThJY%2BRiKtwDGtqLzCEzIFlfpa5H9NVNkD93BR3LFoCpSFO82X6%2Bymnrcs1f1xAyjt1bJqLeOvC2Xi9LsvSNW9DeNAL79nP2rSpmfb3K18xetXwcPPeJiKBpxOCP049Sp%2FovASveUTidGP%2F9T1eRaHlvhNu0NvG55DVHpGLNS6U0lUhgI0flLLfLpqO%2BqfRYHwQvujQhTNDRYcDsLATkmau8Nie2P5gq6yyO9%2FvQ0DA2BAaY9PTqgg2wjUix29n32QPk4mj684qTJkjIFnZu%2Bs%2B7bU9ya7nmqJFP5QuZdqXzwRNP0SZiZUOD17hfDPXw%2FRhlh%2FZOZ0RShVA53yFTdYUP5bdJ14OcMfL0as5loUD8g6Bi23RgUfPu1UGNYcIEW7a1gli9J0IIDl6tIQqBEwpIiD1j%2Bp%2FpQ3PMDFRXJ%2B%2FlkotbjfhOdxo8F4rQdBoSYsa7dAtfkTymyzX7o8m%2FRQfO3JOLErbWGJfOLTGNI096IFJjUnLaVBXMBoQafWsDrEZD8zMW7iZLvmh%2BdiiGAEVMe09Majh%2Fk98UJZHmvY16ajD4T%2FyvouqQgh6Qc%2BP2vDCckZYtn9vWP4Lmy1eVk6qR2nXTyMLWutBrxHjGM8IOlfTcFAB3uCSln59AO%2BYYW1YhYlowuf3WwwY6pgHpDeZ2XhDiX9vZO3DjzT%2F7zZv8lTtsEMs6xVwf9chE%2Fv2sFwv486edqhELCOaz4anhC2aj3OeaS%2B6wk0LZFALdwrarPLh4htV98yK7GDCYmBcSUFrjMCm3MMk9xhH7yZZ8%2FPpJqfXrB3xLT2k8HdRjKJ2SmRNQ%2FIWs95oCUATWIH5IUhMJhqcqlK7VKU5n5MGWeaCZSwaVnq8P9uLdRv08lUTHV6lU&X-Amz-Signature=311e3965d860a68caf35f1b2e94ebac2880eaaf6671e501d301141559dcb65e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
