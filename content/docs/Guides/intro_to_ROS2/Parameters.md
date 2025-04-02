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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQKQVIQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC0TBnT%2BlwE3WMbVYHYYgZznlrKCGG0HXdABFHcYwiyqQIgY6v36T8gNKmkErU9IcZIYqTqXwlBpbVziwvtGUSYx%2BIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtQonHINvTGxtb%2FaCrcA5COd2fYn2UXr9Tt5AoarpcpQEtkrWwN%2BrYQEyLJPyReU5J8ZLYgf%2BJmvrfGNdC9z2JKx5pmnkI%2FqzEqbgDNeIV71FlwoUuzwl45bhnHU3wBGc7sw4Ji6gMsVtOE8PX8m5V0Gz5xjc%2F6ajkLvM9WuV9KLntAtseQGVwKQxw8X0sfDgwQnHcrxJzNNHvvR78tmWoVr20ph7%2BigkKoHfJL4PCAoHe4%2BN0eFJlErD3Jkfsdc3FprF%2BvTyqFkTZzhNSoTk0jD7wcOQ%2F7Gfa19S4cRukl3qXJWODtXNVqC5zVVjMcbnO%2FTAlWcz62UIiAfx%2FLVs7qqRyOcLiHBang4spWfJjtdLvBsQiNL1MuPuRbrexhWtWnatREmMUeaRDF4NuUmgILQhvqx8yuPJhUiKHDvSTua5f%2FFJ%2Fv3FiXtB7zEsSfiXR3AiDyPTFMS4e69jfJOzA%2FP9BzLNfO5mJ3P%2F253NVlnePoVHHr9VNpCSl50zXB346WSfKzyu9BAmVRNXm0ym9DqJNB9mYZtP%2FLE6rLQv59TVMSG0qrC0ItvtswravnAeTfFpIcRptEblfZL13nWFdBH%2BLRL%2FWd2QT%2ByZQjIVZcS1LjiAXzvEJq1BAZlSBTvVuEyhVJstiyD2SHMNT7tL8GOqUB4s0n3UG4Tn6xR34hdiyFXl2pMwdd7W07fo30gbfDByXhcQPGzoNXjiXQAuqfXyahZE12x9s9Djz%2FPAYdKDKC2REXhsO%2BzLsxfBHEXEhyangHIkqBZcToNwA9ggAUy477ASUsO1m2cbg%2BtW7o6spdm9c%2Ba8kOvfbhL5XkTSyMqmU4T8PZ2N9jrXr0efjVxcLU%2BbY9yBYcheXlg%2BcndaIqVUtksRHM&X-Amz-Signature=677ddec746756878d577eb8049491516c7f5324662bac50b25331e7920fc13df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
