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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ZU4APJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFOpPbeBBJCkqoOEMGKaFatfR6oHksoVywsFF76ciJR7AiAj7BLbbOD3rNAFXHvG1CSgbu6YehviQmxGgYZzNbB7%2Byr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMgBq%2F%2BXKioukvTV0VKtwDn1HUpmwPTCIFrSp%2BATiyUTgkHYg9UBsHC4EgZyMoYyHU%2BHGVsf11yQ0HDTAG5ylBd%2FdFl9unSwRWFFevdFS3nWCo5%2FsbmcEa5h0qUfvKYX%2BnHtzOWWb8DtDwoxKKx898dG4TUmblaja2NT2yQjvBSWYCoBlINiYFXrLtboRhG0QeJF9fo7y4l5%2BLlFvZP7M3XuEJxLO92iSrl7YMGwOkdaqrG6VxWruq6k1Y%2BUuemXX79LdKxVASx3vbSTM5qQ%2FIiLQ08G7sMjkU6eKQwSbmJDgbLYYcTkRdIDwikqAvy6RHrRB4Xfql784ER2JfnLtO%2FErlnYBB3tUU261vnAdfrzHSGuzCHqydKuyqb%2B0jtsQyS3FwbhCAG1kfMj2Aqo0xeb%2B1ZcF0MHZI41fUmzhnK8Tmk1UCMCOkeWGtMu1Yek%2BXnrMXGO%2BEwJx20%2FD6y1tC06m4%2FCc248UlSovtj5QHjR5a37rrcGgiyOtl6izARfX%2FBqox2J08vPwhdBqE1b8bUhKfUDfR1fcjN8EDv288m72n7EZ83LpHnpykx4B9EbJjkQDqtRyUEQw9cN%2BwRB7uDKHP%2BFOB726t3pQwa1ZJ1quTvc054G90h7O6yC2ZgNtDhL2Gq9iguSZHSOQwquS%2FwgY6pgFk%2B7XdvQbe%2BiMkscIw1%2B5eT1MK56p%2FWKTaCptKCaDCiRpatwnOAHHax3d3j7zxhW1Ono7RugsyVGBWepPxRIKnSR7nuTqgLSiCiS%2BkBt2WePi6K639Ycj7uEzWxjJwV0y0IxzVMy5lp%2F61pnjr6qsLfAOTLMo70ZhoZyYHxfaWLTyhnwddESvYveTHray%2FI5vixGJXC3tChS7VW1P9n90kn0mFbtLe&X-Amz-Signature=ef578ddbe1881bc5513334877b1c2fe66079939ad322fde891fe849cf901f2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
