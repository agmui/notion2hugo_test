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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHZKY3Z%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCvozzE%2Fbh5A3pA7Z91paIhrwZeCkH9nVFwHsFpIw6UGgIhANfjVdNII3wh9H504KNVyu6bcPaNd3nyfyIwHJ80exCVKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BZgcz01QqEC%2FrzLAq3AMZCorV2dx4XrknmwNQhBZ%2BUWkQvBct07rXVSFEOqcJkvFPPRLhZNCbcZ8dK7DRRZc8GwV03XoyAX54tZLf%2Fli4d1nN838dbny4kXPFUPDFST%2FZef92JM8uHdwAiHiqxjXrG7PwUhx%2BbiPMultt2u%2BH9T%2BhwHQT4irDi63KRnPzue%2B%2FhmpDArVqxXQcTJIGuke9vp5c2A9ROzLmX8fi1txWOH4flYbwAOyVetIxO%2BqtJsNHCvjzgYv856XYhG2wfJXXweqAv05iLS%2FDgq9r%2FS0gYHqcBeAPAPnqvfS5XURGgW7Tq%2FfC8wBD4e43%2BfZNmMi3KPxSgFV%2FV0YdOWoYFa8E23RCZAugqP1vcCY%2BpPBOBHsY6QhlLAuT8JVpCKOkeQ85Tq78wnhLC%2BTuAZgwV2okcErTL5mCec%2BqIZgtzDjankDojkjzAPLH1VLoE3zzVMrAAyBvJSCgysaF3tq8nVLqhSDx2U41Pq42oLPJ71WeXMsAxck8x6JdSFkIHoOkd4wWv92A5A1O2fBnqyaUNDanu0%2B11tz%2BlRu4ZZHDWlWxWmgDhFB2M6HK3Mf2N0OgeNYAEX7Xm3fPAwqu4wvisRl%2FASonsNpjbtEqUq9F1u2%2FUWRlfcJoo%2Bhss0FtrzDohL7BBjqkAYJBXgM3AcxlmJrDloSyQeexFGLF4ZnaAQ2Cl%2FPcENmLIohOp8W3Bpvf6lidDdTeSjeRKF3RFhhu2TaP7fR8bQ81dTcw%2Bkqr9M0rJ6VElnY2%2BslLIRg5%2FBcz6RNseieIM0aDrJi9ZJb3UEaFT1t2YMuCB1Qg7ZCNflXdaaxmwIqLpclpgaVfEUgb2T0ezCqn0aJVqH%2FCY9P%2F3su55bpaajpS5G0I&X-Amz-Signature=8b78aa5f0a75611978d547de2ce2af7f7ba79b30db6728a44d5083c37dd3a5c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
