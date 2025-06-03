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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UULSE67F%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIEHu8NohixRVXxNFvNqQ7CsDICVGsOWIlzn6cKZ2bv2vAiBEldkgLDwmLl4JOzQU0yaLPFggq%2BnlyYroBqeThwm7QCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhp2zmSxFw5qo%2FM3cKtwD9HmYATNBdQgzoVacGfaPYQ8phisaigIBjZRFVTmDlH%2B%2BGsbt6FoUsr%2FfEHO41WlLvD%2F9yrPRXw2rLSe0nndtypndUZHew4ynHs%2Fo5Cxq8Jo8AibZRnqwZeYTpPHDc8BYBlj9Ys77667EbVs9GuJ5yCWiVSYAx6N5%2BW4K%2BROv1XEH10MlQpmJYAV4K3wiXrdevnfgRwZRz7DwyaLrAGADo1Q%2BqvUCeUvRwik10zyicZxnWFyvb8RZhgsHHsMa8PeHt%2BHTMOOHuRdl5AgQVvtjA2HEay0mMTd4vomkrRxCRLzSqYJ5D%2BfkRChgLC272IIA%2FQsgW8Jru5Lok1mn%2FdVIf78V5hJtYlgiGkR%2BBUOGYyXo2ozQNhqfRlxU8mpDgIwIOpaknxvT8sJC7tSY25x1m6uWSzmJ64WRM5tJst6o4A0R0tNSGMAmiMMWzTIzFGS%2FXztkw2xaGEs7aYT8BuuA6IZdM3vPvMeG2nJbAWcXEk9piCKMuy%2BtccANl9l1fRIIk3uPugKThw%2FupAghm4ps1acyZR%2FLceZPdi0JMler%2Bjv3FGNYL3VhxhU5yv1DLyQhaSfMJ9SL5GgZ7LNKwlxXalMjPDEJMaVFMaRZcKXG9iX6OBfjXWi94vjv%2Bngw3Iz5wQY6pgGVmI2SpJCvGMC9lxGIlykNOrYar7nOmPqlCk4caaPrk6S4X5%2Bg0CcAlhefxxUOh4fAalP451Qc035cjKVJUXCZLHlHduT6rE2fiE439qDrh1DMGUSbb7u3GQHz1BrACIuz9TWlwJIqzthl65Zg43Vcq8CM1VUZyZSocEq140FfEVLkGRp5a3vglqeHSBZjI%2BQDA%2BtYPsxSIWTIqF0K1p9%2FF9y1RqRB&X-Amz-Signature=bc22000aaa01ca06d6782e57dba1800c6a91e6228cefaa48586892ecf351ca64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
