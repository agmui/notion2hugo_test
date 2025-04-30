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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YIVSQUN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDuNRh70okZ%2B6fO4lXDhdwdLD%2F0WRU7ekDofce3%2BDFoSwIgO38x6pmGwExlRoGYHmhtAkxXlCNj%2FBuB1DGz59Bi5QEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSru2OvaVYd7o5t2SrcA2YOSVNIjPi0qOi8P4FOEN6SFvGuOii6eGeDJLu0w23on3xaAZY1ZLjFLy5pM4eKV0ZIsrFP902TA9VYmLBNbmyOdzNQeGYLzxlESqvUTopEvP22umVpPxPr%2FumZ%2B5%2FRpOjO%2Bz563LMrz0Jlvb0v7EB52bM3gS%2FFLj%2BT78HoDukz1W2hBwn0610JDAvqFblm9ZEc%2FdGuyqhaDYbMU9ZmtQom25apAf4Rr9eD0MQq3v3X%2BVrt2OglcHwHerokVcN%2FuxzpKrzdA%2FhKr5sPtLWFHs0OV5R3xPnFj%2BlmNcuZYf1b14I0NRj0eCkmmpoEEV2cKcl2vRNQLdcrQm76GAK00MGdADUbx0qCPFbBr3aV1pT6kSuHrs8peTDBIolA14kxwaepgq4xrBBGWH%2FwDnycQv7RJFV7dun6VKy5hw5%2BTGoWoiAZLZQSlX6cIPqQe11U6v61gc5KZJzgQ5XbHwo30aUPUMuUYxu766ZsZPUR3BVCEwr6AUDaKFRfQQXQ9rTCYDSD81oYrAcr%2FxG5HeTbj5lIlsKDkKpE9eznUSh1DkO9xwjysO1VmkVPZ11CFvlLf5xPdfnEoxhpQqAejKhe8qdqcaOJAFvrJLP%2FKqA%2FJLTE4rJp24swHqpOYEEFMNbDyMAGOqUBDKjlOARsqJgKpdXk45Vl%2BvTcLxQDAtc6YKSGZOzjT7ExlvFNRI1t6j0Ss9hX0clSSC3XHF5Y71PLJ3EUcypB3wZXFFpern1ME1861q2Nnj3yPY6j2WsdpqgtHXVlme1yENujp9tYiVx1lg8FGnlNdUlkjYpETnexfSSLcKpE3eqmrK52jyE3z4e0EGVpcRrX0XfJf0fSMIw36v%2BBY8uBYUGQJJVh&X-Amz-Signature=7a08ebbb3c0c3f2e1ced379acfd244a117ca907c6ec7ca4496c623db73249429&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
