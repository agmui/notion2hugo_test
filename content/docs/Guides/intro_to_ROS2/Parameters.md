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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BA2CXWO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd0hXpFV1qTCyiluZazBUUwCEPuGto1%2BKBY57%2FdAwS5AiA69tPUsdhKTkWMxKK4BH0i3l5f%2Bi04SGvqTL5S0qagcyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMynvdneM7XXe9eY7IKtwDnz%2B%2FqO%2Bvk16uB2dKef77TpcBUBRK7jRKTc%2FQJHYnHr8ISa5nFoyCLkZcGDmACkv8KOAf5VtqLv3BZqZ345%2BBDbTjCCS0tQzUFQ5Zbnq61miMJ76r9QiBCG58YL%2FdyeeBBSnbg0X%2BE5d%2FZaTI0rdvRcsXt%2BHbB0K2uXwMNlCN2fMLNwq11yG%2B84eFUajJrPO1dH6HHvKaTFQLqGDtliYyqAu%2FB74hPqKuKjylLpQNCz%2FwOVrSHlV2UYHcf4XykUmMe0UVBXbkkrTBikPuP%2BI5CobfcEElalvoEgdKMbpd91XgHN3FvUbL26S3KM71gGP7DzdkLsQBCHmaGlRo7E%2BNfhYrABO1n8ujbYImciD8hg6JGqPsjEXCpB6uVeDd8jILhCU7o3stTQkYAKNEB6egT4Z6itOt8z9bdq6TT8bl9et03oCyaXnypf%2FtfYjxI8p0flwzWrAMbjDyfI%2FPXUW18RD9zMVCn%2B4R8mOBLdhl17gJ6PQ6ScSSUdXrZFNeURbTXHT5lcvyjzTrg%2BfhIAdfhu2QYopjwVjWKRCx86v6cRwm5wglWv7dr6z3HCgcilc0NdMSDnfKb%2B8XUm4o26wUJpjIaeAwLJlvT6Npdqfz%2BOrmu3YM49bPG6asRUEwmtzcvgY6pgE8bqbpJPhPsnrdGKpgtlsqtHEY6jby%2FbdILvWTdhJqBt0LUeS7DwjmeGWifkwEF6uWNdXjI3L85JUIwD3fMXHokckHkg6sWNjjb9kELRONgNB9E%2BapG4skiJbq%2FdSwyez6%2FXaly7LFxJf4fTF8WG6lUnOl%2F1g79DD2MygwD53ciSPX%2FE2O6lNIqxa07qrYDdA0G1eKou36XNfEaGJkYi3cLVfiEeda&X-Amz-Signature=d4104b6e53698df81b9c45eb8bbecd8276e541e8e64f8c0bc875b65604ff711a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
