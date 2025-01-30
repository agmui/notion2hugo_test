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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEI6KPK3%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeKMT9yFbWtKpnOMKfMr5Dii2aVwEElwWnAUtIZKCILgIhANiG9HMX6VNPXwB50mgKUZEvBQOgiO%2FfoJYGdgsVSzUvKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw32gGePss%2Fc0feoQq3AOuLbJcOMCGmKchTTUujP4kHOXlSEHtP%2FXKua3ug5x8M7dwUrpfPwkTl%2BeLvtyZfUONB5Hj5TixTZL40S3A3eIOz%2Fsd3160s5ISC%2FxUiu1s%2FiOTC3UcJxjkfC0Vrp8xmVV5S2l00oJWCKTze2V7CXU5YXmqHxErzSSha5rlkUzY%2BHsB1cY%2FhSv5IrZTFTCYZzgLG8LoHDwNnwHafrdKpyehVX95eVNoY%2BnWjSdokTBvNnlSSj46v5Ak3Y20hVdYMomTN7arETrwQQytqN9BIVUKtAGGkQ2q%2FTqfp%2BVQaQybh2UzMjWifdDD4drHxCJs63WMCpBNOnFYjxM7WNp4OC7LHLXimZH77wO54NElxwpVQer4I6c30nKhnF7O006HFf2FyUQRwnbr8pxKCQqyWE4spn3aXWUDhq6M%2Fa2ecDn0qUR0Nr%2BCFlAttqqoiFUVWfYLpwSJNdPV3T1CcmdDqcEED79LtSIxkfWHoqG0VTjGgeFeICHrQsufWLdqYAXCkkeAtzclfatYyKLygSJ9DyWLYFi58F3vQ8zMjgvubvywyYHMagPnL4vKWMWyT4ndKlFH4g75uRtROPyXxzw2nbo8cKeJgbUA4Kd32ijUP%2F%2BkVOavbdSAQno4mH%2BEADCBxe28BjqkAdS5WdHNw48htcoj2pGszRbDEneR4Ujr07Ww3x8MwalYUR%2FMoKqPzWZx2Gqb9O8JCiWXeG2fxRy2%2BZwrhfMX2SyUcXPMyZPDsNTzeSZorBhSL25tiLk0wHsPWdgM%2FKQclrb354qDFiz7yTPcy%2FX2mQq1QfDNhjnxl9phmSJtqlSwXui17zW7ZI7vp1SIUpm70Nwqx5zvEpRwlBV2rkx05vQ6Nesk&X-Amz-Signature=c045d3dc1278415bc6933d9ddd2eaa0d47edcd2d28ec86de1b342e07bfbbf00c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
