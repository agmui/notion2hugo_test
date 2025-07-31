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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DSNNS5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKOvVFb2i0CV8ZEwPVMHnWTzwKP%2Fhf670FNoIo4MmGAIhAML4TWQ4jbYHeV2qFsJ2KucdceOxJ6Ircoz4e%2FqKoegHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGaYNxwU1ipJUSB5gq3AMPZSqgTUjcAFJtUcdH15EgJd%2B9ZNvIZ95LDM%2B%2BLOuNPVzKg1ClReEM9qArdq0wG6ES1NU%2F5lkjp2UjAFYS%2FA3vkaOjVT55yk2CD1wQ2TdN8Ne%2B2%2BTTnFV5Cpk8XJZOYQliDInRYw8JU9nQLTEfF5tUvLEo%2FycwSxpteT%2FSfX10pxa44cswe7nrWuQdcxn4IiA26jLnvykSHvboqMpMavjU%2FfNVmUBfeANFvVEDBpG3dFGU8wTzT1OLm8D6M0SQXWviW%2FwOzm9j8AeYc%2FoDZ%2FHJFbTOYEdlnuDbh4fiHT2yEk8vkBVWhSMBClsKH0AYm33Q9y5CRWJgvMB8vUccih9%2Bm6tD3LbqZp0XWB5%2B9qIDPX1dTXFMUTd17MKmbegQ7F3plPL0OYEsUJgfbRI7Umms2GhDN1vJPpCAfFYd8apDDjrM%2BM7c7FNot847DtcTa6KmrK2QJfWxfUikdOUP90ql0fOj%2F2n6fiB%2Fes3iHU1U6X51xVSpxq5ZgBMC48kuItDoLMI0OtpRahD3K0wedmXD%2FJ5PwB1lM5Oo3YmvOjzOwWxqukTHppiuU8Ivs03fruWIQWbGRt3rYzcqAYawr0z2llFC2YZH6G5UWZuvuzRCSBKVHIDKgMdnqVqf1jDG7q%2FEBjqkAScg8nrqxGsmk6DG7qd%2BlH4HXqcl0kY8%2FmwZbd07BJtMWxv3Nb1qxuPPy6a5Chwzv7P11XJ8oQ%2FgFU4WUoba1rQ0xeh%2FduUBXdOzc4qwYMjYq5s%2BcdBojfcDbxvfW%2BwvEfNlu62YqXlMcZXWIQwjOsAy9MMbCVgbBDSvFl3HMuLoYRpnxMyWsgH6mWfVyaXKiKoV9q51s0t5RSzKRWEZNDz7g1aD&X-Amz-Signature=a614db8a816902018f47b1e4900353f17d4953114652ec632a4daee2fcbf4b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
