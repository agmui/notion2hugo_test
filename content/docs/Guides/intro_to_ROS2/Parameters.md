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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625X3LFTL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIFS%2BqXi6pDcwMfKgdQJ%2BPrTdTr6ogzMuwM%2Bb43aPvyWxAiARBM2%2BAwXgrQUXKRj%2BiJ%2FmotOZAwIPbjQZbcLkJYUGQCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMERNNGoTe8m0gxCUFKtwDO0mivxGruG1e63f4I29MEgsmaB6NDBAb4KYhvYySd3o8%2Bb8GZ9j%2FqBPbPcu5ScGaX7grg1rFpPpF%2FFigLfkVbDsAEW1o7mi0co9HN%2FF7OYhe2ccpRQ%2Fd7d8%2FiKgtFG%2BCQ7utRy8KWhke151KrhnNjzdaujrE369ZZpqdryYvP4H3PmG1g055I1YYIpNCtIVvYOmvOkggn6rt4XochdtewNgrenFfQw6SBtdJOwyjbclw%2FtKIwFKZv%2FOckWtbGcirEputy7qbSgy4Kl%2Bn%2BhfXyGufHqksuE3Vvqg%2FP7rpXy8dLHxEqKadqLFlsyaYbfdBjmdpIs4fdwjgzAjqSSUwzjYlJE1sanYnZUImKYP9ljCH6yqu5ib%2FGMkIx45kw3jmplRijPaZKmzoCJCz8%2FhsanUG6mvNwUhs6Selpo2UxpXKLVB3gAXUb%2BGH11emgBxHA0xstQEOfZW535o%2Fu%2B%2BhejYyd2Q3CpeoQfgPxz4qCSGD8FWa6ly0BDNQU4wu6RIxEBmC907KQfaaGkVsob4cCKAirp%2FYg7KVYQZQ96C3ai3NaTvqYkMQLVwg545Xx7%2FcEGLiCzPN%2Bosw3x%2FXjusq1vucgruwlHpZ%2FNfEPnRUCuGcJsWS5JPQuvJUGOUwmtGPxAY6pgFc0HyEbXvxvDjwkhzVA9sDRGiGrfUR3X6G6ZO%2FVOEglJtuujA5BRhltQmUxWZLIfStzntuxKSWMAiaT8tDOKBMRuLiW53Twze2lkUQtEOVfD%2BiMFp%2F4BnYbBUugdaqtw9kZOnfwvOHMYsdzS8LSIgl73%2BCpu30pNdaad3mA6ChhNJQnX6im%2FcCfO57UsEZlMRUyJxh0p%2FXdDiMYyUttJvQUvBFb6Il&X-Amz-Signature=a0e7933ab6c8d88219ada9665e1beb9b215289bf575031686dde9eb01a142102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
