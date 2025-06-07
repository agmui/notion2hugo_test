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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KGDHVGQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5nZzulXZ18ZkUi0WGoTcq7fwXRPAEGKYkzfIwH%2BQiAIhAKepGESJ9o38fCQDzzI3WRLDmqNHdWP4Zwp4iwvWBnSsKv8DCH4QABoMNjM3NDIzMTgzODA1IgxvSFR6FQR5kgdULmYq3AP%2FY8X%2BbV5pki7kvlbI6WwF8AYJ2qq0KG1bL0iPNZ6FhDmJbwrGiMMEZtWlYUurq70H6XPtmt%2FnVybfOio8n6OrYgKMYSDYGz7LwCc8cVWo3qLTqg3uZ3CGk6y2G0C3MmVR2OxIXDpMVjGWDUt51reD6paRz1KNpDdp8Yc4XOrkrgsNoSLqDODUp%2FT3VLXTPyitqiqL98dIqP5w4yuEj2uVOFIKsNj4KHnK0bigC3T7PWq56LyvSGtqO6Zd0LvXd1QGUFyUT2ZEoiFvWYfLaBvKjZhSMRUYes597FvhiAfsKk14klZ2JZoYKcWEXhbLHNuZEkoSgHwRhNtFoJbmhNzUH3vvo7saJn6iYAVC9bRma%2BSBS3tadUvU3JnwHgZDChaPMdxEVZSTnTR8cml8WuDZ5M9qH9qOHWTN9JBc2vDD7MY6sNB2%2FNCMT%2Bfe5W4sRsHLQ%2BY9rRqu%2BtP%2FZg%2B2Ui%2BeY5hyQa0znLatoNn4SItGmpzJXDehSRkd1qeccFqdwshaVZnLlQTeHw9qTMxaUnHctsxaiVTOrAs7LvFIPc3X%2B3XP%2B81RI8AGBhW75bl8FwIYy9qTyK3V1c4pIu9NQd2FhV06AjKzY017FQQDFB18HTT0ZHQEgSOiv72lCDDw0pLCBjqkAWCGb7WLwR9HVI1DaoHILDuzUphF7NFQBvfh2ZxBODG3At0i8EHKXHyQVLFl7xoVbq0ZjjjiWsEyH2RRy8jLy6jaiLzgTTMy3PJ85uYhXxufhiDNt6P6D6AsxEqfeoTTL10XtemAEe%2FtsJzSfLNBs6pbEy6swhwbkLjYxzcNzkx%2B5xZoTJ62zEH59yQ46uiH6DTjIAXQRhUWALeqm52UhtTrK2PX&X-Amz-Signature=0da9b065916bb7cd84ffcb84b05519b196063c6639ea8c110a93f77b960c5ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
