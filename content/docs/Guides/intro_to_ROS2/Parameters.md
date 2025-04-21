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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT67YKUH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCeugCeNLpCmTxYB6nJNTmwjDrZPun2fIq4lSbr9hVcrwIgIBC1oM9aiVoUhvUEheM95N75A2le9XBygCwEym4cbuQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACenFNLLgyeNGvrBCrcAyoYmysMp6sfOOYAVCSON3WV7YvsIRQrlW%2FyhXLC2TjkjpksMdftQcF5kZRMGWrlyw0eC%2Fmt1%2B9Qs9fGxWLuJNbwi%2F5vGu%2FSLmXNBrUIsjyDZyA8dWl4IdOp1WDdHDphMvFy9D9B9tlAuMJdgKDZ84uCTeLPiTZZjvjB2nZlEfymEBPVruw2FowIpzgtrQdBO6jE3MfiBeps40ybGZ1T2%2FwLu3B%2BVtGp9K%2BBgtJsWO34hU5OFSGcq5PNWfSecBYo6wjcc%2Bbt9llySGzgSbGQizEo%2F0JkDwahiIfmZBj3V3yrLRnUKNw2nfhROknpJ25Skiug7Trd2K7QNBHSrU6eVAszhw6x4M8n2FO%2BLu2DdbNUHwhC31cDLqj3mPc%2ByiOCCnvJ1xVA4iFLXijtTz61F6jw2p%2FtAbx6dUlOJe55G9wSfdA4dyLx8epQ60EjIccUeHMY5oc52Qr2S8wr3j13gSNvMAEyAztpQwFY1IOqWoOXQu0uL0%2BD3hET2lhDOhXXJgsN20oTpCcUTCwm8zty7a77%2FruninbuZS4qABPjWCVUkziveRLFrjS90PwUX5EWT5wcZA4iDCjr%2F9SxoRNuqadWtxB4d5JO16rBBBwE2xceLTdInain6li2dB2hMMTcmMAGOqUBGVexs756R4B8qi0Q9GbQ%2Fk9l14p%2B7xZe81Vg%2BLFgRsKvOKLrARcqZWDsX4ZxbE0rbSlMTZWRr1hf8HJVdyim3N7QyrwTS3tHpXghj2RntGJQRQor0VePDJcV4x0ULvUGzp5SRzjTH6OIohBa59%2BhtjveUc1Q1AXWKKZSkD0OC9oKCREg3tm7s%2F%2BPZELeM%2Fx2F2WEeVJI7%2Btd9GhUmzhOZsAsckPR&X-Amz-Signature=6a6b979e3884c66c8dd8f308e8adbf993871dd327dfb31535e27990784d9fae4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
