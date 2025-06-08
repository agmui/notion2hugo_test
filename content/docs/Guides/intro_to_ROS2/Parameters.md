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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHJ6XZM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7XkRDBTD9yX2rkrTCKmLNuS0RqKBAGjNX0cGY3cVAZAiEAmOqK7VfEoLceVQWikW0qAfI2PxlX8%2B3RcluK7SWWvIkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJsYC9Bn5gKLbP6%2FSrcA1UXBc6cTH1T%2FnX6ho9rWHxCjZmQuJ0%2BTDYheJwTqsd83TwRBr0ox3jAT6MYGMyORVgGy0ae%2BaDwuaqhwixlLtEPD3sbD976wGi2bUuXCzhnIBbIU%2FxZDNIh8ROvbcbvPZg69SbjkI%2BLwK5DO1rBt60EHHgQURuK%2Bm3PEKOjYJRw6%2FgXeOTZ7PP1cQx2rm96axwb9Ni%2FUuC84ITqfiUHPyLz5%2F5eG3n3mBSoV1nK8z3Gc3Ymhu1zXWLpPfaHUKUDmknWIRSLl95jA5KmKFqWlmRC0rcUS9AvHV2hJ38Y3K9xWpQ%2FfDrZCIuD39WF%2F4wxb5KLN9%2FbSUCQI7jv1ZkzfSfJsUu0HsLO4twaQtRxRRyA0roMeG0oJTPN9V0MqjYEC9E%2FITiYJgote9ZBqXKIZkklIPCvcEB5qflNfB7mg6xIzBOJHn%2Fs329sX3XC%2FpTY%2BYqBJHbKCbPWGld6DEXbLt7cKtEZLTombUlJdxubktRvr2npnZN0%2BRBDvYCTXobkrgpMifYKT60Elrp4cGbGhCbvPc49pqvRuVCSMa02dzG1L6g2kytqTUIdyzfOhYYnLdJ2yO4lY5IO9Yngoi%2BWv%2FsOtRhGlwdAk8fTYkc1z413zYmAp2vH6culdzToMLHOlcIGOqUBHjUPrY8%2B8Vo%2FgDj4muB2DXuQFUjrBKkIp2oPctSRuxOdgCgdS0Ncp%2BB2Twx5mqS5u3dhOKz8g8bqDqnBTCg1vEtN5uqx8bJIWGtVi%2F5um5Y%2B9YwWt1vqaUWxVLGH5cLIXyINCDAAooHVw2xs9boUCWPalTsD4%2BfRMySnhA29Sk0txyTlFQBW2lzZp7nw9Pp%2FFOecp4to02ZAzCNPWYOA%2BZzNhaHV&X-Amz-Signature=4dfad324a881521f4a957d81893713e557220479366be9e6ff6c1a3c10c58160&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
