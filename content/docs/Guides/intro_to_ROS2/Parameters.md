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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHLSA7K%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTODpUYyi6tWwNmXb2vFS%2F20HtmwM3aLJgZ6HsaXTcmAiB2rUPXWNiGhFA5zeLx9yaiCb16zwMcOA%2FczEcLpJbdxiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgXG8hx93WuY46UEKtwD7fbwHeXhlFmev5N1PUrXd72124XKf6JqXL4S6ByCbIAHapbtXu8dA7E2JZi%2BFGO2kH%2BpeeT7h7CZbIzmnHyQFhVZNBdzhrTlaE%2Fd0NkoI0qK%2Fq9NxwwWc7gpEgHtxqN4vbRS2kaznn2eZA%2Fgh8TLUrojFJc6alPS%2F%2Bx1usPEDJexTnWclRb5vCeeQsY2EfSzrLSToSnjbiJsX73Hlytu7MfrvvaUkcAf8nAS081nAN573ESnc6RF%2FE9948SeZWg%2BBl0iSlsAvgu1TnvraE%2FSYMB8teRf9dVHo2lGH8NRCWlQxOAJ0zzQsr6ITg6dDyhdZB4SwwILWn48kHMHzkK7%2BBCm9cliHhbzd1C1tPfrDw%2BM%2BhmR0LaUtRs%2BxPpvFcCtZrTIA3C8C7NMTvK6zTeR1vlGq1nSuj%2F%2BDEEl3dUJ3Ac31Zw1bkTB706oNVrt9Ytf1dnTooDmjO%2B%2BVUj0wlDfWOaZR54XMUWPsWWkwiPna08NadddN9GcZI0OxPr6Ma2hY4k7ZBBdBOJBH9YlRb%2BLijxBSX%2Ft%2FkYkYhY6BVCIpxWat%2BrmHUCWeWPLOsaDfR%2BZLwopEn5PZPOcQ8BnMNaZMNDQvZbM0x0MPXB%2FuldC3uLvtyt68nuZ4iY3FqgwwInovQY6pgF3bP2CdRjBp0UmgSClIt9OlT%2Ba36tUa%2BRdW7Yn0qeXdX61wtBvPdF3J%2Bq8VltRMwze8DbwRwnyptrBP3mDId%2BRLZqJjJATeHjuVQVPPmyhLWNmhF9oUaCk6WVxkHRlA%2FbQGP3ekLcBwgkxYQxMqgR7s6EuguTRzEECnfo%2B7EnUUoijdMU1zxFpXiRsY95KyDjlcGjitItV0rNsNPHxAqS0rd%2B%2BwO9b&X-Amz-Signature=933fc59e6ff11d513d16b2083ef00138f01e92ec96497ee18645bc56b1120536&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
