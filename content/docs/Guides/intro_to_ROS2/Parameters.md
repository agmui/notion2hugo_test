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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRWMVEA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFuztjPMHxRnjvL07UQnUDzIASJJ9%2B0WHGrdppk5LMawIhAMaDJUaA5VZ7J868dl1RQ3KDXWwUyLkx%2F2wdhDpndR33KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B3bK6AgvlrpRk6M0q3APwUJ9S3HP6qRZOMb%2Bt7DEP%2FPttMIg9JQ5IVibm7slaHUJUTL%2Bbv5Otm3UeesML%2B7Vm1zQYKV32cM1sXstmFAQaZe1aA7azBPZFkDfzVFhYsCbGlrXcQmVT92vArEI9G2DXmy9M2SSdks9irVAyb2wZ8Nu%2FG2RSXQK3J9GwykWjuhLQHJMOHqZQZzfiHweFUzKr4WucPTMEs0GW2TYC0vlP3qeB8gyRCLc%2BiA1MYxH3vwB2JHgCU00061J8TC2cFV0jhkHkZdFiYbiYz6lk5RknmBM5DvWCcsx2iVL61xUazKlSJoEYWLmd3A40TlghYcly8OzbLn5eRpbySNKwu456%2BOpBntmA1nVuDXWtpZXdvHYUxBzcHtdtEadvzJt3UL6EcrxRGcLOL1f5xbNyErgoGE%2FtAeSHZHIJTdXgAU6pxpZeZGQ17CUoxlld6LDRsY%2BdyGhCiR%2F0aQkL3GcIAHheBEbqRQsRywA%2BwRqHjtQ1p2qDz9nPJ3JAQDG2dBeUBWXRMsteonhYJOkTcvbhmJGEs6Wt6qvqGi1%2FquTVHK30kglqfJK7S0F%2FwWPdqgGd9Q5%2Fq%2FuMpxNY%2FI19KyoSbmvmoVydSyahRfjL2KdiRLwXbD1aiTRydrLQaNJCFDDL%2BaW9BjqkAZ87ZX7ODH0nQFd9mYA6%2Fjur5V2M48Rq2OyiVfwGDOJha7VGfmn326zsLag2e8M%2BWxa91zAtY71VrdzdeVdFt9ptL%2BxnbkwETHGqYK%2Fqqx%2BVIXj7ekmkqYdAwo4gYkNN80G10Az017wyYedOa8XytS25QyrOZ65NCWSK%2Bs7jer6aCOFoz4VLLOMSXx0ApmkIYgR150KveCBrnnTSnG4o0o2Mc94A&X-Amz-Signature=9d98798b9f20bafd41d1b1f9147e1d74403b7978b73ee516c197813bc2bd71de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
