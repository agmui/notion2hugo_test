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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3JVPYW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFulGG6nM6Z1LUuXoWJSk7K6U9nXsbrHnIR4Z%2FtU2hbLAiEA0eoy8CuvxbbeRmbyfXrWGbUbP5TIVPqBNt65E719W%2B0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDA0qDArJVHQxP12wrircAxyIgZS3FPl25BGvjwn%2B7jQppR0DUsf4EHP02er6xaEBxcuDE7CBWCqoABgjNMU35Bm%2FuOkKWpnSfRDvZ%2Fm2wu5yZtm6CUeZUcJ9Wt%2FAZ7R8K3eKBJyEHIYaqVzcPXGsQucTJinFppjSZSBrvXIOUgWmVy0ED54ZEMiZ853ZIsq%2BdXQlCrhpFo4h2GJJRvVVuiOt3ZOcxnIrV6dQRB1iFV62Xfm%2F9rftK0OqiL7oJ%2BLtaw5pOeEGdgnm3Zem508HoFZKoeHfG2DbngmBz47dRCXL3ppCNK2Jv5xaQTCwW%2B7avW30FmyNU2OkzxBhvmMDwNBK7VWZdzIefv4v1m2xU9EbrL9VnYMt1qIigsErp2hE9rGV2PemvyJDk6eK9jnbU113PX7QNPUzuc02MxcmOUyGrQ5XiDC9s6V%2B7fqNdWAl5eODvGTVRspfmM7IYgpA99c6A1Nr0P4QE6oxDL7RkimWBlzcocRQ6y%2B0R%2BZCgfDQFCUcOJrZ%2BNgzUrwJ2Qhp0Pp7QkEfw1ZbOvj6KCyGhTUIjadvHyIo5lB%2Fwl16%2F8wyUfGagHG5DmpjFZITVu8zAulYO%2B7smqC4FfQR6Hqaer3habzfeGJNO%2FCkKJvaSJUfLOiQmlq830dN1w5sMK3nqMEGOqUBXgi%2BDXR%2FM88c1Vv0ub4QIIEWRVL%2FLY0lKeE6w%2FH%2FUHB5VYVwjVT9pkFWgfAp78cWyLMr8m1cW8kke%2FdwYZC2RLu1QtoguD02Mah5o5D7rJo%2BtkYWWoofoS1TjgrGuqa%2FcuWPXs28EYOPuE4%2BxnK08Qc5EofZnm4d3WA147DPGoGn5XWR2FbLVyPbnmQXShktcL2RSUm8OC0KthcdYWjtncusApty&X-Amz-Signature=ca2269d4a57713204a13f7f376735305d244f0a05166ecb4f978629637039dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
