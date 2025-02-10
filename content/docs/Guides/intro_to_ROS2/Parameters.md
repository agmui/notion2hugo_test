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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AU3MAOL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1gYg2gwGACmTe56koXTSpXL7TLzN%2FgqXCs43X6P5ygAiAu%2Fz20tct9lawfUlvRUY3LWxIpPRBFHexMr1Fe1ZJD%2BiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAMteMsQwdnPXPQ8KKtwDeMZmSvGB3p1US1CDcs6Pg66Yr7eaA%2F6ExAhu4ZlGPnYHGFfpx9Cdm9HoVfALqKgKBzE2b7jWmeXHgO6i7KutYxD3PH6ZmvmBCnHHZbhvKKHHVEiZtdMYeUm8cPfq58DX%2B%2F3jnF4hJAFigfGesgA4YlsF2DOzxMG81xSmtCv5O0WNC30zeMphpOq95x2Ys5iLye1vhHDad2Gt07OzSRmTuxdmA2bqje07z0R1PhQaYARLma5jzwLc3dPfjyqkAYWpmodiZvwqshxqjthhDNubt3dbaeJ4GDf7zsiSFj0yVFK47D0TxOl6vq2wKsQw7ItwN1jae4XOUzkL6YWOoj1IaMYmyquOsToH1S%2F1IZjjK6Aa8aC40nlIqBFXsBgOdQXo5zyJgFzFtNgpNnSZsq7yPuN3x4ICZOmp0T%2BFx9Sdh%2FlWkGhI9g8bC1uk6EmPVPu9MddeRFh%2BmNtEbimEtalQ810a5EPOulsBjb1M1ffnOJkwJ6xtW67%2FrICwZ%2F1uPZjrH74iDBIESWV2H5cDasMEPmU7SN%2FRs686%2FKiS1PHb9me8dfwwP5B%2FgGnbpjRxTM67%2BxVJajbGEu%2FQI2t6%2BUn3XixbEH%2FEcEG6dzYmjmhNQ%2BCCgPvRdKkuo73bBG8w1fmlvQY6pgHVqabEuxxIn2ISwDJ45eJb1EUNNfbDCQM1zOKcQhWiw0wf2fCvIGvBKpHNjN7s4dkJ7o2PbCliFHng%2F3I7EL83MVHBtitIjFeRoLXigEbpCniSN0s3ukrWk6Lh%2BJn7jX1vAyp1ka5G%2BToR6auWp65HicNfTWBTobXePCWdfokUWaw1a%2Bn%2FpdsVvCO0z7MwMPaUuVpQq%2B7hWIgmLfFlW9qerC2kuGa2&X-Amz-Signature=60accddf7ede5ce10ef35d62a2d5c94726d5086acc752f88ebca687098ada0ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
