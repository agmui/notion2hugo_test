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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCEQUUJI%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoBuGQCE93PrlyB1ZRJJ5UAv2SbtDb%2BWo7CbttwT3PcAiEAh0ugWYCkKqE7k7lG4p4BlUjqmTU%2F4SqfLHELzlw0oKEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSswQXx65clS%2Fn0circA%2BdHhkxpCCibLklO6C3o3YF1lkFI5l5zKCNsvkGxN2ZRxL90sRJpQr2svpKdP7HPvAr%2BL3uDO6iTqhjm1v4%2BrvTkUHLvCZEAaOSareePRpZ0J7%2B1%2FZP%2BfNpLQ9kXQZS%2FnvvYA1FvZjjOBRR2Gvf3YQKsSEVPnIBcSi8Uzy7sci2J9QHrZCE6Pl7ce2Q%2FO1dTVaE4EuJZc3yEXD6S0xcreQXbhq9kHNnAqVG7eAezLKGu3zIP4RF51ysynrRE%2FFsAiRnw5cYmo6%2BLwOT0XdXQbDh7m%2Bw9Ll5pIgKZnIZj8IJMyJSwSRuhS%2Bn6vmxWLgwVsH4hglg9iNqa6NA0Dd2vEH%2F8QxSx4lQtc%2BemCVNgaBGAyC4Ar7PsP5RedG5Y%2B%2FbbnuU1uVg5vy%2B9RwiiIUHs9cG%2Bu25L8q2XlZL%2FAuyx%2FMo2DpcYWZbDMblJ0PDtnU9p7VtLdQIITixJf9XOfEV2%2FlS27Q6dLXLo87IGRqJxyn%2FR5rzhWYTQ6UCh0LF6g65dk3OyFXuB4zY0IgRlSnX%2BHqqlUWdQ%2BXzGtDxhsHTroqmfR59zpgXW8veQEbWZYbLGuRUMIf1srUmBtNVEIqnCDXxa6TXw73pZiP3ms7oNkkq%2FALwxZs8mHomN63IHMP6ck8IGOqUBjL%2F62pTz3YwSYcA3iXT2P3dJOMAWVa5InYQQIiR5VUjr6alZ90wmpzi%2Be%2BwIWsXBl2NXkmok6Mmufbyf05BO%2Bh6jbaW5LIsKCZmwlnpspDGfithI2f3fqZp0ynEWbDbF3zUKji%2BXKfQlxLKsivwEGvghsH2ApshR1eNdmUMJ%2FRY1jN7YbdWxfrF5%2FKcaagMIBjHV%2FQ6hVaR7e%2BN%2FwNlaWRz2SsGi&X-Amz-Signature=999d69304c02f435a9db594a4626e474441d5aa1d7029acc7b4205950a8f86b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
