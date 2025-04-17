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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KXIKFPM%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDExHP3xJ%2FqNPwE9Oiq8jtayzIaFlfuuW1gGiUlXSU%2BAiBvxRNpP9jQWqSsf3lux%2BU9HWBjfy1PLq5TBtnpZQPI%2Fir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMzipyKbFd30Aaapb1KtwDKJ%2B8hl7eELI7kv1OZ76Rn43icqoUbBC0JSfbsH%2BcgTA9%2F7Gic34UvHCJhLqp3Tdoj2reeCbrgZfsV9x9YQ1sQpvemn%2FphG475q9vkMvcYWMFv35VZIy4vxie00Xy4nn74XQp0xfzs%2F7ZNWpMRx8xwBYA33bZufjrWGbvVk%2FXz9PR%2FEDUfvgYJNhl6ST3oohP%2F7xGw4EgJAIPqFDumBOVuP95l90i%2Bn4kxU%2BBlOyrBr4jxtFwakbbfh4HujwrmPVXrVcbgGn%2Fm3nApwuh%2BmmJRqWt0zpm4TQHNmNKVdUE73kfwC7ONJRmIxDNDwIm6Ov6WnMvtKs5Jd4aBPstRBfQNp2KpPuekQseGdU3TF5mDn72N4HVXBxyhJDo8jxdwKNdQHZplWVGMz1j8g76AlSkTJnxq15iuPS%2FGQ62rIK4BcBYIzggVnZGRfowtCCb0PVvo2clTppZ6BTP1gwFdbPN05X1%2BKhXnp7lSl2xVCwh8mni9dPS7WG8VEGsfXsuIxA98a9g3IGvmuy2izHtjt3LQOfzMyBVeB4hvT5XrRaRON4kNl9nU7DA%2Bko6nLnaYPPjwLyMj2jtX6IuSjgZ1mC1EZ%2BirRRlqxmThsPM933fOm6cuvr4cnaJ%2FDzdUUYwy9GFwAY6pgFQ9pUyMaLu97vuFxAOhSS%2FW6uTCF70QehRUCLRNkgBlAEKyMiUHkE9TWOJbAP7xLjWidfuz94OPysqbkMF3ZI9oUcInql6Im4lna8zIp87IAdWMtW6I8P5gShBR%2BD2EjT5lIq5%2FOGeSX7jHg63zxkicGxddYvOnPOa98HeU%2Bn2bQgmm4QZqEvfHhWQj2oHtAASBBO3HtjmYKn3lrI%2FHT71dhoYCvPF&X-Amz-Signature=0cbdb4c793e1e78f653471d3caa57e23cb7a54e9db3c337c451952947b0613e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
