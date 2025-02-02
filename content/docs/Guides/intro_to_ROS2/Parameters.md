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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DIFKD25%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKxc%2BOjlxBJcIhXiXeY2hOxSObqJq3sulf6VFjJXKVDwIhAOLHnQZFqrsykYsiUEwcblg48fkX9JU2vsCRwdJbIFVWKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGN52yyBYFqYBBh90q3AN%2Bp0A7GF%2BXKW%2Bvrgh3tHo30WbWGqfluCsosgG93nZP2%2FCmD5ThllsjhhcTzUkz52JIJ0LWk4KE6H6O3xqcu%2BXfcJtaYT2IisYAt3IzjSiCloP7RyjTpe9e%2BqOzRFtRtTwgpbzLmoDfeYWEFxI4dodsSeGtE0zGrq7Ru0hku5XDVjh%2BZQQX3no7DEOWHjP9AuIPGt5JFQdyGUc2TQ3GVMyQACnSkzwzJ%2F2P8sl1ZVTGDQe%2Bhk9ToUnSzdFXOS%2Bklvpw%2BvIb2bBZ1IoAFHoAxrLoRurPwAWOQhmMPQxlWc%2BUKNVALG3KUnSFQGd0fqsEj1drZdUo1Clf8oVyCCH1LUpFd2swaBKs0%2FVtehmPHvDOQbRoqNUMeDDzXcquvWrDLzgW%2FlwzwjvgNHKqNKB6%2FYLeAWenoiJW7kwze9Segb9%2FD5a29FwWDjjDCUK%2BbKURaJYg3C1I%2Bo2cjH56sjihTM7gkHtCzITy3ZWBxSrwUzykJPZ6v4nM90fguW25X1Fyjkynqm8qTOfQtXorFriWVfMLBckdAcudveW71T6wqDUORZNBSYbEpuOyJ0HFCbYelSfbbrAoif7DH5BqgfCeYmpyylwrErq%2BPAPu4WGoICT4puEwpY95GxULJIimqDD13f68BjqkAdwdBvC4QkOxkiRf66ecKeEbMeZ6izFAiED8dfrrN4cGKW%2FpH87R5AqRhalbRPa85xOanj17c1WdQAfgXUQMEbdeHzUeMk%2FyXVNHd%2BkdFKregjvWlVoZTdj%2FFlKYl13owWzdUWGqFWIIvBbRRAO9gT8dnePUOrDHwZ7pTKbtb90j0DgqmG60GGoSYQ%2BPgmJ3EeWiNsmp%2FMi7warI0kHV%2BmFda0dy&X-Amz-Signature=d49c459638e0e68e3c49c527686e89322831d37d5920edb0bd1111d9bf2c05e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
