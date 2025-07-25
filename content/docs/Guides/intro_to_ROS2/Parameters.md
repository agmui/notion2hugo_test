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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RAEDJC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDb0crSuTz9Gd67Ig%2BVByHW8xbBFF10ZPr%2Bf3RZvl3URgIhAOfMaJjC2vQ0Bp8l5gTVCLzIpLdu43XxoBEZJSJ8cDRcKv8DCEgQABoMNjM3NDIzMTgzODA1Igw67GqKFh%2FaeYsA2Zkq3AOz7b34BjLLZByokNAHZkXJESoiqlsNE80AQLQbBJYYpCDYdibLL2ZgR7Ti9tObht8N1j7dwSn5Z3BDvtatuG7S5PlboG6QNsF2UZHhj%2BD20gI5amB%2BUVONv3CN%2FGayr774vEJC1NlNsAll%2B9Kfb6am9z5et%2BhAA9PX3E8M5R7kAeXOCTRytJLucDsz1SeUrf2h%2Fiz8Cbz2XJR1pTjkYF%2B06r%2Fg2ngijTCXD8c2%2B8Lcb4S%2BnLlrGYGZ%2BELY5cZFCy8%2FySdD8%2BuFlKrkhVIJpY77fx8Y8gWH749Y0UQHrNk4aPaMNwuOrrNcZQ1InoAZRe7hxFsIvPGqlJqi9Q%2FMydU7EUclDVwuGW0huNrMI%2FdsnWilJNqKC%2F1hGL40gMCRjlPyRcgZNAOJ7Qb%2FQT8yAiZqkSDO%2FCn7C9R7O1PbY9Xxvq%2FU9Ff1N3eriQlRyAxq7%2FH7oMrG7ADfnX4oTs7o9t4X54%2FpimU4OVcknOYDSFZeiffdFi0%2BC%2BEw2aapFGtWDa86S6mR4DqGVcYXA0YCnq6MG6K%2BYvUfLkgurfKejJ3g751cXKgj%2FLYUJ7xuoAbg2I6to9tIesmIgvJ1j4laMTa2c6LHeCLuBCP1%2Flezex5tK9%2FumjqWIJOvc2gqPzCpvY7EBjqkAebYLP4JaM87az4YyIMgcImMCMUtVkDMV1EwBDdmj6YQxEPG6XOCYsJ6xxoBcpw8RSWHzFpeQ0tXkgCCQPjmNDoSEN9Uyf4EiGb8TX7p94XeNRzl%2FGPNJxptQCBBk%2BlCLKmSO4O4NKhJIddUnmc0dK5U41NvHgYHg7a9vXECerwMt6miZ2ccPwTc2tkmx0%2FQgaeMlFnRowmLbi5buI03gI6IBOVB&X-Amz-Signature=3a6f3cf09b4756122e2b39104f60554b61fed005c435a50b42b4baf2d51b31e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
