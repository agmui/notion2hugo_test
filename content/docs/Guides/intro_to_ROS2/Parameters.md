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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VERLHNM4%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNJg%2F5IIVfdlJlc3yKg%2FFXXzJ8OATRjrSeiUy1FGhAmAiAIvjlsTnDl1HrsmMaLJdTDPudMlolasCOl8e74Rv76Jyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMiSEUPdt8IiPRyZU2KtwDluIL2c75%2BGShC78eaURM3tVo%2FUEw7ERzqefJXwE%2B7%2FHZOdjmgg54tqXJT%2BR7Ts0GjGh%2B3sYUEUDFbyu3BVZyBgwTbgybHOQSa3qbetsPaiLsLIlHA9pY6t0aoS%2BaBJ09iDS3%2FGN0ICzI4dT%2Fyky7Ii%2BdgJcQwEjTFtP3xTFKm%2FGEA0zXWjdW0RiEMFAy76UXyMZ8qTi6V7YgBOk78Drml7vDQkgxhIGeoHM8shweZwva6ZkpTw0%2BRGhVS5rpn1zs%2FypRxe%2FFT0n%2F%2BaMFDZkC9fHwLu%2Bqg94Z3FDQFt5w9uoRNjLLQKBdOe9XHGMKcTEazq0cryWtr81BTnAySiAbD6fa7zSB8ubsCyZ8kRz9nLWXrQw%2BQF5WU8J5TEpPWzemLZ3iFvlYU5Fd%2BHOyD8bFVdMHdDx%2B1pkhztnvyH1H1RxtSKamzrM5vXx%2FiP5rRHBN2vr0AKPosyp37a0I000fGPlOBEgz9tUouJ4Xl34%2Fa2o14l21s2PSy5QR8vBLbALsNFzRPit7gv2ZEqynIfiTMzrIE8hBlmBVzV6EEZkYRbwOxzUR7HaFNkW8NADOe%2FImoXI2j%2Bz1RT6COWvB4uoy84yUSL2K70HNSGUu4wD84ARJtZRIpCmhddB5%2FxAwlev2vwY6pgGJ1PwE8mKAdVfrIozzpf%2BtSV1ddBZIZM1zhDb7I5o9%2BEPfVvSm5R%2BnK80zCj9BubDajruBOUdZIrhhB4p4QkeKaPl1wmcsy%2BgKlAOgJrV%2BwfV49NeEUDu4AqiSQQtl%2FpoPgagFR70sqrh6Vudff59nVSSPoSaLgnlpJY4%2BwBU0MfALOQXezJHlJwcA9kqtaPrfiBgPzD7TGHsI36FF6RnNsiKPFO%2Fd&X-Amz-Signature=09475e75d0810e8e164c1d19087edafeb35a69a50b2af085c6a677d156184173&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
