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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOVW5GV%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHW1t2XeP5hAtx%2FwnlvSfiLWsZpl7PJQ%2BJzNyvDMXwDBAiAC5Rb6cDUnWQdSjn5GICoLRORCk7gDOol8nTuiAW5SySqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVpv0jF7l6bhZpFcIKtwDhU6xDaIBagfxgFNAklyFZpKoH9yMy7xkfOAYdwkxGoPqljR7jwfAS3yQfR%2B1RgTDL0jUJrP9DmW%2F9kXJxc1vFgcZWY8%2BsCIpgfS%2FYiB%2BqA6JnEWfc%2B5k7Qeuu1JKj65W5z7rQy%2BD%2F0fcY8bVpXsfZ4ma73AxF0uzpU7GBDSpK6oCCW2ypHR4pGg%2BFsJ1rJPPqUff11LCNZLVh2jqYVhF1Ovtug0G6gLI9iR1IGxGrMS3lPGnM%2BsswSFQRUwjhPpt%2FTjrCatEgzsgamkfKBbCOOXGaK4PbNfA5NaAALYKhgrbuqc9%2B4cHHWJt1oI22b1zg0ouN96sncJOxROre%2FDzlh%2BQA4rFLklpSnjpBiz5SyuSFtgm1q7iKFXHek9KkwZeVPYtLA%2BMcKX9ofQrmhmBabPVyKs6mIx9CyrHckJRDgqPfXT0q7s85kEqJ54EKn0F3dNMeVJY5SrPsKB16rbmKiq84WztGJzxVAmTYEgkIQNuD8mDwnJKz7SGg0Mn1Lc7M2kupWWE1vxj59f1shai98MONEVe5K2Lch0dxK3VzxrrTxQUJNW0%2B0UuZ4h%2FlceSX36%2BU8bbMj5zvDdyDoxZ8jeq%2B%2BM14OvXuQxUnKDZ48eEQSj9%2BeMIrMUofScwlKGkwAY6pgGjAYWRJYfN2Ejp8JAnAGGM0vePR8BocFy2z1AxW9xdwAjx3kzIOS8IG42g9EySaMhOHmvnn3afPNPIXtyLogWRfviQTLo494%2B6dyUa8i77SN1Ihx9xapoKGxrdX4gMzZxpw6RvnEEdqyO6Xlaiuckd4zYEtouaki44PeQSDCyD0CXu%2FK3MHPxSKDDGxZFjPpNBdKnf6wiR4%2F3Cm1zX8RIoWAGoKMUn&X-Amz-Signature=4bef3b78f61a768c8d59c5576524f4bb2cab0d14d82f45331bb452afa398daa6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
