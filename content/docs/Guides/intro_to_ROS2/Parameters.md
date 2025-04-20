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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQ5FZ73%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCLTo5tBg4Tih8iK74T1dgfDijbCJaTfxDrkx3zZo8JkAIgWlvKfPTrpjIuQy86HPKSRUEQjOXYS7LtoFqWXL9IRa8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7rk7z8iZzI8z3QVSrcA1%2B0AZwqtRWSAM2sbjC6cP4ArKeZUbc4DGpdneZDAohxtXyHGJ7L3nRl5azMDy5LVhtucYu9uSfZjdo7e4sgYD0oyNvpmgjUH8wfL4bjLJ5rw29hX5F2avKZKXU2hmoDxaLcKvpPt2Q5edelvxWItleVcZFjFbkpch8mfbZ5E23C6bLtaDro2%2F2Lg55GvhbmUkMkXZaFrTCjNqU5wJn%2FcYVlqf%2B9JlFPgypIySZ3TJPnxNY9crtKffEZlzlUi%2BpmHO8BeyoR95d%2BV1nqSGczZQXploFzCerVlQEIeZSEZbcEWAQ7OLqu%2FxCSURMRm%2FCMZqOAD4vyX%2BtxXi8p2rzFzbedoDPsOGRNw38HJPB152A0zaOKa%2BUSUp67nokMubOjBDG4SK1DhUGV%2F1rfLERTafzBN2p%2B%2FDYDiUolux4TAjLJ5EfwjpoVYVEgpjdNNrErcDr5fFhnA2dq0gV3SB%2BWmzva2Sbjg4vxy1o9IOnX6Ohsby7ZrLiJRbz0XvjUfv8L74E5GGC5R12igUItlqkbMgcRMesQdTFYJlIKWHSlLumEB7LLJ8VKP3tLd3uRlsp%2FzAMTHJJJBGOdy0uH7DOY%2BisU9LHp0OD6%2FDZv5v5Ca5fXWv45BjQy6A4DRVyPMNeBkcAGOqUBA%2F74by9SMQJ4FtIyNyXMNW6XZaocraTBpjCAMHQcnuwDlNg9U3UtBTqnRq%2BZ5mFJPgvdBrS30MfbO3b7QziZCUuiymvcRgtAcVWSxBmPCV2BIdLLyxonUzYVX%2FSm6AjLgO0Ng3vSwUikzueykA2PUH%2BlKxvr3BGbr38sBFjIdLYc0YLTUWQ3poIGZLsv%2BVpND9x%2BhCmFUBQthSEdg%2Bvh6S0x2kCF&X-Amz-Signature=eb8e7ee568f64e1fe2c3dbae2fdd131ec6b303ac2ad4a3df2624e72d53edf79e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
