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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KMARWUK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIH1isePi49hl%2BtRtQezibgN5aS%2B9xhjR5Pf%2B%2FEPf1k2DAiAD9uoUwBSRmphPO89%2FRZhbi3H5jqxfivVCUA7Y2pauZyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMtnzpBAEl24yyWsDYKtwDIlV6Lmil4%2FzvpjkH8ULYF%2B%2FKunOjOZkEDP0jq9lUFd%2BOvqDovZ5IMBe1C0SuL9Cqg2L5moS0c6shn297VGoJOesslfXiSbY0POVacNMpLWRqLiLUCbp6tBUcORERRCTp9iIEubBaBEZJm8BGDbUuOSbRLG0W7ifqgO40YTgk%2BAq%2BDt5BzirDRDCqybEN8fMHGY3bxJi1a7X7W5hBMeM2vMLfaqyjyJ29enJuVVIgOoSRL6DUqGd8Y3LpwZJxqPdX9FkRGjRvsef7f4PyDnfp0p0NJHTvaaUcfL4MiOkw6cWwnsRezFHtoN9gqBiJf0HFDYwCQig1hl0ZJpHm2cLiXF%2FjLAoaO2yg2bvt49tCIE6VRI7oe6M0%2FSar1lnbfrOtxLEz%2F63LOIKK0wHNrOJIyhJ8SBeezvTDzqZXTUtVJreZvLnGR8oKSK8Use7GsgbZcITDhSzAkkdagzYF5OBdIiE4AYcD8Ek1l7PiYsYlLNUobZYNAfGwY03AGoUPpTpngvksKUHbwpyJTXCbzN52m0Wy%2Bc%2B%2BslYizn6%2B8Zkem728EHIEAoXxdPFSrezqBexZ3bcdYp2Dzoa5tFci%2BdZe2%2BL4FX1A84vDnCt2tvgX0FK0EUAGg0a3cwQldF0w%2FfaQxAY6pgHnUXkKvHdm3YacXp7wV%2Fk3CkFFEb96cEJy6J0xDURG5y8Bc0a2%2BAOSDbaJx%2F0%2Fzu3u3QVAY67tpdTgu7PoW29%2FIbHdPjN2vMysn7Yp%2Biu3ER7YS8NwrREEYB8JIfHYuoQhlnmxYQkK8a1ZFgri7EUjxVphPiWKORzrwE7e5pHcTeJtwms83TsISj6hcWFSstpCcTvJn7sf1AYjziGKiUSpOhPqdiyV&X-Amz-Signature=95a0edcfaf3e904808c6f65888fbf08466aebff80c501e0f4ea481078ccb1054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
