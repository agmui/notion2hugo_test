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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBKPJ634%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSNU9%2FQsxM4o3E1VJKo6GjLXEPc1rIMJPKlG9fTPnOSQIgUexa1MQ2LTH5EtvU7RcVNBC291xkKcfagkyAo9Gs8%2FQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPxY3urRSINk7%2F3lOyrcA40qTVAqezwv2V12QiAQ6I3TmzBT87KRC9QCCnQ8sP9f%2Fxc30I4x7Hj1MmPkZZVgz8rizMVrVWLrtUKhEiHwbTHD8Y8InxU0%2F%2BV1NMN9MrCv%2FKJuRJcnxsgGSMB1R8f1VEDJjoLKaQ9%2BbDWteEknlJgblGlnkARhx0lvAZ3JvhyFwdw7WcMyioCNqxXsFDnVGa4thTalRxd89s4WO0kJwMq3M7ypYzpIyoHuoZ%2FuoZyOqB78PcdcnEZO%2BBO6kD6HPeUfO6RKwctAw3SZR87PTV3IH75lKxZizXL%2F%2BzX6RHtAup1CCMQcOXx2g9zlcv58vHRb0Ic4NJrizii9yf5qJX7EWx6Kr2jIjR%2FM%2FjLKfiGZPxPSfT8BmoRm80n7TIZjz4FKGp6dttdKD8CvCJ%2Bx2pM%2B1yJINS9cnrxfxJW7tBpniijsP%2BzVjTrDStQTGpBtJqn2yKajNV201UiCDOnsNWmZpDIxXNtOyKaioz43GBnzt2C91P%2BHAhFBAmyjj21YGm4syYZPFDgPnHI8ZaNS6a0jZdeU1hv5dqclchJqEggp9W7lsUtd3HRoLad9KBUftbwWR5hukcooNlBrnfLE9tZwqOueWjseCL0L2PiH6IhrPFH6Y6GN5k5PfCzhMOKV1MEGOqUBPsPQWAqOTK8AhZKJupSmO9VJU9QlZxpM6L7rNPyXhKkVoCXFNXVzA8co8AxI3M9ie3DBfEPB8YaEDtbSOiAhz3eQAXvW6GLtkCEM3naO8z2eNG9SLNDano8nt06CtcgnXsMhnCb9SdRubyAPnlZN8fumDNLQE8tk5RWl29%2Big%2BTcR%2B3f7lIu8IIKHT0YcrP2XE5AoPOin4ndWS4P5jcGUfNfzqAk&X-Amz-Signature=b56abef077e7bc42faaa459c4725aad454c391c59d2a6256b9a071edd02ad650&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
