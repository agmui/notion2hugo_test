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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGKWQK3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBxCVFv9UOLPah90Bs%2B1tnHnXZb0%2B%2BaHb5AnFn9rjElRAiEA1%2F0TihujrfZRQFD2j9oTJa2qAtGN3PSBF%2B3tmCc90RQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDNb2L7FvRcLZQoe5XircA%2B%2B8Z%2FD2F8E9IdlSytsjrKtm5pQve5EFHsfnvib5htaug3EHLs8XNFuEPzwZ6dw40cEkqrg59eJMGOjlPMcKQ1ZnUh9mbLeZh%2F0Z1h8DtmKVi1RI4RMlp57C9IewoBoExeg8UvcBIydLPb8rnZTilZ8qpMr7GoRViOUNFpJNZ1zGjlEQjljao7Yz4mn%2BG0Qt4wxZUO9WkQFDz3Gaedr38vuVwp3hQwHa44FIVDoVjIAXNiAb5PmuhsE2uV45fO3EGHJ7MAOdWcCtSCrLmWzVFwGtMTv6%2F7YqemvsfpSM7muvs9LmHfXpbqymLJ%2BRY1kdm6MEmCxeQ%2FDjBJQ8WHSQx%2Ffnl%2FenJcUjpoBbPF2t3gd3DhYDQubjK9hnopBSXArIa%2BUyHhltq7VMlhhRoaE1K80sj0aRc8SGALls0Ae%2FESHUeKV0tySqbLkrxWp6ulj6ZcgwUpcJxtmInwRlY8T0EeJ%2BGVfxAqufUR3rE5eCdQyR4%2BxIZzDAQ7Gpp3jM4FxPwteL7gpzzJGfrHrR3mwAQhULze6q6Hqe68us%2BccELZlQYf3X0u%2Fg4%2FdDO5b%2B2380TMRyP754DIu5YIgPFk9DORWZ4DWKWYh2bp9h9qXt3cjj6m64abAbtR3aiG4dMIyT3sMGOqUBSzjDFyaR41pIu3VAvYrlNaV6M7P4ytABWfAVFoJ1qY5otZGQiM4uZy2tjzlKyOuqY04EaOptzjeeq%2BrmMxE0igHBkLJH6ZgyE71VmCk9BqTY5iM%2F0fTgpdJzDzBJpjMTHIFka51Q1cVrczJZCTgzcYuW7QZoRfURdVYWbukXc4ZLQ%2FIe9Uc5RA1bUnfffr4Ctqwqbt7rbpgc0y45suOKX0V5EEv6&X-Amz-Signature=2d6ecb093fba8dfa56d0ad028a1e2203b0cfe4fc4a76cb7e3bec752c6457362e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
