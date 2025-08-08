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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US6CY77Q%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCxpHsoYO3NNuQ8eFX5PjLC4bCYJis04Ju1VftAetOsHwIgCzbWSXlF3tqFNCivFPGB9KugtverH26ndPevvRkaKqgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHSKZY2%2Fw0ARn5AlircA4mZj7F71mJdY7YX1cc%2FFqf3fPTkswBZw4QrbAftZF0eB88AuCzeC1WDTMj5V6Sf2YbpDB%2B6GZJ6p1kE8Ed1zaZ%2Foyx0uA0sOftgUK%2FrEYE0pqQKdMfTp612dF0CZ%2FUt6IUlO66hsZBPjcmirwAkF06dHbbZfp7FsGd3VVm1iCi9vKQiHXZsjBFLtO%2BrPoLuE7BqZtSQqszg26rrtsW76r%2FDZ0hnJv6NGD6xHetBnvF5wl%2B0Y5YRZ5YDb%2FIF5b97mC0IS9fOXvFYsrAbAQfPyTsxIkdwbrp5x5y4lG2CJwVeTr79aZDzQbXCm1N2OdcslYu8BMbxzrhsr%2B%2BAnoNaWvsCU7Iaeav95poXh%2B%2BzAWAYW0yS3qPT7BxgtLbnk5tfJWxmg%2FBSXDgCWENzFyLpYIrdlMYdMfqkeK7RpdbudMsGmKBA1RP%2FTHrKgDxdYxN2hCOmj8jNf3M%2FAcJPpFnNP6ftU6%2FOkEiVu1Pgyj2T1zkUx%2Bf1p%2BIBG4Bq%2F6WPUFWr41iRtiSHkyzWziXN10RhGYaQPU3ohyCe4zJUHKDo1c9Tilv%2Bjmd29IhbCVLVpZv%2Fb9x4YtCSafGKaEeOXAA2oO%2FXHV4FBFCet7BLlplMbW9s91Ku%2BT1UfwItSupKMJyf1sQGOqUBc38BtX3%2FmmCT3oN38wtxkvlEXStLq%2Facbbp0cbZ27xluRyp3Z%2FdcTIMTD%2B3lRDZ2Ul4KDRXf3DCZQi45zO%2FzqsBgNIFtv%2BTCd1b5yAg22f%2F2s%2B%2Bw%2FTWLGiA%2FPfP2ph4wMVIYSUIbFlgQXMQAOFDe1fuu%2BS01vlklUq4KffMbIJ4czZCWw9Qq711mz7vPP1Xy6vHeHoHQqoIdio8dVG8Eoka%2Fsi3z&X-Amz-Signature=c856a4e770554ab54ffac76c4dd22d1cb80d1ecb0550b9ec2c4075899c7cdc77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
