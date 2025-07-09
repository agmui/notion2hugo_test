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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S3ZXFAM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxtgMs8jfVNPXL%2FLm7zxVKKMHUC3V3DfWP7gIJuHaZ%2BAiAvubUgdFN2XIaudL%2Bg5A6E4I4BFAtkFffzzeBeUEb%2FmSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM21cpkhI10L3t19NPKtwDqypAsEaHSmqrRqMr4PyoweMM5Xll%2BjbFwgpIQ1cHGfAqVqdvpxpxUYa6ycN71ZY%2FiJYVZ%2BgZlo8wGlgFBOxdnCRArWqAtnwvqtjA5UGaTvXTh9A6olmIMEMjJboVM79MTWXa%2BqGz5q9%2F%2Bq7yqDrCE7VjGuQlbQ0CefKKMrkyRk9ads1W%2BvhpbsuytWxGNAxm8Gysz4LCgskrsYeD5Me%2BlWaYtf8AZh9lFS3IPusmATPm4QSfY9u9r0XmvD4LTCzrpybzOp7CXyqUqh%2B3XzR%2FRfeT7RsZ5M2jjlUyLBi0YmD9EA8Rz8t7oDqvn7O57bbIn%2FR25dRAA5SKFhraYnpVLS%2BFOfQpGJM3l%2BpQdSZeLr5Fq9H3x6IvwDlHUkFtWLTx7K8sQwF%2BdF%2Blq8mpa8yWDifCf20rjPh36b2JtAIg9pkKVP3Quyrlew81vSJcJWfNMI56AmHTbgORvnWys935s8cfkAkfGpRJgiiNem7BbQrsJiX8sYwTM59YALlc64qjrypkYjtxbeCj17KxgQUF%2B6eogrsLMidFkF8tgsrSdJFn%2FacUxKUFKoo8G3ZA1bTD%2BkRhvWLGmyD3gqyhDBe3bmvgc3Bz1nC88xau%2Fg8Vs8QPw9pb3JzS2WzgN%2BcwtLO2wwY6pgGwjkIWZfIAkXfuXR3v2wsoNCj4%2FMTKY3aOuo6ZA7HZ0mirD%2FysbaIg0fFFaPpfNJJJhup11ztnPm1TL1ddM%2FrgGxVepPgstgUGXD3vTR%2Be5zFjehuEeY8TzMnC7SjAwnvJziHWxYc2CoINiwraRHXrs%2FLTCtYEbttBKPLyHv8MFL710nZjZqwKu0vidcqODaUxLEa07XVI25AA0WaaptwSBxU%2FZJFn&X-Amz-Signature=d653485750955a6ea8d4d35aff312c4f51109e838f3748eed273735b6c29020c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
