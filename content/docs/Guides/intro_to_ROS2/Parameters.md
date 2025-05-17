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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURDVFH5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH51%2F0UUqvKGUua%2BHJYMMKqiuMJlnHYtlUAQ4OgMr0zVAiEAhhsNuT4smEXYbmKuamjlwL9N3hivnWcaQlYfswuRVVAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOX2qWNRHMA1rCwK2yrcA3eT02JMH7IsQSG7OZzd1txPKCyEB5EkzZWQAA7Ny9b9C4XlYU1DjxZ74TIgyE9HONS%2BXDnivRxHbOy%2B6JBaoBKcadGde0pc9LJUIoO1GEJzJ9SZfvyt3TPULbjPhiNyWAWpPkMIBTu85fSdkiBhZLCkerjA7lJrWmFR7M2u89xD52jR1kLsPcEYzHP%2BqA5enOeLjllNDOCSiKFl0fd7uL28kgb5HpG%2FN3ITlTuBnigUNUNLQ0iOBt6O9qlNHgyRITq2p8YhtZ1dTsHEeSF5nH3aWmcypsI4z%2F%2B0LkCABTbl8qowyScHwKVoiX9EAcfwV3P15kJ2UcQyg3Y7u6CROsnJhGrcjE7J%2F7r6P8cCT%2FWIpiOFNrGxiTT7Y6mptpxtCo6eFX6F%2BYN0y6BSAptXLkAz82L7Hng092AjsF%2BCXs9UqqkUf6I59nH4jViL1qY5SS8yx5AnOZmF3rbO2k%2FdmmovF%2BMV430VRPCkjT4G9CkI9Tvru0rvALTfEaaByYTrfzFswf61NNutQmelbUzjkBdCFMlocBC6q0V6DfJOwKe7sOP0AtTp1OPOPUCYIYbF29a3%2BLkbrhPuPQLQXMbY7mZj3sOdvteOYcRL8QYDDIkt0%2FRAx1f%2BxNqFRQxoMLi2osEGOqUBQwQIbvNAtdGuuVr%2B35yn30lfjZrSyRzp8mNHbuMFdrp4ZG8PtdPS2gY40jdLwsY3jt4cUY9OiIL2775ckl0FY0kqqUMnII%2Fv%2FT4OqrNgFTwqk2CDJVfuZaMBEg%2BMLzPyqhbmvbdVWXSUkG2cnOgWmiH9Kt%2BmcfHXDzcT%2BttM76sXHyA%2B0x7Ife4MszpAspcm0%2F%2F1lNME150ohZ6huBAO9eLslnqi&X-Amz-Signature=36dc9869d11ddbe749c2f5a9f81515873eeea69d7148c90d49d31356fdb96479&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
