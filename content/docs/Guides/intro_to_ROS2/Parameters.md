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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV2BZ5PA%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDG1W0ZErM7ArRVHekEqOeaX22w42DcYh7GVst6JYQ2ggIhALkM9TFkmkznUm0xwxk3SYFjOK5Cq4TE49L6Hf3kSq4VKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjMKx14Pj4P%2F9Y6joq3AOr6LLnM1f5VlG6hyMC3PXJzjsVK%2BAJErK5YT3rt%2Bw8bU4obvc5gc8lJtfyFWFM2fYNTiXoIlUTz4rxBkoRGbfoPsn3Rub4NHPdS4TiKBCe3chql4OIYlbZqGGh9pc03f%2FQbHNIXOBoSsNXs6TfcULFC78GSxypIlyfYJX04MEaQsx%2F7WCzc7pPPYfqllD8U0J3W56aH7%2BK8bi7DsDJoIN3Ob79fmoozx5uFKbRDylYpqK5wj79CzaEAK8OAO%2BAVO%2B5JaJJh1k44wcpdaZb2%2B9DxbH6qyAtnlNyEUJPkrhSEbhXmt%2FDpG579FlSceK%2B08vU2e9LJhPvEGpbZeEUIYM2n9HUuBgh5ue0vE4Lk8cRMLKyO72loFbN5rKyKAaIOumoYNfHPVyFaQyNFek%2Fq3OLo7o9Sgpc6D6BKm4Zj8MJjxfF36BRBQwYEsvk0Vp7RdWMdNuXSsk1awM2NR%2B4htGPSc9S5TUy2dJgZmbVdMmcIGMfmBQ%2FH321la7NsTBzXY6l5B9UvOAVKdBgVuqIsoxJ%2FVQtv8fRi3dMbRXAgCG0GBABrxjuXgiSaubllKYfDSSvYCXoG0cIOO1ZPo8XtN0%2FV8udusykZvdAjRBHjaMvtotJr6SLVcy9T4x%2FVzCZjIPGBjqkAQazZiXPsk%2BQ0f1avUVjkAZ9C74gHuqYzXpd0iIRrgfs7ASHtb4llSb9ezf4fhkLwNjvxjQiTClmcYAaDPyC62n7xKRQGeBukIK4XwnoN%2B1dH0aogT1EqEfC12G2Ne4nJz48giTq32VdooeJQIMzsm3qhspv8wHPCA%2FMH%2Fa%2F4wTWpq8n%2F2j0w0QkMqa8PBAIzMp%2BbORKQLSVDHsZkvWAKSanTiEL&X-Amz-Signature=28d44692d4065d7332b91efe7ffefc0dc857c0e78d4863aa99d3cb9b2cf7d30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
