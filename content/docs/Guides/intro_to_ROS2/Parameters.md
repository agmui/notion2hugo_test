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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433CQVIB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDuiOrVIvLtdRDAaPTxgWD1yzlI7KQjUkhgGzzNnFZKgAIgNppNTwTp5Ik5u4ExyNupYfGESb4xpvuZ%2FsCe3G1PHMcq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDwFZfk3L11p27BslircA2Ifn1Ovr%2FZEg1tRL5dRdfTw35hpO2YfUg%2BlL0jDRDBb0i7W4%2BXMpR7VZAYDoANrhQPuA7A%2BhWlPATeaHdgtJtqurV8Fr0TCpiRx4luhRUD1ULLJBLOdn65oKlxE2zLK7MAWJ3QX5eCLnIATV1AJfPDxBdAEWeio4oscZtQGNPguwzNuXqnB2PLuFukUQozoARuKMtAH4%2FOURZfV0SqUP10pDtLRuShH22j7XlbOphQ8J0NIpqZ96KXz60OEnKcthiHmE9KzRQReXnhL%2BzT5uVzeRxHAM6pbHKMu9zOd49VFgy0pmAot%2FP1R7eByKP%2BsbtQ0Zlv%2FeEtn5be997znrPAS%2FT3Ywy47vF11sNg7Ax08WBzWUCJ5zRu%2BwcECO9Jmr18z83gGRvvIV2t8JAseZQ8%2FsfgoUXf8LzVONAglktCxcsFJL1ms1VtLLRGRSYN3ipg%2Foufb8wMTTqA0fFi%2F2G2s2hARJmR6mI4ICQACV3iXcVzUD%2FbuA7tH2wzrS7l4upFcvevOmU0oU2IlUjBOsjlTeYBze0dYXd6RmlnIyAF5zCqV93pkSJqi9jS5yr87YhBBbUfdYI6vEGFnfL%2FPSdeIUY8GYKeb3BOaAE1yE%2FxtAwi7x%2FO4O3wSa6BFMM6fqcAGOqUBLdVb8YZKr5jcN2vBTLFTlASXvh87%2BqAXyXt%2BGgGyVhbB0GmoxsW9zSfyXDR7S%2F3ymBsFqzvgD0p1GcH%2FIoPi3DoRC1cSVQF3aJF5vv2E%2Fvb59axFRwoOpSJ%2Byvqv7Vf3Sxjc%2FAKobekAmoDydPX7NXhn94ItvSYo8hsaNpjW3Gi0hjnn4ttdqVMIriMWT8XWtGPlnidrdLh4IJJTsKqlQiPfoBiT&X-Amz-Signature=23759c28977139d0e6c7c4cfdd511a6545fc09652619618baf3d7b41eb3d0ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
