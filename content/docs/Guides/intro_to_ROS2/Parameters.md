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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6TIGNG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDcGrKVxrCEJ0wtWSrjoirNcSJBBKdlO4U2YWxP9I%2F6sAiAskb0a7dLlsPzgBO%2FZ8YX1aBQrpsU7M%2Blyu9dNQDGI3Cr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMg3O0qeeMU0ktHzXeKtwD6XAdMYmUrhYtFIy%2BcUPVe%2BUeILN4lNWbxRTNLnhyMHY%2BkqvAl30FfMMxzcfgpMabGZEuF%2Bl4bVWm9QxVQroFCJjpoldi%2BVYO8UC04X9LZDd1cWuIR0iD09vvEiCy2mjMSUVsHlSyX%2FJoqbz2p63BvgvwoeDFfPgBhjYY5L96kWnZ%2BdcWdYgM5hkZBLfeElrAh%2FyHTcbjfzXLWo3ANGUJWoghis%2F6q8LBioc3OwbgkXkoOi6QRLwPVRD4VaF%2FjruSSBHNEP%2FN7h%2BgpgDXdoCAMKpxwCSFrBfxf73WlDGrqUmgD0uY6WPeTfPwCNFMbIAO267nohWeBrTI5x6YeHrjQPDmJMR33qZgf5hKXFKKdKc9rBzLC1bm9AprJ7Gk%2F7HSYdlLwFrK5alcfs9SL%2Fvyl7PzS%2B3iUe0Z9w7e7ZZxwtfdfseeERppe%2BWziH99OFI4Q93NJyMSmS5Am9cx37LtLbNFeiQlEzLRb%2Fv4a5ZmkXBzKlKQJWmv9kM5ZYaZ6aLA80693ow6F9qROQY573iLB9xGV6DVe4ncGMJrtGSi4siIyAgWFx0tubQOTiHTsPxFLjApvLULVGNY%2FUSPuTmyV%2Bqemo6vyBPPz7mAfC3SyXaJiKgXcwoGfuXdyjQwke77xAY6pgFOVmsUs0Wquv%2F8ObCE1NrtAHie%2BXwe8c6Op7hPXf0Kbrx9JoqHUyoLs7v2cb0gwhXI43yS%2Bin1boLD42RZdAhcRZIBf3HAXSEyurgIpC3cxJNPGT2XgQILynhpEaWt4LGx5vhpH15Py6gGMlmZ4mByzQZbS8AjbIs5qnwICk2qBlqaGy3a2ztwJd0IhCHqF55239%2FvshQJxblZ4iG%2Fi04C%2FfyQ5v9X&X-Amz-Signature=e8e1c1c642e92e6dbd0521e560f42dab73c1509aaf998e44774b499a7d00a1c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
