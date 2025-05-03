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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQRCNDX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIEvaxGcfDHmT0yHqr5ufZEoTpVfWZt6rYncpFI3JemwnAiEAgx5qZ5%2FIPN65C9Loo1p%2FsCfXBPId%2B%2B%2FzIXp6C8XESfUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3sWGh0x9v5tDg%2F8yrcAzagFt6ks%2FQ5%2Fk9FdpLUXbib8MunEz%2BiPEFM%2Bi3Z1r9uElM%2FG9DxZCmGOQbC80xuXjr7I%2FYR9Yn%2BDrQs6K1ohO6OvDR3ZkvXRaQqIqkNY0fr0vjCSUH6oIHtJh4fYNwZfmFrqUZ2PXdQNsDAqEgdQQnVE7k9%2BFQ9T6yvdw%2B453t%2BsDKAyRNQ5b8ffuiFYqLiOz%2BhymdSpABQQwm2CBWWRpsv7%2BIhaeHk9BkJHk7w9zXxTJmv1s9vhl2lLf3kfMT8HHImQMGQ5J%2F6ElNfq99uT30ddd0%2FQNcxGpNo9ymk9UD5DvGNxx31pI2kFpmArWFLjvQrxmY3id0njemv3tWlBpXCLa9F3C8Me2wRp0DSKZBwjn3mpwEwFMAkyVusHaheDT416OZSFyl8suHVkm1Qo4bOzGjdkqMx%2FgLx%2Bynwkx0GMReeWNTXSDDveQF%2BebFmpYAtL574W96XYaqCm5YJRN2W0bMueMGrt8yGkxVj0niTunXop6raBj5Q6TyatXZjhYRVYGan7kN7%2FThLAV7UdtB6voD%2BFPPlg4EBFaJtWUXX%2BLQOhzg5PF0SxhpZyDaSbD%2FgyiVxadK9PR8m8DsWNHB1u9b%2Bfkv6WVisdhHO47C8RdQOz%2B050x5MggfpMLDe18AGOqUBnzm0qJk8v%2FdaV6m0vsnldZsyxtzarRelvtwSDwjPZb63%2BiHxOh8B%2B7QCLI0fuGgsboVtu6Y01q1xdlLoyFNo9bLFvZGCJRmZ04EpF0xySCC5NEyu%2FxtvV5TJbkL9T1EO7HKxD8eMxb0NQNhWIUQBXjFCzak57lBapahU0XBjMxb7vxZ%2BLe5wCoGjeDbh%2FnVAiv2blgSyWwvvY4ShJ%2FLdU0R0PNtv&X-Amz-Signature=f2675815c3eeb8b4fa9a10c7993d091994e707c027f3e4558b6e08741c99f077&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
