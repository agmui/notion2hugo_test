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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIFWVL4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCaw6RJ11v4s%2BUwdpiH5NG%2Bp7pUKqQ5XX929GDXcTTJBAIhAP3XUX97uAYAuyKGAWzzgFRFRMIX%2FE5Gfngnk7caovr2Kv8DCFwQABoMNjM3NDIzMTgzODA1IgzLcAWywRkvwmc152Iq3AO3HeZ1QgL%2FOzjC8%2B4NVNK0%2BkKNZ9zw5IZ%2F8%2B25%2FwHJi8v8wUzOemvRM2qQW%2B7O1PxBb03pX%2BzkmXhjGDFF5Noy%2BuN%2BMRkvh13RNTVstehwrsa9gmI%2FUtwPPDWtuZ11PRijzjtZkZfFfIHqfNKrxkgyk612sPAdt5Bx3dS74DbRzbZg5mUQLoZk08HawoFldcR2cqkmJxhJJFUBzhUWiIXfwgfP6of1a9UYfqGqbNYtq%2Fr8cQcW6rCgNiFVuo6b4ows9hp2SQFQOOh1%2F5Txx7GTPqEICmN%2B9bwXKxgjC%2BtYQuRH9H6Opf0BBaR0Z0Pcd2docSDtJStgmkN5%2BIi9T0LzMimpwVQrKO4%2B4RpQPQdnW8ivKy%2BQzrJuCOovORjo1s9Ut35DLdNOxmiZ7lQwWwZRmUvCymi%2F8ASWmXd%2F4L6fJnfZfEmbNQK12O5kNQ1mPI4sl%2BHHGTAwMYPiin3hVk%2BuQBn3QmCNQcvBuG4STgxhJvp3e9JCut3q5QVT06WnxcWu9ixOdQISrUfP6jjr826guxsKt2JsWKwgux3HF0VvdogVwGvKPmWr3VBxFdvlPy5iwhI67lek2T%2Bbv0xSFEe5yaVQsd59WxCv%2B8XmO%2BUBo4KwmUsNcf5M7N7eEjDPk97DBjqkAbetdvhrapBlmFfU6h1bJ73b7QiiYmvYNIn1qf%2BUkMV5R7l%2FFCtDcOTT3QDs7bGN1osHVyXZgMTQbIONXWPTmpWRT%2FRCiih3SfWlNw0mp%2BI0zVJKD2rIG%2FfTS5maXdk5Nz33Lqv6NZhbpgHIkzLWwklJhkkSnZrP6%2FQF4R%2FAibkXJPUnQH0rOTX3eTZgR1ZEYjnt4I3sG6YPC%2FC%2B%2BBFxuQveotPp&X-Amz-Signature=a2455d55c85a9ef16fbfc3f17e3b70f4dd8c187f5661c45950edcb5ba794376d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
