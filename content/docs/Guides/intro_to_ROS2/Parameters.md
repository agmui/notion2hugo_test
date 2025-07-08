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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672S3BHRB%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDa3pDrAASn2oDm2CwF%2Bb6i6jida8NcTPmaefebs8rWnwIhANKJWTVaCT%2FPx%2FuTeACld86A%2B1WKUwG08ayRPjw2ycUGKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNkPgBTLuSuaOr9DIq3AMHbgyiar7YjuWQiCbBsHC1vYtNIhs1XHya%2FN2t7T0VP4Fiu5nZ6B6wzBkyLrhhespL%2Fm3N4%2F1pETVExYAI0o2k6ZBtSJb%2BhsPJNFGMkPZLFJuR263QGkHr8NDoLCw627%2BitoiCeOABgnC4U3UyhhkWAdQqAIJ9RkZ1Vlb5odScVhA4m1n45bhcbIMxxkngvto6GUNvkXQtxCv2IS2E2fecIl9WDNc92uL351vYS%2FYoIee4LLqsPXaiKeaf8v0rYLC0Gr0XLPLfQgbUthViy0ArfRE8KVSEaW6BUktXrSKixrocLqxs3i%2BQyWGyy%2BI2vJic8tAE0HARnLOtLK7jwuKR%2FPkaypRWoncSEwSg%2FTUhCbpKtJfyU6AJnGmSweLoZJdoTdI7wM3IzO8dl1nmWKFtisyaV2Tn%2B64BByLZxOVG4CtAAz%2FpKaMgBq%2BuxjOPIi8%2FlqGw9m2qU4AnirWoMsiwj6ucJAGGjhBJeNmRx8TCMpx3L%2BApWdvpwLbPHyOitSe5tX64XZ4wjS%2BFkaKLCKbGyNw5zXcpdDwmySves8JM9vnZIs3PUeL7tk51WgF%2Bgfr5RdPpEvFLH5MD2uOprPzg4Hn6ai63XMaBuMesJOAc6bH3BnznWOWKA7qunTCzhLLDBjqkAVMH0aV4Y9BIBaA6D%2FG5NmM92dbWf7Gjy7nbFxLzPW2ymb20eItHhs8c0U3apZcgmZCL0iLgsrRoAuJQk9vdnnXkqilnV0PIGEEfv%2F3Qp43acQOPBrmwS%2BQYeMD1hFpZwTLM1TB2xI50BD4DoT%2FmCcf3ODCZuI7f6rJhYqUGynm3JQCpC%2BBMj5Ul2y2Dzz48YfKorh5kLUprU0aoQcU8jb%2Bc2jZn&X-Amz-Signature=d0c387c0d96e98eef19bbee36968d886f829290ab699920ab1286fb95cd331bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
