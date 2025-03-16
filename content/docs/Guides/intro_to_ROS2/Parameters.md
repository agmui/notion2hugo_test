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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636OXEKHX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQMoKCjk73Tc5O4PZkN8Pfp9m8RhcZo%2F%2FS8m%2Fx6dszFAiEA3LTYYM99v%2FGXLvsKtzT24G49RTHmDqG0YIKtrjpxxJYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDO80xiNU1bCFL9VGgircA0XDoy7eyGXmxLX4bGB3uWfnTplGTvhfPoCq%2Bh%2BPwCeLXQqdLoq%2F6zSg5%2FfigeYtE24cHy39xuM1nCetgQKEAweRL1CLwWOy8FEpC25%2BJRTrkltD5rHbdwjueB%2Fm1LW%2Fnr0yU4fKytI8p6orYDBw%2BLl1C%2By1OJT5J29c4aROzgjNtOVBoR9acJseERRytMBUgRQpQ3lgYorKqT6yooDf2JQeaYoCX%2BaJ2O3awFTT1YzuEkd74dUEwdR2YgWZL9DA%2BHAU0ypH19uEXYu4WpbVppi6RbpnKxi%2Bmyj2iHyrcZoN2nz%2FafJ%2BaF6rCwqpECv1SaggbQA1Nd%2BMB3LYYa1PswX0UCk3J6SGa4DcGXIbbyBgbmgwePAXNO26Ir%2BWrbBKOwG7aQ%2FFIuehoIjmJtDzomFXgd9oaN3C0Zj1KjQUY1uLKkmOu7KSGQYkULhigpFYcG6Z2g%2FkfRlCVSA4CktuLLywXQbyXw1jPEhO2aXFUFevSEcZwQFLOSIzANLkUoKb%2BOIj55Y7BSIzWSQZpmHqU%2Fs1v3rGJoxnLrLC0yGAukm5vQtq%2B9Gm2DIySzly97JjNj4YVUkvtl%2BTlYPJ7M%2FDZrZhRmJZSh78f20jJKKRjjZcC0rmxQ2SyZRjUws5MNHY2r4GOqUBwO1Hv7WzmV2slBKv5%2Fk2yaljqre%2FxjJBzWGpWF7aDMwYq7V5DXA3tSLCiKdjFXfGdo9FJKZ6%2F8%2BIye4nfFZIDZRSXDxXGeIYiKTaZiXxZczM5ovWxLMEYT5Pf8stKL6b4D83HrqJpOeHpR7ca2bVg5GCCAgeXaYGDNf1SElWLoT%2F47nyWPMdfuQW1eJjdGBUAKcPc%2BVpCQragFRLMSp25KMq2JIU&X-Amz-Signature=68d4e71468f21e3018203b8f7f10499132f602f62ccb697179066db91435e2e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
