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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZLRGQJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvXq50IbjHTu9tbGjZ8gqddt11vORdrfXeU2BUzXWHcAIgUFbP8iPAXoTubHLabNzkaF8r9ddfcrFuGreUB1QLim0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPj0%2FtfRFZHqr7X8SrcAzlALQDoALetdHMCZCVthFY%2Ff%2F6aknCypT%2F9BsMdoUGjiHN6%2BU8gRXvJ8nOww%2Bq3V1lr%2Bb5pN76gdaUW1tc56QB35elBbfD5cvTalyPPt974QVOps%2Fji3NOEMxXQf5G0yf8qd2%2B86RMVVxF7DYxUCVbU86DOdWXRq6MQgbO7PdSRW06p1aLJOCeGnpnrsyOMFjAvyJ9QUFx1oSYE2afdqwWdM9jY%2BzbxgG%2FTeX0nC7y5FAsOgF%2FoEPpjeh1AG5NX6bd%2BEaC9XCq%2FHgFWXEzZTa%2F4eyXtaarUFb63TI87rQc3d4CEf%2B11K8qRKr6mhb8cuNQI4xxJqxv%2FTi6cSHWQ2MTALQx4gudBshUSBZZ70%2B5Oys%2BD0dW3gz%2FTMnpHzFfj9ibAE1kzAgxec34%2BSLUqu%2Be96W9JYDZMXhIiLDnJCfQhKh2D9egLTtsBJgUhb8%2Fikq71hfVDcTfK6wmgYm15aUPtqseifjc8QaUOIPEL8hP8d4gOXbdWMJID31QMuEgJNNm1uYK9TIdprF0RELoHBkghKORkQ94cngkvNN6AS%2BLlu5AAZXiT7kImca9bEaJBSy54mSGLniwIfaTGI%2BF%2FUJq8bexwnjotysaMJnwX4AfJNS6TdxhtSrGV5BikMML0gMMGOqUB02TITxxqjeMc7fZbb%2Fgs05JVHzusdtrGlqa9b7qLsnNG%2F%2BxfVfw6xyU7uQqbtyiAlc3dFMdZQwGZcubPkMUgFhrLlgEMl%2FpLA73HY1qGdUBU33yMc%2Fr7QSQWG5W3%2Ff3zKXdidKv%2FtH5%2F35Pg6%2FVH1MeFblErlM7lTafQMpXtIThh403In6Vallm2avuLJeKV6eUiXUc%2FTQ7W4h69Gj3f4xv1i6GE&X-Amz-Signature=6c48e2f28f12c0dbfe0b643aaf22a6d82eab59e422ed50116a9ed92063ac3198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
