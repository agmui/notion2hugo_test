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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CV7ZGWE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCkwHrN%2Bd5PlMScounZOmHYrVwobZBtpDjwFJyomGMt8AIhAP7ZN8j9gRojUfzKaxhukiYbJq%2FzIHRvWxtu048OOpInKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVi%2F0TVY4Ugq6Po3Iq3APhIWuYk5uK%2FJ4N76bfDV%2FVFJAoqje%2FHBBvWFCxtqraJ0fhrfYJ6CR%2FlSN5vidk6oXzn7RGw9oFYIaI06F80x3Y3SasnCmEQt1jd88jQcthHCUwLZkrV5avoV2oGPUsh4wT8nRLcSM0eMvz%2FFCaJGi3YvVI54VpZDZDcj7w1n%2FHrOi85Iqudur87lZYJxnYFxXhlwH0pnh03mtWsprBqAP%2BAMSUQ%2FNSnEAf9JOKxml1q0T%2Fa%2BAb5dfTR0jPp3SvElf9Ohqx6%2BimtIjo53UVWd7eKXw8lSCTl0TYGTpl%2FGJ280XUvxSo4WsL6EcCyyTi41m5LzUVTJI63s06ZJ8BQhOXDXOvAjGNF4BrZuCoCsGLANv7yHFWNt1lHbnAeNP3uu4vugZotl5h4X9i%2FlOCq7CnykzX8fTCi02BJesfS92Eqnn7Tn8VR3zkHoDRcjHdPdNS%2BJJVspSrD6kpLDKIOt02PQr3PKQdyNMUjJ2oA40y4qN2WLV%2FD2GV0c5MdGCq0yIoSqcjfls7YtZbFy%2FIu0h5hIBpzRYJu3tXAhJ0ewtS%2BWxpbujYMFORIY%2BKDk%2B8fbtYotZjBooDgdC%2FptpwQll5vzSGLHBe02DR1jslPGPbis30aIxOFuB0le0mcTCmj5zEBjqkAYv73Hqj8uHwLKRthjsl9wYx%2FzNvqv1UeUgX%2FZ1D774AJiqlGpDUhDWCuqHF7gQ3sGJe7S5%2BBAXNf3%2BvVUK4%2BIrvFEHXDyM1uJcsvighwl4KbU2m2dbqoZsb%2BuuxJMgT3X22hrXr6pA7DCUM14COrOuiF%2BGHhYNTRXCM%2FfiZIPEjSkET8HgU9IXo0NEOrXhLMPbQFHB76RVt8cjmu7FZfP9tlTa2&X-Amz-Signature=f22e563522500cb61515ededf3e508d88bc3e3ad467d332aa2d661b977ca17b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
