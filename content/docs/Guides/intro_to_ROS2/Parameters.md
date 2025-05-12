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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X5HNH2Q%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDM7cUvwZlH50V%2BLE6SqEBMlEfQv0x2kAriC0FoPVkjpgIgfO94N6pB0f%2Fv%2Fx840wUA9coHlKj0eCY1jxEs%2FC5d0OAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BCIC2aRs3Py%2FQklyrcAw%2FHY4fXEpJR9y0uKXjfznl5kfI0C4o25FBgRM%2FYnwOGpDcrcWEVh3s0IQAt2Qr7EXL61JurJZQkIJ92T4ziNBOrpfULqwU2t1k2rhdE%2B7Y7vr7sVro%2FUkT7YBAub2BH97nMsGmXqQ%2B25T5WRly0y%2FSQEdjZ5Qmi87XW2yVBZvffn1OKpDTxWBl69WY3mEWkcqYgB%2FX1P8ZaHSfva2D42gN%2BPdfl2uNa%2F9j4DHeKpmQ7BmKps2RtTASTw2CdYulX9wY5DLRfOxwEYQ8q65PPN%2FpUClvhK42OJFSlF5MI3d4BfFFo%2F9c8GTeRumSW0nnms2TBt74gcavHEtmjMDjkgKyvEWczC%2F%2FJOpjINlOxxMTJ2AKl6lpIh3Q7PfAgVPUCR3EWpV1Qvi%2BVrEVdEBBkM5D9M%2B0ztkeXZVyIS2ZKkGb3mEZMc7t%2B7treHmQuQ4FcRd8ovxpF16jhE5666tlx%2FvfnM%2BI1E4eeDEDRS5cKikn%2Btuhx7RsbWAe0uYVqWIX1hmihfd3WnJhCmlfe15xgXym5JRE7USNxTSMIZucE8xmXdPPp6pfliVf6FfNb62de4SerMYLPnKuTrnJIwVNL3YnpdorsRBAKa7mVluTrY8rcPOjWnuh8%2BveK4dJNMOXrh8EGOqUBHuc4tyA%2Fbb6mbHK5kgjwOGoxP3dSW9bi%2Bn2Q3dTYpIwJGdp5uHObSEeeuKRNh%2BJW4x5cRaMBeX6ae%2FVYKA2vnDx%2BtCqs90DnJfVSvA5oa7nU852TgPzAjNK43be77NMSIXYAERb9DYVcHDTzMBCIkeaOBIntc7cmcVeg0aisJuljfmQZ%2FNHy2RCAoWXCNircVox7vBViZvQV2J9WVshlc%2FsFIorS&X-Amz-Signature=a9cd896c98f1d770f30feac1c6bb5dfdee8def20fb57279938c4087c52fb32cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
