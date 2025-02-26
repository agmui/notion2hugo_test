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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637H3553%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDLWtSzGIEyTXQc%2FgZKqKxKGfqy6oE15J1oJ2L%2BdnIQLgIgExLdAgNprjBPgdySVZwjDt92n7oiuPXlYwOxe37r0uwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJHMRmz970PpXdE8RCrcA474%2Fe95sH7lwK7um3X97OhH2L85damjIrYRWDuB%2FGCvjVSTGIj%2BLEq1RYj4qcfZgpoxcmikuphHGOiCVoVSz5yn0fPKSzQlV6kiGNT0Yrcg0nPjUfeFLCLOoGzgkvIgY5Q7x95%2FdrEww%2BSMm0733%2BeEJSWITDJonJI6jNc2faZyC1OXE6YBuE%2F7lp1m3dGuU%2FELAYRTiXF%2Bfr7GJWZ71IfaC0T692ug5uInRuGxnXJHzWubES6FY7cnbEM%2FqM9UC22eB76i58eqS2wUUZ%2FYDDNyAzMspExHNxIYtU6UlEbb4tmU2snm24nbsMtmCaVla%2FUkvlnW7Lrjm3uYNkteMMbr5TExcrQs%2BEVic%2BZ1g1MEbUNLPXe3L7QYiF3jNGDxqd5qBDEWDZihuQrxbw8cdwOa0fim%2Fj5i64wOMH9xdmssArkYl3p263aRcXfR2%2BkoH37okwSgHo3pR3TRRYYVKOLDaZTrWSed9e4DdPfwKeYpb3wd0josctV0IKzgG2pbrDec32T7TAf9jXBvBRQMo1%2BUR5DRICV%2B0ZegPh785c2tkQZ8ym3rtT9Y9XiB8RhjBAJ%2Fd0vTcVvyWQCzWAQXJO1Cyd45ysXgIDcvKVCwG8sop6m7zwzFGWM%2Ft4S8MKis%2Fb0GOqUB17%2BnL80qsZvPKPjhM4arMr0bSVhf5EavuzmwzlfhOtWMtJ2C4Vl3jpGV%2BDu1Dg4sGViEjfHnQj%2B8MKwC4CXQ7wb29ROnGIAJyTUtGIm39wp9P3OcWbQpPi56JW%2B81WLq3wDGbjx3HVVET5MLvkYI20Je7I9nFowUcCd9nHFsOZN8q9noNdbvkNivZGjgxM4BZ8BNLbVi%2Fv6H0cgyxeYgou6uN%2BW4&X-Amz-Signature=12ef934aec0e2ddc8cedb8540ba4a45f8bb89faf5530ff697d05dfe39143e0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
