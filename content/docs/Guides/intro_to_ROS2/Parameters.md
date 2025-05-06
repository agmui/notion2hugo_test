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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX6SQYL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEwkGc24PtgfngRzYuNldJDGpvGA6IKFXr6xdtlxDGEQIgZje7SieWjKcpNZ7AZJRvGi8fhVBolkIllW6dnf7ppWQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDA1bGvl3nBwLvhw8oCrcA1IC0nWVMXW6laBMjB64UOb5MiQZDX84CIFEZcYmWG2Q4S1QU9bn%2BXDXn6e%2Be%2FV1Lxxei29KD6XrBSCw6QzagxkMFe%2F8HJCO1saF0CnddxOHsQ43p4jIp1BfTNk%2FPLVdQKX4ICwYZjFG4MxIKcg%2FNfXlv6pC922%2B0HzBL%2BJo%2B%2FVW28e0N%2B2fzMegqaXGj25ZMRwekKb74h0kZehyD2LZ38QC7FjrfJItYob0buJ8UaPU7ArHW7mZ6OI%2FMPNIxxTtJ9P%2BbIbzbmDY99CGDlxyxhTRjWckXJHyj3wn5ehQGJEistzQ8k3kRycNLoBvZwxlprEB1W6U5OXHmSxXO8arordUtELMnw36T9vET5hTvyOU%2BWqLVUpmxIlydv3vvFogIuWPFGTtV2L3OSSDJJpZvdNR5oEQekJRRHXVr9XwESOq4pGprNNe4kzBEyqUxGNTRyw%2FYkbmIjVTXmnmJM8vIZI6sm0H8Um4FoUDkhDf5MZKmGtdIbp8YVUg%2BamjF%2B31UFZxreKHINcw9UUFmfwxJ1LnTYfivk7Mudp73LIJPwoMTEQJZx1QfIzUsUSBCboSkqBaxrR%2B61pY7DJbIJlqwrsBm1i0b0s1vWxJ42V3HqlMCBmHWjfRWbW6SZBkMIKx5sAGOqUBtXWiAY5Fwa1ZjITEuS7nGdE9itiPmI8KUB%2BrJXLApKBogwYquk1wHoQug0q0UTrnuNQafDZ3CfP4ee32%2BKTBFzuKh8A0Kek49uh%2FXd0rGR4MYcQg2kQ0%2F8qHGIOUoOhzXRfX5rghpdoRqLmjcRnPLfPWCfs8x7JGATT3C9RTHbj1M3DOOTWxGWihT%2Fj3q8QfcmyMwmHzEt1AIvDSCol%2B9ZlvU8MQ&X-Amz-Signature=af0cf2b81dba4e9054b47047d084842b8fe48b13b989d229dcfadc98e3218d94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
