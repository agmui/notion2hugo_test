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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXCGPJM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUIN3xPNyOrfMmAfxqSJl4T6XMqdWwcqflWC4iH7w4hAIgbGx8DXjYbnhQeqCGCtkUIZ%2BweNo0erYa85mU2fgqkpcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClPPqa7%2FFI422p8%2ByrcAw9ujHn1T9a1LlksBThpzshJdh2PjGFgVraky1f4LzAdm0dDwb2JgoB7n7zWanDzC2rSFIbAIn%2BIF8yQnOaDgkA8AY0ix79QB973FhF3Unk1DH9kSm1lVGzRoNs9ZyCLKoM34HP7NRdPo4l7OZ96piDb6Vk%2BqNWT7vkMAyGdcGcX5ezo2xLmXZocvgbxrNm0j3NaQR9VovyrZXx2tUrj3QBV%2BNDOxHQevKiWd%2BBAi2Yuj6hwC443UxQZlGrpFNM2lSdDnL8mDd5rroRVgna%2BmPvMTPL7AeNPVKgIsSEJtdsO4WNgHPCNx2BQAOJmUqBw5ulSPBSFezpZdA1KixPxTiB6IHmPPgGvnViz221J7otjEQEjCRq9CgaeJd61YoZn4IQ8ISxqyLe28FH9wYE5gojKWH6C9MnW1mL5NyAODgd5RfVIy29UwQyTSt9Fs1baDl0NZqFdeAV89Lkhs5ivCaopdOATK1yvv%2BfQZXTVFGqPwGLG4IUyX6hrusbAQN93b0IEaU7kC%2BvW4id9zFUfGMf%2BArifdn26V4%2FGMPwRKE%2B%2Bo9uflq%2FbZJwf573eozzwnxhxuS5cLB08nxdrv%2FKIi%2F%2BIogYUJntGDPbXQf9ra9oaBtCSvCahsoeFuDaZMJKwgr8GOqUB%2Fjb6VibUTta5o9IOD%2FBFnM828KTjZsMLkJwAQsuhigGF4nar%2FcDuWCkp4DVPtsgYhDxcGA%2FfQMUiLnRRjtnbyL4rMuL9Bw%2Fl0fp8B6tps5VN6JuATwEOrrprtLjZNvbOy4Q4qBl%2F4npz%2FArYu4IpBM%2FNyViQvS%2BPP0pcQ%2BsMVKIQpaPvim1B%2FGVPTEFk%2BKkh3e%2Bx25AXELjCjA7nD3IlbFXEiKP0&X-Amz-Signature=f25c1585a4848ca47aa9fa0a9ed6b7b36d0cfd4b9691aebf6094b2446e9fbcda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
