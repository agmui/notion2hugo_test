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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D2FLOG5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFBefew6CuOTIapnMeqXOJD6dRZ7QqeCqw2koJCTvYN7AiEA8U1GgDlKqcRpMCZmJtKCtoK%2FXtawC2sMvxE3xcNeVPAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNSNSPqyXrtEbb5O5SrcAyQ9X9N6WQL1SZL3Sxb5IFOSWX3FLAqcC0vzEniwGne8lLf8GFnFZzwlFuKr1dakxbIAcisz7iPJ8NxKTZ%2BCwHn0n4bHtHihg%2BCmBHA5JCYpjKl6tq4L5WrV2hROGqmUK7yU5f4nGH3030iWYhyQ8OhANPCpDzqCIifyDUxQPTeGx7fZ1GkQeIRgDlNraKxSDfIPyQsrwcQtDLtAdQ%2BlS463AT4SVmhrZAaDN6SbK8u0Xif3ri83qhpwOak2ZYhef%2BHJFCrJ%2FqQ821mSGDawH3hc%2F0%2FRShpm5XpHRcZ5vliYnlCrMSK4ZNzGjCnor0Pyzi7CdjDtdErzY54P1vGFd20ICjlOijv%2BjSlp7zB2Ek4dtgkkf65efycxgRCg6HyKwkZXlgii64DCenKDudyrnYEcccARrF3zWpFpYIfLb4e190lgtvyWY0CimwIhvyiLzZGSKbmhQ5oCeZCIXWRXL28xc24Jt3HQj0nkFNz7gju3q2vDQ4%2FxlTp5nEdEZ6E%2Fs9GkCKa1fJQIDYyponqGXexAar6i4VEhsdJOwfkrtYGbEWdw0n%2FlkvV7wcLqrd2IBwwjgiOvGbrTLjtl4doAbFQHjMI4aSq0FnFgtw7Uw8UdqVaXYvGEZkJy0pPCMIWqqsMGOqUBz%2FUrkq5Ayw6sjBBMNgSBwQf%2Fu34Z6LfF%2F8Mx36SEZSXGxq95PGDNn2oPtrNoFMwPKQxMPl2iwhThhrlULMSXnxKtsEguhekHxg7rxvoTUxaNLxjvvsaBzr%2BJIQHF8P6Q0W7beRR9u8uD1P5%2FxNxuPHVjRJifsX6HflsAC1glP78r96jgr33xgsbDXZAQUddzBUmEeMgMDCYQp6QHmyOraIfssZLM&X-Amz-Signature=1c2b59ccfb1c9a0b65cfa855df6de368751d7bc4faefc46e67dcd9a5d53c883c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
