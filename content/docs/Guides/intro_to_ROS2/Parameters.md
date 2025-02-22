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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPOZOQS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRZp0HhZFzXobrmtMLT0mz93uuJ1bDOqr4iDEMMFRktAiEA1A0GfBJecQ%2BLwPg8mUt65buAy9sgXB%2FljXHaL9uIz%2BQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQDhsc%2BvbrsMt%2F2ECrcA79hGsU7xH20QwDVO%2B6g%2BXDO2jDf8POqDjiAG%2BvH3YWYyWDU6%2FTESAuER1Pgy6YUf6Zb%2Fz7s5XuDDhPC%2BMZq%2FSRcq7agl3I%2F89vMnbTzRkM5yI8tUC0aiW557oj%2FQlaZtHTFqJRfcbJPwrtaCnaZjvSb%2BqULFtJsVJW73sa1zDivum1DqZYZbMwer3FbzuUXnRc2y4aO%2BCPOHqnwgZPc22eTpfzJf4td2MVkQePebr1uqpv2vJlAe1ucqDtwSiTlEZZCCrStqAkHtqcudkaFaG%2BvqTn0EDWOZ3DJiSlonMVemwp42FMGSnZfjTgvK%2BEnm6to4qmYiFMKHpqV%2BjC%2BIZez%2BZ%2FFGa%2BZFiakC1WcyEjMrKz8PKOPpEtOw7fOLikChAj%2B5aswRt%2Bd84m1eJB%2Bnw4sM3R8%2Bxsci3lj7OY8l55mVWWm5VQvAzl3%2BhQnGF2v89x9s625rG%2B9og9saZ4JolVzDcdCZOTutlVxHpVE2Us4incY0%2FzlS6GdMRIt0lvs%2B%2BKPWq%2BOCXSsSYBIPbaYjztfwhbOvzXX2rXw5j1J6hXdfQbjVJt47k%2F3qvJDzDO%2BCebFZSip%2BWsbu8zEB6sxzfUdBTaMa%2Bp2rLYcPe48zPaolwdGkQGGqGq7HS8pMITo5r0GOqUBjS4PKxr54%2FJECvrqculbnAB6vRP%2B5wA%2FWkysp2PcsGb1s%2FMhHmtRrDvskti%2FjueWdywcY4ytXrvwplW6HtkA7t98ZJItfBzdcTeZChMZsJxWKvqQw8V6VAmyuthSyxNNrjLF3i616cFu8IckbSKmljE9skDtJ5ApgjQEBQ8gawuWJB739S%2Bww1kSuHsIgLCgSAV7G3m0tK7GYfKkjCD7wBK7jqI8&X-Amz-Signature=f1b5a0c44cdc1856d1ff9653553692cc90c4b35f038c23c95749e6e6ffbeb4e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
