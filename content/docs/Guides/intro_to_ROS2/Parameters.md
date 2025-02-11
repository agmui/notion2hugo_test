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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7WEDB5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFY%2FafGhF3UVC1VUe8QwFqYlMNhbKAhG7pimEWNHWkkAiATApyF6xHH748yi7oUa3LK%2FMxQ%2B83IXa7A0oPTDvIM6yqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0dcrFaLPCLZ4b0x9KtwDSgJkGyczy%2FjRKfEKoZcaw%2BBl6okgmXDGq%2FJa4h4aFVvXlUHdSgWrewTY28qlaqlysa2otVNhkV%2FO%2F5CSIUdP7G8WNmjW5Lko2vQ9BfR%2Bhl0dxQbwkjYY%2Bv3mYMrQVLvjDWFKxKxmxZQ5XPYXziKzACqhGs9UCW7kDfIDCWtgmiJGxcaU2VvXvEfUWS7CIQlZXX7yHoKEuYsxJWUqxPFi1ReCqCk0EVAdLwqEph7KuTCmFg8IQAB%2Bhc77qP2nUWYBt7J0cE%2BY2uqQBPebVIDQFyV6Ik38KO0b8XTx1F0dpa3ZNZEk2V5Y1%2BlFv7M7eoYvN212kFhfGusrJ8se5lNfD7EHlsHaFma%2BFzVFTbzv2hBU5wV8C980sk2GlOxHrk%2FqlMtmFUJTAVCVXmULbqnHijNVHrX%2FDzRKWwMaK9sen%2B%2B%2B1p1hIZu0wswm9tkAw5w35%2Biy1pjX%2Be0orOZK68kFHIAadPrumwCJr2Dy%2FtrJBRYqzhmMWOdE%2BEgTPvgJO8nNDiDX0InUCFFcIRgRsbZY237%2BFGWDywO2WsB0jFGypY72p18UuOrpfLL%2Ft8%2FCYXJlGvasvVpS1GgPWtNZ%2Bw0YsCBhaReauxZXBC7wvBUpvH%2Bwxkwc2f15OGgXzrYwzpOrvQY6pgEU00BaaCcUXEdcJ%2Fpjbvm6khKy%2FVatizWST92dyMX6gIRosVjEjbfJLHN9xSZg3YxBztNvhtMgETJrVC90U2VBHMxFCmL2m2gQIiMYp7xWCixrBRZG02cXXYkNMa0gIKQvwrxqjbatK6gixk1fLGwXlO2F4pAIn%2FgYfWUTq%2FGgMWJVGRQMPC9rd5aEg9sV3nc7N48kUJGiVojchmiOvE9ToLYBfu8u&X-Amz-Signature=d3ff246abde9db78cb81f28a551509778d8f61d082713da639c1a207a68f372f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
