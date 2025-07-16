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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRN6WIR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH%2BxNpbCNwkJ%2F0uKTL0%2BwqDozhEdHqPP8d8X%2F%2FDLpK1PAiB2fCLYz7yVjQ4BXz3JpCcmLLioP4fr3wrs4FenFaunEyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMhj7oxv4Ks7qPoUr%2FKtwDudQYqH28svcYES3OUJUHNsFctm4gzX4tTHSPMItAhi86TmV2VjqbNE23J%2FHbHgrNYNg7vaDo3NsEwabCMqtOdGaZhBjInZz9334yj26C%2F0x3WSnosMzu9QvOB%2Fs0s7AoJycTdz21GuQ0m2k9pIxDPwHfJADii74Lot6TMwbZxQxfUtWPTlVgwDKrRMslA0YFVvkv5%2BS9aE6TVkD82qkxUmwccCI5v2%2FHPv0j2uUFRaMnWV0EEG1bsifafkAKqjRxuy13y7oM5%2B0yMSezi%2F7%2BpxPAZEJl64zEFo%2BqCiB3Q7QPHmtsFZGBz6W753uq1wlc8zJB044MopnHhGQ4OFRRxW8cLbvFWnaaJSpH4PTjSykMYfR3xJc5mtF6aQF1iSmEcHza7mroGJc5wbFD7HR6dCM9%2BzKP0gg3D5lsyz8CYwSZ5tGNM6IQ4r%2FCb0o2F%2Fgws%2FsdE5gI4lxcxZUog64ciugbqWEXCOJWZ4G1bb4mxvdylFq4MTcHWqvj0JvVPAuDtJMiJzgZpiN4sY%2B%2B7X7RDJgod3LLDbMO859WWeMmy3GlIvyMCiX%2FHaPMMwMPDCTgMoMljZcB6LrgfhZ74jrfKY2kX4YeEghZwnLdjCrY3BtCicdoWa%2Bi2r%2F%2FZB0wn5PewwY6pgHHZld0cLRZbtrlLbe4Hc3UQgXtT17c14Gxm1eMKATA4uKLfrmdVVpQT4NDOWpn6HC%2BE5mYlKw2XLDlBM6dfJLpp0NyXq9vP%2Bptw0Hu7Y%2BsHYCECmV%2BK7zePEggvn5Gd408pEdL6uyqL2cve%2B9l4uxse6gxWBDUtVD82j%2BtSkS12IgpwOVlxqNT5wtPLy%2BoC3DSMhPXFQIFfYy9exz6INJXfFnwJ0Ci&X-Amz-Signature=26c43447d4cd9329f9017354d47f907d9fc6fa266ea10d669193808a10428289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
