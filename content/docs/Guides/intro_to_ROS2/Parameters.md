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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QHCXJT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBTeJfUHnqUOQus6pFVHQcNiXDxCe%2Bh1EWKI3hCdIZuSAiEA4ulkelxT4Fu2PXMnseeEPOdxBrSLjWawtDGNm9U%2FmycqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDbvpU0BtIEiAthuyrcA6wM8DrN2OAdUpoT9btGNVqYmml1alMqxfvSh1vE5LhCxx3PmGsii%2FHCIi0N17x5W%2FA4CKGtBIh5EqNnWvqpMLao9ta8Gj0l99mO3BvhOMdiDR92Yt9qphoFzo9Yp3r74%2BTJhhCmTh9ltUISci4B7hnq8IdYtmB8Sk5mCCeqRe5h4LolqJ0oLb0mFZ%2BNEP0OSSdgGMCwiBpDYd1MYY8cXW4pmGI%2BXePFBU7oVMR3tW3UYX8mIsr3JsxSvAzHofQUX14PDtOtYGUp1IABl9Aw55k%2Fli1uHHWBkl0KwC7lXTEKyw4%2BCkn7NrAStEplF%2FseF74nEZL4oAtwetao%2BJMjhlDNVye8J%2BfNTGsMMBIB%2FgYci8E1RcFlBf%2Bf6HWJRslpL5T5gWSDfNN1YQC1fLcKoFjc7vnruJ0eGfpyzP2lw0xic9qr5lzTOvSkzabJHZR5nB3LXO5RbklvCNaEZClrk%2Fa7RferO8hCtNvIP%2BbxqPauganFnkUNU4UlXPSw%2BEagy5SDqPjnRR32Ub5uG30viaI8fQe6Ia45imP2s2DivF98Bhfba2MBYzD99WiH%2B4lBfLDaqND6W%2FdrH6sgGWX4BY3oBWnp3xgHnZZCCVU9zBsV57CouKbnwuCSjuOqMMyt%2Br4GOqUBH7cOmd6ujM9xXPaG0oTBG5tiYSojUqe4TArSoKJtQvje9vA1FdCe2joomlDlQct2nQKe2iTxjkthYu58X5QKPiKuQFPJ%2BXgg2b7TUSfHLTZ8IHtPjhB8XxVvHFjBwmlK58eA4cJA5iVWRWYD3DtARxPgl683gXHbzBA70vHwTIYnItvze%2BbVPxzHCzXivO%2Fsi5v2d5opglD4mK1jOPxWQagb1U1d&X-Amz-Signature=e375e7ca5ccbec87856a3410ffded0549d7474e33a4c1b92c52326d1c6625a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
