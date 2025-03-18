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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GG3B2W2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD1j9NkLQl6doLbgOuqsJy0aZjMYDSGf8V%2F44Q8RgDRlwIgb%2FGZwOlkFperOlPVt0kqq2mc8r%2BbQQ%2BnX3yDi%2Fz6F%2F0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKpravBiTeMSZr1zlyrcA5mUgdPLitaEpLFSXnnsOPiih40KqRvP9SUK6ETA%2FQm9ekpHmc%2BPBfrgSOxHcayfbLf51xHLSSUx5p%2FXdMPmdvnnMS2neBYRIJGBDM78afJkZFQ38SxaxujJsMlyzdXQMKfE20fxAkx0BV%2FAwQcYjg%2FK%2FMgWmUKeyW%2Fgd9dchMXiiZHlBHisXVMXRxSphGfDRoyGysfYdc1%2FWjQ0EqZXXrPvik3UReSgEdlLMA2NFZIfw8liCGvtdbIhc42QopCTeGqIUdrA2AB8OVao9FBExMnqEuGdUjt87PsDxJ4dBxEKkkzggCI6mJAQwtFE83O8Y3%2F4IbHdW3m6lzYQBTo8uAqmysr3jwFG3n3Ywmxq%2BShIAj6tNigqHKSsYXDYecPEj7hGiWat9y7sHhXex4bFO2jpaFk2PE%2F%2BMvZWZvu%2F2QEqoDxAyfV0oAdy40Q9abICt%2FKuf2Hof7pTBGZCRuVNAOjViJW939ZnhiRxrgzuMRZSAR%2Fof1rHuYs4QRJbnWfQFs%2F4SyQ0t2U4PusFiQS7ZqIl2fP5NdES8da%2FfpS4cX9GD8Ykk1ynYI%2B27dEotphGCZFG6IpVkjf59j2hysaUSUMvqIeEM38o5mOvMIpEnJedIuikbs6YcsOOWXHwMK%2BS574GOqUBYVATr2tdQLEHyc6EYX9uqscsBZ06TST%2FXHMAlTdSk%2Fn6JtxfaUoqqyLK3i5iXkuGNNIghDN4fRR87J07BeDFr44aeQClt525DDphia6BOIjc6%2BHsv6aN1Meh8Oq7dRiEsVBRcVz1DXQiO2UrlHhK6uvRJBGY9M3W7vS9%2BjwYlLuPBnPk8Ae9an4c08s8Obk1Ppy%2F0gu6W5jWg7E%2FITMkwtQPl%2B83&X-Amz-Signature=555eea9ee83d8f2fbe3d26a7e5e05612068b76728e3c8253dede8efd37d27777&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
