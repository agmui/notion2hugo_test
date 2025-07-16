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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYPVOZG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFJcOBiuU46BMOH69Bc3g%2FJiPIABwK7AW9TsdM93JfuxAiEAnIWZAkbWXSbdmb9yfbCQXS2QlFvAPj8QgkLZBwHi0BMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLr8dpMboNAFtFyi5ircAx3RC1RVjyujffs%2FHqhUZVc1cQcPrxtjfqjU9TUH0trMFzBwxR%2FS0%2Bw4zWkPsKZJleiM%2Bnu1c%2Fc8HF2%2BkFIxpeC3FqhAsqUCMVF5qmXnJbf6pAaGk0eBD4Q%2FLFdjrpu1WEAgDsij7KBBvBN5OqLSGWI92NrSFpifwGb2MGSHTY4BdJjjfVrI%2Ft0RD2srAltIY5NCwafO%2FKdroHYS9%2Ba%2FYwJVmyo9yRpZTptnHrz5qgM5lCoOKGLQAy9W85rMiUkqpCjx1m9eZd3wV56T7cNnYQBVRk68ikFvTuz4PLLr8nX5GE7dowaSrMbLGHlKSxfVOisyoytl1tGAEYYEcD6Gkntd6XQsa1T4q%2FM%2BMW88kwskoH8VZpm7qyiuxc0rm8m%2FU60ziavMRY%2Fb9dzDlLt%2BBxbcNLKyJiuejRLtIETPO24A5erET9G84D%2FGATZqEEhWX1i4YIKVFx66XGDL1akAIAdPtjvE6bmRu%2FQwya4Y1O4TFrQPE4kc2tdUKTlwm0Cdkz%2FtoT4Qcz%2Bnc0Opf%2FZsap2jkn41A1w3y8XhaFa%2B7E%2F3qC48CJzSKixTS1x9UeG0EHIrF2cDXNyTEbXJ8SCTXiPfq33YclVnMxxwg0Yv02aXux%2BU%2BgvxYkZv6UHxMO7n3cMGOqUBsRx6xq75CUuYuCP%2BEAt4bm3UpITb0sW6jkyNjPP%2BTJjmqQr495G3gMZbvVLl9OfMwcmOKrU8ya9bI82svGtkBeC%2BypVK%2BdwMtFU7mMByWpd%2FYvN7lLdxb9UtL77JSNPZhClGa5sg0QaARqXfOHwn6U%2FHPzCE2BqNBjDvowaEzVGLIaAj1qBoA9yCcG08ixdf2vSclOnV6tSV9alMtEEGxo1KkTR1&X-Amz-Signature=5e0e81d2aa832a0e5317f19231bbf23687265ce32eb08a6a7a4911f76662af02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
