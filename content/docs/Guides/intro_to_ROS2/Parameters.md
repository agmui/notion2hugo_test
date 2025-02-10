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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UREVES%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZluATQ%2BHiUphY2JxZNBUJdvCAJvAYzJ%2BqO8usYZwbaQIgQ68tUzr0QK%2FTbgH11goVk5IyaIBYWyemgL0jM4M22L4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGSowVva9DrzHHdUyrcA0mzRQRcsjSCsm6ShwZDQ7uh7Pi6Ky4G97naA7yoiMSvo%2BsbV5gT5kj%2Bv%2BlSsZZQgeXpxE4j%2F%2FheaiqqdAWq9F4IpphHadhsKQv7Bnp4QRPDa1nm0jSV%2FQm0rNBK3kRyX6EVSimVnXFpx23NINdX462ZcsOpV4GHyspgic%2BdzJR93QhlFXLldJWS7N5MEURfKXJOwJP%2BipzlJxY3bX4hRizPLF5hfhTse52rGxyFaLvwCkuvsc24Cn9MZPyscUW8lNJLD8WfBw5orPKYdDsFBAxSPNPgDaGSlrtSPkCq2jLPeLf2tIxUlgCXCclPhVAQaPwIuzgrzcfOpCsbV%2Bw3HPexBPwMEMUgAXZzgdvGltpmzWw3%2FsSK9C4E91CV%2FuwbwLEsfW49PDlmIL7vn4Q%2Fmr9QP0466RFFUls5mNELqH5EhN3rYX9h59iULxYCUwBfljHu7kXbLRs5hvH7S1xjelHOMr4%2BHg8yvMSAscUZJe71kpB2prYddnbfWanllHuC%2BtCQPxZ65Druff2EjyeTuQ2b9gqe3liv0moOXI1wYW3LyVru9HpnPLEq0j7lo4kQw%2BE5s%2Bfn0ADSckuIIlGZge4Jwo68om3x1GcEvxD78%2BoYOp4S3Z1i%2BdLzh9iqMNCzqb0GOqUBK7lsICniFSMoC%2FKi4inbT5m48ZYT8OK%2FXesO%2FNQ6eexAtbew%2FFI8l1KOwTxBPr7uaLxA4teGaIGJ%2Fekj%2FusWBL7vUKZMgFYYxl0AVdmmX1qVViv79TQuKEagyi1v%2FizFgtfznAkVfPZ%2BvYrgPPRaKiOqvfA003udnKxW0pYrJe81jUm72Wmfzb12LfoQxBcMSHdV6gnNZo99BZcMEouRcFOEYU2%2B&X-Amz-Signature=0094de8592d002e9c8d19ddb2e809cd959ba7d1fcf9c14949a38fbd6f1d27298&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
