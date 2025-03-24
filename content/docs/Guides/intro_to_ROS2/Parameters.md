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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4NT5DH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHZvU1X9lNWXprDpJZI78Tw7dNH072lGikVDdxXVJVnAiEA2YCi%2FH96kYvQZv6Fy%2BFvTzZ2oA%2F1%2BQPR3IFbaQyCWZYqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXOJbYvC8k%2BQpbhECrcA1baLuQDLzcCdQ9heBnSEdhRmDEY3sBEEHmWJTckaB7JeO5peHBTEGYpdiLiIkjo%2BRIwQGipSJMu%2FmW9NErqEk3vrSl%2BCODD2B2eKtBFVymUG1ldYcDSseknBm%2FlMG7EOMT6ooSIZ0XzKfnYev11bRnHpX8NNpd3KmAf1PmSHoy4HAh76kYp%2Bjxj5SNbBy%2F3GOeZD2Zu3jjEEGFDNukRYj15s8zAAeR%2BKwy8iGcpVCRYauNo%2B239lioRiQp%2BeGLk9k3anGbFuZCPZ0TPKfCw81TPd8p9hcAUO%2FqykrR7pxNT7ojRL2l5Hi12di9jx31FqXHe9i8Ujw5yuHSY4CCmLCCNk9%2BGuZ%2BA%2FBoKS7aqf6L4l8jILS%2BYmXnYMj2VtL0DReF7aODqoVNYZJaKiWiaZtlSb0DYXlSLJWQkvdOrjr97ZGjca8SjtX8Lo%2F7CkU62D%2FDjdyMZGvZiJxlA9N25vwCOICMs6n%2BYkZ1A9lHlOfXKHbQ61HbABIRdj%2BslLW5E%2Bnfhvq1vAH%2BSowB3wdr%2FUWBOHdlCKXxkwpN8pt9FU%2FrY8CC1pVVgqZfDTb0%2BqJM4HUHdi4iht%2FrPcGhY3h9t4i%2F65C7SOZF6zoKI9F%2FDWRgrzuYaac1z4i%2BrO1MlMO3ig78GOqUBz0dVVODCuNiVPz5uUcW0Qr6XYRBGs08z9Rris1Olrw9REvqFYIn7SmnSkGWqH3WCZsrnUSQX%2BdsGHG4moUnbGglJSSUPuUNkZH%2FCyShFRdCnDZG4gchf1KbmpQhaGVx8T4lJrEQ3CS68eBJl9FIM6iHtmXR0GEp7boPTu9FZwaI4I2PoP4z6LISAYJaG%2BArbcrAw44q5URKqYJp%2FNM5STGcrgXLF&X-Amz-Signature=20d1fd71a0af090e457f05b35f70da058630add5f2f57df473f58fc780d4b733&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
