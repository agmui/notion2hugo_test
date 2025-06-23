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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLXA3V4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDZz6fvjyT84MMxjQ8iTkF%2F1277zYPPG7aKU2aNAlReEwIhANxQ%2Fiu05RWse6ldcQ6lh%2FPH4lzFbuLc4q6LocBGsBxtKv8DCB0QABoMNjM3NDIzMTgzODA1Igw%2BWNhOj2hseTvN4UMq3AMkGqg%2ByOfZDAbGcvHuEDzgWX3pg%2BqZbJYmU6I4Y0IGzaFeY3qC5XDOsY2N3u3W8Ede3DmIHCg2zzt1DV%2Bv6yUEFNp60XgjDZcLp7MEkj0dpjLX6%2F6Zi0CZ%2B2%2B7O%2F0rbozR%2Fap52deadGAsA72HSKM5GLJxK3dEMzqANOD97E9zq9fxD3V5LVg2m1YNU0Ws8r%2B1IEld5aW7hzHeTFmpUPg%2BtKv7Kh7qovQT0COKAtTJ%2FDD41aBAnqbCBxELbLWDuPDujTTxbg5CfAHhYayL7XBP59OmjfCwlggwVMhrgwuvmXoDlE8D%2BIN7unkjFz%2BetBH0eLh5SMhexC4wtkKP7d7B1a%2FA94ZL%2B3hz0SUWBURUr%2F776RJzglRfqwbGs%2FktDhbJzk69bdEsUxCNYEkxrN4LmaDTP03Veo1tAwxrOusfxySWUhjnKa7%2B%2BkPNy3k7dK%2FCnQGgGWR%2FspAAg9HxBUtmF51RMtqQOcrvouT8X0uHpqdnieMkZxSqjrotuO%2BiqP0zAqST1UembK4sKxBSdiF11UmJNfuob97rzhbCH%2BStxJfICDa5GA4uOZnY8kD%2BaRtNvQgmRTeoHhpWwCukP0aMAMkgs%2FjYA78C1s5foYSrhh8r0db%2F9AxiXLICZDC77ebCBjqkARk0UMhgzf2NO6JJgjBl9IziA9%2BNazK429EcFpC82AUsJNi9MD2jbayJ7c8e0HU%2FLx33HrCAHv9cDa3u2udX6rrf08YZJO0pBeaaTw68oFIzgs5ovdqRfuMSLDkQHV8RF6CJD9nlZ7FX5k5ocjd0aMWsGEH33BhVVXAh0qZ5VbZP3vKw2x902GFDi9kaXyU0PRaHfqtuT6%2BfWx4ptJP6qEX6J6ky&X-Amz-Signature=184eb60f55a9c02f60283b8298da2d16b041885f5e9c4af8c3810e9eaa3221bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
