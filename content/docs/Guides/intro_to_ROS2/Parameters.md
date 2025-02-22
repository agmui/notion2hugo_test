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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2PQCN2%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdYQ%2FWwXy9qgFmQw14wWcSEeUWA8lSLjw0qU02hQQgNQIgHRFwYxCRFB7T390nH8a%2BZ%2BN2AEDBY50bXtb1%2Blislh4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGz9jS26ZaXnUSLFSrcA1hU7yMEw0%2FEuBk7QvGBqhtLtYEJDy9LIPvfe6nZloLiyn8a2RuA1rG8Mx2F8cI3IM2TSm6rcSC4lu%2F17pOvtTVOsPr6SqHLgf%2BFuyagXi4U4rU2zwbTwI5AipKTcP82JncfJt618fz3GUYRhzjhix4oarkp4IZ1J9is0B5X1yefH1oI9imxgkirZa0362B5EzZ3b6jPWeKIzApIOTWeplzipOsIZ8Lub%2BDzlk%2ByD2cQLqKxueBrecfXOvB4OkDCNQJgmX1fmBZqVqtnIlQHXOqlhFPT99Xx3ZiEyW0Rx%2BLhkpm%2FH25XfSVEQRIOrWYxwWMSbIOHmu%2BbL%2BzVWltBm22zlEa85YpJAnKuYssTWxiTFg9gm4%2BAUD0s6p%2BufqZOcdCKQdPonGP0HD7Wp%2FKKGvmxNzoLFG5RH5qWpFkeka%2Bf1vQTAXKLII8vPgAt07yjxQgGOrFX1OXRqJSgdKFYVxsEo7iu%2BYxEZLGZgZ9ynfJ6IGjxRUlTZc4I%2B%2BKnAxf8CTTw%2B34RRCVNlp%2FUfN7xP007kF4qS99YfesJm60iO94THHKPU38Zr6TzteYZxX5XhPkUXMcm7wYOkuHWS39oY8sHzE%2B2u5a3k7tiT2HOuEXRGV647ajF1YnKV6u5MPKL6L0GOqUBjONY8iSew%2FYiCit9n9b3E%2F%2B5Im2CM09fsd3y4vay8yP6N51m9hC%2BEHAWcCZlH%2F2AbjlaD7o64XirxKqqYAw4TGHHc2uhKxu5uVtaO932k0ZHAX4y5xP0hSg4l%2B%2F1osR6TlwHKpnfw6ElPmuXjtM3QzQukjYOjWnL7zzZqhsVZt%2FIECFk65XTgiS%2Bctg0CbP0hrSgKjYy6a1K2HGeTCwntUt%2Fm540&X-Amz-Signature=b82972ba5f7173629dd21b803aa947ae2d2fe3c58c2c9f28c8e459fbe938e776&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
