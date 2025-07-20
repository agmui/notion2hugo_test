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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAV4JAES%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Bp2epdwmNqSRC2e0%2F5cyumlwEznnLZZdcz9UI8knlAAiEA9O9pDIJHVAC8MikZp%2BOfD4xCQDcA8wUEX%2B0zWgzkk78qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtQdSdIAtVaj0lOOCrcA4uHRackzxHvh%2BM6D5eYzFtp1eJ4EBYakXcLzHUpOFODl5fDIosfxjvZTr4eutk%2BjFnkRJo0dkW5cKay9YehwPzFJd%2BVwZJTqy5eiQDEXmeZF4stfmWCUDSx43KfLkUGd%2FYLfUM62lq8WmBpPPDN%2B7lNIjlGhklBZMedOGxpUyATKT9bKzLdL2olsbfzQ91ErSxDatE9Y2xC0bxdZpgKOnEhWzOC28qvHfxsx9mBj2sI%2FSQd6HJ%2BRMCf0IhYc1CXYGEd2rg%2BqYAKGJRo9z3csxlsxSfOcuyV9WfXf5qSGTzQGSoduTUlgcL64nGdUORXxrCgrHF21eFzJcn2VvVTppmI5HMH4H%2F%2FA5RKqWYCOqwCn%2FLrap3xkQukSdt2D8sgIt620ASvri5MV%2FM6v0QN35l%2FMZxGaUSl90fI6UQa18%2FWpVpQwX9UIXLev7NMHuUTBxMhvGDeAMTVC2yEzFTKqI5auB9zZNnco%2FI2uMwHLIWTCOLYjhNc0lBvezf%2FwAMp%2B98OW8MK4OOl1g877cih5XSW8C97QeezLflSKSJwrVjMzAoo5GYqgIh%2BMhTD8VSz9JBSq6dZmy2AGg30YwGkU9UVV1%2FIjm44sjj%2BD3U%2BzgLf%2BNa2oQj39uzAK1fmMOLU88MGOqUBMfF8Pc4TfBej4X2A3%2Bd%2F3Bpl%2FOQyQkCEO2eC6Cor3GLZOXZqH8GmJWtIBOec1%2B0RgxoAwhClF%2BYQltRJO6muusv2VD8mfVaXKgduy14mjsjPsC19fJejG33zMC%2BgtaFJg%2BKHuSO%2BmgA8Vfz9pbZgY6mpj1FCyT0cE1ZuawHXQ42k7ZBCri%2BTEEdwO3HSL%2BI%2FKJmH7uLmyKpAuJqt1eIfK7l7VABk&X-Amz-Signature=ee1734c1ad4e7e2fb775c7066c854a0e16c1317e8f7f04a76849ffe2defdead0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
