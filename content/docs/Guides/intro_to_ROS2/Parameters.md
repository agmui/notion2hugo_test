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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74PV5NP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIEBN23pW0nzyfJdR5zl9OTS%2FQc7oL7Vo78kgm3VBg%2Fz%2BAiAbPcMDi5onhBfWMNBO7IsOE3S0fDhONM7cGjM9U7RLmir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMXirk2O%2FNdPOOtNcIKtwDwu%2Fw5iDba6otXTVVdMjUjhFKpapPdArlzUKbdLjgjALfWgewvsHj0OSOO1Cy%2FjaIWvjWSZI87c1GuAWXzs2uHVsZXUhks0ZQADOYP70L2J%2BLCKldtdpGh26ib8%2BuhSiKhJL1NqgesWzNKZSHcKocfmYIHzSU90eW5L2fYKRcMFeovS6fk7eNepVNRAcUsWfTdw85hmKp4VaGj3sOSIuH9vkb%2By9Bl3zGkhS8zMYq48Hn7IvrsS5BtzVczUYUGRcDS4JMMPy3Mk1icWo8TGi%2BwPXuDtKUK%2F24LPE96%2FmN3Qz1Pdw3wnwQcKsyUHd5vgjocLZTbYhsrO%2F1as7vIn3Xb%2BjosHl%2FFJgboBroo8CiXBHwlGI%2FAfqbtatefhhxjjUsYEoV0mEubIhHt7BJjN5exyhyETQIetxIoqGkY6uvQsNpJ5Gd1i3pIU0Mm2nfucFmHIK5RDsHOhpI3WxQUgnTrOjqAOH%2FjfaNRMB8xrqCUcvPQObGnSAZy2upse3gyv8hDLBVqMknKNtBefpQiFQGZsO58hxit7Y7hX8oQLKG%2Fj0u4vAT9B3Pgsyy%2FqP7boptFN9qN7wHm8qACtIddp389ArQ1w%2B8zqmhwz%2FpPyvLO32bB%2BwLDNMEIrNRzzwwi7%2BtvgY6pgHntgyCcWuuI8OwqBNB4WxU%2BCCycV2gHhTmITPaL8PeE92%2FkorA0OZPYuvLIJD1tC5Q46IUpOXld3x%2BeNgHeSpzoDOOjK1oYmP1H%2FhGnavi%2BMcOOSpJ57NeJPHx4BLsO2uzpCwrbDJhXqnmBuXi%2BSVJIvfccQZGu%2BHH9oI8%2B1Xf5%2BOXiFhN38GwrMfxAIhqSF%2BGgzbHe9pMoboOAVjFpPvX58DUjhvq&X-Amz-Signature=3e57e3e1dfd9e50b6dc0ea197d39eb6b960a3eedf8e1c17d38a9e4312c2832d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
