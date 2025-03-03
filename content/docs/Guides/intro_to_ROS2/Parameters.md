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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4CGBWX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC6RDxLyMKQ1ViEO3QIj9iRacUpjqvMgMOEC5RnVN18AIhAIK9N%2BY06Pg%2Bid9JDrVoGPCfjfXam7HLJoZUc8dMeKK5KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwokg8sKG7D5yBGc5Qq3AMXuaDnIybaT%2FhY2%2Bat6Z0IaxIxwx%2BmC1IuZ29aN9x8kENVR2iYWyLquTvH7BdTSCNWtcGj8tUCKauhv1qjeyEv0vJP0%2B%2BhxxmSjbheFbu8VSKPqpA3nX7q6yVJHemcSaXqi9a%2Fx2zWLxO%2BnUaJJcTuJyssDzbSgEQCqGP2Btg0rB6S9QSx8FNb9%2BTif8iu7MKcdLlOvTxgQQaRihPdsA44aHJx51UGgFZk93rC9nEHz1vo3zWlQ5mmjyTSlmev4D8brWFIAYbwnoSiN3Pa7M33qj4ilSDExAZQKzrncNwvT%2FIKPtjzByEOGH3usvthaBtiWm2P7586BqSpeYCidgJjW7eTPDzbXhFTvnzOeO6Xy5oUoScqVJDji4eOnLhQCQs2NC2pozqtidSsgNRZ3ZYwI8gbNBPeFaG%2Ftdw0ZhvsTauTE0zape%2B6ujKAOGCJKP7GWQrUwm31ljPl4719alhqeNT8dtgSg0i%2B21rk5dwk4VM9DCDQ3T%2BWy9YfRjzh2ZELWtNAoS2F2gIV7yT1YHXWWbvfyg0ML5xQQvtmQ7LvHirNWeWMQVsjINNpGsGZVElb1BDxPXWQq9gkI8QD1tHWxiLlkJU7TWm7bANWLsKKzWr51%2F8LvE1dWNkp8DD6%2BJS%2BBjqkAaa8LBCxNoUbzcmVIanQXJr7aziNagMSHvpedQ2Enoxutigga31crfmus8Qmb72hJ3N8GD5QkdU5H7AosZ2sus1wC9QRsipnryCvGsX%2FA65WO8S%2F9WyjNeuWdxGFZTul9BJaOedCJjYDxlwOEbTRES0YusmuEJfkGEIcmEvQGTt8EC2AXmZB2YQP7AxgZoyMEy7ILo%2F7tsag%2F3oPq57UPPnkSXMl&X-Amz-Signature=7dc728c4d5a8b40e3a0cffba70796beab89f40e3ac4dc75e600018302515f6f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
