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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HPAU53D%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqHDbR0xG%2FjlOggSgq63pngcJC6ZFLowOKLyVxbxY9LAiEA0OLFv%2BPY0Sn%2Bc3ig1SJpOrZB9DzWD2b8oMvdkE%2FuYw4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEgNnicbdWBSm%2FIqKSrcAzBZJHfZNSDu9aAhqY4r5QmLWDRqm%2BXkDM1Oh%2FJst4B5btSvVuXKkrkDq0cwhmVRd9EnRbO6DwEIJoAyfpIHZVFh39b8%2BtqaIPa6HdIigRUUdYyaR9dKydtsn2s8VtY%2F9aAr4Z%2BytveNpZSxpKU0g6hOfF%2BXy%2Fdv2RPCQ9SSRihsSb6x1Yrflw3hY26nPjHGeeVCK94R4u2%2FkFglXfNVOn0%2BidH7ZuyiVImJI3ZytBOlaxewwTeciT1DZwt1EJdsLXZlntFV7iZ8%2BsKio1wip26DW8Xnh6qZii7N%2BrGUHrWcpK0SmgZkaO5JRNoG0S8RQQL9EjEwrz%2FTIrFLJsXmRCG%2BXr6dkRzNsUGq5vccQmXCXNKCdJxcTBDPKefIgRZ%2FMTsgW4HVrQieT5YqD2QPdKsWr1vp1dnkfNEZ7DaPqsQBwKEFrmiEXFQErA5CytnTluwedptJcwyHLsIhBaSXwtlDfGoNd4lwHkieYh7jT0PXdhQFta77Qa%2F0a2aiZBdJHtKsoKAcGhIcGKogbYlSbf8ntAoL1WZ9Lcacm56nmJrNDmjBqY%2FKOOZpXSZPoUac0iKSt%2FmG%2FtJU7knttxQ%2FE%2BrghfiJ09Q%2FrQ2Z%2BeLeZdtFICDmKbIL38KPOcwHMP6Umr8GOqUBujd7zf%2FGrYmQBb02%2ByhaSew67Z3UGcvjFSHAcBVB2xSD2aW0%2BA3uWd6X%2F8iUswEp12IrjhRgh0egx3jRwo07HB3RsjmFvTWo8roK1SorlAXGX8rtWWYrI6%2FSTU6c1wyS20xrU2lGDfqXsR0X67w6zJ6qQgfbz2NsEAU4MzzfHiKA%2BasOWIpvPt2N2O%2BojY1SKYMsMvjOSNO489xNkPcOOM3rfN5B&X-Amz-Signature=65b63d435f7ed5a1fd21d939c6108311ba52018eae0c0bc9a2c27fe8d910c2ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
