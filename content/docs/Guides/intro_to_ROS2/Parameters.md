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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNSKSJA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG832%2FXJ%2FbSvYCgOzFTgYO9PDB0mmDhDCPkhhMWlCOTfAiBZIz6KfbAUYCw3Wva5fMEEQVgKjPCv1VHG3EkpBwRydiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCQCd4oGX0W8TIxOCKtwD%2FDWBHtlzEQxpnyXXDc9DkoCO170MiMJuA4zeRp26Pecw80dxJxu391SJfkhr3USzJLne50IFQcoxwOdPQTgOFE4NE%2BPEWfr5Pvsurld4uDra4vsG2yQs5K7TUDQU%2BOhl1mQrQkiW8X7LmcRCUMusnyePABG%2FsypCVcuyst7wY%2FZzhvM3fDfj6lRYJegqSUN1Ij9tifmWWQAxarJGf7dq0uUYoIK6PG%2BEoLCtQF225T7X2aiPS4y%2BD16KMwYAMdzEUquQ8Dt30qjXda0aIKrIk569q56ExJjrbJmuNvd29%2BetmSVsGsq1D4X9IfNjkfSeCCEfMP17jVk0%2FAXgvy2RT0i%2BbPXZK6KHovg35iKM31mXHm6S9ekxrPIWz%2FrZ1SAwYCyudSLsBFkMer%2FISY9sTODQUxHyt5H0PlwMkaGroqjLJCi5tNQPLt%2BS5y9vvo0deZ0p0muJGOo%2FDVqCoZcBW1YiDe1HrtzccY2kLDUgcsG%2BWeToe32mypYJ5Bmv%2FhEJ9xky7vMro7N8zTv22YjyTjKFtuAPusI9MYsKPPgFoG4nJ4SRse7mRgOJwLoOA0hO4T1H4LXge9S2vFiyeAhDq5gfWPmtdn8MLW%2BKVyyr72ZqDs2Og%2BYHqJTJzxQw87%2F9vAY6pgFqIyGLFrmFmZrtXCuo8Is6HA2dCW%2Bzmf61v1naI6wt%2FFNFcAUfzkCK3sKRymmSM8sdv3vsPrsTPXJ2%2BNqBeIXj%2FFx7EAENmA0g8ZqQlkK9kW%2Bsie1B8SHyyI8NO5qmtaJYi3wemW11LT70Lr0jyhPYZDXZW86paU5K%2FVRXNVSEpn2UaGJdkb%2FpVkG0UxFBvwngxDzdrMhS%2BkDJt%2FinMb3%2B93jMTN%2BX&X-Amz-Signature=764954d3c8e8ffd760d58ebc7c0d8d6ccaeda46f83bb83cf26f9728f5cc16fab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
