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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJRKW65S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqrJQMFEjG%2F6TGTuPzR%2BEzVDjaUR4%2ByjtHuovIcRWEPAiEAlRL%2FJKEyNU1Xub8sPbH3Xo8z4oUMgPyBx%2Fpz6UXt1T0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHO77VKxVX%2FU8WynHircAxedle1Cdqp%2FsnTv%2BWuNbeHiA7ZEEhsytrfFrUwE2iYsTmReWIPlHgZlx24ElMGRYb95p%2FAkNoujoBS%2FPK7IjYCGEoxqm8jHyaClW%2BNBPkHkMiZtHl%2FH3gJ43HJk6mYC%2BpNieRo4zhp2OHxhxjT4Lk02Vt94UXmEM%2F%2F3dh1TyTZficHoGCBvw3zl9buifRnkfrjuUNFxduMgeSR8jD%2FP5QW7XtIAbVPdmaI5mIDr5JTEyy2RZhRe%2FJIsI4ycxgwB0Qqhbm04iBcOaPtVVjPMY4pIVYUaPoAYji5yueRX5Yk90Hjp3KzQbcxh1YWMrWEf1OJcWcDHe54AJ1L%2Ba7g5tO45TPUACfDp6pYqfjTMwE%2F%2FIUYH1pc97nb99a%2BmGJPn12qPFFAret0qRZDrvUo%2BUueGlQ7axjFuMxciMGALXR4%2FRBnCjdYAtLgFSsCnjCA%2F%2B8gk945ClqWIBoY%2FBsBzDxluAOEsRyq8sLnZT8Wiscu1tuND5GSerjl4y1TGwDK5ox2Z03eY32gwMQIz%2FE6nfXPjCId4z%2Fsa4P%2BOiB09YCugpQuEMJR7sYEC%2FKKIfikXN2s9pyfalH62VAseq2A9W7OL%2B1EkwV%2Bnhe0u7TLTfRy1xG9shiEAd58yYIybMNLy5MEGOqUB1mZH17hlbZ%2Bf0yl2YgkJx7cT7Z9C59JxEsTyvcVYw07NG9NUAce7vdtW%2FgkEjNE3xDtF4CZYg1IPAlZ082qnGrCMWUJ8clZFBmkJzYdhG4TxAjaLiJFip6MLfjfhlyr9aNAbjAnRhJLMpy3OWRMIJ6HdDcuD8V01RnoiwQN%2FxYzaP7fmV4gdu%2FFyZ1AcnytU%2FxtpsU2%2B3D9fHBIcTdTea7TmhcCT&X-Amz-Signature=ab6a66ae2db19595206d4253086f35aef2db9077f8a6056a413a64232447427c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
