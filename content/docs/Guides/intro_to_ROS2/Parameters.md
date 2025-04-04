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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3S4RZG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8P3i97a48%2BG55QIBr7qPs%2BTr%2BOuU24Bht%2BkT1jg7B%2BAIgOCHCTCYl0VuzPh3v%2B%2F%2BbGzwEuaZQt6JrNRjiQc8fnzcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASpHYhY8mX7xmi%2BiyrcA43X51F9t94Mmk9afMCOjflRsaPKoTC2YSo7VlFXO9wNMUYqkyfrWa8%2F8XPIY7ghZO9z37IeRGDmvV9sLNJKWJ69p7LVMXx%2F0HBxglZjPzt4d6i6B6Bqq0NW2LcqSfC9lGLhzFon8d6qECzQlUTyhs6vy6L6i406KPncLLAcXyWLDpnZwjFvrS5bbaswXzbgKbsSfh4aL3pKskAt7z6qsnHUKKNH6Wh%2BKVrS605wC4fVYmbIk55vxCfFYI677h2DN8ncOUvazoHQZJZOTlszqAC3WajVsH6lzI6BDY7vW87RycktsIbm8Kd2iLPVM2z9fhh5%2FRJaFvAsNxlD%2FweaaAlZnkFSTXb26X%2B4%2FS6FgEezhBDaElQ9f010woJMEOXwNN2jOgGzjvn4Lk82%2FJ8HiHP22j7w0IAZGJiOkvFGAy48clQzAiw%2Fvv559oDATzWef4Osr4CitfdyC7%2Fzb%2BXn0cprVqEty7h0s%2B0wKDvqUSbAAiV40n7igRvAAPFrs9GMHmIxzmC5AoS6FwCBq6sX7zIc4uSQcYfeEmxTyeCkyHndnTXRFglYQukoddXxt9XMosqjj9p6gMfB2E9fpHB2PYa3R9mGdiz5gCC5OgrfgGnw8XHNprAkCEM3nfaJMMDfvb8GOqUBkCCO1oTMB8aNC5K%2Bd6wzJxVH8U9pbjuPcTB5FYcZ2Hh748QLxYsNfEiOC689SMauWZgB4UJhTH8emGkKO6HWMLsWlL%2BBREv87AwkvFSNDMX7qVSFDKiqggbVqbhC9IRmUM4If%2B0zVBl4B0Iz4QjrRoW4y3Nr6hrwS2CvyKRkmJYYxAVfJXTrJOhNX8JVzXUHcmmD0DTaaaEH6KQqveY%2FXSpMa0IT&X-Amz-Signature=06d4d3cc714a57b344bd5f8a9dc7b8e47d1b26fbaa4f633b07bb6f40d665dc7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
