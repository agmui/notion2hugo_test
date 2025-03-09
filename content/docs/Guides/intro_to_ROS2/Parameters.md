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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IUSN4E3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCPsaf4rQmZDw6lKvfgnHOQ06kYfNUt2yUDwhC4ypWb4AIgTmKI9V6xnAAThCyPsvgNz39cr0LZNOkG5k4qECf1Dzsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJHsyUNJCUjgSdqdjSrcA09tzuCeeitsHqaBW44r6EUAx1%2F2HBf1q%2FJ8FZvMz%2B6NKjkT14rSQilpSo6hSCJQwVEtYTMYTLn2Q%2BtBTiuDquaD%2F%2BITnpLAcyYB7rUFfktJ9NOLGgFFap05vIzBXHiQAgQVyls6JQDtZbeSKIIn7Yg3Cu1wd3K8uyxdbDYJWamyhq7MtaLHqBCJbcQCGfq9IimNtu%2BPMBtqixkU7EqBmDsu3UC2dLPNiyvKi82Qdc3d7jpnCdMOrYkxh8pOi5K1YsYMpOUWRQCdazfDLNladgoJY7F2%2BG%2B%2FQOgWQPFIThb6tJN4kwPxoS1AcXks87db2x%2B4ukwmCml45rc6JfMaJu%2B%2FJ47QpNhEmwq2a0PGqYokNGuaoKRsz3asU5jDHVbP5upU5e5P9Z0Y86awily34S9W5j47ouxYr41lnsbFjyEuFmbNzUAGNAJLjP6Wzm%2B9gHMWj2H2zMT0WaqlzbXqLV%2FRNzUOH7EbbJDDdDGAJsYr1U67G1OlRLVf%2FlvD4gBUaHJ0O9dRwipQq7a35ugOOxx2zw%2FxJloS21LKDPPBrURO5il1BtXQCr9UtNKBWOecgoiQUdpWQ98KuMGmzB2j36zfTWDR1Pm2jkOVrcS2A%2FkeM%2BD6bHksnF1TiTYrML7rtL4GOqUBqvpv64fm5OsLz%2BUErDzycm%2FLQOhPjeysDAfHY6a%2BpUVX7crllZ4Rx0xb29tlZAG4Xb1YO5LgtLY3exgU%2FtWrK6aRFp6kMkI6sJcdO6hcvFjge4d9B67oXguIpSzHmyZUIRul0OKHuHrf7Gskk1tZHoIePGqJinZIOUZ%2FmU9wV868KHHStI2tu6Onp7v6HuJePUn0ouwm1JtFzKzj7yafhY9gz5Jg&X-Amz-Signature=196d3e141f04b5a93d3650e23f0e9a1ddaad7ff8253efa1e383b07437c5c88e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
