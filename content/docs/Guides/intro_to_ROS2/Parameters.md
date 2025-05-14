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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374JC6HN%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCJB%2FxFdIznA%2FB%2F%2BVLmzwNHpvRvvr%2FQXMGb%2B3vuuWwD4gIgJHZWGtdlfm9thgZ5%2BHtaFAyqxxntVlW4zgBBAST4sNgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC96qa2pLg28W4PkvSrcA0qriML9AKc9hbU2%2FBYkTOPqQU%2F6ARQH5JWKpAvKTbmntFrIHOZrPXtpS4iTOatpm8zP7vT92Lr%2B9x957AZpZuENNTRlFYVVhm3b3EmEPoNVqSE0xE4rm4Tz%2BZ0pKmYj6%2BULW2%2B9cnED9xxe41YFnO%2FA%2BGbStdZv6%2FsOYllQFS9m%2FC9SOOvkbPuwH8VsomZWVDe5xU9JhZFuW5cUb9QtKe%2BAQLh6v5XUi4ZV7OUAmkDMT%2BbfvXFtQx5C3VAA%2Fc0Dv9kBpBZuO%2F%2Fi7VX5FKaDSrz%2BdapPuLwM4xfEDw5CF7zUCe9d5iuvP9QatqH1dzl%2B1W4lhfrVstW1qGY0yU%2BEogVvSWW1c0dxG%2BfwHuvpyg6GfM8n0K%2BppiRr5Exvpq1TTecpBE%2BDq0qZFIFEod5LZJtKp0JSZR0ugKmxjsuR6OCOy8ncxQNrAVPm1y3kgIZFPdhasZgIp1d7%2BhGFP%2B93lqHbiWZAtDl7M9zKLCqL63BNU58hkUO4%2FxuiQwIbATrRu%2BrXWcNBqQ8hWvp1oCiaZmdvGGQ8l0Z%2Bef4D8iRB2qXzYO0cEfAfnEu0bT%2BAB6D7tyzMljhXl%2BxaQpihzWBL4WAjNkLUy420REgStoD%2B6vUAOtMKdcG0HAhImIZGMJrRkMEGOqUB1GpafwlDr68W5k5zlY10uZlQzlk%2FtOWRLQfWjV4UUey6mY9%2FYUEN6u3EkFspYEJt2WrplXH72xQG3Ovdl7sRCO9MfBy9Z0HQWJb0NMjJcW%2BlWPpGD5PuPZxEB7tw5nqFfCoUmoboaU016Ye3vt6NqvTVoB4kq1Vwnik%2B79WxuGSsrDv8%2FIGUDhjT03j5WKj%2FuQATN%2FPOo6z8ncKTa%2FALvsfq63f4&X-Amz-Signature=71b934d910a0e67ed9ed2af11f63dd2c829aa93aa4a82833d58d21cfa4b264ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
