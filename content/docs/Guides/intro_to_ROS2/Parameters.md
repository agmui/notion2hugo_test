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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5E324H%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIHJh6fZ5ZWaMF%2BaFR%2BAqtonwonjE8PsHsf%2BUqm4Owwj8AiBV819%2FaJkWEb6XAbgNvA6i5AGgGhw9n%2FkHUVqzQS8DTyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLjOJIUw2mchBEPTtKtwDCPb7E436QYLH%2BOGe9L2jTmhAh%2B0n%2B1MKPUbIoM2UnL2LF2uJao0cKEuYZBYclviu8XNArE3M2%2BKLE9Q0Mrh9GU%2FjvAUBY88pu6LAMilN%2FEdz4GLmfRKhwVrUyKVmsZ7vB3hlkSASm%2B%2FknZos3WF81GRK15nte3mIs61RvVmSy%2FFZR0SAGhgRq%2BkVyrch8QKZUk0cc6G5r3chUkLOGnmPRBYPyF6VVoeqIMEfX7MP7RYolmU8%2BA3LgloT0SwIIV4TGFcRY6T%2Fl%2Bh3YP0NuQN4ej9pBDRzVxIQ2LKUtwHCC7Q8FPEFXhEdMDkpgzHnG0Ry%2FPQxjq6d81G8ljkNfsgdSP4jl6HVn9OKNjefJWcwzup5K5kHqB4cMk2uMbnGlRwkMj0OizqmDpREfM6NhSQ1ioIByTWbIshRshocVUN1KRhyd6NrsyJPYDzb%2F%2FHSvK0qTdvUBi06Z1gkv2XqRorHVTLRZJjuByAcNYBzIGumEekxLlWzLX%2FEbNnwmQeB%2FvAG3OHkH%2B0tnWancmk7477tzbyTIcgy0elIgBhzsk43VJjJhThic1i6ffNsK1NBu2YD0Vjz4fiei2wNal5AMniNDsadboFTI8MTbs%2Bxt6HVjSywTbR5FwGzx2agoNswwoqMwQY6pgFBvVPjMqcVDlsalqhz%2FIsXolBDk4CJI4fjMPWrCWZKUVxJhkOrF68U6sia7AQ7PftVeqbIR25gHsWFTaHvqpEz8Bj%2FHCCUPpOiwsTdxFhafmgD3JCzHpBFTNn62euYD8fLD3y3vla%2B4P4beNBnWyoJt50Ng0raCiKry%2BUvjQcFhxlb%2FobofA%2FPcddQqnx8Hkr92%2FwMAoKlEZXit5ioHpdirFSEX6xq&X-Amz-Signature=91ad8c91c22f8553e96e27c56cac4a387d5eac3eb7843680eff7c52acc3bd768&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
