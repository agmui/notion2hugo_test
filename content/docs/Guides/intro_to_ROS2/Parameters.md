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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PIYWT6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDgJB9xoXsITWigzZpqsewW%2FvgFvcgTbS9RHhoNheTDJAiA052QoN9tSzQyI56k3HWbHIbMjt4iu3T1H1dX2HGkLmyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Dm4WaL7FHmoCLKtKtwDCWDFXsHbe%2Fbon%2BsJT75gzJ8aWkBil2H7Qu%2FhA2jtZ90uzCqqnOaCigPrjTZeqlF2nlcBuApvTkJaVkKlqYZ2RGyK1ORwsyjFjBBlntGTMeLHZM7QlLmh4dfqLctFuuEyc7MB6rFAbzfsQFzXjjk4qPeV60fWV3FLWrwuK0BdB6EHViBcG5vAzQiDxS7He%2FXG%2Fzo4J9WoL0cfWtZS3IckD3bJ1dlF6hl%2Bhe8AcJDDNgdfXwrts3iLzv9be9bunD5PHy9FEedSP8WJg%2FPYB6eY9AIk6GXul5dCjbWMVvuMI50couKwI%2FeJH%2BjCgrUH06Rh79YaS7t2DN%2BIb24b3bU0%2BouXBJfvZyznPoDwRPBov%2FRm8DqiJnL75HAChg7BHtaDO6c8U5Qh7BJnwjZkF4E1x4hjLdiN8BmLBmxMU0Q4OzPFdKRExnNg%2B0n1W9nr%2FuSK%2FSEde3IJBtpQM8tM5uOGqOCOLeaOsim67Z3vsWja4LYu6GwV5OGE9TiDbM%2FQBima9qqqafQiu2P9zDnL94MNXdZYeCNmTb9V8PWy%2BYvXheDH6kQ%2BvvbY%2FtEhUNZsuCdAzsqnWsUrCx6nB0n90ghoaDp9TYAXLDLXgiRNqZGqYOB1mXQwHMxn7dt%2F%2BPEwjdKexAY6pgHCmzMHGRyKmOtv7TKoF2cbo41eLA7FqXjhVEe5O8bk4IXRBaNu3lUjjYxMYvvcrHSEwquow4PNaJqKYGf5VVmzrbirVREDw2hHzZNa0k4vcyuRYhzgwnyHw%2Fcj1h0fQkGijKcRvxZJBQjxBaoiNizTrv8jXL4snLdL%2BZhpU05qJBvL44CnWUOvcxW7YoVsvuwYatQmepfMniO3rzulvBKs5pX2HHzp&X-Amz-Signature=7681bc66e572e40e729bc31e08ca7ce1b89e9881d9867e62d21c9601c3b693f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
