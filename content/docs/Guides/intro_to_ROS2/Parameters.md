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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRWBVJSO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiOZ8HAPnfprSS5naolLYsyUgO%2BsGuLtuywbQdKhFdEAiA2iPWAgCyW5wICeLPO9PCq1%2Fd%2BgleGgpxPtyDNuRgqwiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdwaRNHE1Ammp7xzKtwDfLlSiK6mr0oYdVQ5%2F1IJ4WnCmwVmq0bNxQPWHbJPHvOWj0IPlxGBgmkjt8HIzNPm4wSU%2BlXWR0J7lzsJDPrF80g1bWiM%2BKlgIGscVtVtpSEVAqZZmWrQ%2B5iu%2BDgAQ1MSde1FeOx4kvxtJCziT3c4D6lHMFwJb4h4JFIC3OhHy5q9d0%2FHVz%2BT344AyuvCqt56y3LGLE8vTC2gJDi7J4OWXrLFBXpPV4AtPgo%2FU6iogQKBxxbJrKPnjXK2bpZTjsrB4t%2BY4u886OqZp42fZ5p%2B4ml0iKjM0riV6yHZlPZGOBcoVf6vQcx2d%2BvYFJW1juXjxOBHrDFBsRdN3FF4fue8EaiN1CPlAQvcLpSBHeMtCBfGTC9b%2F9GJ7tsfHsyVZfPLvATEHOKaJ9t12YTULKV2C%2BM4PdL%2FUyxI7U4KWsOlZZ1GAXSbtPsgDrFbJnpTNcmcHQl6q6WWDrCK7vBzZXgwwN7Bj2gMcFcnvkz8saw53DfQFDGoO0OlvzfpWn1Olj0m7PsJMyO98sBxrAqS6vWuNhwV9m2S5WIYecPL%2BZ5%2FkBve6hTNwV8DhjRAZlCsjWHE9ywW%2FxB2rQLfko2BUXll5VvzXFMzqdrsOKKOG8pnbjVE2YpmV%2FdrYd91GoYwjZ7JvgY6pgFuB8494sWiqmFVaMEO442tC32rgPnBh53HeVdJvbyTdXcaOf6KCj%2F12tAldEZjNxl0mWrqYsjpp7Px1JMhtmiIjUDyL6ADc276wfGH%2B4ON%2F%2BiJ912vcmuBK%2BwHobvqxsHIXJerlBjF%2FiLpfRsRM6Bn0odY9zg0zrj9Eaqk7g13m1AcOaP4iklYu3pzOU5tQJzStZOZ7N%2B20%2BPjhL7Ta4uh90hlFFrS&X-Amz-Signature=168d644de4b37918e02ad447aed0f5521d6d6f45360c2f0e81132bee8231e18b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
