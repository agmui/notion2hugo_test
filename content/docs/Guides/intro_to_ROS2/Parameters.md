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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HVTCCZU%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0E2aXVWIqnsOQz0JIuCw28%2BADcpb17P7%2B58BN7cea4AiEAvMeW6uD0j5Q8Nr7BKOtpdjh6WhRtX11vte3StX91eTgq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDBtp2dCXxomaXNUGxircAzNhv8cs3rFpu4tXr%2F%2FY5DVw1H%2F%2F3%2Fw9KIoSdkecRvw1WDKBI4RQuq1qMJ86nNKTvh0H713UrtMoqGNB7JVkA7%2BidzftAOh1D3CwNKkYHFiPhQ2T%2BKUjRorqrOdbSkgKvFesFQFKaKEWKAGepuXifnhm2PuWPEHWXXb%2BTYvyQRckaDgl1Z10M%2BDIMMbf88zCx21FrCIC1lOCKih2FuXj7QhYYYO64ZX%2B4g4p1ofKBnbIUxmsRTQuJC%2BghjuYh05%2FZ9A1f%2F5r3gK7s9Iq3TORwbe3nRZItA6gUB%2Bry%2BwUEbskpiCSy1XMNuld9wqtvh%2FT2zQdEMVOG8bN59Uuec9X7s7UUQhbJtBkXnWYWgSLg02IPQXP1pEXNygPqRWXslb0LSLgQxgzwKzH9z6rebslf%2Be7f1uEHeItdrW6Ri0puNLH9JCqabCNxqVvB9GiM6hURlxUokBOhYhSC3ZgFxX5qdGGJSUdrbhfFo%2FYtDYNYjiJz6J8LGWMvuf1wFxl6kDtGQi32mYvwrxHGy0vfoIh%2Bp6kAVPrzl6MVoOGyTwYr9lq%2Fip3UePNM8JlnHbtUtL8T1cELdHjD%2BpgX7v3bEuJFjXyWGM4jAHkQfx5TTdsxnubpcrwFkntDmxvqcDzMJ%2BWz8MGOqUBx7pUHoA6j1Aquhw5EAbNyTlHoFvfdt3LwuuJI%2Fa9frqkIYbBmVKY%2Frd%2B94vXo1388xJi8vUiSe9TxK8XbBqFzIBg6HirpsOhLf%2B6qrEUhKEWFYcEuDcnpn%2Bmmz4yBb8n%2FY%2BGx%2BOLhKhjE0Tv84sLIP6BCjA1IzF%2FRBEnUls3%2F1J4vFzS2sa0d5BQuC7NGHmUBlWNZZNI%2FtbxaDHEHlMB3cfwMYdd&X-Amz-Signature=91684af7f8987f6c0fe778a4a68977c8844b46f4bbe6877ba2e74df6718f967a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
