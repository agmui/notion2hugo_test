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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCJTX64Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHQgUCybkEvtTlKyZ5%2Fv77amCsa9UY98%2B00d%2Bsu36L52AiBDFcZ79kqlKzbaL2kkDkBLYHoeIlFELdROLxLoMurz8SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0u1bU%2BWa%2BM4lp3NTKtwD9WAF1VVp4Ezvd4c7vJyU%2Bv6DJ%2FpYwL1BmVVIJhG12i0wGydLnXHywEEtqhn1kX3JNWPoIrJ1dD%2BGB3%2FZHxCdV1CPXcxjoY9bRYqQmn4Oo5Raw%2B1%2FM3eTgEVs5yBFBlkozeyOH3pQXRlpC%2FU89yP%2FsElXcu7JZLuiz9QVMMLoGoKAH8247F7FYBhgmmKukW3v7Eae9v0zK6%2FbZtSvV8WXcDOx31JbdfMJXPTZ9v8O%2BOMGNHnIoufy16JXQWIJW%2B0Ftff9drcW1N%2F69sWZfeKx5a8hxHuzBKPsfKjlVBaSLtl5Tma%2FlygF46kTGvHEWiwH7OwKsBqFpYcSzqLvlrp9TgOuxU6pDYkhg68G8Y6%2FNppPyT92AO6xjEfMgcxG%2BSVdT70fk00MQNeCrSbQ1AO2cETcOAAAiz7JAKUrUbeITPND4V6AYq%2FFUxeS%2BB5mfhvaqYlrSHaBdbUn%2FiNR3EgyaaQkNVzyg9O1W4y9fJM6vZknz%2Bxz726VvBSCqMZ851stArUsiOQ%2F6C7GwVfNcqrgLleAn6Knu4%2FbB3e%2FLTEsoZDwJKdqu%2BYVbaD4Y6lcWasuP12jkMjjdF1bjO%2FcN19osM9r7veSQgvOWyHNpnbsu1h16DSXZrvxGTj5tMEwiMXbxAY6pgHuxntDUyDkApN91ZdAxKNVP4Z6YGp0QrLjmB2OIyJ9mJ2U%2FGw%2FxGvBCeB5V441S7U7jYT2Vm%2B8SGgJczqYrdnILO3EpbMkLrcRZUG3CyXKanmmyCxdnqwD1vEpr1aBHvQJGDA1I6q2W31MEOkFG3URJZdGhknHnBtCQthWP3Pvk%2FCg0gjUAByRsj4pmme6jR67d8%2BZ8ASm%2BAcHgvYxCgPouDxph%2Fk8&X-Amz-Signature=d70d5c9e1f00d724edf09756b2a33ca2aa1b64b5c6a90e7579aa19eac39cde3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
