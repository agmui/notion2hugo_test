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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFLWYXZO%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCHImy68Z5Z0yZIm32ulf2X7zBRMoItRcDhcp2iEdSSHwIhAKdqy2HZxg4xeCBDkBRogjtldvSnMsE%2Bgmj0%2FPVdT4COKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw72cJ2bTO7phM%2BI1wq3APfUl30AVmNG4j4zKkbxWvyhCecFDD0yb5bVaWisAL6FleFN%2BtbN3rgmmv%2Fc%2BVK7k3KolSIwGJ6VYeSEds3U5KUWvOB8SdHVZtwOTM8b5bRbEtOMjABHdGOmzRcPjyPmIzAn%2FRJKbK8ELi4r3Nax0yp6gMPX0rbDnCXdLreMRSJTCqvd1KfeFzPBxnzRvU6YbDZRnNmakfiHHWyDCA7ZHF%2FC1hcAT5ujuA1pR8HCg65PQ%2BEza38qlgu19WCuteyXhcdC8vW%2BBk33vbeIho37OqBS6XAMmd0TKusZ6Kl6qRBSDo3aIcmX0Je%2ByW4zToMKS4DqHXDQYcj2NAgvPblMbxzsWcrhpKz9U6vBWjwCAU3uxqQffEoTam19O6qwmXuy01ejS1nQklL7uRZopaU0zAGf%2FZO2u0X0IMyIX8bj7Dr0ph2t%2BmisZLKVfEFilOQbI20QVaZhKUgRTCJBWKML80bP5pnFAhwHqpAdx3S5nx47f%2BQ7QNj9Djw84GhJm40%2BC5gzQHcGKJ4eP%2BrPZwKJsflTBIlTJ4sLnC9Y%2FXngBMNzgFpHIFHQXY2owVPuA9LZDqFuwzzsO54zVW7s%2FmIh7i6IWTDh2QCUbgT%2Bzwp25f0LW%2BWvchXrHUiINAhaDCd7JLABjqkAbFcjQWBASHy5M6oBeQLSVgmjPRYRy%2FKG0virrJ%2BHz2cPuzMHOjDa7i%2FeLcndgrkaD1%2FVS3protka%2FWIaXjJLDcAu%2BqVnO115LDohOwYhyt9IR7wvcMu%2FLtBY2UeHpfck9XouZ%2FvlYLFEFQ1Se16%2BrE56rQUKPjvCP8QAVWrpQQGUSIrijX67HS8%2Bw9U9CiieGyoGPym5YUePpnDNYW%2F9T0W07w4&X-Amz-Signature=918c9a3a6acd57bc5f14f18f7604fb9375100434845d24c28e90c29a8a66c34a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
