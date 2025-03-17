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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I7H2643%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh7xo1G3znDfkDPRgbJZLKfJFxcHbScczw3PNXQDP3DwIhAKnLcewb8QRaE65S997BwBx3YQOxSCBLBSf6atIXb6NEKv8DCD0QABoMNjM3NDIzMTgzODA1IgyUGL2aADHkQHMkQCEq3ANUG2ZEoC6W7idbsZXQm0Ylx4UaA0CA%2BaUXDL4QwsgMqGiDaclpZ0Icdn%2BJyixwbhOM6Mj8EH8BrShzh7SF%2BZYbBiXdqPedEcjCvXmYl1ExDFSDrOjYUJnMqrCdBQhYwd6rqlYFlWNLTXEy%2B3ip7KHzQm0Mqv%2FLF8yOs61m4F9CHZUNnzT3%2BeOxCiIY6k5gILxR18kcUgXm8O%2F%2Fb1ykhqeEQiSOeOFBuys1ctr8%2BDm1p%2FYj1vxKA7zz4qp3P64wu8HWFSUUEym%2FH6fcDWie5AR9Cwu1xFv0qakdaj%2BFKQvVwfl7mwmj%2B5oU9sPr%2FMZn2WWjDaaSe%2Fa6kNTxEc6uJRzTKezVRSpX4L2XEiwllHCRtDzBnAmqO0TmluiOvq2EK%2FqaZ8KjtQc1OhKS9ptWB6PKidcJ9%2FKzjdC%2FNI86dp0cpkw2x7llyxSd5gZs8%2F2LIIpl7DstrwKAI0kfVG0LZwNCLehykjC6XXe4lxbjuO4v8f%2B%2Fyr1OqkmcfCggEQtnjdN7EQcnMjMXcr1jmPZt9MwU%2FlldtqMYPIMrNPY4fojY1wDHl12290e555b%2FE2FrFk9KRbYRQ3DFK%2BMuezfl8Qb%2B78gqGuH%2BtdMFK8tofEO8yyC0vchOyc%2FtbYqAITC0vN6%2BBjqkAV3FxpgSjxcp%2Fsk0pG%2FZJ6fX6zHSe%2Fbq5XqWYgckn5dhOdfX3%2BaLO85cck9%2FpBjBY2KHSKiTN%2Fb9UKJQI%2FDP9xawbYHo7seIoMAa1%2BTmsepaGg5bKDIim%2BBq5E%2BTZ6W2B1xH%2By8dT4FqrhwE7VPBqoEJMXGYwd%2FBnCExJchUPpVDb%2FfKtgLIhRihi%2FCWwVhyTzQmIGr4TiUv8FbRyW3M5D7NH86C&X-Amz-Signature=fae28809c95a410b062513423bcc38e970f02e4719cd75e0064e6e6a575c6bc0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
