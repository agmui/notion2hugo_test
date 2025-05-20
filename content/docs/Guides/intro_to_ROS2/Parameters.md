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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXHS3JMA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMKBuRwtw%2FHKLB7lb10UNtOm5Ink4fdObMdSU3wQCknAiEAuupzYo8FPBaDaO2O9Ai6QQBlIWeCMSUJSUNlRHsol1QqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsrx2r8iMgVgkl4fCrcA9H%2FyEJ6vxi25jZqcoP%2BfbPav1WMD5GR7Y0M3EtCwBhGauKFXPWdunTAtVdX7aj%2BZXxDolgF0c3jZ6Wlv1XC88LlQTErZDZxZK7iipBSWkpNHuny98K8vToYzIxZL5Re%2BlzGjA9PIJ1MPdbnDCM0XdYo976YKU5bYsat%2FELmGFvi87TCnrcz2z0XEs1375VhtPH9f3QM1%2BwLNuMOHF1ZcSYTcNA3KNsef6qbp8yrLMh4LHfq5LaRZHZKKPnOmHUGz1deq7DQMY4SkZz01q5HtPkK4LtnxVnvKLGHN4JSdAeaC3GSf%2BcnY%2B1l5lVcvaE3tmnfnUNwvsOwM1uNR1AvGd31IgOrm6CJfxjqOr1beY2fy%2BaEeuZq2iGqXKrWendz2%2BgZzOsMwreeurTNzjkExacn0uFGBJdYFyao8mWkw5QZAI%2BC5hDzQhl2Qikcg15UB8J4piU5xD%2BVTQyfXU7lEQzUb266GZDHlYeQEHhth%2FufZm51lSiRTSl%2FTZIzH9T1Of4TSB69HZh5NCWci10IvJDCEvlQeV2BAFslWL6rQmCaBwjvZM9KbGoIIAfzYAaFniYu0iNW7UGl4KaPyX4woM15Mva1wlYAUhGeVS0XRa7n9jX3PDzPra5aXiFUMMfLs8EGOqUBxMXbdRvgyAy3Pp7wCfrEM7H9%2BHgy0gegJAwcJHchbBJZnIJBjO9JFhfK8%2FA4eDYCTBT%2BlcPJVXZjTn%2FHL2byTfeflb4%2BeWwEDjRj9uPPapXiR%2BOy7ElLeLlUb4w15MiwN%2BkJiln%2BrNf79j7Qb3w4dxF1pEssf6dD%2BxHenA8kAs9qL46fGEBuYHalAeozTlWjF%2Ft7k48z0QVPyiWr%2Fe7IuhdtFt2h&X-Amz-Signature=3a8db23325a786f029614a858fcf2d075d7d7ac18cdc568226ba14233de0a500&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
