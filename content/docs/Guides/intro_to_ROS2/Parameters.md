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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGE23SG2%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD4YozD6nhTVO3vldDUxOx75KUsdsZTc2etdbZazPcF3AIgA%2Brd9USi8G%2FQcc6J9zsRFp8Q%2FrVLrYiF5SwmECNLWDEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMKxh4ZN0eP%2BGSWsOyrcAw%2B5SabrGHATsUxHUSeAYebz1GHTrLQi01nG5SUdGgRLitrUoVZvJJq420xkj7sQrDlOG2csYptjXyQY9yif9NWeHuxirprTDQ%2F49%2BpJDQAeivywkp6OxvhigrvdCMQOWiXtcz%2FCaiLBoFxRGNv6kybfY4mg53gDsZch2v6iatn1GViLSmDranb6P3oAI3KJhLj%2F%2BYK0zdh8NV7D4wHGucnMOaF3twvyQCifF3L7sxX2%2FLj4mvBIIlFXDRBOQeRrQ19PWhyg01JLqW97DpncSMUBrryjZgMbS58BUgyWm7Q7YKmc2wQqHMNNnv2DVGsUwODPhJq2mvyUVxmpG1GbApCSjjXGE0Ey2PaMvL1YK31Keuk2tVGVIGaKL3sEJxi%2F9nFezdgKKbpJ9xmq4gw%2BiQKvnbNn2nyVPiVlYkUFqqYA9JrKoYyG5953adC5NBLYaVO3FxiPNZvBDJLTdLcmQEnaA7Pv6mi3EJOt2DIwcigsOn%2B10d%2BzJnB2uGDXDWWE2bFDap78Mn6ZH6FPXlhkd1myUxe%2FcthMuHEhdwixAZF1xG0UvVOc31ujO1RUS8FwnwgK%2FGEbZow4y5nEAp7xy%2BJhx1yNizf%2BHsPio53vkKozCh40Ev3%2BfMGcZrYnMMmCsr4GOqUBcSZfD0MSMSBfyAJbgEAYK4hzleEnJMmLlnMmarxpFRIOqeJnovI7JO%2Ffv26qdZrN1BUCG13aC74%2Buutsunb%2FcQCmi9Cux6WUyC%2FRY4N0KmFMgLzW%2F6voIpIT13%2BQhezk1aUvmvUNv%2B6zTiERLAqjqns1tzk6X6kKrQ3fyBdjDC9sCF%2Bcb6%2Bh0BLxp1kYGghWMehIWsTHGSEDEE4xFUXgDOXKbbe9&X-Amz-Signature=b667e2b1007819c0991b834fa2ce364612351e274795957024d9db6e4b427193&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
