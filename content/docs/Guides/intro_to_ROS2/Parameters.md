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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QLOZI5Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZKezpxxECXDVHHRKmFsxNdXiQMWoyPLps9%2FiQNAs37wIgLqxoDu8yibn6EaSMS54hmGmTPmalSWl439CDoSlMe5Mq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDAln98%2FxmJ5wfcxFECrcA2qcPYCphQrygLBF8Mx0nbMjsKsZJOSO%2BCpCeW%2BCW4bPaI4frvMg9Qcn8lMu3PVbpRRBs%2FW2KGcV3sIvRam94ffghkjbEJs7XBm64TmkdVDXtATKGtTdBV6ANOK1UYIf7UB4keCAvKK4iSd38Uy1qYRZjIXE6SQIIAZSIy3tv1izMNTK0UfWUDZW2Cs3Cr7sGXG2VvZojpjAVThtqK2LYZaKN%2Fc77DriKxhVXznI8%2FrRZf3lHE1%2FuzqWQHxV%2BKBMbpbJXlIjELsDTH8BgG6nh%2FKbQzB7FMdUMnFpoFCn1ZL0SI1ZfJlWISj7VniKyn1HvXDt7YQD5kTXORiDBv6GZf25TRsoOnEWBVs7HTQyMVGkjr1qrptjsIui5nnfb7qwc4ynu7x9HXxzQ0N29innE4ELnDCXwIU1Y2wEa%2F6rMGIiXUuf%2FozcI53lWpo7PsfBHEUHyQPSG%2F%2BAKHzjxi1k5a%2Bc2zqp15KMpnVAJGvhOsn7krE9lZ6Iz87UYqY%2Fi51mpfZIvy2%2BJj0XM%2FHA2JpTS5vazAfvl%2BS8f%2BLHaroWjjHaOn9rIABnmbPYjk8%2FOu%2Fhk%2B4fLjC1qid6xvjwY%2BrXX8jF2aPlR1SwgDGGJM9cqcIEg%2F8TWFvhMq6wkWGVMNrX670GOqUBtyRwdxNq4eV8sWAcaqWyNckCRMaXZfSTJmcN4z%2FwGYdArWmLNMtd0qmGJAulnIKUYmfJCcVXSM5AnOP%2BDEYEtPmyzjPraFj%2Bv8kQWIEHFMgNUYYcKk9WFTrnTiIAbc9%2B6KU30M54Lm3QR12RNMkCMZdZ9zEPUwAfnVbd6np9gL4qJWjkLMGYiTekIaCePRWK%2F6rus9pnKejXcIiGF1sfN15AIMpn&X-Amz-Signature=38dc928ece397ed3ba706941b68d375eb278d4285a71e76cfff63e298a484710&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
