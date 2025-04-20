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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRESXQQX%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDd6nYLAIhstl3b8fB4gCHf3mUnnR2hN8mrJUvZKdfALgIhAOF2DIOB4YyRZB5ampgrVrwxHFRsgVI1h0FbYCkkWrmQKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAGazdE3Hw8IbMqlkq3AO3r%2BIsix%2FWSZ9Ahla2nYUlN6euDZOTB2vrVMWXCxZ9%2Fo9PN%2Bw%2F9VrzeFr%2FZz8wUI8uHcEeNw7%2BEmZrrDrJQOd0w2kxtz9JDaVhAJJV61RBVlyKL6slyEjd2fE18MjiGF1XeUCmssNEMx9A4xzx4B7EpG2Rie4Ez%2Fx4ovu5qF6Dw3F1jBED5MPdPMlnwgHNRQa9YgFZNhXf0yeFcJz%2BlAaOG4ZY8w0r%2Bv60sug0D%2F3P7bl4uesmy9WYKdw7VQE52RL552TeScv20Ry1Di3Ky8lcNH9zMrEbKdheOr%2F3ef1Xysl4kTWPuHeUtQUfLwErcMvwh7oAljef87pqj7O%2B08orEsdrk3bdqGmJn7A53HPCB5o7Wpck%2FGjNQiDA%2BsY1vnRoTLr%2B29sWy3voLTyBq5soYhqnizJ4MR2qNnba7hB1E7Vr3tvSdXwCwlOqnzX8Er5Y0bITQbicT2cXSV2XDyiRR1CCrRjMay8UNzVMyWyFeCompOKJjWwVW4Du%2Bl3SKVTErRA3xlUcrmMRVUc1wy73Ax2mZbbau9PksB5mgamHax2QNYZ039LWiFjtZZbv%2Bmn9osM575u%2BwEe8BKVzn09j%2BWXffVUj1LZ8uU6zIZp2YkPJvPETbxyepiQI9DDYxJPABjqkARRFnGBMH4l947gKcDC4gDhHn6JcIrNcljduAEbgXGK5yHgUVXPVH1QDBLrbPu9jIqOfcj3V4zfpqqc95aP0MOBgkgbRXCB7StF9qu0dHwTBYZ2uReqLB1QIPn%2BnziXf%2BAbXqiWlah0kfLk%2FhliPSsL%2ByuPmvsXI%2B4h6BKvBXLX2fEsABEoJhp8YuUSLsLP9TcCCtICwNAXIhjGvBEqKWRrnMEdb&X-Amz-Signature=8baea9f5750a5aad998743e16c0c61c7912c3a46dd0cb941e56ba192ee25dfc9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
