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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVY32IWX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHv2FpGNlJSHFxSuNICdz2u7ZV4Rn07O6WH3E3nEjL8NAiEAvpNDoNZub%2FF8mWtVUDgg1nMhgkZerj135%2FARTKr%2BR4cqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlSqCiAzlnDNGdE6yrcA13FL1PXQu5x0QrmBC8d5o6kDPMhVsQKiRdZFz3UulNjIi7RetbsrNtOKvE%2BJAH2DLOl2UuA6mNyhxDxtlj%2B23CRA4uiXH9aikzP6d2D2ulXFOEELq3ChsdM2eGk%2Fv6mro6sNLmTc4up68jSBBiu193zKQnIiFcdTpmUU%2F25YhKffYxwZvVri0EU0v%2FwIRDRziFkaAFbl8PkTDt4mbgbAIlL%2FNvNhreq1m8MKy0ld0U4quBlmRAhM7yC0RKkpVvQjJAUUA91oWar3LbGLBcReuMy3Ki6rtZG73LqGGjvAHIrY1vLFBi3ZKJhCrVtw7lcW9IiA9XfabNDqutTFbHFYkUTzKb1dPR3A57mr%2Bljpn2l7zBdXifDAMxCNGPJd9c9Kf3nf3yPmcsgG3re8YD21SvWb2iXCm%2BwCrRaHs8DfZYJO%2FU4aF3T0GHv%2BQvR%2BShcyWAvd%2BpqZ9oyVrq1TIk76o5TyuNI%2FE6KZCqgbIPOKy99wLOcrBjNGeYEx44L4URhc%2FbvOzr0uojXl%2BTdLWTEarzBeGBqyQzv4kvUw1sk8NZuE6wfsGjFlgblom6diXmhtY7LWoVXLLbVgyFQ2APtQHiO18cSk4pfSxFbacWTqk40lI65Cui%2B1Wqv9SopMIKqnr0GOqUBDAXzyJXDaTzQuuVFaqtigDrtYzsMZF9tDhRY5Ds1nzv%2FJxfbg25oKuAPjFHPqRpwuQBZr%2F9jXXgWRxTH4Za1JfkusdSqbVWHF4uq0eOYjD7dNJxzaggpulcP23kqrgaisKmjk6GfHwF7PqFvqppETc1SV9cy4luClC%2FH%2FsIfCElYG9YSgELjV%2BUN86IbsX1u70aIbpkFUqSauakHhU20wxe3z9C%2F&X-Amz-Signature=de5efac7afacf8c22fa26e7767e2b492eccf2e6c5daadb860ad2b602e66eedb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
