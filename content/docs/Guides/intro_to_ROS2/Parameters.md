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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPKE3DH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBf4Y07eqY%2BduhjcX2pfY%2B6HiAwI6YDd%2BDWPW6wUvccEAiB%2FyX%2Fcoq%2BxtvA0Q9gar%2BG8iVt2gio22A6sociLPaiuaCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMVgl7%2FJ0NBzy8a0WHKtwD56HX7VtPPEg%2Fk5vcBOhMYKkOEs4BtT9mR4%2B%2FnNYjnPLJi%2FFYUmuy7ch6EMWq%2Fc2nwD%2Br78aw6LtsqgycnoRi7OpogkRazuX6L1QMvo%2Fuykmv126zuN65sPeeZYbJbeXr%2F4gzCrA8DDL%2BBX4DmfwHHftPz6wT6UQoPmU%2Bg%2BV5xwRZAYvi5msOT6u8aAzeoGA2MspkGla7orqxV%2Bog92Kn0l%2BVAoYp9AhLIdvwuT3z6b%2FXzV3EYIas9YxUI5YbGJCoNi1aJdOqG4C2bbiibJSOxBic934h0h%2FFZJFJNwpOlPlcpxLD1fjM8L77k8qN%2BFRDifO%2BvxUe6RIKtUROvT8e3b6VifGUUBiaNNZSZSUqHAAzJt0oQ0MdUB2JkhO1CygnDQPlcurlxtFcRM0vPt9VlDiI7UT%2BP8%2FFy2mPovOV7FgjoWq9CP%2BlbUl7ApofD8to5q5fdGCLrmvkez06p2ASNpKInytLaWkwi8cn%2BiKBrbpo9SoDEGfYuUR99E%2Fhen0hlc%2FLDqVLHrU3wlg%2F4ze%2BD%2FGgN0gErt8W2zyUuKghSirEP8cULjqNJtpRnHYxztTM2DdZ5hb5M5nc9UIkSlSLOUh3TNa13fv2CFQDLb7Ib7yiNM7CJTpEswAEaaowjrG%2FvwY6pgGta1sUaubPa3m1%2Bs9KYrdPXzzj4LelirVLP4SILARLvnscK6BzmNFMQpxlc2LSgmEO3wVklWPvRea2AtnEC3kCHEX8yIylesc8FSwbHqhtryjlcE6%2FxlETzsv08G%2Ff1srTxreMjkTiTEF2ykMGs1oAqitWQTmE082DMVDpRAnRQbBCs7ttz0cLQ0KINAClHL5TrI%2BsZzmyaIQCALWXP5dBKwp8wfvT&X-Amz-Signature=33ce5d7393bc29fc2d17c4e1487e5081cf2b3ab358284853dddd944c283d5065&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
