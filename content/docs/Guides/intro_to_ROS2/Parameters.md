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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TB243B%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDb3TIBuwRcEscKuHipeRpigdq6S4yd7pV1D0bD9QqB5AiBkpymxH8CLX%2FfREwYyuzmh73Tyh4%2Be7e2aIHImHHzimiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUe7whHfi3DRoV77XKtwD0%2BirVy6kffiotpI%2F90w3leKc9QQ7bM%2BwQ1%2BmlSuobjqUNn24gDqejoQEgc0EjRLYd9jq%2F2SXMJpbCRbVTb7ztfbxSBBPYujEg4njiVEq00zAVneO0WZOYVw9TwbKL72FXeU%2F3fQ9%2FKwxJtE%2Fjre2mXhf8PLuejqO15H1Ub%2BxSCOC5dvr%2Bu0FwraW8MSJRwd%2F567urF0Mq5XtC5RlcWQvyLSoBE%2FddpE59a%2BT9SzK4DLuuzvEKfOwjEmIRwws4cW9zrs3mo3pFjFqzl4%2Fi5mmKLrM8UQtxdaSlcVKKZM9VTM9wJBzg%2FjWpXrQTMaAxOcN%2BzPWZiRXG7uVJON2oESnGzxyYecuBQcH1ZZj3N0o6jB0gfFeBx2cGjf6CAUnCzVqJvwqQwOU%2FXqTVkX52Bisvff6uRA4jpgyyuhRR4vPMfr2idINjdJg5LsQ1h8ZNMYIs%2BPmGAKEYqRSwWAfA3rphTqlL0U%2BIxkoRQj9kuvs6RSpjbyYu5%2BD8vuDl17m1ZkVdcXvpITIJEPXDfTGCXZDBbO9xEIxwjIV9x%2BXGhzd8rPIu%2FPRPswKVTM1Tnpnw64zHcU2a9kbRdKxuDcewR%2FVWfAOSN%2Bri%2B372WpjtWgXp3gcgqpptBPvCoeETEcwwOnUvQY6pgEKN%2Fn6sOt%2FGkbDHslGRroPuUN3OiejLuZLDKDW9DA24dcIlwMEEro%2BgBwUOmIl5kln0SEvgugw%2Fh3RAvJ6IixbETRKzSD8Kvtsa1TsJruia%2Fy%2F1OGO%2FdJyhJfUURLeibRR2uabD2nPYS1c1fH4WAQFieplpDXssK428gloVFgC1R9vFV%2B7bOSRR93AQyDC4ux8SQF2itgU0xxmYlAtnwfSH4nRITXE&X-Amz-Signature=98f01c8d7317595909b75603165273a5e8fd26e966995056c193806aae7165ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
