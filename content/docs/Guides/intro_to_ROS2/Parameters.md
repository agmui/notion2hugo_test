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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIXWNBQU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDxyTak%2BNmp9gel4sZYt4UZDs9WB2fIHRwCROOwUqaIAiArmHqJYyhME1VLUywTMUW670spxlWPxaF2DWZjL8PSZCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc43RCfd6%2FeSYmN8yKtwDHlw%2FfZz4fW%2FbkKJVgIJtxYB0rQu%2Bu%2FCFjS6ckKgePHvUm%2F5Ke03QWhzp%2Fhls03AV1%2Bknc4RsqI4hIvMuOj935FchZVphcIeorQyo5kS6yvD9hT0HT0xs2g3KwJTcwRBeYNJhgeCSCNyXUYdvvwLlF%2FDMH0qYNVr1qP9pYkvJoMxxfQW6ad3x5ZhIFR8xKNmHnP%2F0qnS%2Br16AV%2FSST7lhYNShLTh7GculwxE4BJnJYbCtRK%2BHtRReaTevSMXm72GC5DUOKuYg2pVkTarZ0RiwYb5XPvnjgjryNoa%2F7wFA1NecpCgBZvqFiKtHEcML%2FTbbB33VF1M6zF5%2BVBfHk4dHNvpweRgzoHCDQ5RVazbRdXaJfabbB2SEqoEVlmMT%2B4xSD3jsI1FtGOztERGybJBYZeEyIBiIJlNKTKp%2F3MyY%2F1YMfVD6X83GS%2BamHJ7jX5aJbF8Z3osZHxoDD0cCrWuP5zxmT9ogpI%2BlixaVVJajsO1HUL9q83z7aNu2QQ09ZTZvPzb3aFObnJf2jEDKThkNZ7M4gi8BX4k9wIfqg12uXTZulgnx8ZzJkwVgDsCx1EBynRL644O0ets8SSoTU0XHo%2FDRtDuJCq56F%2FU9Zj1BBdt5yTI%2BABoubp97YMIwr7OiwgY6pgGqrU612bywpJvM%2BWexCJ%2FCWc4AqiSSQmGSy7hKtNGEF0mBFeY5jiEmp4GjnoXKJ5pHyIo9hRmn28xr2ev%2FLwt8S6Qfc%2FLp1R9mkXExeLhQ7O7kewWZ1ATf%2FMaXQxuyKEFDzhA2Rfmc7CaS8HZXKMiZMkCxebqiyytGFKE0q9Oj2EtFKLMG4i3yzZe71nYDfO%2FV%2FhPjQRAnzsRnI7yssk%2Bp1tAHsRJt&X-Amz-Signature=411e8ef9d411c821e1e9b17d777218d2d0707165826901a982ea664c0dd8f5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
