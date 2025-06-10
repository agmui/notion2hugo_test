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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUQTASC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByZVpjHjbvd11n52xplkHZ7egLGsu2qgUv0%2Fw9npKokAiBG6n7fnk0HsjSJxJYKT5yL6wpJPf59hseeYVcADT2F%2FiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe4ENhX5cLXQxWa%2F3KtwDWa3Wo92MyDbALilJ67ZF3mDvQF%2B%2FPKKm4XXS1hcuDqAYmK3F7%2F1SJY4Nu76wSEf3impmRznmjPRD01OHettdMOb9Uuc6RwGq2oNhV3tbUATeDLxORcH0EPcmTrYcgsL2MuWd59tfm2wekSflPTTNP61mr%2B%2BmVCXfAm0rk86Q25YyA4hbN0pB4yO9PPanFWlV52J4grW8rD%2B%2BWEKFEL5f4OXnWmkW9PxmGAqaZ%2BXcSREoCoRPSSkyuge9n4GVgAXENfZKamzV3VANLrHP7mwQsZZ6%2B%2B9NP3nP8nKkx1ns2o%2F%2Fyvw1BQpPSUT4Kn%2BT2oRt5pFH1j0xa%2F3r%2BTZ6vrlnNV5gEAWR%2Fjf1GthawLd41ahYiHZXzL3DfVAhMJIUcMP1ap3T7lqRPUPrly6%2F1hu20rtEGjhiq8fU9OCU6%2Fbf6VUKM5rm9ANDyBOx6A4Zs495cJ5LOyJH6%2FuRRGqP9Eyi2syk%2FBgvl8x38d511ZjF1q5qq7RSfY%2BzYEKg%2BGWbpToIBK3EJAaFDY%2Fmdo4S9vw5GKfcJnD8PJf32vK4RuNV9Kg2s%2BBX81PLfcSjN%2BikjOyXQmeUtm5sRsuRMLmOEWRajTpWGuafMmpKTwbylWqYB54GqftE0FijAC7rcWYwjrOiwgY6pgEgGhKv5xmsZXOyZwfZlwyYvsrPUe92s%2FKwg8iSMa5cOb1dN6zEcX%2FltezM0zi2rc%2FjVP8Yhmvy6gy9q6YNWn2r5OBn2VBwLYeiQrIxcc3dL6LC0O2golEywCWhKSPgU7eS8YtWe%2BzQN%2FbuLMSo1J1%2Br9Sgur2fcaAeWLirFvIGa9nvbwYTBwL6L1zPsTwRPLb6E9klSnraseU%2F7s63WFflo1GuT2JC&X-Amz-Signature=698c6ec3656c997d7934faa9243fe455928544d7a3db1eec7c379e5b4a15f20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
