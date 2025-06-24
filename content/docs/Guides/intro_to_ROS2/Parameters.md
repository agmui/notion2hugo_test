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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNH2YOL4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIFY9KZETv14x8xCeekL%2BcyREz49EW6ezsHqvdGxuR5vTAiBTQldRibtKijAs4BFPzCG5hKbEqBaiM9BpYCkHfFT0Uyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMJ0n%2BaefkSzwKwasjKtwDsZyi0sYGQ4gvZMmXlwT6xQer9KHu1mjTvtYk%2BVAjMJRWDuifHLIAetqS0SsA1JLHBGGurxyGFim2KqRoO5wU1d8TG91sg7gXpKdkXOmcVsdRi95qjfzBHnpRMNYKRSeJvglYT3Nd8nDlCdc%2F1N92Bw49x17hQhvn5P1%2F4%2Baj0EdTb%2BfEwJmvSjekPtizf%2BHW6t3kcgvyEFqL4Z6p5zAyNqe2z%2F2jGPWk1XLlrtQBXWcY%2FZbTFV%2FnWEDiXxQm7IPxka%2FbT38ahd%2FXdJzP99REB44S4REfU0Ic8s9dXQk2PBwzFVZZLF%2FdRhL%2B3cWY8B5Gg1Jj7q8vOcWT8OamVF3Xfh0bxKHXPL13QHC5R0NslSaWwuSze65aiyTbOjhO4Bj36C%2F8uaP0gDKGX75kuKY1Ce37rQ%2B02l20fahdoiUk2SEhP%2BTB6gSEFVaIDR4d2bIHjhmWOtkOylH9MIgslCNMXnzmoYaV1F6vudsbwmM9e5t7hUfgvrJBVpGffGbwGRjjbowV%2BLNlc0aGMQfu2S4%2FI7Wqeh60lGRiziXBW0jTtNmg89oGGRPS5jlp22%2Fbbc1tpQchy8RvzzwlTuy09lmx%2F3doBN0lt1FtX4FADez4Jq8ywdvEF4v2mtN3iWEwvdbrwgY6pgE%2BD3ugDW0YcWlOLdM3fIzqBEGfK95ynpFt13pjRPUeN%2FrRyhaQBRQfwqmJ1%2FMReUC%2B7OvzRCC8dp7KaNH3qcQ0gSIj%2Bc%2BDsN%2BzylyYPdIrMJ4lu3CgQHXgRJ%2Bta9PTETxSBiRL%2FB4ftPe2CpYy6lMnVJaOUmbUSS%2BtvEoV%2FWKEsJinZ0t5LhaMrszBLb7GNIURMGy1ROweKhOYH16LEVQGtipxOXZI&X-Amz-Signature=ac80b472b9a5e38e9a99ac845f7a973c777e65cb2efb0a99af9e34029d5bcda3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
