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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VTTH5H%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B6eGEktxCMY03RtyP4hQU9A55eW2hkzQvQ0VnH1XeYQIgOcDGAtITly85cog8QmmJ0hxGDVvAgExd%2FE3t2lesih0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqkJvIMcMtZXT3SwyrcA56kP444iSZT5hiB01iHO68b%2BfW6eMvLODw%2Bmu28m%2BXvniaSImNx%2BwOs63U6YRV2NWjA4IlkEaT0d4Wc8hr%2BEJSBmVf3zsfOVscu0oyKjyZ3sH2odFzkaXXSJuXemdzZz3hOZI5KYtY%2Ffcn31SSW6J2jyQ%2BSskLwg9pDktjfe8pd34BKNvOwX%2FOrMF8JjheglxVu2J68%2Fg57jH%2B%2Fv46AeFJUH%2FGT0B6vUeKvsnut8puxV1B0B7CgfLbozJom6Fo34hUKV0j1JtC9oeRxClpzaTEJj%2Fx0bcY5I%2BO2OR6DYdzZV5D%2BnA7FWhxc%2FIEaz2WGuYSzdY938d3kTOYYDSSETB08yTG%2FmwNd8rqhHjlO%2BgHOk9FfkL1SDCo13o8lSEBsitRQbN1pEirHgxsOTKz9hHNOZE5dli1uQJ%2FcsJfTmi8LHV6cyiBa3czDLIlMakf7e8nwgbCTnPhWMOMq6kctV15AGa4hyYpD5tM1eYCC24l%2FplLEeLIEvpGN%2Buh0TphqzdMjOgUCRrofKuUQzgiuxcFHnt%2Bd7gRh4xC5TMNY6ZwQM2rv82TVXGe9LlGGWnINSQO%2Fy3IBS0sVa8g%2FKiZ4Z56FjVFdqb4NknzgzZfxXxzV%2B5RpYmOibf0fK%2BwFMJXPur8GOqUBI9sUNLT4XYKsEPU85%2BLU577Jxw0K7qiEWSdH6tQoB%2BmccI5biN36vaJds%2F4RQs5mvtKje2W754QrJxsQn8t2OeXQb2n8XcBAJJ8nUvQTYgN4H29ptFckm6N3yO%2FTdUjwcnnkT4LDokuQwvD93Zt4TDV5WonDhZ4Q6YqK%2BVyyX3l19K1Pu68M2UERUwvmjU%2Fvd%2BYSpBzlGDOiWPKkpZ1ADgxTgAs%2B&X-Amz-Signature=003a5c82c7ffe8cd4312fef6431aa175064e7f30052570fbe0906218f2962988&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
