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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXM3IU7V%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC31vCMAsBjyeRI6wtxsz37bxf%2FAndvQY4ZxT0V5cpEtAIgC4QKI1HHqSdsl%2FgVuj8jsSVqoIE%2Fj1bAZKnwmoO1TvYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmT71U2Xjr99cUyfCrcAz9FMZq5z6B7TsNM%2F0uZIfToPUV3qOpJFGEis%2FAV6Pp%2Ba8vPB7WXz7lPNX4FBX757CXKiyUvqeX6xuKT%2FDlGpVRJR1acB7GumACv0Kum27hVgKPAK0lgqymJ%2FBWAmsWApxHouxqBzgYiK5X5InUOpqYCK4laQ0nN9Hcd1znaVJHRZmb5T1Jjaz1cyNw05PNwEeOImYxz9bHTN%2BB055hSVV7ApW4woABwCoqFbi%2BgS8zbS%2BviK6GWl84yFhWnawFXGl9gh%2FxPa%2Bahwl3CT2FvxqBHFJUrot5xmtL%2Fbe8izztZRVSYVxU%2F7zOfO2pUxQ8Lo3%2BBEOJtYirkKYa29V4yjdD6MFJ7vO50OchW8IQmrdUMm9ihBeceuRNmBUoYbc8WC5MD4%2BzDFtm0xLcpzcnPkWvyV2pSIFdu6CW03K1Iy2uCh7yCnZSwmopX%2F6lCIdExgdUVFbtkhI%2FyInaTt%2Bs6bjzQVeErPvf%2BarMorpuz3MjrNOw7moGy90f8jC8HmFDwToYaaN2v%2Fbs4VUEh6sujby4yEUgJcB39xNduMIvPBbYJ8wbQMTZxbmXEBNxcSoIYXLng3hecd4MeZ1oFm7jbx9jlxzzLuv0A0PXtem5JtYQ8Pr3CMOI3Xd%2FePgp%2FMJOn6L8GOqUBe2%2BPCsVAdFgEi05pRPSGnDtNU0h0nWbxPqJUm2Hnzurx6bXY4%2FGXWi7s8oihRSj%2BMwwws2du4wJ2i5zfu9A9%2F9HF2AAcAMW8RAN5%2FurRbJRJi%2Bs5Q6LctJD80QGrnMiUDtW2uloUJ0dz%2B3TiY7oGjFbFRgxbH05i%2F%2BWNBAdrbEWgv3fkz5ZAe2EYIT6iLgknhhjslWHnortU94PjUN2uUit6PW20&X-Amz-Signature=82b6a5fc4e2696fe4e3c5eaab9bfd78a7a0584476ceb47be6f42e8b5e858902b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
