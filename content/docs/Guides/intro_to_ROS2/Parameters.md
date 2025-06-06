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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHPXNKK7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaY6btTPCzG%2FTsfYIbioQB9sN7bTWfOD6rye0JhmpB2AiA6fiH6OFuRxO3kNzaPg%2BNE8r5uxkr2sS8q1qUY%2B%2FS8Nir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM0KlBlgRaydY1Y1F5KtwDixEqTngtEVhL3pb2csEjFfmXEDyUgf1YU9M%2By3EnCX7dYFkNgTc1t6ddJrt2Y3nVLrRMuqt9VZr%2FZ3AzjJukjrY8tF0%2BP8%2FS5mdwDUayHTC80pNv2p4U1ZJt%2BMeq6BULRtL6HmgaUVvh9H8lztK9e1JkCXKcobMRT0aQdp1yyP3yaMplb9Hp8LnOTcoSyvLye9NLJDT3zXMaFH84zTPFY4Pd3ifKL%2FEm2NU2NKxY1kZyfOx4V47SJsFFbpuLuDhXYZLtBqsPF1u24vlhPcwIOcpSFkTjqSmGxyqj7aizutlES9UL8dhr88OsHTtuFYPheGMVqQhVt9LDz4I4%2Bj2u1HShd4HPgfqvnOLEr1m7rzeanN%2FPfz5SaOMn1mQG%2Bri6TyLgTIp52d7eiz9Z%2FZJORItOb%2FJ1d0TfXiYDPJQ%2FLXjLjEtnVyrNNU7BzK8LQ8lF7l890H03TdvNnSZ3u7mLhMEQtlTc6FcZpfUTmxe7KEr9fBKqk08lXysfAUR8xQ2aZ2pRu0kkmNXR7Xmhw9Xr%2FRKikkhtQKhp66SHNYSxkBoc1v5u8INLSGVotrghiK%2BJuiHQgsMbN3g7I56EFx5u7uB%2FNLSMfRI4Kv4sXsgvnNFXK%2BSgvMVUU0PL3kQw9ZGNwgY6pgG7GHZkLpFtpVbXtB8ev5tyiIZIcLMp9XqkOtJ7GTyxRC4%2B9F7Kr%2BueKPJOrLimo0VxpvClGXIhfxtB19JAbaoGQXoT%2FQY6adm1bcDgTY6wWcBmhc3S2Y9yBcZqTuRxUnPNMm7z41hntMNcJWTAoyr%2BOdNQVMImluVb9MHjAKod8IumI981v94OV2mzPerVpznxMgXY%2BLKfiIPcDZnpMjA676K4B9bl&X-Amz-Signature=2dd4c376638caca954a1154739a7e80b25fff2d8e80b6fbc10b461c72d2a727d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
