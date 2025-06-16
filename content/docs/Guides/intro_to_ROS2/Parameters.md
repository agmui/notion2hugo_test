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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXF6CLTV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIH7z3xYXRGBP2CC4zFPaHM0jUs3udE1AoIapr3z70kSIAiEA3tuibLKEWSYsTF2Y9dpjBH9LiMh3e0csH1w2n1Pko14q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDUpmuescw%2BvExHP0CrcA3Fcij2sxYjBwbhfUM76XBQPejw0EzjRUd729mqi6Zki1tE2R0%2BUscFT3xCwWqp0Ufv7%2B1WQjyAXWVHy%2FG5WANV3ZiD2phOO76BuFn%2Bo4RDpgF95uSqIusKRSezhPgqy3gFGY%2B53w04lpYmD7%2B%2BqdA04MTuLpdzxhTK8Z241CMdUjd%2FU6Igdv%2B95mmF%2BEFhkUGNqQekpEWMSSrrAsxdKTg%2FNIjXd7SlzvxZIyFVd345Ibkv2PrX%2BJTGRW1U0ah4MytddwqYKbtB2hi64apnkobhtiCb%2F9bTuUuCq1A%2Fa5mrfAV1ugy%2FQ1B%2Fbd10RT3l9pPq8C%2BEmYPI6bNJVof9YO8pAj6dAF3FBOvjuzBSWGtdZ8LfOqmutLloD1fSIyE0IOFDsUFyySI2jSBlnD5J%2BiEwT6QecYp8Lwp%2FmQFIK44wBauQ2KW%2FagKGs%2BvO5sNLu16RnpL2QZiTCShOiaN3VdRPD1N3GSE9hza34NGg7pG6seUDChvVJXC7Pq8W6Eh3PwBXIxdWbf9wcE5tJ1q%2Fo0m5QtoJuXO5hwZro5cAQ816DzUWqCwDLQByk0gn8%2Flf6IbvK3zLnaWVqcUl4Tvm9qK6BkEDZb7X8LiAMgt9zj1l3%2BzdzXrWEDBOVyg0zMLfIwMIGOqUBdxQUG7vGg2RkUQhvovxyu9m%2BAku4q4qI2McDmCMj4fKUAoj1g9To3kD%2B8mkK0xz8EvkzT09%2FTh%2F%2B9ZHrDoGd0r%2F9HXGd5IvvFDFCan4ctJ7crAQJtX4bkgMuUW5tDmGKEI8UtD%2FdVRtbeQWt98v%2BjrP2kOuSkcT8k2o8nv%2BcDseLksSfRzjqcC5sp66u3jYIZDJJ0lkBw03uqLLybXxLkLzt%2BJM4&X-Amz-Signature=dc5c594ce079425bc5093157d4b65ab550192c4c6726f4bc5edd02bd1a9a6999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
