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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GNEBU7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTTaMcsKz1n5mgxZYCLpmwr1QUVgScn%2FtzwFKZiau50AiA9GvliezPUbXSful3f2SIsyv0Utk8Hp4dAsb4FHimg4yr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMhgETVkE9PPZiAxH0KtwDIrpkn3kD9QmpBR%2Fdf06kep3aXSblhStNMTGnAFY1Bl8%2Bb%2BMS5feUi6xe9%2FloTxD65LuLjAQ9WHrgMTFjsHr7BR%2BIt8vo34Fytwvf9szmYOPas%2F0eCqpuYXYl3d2WJ4ExBDwzE1SRvePLrgEugL6471OYK7hEzSYykH3V6V3lafUNC%2BNKxsdPNLapXZCyV015Xr5xqsF2EJvgKBa3oVh6PmxDP%2FTNjuHI64L6Tib28AFdoAn%2Bf7p2XlHSqmGpvSpfP4ZfUtFGvnHtfOClNHUgHqhI7ESCWTAwlyuXT4gt3Oxwo7XKxO9r9%2F0xnYYOihGKLwmRWcIUD1IkTX4x0sUfT0CPM%2B5cicE5RJhDBCBZAEQTrZCn2nteDUe3ZTIZTLJfRvaiLuTwxxPKhyjGUWQcjQH%2FU8udoC2o9UaN75%2B5k4zvJIx5NZhx1d1Ffg61d0%2BydxOn%2BhwI2th1PO5PrOvtxiTj%2B1SbjkhlK%2FJHjHp97iCw3SOxtush62lBjvZWFcp37BC5%2ByC7%2BWWogQ0n6GKp8KSEeFPfdXaLke8cnJski5fYO%2BWsMcsf%2FSYhHRao%2B8mHNaQ9kah%2FBetGq1SeIwotrgC1591ybopVmoI3cVQT55iAHD5qsdzBS2CM91Mw25alvgY6pgEZ9UJwa3bQnX8U9oM9tj%2FNUbChJgcItjfPmahRRjEqKK2wIe8eQwcHusKMT80m4YI%2Bs898im2PWpnNUao0HsrDMUhCyWXmUExkeia9ChDvhTYl%2BKjyydj4RqDXcOC%2FmG%2FY28TQiSaEgyrclMF%2B4F6BoHV3EPUeDcEgsXmeGLFyoFovzwFKNa0alAy%2BYNgPkndzX5C3kN%2FVcdufQj3%2Bd7li%2FW0pMkZX&X-Amz-Signature=af8e134998b0d9595c60117939851516ab829428e5d41242576e83e778a02fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
