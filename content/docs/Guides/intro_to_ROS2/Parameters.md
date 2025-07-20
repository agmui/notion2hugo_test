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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUUW23G%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj8xtVDuejwwILBko0T6k158XbdPaWF5LWjefjmJGtgAiEAw9uLCaZgMFFjk1r7%2BXXqy7nDmLFnaZTDLuxn3%2BAUONgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoIVJZP%2Fz9gqNnGfCrcAy3YYRDGd2eX%2BI2exsIfIB1KDvnCkL5HzEmvJ%2B9%2BAMN0oCLhg%2BUj6ZiOlZrbZ40AKRpYANEJunvBNSXmlM%2F6XE6ULzKem9AYey%2FP%2F8YNpWjoUEkPZ2LWeqSkB%2F6RKCXkd7eehUsq96z1tvJsC%2B7ntxPEc%2Bjtyq89Deg2MM1gBFm%2B5LcsTYmmvbpcBHsxGXXiuFESWRaP63AEdhG3wPp5zfc4mucbacmTYxYgs3fxMBfspCLzU3IG1COjsxfk8ZfTFjJWhCCawgcunvigRpgQD%2F88B8lJr5FQU17nrug%2FPdLN2TUmowc88llWUmCGKDv%2FLk9wQ2flvV1ztzz0eD7clZsU6bzvJZd0VRHh14hnQ0Cqi52c0pMwmHsxAuxbSdgaXx77xVnpXCkBIqOGA5E7Datjpy%2Be1Ou1bdNsoNGW6ppuYi84v0cJqG3z2k4HxxjETuOx6A0%2BlrqLvoQ5C8xkND1fS50HO8s6kcC3IUbkrnXnFGuPL2h4YQ5rhBIuogHtlh%2F5x8uLRrSgf5L72UIJ9Z6R%2FkL1zLXZFO2IVtw5krPnE8lpXGr5v29t0guLe5HAYHmFqw%2FYlBvhMmZWFMuExCJSPaCeQsuuLfp6cwYiYgw4usijYEAGf6a2f%2BdYMMvX88MGOqUB%2BXyNkaGJYi4ZeGzhaiPXoHP3hU7gZitOiTgutwh1kOOvh9cMMLpgDEU3DcfNHgCrI3YX5CTa33RI%2Bv8j9GFF88G8GcAK2Vqjc42UydSWAMnlCisK90uxH%2Bh7IturdRCRyJRUKP7tntYxlouffjs3JxnOppHWzWJX8G6inXQi7yBG3NBtgJRKoWJCdMZfraIRI%2BvNfU17sHQY7QklWll91xDb2yeT&X-Amz-Signature=cd8b12aa0000207145578740a00de5ec5ac2e6551a4de87ee58faac3c11a61e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
