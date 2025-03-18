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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBIIXMG3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbUjbSvsSKnALLFpoRxqppfURCK3DFnc3YdZ8U3QnftwIgDP%2F7QHgaaaqCdGkTG2z%2FgmJsRL6kRz%2FR3hibsu1Pnp8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHfYeAnYVBV3YUlR%2ByrcA9NcICV0vBGurEf3SKH75GqRB8C2ZsBD7uh1TLk8QJYRW34Nb7IRw2rKqJPdiNK%2BvV9OLeiZqvEZU5NqyH2LGVlfmxuQLtZmSBjuU2zOhFhk7pPaehm3LOECrE%2BwacJXYRpb9enkAVc7wQEmgkPXzCgF1Z5tizlMx00DrLvHaM0RPaGyrymienwLGPW0aRJQyN%2FIxrX9cLeyeeQHqzwln%2BwbM88iciI3oDGJ8%2FZfJmwQ2IASp4FRlBtK%2FZAF9B4RxAhvaFOU9nnHtkpnMXrECTl8GSHSrkhdT29CSM4Z%2BWzfjvQ41LhSH%2FYI1gLGfg2598DICedUQrcXjCTnsXoQ0TWxIOxzbfm1UItTPsMikcxAlPWy3Pdu2FZN0YyklcKMeSHCvg%2F38OxtxtMEMzlmJkEEiNjAYXRc98kWQRCggp6gQnVDt0mLLldbrXP27QnVHCzgu2R%2FbgHQ7SYx37aV%2BdILHLxTkbAE1wuWeB5Te2QnH3Xb0NBTYc7ihpSZ0BRfE%2FzcTFXdUPTqWVcRON5KHtCbgBrPQft74tJvuWG5ATDhKtLdWg%2F7pVuQjvgLAUSXDQPpPg51%2FRUGcpd0F6cgiy6KjV18TwgYDh4C8D%2F4NPqf7wnMH4Iw9obTQ24PMOPJ474GOqUBMlO13YJOf2yc0oTom1OXAZkcVFt6wbLA6nYU8bx%2Fuk4v%2B6Kc2VkHaCZMeQqf%2FhS9q4fvVJdaJYWNHzuycasey6CsMHO1tvKgsbhpOwiymW2zhG0g2tXPc6RMp7a15EWOErhVIPi0uCWWcZmHSDRVOWIYb87IW83OlrR2WPOXooLtPoGj5FlZdrgDlKxRzCcAWyxYD3Rmn%2B5IVTxz1jxbrm0r6dog&X-Amz-Signature=a0cd3f3dc5c9be2af6f39a04a5d5449806ece9de7d45c4445e4d846bc672ab82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
