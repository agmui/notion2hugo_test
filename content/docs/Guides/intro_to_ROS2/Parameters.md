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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUMT2AYM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbgdZdVr9O4Cjerb0VkYuVVi5a7fsUELWQpoXrcsM0xwIhALitT6rQW8%2B4sn8Z6UdlRGFX5GcmrIH8iwJoY3AfmOEpKv8DCC4QABoMNjM3NDIzMTgzODA1Igw5SPJiY0B1%2BVIj214q3ANqtoS076QNzAH7YNvsyRbRH9u9hx7r0sWZIghc07JaFAQus5j7qNpVTcJtaWTdo42nhGOTpvioy9Y%2BQIq%2BsztAhk%2BgIJ7SVrGZ342NN0toM792t2p%2F7SHJjmWrsrVHazalN4PxunFLbzpcsDdA%2FkE95yHiErvIFd0WjRBv8SGkqB%2B79CBYu5Apf2g9CM5EeIolnZ9HsA%2BtYXZvSpmOqO4nNEhcAvmJRgnRETuruFWZPdYnpBXUru0tUGtq2amdweYFngRhbKRTvCrLnyYiVASxkoO4TO5xfBb4rDv6MnChv7Vk4xPurAGpN9S6KJcrHSbXkpbZqs50IiRwo0yHIIIwa9wH2zDnb5E%2BxhHQy4W1rdusWA32iXukI378oEXjNsaGDUOSZ2yADpROen4QLLTaIKB0YEzZky9MINFDcIJaPlbDZkxDq1RvSPckQpB0BAtk%2BnUH2NCFx%2BeKpxvcazyEZTfFaCCOhOX5XXoGv%2FlLGzJAQ3kCOZC1Jk52jowxk10F8YJZxTRdtUMGhM1G9goGdqP4tIQNTJBRhEaiFPVe1%2BzuuDfWwzBtKJQsIpq9yKo6nWK6RNrSgArirvElRYy%2BMTIvPKhiHfosM%2FZIRH%2BHcDkWEpePa5%2BiGvOKXTCg%2FI%2B%2FBjqkAcytf%2FWZjxPFhGIsSKu98j2LykGT7drvCH8WyAqW29Sok2DSEscRQk7waJLI95sSvdoVJYoWhQyRdzZYBmTJkk6VAOcuxnsmec%2Bn9s4ws8sX8XR280wD5%2Bj1S5ModQWTP8ALtlZ7cBbH%2FHTJIRqDQYrd3oCMpBLLQ5scYzmsxQZLzb539d1nw5dLaluzPRxJubycLAOFKTRwzZjT0fG0f5iKcYJL&X-Amz-Signature=fd03c9bc9f391c574ec205311a48eab5ec4750e917b54d86bf826d27794ec702&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
