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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPC3TVU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEqmD4XloRXE1GjHG392DVQeDRXJ5j4pWiAJfo5t9PU5AiEAq4btgxmlWt6idx6tw2anerX73hpFknQ0jLTCu0A%2BRlIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJ4C8Dm9PmB5kiaivSrcA%2BqGoX77Gcf6z0yxh6iHk526H9AtiZ%2Fi6kKzdV9%2B1S9ZpW89CQ1IV7E4cXhyCWdQS29EDIgK9JGmBL7N1guLGrRi6srgo2DUgYQw8qSe%2BETADEVQC3zSy1q975nr%2F1rWtxJwyapicckJjYv6K6%2B4LZT7LcVlzjXO0REKlNJpvvmFVikRnBSw9909YIaW14jyTZqGGVOukrbaenk6W09UwTNrj4B2NoQQNMgsw4cNmgNrz6lOYQkxX782%2FbYOWzk8JXS4gJY6nk0qkyCjCGgmKZUokAXV5%2BO1U90zMgSTpep%2Bm4r%2F8Pj%2B7%2Fyom1B4knnMnR9XwORpriVzy27kuXSgxwplKT%2BiOVsnAuxKXqyVKMjA%2BnxjPtIF24t7wRCZz4ptk0Sl7DTtsYi%2FCM2PW0JK5RsndULX6S6KBsPQBKzLPRtDifBzisFU0B9TQr7lfl%2B%2B%2FGJ%2FHiEwrRlBjNIiJ84s4lRBexqEFy9VJhvIGjDEpg3rDUidY41l%2FiW49Q2hA1MM48zvQDH9Nf2ANrgNcUzilKes9pwK%2FhnDKopnsfBT01QHWnojdCXGOUMSc3JdbLhuqjCq%2FB%2B6XY0sGyCRy9DY2UNlF2Bhoklb2wHdBlcQ84HzE7LadlSOc1wx5hwbMNqM3cAGOqUBXIszINx28eDyMkMB4gu5OwGGdYBo4CWme9MIeiQ%2BMJiwy2oXj9Hw6dyPVaBmf8aBg2j2o3zZgQIYG3yn69pzas%2Bp%2B4FFCZlLhqoR8B0K9qr6XhreE0HyVKYIQm8Fz3TivpvIyAd9qmwIp%2Bd%2Bpg9ltLfpYKmEo%2FbKdJJISODoc4tkI1gTTztPJvPAemvaWp3hzVkr76NfvnddPSG8Qbn%2F5DUn77pv&X-Amz-Signature=84004503dd32d0fd61eaea734764202ace27fd4e7de53a1e4b08df17102cebee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
