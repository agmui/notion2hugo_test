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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZXRSM6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8WxFda7saWPkrVCLBPFg6VSiD%2Fl5NLLca6G2qabJ%2FqAiA2lge9ERQ8HPuTasghjgLZASrAoRRxTCDLITcSBG3tFSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3YaRRAkmXg5GmtB0KtwDRciV85j7UsIql8b2LgpniCRh4YGN9QQPuf60XbK2wNKGyN1xSqw%2Fid%2B6NUXmlf1zvZXzWvSjSFIztGw%2F3St8x5%2BusLTOkrrhJWz%2F5Kbh%2FH1a%2BBTgTVRPL2e7YH%2FSVeb2hM%2B%2B1lf2JUN4ML38Xwdwju5Zn1ub95l2lebROl4xrxvovZu1PCSQqZYpAWJCWVLW%2FcJdS77O0NaapGwade1sJ6j6CnyHULY%2Fvn%2BgHf%2FdoFFjLUISPQy7eOsKwAEfx5GU1uRhnqlnisumQajV7bQm4rqkxaRClHlgLSCYlXHFs07X25DKG1xLj%2BQxTsqGrHMsGv1OJxVA6MbuNuOXfSIf2VuthXW%2FHkfi3FSDBzMdmeXda9Pzvh1GKtubwnIi0MaMvv4DjJN%2FR0d7RQMko1Yu2vtOyM0Pb%2FYNkXe0ZeyO9ZV7%2B%2BL0HQnyu1nSv9rjsa%2BEVTcUECo5RJg5jP1PrOWvNVzN9XOQdBxFpWsUbopOotCdmrR1MdJAChCB2vV0LGc00ROfU4fefMAeMvw8ubyWALY8iMEGuSYg9iKdxxs2C1sPJe%2B%2BuabdOHoTiT7iFMzkwVSSw1ZrNOBq7z4SUkxhbeZ1bI%2FL%2F3%2F0iPabHFRMvnp581vsAMjwhNsk2wMw5IaxvQY6pgHMyTkGdys%2Fqaly%2B62uaxZw7sDFWS0M8ITeTwUkuG%2F6I9aufTQcmTOV1pOBnjZGD0SbMPPh5a6Lub7Z9RURx%2BsfP6hmVHSoURTAlnb0ViVT0XelfIHqD1qcNQ92ZxIqLFVNMJfOqh%2Fwo6R1cJG9YTRoeycqOoTLr4NCthSicqIoYdVCdYnCQCZvV9DdbcZ7jPnOsjMK2uK8UqcZcrFeSu4v7PE1Pmdw&X-Amz-Signature=5ea8ada64ab0ac5e4dce237401a1c9db57421afa71ecc96047bf7c829c602f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
