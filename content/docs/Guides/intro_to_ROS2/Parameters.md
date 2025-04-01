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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVCOSRH4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCv2fZhOJQ40wzzEOFsGDZo%2F2JSucsAGKTeEDt82sc2uwIgPT0lrcjI%2BI9HFeGQuaD28OkLA5JPXus8gVKfOklIWZcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgjz3QNiZAHMI8glSrcAwfG5%2BhyA2BbzRPxvCrd6AeIODyCavdqWcX0iLYpjvbVizmr5ULnCJWDG0MFBD2lyGL4YivPkUuMIn13iA3tzBX964ygzoj2k28%2F%2BK7tO4P2qjAcb5Ajjapst4Ie8CJyqPESoYLpH%2BtXsPyKSR1dYhnKt%2FIrbGg%2FFJPEjRPoYukyLKiLram%2BK2yU9u8V88zIx9F%2F%2BD0SAkuD1UV8IUBvHBae775sewGlCjyMp33cHw%2FP11OU1JY%2BMsuC621KSlw6W329vSHPDRGgeGuKNadaTXtOeU1FgJdHMhlfdIK2jkAYcy%2BJTPTxW%2FhUTRDIkpkmGbY55sQH%2BSsRMDIg6dbi6%2BeRMeElktFzxIJizTtbC14anppbXtg0A2c1hxW9IXYnRLzQMmYLFUXKiZQQlrZfEtBCQQ5Bwai3xPy9kTDE3YzqgNknrv886dcI%2B3zSwheqXj1KvICBXQrTYbZVbvUif%2FrsgIvlGbFLOYt4G9sW3EGSvhBYefOvcdgxzf6WJUhYRoy6RfZC4T74RGH9auJs5vekmYKcJrTFl%2F4VeumVDesfM10KbGoFhPcTCk7VmDk8wffqmJkFc23%2BpEHUoXhBEXw0K4N%2BviYwq9EdaGhSX2YXvByg49JbAKosI2KPMK6hsL8GOqUBwyUgmSmVWHsTk0msGgeWY6Sp%2BAzPbGjui7d4SJihxcZcrYxb0q08W01O9TIY1czl44dAVAIe54fd7pr67Xkd9%2BsfcJIqJGTVHkwlf8nNVpdTP9edVwHk0KtBSE%2FS7UA4nRcf2Fl%2BOJImEoMUQ2x62xTynlJhYzkyHuiQxmLImjYvDjRNuuQu3rWDwm5Enw0s9ApWTQfreCt79F5noFNnDBCnDWUZ&X-Amz-Signature=12d1b72948785439425ed64d58a37bf7187e91994493a57a23103d874415e630&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
