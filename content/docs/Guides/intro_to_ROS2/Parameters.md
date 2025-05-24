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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMYT77BW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDz4a4EXvhxqVnUjadJ7uEKZRrkgvgjmriepALJ6rjypAIhAL2rOzilbqshdYmJGQp6SNcMiRoz7JkJY3faBNSZE4jmKv8DCBwQABoMNjM3NDIzMTgzODA1IgyyU2fW%2F56K4Pr380Aq3AN0OcY2OyF2zTR3H1OKrcOJDQU7EpUNgBv%2FBBiuqxkfxsMJjS4lUUPvyDUwEn1WMSakJMorRZry9JFHSnTl9xjfXyE3zQvc4D68RWYW2kzRMxJsJjyee3bj7qyOWcJowGxencbwoIJJ%2FDsKq7bPNukZFKcyhXAlfkEzO%2Fl%2B1ITeHGQ0T%2F9KkzpC0IkJFf2P%2Bi63g58AnXMgjo9zvZ8MnZvcsTqI7nWMU0tH9SCsh6g9p%2Fuw8UvG4kR4ILAl9%2F0HNsnUmDGQ0TCkRPXP5Hev9PvcxC3ui6NvCTrmb8UlTwMtnQYdyEXj6me5WK6502FVhwduDGMU5Mpb0qBrRwcR927NnSZaYMAvq%2FiGaweVM%2F9iG63E6ydpmT81FEALbeg9LSBkD5IJjwBRP2iiGCsvF9SRip%2FZPdhxUGvClycef4eMbHm2xXJubhWEREcehjStc5atCNDq7k7NDIYiHa9dMGBpSOWa53mnyZ3tLJXNqBS8YYkFUBPO7ryWQOpjfCJjj8I0eJnwQ%2FWRZXTi2gHu6kKvahnrKbQJCXO%2BICMpk9g%2BLwDa7VwwU4V5KGEjuh8snlrfGngpCmcLoyGTWcAj5zn9LPNnrc%2FBxHcXBCDv9IUeQtvnbfT16n2vblGWGTDGosjBBjqkAav5qClUz5S0xHxNihnXqUFomhtUI7rxoNwcwF5M16C7a%2B8uT%2FlO%2FEYf1dnMmkmQQIvw5829Sru8vgv9UVQC3zFmm2fNpaU6oH7%2FE7ane8YDTErrVYd2QgsYanSOkMIyCeMRumPhlLGsiWlbLsneM4YZSqn%2BNDr%2FYRuhxoMyLsPlVok7HmhOPIwc21AtSGmnJXK8OV%2Fwkmo0%2Fj88qjBDpGm5IXQv&X-Amz-Signature=6bf5b6d9e867bf2b90cfef02ee55f24c5cc908e23e9084a29f5c3f06b2b88acb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
