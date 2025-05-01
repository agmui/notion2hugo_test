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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKW35UYB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDo5p1XQdFCcP3MTD8tH9L%2FSgQo5oEmoqwvyR1H%2FkLisAIhALFE%2BnJev0y7AhLLM6icuB54d0kh1LrTU49ME3oW7CzFKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykKNlwzuPoSmyQDJAq3AOSh%2BObvYgNqFCJ3%2FmvBWPlbzOlluYNCjqhFLaaGjX6nsHdQPv1IgO5gakLFuV%2B71YKk2lf853zqes%2FrqBId%2BDboix7tjDOlYTw7xQJ8o8eLZmz1cRaZZ8AIRMqxKY9sWNlwTO6OHypfl0II%2FstXfHhdd9wQU1uuVq1HiCGsWp96Af3vLmUJC3GIiypiLhYRCRPZ5n2yebgwud83G7LjZyKU8uWY0IyrxWGleiwzQH4IPTDF7ToMC1A8aG76IWaSRJRbu6oy7baejAAhucij28jdHJQx%2BAXCFdmlcLV1CPfe80G50F3rvh5yoPynrsiXcAFqbd%2BjeeD4zlRj%2B59yETe57ugFFI3aHVWisA1dTzni70axKWzFMvzREIB7vUPY1wLKXcDF5jpfYriYnOekEye8GsMCm3lpaFsUbdjJ9QYxyiJgDyNOqz7%2Bmb8Carh1NpkLLY8XM%2F6ymPbwhJbKEpE%2BzntElj7XDhw4NFQA16WG75%2BTn4Po1xv05BMqxP9XgAjFsZEu8UU4B54gr3Xpi9i4Dn44ho0tPF4sEnJGApUojpQyddZ9qwGMqr84oiSRp5wwZ69uQDr0dfLE41bG%2BemGdwjuXkaC%2FCGX%2F%2FDrxMgFTlzDp%2BcwuwedSSBlTCCvsvABjqkAZCd%2FwP70RXoak9CjBI%2BNOrlqLbmYGH9sPiJzDDkh7s7lgF9OCvqqrZGfLWy1jgGvWbgl%2BEyDmcDYsTb%2FJoF9LAMHEEI1vU2CYEh5ifZuqNQ9nkaS61hJ5YylFmWf6WMPAsA292B4sVefPFVeNxV7vVHXUQfDTO%2FK6d8eKeGj7cRKDhrzYheag8OEDO4ocWJR4cj0NM8jPNNB5WWn8UbJ6xRTirF&X-Amz-Signature=cbcbe1dbb9dede6206a5824f7a5fc39ee786fb427b122ceefbade3a53df9119d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
