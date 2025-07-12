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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQESLI7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaiNpdzavQfiSNp8cbN7oV8%2FaOp8GUQp7kV5bB3ycCkgIhAOKqrfLlfURyyoZmjaZQIgr8X7i0y%2BUfmBdeSASCI9eoKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6RX%2B3BOjFQ%2B40RmYq3AMyFVffY2crqirz817vy1%2BaovlA9VeWwmxkljzOTw3xVT%2BJ3sn0o528uOjIiSi4eYIYatVny6GR7n4odkVofiwpbtDcyduwYtUNvb0U6kOiI%2BH7vU3NzcRBvS7qLpa34PcAYbU%2BnPMde1t63zfFc7vf6uHSjzzeA7HtNcBgZKfGOCDphI6gTHyoeSNLzv2xLnkQczjuPdFa6YsT5Jlrd1NrUnq7JNP0hsyqYJDHYkwd5CogNzVCvS3fLU0TAn0ZfIOJrS5bX0Qb5OrTZwheBPKvTVND4wqzRwjrKMd%2FKFQ97h3yAiwfpcLhmVHL2pHQce4heoRXyYD25bvRDhYtTNCYqUFGD8IwbPYtv76Rqzt4YH21HlDaOfhCOqlJCwmM6UINlvjkpH5reo7kzRYnvthwerpFH1v1AmSSV7S3WDQ1qRtU8%2FI3euhhUxStwCUz6mu4n%2FjfEzgDSYSfmm0KQ5%2F4Rt34uG6Y17uZVeKMunc3SrGx%2FVPuviat1wwuR7mwyWCLEYDjuHLDteSEgkeIB0emPj%2FnT2IiauzB2%2Bnamyg8kfbSpzV2YVVyVeukHmtnm%2FMijSfrCSZ9TV%2BZPI%2B9qvwVVSVO2B3j1ELNEWXCzhbS9LD%2BLT2UjG9%2BqJf8XTD6%2FMjDBjqkAccy9wRFirHVYGRgPc7j%2F4XdCEIxV7F2LCoFW%2BRb4m1g9UrD3LF2c4DFnXnFlEJXtJOQDQPn6UD3WgOIhUjuiJ9Xi2acGZtH92z0w2Yw%2BHx2LMbQIJkamGAM1dBaJcI%2B79X52zBxvy3OeKiUy7zpkn1E8Heujc1QoaldHxT6I782WilphFbs84aH4JQrCZ6jweagFenQAI53nnBwyU74VAyN2rih&X-Amz-Signature=c4596e4be45cc1c99bdcab2dd96151af47beeeabe23c556fb733c1f4c3be2f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
