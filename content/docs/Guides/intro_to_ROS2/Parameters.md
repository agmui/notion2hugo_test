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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VBRRJK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCICvrmUyrYbXvBNnbJXUXEwbkBXX2%2BZQTjtebi6dqZRgAAiBK3aiVkxE00LUwVTSbQHZB89d9zb79f6piAnVkRe1DTiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpGuYTREJJDQ9rmr3KtwDx19gAzSI9xGV9WhJrZ3GqzzZj1qk8Y1Au77cz6wegqQokX3z2AhihWDSWvrhfY5AFcw0HY5nHGp5iynS4iQR9aHai4XEI3uO0sjGqO75%2BYjQqFeAOLun5uUz4OFs8v%2B17APQH9DhVXLymxt5k3AlYaOo%2FcTw8ySVXbFGFqS3St4T0CTLKGjdPGrNvQzl%2Bs5gfVhQiixfveZErOlTaTKWEJR%2FwcNHozkfZLvneMXOYPqjzj2uMKDiMR9Mz2p92%2FBPjlWBp6Ty%2Fa%2BtZ8TjmGrHnossAqhmsU%2BYE0yaoFbP3h8Ixg0FgaprJvoMt0VmO16v%2BIltZDVXRQpA%2FUiVgShPWzDOiFFsaIkVQm%2FaQuIF4dF%2BPh8U05%2Bjz9sw7DaxGKADjPP0egdxfvmf2%2FqMaoTL7NhLkqAr55E7WQsFRW0w%2B68YzmuGwFbmLDKxu%2FOLhg%2FKugqUPilIb5Sr5Mxkjr073Tm0N1dJk1lz7I%2FPoIj%2FIQJ8SdxQn5%2FDfT3aHS2OAsTMo5Ddx1XEz0SCPHu4BWJB%2FUK1vNhtd9o6xji%2F3lbMRgBCUL%2BdmJkK3EX%2FQnxuNqO%2BwdvaRWHrGNtJcOGm%2BgDNCXbhnP%2F5yXrMZ5CnOnxBr%2FuVNUY62cUHiTFqbCkw8rr2vgY6pgFiuXiZoXcoTvidqli1KHTHiQ5VWXbV50jyRGw5BRB0eutkk2KOAV6vM5iJUUMCMuOXT34ebGVhTYcnZS27FtwTwwsYgLXiOKJqLJHDPbL8%2BvEi6FN5Ije%2BxwD%2FjdatF7%2BgRf8wb1G9mLZzAMseXOyzjjC2XMnVt2Q990hJU5d11M2B7JCS94WiborigBEyYjmEqZDhPu4I5DlGAu8Iha5ZjMQwELo1&X-Amz-Signature=f45915bfad39aed2be9f9e81449c11c8be2a9062b45d8948ef7bf644daf089a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
