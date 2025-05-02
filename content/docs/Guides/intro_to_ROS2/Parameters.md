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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQE7NHI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDv44pRQ0E3QRQVgpG24GdeeIiklZm58FSe2hs5JL3zvwIgUu9kZ9%2BbZVHahtg8dRDSlwsanfR52hpRJN800ChciwQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo6%2FPeqoJn0RrrCzCrcAy2H%2BfKpiZBR%2BLY9zowcMW150vg9tkj6XWG3evggODPfQQU%2Bbi9RGenEqi%2BXGGljmszySr62uuw6Zdar0x878pEVSNv%2F9Iy176DkXN1YcKz5Ohhb2nLioEhsFwYPK7C7n5Bm4%2FMmt6i70bCL7UcTjeIH47cuQqJvHBxNek81rxRMlZwuGuXFS0g41oUbjqmI3P%2BPjiZJY1qlCRj%2Bac0YdwqAwLqzV0goHEsnexmNkzrX%2Fq2bMdRok%2Fxo%2FXpd%2B20QzSa6WOhZUPURQYeOy8lpHVFghhZN9cUhshPO2gLgpXEiKx194499S3Dprapx5r6jT6Z1NnoBKZ%2Fgv0JQWnPH9eqlodlBb3k%2BPojn4WkEUiyL6H%2FAvp%2FuQDNnYI5y9V5DdtyiWBsGOogtuZLxArrZnm553eGM7l%2FmPM51xqn0ytAJXMDUnFg8XgnTXKFjQRaMj5AUBpeoQSjv4E5kiKfO1zuKFipKrDUok8tNmGvCly7tke4SHSwPDZzEDFMH7AXMuTDm3NQcj%2BiwXnKDP7DouRlnpxndVQEgIW0jkiV0o%2F9dD8rwwZcocK3cc7yi1wwE%2FPq7F0x1UoaPYkZByKBf203JlRIl1bVuEO0nUvlavLCS5CkLz%2F8BTizW3W8FMJPk08AGOqUBEL332YXpHF5ID8lol4Cgg79MFqFHtkanakGB%2B%2Bm2RJPwNw%2F1tX62GNqwsU0F%2FUlsmHgtQM4AcU6MVvYi%2Bd6Pavhc5PNl9IT77AY4oqTiFDZCH008OPuv1ohNJdYKK7d6ItUpwQwGc2wm5S%2FlIqmQbGwcAXvvEg8CADeRSnOgc2cYK9oiyq78e0n91EHMc4K0HhZbAlp83ldCj3tgKWREX%2BJ%2BO%2FOe&X-Amz-Signature=37138a760505386c7225a01459465b681f9acc34f08010cabaf7988bdba77b69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
