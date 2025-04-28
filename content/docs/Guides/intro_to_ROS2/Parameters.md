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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546AC4J6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl%2BFjbA9vVkcjwQDUbSmPix3JpG1kf8fg4K3SN5ZsKhAIgbZwJlEouQjQgHDR5QddIPET1x3cggQoIUJs4kR%2FVxiMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDGZTMwIOC50Ig4N8CrcA%2Fr6d%2Bx62fa57ApE7C6q7n5PZVPA6BKBVxgoJvkx3emd3RX2%2BnUYvaMslO4gZt40CK3l1Q0bTVUDjhxZQwYOZM9crOCEInMH9jNCONCc9bcKcM6uRPcMKeE5NEFYiZlGJWjXS1tbQjaHKS2h5Wd2tFaA69YvWEORVdokprtWK%2Bs0jQ48WVxwp44PSWWHShSF7Q6dwf4o0mbmtcfOYEHEb7wwVm6%2Blnaa6Zmk1e%2BX3p0ZLcijv8rTPuhkgP%2F7pdfPZ8UCl3lKHoBg7siBCJLZ2WIan3YJ3qc7GZwHONDgokHkuebWp2nk3IFuO0ULgK6e6GqA334XXXe2a00am3ybbeIy4%2BO8C%2BQ%2F%2B4N7A97vzLy%2BculEEZ76aoPhNUpV9h24LRDGP5e9k61HWs5SJu68LbEGnjlRW7AfUydPmmOcgOjNthFKImowZ0dDQ%2BF7tTOaNYsWZoAJpyDiuhe0OFZkTWVvsfNXsc71gYCLmkZKmvnEtSm%2F3g69iIwK%2BkibChsz%2FCW06gyQv24m3IOg5WIdMaDl%2F7r3iYi1w9TI3%2FfMICbW3BuJGmAGlu97XAGWDXBtIygsLO8i12KNFxys4CcD%2BsRFY%2FatckIPubFtp4DmaK%2FuRXzFGmiePDRUw1CPMPiJwMAGOqUBLJw0Vvuq37b9gNkiLRNeks4ajlQqN7RBafRT%2FuQzfrFzz15H%2FGL5LJX5qlh8h1VxXrZOUVmqmHsQ8r8XKCEEwlprWt1LhmG0lKOycf9l%2BXMy9A5lpMM8lZ3KQ2O%2FCJK3VijiW2pc8m7pmDb13tMtZWNpNbmMHBuB%2B4BuMD2Z2BUcjAJelLqB3wk693KTVXatZfs%2BNxjraV%2FKjea%2FbJ0s7t1GB9LD&X-Amz-Signature=ede091b497222703cb9e9e42817a307cc2b968a61b4d5fcb202fe52fbf12aaa9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
