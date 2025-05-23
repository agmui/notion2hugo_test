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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665FAJXIS%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCrxYGhI%2FrKSdpBJlWS09IzO1O6NZccPaYY4MBGRugrcAIhAMcyqSDFXoyNqkBzrdJWn3yjJv0nnNXsuZfDzVaNvPzEKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx%2BpC2ewXK9GtvTrwq3ANTqJaogbsYhk7%2B3R%2Bx%2BLw2O3c54m8PVV9CYXR2rTHbRTLeJXOd1hCTnGeNSWBOG9kgzy6%2BNGpJqXA6wXMMXbhvrnpB53AnzJVbLadfK1wWvp4HHwLk7yCAAKQuhv5YOHFQ0LRNhocDFHYx4Sahn78PrbF2qOApL%2FqbWVtVGn028agvhewJfZSaM73LpaRxAHaki%2FUaypyJelnBQYce%2B0XLirYIeikFp2DP37YxXaDv9FKuEZGCcgbXJrc5DLUXBsNyGRX%2BEvsSM7qbPpvLZ3ZeWF2SZrAa22G0NmXr4TglsVDmZlTyHlHqmd7zyeSFLF3fituv6kew%2FTGVaqgVD6GU6Rsru9Pw4qM7oFF6evVZII4YzTsdIj%2FhcyFfh%2FcZaIeyde5TYISRmldRAPR3IgjfbCnRXRzFljskZdUtTGLFOiUPUKO9GXq78MKwrMPs7duPg1Tl98pmeUbFGj2feS9ey05Vv6eFk%2B9cHUiEd9rrkyjWYwPaWcKhf6AvJ6UX%2BbQCgYtyMtRuYhSzxpjm3YXPN4fVNsYt1lJRFHu%2Bv5ye0OEuBeE9QIUU1gHxR78HcbyuxfrAu12v1SPm1ob6fF8Uwy3e4xTF8DysaTVzpadIETmrNFt0TpGEyQy6GTDbwb%2FBBjqkAdvVUrgC53T2rvRUEU%2Bt2QSktFT9968aimRiSNdKxX1BhQm%2FYRGCfv%2Fd6LnWgWSMlVksX8%2BoCOHAASD7B43x4UwJx6zDjnSTKHPKpVHFbDyXbZPqF04IDDuI5a8rencbrbaxbRK1K0cBpD1mtPsNvug8exGU1A1Rcm5uwXIQ2o1by8IYZwKSOjlOTAhOSCHB6vDG07ZPcYa%2BFTapAqbtzWFnia82&X-Amz-Signature=73cab0ecd4254f294c8bc9e56f60d7fc48e1a3d874df4530ddbbb99256024ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
