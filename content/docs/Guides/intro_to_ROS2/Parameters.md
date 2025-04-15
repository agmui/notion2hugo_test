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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEBEWJ6H%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B%2BBb%2Fy4%2FkMbTzW%2F7vWVJTdy9qxm6%2F469GkYnkulORdAiAL3Bf5num%2BFHXYhYkmsEthavbwD0iX6rDzPJ1hEajVASr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMYdIh8fvfPXiOEaXkKtwDFmziB1H8kGoiftP8I%2ByCEsTMfzqNMENpos4dnJekHhKk4qHaY09AXOVqcfuub7gvjy0So08LWoEvuafS46rMJflmjiqoYHFTRamxY5Q2Fi1pT9cYP%2Fphh451hPjazggDAqKIQDo2qRpVK9R9QxwOgFqin1J5xOTtdxjuK3iP9zNcNC2R0aS5B4KDnvuraDAgM6mRUWq6wGtMpo%2ByNeEkLkCJLkqGVdbS8OGZAIqNnlBTllJ9dU%2FJVPbWDalNE7jZMONI%2BEgOnW7PWGT9MKRXDARJHLp%2BgPDRnOnNJ5MzhvasF6DFSd0UGfsgYbt5y0cSYOzAJi5V%2BzH27GG%2Bv8P2swr%2BOs%2F%2BCQwCHrAJ%2BDElYqT3fPTE6lESUuJm9yyhFWtFdQNzZmCuL%2BXtOQtO0%2FPqP7l4cPg3xs7b5B9pyTADDfMEbM9IjUPtncWYKpbGBT9u3SU%2BYQaYWq7skWwYS7hdJeqcmZnWRe%2FMiXDYDsC4wPtp6CamyEPlf82zbGitIQyJxnAHPHmaDapRgD9LuYyuCOXaaKuFnUJYonN5oO9ldAc0eBXtw%2F9VYjLapB2DZGMo9%2FT7pqkMxm8p%2F%2FgiiYYQT%2FfpeihP7ualRI%2B%2FIs8bBz2d%2FJg2YxXwfpsVeMkw6oT6vwY6pgFhjKopBSJlD%2B0tducc9cAcG9ymwtZadFlpmYnXINICtUizc4V%2FlQIGoT%2FOi6bwW0mJ%2FxdVebFfq2nnsAYTqxC2jEYtuXlIGQurf7zTIZV5bcFMJSX0f%2FSkFKxyKI8MUS%2F8UQoYeJ8h7JCN%2F84M5GlxsLvYSIT4EvGDnHfy2316V2usOyBs4KqHa4gHaH9XFPoukaPJ4oSqKt5ruNKXv9JmcyfGOvgX&X-Amz-Signature=e233ec82a40dc26c818b803476a7d10c43f16e13d25df21473b9a5bc6989851b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
