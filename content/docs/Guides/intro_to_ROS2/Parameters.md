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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGRPYCVH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtBjeRD6wFR9NbcMus5kDiLCxGsVDVYFIhcQlKch3cDAiEA1No5Vupq3HNDjLvDJHqG4277QH1gLP5c4Di%2BBkmXnEwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPW6EydrSB9UP6B0bCrcAwXhmpG49iJ%2FLns2u8YxsstGih8z%2F6Vuhb1gQo28DONpGjphLQWJ8Dgpq6%2FmPiMfG4ZQdqXQXhwZGcwknQ%2FAdQ2ImrVvaaorV11oKbwVtTg8VPUWG1GAsbbzL02wMEhd2eCmEntK0RI9yFrOupl5hjxQjiXfJy%2Fp7%2BNHtZR2fUAuTmnRNcKzC1%2FC4XKXO%2Fu4ZY5%2FIKAq%2BhG1BNdhvOFTjI8MlADcTwrATw1b7vYQwmwPOp0YncIIclxXsoau15IPwIeMo7yJzLyfq7lKNmK%2B6Y2avCeGK263FmP984TzN0Keh7O9r7W%2FJdHzaYGILCfy036KbWf7seeaMNJ718SpqzUSIfx2ohI9RZBEOV0gRoXyzr%2FPbFDEafAWDDB3YIF9GBEVppEZbYEQ%2FZ1HGFG9YB027jaWnFIxlSGpYdRM%2FjRnfnAfSYvj8UnQ7IjRt7uiXl416o17PbBhu5I5HqH41yiEUzPiu9chvsFWca11DxXdEs7C9d7jhlvRhnxykuPSOU3rJul9d44XDoxqzfafNFswgxz4SLHDje%2FOAoR8A%2BDX38x4aWRoJbVCr%2F%2BM33ZjgCwny5hYDXa13QBhF%2BvqMLLANMrhtOaqfe%2F6fOruFQTa6UyBDHAhjXD0VBUiMMjI4b0GOqUBYk4ziK3rRddqLxuGFoojL9JBGYGo3IF1WmZAWVn%2Frw0tfopXlkHKCTXJAkZwTq6eYfg9Ap5FedFtnKXTyTj2U8PfSPezpvpXY02Ces4EUx%2FfvaL%2FaSD6X1gBVoYF6x34nbBnHdDHh1K15B25Mw1FfhQMRT3%2BzLDIdc05EZZUR5gGwNM%2F6EO%2Fiy3U%2FslEqqWWEn0y27NAyBDskGvnLxc%2FGEyqfAmc&X-Amz-Signature=8edc7c5772f7f4efa42fc3574c92480be21c54c82a60f07906454f9940e07a02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
