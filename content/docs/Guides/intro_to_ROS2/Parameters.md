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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GT2YUUT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeQ3%2BSzHDTrhEFe0%2Bq2c3KlinNVZghbuRp8kQ6ox8ilAIgMck1pIdS9aQtliIQj3%2BTeVijw%2BvVCa6UDxNV6SRWdIMqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCHf2K%2FsCsVpbfogCrcA5%2B54xpBprWPJlE4BjmQnYhQhD0j%2BA0G9qocKGrDP9RGfsFw1eygzny8dSUmrJPOuUpk9awizXbvEJlmK3hpNy5OLgYM3D6cXMi5iwQKi2WWuBytp1HHRX5ETn2qj%2BT5TZf8mKaB8RhlP0cyZC%2BQKTwqrF5NKttsoNHOenVSTL0D8KGUZxSDIf%2FSwf3UwLdaSpnN%2BXFyuvhCIAgDP3TqxAZHCxtRkOqteADyJDuXbDgnNK6G8mNH1rJNPyHRCCez0H5c7dqQVFYjm3YMtU7fma0O53M9Mq6EtUfFAVjBh0TIORMpPW%2BlKFrZ9QITs5wgF59ThZVuxpHAO8C6gAM2%2ByTi1M%2BFiRPKhBVyRQY008SkfFpW68V7L2T%2B%2FP84c1krXQdY42PobZJ2RE%2BD2%2BwCY4HUpf85p%2BpMutplFt9Lm%2BjNwtpWOvlDW0OyvIKhoz0ue1kOraE9h8ebIF4fHze3osbDOzB2yeJ5ZoP%2FPoXHaAZatWnKoAN6lfShfQmsxVWUtcoI2pVMF7yb5dhVeUFzUDGxDm9CPncetdki6spgTkPNn9e%2Fho5Bf%2BvWb68keD8wTyLlRcNdACylTVj7LzESSYgPoGqD2AEyL7ynE30ox6HTebBCcdFR0NuhLsLQMJKk7MEGOqUB4IyzFoyxxbvCL3%2FcLMS%2BtxG5Oy66HGgnhLlT554GIDtUsxkzEEoJO2fGMRDJvbx%2BLtl%2Fjl4lMXIpv7cMbSHjfIGKFUYgFS3gYW3AqQYHLeuznZAXjdrb%2FbOpDBPqveNJJFR%2BYLBKQzhqCMHtY5%2FrTGAHYKc4B9rNnMU55FK%2BGunjfP80vpzNZmTstT6%2BJK2OjhwpbjyXCA%2FC5s8jiMuidvbAIeZe&X-Amz-Signature=3c8865c9bc7c0772e20162c7f6485cace65cbc3f201e702f6f726ccb54aab344&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
