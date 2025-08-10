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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH67KTLG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIrD%2F8ELLSk4uF%2BZfw4YwdfV73o1sR6%2FZuJ6PjkOsEvAiBR%2BjwE%2B6lCixbcdivq%2FlR9tI542i%2FAU1gZgDR1vFOhFSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh3TgUSHAFWH1coMoKtwDSFlUUestpF6Qhls4j7zovfzdQdtdcebPbT7q1yB%2FwED6LfuwRbP7ud8PsmPrVWecRB83gNHlgNKsb0vQlz7glhpbB%2FSQHralyqQH1iiZXQeIQUs5PtpA1kcM%2BVN92fWrUNJqpjhnHwzVUcsM7l%2BjVGeqj1eRYji1i4o4dQTCPOGUqswRVrxwJz1eeL7eylPmX87Fgi1qCFcPUqJsXqTDQZ0W6FgqJ1%2BjMwnebMbiBL5CQRxPtBE2Py%2FD6qSXm7xCT%2FVloCtrgIzfX2o9UwxgLcYQxP0P%2BEtaxsE5b3%2FYbSJ041SWok1r79Q2pNPs0R6TjisYnsemMC9uUhV5xXt%2FWrZpr7gKyqbAN%2Bo8ZRAsb1EbiSc8CM1vJ0kXg59RlKFOJOErnDojr41blbgo%2FJs%2FhrpS8l1M30bT1LsZisl9HSjVEa9eUv4Jzg%2FLmcCN6F8Srvl%2BZgx0SSrq8l1G6b6PBvG9D%2F80pNYRJ5CNAk3Y98gCJvtDPCUyH45EBof%2FQdmhSPcl1sQjOfokW9aCMOeIC36trHCfeJI8xlTGIeHAPl2wte%2Fqako%2FUiJL2WkJNKJRyYUVv8Kd%2B%2Fje8YMFFutaPm2KVce8XvX%2BbaYLMbgxo%2B3gFYI%2B1fhmMfYJJQUwvLPfxAY6pgG%2Fdn2mT%2FiJuEtDkEUBbHR%2F%2BbazQYFAP8w85kMGaOHmwBXZg4QK9NTrtTZnV5ySBI5HAGAicyvCa%2BsXY3V%2FkuHHnlZJV1yL%2BCfpgsyuxTe1fzf4R3NDHwXInGfF2qLlspTAaSirIW%2F2szKMF%2BDcfrgbj2MR2SUSP4fqS3UBdmtJ03jQ5TyqHMxfE0EPoTHcKLKJErR4tRfD0gw4O5adhTfP2BSp6hXn&X-Amz-Signature=38f480a3dee1b891bfe08d624749108e8a944f4ac4a727d9b3b726c73104d988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
