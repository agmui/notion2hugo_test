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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUBJ5L3%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEDLeyaFyM09fXxoz%2FsFIqblWsR0BTuFPQRIRuB6jyKuAiBaGVU8hD89c8Z1SX3tLlVXitL0Sow%2FytmOtPq01AP0jyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM2rrMsVbvvPmZTsEKtwD9yLjrNbCi4eNXsHezNLUbJlKkRIJbfMYARpteyDjTDcNsUjXWrHVgqM55nAmLx33C9ZwIoUxOH%2B9yhrNj0Ks3snaMXT20nfCIrUPsquRKBepVxnPtqQ%2B3Sqr6YMFww5OUz9ZyqS35tluPhnWl3dC8%2Fx%2BC1VB8Daq0ZbD9Frc7aoNQY8dGZLeieeQ2TnK0pkDzSJ%2FGryFbKMFcP%2B0bbhjaK3e%2BulGtOpoC1aqpc%2Bl%2BMS%2FfzuNLo2REeIGPxyPxukoDn1ptDLaMBWBfB3xilTUStom8MWvHYF%2F6ZEKXirRywf%2BOeAADDApyFWQBaS1VskAFLGPmtZYbUtz8Vu0S32l%2FkOti5%2FGzIxeuTGtc1%2F1W70c3HZb%2BOikm2E7tdYsQU6zhz7fQn88IPNxXeHn7O0JWRi2uUBfKSmi8KD5svk7nwWdpWkFVZAITR3%2FTACCFZXI7v0QK2GJ2Ly4pvORAuajt29IyNhsY%2FopR9XB5Q58zCVcYoTWbWKixC4WMHoFoRzg%2FQTzY%2FEUOR90Iiin8BYLnu9jnRt4%2BjmH7Q3uZpp9nqaWYGVbqw5YGrFH%2BodJKiy6mGg%2F4FKROHwOoMbuBGn2ni22TYFdoqkJ3PPEyt%2BB13diX7dWsUK3Z7G9fEEw%2FbHlvAY6pgEv70XRW0QMQoCMdgeAYgzREOAKp9yziSc726iKlFfTMsorJWIQWKES%2FOKxTlqqiwVFsKlb5QwT5izwPf9b6%2B6tVWBtq5nY%2BPTqwDlbgSmJPA3bLEEebSkisnwDN5NfPAHvaescuaflrsQvUg%2B4rsUnZ%2FSJy50OrbRCIJf2jWNedE0nZTjemFFXM4BfHFLcvCupmOTdXsSWWHbXwLp%2BvK1HRpV6m4gv&X-Amz-Signature=93b37101c60b9be5896d78e1e18cff27386965d36cdab6078765fba577684f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
