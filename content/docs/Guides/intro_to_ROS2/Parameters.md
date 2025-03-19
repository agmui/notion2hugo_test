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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIWVK3N%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCmhhoFPUBUPupaG6a1vl8Zq1PL51L3moPW8n8cp8NHoAIgOMYz%2FSfhBfp%2Ff%2FHnGgy%2BTnRPT4b3%2BA%2F5tpYxdKKpA0gq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKb6Anr8J0vUMGe9NSrcA1jAzlcqOPFL%2F%2BjgGtsRVxe5IC21tphGrCcdkTaBCTdDrgLx3YGpI5v5WbT%2BzvuY9WF458G2n0YuLbe5I0Jb2i8xEdmj6nmM%2B5cIl1tWiv%2B1Is1NinUZilQLGYJo6cEOd6JznST8qqG4BJYwcQ6Uy2SL3AmDNPxY%2FRO1zRK9f5Nsg%2FtzjH00OMEsw9RTYMWCy2xR0G3c%2FfoHx6dPs%2FpK4pZnCkQuSoqry5vr8usOne7a8BdcLr5GqmIyP0%2FgQTAewVNkqrHRgRkk3gOzqzmzybpsdV0cccHw%2FweQL4qeZORH1QlylASa3lnizDER%2F8T502WY%2FqW8BmJdHc%2BQ7OVQCSfbR06Osft26Iia2y4Zyla9GCQClhNTc31pDrJLQjF%2BbFhOkf%2FH%2F207yChWtIqs566VEoxaJA3v0q3bKlZYDamrKifuocYWUHlsn5BPuY3HnFaQENoNJTLwvJtC5MHLQ03Q6nuq9dAiypjR4IdwZ%2BsLkVKLhX6ZjerlLJLvFPnk3ttZGVm%2BZ04Rfv6nkX9QCzC%2BkmMv0M2w8Le8G7reTCYr%2FmD97%2FcFJJg1JVdRboUUMg5WPE5SjylYdS5lzVrMMXJ%2FEpJ2xq%2BJ93Ofod1VsETaYofpzAm9OI2kcIDcMKC9674GOqUBn6z5gzk4aXLilChxRrZaDglG%2FIfBung%2Bkhc2%2BuQKXWOc0DR0DcFZkNl032EuCk4KTDt0OWSP90Uog817FFsDgYEirwnDfFlWTj%2Fe4QxkQLm93DC3odnQU4eXPO4YQ5gy6eTpPipjeHZkjOwQE0Q8r60cfocl8TGcONboPoQjLkI134poQpklzxTCrmK%2Fl1dTd4G4zERrQQ6X0%2F8BzdWeTzooo3De&X-Amz-Signature=6f6aa0b210754dd818a06bfc722eb8c3abbfe7e42d628373d6dc60623f9e089b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
