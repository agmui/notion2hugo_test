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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJJVHBYV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGON295qFnvg6FQ7SjXc%2FOYdIN65KFuvbVz4FNr3UGEmAiEAsAaqfiZLe2W6qzCIzWO0c1J9dr54yjuvdbAHFFa5gccqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB%2B82OVYZgyk16cySrcA8CBI30RoCTKahIGl%2FpGkSf6ncKAD1BJXdDvPErvrO4QiHTtRZGBQlIU7MoJmkTAW%2BCkSf5U2dWO8xfsoVgtqvCkp7EoekCv6tjNAE2XAQ8Kf84iPf0AVBHmbsRfpFN69hsALTdCfZgI9dUT4A4mLSsYJJX9zex2qxUH%2BujgcCrjzzMl4hVONdSPrTcYJYRlRKDoV5gZmyoQqPHwseDILdJ%2BurB2NpJpKtphJMnUOvBWKZqrGO%2FS5K%2BJfFZ1qKbgrGiyuNWPz7BsMWOoIYtFWRvEJDX2TSlL3KdOJIk62YjUxAz0VV7MyBCQuLjoeJrrNpgIhEjQtJn8083zdT2FshqV1nAdz%2FjaN5jWKNE6MHr%2Fy9luV3LATeHESEUx0TGY5gNqt9VNVdwOR1UzIgwfnyCQrgB7wRpul1H9y%2FZEa4pq9qod72ScJMXDwhmoO%2BZsyR%2BGE%2B4udKTZTzEL0J0OU%2FzpJY%2FNJYYJX8qWXpj8FPSwwN4CSLLIQoPVS1OAr4cRJ8LE4CPBig6Ow%2FOnWG4HkDpTSUBRhka140r9PoyQ5dwM41HD1Py94TsswOp76%2BZ9tIdZ3x1spbJyVbAGY4P8MDy%2FLhDGSgUEYYaCcTM4OS37pzK%2FDpjU34QzDrUlMM2KgMMGOqUBE4d0jg04Yn87iGW0j9VIx%2BT4eFiSopxrBsJcdxmyY%2BS42VbmYbwNLh3isIRoSdlAfT5yAb1q2GvZCRx5t1BSGIM1vowD%2BBLTsQEvFHKCWcmDo2UCTrD269BKjuOOct2uqXlM%2BMDkqC2m5pI2Pg84rbrx6CYt07RBLnLHKWZgJl3ZepKBmZkyoRaVK0Q1N6jq7BOsz1QEfrwTgkffSWY9swYkyGhN&X-Amz-Signature=f41cfc406cb6bb79695d1a5b180dd22b185645942fb797931a6fe154e9bc476a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
