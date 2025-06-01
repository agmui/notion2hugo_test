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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO6LHJ6J%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC4q48vKeQ28g6pUJtp1mzutFoFK%2BExtvUKdfAYGEXXuAIhANhNLuoGLbeVN42rO6WNk6ousbJpYRnQRn99ZsOKX9CiKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1xvWDkxrAYKkLQgIq3ANcuzD7HQSILZ6nD6jWY%2FH3ovwC%2FeC5sR6Z7kERO9PCHkos1fbwxXxMgFUY%2F0cH%2BA7%2BzQE37AzevB8%2BInG7m%2B0fAHSb%2FKnDA9wJD85PFgr%2FcZcui3VvCylq6vlkUq%2FTMoEvNmIH4Z9y9PkyG2FBk1k4IUKnVIyGAcqGy%2BBwIXg5JB%2F%2FkmopWHrA4dzFZwpoqfF%2F0VQJPSlNO72uM%2FsP7CYnf2PP25iuxqdk75uLUzRkm2iWd%2BzFzd335Rk44qcBIbOZ5AS5mc4HM54N4ojGtP5W4UWdoBe4o3pnVhgbfW5sk3HYw%2Bzi%2FAm8kRuNCdogsasHMS4us5eVE%2BIpUVOh17WQ9yAOsxpWlr175bD77FgZMbNlad%2BHDZTyKHpX6lGW%2BiJIsW%2BTNE9vXGa7YBovAsvtjt5tEsI8LWo%2FT28C%2FGiWK40DdV9sB%2B60G7UY5Ybg7V5P1WM%2BglpKl5u56JIFHaHjx512go%2BNfxQdbVAHSGS0yuk1REwvBrhB1EGPG58FiDwqDKba4x7T1rp9uJsm24bCN4%2BKgR9Sf7UPCUldgVpZiwt19OOVaJ3WtS6yoXEPb6mk92TEsMELm8g6FZbCR9i2DB03niR8%2BbzbLrXMSvLYpilSS9RnoiZRjzOT7DCs3%2FDBBjqkAWgpUhBJbO1cM%2BoDSy8H%2BpkvI6IK09q52yuzYo%2BsRgY8kAV0Cc%2F1Bd%2F%2BNKgWQcmfmKGVKewXL8%2BGIqeFy0IPQWLMFh0oWkDmWiFTI2CXBoVQM51I35koEWIlP%2Bv%2BZYvRShWy2TsmCY6SDGC%2BKieulVdy42Gq2rdkrAXOz5XRRszn3ZVJzujXuXNHu%2Bm1A%2F7fVMmCyjzwVRTXWIhA%2FjG624h4nPvp&X-Amz-Signature=e9284bea176f241ecfe91d64da65a5ae689a30b9ed67eb22dfdf3d1443bff51d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
