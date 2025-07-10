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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJEIYBV6%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhq8K54vD5yA8VkI9GLZLK8p2Oq0jxMPCj2FDrO4PGwAiB6EVfvv6CwbQbwgSqi8kirj%2BoeX3bdRAjsLUNi86uGlyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMopAr6AUYsgCTrocwKtwD%2FoP7C9s%2BT%2FZIkwjRNGf%2BTLsQrd1sPctQQQBsH4%2Bmshd9XqCxpnS8pn2P12gh6S%2Bg4I0cn%2BF8OW4Nn9IYOBkEA%2BGWeqYZaHMl8rBs9qQnXqTq4UzbhfnOMEJq97FAwBBDXpoDGxtUXmp7%2BTxkjDR%2FjNcSS5AwL5sbgsu7LCSOpGfT7yLkoKfUL6T6eaDRIdK9fLWNDSheZ6jAIoGWKlnrUbRqIwGZZRJlxoryMG6b5k98KbJF1ikxBd4MEhHAyJrFObNqOfnweF1Tqo3Y%2FAhrq4vxHYQ8RB1h7at%2FZ28CCBDsomas7z7LV7Gp8hDDrH8cFSOtFWVlP1mDmmeSu3l1x8AiK8OQwdwwcEZRx%2F8IBTgB5Rt5cP%2FNifVKMQm0bsfnVqaMCUYS3ujn4Il9fb9xTBnNprmtmMrzIYB4FkfFyTD0UlwZGQ860He4sxQEUEdj0RmNhhcD2s7m%2FIo%2BC5LkUQlLBtPI1B%2BAtbk8j2apR0Is5FZ%2FjIRgsLunjhW67b%2BNLPP75Qu0yT5w76zWKh6%2BslXJavStihpvoULRMCN7PYHuk6eyl%2F47dJaP0sW7af7oHzYmlZFeiyWTFc8aAxZlsvxpFttqMdWzmHqCoJARqkGJOOIKsyiNmPH8A4YwgNC%2FwwY6pgHwPJXrBqnWbm%2FQuiZm1sm5vrrNk3ablbXRTOrOypd1oEtyiZbtTj15MH5ZZ%2F2RAXVccqKsbLE%2BEu5szA1inL9tURKdlz10E%2BRlsucyKz3I03aoV%2BHtnExo2KYVVGd25oWgV8qajqqoeJqgncc7KnIP4EbWM%2BfEAc9kfS4lmmaIiL8B0uC%2BvscA2rhp%2FrF%2BVtw%2FdHSbsaPRsdTDCUMmsRxJnniSHjpA&X-Amz-Signature=610bc6ea47854af2af80bb0dd958f482f62ab0ee086d077130b24b698acca8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
