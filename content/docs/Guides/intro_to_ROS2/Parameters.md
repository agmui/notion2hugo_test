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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3FWOEG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQlErQvbEaAMXslbW9i%2BtuuLOIyg%2B4xs6y8rRMc8GPiQIgJ%2BepMbXNJ0O8cM4BKRLp%2FYuninZ9bBlgKSJCsZc41KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKsMhVqsnx9dveSqcSrcA7JZsyOmp2ICBUa3BOUydULyl7p80zeO9XYFz1XkgcMSsRKKisMwvFXnZXRFUI0zpKDKBfxAhpTaSkmyHDsPmoKGuxz8WGYWoqTPwqQn%2FgNYP5Qhmpx5DilLFGOPl8CHvquhzKqPJ8ZHPCejqtkHzbIx%2BYMzCqFM5hGhzEzguCvuH0oG9xU5twUbrPopBmgYOhRgic8%2FIdTgtRN6z2UIOApFWqtKb4daPaQoH9HzNkqa01U2TBKuMeZJHW2lApsT%2F8OYisfW08xn1uEIj8BrTqZs5sEpMi4pBX6%2BFhn0ogF1kfdlHnSlR%2FspiRuZdYzdiZefWfHT1m8zG1dz8qOpavax6FZgNZ1er23J5hsDRdao9Fuq03MkhW2ExZN6%2BAOBc5Rb6c0eHqFWN2%2B0%2FpCV0nrGcdEbPWvgHPb%2BSQSlDHcxBeDxGZKN%2FX7yAMo0jSiPJrdvet548jyRQxZLqkT1IeqnCzMd8viToXVaKdd0szGKWIJTFsx%2B8xKL7yTZu0B0Y7%2FZwV2vTTSWl3kNqZLjfeBxwvcG3xx7Ogt0XraHFXkUHtx0UYh6kzujz3w0j0CsuArre4Yck7fuKek%2FjvWvkFQFKHxRmnMd82mjfR5k0l6nNvezlwHdcqm7fSRoMMHp4L4GOqUBjBd1pkvDwwNx0xAdXjbja1hCa6clBNszcsoo%2F3M3QS093bCHhgMj4gTtfHzkkSh9ICYFzaY%2FbOba%2Fq8ABKnfu%2Byjn1lA%2FI7K%2FgEMeYleC9jILAbHg2zb1Zr%2BsdbkAsPFImgsmvBbXQNdfR4ktSLk%2BoUoRvCAVT226QmMUws4wwHZXSl%2FFKM0XmSfV78UyYPnhx%2FMIa25xoy9WwVQ6HE98JoIbBKo&X-Amz-Signature=4c358b60c31d4d0a34147765f68a64135bff5c8dae65acb4b637f858455f141d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
