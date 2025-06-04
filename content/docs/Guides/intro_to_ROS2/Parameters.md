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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DMOGB2H%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIGfxNBOa1IqGisYr3pf56pbLKsJLuwBDuYRvHPhMyswDAiAd3tz0darhBbQj5HRZA9E3tO%2BXoTbxy7MFj7CDw2oFNyr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM8ruJ%2BYBgyJlkowc1KtwDBe9oGI0eaBC8XeNFiFBkyfKHwtlyqqFfWSqx5FE5X9LkM3Lj1ozvDEM%2ByGy1pZTcU8eQoSouz%2FtqnH5vL%2FzAfjspzEk2uhPdEbuRWQne7gdiRN3%2BCXBB2l%2F3g3g0rvYrJfS3er77hXYn1msSzTAL39zZP8z%2FafnwocnYhBSuEFKIYHDL%2FOHMhMppkIWPP6TfQxqlroKZD%2BpbY9YtWR9QuCmm8cayh3dbg95hk5g4g4XLOusDOhLGCQmhYZkSxbZpHqkS8VgdaVnSI4dz55qC3AtCSpySee4%2B3MiAcDNqM8lUEjhJrbXVpflj4kK4a4iwZ8Q5tHFjveyoaJElZUA6YoQkEzvasD3OOT2JTgoXdvKHPtvGNbK%2Bd4ViuhmPLOj5tcEGXwo9l4jmfPq%2BmWkPzkfvOUj9%2FbPH%2BSd7Kn4tt39iqPhXyAw7ReS5F6Xfdv9tZOK5j0k3utuSIUJ5qFqhiOsaTuC862%2FsfQ4c7jRWIJqTrHMlObc6uZ8gbrBdfGc%2FZQCpS4wdHrTWOV9ZfwP41GE7MoUOvN8%2FIpW2B7uwlPfTz9XdcFqjKaZkq7K1IHcYoIasuigF05wxYvd8H1aVxI540T0znI5UvVJuL1MbInyU7LLWw8P1MhUXdikwzYj%2FwQY6pgHndvcDGhNkVSzy2Y7bJtHuAa1uCidX2MaRireX9SCu7A5EnXEAHG05vFgYHAlL5TUngSlTozivWLyLckSKzxjxrxIm8f2YVHlndnZB5InvKzwsPpQPRC4qVqxq654k95WTbUiCB9Wv%2BR8ECfMjo0tDaEbAsbfsn07dkgCfrkFEsITSVkZlVXmmT9%2BobS3XY4ER0L7pdnjb7suTLuRbETBxsIlQ4x7L&X-Amz-Signature=9b12da693cbf38d7b325562768a89fed821834c2d5eb34176b329d7d482e0081&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
