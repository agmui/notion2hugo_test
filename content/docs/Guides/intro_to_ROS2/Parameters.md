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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWUQIXKQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA85Hb639MCtnpojz35URxpaK%2Fq0c%2BogfI8pK6ptbUoXAiEAotBjdmXCoZfwZEzu8MSEvdqYtoVIqR%2F2Yw2ddTZjBpYqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9m%2F2%2BGj8elo6cWiircA8mF93e%2Bo%2BSFImZw0DU6JPBBPwyJtYMJEKxk2HXcv72A5B4HX4b4%2FlhHZoIx%2FQL6XOFoUbvunmk6I9YF4fNEdd3vmd61VmCnLZBa5G2Je59rT3iDZTtwlpBUkHl3u0eBmISryBsvezEANARU6%2FJNtd7IV3NZgKI70y97pbKdDmKlV8dG8cFAwaN5aF%2ByJdYu55ia6%2Bp3qu4pT3Pr99FnjdM8SnL7OIZofGcvGU0SUrgQy7SDIdN2b74JtB%2F%2BbWhi0s9h3TrKxYvG2q5lDbi%2B%2BCJ8Jm7JxHWEz1%2FlElwn8AMeZyJnOG0pIMQTZO10wTDjYVWUJh3wJOCDhbZtwKTko5o5mWvTLolQ10I6UYTFBm6OQ3RR0LnJDh1n11%2FhcR1Rk78sIg%2Fv7oQkIGaOBjM0P3aOR0Rfi9s0UILxpvKRqWKfpz6nKlhDvwa53G1bztAmTYJhwH%2FXTNCLBFK9MldFlYq8Ma0FIFHRwbYW7B%2BqN4SjQiK4SZ3A7HmhDhLOES1T6aCbj7I0e8X%2BupQWR7R7sJAu7k7uBSqjWstM35Y%2BUbDs2Xgtwh1wLvErvIaQRAd2oZlynd0hf0cnuobS3pYT6MQXMs7%2BgODiHdM9BqFTTMMn8ttM5bR%2FbZ9hnpqSMIeQtcEGOqUBAaf0R3SR70L1jnzCTz%2BOjdLvoYqnVM4nvDEonf98rzf1SaoXnU6W%2BUOeW2399VmX1XGbPKIhSGL9%2BwQ8NsKN1mLiX2CAf4sB%2BB3gw0jcnsaVmgviM1NXXhHbxHBu2gmxvCIbMnp3uJFQFQKEm2j6%2BgUHY0ScGww4s8fB8iYLBLSREOK4YsSHrpgtsA9RQdeHRddkS4AUQXLShkpQs1s8eVeDj9jx&X-Amz-Signature=b9973abbf842c4632022627ecd413e30770c7a2b36a139a63282fee9f9643e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
