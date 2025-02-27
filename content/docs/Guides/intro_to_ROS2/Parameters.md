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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IEC4FA%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIDd4F31vdSq6RpR%2FKlI3B2IPRl1TG%2B2wvHocgYVb6w4nAiBSLllYVgjSKwmpOvLGnfuOx%2Fn%2BflckWSZNufBua4BdBSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMNQMfo%2Bc3WpsQuPXSKtwDtya1utruNe5AbVgpdnPuciwzGr8rAXUTGfvTwZnEATLJZlYUhdpsCOXLncNR%2BJt%2B%2F65OLP7wBKY1wFdEzyqSuXcBUtx19LNYE7xvd99QaHyT4NG2k5%2FppbCtmSzP7d0srcuK2uUCHSt8gQtOfJ6qGDjZAAFlDT9K9ok5FUskzfZK89igQyzN4E9K7ognafoP4VHHt%2BsRrxKYnmIC2J1EYETPYRuPPzXWe7qjOEnl%2FLwScDcyh87erU1znnmXme%2B1%2Fp7cyswvwdPAUr2FjjG%2FmBXfXZK85syN7c130sH26h%2F2au7LUcmkNR4LrCH0SpzjGwjF3QfvkaBcc2cWvGM6b4u5PR5BwT451YEn3crk8Us4GL0%2F6Q1ESM%2FF7SLf4efGN%2BT0iRyOdE6DAWbn4VGAEi2G2uEgTLwTIEvln9qWJL1HtZapBmyzDKsdtxE1VtsNJb5G1I4un0Lb3UW1JeyZnZZ1%2BAeXeI3yXRiM1J8LagxaGE1gAjC8R35w%2B4Wd9H72Q9ohhBOj8urnlONHXoqGR3woeTu%2BTwWbTQ%2FqgG5CBV1CXmNhtA0nauu0Nw%2FLs0V1d7KYEKiJMcNitAAO5Xot3Y3LOXpwLKLPhY7k7hjeTbDYg0IS4H6GFZ9UgmYw%2FsyBvgY6pgGPvv8ZMVQKbXzBXLt8eFiTIgGSqlRIMxderIjZH%2BrLd38jFWCnbVSjjEV0Kqh02ULt%2FrlkrUehMOetvMjXI58bfHFQ3%2BccZ3mI9EVZ7q1sgH5lVX%2BMSYLwv540e7eetJsBPfmYvgtIPxEr6B58b1mRVD1QF4g0Ha97Ux50A2%2BrLY40Z2ZmimJ7JPBylnwvdr9HVbA%2Baw9qwQqWxITbaHJX7POQCoDg&X-Amz-Signature=394cd7355d829c335c14fa21866f677e43e38f2b2c7dfd344e8a654dd643e720&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
