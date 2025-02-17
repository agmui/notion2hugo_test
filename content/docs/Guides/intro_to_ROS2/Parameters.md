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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFPPZTXC%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDTPY6A1DWDoDF78yYRm4bBAFQgOqQxovdzXN1dw8ftSQIhAKwKcP0PaZSi6R%2FqJJWnW6e%2Bd%2BxsA6xI3YwLJSgGr%2Br2Kv8DCH4QABoMNjM3NDIzMTgzODA1IgyNI614a6EmxtDi%2FBgq3ANiMvpQ9G7yI43e%2FeUdvUmFIIvPdvuQ7Ec%2Bc%2F9fFSNb79EovGju3UP%2FN4EFL5Ob0kKv8vEL5cBg%2B8qv%2FRGOr1%2F%2FPvZnWVSaL3%2BtAmdRTuGpRYnU1Yl6CEivmiSuWL%2Fz3AIZJKJHe2vlNcnuuRkEQ8Wc4ZEu13hGu%2FblyxLHluTgzfpiipUr82324H7%2Fa8aEVrXiNOCnsfUJJ%2BP4hr5XAsPr9s%2Bq6wjtelrHKUXzi4YJnnZpOZ2dMlyF%2BMedXXs%2FP%2F9tQCzdz7OBh1iczKVypDgvtubF%2BantqpMRg3ueqqrTh3U54wYAfAnP1g8URDGsFMlVTijEp37O7q2SGauJ2ME0e%2FbjcBD3spHUGfF%2BkYvxeRoK4BjgNUL2ZQifxtbX99iZ%2BzqBUZeUEnKkiOFTK6V0%2Fl7Ua3dsjk30JkUWa9SwJzGqyZILtzJGJ1yicmNBKAZ34TGy6u%2Bf6QJqy6KYEI4EGE3kRhfgGBshpobZdaJGSG8YMqpHNpPFSUJQZ1DI4zFFtUoKPyAkehza40Dnw9b%2BoDFwgvNW3ueQbR%2Bmevn2w5%2FqhaTtoRg0msRFE7%2BEegQL6VulzQ14L8tmBmqG6rnjyKo%2FcUbaKsy2YR8R%2Fur03g8C9zE7KDDd6yzzwzDBys69BjqkATITS8q1E55%2BfLA%2FHDXYzmOAxq76iG7IdxNeVAz0skkmH8YMgvaTXPwG69uEYee6A8KX1l5BeoGVq5ljgwDDggcE89kgKoQ6VO2FA4mJnU%2BRPpNHQ33rmno%2BeH86vDGMiBxaYLUDXPfBMD9558IsRrH%2FIdQf%2BvgWpDqrhkX46Q88C8n%2FG7BI6yOtQgRCMQ0Cpqx3GpbsuOUtXh6VmOfQguX0wnBs&X-Amz-Signature=9975426ea8beaac93e7b98266c271cbc0a7809f1de18b40d483367207526357c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
