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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466277ITAZA%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClAfUfvpmx3v4ZAVsG1fipRsHlmDjdXfOtNeoKLUN06AiABrHnNOUF5dEtPX86fASNlRfMScdPh1vnaDfD097nMAiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVQC9tJrVHXJsez8kKtwDezGN8ipDgcZCfZp0cy3j5HwTUdce0qUkZjV3eR2e3ugL80uckUYQHWA9APyvc%2FLLKWlHlFcLBJw2lzYl1cm6zqELZnQ3Rcp7Dr94Rex9yGTuHnAqPGmRd7bx%2BXzfaESzmm8Z3cjBTLEVTIGZrXYzxZ48n33j853uhFzYNRWdGn0wcaOE1a%2FOYBfcD9wrnls%2FAb70VTAFr%2Fykw6rs58pSrdwdDfHgKwQoZj%2FNkySMOMtP0PvN7SfF8Y%2FCmjbXalInpBEEOUKw5z6Dtvg5WSM1QuMTuLwACp81EujpJJ0JCBS7%2BWJjlJyV081kYczfxHo3oOaJY1yEptXho1HQRgJPFMbhxMItJ3yTorWjmOizlHny7kOeGaY3tsmlhCT1SaU5l4cKQlom3NfSabVAtSI2LHGUnBMF4QaCth4uYn3ld%2BVZi2hiUOQMv2rZFAWd%2BtwJXrcg7xJlB8pzivVNPoRtQX8NRJSSbb1O%2BmGTP8UDf7u4ZTakJh4JZTm3EWtDTDQWfoPGm1GAoHaBETAaRVOHhj7fiZtJXFKGgGqRfOXofMWHYRMWQ9Q41%2FSYiPy6xNOZCOcFq%2FTnXT36%2FsT5V05lLx6RtRbxsvxpi6PdglNc74tHeCY6XnDFIfRebAQwzIvLywY6pgGXyifGC5C7YHju2FZfH6BqJJPJ5FZyCH9pF1t0nTPr%2BLyYXwNXGycChXjmDdLVuz9collktkNgDF23FZtp4VxVQCvMHWPih22o3f9OdHa%2FSfuMjCL0sRk%2FbkuVcuhxtDj4k6qLDpef%2BDw3Su5ReoDsWJK%2FwcAiUkViflQ%2BMhrP4FhRHobu5tNokX89b7sp8U%2B%2BE11P%2BoYVA26Nx4D4pbLFphoXM8l0&X-Amz-Signature=af529f2e59097aab04c869bfdee2604a19bbfb3e759b8d95c1abbe3578e674f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
