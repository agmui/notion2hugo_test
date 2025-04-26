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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BCS32VT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdJmjVum5YMoQ%2FJBlro3ZrvZnn9MkJMB80OmiEA30mZQIgZCcsuBJ%2FKi9alx6FXJRsoG2sEPrNTaRjk45uDprZLNoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFYnsRO7GDNFMYamQSrcA8cliW3CFk20c7xlfVGZZwQLk3SQ%2BHK4wfWMTsAH4r11RSY9zsasByzQRNLd3T62yfasfBWIN9BwlgNL6Au90dKlNl45e%2Fvyx%2BTAJRUD3tx1az6EnoFG%2FvI7ZCdbDG7tioWpDJa1EELtzrgzhrPXsjdbcSmgzllS2U7%2B5TqNfvZt4bfJBeJCT04NwPNcHdIAK1IpKKcVlLkIRDfkd0L%2BD%2FOddwgn1a%2BB2UGVDJDubfWx0m3qbVlI5rGjEjhQky%2BEjagBKpE8iLD0mZOHe2hP2PiA4035Vyeaog%2BuNgVm%2FIiwON6P7GcnP6NnSDl66%2FQEQu2YLfvpDaMOTxcZctEoTx6vZLWhyctLRNdr3ilNvotOlQiIFeJg%2FLC1UUPgRfQPoVvY9kFjBc%2BoMzXn%2BLIeCn4t3A%2FmdqPM6sUeInP0tAy6g1VijPD2MmE81CP2O03Xid%2Blxd4aJO%2BqhgHhGgswBnu3fX3ZlPjWlm5Rmg%2FR8LYC3H6tT1yCT55VP7kKHYgYlhZKt1FPasOBnPqMnAILkRQWCByCbZ1KrPtlYMOZ1wGfAQYY5gyjTtnsA%2FnhYd33DBeHpgv9Ml%2FksqtJ8l8lCHDIBs1DzSTQ8ZTtB2bFgxFKmqMP8COelI558ozBMKLMs8AGOqUBXTWU40sygn5ZY%2BTRnYT1OJ40jHMXD1xei3BNXWaatlF2fwqkO8xoiU3apstmhfYp%2Bmf3PKsAIyG4he0raHHSlvFPRCx12JcokY3sM1FGfVE7WEosvijsgPR6gXJAi1vWzJ4mVyOZjSfM0Gf0ZhhIamJsAXcuduUeQv%2BRddQvulHEDRuKfIkg%2BDg%2BjAngCZDOAfmzuF6%2FFTh%2B7i7D6hTnXVt6vYFN&X-Amz-Signature=435fdbf9b8e9a9edd8068d4dc4082e7186f6806db4d5e10b27e0393e3dbb723c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
