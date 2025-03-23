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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTOI3ALC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCjeEcD0H2meV4B9x%2FfQ2GtyHtkJZ5T5GuuDWyouvmdNwIgNcIGGmLBDq4KbbWPSbdaMRQgw9cud3YWx6BeGrty7F4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZlTrJiOaEPfAuhlCrcAwrJU6hP5aWtBnla4T%2FKz9thCckCkFwA1uYZI582s%2Fu46vHGOwKAcWxqQV9GFb9DDz076sfc2gBYWq7YgLhuwPxNvfAzu64%2BiaFQJ6qVso7UGOI5wh%2BcNi%2FjI54hmiBTW7idskKm%2BEqR%2FQQbX%2BiteTZtc6IbcjrtcA%2FuUuDZJ1NmjyPeArewTnnLj90Ka%2F59ERigusL7Jb2CwHUoDneyaU8IIoiOkZfEsHOYmvihfGDBC00nwt%2B2ibQqNeF0XYU%2FPijVoKJS7%2F197FfjT9GqgfPefVQgsc29SKGnB64aC53KGbFEfsHT3kGXCCSWFPRnn4Yu76C%2BNH1yQTwmRil7cYpC%2FlRNW0Yq2XCOaCE%2BBhXK5QL5cK4yql8oK%2BY7bJupkn%2FtYZWRlP7RoQr6diSXuXofj03G6UI08BQ2MUV8o9d5YRM7hag%2Fwe0z%2BxblSZrG%2FI2TNtABDjWQqHD2%2B7IZn5jP7SSv8prbilrcbjTFX8aeYZqEdDVih0oN%2BHsmCAwvGM3jCSYqMFUgUsOyIB4R4xh59hpQrkJ3BF8Do3m%2BjWg6C1AdU1jth08P95UagSa5WNISTrGeVLdbXsYQmRqsDJiwstmwqdNoDzUv2y3K9SwikC5XRSsDlY2ZZ7hNMPbM%2F74GOqUBpuYKKmzcvZUZ2cip0rKy6VKJ0CCzochLquYGhFQZRalp3ndz%2F5wAFyoJjik0vvh3DJd06sJk8fyysrT9%2Fx%2F8ehYQn5LHkGgZ2%2FoSW4WgewmPUEt3K8huFklbc%2FCXnPZZbGmTRRO1EwURFcWtWwQR6ugFsOcWaJyGrwGEaJabDwSI66ajttB6m%2FGPDbcqA3M5U%2BFoU%2BD2ZdHkYEuyxT1NHi8bCQJt&X-Amz-Signature=fa757387f8d537d1e73fa4d5dd31eb40848761924039d56cdc54c6293d687da7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
