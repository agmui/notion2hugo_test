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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBBETCZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0VAbcic%2FCJPe0K3i6Y20gHJrESNAUf3VVCrQqAoR0kAIhAJd0sEArzYU1AJS0tw%2Bx8k35gsQnvVMdWMGGTOBbT0yGKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPxMK6hLriZNJQ7lcq3ANFcV88bXGLPQvQ7LSNKPW64F4LKuM4lp8KIp8SmRFhE20bCotbFXmu97QyDBxBoTDI6rjwiOM730WZa%2BhqBtH%2FtSbspeeNacG5KZtrFm0b5pVLaHoO0TxMUHtVAiuqQwO7Ah407gpPu1tzilcLw3o7cQScO%2By18dUsJCZbkwiDTN1jXS1qAnx7riSZp4mcGOvywwHYH4eyA5aFyKBxD1ay0DCSTaSd2%2FEq00ENEDUFnRlLsj664RZcGcx7kTu3adnWUskKqjHc35q304mUJFV5c2qXEMy3L5SAZTwNDN8kqY9tYL4qYY0bdYEVO7iaf4pZMjCS7DY0VVCCIO2MirJBecwyBaG0H%2BI6KSMDeEPkZjfT2bvZ8huzQzH26ugd6%2Fu%2B1R%2BlcbA2%2FGvmvuJzZvdsD7I32YWTUvE2ngM%2BzTcXu8QWyIfZzm3%2BTCeEy%2F4HviENL%2BXugr2x9x1%2FcSafsEbCYQq7opripl2DnFH3zQebcwu74Zoyi9sytXA4BU24ewcwpD%2Fce%2BsyAy%2BVxXv2BA9TyNhW%2FjxVo6oJFoGJbKoh5nto1LRoGwO3kDCPuOSkxOES%2FqOFaiHVVPQuANtF%2FzhxPOOxp5m%2B%2Bg%2F%2B7%2FLMzDQ%2B6lHPkm%2FE9ksci0dUVTCck%2FfDBjqkAR1A3IjANTCHM%2FwZPWY0qwcQZsuNFpaN1nejUw0e4XHnSLluRvOKk%2FwksK1TXbBsgj4nt8AmOHHd4EC3tp%2Bb%2BV29X2JxlGgZ%2BJGh8Nvvb1p6yXGQ5nc%2FAZGLL3u8joourhh6XNSqpBZv6%2FUsdVi5jyfGx79ugD6bOkg%2BRukz1IekNkLFbek6XjEwzJr45OonDlgyRvAGSy4TwQKPT0euytGyYxcM&X-Amz-Signature=cc1019c0be6fae6bf13e2fc497244a72b62a99ec6fa1607c72b72da991953875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
