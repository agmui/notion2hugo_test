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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7Q46BB5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHNAjc3axCUG5Pn08nJwH7MPiVLUyTS7EUGwqQ1Y4BG0AiA0yuaU%2BtbtDVRixNxaPIrpf0xYmocDOQ4KwMX9pWvyDSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMesU%2Fed27fnwQVJswKtwDXn3DJdwiQWzTNVs%2FmQsHqKgJLSLemlesZAHLreYSLoEldWzFvQk0HSvdVtCF9i0IeoPV58SgiBwS0v0s8a4Liio65BacGsxS1Ea78eVJ2ZhDqQofM6E66yHbzwr95SuYK1FXUiK58gg7XcHqgrVK6Srf%2FT3TnRvDKKggmP%2Be0Ol0EOUEuK8S7xOs0Fo76x4jeYSgHGaPlZnFBf4ouJLk6Tetqk%2BrNpYDkp7unCkIRUINm2cnWNLL63%2FXK7q8Xy5ZdGzdL5FH8a4rxlat1Q%2BgqtqaBWO%2BuPevOzU93yofi7w4EoiGN65KN4xvL28A%2F0AEcF1kULsoiGP9iTcsask2j5dxGglstzUrlHDpcvuMtObUoyOQ%2FnsRei2PrJPe7Jrxd2GQzpbvskI%2BTIuJDCb2%2BH9ZVGVlvXLo3FtGWzNkFdBCnFXiefyNOAo%2FuqK27bDzT58kpBOml%2FGqOfCOgh40e6PixB6HLtAj4axBKGT5ynn7NhYLBEjjnvtafoRtORpiufUouvsyxSwatAa1GizpkWYpRScw4TP%2FokjLpstPcTtWBzsO%2BVXBzREFtsPBgvn%2BppF2RWfXSyOTQRz5Q%2B0Qi1kf6f0JUza%2BIeK93AvH4Kax6IBbfjWgVlyh9fYw4Pe6wQY6pgET1VU66pkhEhDwtK0PjX15lggDFwLNXGBp90kvbrj39jmQ6drJ1J1kqXjFaQzaW6Rs6zPEHdbrprgOwuZdHnaxYtyPAh1DG4Jfk5EnqoenYeoK29LPQTrCyYijO2%2FlHdrWPPNOI3y2dZLaakeo2siD2VjmJgn6hEyMJKWjZNvk4OtJ3fLVtR0V8Z%2B3Zgxy6WewGatgv0gS5bC%2FFb6s7xKgOiXc1jQi&X-Amz-Signature=f5f4135d6503f207f82f51635e50f830d0f5a66738ab5c60b49941d005cd7771&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
