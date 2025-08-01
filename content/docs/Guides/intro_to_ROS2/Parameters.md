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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAHSNFXC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKpia9lV7joug5WxM%2Fb3Jw1bBciZ%2BilSPLHeKHJs48zQIgHkIjHeZP7Hu4Mg5hJOh8BEKbSnCW%2BHOoR6pHWl5KssEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSX7vqnoA9WhMI5lircA3AoM7aIH2%2Bwrq91z5wjqI5EjNCa1YSam%2BbdflkEULFcWOAMdE9ErMyZNmakBJdus0nl0d2VeYj4v5nrjwWaj5KYH6PDT8cbGHusJ0GlsfJIqIJmwTy6r6uU8ZSTb8jkWu0DvQPfRui4Y3VGFNW%2FZql9No4kzotKSE6BZH2hsSZlWHd7rpjfWLc1Hmp4%2BDXOb3MkKrtcRdoma6rMDDo3uYCzLT2SGbbjUXFpSgOvSieoPIg2Daj2viT8qvoTOGr7Q95VRfe1IiUCe%2FcDO4dcL6vCu84ZPQqmFFUQ598o73zmRSE%2BPiL4ahMt51KzT8xq0rnULs0NxXa8YBKA3DegV8C6PlXMiZngYS%2BuTWR%2BbXSyqIcs5%2FQFeGiaScYtGIgZLa01ASgieSpfuUv0f9%2Fq7eVADOE5olZbOQj5rTiIOy5VvC6vEuEWdA7DzxfcXufz1CJMPGEZZI90zAsB0mfSWRXLGNSnyhLvRi%2Ba7oGv7ARStPJGHQf%2FVAFBNkj5rxksK3AuHSOAz9CKrchXO7HhRfZJpxyXNAlVJ2ASa0IpV6GGUDGO8hSotFmEBhbYgrqmbKqf%2BgjEKCap3jYPpVfOQ8sf5FsnrvCBEcu2dH5q%2Fb2%2Fje3laLw2IQBh6sSoMMTKsMQGOqUB%2FXlr9oc%2BEjaUPHWq9O%2BMF%2FWCzB9%2BojEed5SzA%2BJ89RmuteVbslftBtAh3Yuch4V1b3zWZrAYG66KuP4%2FUxN%2BCBoJSSZ9w0x1Y351c11HgOVJtA7m6TGuqTlBc5C7qi6lIlXsLL5vPq4%2Bgl84dIhdrF%2Bd4Tf5VUb%2FfpjQHzRtjoPQEnGYnfR3w6179WharmI4R2vTrbLHxloh6xMLw7gbo2ZaE4uQ&X-Amz-Signature=687f36efaebe3fa9a856f72e39df340de4b720666a8c718901882511113c5f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
