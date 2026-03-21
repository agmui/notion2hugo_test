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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVY5UKCT%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC0dZCi%2Bilj%2FUVzcGax13hekRg%2FOHmmFHx%2BstD6K0bC1gIhANIjRN%2F7KHBl%2BS12vcY0U%2BiVjiAeGbAncCL16LISLAhJKv8DCD4QABoMNjM3NDIzMTgzODA1IgzjpAF3LJ1cb1l4IcYq3APt8QaYe6hLfKgowFVKcJmP2S%2BKN4bZc6vs0XXf5f18yv3%2BM8AtBDSfhem6GS%2BIYIjQFg8u5zyJMeMUdhNLbkXW9VZuOlAVJg2hQ0SxNQ4OUAG2FpPJyDcJEjGdOFeseqaZjGCGhyX3FsbSlbsraDh3IcZq7Xuo2DNn3eeQCoA%2FFGZc8qz9RLeBs6lOx3RBbIJythDuE0zU2AAwymbp3Wb1ewOSZq7kKf8oKl8%2F4C%2BejUwwPZpbIQySTM9s4q3uDLod2UyCPr5O4ds9%2FKvu5IRN9TLogRPJtFcLf%2FfYYBH2L2cofqrleT3j506cAp3cVWacAZEKtnyE0TQ47Mx5JUHxZ8gQw9X53V0CIly%2BkouDrsgbyt9NUKF2n5SxMdTU%2BN9O%2Bbkdi1YL1M194JYldD91KOUWs5fMO%2F2kEtdCzD%2BhaI7XAkZuKOIuYmENNwe%2FS6cjeQO9EOGQiRDpaDzxX0%2BNAFLDMHMkFr6F2VxPH9vEZ1KHNBxLiS2NrnFTNZ0CYehee6Vv9foT2vm5wtRQGoCTMD51wB6OGeXkc8Hq%2BxcsdPC5%2ByG3EZaUhhN3hvXd3ut%2F3ir9bzLUTj0mgvmade%2Buliu%2FZcDPvkZjlWGwDqJk8XJMOqt8WlM9FypAvzCO3fbNBjqkAQFDJmLy3xOaLqX3SVeIi%2BxT9Soc3V1%2FPTyUBS%2FHMFThOYEACs1do1wGp2FCPTY6Zw2VJOZ%2FwVfBhNJ5ncAIvuWrfCHIhLP06V2mP%2B%2Bc5eCyowh6iyYzo8EgGWVNlw7B3SF9%2B3mhIRpcZUHtEnvFvG9CQtDqzytiK%2FafF1SVxAO%2FyTkJCun%2Bgp2J62sDH8h9MY0UFWg%2FE7Av%2F9gY6voO%2B2bn04cT&X-Amz-Signature=e65ec1a5cd6cab20e2b3ece488ffac9244af66dfdbaddcb2c59666a4d9309e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
