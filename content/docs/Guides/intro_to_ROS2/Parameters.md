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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y25BG2ZC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD3v584HD%2FfxGXnbjKHTPHThR2co5F6QS0n1IcLaSxNlgIhANCSDHVMXVDJ1Y7%2FoZGBPkFboQzzffZJq%2Fh%2B9W1yqGSBKv8DCB4QABoMNjM3NDIzMTgzODA1IgyQ27E1rshiLwVaOXkq3APHyYj36heEgYmNWA7Tzf02LBAIxmX0rWLM8HcMLdQemWKcYTfC71YfQfMiIICBADGeqTB8yxca3%2BNplw4WYBtUgubENNWdrXPdUOyum5unkODqv1%2F614v1yb1r%2Box6kjUzNQAcWvPUqEuvQnkvVbZClWzl4I20xQd7kFo4Th%2FIzef3rJ%2BOTbIJRiMmll69%2BtSztwtDtvdFpFHz1IjShhp%2Fkzd021IClBxEZIZyRB8WjgSbyCiwWJq09cX9rCmpt%2Fzc%2BNtmWsuSnjsLxq3l3e7f8EKUo3hEY740BRbKtCUMWiEjscWQA5kwrWpbC23waLg3BhxzE7q0lJ%2FoPRqu7nRBLt%2FZVhTkUFXoXzZ8dWOuOWrX5eooAKrphHCdVKGq5lcRsioPQtiYef90xzClIhBX9%2FP26k2rl370%2BlfTWNYAX%2BX5iMzaWfEwz3NCn6Bx441wKM3UmfbaPzWJ9XNDzu2zo1BEIdMLkLmonTq1YdPTP4kyBVJGZnlHAhcHB95ifIohFEo7%2FJBl0e%2FSVjN3QFVKEbsooHBQUM79ckz%2BIKi6xkvzVtbmA4AYA1%2FvSXM4Dh5Oa5dAlKtgMKUOTFivNvDILgW6spevtoq7MPnR%2FTbr9rVSKcjX8pbD0zsuRzC2rN%2FABjqkAStnyPGSalsSV%2F5pDJwiSRwJv8ValKMG5BSRONZnE4OFf%2FBaGXbvrtvVK16%2BDu8feFuqurA2UUFpPihIA2mgP7YltVCjyTvPNFRINm6NQt2NVbL8%2F%2FE1FoXeaCfqZ0DGNVLgv%2Fis2uE7ikS48UNZRh9SGTjRnyz%2BnrJIE3kTJ8bwCL40a%2BxVr1P18X93O6KYCjsBKOJUh6z1x7OSIzOwFLz8paeD&X-Amz-Signature=90a5c94b4f69fa9226fd4157857911208a7143d43088b8fc5da498833e285282&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
