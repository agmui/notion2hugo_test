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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDOEZJT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIAXdLUvM1ZgPOcNLuabDn47W9sbUiI%2B%2FViiHn%2BDn2XVCAiBKFIIaUvc2LFGTKsZh8dGSnvDWbKPQlVvhgDKqJ7A9UCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0s7i%2FxoH6Z128%2BMKtwDRj20%2B92Xb789thSC7XP1aCv%2FqWZjBNVk3QUEF%2BjpDaY0Z26hsZPVBixAVyuF7QiqrE8XibYXfdEkYwBTTAnM44EOpsIvBXSpScaUQeTugD56qwnXbR5o4JURDZNHFoKQBrKh4T15nmb%2F%2FjJZ%2Bn2E6iNJZejU8%2FRoWkFnXF3ObUqzz8e2tUzKHAJ0j0E05EOm6sHY5lvR2GxMhNny91m6BbSw5IE8UG8PW5ruG8tPY%2F%2BiznrkHE7Hyg5aLMPU%2FygBrVRXsslyxhl%2BG7RMKhFSmfK5KSYE5%2FYBd4SkITSffKuokXCRsL29EZHjDTEty%2FnrbNGofKyvlQeNs%2FbhNVo1OKqcRpRSgA6nK47q2o8xPkFbBl2GJL0%2F%2BKYNJOzMqx4aqkqirzJDNSkAOqE9m7GEGQwlHyRzEr3gEfi%2FTZPjkeEsdIaH9O%2B0cRsx1lCwBqAGJn5Ff1YJZHGdUBUDLd01JOxWMyEHElhG6Eyj%2FoQx3BK0yDoFZHiby4lhXHKu57%2Bq8vU%2B%2BnW6Ntubz9qL4vdnxhyelAua8Ln2zEJu%2FqHOkPt%2Fgv4C%2FnbWUUENrPtL4GyVKTXO%2BTzhBA%2FfkZgk2zcXahOWNXkWcu5VUxEKf3iXf6ZIxKiRsDmTwl1hPZ4w0%2B62wQY6pgEB3ZzaCFGi5komSrf7Xdq647T1dLkkrntWiZ1toLaZxEuUC9GjlTT4qTxfXF1EzDY%2B9PbFgSMmVT0T68uD2zk5BkEZYdMGCyrztJa6xb9MmT5InFgIAYsYLJx2G6IQby19VoVqaaL%2B9rLWFweWW%2FnrS2yUxH5fq69wr4pCXKBjTdxgnvzmYSUZZJWTebAGwzf1no3Cq3Efzcpo72AhPIvaDZhx8zxz&X-Amz-Signature=ca4a83c582b318e11efd85b7a99e292a8c5ec9b737232a65a78cd7e32807b942&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
