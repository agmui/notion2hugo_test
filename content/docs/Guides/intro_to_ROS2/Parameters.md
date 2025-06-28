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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOSYIID%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC26VHjgMr2PYaUPkqhBHwh3%2Bh8P9FbMyVI8yIhkHqIXwIhAJyX0l%2B7KZKgKeRK%2BKL%2FDbVL97%2BL%2FcmNpCEpgEzlRPBVKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCH6cYDGjhNLHpKX8q3APV7uj92Kv5MJqoiDtlt5n8%2FvbaWa%2FsNRWjU9A0DkDo6mzQYaDkjFs70uDT97XYABMu%2B3FMERiVDus9x2X0XK3PqaKcNsCAJKhQoxTgvIN4WMIdhhfaKL%2BgtZRFRNuH%2FDkGi%2FeFOpQl9FOXWKNWqkeJ%2FyQubOfvOnEwUDydOaWMKd5Pe4KjCu0Z18g%2FmObOjq1PwFrT%2BjjK1i7CwSKtkXWN7K63P6RsRKdQm6%2BwZ%2FugxLmF3OSKnBXYBvY28b4QTCa3iDoHZUKxn5xunUT1ifMLhaPqG4nIEshDjVL1WUaUEL7hE5SpgE2IOKmQVZ3r6T2a85TMVd5ppc4a9I5antqLDQYW9a5H3bMKToYp4c0Yjg6kAS3tLPOZUNsk6O8g7qSdzMzcH8t6tCkYP6TLuqQxr1EyGGwzH9nDdBOXSTuTD7WDiyPvXqLkTXw5GZF%2BOGiy8%2B3riol7aoxWSLTUOs92L%2FaEmp1CN10DaiyK3ClyAF4uY98sNIw5SKFS4gvCMSEIfS5irIHhNCA59RQSxQzkZDPP5IetVYteceq%2BRQYj5zp1tBfWiodbVlpJDHVxa12GTQPwTz5Yk6fqUO3y7Wu8UK2v9kViBoGh9RnfLYAnSEMsASuN%2BvJjqzfoyzCE9YDDBjqkAcKLNPpLKwLBTXVw2KOF62s6HdHajYwv3%2BYc3461G2h%2FdWubY3o5NvTE9vj9625DXBT5y7FjcsAXtBR4kWxAouJ1TA%2B78az33ReGZ%2BAwi9nTaPatXYNGRq3BWSk9dGxNns%2FtjHCzHWNzhTCbH%2BtISfFlEdeuErU%2FZLfQOqcIaMmL0pbX%2FBxuLfG0UOoz%2Fv7k9eC%2FhyNtdtmnJ3f12rCgBHiLYtRD&X-Amz-Signature=255bb88e19776becb539ccc6ffd45bda5d0156b11f48f049263bc62a05e4ae9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
