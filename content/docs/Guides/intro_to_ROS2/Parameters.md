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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLD5FLQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDtQXZIuLrGMzaVtRRMUSg4jcd1m80H%2FaBWwRlqS%2BvsAAiAim3wyKIJM%2Bsy8rzvNrvH14MATalxSvm%2FGdwP1KuJcDCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMoR7%2Fmn8GXJnArrg6KtwDixA8gk5rxGO3w%2F0nFDZwVReDmExuqZOaxQszYIUlVG9ErAZ8bnVV3zb2MG4B0%2BQJw0D505s7NMH3yXyJ3m9VVJUN5vYxYBlYyzSqjHqAmB6FYxtcwNCsC5RNUvEXHI6b1DHLKMOo8Xr5vsT1S4Rqp0AEKX64D0%2Fpmf5TEvPg8zEcbiaNcfiw%2F7N5cB1p%2Fd0uxdyO1opuR2s8YCcRuE57pqod0ia7Qjy1axs5XrmlKcAntd%2F49QMYJ8HhZKv6R%2BohaY27n%2F5vfFjm2cq0rMU6RykESxUlmjWDsgU3Qbck88QTSPuQS3BxpNO%2Fn0kGc053HkNxCsstdxS0YmP4s5vyjgRXLyNGkuqLwRUmKoR0pFpaDdzmEBlby2L9xoCiNvP3S1jILRcpnPetiOqjs2hvh13ZXVhvcPm%2B7yTcB5gEIXXc1NTxdYSSZG1qPYsPENDs04iomCPjtDMZPu6eyRVBvWx2M%2FCr6fJ%2FdI9jdc0tb0%2FSYFtLcl5xfbTyGt63%2BbwNr2EJQ%2Fly0%2BbheQ6TJAWOnEELthTkGYQha0vboxiareQ6qWYWCZUyVIN%2BnpvZgnelXc4P%2BsJy5%2F2qeGaq2Y1C5h5jea%2FcgTe%2Fx5AgDOXojX2crvQCmwYtcqoHGDEw5eGNxAY6pgETSDYODfaYshOsfmgEqnpmZy1rpV930bQzvu9KnWHpu1fO8wJUvJFyLTOD%2Bf8G8b02LMwe%2Fdm8TbI0aUpTNo0WBCfYk46GR6dmmsGHJAirRukwcx6U5t4WCLw%2FCQKSWhm%2FH3n%2Fr3zTYq71ofZmAuGU4W4SyuWV42pYc1ORvBfWtCPgvRaiiKJ6viybyDO9T2FINe3nKEMJ37s8Bl%2FCQihq0DQ1k57e&X-Amz-Signature=e267339ab49eb070d268aff8373a1ba9249ddce8a493d75149f45dc3e1ab6ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
