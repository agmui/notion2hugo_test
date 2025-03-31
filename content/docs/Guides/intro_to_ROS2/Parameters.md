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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOBHR27%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIDI1lhlhZm47FwrusXyTdg5cC7lhwM1foQ1kldYECakEAiEAy4OCUZq5KDGuzc2sM6wI%2BgjV%2FsO0sOSb%2FyLidEVM3gcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH11J5WbS9D3awRjkCrcA9KVVwBqbHDSeu98Ena3e4ByUhbftMuEehOFEPxYMcjywpgENREQ9CPvbZMyzsG7H9fD8K4YUmCVLUI0u0G%2BfXk4ZhJkotn8rhBOsSSDLjr9iJiXJMe1tYeLkUrYsfjCsrL1ctFKvDPa1FKElI3S6ZwUDHpnsK3pzWiLVemH9O6Uz5gBiH8BCEEmu31i%2Fn9SBCEVFUlQU1GiYmITSUuHDZfiJhbsNkCfXiz%2BPoqSP8Kb%2FVgSKg%2F270PqGI0xQUQ0kIoLfTrBPem1%2FacVF3nqEjy1MVlypHyU%2FL7eAr0sMi4lMtfS4J3bXTPen269sVJ1Nx4mDtsIdxU6oxCMqpOuJKxgJq8G25t2hOVRkPe%2FdT4%2Beodnhj3H2%2FYHml07wqT7Mz4NVR3VZYI7z9fZ8MQlFgW8%2F4sgePoeE7%2B6X%2FoppOZnrq65lt2rErW9zNN3SuQgL7bLXIES8xzO1eQOo%2BI%2FZeKI23kYFpF9k2jaa3jcw6f%2BQSNhtmac77SC%2BBhFICjysoykVADMeU8%2F4bzJWY%2FsZ4a2BQXNe24n4e%2FZIsVZGPaVoBIXjaxaQjis8mlFpRqK3EC5eiRGOThLAveewjCr87c8Ql%2BqSRu6kptnT8mzsWyh7gbc4WqNjE9y0slBMMbOqb8GOqUB3zFOMupa58RRttCqHvWZenyx%2F0AOZPTmS%2B%2Fe8YBmf2mOLQhXsjygSSBU%2B7k%2BbDgw2qK1OMCMoghm3LwndDGHpqo1NFuTXClsmuqnYAoIihBos%2B4OqgCK6hdyN%2BldBZsYDQ6B45%2FyW9E6DjQPXgusEX%2BKMQoxhmq%2Bl7CltYWweStjNE34IHu4s1zO40%2BAwrECn6tyZwmqkSPK9LbVSAuEsUDTJQf2&X-Amz-Signature=31f851654a7e62b2ff2f9658722148693484c84af01ed2d92272275b2f79b81b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
