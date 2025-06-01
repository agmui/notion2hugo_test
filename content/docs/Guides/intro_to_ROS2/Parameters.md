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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCTRZT67%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG4LDq%2FNDY4XJDHLnpeb1xGBOErBtUzfGl5E9j%2F3%2BbHyAiEAoVUtjV32KkX7SEonC5yLvfqB9cYe%2BuUxVlK34%2FTPscAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTaNT6hze%2Bo7AHw1SrcA%2BTUEJDrL7pop4req5LI3k5aKwjLgPfLgyySy1Pag0W9uT%2F0C8yiX1EvO6EBokR0CvfkwM5sBqUi%2FANN9QAgkwNB2TJ8LGlSXl4e%2B4JnLYEKS3wbp81Y3D2ndbyiN8rcKrI8lhNZH%2F2hQjNyNSl5htKDVdkXIw1pm1tWXcemmkZd0I%2BxG3Mo3RMPt5WSkNK9uDUTdqIPFk7CulMR4QmL9PEemeaHqYLNacRmvf3vNfmZop0wzL2LyoVATmwcuDqUXn53XKA1lSxcfZ6BDyGG%2BegF40VfjRzaEngwD1ehiRNvVDOf%2FeyjFEaYQ3qDHreqcpamT0lrsTHx0fCy1ic6UXt4BCWY0TscLihIRFwHujV%2Bl1v%2ByoocCq6p4m7wAb3pjAzPWHlyTPRVNcKTTMvSkGKhkNeip771YgvYeoKdJ7iY%2BYSHIuXP7gOaZEXx0FecB%2FGeintRYYYO2HD%2B9%2BzHxQOsStFw0nDyWSBb4fuHqm9kuLo4G4QOhYWsAxEKIm3nQL0Byi%2BalQK1T8%2BsfbRZ1v0bWetQU2yoc1gPFbSxw02qF1SfWdhMVt5v09dtNffF%2FoAqXMdiiXj6KlCUTwnPSf4HBO5JtE3Via9SMg3drgcTKtaB%2FH%2Frk%2FFpC4SLMLKz78EGOqUB8d7TLP%2Fxehp20EZQrgNzQL8F5H1l8%2B5dzuIDll5deQF1sXUAg1a%2B9eYfMPwU3regtoT2%2FZaDRzgqO39BZ8j5yohsKT0pRrO85oPyfjfvO3Bh3R3fCBVZDwMGK6EHG1Zy4B38nCvpv2QQ43v518lT6ejGmk0vibCRYgbtEbUxV7l7NyWmdqzLJYxIQM2tp625oocfRIsXa%2F0MwolDeqjIy9iEljR4&X-Amz-Signature=a539e5e930abc93533a962b5e322451c49c07264f21c9fbd0d3fa76b41addd52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
