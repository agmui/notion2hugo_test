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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TUYG5UO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ6IPQRGTbQg99nWLqcEC7Gy1914S6huUYA6GS%2FeV4OAIhAJdcxfu7NIwlTgDEnkT7PbQ7AuF%2FXoHSBygUlIVtKW6FKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhxyjjbN9qipFqnDgq3AMUwQL2P6weEseat8hpOpJkKWlVr28%2B2TMPfh%2BP2TMMQH5hHE%2Ftb5z3MODdna5iF%2BFShJjhRldOMFQSL7hCi6Ip9grxzyHnPTWF8LJsWjho0HyBjeUf1OAPWkHtyeseHsqc%2Fs%2F8zudZgNo1KzezCvL2LF0wNRNGNLeYoUj01cW%2BcPUjSXJCJIRPSoV%2BwNuEuB38IqdtF0l%2BKvzZ9i9xiSBf6sFvo0YccXJTwPf8ON51qYn8dRor5n6iQ8jPnek%2F8DO25eON53PGGgQgRKK9rkYZldGCMzBapDTr1wb%2FqMjHIRWfhsqVu5gtuu1K2fPgVZhaTULTDH%2FoodmSuXBGZTqPIzDs1EpjPX1eLvEsukGx8PE1Tp3qo5NrkuQtC5J7yxv1FvITdsSlsXneykVQpo6%2BJmdWr4Bfz4lS9swxpMUOAInaF8nviyAtK9IP%2FJY0Ns595KINB0NatQAbGQuDjr5%2F4I7v%2F4qT5wikSu0oQ%2FwxYGP6sA3KWD6xH%2B4Y2ILgCC4Hu83Gj5TWTKrdParS3hTWrTFCPr0fLdtx86RY%2BP1j7uzxIusdBXIlGiRo5BVr%2Fs2w5GXPfJUZpcL2jUIXIeL2TM%2B4tjEwHajWxPCy9qzM2SkkgctS85Qt%2BceTtTD3uKXCBjqkAb4myeckJH9mtx4JlmQ%2Fv3KDGxV8RCuIn%2BYsyfB9ILzkUrbYtuxx41nZKk%2Bgs5SeqDuuI0897BD67Bm54EMwvw6feY5IGDgADCMQB%2Bm2vCAzxhsTjmwPqCOT0TA%2FZhEL8Mb%2FlDEequSkYTVBugKtoQdbTiQjtWMidTiQ1xByyWWWyUHTdbU5BeoKCwK%2FHKH0hLyoMXVmY34oRhXiiyOgS8pn4BFr&X-Amz-Signature=586bb198dbddd72aeb36eac74e9a1c6d1dad832e93dd0b0bd7c012d625a750d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
