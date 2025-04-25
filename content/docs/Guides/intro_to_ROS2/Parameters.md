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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXW576LY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXuinTbrTovmOuv7tmalHIZ5vqlReJgYI5jvvrNCslYAiA86SapXy6%2Fbr4wT1b901EWPPd8pxMPxmxG2rM%2B1MXqnir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMDxSYrsSgfbHrdFiUKtwDnLDoyXnN3lZbRblvW8vDoydSdFBDpgDa8rkafzS1nxps0va2KYeEk6zEy%2BMZiWQRrgrhhIpcidBjdjYKX%2B0krJmY1jnFca2o%2Bbo6Dl8Etht5bh9x6PhndAy5HjGEwoJAx%2BFOXFLghg6xrmbExfnWk3I8Hj%2FfXYJSmWo8PwoWRQgwmqPpqA3870QdzpirPlm6GnHXZIIeIZmTzivpaAbfvauqTUJAcW%2BWAGByqw%2Bo%2BHt66xdYDKtNQN%2Fp1QdaWvgDzy8Q4WukXKVBRd76qy7DpFd6h2yNY5%2Fd8W1nHOcqaI0RMHlxO0AAaPSXOlTBIRz%2FOxj405LnclXKWQhYv6ykx%2FA7dVtrcwPMNjKWh4ndNCR7IztR3nCqrsFV8P4eFYqnCbsdbwMFxrEr%2Bq%2Fknh2NawcM7qHKjZh%2FsMPySOAG62CQyXhHbf4WKicVN0YHeWE8Ro34t%2Fm0kKR%2FqI4hyanDsxgXo9OYJYgQNhJKh%2B5XnK8OduFpkLky0jvlrtlPHCWNjAPe4Y4OoVMf5kmkGO6DswRcAf7wb1Fpt2ByrGdBSONGEqmMM%2FgnkDyIoqKfcmb56DHVA9ihV9704XSwd9ZJlt74zKpNUpzUU9Vt4sQtiM1kIxDfW9gN6FlQSaQwpsqswAY6pgGtnMYbzKnf5bUos9x%2BUCD1RmtDMn3YKWE7HZvMZrkYjciY3TRFfw3G0txNjAHNE8IJie7T9WPXdeEP9U4gf7Bw9MCWzmzfVaKfyE0DXOVvEXoa%2F1P5BntejxMRt6WHRHOOzOF3KpUIg4RqndfY%2Ff8cXZ5IQY6Wi51wtUv0UOFfgH2XunYPvwdDMI%2FinXpVVjTdnhlN0N3gNWfAEL6Qp1MqyY8JZVJB&X-Amz-Signature=fd55173fdf7eecf11fe0976036caa0bca0526e676fee0b37d66fc91f6c268eff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
