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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJDNMWM%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUlJF7HmIxoKjoYXkCAKnXP2U902rAwpZPvYNYSI3uLAiACyEAQzL6icJRlR%2Bf3xt83%2FNWzYPjb56n2ITy8nunQ1Cr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMaindwdTjOP%2F%2BdYdzKtwD7f64tu2vvJIViMl%2F0L5bjwvny1tw5OFu9Rfurjk4HxUJvvLL40vIgJ56g9d4zm3heW9HLtvT4wGcUP0JZwodO7sPItQtDuM4QMECdBOsmQmC54APjaZw3QZzlaH0jNIkDNGxFp6YxGgp2gYpUc0ZjJ5q2pocWauAkVtbeUxhft9rALVfy18JLfyD06MzidviyLE5cCIeoIheyuRB%2FmsjTUszAypgqkOd%2B5FZAOgo4St88EQWOySZlH25wo4n8Gt32nMIIkkCsTI7b9DHRmM64k6fCvVYQ5nzUQpwVKgEblshHxRzELdupVFIrwtIORbJARSPJU5sat776fzRbfxTXgJ37EAsLgl3nIRgnxkdzfku1XggESv0U31hK5pqSXcHH09mHaXpDbZ4KRM6utzxBL6B50yIVWjpK2olluT%2BY86cArVMhfZ2GrWPM7VxPCyuti6zhpaRNn2QEIrItFBLV1WVnczg2fw0rnjKgVbSYFjqO2GNQO%2F2LWORC589SiUzxeE8hiVx4mzUWtea056esV6C7MuPjLB4BJQKp8fEdcCmIL%2FPWzXqdBYuIGm8Wv2avqecGJVd%2Bt2dxjLgHq72Xfw0iPtbhsiohsA%2B2n%2B9XlKxLXZ0dSdgbDjYzTIwy5fowAY6pgFCsXQFw6HEYPMI%2BrS%2BFWSwV7nUPyLdBH%2F6TTsqoqhG4FDMuMNxdhNDE82A4I1fAfNmextzwlEl%2FPyvtfC7yoptYZX6h%2BlB4FYmYUr3IM3MECBEbjdp7jGtiJdOj1kiiLoT2M8oQiJBqv4o6aCHFUphodp40O3euuPCZnliFwG1JBXu2NuLp59WjmkzPxPXK2Uz4%2FDWmJNlAWJ0%2B0Cw770foXPh8ysX&X-Amz-Signature=4ffda9b3af84d1292517f80cfbed6e97b9140536df4e71b8061f84ce2b1bd6eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
