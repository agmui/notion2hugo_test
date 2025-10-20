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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RIRAWWQ%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHe4os%2Bna9BGnHli6TAHYJmadFlfiuIDH6W0%2FjY2QYbEAiAePwVOJjsE%2FLasYNKjOm7118TW1arFxoZTPEazO3JjBiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7FeJvp2y%2BwhdVRlVKtwDy%2F7kM6BtlUTwbOtIU%2BntaEoqeZsCl%2FzRcHXxgqPib%2FtKvVRId2YIbjD%2B7e3aEzj5OgerQzRNREpkSRfyP3CppojEjMOQmgCCvvZUVsqQPXvWzi1hWy5M66VLBr4lW3T4TCfo10BD1sbIv%2FIxDE8WAZEENUX0KLGnpUZSwQdFtte8V5WKSZN%2F8QT1MvW2sL2D6oiu9iMofegcEiQFBzJgfroBWEwyYHkHK7wqK1IZpHLSq1UmOiyvdBUXbvmhfzaJDWsq7LmCGl7z9dGQBbyFulnzzr3LwIFTtv6jrx%2B8drhKu54xeXLHTsigFxerr4oPQ9owQbPpN7gw9oMDE1SfpkIeooKOyD7orPLbcE2GHFs3O849a5xWLFBCwous1cTvrWZexvsvGAEOVcJI%2Bc2IBinYANKeX3fXrlc8ZWFWFuY1suwCZvK0X0r9sxOzZFMUlN6ZFx5MAHwmmC80s8qg1BAxKX%2BeY8JTb%2BhYaAOj3mO9miii88JM8TUW7Wwz2x1feqlII%2BTvvMIvFjQRRSHmZHGS35H8uLYeQjjaYsCHdZH42YWPnn0ZIPEzd4MUP6ytRY45w8dqAxqK5sCEK8EyVDf1UqZwn2z%2Fnft%2BXG0I6YxflCRhX9Mqeg595f0wk%2FvVxwY6pgELAjxlkGQ6harAqtGgMk0wB0mGJIC7tfqG5Hq18BynUXCp4vpnrenMz68i5pi1t7VD7dyvWOfEzUH5b%2FgFRkS8s20dJIYeuQ%2FdYuqPO%2FXGhvSC%2BUEeXGFSbZGFBQPJudXPbcT74brSqJfYaMq0udihV8yrFMeUDVanITw1APGYrsYgXu4t%2BGGMG4vzdrtAXE%2BVR32abVwAOWtnGQHkRlmRoVd6ZXuC&X-Amz-Signature=809a2400be194917c6c22a8234e606643ce8a5ae85812da455e0a5c4de4afbd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
