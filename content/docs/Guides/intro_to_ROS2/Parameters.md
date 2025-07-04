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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTOVQMX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAXm2flVjlvAR9P%2B%2Br3WeKO5WGZQrLFIpZYQuDiKth%2FjAiATLdB%2BXlVBYMslz9f2pm1T%2BVUNHjIMxQ9nAPi28zFxaCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMdazvUbkwZkMwypb6KtwD%2BhNhGmRXzcMjyYs4dMDa%2BhujdTj8uVm4DKvlCqYIUWQ58%2F2HKZ7E6jNPMCSbehrMfyNNJPhx8vXr3LYaPQ36MqRUuUGq7slhmINNQmCTS9iBuKfhL7GP7n6odRW5CMzzB0WKYOIvGLZWhHVyzGtYodiP8ZyZYcvC5rsC%2FJIYDEizTW6DiDn3z3HPwgDHYPHQ76aGGlYoqhDpNqf%2BYsqr3fhMS5wPx0LMnns%2FUvnWQzbGnhKxo1N7%2BoHiv5lK8nUYiBPLMZOGGZWIdvY%2B6SOc1QIcJOoY0GP2SVCNaCC8BugTcC1dq3m%2FfLmyDgbdJ2eVWj%2Bvoh4zJ3WlcecE4zhD20lcgmLZ78X%2Bl0SCXbGeLClhsoVuu8PSmdeZnhpoLC3BpkOJUPRFz70%2FLH8%2BkEuKDgT2WQ3oZb8XRkGmEd2ZIwT3AVjxkBsxG5%2BPWUYOdTUq4oYfPcddfAxTwVpglH3D1KAgIh%2BHVunHM01ppBns86JThDsJlXvwNenpLJNPs6TgotllYHiML5iEbhELn7zLNGZYj51kv%2B3FUbtuBvQf5cWbE77Yk2JK%2BKk4EGZZDkRrO6KnZy35g%2Bmi96cmNyM6ptEp05J8BWK93OEvZr%2BUuvbqVnbgsqMpGll6jnkw77WdwwY6pgHb3re%2B1Ib9LHZmJu8wp5R2LgwpcCI%2BNjiIE9tDw1Cfq5tfitJKLittn76uLeN9wPGie5ZTznYAyMJ5hPGvSVsIaW1a5sdb3OMioGlMpSY%2FV7s0x9aErou1%2Bi613e08BXeX3tynRfcmeqlS%2FxhHYYQygzVb8VOQy%2BHd81hYryMMGjys4OutBJJd%2FUT6bAT%2BUdz6X9mtALizusG%2BBSf1Yg7paHxg46u9&X-Amz-Signature=cc5e80811fee82558d24e5b4a2ce097317ceebc0aa11322a83632ca0a6d56e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
