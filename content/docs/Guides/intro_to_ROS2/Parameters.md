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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRW7Q4GZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIGHaulnFbbqtZb%2FjxNCcnZrliD614atSbnfMnhT9Ah5lAiAOMtkvkmuFqSN4YWjpO15VP7AbUvbkY2WBisZt9D%2FeASqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FZ9iNSoSzM9n63ZQKtwDHRn5ZRJUkzjfYYgC4SlI6jM%2BvGjlytfGrYwag7PbnCpI5xvyTs%2BA6HzqhJ8wDO%2FAsQxVxtpkFiPyFw00pSZqN3DDO2t5CXUXZygl6cGWMBG7YSjadhZ8SXe%2BqfcUY3xMyHjFCA5U19MTGb%2BrNJq%2B770A82%2B3k5IfxSfBbtKmi4mE6cbmqLZqITxM%2FUOQ7FuGg%2BXJnkVCReSBsdSEDz%2Fu%2BNlHLGNsX%2B2ZIPMLSQngMEKFp8XH40j6UFvJ%2BtgYDmHrnV6taUDYdMNvUr8RH1hgQ0%2FG7qYwh%2BpaOo5qHToPCfWDfMQ%2FIoRLG84ZTDFHYzXSb6cx5YAGjVZJw5nRb1i9qh1T%2FizX%2FZvLUWsXfu%2B4xaXk4qiBDhp8XRFkxWUr3tl%2Bx62GmpfAHlaEgA7Lz9wWGv4XfSVGkf75y3Q6jHoNv4tXQc%2BKOFflsFB8UvMBUoU4QDS6csa26Jn9baygsbl6dLDH8%2FqoHfLradPOlG%2Bu4N0gVCVbDVmNJQOKOTLngWkxFEfOq9xhv4raz1XkKpOYEjw0%2Fe9Q7KPYzHHuSHK%2BaPZCUO1%2FOhc2whsC6GR4%2F3JwFf6t6YydGgpCelwCNX23tTr9JGaQC8cwxeNibQIB4IR6YwcZirWOjnV3DHQwrsKTwAY6pgEOe5M%2Bv6AWZM24h0DPz2wARFIBloy0i8F%2BaQIFTuYhIMvzjDesKSY8lwrw%2FRvmXJvYjOuRXcCOqkuVf98L9JSxsQYPS6M7YLt9tAjGHK%2FuD9Lme5XMuBK0PD6Eo2l72%2FqSM18xcpeAPTTWRD3lZGOcI5nJhgnhnq1zgAFt7CX%2Bin1d%2FYjoAk2KV9pLnMLHbj6UfoF6ZN5W26vuailOeMfIB0D5Lxe7&X-Amz-Signature=abf827296791a49c3aea9fd9c3189703bed067d1006d2440473cd6bceed39894&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
