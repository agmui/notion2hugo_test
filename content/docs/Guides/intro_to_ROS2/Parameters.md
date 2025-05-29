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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR3KQ5PC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWSReCtkFAlxlqjomthZPlrmfL0IkFSWxq%2BbUKz4yrOwIhAM57LN%2BryS5RUKwaWMXyQN00YHZPMmqvJlm89iLqboUBKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydld79yQiMBDlwuEwq3AM6EO%2B30qOSfFLImliKuVicLJSxs6lRQ9PMP1js%2BHncihq01YLJYGp%2F3vUJV5xgSPIkzTJ4v9Mfq3iU%2B136xuM8jrQfArQ2s855aiPE%2FqgV3Bfd4K13xuft%2Bh43ErSWhKDrcU0pBJLIK1JPte0DGiB%2BWi3qm5mdr6lLfU3tBWCdvfNvo4GWhtNiilAxq7VFFYZHDQRHIC2r1P%2Bk7yAfQxLHaPYbyUa2Zl3kBGkUe9uuHkmYayIv4nz%2F0%2B1qgLCyr1DaV3IksBon8YoF%2BinaouQ6a4foR%2BKwRfJz%2Bj1MsZC5nUzMnBtor5bGWqA3tx41bIrOqvH1xILXwmWJ%2FQtbguGNESkMmChReYVYpyzW1NkhulB5K9P9%2BUmZHt3PHNiymIGqkXAr16FuhW%2FYb7yP6%2FarFfYV0z8zR7DQo12YBpwlIIrcO461cR7kYKrAw7qe6%2B4Qx1wx9v1BAd85PrfjghO03%2BkO5BLd5qbPcyy1Oqt81UrmDbeweqjvUgqtY2EZwg14pFuMj8%2BJI8B6QAjJl3sP%2BM8ocV20jOcKwgG4N%2BmQaUafRwiDwbmQOd9Cc0k22eSvHnjIqjIgF32Fc%2BZCHVZ5Lks9%2BhVfP2qKlP322zSKy7eGf5o4heGBZB%2B9XTCLtOLBBjqkAa%2B%2FWK3zAoanw1%2FAZxGg0OuaDbR7dQiFiY3%2FGhoe4v2VdEfrqzevZLSR%2BbXT5x9S30lSUPfMsnkNMSq4TnvijEnlWzVBQNETFe%2FBf8pR59Wir9I2knD6qpQ6icSzQ5I5q2FTFkyii4ekTb5PbdYtxjIiEvxyICgUK%2F%2BGRiUYH8mjpttSbZ9gxMD4IiPp2xaPhn%2Bqy54bEy3m9niJxh9xwFr9cxWt&X-Amz-Signature=061f05b71b13eded2cf0a9a2d7ed9d42c36dfcf82c18a6a0edbaf4684dff23e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
