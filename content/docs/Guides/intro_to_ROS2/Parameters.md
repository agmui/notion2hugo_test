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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTWY6VAF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkiP9PWlPpJu1Bx28tYkI%2FKApGyAjKAZXnP0nV%2FLFoAIgKLfGVYcjvDTRrKzXzMRqsc9OmQxPsCGjOqWqKfNIsY0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNMlBwaJmujh9vGCtCrcA%2B%2BLZeKpBXmqt7JFZuWVni0peSA6yRWP0A47qUH8YbA4MiFpA0i53QEpgplWCT2%2BF3CUib3Bz61AxTr6QSmhBtZ6pWunYfiUtY6Dfd4Yjhb7%2FhS%2FxTJGrXPYX5VZ%2FDT8tvaFpHbapBU%2B5XCtUU8f1e%2FSh4dxSzO67SxciiDt%2BOlp36W3BOWZ3msAeNuLOPDAfjpSKaPcG9fajh8%2Bl9EttmxfegAKleSwyJO3LpH0%2FnwuKwkkz86s6e%2Blqdkpxj3jmnAMpmuufjM9gkpz1TdNWd%2BqA6dGnP42w3RzsgD0LmSKBfo6jARo85enO5eZCrp1lmUyyr6eEmiJ9STw750GG5qNDFJhIVhnbkrpwjdokKF2%2FzV3fE5S4vfPr3jgjwvj2r2VDSUpbWpd6sLvE4qU%2Fr51pCvcZtjLWfJHS5OYhYMfh4NmD%2FTom%2Br0xdmN8LQTl9nGnq5o2YdnmF9v78HhX%2BXwtp09W5dcSvJrH8SKp2y63HUbUR839YmHk5mrsNGW6VeoHHmXPLcLnRKAcsy6nYblmhLloQn%2FB%2BazY0UfkNUHc7cYNRXnuOBxEyLG6ta7f35iGy6SdJT1ir5U1JxZQN4MnvX%2FaP6HsVdvcMTOS%2F9twBoRwWcImZXevkF8MJyOjb8GOqUB7OUba18bbVx0AnL8slFTGFkHgJfOqPgvTdKGLgR1GErYWysa1vLCaON3g9C1EDtf9EkuzPFeDghtbPj3wywGUcy9aHFfSZRJ97HnkGnDukwUAH8efQvVTcEzfDo2Ki11p5TiYH2JS7YUiFJK%2BCCab459hCRqwIFbbl%2F9%2F38nQJxbzJOMeGSwzr01a9PwyNzNb8R%2FNR%2FoTZpPMooFufUCpHwvz5q4&X-Amz-Signature=2906fd3053fe04f475c006fcb598516628a5042b62dc85e0bb5a8284811ffbc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
