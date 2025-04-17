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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GMQLD56%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiy4KaCvtQtah0t3OVK%2F6BWPw8sqpIq%2BK2Q0tKG6TRjAiASYFBBuPRxuLEyaQQGC1%2FztFf7Jyq9rWeAzxFdp1hw%2Bir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMwzzSDX2lpMp6oU09KtwDmo9brXSzkfyn%2Fn2bDAoVjOjW60EITRqcO6sLak3bmTma0dGRWFXs5swn1YCHy2W0Zi6Q1OwQ2sRGC9RUT0OBZWBPscHNkkiK4Mg3veC%2BGo4t9J9oJAaRP7nlsbUX4Sv3TU1nU5GkOP1qQPSpyUJguj%2BEaRXoMG%2F8%2F2ovIGWwqYujnDnbFawFGPBxCCw5lLuSdopPPZr1c2Q3YXyudd3ECYqcKtGboc0gdHpiLOICJmaco4gGviIy5UPKraBCoZgXXGdzirDvB1btKVsIHXiOMCIR9yOiPg8oGR3xk1xGhFzpa4SjPk7wScJBlYI5SiGPxcWbD0wEYvj8dhzwmtImi1S1w9lYQi0sN%2B%2FJSsQwA5Gq7b7aKEx7v2Gjlj%2F2L2ZFD6PUzEQhEyr3JxnRfZfoP1Wz0pw2iZU3aAnNSNTW4tG6ltiRIwOVB7ORt6N9Ntyj6oJxs7xIs9aZnhOO2MDgCJZuqitFfjqFV90z5kcLdteqO162taxspGZcTSJ4FlCJqseKdRJU3TdhaU%2F8jOBJv5uMrlBwRM6eM%2FV2%2B17IDSxSkcb%2FKXG68CtQlfJqcc18RKaBi31axTgbo6LhgVy4pcL8Sl90O8yTIyb4CQoLLD9nzz74CHU9vGZHuf4wpciCwAY6pgEdTn2jFcU%2FtmaTszuiZC%2FT77f%2Fnt4cpqml2NHoCnFnabL69V0tkLjaTss1kOMbbRGxJ70VQrlc89AOGFcciPw%2F9AyFkXODr3dnHRIWRMhwnXu9RqG1%2Ba%2BSPZpEkMH%2BmLHvqwscqpV4JTv%2Fw5g%2F3ckBAJeGmDtWQjVwEWLkwnooS0Wl86%2B6T75SSfx7%2FvYJgJoHOM%2FMamxacQ4xwZCbT%2FfVX%2F4SlBFr&X-Amz-Signature=fb6e6918166f027bd725123d83f743623c62d77d9ce777ce195d4628ff7b6631&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
