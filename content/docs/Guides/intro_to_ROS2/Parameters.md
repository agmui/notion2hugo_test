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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZZPJLRT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDxbrzQqPcodOpG09ZacPM5JZ5hoN%2F9bIePMvGXX2d4wQIgPBF%2B7iIvN0FIb1Su0vSj%2Btolax4Jjce%2BLyEmWYIMrX4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FBNDSy5NB8rVIMPSrcAxsdITyIVzmn8nhQ9pihK2iE5fzkkP7mQiB5k3aQTuZPUdjEc0KlSAqkL7nlhnIwriGA6Ygo69nyjCTvjXlVe45DJooSeUtTFqK7JU265hX1Y159geYAy4beCIF%2FamY89Nw1R24NRUkk8BeaDFpHRDDxoPeGMgG86FFXHo1oxQsUqWrZqxxsfXCVSWsrZjJ0W2iu81P3ySw3S1bKkcrTJC%2BLt9PaFSwcUUCQoD7F2TPUyYPC%2FjfPrrS%2BFbAqBDpwaCB0GhEMOBVfexJBUJQNQBoO1kgVcHLSF4nwOgqwrCR82QE7KOkE05rlDT3hCUjZ0Qsi6tENWIl%2BIzTLqcBiWwjEdFezvKQ7YgTWkvj28DhHl0ra1DK%2BazWmWnB4wYT%2FrM%2BuBfEIvsVIAE5uMylfNeBd9QHaGioKAlhlKd9KcKaNrR14YaNwrmYitf3AbuOweSaF7ECUyr72dsJW83l%2F73zA%2FxmoqfiblOcj1v1TdliL3gTfpZh55wo%2BibgDAN6c6jR8Y7BcrgrOv95E7iM7h9ejExuYQC%2F1szGomm%2FWYji2i4L5oOvXWboUPhlrfYY4BvxwKpKCOB17Lfxz07yWWVGE6PJob2TKI2IY92HkBFHoM60gFKsAyBN7Pc0VMKyGqMIGOqUBC1TaZa5Y2kYxjMAkP4jzncC87lXhW0X9%2Fr42viIK4oFaPB9bGKgZYCah%2BU03pN0l7mWQGe7KW5dnJUJ5N3NZQ9H1eJzhPX4uA4dn%2BtkTVsG30njmpe42icOxcmRcVakufrxDXM8%2FcmHW5SwHMLEHFI%2BnFraw7F3TWOHhfnZLVM4UNF6bmbpkygn9c4QcwOkihAuchrT4DQGAasOgqb0zGb0X4swo&X-Amz-Signature=7981396ff4cebcea70163322fb8678ff31e261cc47d772f9bf6b4223d4199274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
