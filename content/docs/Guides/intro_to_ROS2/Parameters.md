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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHD5LLFA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXEEAqaHZWVZQmBTADiV7GJJ6vqtXigdQTbEAbaL7LFAiBp1XVu45U9J1IAQOv99sJRVaKQqXcmsT3ij7iKgUtU6CqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuerjdfwlttZOTqKRKtwDhGkeSz48E13Qk7Htyu7JsVbf176%2BWlmyw6AKlv%2BkyNyGxNz6e9jo%2FJbJmNhRGcBXzkKAtEjVxq8XcnYHRz6jcHq8wKJNvoHoHnjXg4fgYbuJwvakbbsutPi5AyOD2x9P95p%2B%2BcrydyOIsA0YUubk12TtZQsideD3a1tmqGYD1ipOzNo2CrZ210IH1VQe53EoSmvYeQBIQYDW4k3C%2BgvwDzQktF18VSFY5fvrT5EkePnqvRLKkLv31R2jhtU1Nwq%2B7pfU9xN4oRLrgVVtCAefqI9KrJImZf3k2Xwg6d4JaerTc8BAthciZWNqFQOksY6z7U62rgqkYAqepLlEchI2NavE5M3jwDIWj7AGqobi2lWDZv9nmwHAZDTnIRFC6AOFARsfBBURo6hy%2FktY8qyWXHZikco0vwqDbDBv7oSCeL5kyC0NKudYrnL5%2FUQShl%2BvCRb4HyeDSWfs7TQQXLpmIjrd0gEO%2FPG2sGWWXNWmev9nVFbC6%2BtxM1li2CmkXVFwbSte0N1WFAgJ7i6Ve9kRM7mJGzg%2FV7H5hFJrbKYTdSca4XZNGLJTvSoWF17ODAi3P3fPgo0cdP9UQ80RBNLJEYG0R5zi7pEw7Ea%2F3Ev%2BkHEYvlKB2sOMZFb2tHowjunTvgY6pgGdJJ9LlUFe1iXAaAhRwdle5gdhYhXaROheHOn09%2FITcmn%2BjHmapUUEKA6O5ElPQeQXkhXnr%2BqMz1a8OAGnXzA%2F6K5QC3TT07%2FTaTy9YS0DoeYQIAw7nbe6XlwDRmqcd4gCsxRzZL61Sn%2BvmIYpyzUopDAYNUuY5SZ0Vn7yUOr9TV9zKh%2Bpux%2FEapabHQTJ7sN98qnzzDQvLOcLOEjel6%2FnEGy00E%2BE&X-Amz-Signature=0735d072ae1ff9dfa97067d62640c63f4319418c614072d10b845de6a40f1803&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
