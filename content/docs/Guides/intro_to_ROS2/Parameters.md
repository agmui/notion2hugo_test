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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCUJCDVV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHHaAV6H%2Bo5sYgiIu%2FRl72zsz8R1JhIF%2BGZixQsFEdf0AiAWFKc4eo1JIw%2B%2B3ROSV2DCWHX6pN245ct2TJ6Yduv3rCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlQpPxBbnN865ypY8KtwDRpykos7Yp1Zj6l%2FUgYGItuujpjMm5o2YIe9HDxCUUDl8E0VXiokEyuE2nEFOB1UCZMUqhT%2Fzj55SNB%2BTJIrdM6ofenxewo%2BP3anO9YnHii7%2Fe0SaYVmKot8Dn5nOM55rgf0IThp3E8cJ3jWsLk8Q1JBerxwNLT99MPVR8qVn71bpSqmujiOjRkG9PI%2BRaxA2Z4iAo8VK%2B6TkswMvhXBgbtpG%2FuHyX8f2KUPPKGw8EVGehtU7S3ahJQQueBaHtXyMG93%2BmYfA7yqvceb73wPOqt0m80FF8F%2FpQcwoxaAKkYc55zj2Bqk6XZGiMaEpSsCGCOjJu6J69De0oECmCBbwXDXKqGr0eXCxkfLShJ%2B0I6m8%2BHAVcy7MslXAwMC0tc6nq5zu7sJOyeBaSRxt03zYYELc6Tv4HEeTfVAbgdSKReA7Y04Z22DRO9n6jZAHuUXF9lQBLxMuQP3zsEmpf1Wp2%2BLC9e4s3x7IBBuTnFrUfN0%2F5RwQJBz9Bl9oQK7YRftrINLqFLjbGzORgVakhTqLOSOATPL4NVmRUiigpFkzUNWIka359CDO%2F7frxsAzKd93zoe0%2FFUzZkGNGk9keZx3rjo%2BxDuGKJPeJ4obATf%2BdkGyIhjcvy7hVZFEAakwyJn4vgY6pgFiZLRLtYZOFWitG8wx9RAJ81UwoVH4tdNSOyB0KCplnOwOnG%2F2nOMZojNoBHEMLkSXCOARG%2B8fw91zC5aiPz1PMeFtv4e23w%2FM%2FgMccNjl4JKmA5K9L0dRbW7Tu67VDW9uCxkT2vHtIlSz%2Bl9i%2BJywBc%2BUkb1MnNYvitZSkMITO71s19spMpN3maP1JmPw4OzAV6jYCeTeaTFgDCZVV8ZoLLrQ1dVr&X-Amz-Signature=07359b3eabf8d5d2db0b0980609e92e9020f6fcdd7ead3a5d8a915736617b760&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
