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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPQVEIL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCvsRjaNSvnyXxeGKKUlxm9Jrv%2FGcBG4fKYyqjtGPU%2B2QIgYy7%2Fp%2BhOM21OZQKGjGk%2B9P0m5bUpLVcQufsTPdCqh9sqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOzKHVxPlwV9p4yIyrcA64UBUNfkziG5xP9Ge6tAzltNKsdBixsSeuuDEOCt2CA8evCvhNoZ5nsIYTWwGz2MQ7peHrx79TfjD5ZORY9Cdj87GzH6zJ88JayXKt0TcNOE1cB0zU7Y3Lb8tUmH3lAQXcMN1T00VgM%2FtjIFVPEhdPy3enHrj4y%2BaFADgjW81zNzATIcmp93nf8987zSQOSiDJeOtJ41J0VjE62zUD5iExWQqeuhoDd2fbJcBm3Mc4p5yKo%2FDGnvWFofGuPXp4OmcFJ0CEBVtElX15d%2F217wcxSMlvfAeFixxpfPMqzAjiQOAu8jO%2FbjfBVUJ7GolM6FdPexcQKLTJvnfdly957frvH9RGQDj%2BAn7U3ws4a32D4SFBv2BtOTpTfnWxvv%2BG4KOZ6kwKgD3kIMWUgNkPNiuFrVbOYSxQy1D3uYsTSsotEbVg0aQI02AIFZW8R3ofkQ5FDQGwkPHGT665HGePfc5PO3u3sa8o6wLUt6yzrae0qW3eozt2mxRigFLX766QFGHCtb%2BGxLfoIYWjSepZ0Pmaz4tTPaCeGbjpzD1VXGR%2BQZYx498xNFfyfEACkdzEqx9DcYdtteyQpQjHLhqVM%2Fj5ObWyPoaKgTLlSDn5PpfDYp60Ki2E8RdZC12ldMMKgj8AGOqUBw5UmxxX4uEm34BQz1uVf3bTxY%2B2bcTHgjRIi26gEfJnA1ypAvKfROjOV100X0E7SH8m7ESMGFJzZC8EEdi%2Bw8jCpsZd6K01JT9v5v%2FFMma9RoZSdUHd6YKuLy5USj3GVgQ14d1OH1SJ63L%2FQgkXjvH12G5Aq16SzkNJ7ChnuwJt7YV29e20Kj%2FyHpV0U%2BnPHYizaoNECxNoxuhTP%2BOBe%2BQB%2BDsnV&X-Amz-Signature=1963d4db9f9608502af5cf15fcb2e6cbf28047d9a2ae217a331f8533b77e14ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
