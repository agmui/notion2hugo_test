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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDHC5X3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHv7kXerkEqB48FWFYGtgRCdU0fkb6C4kBZ15c9KJeFAiB%2FTNGxVsoBzI8I7dsU9UTJih1KgfnL4Ar5fRWRYpdP1SqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfMinADvLsU8hlbaHKtwDra%2BNtCuJfyyC%2FIP5%2BVjZ2lDAlxoV9%2F9Z2QEM%2B7OEIeEUNAhCB5YEfTRlbqzIrUMKbmbvrllZz2ZBFBV10gnjT71awzbfR9vCV9bGLP56HYWaxJlVBWcpf%2BcUUIgYDktN%2FQpT1dZzDhpK4tOZimsl08jnIxNJ9sB9%2Bs6s7wNbuH0SxnJxk%2B9dKjK%2FrtwsDQa0%2FkDsa6NFMCjdEtyYRgxlWXYURiMSr5RTqG95Nn9WXQhTJZu1h0KvFAtxEk4s5XBaqwTqFmEBs2f0n1OaXyrqF%2BxPNDPHWNtlnXVmACZ38q45%2B%2F3IAoJqdQq3z1GD9W9MiMebaOXSvfAZN4j2pju2pSNZfr9qX0kfmqfH3MnzHiLa72k9x5J6Hn1%2BE%2BcFnbcdD0EmtWbEscyO229aD%2Belu%2BxS0NHPTPKX3XTbAP8IpdglSgP%2BLZ3OyZjhkGzYCBe%2F8v1AI%2FcJ4yWmd8WHsRkt4sLaFztU5GUTxFFBTq5ZrWB3LmELhfoojwNPtCULoO%2BbcGAxGH%2BJyCRxAfJTdG3gW88wjf71XlpeR3DkFLWiDIkOaJGoOlaxQAUiefrdpvoIQ2y58TjRqVrfTG1ikowxwhs0UBpYWEHFtZKUoFeXS9E%2FGN4XZlIDU1Jx%2BFEwipipvQY6pgFjw4agYAXz94uF5cGG6LgjzXXbRpRzmKIxHsgcNMcqNN07LcmcuptEU%2B%2B7dEAUWSOljyGKIkQI1DI4uQsnMAytxKqCT98zFzQTyHXdnIVW0yzuvKo3e6QfDMZ%2FkH1gR9Q7tMUJyOemprPl6guYO6p%2B4uVy%2Boz0SQP2HCsNnsGYAlx1b%2F1zcfcmqzgWCyAWPQ1RhwYONKcv4LDt8RpRMaCoBAyAyy3M&X-Amz-Signature=c8a14602d1836804187ab0fcf8d68ba0c532167ae2ef2345da74971c46cb8ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
