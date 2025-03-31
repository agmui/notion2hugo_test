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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3SNDID%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHEqPCsD0ww4zS4X3EWzBu6QYr%2FqqIOpXMwMzqpve4%2B2AiEA0FeTMUK3oR2u%2BbDk5dh47CWpZ5I00T0TkSGZgYZM7%2FYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEl4JrXaMxXWWDNqSrcA9urzX7Yvya1t1cOiWylFrdvmxtqc4vxua2kfan7163Y3JV%2FwUyXcF%2BrMAlK3RoqifBVoxfsE6aUkE%2BzYm1ngaMYxbo78azlLn%2FU7dKf%2Bmzm%2B0fYRvvUmJWLMf%2BxNfMfoDOJtHbsal1TvFJ2ePO8KS%2FzQ%2BASRCl%2BHC6iRO0PU4Y7yFQxtwfHdjbjdBDSzErO9NV8co2sS3IyXlEJWsC4sUgKaZo9tpBL24LBjt4QfbvpLwj2aq%2F9d2z1AuYU32%2F70rjYgwM56SRgJI%2F3rkzu4oHkS%2BpOTqOCir5O8VlHmbmKqDdgQXSFMQLlWc%2FP2JEl4gDQIY79zurNYXnEW47fz7UJRtTNN8yrTAt08EWH%2Fwfkyy20IbVf7K8MKkMisKNuMhCl3eZtPapsf2Lrll%2FjGF%2FdanX4UMmJ2A1RVm%2Fb%2BC48QE1%2FEA8BKZF8V2ou39ockRlZY4y68IA9mE4jK6gViEr8XnsA5P4CXmUewd6DgjHPz4UNlE0Yc8FdvVHK6LuekvMzkzd8lXiUTDJoFb9c3kzrEuj%2BtlWqsjEvaFlX3bMAL971mVT7Eqpbt5HEowfd7LJqCRICl8v8siyuqHF0ve0uPVZjOypEKIGPCSX4tShH8dZ%2Fj92Xsy8xtehpMLC4q78GOqUBNDo05b%2FVSFMe5rwT%2BbsYgPWoxPNdy4%2FsoqJ02neCGtko9FOMs2ns84GeKX%2Ff9xyZJ%2BuC83yMYl7ZJxrCnS0XPs%2B%2BDkobJZOnUo2fQ3sYlE8mWHqix%2BkeYel87oOzXp3hwQC701msJox9AH6rSvd8IBnVZV3KOW8sDGwMeLYeXdlav060ff7ghCwykQywmTaQWlnB1vkyRvGKHwZHjz9A9HLJ0aLN&X-Amz-Signature=de2e27d43fc98be42c0b77baf8ab5c3f131e7e0f90ce74c25ecae2a39bdd27b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
