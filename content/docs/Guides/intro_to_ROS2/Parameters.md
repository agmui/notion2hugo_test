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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNZV6UZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDBB%2F6qx1%2FSH23oKP7upD75kOf%2FHxN%2F2om5ora9qMaT5AiEApm1tFweCa4pO3tITpbAvD8us0C%2BH0AFb6CKzdrGsUeUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDG7mQa0Ee82X0AjFiCrcA2B6hnk8yQjA2HtJF2j4%2FgkedEZZ1WSrNoQfECpofu24MAaitW7qEnWumTLgnmN95jgEC8OnXT9xzKIUvGJEarpnXXnURWQK9vE8XjZSudT3OS7qaWU0YiQOkiG6mc%2FCno%2FJ2bmH13Z8dRTPr7Efe5yBeOliqgAUUOcx%2BCA5%2FCGK7frcv00x2It4K1p3YSwrJ9WYSskQnZyUViW320nh36vdDZ491V0T9Vk%2BhZiBnuCoCDsPp2Ybb9x4qVQAgo7%2F11m2nA6aVlE7cknmN6zcayHmWKfFMiwCszJgPWLBd3ikNaLlps4tvdmpxwFfPYOgwsAIJtoTARs3yBxJAERNCoPFMeYs139yfuq5i4vNxNpn9M3vTNX7FbgTn4fD5CEgXecut8clYOsLmRY8LdrE1xflVAzG%2BI8C%2BkQPDog8%2BQWmTy1TrpeiU0%2FZPolbvKKuEtrrz1I%2Ba%2B3XaQE%2BrFTsqXDnh29l9m81cppwT5XT%2FLLfWjZBrfK6lGqv%2FBk6aojNeyx%2FqdWTj8BScS%2BguWs33GXpGpbDZa7bwczqb7RZ7kh2URbhOoBiLBfr6f9Nbwlohnfiuvrf0AUX%2FRFCYrpFtEhrWeHsBsge9GwXoTwYtQ85QmLrmjZtfFoCAc8QMJ39k70GOqUB%2BkPOpIOmsHp935SPMtPFCCW7L48mQOQwnA8dHq1%2F75CCzyd%2BsrC09B7P4Ha6hcxuHY4FNhIwU51t%2BXNYDZBcs4GQLB6FTrL3Te0W3CPH2qi9oN5B8OgWEXMJRFi6euH23a7k0GYRBxC5pfShC8xK8B3ubHtDmMqjfb%2BswL174j7cEmO718amuGecRSm9qplUW5ejbGzogdabIVHxt5C0xxeJYhpO&X-Amz-Signature=ab5268ee2a2afd8c5bc943fa6429aea672c93468323042d19a8643ef0e5bc4fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
