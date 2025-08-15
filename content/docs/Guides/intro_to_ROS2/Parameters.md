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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XQ7WWVN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIG2aBoZSYABBb0shwtpznmakfp%2Bq1SmWeBem7m3YcyvwAiEAvmbF1MKalc4OFDGAOqujCW89cwqw7hcJqE2py1ONuEwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDL%2FbuH2agsPv1jGUNSrcAzqSIWAaodFInXWKIs4WeCDlZdPELT6FBHwTkAP2RMno55HitNBM4%2FteXalMyijBb3tAba21LyzR5hUVIzsnRCdXPsjjpKuUgryuvvX4ZR2GrWSvgrVA8OQxKTpCQaSvzyUkAcf0XDEOebHmLChSL7l23ElhloXVvh7AHD4ZMeC2QFBWzHqrGBa0QkSBLz6di7t4L2Lok3XtBzorTha%2B20Xle%2BQ0MQWVConnLieMYNrwYX2eG2RHdKNH4ZHgeojFYfoDuywgnsS6hE8fFq3F%2FX8FyoF6qac3EW%2B9EnUlOmh%2BqZL86x4HuHfhfnd%2FUiP66XTspR3631CDjLk%2BmA2YZj7grAnkNv0L1WnDqBV9ZgwsgG8irnSHTXrdyoFEqWTvm9jgCGAvob2C%2Bl7uMbWb%2B%2FFUmXMZTz7fYt9pid31rbVHEizfYMSw0oFc8r1Hwwxsb%2BfEj9bs8a5kecAZ0Qxk37HJBnli%2FVH0pqget8No2814sVB%2FYDjKkGp5LDeMdenLbXzpUbMYphSa4E78MxklFo477Bd4kOQI%2B%2FhI8t4YwKaY8%2B4KSzyg4Ph%2BeQd2RHP9AF0Ufgz5Y77vBAl0Oex9YZS%2FnlwOpH6hOAIpcKULtzlACEpkCHZGckhYS3BKMPGj%2BsQGOqUBW2f8DmOTVkjBOcSmPCXPyWabiTU1gmoo4%2FkoWc0u%2BEBT4YGfKVzWQNk4TctBPA7K%2B0e0BPCuGe%2FK4RyZ4AfjX%2FEWnX2a0iNyuufSJY0%2FooiwSU6XiFu0PQfZNtz9YEWzBWVPFwQdBX2uj0SXJWOHWiqXxIZW6gBT6AVfK9XRv8ECfCt0h1qrEE5yxqsDZxvNoOMipmOfA%2BHa%2FfXzBA5EFhL1jybW&X-Amz-Signature=f677429ef7b22803b77d6f8eb7e944779515afb15fd07de230fc77754ad7ad99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
