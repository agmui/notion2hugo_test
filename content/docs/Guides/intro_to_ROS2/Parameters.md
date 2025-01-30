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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUBJPYN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcck5zpjCTNVuCm4ju1mKR46IwEDL3mncWcMLTwpdlUwIhAINPW7mlskGP05oYNcMkPjuDOEl9Nk6aNhBmeLcOFJ5KKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRMqAD6cbXHmhTl88q3AN3ryC4lvdU%2B693rPCD0gCQHbMOcTeA%2BYaq0XdnXkun%2Br9M4aKgqanEAuHLPMcCRoqdg0dwKuyxgJ94s3woMuljXupKITFH5SAiisy6ZS4AFMgeSc3JgXfvPENU4au7yUxIFNBodH3PLXNL7E45sEl1d1BkL0tcdmNk3orhzozpm6MAO%2FN5jTKabOQD8ou8zH4czPrMm%2BAWvZx4Sty7KfNtveXvSQWgABUp7QuZkT4KqIbhIDBrHjSM5%2Fxn3gAoy%2FAwDY4iuBI8nFe7j1jNsSBwn6LniNBto1YDgUEdjr9egoyDB1wMyZrEuIhuw%2BuVKYeBpQXdY5%2F23cCjeq1JiJYL54rmF3aZboiQC7JLsswjxjqXnc2a8K73ZWWbnTS7RmyZzzO0%2BzbVCmlo4VrL0C75KnMOcx1xrhacTyS0XUeH021N19Y%2BIOnG%2FE8xC1jwNLw0dcgoVJIPYRpOXoqfWQ8QWiDJAcBbeoFnyDKlMqxPdGVgw0CqDPW9eTdUsL06PRMzxHj64gNCojvvXWsN9B7AJk%2FFlwmI83y%2BP1UiAFCQW2e3wIlE5rZ%2Bt06PVBf6fGTCKaWOAKCwUV6oQVE8C2T6u9%2BSBJNUG0c6z5zUFp%2BzBeAJ%2FqrguPLQ%2FtxQGzDO7ey8BjqkAYPBuXyQRuEpZ78vufrjtzRCGEa%2BdnMrKwA593YYA52OPQGULo1uEoeume9M05l%2FBDtG8NmszlgGUlnenHrKCE3xzQwNIHQEgCEXzLfrbYEx4VXqIudOigxpYvlkdGZ4lK8mAQ7mSqxAJW%2BCVKvpmkZP6QxdylEHuaAFn%2Fy9JBrWfxiWURFvxx53E1eMWJUlKsBOr7UV2wBW5G%2Fm%2BZ5QW9V2qY5y&X-Amz-Signature=2432cb3cfff0e5a297b13c2fbd4a3d168d96ed280f3165ab3241cb68d19e22bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
