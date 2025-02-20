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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56VDKRG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9N7xBCkg7k1fI1dw6kHxCC8aLV65PSZ5XmcOHhbIhIAiAjziz1DBQL%2BTHZkRNBejyqL0tr4d1WpSrXEsc6e6tHliqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJY6%2FkIfld5rCsrPBKtwDI9XQqe24OzFpqh2szGzST0ZZgthe3Jyy5wbFRsdynD4KQn79wMk5g%2F%2BZp%2FfeAy1oZISreK0tRzXq%2By%2FkUm%2FkAzt8GPTucTdOekbwh4CdytnIUTzrFFCUrYCuWLJJp9WDhkddOamCWvBvAeqozqFPdUGkgwQI18XbOXgkOjrq9jOoXIdtyO9drEm0WGzhiwktmYLMsNWW09kEmIJZJ8B2PAHL0comSsQHz%2FYy8kInF8Lnk0BkjhMYJk7zJMRn3Li4asP9DD2Ve%2Fw%2B0i4iNDN3xPdMvZIuYRUJU5Q947TbnphnOhlWIJ%2FrBEONCitFvDlbNe9g19Iwl%2FYeYx75CHYrVTK2VkkMsc6cSQShq9DKwXvtz9U4pl39tgGBUP2vEGkjSa5a85cEBDC3bV3EL2C%2BDo8t5fRaC79Dcfv%2FlnCu6NAxhjCWKcspBjLKGHrap8v6W80B0BzOr7COWJrox7yFNgRtQYMbMS1O6nlTmYGdaQ1ZJnmr7s%2B5KFPsLQoR26tICBGiDXYsxvaDRe387v%2BoELT9GkRU1xF0sdZpLaUUB8cx%2BsFjDsks0SSO%2FXQuF90vbnmmhk2A3bhsVQTn32USlS5yEyL3BjHvQFuKwpcij0nZ1nTG0UZaL4pGjUsw%2BN%2FavQY6pgHdjX%2Fiihacy7uiChCgsxHDiT7feqHjoVUa%2Fbscp1rbsBrgnBJrtB2ije0awVkJvRZNgFl3wpIsNUr8i77kpJ68OI0uD5T0TVG%2BIPSGxvQHKQSAEOP%2B5JpQ4nlnffyVu9luQ9KdawkJo5tnXkmHan2hMEBGkR3aEoqnbEnr6yFsJbABWXUmLt1sOhK%2F5N28gM%2BrqGKY6lrwfxxCoplQR2EegNS8T16I&X-Amz-Signature=80f55cd2a4efca21fa9af0ddf79c78c914d5c847eb9fe4762c83ab6e998c31c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
