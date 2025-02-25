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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WX5CG4%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCID28WapyW1b%2FXRJegwjZ9ahyzx9LDBkkCzV5bYb6KpYuAiEAk05Iv9JnGg%2B%2FSLd37QdnOLYXyP%2BS0OXaMzH6SlM9TIMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCkuDoMW9FVLLe%2F8yircA5txxDlYSzyFmLvG3Ma36vJyrBlcfsqwPtTU6BSnPLwLzIMIXu8fYlvqeLrIy865r6Jqncmx08KoEb1jHud7Ocyh%2Bbixkv3DKgBgkZgXPW7AH2UQe4XOcdF86msCWfviJ3eun44gwW1uqiIhsptPzT%2Bcbaab%2F5i9HZubDOwEbxWdYyfsEvS2EKqMEIsA0uhBtq35XLgs4fUx0ubvOpDqP836mUv6JQC%2BUgLIS4J1YQmWN35vJ8XNQncXVh9LRNYP4m%2BMK03d3k3v1%2Bz3sZpyxWlBLnIC2nYpnAvD%2B4%2FO0AeZrpUXmhBnzEr2w%2FwRU3tByqVcDEWXLIxitezCHZ%2FoekNncl6MK5OQtc16igYFwXIN7KwalLeZDDlAyTWi1TaEgxDDG6IIljaghLGS6Bn5g7mZMfxUpNMMA%2B1RGputZ0LfDy9M3vs0I28URXpm2DXEF0S9yYOxiGltQL4RoGk1Ch0pTFyrblwp5mRkf%2FD%2B5jEwljpcp9NJIGUQ6AtZ8j2vp0lamu5aDQoxcNgpDYIkEHiY5moZ736pYaCdU79QR%2FKvzJT2fZtxWsqxltoX69z48FPjqKX1DOe3wsSHeb8nhXpIxJTpGQ8mGGTQygUXn4n3AYrDJNPyatbVxcweMOqM%2BL0GOqUBkeTW5lhycc5GPxOS47X3BBP1doTjBG%2Be%2FviMAJSYYdEfAfzsdbOxCzOeXVCPZiDSmE%2BcB9I3m9V%2BPfLP0abCpUpfgiEwkeefTjHB84IyXW4O6EQYrNgA%2F%2BPaniSab6tSYDi8MqDmKKgvHKJ7R6NRTlh3oJHhaVq9XPhIBLFOrd7z%2Fs%2Fh7JFWpE7X34cBanSUxtfm%2BFxl5rHFTlvdcngobQ28jKJP&X-Amz-Signature=e46b98244197f47facfaaabfc36f35372059420640f1db8a04451bb54cc0bb2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
