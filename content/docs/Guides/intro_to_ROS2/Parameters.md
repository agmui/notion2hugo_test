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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJEEMLDA%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIGyDm61kB8Bw0DPBWOENFQRn1rjcUv9DAI6kBwWy4briAiA8mWOuusBvKqtbnkUpplbhRUAp%2BtChDhNIoxThUcNKAyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJdGK4nlj%2FERop3x3KtwDbfrSnPOPR5b9Pdq6f2qfP13igRDx0wWSBj%2BQlIKjjM2RWO%2B4DWiqv2m7vVer7EQfklK98j4i7Ph7ZmsQRgVq%2BVEbxw7GOv%2BmibLu7nU3sSi2O%2Bc%2BKtxbmb%2Fjgm4TZ7hFwUdnlc2NSdHZUhF7m%2BlwmvuFTWhPCmvtrABakKK8CSvJmTAL8XuBOPsRenBJSW9bGL%2FkgDeFo1FqbDcKeXokE5vVHLliBC%2B6H3eweTtI6H8a3rri5GLhQ8a6posr9D4ar8esUF9lKf%2FH1inH67dwQe%2B5zQ174LGN3sRYFh7%2F32UVvnGGwWdFvoi%2BgR62dtjKFEu6zJKWd8pnl8Y8QahRRg5lrIQHSPjZf3rb%2FaKBHjzCy7r827R%2BMQPQNdo5TJgJ4AoymwQXDtUfpNfm35AU8RZrKQfuTXmuogi%2BtfWZBMGeTdrybHzzQ7KipX3%2BFO6RNaliNCjRs0OVRowU2m6Ll6r5zY2VQxDNSuJ0LEqahTouw2L9WBFannheYliICP94FYY6KYBSenq1ZeHb5YhMw8uB1LA64f7WuFvsi0n7rox7ynl49IUkJVIbhe8nwVLDoI1wooR4GgnZFXEOSaDmxgvHfHnAFHxVl17Udx9IBjaVfl7s1XUmaKZaUxEwm5S6wQY6pgH1p%2F3BM7yWxHw4Zp6qPdP5HhCxml%2BJxl5c4U3Wg5FZfrmKlPjmKlzkIHx1%2Bk32cH2mikE5cI01IgU94uv7ifQNWyn%2BKXYJNqB2xxQnaD2UKk3ezha1s6up1rZ2GiK%2BhuAzK%2FTN%2BdCaydVBHYq9cLbXgQyLVbE9TXI0%2Bxf0shVYDEaaAVRAQp7yemTlBf4Mx7Pzvx%2FvI9b2qhBc4bkEotUDUYKDO%2BI0&X-Amz-Signature=84494aa6cf39d6c80ff245e5f7f48b3f11cff7b3d7ffb800e2c6ef0d0e4fe023&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
