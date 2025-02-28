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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THP7FIDN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDsTsfrYj1sglgwr8J2Z5vD6ZBKVqKB6f%2B20Ez99K%2FKhAIhAMzmJMUM%2FndGXYaFiAZB7thaY%2BatuQ27X%2BEXvZl8TPSEKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi8EOjM%2F7Swk1Up1wq3ANFwLGls1kKtMZyJQLvjeyWOrlkB%2B3hEEfOi%2BZeKHoiBSirLFKytOp5RV3LHciNYX%2Bz2U0dYb5CK0cg3feE2cagIbBEU3GVFP01lKP%2F01UDLhuoj3aeFLkZY%2BdNtTWu%2F%2BRHZsTV%2BRVlDxAZUolzhz7dnO8JBnQJsAcmgri6E2vyHYk0rKQjHUz0VhlQ9iseolwSW6vmAYbziuISUKzyy%2BhaV0kcT7bmZpeuvS9pYvovMq1ClxPXYRoIxW3m4oTIT1dL1OiwpPLVzFLifMzSVf2vKh7cxcxvq7FcVyjkFuSn%2Fk2pErylpj%2FxJ0oyg6lpJEsNw3mMCdlS2s2znmAn7vcTbNyGaV3aA3go53NZsBAEzMGPFH7KQ4l2YlDg35phKJH4D0DGCJKA%2B1ljbitlRelQ87Oa98FQq9dLZmJIktrES%2F1TxNIplNEGVt1jTpQns6JrUq0hD%2F74WgTTjc%2Fw6Dh58W%2ByoyNupWMKkZ%2B%2B2Cy61dMkqdbBngUwWQUft%2FwQ6X%2FGToShuOTZ%2FDkqPR1WThh%2B1DFcVkfizpk1zij9dX993aXqgCj8duUqUdtGOk5%2FQvWhrZst2vMaATbNdcGv%2Bq5FSy7Dz3%2Bljv6jpZbEwbiG3%2F5OqcKHDte4QqUJ6jC1i4i%2BBjqkAQX6%2FkeM%2F3bvniWDd2vgsUQnpBtdu2ipAM8kUmA2NWsCnh10PH7wUtH1P0ktYy6GCS6Q5Um5Dzzokp4MobuF37woUDsc%2FYB8x7ouBdPiZjkQooTwTLm3lYvsQt4KftI%2FsU7vaZCD64FynERAvNChQf%2BDfkd6MU5LbWbiW%2BVlJ7glnMzpJOxIUgK%2FeXo7XePLq32ffAR2qFSGZ4bZOq2lFaCOrSZ4&X-Amz-Signature=9e5ebbffb536445904ac4432d2015536c169e5395b1c07513a5718049b49e026&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
