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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK54AVAA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIH0kxFr43HPVoT3aE0eeYyDBobWD1OpBLkpXdchIJAC0AiAy59L%2BhvjL8cQwkJF5ORO99MSv4bAnrPDcbC8H3bMnACqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfVD36meVt5qhoCt9KtwDd8IazXqddOoR0urOh2bmoiHy%2FbxQtVrDv%2BE3wJ7k%2Fs%2F9xAp60MyQisq5Jvdjt6hnJ40Iloz7fQprzofwE5nc7%2BgDPzzgXHoNVLHkVu8pLie9iUy54s5sPmkhLjHMCi8sUsoUbPclCXu8l8g2OSqlgm4KrBYmukYNYfE2PVcrbKTQ571%2BpUj8%2FZqA0wFnYlb%2FuQKP%2BvibSs%2FiH6EDc1dwwtFRo8lXS8WIMURA1nkIeGMxzobscwR%2BqKql%2BLGYY5NA5%2FlCgTuscnTDEWNZdzF4djDIJzluQAruJEkMHszvUSr0TsMoCzm3PWGXB%2Bz5%2FHM%2FquPZmD5NxYv%2BC2wUqHqI14tnjNWpY3dRnvYYsm8TqEPtXjph1uq8Q3Glx1HtZzF76JxELTz1SaLDhCEe1um7Dn0H9xxikgGtdNeKW69o6IBkYc2LsIb0jZE51p0SkMvP7axX5t3NimMMl2psY%2BDsFEUKZfwRzWU1Ey%2BkxPCoXA0pdtI8a5S%2BSYx0LxzkzqLw0uBJo6gALVWl0svCNGDgSFqACTWT3dHuz0ycE%2BggT7Y00vPKebbTogYO8HXB6WI5OnQOjflsHX0uaD%2FG3o7zaqAOqyM97cDis5m54geRAKeTQdVfYA1Xy3SdcdswzYqfxAY6pgEmDoJ5bLpvj%2FdmdMFU9dr1Z%2BPvTjbLY25r0YuaZsDhiFeUW5jGqRgNUTw%2BaE8xp7E1%2FX%2B5vu67qLvhnTktfiPFUMJTmdfklps0eQ%2Bunb2Z6pG7YIcqeWCVgmRUiJxlKw1shlT8QgoCnPJ93eCFmOey8HnTtbjDUyKCn9aG3dksnqxW%2B2gGbT9BcLOMTO20uYiYEYl2tkgMD44xQeSHT%2BCuCkodc58l&X-Amz-Signature=2ac8f66c272789dfd897e78337640a30fc43a6d49653d840555f43a75d648ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
