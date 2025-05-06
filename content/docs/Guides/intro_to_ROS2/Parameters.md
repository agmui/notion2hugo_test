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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ4G4LLW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2mXIslv7Wb1%2B97PGQUEDlalIXgeM8Zpmaz1GFj4KyKAiEAoYbv1Tnf0DOh0Tlndseihr0clwiUWa9k0ybDthCkLwsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJXrFTz5y8J%2Bi%2B6jZyrcA%2FUKTynktZ3%2B8FIB4kr%2F0FGlt5KJpl1qEhJtUsR4NpNwC9W1kY%2FfBCnqq%2FYXG5X6nWGCLeHVrgXs2MlZT1EwJGUICzs%2BaH8RGSZdQB99cPETq2II%2B3mzGZZAyggM7g59hrRkwhpmyLSY7On5gvG5TsLlPb4IG7A5JlvQAY%2FI4%2BGjkAeh2EgJCEVGfFCp2NEiMYRVNjnG%2FXJ22nSpskgpvtwBiLYqbx45r8PpJ4TgzM8tDI79rCa2nwSdvo8FEGDLOXwKh6BO2YgHxpXJ6kIN%2BddOkdTGc4zjjOIclFEgH9jrWgVU6H8ixMLPLRoh6A2uVU0kb5IW2ViEkhYHQXyoy8RBtiBH17BKfROJJFj1O611vaJIO91ff%2FlmMb7StiNyTkHwY7%2FyUxI6aAO7OVQlEIHuHsFshzTgQcN9bRwbbLaGwaF8%2FDFtJ9T1ew42UMnzkB9sQWKVq8lfrMayHmBluaksN32oEfBsrB%2BsTA0%2BMIap%2BgcRIusd83JSY7vrVz%2FbK%2FBbl%2BsewO45Y8AM8qCR4WR0dzo%2B7rj2gQqiXHTk1V02vTU7Rspe8YXoUKvH5%2BqpWSBDcIqDMDV%2BkXQqLI3v%2BA1ipJdWqOgKVByMSO6UPgpxfl2t%2Fk1ZivLKwbFHMPaz6cAGOqUB0EtrXkH5Um9LIepXy%2BTc52nHzOfo0EBIdhtQKuhfDtxdMtR6%2BTBsAGcefCMoAumNqFMRwkWLV%2FEoD3eyYkoXe%2BWdO3dEpGcmwnSzEEz4NsY9ObHmLgLAVFipM4iUcvABX8PVysewBGGEp30FtH28UHcA0nBzXe2SerH2vNNCyKIHxcLcHeBJzdKn870EoYOs%2BU6Ht34Aociirw6crQj7HATWDrvb&X-Amz-Signature=54bcb36dd1ee92ff73e17e6b214d060aae460b16b781253218408bd45fc9a762&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
