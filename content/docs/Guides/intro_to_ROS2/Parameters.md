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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KSYVJ5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNO3EQIaXxYzzWrrLzz0pFB%2BhPmxfM95Kyyx4YWdeKDAIgBYt4u2sikLTLpcwR4w33XiHzWudbBx8lzYi58oU1rhgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpqUiSiy1BslQNOMircAwmlf9qOaEhBXn%2Bu7pR6NzG6Tcw%2FZGYx2GEliCrZ68bagw1T3DSBhN7fKOUVcgp2JHcm4jhKp4Z1Irkk8T9uC%2FT7DPMpKzC95Q4QystR%2FGygMVS4SvG3LWNAxLnO3m1sM885T0cNQfZP5evEqOcfGNpuBXZL7D84pEMItm3eyCWHzpUkvS%2FFk9kJaHNuWlaM4fNBjR0i0wQi1SZ%2ByfX3mBUIaZkT4TJBdGKUUhz9hs5UMCFboy27N00QLLcaTcls249uAPgccrUnTETaMF7gVyfrykYFG%2BThuu%2F2bN5zV%2Bsana%2BY6n3RLSksk6cpdtPgUl811zYI1%2B0h8B0lOr0DsnDDYZLmZo0TxT3oGBU35JfGfollCnmy036rCIOkMw2cXkR7RQ0U9EhRhLzOO64ddEKz9vlHxQYA7XADAPVRtRF74laRMThpZDboyLE9cNduFiM5D7O9JpL92dlQclZ6Ep0eTjjuWgO%2BQtc8YYyGULDF8MgaMJNWp6z8GQWGhck0WxHoSEYB22LkzpMWpzg2waJCgTrnutvV%2BU8V5ClI885ehSDwXTprx0fChMq0LBhh9GquOya4JBijWPxyd17ux1Hc55hvixbJY3vzGHwMhxLLDQWJpJ365qMOm%2FmfMISb8cMGOqUBkMUjulkMXbOZS%2Fyx51M7SqYmaEnQgNGPZmYn2%2FE%2FEvqEN0ISIUMTuvT5qR8s0A3zxDvtuzph4PgL%2FWbQVwbYUd7v4EeHeNP9xrmJxOw0BD2eJWSiyWNx1EJmD00pr%2BxhywQDa0fCUvKaTFCYBv02LSDOiDCZNR8X9VVHkRUweGAeIIv%2Byl0d2%2F7vp4TJuMR2kIP8pXYBwMhIPJY%2B%2Byu0K%2B4l7BAk&X-Amz-Signature=a1b8e1c3dd48b847646f595ee24afffe4e623e99268c3f436cd854256419702e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
