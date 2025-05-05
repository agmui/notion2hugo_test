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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODMERSQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHT8DOfBDaO5YJK%2FQ7aNnO3OVPjy6%2FHsmpHQadem4vDAIhALa8zmXZ4nPkHVhkeFjQ9C%2BgifG%2BYd6xFBtwfMBfR8U1Kv8DCDgQABoMNjM3NDIzMTgzODA1Igw9E8sKiBT99kY58hsq3ANj6xMAZIZaBGopZxSHIC%2Bkno5bubyOj%2F80lZxMITngCvHrJ%2Fx49Vqgtx427runSW9U2WR9GWcSSaUaiPyHdaAEd0yE90HCQxnzihd6alnVVu2N4kpG75humWTEg9xiTtvXhLWUS%2FiGyi5%2B0gS%2FOjerrTIgINqvwlm403a0MKOrJTpOU53xkGVwNchbvhRSJThFO2TnPrH5tcJ2uwiIQ7Q%2FYPLLTeiclJ34Bufnbrk38TnSpnDcyQO1tWX5OuiO%2Bz48YhIRU9AsHhsNwVTZ9YvYuItbFNecDq2Qy62CkcKIDYd6Yl1vbh2C4hOEfDUmgRNVlG2%2B4z7wxEELvkLGhRQJWOkJg%2BauIrmTDExLI7j%2B2JZih4yyUvtLzA%2FFAKuvZccrboaWOIhXvqlfK%2FQ40vkvHdme3lenoD9n6Pqfx8HcG0a%2F1VmUsCVr%2BPD6FZhL%2BU4Z2Ffyuoh9kXWs8S3Pf5JRmdeCfDHiUdBeRSGTNdqdSe1nAaz1wS7XA8oRascBpOWvjGGD9XS%2BZ6bBQCFW%2FWUKpmIckDh6spFOAVsEUhDM4adUim4hDkW4s5hwfhcWM4rWg01kdlGwrzD%2F5e8R77g6KLc7T9n4gup08nXF%2FWxPHOVs6H1l686R5E4YhjDt%2FuTABjqkAYxP26lkeHm%2FSM10jvoneyr%2FE%2BmNiqtovxxeYoOXmCRmubV64hhvB2y3TH3maC87w0SVNyyWQL9gA9EMnIF76SGtlirSn0Mh%2FU8WIkZftdGFS9%2BNLEja063mhjcCWFZujqtmbfc8kdjIaHFxCQfIJCo%2Fa0GngzJoNJsU4h7NlZrFc26gc%2FHlI1AJFIY6yoAVnGm%2FC0ozuQFPGDlHWFt5laNkyUC%2F&X-Amz-Signature=41f54c26ba537d954b7623c16d8f3539ee37174fb67e93e1dad325417d79dc0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
