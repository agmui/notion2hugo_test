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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YEETFT6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA50Nm3jd6rL0JYcOfNR2GVvjYvDyOgrMxTUEAq4c5%2FrAiEAn4r7u4fWVElIX%2FAYjEsNeyeb4r1aQzObvDVMc%2FoWtrMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGJppQUA%2F8949EXDHyrcA%2FuWaFUJqTv%2FEwxCgQNR7YbLqElpthbfxd33cSYH97i4rM3wOaUFBnA%2FatHFmaTvE5bGoUCXXjuGquj4bheejEnrZkhK2HWybc3GiekUdlzDAoSGt5JmG7EV%2BfRAezlA%2FCOH79fHYIHC5VjiQ2YXWTV2T5mfmC8lTYbCNnbPUfBwjzBroTvGFYEve2Q9r%2FlRbTATg54iWZO6JrgnUIpF8kGOqwsBjr1XE%2B3pRknpGWStPrXY5%2FuEp3B6W3fWsrYjBel9UO1OrONnJcvhmBYquj%2BQ6UuHi802GdozB79E5dc27DCir0aDGfvmT7FGkB1vUePYpKARuePVeFobXgKZSYgYIGi7UFamadYYHCtdNAyQGwNfWwSKqLeFSpZZbexukKM%2BlgNMqUpIW6yqPcvmuo4J3JBdtrcWBLrw2lgbk8OI8zqGcFBRt1r9gdqhq5ONjN%2FC10rcOpB%2FH%2FLVos4M6Hg0NqP1d4DllYbcfV2FgXZU33CfRLVq6LATV1C2STipe%2FInY8U5sYrw9wPMRd0nNU%2Fki62F8pDzetVr7rJ1AVZCIgX2hjYkC0SgZ%2BuFPw7Tc%2F282hhfp7VlQKj%2BvQrdvkpkx2k6%2FoD2oy80pRcPguGyGfDr3AAlGm2UZPvxMK7F8cAGOqUBsiOw2nhZhQbRqu8q4jvCQB%2FvAZMJ5zq6xzlcJeFiEGOqp1Vuzqt%2B%2BG3hHvEObIN9jHZxcdvcCvqz79Xrx%2FBJTB90zYYYqIlUs8PIFDEO%2F6gjG%2FRjPy4epM4g9d9uqw4Hmf8AlRv4xR%2BvFoyUJziPO9yBL59fovRXm%2BcxVlqacFCvNAKtYBIWwwufQUPf9BogstMv1Lqodw4Y6LO5T6kYQQfb%2F1f%2F&X-Amz-Signature=06dff6d779aba136b2a98c7f244040b98ce0f60bfba149d4fa57c12e31ec0803&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
