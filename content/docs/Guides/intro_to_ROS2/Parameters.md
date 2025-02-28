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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUZBUVR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD2MR7I8mAbLnOJl28TeOGXa%2Byp3DXYZ8kiYuh0hkvkQwIhAPkaRHlnSNMhUc32ofVnGObDs49CZHPR1sKmBV4sYvNQKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpZxQpxz9pUL4C%2BJwq3ANIfYuAA6nHJKGuWs%2B1uJVZwxD3QqM9e5Sh0IQwEAGzd7u8dOuQOjL2nmDCz3NEjfhAPrj2yzYhSHSrf1K16j7wEzYXzKOVXv8ywC%2BO1d6OVeFTmt2jN%2FA81%2FkWUQTPxjVnCYgyMyr6%2BKxdmGM3xAGs%2BB3Lc5zHBbC5OdLQZYI%2F%2BWQw%2BRt5yxIIw2aNCup3VBl7zw%2FODAPgY2EBnK4gfx7kiJ4%2BPkha5bW5cWyhBoETEmWO8t7uQ7e%2BfexHBfPymQHZn1qRAlWlxcGjlLQpHQ%2BJVC6FuQYO3BcO%2BuCk%2FCYu7n69Q3bZxAzgOIb1YN%2BSDffaVFgxZfAOPpTbJNePR3hYUGUHyJJkPVmZm6kjzj%2B7%2BRY0Xz5oXe0eI8mJmjRMJdNX18Ufj4m8YpZa5xMYo7C7m8l1npdJw6cDrYgRdXTqcs7UNT6i5oAPjOnjG5llHA2L2ex2SJqF42DQKD90k3qFGwWxg4Erok1LZGBBy4qthvCUgl5m4qxPQD0RF9yz8qIoR6nKEGPpq%2BPE7BkLVvQj5DhlNi15V53%2B%2BFTMv9Z6AlZFDBa5Y1DBDKIS3xD985xFk9iEDdlOv6BWfQw1lHHQyz%2FyhlulVAKJuYe4744l%2FAc9BL0j1dB%2BnXjOrDC3kIe%2BBjqkAbRjpVdSiNwJTTdx3EG2yhyWlF3Q61kkZkWTszyMn1OW2pTIn911RDA0VhqjVFVfPCcx3g3g7chV4GpzZWyCj7TP0EyqE1xFvCW4JUB8BD5tMS0KAG3QCTMNu7U%2B18dXSg52GT33OkE83bAhuKS8DkYApKzfKTj3caaR7vw5Sx6L1nXXjh%2FwB0r%2FSpRFyIx7m3zebOsNth3tImPue%2FxI6M2549eb&X-Amz-Signature=bd8f4bea207abda3f0ab66c53ae64c2751b13f8cf31c5ea694bc2f7e6366bee4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
