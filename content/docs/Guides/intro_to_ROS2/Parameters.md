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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNSBIDJI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFbrYMA9JPNQlsQU%2FYJWlTTNx%2BD5STCT1FkYgHZat0ueAiAuVgoQg5e%2BqWNg2QCQTtfZKcI46V7h8Q5ns7fojnQ0fiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLbyCxeVSCDBvNxrKtwD0xH%2Fam4rR6bxBzTKJFqOiXOLk8WQGu5HFiYA1Wts847yYt6Gf3gcR%2BjZcFhzFMetOKNX170n865f5rhxqPZnzcNFX1uTkEQFP87G6Dp6r%2BU6t2pbaYM8ZhOOHtalqEGdS1jVHOOk%2FWL8X1bYThq9t7EdzHxxQMaMbzJ4fU8HfDFiRwLWcElvpf%2Bu1M%2BB%2BIgWUYJtQoXE7tXvCV9M8uYKK0Ng7b7WEGO5vhWxPhQyhVnBRNbTdIhygUe%2BRciyC4HpDWthv5FPxMfIOQ4rUqD7ZPta5Vvar7We9dhOJFMQHnbD6c7LqztT9j%2FNVBtzpvux9AgRU72SN9%2BB6Mglx2diRXV2O4Y6d7hVY7esQyaZVWcQ22mPc27J1ZxTlQ19AowSX05qfLV%2FllucOPmzLUTRhrPOQ1zyrxLB6MwhY%2FDpbxICPao0i%2Flju%2F48kQUSwRvVa4txvIV4ZJqCjFQYsyhkKMA%2FwLNFTvmBYVSjKq0T3FAmyu7Giek0EktLCME1l7QFhLf2ng5DOUgijxgZYJl7sDl1d33H0%2Bp7Gcrz2oaJJvqp7Rf0vfwFvESDnArP1YydqqHrSx6C37J122uuwOBti%2FkWUQ9bXTY4nT1eyX36XQ0psxSNXIOzRGqkDLEwpKq0vwY6pgG3mpv2icYGys5alIqjFFmj8tzJxi0lYKoADCM4Q4%2BJBX5r7Q6i%2F3J%2ByfQ5QjfaXEa6G%2Bvu4%2FT6%2B%2F9pbin%2BICxWOS9R1yAIyKIIvqFx%2FMoXaPXxhZuESfoxeehqGdYbLBs%2Bf%2B3VRW7hxHyCYyoI7c8%2FV%2BVYrBlHKrnhAEVb06%2FZJJUz8w4SmS%2FyvJ0z0RaW4SW0NI7Ub%2B%2Fg%2Bxg73YtbIx%2BPqASoPZXK&X-Amz-Signature=e33225281506707a5b040cab988cda87bc483d4aa0c6851e22a8546e52c1f5d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
