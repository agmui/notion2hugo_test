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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKTL2KB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC5niqcfYSQ%2BXqX24oeChdWJfRLBcDMfjC9EpSqJAAxiwIgAmCJXByraAkVJB3srAxw%2BslPwsmGq8smlp9e4kAuZ5Uq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO2rl%2BSkvAaOTf%2BUkircA21f%2BhLn9PiKGuflcEJnByBpnyfor2Saj5AUBh%2FjlHRzas%2ByeeOac6uyD8gGM3ZStUQ1ArCH0%2Bv5SytrGMzReeEbWufJfXKXAELZ6JhZKD88X%2FvkTFUcr35iv7GDvrGy3O%2FS6Z5YebdIBxNc2bFpQcAXhbguYfHqyUSMqfLKdvxQtAEcrsZD1j71%2B0PLFLBJ1a7soXpN1pjtBJ80223Ykir7Qs5r7ecdqc9DBSX8AIp2T2bpayMKTkLZBPJZ2rU3Xe5%2Bpu8MJeMXlg%2BtjGfWDNaaXr%2BNFxvcuU%2BY%2Bb3QT8HDAyMDfVuyP6qo2mG%2FYWEOcDjW2drwubenKtoLvVtSTMR1zb1%2BshdCQ8PQnAUvQH4yA2HKFbOaWUjwbk38S343lS5z%2F5ZaqqkM8Ee2ug4ov%2Fn%2FYBt9YCJUUWvMM5pisE%2BgHTddw5j3otbxGDrdrYeTdoSVk%2BRd6gJoyg8w5fxLrPmrWnSEI3Z5qv8UdCkXmbnUXRy%2F2fiFBTyyb8uN50cTdOxBKnUvVMVzuuq5VM9OMpqW5V9QgNcRvZ%2FafkALbDMho8XaradVnnqGOUrj0JmKbEwEKg2Hy6Hyf2BQcx4GVsgnyk8pd%2FpXlDayryXE48UEm%2FyE2K%2FGeuVqfQNcMNTysr4GOqUBXX2Ntan8YlmK5vcZgIKpMBKQSpwm3fZ8hU%2Bh8r%2Bslu8xnvUFenqnZ5TukCaicAtNKLamxhhsEVwBZSRhXNEcRxzwsyjQ10HmA0rS6bKyZpTDGuegjoynniBcvcmQoX11qU05r6H5pgOdv12fV4rZ4MthBNMi4rYqTTbE1VysYmyvEa1Y%2BMEdjkVz9EPDwbwH0O9OJCW8soR98G8CSV7G%2BJgdY1Vr&X-Amz-Signature=2ce6a68f5932fdb415e1e9bfb443f67adfae7b14bbeb79b04873159698689da0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
