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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7SKXWR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDPSMhQzeygvWQmQZ15rGA3kUR0WWap3ObRcuC77eMA%2FAIhANl%2FBEo69Dv2OSluWg%2FaVXVXTCzaNIeeukSlmkYAACmnKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6JxPHyAVNQOXEI68q3AM4n04VIUahUIg5UNASIfOsyNyG5LY8NuDabcV2lNVAMoAJtfGV4057wCe5mb8ibSKsEfBbVpaHIJFcXyADsD5mK3hpC5hlIw28rQyhLiX0Xk5NbQForqp819%2BcKXgmo33NRhjpl0%2FHG%2Fjlgc25vScFfIkCdhvI4Vp8JpiBtqulHqw%2BjH%2BlAXi7qH2YYEJ6%2FV%2FY8XxNk9wNhp1MjWKsH8txnMZmxq8QS5Jdc4g867TerwGzMIsG4xYNp%2Bfjd7VS9QJ19J0JNgqaH7L1zSkp%2BLKKVhY9FkH3DPkbx7QSPVN5ndKdfCE0%2BGUwC0gi17o85FJ%2Fb1hZX9OASEoYqKbV82RPfm6YiyWaxiOLrYSFZe%2F6NLBgaYK7o12a29zW7PE7euqBBcjFDKnX42WsIFgx7NyhLU6Qnhff9lWmx5UEGFuLn210qJarhqLbnKuVLJu6n%2Fa7DTlbOtWBAkh54uaFQkK9K9mjMSxQf%2BV8Ey8RPiqiLdGXBQRZ5C46BUsw1WBezyn9VJ%2FMbGMUEKFG4zfpbc67mOcOtZlzt7DdtLP8HusDD1uiuLacP%2Fs3mUk6uUJgS9N03BD3WpMczD6plG0eFE4teiOxXmLLvGCyxg31HaDgIAQ1%2BH49butyypcEPDD7of7ABjqkAWVUz9nB7X7O%2Flcgx1oVvPlO%2BVt35qTPnM2hIquldXcmhh%2BEK1VpgUWp6HyXSGxmIPu2NC6SHbAqkjG97FqlBSF88vssOdG8EdDYu4OZlWge3P%2B61ToXubglKD7YU2EZW4tEupsqm0Ttk1qk5yIxO72NRKv7CvqO%2Ftmo6ZhRq8zRQUBteqZdLzjFqp7mTMxR5f1knBLkmJQP5vGMbggEy3jgyLzG&X-Amz-Signature=5a6630c725e0219393e554febaf31ecbd36dd9e830568050f981a18f671f8285&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
