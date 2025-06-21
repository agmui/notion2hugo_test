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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RK2SEMG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCsoqyxT2Wp8YE%2BKFQe21Nep8HfVgCOrYD2sfWLulUKAiEAu3cXmwHvhOInjK6uqu%2BnyWus%2B403A1aMKHwVY9tZBRkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUtOhesKLwxK4M7SCrcA7gKQq%2BgDe3uaKs7hBZFsGQ%2B3mSgo8mFiF274wRIyLO0DVid5vFYsmYA8DBI4vyopOHKC5fLGQ%2FA3bJ2ibUCutvyPgrCUDUfLYhKq552%2BF3Rzww2bfSfg7msNjTWiMPn5sTrqmeyequT9jAB0xyk%2FY5x%2FOVoOdE7l6F7Plkdv1Ui62AazRqpWZRb5919w30P5ay6E9gkiFE%2FmwgoovVjp8N%2BO9tImpJySDpSPYhcbdGLvyLl4dlF7wNvlcxmZrxoO9sV8XT4%2BfnzsU4YLObteoyqRdJnTK2JvF6u5zApzbRRCpWm3MVUSjcWNtC8DpNIQEFRhejbVE%2BmA8k30rlHKeGS3RxhlBBWQuLkkXXJ7drBYVUZbheAo60NjtWa4C5EgKXzKcQHL9iCYk024rxtyief%2F%2FhmRnkccuI3VwTq6XQ8TVEeE%2BKFz4AZPeYTskUa0sJAbLVM4eQnLzwHdB3s2AMr20UVUDGcuKOQ21YEVTwd%2BGGmtSvyLTaD9Vw6DOExMNfjPUyztZnzBZNl6EWi4hFL%2BHRUvTwvT68Qw2r6%2BdVHSIPkVppP7AwTWPxyAz%2FbcfyXh%2B10ot5X4gqnNumVIZ910TTSktGviFDwY01K%2FzIaz2fkap%2FMdF%2FRhn5mMLfK2cIGOqUB2xCHBBz%2FcrzXZxp%2F%2BoKSqJj63nA15OMT5ZAf0eN9ZQunrFywd1TbmR%2FIT658ZseUlMhi1SBUjcfyekKKvbypbbcN%2FD%2B8AnF5z1SM9vfwMTfEdHbbf%2F5TpCwu3WWynBRy9zYdeEI2RhdGO5ekoP0FDqpTl%2FA2NGjHq8XZ6I2cFglj%2F2qMPOXQu%2Bn0nUp%2BVD79OWTgqrZ2TFoEUlG8o6v1A1knFKEF&X-Amz-Signature=63bddcf1085aa3e4e553808f12976c700a1ad00e54ccd95f0407409e86a9af0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
