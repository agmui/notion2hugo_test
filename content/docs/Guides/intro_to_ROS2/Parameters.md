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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYGGV7H%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAcg1StQJVF3BhTN5pRGTblPWTx1sKhMbUIvuiG70tJwIgafMmHSXC4NKVytDdyDgR75PtGZKbUS9G9HaqWMHUIdMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDOYP0u3UmJ1mf75pTircA94NpYss9LIRhKjfxUpnwoT3pf28zuDCTw%2F8j36ZdrnfQ6jRKdhbYyr6%2B7kEEflMPRSPiosNwRjIXdwwsivM4inzjMrChHUY63rMwj42hBCbxdO7Z7NzgFXhd6DyDWh0Ih70IFDL5xZjdMMZ8v9wzx0gFuvAxK804Do%2BaoX1gy7nVHPy%2FKDOiTNYPZH8cvzm25F10jRMFB4tnkYzZ9eSmla9G99N3dp3pPr0SX%2BM5GxCSrxMg3A%2FVVqCK%2Fv9cU7pmZzQHqyiivtyKTvD3Kc%2B0FDKKY%2BncJaB5S8k2VfvUyboMMjn6YRtVGOKBPHXEtPseGZEr8A3fHEINxsGj2%2BndYqPUW%2BCSGyKSLQUbDipe4fSBBuOixA8OYF5UfKfCfNAKrDcsHwy8yehA50zxyXHt4srOrDneywcRt26jBWuWkpNnvxDkwwYmlmiG9AAP%2FwAVup1oALLTlmZyAmaU2jOFLB4f8IIAqXp3jHglyZaYK0OaH0mym6kqCIZGg2gnc3qPc9ZRoMuHF6xfazDkwJ3%2B7AZg5HbcVuVZHNK2%2BcRK%2FlMxGtkIT%2BC6VzN4wOj%2Fu%2BH99Mmet%2Bn9aMf%2B6DPWU4tne%2Fax96VPiLfY7uc7DKwwUjp3dMEskrcbktQDcZDML%2BWz8MGOqUBZsZKQgBp10grT0V3hD7fU8Q0Mtjr2n%2FqCpokLsTPa4kZexQu1J3Q3KwbIeKAreRNX2hAu%2BwLWbGIOkxsmYaWrd4JAXpm2oA9Yo0Z4hVtTvo5lH7uNL1Cbg6MfAXaFqsxHRAmk9rx5abtAqKiILg8Be6amg9yxQptLv5qAox3y3AZNIDhl9hQqLtq%2FrLIni%2BqPc07pc%2BxXd41ov7IyWKk%2FjNA5TiQ&X-Amz-Signature=1776e6dd4500ea4667e86b45b22fb538cf764130cb016a91423510131c807f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
