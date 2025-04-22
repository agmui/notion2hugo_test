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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZXH3HFL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD8cYlhhXzsdSWsR1HfvxbeEU0Ah%2B9SqExxlmIOeZfobAIgZ7iFn81o1cdh76cMnZUalonfrsUmC35wvY2UeG7pTkQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6Yz5Pp9fRPCBdQFCrcA9kzbRoFBjRiRwnsP4H8Ugiw4CvbWwpcJEa7dCSLdbb7ehNrg%2BK9r5EMIk3DS94NyvpNmjV%2FJzQ4CeXuuoMlYL3jZ86V2VciaMWN0NIFyHPA44OrGafKVx%2FURYDvgdpkdM%2FAhK3hjdeCRuoHZZNulxm%2FkVyIcKooOu9Avdke5Z%2FrkELyfquIBxSl8o4iXUjOh8bXiznJ5hgKmBgR0xbWr8AQt3Y8ZaqUmndYu092DuQP4z8jWPrs%2BXr9Wr9BnvcB%2Fy7n4xT4wVk3yP7iYaYSnxjKXId8issifwiPVkSg%2Fxax5skoV8FtqgyWaBWgHPD7ArcLfo2WqmIrToxWn7fUpGXl3fJ%2F8BXLUuebOOgAzFz%2FQkMn0r4a1iSB8kvLltBiSstisCOuKKw8wnGvytwqlZHBjC8eof7Mjhkgem7Fb%2F0j4lV1oYwBIuEQWxzePifkZy%2BdNtCE%2BI5RON3xNNuTcYklsM8PrmJqdwnjwMFxVBygDoehoiN3ZgOrTxMGlITwyiErQPZjW0suV%2BQ2U6Wu9voMxg9gLXgiYT%2B1b0gchBuun4RUkLtafbz4E59QwrwIjyqUwDy0Z9GDDGEcMoR9OciVom8ACkMnrXiqTMDE7vkzAiN83EUpA3RMDrZTMNvVnMAGOqUBTXLiNOTqo4mmj7Mx%2FB1nY2iYtvqWjRv1Afo%2FLs0C8VmKTKCt5KefighEx2jqHh6%2Fyz%2B1cgkIilC%2FGCV7WXocMQQUh%2Fg1zMMqUvKHkkPacfd3P2gSrkPfnU8B7wMZ6GQDIEFzHIJfsGKbdL8TL8z145zX2axEI68Cth9SZGFfanj6CByfAWNdIEO6KNcbwVSz1gOjUb%2FWskWzb1GX0oZRvlfvP5Xk&X-Amz-Signature=a8bd1b05830751f5bccab3a32294350a0e61c27c1157047ea869bafa2e600522&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
