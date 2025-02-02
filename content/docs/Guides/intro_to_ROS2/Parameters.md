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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK3L7LRP%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkR6kAvVVyZGOrgFDDahYmN5c%2FixdNZ7YRR0wLVIzA6QIhAMiJ2bOdoNR9mdCca5QsCV3aYu%2B%2FA6HFWEmzrdFii9NLKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykCbet3WIUu0tNDl8q3APgL4xsiqdVAVaeX0J5BByoC5oGMfn27DWl8iKwxeEqp%2Bg7bfE42nPmc%2B84jan0UIz70Rh%2BXXNTKIWJKpzJaWiOE9XnfXqpffOgJlbGhJ%2FDpn%2BX1alxh0Z4uKZAWHLZZ0WyKL0L7trrFfudgr0fQkWMlDelJTwf7TpX908%2B%2FEf0yhhxHjaKrjsGaipHfsTiTtOpID1Bi69C%2Fbap%2B6bThr05Ba%2BCI4X8D7aouH%2FMf6VJQWYHgja55mptizwZUilmz8ycZPD090Opd9WH95eZP0sREfuqljb2u%2Fe0p%2B2Oua%2BJV41T5xPuzViwzM%2B%2BIgve%2BYCiZlURu7hGHpswtRDbit02ykt%2B7dX94CA4ANMsvCzAGGCnjFzTqbn%2BIG1uUWhAe3QwRkSKwrvy5I%2FEbWK3Sc%2FpO1ZqmkhPv%2BIlnU3TGffQeMf5pyGyivU2kABMlqt%2BtP9277rN24yvkEJwymOn7mrCd6YIX1sZOzb2QfDebe05Mz%2BdHfACgscDtzLaRi3RxZ%2FTGb41lqCkTRxFEPmYZhHw0NlVf3c52XPXJoM5n3WJ3WjD4EFDseyhP0fqYIfuDmcl1Jzr%2Fw9mpfZn8TykWxvnvrUmA80tG9MvIHyCWjb8dHrsXZGIeXbxnJ94%2FzCmuv28BjqkAeTglmI7mOcIldvXI%2F0mHItp2%2BjwoAvw%2F%2BDOUB%2FwUuHGZtfewlucoPV%2FaKbhkxB9qAxp%2FA5q33eWVqoMJ1sDEvtBL%2F3Kt8pipFpSrqvRFdnyooKYMX4j5Wt%2BXeVvvGNq%2BG8j98LaTCOshX4mP427Wge15ln6pGBV6VvO%2BUU8tQOTH7XN0Y53Lf01GnST3HIjRRBQi0eJ1ji7rdWFk0Msoctb%2FD2r&X-Amz-Signature=94fe3f23dc0369f022d4c7dba9986b9587879c281caa2d901a7d6c414403adb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
