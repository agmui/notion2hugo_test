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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CL3DR5D%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCeWG2uzF4pGdf5wU3sc1tcRr9n4i4co%2Bs1LyKShK1iRwIgOkjHfhq9q5GdR0%2BCIVFsc4TG0KyUZWMfrfE9o6zEjZwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3VjBbYEW8kT0QqKyrcA%2F8hvPp7GlmunJQRZYcYFQsnmuWg1Y4C%2B23Z9y%2FL1tURt3jCQw1Z%2Fxqr7WjO4TAuri4b2LmO8MQ0pjwoYoNXt2yK0L9sz41WrURvKIZqnmfvdLooCxYBsdf8uFxvNiw7C%2Bbr4jwJPFKGz3Jrvjl4KVISU%2BochQiuVqcBvpPIEV9sPXVaujFHXIz0JkRKVyZA%2FwLifqEfvk47APrkciXDFtW2%2ByJi4TT39K6Svnq8HfcnIUGwEuSggnHFXxaY%2Fn%2BPRg1jlZpLwFH4SDqMN3ExS6G%2BmiuZu2coq%2FjK5GPYORDOWSCUeVfNFV%2FlXrgajIs60xc7%2BXrnBMYPyylwsD4ANZY79AjCUk5obmWc8%2F80zbwNPE2P9idNr%2BgublnDr%2FaQzX6oksRcfZcRyFh6ocEVwWPFjfLK4RwCNouoInVEE3jSyWOQzI%2BZ6itM8prOQKE3igz%2Fv4aalyNdtfH%2Fdyh3Zv3cbw9s1VBAoEEyPNjFGZXvEg9quNT925Y5PW6%2FJGXa2dzQEhBch1%2FaBHIqfFCVNZIiZP6CyCM%2F9VAYQtgLgtm3qVPDOyAYcxRYkaH9484UZ7dJiwnfBh%2Fsh62XJcTU2FBkcmlLa5WRDi0rfOlPySVczBVCjKAwLOlg6ry%2FMJuY874GOqUBLKn%2FhlSkzFjrJaJr%2BA%2Bv6cnuyckIjdn1jRWcapu5dLWqhpbyrl60SR2yOBSF2z8T%2BN1fP%2BcWt4tgHJ3nxsApW2JQSAWe%2FN637zR5LhNx3JQX6pKiW%2F%2FuMvfSnp0vqAr%2FLYo%2FHm7WUxjza92YyOku%2BIYjE%2BQsStLHSnwsDHS5YcOdNgQIlxvfZqfW5FpE7nWsBc9CfuVBkUv9QIl3zeF5W%2BqnyGUw&X-Amz-Signature=f57db2a77e7236eafe561f0dde9a4631c490c472e54e27e55db62e4652b4b521&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
