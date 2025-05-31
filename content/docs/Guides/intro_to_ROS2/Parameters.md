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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFFOU4U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHC8XJCeECfs%2F8j6XhoyyBIzFJALspaEd0ut1k7UH3brAiA78LCvdZeRUvtInzH3LYWMZC5gUk7TUsdLy4ixe1E1SiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMitOh2ddir7lRqX4pKtwDt9FgqOq%2FlqvPlyjOmh1oF%2FrmYQA%2FgorLDNbyuZkXcNYR490VDIefOh6eYPNZOfhlHVBFFoMcWi3PFl9%2FlhWsIbYETYUhqWTkabYzbDY9W5hRN1JMsOE84tsyVJJZc9kCdP8KHcR8sSvLiQSx4c0LJQu1MG4QJ6aFrPHNQjV0IDmSQjYXmc%2BjeQWBShb580qbdOSp6SDX2G059qydj4FdZAc4KNbk8aJDD7ns0%2FjKwSBmZf48ajSsS%2BU3gxCnI1V5VJEu8KZhcLpUPAtMeo5ngrdJFy6%2BR49TMqc2yE7vJWhHOnMGeN4vQ%2BKMutF%2Fi1dduvZv4ERuIfTwcsbJEUk%2BIeqc1jnZFdd0xrMHf8WzUVkBJMyHx%2FzcUnH8UZZLpSROzKEwRuzXZifailWKN%2FW11aqp49u8zipxwZx%2BqBBcqPU1La4ENnFCuOgE%2FlN8nVPEdoafA2noS44FokW8%2FxjK8H0mCYNmpXwNio1bzONJpABDnxZYb%2FFXxJTz1RMfi6jBlFcroBTVRoyWWpRc0ZMMeXJId5V3kyAk6m0vQc95j2M03TAJ%2F8I8aH1JQ2u9dqqmeUQ7mVFnea89oFKdR43GsFBEdZNHaWbL7r6jn9sDT2QtnUVrfr22uKr2GMMw%2FrLqwQY6pgGlLqMsd0lsY6gzE8Z0U57MdR6LfwpAk41%2Bm%2Bml3285qO%2BIWD%2FhHxoJreiVV%2BYowFLiVAlGhLGUZ%2BHYzUwrjfINXo03nhn4VF8P1FDm%2FhRlRxIX6iNLTgVbadHzfNGKLmC50T6Ouwotdp%2BaB8kW%2BwtoSVHfJEpziZrT%2FqbP%2BZqZf5I1uTpljcGnIWf27I5fDwd1XCQXJV5cd6R4CuM5R3NLGVML1sjr&X-Amz-Signature=a3411ed18118d5a886fd3d4243e406496ee40b9392830280371047f7878951b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
