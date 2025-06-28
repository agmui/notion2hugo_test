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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNN7E53%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvTSME3KmHQJMZhhkX5nwiRb7sp1bX49QtvZRWEzd6TAiAqsiIB5%2FAuEQYCcjpiPHNRICYxMs3Jupupm58AjhdHKyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMucFJhUm2q8XeUWJgKtwDU4EKaySGbNGrXC3BhwsiSCuvHiVl7APR9eU46g4u5NclmxBDepSQ37P6Lugym8ROdLj0T8qa8c2OoHSDp36gtZj5XnzTUwtXqIZh0o8ItkPDUYi%2BbWFAENQFu%2Fp%2B3RmL3NgFqSvAiAHEQGah0t1loDeHMugeiejj%2FPZYH2UrdULFX49s05lj22b2RKam%2FduVgK56lQlcYS7UkmUjnKmKtA8L5xQB9pMHUh3ikR8elwoYaMyFs%2FlY3%2FoehwZurGL2krgfA2ZhHgXcrTyJBqvQvOQRg5P5sP6SmeIZ%2FEw%2Fz7n7Q%2BdwdySt9%2BWAbSs5U5h%2FR%2F%2Bx0IijP%2FqyCGgynR6o5KfMLNQbwvBhsyQ%2BeC0hRqJ236ezZJ1zViF7BUY1BM85s7nd%2BhRe5rE1KPTy%2FfD0MEjYdEeFWmHdiTiplU3%2Bxn4a9xtAJh2y8oUOrFvvIlf5AIOK8W7TDxtNCCl8SMm6iR%2BXxx%2B5N494pfJTPlOb5UZfgT46CApZ8qA6UsUDTEHt71LwK82WDKjR2lbziex%2Fy8P3vEK%2B2jm9aoBXKYw1w7OqomJu92YPLD%2FVzypFix2g%2BdPs%2BF8EmgqqT5K7obODiMdgzRbp%2BJ3JjXntOC3kqkXmL4XhPZaefdlVamYw1fSAwwY6pgE%2BsCWrJacmTETzwQwecocDljhKJzgcOatk8h10OUrdT%2BoeOl0f6cuS%2BKjkYS26usoJ4B0k4mg3ueXyKvGV%2FFHO2yoKH4C9nM1DYyYHi0i4%2FFeOmOASLMpPd23a%2FrRqA22jG2YExpJszLvfnwd5WOjGb46lv9nhQU51sNDURyES97W%2FGDToevnwemAc04Gwi4rXJeZXmjqXvd8OPMWhqNQ9QZOnWOAN&X-Amz-Signature=9faee1781911dae81e094f12ea958bb271c6afd6b3b2178dcc5f8afcdcf008a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
