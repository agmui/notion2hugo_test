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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVQEMVM%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQaxvIIeAG2muTq0FY6RRl2HpxvWxFrUcgCmASTAKqyAiEAxoASjyxyjilUhk5u4BXpitBr6rvHMm9ulS16ati9K7EqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjnbWXVXbEMmtEXtircA9YEwD7LzRSn8RsgK%2FaXYaKobw7WZgUu7VNbWa3U29d1TmU0oJWXROfxWbt9prCQJfByqJ0OkKR6qXOK42tSpO6l1qIdYouYy9wbr1l%2FwiZ73aOL7p7LPS6DDlGss7f2BpNbQtuep6WIubE5B0bzZTacEUIEiFy6HNfL8PFAICH5%2FKBsKI69pxZL1EgDl0MPke5yJjVAoYIe5kVQG62NymezcTljkQH0pI17Sstsfd5Zspbv88uD70FkRwUF2dyq6CM7%2BfXt9JLv0ugKA%2B2X2E3hPLVGOBNTv90%2B9qWnncCgnRTd3ld0IsIgaM0s%2B52rdc20W4GualIrhWI0SJMGt2ckA1wVpGX0R0xmR5kARBLYLXpo7N0clPcdrI5h9JWZKu%2BsSx96YE2YhUnHmHTrg%2F0r47qN7TdDbrsVOWpDjKV4SqB7weNh2D%2BJX0qFqgibOGFQnGSxEhPCvQtT5tU1W3UNf8orjoClhwIF3MSiCfJtS7RToRZfj51LNefkF6QVP6VS8G5TPAC8VaY1RAw7DP6TyFbea0FdSHSZGD59%2Fe6QSNWwPtHDb5VsvJEQ1ajqOpt36Z7%2FOkMRfocpepQLgkmuZiPJHj6yIp6N37NifRg5UTNChBU8bffesIu5MNuOzr4GOqUBJnn%2BrPRq06U1R5bjgpd676PkkyU7oEhlZfRF3eQpt8qKZrvmnYjE9h7EwpnEiJ46ER0ikuh0UJ61jzpyhUtW85x5l6zgFsJycBH5vol6Ugfg7J%2Bhv%2BvW1v4OMYEth1tcEq0cdPNUuvfRYFtswXpIbnKEhdU60yES%2F9ywTsqSaIG38KU4JYdmYbaLeqE3IpFfHgMcLNalGlcyCkU4mj6JgWpBVuq7&X-Amz-Signature=78ae1075545a9202b4f55a50b54e79d07fa09bdc01d54698486e57d1309ef704&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
