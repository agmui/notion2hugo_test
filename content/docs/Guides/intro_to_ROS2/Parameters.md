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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVNZCNXQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYYebvKvbIRZbKh0JlTbpFgK8LhyUs04DseRg%2BcRpHQAiAoifHGEQ7UCke7vbawQqSml%2BQjSsJgNLejBtfuC6bjJyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLUnj%2FrahYPYy8iJ2KtwDj3vyi4s7%2FajacKfjVhsQb8Nc%2BXc%2FJSYq%2BEBN3DGKtDmbstYMsAn2rG3j5xmICsjLRjjjDjeK6oheyHWpZzRZjV3pIRzhNLLchRCJZhDhECQ0n5K1rKcsog%2FVfe9CNEuvPX%2BOuFfdjBiFmkY1gcd4Tebp8X4cwbAfRGtR39iEI%2BGB%2FnY0Bmn2W3UU%2BeZ7Vo1%2BeDtFtVTOq8qb3y%2FvgMOUjZmsS3F6feckmh2Fdtcebj4Yjcq%2FBGDP3%2Bok0%2BnqcJpI%2BgcJvtmMculgNv%2B23JjffAJY0vzIUNzllm4bIYtgqkiufmP6H3jPuwkUtYkuDiASf5is%2FQ%2BGernAwEkDEYCCAhYDXjStyhR4pfZV6tKDCorak6aRWAgYthL91Iz7GQJm6Q9gFZW0yT4ovU%2BR%2FazMQ9%2FZ%2BNOR6stS8FENZLwM3rSdn5NFFgkFrnKdBcLAWT4X4LkZnL%2BJLxnuDQjXtJUCzXLRbmsMZNXByINDSVIcxpPDxX53ZavAkIsUzXCOPTksTLtZQ%2FV9301P4rbsxDiaXnrUl99%2B4YBa0IKLkjmUccuViR9cphLXyjRMW1ZpcXjCpVML7Ueuu1C1XtqG4CFB5PSudHaJJ%2F2%2FNVefo4UYea0UF8b%2BCf88n8bqc5UwvPSIwwY6pgH%2BQHHVRx7%2BVNvJrSn%2Bxy442OHhmh7RD9w%2BZovHN9Z6X6ZAefQ1Aafc3dsxSV2XNIDCqx3af8ugvHBeN%2BtxtPRGBtXGDYPi6gR8Ffm0CKdhbEQ28Lw8pWs5Y0nkDcKM6u3tjDOsYgfUNzhMS0MoHkt9iZyXOtNBUS%2BtzNAQZYW%2F1Dymr4gTrvyx7v9KQUe5ZxRJGSu26wZzV5yljCuAk5NcRs8E66tK&X-Amz-Signature=97a0f53162afbe74143c742a36cb2e550d43963ddfb99fe9f75c8e1d78632e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
