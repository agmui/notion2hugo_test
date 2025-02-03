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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKHKWKE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC0cEWCfF%2Bh96sh%2Bi609tlgQxEwz8VYGB6RkrHkuv0%2BCQIhANS3PzFwwEGZo5%2BpzFk4KZFDbaoHfl6aEI10%2FQa0DMX8Kv8DCBoQABoMNjM3NDIzMTgzODA1IgwDu1hGt%2BF5qg2aXg4q3AO5k4wO05mIp1QeynmlAHBW5OYM8bfObnvFTFlf5TaDtwu0PUKt9fJcIbhaPkcpll0vwJZJNZJ6f%2BKuLbl%2FwIIpq2CoCBWv4bzvWdXEPwpFTxiOYcSnfYzArgLuJKI7H8RVOOdpAxvSiOPCxZ59ostyuflFA0gj%2F0Eqc8b8AFAFLWaPMrnEiRcHLZL5oSqQUvdU%2Bo5Kg2LaWvSOLh6LgM2z2Pvup%2Fy4FMvX9%2Fdi3OI2snd6fN55XnL0WeAG7T6pAZOmvoOAUyBU1M1TSOentrdbNzJiIULoATq46SXb%2F%2FILK8qdQQVAFtnz3Drdc7Ser%2BfLcdAgrOdjuTjv1p6ZeKN1gdikrDD8kpLl%2F3DYBrEH6EmzlJjNFs7yce02yXSCWLoYO1D%2Bzdin2FIQ1QzuCk11j4JU%2BcQ3qs2%2FuJz1NguGv0awu%2FjcA2BPfWDX%2B2bv%2FS4F9AI21L%2BQoieVx0DJ3Y8YGOWlURs7uJLd5bhQvi0Y2ZU3GpT40QKGqqoFMpEpTIDvSqDn2%2BwOZ%2BQhDy%2B2SjBF4%2FQ8cSf7GLQeor1aU62Z%2BJknk%2Bh0D38%2BE0%2FGIAbCnuwQ%2BfdT5OAV0eO7jh8yec2V55sDNWNxNDZ8hjh0kSdGHhRzNQfYQmR5h285AzC254O9BjqkAZ0Twzyw2Bztg0vzzNMcsDCEPC9OMxAur6G%2BVzr%2FhWeTs1IM4Bv%2FsWj8WJ16kbS1yUCDKpLmbRJTxzEBgpVKBre4PMFeJ1fb5ENCvro9SkF65ioc5xmbp69bMxE0t09Ca2KxcKOF%2FNWQe7TzhPy7I3ZTIoWIzrxiR74s2syBVk48Hgtz1OKKqFgyaLPRmTh%2FT3wRrySyWUxjEd4qXjv1t7UMe%2BSh&X-Amz-Signature=83e5eec039207bbf6e587e4dcfc3b643f03b8f9a90150a65c10690066e3303a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
