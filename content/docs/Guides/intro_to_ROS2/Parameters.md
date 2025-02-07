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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQQ45GU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIG9ZSkmFuTzgMQ5oAWJlOA%2F%2FwnDHVG9YncV9KmpW3KpPAiEA%2BK2GQ37rL0ipiJTUAa%2B4PeO4D1bCJc5RwPEUJG%2F%2FCDAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLg5GcXf2kNRLxcZNCrcA%2FUaNri%2BmbWD%2FuECGzQXuyytaXV61M4U0vlej5rjg6ytzoArf55%2FoXgGPGL8p7k%2FHLD9hwlKVKtNPtYw5p9%2FJ71SZsFp7O7Wfd583JXTbP1TxTO5gNpvUGmpPp%2FyziznIdakradEHYx%2FJZL70xVRPLrK3tHXRlUcRwHFqUxrXcSwC4eB2XXszOjd8TZkyedcyaOM%2FjcN09Nu1UxPmWiFSbkwJ0JTRYP2lmPKUHzdAH21yywbN30KdJdKie%2BNcRpeP%2F5OMbyiXkNfqAEuALVNcib5%2BCzrw4eDHaZvywAxy4oYMqC5%2B9A60noMeQnHCJyhvrYMPPOutk7sPC8imevxntQfDF56QlP4fwlrBROG8XlFS%2BJFcAyGsRQS2JTHiDkD%2B2deHuuIJ51VSdIYs61SYrtFLGO1EsuY8AjFymlP370Oq5HeYY8paQRXyBAbA447DZ94ihn4i8ONnx4WkIHIQIUgOb3wQ8kggtWn5l8M7N72RLS9hHXvdvsQOqpBG8GACmvr2vvcoDmbm4S6kUludYTdSUt%2F78pTNFEmIORkuAjNYQl3gNyAzbjmuMUnvSImjVQqHkvry4o6OLHHggQ%2FDJzNwQ0DnNlVUJw%2FaiKHir9JJm0xgX9LRpiEaZTEMNO2mb0GOqUB05UtE0GObhsOYeXWx4FywPDEPuzopuqd21II27Goeu%2BaKJCnnoUpt7RVMIOm3bcgAFlnNL8M4%2F5C2Jq%2BSUfM7F6uxP9BIP85ghR0xfy6ObPmv%2F3sFORz8DPTjgIw9HnuRCrRN2EDTsn0%2FdjqJ6jZsfqFpRlNouwnQkt8fSWmAhn6fRvXrwDV3QqlfK1cnvgpW4Ir9%2F9UZoflLFMKiIcsppqNDyCD&X-Amz-Signature=1574ebffe53eb6710eaf0ce938bb80f308df27a8b479bfcd8c0c18ce2904c569&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
