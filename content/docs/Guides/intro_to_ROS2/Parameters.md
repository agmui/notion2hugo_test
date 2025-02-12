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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T3NDTL2%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuNXrkRF7ZaP53%2BKcG7YJ54em6PVQAf9rbkEfa9PPgvwIhAMDM4NNBb5VirRpSxAjXumr0gdH4%2BwaBCBBfRsXkTLX5KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzPtaDMHFj527WM5cq3ANxzW%2BB5CIg98yLTHdDQfIIvLxXG8Qh3Ge7mSFJe%2BJS9Taqtsdz8KVBhIx0UOSt1K7VF4kOsfFwVQu23kWqpmn1LwrNM5qVt8e0BajyZNTbVOPedmAisryKxCIMG2V51c8lSCEJyyfhMAXqZMSPPAM%2FhQgMYiRPdrJEHbzm0mz4AgUJf7u4bGQOQ4K6j677p6cxb9dRbfd1%2FJlpUG7SrNTPELcGBf38EAW06EqCmqrRJCy%2FHPRyGYEOP8%2BMhpb4Ijk49qJszuiqKROg1EQODo0HZuQ8j566nMdngD6Q9K4XDyu%2BKh%2BdAXZohh%2FF9oifY12YbdQ4LwK%2BPnalXmPXj9wsBQuSlJ1vIMB5CFWTrRFwIaUIRysBpNdjX4TkDKUfkYwof5h6Xos%2BfsAKjeS14bdji1n0NbisMlvnx7HtncW4Z%2BCfjSMZu%2BPDO7vuSThxQsnhnfLi1UtyIZgKWe1%2B1vnFs%2BsC%2BgAfnhRqpA7vor0GuNNZqOpAwldwHHlFVwSyIxW7ejCBtNZi0fCPRWKP6kU4k5tzEQUGLQv0JREGN66X4q7HXLAtouRRaNeav5WVkVCHEevnnBJ4RTVocFxRrDvHluNsit8q3XZmtGJwYcIS4tpXpJTYSq%2BdwZ4eSDCXiLG9BjqkAfRZ6Zug4UDht0Lxi0KXrCQgJxEYCgRtpnYbx%2F7jjZl4Wey0DtrtaPalyJIxpR7jq4V%2BDhHVMHxHudthtr4L7TQ30DJjquFLPZ41l09NExMlmEcL6gbTeYFWp9HUf6fPrjmh3Kuu9cvDdWnQXr95mi4buu4CM9d%2BT1xoQ0JOlYyrRperfelLpsBHmCtTTVXQXU3JNIa6u7PipxVcWQa5ScfuAx4X&X-Amz-Signature=90aa0586318c15766b739d9f5687fffb60bf4660c4380f52ce9cb17aab4c6f11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
