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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECMKAPN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDHSf91w%2BvNypLokqHem6bR9votOvLFr0%2FMTyQGhakrmgIhAPZIdXGCunQ9wS92Sn%2Ffo4lcA3l8gA3RiJGYi9HQClIXKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6pSXsSkKWwNxtuBcq3ANiCDQIg8FB0p%2F0TinXetkex7xuMCzDdrvywuAM%2B%2BE6iybmpWpSjboCR2OpnvK8vD1OP1xp7ZC1soDKvkZIR0tMF69m3PZhIao%2BZ2MsbPHTyWotESBWXZfO1wfRw8%2Fd8lbpurloko44MF2%2FvXHw3JAavU0nK6PJ4fvWNZaYdpkSU2jqo8vaIeszf21lRGY3J3xiWAt8QAosPZVLYjiL8j6mJUHjepWrNV9%2B5f5uZgge5g2SJHxdN%2FKrjByTZsNrrvXY2ooUmRs7LGa0GPJDrKdpzEYC%2Bo923IiswcdRaKqKsjZ51L3swMxB3LFj414h10kn6mkwoRD8r5Pa3q%2BPV8SALWlNvwA88Ik4GbSGgJjzBxiK6zb71Yz%2FYRzgtCz01blyJm3kpwbNpjk7UUhN3zQXOam9QhqPwrrH2yd2c8h4Uo91bC5wZ%2FuRjt3PSbYf0Ka5%2Fsrsji1BFEEktoAMTyumxNOTTjkrXfuZBp5OTlGs6pQi4vtIENXnHdNW%2FhKnnB9f8%2B2%2F1cfUY3MfQsP%2F60OLRCLlJc0V8%2FW0oVoApxaI6IRAQVWvxP%2BWvf0CkftDcXN1wMzhgxmF5s5K0PiEro8WWanJXLmQmgQDsKcDv6vYMyT6Uacq7ShFPbPtVzD5qb7BBjqkASbABIcP7XaIkvr%2B6KLzBBRoFKca58bbJGm7BtIPtYhELVFcNnVa3qd57od4v7RU5F%2FjLfATrO5egYZqp5Ym%2FtmBjSjHaBktryC4Q6wwhoAH14MR%2BLXmMLw9YsN%2B376f2c0pVASIIa135R6N1Pc2oy5%2F2FXi%2B2p%2B3zX7DtbmZEBxtkMAKEUSxGlrOvVu2dfS0amy4Q%2F7laPh0cfDT6xB0uA61mg8&X-Amz-Signature=07a1c21412d61b918b7e0f24e9e4cb52a3d46aff0b62422f0735379f00095883&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
