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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OU2T4AW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICZgoSQVFwVtDiCmmRJQXt%2BSsCowiAuS6dtmT20YoyM6AiBoDbYhgesOJY3om3SICFlm5gMw02HkxfD7iFwAA%2FoE7ir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM6Rbbxb%2Bl5SJKMSIJKtwDXbJ6KdNjBbl77zanmYGPIUNo3enKW9F4KlpBAB1UAXWHjgH64w7k%2BFv3inh0OTciUJhQJI796NB9uhsZVPt76npFPHBg%2F13tmK9Jj8SjLNVFAvuVy%2FX1spIUOsUJowTQWybYHic31ikauzwXwM0o%2ByU8K8iTku7mKUnEvQmYBi91hr8k2uaUZYL%2BU2mFk2iuGR%2Fc4DrH8Adb0zWUFRCWTn7TrggqrNqoJGX6mGJOWEETS8Uu%2FHq7NjCEsNKNBoOQr4Pdlwn3YXAaGy7UGf1PDGaWCDoDHMDhh5SLVbtHB7iRMv7VBAj22oH111Fr85%2BiEmlQVtvPwxTVsjjfo9YStnafuAErx7WlHB5EkfmJDucZtD9xtaY42iYepM3hGaIHhcj6aRY%2BZLPgVUjt98xuwbrbeau7c5I%2BSBp8Z5V02mwK2NEl4jEnIZQDcujXDEr5Ehf5QXNLEj5yAOT1hGqJjEaYYBspMq7tIHhHUpOUc1md98BqA1RuNn3TGyAg%2BVBk3DF1LXAE0g%2FqHMy8fqQoU4wY9dP2P3slnLdnRmlWOOvH3QYl6zcSQu7vTBSYV6d09vsBEHUUKmvNrDQvpH6jmyVRmiTvfR2g%2F9KelB%2B2AM46l%2FgT20V8CUT7qMYwyeyPvQY6pgHJkv6t5WPUmWhsXI3pf4yIIZpW6PN8pSWNZbTSLz1yklO0Hcvu6n5nWqmFb%2BxOqt4H97slwRFTNTUyjkKpYRmbgPZPpuPsKkGG6HkxBFkub1x%2FTNso7RwNmPbJTMiMJE7WPtOiL5QIivVho6uua7m760IXo8toAf1%2BXkM%2Bn9QVWfVPQh9FWdjc52RF%2BR93jY5GKBaj6UnNvLGkhssCzjD1CXGrMFwW&X-Amz-Signature=d14ab32abe3134dc9510f8810498ec5a3a1fbe2af95b1aa72efae539ffbbc874&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
