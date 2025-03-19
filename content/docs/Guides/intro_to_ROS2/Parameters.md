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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJ4BTSY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDWmibET9THQEwpoXNcXN%2FVwQazPrKmjkqCzhajZA3TfwIgI4LfZxsu2hZrCrYpa6ItZ3DQR%2FMyzwWZ7x1RS%2FjFRFEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNE67N8gh8si0oeTiCrcAwz21%2Fvg2hdVTfnaLWcwFpA3t8exDTZ3Gsxky3jNcPk6AAxVCP8e%2BZ5xn3%2F8rWDlQmQXIIYPJERWQ%2FokCRQyJqm2gANQwVl700kGt2PTfhKyqvOdsX%2FzciIAYCT4XSv%2Flx03Z5Nd%2FSN6VscG1mKx59RdnI3HVKyJ0je%2BBxx8OfbAqZSs7qgu%2B%2Fr4x9NgnIuNduUUYLSdzLBea6Lsg6UEWGwib2SYwFjwu2NuXL92QHhPL6jG5O2tg5%2BVlW1UwsfVO7X98qxUcdD6t3tIimz4qvkVJAz41qC8wpZKQ%2BYs8MNLaJyLsJW45wQnxp5nz4xW0WGaIs5CK3fun9Wipdznm4%2FfjADdOOEHMJyi3Ra856zitP3FEZ2dT95RdW6h5%2Fk%2F%2BaRNa4iXNmkx8EIdZNp6wcO9AApaD33oLpALDzfYTpPzthL7BbQ%2FY2gq7hFZRcwj8cbpQjdocdup%2FAdUKucRojqt4Ha52QbhfchhNomAQ17WP7OExJbiVel5tpfbuLbEUcgp%2BI%2BcI%2Frp2mWwNMIdHj5%2BaEc7WhBzhjv6O%2Bta%2BjWnDlS8GiRtzMkCOu2gMs3Oy%2FgLzjJvLGCO1EOpdm%2Fs07%2BXy62JYERZA%2FI%2BtD7Po1uxo4X0ASVU%2BEw83NlWMPyw574GOqUBFgeoPjSaPOdZA%2BJHxkevAvDw2BLMLzyg5tnlqwEwcWv1YOY6jRnRLSw24PIOXplh1KyDKdIziJXunpKt%2BxaoBviK46vS2%2F0sO%2BsI%2BzODVe%2BiIvnhJrAG3cJQ%2BjsdNxZAlrIi6qQJomKrdtyB%2BbNk8AtBZnsYqq82vcFQjBB1004KTbZhdIsLF28ySHa59aWZbYjNTcgTrsBeKvDfPPJ2sr7E1hNH&X-Amz-Signature=e30d94583c21a2c0937a750b591134647025facce1d88fe43e4a2b591f4bb4bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
