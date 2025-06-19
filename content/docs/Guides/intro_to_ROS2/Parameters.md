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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPDUCOH4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1PJbqxcZ0%2BNdGZ4XEAf1OZVtKz2rArUz0SHt7Z1oZdQIhAPY8HS3gp0pDHJUQMg%2BsKBo%2BoqptWXnjVON8jZ2b%2B7V7KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJHNHlgcDF2m6G9Twq3AOJdEJeyG6UZNyNGdH6rOcYhxZx%2Fx4tqwHNpnt5aqfFEYDLblE1fAunNck94ZhNSNllViwNimVHW12TGDKEdT2nQIugbFeRXYdxKFXTsEI8jwEsiefdLHDHXOujaXwD7U1KsS0i9Az7rXfcoyVmBky5wtahfM2yDIynXfGCcpEbiSBio6gDO3F5BXlnZZITlwSO8h3OuHw1gpdzoKJCpPmZ5Lre78OzHrrs5Qk6QVN%2BN56zjwQrGy%2FoQtzCQ798yZvsmzJnjAzmgJJnZCG6Fd4UK4d7WQTWFjZRLpjQ5GhJOpItjXli2CNy1LGFWQzglPuf%2BCXyzIL8A08TWz0NKs4NQax3KU7bpAnM2ElT0tSIBRn1j239Sc1xFIbPlaeABUyoJFg%2BKWc925ze0WK7b8A8cikMjJ9zqu8ez79a4o4zlSN9v1igNdQqxnkFcZZgqz57MtWBdrZRKdq%2BKmp%2BZOhJmxMEAqq19t%2FaELQLYL%2BZRHUoe4V3Oj6ZQGBGmZYDDLbSoyVeR%2BReWphzLcm74XwFMuYIZokqJjPgMoheg7NAzaqzVPHSg89G7TQOAG76HlYIslexWTAFaNB%2BlflCZ1pRqeHZlxLvLkOEVH%2BTRR1o%2FFQ9jI5PDr8h1wmeLjC4ttHCBjqkAdehYAZv0mq%2B00MNIgCDngRoJXz%2FZ%2FZS1VUXNNr4iV8LD%2F5Jb7nsrK%2FOaTVFRPydx%2BDYVg2f0AbAKMR5Q7j1lgZsb6p88OEal%2FOnVK03EV1BSUX%2FwgWB8K8iEOVlS69S2EoQ84NqeHbLnhtoMPrW0XFdf%2BDoYwjmawJpIian0d2Q1vFgHHNrNSS650err%2B%2B9P50kVkEacB5GwiIbh9w4HeToSsbl&X-Amz-Signature=7df9007a493c59ee75e6057967a2a9ae80c9793bb6243e460a176bc6173b88b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
