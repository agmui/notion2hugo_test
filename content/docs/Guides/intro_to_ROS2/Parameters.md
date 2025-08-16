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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AHREQCF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHmPr9DclpVEFsvp9gCeOqJoYclWiMLt2h%2Fu%2Bf3bi81iAiBlotBIeAAaxjThbkGWo%2BLe%2FyP7vd%2FoctWYkprEt7%2BXcyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM7zHd%2BWFGMsi0TZdPKtwDZatbwifHhX%2FU4Ud2CcCyaoUdDxv3pV%2BqkYr5D%2FmhN4VT01Lz%2BaEjA%2BJND4G6mwYrFKkgf34%2FfMa7UWsAAeNe1TxjkSKrCdAjd7VvXYl30DNF3RsLjtUH60YVbaaKn%2FhGfxF5aujQekwDzKHypXMtWcL7v6WCkfQlus%2B6fit3IYH1VWG3ouaIZGuGXNVV%2BtdSkRmY9QuhfTI0cP7i4L1WIQs0n2Ks8IwsoZUeuh4lhahRcNULHRwqsQWmxvyqUTQ0ZgMqViZ6rwHAY9ZO0mspb2CpsIMT1KYX19p6Qsu2ka7%2Fbzj9NrUVNqvQJvs9sQpcURC%2BTQFsIoMZlSdUVPHJ1O9w%2F88XI5HtQPfEywwZT5MObNC2bxo2aFQnWh0lvnuFHjc8zbhY%2FhqNtXvG3A37iYo%2BMFu6S9oHN1GwPsHVhj9ONd9UFFhRzbFu3hGlPY%2F1oOZD0Kl9LjnyAQoMKCTSjbPWCKlgDinGnQutu1UTTv%2FqeqEt7mWe22RkfBxGPKhxbXyGYiY0Jd57yJzbwhD6wxTHtNKCd%2BuX9wr5rQblL8O0wj2sAfMOgpEkaLmCmUC3ZD1NPhRdz6b%2BrJKvXD5x%2FDKUwMS6rU1Pk4LTPYUxJ06dk3Iv6cka71mJ77wwu%2FeAxQY6pgFb457EDqyoQVBqqKmg5DCxhJurEhTCdNl1wOVNKzbf3JyNDw44OyvUhpgiGF92ZeRFgvQO8SWVTQNohsmR1S7c9rhFkYTYo7Nn9Q%2BlsBPgfvAOmC3%2BAfssUDkLomu5gEcdO218NPk3e5Y3qQns5cJ5p3cAmhLGAYd%2FrBPLLDQBqRDNLrrswgEV01n6Yu%2B6T08giOYTdMoihPhBUThK9KpvL4oLJfAE&X-Amz-Signature=5498fec5264e9647f3369fc613648e74650c5b03b859515f0a42fefd85a3f5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
