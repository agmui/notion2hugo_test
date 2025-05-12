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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644GJPAFS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBRbHg7%2FBlU5I%2FTbW%2BxbbjESRD6hyhROZI8pCK0G6rIvAiACW%2FbiGx5XjkODaqbNpZlrvynt0lGJTpBvYMZIZbBFrSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0VseWCn3zqyRufWKtwDUoSNkTlNTMMKSr6OubVPaHSVdgQrLnY3badVYbSrXhbekA8p7Cj0LhRLqimfiQuEYy9B6uP10l3A6%2BltSsssD62yDc8J1rq8622JxSvzx8cWsXlZWcKhU9sVGEpriFQ3UUbwOMeOko3dSbagFt%2FYQNiWPe26ooHbJU0XFSoYYwMcm8%2Fr%2F1%2BRue3F1EaRjHPWyKMbwTfkdvKZi2TFQF8f4ap36cmTot6JmqzCte8ALhYpyJ1iEkJ7okXQbPdtwHq9rHzY4M0uSkKMfwO25hDMD5sPrpiDWJ0XuDmtGNDOWTg3xGPCq28dMfVevnUiHp0bOwRJCv6FMS47IwXQ7TxKk224%2B%2Bijui2S2rKbVxWQ%2FzYSFLSYFL7yrN%2FYGMBG1xJ2kQw0wfhnC%2F5Sxjr7CcBMqgNxYHA1JHbuMSqwE%2Feu%2Fy4jkJNiaVu1vN7TitgsJKBIbmrahWDacvQ6O3bwrAGRv0d%2F%2BWe%2BnQlEB2rJTwHkG%2FDZwFgZuOfoYsVjE1TGnatyDbzl%2BWM3Gc1AD0eqNV5dDG4CoDKKKMQw0XtqPWVsWyRPWkT0M46EU65kqPjXpjsYZZYM8IeE2SDufp%2Fqzyfe6z2GH5xzHA5ocmZftZ4%2FZv6jdJ8wBRptyuQDQIwwk9CGwQY6pgGULneUB813Szq9EUnaz%2FDvWwzV2x6X65x66lxBSHkMlRoMe2spPS92uT6E4oBW%2FERrTHOaZU1zUXXhphV%2FGFS%2FuUgi9zI87zJyJmXYIl0tuHKerPsFuIPZhQjMP29u8%2BZDmMjeUsL%2BsNWKoKjbu81f8l17Czipra%2FvN6zpsL2S6Dp%2Bz9eRRXkQMHMeI%2FDpHYIo0SWz9%2BdWfbeE2MTdi7n9emCJdfRU&X-Amz-Signature=4a235f13f1f3dc187a42c96e5e90175709723854ba55355abc94676a02bd3ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
