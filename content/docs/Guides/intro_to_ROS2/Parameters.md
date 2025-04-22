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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJXMMVO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEo0igz6NxBds4IaqGPGQQON9YL48IEDmbimWvG0Oxw6AiEAsgERcLmglSAMP8dTThfuVZB4pbnLo51B8rftL3iunqoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuWmhDMjZQdscEXsCrcA4H8xRtfXAresr4J17bMkMfZytvWMKddjcTuR8cCA0amsfOt33Sbmg%2Femp%2B178KgsDSwwmpCSFoQElM3U9yZH3tBUcGIm49B00Rz%2B7lQCCrFOyeVhTAuLirEVlS48yTAiQbnUHDXFEurDaIpV03TyYDwI7fvtT%2Fil%2BVKstyaFIcKtze3a8bDiqStXo6oGhSEoP7NKe6530Wh2AeNEnQv4g3OQe%2Bj0MeOM44ElZHFUZP6HXDXJQoWdHNL3ApmoL95r%2FnbdI21bwJ0gOmIz7vQV9e5DiDrGdT0Nk7TA73J4%2BWVizDHYBLN37s7Eg9WX9RQolIfocRrHEacQ5kNKnmuF0%2BQU%2B5ayyW24nWGzSTPt5hqras1XWeEL775L%2BfDkOEhrh4SSMCgtHzc1JvlqEVgWAqRNZdTXCB5AtvX80WFjijKdie9keC7FDlQ%2F4qh86ydLnAU1Z1uuxYpsA9Z8NF3Umt4Dm9UFZSPJoq1rJlkLCHy7KaLxRA%2B1bnxieqp%2BOQ9O3Ma4avpzzUc6NVSI05EQClODlQKv8KI%2Br42sQN94l1jSQ41F8DEjKuAPWa8WG0O3AkfmVEzpsBzWCzEUi%2B8%2Bc1giELfEKzVDXCg99c7s2fkgSM77J1E12T2X7b1MOjfnsAGOqUB8wCpG%2BffRe4guoBQ9Lw5eQqXpHmRrstRxqh0IHoMU8mW1jgBo%2Fk8Q%2FR5sUmxPhe2cgF5iaAuq4yULwdpos3Ra4ThCjPln3fCN5azJlBLkkkiC%2FJiD4Q7Niip6%2FBO2Kww5GYBPeZtn3v%2FN4J7f5vyiWWj8IWB85o6d18bMADPx7uLTeSgtw%2Ft3YLF%2F91D%2BuNbxPYFDL58hHbICwIivP1rOmKwf5GP&X-Amz-Signature=7212d9ca66012bdba89828e2bec1b575ee45eed3b0a7c03d27513765aa4f4bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
