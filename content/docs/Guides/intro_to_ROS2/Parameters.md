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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHKIQBF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv21lq8UXxqpk3mLvm%2BIsymJqyDGZJF%2FSuzR29s3bBoAIhAOq4R42vdwfXtrdVeHoJjt1Dh8iUQhIP7cShckkJqIYNKv8DCCwQABoMNjM3NDIzMTgzODA1IgyOOp99Gq4pCuEWgW8q3AOaN3JWiiA5xoVSiDdqGO%2FMLBZFt1bFR9hvHv%2FDiko%2BkNgVpKu59AkJ%2BGs64Ke2u5vHJJjI5vf1eZaHBNv4CTcGEPSgo1HkuB3dTDeL6zreus7QJKYm6ItSPa2k8A9tj2ykJ1CtvAR4tTSo8D2jb3ARBWNSSTs5dyaZ3ivLJwSV9PCFP9gik85aoPfjRXOCYgUqCtqeJ%2BSb5e86Lo13RfjtZmEsVBPD%2FxuJazSOidtHcJrs8aue4AqcwrBS%2FHiCYZpMEBgVFEfWJwjxSzeAvRpgVCejHYCKJj2Ev3SVLrw%2FrCvvXN4D%2BvQ8UbK1YfwIBL8qisN4%2Bg6aE%2B4705j1yx%2FYrf1haf1MMTFD09ucDgcj7wi%2FnBzgIkN2473mt8L9t%2BfE9YPVAlMY%2BL0r21KtB83VJ4VjGFUsuHjFLjF1t5%2B2S6DtuhIuVJFNcyiZgAxSWLzuervnECJh5DYQ8m%2FWvkBef7nXHV03%2FOgPWW1QExruEgWiAjKSHoFIfkgpgtnF7MsovKug%2FoRK2EbuIxRdN1lXROXXvqLeFt0XPGDgi84UFL0TdhMcp%2FlWZ53FpFEJ5vm2qj4UgBPNGYpWRf42E032%2FU4rNQhBdw%2F%2BFrMfv4ai05durfU8U74saZnLhDCP2dq%2BBjqkAVlxDY4HHUOmZCx3xVpiGRxO%2BQyaLVXLYtaLc8BRgYX09Oe1tilbUFnKK23Nj%2BV0LOnOZP5SQW4aX%2BA8yL%2B%2BvvPPJmKBaiZNxkYgo7%2BXS%2BlV6g3LqaxHlfJkKHASZY2KV2iRiybI6%2BpoPSvHGUG1WROktjwnoxKxnv1TC8eDDLhIm%2FUWQDqNbL4ldOU3qT8FLllTgnxOZu42tCsI%2BlVPGTMeYuVH&X-Amz-Signature=59155e195c9eed9a5ab42277ebd3125889950e83acf4d7abd5cad5db4e41e5e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
