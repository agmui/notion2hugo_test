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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVXSDCQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC%2BFDqW3a80FfgQJc3PlfVAXvnmqvgj%2FMZxpSrFjB5S%2FgIhAOeMAr2hchFJ4pPXydPHvylDwtdY7dYBmwWmVoOgAfVIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwslPoNxzdvR8NLLGAq3APX0Xfn7qlyffDffs5%2F7X9RPJXFK0IQwyPsYGwq7jjGuf%2F1qgnClZoNGtpu%2BUJ3F6ItnVQIfTOsyyLa8RyyKRPGn1v8IXC%2BOpWTtJGEoCPtWGZSAqw3z9Htd3v1Hl7LSab2iSRnTQ0owfVQ5s0m%2FBr2YV%2F4GWMwFa4iy4xkeAu%2FQEGGdIvJ13hAsKf3X0S0G0sWE7cNgc%2FgwRXNhETyOCfncypTSkpVQyoDpTWjbaivYxle58F2dEW3VW%2BEX1Z4oJH4%2B2wfWb5nLF5Wb6ZoqUdRNZc%2B2Ju5v2JSedOn7fpf1lXm23s%2BJ55k%2B06VHysGkNf%2BIvzNG2%2Fou76QKXmyvJRwp6hUoPG%2Fhs%2FV8%2BGH8u9FeSSUqCbtIixfEGgSwnXFnmRukKcILjcSmMIL8u0oK4ciAE13C2KRq1eC%2FjogZ%2BsbogkxJBOZshX3bY366ictW2PVROK%2Br87j8a3x9Z6VZBgCxh%2FF3JcNeimpOXd0N9P4myIZCdJHzIiAG8IiZuOJgdKESosmCpR0iaPH5Qq1D3OVFWAwPSmEKWf6xXB%2F%2Bir5u4viXorXoFFvq7TKXseDuBtLuhWnD9b4i2CnO6KMg5IPSwUliKXvrx1Q9beqtv%2FX6FUUF0YRyPuRAfv68jDdv5q9BjqkAZuksNRLI1Qra%2FHZn1%2FkK%2FdnNpGQT2U%2BDMeUxMIk6G9150Jy3%2BT0tzYyqJ9GD6k1xZ1SNYavjIsLb8qt1Cd9pFhKTJkUmhI0J7PhqNWCNe4ejSvJ%2BC48IkOTY8sfwA7X%2F6NfFNY%2FYE9v%2Fyj50MiD42oRcml1Tu3Biqh4EFcfKmWpf8XDjp7FZ9SfJRm5aNz8lqqKVzFPyLBDiTHqZuUpBvAMpEaE&X-Amz-Signature=2ae7f7f0fa9bbd43d1829555c87388f61e4140e527c87b79de88f1f51acee8b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
