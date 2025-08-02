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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H57JPS5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIuqrZpoXsHEfSj8Ow9OIKL8%2BkiU7jHVbmA67jbyL1fQIhALvLnw3hfv4acMqqfZFnKTkKpaYFVLYm42fdUedlwkVVKv8DCBwQABoMNjM3NDIzMTgzODA1IgzYoN0Mks8LHR2qi40q3AMDCNUmgAwrVjqWC3lZtfcfjnkdIU4Eno%2FhlPpRaT7NHWDAtAIS4ozG%2BeTkGykHJqYlI5UidbSkgO0%2FET3f0kcsQMMODy64tSk0Y4f774ITDfm520BP632GcGRBesHbtEzJRPGm9u8ISi%2FTb3s1NiZCPZlSyakIp6wfnH7xCFzFpiiGb57jv6QPlcFcDW2Mj%2FpHCAQQm8BPA3NXaNyDk%2FNxa9E6S9rhWXckXRgYg2JGml7DR%2FhHu6CpozdLxKbP9eGMlL%2BuWwN7jhlWKwfEKMQ3ShhZwyc6XFrEhFMbRtCcF%2F1ahUX%2FNykSVsI9PxsVmR5iycJFRsyCpgKtc3JtJKAsFObFhhExBuDX2rAkW4uTQy6DoFpLo2BOI3pqblvcw0XM7zP3f11ATONfCd6kwuaF%2FqjeEkpeBtxudfrYNnGmzA07gQ0OXSrq4dXW87MTstT8S2Nbw%2BQkVaGOu5BUXR6tRb0f4O43xn2hfKB5J8frOTouH1jl5HfUdIH5lEU3%2F1fAuxdXku2b4mOp4fgbXI98RcUdqWAELVJoOXFEfMdm6Pe7fIsRR6Oxcj5Mi8eRUWUd7n067u5thyyCY29DstxggtvzLRxawfGCcky%2FBK0BKeIarDEQNoWP5wPI5DDKw7nEBjqkAWn2HcmE6sgp7Ve5aK%2Fi3hhbkfUErJkwa0yCQxXWX844XwMzuHXvBbz%2FDSrXEBqbcJz%2FZgwFC8SM8d47uqduZP3RLHdit1YIFqaY6dsjP6c2belcAyR87pekgc7ZxXfNXCkjDrt4DUUh37uKe1Xc4r7Lpa7XOjJPtBPfdxy3f2KwEaQfrFQT7Cp3Ezq714oVokIfxRGOzcOUDcbhi1TRzGxMZWct&X-Amz-Signature=d8e8f478565374bb4400ef4f2b0ea1ae029beead22957ba08a535f9d7e7c99cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
