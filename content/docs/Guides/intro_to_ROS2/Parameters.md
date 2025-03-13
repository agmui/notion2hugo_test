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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSME57P%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8N2d8GyiYZZGCpVcj7iKoiAQ45785%2FnCTEMJuIPlYxQIgKBUk%2BLuCmoHckNB2cnmEPIBCeH4yBUTR2RE5p7ljJ1sqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKv9CeuBwGJVHVuJyrcA2FVHOIlPFUNklO%2FEy9TVnJT%2FZSz%2Ft2SN6OhUNgcWu6H8SpVN7SkjARo9vnfarzLWeyV3RTraAFc%2BwSjRhd2NDq0ZVV%2Bo5wv%2B3xdqKsAENgE5vLP9pW05qQp8kijgPziikeFQq1Wa64FIDCzI4kCr0KuAmqgrZafdKNmt7qdxZWIglhdIyXhF%2Bocc1mVuXnSSYN0QvaaOElg7IWtdgzsH3bqOe7xa3xQC807R4aKm6KWvXiiqpg2zRFOyolfJ0iNi5tPHtAeRmrVzij1RBOGPHNAN15idUT4FWSGm19CJbOeLW52uS9gijgHsssNNQQH4hhJ1iNjpsuvD7m10eFzFihC0WtoE07ykTkWDWVToTV8DCPRXs5HU74DYIczLoUh63nWMxqOAjr%2FWz0300dHIH1CWLeG5CjpZjsL485UXLxsJSoDzR%2F5W3RpQzg7UTbnN7aYIjnc3H5XoS9ScYCeAWe72%2FHADC%2FH8%2BMtdRyzmICwna63vXZR4HDjFV0Gx75veXwYjGUSJb5IY9DlM1SSrIdPUz8JztkKzN%2F75SImNni9WLnt0d41K9qPy2bX1VNYBtdPOj%2FosNBDn0CXV%2Fw5CkOa7slEgfHkrElk6MDnLjm6Hlvtnw2hsXPz21UhMPX1zL4GOqUB9eQZyEjb6c0aU5cpKd4MnpQSGqRa%2B8FF62NjDSldIoneZPkMJ4bV779TqkqOcvviT32Aogyt4utr8W1ytPmVo44FFK6hon5mEOrQ%2FIVu6VMA%2FpZh%2FUi0zou1CjMMsmtVXGEEmI%2FD%2B%2BBROunksUs%2ByM%2Fsn1mx8N8WjWj7%2FEyIMlqlTwH01qvx4lriawhnSFEqIw7rOzZQ4Ujds3KXCpdU42SuBbhv&X-Amz-Signature=b3331737952991614b8497153fa8414a01c34db9cb67fb3e08b32b8bd3c589aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
