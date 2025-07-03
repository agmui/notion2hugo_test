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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647YMCH7X%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDsIIgE35gLcJAuiCoVCovPHNEj4zoUiK7AWAKMt9uFYgIhAOSf0rIwkue%2B9kY5NsoM%2BnK0FFTjPjGpYY6Dyu3B0BrkKv8DCBsQABoMNjM3NDIzMTgzODA1Igz7HKfvQqKIVyKiYRwq3ANIGcdt5ZvNIHYlmBGJo5m13ODyj7Nwdzqlz0P%2B7xtKtz9SHZIIY%2Fqp6QaU14CqgjGdBfyKMPqQrkPEAF%2BWh9XxjmdkrIUJ91K1eZreTSN%2Bi43JSKzxok10nKPho9s000apa9lqKtcHKFiaWOTcaghqmbo2U%2BIPjmmGjrJuoQow710FOMI1SR4tgaZqZT%2FpOIPGrGgdkkLKMSrnKDTB5129eLNx39UU8b3amBoptCzxLxGFHJLsK493WveTDb5Fm9X4bkci2JXw9XUDDDSiYfdS14J640BhPVP1NIKMTmYqcpghFsLRRkJKmGZDhxM3brFRy%2BwSIanq6yk2%2FMszVsRhTKClCQrWpRQl89I0IFbdrsp2qbswib2MbiT4OCHk9hcoYVS6db%2Fm7JsT4LhSeM0g90nNchqin6cJIp4NhIkuCyZzM5L0a3KXy2RbE%2BLYPGafe93TLi8OSJbEL2K3wdaRkMI6LO4zKYR44jyzHp8Uq47yjFKViWtaHfZec5FKqSdLC4Z124u0iL%2F4nw0btwBAwmTr7%2BrMNt4QPOQsWfscNEulFJuetfneRqEyUihV9s%2FzSt9%2F8SmWVFKDOqrGN6pxmnafE4d09KuxA0ogj1tRnaYMLjEeKpnx1XomijC4kJvDBjqkAcuesUAUixQza6UL%2FSWXZqnTDWYaG%2FR4JxCX18IDsk3ghbCpiH3DkgrOQbJ5KZpfnYrEdWCWwuaicPGdWef2Js6%2FelnX48SjpCJirleYuBmLa3TNX9ClXR0SquHGNUbuei5K012HVUT3GRyoLR8SClgKl4sa8jpG9b8%2FkSGe0MNloLqCmrMxm08xGfg0jFjp0PyMaN5XsmhSOPwsPbqbwUf51xIK&X-Amz-Signature=1d8e9c30e59a769f844a9abd087d475df25363013f893a9eb2b2a43c31c745f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
