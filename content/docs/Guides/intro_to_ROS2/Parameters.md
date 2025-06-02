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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FJTOLQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCpyiAr36ZRtoVgLKMZqWuBRt8UpmfEPKM7FqAz2RPU3wIgMI7Vb%2F%2BZTWp5CLbUUMmjYBg4v31f8%2BX0TpHscUAC%2B4IqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4%2FG8OnWpDSnz9JHCrcA%2FYDahDJD9nAoWD4FcLHnHC9x083QM26P9dN7EJa05j4aTUkEY4g5NxfRdvAvvDTw2GCf6MBPySNOF3EpKEudRHa%2B%2FgeAdUl0wDevcFTdNJnNK4FgVX9055%2Bv4R8bArA9Atd7kfXNDRSCm4AFI95xAC%2B%2FWwd994hGWZ3ZUmpC84BX2F72gz%2F7fvUXb2XAESaaCJXKca4YV%2B7GT%2Fl19OiOe74fJDwEBwwZVWJkc5bElNaisAXmZ9gaqPyi%2BxJ5W9SfTZfF%2F1KYAcI3WaG2qrhMOpzu4qzLmKGkpWB5RPD6c%2B9FbIHnfskJVC9pw0BX09YgPwzmjq65LgaxMxVDKaRnD3TvYRRB0wllWEZgDCYnm3JLifr55L2IRrUTLLs5jIDtcRmBB%2BkOC4F9MSEc0KIwahQrNgidtJkr8epsOnDIJC9LxEtxwu1bATX0E9P1es68eqmJmeUgIQ15RILKCvvFd9n1WFl5aZWJ0SrD8xTqxzUexw3wvBmOYg0Q1HUxmNufFNnTHc9FVK7%2ByPypzd4UyyhuhgEDNWlcSz9mDaR%2FcxbFSzfCkQPSb0vUQ04LQBOR0EzBESoWLEYTOUPG%2BwDp1iKoyukTeWrN0yMmo8FaexwpvZRmr3Vl5%2F9QonzMND588EGOqUBRhtD012OSZt5nkAaw7fsTUgAWmTb3ZErjje6IpvvIQYeEP2xYKNcriuDRsyw4X0lWmvGpBcYXqWa0vRcmSAQMGZ6TlAJ600rWL0TODoux9uKIcSYLxnp4dNl2QLMkyUm9TyGlvZN0cqAPCbHjShhIAfkwdsp1fl0MnmNedVjG73v0T67Zo%2FSVorJs4ooAqiZXsseOFwHaXnvD3yG1tCEgjyBWr4e&X-Amz-Signature=c5eb88f86765c564f95c1090c2780f2d66f3869bc9f51a8cb860b208031e9c92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
