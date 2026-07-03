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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SQMV6V%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQD5iH71xaEsc0kPDdOwnPwxj4CYgvMjcgLBuV6G%2FkOsjgIgLmdwj43ZXOiIQ%2BkEm2Idy70WQSQ2%2BJ6RfPesx%2FfimPEq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDHgPAMQuc0sxQy9wkCrcA84luiog8aa2HKuTyON6m8iAWtbTpFx41WbqJPWAGSt4SADpt%2FxsIUbjOV7XuiZW%2F18QAXM5koV8NHEuXat4yhdBdgty0gGX70ERNMIR6mmmOqdT4Qh%2FIOC0pEFGgasIlv%2BH9uiEGAW7Sde8zHkhjqi%2F9xoXg0EzGSb0H%2FZs8DRj8O1Hb%2BfaNH9JfKaBWSPW4Em%2BNfDoBoUyEoHRwa2Ec%2FHnKpbQf4hHHHtcEXrigyZ9jIHoz8tFpbB2qp05%2FYnt4wF%2FhJSPdAp0%2FMhZb4aEcUCERdApuF8sw9W8E6ot3cgO%2FiOg1n0y%2Bcg0cw%2Bg7ZHpaRvl%2BfjdHS%2BABE9amxkRxEHI3gf17BJsyv7BOTy%2FrDer%2FH0y6eIV6gAVlVqpo6zNfi3%2F4bU9ysa5wnb0z4RKvUuAoOiuMuWCGyTbujmhajQngaQJvnV47mz5rhn5FMynmZzlwmqbl2qWY2ZN6tVvRotE7IlZw3ci%2FVljqZJ0nzsQOCLycsfgYMTlE8OH6Q6XBxcCJd%2FXHJQSGrYqsdvXixFGFagXylK9me%2BpAHXLAGlhKqDVTGoMTUqh3T3VkBoAcJ52XyjcHqbbLv2rZFxwk%2FQrjbByd%2FWT3jNrzK1JNp3VFtQRhnMG9ay1U8%2BUMMK6nNIGOqUB3Qk%2BL%2Bep7DyCoBDCnAmqJauVFGdcN7E7nq8zDbTp3uFULLMkFYdCnm3KNawPJjhKLtanz36W9YsSA1%2FVfc2xg%2FnzD4wztwtIte9S2iFiZqUQndgqI5txILKpsiBzofdJxTgkwX4kXo4up9Uk4AYvosjKjG3j2yVs6ag3BSTgjD3GuP5DTYhrqDjjSwWqhXXVgNOqbOyY%2BfCKRO9OAhuXBrfvsf8w&X-Amz-Signature=5a5e95ba5a1f5f6a754791d5cbcdac7bfc468327ab4764c884f8736c99177130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
