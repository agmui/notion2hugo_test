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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TANNGFL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx6rWIGy91Wvpks0mMueDt2hu3LfeeLRuUSIx4uVu20gIgM4JC3rONQ9dl5Yqj1Ob2Jw7lLL6c4ty5i8M9Tt9zdUUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyDkbV9fThtMwsKfSrcA8K%2Blt3UQR%2BXbhwrUu3Zs0mTuIvCKFFfzBlBb%2B9%2FRH012%2B0wVHvECqDLAQQHNGRM6EZQUWvum%2FykB5Oavq7KUR8BfbqMnREMZO5pusEvusmhrsiIKoUfEIDsbf7g4dwN3q%2FsvU%2FtRPRTMDET3MP%2BC51h9fvHm6EnvRdqXmmfkmYzEeX86%2ByzIVG6u7zjdVqpvw1AWzsEdH%2FlgDO8FYtPcxy91TVE29YLfjOxnIvvdhJgZhyUBoeRjbx5gAdsfWH1u43UZxrjCC7bJxRRqkwTzPT6Ybkwl4Oo2IAeVzTZMNA42n68mj4dYlehdQ3VImHa%2FJfbjR%2BWq7mCuvHSKKNaILDcbsuDy5ZIrjFD%2FpZm3qHrVVCy7%2F269YaC6pPYbcuaiw%2BSjwIaVk4ge0r1ZKAyHe97Oqu64Bxb4kvRJh9wZvnuMb2hvYzvl69fgM%2F7I4fA1a7Em9yB27iLhoZW%2BkploO%2BSvnw7fLmnPBbVEI2BO8Dc5KL%2Fk7tAsPLWtj%2BTnuTwOaJ9F7H4Ojoe9%2FB5jijccSsObYqR7qSozlCxSKzJPsG6wxn0ZSuIqY0Vew%2BusuRV3pLlxax3b0ThLqRi2Vpm0TxbDpjVMN1G1heccebOFPPlryprDCI1oY30CsM5MIKEtsMGOqUBuWjHJ2pvM6RfhZumUL4SfOxfaik2VQZpH4iJMziRXDaDa11YIaYBHtfjf4IdcmzQYCzbkxHCk%2FDtm78TkLSD2oze4reQXWReEpl8z9fo7rbTAFi9tf4im8o5ktZGiP3%2FgL%2FQAPsdSZ0E%2BpHzfparHtnOdRCOmvXAfrkwjAjaHKRmaRFWYcjwAJIH3YrXEeFxK3se5FXBGvinbvTMdeBd55AXHWRh&X-Amz-Signature=0b9acba1e33820573624f7e65976be25b9c09df6b647586c43605c9dad45bea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
