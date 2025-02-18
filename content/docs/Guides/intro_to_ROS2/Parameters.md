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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI2NLI53%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIC%2FF7yi0thvP9iUsrbhPagTfiuU8GeKZ3DVduDl5y8tCAiEA9YfwZsQu7e15XTrHXdqgDzFlTgVcR9a87QjrN3pcSBQqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4LIkmyxuD0SVKPqyrcA4PGFyjRxaHsVWqg2DzvLsJTk26Td2grgWYBgn08C2xTDpMOMrV%2BQK17%2F%2BwrM6sgcUkZlSBpeEKgEIbirbzgWsgxzNWKM0%2FTqPxeM6hXTUtcGIvI9dQMuZoXEcEp3UizIzA0c4qgZdTXSQcRYcYbbDfeDW%2FgZwGffz8zuYi4RQHyu9S%2F%2FX7OZ7BNz1RI8FoPtY2iqnIdE%2FyWhNGD5zAkj%2F4r3Os3VEUSSPoFmUtD8lzJ05qH9WaxriAvLdlHrVVwKoxOrfC5GqrTDzhZY%2BqCVXECt0dt0EiAc7wnR%2Bj5C0s1M0J23OPGnxafcLOErJf7mzcPqmC9LDb6FgCnjSemjJ99bkT8rVUeE5fIBapNFfxxV7tdhhgwiuyCYwB%2F2Ym%2Bki7d4O%2F%2BN1aqDy5jcenPmi2Q2MKqENGRsWTk6TIZoPT84wnD21UxxTeK88n8KJoyM%2BPXSFkqfbu2lYFNUxV4cy135%2Fs6Ykdqt6%2FR71j57AbGxQWnTN91MPcTp8d7uTTSdoN0hh5KisJ5iPHFsACUDvqA28B4QdTHR6PjKQyEqPgAH5szz%2BZu3%2F4bXUwpZJm4hAXiggwkK60wSMNL4cGA1a38C6d9%2Bt1rqh%2F%2BXzVaAKZQMSF29kbOA4R3DmofMKeS1L0GOqUBbEwlr5cqUsBBcZXowsFrhptsvFLfOpV6Dlhs7GyA6IqaE7m32QogqlXYPSztg%2BXpSTAI1RprJ3foZ3jIDLAgAnCsa0aV5Xm2Dx%2BrsjIQc1MOGAmDvVhmORW9AE%2BfAZzCc9fyPkYlem7Wh78J%2BjxEJZav7%2FyTM0sx2eKdS8lnNIAUcXaKdeuxFD%2Ffs7%2FUJfgXewXmV2%2BzX%2BQrAZyzMUVcVUWw0Oa8&X-Amz-Signature=816cb4bc02842730f27f032fd730ba7b5f2f7e1536995ee63a56c5f9e97c5916&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
