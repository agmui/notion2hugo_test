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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVU6ATN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrlNayyvBeQVCLZZNMSXcfEbA5FEqOrxE2dU%2B7Z6uLawIhAMwIbPdzKlwwZGytgEMDYj%2FgsDpbSEgwfCsjXehBtfTcKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt8EI0epoBwxB1hAgq3AOr8NEXM0Ty40vm29DIZO6nI9q6jTYmMUrvFizvFisNkDSxh0MiO0U0qgCL3twMjWVrjba2D%2FW7UnhN1Yl0ELLEbXW6RCBwIlNdBojG8es9WaHJebkPB8cjDOPPCM7MGbQvICU%2F%2BYwFjab%2Bawhm%2BiPh6W7v5L3J3GV%2BIydVeH3XsBOs3mMWJ66soXp9Pf2myENDe04hsfRwgaLSPGIUNr9XwOu4vJglp1g12Ol2qfDSvrAcDD2R%2FrE3oiQC9Bg7wgKS6yIiihwkCLnyTNgG3dX3XjXlwbgiK56Y2RjjDj%2BIiiMUWlkGKZxZUOzw7Hqi3Fs9YVvXbRlUFAhXO4Ye7sltS%2FqD2br5cy4Wbos%2FlrcttGrooMQP3h275xBxKwqzu0Kbq7SgGfJJ24m4x7wpgoFpzz%2FPBaHjI%2B%2FCAdo46jXWZbfs6TS%2BnX3Uu%2Fr2k3jY%2F7d1q6%2FhhpddsDMMKcSQdWU8fWIYRGKoqlr6Xvb0nn4tKE6ryYz0EOva0YMdz3qXvkLJmAj%2F%2BcQkyeqW3hqDORFHtgDYXcrtBQSUN%2BzwOGlfsB0zXh32HRVRDYjKSITb4%2FZsyUAoMHligEj1BzNLuYsVtYbaTytMORILDgen5qJiipBIVR4Iq9yK2m5knTDx8pTCBjqkAViHbZdR1ug2ex4XM7Dy2a5gPh2S71laSTGEHOzaEJ%2B%2FNtr5pQA8mcSaQSSBpsxXqV04p1OK30GRtaGIQdlHU5VbGVtSQp%2FwRbjxkJcP56H3q5lRPYAvK3OIh7Zne7f%2B3jxWq2nPnwUM8cdGXDi2yXIVhUETlc0Tm1DmN8AaSk5BvWheBtj3jPEF15hTfbJdcYNb%2BJS1r9HGGJtmRbp2o5Tr%2Fqxs&X-Amz-Signature=03b1394cf439024402435a80a48a91375c78180209fed814a918013d111c1d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
