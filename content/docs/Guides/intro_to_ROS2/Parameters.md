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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM6UJV3D%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC%2FX82Ha1SsFAmR7hkB1GxhrjoblgTXpILTFvK8xwRaxAIhANT%2BMeJJ4TOyXmwrgTJsI8Fbj6XFFw6XVt84cTb7JZp%2BKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwC61RJiqNTeSg1wnAq3ANbZqJnhyr6Vduvb4KGH%2BHYCkop9LKCs8kpqmJqF6hjDzKz5dQwJM%2FwzgVqoPrbwJMc92q3trHdUwRPNHKwLHvP10hZdmZEidQOrxVq07XFJ9TVKansHZOrk9fEpQfRDtIu4639O6RZvTEhJeB2pMAKIXM3LtkM0zAvdFaOXygo1w5tfK%2FN9Hg6zde5msXiEtf65yzI1m4Xaw1h%2BHF5SWwebmSlnP8hG6%2BoS3R3A1nAik90iSCGV7vcxpGeGYUwmFboXV%2F4NQXc%2BuxCsPLrscl3e2q5PKcLa0BFrkyg9gxJ%2FfQk701AhnY5x31trrmYcsRm2tlM5PlHKSf1CoW%2F9jDa32%2FEhGu9NAr19gKq2UCJoTaj%2FEDEO3OIJ8a79yoHUrwmc%2BzTDlf0wZllHN2kjuHHvwsQdCo1v6%2FTEb20x6hPoAmyE7gqvkVLZb8BLGofXOcj2grA8ZVjo32P7RBVLzEUzkEc6HHV2r3DgOQYKOsrdr4OkIrZdu1rBvScyI4nwVEKRSazPPySSHSH%2FPU1GlYuXGLaKWgPhmxcH3rRfmmXkEdgJ0juVNSl5j5kxMoMymKarkZ05zyzFifezxXliBVTXfSWEabiSfxUo7bKOzg5jsBGWf8S%2B4Hd9hgUdjD2jcO%2BBjqkAaT1NKzy5AG2xUO3zZ3lFNuP%2FiCYVUxCnXmEpD%2BcFJ2t6HMSiI2DhhyytH9PpxGQiC5GYtAgxpisW4RIsp%2BTRMWHXi4TlErDS%2BcpccqkUe3UxIF%2BXteGu4dp69tFxqE3nsbybww8XIlrmfAH1JkMkM85%2FJ%2BNEJSaGxCMfiaWRZIQx%2B8QNbIYG5pHe2UMIHWuXM2m9%2FdbulyI4dckSkiATp3MLPRK&X-Amz-Signature=2c92a33bf35ccdf0425ce1caf3a9d4ebd48e7257ba0eadb3e7110bd2b7561311&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
