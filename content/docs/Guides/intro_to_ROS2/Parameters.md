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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYF3EGME%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2%2BhAzYCDRFcj59CGTPUrTI1rO1qKwvUy9GLrdeukMkAiAfTR%2BktnoZI9E4IzE9serAiQTxMv9YjQTCYtnRCPWVmCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSv6wPsyObCnr1M8IKtwD1bm5Wx0d4oSvCadzDniY%2FLT2Tc8vcYTydyUgjmc6wiXe5N49ucj2vm2w%2BfOzy4j6KiaNmCTewpvli016rsJoIznrnijN1xysaTF5XRTdIdHW9vp5WlxyAZSaQu4FJHKFaEh3QPhx%2Fb8OCoSMX0k3jCAJAQnIZRXCS%2FiqnI3HjXFBlamRFcMLNfukkGadU7zpwOCawSeIB5fsDusS5K9ud2fwti%2BBwxwG8SK0V2tsJHG2BSRKNXwtAkWwdJFgQiTWc53yg0kRq%2Fa%2BErwiCnc1V%2FLjpKGKK%2FnIZLUdnq8VwyPUkhZ4q7t3JVBoXWZS%2F4ZYaQoDmlMD4pQSY2MdIRrTMktfNHxQw9K1uey4PU6MBn3ckzamAoYBBR7vlzT6w3%2FpxFg3Nw5PNH1bSPiQFO%2BoRoETCYiy45YBf0g23GApgnJAF%2FaB5CsGLXLmgmF3jE%2B3llTyh%2F%2BnMT0%2FJnIGbwJLWqrjNeD0trpi9oWfsVWy1My%2F6O%2BdWszlzF0ARA8fsFuoWlwNWTfo0FjP1N%2B4loHOrDInl12mLp0J3v5A1ykErqBC4lfjTFG1gVNpnYncx4YKzuARqUQ2A4aCQmATAEJapv2%2BGV7SCbvV14cVrIgO5mkffpmALhuX4k9yspEw1rXYvQY6pgGwAdrNaT9UNNC167UTpcIwoP1bYG1AO9PBQnDuHvuHS5bOQu8miPHDHCuloaHSh8QcJzlZGgYUtr0Q9mmyjZeDxTVgSRi%2FueRVFw0iZooJHoCKsB%2BI7VUECEr9oX7lRPnFuAZIkwlRWX4FnR0BxuXFN5hbI5SsO0BWiIWAT1QpmGiToEA8upl9IMdV40K6QUjeu3N%2Bw3XXMeyR%2Fo2KN1ukgdiHZ5U%2F&X-Amz-Signature=80439aec0aa5ed203ff2addab6f6763b87909b493cb60ecf1dc7ad42c868b2c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
