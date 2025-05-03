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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOPR3H24%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDOWk8X9rFEkIR%2BRbbk8s0UzxuYugogEYBznmSwfhPBEwIhALyqwtonrh0rfwamTYZOBYwyhJIHLsuT63NBIi4IXYokKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3jtMX%2BuAwCkklGNcq3ANIdEDGtDt0kR2GXw2sDVQDOiZVKp%2BMmFp%2BXzDDwQOtEvIfBRl8o6YZC5xW6y5bMOyoyTgmPwesa4X1U54wCTHJHWdS1bU4H6lRM3AjvRKhSg8gVLKRs8l4H7odQleieidAOGgyA6n3nGGxU6PmMpUg9kXRxJBIK3NKoJGidz1dFZLcQCU1%2FNMgyo3ELMc9UcWHTCie7ug1KFq%2BrxvuyJur22wsdfky4mLBJp%2F7Dan6mw6ZFnHrLxYtO6EmJWj67DwhfUGzl%2BeuaGw2NyhaxVlcUoWVZqMJ9FCVpqJeu34z5LrAIyC96AVpVR6qG5BRRz78ZOWnYi7p%2FDWPxuroQ4oS8aBZlPBY2fyk2j9ZypjKVIfep8r%2B3umz9EZHTtJuXPjaRRngMbFHb9o9q0sODt66DcWMOfcJ5hDqk1y9YN4nO0%2BRJ9R1OzUwWjzsq1lQ9Upyjv%2FR32LfbpcZtmaC1MZejrleTX7g5KY%2F1tt%2BmA%2B4gzsEsqu8sLQr2RkwJEjrLi8izh3vdFcnyjaI3Re5aswUdfoowHFwkwgWku5iIS6nUX%2B399iHh%2BYE8JfkDtrRmhr843q1fY7Zt2R93QMw3wUfcmCB9VHY%2FtY%2B9Ddc32eVNpV%2FB8bom2ZSYE4EZzCnv9XABjqkAe%2BwMvfS4jLJKMrBqxjR6InrY3Masl%2FABEYsYDN8aRHBeWMLcUv9XDuIq7TUj3jCgy8Xbj41pCSkGY8B1RxBsxYFpXuUr080EJ1dFVVjAHpzbfEFsV2w%2BqpTn26WUdohypbhQ7mBvOg9EtFpMQmLEPFouz%2B2lbpcxGY88%2FYN8UNEiyVFjptHh9ceGSXOlM3uDkKY9mdYoth%2BAuuH5Hp9NJS3mjNq&X-Amz-Signature=afa6aaa925d54beb36c1dc07325ce2000682fd8401c2aaa45d40ab2bd449892e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
