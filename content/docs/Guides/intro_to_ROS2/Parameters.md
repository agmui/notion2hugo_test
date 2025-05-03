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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6DL3IK7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCmDe0EuoRGqEIn4eOSvvdT%2FFGqur3TblL3TrQvwNxoWwIgDwgzPXeYTZEq3Tz7MBV%2F7RVXmIfoMG6vLQqSZ8VimwkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjVkWrohK%2FFxzv2circA%2F7XKjqKzbU2Qc6co8oVXLVab9T0ht1%2BSQqMG1IF3mW%2BH5I0OHSRiBMigXQFaG1zm9q8c51rWlFbvpk7F2v1Y9FOkgLoL7zoIFlDQ%2FLbzgkeo9TOShaO%2FzNIBf8ljEbenWla%2BGzWa5Y4ReHjTF8Twqxe1szLyIicUGZnCFK5qvWrumWQ7M2OTC0Y1N5sPxxg6RjV0VHGNRP0lHofJdfG79BpspnvyiByFVezsEyghCM9f9IftoIcxOTRkl2IKjNlRTF3xJvWKAViYQDwOEtx%2BpZLFpeTwkpm0Wm5yaJ1CEkRFm2pO%2FSgBn1KSSL0fPUyTgIOcWfmVNU%2BcOyxRUB%2BOvrwyu0ndE3OzoAfeTbIafmXMgGnY6Xzv6ccrI8yXMZJ1isgJbebzFbeQyg244hF%2F%2BXbETeQwXEKdCNmb1UUdo8ua403pIu%2FbuKV2nkcl6vrVWG7xfaSEyWgCFQ5OHX1FYJWtC8W%2B0eacnJCaseH%2F338K7jLmPFSx%2FQJZIlPlI3Wdxl%2Bl38MwW3drrUyj75rdqzBHUMQdC2fD9mQUaye9zevPljh2ZUW1BZTftyCnEws%2BU192rQfRWd6iII8zZ%2B%2BZg44%2B8rtiiVvwZ%2BnOW6iWjMwzI8Fnc1woJWfOhmoML2618AGOqUBKcJrtT8NwkpKdyIGC%2BOQpLnFf2cEXnzraMOpvoRn7RsUWsl7s4vUWsVjQ%2BUTXno6%2BaRDS6PEjuliDnXOnxJOFUxhNzn1FY0pdHJZjvU8cUHeojr%2BrG%2FfK3%2BZwcfyf7Szo7XIulGoTQoTYSiTQhXzkIKfzV8yKmHIBxm0bJhPSWWjBP6HBZ%2BhEHGz1nQxhNP2s4GmtGMtoCDYhJcKtIXXARWwsHbl&X-Amz-Signature=c7a8858a1cb990f657db31501b4db6faa3a3644c08897ac5b1671558fb066a57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
