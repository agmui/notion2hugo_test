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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE4YMM3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDZV9Ri%2BLcl5lqqoYDF0LlLWao5rL4vgbE072XySdAahQIgWwYqVIIINboiK3aeim6ySzV3j6Lo%2BTK3nYhnRI4nGq4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMxkY7eWUDP248cu7ircAxytBFMP8aFwY%2BIk1XQH8hRzW4tLl%2BVQIg6FSgG%2F%2BlWCGBU4kK1t6glzQL%2FSZpgdqN32XzQZYh%2Bz7Xv9GI99pXKgWyPeAUkFx5BbtiLvqcuYvq%2Fo%2FYKY29iRPkG6bqqh8EuvV1YyXCH0Tu6H5788OLK3PpKN9FEGuxdvS68MT6oAB3KPaFNrsttiNMt%2BQ2xAesTvn7JmHNp5KJO7OQXycSrE1P2NvmmYjZQ3S9AWt04PktH%2Bdw9vpPgO8MJB3JyYUYaE1xoIIRmAsG9UfNVeW0F%2BkpcMZPxB6%2Ff4gQ7kRGHFjDAO22GepXydtRGB8dxUFpgVqwet263i9vTJCX8bFygTKbgr5yD%2BPE5kQ8YoLm%2FNiLYd8MY6fGY1r13G0xt1DdDhY4YWYQ9UdDD1UggC6poGRFqHV%2Bcm5NBsXF7GlXMcu2CKeWi46cZGumNQmx7drwIrulgKm5MIciREYEpyd%2FZDreiSGLBSNnvKXaNuGcUeQyy4dKSx4x8RJsVlZKFXlJNV1rFQHFcg6MQ58oIIxfDQ7zrlvMKv02mA6crXUIivW3kI2xdyflt8QlCi7vtNZHX0rjKwZ1H94ouuuyIZpajhlIwVhmePRb5dVLuH5Xfqdbwz7dt1NVgxL%2Bw4MLiW4sMGOqUBKwiqmJrlsKp8u%2BDPNfdAOlQMsqvIztiYE%2Bprhx96wRztt4%2BuTVDT2pcbUDi2%2BL0c8JpIXe098pWIwbtbCkdUw03ce0MtgSwr6Lkv%2Bz72uFqFT5dR%2BnFlRhVx1ccnExqQrIWy413226dAzsygR1teCrOOiI1dei4iz7TAc%2FNePnb2gDpZFQ4tCGcCHMOS%2FcioFPv8SBCRLcApH45uPybNOJiHMRQ8&X-Amz-Signature=4ab44357082eaf13aaf80ca3a512d190259bc3c86ae71b22775f7db52cd54d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
