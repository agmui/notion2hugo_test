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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIE7USB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCPVgxRNmsL625JfL0o9Zn4mbRreXdV0tHhE2VyxNy4OwIhAIkP0IzFJQxQoHv3TPG4lqY9306YBy66kjd312nXtCo9Kv8DCC0QABoMNjM3NDIzMTgzODA1Igzs%2F%2FAw87RZfYgZ2scq3APt67XbtVVQsRjPl1%2F3PyO%2BDItgUY643yqtRyBqYovLwcLa8waBFCQ9aiuss5CFfZcQro76G6hquukvjv7BDoXoWWNHgGReFquwrofaZ1ainq%2BYz3vRs7%2BEY%2BLfk1dumTDKXqMJYn%2FVtiYiPTKerHIUJJvWVRM%2BrDStCDSwqFhWTpD8%2FYOjNPYWNC%2F13KK%2Bq596PpIfPgNSJ8xUG2XKOHQwvy%2BKujmwAaf6GX%2FGuypV6M0qwORVR%2FFlrBJnU2Sac%2FUMp7U144EIAwYOlKIzHofhI2hYDnfFMfMTX8xn%2BdA8R3t9EZDghKsOZdwlEdeIidM2UiClOch4hpoIQ%2BWKr6GoFsBOLSfSq4fr4B7VcVIfkL5bYcR5vysqiDKyWJGKgHPLMKsVvnfuOBiA3aZ7NX%2Fn%2F6FA%2B2mzmLi3rPSSS5auEzKBm7JxfCnFPxDquz2HxmvgP2vDr0ME%2FHpFCuOW2XwciBhbypCyT%2BGyP0T%2FB8FVTdgYm7gRQ6fALFqjysVRqU2XH4TGxIaHCPNA9f27d0y0JpLh3So38RUv95CTBTVnYtyZd1Nv5zUU1PAgb8bd%2FNwhybaJutK%2F0q0bAGYKHSmIkEGt2Imm%2FcthAfaybCDQAwAjQs8QP53%2BvdWbbjD%2B6ry9BjqkAfDMZfnyALc%2FzNw3dO8TSsoJi5TnIFJa64klFXAozdaJjKHmXIYetp4WytvND50PJsM0yn2sSOrLycrC7zaJqQgPNrUvMsgk8G8bkGpM07QjatQGHZX%2BFwMTq1NNKepCV0E4HtqAgqxSupEnPuNnK8MOhO5uW3VBK9Wnu1Wz7%2FOpMgXS5Wgt5riTvpH4gu7jpoL3MLA%2F37Us4NJzBoukjRNxyZVg&X-Amz-Signature=92ab0f4bd6e3c81f7ccc4acf01a401317cf9b4f5aae0270df875210d4d8e7906&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
