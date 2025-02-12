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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMFVNUUM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FYohDobLtIEy%2BUYUqqDw262HcHCLZAlxcAuQAc%2BUBnAiEA0MEheNuXs7iuq86rGdSE%2F913MRx%2B53EMrZzVIAsclgwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh%2FkmdBuZvWf2WSqyrcA19QZbcSWzSSK8bRUXKskCgglQMqKmZwB0Plmp3cwHENfAchrX2Mwj6L3%2BAu52bTUIrFahpgkIcxc8XMu2k%2BBuhs3laGEgGK8lmYdPCO2XuZetlMvfSeOsTRVwKMTqdVaxVWyPT0RzNAmhXjoAeAH0CGCyGdfb4ACXGfloMVNHbaM8CZJQfDOgDb%2BVSv3pZt%2FvsaZVOQ7EBu3Ki1CWJjh9ATmtJwPYISOfC3dSqPpJQkR8fv6GgY3mtYd59V0U808STk1bgz7HmdvXtcngwo6LYvBVGJQu6BHsECe9li5YjuWCyGRLky4Km2mVk8uexO2y%2FdipA3sVrwNJ6OLLjnhWtEHYYpD2gcNlYK9w%2Bw%2BSJh0r0p47i%2BX25EY2BGU7SwAM5KSDEcHG%2B5KQ1XpNa1IQzSHBFgJRsOAz7Mp%2FuHhHikEbngFdBu0FhVJCKFfXfYJ0nkxx%2FQey4lXj5pxqUl1yWUd5%2FPhGV8QIYL9iPudOTFodS6rkpYJm4zXAdXvienqQpy%2FZs6OleqE0Ed3tPFubl%2FcU%2Fb0RHVGo6pYhu8ZbIdwGKvHOFUJImzw27Es6QAdhWkmGI6v5qISgo%2B3YKDpenS%2Fx2busVj5V3ybh9aSKslArcmQVZie1FkQYWkMMCusr0GOqUBgWp6sxacwtzPdOARE%2FXPJZmmKczPR7rzwSjJvdVK5PUZh7HrWcoB%2BYOKD3RzU6N%2BNnAHROsPrSHHfTBBzvV3LCaF5d%2F7WbqLS1KY5W%2BhSMex8JHVaf8sqHvl1KsQ5czKTsC2vQiAAwreAHErVGL8C2gTzZCZhAgJgDk09cTcqi096hsKbLamGrCt2OoL5BCGFXat2SarirbDY5%2FNFa5w%2Fz%2B4pPDy&X-Amz-Signature=09f6e9e057877655d6f79aa606b894dc551f7543cef2e65417bf741106c317a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
