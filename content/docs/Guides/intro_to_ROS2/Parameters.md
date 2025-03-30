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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655A3X5ZJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBJEgkMzKUs2EtDzYcVUE4tA%2BFLxWZzGR%2B1dH5g3YsrnAiAZrSB7Ss13QI5PZxQc0jlGvH2xt%2BTokvANosRrme3KXiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDV%2B6dnLCAR5PU%2F%2BKtwD%2FE%2BFPcs7AANp%2F0V%2FYlk4%2F5qwkTbaA4DKotREGoYCRwEBWCM%2FBqD%2F9sC5d5us2bt6hef2KE0%2BijklJtQu5ERqKOHuRsCe1E3nYGSska8i0Ut1TIsgWBWKtqUJD56m294w5f%2BJIcR39gouq%2Bfucug947NXiDeBPMTprgg0CTTa4bswj5IjJRsdmtcwetODqywiJfuq2EUbxkfo%2BG5m%2FrTKZKBJdw2CGZOfMb9ieHLh%2F0L7%2FxNuqLIMK8iIGetVGCFOhjfJE796Y9JEreo3uwCTdsyXPpknRxHUL44WkBSXRe9AcTfcmcpf9SYeeUU7ZEY0JqHmZgQxgJ4IqUo57GEQHDzc1Gu0yeMo71EsanGKxdP9B7P82APPDnn%2B3hYouzDklL7V%2BswfRck9MHVWZXa2tHis05JODZ508p9Di6XcYSVPoo5a5j%2FWE955M7uWW1%2FvYFM1DXLhfff7LfepwK2CyBFebzoagMBFjcbde8ssh296yzudSp7J2wme%2FI1DDfa%2F4%2FHTiR7r3GGP9x6g5%2FL9Jei3%2FPHK7TPWnrRGK5Bdexw9x2B5Eoy4ZMKMtbHaxD%2FOQJZzb11ukULK3kKzZcRvBmss%2BHkWxG8i9jojknA2JecdeirPRD8hVAXSzmMw4e2lvwY6pgGDQtj30AC9zUtu9nOgHaKv%2BxVQfxJ7SWVcWzKE1AiX4BYIDafr95%2FSavb2YvNh0Mz0iwhxCW2BFLQt9q3VdKkCnHNBvqIKUhLqzQDwVdPn6DFfzGZHK4m%2Baq2A6IMom10Q222XRhKDSb1Yf81siqIabSbrVfIIRGSkNG9o1XHwsnUACPomMv1K0tgrzc0fGdwaDTNttwjc2FQBL9k2nhQGTnfhn7iz&X-Amz-Signature=1ac21bd3bc4ca2d4f57389e26c33d59f87128a95b5c723f8fd74cb79a6df8462&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
