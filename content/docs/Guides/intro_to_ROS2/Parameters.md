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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R6Q6XR2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIB1HYlfmHTnpsjrzboijsZBj0vvU8%2Bqg4LM6hbtEWmAiEAmk1RRakUxbe1goqg6ClcyI%2BtDC32ZsKOLd1T4DHr03sqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0DD0TeCume8gKKbyrcA4nEHegIDctj5FnOqV%2FHd6U7LTaaSsIrfm%2Fo%2BZKdy%2BaA0r1SSG1qwjvI4XH%2FlGpChZZWsiC2L2bNuHRJVeVZOofUn5pzldQGcwUwTgs2g5eeMZ32a%2FbhqwamT6lbt63OusqZWy%2BesSxPaLHYZwjyA16dABvf4xWYgP7Bvk0BjPZxj%2B7UhztQ%2FuggaJDzcpqwFzpo4UZKtEHqjGc3c3GqB0SkH5asmJDKvHP8aF%2BJUcxSHquv07S3dh63FwT5nefAfsWhixQy0v4fJZYnORdYV%2BQCrTiUdj34434%2BVoI1AXtCfgkBswUiVuwNVmsixz2AV8uH45VJbUZEgCHGyljbywbqOIT71d3HkAzM6Xqkvd4n24ivvL8Kl5pY9E36vTZRXxRWmfwphSYaVMPOhrm4NpUDH8WywxVtxc4%2FA2Bghnld0eoOeMxowq2Jku7sdwRWeWnPlOUTMfIeJazeKldnvJ2%2BG10dktKiLq3RVqZZgYdsU2MuAiFwpaGs2nmW%2B4rgUc9IsXwAt39OX4LpoTlvCMxMWUulXlf6705vHvWMG8DkZiw%2FUtD2pNGHBVr6%2B10%2FDoG1FdwOjGzKcsWiV0vim4mm5KKsVpATvR0NsXcDmWG4Spatk7Etxa4anJq%2FMPKm9rwGOqUBY%2BdGVcVQXz9sZJ%2F7XUGK0jKOZqsgMoBmwy4OgPbck4L81TaVu%2FxELQpHdoDHp6dQfd4X24GqNX4oydYizjbcidFOA%2BRYvcPXMNbM4Dksh1Z3njN%2BVlQtsJ1F62ClhLMv86HLvxnZXVbiw%2BkqOkdzp8zLCCDLwYKri7lnwX9Hpa6%2BmR%2FkruBxZ%2BMc9sysATI9RLAdTHove8XXAESnqhPPshXZu28H&X-Amz-Signature=8e27b29415fd996c523b8d81b175861397b18b17302b6fa7772d0978f77671d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
