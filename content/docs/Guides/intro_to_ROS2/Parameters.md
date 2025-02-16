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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644X6LIQ3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCGf6bp%2FBhvMod9DyweDoPTNyakfcBGN9Gaia286tpOnwIhAN04GRJHYs8q4I%2FB%2FXNwO7nT%2B32AnlNVkgSpZWdFPLxbKv8DCFcQABoMNjM3NDIzMTgzODA1Igwc8bKsJIzhYyTgtnEq3APwReAkmSF1uD09FcmCN5z0XCR4G%2FHNVGIIYWh%2BZXV1fGMtHXapjWI%2Fc%2FbCblLkKYIWF9TWdPBSG3FRP7Xm6dxuo9CWZXvuMWstIYhm7sDX33UybmVN3QVUL2v4eKmt5Aw7wMep596ad3JohkNQD%2F7rFtb%2B1NDCWu8Q1BCpCtOJ10sA2lgdHcHg8TVZnMZOGKd%2Fl9zHhMxegut6IQn4DzHcau6oE5r3WGJZY%2FyM6UTkViNC%2BrjBf%2FWjt8Xkngr2HzcJFHeJTxbiEt%2B7pxVImCbvBy3Vt%2FmeKB1zMJBj4b9bL2Z3cnBWitJZ4cwBkGp6GLbwdrwi0CZ6WQkhUOQxIjabAFO0E3pPdMvFjUOG1jtjXke2%2Bt8kEYsYMG67m7vjChG29ysGxmNE%2FsHRf4T2zeMcls12SkhPwCyHeptCyYiOPqIzJ%2BBL3upxkgsvARsYg%2FYHRT13%2FgPbpOdxq%2BcHZ%2Bt8qABNCDltsa5GdqKk4%2BQ2Qoi4AZdteh3ICABvMDV5iaqXSmzvKlWOQeOe0rx7NglFVVGtttbCGOshVKjZstINp2P4sY7aqB6zCsmE4c1ZTs3UMhlK3lGMfd0hPF3lIlykFlGzI%2B81trQahi6xpT%2BPP0mr8BKwJMIigkk1HjDB%2FcW9BjqkAdNrLjC%2BiJozd5KcizdSSoZd%2BDWLj%2F2DjRtIy%2BTOMeKRh94eMQI3jyVYUGr6ZzaqY1Xw%2Fv%2FwlKN3DztYyQCYI2XXvmPnKLXwcaguarWCxknshbexYdz19WOag4zqUj1tv2Z0pfRDS%2FJt6wfC%2FxDs0m3%2B4jZC34joZh9OoNH3yClDOkWzkBYlGZLVuCMWCELCjgxsHk9YACmzkobwzEobTl9iooqV&X-Amz-Signature=e0ba5b2d28eabaf6bbc809643e0bb5ebb5bbe0bf676fb399a716d947a7f1870f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
