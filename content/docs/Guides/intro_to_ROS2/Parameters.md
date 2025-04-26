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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH3BW24R%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQp%2F7QNl17f0LU9MCinAnK2Bhoj7frpxcQF16%2FwttIDwIgNC%2FEP3Y08rHnCxsO5F11hON0yrOTLtj%2FVyo%2BeRStyv4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPSdRCclccxamivE%2FircA8Q8zCWy0V9R9g6pumWBQpWTOlAas8LF3m3xYf5GWpK%2B9rWvvWOfUNcTxDyT2cGzRXYWdUZJPzDI3r2MdaUu1m6IgHW3myJ2SrGNVRCE3M%2BwwUdbOcyNKuty5kVOeDboTn18t7jDcENw9VJ1WOMgosFdm8fa6g40Ao4zQDu%2FNDGTduWyQcMU66FM0%2B3cpwsk5u1S89xVY%2BYfXejS5iOXMf8gSayf4hHcXnKNDpSZHziFrtiX%2Foedx91jYzboeE291Md72osSl7I%2BiINl3qDpV45uFzNym9kNlnuG2NopHBVUyIE8HILEQIS89KHvOFXxm%2BbBY5LAnYHb0cP04aCd3f5SiPaABcz20R9WyJ84dIYodTM9gPbnHsG7q5irRL6ajhpMGFhL86FabFtNIyEuZ5bJRBKb3FuICBSnG6qqBG8mjLjQ%2BUyWu8HaqmEWRknCXVdvdd1N5P5pv4Y7BkJuWu9E54jqatXAwRtvJJGW9PZBonq7alsr0dY9UID5acgozB5guAgFvD7dnPrgsWqPNjyMhR1bCoffwl4nvBBd8XhOSpUUdmSWaKtIyvWqZqswOWH2ZgfyHtoEFSxtLnX4Zgq0%2FPtym%2BgzlzWk7GBQrbRMYBQKLg0dp6neN2gIMNWptMAGOqUB7bNw9dr%2FYX4nB18f0jjb3dSAm4Prtj4ZD5NFYR4FSlKqI69ksfoeH3WnkpEDCH7QLo7vj%2BHyUK6KkK4dc3AVqpZMkzmLJej3L0AgeGed8RN5UelWmaWUo1DLt9THVo7DXLNY4cTLrvV1auv0AwT%2FXcp9k1cX3sTgjWdYrKOLbJGcpBMVnlQSe1XDKSqgKb0M%2BBt4HOn9oOX6g4Xk8V%2FfbgYzAQSl&X-Amz-Signature=6a6df78e4a5bea4320a22c5c187786b81a20a35c4e2342a3f3ae7af79b2e6427&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
