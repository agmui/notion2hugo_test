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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ6P7UHM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD2EFj50ZoH0QlT0DzSsGEpoeM7AaEqDvOZxQr03OsLQwIgJ87jISFY2roIXwsLuaSlj8ndvEyewPrRx4joiQrXvi4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPVRhcFOngxkomg9XSrcAynuDT9iuaz91YHMtzpXIWPDpdMeJQGzKlEEUtcz3OLTzeGsqhm4ISJUNj9%2F5sl5FE%2F2C38EkD4oZCywe6fZbZL5CRQhKjPrXZRxGZtsrgHUOCs%2BXhB3flN4K2A6rbzuYqEN3GLK6tslaRODSnt2o7ctVC64%2F9GgaS%2BXaFQg7SxJHnHVebOmzt0rmssuL5WlOe4tjH1EILHdz%2BlVsMxCuPtS8bDK5b4zXQMG83cVpsikGxC1VXU%2FzrkWx4SF9CLuz6z3AL4K9WjEOfdeHqYfj9cZONZfZV03ETQCM72NoTDOt71Ru8Ajf7zYJPcyKqKfMBttpZT%2FkhwIsgM9x4Jo5YfRslEhcd5dU3Gof4915wjg%2Fql0wsgZuc%2FxRwgoFjCDZtk9dz63h%2B7FOoclwsiVDr%2BlZxCoAP%2FpsOTv7X7TsBQyVVYgi316pBbrnHmw%2BIipCXQ0etOj6Xbey%2FPtgyvKuxN0fd6%2Bjoul5gAV%2FGO1F27gHfJMgSsUETPkhpzH0r1SUik9RiIlzk8MyVZ9NYNnHVnK8tPtjcdWAJaeiYw1uwk3nxmGLfk43KRqCgTq0NrjF1smeIdtNL2EVJ0p0l2Q8GiZoHWBAo5owioHNQgoYNTQrmL%2F%2FepDWwn%2BPvzgMNnswb0GOqUBN3p7Zd05Iitx3tUqCWm2VYP9ip%2BD11LQFf23Uk%2BeeKNRJsEYvu%2FKzA5qj2LPE7WmIH9T1SvRRhT5LIS8MMktHRax58CdbwX9NGrWIqLmcicL5EAmak703BaERI6WEqmZe4UacjFldhacdBSmEwAFDfZGtFDHDHH%2BWrk%2BJ75r%2FMaHCEvuydaMS%2FvGgA0QejMdqUKY1zqdIcZ9YW7umzG0AXrYUZGu&X-Amz-Signature=c55991af5ffac358892224648bbcb5331783014aa973b6775d096251199513c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
