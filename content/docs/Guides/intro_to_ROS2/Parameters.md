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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQBGWTYE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7M5GIJN4bP5Ysh61w6NVEzZu5LmO%2FY%2B3z8oQ4VAfWzQIhALu8Ag5c6l09npxoz0X7IloI1rixjtWxJiSNpceMDgjEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4T05u2ujj9UgckwEq3ANOsBMdFPu%2BrEj%2FiqqgZJP0QQzt01T%2FjzCWkbtd%2BBRtbKMRPCXCAQvxR5vus0YurHIowue6kMejKLYTtCR5SKNe%2F7SxQGlOGTVnTKBhCRBaefPSFANLPO%2F0blkSQhHGLe%2FA8YVMKlF5wruKFqqRI6lmDmAtbD4JM8uzgfalbf6HH3CLSD3m3yhQXnCKMJUykK27ACap1uXIDGpmteuF1ETtHmEmD15DAA6eqppUtbmoe1eI%2ByVFJfuiTcJn67CFhfH%2BnOWv0enNIONA0c3GVqUwBb3%2B6IPVkq2wCp59PV%2BVBo3MyyidM%2FM1f%2FyHxFCudiSI0zyMnLpjFc0zuHRjPeR1pU7ClZODLvn1gzluRME7EKQ6brV7XOz796BOfxLBjSrYN4FHIcZ00ywOvn4XpX1TPRT1hMKjKFSFHVHTfLhTvHqum3wAT%2B4aG6zK%2BUbFlWmEMelz6Mk3a2xrnj8LDX10qV02Z4cWaCa0xOl2IWfzKWB%2BwL7L03WEP53%2FGkAY1ENoJGlBlsas0kyaJgpN%2BU6bcrzGGvbzFPmUmgwXnzDwPuX87dU2eP4FqIS9sk5IbBgO1xI8Z4i%2FxHxJF7m%2F5fCkBkS4fG%2Fymjn6J0q1mS%2BMu9FrV1qeBwhCFzuDEDD%2BuKvBBjqkAcwDDu4rsT6UYywQaldU7eK2d5gMna9NumrEifVEEFDOkGyML3Fn89tsV%2FCvkbzECoAfCZ87o5rvoc14CB5gmE5vELTCWOXJbIp%2B0ZkO%2FUOqb5K7gJv88kXcbBu3Lo%2FvKMnWv3OWGXNnWp1PAHXhHdR%2FPqucRpb1T3Iqc64B96ui%2BHRGynAIkMT4%2BuBsZyNqpv7d50t5qOTgeggmgkPWWnJn2OMa&X-Amz-Signature=5b61b2af66a48a2c318540bf7e974d40fe350489d7e61cfc3b796303ca67da09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
