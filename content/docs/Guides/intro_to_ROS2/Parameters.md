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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIPXIMWC%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHqQlXu73paMTb5yVj5GDb24hPM0quydVQoHulR7nqugAiAJSd1HP4%2FpPlzPe%2Bc5taTpJT6tL5d8yWeZLELJKbnwWSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCcgMJVRJApavUZyuKtwDSfQW5wkbYg7IXtNSf0u4doABV7daQzhh%2F58AgPV3adJg2vYRgztvNcYesliLK6SS4Ng8qRrgmNmeUrNXcQA3upSqDklWRqZV60VpGWOD7BYQGspVzsKhwVoHZ10%2FsiQX7%2Fxbx9BGjONbUsdIzCIU7D%2Fz7NvmkywvyahJhTEENbCBiCKhQEgmCINQYzELDKJx8rYfPOBguNsqhHUYLXCWU6ejUJ%2BFmCqyx2NUZP5PLG%2F%2FcgIhXg1K2GheXCxWUtwqofE2%2FD%2FaL%2B5xHrSarLtVDrIVRwqYpzSh66%2F3pg6snez5JaOMtw40E2HBs5UYl9x8Bexruxhc%2BM6He4auyGLksYiv7uzCGs1TRV8WThkfUtcDAyvx5%2FJpPQ9pYd7lb7TgNCk4IOn4zfyhu9ZUVue0qgfMD05HNYtaq%2BsXXU0XXaOt99ZfNS8mVArNuzIFdRsQHWnbUamuISnSlQnfmYolvZMMebjJVoJPJ76Suvy6c2uG7DolCzn8qBeMvxnqB1jwr%2BqJBlOniWAWwn4%2FcbvlCpV77bsOMNSSnEmljyh4nmUQQ8Jqlajqr45H3t7PwUk3MMMijeWIj%2FQh27aaFSI2HvEhekEfgwIGGNzRYnX8iEI336wWxBw5bqa9d%2Fow1d2tyQY6pgH2jo0fZzBXB8VHQSWJ5ZseU4w5kDn7DmzYFWXmoBuPPpS3XjFgTtbzuo9xlW1IGsmvzIhZdR4mPnqaAjFmb0pJZReLbwqobqi6yYTU16taiIEgIJmb%2BSDtRGFUizonMli1OXrM49WcLejgkd7x4nN7EswEZPRoofuUafNUFem34QuK8Q9XhbunmaSoJL839KD4YZzuC4qFWJJGCAoumvF%2B%2F%2FpraJhX&X-Amz-Signature=70da4d2e6c2a601414619a15a20a60157936e3e35d503992b4a7931e81737297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
