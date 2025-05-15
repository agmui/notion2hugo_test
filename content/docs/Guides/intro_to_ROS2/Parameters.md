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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3DF5QZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIENwMb%2B7FCA%2BEf%2B3N52I71kVTM%2Bfnvb269Mjncig%2FRxHAiEA4HMUHeteNLAFxeZiQaWjE53FnhDpryzlmb0yG%2BYMXt0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDEV3uGUdO0yBNdYB4ircA30%2FKEDPSJ9JfRroEsRPx0yNapzethPNj9iFtZhMiZCzQvqnAMBtRTSfapdnprJgPftf04MrbhZcb%2FNh7jE3lTWXvRcFuz6VYoIkd2mVVefC%2FZVbLAaxx5Hygr%2FNsnay6yaccVIO3ERgVB%2FL4UizJ7bOQl8XiCU7CcN%2BTbA2HAVLYP820WpLCrMF3lCiGOxXGAeGpIMSfYDxdccY1nx1RnFK3db4lgxUDNZVaAPk5HOjC5xQ8e7cf9zrLytzaRi97FSwcF%2FwIMpo8VFuYoCR%2FSa4TSgeFYOxOQd7yCjgZ8rAnPx7Y9X0j%2B7Tcodi%2B21kHM5Bc8pYr1%2BYvyNuPuH36jTUXaiNFbyY8gfwiX4t8xAUUQ0CZwUBVTEQH9xqle%2B%2FJZr0RP2x8guWBTpQ9%2FMxPUyRzNMJF9fr8IT19EoogxxqwlzxjuQrf%2BaE6qAbV6Z4c34sabwnrsrvpVwgeZk9ELGtweW5xR%2FDroZvmZVRGuxZyISJo%2F3wpO9tXBtT%2BLaKeXLV7FQctOtGpRI8lDwLqZ2FtCESgOxZn%2BIu7VDAh72z6y4b0d2%2B0eRuJ2h%2ForQIxnnXn%2FiXPJXdzIKF6AXT%2BHsinIYYnxHD2aCJ1bWsFgB2zz1mzYFxVcQROCbKMITjmcEGOqUB2EJeAvxRY39kXmI%2Fd78Iv02eKdv6ycWozHQS5o0hgsmIwSI%2Fcm%2B4xkQLsTpGgDrNH6Ll5F8cOJhjJ3ge67C2XZeTmXFkYHxh7sGHqvmx2rigZa1QyR6eFZNzPhvm%2BRnLIb%2F%2FVJeAx43Of8vT2hgnWUAwytrjxdjAuY3t0JrOwqpC4haNcC2d%2B5gxdiG6il%2BMuToloCu%2Fuz7uZ302m%2FR%2F13mg1guG&X-Amz-Signature=02847b50f1b3bb898a53d210c51df24d13b1e12e7e78c210702969603bd01c98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
