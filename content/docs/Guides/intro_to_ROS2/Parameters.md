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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E7FGZ4T%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvUrhZXIREZUcZSGSV1Vxc5Xw9DykArSUNURHhgKHOFwIhAPAniiJ4zxTqRzs1nCJtDGBanyIYc4EofcWhnpvd250rKv8DCCsQABoMNjM3NDIzMTgzODA1IgzFooArlNM0TSlByCAq3AMr54qItJ1IkDDS6J9CQcWGW4HAnallLcgYrRWALRzjcyvSqZsYCUBbT6d6x4S34tHobuMHXtZrRMYjACi6KUH%2Byiv%2FObbZuk9VzmdZb%2BPCMkVlzuHl6x3FzrFGL%2Fdto0kJXUF1lUkv0ObJCv1IQ59yFaX8fw9nILQDfJSgEMeeUJ%2FHKyThX5Mz04XdBEEVmqc7vzbJL1sgdFCVzA%2FMVSlQba1p3G01x9MgnY24e544db0oPYlaZ2drTVCDJSsm3Izp21I8AjU9v6Kwfzue%2FC5ULJHaAV8R4%2BYGchEuCcltu0jU8v5yCaj4poMLMz6NXHL190wAvGE36e7cFRwHyI48jP0AUyizrVrrY2DQ%2F2Gxz2Ecg6TVU3nXFox1%2Bi%2BRsbKoebj1FwGVutSjPbfk7hVHXE7P34iJepzo8DLFir4GZnlIRL1DVv61GxaD%2FyShtNDpK0vIOVzC8zBma3QMfWBlSnb59SiKhoDHCgGY0Ii%2B3%2FNmfo4Ljf%2BoKk2Midb0Hbdubligxo1jaT3Yyu%2BUnG9IOQK3RmHo4qerTpmcvjiBn5n2wrVkffdjukubcv%2FwU3PqUFzr9vLTn8OFKCHsi%2FEmvg1%2F9oJYO7peVRQCkPVpQE%2F6eoCPC0w%2FILbcpjCez%2Fi%2FBjqkAYKuOAzLOESJRo%2B60NbFT0Mm%2FzNulw%2FBwSyPJaRpgXnXoFMSe%2BC5WEWCOWr9BQ5CkoWAcwDNaPJjjCxFtxlCnfdYYNZTvOoTrSGIRsLB87C%2BVPi%2B9%2Fxg73%2FT8jy0T4T06hbetnCglQJr3U09VX%2FO%2FL6wlv8PA1X%2Fsx2hwmb5cfDpIXR6zJDCrOHQgCWBdVpBxJTj4Do06LTspr9C9Yef%2BS%2BPuYO8&X-Amz-Signature=ec1173a2103c591f828871b0dba6c8b0fc441b308398fe8428ab1841312ff64d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
