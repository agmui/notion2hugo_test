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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7WGKPN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFsswEjJoM8KCX3s4kEfp2zOySGApdJUhUz%2F8lYOP6pAiEAobk1YRbP52A3yrCGsgAiC8v7KpQXdDX%2BPIFf5YcTHBkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMskZyQ%2Frq2qPL0keSrcA0BsIvDUkd%2BRQA3uCPFEd7k3dir2et5Wp4G%2BfB9oIIPIPGrTq0qsvWSAw3XQd7OAqcOeI0qx%2BvQycfzzBzr510CxQ30ngxSHDMwLt0e30hn%2Fb5IlsJJQbwKJlO9OCCFYIx7J5z9920B3O8JglOhoZBnC%2FigEgLBQOWYc4sOfZlaTkI973ctXUriIvr1SzElr3mz67kS4zkqjk57bW%2FewopzJXDcZ6K4RXbndg85u91gCSs1oAWhn5wMxNEiKd1gY097CRTL9bdGekdtom4YvBNGyWZTE3iyXzOh5WERJ8yfB4fw73KXWC5hPH2Vtf5fnObB8MHLD4ImrydfgB3PH3P8jIGJaQR%2BuBRjv26L9iCS0ov1rH8PsGahrrMwmJRZgUPbRWfRSL3a6YxOviG3XGzDSLLAK9qjfQ39x6Gb2hcVHv16LP%2Bj9FzjA2ynkjsTqJcx2f3gnD0gxuLT1fFZHKfJCTlmumg007uCbhfXpj1K0d7cZEKRPDbyDva4fcbuBex1evJsA%2FdqO7l050oHrhoD%2BASP0nCthsO2OPTu4fo7YlR8tElqpZdxDbuNa5WRQf6M03BUfhZUcpnmlHwXjyB%2BZPcveWaUltqcbvUj1O0nQ5fdJmiPMYane32BiMNPYzMMGOqUBLFWqBi5hklSShTwoMlnbolcjrTSeF74ya5Aw7BuKnvxmZMlJSYJXQ2ypztmnYDunFM3F%2B3fN15huPDaYGo4e%2BB5AhZWbIx9IsDfqiZbko6jxFagGCIQuzdFLZL8GF2nZZ7ibuuQ3NIDemsQe5jYg8T1o%2FWvdiCdsCA9riXCtb6241R94T%2BrNxTSIbjBgRno0TdgSl5tGdmU%2FPaRch9iBvLWLFlVw&X-Amz-Signature=093ff0a98dc1fec7821c51aecd61f30811cdfccd09d3fd52c242ae4e7fda8e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
