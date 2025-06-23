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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M67EYZ4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCaEQd80%2BLHcQiJNLANYnQj8%2FMDYvfVuG8rnEIL5bzXEgIgG1S5dAT8sdjcznu0sAzAeUHm7eWo97S4QYGDtklQdYMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDM79X5T65S1ElOsBxSrcA%2BzzrMNKu2LkkTMHHqldLptnfAhxTtz1APkH1%2BqbrYgzHltyV4eZzpkHi1rpDcepVDkZsIoyTY47agocNJFCK%2BHWCxTPyaObT8YO032190oSvYy0ozGmQNE5hj%2FIB8r1Kyxpc%2BxcnApuY%2B6O%2Bk8KNIaqEQxfEBFCCm%2FYA8YiISiOdQlNM26Jo6sNvtZ7JCMzByEv%2B%2FPCiLhnhK%2BcUjFWnDWwjnGrBcBYdr1UriF3BuMNuCNj8PH53Qfeg0BJFGnbet0XXH4VPFiAWCQovp%2FUyfvc6eZES3l2zlfLqFr9WBBSnA%2Bdgy%2BOWInrHsIbAY5gcvYBbF2fTGqaWFngx7nFYfK22Xoy34iWuYLMZ9C71x%2BVYl84p8gy5PrQ3ioqgaMyxqvR1E%2FLzEpWhqIGw3wem7YSeMv21XsKHVzbtLSbfuaaNYKhiO3CxN741j8FjwTgKACy8zNsGnMpQMtWLuaO81TRYdUXTk9Og9osQ8ygsqEVq7FJtonllg3ft1%2FKbtnfyF9Xvl6eAa95brtGnry6BMVCtDdlQgTWfTeAxno%2B704RRMq253rKgsymLeVv18Lxq4amqdAlHNF3TmGvoIIEIY%2B5EXSoDlAHfqUuw3VbXS3FImylbQhFBFPf8x3JMI6z58IGOqUBSUH7INC%2F%2BZrMeJeMBGdZ472HAWqhYU01DsJCcRM5Os%2B8O6tDpOfOUyxp4S2dfHYKmRTlshDLS5BIFc0xmTh4z3JypsetZ2ieu7neyi6or1fq6bL36emNbl8WkDyqEh0cHpEoNNLuTWLRHpJGmo95WyiLtcsg4FmUX4BVT9rucMVkgFXBj0IqA7C4ko5eSm4u9IsntohY%2Bw1p6gquRulBIs1QAhQK&X-Amz-Signature=d552b3128b5aeb1e6bcf9f9ded74061e8d346cef7877eeae120477bf623f9c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
