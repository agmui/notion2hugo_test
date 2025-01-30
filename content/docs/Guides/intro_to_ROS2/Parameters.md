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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NHQRQTW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T081003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHf1FZkMKHZh8CuoUHZC4N2np2uE1pl3tF2myLNQ%2BWypAiBhyn9X7dQubCD1WPyfs0kDaxSX3JjbpuKBOL314rb8xCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtiU%2B3vJreP65Dil3KtwD94yq%2F1mfXgU89k1AJ1FZIdV%2Bc%2B0umThkAAIxywWZer4cnFI3Oexx7gWNf3xRzSDk%2BUIeM1kO9kPx97UgbDgxbvt6EW%2BnfhOoWjy13SJWSdC%2FsMZxa9UlEF%2FXPJwmx%2Ft%2FmRMcjzSiC9vyowbHUAdD4AuOrWiM%2BPbJH534JOmkffeuNcUqSzuPUy7rnb9HePZrrUI%2Bl%2F67%2FxTE67frqABmHaey0k0hXvEQvPGkQrqGqelpRXrp0f2b7YtrOnGAHC81eC6ETZCrPvxGSL5qkPrwW5BqZ5Pbm2Zy7kvQN5BE4xL%2BXBKah8YEIN6HqMptn2m1verUp6zZBGArg04%2F%2BV8XVCJ5gt4G7sRyJ958hXcw9kmE8JMa%2Fbh%2B%2BOrIjWl8Mm31zJ3w%2F0C%2Fjq32wl8xrSlZ8DdPENZdPPXyk%2FDzTR2GCw10jWhriSn%2B4tyPMrLqGGJFo3nwXC3tNTOfhcY3iVqkCEU1ktUHTRzwMBe9OSz48qtNnsLkp%2FgqfsfJ8tA6xSTBDt0RpWADifdVNM%2F3lcNUyBy6XhtkNUhIVq%2BhFcd%2F8Xcpbiau6d0HUoHTvtnBIuZx4%2FplFjJ9%2FBRT9BrY37rkZgWpCyl91L5RaLy2tmFIKBMzmKj%2BA4WwKJh%2FknAwqaTsvAY6pgG5rI9ENxziRGXykeV6sTu1DPcNUJMzf%2FaJ%2FpPUZyBSKxzFfT5cyvSCW8H6PU33llSWUWnHaQoiKVKX8lu9m8jTDzGAjc7VBOm%2BHjLjEIL9T21lLK5qKvBtsULQKIR7eWpJGI3dWqd6lGNVZZTBj89Waj0Z9iJQYvw%2BqQdVZoZPCJYeT%2B3iW7MGLqyvWgOnewuKqKplhsi%2FD8XNT6nQbL23GO17Otxo&X-Amz-Signature=b57ded57c3ecedc6fe6623b96935af2a9fd6201b6b62ebac4a746b67042f8a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
