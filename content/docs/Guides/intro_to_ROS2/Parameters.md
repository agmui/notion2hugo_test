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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OAIWGFH%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDVAWWn3hOr4t%2B0tTNnbWmjQ45EqmFPcrHAMEq5w%2FRlpAIhAPOygD6BAvQY0Spxm5jXLgokcl0GkH4CWC1e2lBl3BkKKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQoTX3c650m0Lp8roq3AMIX5WZdA0kJlbironYk7BE6ORhDawXMsNijtDQhQ6qE5gO9ZcbDYlAfi3EGydkp7OZy7qZTdo0Opgx1U582HqpHS8olU0jlCDiteZ0Fg6XWi5klFGGt7DXFSyAonnYLmmTlkqq8dCynCDIzhgKjvplz6NZEkp2R5tRAn2Xy%2BT7IEKIcqtDBekjoHAzzhEn1pJOpDkHAByaxnU73d9NSCr8lsF3CWizKmTxYLTDClad1vItjzGC4v1f6hT6AZg%2FvYS%2BcwQZ1dHA8ABhdyzRfM7SR9LxxktFhsHRLW9Pg8zQZWdlId%2BLU7SXGEqiHj6CX%2BOKC5pV8tJXyxOehxpiMpxS6yBfF6Df3Rs6v%2BktI4AZsar%2BmOSsGIp52%2B7v%2FHNCPEDjULPXbaaL6ok7NhCOtT4wCHcnWid9huWzqL6t1hrCSV04sXfTDkuV4CtxEdRBTTg6JwnIJ%2F%2BVPO0nvuvGBXt6MwOr7bPCRUq%2FcwYmXcgOwIyWx2G52x0U4IYVEqoZDx%2FLRsECu0Es19TBB31a1ffNBtjekez3PSu1F8rP6WefFvAiBx1W8eR0itG6nBfFTcDHHgMKaDduEUo%2F8GyWfFSCrlIuSj%2FljOgN04pjqowWKcWmuH15wF9naeO7gzCnmJ3ABjqkAWAmKjFP4XmVdz4lspaJP2ifBUDOKo0Ba6%2FIbmtkV98Y456J5htooZOrPMeKqGv%2B2rymRQtLKsrxzA7SeD14BVKcP4de2D7sA8yMED5LtfLPIenGcnMGvWFKb%2BBC9KRars70dEQP6y1MJBtXe%2B5fcF2EWcMmwom8uM4iFFvl86ZToGFO1ZXIR4hxUGYUkBp0LYbeAjY0N65XZ5ZnN2ai8uXdXf8o&X-Amz-Signature=b92ce4e5c83a380ea9ee4e7d5b50e895a1302144afd2fbbadb6112a905e63f76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
