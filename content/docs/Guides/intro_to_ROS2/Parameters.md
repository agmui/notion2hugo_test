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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZV45DO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFQARQYmjlhacnix5cCVaApIffXdsUbuhhPQJWlF3%2FAOAiAA2kMeaLE3rnSwP9CD1OYfVP8wOqRDaGsxytF1yZLHkCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMysIS67TkEWadEvCIKtwDPJrYrJLYnBAGzlGNoLC9EmFR6sfr65%2FgT8L7utY%2BN0S1yYN9vXeDK9jBHIZ3uGB0Zua0f4CRuMbcx4CenJR52WngQ%2F5c5pDgQu5CmxsoPoa3vi75we1wLA4BudPAxV5HZxkdZicHIUT%2BhmUEddIDmzqS7tNAVRWgnsTWIsCa27x2PBvsCf%2FnZftabYH8BlN6P5ZEpOOvhc1VFqt1WdBhcSqWHGe9DQjo1EOv68w6QrQhM%2Bo5jvLrNlY4LyJskzfdbL5845FxywBpJ6YduczeqNrdwbUpSfPeRwuwa%2FvpPEMycO1AhCIx7%2FgY61gq5UXqQyhkEd753%2ByxO2KMKqhX3d6dwFGeGKTfPIC%2By5Nnc1%2FBgc4CKnv9kqGOrGNoLBRH0KIAyaYmCwfP5Iw9Vmofk%2B6bxNMydH1U1fYGJsyB42%2BvGlLe2HLtodsVqLxug7D6CD2sXucAPpYeETJUVyx7xbBeGQXR4YNCgutr%2BxeX%2FX0ye8WEqqqlaY3ZiNLHFHhcPNGsXUCpptlolHNePFdx2AnO9TgvC5lVWUVza95YrLCfVA4so5emb%2FMM7uBMhuzMwzespeMdFzBkP3WUM%2F9gTnhFIX7Q%2BLR9voeGuD7PasiqVzMyae0cS0j4M4Uw4qGDwQY6pgF%2Ff3futcw%2BITxFgs%2FaWNJkOJcY%2BQ6eT4b8JpZ8NMaRCGVLu0dJlkuIuk9KR5MPrgmpv3d%2BIk391Y%2FlHMCCav0H9s%2BWMk1MYMdkKoi6u9RsIr55czsggSADa5OURV0XjCeoHAy7xf5GseLygMmqajsWTGWwts8aY4tYKM6%2FH8JUmyTv61qUEZP5b34gyqN9dk3zZQRbh2nqyyUcOx1SVrbRBKaA2X%2Br&X-Amz-Signature=b6f203d6f177bbcab6844b2df88a29f15defdf57974a7d685b7c1de25caca562&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
