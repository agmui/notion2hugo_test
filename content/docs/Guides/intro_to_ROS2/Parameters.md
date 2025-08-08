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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD7B5FKL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDod%2F8kBL3ygj8ZSGIT5fJ6gAuHoeI%2BCex79ZOBfTVm%2FAIgDWWI4sBG3uzytY5J1ZWvqLgOedgTsraZoZOuP9BmBWoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu2GMhG%2BsWvc2H3IyrcA35LDE%2Biib5QYvokmyXffzMzvW59pFlOW9UpvI2gjdky36FxEY7MhhztHHAy92iDSoHTuLZkfXt3NHuPKmIQvqbY38JgygO1E0raVRCCBKkBW9jxRQtybzxJedEOPSv83kBQEnK%2FLjQbZAYrO0zqLdMv0ZaBbf9vX9IJt7fj15rBYLcOIt6%2B1jCcWFEgRMJRroVJTuvG9GJvMgaWuhAtjYw1tgTudYFp48WaSvSoP4XTUYKfG94Ye%2Fss%2BelRsnaANX2%2BsDzuznoKcJ4eTBJRkfIsgo8sGSjNirjxvRycivlIvMEbhcnPOPax6cUWGcsU%2FwJIeCw4aDczjGFswPxrsKsA6xsTX9FW48HoEMPqZw0woi3hsHYtYdMNJb6UTEzX0r63JH66w0p5AqUjp%2FWUexwjZ6XAyA%2BJOn72GRrpQCbSz8rp2U2vEsBQhvI8WDayN6qq72W117aYG2vA0h1%2BQIQAMaBJJm4WkWDx6nCzekVJJX3Lo4wxG5ojhlv4IQqbBXI4zPwu7cf%2F2w81BsKukTpU03cdqSzkMefB4qF63I8R8MnEW91hrjcSBHU%2B0bo%2Bz3Ul32tJLCEHGG67%2F77GoGF8qPAODiGsQK2o386%2BRhjVOQqPCh6xWwFMU2a6MOGC2MQGOqUBEPvTtLUbFWDXoo5%2B5oHtjJRIqHe5Kn1XALGq4NcyjwKH7kdpqgv%2BC4naXoT%2BCYcWGtsdMp%2FAre8HX10kY9pTe6uhWuqtHVzvEFQrD7iyJnyj%2FL%2F7WTTs2WGMpPfDmfsiNFXtH%2FTcDfJ5i0iangMxwCqNYCH%2Fmkpi0Fc6%2F%2F8a74hMrptUAGVTvZGQmVBrhdUPGoKh2GEIOZvdfN9AdEWAp7xepB%2B2&X-Amz-Signature=a851880743ed4187a20eb325c7bc0da67c3e50ee895a5eb0943e0f46c49aa7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
