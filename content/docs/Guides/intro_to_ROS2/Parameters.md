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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZZ4RVBC%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUe4zfsnIIXbMtf7%2F0IEDq8q8hyDxHdGaGQAkhPCWoNAiAkT4d7o7oyaiSAIH8zmLRENA9kQh%2BZTl9%2Ba4WrpOhRsir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM17yf1XNHuidS2xrKKtwDHD4l5K8PODXC97L7voZE188cXPSdqR%2FD0lHpywtXT5yNx%2B587tx2baoK1OU04SCWyi8k0nkROrfvlijKmmwYV7%2BzD31qKw%2B7%2BwLLZBHCXlwDAy%2FUlj032PvgBQWNIU3F%2BE6CJUh1zRGdCgsqQRIA%2BLSCY0DHOLj5PMoo%2FeOddJk1cfkbYEPySEXARylxOKZnJQuCqbVjKHgBgPEsdFrBt%2FndHoRkcp%2FZycHJ4K1R2fU36Cbl2rIOfv6Q2QoBbtBa1zbPYjDIulWRaj0F8R2urVibskxFeSTwEuHMAfA1AQEV08IJygHGyrXD%2Fk99kJLUk6YaBSGhJUCtIIKYNTjbKTcJxNYb3wWVRmfhzLV0upa5b%2BzPpI6RwHWSmDSG7ZatM4PjHTLz3Vzb2zIE6i817p6AhF%2BgZCUY0XNYlDAyKRtmkbL2uN0XseQf8LUgQn%2BocJIrnw21OOJEyb%2B2WuoNnxQ4irYO83cJewDkHx7jiSIwNOQqIqZ2bWADSJvEBhI%2FZ5lNBAM%2FDLO9e2cbGcKCsDz37Dqp2ciyB1GcWj3eXDdM%2FsJcUUb%2F7ETU8jtD%2FbTn5lL1caLceyj8InHIQH8Pyh5eqJfKUK9Wc9cuVR%2B%2BpXjQ39NVnXLUc7PWhQww86vTwQY6pgEKSKTgQulm%2FnTqFaRtXmtUVaEOIsdvaB0xY8vHhLjtvUuvYEU5WMQDM036Ww2nTktx%2ByjOFeLF0ImKL75t5j%2BoaEszFtfEXM337epTS8mmIBQB7%2ByzDDM3OnZL8hp64S4VPYDYKiA4L22jEb28BEPPWpoCZE9N310xrYAigmUHtdfaRGCRW%2BIfAaKYiuiLuT6CCLu2tvlzoJSnCeZelu2amN2L1pGW&X-Amz-Signature=1726cfd0ade9e4d00207c95dd89e72ccf406175ea5db0e0466062b1230d88d86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
