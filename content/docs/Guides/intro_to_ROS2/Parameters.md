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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTBWUIL%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIANz6U57mBVd89hOImi3b05yk%2FPwnY7C2jdmqShqI5nMAiEA1MxHTxoR6Rr5Nx4yNpXAj6Q20%2F4DNz60CIRJ49TF2eUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOq4tZz%2FykyNor3WCrcA9RjP2iNTZ1NXIf9oCIBKCuqRnXI9WX24fbFgXv0oq4eoYK1wNBwbi5B8Q%2BmKjVDV4eaBHJ3e1DaLGdSrlJOP2P6FnmEFrMHJQBNulVX5XtVxHKRBBisDCIztlpn2CORl1L80IBgbuc%2BAARZYiUNvQV7uy%2FsxFtSKASSOBGqKG4l5L%2BOJ2Q0vuU0plZy39a6aNtoWfmne1p%2BBpChUpczcS4B8xocoNSWByA31loJ5rA0aguiAU6S0vQBYRAk9J0JhXSc1S6utBMTQqspX0Jf2OoLPPeF2ramYXPnS2MMfafeEukb2vBKVyf1Jjk8eehMEL0alFVO74eaV%2BgLRF9ZCkaZJ%2FLG4DadYzNNrpS8SzNhmgIf3KPfgRFVciG6qrkZvpKdHcYdtsNzlmI1Xg5Va3ZGxF5VxfkZeVXX0badPhtoZgE1VygAZEsF2VERrV%2BoT%2FtX9lWwvbSr1wgZoKbcJUB%2FpKpJMSedVHfoy3yv3WsE7ITc2S71QeML7m%2FQ1ksQA4EiiVfs1M6nQPRQiNJh29THVEEL9e9X7MA8gcIxtf0PnqdgS%2BtTl5N6zBIaVoFf%2Biwk3kMd%2BHas5tc0WyH0e2C%2Fm0brQ2vNXtgPflik6IUfwJsb%2FsLPpJ6rGx8FMIH43L8GOqUBQYH%2FEpNwuk1foez6QK6rQvuMUUW3I1KeNfr4%2B7ZVAIL7Sf6fmU1X0ISDCq078DwIcnWxqrB8pzSwz0H5QJA2ca5Q0F%2FSmAetNu4vRowfsfGKG9sLKfpt1HxeFAv4h7n%2Fz8UnsNjLYrEzn82NqefgZ1ZK1K8pMyRy29GkN6InauXT%2FSCJVvBOYxEtSOpudcWizNtelGg%2FmZxB4k6cACw%2F2qLIYjIl&X-Amz-Signature=d9dbfa30da83dde5a19b6a6a6df604b1fb812db7c38677aa54f7eff63c42c7bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
