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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YGEXDM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ0HamjDnDcqjr30vaQTmtbQOnEbdWooPrwS7XsZLToAiAe4Z2qbBruh%2BxhzFqwTxZZcWWb8y%2FcPS%2BdiwQbvlr4OCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNHLaFPRerD3Y2AGKtwDhnXgUbBX3SLgS%2B5qe9OJLFUDKmlw41Y0xC8boI2wWveEmMiAOG9u7jiSbcU7sMZVUYTLhaxLqE11TFGM%2Fa5ypFn5%2FQGzMauW9a1EBCzM1AecvXyfK%2BCzwWu8t7INiDUj5jcmOulfMn8p7CuUhEejJ4850k6NTjz%2FJOeUTr5WXmKlN9w8HyI8QYWGoqtOvwrC8LIe25SR9hFc9EfszglSd%2B6N5m8%2FTtH%2FIls97zUjsuVRV1%2FXmeytHYVmKZLkGtzDSmyG4mhsq4gzyejnzayiNgic%2FtoaR6dYUMk068qvQzGimhhnTbl3apRRFd08DVohqOx69wfaQzWuCMy54m6qzR1W1xmqAXEHIDFmFfp3V%2BQvRG8PQG8JCFFodIuxqclF1%2BW2EzUk%2FyUCP6Q07nnOqtg9zv29J1SeR%2BKcJIYt8K6lsPWmjmx7ysLmS9d6fPIuFEGyuDzSyXdXY%2FkH0n3HJxpkQn1iaxd3QS57c4SqRllnZFWEc3SnD50Aa0DChBpqIQV3IIO3y7h0kR4q0%2FbqEJFRVmO4KlaMzM54KfuOJDPr3bwa1WlSkefEWz3WihmrtRjO5BH76Rd%2F5RoDRy5y35wiWl7g9Z%2FZKCrDpqfjT1Jql3lPdCApS0SynIkwnqbCwwY6pgHIWdY6SgO5OBknp3r3Kul9zKL9OnOQ7iau55EE8xclPHX%2BhAymY5dlGbsUxDE%2Bbp7jW1y2UYKSvdLYXITiXfAlwO46BsYxyKtHZsSDOWyhUUZ40A9eNjCs423y5%2BhhAwhTSDOBwLcf4t%2Ft8ANky8XgsMIUQQuf%2B1cYPBRZ5jpdZ2ZJxWQambYN2NRRzOxX%2BUowCAZ%2F3THLUEkmluWi6lKAJ3VTCj1j&X-Amz-Signature=d0e0d6fb4a94edc63bea4dcdc8d9c028da99bde20fb2244c4435e1c781f4e903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
