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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDIEAUS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP97Cx6JRRm48DuAlUhPFFPSsnFamiLTRSqSPk08UTswIhAPtbbvbJ7VsMnFEVZRSDrs%2F86xJ%2BFb6CqFK2HqZIjkRsKv8DCBAQABoMNjM3NDIzMTgzODA1IgynQvFhEg%2BJBeArfSwq3AMTVFUIP39mBDAE%2BhCj0rOI%2FgWB1dDE7vEfe%2BfLNAQTEKCDDNyJqUkrNUSICM%2BH3Sl0pPOGC3lURTPaTF1EOQA2RtKLjd3ugOmgM25%2BlVO0JvRy1RDpkz%2Bbwmj4kNrcWErjfFYYJ8t4%2BlQGOWPulybdFSb6bid7sArF5U%2FrHiC08WjvhUaNHHhgguaLokhM9EeJJkqw7PlfVwwc5ebL%2BcdiKHM8LuRVonrCEv5OCR3AoF%2B2MpfvBMC%2B3ME6gdjiLtu5i7zT3XOvZv2gjVK2PhRgJ%2F1TULsUTf3VP%2Fzgu%2FehRjTvw5MANsh6w6KemKVmbN0uHVc6S6MUAtpN4SDjzGJNny7X5bdnlutuzW%2FxSCmzo2i062QPthG08wc88Bhlk75%2FUIIFa7rz4cipMC13pVixXNZ6VGVepaHP%2B1eRYfV59WlS%2FYWMvBK6k0aALQD7Yw1XRDFQpyFSTsB9ize3SG7%2FuS2GUhewF1n80oQnFXfXjWWglHD06kp5AHKHqNgXO3qxeiRto%2Bgwwd8fX%2BwHR6PbAWcxhuZeyKaC0vzw%2F2J88wBQ%2F%2FeFHNEy6qzyOXEq7fREB3ea6wheYiWo6id6mPEHVSjbx3xCZSFuU8lxzYLbFFCCxD%2FjiVe6uttIhjDP6p%2B%2BBjqkAcYFYfWxmybv5895OkOa9ZqLtpixUlAt0XygtV2lr0IAmutRkREzOl%2FOJv8n7C5QKvAWPStkMtj2s3Dy3LA5MURk%2F79ki7q%2FUM898QzVFRU8n53KXWH5ESzHtdOtfi6ZwTy2AbGdjNeT5eUJrISpRkLiJxz%2BA%2FuDLPvqJr6ALgZb1toDEGvjeFWg%2Fuq4A3roSksqKynaywPAWmEVJGPS6dzRl8AE&X-Amz-Signature=2bffa8adf39ccac0d7bcfce25670c558a23ca256a15188d2fad04fbe8a7c7558&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
