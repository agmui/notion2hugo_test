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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POG4JM5%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDSBNDovyu161VDa72el3KhlzWAY9ECPSIFmrdklunCzAIhAJO3FCRtmwte1Jvk5Aoohyl3NTtVoyfi%2BrBJvmN23z49KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz66LJheYD2y88X4UMq3ANIHENxCaCRj7Y6bUKEwplU0PrBMClkwkGqGYBneXjAWXv%2FN%2Fr9B2zh4BtLNwpDo1M%2Fee7gzO30J02haH3pUB%2BUmdE35YSjZbOHmpgRx9h8QhjKTQ15dfZoAz1p8Uq3Ytc6Sw60taeJFs6A4xq5B78Lf%2F1CG0VBRCzdjbvoQ57523p%2F5FjlX%2Btz5xvhT1b%2FijzGCGEUOooZAsIm%2FAcEEsnnnSiMs9Lf9aYbFJySg5ozcgw1OWhkNdL1i6h58Yz%2BoYgbj6ke2tzFBKbgToR693dtPIpFk2swdyHG9lGcU7C2xUWeobMsGlAofyQcivnqyxvYTNpdUg49UjYED0BZOdAO1EXUn%2FFrUTSLIH4yUX23tBKTpsU90tdfX6C94UD8vNcJ7Kpr9H2ImtqUi2o2Sfz5wvH5pc0V5ihKgMjGp0LkxA7ojA15cnmtveIAEIIoMMk2oYk34s5k65IGaK%2B6LhpT2Gu%2FJITBC99fDQXB%2BI4sRbxd5EJEBlwxAugrtEx8AWy1c3t33A709x7SNhTBSSCAPj%2B5y3Yorr7T4H0CBKHvcd7C5N2ogY5VZ3oAPiXNUPLvldRAJO9hE5z3T76Co15Qa8rg1QHLWtcA3cKr7wrt9wCLWo9aa6jITLaq%2BjDtqby%2BBjqkAdpU80Xs51DNjvtfhXg2IMR%2BLLSjxGqhVnMKrVsbOp5Cf1awRWaQnkJEfwR0QBn1BC3b4Ua6vbbf6SpXpNMPoJ1TdyoDiCOcmC3dv2y3gM1qWHBw0wkcOoU%2FsJh%2Fqs22bcx1%2Bknud8rvpwp76GQphBYgfOlqjL6soA%2FXvxwybdnVnWkguKuyGYjenxjEdBOctTD50iTeWxx5B9XTKbiWe%2BLvYIG%2B&X-Amz-Signature=e023105dab5552d59ad904dab5f41cfe4bf82b0854ceabd70f39cb5929f10932&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
