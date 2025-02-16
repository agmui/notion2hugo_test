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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEVQNZZK%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEDGw9NYPws8eApwTbsPUffK2RDL6FjhIcqwwngv2I3hAiAlWi7%2FcH4exVw1Bx4TbRNRV4s5EKBBbe1P4P0QvkfCOCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMo9tB8wsnsZkuZKSJKtwDi2IvOtmclr1YKg4mwOgvuwDE1RXLaFn1abOo1GsXfQ0efktECrmlqZzTNQKC%2BrOR8G0Tj7PuCpDtIPOpovIMeNtdoH00EFdSERgCjttM9%2Fs2gmUckeyIINB4oNehfyv8D7evbiBmzLHQyZkkMITKcsDyobxFhhNYuLG3B4Las1xrqCnYEsP9Ve6B7jpRqFrv4Gfv2%2Fyc%2FBL4DfDgViOx76QmFvAYHvF9BvG1SfLsGdHq%2BG6YX%2FviGTz%2BXb60V5C4tZkisvql6o0Zl3jNV%2FUzbCJG%2Bez5QqnYh%2BtfSsnDR08X9PMItlZrTfOHZLc6hL9YxHfHC4QuK1nsuHQhTjri%2B96pJfZOkhdvTCIYo4WlvvD7futheM2YCFQAE%2BaA98cdV7KaWm0yFv4X52Jw31XmOF%2B%2Fs9LYL2zuUGz98t1tIiFW1aLvqupMrv9AL0plEdV3%2BdK14%2FJOFdgvNCG11267kTRKqqVLdV697646m%2FUDuRrEYOGMWUiq01ATi3ydQChZkSRCikAcq1IEMLCck5Ma%2F%2BtCS%2BV6EJsKJeotvRH2KfHxK6qaVXN5sPqvyXpN7HbSH2sBLKf%2FwotaqhoBBgwP3Uqu5U8YOq8GeBMDlFMOS2LgXZAzpg7zhZn20jUwtcTFvQY6pgEI6NmDRKkzPZBg4ATLcYhYIj4%2FDceyA7RFk3O%2BMD2zme4F57IKTlv8kdbBSB95RMRL%2BWT91mHqqAERAjKGzlizcbW1MoI1hEUiCxVPb6HK4zpPvcvcH2Mg73QUNhR9okdWSE8WBWMK80M4hWH5Ayqtfpjfh9w6SQ51mecSlVlUxiep5NMVfuBi5P1UwDebq4TTvFuWVozkDVnXermMT1MzfP60lEG4&X-Amz-Signature=737ffad2e52f0a03541a91f571db9362fc40775f785e6585b7d55374d8ed5b33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
