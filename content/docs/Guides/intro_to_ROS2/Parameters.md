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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYAWU3RM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5vBmOLezfU37660Cvg2%2FmtTkOqvS9e8goFTdNO7NfFAiEAmGdr%2B7mkt16nS9hm0uaXBud8%2Bi4dkrFzXurWFNietbgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9%2BAcViSzdZWkoAkCrcA%2Fi501wBrExySn2mmHLpkyEbbmW1OpfC%2B66C6bsvUf%2BNgfBmdCGXUy9YrFPvOomilFIoGwnw%2FUIW5MdX5C54TlspyLyNutbLnO5o9UkBHg4n%2FQfiH%2BIP5kekXTWf6K3lvtb7Wielj14qj0gRVeyF8%2BqmA7tjX5hbZiBP2iaIxhsPK2i2BZk1GgRadNJ4OwJ03SuZJ9moMahKhCdeQ4tgaxkHgdiOLRedDgrJmLtlGvVq6ia%2Fy%2FWFHXxMv%2Fc0gqJM%2BgZdN2gXJqSa2OXR%2F%2FqXd%2BqEFSyLjzKIrPANUqAm%2BEju6dTcs95oaIWBccKhf7orZw%2FjO81bl8KxmPkn3d5Go2Uh6mze7xLVNReN72PgfiNhBH%2Bx9dytvARYXYU2dA6mbGtA4hhr8%2BB3jVBCbRFgPdUbQdRngfQQqmmjEtajWnyV7xnCELVMuhg7TZSPuIqRDJav0AiPqveP61Q49Bmj265w4h0GYid1Ks8yS1ZZxKKu%2FNSu4qrK74AbUcNYZepNzzLrHR9Eo269ZptRYcp8ePICMKlV%2FiEnyKN9Hcpy%2B70l8S35uvXHsCJJP9IIm%2BanBi3Gc8f0AwTnMlahMIo5qNnQYS%2BPFDrUu2hUdbLrVzVZLSUUeXJImcb%2FAXnwMJTJrr0GOqUBiJ8rsaG%2FCm%2F2TKCpS%2FC%2BCkkOw5J%2FpMpUS0Js1pYP88jXaepVdGdU4fr8xcVO2ptR%2BRQFCT%2B1T6ohgQJV%2BSOjJ%2F%2FGDrviqrl6S74vn9Qr9iAzp8mru2ILv91S0pKoRFw%2BFkRB9Co9y5F2mSgc08gty01mNShx%2FAdmtoxnWDiEkSozJWrDOMstB8OsnR%2Bb%2BLC7Y5ZXARU%2F%2FdnAI6xcdyHrW6%2B2dRpR&X-Amz-Signature=1bd626f0b57be5b2c65671d2a8c56782f6d927fa2c44ab4763df4d4dc540e580&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
