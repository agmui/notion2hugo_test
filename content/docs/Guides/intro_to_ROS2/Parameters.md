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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q7EPQCZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDbCJ2IxpZJa8EHfYKv6EAF5l71IcKKasvb0rj3kR3iGAiEAyYWFa8IWhk2fXAxMaBkAwp3E0ORXUa5oZ%2FSjtSt9PHcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGc4cqBo3uxYIFe8jircA%2FojLUqnv2u%2FZ9lSOJUzrbqQYls6ov6XAiggZ7152m%2BlEcApoqznJ737yrU924qcZyGcruna3cykhwUa1WeZFUroDIpP5NQehqthbQHZv2KnlskeDhn60LoahEiydILb%2BjM%2FiPlQp6cEovyZgbweckr7Fm3zQcT%2FAiq4Dpat876uuC3qQbbW7zCEHX2vlucT2TZBPolKykTBxpCuXPckHHLBRZLGAJPR1rpL%2Bkn1BS4YvRlnODfbxL1jY%2Fj9I9C7o2%2FawBtCZaR1fK9uO6BZxU6pnaOKBQKAVARSXoz8U1QEwGoyjsqbaseHBhg3j3GsgWhq16qrN%2F1vubMwT29orQcV0yk7RwQhzKJIEBlTsieqpWEiJOUsFmGR70R8VDLTDoZpLDf4ypp%2BKRWnFknhhDqdQm5gs7UH35peXtJpNlGhqWW5sDeLAdTOv2XsnjcwOtfYJ0swTkunIrHI940s09k4POC%2FfoutnjF26oDWeFt4lRlEVwEXyGYSekcINzNRqauyYAqVe2OQmtCohycpYZd9MYhO3pXTz1g358D2X04sSjR8mVq1i4YZxAG2%2BS%2B73gg6KvpAzJwePf67uLeHsZulwVoZWduoTkE%2BOeALedpXuwI72dGgKD%2FGQ0JBMJKiuMIGOqUBLFGQtlj00DzO2AgcC2bvVGS77KeZZdTlWNMHXFZXwGrMiMo9HpVJ9O6iLRPzqyvwI1HbO7jhX0HMqLinTam3a0BOGc9k9cqfb35%2B2HkVQfvV%2BH7A4yrEpdQyQJuiryIXb70M6hgCog1EwDEbou9O9%2BIS6eDLSN10VdX02BJ3liw3tnOIEZaZcOGthLbN06BXJFSHuP43KMnIItKHcW5lTa9hliAQ&X-Amz-Signature=4dfe9e2ccb4d26a39cb69b81e161f925757f08d1511c64fa63e542d2ede1b7a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
