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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNJ5OCXV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlXIN4AGIgXCv3jRazJLuXGIYPFIVY2qGs%2B9GreJu33AiEAtGwhLL6H8U0ZzrjvbJ6ywMLimS5aH45159vmlICblfIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq3G5a0BGirVnmRWCrcA4t5QM4fD2f15xZVmOVowF3CcTtOc5EPEq8%2FJBFQghX8UXSxpi7%2BeKpjGBuE7Nv7utA7YiGQQXGvCenKDEne5unjanJbn4Zo6TG885fkZyFe9XBuawVOJLy8DcT9hObU3Wsxcf1ftMnEcsjOSnpWxeXtlTvIgvHo8t4wG09AleihbN53QeVkGsy2L5YTlXDoUlOkH2LhHNikjwru3oNb5jthybqOY3F0PF4YGBzv%2FIUvcy2RNpL1FVrZXtgQDOgXrJmX9rG0Zf13PdKo8bDEG9St7iaXvekBef52bkBauCHD1au9ubMAVBs62f7hB3GOPi0lLZAKTDSUdH2vl6u789rvK3wGRrB0Y50cd9w9lAptOMZ2aaFLnOkLMkiFZsliZQlUwg%2B8LofQVYDP5WuF9blwP52puhKs2GIAhPJCTdvJQ%2Fidya6RXr1asMiI9fevDLJDjP1dDJJv2cuYr%2FxE5HrGAjKZNK1T4zP%2BgUK3GJ%2ByOqThBvue9x7pvqPg71zW1hP955eygUabLtMTJLP3KZ1ddndimxf38QhQHmDr9GmUNk2POQ8SdfHzrchXbNj7kdyGd5QisywMwJU6ePmOnMGLcqcjtnZxhfQT8DzsQle%2B1YvN98VXpmSAFZ9sMKT9lb4GOqUBlL6740X10IYQuDqfZ7KLezmCjro2L%2BT2U%2F1OxdR50uReZRyXJ8aosUeyVsxNC%2BT09xwn7TxCoNbLJ0ownRMOjx6NlwpcxyvPvveDjCVBDlaGjkeGpzhQd8Z%2BkzEo7atys14I%2BH8EU4T2OXmR2EN75r%2FY0QY9Ubsj7%2Bs%2B6XZI2OVaIvdLFmtsFMxSPSL3P8Lb%2BifihG2v9qZ%2BGwB%2BzaJqaIeouU0L&X-Amz-Signature=46af9dc772e86577233eed882d8686a6132e318b0b87041f9566da5304e6f474&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
