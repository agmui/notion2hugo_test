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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66JJRBW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDtkA6dgla%2B8nge92tUNUZ29sGpv43Zzv3s1dBerLu%2FwwIhAPChtqIP2QODQNuzrRfLgJgjMqgxlN0JMqAyM2L6%2F6RgKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn2XWlYtRcc%2BCVO9wq3AM11X%2FSyDo%2FFO%2FiYJhGMHg0DDEQS4QeuFPTaR5Vlcobp203ikeBSy6HRwHFiEaQxL2%2BeCoD2mrMPer6hKfmRN75Uk3AOxJ50FUzM9NrO8Jzyt5AVaf4yorTi3qKm3sym%2B9QhLEfCaJUiv2HbZ1v1tSZ5HiB3uQDdx4WKJi0dS4gF9LeicSQhxqcp2PfCUEZfig07DaPIZL2nMVqKVibPNnNyW%2Bzacn9MXAOZeepIUGq2s3fjhFBopRACa0R8GKSREMfeyZzMmf2AoBVBKYceDEfqo5M%2ByDIcwuTRAPCe%2BzH4LJViX6yfHTpz4FQCiMZBTWyHaH5eP8HdfnigKgPSXIQfC2AGK6UqgxzDZZRE%2BcNfqeuokeoNqNErEul7bfDf2yN8bbuY5Tt0R5cNQN3%2BfCqmto2G6wGUwupyPvBIjR8janfvq1GGMd5Pt0PIRhLL7Gtnr9bmMamlU1udRexQ1hEU%2BLPoh9%2BHpLDUjESlzmOd9MEe35onhVh%2FSaxSX0Eqp1XFaZP9NA9R0K%2B%2FYhJ3FxGJOTs6G8fLF0xiunBNTo6WqcGCHsrbdnOp53QbFe8FkA%2B%2F7AtszLYR9mqnD68UKca3DVMDA%2FyjNta1Bt6geNEtZQ4HXq84k%2B6IlfnXTCY2%2FW%2BBjqkAaMQGfhctC2EYBWKS7gAya06S1ipQKQwCDcvUPThf5j3cqx3HazmbVmp%2FzPJmdONMXOgze6k1BDrXPd9qVQj94dL9inQld%2FhH%2B1hv4NJ%2Bi%2BdLGzqCin%2FDYu0eP8brydNndxwzvlUc134ixOyuQj%2BipWgd9jMawFz%2FwTZ3%2BySQKOTFFgBTE4zplECP2IjF%2B1Q7dMdiUJ06MpAIcrQjb52oPVXKPUp&X-Amz-Signature=56f5976732831a65dadf0defc2d592de467a6036dbde203c7784ec84cfa37d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
