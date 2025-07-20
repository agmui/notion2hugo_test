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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W265TMXX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOYkL3fX2fsBPAkXshN5Z%2FK0zHB68A%2B30UQTZTLh2ECAIhANifhaDDj%2FAQ7gx9fgF0XzOgxQwheuWimbsC1facbtN2KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4uF15NQNEtnlh%2FrMq3APVNyhE%2FPn2auP6NwoOb%2BCo2BQqwMXDUY5QXeC%2BwRtiGHwDaLmRskUyryfrGZO5XDhRJTXy9TmezS2kISQMv%2B8R%2FNmkGGeuZCopOOt3Z5LODgvaX9LVG0EaK8CVjcTRPNSzIAC89Nf2Fq8E%2Fb2zNDSSt3M9nRynB4FbdBf5yB5q4RUsTubdZZhzi9TFjOXuAneppmcHIQLqHweRmY7XRAyr7qaPEDkucscgKqFzJu1mo%2BlnpHAOMfJWn0R5he4zMrw1CITEt2tdT8IuNV0TAAYDklUD2rRTARM1ew%2F2L589sGBdsN8IW7y0AzZKi34mCWuDQd%2B12uvnJjLnaWt4rUKT9lftAGLKPy2MsIMJWRjf7I9hFKP%2FesBrg%2Bgd8Z6mJKxUL8mPXglDE7WdIG%2F4j8mQ8%2BPNpZVDpTfMijvD6SrM%2FmhGr8FMWBdQWI5oh1hCIwX1dJa7b%2FgzQ%2FMVu%2BKtI5rewK8hD7jtJ%2Fi7d37s0pyQe6OB5mkVZMVv1Ss7YO7mDTq%2Br29BBo%2Bzl0D9YojNVD2%2FYS9hMHoF%2B7E%2FTJsUvfyBX%2Fcxp%2FmFxBzqCtw7sHPjvusI5i2kCrYbqt2VMSrUKZxJEKTbSHauBx9c9m4tsNHT50c6sfFwzo0xQ3rA0zC8k%2FHDBjqkAcIfYICx5tOmG9ce0gY%2Bt6yL2l6sJ69yJvSWx0N6%2B5achqJXjWMK2lOjwf6jq9mr5nJsagegs1DtPpGsACCOWSWp8Dlyjgc5pOtXQXQ9BQJ7jsDCZg%2FPKJol2rkpa0V9%2Fwli1WjI3Tq9X1SU0CYubJ%2FWTz1d7SjUtJyi%2BUOe71jhG8CNetKtLvEpC%2BkLfPW0MC%2F30%2FGCWhM1tYUb4x71NwyVb2nB&X-Amz-Signature=6efd240be1fbadba06505aee40f893193f8e6ccd89e758172c368da8b4b948dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
