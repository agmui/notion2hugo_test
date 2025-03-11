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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SJ7QDQ4%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHTNDIaoPjIPxAM9UKY2Zf6uUe8ZkFAt2npvAGFszWVGAiBqYJ2lebr3dK6fyW5nBJ7FaBGnDdB2%2FfqdQKxwn2OrqyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBhk57gZpkcJ0tRYoKtwDaban4q8cCzUjR46LLmNfhwCU%2F6drqT8D63NDwocqgADVQIrSMdeyDBUKHlNn75PNo7zAkx9RfiwTiK3Klsp0j4v9g%2FZT02VL6jSyKhHL%2FgRDCrWhp3ualXYPEx2CqMsd7E6NimI01SNAHFyMnI6g%2B07%2FTW2zgfrFoTcS7kDT0cLP2n5HtfWe3o8l6hTVL5EF3pTuKsrBcA1Tz6FjYPUjDJTKH1PNZDBbTa7HptMvE2I9lYeuyhdYqLz3HVN3Q7zRG%2BrGYoQt888PiMdp3lvhgRI%2BRZJTggfOyivySYKosNbPP5rtz7YHZFn2Hy3ONz0REaMEbQ1eDp8GB4ux92oz9M4it64d0kfS36Y%2FPWZ4PTeKnTSV19zaFVfHkA7fieFzFlt95OKyYbohJsP26cX4GNsX354fOejPMRHbUHxnFC4xrKzQHLFEwtNdC3CKdklwy1Uw%2Fd%2BPqaLBmR9PPuoD6ZYrvUeCnDRAY9fvtlZAvSrlMR9kAQ2U0aJKulNdzJKCVUK99XZg8qNBBnVi45XMe6f%2BuRbWmpqcTpDUtw5C2Xt1ESsS%2BHPQ2zZp6stAXDrhZHqcmTYQ%2BHoxfFTG6wHOq1XwkZZnr1NyTDlFoqfCRmjcY9AmTBGGn5MXYTEw6fLBvgY6pgGxQEk90H9skAAVPp%2BDgbD2yDtSuHw2aM9BNhNXbVPEFHbYdpGsCoXYyWILU4hM0h%2FPTH21fVn6wVwBLfZCQDA7Ga0OxMm13xy%2FqQ2kyNmdRxsHG397NFMPzLmbH0sR0ekIwkSQZF2gpUBG3Hd%2FQyVEsG2gKYQN74jBEqhB368dZRh3uQ8tzncGzaXXVBhaOXt%2BmxmKLeiDas8eM0ZSPC3VVoaEdccf&X-Amz-Signature=e9ac2f5fcc5b34a20707d327666f99c0361635f5c6274551d4c1e5b9cdac0572&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
