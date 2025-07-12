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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVPNV6L%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvAD0sMJDZlM22qRssHmcrmRdEWX4SrT75iJVh086mhAiEAm%2FVyzEVYn6HkLys%2B7nByexBK%2Bvm4blVat2Ny%2FG%2FZjt8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeyUP8HoJHgGWYu4ircA3mEIz3n3Z4UKPvLC8M1ulYgeylZVndeEFJ%2FEp68z9vxCs%2B5b8PuDA%2BKp271SEicaep0HH%2BtoK%2F8x9yXroRI2dcJiZz7Ff9HbX5vCCIlXn%2B%2BLbKA6gbehZoVlY8YHbWANSR6U6AdVCNmgNcTOLzUlxWNQaWUk%2F%2BG%2FxB7AeWUkQSXEEdnu%2F1hiR5CQjLpmstPNHV6O16hwOy3GHZisYJiD7VHORCkzb3jCHx7jvtbTht5w%2BN9OHZgCZfq531KOtc8ioQX78k88SPweHYISplYrRRwgsfHXvyXHHkF8vW239olhz7KKzj4r9DjOS2xOkepgXfNT29MGmBZEU%2BrOJ%2FDWVnmyvK9RAzX0SQ5xRtojCME94j%2Bdfks5le9qUyCfC6ink7DXTBMOmziRvqT2NnJy4QvRaGuDCRpFAWgQi3t7RKPnDY0kwyY72h1hQxoGT91%2F4LGzn5IbRSObBHBIKHSQGT%2B5mOy7IIGR5EJqcJ%2FgKS5s8wMJHl27XaqhBojr0OFTtxE7m8ScygzfUx5TeX5HYtQo9kEQRPPBJ8OgUUqH5UATQSpgXU%2BoBAMgkajQzmham1yI95PBnSfPQmkXcE8yBxi%2BA8k6v33k7tWS1IPVxeynU0OgGadkh4ptKOGMPKhyMMGOqUBa0WwMQIJXeJ7wtSLiLS2J3%2BCIX4zMcp2vR6HJ353zDIdlVvfK0%2Begqj%2B1MCKMwiVfzqO7OWeAwF2MUznbSMXPb1M66jgORrOXYRWJksIC8ZNZkYo8Kmu5jE0CaBn711fGXlJ9S5yQEtsbznHPT4bBdiFGxBfzSnmKULi8qTPvtDo8J%2BK9vLT75WPNFMtUBOkQ80j8hvZI6IkCRlSpRp1E1xT7jmM&X-Amz-Signature=f2841d0dffc06762c7a105cb0637df1d88f1a72711e57ee85e2a66542bc635cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
