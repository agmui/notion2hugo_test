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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SO3X4IN%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxphWq5FwWQW69KOpdi3x0D3Qq2UpYJn4U%2FFYLx0XO6AIgOOS7PDwDNnEHyq0Ek7SjNtf4EAAksXafR4Fn3Hxy2YkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNTwVhtXCvyLlM1%2ByrcA8exYtK%2FkGBH%2FQPOlnC8pbufwqH%2Bdj0YxAHYc%2FIcyMap%2BCxbGXPdcD6jtkxBzBc%2FfYZesmncRsyTpQTQZKvLfaAkQdZ1nhXZM1aourFh7zX2GHaYh2VhLHGXOMT0Cqf5K7SE0X6gmnF87Voy5kdK19oxUWFlL722l8aO8Vxz8AKS92Ls97%2BB%2BGOLiO5mkm86Gxx5nGbYwkn%2B9o6Jju4IazwymuUZVzNvE8ii%2FhrmgZCuXXs2LbW05dp0cTnhZgT9o0WKXsWLeDpyKSlkkATdqSbjm6QHC%2BwwRpspdfjInhRAm%2Fg3CRbDHmmIvCPp6c2sTgLk7X%2BC1xG8gsP7I0JLrxeE2CcMe62ialskEp%2FLkrFSrPjMImHmbAoUVtOIMh%2B3l82c4t6l9XNKM49kNRz5%2FjR%2FX4xTm2iadLFWiOwzJNEiTUE7HER9FjdTQCKWuO9DdENoxuxAo%2FS4FnahgIltfVgpoKGnUB%2Bfk2UvpQm0sDGZDRKPyQHubvAs4UuDEQpuAQ3qiuQbJsbxRxDBd0c502hELQ%2FwCqwqOtkKbkDP06MfF5MR1KAB%2F3rnPtF1FcKgqUasWH9Phztn2BHGeaGnWeSuDYViiAX2VLFYJSm04xVw03mkdiNrNQKz3hCfMIT59bwGOqUBQgstf%2FsApBH7be5yajniAxZtnyI3L%2BffsRHqTguEz6UYUVAOEvN%2BHCqQgHIaV85IVkQkQthBLbcF%2Bor%2FV0NAjBKib6RGb4CRGSPq%2FNLK9%2Baq4Ow1E2%2Fa4KyRYzjrtIBRoki1QB78tZtr4lXhD4GduX303NkGDLPW4uKNyvGPZhcyP70Dcg%2Bs1mM%2F6SmmJhfg%2F53ZNXasb7ZHqaUmJG%2Bd4ehBYpLR&X-Amz-Signature=3e46f026236b01b2a2ff32d443cc7dc86958d4c56414691967f70bbae4d00ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
