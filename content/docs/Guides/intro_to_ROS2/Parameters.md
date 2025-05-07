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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFDVUXJ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuT3aV7c4OYHSiMP%2FOBJIHcOBsSx98usflSbxM78ybCAiEAlY4dL5rCgt0Ow9lPLlbPwINgs90wwYZrvSWy1ThU1coq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMk9ix4LpyP8xd5E3SrcA6KUv%2FfAZCdoNpyBn44ggV13xVSEh3AUXZrpNEseVumZQghkOZtRghqtC%2FNCgBM012lHVZ6aG62Ah9eq56InuteEgflLKmPSU7Z%2FrcZMYkQUI%2BqQVZ%2BmaOM6lrZc5VK6a%2Bvqu7WmUagEA8wACYSbN7ZVQy4Ymr3JFKNPiat%2Fy4KNgTkxMFRXBD5K3n3LAzH83ocYEbaVHM0QINwgXINQDcqre01EGOV34lMbFkiJPP8MvQPaHg7RZNc8yv7Fm6IEui4nbwgczuAb4QRuNLFoPcX4ZmVExxf%2Ft8C3wARgm3dCiVbWcsYnzhPogSu47Qr8hhbF%2FWRlUxLp7GY89O2V%2BY7Yn9ySPyJVYGOfrOdcFVESkKEyzBTL3q9op7PpfMFC0D7zImp3IdWLpy0VzzmUX9Y7ZhjYIARXllUQfC8y7yqYwOttzcCFgNlVFngt1Xiq6KnMQhZM8QFV6HMAh%2BTvoUHHHnD2mFRCjrA8ENcNbtyduo%2BZWZhFeGDhdK5SDRGBH7C4jxW2BcEijIU5fexnuNcrns17%2FBj88i18WAmDsVbLyqhngDHte7hF31yFLSpKQBZwyV3YfSti%2BSEJ8cxMT5P7ditFgqnVVSQJ3AJ9BfUUPfHTv6ZoIhdjWab6MPrv68AGOqUB8ji3dfqjMgFWMZanwMOMGS%2F70hzcE03PCFGgt%2F4ybegrWLZhLNPM17HjKXucMChURedhbXWh4gUCOEbz2RlclktzHHMAprpu3iS4kGe1Rh%2B4TRviO8Yr8i5kUYUZpox0D9ERqwtj%2B0bu9hD73hDroicHmR%2B9oBB3gMxU4ir8nrp34S%2Feu%2BqXh6BGtGe4Q9b6uEdxi1x2WhipPpFCK8t03neeLdi7&X-Amz-Signature=cb4dc061ce3f389b87af8cff9965295d58be1e48e8439eaf9183a91e7a401ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
