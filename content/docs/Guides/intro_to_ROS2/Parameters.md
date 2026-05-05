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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5C6QDM%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2qHEzXcJC3Q6%2BtxomDK3se4Lc12YATWhnuo722K6SVQIgeNx%2FE48%2FoerEZqbP52ZAoSS%2BK96zRm8Zkub2cavkm9gq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCtIy2PodAN2R25dKyrcA%2BYiVzSkRt%2FdOrQ%2FZ2DSdd525GNeDPl5ADL%2FIWRoEQKiFwxx9CBvI6zdaaQRdf50O7sOqOPMN4XK8Kfzggjwm058lqkVAoW1BkhhlQviVzoc3AnIYpkvZ5RvWFrDoX5jvabShRb0o3tVy11PORICNnZkbv%2BBQIF%2FkIRSEwn8%2FciOgJ4r9f7uhU6aFw4tHGRRHu%2BjVy5LvA2RPDlV0KR%2BK6%2BfUjh7%2BXT7Da44qudpIYCk%2FZgJ4WIGyiu3qkXqr%2B16GQ1Zaxj0TZe5AMTp7uFI6BU5JEV%2F%2F6YR7%2FM%2BsGhhV7dnzSC8awxsTn0Wo2bUU59elwGZrdoIQ%2FrUudfRDAr7wqZyVknRf%2B%2B60EXzXrHE4Vct0Bsryc8FeswVd9SVqgvR1vp%2FqK8KLTeSeaufenTFqMs7htYxBMHQjkKERlwAGL%2FnjfY2Xy%2FJyO%2FwSrtQo0SOHFCtcuGXVE%2BsNG%2FNdZ%2FIK%2F%2F5z6skuxxfZ%2F4KXqXOmszp6x05mwEX6CFyiDrfrByW7c7vup%2FtxNJRM371jlOJqBHwJn2MOjNpa12Jbnc2iqm83FSEc%2FdtJg5SBQoF0PJgDedLdtOuIEBaYDw8l1Nm4317r7ZEIFwSw5GqZZOIBXicEgCK2q5RQClkLhvNMNOm5c8GOqUBzt2ECR1wXp5pZs9DeY1zRcRbDIdNG%2FRmGfo4PX25OZSGUo5X3x9jEF2Iwt%2BOWa4Eg4AJWBTyJoWgRD8nI8qnWP1ZEI21KZnlYW3DFP6W71F0AOoqSrocChkfM9EqbcODPXnjhcYWHGlzLk5IT9SiccBy8SxA6pFJzNNI1uPVI3lTc%2F7KmwpuMucf2ExpqOXHfEyv7l5V9LQkMb1q9KqI%2F9MjzGI%2F&X-Amz-Signature=67fc2ed84b02f240ca812540a6779d0a3a86de0f4da8765a1cc1670c554cfc1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
