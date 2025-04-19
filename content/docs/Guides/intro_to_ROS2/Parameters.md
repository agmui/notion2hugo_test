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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPR7SYC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHSqLFzxsLNn8Ladg%2BnFVQpSaqZLUKm8mFxwmEZZJQEAAiB5sn%2FljeWxQu%2F61l6P%2FlvAWDkCSUH6wUi601AQgJ9AQyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPuB5ZwP5cVukcuKsKtwDjlvL276F2DAnx2s0SGGB%2F2I3hzNGG0GLQejS4QCTyHtWdFEADtW%2BExDoabHNUWXjHujhksjhiad2RPRuoUw5AIi1u2h5v5DpvK%2BRdvn3VDmKRYi50Trqe%2BwtM73TWvmnPMdJpvkRPiORpOuxc7IWvLw4Db1WePiPMbqpDVe3lzuQkuAF9eWDaTntBnEMr5QcCZEWq8B4g9qYx4rLcRXg%2FPNO1sAEN0oVbOKJvD4zeNKZgAKkcDq237JqP%2F5W6PU2yAZtOJQr5JlLjrexpn6wn%2FxaKMZEOEQtje%2BnWz82oIgJRV6i48v0RylOs2UESAlfevNseahZA5mAwe9tifuWQ66AYyVtKtsN4NM2kEcjWXu0CfZzCxjhnuc8hmShTVwDKgHaeojzA6W1Kk1vPozjYcb8eL9JH5%2FO%2BbDn3dGFdu93KL4GuZGEqGpUvkmFlB5uUwlDj3mpe1fUq4S8igmWDoljTkbV%2FlyxVOvtdxe3UIOiU8e%2BdoDjZoUU1Z7N8%2FQXcd%2B8mnfWYz25mYiYWJI5s0aeTLrXm%2BGiiysHoReWwG5bn7k3Uz%2F1xWDRgtPDQV4D2xr2n%2BobVUWFdU5M4ArChftHvN19RGjOUu97ISJjBxhDuY1RQWX%2FLJefOwAw4pWOwAY6pgEEMl5swWtUNjv8kXzG6B9vDCRechtqRS5rnpwplQNCOvsOO7qS%2Fjs9CniYgR%2FUkCfwuoAXiOCTMsZgl3tyJ2t%2FY555omH3R%2FVmwAD8%2Fs2EoZPi6lhjiBNt6eCUHDppHMkyrZDOxwlvi%2FXLmYY3eUj70ndYrKWUAVvgNQTzVBYubraqPSOnH%2BQk%2FQ1piIG29U7DDNzI1mbg%2FAwFW3P7p8ENqApQRRsr&X-Amz-Signature=8f821b160cf39abc1baf4ba2e5bdb78d19e0cd2e940b68e2685d7606c9406ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
