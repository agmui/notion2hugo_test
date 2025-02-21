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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XZCIIV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyYgs5HARpRl2axrTW5iDOugFuGCphTBDhx8ty8DOU5AiAy%2FRZEAV6bhdybkN%2BH61BQ2KUjnaspVogrbs1AaFtC0yqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmiTaoZY8UMMxMTRWKtwDzrZ%2BKTY%2F7u3aBimd5aXIkzk%2Bc87dwSYpTYHxCrGLsaNPd%2FWxTdIEiaWw%2FYe4%2FS4lnmcnJ8b0iI6qRPL68jNDH37q8GJ0ZJozfq0GaGByGEdjc6tdNPswQFc60v7MGkCLVOBDXZDJkXIy6iH%2FAIVJZCKkYgYRv5%2BElddfG93oZnjQfPMSxKoQHYFdiCbPAxSrIYpyyv%2FeghmPHN%2BHechI3bXHUq7wt8Sr%2FD%2Fv%2B1FvTdg77B%2BZcX1%2B2PHJ86qZOaLWiCgwikjCplsFhHuIGwbRfPyADH2%2F1IB1KOjq37184GT6WzziH%2BTYSfNLKT3y5lOyxyfwAnkMe1STvVwwiQok%2FcpaTpMH8MhbMSnJYpgLqb1JYuZfSV59GNqhh1Vfj8khAhY56P3EB2EiYY3DCVXGAgU9bAvbJeIjTzKnLZ98nn4LbUddLbm8F7dBNewUp4PcQU8artBnZc3wIwT3dd1jQhD3K83CbQqYDD%2BrqqSh2MkkJFoFqM2klsd0IGmHiQDhAN9kTILUmL8AYXMTKCYZlCpPENL424%2BX9EuDXEOv3VDS%2B%2FqI%2B%2Fh5%2Fn%2BApVOmHzYL7qPQ6aGFK8%2FH78KMT9kt2101UT%2F8ctR3AW7hF1F6DJntmr1CRfkm9eO1bMIwuoHjvQY6pgEplWfB%2BPkJcY4XdtIIgrDswFNxZPbYW48rl%2FikOliC%2F0aDSswKi4kYWPiYVNGXwVit2IxvOkEVWMo6fmbP1KlElgEM%2F6B7ioTEWhA%2B8XiqmGWE1pXi%2F5HEqaDg%2Be329ncHWEeKyj%2BBbrSRw08qm9f%2BTwkQBVa8WEpVeDzS%2FjDXtmUZ2Mb30Bci4XfzFK2Xz5MPu9ZTEtsHsUXHQX%2Fc4TeItgzW9LZ3&X-Amz-Signature=197f6cd85377b053f967aed74f9d517aae27a6a875b644a657e0ac5055cd8a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
