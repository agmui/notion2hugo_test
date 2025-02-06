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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL7TOYYP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCrwgjGXetwHXAolXHn8ph%2BwVO92J%2BsUjOmOg8sbwvoygIgeUJKvsh%2FetLUrBUCAWGd17NFPyq%2BYc4SZsJ2tHUSj54q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKJNqhbn6zB2IopTMSrcA%2FRzSgwVcFlORsJTL%2Flber8TMmt5blKxXycdlDerWny3ESQSeMv%2FG3uWYBhGX%2FwMjboUXPaqwysuHNqLaZL1YMk6IqD8VyYp0mYRSPpmbjVgpubTRXBYMgy42Jj3LsVVyUf%2BKRCjSHPhTUb2IZR%2B8XDmNwL5VpsvLzhZ0UIrGzEZQLMy7GAolE1uIQA2gJEEg4b98QvRVavhg4LgD8Hx6lpBYOKYh6PEPfubDb3r8HKeQyw7KgjBth8ocpXcIPu%2FycA0jF9h9zjo1hKXE7b6YCymjQmk1Adpfu7wkI7xPr4qDN%2FrAfu%2FHHP2w9PY5MpZmweitU3eOjObaFHL3tYZp248TdlZE2GfY%2B3yOA0S6eSybJ9LoiUVWqSU7kz1yFwJXboYml%2FyHquz7dzI9%2Bmg0687I4bz347bQTj7GrTtFYOIn5D2HwBM9OGZTVXOPC7ziP64%2BDqeX2VVE7YsUH8dD42eSWsCYOtB8LmP%2FRDkXtp4BfU%2BLMBL%2FwwdVHZALtlJKZfLs%2FEWRPoBMiuR%2FLTshi1XyelWZlYLPbgC2YsGHxYLr7SA1rjxTKlvxF56OIh5t4d2LrYkdsKFlfQegzWMFO4ZWt608UCDbQobHfq89Ram4utvte64qIxlZY1DMPXSk70GOqUBnVdJVBN0ynK7ApGF9GT3H94y1pRycIdlHykAOb2LJ940pTlPOr6wuOAac81yRY8%2BbseX%2Fl7%2F3ZcufHXBc6ccINR7CgSTD24tgziFNFpOfnzsCTiaENZNbStNq2qsYeHYYpGbHp7LpJOUFFP8v0Ftz3bqXTooRn3MHzz6RzsqM%2BHcdRfQLrOo59lTzyyiiK6XsyxA8HpYKJR0Xmpy9%2BjXoUiGfE9G&X-Amz-Signature=9d55658a4c2f30bed737ea95120a210639285becfbba7553c28b8ce5ec3741fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
