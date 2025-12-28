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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLLUMRN6%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCjL3wZAaLyD0T%2BCCNqp29CLRP5Bf4oCpgG6q09%2FjErAIgcFFiSTmn2bT58k98hVmesh%2FudAI1eURpcXNTsnYQ60Iq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDMNGJR%2F1WHH2Fv9f2SrcA0BMdG1wHOYWvCgtiqyUp4eUK4Yl1m8XRS1LygbLR6uCqeBNv6vkT%2FOxsUGwlORpQ7whwPZ9JB0l%2BIMW37mGBsI2A6stFpAPydHMLEmQstzHIcvZb0lDpcB6kwaxGVlgfVay9%2BDTNFyEN8p7uGCRxfalwHhMgDokNID9k1jjeAKeESM0ku6lT3QFo7eEnlKIha%2BJSiq%2B%2BLEU4bwIbn%2BSmXzwT%2FWewuenYniSo5sFJozzcRv2waiCzpdT2nBA9kHTspVn94qyjxtPvBgMDa6ZFG0j6drKbB3h7qik3xRCiaDsRHuy9dANfCjPi0Vm5Zl0mft%2F9nfejyp3YevQm4MEm7LFfObV5SrmHsD5swy776RIU6QtXY242ujFWwDIRFDeCd7GZEPMUch5p80pN0kvZUPlCDaDVatTKBU4gmuVOjsVOQBUQwyyQQdLqZzFpMF2i8mVyKFJNmY%2B5H3YKxuSTGQ%2BhNOTslhs5oLGfJJzhZwKJAlkVXTfDuVvtmgRi1iEgYJHxjo%2BvKNyH0tz6FK20w6bnnACnxps5n0%2B5dGdZLIbV0d%2BpgPyfUKDZPBDx%2BR6JoTFJC6fMHK%2FLVHZOAff1mhaqHr589Z3JfCjzjA0%2BPcvqpv024cT3pmvAk5EMITswcoGOqUBnURTCHjcGpsWh0MH9beEmaRgWcRp%2BR6Y%2FVkIdQaShUsjiWh8ws5UNyj9GwA4p2s8Gdt75nurC8SyEuSAyM5uuh72y6jTsGIyG%2F3lNeRjObrxl09UPNV66SKZ6kbis3SFw6pocKmvo1ccx%2BYFUNhhlKNrbT14paDqoYrzWzRxZmSpLR%2BhCrKAj59U9vmzyTpYlxxrySI%2BoWXTDoVxSHAjZ%2BCyGLPs&X-Amz-Signature=11efcb8002a7a045cbcb862ca8482fef6060ff0ebfda8641d6aeca10afdea6ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
