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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDUDZKAD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bz8NLFo11BcpmLV9jpDV06ZIiZNyDLQMzy191WuxspgIgG7lHG%2BLTHOIrLJr7i3VeD1xhm5KkRVVxAw9XFPDFq7cqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBI8Y5Q1hEHhssySwyrcA9LUYlT%2F2WZVQOiDLayYi4VlWyhQ%2FaAretcbsTo9EmXXXh%2BR%2FTilynUoRP8uIwi6hdFSqCS4Kvhha3em9hAUySk3ZP10zueAAyVJ7gJLKKeu%2Bp4w5v6n%2Fpopweenbvwm4GhsWH3wZQb0%2F8M0VOWOHGQ%2BC5kX6pQ6Ubxk%2FgWbQXNpFAl1cltGT2aUM8x8cxxCuBDpAZN4i4NZG83ORz17D1P7g93GUKeCDkJBzE89629rDUt3kmV7kuZ10KoHfu3aFF8nIfHcfhJsJqiEzNycMr3njRdkMmCtPwUv3lB9R%2BNZEOPK%2BFUG6%2BO8MYlCluAlXuiVtE9S2LfpwP40TmnBCh9VDgSjr97U4o2f2M5IEm58j7LIE0VfA5H1sESFP3PAp49CjjbhPuxNlC9lk2PkBRsJbjOMgq65PDufPtem59%2BzOnmwlLkAupMHaJIYQ%2BakeRU7gfPHQkK2pFunueQsD2q516rs7o1rdMbEmsqdcZZqh2UDleDz0S4e4VdrZX0VRnuvKpsmraSa2ITC0hYi90qPW0ouvAqiWjuREqmlHCoz%2FenGX5i07hgBWpN%2FSwa2dSgtj3%2F2T7z%2BIYJZYlW7oua%2FxMzZyJt7Gmj0cXCxW9PYpmqQDfIc%2FBqeHYnvMMX28rwGOqUBTY82C8RscS3Ov3BbGkCd0RBzB50YgtWOPUcr6SVGGDBPvhcbswYFn5iq6inIJuaQYC8U4ZgejAnUFynA3qyRjCQLHWR1rH01RAQ5ZSWxw8hDUcrpwmTBmSxtt3v1In%2B2SwR7jTLgOrGroN3Qjr%2B3UITfoqfr9dodHNw3nlxQKrfzU78OZ%2BQhOLqJoFWoQXtXga8wQEYTlDQ5QgMjPRaRSxcIfwFe&X-Amz-Signature=dbc60b4595c66df2012eb88b356d379f1e27217ba5a214095875430818aca534&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
