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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV6LHHMZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu9BJkuTebJF2ZSePa%2BaMyVtQRwMGOS7N7lu%2FMaF36eAiALG0CsxErXvlpSbt%2BJUKz7quyonnYy6%2BaY0J1H9DHkTir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMAQdkJP2FeLJTIMBLKtwDYwY4p%2Bp6R6NgMNkxhYVjNYfWO%2B3otRGiZJQ8LkOnBJP1SDoDUHhvaDmaagOMq337nHATDESqNFrWTFdq2HdMhn5gcThk6cvVAIvPDoqv8zXlSCKnma6mwGQkQh6QDyb497kq2%2FIR5Mkm1Qb0%2BJevFCW971TaZGxDkrbygNpsKIiIBdGcwq8dY7j%2F2ZmmPVhIxhOCdFU%2BzVi4%2F8MwlI2RVLE8LaGI7MPhSqxHP%2B8z7J1ASCPdoJ3iBHWtigDs9sR2tNZguAbYZaBVxK0bsgf%2BR7DV%2B59EwUvR0%2Br8RLrxX8CGoYxXAglF%2FNVHunhpWTrvsxu64FSE2HrGOA1nk4lB1M2eYZaiaGxUazmUicDngclpzRin2BPsVL%2BGLJtkH59zaQCErNq0xb%2FsFHfQF71RC9v8OffVViMfwj5aNOn88KNnSkpJUHbawctWJcpv6ykylUq8vyLyshy4o%2BhJksWd3RfnBPY%2BeMXKpSEgwdz52JAayOXSs2iN570ixI45TrPUsd7HQFHP%2F81kNXlCN0Tuv62iDuTsfazSMxwZsCQd%2FEeTW3dNzvPZK6UkR0bvJbxbL2Y1mYiVIBNIJHG6dUSmgfa%2BK0Nqm7ON7OrMUu565WBJoi3yyBowJDzz5Ygws%2BSKvwY6pgHoOedq6Hymm8Dze9JqP62eqfySbSUQMSys4hql9k6yBuzdVFGEmdfcnyqvtVrshdXf5xFVV2roYIzZhDHaFfA6ZwkfKlftDULJ%2FPt5kpTlg8%2BrpcB%2B%2BKgP2FqlvDIr%2B1IKiOVAgwA%2Bkk2vT6xi45n91mOdX8RxWhFxyTEInu2O9wIblYwbn%2FSckwSd6GMLWUSz4p2xF4ZW1aoO1YujdwuLAdVJ6jTg&X-Amz-Signature=44e3c8145090398de631a8f4ae6e109b775dbbbe9ea13339169cd5b768eb5f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
