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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEH4V2L5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIERPPA739XlD1NVD4fvE4dZ0TRBIyCVKivtFWVGI2rXaAiEAxb41CQQ7EAge6YKm97NCgCJdaBT9lhhFK60z9fsdRwwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtn1gZAgULls4%2BfWSrcA8NxGM%2FWxOg%2B2%2BYWraEJcqjEiFD0uvJDs5P4NYrDj6wVr0lCJzcr%2BfFs1K1jRq4pE1kzNPp5cm4kRoqjI%2FDafLwNXb6jb73YzHZvFUDxN380SK6GKiDd5cHYVKzuhRFfY8e1NyJesMKlfpgldqwM5%2F8VZuDPJbTLVfDu53vGNHal0qjROIp4WCNG%2FYvmA%2B5wceNX%2Bppd5xfTyDdHXOvNLu52%2BBzM%2Bwa6FUp55rLoU2rG31J0fCt9chKHXUC2NrsDKoSDPywgMKNINOCREeS8r3cGg%2FRXCTg7AQxMqDyphS%2BcwdN%2BRRacT%2B4N0opNA9bs5SMHW3FHlkPEzeXrgbsDEN16MMY7QJZ4QnTgFkwjR5EANg4vl%2F8ACslu2jv4%2BQmTC8jXqqH7Gye5a%2BM17%2BPCmih6a2hXVdvQn2douHYsTnsQr9Tlv20lBfocj%2FQfQw78BDmcjUfzAa8UCALHg%2F9FqyFPFlrkP2Jx0whiEVpPEFgK94uLOF%2F8FDIhP7sAAj6abhFaS4LFKgkBlmpEm5BHTI%2FZuPDnOvbnQg5KjKaXzSRFJYM8XwP2tBXGCs8Izp9ryKdUhdnK%2FNIDPiOUxevn0DZ%2BoqOy3CovkSKzU945ChTX3k%2FDMm34Di1u4TpeMM%2BinsQGOqUBfhZZeCF8xutp3Huirhini19gt5j%2FYDGXY%2FE0RBDVhVyo3Ww8450XfYYWwnfbhyiCUzWTNjtJXJVOWMEOdFYUUlhcXuCwaP50N9e1uk412h1wW0p7O%2FvFXbRZyfHQuahx1AZbQR%2BHxKUAzP4K76UxK39DulkpJdtreksZK8oMauaufsg9LCGBZx3TsSsPS%2BEkJK%2FyL%2BDpIH3Att%2FJlfVtJ3YlU0l%2F&X-Amz-Signature=e06f753099de4926ef0d8eb004f715ed5668bcdf02e6aeaab77d7e9849266adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
