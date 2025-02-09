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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77UH4D6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjnfhhbbYaFE%2Bva9sqC8nrIxnJ0r3q6uIm6%2F%2BzTvt92gIgMtNFKBYgbxsxxAoW1fwkRbZ%2FcVcEWtQDH2XC389nnKIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLx0zCtAsDzh0AqvjCrcA4z2I%2BxeAAmdh2F5%2FjrgUYReFeZhhIFwnDo2WS14a8aAFnzKdJrX%2BSKgS9tguxl3C7sNsLWQkM8y4vCG6U4Uqr9k2p9BV8va2unwJG5jVdMiaZeO3D2Q%2FOeInAHqRaTV2Pf1JR9JG55dbcjtANP737ukhtdM3SsmPCkZK1j3tU76uYA3yEyweXWMHJ0pGTwVs%2FyVnXK8aJ8B4jHAjU6cKV3I%2B%2FfNv0jfc1GJ76c4sNYDp31MLhG6bCcUNPvP7iVk4r43vyd4fMcvlJuqoOlLHNKYQAjkqKNwOuWnEUD7EX6LK80S%2F7kIXZs4mYuUtyg95WlnFgSVBA6uUYb5%2FKmmHmT%2FfRBQUOgPrqoi%2BMu0xMgtg8%2FRYJU9O7VwGASJgogeqvIkr6GRfOivZaF2YACp5jh8CHcZLA7JTgYDWeDTgpO1mDGhNVj0hsdNCjsXsCgNvpaxQ1pDa%2Bx5CW8jtFHDpULotUtvMioo9MV7NcHlaJBWpAXI3jbiJC8QyUgzGu5uqfW7xIPebZf34aTIKWjKW0dvPK0H%2FKkyfFwC89BNRtPWzpZSwj63%2By%2BXwprE4EVQc6NZYDg5BNB2CPewEACZaZgaBffdREmG%2By8b1OLtfFtYn8%2FrfI5355ZxVmzrMMy%2BoL0GOqUBJ3RIVDRKYCdL8AOYorZdm9GhBbOA90B%2FUogd4cFUE%2BEJq66ELiTvdNdLXAWNn44jx8DdsCEORXWcZDVhYiOjMlmfvxoFQdQ6GqqnADZTDLsesZMplHEmMGKmOgkH4mnE3Uo85XyXAU%2FW%2BgyLqKxusCEmvu1c%2FxoH28FvbyCTpb908qJCFiOpIXTddYiZbOnRfXMTwu66Bi61SHkUvqvbiWgzunih&X-Amz-Signature=d58505dc7d23fe28bd431c71e0546e9bac0e69e3e3875c4083cb6a4c505dedb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
