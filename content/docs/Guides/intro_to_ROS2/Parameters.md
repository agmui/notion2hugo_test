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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D34N7YP%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEWS1LSCQlYdWtxQTl86Xpqmj1n8gweSmwokTesgDZpAiBni%2BnftZrvJxa52kO8zb8L5ayonxcwa4tTI6ytCnIF3yqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzxps%2FoB3E4Zs9KNOKtwD8K1Yy896Hm6jQoc%2B1n%2BLVn4PU6SfVmaV4TwYiw6mo2F4hHurylDsLScvktSyXJBaQpbdsprLHA9ZDcKczpIhZIuX0bCdJ3Cnp9Xgc4H7%2BXf4z%2Btk8uk%2BTS1GDpZfCnpLWnDUhBEII0wVyOhjO1v0qwhkAmScasKVi%2F%2BxPQZwasBhd%2F0Iuwx1PDqGh486KFedXRZBXYcRTFva3giwpHPgszzSOvPMcygMc9jciwOiR1SCoPWm893l5GKjGniYJq3U2dZ%2FyvAY9GT5Vl2UYQqpwdV53bsV0LbGdIBM4BQXuYDZYh6YpFavxe6LDsatGar4%2BIz4gBpEnBBIDD5K60PnjBWPOHKy3Yi%2BxCPOcl4oJ%2F9NblPrgKSFudTTrJ%2BtlWGUnAK3dYMMMw3xGzAk5NEDaQAATJ7rF%2BNEClrY9brwYtmBFkJyp8z6dgjkOI77A2X8HoWST1jUanGiAGTyF0JJ%2FxDOfiKwbCrYZxsTY2Fq16Ld5ibRrdurWlZdS5MWut1D0yNlhtxLpuxXhlN8alhAFjUj5z%2FFb1Mbg2RMPzm80KPFiufTW2KHhkoItJZpJLLfPn79i9ZIYbIsvkn%2FIMetYql8uYhQZkU7EJ%2Bkw1alYdWoo4lQ3uHeL%2FNGbVQwqeeevgY6pgE%2F3Gd1Kw0ucRrxJdfx04ADH5naJfhtB4XczN4%2Fq9IgXormEzZNvhSLMPjH4%2Bo0oXH%2F%2FB6SNlOkuh%2BKNqdjqTF2RguTT60f9BMlbj7BLCcIjjPSNV43RD7Hdo3NKKbqIiXgQf20lZWnSPA6dYq005ogz15%2FcCnwKcFwsLkkImDO3nGvkIJCe1HiGfnB%2Fx5zTKZGlTXlfOxTBinYALWmPcNrBxYvPxRu&X-Amz-Signature=cdd0f628c2c8327a7f6a1e9736c56446e1ef2e6a91a8d19131ed7017f951f96c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
