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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2V3TZA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCXIuB8A%2BoUoYUJfWecklUtk5bLsyO2kS0EtTTTkdXhJAIgHTrbbiSl%2F3rP92npJNsOX%2FNHUJVFDzhpMiartg1Orowq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBuvXm11HvrYuDJmhCrcAykzhljweuB77WdDzgKpKwgEgKkrGXCO9wO961JCoSCpSa0%2FXeaGUOWZntxFCgv4S0Yn2ECNf6R0R1R4Mxf1fm%2BabFkb9nPYfgjJbFraJMWoJCg%2FHaBSmuOtOLOHALvuY7fXxqM846dq2AhhM2WQzVOiwBzwPo8hyecBeLsqzZ5mvefQhV1GKtGlKA1lt%2FXCDO2Qth5yeC%2B8whD7aumpz3yUC%2BnM4xeAdSRTNLoprxFCtBefMOEreBQe%2B%2Bi%2BeMDFsS7INzBLGlNFqpeRn69YyjkryWo36nzJ7itwIKdVxhB4hGUgiU79LdOuXrVk%2FAISMTePyQtDmKJoJU7XoPiipSKbhWF3fqJDg3ybeGRJAZH3aZU0u2OvayMc8TQ16EVSGXutwQqsGx%2FCuC3%2FIgmGv809XdFRyVR%2Br8EkUS0RZzZs%2F2WosIcI3mTpzig1sK90irlikJ5b83QV%2Bc7auzOn%2FMjHsqt2KiFGtmT1h%2F3q%2F2Qqf1VzoxVmFG%2BFC4uvOMtUvEJlmjcfFRdAm6xYiO0XS61t8aVLMIfK%2B0sKbdjpQuF8D8U9iXICFExe0wKKMeNhctsQnnxCz3b5Oo%2BW478OzPgTYQ3OdyWXzOWN%2BTq9C4bzfb1wR9xF9zxU%2F8bUMJ3S%2FMEGOqUBXlNroDo8vcDSdzJ48Z%2BNQasG%2BpKhr3SVBmk7KRQ7HBkhjsyzF96U2KBCw2JGYW8uTWda3AokdY5S5TMvgX3LhaHh41lGcKeVFCG%2BIvpAXGvNorg6CJYEMPw9kti0IF8McIFxdV2q2AfQ3gFgCYiR93JZJtBCsYYtd6cSq144UWJ32fKjKUEC3o%2BadEY80l7q%2FCm2p7BcCVbJYkl5769cgXRmnFN0&X-Amz-Signature=c0bd0f401e46e6dbed84d89288bb3c01f64e59016e0e8361e159844d9a299e28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
