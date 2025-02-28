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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3CNCOC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQC8eosMlml6t1vtFUIqPYpBFcuJ5OflOCxleK0hG5Rf5AIgdHvugjy4%2FM37mZ95fMJdDTDHy3aB89C426ly3pkjJhcqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBO1WC3m6wHldyAwbSrcA2%2BOUWIOu%2BUaI5Z9uRASW2Si7M85jodxXLddQkMDm7SgwVHAUX7S62K0dGNY9SDUZgEgxWxf96%2BRhGP%2BxZ4EYVbk6kfEX8M%2BtLbjvb9m8e07MzLDtWOsvDp7O6PV1oUs4CHMUB25M8eQ3YyBSTcnIPekg66w8q3%2FCR0x%2BGExitGHrqZVwYFhTpA8riTUlZuTvGnisAhJOfRHvxJuoXwIOGgeEDKY%2BidMsew2LMrE%2F2HZ8RufpOpIl3IcQaiEZIQyFvk%2BDzI4ACI5DemAwYSXQ9XrMqxeXU2IlhaKWYxG5JCo3nw2uScHH7xPBqkZeWpQSipct1x7v7KWqfzVX6gy8s9H7Jwg0bb8dqLYkAW2XZMXjUO4peyTJh%2FIbaUAL4SiTpOK1%2BALfRUck0BOIM8RpbG0MANbNCzkqN645w4x3UiYHJX7kZAHSSFZ5P0uH6Zo4RasZMCuY2lrQY4yq4gfvU2nyS5BNBbn56OXfQATcGTCUegDPf%2FhNAC5uztXsgB8cjq2ayi3mnS6qsJMWaC0F7vdUAklttF3ClN7xy84kJ4D3XhOXzJmFBHSj5qdMHExnSyFgVM8wM5TrzcC4HNhvVl2gOQJWJc6xep%2FZ7Wiij9n9YiFAK1K%2B8MlTYVtMK%2Fvhr4GOqUBW28whXQhAJuSNxDOsz3AkxKxjTReeI%2FXOO2Jp%2FEscaIQ9ZPK6fyzLlDJG%2BCoV3%2BW87%2BTX59VzuYmjGDjcb7rPPsZXqfBKb%2B47EZnQyGiiPUySIOisi3dWOurcVxR3Y7W1OiqiTBbvDNhYlR087ijsUoz64Rn%2ByfVjKED01%2FNb6mfZwXHq7GRQnslP5lU5FjFIxCmCfJ44%2B6cKn4WNoWQkRfi7BnM&X-Amz-Signature=da3e912b2a4e02fb62be2513ee9a397669d05bffe0c2596cda9add6cb5943267&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
