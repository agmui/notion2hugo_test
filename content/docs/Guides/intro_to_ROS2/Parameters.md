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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZYF53Q7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIEqX3IMSLeh%2BtbalW4cIDfw8BIL8NivpNNdMiWHPmD5UAiBJtgl74XesR3mvR9jtpKmW4PXsyOVqtQtoEmRUZyUiSyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM40pHdhWgBc7BGCRqKtwD5FNlB2kofhWU6u6RT1Uo%2FYq%2B9EyAmjgdylgfaIhCZOdnLj9y%2FxBOAOEyULuj5aJOSdLsYCNflnzSuamipMg5HemO7rYSMDagKrb6YsWHcrlVKYIOYznJRGF%2FYHwyMMugRzCVsxkkxCJg94X%2FBiASHe5K%2BeXu2swOpcx3ulRTcsSYM9gAUlSv7h4LxZq0ewHxD%2BEQM4qx8N6KPW4pYzGYnkmk%2BZ85EF4TCDVykOmPFmf1OoVjKXbDES56kCgU64GiYi%2FGEvYCIBG2aJUt7wvbV4j07b%2BM3EQQryBcLp0Z5jYKGewliMtPKsZGb1U6b9BF6F4%2BXb7fq4mjUCpC6BFU%2F2cBGG9jkxUVSUjUVro%2Fj%2FPp%2FienIzOD4Dt3EVGl6nqXOO9FSw17yjboaqm%2BcWILUbgdQEiEibPrZEfOl6kDsu3SK%2F4PwvBB3DqZBIrNYAJH7uOGYqL7gCyDSmbmn4bR%2BYYUCKM4lX%2FylrlBTKubwgxP9NcRPT3LjNSuqJ1MjD5qQyxnUozND6AKtqQG0NYHBsZ17S7etlC3Ejw6wl0JYWpr2Rvdm1OmLlxFDwIG6YVwLkvT%2BZ1vho7FN3xSKtB3vuSdkgNGmoffqSuU7seedcnc41TvdosjJq38pmEwj4ebwAY6pgEAvQ0VRuGISA8QTRR7eWxzizBMv9dt6m0yKno73r4CmDKD5ijHMcplyLSp4lWMCLUUrKmjdZXFZczGOQzdLAPCVPOeT%2BoLr9D9O7iy52rVM1O3O657cXsYuGaW8RdpHkhm6deJckAeXkwZ1aBmJS4VcR0WmBrvy9OV5U2EIHRrR575DgN0puaLWneWRrEtNbHQT5DhaszNa0xSg5v%2FvHyMWTQxVqNj&X-Amz-Signature=2c3171fb8335b7941e39b5ed2844b086ba8f6f8afe15f3e7583c1e3d9d767ada&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
