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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672Z4YTYZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDpdQh1stNF4te55XzKAEtaDBFvP%2FF42%2BosshhPcQpYPQIgSomH3l2XccJFY0rDTejBo4MqRJTgBC3e6cwt%2BlhnXLAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGMnzgE9LjOsU%2FLjCrcA6EnlOCOUPqfPn4CzXJw6N7JLzmDK34uPcvrgY7nCmkpsPYVehYAd82StklSYNgITJ8o%2FYbtzbKykK69lMcI8PX1AlWYZy5ThMmnBnRSCUCHBcOY6ADt5crn24M3o3GmaiI7syIoRfdm7smalkBaifVeLYfl2%2FJBUtthhhVUVBP7xUz5u%2BlJAtOEUzobqjVbfbsym9kzofblVJFDPLBDumadd7LV7bYlniZGgeRLMqpfWiBlIWqqN%2BDPt4t4JjgwpK5t5iCUSqauYkIWlUQY1HCgJohAU0HLcw%2F4eTq0FxkX7u4sgllI62vNB1Nrh5p%2BiGO%2Foubk3kLL2ZOuvAYIqWzwXjv%2Fs5Qh47KJEWvzaQyMHM2qzLX3QnsVrpZR0MHhTEC22q%2B0lJ14rTo3BzfkbnOCadsdYYLBtVkFHfKppipMk6%2F5MfhjUd%2F4dqt9y%2FYhrZiuYf7d7Ewv0WV1J7dMqfNsPPiCaza%2FzgFGT9ZtaZJCZy%2FY7xBpRC1t3CN1Cns%2FCP2b1qS0yIaAHNvtvbGcuGwq%2BLgh6j4D6dB7o76hwO4ndFmd2swqpv7w7ph54%2B5pX6QOTyALvUxQIGK0EVRWwFlgEd%2FdwF%2FDe5qNhfcqPYupCZsalaAiMUcpfC1YMPvLrr8GOqUBiy3vh62m18whQe%2FjsvLpJ3JlMdy4o7XfPvSaLQdbH1aq7hAqaOz%2FTqwEOiBcYKNkdwZz2J%2FyxOXrhVHb1cfigftf3ISIcSDB0TzCNRwBMPMxZZPYF7Rkl5QMA%2Fi%2FZscY8WdYwkkrLBdE1Q4CY7Qao0OeaLuw%2BMIGouKgQ1SurKJ%2FAcYzA4o4G0RFgqSFZgBCSJ8ITh6SfwU7V69QnKKOtfrPSN6f&X-Amz-Signature=5eb7e00fd557f1a7bae4947192e22f8cb73df807424b66eb4cc01f9a2959d59f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
