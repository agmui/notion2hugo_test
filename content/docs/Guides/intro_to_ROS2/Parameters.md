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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGF4POR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGbBkQNYuubvleacW7MFJJFNHHVpXvo1%2F0VixoNjpdB8AiAZaP%2B0CCghHgCqrYi8wbgp%2F2IVf2zVjICadNp18mv7ISr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMj404PfS3zSe4o1UjKtwDz4K0pc0fOW2GmnIOBCUffDTjhbgNDdtRR6J3lLMUJvyPNkEIw0FZD4snNzNMboPZdqaKKMY9MI%2BpK%2B0%2FBtr7Q4J0xmTq7y8OGAkW%2BFD5fzj6u%2FJqtmiKGqe6jXa1MSP3QJHVNRBFSz3kR1JnC7lXDiPP%2BWFOg3rVj%2FIHmfO1Wh%2BgbUZKc5SlduLVH2s5PqamLQhd37ppvXsayUGWr0l%2Bm6wAGGa%2BNNI1sFkJ4v6oIFRW44Rp8iQ1J6xOUsRYcambtIosjlJeAXzWl0KLvluyq8mY0Tolm8JRz3%2FGd8stwp4ZkQSnc2OY5zAmU3tt5DgY0SSYbodNC7WKzTTizMCDwuHqKlSZj3So8RUMZmQ%2F4ideED0DXYwWm%2F2rP%2BRM1XHrUspNStfskbnESZjPAypNoX3obeJCzfP%2FgcLU%2FOSHjQLcB5rsFADHgTSyzTj6BwPJ8WBSP5glAE3XI4hkVUa2VYaTfncd37vHECEljJUBaG5U%2BxTCrqy0zpX27fo8oFOsi%2FEJ%2B0pPdpNA9eNMdrYpgxO7XjK7penxL7il%2FT48WbkitORIdNasdKjnv8HqUOfH04bCL73y%2F1oM6sDV1sGuLDxTsit2n2kqYiU9O1Mi222Fji%2FO7th4qub6%2BjYw1oCBwgY6pgGM4RLngRnElriwxhEmuqroVFaPudfXRaIT4JJ4YsgpN4AAtChLu2EVZKd7tAoxed%2BH8KK6notl61HDVT%2BsgohpNY3nGQOB41zyE1D3gGwyFi29OCi960C3kzexiSvkQNybsyAp0Z4e5gi1SO8QZ%2BiiCFsrmKRmMJPRZAva89K5MEKhgJXcSqTiuU%2BqSjn4XZ05P15LtLJkkpf75ITXA%2BNZCdAX%2F49k&X-Amz-Signature=84df78f31d07173a3f3525055d4df97886b1a96994e9c73e79192ab6415dbf11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
