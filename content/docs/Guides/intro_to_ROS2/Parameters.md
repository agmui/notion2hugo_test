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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT6OXD2M%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmirdi44fg7T1WxFlfl1LQ3M0%2Bkqo%2BEiBPhepO0o%2Fq2gIgejomRys1%2BXESHLHl%2FjvCvLaI0G2th5GWP3THv0VM%2F2MqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeCmvpcxzCRMerC1yrcAxnoKm2PaKDex6CgdbRr%2BQsbndnjC86PaviCl3QRUqtko%2F7ohX3gefmWUEB8jRaiakasKZoPkw5hyx7CbJqi4emrDE8Oy4tOWhRbFx%2F7VU%2FrCzuSXPwNg473BvAV4G4b3JqxiHyeAFN5UpOYX8oyRq8%2B8P8WqcoHq7ySAwm37NMl5L%2FAh4YGLZwdtilOKmIKVCL5%2B1R7EKT2vFRExPWw9ZN4fwmtxwpNncE0le3GgvlfYq8L3RXz2QkA6Sn6Dbs2Gb2y2V3CAetJVuJrAqFIVDZdVDUFL9%2Fv%2FGNLc%2FFyU%2BqxCkVQOK%2FbFcek1fU050UThwAFA6O4TrOwfRVZlQ7XNCfUWNawEVil2Ap94725jV7LVLR1%2FCjn8mnG%2F0jqOlEIplAOCZ5UCuZeVv%2BC9jXevC1zm6phZXiROmuXvAmpiYfFUh6y8WPahmLTk%2FdrN0qVrrH%2BxIAib0PvbhTFBbScu35cPHHC7WrNZRElA2YZQCRKP8cZTZtJcweMgqhdRm1Io3dGmQ9kWu%2FOaLZD8DWMKZ6RuK3eYa0VDN8EJpRbjEPL%2FqwFaL4%2FaCxN2%2FcLwo9Oe1fuOICbv7xsw%2BitCF4QaqYhT5XmAdc78OJ1LWgf3gUl0QkCTPnjxiru5ZTkMK6itMEGOqUBu7OtwThQAlRMFM%2Bghm8mA6quenhE7Bd39aYfCjJDD0GCCHGsNkIlTu6p%2FFWXKa4hJh2I2uky%2F%2BIBiy48nG6TMhwrLXNiqt3%2Fa%2FVR%2BxMT1AwFK4kiJVUh7JTUVe%2FWcsPZYd%2Bom0F36iIt52hVCAaTNJLX1FgzxIaZj3opsReclUDAjtEeEwItvRTPSpG329OzOXSqxv2fAkIFslgU44pBRG8HJoX5&X-Amz-Signature=12f85861a66390d2c9ab761b4e40a6efe485b7f0b9479c88d17dbf1da16bcf94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
