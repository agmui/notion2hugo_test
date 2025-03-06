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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNNOPHG4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5%2BClQdBdN4WffwZAfEeqC%2FncQ0fSTCTp36Hb0F%2FvgRAiA0LE9V2%2BB5ALHCRz6WeTTyy0CnouwswXWEOKln%2BdjFqSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMGLHXJXLWVlhleARkKtwDoJo4H7OBmyuHLZpk1PPj%2BNtkGBxuHi73uXFIcGq066IGjVbKNtSjbcdE6cx0tDRKsTZipGnJS5JUCLBr%2B3C1tGV05eURUeYCaC3ZntQ8tovUdFKPFApA7mrKj4R8fKPHHHkqYqcleJ0HSMGXKl4rrcDXUDYqQ8zIXNarths7wFBOLmIHM8lSaJq4hV9RPCFEAjY6nDXoDiz5iISE%2FYg24%2Bl3PxAMVN638RTR%2FBBPPYL6V%2FZ50vwYHTB91y%2FacCEFWBuKKmsQsudgU546gaLK%2BO2aPvrDiA1WA0M0ZCjULjudNPw1%2B22SuutEBD%2BMHWgyAx6yJMHYa4DiLiMZRhaeLatfTkVk2Rt8667RsxJBfBDFR%2BZBR0Bsy1gK9BdjWeTUG9jX%2B55sP117Lv%2Fd9bRSsU5n9aEXFvGxyB6MfGVLAnXyxAvQxLuV0rua6yWTt4QLGTj5R4txiXpdC26BIkszGOMxSjD2nMm3BN3sgQjsvmJuv5ZeDUHiHdQtSOwFLOlSJb5z3aPtZL404Lo6wjvsld51v9WaTd2J0Ixs87tydcQtBz5z7H9LHkoTfe%2B1swALcex7olcGLOQhQCXPyWYrDD7d1q%2Fzs9nCW9J2meTiXhbBYo0uRJvzOjsDZrYw3pWkvgY6pgFzwCC9d%2Fe61FpQp862uQmMMJQ64TUZEF9t6wdqQdID8nDAclegfUnVLxCtlRUDmjI8DY172%2FO6NutYoKCpb%2BZvb19SD2sFrgasKlT6WLk%2BI277QG%2BfPQXf88pRU6MEKM56Qd10ngxD5Gl2I6aH%2BtQg8PwA2LwFouszVFVpqp8F81z02aguRfGpJQbFNJif0bklaX7nqjDybCKitUGZEtTZN25njVnc&X-Amz-Signature=67cc899c1956b58eee2d1ce19e78f6d4f8e94ddd2e68eebdba410a675933d980&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
