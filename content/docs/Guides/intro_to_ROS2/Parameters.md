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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBOVVDHL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ew14E7s3W%2BzdSsYtIjL%2FoLfnEJfSlJfkrIKUY2eMCAiAToVJ%2BTUqfxUmuWKI0qjupXBrkwj1MgOzn9Ff4he%2Fmdir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMm21RCiLzy7N1kYpcKtwDzj6WECvVlybX0KQBV7HkvVpO8ag5ToBxVK%2F2ac0xKNXgmtOCwm4E5NX8Yb8R9ooIbHGmPCxBypnQ1TxyxK62C%2FtRJ0eIns8XLUt5dJdZxyQk%2F3AT%2FPdkSCsZbLgPUV7QCCgDUdLmCkH38wFtPdZhyh1GUL0sBOqXs1ETrDd9HJmh10jPG0%2BfM13rFd2DdbeJfjWhZeaQ2KZaw%2BxD00Frg4eooa27j%2FaCQTwPfB1YEg8yM52z6vHckRkmF2dcx7mXcbcyc5FbrKwWnAGM%2FGMJp7VjQTvrk2PDMb%2BBJ6ZaZSuMwq0bUVdklkAmoA5A12BmBR7rxNIRFYmuiIF8l%2B83%2Ba6uhaHSVQrP8W0dm3Ju%2Bp7vyonrSQcNqfGBTxlUZJdfMjH5bgMNVi%2FctUhTo7tvk8hT1Vm1Req8J%2BoglBzMmbbmSFJy%2Fs7j4Opt2%2BqfibP8h%2BrtvhQmUEnJ4CETVkk38gun1stXfvqlkQ9XLWrbGHDJRuEW%2Br%2BeoFmU1f6EoqwPudoa1jy6q4KhJnUPPYK8OSiP2QFJQ6nflR%2FJPFKJ5Jq%2Brji%2Bcgbu5x6LC1Krj0f1%2FNkpQ6WWfCM5NrYvDLkelG9gUqm2yb7SvsWnlbJHPTDLYBRDM%2BRaO4r8bmgw57%2BbvwY6pgEFTKaUVyrIw9CyI9X6Bs1jNrAbpvJqZZgwrknzFfRfDKcQ9n5CYpL7bHqcpReNb9hihz35GKRsR9XOBSk5kpHTPRuaWSLdtwI8%2F1RBc7nOsj%2BJjiJty5zjnumYIGr7ik6GpKs4BeedoP5iiz0px82ORiQVzbwRantchzyNNHKCvKuVzD6RJ2hJ47mMKsf61PGpT73f2dqZnlYrq0rqMEne8u2EaffY&X-Amz-Signature=4b951e19b00c05e5498aa798aa30bd5ec300e196e41c844ab8eaafdd684bd5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
