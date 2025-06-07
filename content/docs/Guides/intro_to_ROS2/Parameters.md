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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4BMDB3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYXJ2p9G8%2FdJgvUcNPd%2BO%2FmKTQP%2B5xROsJtEZdAd8vQAiEA1EosCqVNxyTnYETmvchGsb3VQu47HRueKUePI7KltfAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDsb4CtdfhEIb9pOyCrcA2h4HlvHvnt%2Boomlby%2BOsbiWmHjUhCmAmG8CMv1zyO6xoHp%2FpjbNejHyjEzwVG5v6RWMeTvWap7vqXIXgJRBLVIYv2i89XKkH9A6gyJPAKh9sy6ApxI6tFlk%2Bzpv7bWFP2t9PeQdVwCgxYQ2xBGbmbv%2Bwtvpw2NrSnnBgK2tAW6B9C78KYMRlZTH%2Fp5LDjsUL827mCUZ%2FSD%2FV8WpmKbkxp0xWesB7SAAbOcAckEhutaSS%2Bskf6UK%2Bwk0dOhEsdSHve%2FBEstjIarbQPGLA3KvQAYX2ttyrpY8wiFghB8WPS7N649qs%2F%2F9Rl%2FVw9COXUhmOJcDVBrqcRXgr4a6f19PzhH2ih1USKpbaQiBOsoPqkVOa5K4tSiZ1RMAiUpXW%2FH%2BDVbrj4oyQq3KOGf%2FLzY%2FrHK%2B4iUh%2FRgq1kcrEHJSZK%2BlS6WPTt9GYjnyUmAHGKNKRdp6wksXgALYmLB6HCGurnsgs%2B6brRyPtjYMyc773%2Fc%2B%2BwgO38FfmmJkrlIA2A3xTque9NZru1oAU5ITSFNMLa8iO0G%2F3xHQfT4t8w04OAvV1tcCwDIsqD8AUvCi%2FwL2uZuSrl3b7hK9t7UG1gkiY435i3sS081L87Hnvpq0bZw2eD%2Fp6mwU%2FsIFE81ZMOrSksIGOqUBfoDfhmhEZACXUzedELx0xBFgCsSljPQWVZ%2Bq348A3VGx3%2BfvUswyLMUhxa2QZzcdWqWfDm%2BNjww6Amu73M12%2BCv4t7j0fnEmcKjiCWZ48gAqJd33UH9sw%2BRjaM5wbNJI91%2BZre08yB65z0yLAhYzYlKzlvUa1Z6u3Hb93A2C36baxrwG4yYy%2BwObROScCm9a6k6LfJZZniHDLliSZ%2BFkDpeU%2BcBk&X-Amz-Signature=af565e533d33598f6c37a5711dac26587348e6a739055d91ae2fdc92d0ca1be3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
