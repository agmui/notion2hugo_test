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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ37PBBD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFw8IGZoM%2Ff7YtbEkzszpmnt3didSfessRcWYTYFJexhAiEA9XREM8gIyNTlgFvCueAILGNmXPdublOCM1MuiPiLFp0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLlq7MTNNHMgS22bzyrcA9EmPMn%2FTxSdv%2FA1hZzkqtPWc82u%2FS%2BTuGOGI6393dQXk%2FfvwTJrgVpgnKpBU%2Fas06915h8rs63uE5L6p7zk2FBxWUcztXvmoYIsB4i%2FCpuhwh5FAjkIAVjTyj%2F1XpS%2BKL5Z%2F%2BLGuMzt81fs%2BoIsz%2F%2FnBoGAAfN4u%2BDG7eiYhJNNJAEPjfzviC1S1oEflvjkaPrh7l8A5vYvbLNzZ7v7SMXyH%2F%2B7jrsxF5jIoJhTu0nXjrp5QD67a2IVCzM4QaCANch%2FN8m2Wn044qkejbfpVNBv4uKom9xOPumNwQlRVkWS7IDTYT9%2B4fGGkZ24jznv2LOCORScYgGTxp%2FF9CscLDu0lrFL3zMQ716dX7DYJ2ELlFQSbLgKujKkxbS16AKBWJGiIcHDSciJGztfxkR0Z7F%2FmRUE16KBVe%2F33%2BXGD%2BRlspQRPKEulL1ilciqJQB66c4bU8ek4esIlLpjWjligz%2BTF5XUSbNY8fTybXDbPiQEjwbWfLtSvuQjWcUZRhPz54KeZca7AwiWdIeK%2BJHjL30yzVb6rxVheEVPx%2B%2BMNnq7tLXM3Y%2F4v4y%2F038mgxU8duyOBj13JZ8mh8xSTVu7mUzmVILrgFnMH0dzzwP%2B4nZsgpvcDQ5gXdWPxHjHMI2goL8GOqUBppNsS2EkimB%2BndW%2Bue5v0nhaAii4Dswu2pW7XkVXAteulFz2ndkTV7XJ%2BA5H6ZjZK19HwujZuPBxqzGQN2oPSEiLmpA1EQCdJ26UvYuRRbY7f%2BSjvDxHo2UXdYXzFh3aIFUanB2CPdqQJui84tK4isBZgQTF%2B%2B1EmeRHgIvk6Zi3RKgCQd%2B3LRi4xv0VBQWn0bp4jcWeUcoWAt%2FHOwdNOib%2FA1xp&X-Amz-Signature=0976f9eb551d6df78e40cc0a3f0fe48cd305eaa618df8df7f6f3a205192af192&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
