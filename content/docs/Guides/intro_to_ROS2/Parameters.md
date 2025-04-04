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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMGDY6%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA22qWGnI3qJK21Oizo4B%2FbvzELaTj%2BiF6cokajx3TRmAiEAy2xLmnXe4xhtEzWH2WREZp5VYX41dUj3RdGO3F9uwJAqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJhq9pWkP7F2WCTyyrcA4%2F3P3LR8UcopmbbhZE8NzwATgU%2Fvd40boQETHFtkoJYlbEqXOoSoYD1PfqTRrLjCqVkmu0GmJrHAsm7uyevMzJkLYhPPqyyPC07TLfvy%2Fv244%2BUon1%2BUzDPWgG59IAg6CdlX4EJ%2B4iAqEaOe%2BrroEi6N%2BSs%2BN7B9KqcrAoLRX3CKlR4bDu062xgYVqCv9pB%2F2pvmF3yUXu7Jj02GSaZoRsxY72PEEHRfgH4KM8HJlkKWVi0%2BREtisZq%2FLrtdChI5LRWdTVZhmoPSk%2B9S1wj1vo3BFHBjWGFT7cM9nbQ3Iwu3EHkgK%2B8uA44C6PtWG9zetHk2d0duOYgWXv3blWSS9oH5LhNzCpNx1zyIvqGSlZAHiyFFTDbzt%2B%2FB3keucwL9m6QPFUNq3fRB507b14RgdjXRfMoLzYYWuJlHw3Fpm71hmsCzUvFYDNmiCJvrFKhOCbLq8i30wWI1a6dt%2B48c2SHVK4L8TxzvJ0CSMuAgUeH7lgnb9X2dmWDnKkuG5tBYPNsuEGHApe9KkvJcmpp3Oc8Y6qEVeAke4pPgOcZrBB0uf4W1QV8tBgyRbKxMeFjTM4wRC4tE56bSFoawgyJqoL4aDE3tP0iyMFC%2FGzLdG9t2wtoFFFKCnug2GF4MNi5vL8GOqUBW%2F3Tg7gthdgI%2FIRlYkgZ4koYBOuUIS3oJyhf8CNATziu3hho28cMS4oMHkOUwnlp%2FL1WxRX%2Fww3q0kMvq8Ad5uY4QD2nYUZO8uhzhfhWXbrAj4Js2ctlYwtV9kBEjCBsfnRZPKL14D1%2Fx7XjbnmNVuJ7L%2FX1x7Urmi8KED22btN4W6ISBXH5IY4yK8idOt4LM%2BdCmkTdV2q4npPC8PFjeYIcSj00&X-Amz-Signature=a989d0fadd18879bceaff6e37db57fb9aeaa683e557f05fb2137079367e395bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
