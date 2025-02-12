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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPRF5JWX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1AOKlk1vSNLwSo9gmduJumrNj4rQd0D%2B%2BYqzmHPMnNgIgUyMwqKMK1MX7TIdsVQPAR4K0qz8xZCXNYOGfdmu%2F70QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3j8YHcTBb6BHT4GSrcAz0giHZO7hdu30qpzwVMXFQOBTN7BgTarTahYT%2FcziZv290ScKUoMYlbsxb%2F9QLEtYXFDucVbWK%2Fk87FL2xUiBeUD0h0zZfQzi0yth6WUokhqNnZhT0S9pyKF%2BqP2wwA2AAxgywzT4P%2Fnd8UFwVOzvzT3%2FpzWuf4SYTsVd3S9AoIw2Xgy96G92KGkMbCQbRmIlZC4sNgyLX95QAIUJp11oMZICZuRNL5BUFyiR6%2BF5KGkWQIVUXlju0LTBlfasOId6X9j20sIFGRi84Jnnhn5OpBQ%2BQhIiiy7RwZzqwr8sK3ePm8D1NrIdX%2B0Nvpv6e7aChPU4x%2FXc5SyZTA5Qs3D%2Fvt3QsdRUFHgoKkz%2FtkwNrGZKdZWajx878GliBoTRKYOxAxVr607H9AZWUA5M4U1A5j92LcYN0u0%2Bu6K76m8GNEd6f%2BiPmKE5tR4ke5J%2BpURcl6HVMu1L3ZrNppG0GDoaIWm015MELVo5VDFIXsfIX0a5u%2FoWXI4stpuy4Jp%2BP1WRAn%2FBjh8Bp8uZKK0dzpklKU5KK6jQt29QKQeQ9HCxBzxJaP15tgk5Nc8nv1M8K9rZAkJP7SA3A4DYQE%2F6WDGEAGyAJUq0t2gLbcCCOvFrjZ6tfBu0we1K0PexMDMNftr70GOqUBFR0BZ91sJdTI3FlAW7L3Yz0AP68d7VXi5GSxvv2xqctW7NB2W7zH3DQcmpE5v65zoQK0jxd54tOyKXlU8F5UK08kSehWpVacEmI8bch4NiQR%2FMya62sGz%2BeTKm8A89Eq9GDQkkeQpCPjt96%2BYkD80zlZ9%2FyC%2FBJ%2BIlyRt6lU%2FxmFcSxq8rVyD5roKLMXKT3G0wcoifkJcG9s0Zoph%2FpkqnvERwyM&X-Amz-Signature=177c648e3f82a22fe4a445171b74061ce66e875390db3f9c71f32cba5c5f4084&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
