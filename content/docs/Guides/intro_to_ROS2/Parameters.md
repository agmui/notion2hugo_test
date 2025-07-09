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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CQETVUO%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErmSM5jt2XGSlNl%2BIJLZfadHPhWdu24kRreplneykqMAiAfjxab4LGaqI678Yc3sw%2FKZnkwJz4bWVhxb7FxnJUsrCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9qqgZcYbDZPxRRLhKtwDhAXtr7AAaqKbfv8TtjI8TeN66x9ePweZceOpmSAOQRoiNrCgpbvF1kb9Bl3uXD4rdW5Egk44FGat9GfYArtYqxtDiHRaclRzWO0yue3n0HPPCroPP8VK6gUPpQQ78UXd54ekQ3o7Q8gp6P2%2F62bu5xPedc6vHrhI5jT36zQFddGd9Gem5fT6SQ%2B7p30tQ9FSwG5EGjjIdVZfkrupBqSvONDY5WpYO%2B5B3FpYEqBdW2nqRT2i2q3vecUckueiXqVTvFpw1pOK%2FovtuMOyXEeVw%2BkYCONKHIYC%2BEMKEpcyzKWf8YUcyfV4G3SpOYfLSVBRPNCaIV6YlvZxdB7RImtPnRZ6YQZdlZt5ZdrQd88nkzdu4wFHDW1v4Y2CxXPwRqjzMEwxex1c3%2BzoYJGlLg2N9wkQi5yqzrjVkOglYWoL%2Fx9nqja8VkoTT0q%2FfLI9jzCXsNi%2FNhBQoffTEgvOdA4QAYc7p6uKl9cGjwdj8Q303AXIa1bkVdmejLuPRSY%2FplVd2s8MYDYnj%2B0sirDo%2FfPetj10HtAFBj3ck4W2gTcrTc6sHSVka9u6RsykhM1VVqHATl2GgRIZLrDEiCsEBTsaUq0tzRrfWzgy1ksECNREY9Pp9YBQU9wYwMeM6GEwtsq3wwY6pgG3RitwSvDWDIXYsWlPEJxiYC270sGbsYV6Vf98jXLxFHup9%2Bax0G6E%2FCPkftdSTFtXAIan%2Fq0OiGKUKgv%2B6q%2BOcCSwyM9ysw5wH04PMzIVPW3jwLHL9BFEG1IAXf5evAhmxWEUs%2Bdet1UaNfkgoftr5O70UR8BOan1%2Bxb90n9k1ELPTkZZDQqMmySL%2BSFuEJ%2B1H7dbfatCbS8kx9PBjn09eqU%2BIP9Q&X-Amz-Signature=e017c64f8fef6096e599bcfc04822546be62c0da829302778480fcc82d5b91a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
