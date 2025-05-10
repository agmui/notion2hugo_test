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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SUVKZNQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjs1x1bfCtS1OyK73ejbcZtxdUuIi04Msr8RxO7KOoaAiEAhvGWzFugLJCQazTfevd4MbNoWBsK1eJ93KzOEAo3gc4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQ56kY%2FW%2B8j0mYDeircA8JAdbGo375LOu25NN4unhJ5V0CliOMzVzJ9kgd2ZfTB4K3B30JxO2VpOI9TGaZhzXBJOqkHCzEhGtiq7RKq3pEuABe5WzsIrUUaZPpCb6LX2PIjgeTrufOk4d4rJkFuRvILxOl3USNXlzq5%2BZyV7yfqkF1yP2mWDexfWcoRN%2FCr9tCzysTyTQ9cxdp%2BBrAZ3i5kbWpz8JQ3ruVmqPsBAYXZ6OKBWNBaMAcZHTR3pxgQHm60DTl9YppRtNEO2xJQxpVfh%2F3TKF1yjQjcU%2Fduy4B0K%2FEvSaHrjomRf9%2BIWt95y0NrnRUNhh%2BBWcm3ZX5YpsHN%2Fg3OGtK41ltTph13jq0GAqHz%2FeNsrQpsRoFOi2Z7dzujQqZxrtU2AmRpnvwmyCgeHQbOgULJv%2B5Xiputc3EoROirwr5GLSVmQDky9fweZWW1LO6vxCAWfIBUoe%2B8INKSr23O2J0BdUE7Twgyd%2FLI1tapYbfEvyXilUTPVkWNb0yv0BHosX5jfg%2BfnjxT1XGFHp76yGSAbXJIz54EjPX1bbwltLvLz%2FfSWZfJVM6JEo7KW80wzSQR5STA8wbHPdOQEx8PiG08idv9Re2nH4XtewGXKWmKMcSfktvwqguLai7wYXuc6rVCi8b3MJ37%2FMAGOqUBaC60r8X2rmOzQy6M6VcRH2m36InwoCoIkmfVCL4Ho2CiGXfLhPeyGpCMn70kWwUzEGGt321394WgPe9CVKAAOlVU5zFdkcxuUc37stZV6sKvYisGLeTOOzFTVHwg7CwqBqVTspWVwD3YRd9Y%2Ftkbf1CczGsr6LhhGaxhcv5CqnEcjYGLui4EsK3sPEVjJsPvV9xi%2FDzwAveYnQpJw8GR8D%2BeZDhj&X-Amz-Signature=4dd86f87bc6feb2739220ec1bd98b08cd09764cf4db264a2c21a73a7c0a9f091&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
