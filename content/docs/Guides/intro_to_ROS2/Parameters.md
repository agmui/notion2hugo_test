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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKBDNUB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHa%2BCIbPXDngRZgCuNdKBUmPMsyVQsvUBhJ6hJkUwFbiAiBsx%2BYPUiwKGzjTtuFhO4IbsL1cBam0Hu5XrcfL0MzQgyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0zk%2FClWRmWSPWf0GKtwDTHRB5LkyXro1tWMbE8WoBABOiOEnsQ%2B4lYWxQShkzAbdI1wLjM1pEnHzglTvZSS3lQCV4Ya9ZxHAybt0qWOMTTPaoy0sRsEUHZYhaq3mCiHz40aWHcl0PYjHgW1qi0%2FRoSTyEqjsaz6Bf%2BnrFl96Ht2mEemF2IVcyS3Qqh3SOXoE9O6NNcoI%2BN8bMLjYHvSbVlGyL9pIWziM%2Btgo1V2slaWB%2BX6H3Lc2046Ch4YM6PnRUmnEdQuRd646s6%2BXvMjw4UlBTK5wbIhASmgGvfWzywifMzT158%2BHlz4TwBwMcQU5Il0Xc7QbpbLHM7oUi0O4P%2BTgueWJRNNfssc4i6PZt818Xi2sgOK7X6nsDx%2B40PEBMRRGihV7wLgrS%2FfuGSiXWJ7lQ4QT5mQYJA8bLwreUsbOwe9xQlaGDguM2h9haJ0BlKShwZm1CdRVDNXjKhCiP9s3ooojzovaLyw%2BTl0fMri4DsAvHMw5sk4FLv9QgmzE07d58o%2FP1tm1bXQ20JN%2BTivhxlBoi526cA27Htsg356rE7qgHnBFxoUdNKX37JAMEmj8%2BfqMMWBaNIsPYcLKkvftMt3jT795oezoxnaTnLNgeszdMYgKQKElDfzAk8Jrvnwi1pH%2BPMDqwC4wsJy2xAY6pgFBL1Vy0Jau47d%2BDqZrKXK32H2UMtxWIGvZrVIAzk24b2Cp1CgJEhQlNJEHyEhSD0%2FRYwOqEikvpWBs%2BAHfvtxUqvU1j177FBG%2Brl3ElZGD1fmR8J4RW7luyNtw1c0oorl2bKYR6BmDrn%2BwfBIW27E2qv%2B5dPS1BE%2BS%2FRlvLLyeUfz2gQVsNuQ8ra5F2zNu0%2FKoy8CT7WDoFpeSNqgIadRwUPSdQ8%2FX&X-Amz-Signature=0457a7e5b63e7c67788349b7b3b3158de0b5a3d51452457d8a7e565199d0a9af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
