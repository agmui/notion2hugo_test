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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH27YJHB%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIBA1JUH4EaC1CtPsz8I3IQDW3PkTOL4L%2BKqcMZUPDP3UAiBn60BeL3L3iwV9EfUAwF4OH1HoinlgPsEUhnYrLOuSxyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQK0T77u6mBI2aHYbKtwDt1Cb%2FYgeEHalZXg634pSYeLSAMPTeHM%2BrpLjme6xZcXvl7L%2BuD6mwfteKcaJ7h0rERuxoUkM%2B%2B0dDaQljjjLrQa4kpmtQyJ5%2BE4gprFrXVCKDYA5acXsegxSYC2hsuMjsFSNWFkOFPSYCK3qGpvZbMuERW4bzj%2BSGj7t7M6TEbaZV%2B7S7kPUZrszXbBYrqVYR8gD8fMMkMXJ1St3Pzl3j%2F9HEi98FJvf0vDfH0bDdkpB1gx4UGRa9T4S5oqkq4UYq2s5Esh9Fdj1hpq0JCO2A9Ev8uf9O4oC2y94yQKEcjnJ6iDbGPDBswijJgo%2BHu9th5AM3Au3HwkueZeTB0m2GbU6s2WOdao1DiecTtZht8vEqQbxw1MfycfQdV%2FyOUkukhwpbUoZnkVkdnV3eMSr8HhuXwDUcF8B8stRgWgw%2FD65PLtV5Fqs9H04XsrfwfdIS6Xmzcy77YhF0w4OLp04Qk0EcD581IKaVEZ6BUrfE2upSI%2FSYl6mhU9EdmCV5mrcoLTjQ1PzmoDhiwBNg%2FUn8T1RnSGl%2FvAPYCc52JXvelI62xxYUB4%2FjMRb5Va5LxZX%2F6q6fbpvdWuSmzoMsuNMl%2BF%2BIjvky4BTRFIqpGva6zLV%2B5ydc50%2FNU1SNo8wo6XwvgY6pgHy2lB0gZy6SOOASL%2BNfcwCUif1mOXpJpqDaTquuTSzPaJiAZhq3NukMLWsCGjwdnZw1E21BcrirIoMhzghWqedoA8e%2BPJgL%2BjbFsaYBNPawqU5IYY%2Bv58C2geilKvX3BtjFD1ZE3qc%2FtFv3pGIMGp4DXTpXMQAKKvcSdLtBhpBw5ZO6kDrBwqL94hNo39sIwp%2BxkSnxuUoUk7nHm3FEsxbVMJq9NtJ&X-Amz-Signature=3aad7f719458a6222367026d3593a90b572d60f80589952a5b9d9fa107cf61e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
