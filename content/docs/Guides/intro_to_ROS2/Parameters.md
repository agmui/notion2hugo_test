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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBZL7LN%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh8xi1HVfaMyWSLcqUGkEUgVkqXZJRnIcCRL5033o%2BAgIhAO88tklLsg%2FHTEoC0LTU%2BJhWKvDC419g5RMmhOLMV%2FHKKv8DCHMQABoMNjM3NDIzMTgzODA1IgzlTVudGeAycx%2BeE74q3AMVRZejDg1zvXNBmsUbSFYbPXs0yBlvVKkyjN%2Buaz38sol1bxrjLhrimFB8Y%2BaF8uRlkzMWc%2FVVqZKKyOfNhNs5kc7B6CV9Ft9Il8wTHRyE8cnLcrCXyZfrokpRd29VKxryHXEcd7nDXfgpekqiVmkWdXX05ERK3tfO2QCU7u5DSMm97SRjB93CYubMuttr9el7w%2FiILT0fJR1b%2BAYd5Vly4alYCnLadvLgNsMVR9SrkeZpFol7pVgSO0T8pze5x7EJZrPLEAkV%2BR47aGcU2JiZqHxfIuPzQHRw9OGXqd%2BcS9xpNXM6GhkTkWj6o%2Bd5b%2Bsm9THopls3iriGzrj7trxdFsO9eO7m5n73ZAZnvSLjgOwG1oKb8KQXrBsNNdtRDUDW6jV%2BjMKHTjWoxVMn5%2BO6J1PDqxZThxMDQWcMeB9NuFPwELkkm8G3lJh8oTUdFyV55%2BAYW7cz06%2Fv99fws870fqhQiDQpna1%2Bgj%2BXKTbALzeQGpO3%2FBNe9i5qAiGvfef7Wfi4NNSyMEjdzOtYLay2ndwVW3m4sgL3GJg8sBXXSBIXSARd2CRkeDsXENjv5GzvZ6Lk9k15BTRkHRdnW5KcxGQpPtJxH6XhvzroZ5b9X7%2BD2X%2B1J%2FJZn921fDDy7sTCBjqkAaQiZFFiBgg5oUFsRjoW2VK1RPVrJRZNJ9JkVkFpCfuN8CRp7r%2BiIYcSE7iV3SSYnuAHmVv11VPzgjlVoGbD8CFT%2F2FTAo9kvI7ZzNAilackvKYOZjxIOk23wa%2FvoBTEVjtqSH7KhD6B4IOieNV6vfRF4Juvqds13UEAfziNpv9Lh7NfdnhXvgCX%2Bm6XIrOFPTpiAjtSoUFC5jqslm8842OkZs1O&X-Amz-Signature=a197fd1306116f3531465ea3e8a8db9b79acdc74950fd346253286dc00c48d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
