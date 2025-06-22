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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y5E4SEO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCUkuRlH6XJ6PlDAkRzvAANzDS%2BNSF%2FYsRNLsPMTN1cAiEAgsKHE1o1zF9Y45CZphzTVa%2FlbPt%2BYbko1bEj5DjTgwYqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BTHJKuqYv8yjVNNCrcAzJ6LsQjDd%2FmvqIfi8IJCtQFHAdyrSwM9E2imLoKvTbyWfSZ0ffUBQkO0LCiwNThlWH6F0JS3eaWcOinl5zJd%2BNMt%2BAeBs6N3trjOIf4BGnEP7TWqA5kzlFZXMSgzI4nvrrdpGCbFu8zC3nq15HaE9qDAxHtQKqeY6wVmUI3%2BPP73YqpZ5HJ72MZ9Kc3m4froggql9mll%2FOZmobATvaX2kfqYMmaR0RSnhB9lO4uvTUviQi03oO6iBs00bBLsJ20ALXnRpBOS75M1StDDUYviR0AJ5kiTntGBGOrQ2j6SLg5G%2B%2BITGiad0N4aH8fwIW7qCF%2BilnYBR2cim6kWpW1Q%2BZgAm3gf1qDoejfinhPGgBvTy8hhSCXg7dDEUaCBd%2FDvQ7DGz%2BfqS0Jo8Qhb0jWRA1xeQTe95FPRW%2Bxn4wcr51v2VLLbzhIyqXzNmy8k3%2FAvNe25ibPE9ZWnmuZ0h6Po9P7J3JlEMdVwz0W66I0amNDdr%2BaLbjZm0GdxW3TSCLfMiYJ%2FJ%2F4fI%2FFs5oxWIBLLcyB%2BTbijiwDmOW495gwE2y4V6d6MKT6K6ZmrNhPAHF4bFNUtemc%2FE0EDS2%2FUKf%2Fs8%2B2zCbschD9EeAQ8%2F7a7Sl9ULN9F2y6NFU%2BMKbbMIer3sIGOqUBEz9H6TijsGCVCD2k5jgff60l1TE6LEF7lxusxISYbMTV4aIYWNPoO4Fk9iMENBvVnkGCOQF%2F6E5HQ%2FEPGzkT7rzcceQFkHRa40CLB%2FHRzwxo5QK3L0T7AnFcHgcT2ipBxfJWu9lPrm2wgSwPW8iTEGBY77RcxVUsXwA3xa%2F%2FCLSx7phfqSrkQqdgz4FJA9SmmjsNsXXLLHLu7YTPeqp%2B16Q%2B2Zn7&X-Amz-Signature=03760d7b1976d1287dadf9f4577b8a07aa9e30f92a79b00ca0fba8e9b48bb0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
