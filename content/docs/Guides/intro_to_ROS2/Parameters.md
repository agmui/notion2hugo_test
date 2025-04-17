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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WF5MRTZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2BXeiHVZ0puT23C7ygsMqem0LcNFXjIYPjq5eGKCdxwIgczrYtBgZ1UEGF9JYdxV7UPb0mwYnL%2B9KSJhlu5gobhIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDH%2BLyDvqOqggQTjARircA8JatSb4grzo2QAfYUTeK5Cvk7wBq94w4ogMlNPHx%2FkwIbkyiYJJQEg%2F0%2Bcg%2F9%2FDOpc2qbqtre8Dpug8Xu6huHX%2FC%2FxzxWEpBIbNJk%2FfoDl63m0vyE%2Fj2tiv3wQoHfvLLMpvHewgeh4EKAFwEuURcPkBHEGPgJof0TmkUGX4q92IXLItPJ3RW%2BRPbUnYA2JXRyt%2FejozsCpTJ3Ll2MlL0x7OD71JR24FJr02DGR%2FqQzzVMOYHsnL5M4cZe50nTB43lptGmVV4BfccfAoRK7EhidZq3UL4YoPEqDmvdBEdvz1sUCsCOUjKilnRVwS0u%2BIX2Oa7oZv1RLuWe%2B24ZQfbPtdlvIeInSmj7ghc2mRVgx5aKYXozit4CHRKxBfHhYxpsYTQ90AHS%2Bjyh8u7kt0prcXDz7GxOHcjExh0EYUl1x2F5M5tbFZuEIbB9NMZ%2FjF7zFdKgs8hrPgk410XzqI7%2BTiT4uImZWP20BYOZBPtUmVDfo80y6b1oPmjWH5QeH65%2FsobQNFRN73DyKhW7wmA2yWl9fPN8ztLh4sSzO4Ih5Vw%2BF%2BPGTUXsfBTTSIwu2pMtqPd4mbpK3gvK%2FFe1z%2FTuiRkTDfnrxu4QAfUSNVjOYQOfEzySXMAi4XLewyMKrmhMAGOqUBd%2Bq8V5JlmoM7OnAJZB%2BRCkUYBFE%2FDVgUaDt9pEmnJZymExvKFKFyRedm0KwswZElR%2BuCgvoP82WfwA3wOJBJ5qp%2FNgNUXyVURy%2BkFk%2FNRK8HfejXlrA8P4p1gHbW01VoL5bEZZFF5sWQeCh4zdzC5KjFYUgNX6poOwD1vfw5iA5rM86t9OtFpOxBxSR3XNcJ6KiRY92dImLlsUs5Hi%2FnUTtENSzP&X-Amz-Signature=f340fb6b3dfb37c5b63acdcc4f030a0ee9c69c2e7917dbbe9c3d22a8ac102bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
