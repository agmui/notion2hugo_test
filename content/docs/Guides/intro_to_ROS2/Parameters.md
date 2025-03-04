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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBCRCQ63%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCte8lxduUQ8MBT0eryotM9BxgfC%2FwrKNltK0nhQhRgowIgXj3H08n3ljERAcK5c%2Fc7kvxnAVfEiKVxM%2FK1FkSJySsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6lJX4camYRUKuH2ircA2PQ7waTCYxbPZ6ZJykFU7PNrB4DARA48ECZl7t6LByPR9O7H8rz3XSncrjbTCUYv9m%2FabSJLjJyX5HpKQjRoUQ%2F0%2BIK7XqHRKMbBUGnXtr6JthDoCK8Xd6RIMol7caWmUr5Kwi3XDj6a6kA4TjXlmjHelePiQrlzBM7auqjAZNdqdQJ4CR0BqUDSjsDhc0XoF10qip4p1i0J8%2F4XOH3FEZq%2FkSxCGEddDbMwMCsJdGP%2Fa2mBddFVabhTNo76hf8hovgba2QmAuXHQCZS4Yw5z8PKncpA%2BYWETX6eLQue6VLuARc3Cu5MDzWsbW4Qe1RxfRmP6Q0LHHYiKZLebtvsgA7hzZFAofHSzlewBouFZzl1DfRIUFZPz%2FxJIp2naqg%2FApmhTMdZv0lEZQcoMriMcJXt68f9rydu241qIJIHUp12G4YU2r3DWI6Zb1daJ8ZnuKoMWbjW0f9gopeI3f%2FcXHCmdYAounCYzgOI7FWMRO3FxTtWLr3pidJ%2FtcvJE5yfutg1UlAbjaOjlLmE2AVjwtQ34Zn86tkAGz%2B2q9W5%2BHzo9Gk4fnShrRwkUOfb8f0ZeyQAPXxC2q4nEJuXOHaenueBXAmXb5eH2jhDL32pvpm26e2418IQqxT7u%2BaMOj4mL4GOqUBf5d8%2BcCFNL5feSMJxJp88u1VSC%2FM0SnN8RekeAuAkNzoaDKOGn5BZJIVzpNHcWFiVj6CEIpr1LvUg7r%2B1Vd%2BAkJCtFbYgGalaxxRaq7AruQvBdieva4Y80EG48alC54dgL1hbEp1ZLfNsB%2BhwrPIDkNmLEs9Xk5FeSLjETkCRC9mQQE1KTLo7CES3WqbxvydxCsGkX%2FOJI1RcNKcTiA4enyw6WU0&X-Amz-Signature=2b395bb685285cd3f882f96cc326a627a532e3d199612e3f5e66d2c5316349b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
