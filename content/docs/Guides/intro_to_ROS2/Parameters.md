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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSISJE3X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCFmSUDq4oTSUw1PURkn4NFgVpEZ68COwDoBvRlTzjfZQIfaAsDch0LP0CWZfjCDfPGouaDOFndn3fvjGlj1VfYyyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBjtjPzsD16J5FE%2BwKtwDbEX0mFSM%2FEa6Q6hY0tjxlCDEIyIf%2FWzDeeaPMdooa4ltELf2lNtgP0qiEexr0t34%2FZhCOphyTMOqLZYBEmMcjmj%2FKhMykKNU9la6F626ak3ef4IKTs7HDgpHwvn1h%2BpFH2LuVM73PRB83nDR5NZ8INDwvJP6ALMyR5EAN2FV%2FGTIAFy3gQB2J%2BzlxTfaTDVSERv2dvgsSewqwi%2Brt1WfOXdN2yCJf87MghRSktePtdUXYTa0JZ14rSyuIDT88m%2BsvvJSX%2BqRIgz%2Bt749b9kuhzLYFt5j6NMXLRJh3QgSdVaerbJv%2B57stAI%2B9g2dv3w0XIvj4qvOoUjZP%2FBf7E3UNlqMsBxD5O1X5bSL5IP5FulR825Dt7iUcuusMop9mrhVjWMNdSK0Yy1fWoAx24Zj8BPhXNm%2Bm%2Fhb9oAE%2FfTXESasN3mYn1jgB39RVdOsuQHIwuMGHYJtWzSHunVXjDVrRv8sRJq%2FlGjWlB8n7UF%2B7n%2BAZrVVulKM0zj%2Fq53PHq2%2FiMQklJ3ANuXcq%2FD55tUsjXEVE97Swz34IhFsgtE91lO1XBIUMgn2SmrXPXmyFyXaCZ0XiYXxHmV%2BSOV3JFYlmFEorg3M5q2XCycnGXNOWhymoa704%2FyufO%2BwZr4wz5jixAY6pgHPiTQ6%2Fw0sjbGZaYee9uhqIqnVpD62iGsxmLTJgYKikFVduag8Jxexb9qw%2FDjA1FoWslx%2B2m3O9cYvL7bMFYPWFZAz%2B6OFzB%2BYj%2FEhSJshU2LGTDf7Fi9TYMKYbLBOuE%2B4b7w%2BpUUMLsHFCxCz%2BtcYvdwwxyJok%2BV4c4HcHX9MTkcSgvU5%2FZGJBhsu3687JVGF8OxEQVHUvpJzZDu9yVfZt815Pp4y&X-Amz-Signature=4819efbcf0ca0546d79abb956d2ebded52e75a798fc18f51bac5b3fff6a540f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
