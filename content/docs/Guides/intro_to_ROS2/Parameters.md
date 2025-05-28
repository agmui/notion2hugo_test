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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN72TMCJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhWB959hqKsc90B781noMrDEcpVjcJp8XFTSZZ3TdEZAIgAj1cJS7N0UDnqYhintiqq7eSUn%2FMkjHuR%2F3NC6timXkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKytn7sp6OFpykRfhyrcA%2BflnR1Sg0KRxZNyr15bH7oYsFMERpotcpksB2W1XOukHx0y%2FyQpr97syNh8fO6or1A0fzdyTHYApaXT1GE%2Bbk00n5bF%2BtOaafN8qI7CMJOaj7wIeSZhULJLc%2FgQSFL7pVLsxilIU3Lwat9%2BYsj9zeGoBPqVR09RGFpJtzI3hdbfp1F0nS04QzENJZLX99WVeZMj26KkbQnU54bTBO%2Fr0%2BtQcpR3EDfXHbJHLjVW%2Fz%2Bop5qRr%2BGpjKuqjYzjQ4WYfgYzc%2F5mbZCeAnef7th7Dy1ZM7Zw07r1k4H8zafdcseon1nJMhothi6BgeZYjtHt%2BXMsCcvNfZM3PKgZUDvXnl2k4oKxn0kKKwyvgKWcooaq6pS1eI41gVszV%2F281Gas8rwPsyOz%2BDb8gyP2TjQbvVRCbcgkCyS7aK15qaDZNwnxSL54c9%2BR57vohx6drtc9YPNqsu3qHIXNtsjDU6EgNfxuhM%2BeM9Vm%2BIYR5mOpR8%2BmiTiQ2zxRQgVqrOdlaOq%2FPvNDMsl%2FDv5%2FixpbtbkihFcDDIsdi9NfpAiqa0BkYaR9WFwJy3TSghz6rI3vVRCrgEzf2n9oBrdZCeBnCgffC02xGZyxAUGbUghhAYZwhoY88khJ8UAkF2K9orE0MMPk28EGOqUBL28flWVJbZKu5UhEoKuSMJiCEks%2FI11V3TPxWHUcKSPfA1tW4YMDUi02mFEp74xqY7LvdbfhY1v%2BN5W2ocCvO72%2Fc%2FRhxr8JlANtwwwT7VGn9j1dv%2Fd5XEq3EOR%2Fj02k2w%2BSuoybIl2V0llSZxUMVx%2BnF9Kwc5EhKyFAqHrDoXmNHKCvClNiYvLWlz8oL1OQqj7BGTEH55yl2TmPiuHktyY%2FlMoJ&X-Amz-Signature=42cec81846a6ef280e47ee998674419562599478fb45c74b07d4d0afb5f41b8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
