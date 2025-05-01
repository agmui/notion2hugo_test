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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KZ6U2B%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQD9YOhV2h7bE4GQ3sT%2FKNPOYNC2rW4OKdq0iBHuTrhobQIhAMtdurWwEYZBb6fkkzRSQ%2FRr12dNTnes0978N%2BFY%2FcjEKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIBK08sWTp7tXWyxoq3ANOagwcTmqnpMOqGHhUgfaeRWfG6Ms%2F7%2B9mb180gyvxpBGQzqV%2Ft%2F1uk7d3JWSH1Z3aklv%2BWXIf0mG0EFKywqwB%2BU49vg%2BO80iuo9a%2BGVunbfXlmsP0QwGYOshMDnIe%2BTkq3wYDokQvmjbZXmGKe69jpJ7jL7jrQVydqsc3m1k97wF%2BqBsgREdwyb0fjHen4bV4D%2B22QW111njcXwFB8lOcMNx0Ij8jK2TP2Xge42UGLegtSe6AKQTw72etQ9%2F9itPyW6h1BG6XSBU1EVOC1RnvVmFLGwbyFVUdHiowSQG5PjJyMPh%2Bmyxp%2FB9pt12VGamec8IiEx91NboWjHkh3sTfchLzF01RkdxWOjiKGFQ%2B149mN9C%2Fm4sQSx1HZD%2F%2BDRh6eMIvsYRZsoQGotuJucLtPm3S7UxZb%2BMvZumBLX3GO72Gf%2BGWcgVoqE7JoJFx%2By%2FdqhKeWcq8fEw%2Bd4Br2Hhi8VxPlQZXXvd4gnW3H1DRM1OUjFq9UdpD7K%2Ffs3rX3xRvP0M1cgYwdqoGou9oPT6NvcBr4PBv1jo5Zc%2BDqQ5FL0HZLbqR%2B%2BxZmGB1x60s0ZUwt7KGVBTapjhSZ7P%2Fi355O2k2yYzcLfM0TOBix6KhQO2dLVPFUHYXolz%2FqjCB9svABjqkASYrg%2Fwod1zhx4gxOgHxQdmpty3Qt%2BU7MyAnM4Lqqj0afinjrNrpSiTWxobWA7Ws05vXpi%2BGbJZ963XJ%2FC%2Bf%2BxoQVhkbXRL9SRh0wgazKl7PkAVoeSinV7VauUWbpbWqhIMHKsrzWi8VDOoWOdeVqePfdP6ung%2B8oMJ4ScTHpNQkbIDGzY88zzPCn4igJwnoHR0ehbyFIRvHxNoFzjd7xPDkSKwE&X-Amz-Signature=83ccdbaae1d423bdbdce1b0ae8717c1551a8ad9683da8f40d59c9246b0bccb47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
