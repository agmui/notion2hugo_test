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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEF4JNVU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFsaMdLhMVRh3AyQf8erBrE5Yk4VVMcvfZP2Jr5BDKtAAiAbovMrPa2%2ByVVWI2dgGqH4USPTxbESGvDIXpV7ZxgeiiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKjvGGdqB5xaXu%2FHKtwDRgEVfhYq6oHpxhchFcBvQ487%2BR3kGMbqD9cunKD1ip%2FPHj17LBKm9XvxfDgipu7nS0IUPtVkAqR8gbODqdFdgWQvT5%2BBWcicrZGrc9jnjSVi%2F%2FFKjZ5exGTZC%2B9x8wwUpfOHdrxFieDnMZn%2FLDOphDwwTfhtSdNutLuU7MsG4w5sABTMDAbr7MVA4Zwt1o7IsyC07rrUcssIViRIQ%2FDK7ftWkcSFmiXHrIJ2jIZYV4weL%2BJGhIyqdIb14SJQcaCNR2obLp7CNKT86ZGTShysuzqldwqBDwMo3sF0A6uoUd%2B2ydDF0XCdowjkUhpS8UF6t768nw4nhMnDwp8dgYmt8fOCdAjTDAUc%2FF1wK5hikQMTj8FnO6I8WLSb6oP87a%2BFTT2meGQwlAMVXqQK5JMcvkNDGsdfTl9NzXSWsWUB%2BlcCd1wvxnAKDSUz6SlViQUDNcIpb8pbyRZu2oBAJjWcFNqooYxkE38v4ixCHV1j%2BKxiB79WQahOn%2BcM20IvB6jasJgYnLoLuWRnbClNvsPiAZYrUi0G3sq20crQXUeThbcxGUTWI%2FRvopt4TW70335o6lK6WYzpTrGxBiGdt6t34wr9CRWTMkackYoOJq1BnqSjdEnZpAXy2SkDi5Qwu8XwvgY6pgE6lcajS8f2U6vcEQ27VQkZ%2BY%2B7W1CfGXx5X%2FxtvtTDq5oUz0y5mm632by0rrrQlzNtVeXSBmmxHmFyFNI2cKN95ySTvTZ8gJxwzYA9vO%2BhLoNFUjVt6ra4%2BiJuSLuy86sUlt7wlx6G4iZqdW9EyeBDHRDFWRHzO86CU36Ws67SDJDvdYs8DWeSEAYeK4zRDwem8RHkegdCzy%2F9OBXLrd%2Bx8KAciVkP&X-Amz-Signature=d565f59d6fb598a20ffe4bd2a6ab0249aa0bf6d5f2715d6f94fcae2301861892&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
