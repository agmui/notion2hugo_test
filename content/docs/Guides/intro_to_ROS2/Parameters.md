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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RYGHBWU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGPY9QJkocX3kKnKNp8E8elk4ZVx6ZWsrptWVZBCiozRAiEA5ROSNJNZBy4vpAynfazcQW6C7uz5EX5QVsn8Bw1K9S8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCCWRMfiDI0OEZrKyrcA1GSpZ%2BJ2GhzRLgi%2FEXmZ9yzQZi61E%2BxnYQaHA1vaxOcUbLBDx9n6WzSV9DGUZbNvOvj7qQz6fBpt2keYoy5pMzjYwGvlzmy6puPfnXv67D8ToKX%2BXhPS8oQlsOuFVRevdiXJCQ3v15bcFr%2FeR%2Frr7zUyVefq5c4c5Hj6oRo80tj9mjyFVHn%2B47LfmLk6F1alnKnDRztQ4RCb08gbaA%2FK6hg8di%2B7ec43ILxV424WdJKlX2jM0tTJpuegg%2B7RHUXV0PYFvkkq8STx%2B1WVmBWTEEley5P0WgEs1h1zvo3bUj%2FGhsVbbl%2FNQpghBblXcpZp2zOD4mRS7SRV6phRDP2oB2hOGX5unNwbX533Ei18sqy5IHZDKtkN94p1hAzqhB4pKOWWHVeR42zq6TKOTpafVXE%2BKtwMFTUGrGNYpfi%2Bgr%2BrnKromkQ1um0FD6MyQsvwDKRbWLXbm6xTqOx5Eje5Qlm86ApjjQrzUcNCIP4NJX241XG0KHoiN25MFEWuoSfsBLtyMphs%2Fu9EuANuvIiRkzC02vzJejHR7ZnGOXjknQCCJmp1ynvRB%2BZkmZmsAChVsIpCep7vsnEq%2F4Y7S1I%2BEsqmA2AaTbBm2UkLwPit2eUQ%2BMJKA7ORFH%2FnBOlMO2%2B6sMGOqUB7svabZcngtMMwJ3DgX0MF4MW5KsPyc%2FRVgG5CyxexjPbP4galOh0L8alwixVsiNkJb5pksS9kXvRB6n4amt16gDFSgimiReZvV6dizHV4t03uCgHveW1Xa6EPYyj2I6s1evGOIHoyqgQNhQPnEVrJB4OZrn3x%2FgiK7ofL99asWQeWObZhTf32vlC2j1gLeBJVUdGJlkvM8mCDaAARW%2FRTUV%2FyfQ6&X-Amz-Signature=a446f3813bd6d66c01abd23d77fbd839a23d24184ea2ea1410ccf65c16e02741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
