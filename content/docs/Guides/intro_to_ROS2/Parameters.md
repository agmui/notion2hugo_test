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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJG3TYRJ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFagUAlqZrAmdXnHCBL6RvZxvuq30iIhYPxzTOsIoUTYAiBdpyRN5wuqQjVg7fP0%2FihwB98Mnyquaw0e4ibmqJeZ1yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMkZwQrsYgH55Ex%2FnKtwDLW3%2Fz7fRTHDzcwG2vuAuPv1JfzyiTMvFUDx4lXrK51fzdZebZXKcMt7rHNtBSi2Q%2BBSME76BILmYEU25YeHHZPyOAJT2lFbWgZ11vmu24Myl%2B4GrSPJ1Z6QP4YhmBCcMBCeSOL7Hzv747LGq9tqe%2BtKzuNk4F9z%2F8wR8sWz6mXlBt4Wug6z0lB0j5qQYts%2FD32tm0siWegFQhkd%2BM4hlyyN5wWr5C6Ju7r2lb%2BisU6pIpn4bW4gO5eryTZUWIwNpWq5ad51Die%2B9RMUnp8srVN18adVoE2IKP3zkmUuYrGaKzADu7tEOJ8%2BpAix4LLiQ1byoPHP47l7GC7Lq%2B%2FeigLkubg9cxXXFQsZP1aQVuD5Ijh3hp55i83QF8ELAz0F0YLK%2BTsV7H0lkGd8ahdq5eXA%2B5k%2FaeVYPaQahWQufvDSBd%2BTBvymqLJbYqvQ%2FWe571VIdXc0lsBO2R6wLMa5J2cVEcYRkBSO4F3QFOKvyaWZaw3RXoxcBhNcdDoPgaw5XTaFiZi21Jr3d7TUb56BhHQaqwVIENlN3PNf41TkWsWvZRaJwqNIFQWMbhCzAR9874BTakIov3u35rljLK9i3X6%2F%2BuvmCxkltCqvIDRCJDClkK9ci%2Bt4hUzTvR5ow06OLwwY6pgFBmoFHy6YvW%2FNs823BshMwj3dv%2BcvsSXEGnjzHg2Bic34m4RF74IzZX3ezU425dVXh87KRP5gfYtNUHtE9GDt3j%2FIJZHC05sZePb3xJHLxEuD025pFKc4%2FCZvUAcXlq27%2BC6SWiokgrlYCrm5avMpvgsFH3OR1ruTjRxJHBXILu4%2Bbf36ERvrq%2B%2B%2BPZs%2BsooOa%2F8IqIO8RtLxiLwFe6yW2RlgSW4U9&X-Amz-Signature=2876761d2b2110a7629ab2d7a14df6fd05c9a6d5063923ef37cebd447b46f6e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
