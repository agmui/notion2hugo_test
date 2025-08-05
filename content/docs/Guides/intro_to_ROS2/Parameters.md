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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672R4VEUI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHxzk4mQeLgphh3IqTZ87XUwIvgViqQI6tdE5443gsATAiAUpbve2T00gxmPaYV93dhra3s6AiTwU9ZYT%2F5Fq2nMbyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMDiok4TTPAZL5xKU2KtwDlPwKPfjdVD%2BbrK8IuwmnpicVQftAsR6B885sItXwwbRzuew9vng27bFNB6V7MpAu0zOn6Atwf2vpTifgAzwcVjDBNoJlklftBdvb8CqX6EXWKgfkOoqA2J80In3XMMVxsHTjGVzUUyoD2nAZ5d1%2Fw1VsO%2FD88xkQImEkJApsXpNnQ6nx322RHoFp0qtSyYVTI2bgU55DOdOobEqxTKZCzaUcQ%2FfAi5JiESQjeOpGobaUrjB6tu0%2Brfkd40l6Jn1lmzLY6Hi5jdwjLHvBopTxKKovC3RlHWF6El9sTrkYIvoZF7Q6ERSLE8Kz8oQ%2By025gDUZN6B7pKa42i%2Fcya8d20%2F40ny6VNbiEa9pl%2BoMq0pFa5N3mHzlFj1JMiVJWeDc8S3aK1M8I0A0n9nxHcnxqDFE%2F2Lhm0Gq213cbf9GDt%2Bqrej7IMM5gMzPgeqOnUGq5abyE1h%2FI7DUHI8qy3A4zvoG81RzK5ZgsCZTEGFE1QCRsX7Xf7zEDxVA20BC3MhnQgIeCFPqJcQ3Uv8aTCjXnIMLlXWRomiKMDfBTnNABicT6dbbqtWeLKhf9ZNEsvchYA4vX3FtDGCzJfENqe59sbLq4MsY6qQG1eJPZYj7fwikkwgf5rbYgEGd9D0w4NnGxAY6pgGDhGaiJNtShzq%2Fe7A6k5IUc8%2F1ZGQoV8mznFgTMHbjwKeJW%2F8%2BKlPWBwVYTRtjaacAFf%2FYSeOmbGbreJyJ94o6q7sTXT7GkugIE5sJLJ2RiBHkjphKqt4Vif51yjm8LTppZ%2FyqwIxT7NaQfY4KerWqMcIPenhqoE%2FM%2BDjarPVdkhdQTR8azJlmm6o9BJu4OqeaSiggNziocfJ9%2BvE3QZeq8p5mJLRP&X-Amz-Signature=e23f671947829a3f286012a82a8b7cc1e5f84c73b2d0e915e44cda2c947af305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
