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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7HX2FQC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCap%2B7Dt7JdK5SkJeLc0DuaB5O8m%2Bo%2F8EpjCuD0LIDIDQIgZrxC6mQZscLQ0q%2F%2B6afofzVaxeqb3k4Paow%2B1LogmBQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDHIRkGE5w0MNsUT9YyrcA4abW3A7dYfVfJuntD6gl0tXgAEJcQriMbh%2BhLGwa87EfjIYg9YwuSmarjMOFIhHAy3jrtfDcLj987ZBjToz0DdsiutipsUxkrnC4K0xV5oltpp6XWm%2BpQdL4z2uC2OeSK9WAEcmWwWtmxZ9njejDfcECHAfD5IFjr%2BMeBz7q4QQzHcNPnURFCEIAnbT6v7Vm9S%2BfYjWzPBPN%2B1qAsGg1Pz2a9bftk%2Fl2NtWZAmDba4NN9WOBJW64tmbpwBA7M54pNZviIS%2BPMXPoJlrSRIAlFoR5rcKqrJWNwQxE7DM2vlt3XrCV71G8F0QqvNrWhVCPH9MTLZt0yUzI%2BY%2BAOWBbG1LHfOyqc%2BFqI9HEnzVK1LPJo9LPhBRNVuxdNvA3jaSPt8wU1vXsjv4ZL0C9wrfa7eMj65HwBo5LTvegThu30nHqjTOA2Ia1X570H6900MZWRnKh8oUlrjvONN3MmBSRRpDVzrInKCrGrnsm1EK%2Fp019IpXm%2B4RqFjkh4ouuwAg2wr0DzaRzQi4Jg9zC%2BG0v5yp%2FLO2CAXW6IDYHjmX2SgICaTN5NX5M9QGiPNcuYHpbHfMITqfP%2FqdDuUD8EnQLCTJ5djQKH%2FsifAXPTzHD%2FHK%2BTrFwLWgxgUXuTXQMPqhmb8GOqUB6Rq23ERKkEw%2FOYsTWIRl89GKg0YswL06NDBoSl2XEHqf0uKS0dTw2bzoQsYRBuym3wtLCa35phlR1ogjrS%2FFfJa6HsrWlIWiCm3MWI%2BGjYADp5ijuwy6JHfsquMNCVrHUPJrCzxerQ4opuDyQ5F6%2BCd%2BisV05xd4lH6MOZDttjEPkWB8FEAMzsNjlGjDU0cpJORhPwyufWlFHTdPVg6PR5UFwJhS&X-Amz-Signature=26a6a36a27d3ac5a9f961407d775a9d17f81606baa4f01b69c1c0c6b23142c63&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
