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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWLSA6G%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDCkZM%2BnzI4vIa02ZLKyGqowxj0DwiFJFfkcTyB3G6g0AIhAIrJ11OotQ7FO58BE%2FPA0A2SG0gNcQ%2B9AMkp%2F0%2F0NRHtKv8DCD4QABoMNjM3NDIzMTgzODA1IgxaQKKctZle3%2Biwp8kq3ANUhzX7caCl%2BMAP6OAul2naYlQ9QeGyqdiYs01hqcm33YY2sD3gUUwYSseV%2FgBn8jVv6IMSoE6bDFmTvWiWcHmmgLmZR3BqIvWFAJC37TIuIEMqJnN7mtItmHrxwEVBypddG6xumUmr5s3N3c9JePM2V0cW0rL3bAr%2F%2BzMxtw%2FqBxiaIYMAeScs%2BwAeMgssqlnp1Smrsb%2Bz5mcbsZugg9H9G354iegUSo3CJEwYmPCoGG8yZGHazUubrYsMqWXqZCpCQ035GKM%2FftUjdJjUWllHeLLuafi2341FnNBOGdgpaKfwxqD5uTJcchPJcG%2Bu0ToTJgUv4nben9U6Z1E1IZE4jMopRSqrf4%2Fj8Xl8SIsNYyH1Um4%2BLr1i8G0qFxqZJ5GhMVV72urBd4pTMFna4L5IrgqiK6MFr2MRdzwVJeVr6uTi4G5wW9NOaZaIQ9MMcM%2BeGDe%2BdGRYfBK4egI3wGshLBndwxUu1ky%2B%2FNENu7JToOyqoyZkkSmnWsebL9K7hSKnYQ30R%2BT2spbK3NZv%2Bqp40bTUFzev6QaOybdiCqiBpZMBHss55qZPqbnCv8D%2FxRW3Onk0OOrmvqZ8FdD6FoBWroMHTZnXlARSsR9nI4VpWviMpAzE3Y0br1vgbTClnIzEBjqkAZOqFL3axlRXJ1jTMJ6ehZrK379W7zCB1%2BKw7H0RY9ErhGRtMXV7P54IvxGXZwzx1k%2FH3NQEJVtqtsI3Pyk%2FwkMXhOAnrBuI9wETMXyhwtY3twTpdYqt0AUG2G0LiWOFI0bTTsCQ9UYQIfohYBPXpXf1NEXty7Ddrpa9uygVETpmW%2B1fW%2BqMXDz9Y9bdBnzsTxhuw%2Fe8IgryL4Zk0gfE0NVRjvhJ&X-Amz-Signature=ebe49cee2221ebc45199a4919e49d5eac30d8658581267564bbb90fb983ecabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
