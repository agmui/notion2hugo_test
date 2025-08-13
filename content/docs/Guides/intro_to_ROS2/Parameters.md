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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR44PBSL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFXx9fu7Nw2mTlkJZu9qRDV0ezEkYMefjREwvg9PhprAiEAsGEgE%2BN7rwFgaeJ%2Bg%2FFroudxRyesTl3gRb4Otpx4Z2Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEFBAWYWolW8RFkioircA7frWdnMMH3yjXTsrBJwEH8id8Av24qe7lngvoK3H8G548m0zqfQ786yPAM4OpJSBvjPcVw8n2guSzJQDGWO2snjQYVXCciJVu5xWS5BIA20N2zrhrcgWZjREG0hR5cRfUMyffjmlCiAhHP9%2Ff%2FxaZm3cOd52E3QEN44LvLMmuPhyCicHpgO7v8s%2BM5axmq8lfbtBCnxep7DVAMoBWE4s9wJxMBiwU3GJsIVKtSUuJOfDONRfLNHq7y4RGBVVjXvDmU5LT15A7%2BPNr%2BR3zkiSBh23R%2BYdJoPhBkGlPyM71GiDWd67hWt9w1O%2FUFCok7b7Z1%2BhSKdluoi6cizldL3dLjQB7EuJUd7%2BtW4uCMOxL0qPW0HeSs3st2VrrC5Z%2ByNg2GbY60IH%2B2f%2BuDv2OuHR7%2FQ6uOt6H%2FxdpHnI63gHKyb8EjXMETUAEO5dpe1DqohJ7hqg%2FdGo%2F%2FG7fIxi3w3begrEn5ucRiJQSqWCZKOnj%2Byw7jxOv%2FvmEThwXqcKFUNXPep7Fi0FmtEoXLKGWnLw%2BF7r8uJT65bVdMTNGF0ENSifvusENpP7Oea9KZOd5YTKiLKWEhus0ujVaq%2FlMU7lzqnAVXOM9w7epYp2aRwfQ3aeMWyobv2R2N7iNahMPbG8cQGOqUBH87oNlB91gTYydGJf3ha7%2BPVsbxb3D5z8PphtKrz9mbuB%2FXlnh%2BjsjgYJu90y%2FgIqQg3aSAb%2Fh3SvOD2orMsiB3ERM%2FVUXxBwB5%2B%2BgQplkwgIFG2YSvt6NAaYPQ38IH9lDwIeDbBZn6MfvLSml200QwcSgXgfYGrKPVu%2Fw6ScagtsoKAB33U7JuvK36zKRvAb8nnsT1%2FhkW%2B3Im5yKIq5NhB%2B0GX&X-Amz-Signature=77b1beded39d2f6d819f7821e192c993f5662e813b9be4840866c60ea1746d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
