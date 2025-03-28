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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWKTYXP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABrlLH1%2FErIkEwIaBlefwPFU39smmQG9B406RdvwFGwIhAIdrVD61RnvJLb4Y8cOY1qFskTVj%2FG5U4OrxSGYEtvMhKv8DCF4QABoMNjM3NDIzMTgzODA1Igza4lNR43Moe8qVCP4q3AP6uMdVO9UEckWmWdMe4gAntRyRDer3j0YVE1lMIOd6Rja7cPxWdfrfBKeoscJwZlvI3zUm4MoFgLfi0XXIr7MDMmAgPKROlhP8kTRvJlhdw%2FAh70rjLh4EFT8uOgpjTb5m6UjCy5PcbsFWbExFMRUkIekeENW3eSjZgllCTVhomRkM7CXvrPUPoM3XzxKFd4jnsKJwKszN3ZUiEOKPfuJ5Z%2BQJ6BQbIrNexxK9svm7mMvGpo%2FIphH%2BIgMlX%2BZDfOLOlPTk7Ml%2BEY65kn1DtRr8lHu5rXoFEmVOYfq5sZB3V7RZRxIbxA9qekjBQmincbpz0UmPjfNCDNiSc9%2BaXEuMuyjR7AnjPlqc3%2BjTztYBWj9cMZH3YojFuQ%2FX3fZPVa%2FI4yzQia%2F9WDAuHLuKcrE8Mv%2FXzK5FYQrpITEHpnciQxOkningp6OBJAbifFHRkVZBBunEeI7uWW7yx897j5g8QD0JVdM1u33g%2F1sadPOS6CunEZ%2FSunaDwBeVRMgRLma7OftIOs5UOSBsbrhQhQ2sLtahDv8YpInuvCGkIDiETHod9xF7dfaa1LVwPU0rCu1YdxqD%2Fx2biali2QNHeQdesgnGpJrS2VFkUSvtQDqTScLckJUqEzJp8yk1ODD9sJq%2FBjqkAUtR%2BZoscQNv%2FSENZtKHY7rUMGxOyqapnsW9unSwFCLmrqY9nzadyYM%2FKJ%2FNSOur4kb5qbKHXEI5q%2B2AKkJ6P3OB1Pl2YMUBf1ZZNNA%2F80E5y8GULIZBB22jgLOBsmg9hHt0aq1JVY%2FO9XR0CwIAnPFbvDnbU3EXrjz2iTUz8ARjNT1crPfHet889l0Ha64bURjBwii%2F1HDrnpvdeWyXao0oz6XH&X-Amz-Signature=db5f3a1a4959bd21a640eb17fd48ba16f6355660108d3a46ac3849675fc6ece6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
