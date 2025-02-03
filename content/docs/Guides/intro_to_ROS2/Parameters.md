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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYJDDLY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxpdshxr9UubmSmP3SoEIQLdfTZPDniMtk463l%2FO1ffQIgZVUFBTN94QHBgAx3T2tLKsRRf7i6hDuKu3FRqwYYn98qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3WeTGGJj5Rf5%2BywircAxwgWUK7%2FdN0t3rqdVP2Rjc3P8%2FWshgYVt5pz8ABzjMwQNdOt6YdMieTI2Zo6X21iCslw1gV9wDtghVDLygSikbfozWdmKd1%2F1CJLjC%2B3E9Y%2Bho1fl1eOnnxtIWIuCSmVBCi17j0EIKXq3CKbh6YMx%2F2d4tzr3B5tVprG7ONNHB%2FcPgC8zm6CObMev3QrhNTdMFIFk14wN%2BhwliHJOwI%2B4axcJY8Z9lmVRuX4J%2FzaJe1tGm1iG4v3KTLvz%2FSbITP45q%2FAE5MdLlc617N12VzAnnpWY8U262TbSTBSv%2BApLQ7b9642OEfOQ%2BnebwT7%2FRTXqIGyjuZ%2BJ%2FLO88MvomivKpdRaMQnXkAB0CygklKLoprCWKI7EXPOZS5MhquPge5UidqloknwSlE6Xe8%2F%2B%2FxyXaz%2Fwxp%2Buzq2wP%2FdWNdafgKtFwkLcL5PhSwSK7mMMuVnoJjFXRShNdfiQfRnirTVyFLp89okwkHBL8%2B%2F1d7DKhXZg5p2J%2FZ3wQPYGAa2ExAmqIvK5bqo6dj69xQNUi11qSDnPsFyp1Ig%2BEMp4j%2Bg9Wu0hlPONYyzG4kolZzrxzchNJuF5ph4dWJ3h6hnhIXfkyy6xPuG9DWlekVI1Kzr6fn5Td5Eca%2FdJdGzblqML3AgL0GOqUBpudE3K4vaqCNotRgsCUna61HtX721%2B1ntI5ZVInLkwjcK9Sq9q2tN4Dp1E7XXSTzHf2M0zuoiPaNILRRIs%2FLdlmHNATVTrnLnHvoJOwFuyyyvqxIJ2qT9wNVoWN4ZRjydobpBHPLThKLM3LVgtaynjif3Mxul9QysnxUNjpWGVCabb8Ch45Qpq6pMhgxnxmmjxQCqX1ZxlPn5s0PSIaoZaOmyulu&X-Amz-Signature=028c42c2e5504efed770c5a5a479c85a183733a2ab55efe7ba19822d86763ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
