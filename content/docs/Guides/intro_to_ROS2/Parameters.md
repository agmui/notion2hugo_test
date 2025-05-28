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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675WLY4W2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjKuCj1LY1pkuzVdGNRxLEvz%2FB1og7sztVVEtGUXFREAiBWZztBALj0gjtAh4t43Ce5DjLP8EJ279a5VRvuAkGKuir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM2G8eUVhtEKNKwG08KtwD7xi4LSviOUi6Yptg0G8gLeQH8qlsOGQpBE6EFWrR6e%2BY1FABy4Z4bUbD2vV1zqkBPssaSs7nefG35oof8grmRvF3cT23fRx%2FJkt42Vmi4YxHYLJ1%2FbYBVboSa6dVtI6v7kT5UUgsvXa2p%2Fi0NY2qZCT5%2FurNCXTL3MYzLE7j0%2Bacuuw%2BBLnE3kte4GsriFjVvPxGuo4NIf%2Ffiu68uj57PRAODSXbUGTtljE5GAsaI3MT3vDA9cIR%2FVScpR7FjynEJzuao%2FJN7nhWaHGQnu9Hax3ZVCrLtmPglpZIzWLeWrKHw0zhfZLBGjTy5lWTGGSnmjMsT2ZSk1k6qDqlMG5T%2BSyCIS4YL23WWu797grsDZTm8WWnGdgFKtOm69ir%2F6xq9sUv1%2Flvefufaxly7Eb6yu%2F6%2B8goEDBkGlSIws%2FNTFAH5qm4TAEGe4vlwqvxFxtYd5RJSDlqJwrYNpiZssFJwFEtyKxzaCfkVpR3q37aQq5O9sAI%2B0z2S25yrnXjFplVLxNwuRYVWBlnQZtx1pgA19S8eozspXmCfFtevXbr8KtqXXxGqV%2FuH1moaTJobUrSyel7ibbHnLvt%2Fiw%2BXlzYkuWBgdZelKFJxOO1wJP7zstFD3I8Up16Hg%2BQ5x4w0MTawQY6pgHuozmuHUFOI4StpcTD7W0XA5GVZmuC6DUmJfeuplkVblxeR3uqXAssYQNzEGacEdLPUvi%2Fz8TdOrJdv7a7Bg24wvqeTER2DMsgEYGvFkAmjWRTTX5UP8lVIQmkcbqDGwVr6%2BD4HWxVRI98nhI%2Fzyy7Bm6GEfdfC9qIvSpdTCdJTci%2BYFWjoJ0Vo0N%2Bnuh89k%2FehcYPtkz4wqZULv%2FxDlrbZVjNefwl&X-Amz-Signature=68bb772a3d3390aff9c2ead4b6f2d91351e7f5e418479369547a0b0bd9676fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
