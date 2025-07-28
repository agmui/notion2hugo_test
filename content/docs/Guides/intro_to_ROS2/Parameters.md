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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJSKMGQU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIBV2fGSfNTUWgoFw5%2BMV5ey3Bu9S2PTKSXdpm%2BGjNFphAiAzu%2BHjBSD55tUT78rhUObH3bp69h7UdaK42aKRASJkLiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Hj4nbExnhnv%2FlPXKtwDnxn84%2B1Gx1didB86rtH2cTLflYwnZ6rkb47hTu3BP6t4r%2Bskh%2FNxLuFFEyUXoVs4GyWdNTillr4YpWEos3bZ4E3X5ZMipkAoq9WlP3uWJHFp%2Bz87phgt3HUjK%2BMdDtbS4rfqmUf07FYBQYwCzMTvytZygDCMPj%2B1yOZ%2Fxz8u0fhEDO9HYw%2BLTROzewPkL09FvrgyDAOz5%2By5etAOZmHQFZXwVHOvbkFOBBhOynfEQP5tVpzVQs7YFm%2F7qbYEba9%2B8Zh1wKEmxtlfaUCbRu%2BzZ%2FhJnhs97YlaARWKDkYwzOSSe3gyrUhI%2BIYUf8BEMbrWilEzo%2BHomQYGZRxkHkQWGtNvt8J2r2S5YpNYgpuQVDbboeSM2ik5%2FGJQ%2Bj2J5JQhsETXqkHNz8aNK%2FtMGMnL3UVkXB6JWFQTZM9nL9RMFJlbM5xOh3TMerKCYK%2B3u5X6kwincUGZ5TOnz90vR9i66yWtrzoZxKERBGe3YgLrelx206k3e%2FvBUVu9X3X735T%2F213Ti5EJmd2zQg5H1s9M2BzYMY4Osi9OE3ELy6WvARLoeECWkzv9BsmoSgEiAD%2FYcro9V24PirpARyRu0IkHcnEi8gKBwaqkGwL4Dg3FVKUIfxwJYvZwMsXH0IcwlsacxAY6pgEewP2GL5zVvaZwocasnDLsWS8uy1zIDrJaa39zgiwyGvBQm0C8VQvqTStaPmWH9jSgLgQfzX1gf55acrO9TCyRoNCtmdT6bJCipykQwPyF1i%2F%2Fz6BDSamIakWWwtD%2B%2FqB5nuS0sNgSfIrZ2ViAg9T4vDmfQljPJI3T1dJFU0V6CLlQjJWjqDeCuMCss7OiiVfb9FNLgD9UZzLzu6vQWlm648LeeXmj&X-Amz-Signature=0efb286ee0d2dbb1af29a443a4c5c2c845c0b35ec536f5972d2c2363890c3088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
