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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5GXVCL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBfYTmCQH7tIuXMG62X9Z28mJdjs3ihXHbxd03GMH1B0AiAhmAeN1Ewqow5G2QvR%2Bghf7LPwHDv2v3Q1%2B44JTIP9Wyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMVn5D5WBCFaH7z7qLKtwDehzSsHV%2BtrG3uN8EE1Aq7GgpgBxwqatze08SxcZLYIqrizt98GAv33f58ZjNBvTxW8nkbVaaK8fwa1rD1i3v%2FsvgXF1J1tdMH34Bzv4BYo2ZXFLL9ZVA7khbzVgr4petab91B5vyDbN4zXJtVQLgFBT0QVOdo9gfykkhPrKMyp%2BdtK8AaybCcHV2yArcLsM4phG%2BxjgTzJ8q78JJFUYvyqZaZHaiMSanJAiI6zm9GTINxM2naPVevj1yCFHqrhzwN0M2vqlfgrlsiERHGH9fzEKzdnGb60pNcDH8zk1Cyw1AEhCXkUxUwuzmMF8yPb63yj9G3HS7DzjhM3C25mbEukBNPdMeKmkqQng7iyd2hqqzFipzpJYMjRwX9m265GlWsJXGy0kkOOBgSpGRTiDZXzFFb19XLJEBqcJltZc2TiIJyoRz8958uBbxGk3BcgSyYSw%2FM85aV1eZ4oEwidgqt8CS3IawXSD9ByyLiYsAmqQWsDo%2BFN%2F%2B1SFU1p5L9WQdbSjeolqXeApfhtdc7G193eHjwZTUqN%2FIYPbAofUpFZgXotI40kzuUIOO2O9%2Bz68ZQC%2FrcGDlhkc6PyCTxZIBRxElkdbgAVSa3tHnjRFd5Z1cYOv5gNsQy3NJR7cwkIuAxQY6pgF%2F0p0QQWHiyHP%2BOoESgtBZMcnJXy8c7hgVBfZ07kkB062%2BfdEeJOaYcohpXywcORf%2B3q39VHnXJ2KIA6URTwn6o7JaDGmRN6pdzac9%2FQ2YgxU%2F3%2B4WY8V1Op9nOKcONT2ZkqReJf%2FmD8pqZJOROG2g7lQJ%2F3OQKADFrRppONEUf1e%2FIf93LovEJH%2BxaROx6moqfks3YUB5Dh0rK90Y0TaM4%2BabFEkr&X-Amz-Signature=82143f62e8758e65257d7d4d59a9c125b17be8f0a90837929b46d7417256932d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
