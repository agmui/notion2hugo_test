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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGDEWCN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN9GqRMwviZamOO%2FFHoLoOm9oQIQVgia29uGVvB61F3AiAad8dC9qxen8p69oVnZz%2BDs%2BDBt8ABrAG8CANc8EwW4yr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMuy2A%2FN1NN2z1RwgLKtwD%2Bq3omxfiCVmrH3hN5hl7dwyKE8k1yD5X6Ke7XB4lWGy07mwxBLFD47v7RGaTZosuxWh9HXFjSllhR8AD7bLwPBv68Q0TqNIbiF1NxlaH2Uk0p7czdR74RsdT0GpzejQfQXc%2F19fXadw2qN4fXQAxHTTZZjt%2FDSQqpvLSfoC9cjz7imLHNxjUd2pJs2FBZBNhDoBT%2F9SKkqZ1TAlcSrU26QAwzF0MmOol1ZlmtzyGfVudNoRWb0fZ4R68lR9J1SxS3yKz29BwyJemeaBL35Xw4LbKEX69Zu1g%2BYkgRQv3SUqRuQlPUENGahNEUU1KkWQlQRbLa5kXrhgeMxPpWQ%2BpultgtBLNVZe3vN609I%2Fp6d5zBZ5CrdYBBjf7KMQ9P4nmcPAXMQAewXEB3no%2FI6uAcTjJi5Mj%2FBq6LqucV0WOwOGwzopjhcPX5tyVTSgv38u8s3oaB%2FEQVPt%2FX4Nhm2%2Bp24oYUeXce1XWEKpLorOBNFXYmt64CekE5iVHUcr1cxZyBTfispnnXkt8ukDv0tKI5%2B4Egn8RehRMMn8SjqPs9BrcB8UW%2Frxl2I9uForn6xo8NOOfAbLh5TTVoDvF6AOYAoWchx3%2BMDE8IBHjkykNtktYNYBwmCRG1rOoqJ0wgbj3vwY6pgFStQTrXAY7cBd%2BRpz8ToWsnbN2sbVJK4dSOh83B3pkdL2Hxtx%2FK1oPwsZmNQ%2BCY9NcE9Lhh5Nm0y4xZejxCNldbDAyRMdhZOHcp0gWGBV6DZWbMUhTHTzQcHc%2F3hP7X2V1gzj02TwnlYdOLVKFjrzjWeBx96nNCOAQu%2FuzIkRLXeBYjU98bEfkRnHJK2DGr1MkWret%2BAwtZdHbwsAHmvu8Wgm7CBxj&X-Amz-Signature=80e9ac9db5b5db901e267a753f36b033f807068f01ecc964e650f589f40bc3d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
