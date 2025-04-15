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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSGYKSEA%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNKblaVmmVjqeYR7xsI2Em71X0GA5lvA1%2FB23BxxqnUAiB%2F1N8V1m%2BQgJc1iGt3jecHNEZoZUwwrkjHxfIV8exzACr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMqwTmP%2BoCMyV7VQiSKtwDgUcNHZdqutq1YzrC%2B1u%2BNPEiYP4vsn7OX6fLV3L5ECFcvifYpkhnlxD1Bhgy3d3Z7EKjLbzLpOr9E7%2B2omFlve738izNw1oO5AnSVX1m%2BlOVbrvDtSLZiHUQcKqw8aSnTsGYMu9N8JUWxReKOQh2I5ifFMu2kTY%2BXFrHoL9hLoHltv%2FRJf4oUj8k6cGrjhwhLQCPzg27nnVK6HjDaUzJbGTKRbmJtNaNLbebylv%2B%2BXXTFwwIU%2FZadlAeePaCQiG8h7rZP0OzavVfKZpbPKj41g2PetfTnETDOS7YUhudFQ3EzTCJ9%2BUH8h9AXlNzm5FS2wpLwu5CptQ6BPPjtmdhBTYa%2FjRwRjUYumjObK8D2tS8RU0Ff2MWSvTddDjW3KFlwV6PmJqkIKFAQIuYpev%2F0OqzXv4wH2gE45BV7fF8TANkwLTOKoTcCtshHNuDO7Z2cV2J9hKKok%2FWbtagLM9QZUKP4Wj%2F78Mo6IRP7vRkqWnAFTo%2BAf7Go46rx7I%2FEhOZI5DZYCycmEBMiguNUQSjNVivEgd%2F1prNRquIKHpnQ8s91QuXioqB0%2Bhx%2FXI3OxzVI3joZRLHUpZi2QFgew%2B4i1MgDFHWmVW4NSpo5BYVoz14rVQrz5Rdp%2B6NwMIwqtz5vwY6pgEwZVO8S1Y8P5p%2Ft9wfXyY%2Fdntx415QQaAsaKppdMLj1E0%2FwyNrkXxOrZvZZi1mHxiSBUtVsfGMadUfXt24qOU8%2F7bMNSOG1LKqODXhIKZDRXJuoR1Tr29arS8uY3jyBcrWYW4clL%2BJuusFi%2BXNPMNcWmEwAULttGeAmy%2FgNxszREeMyVbsIKPJ4uBe5tmdlF32uwrtbM%2F67sT7EOMI%2FnjNi1VVkmjL&X-Amz-Signature=0998679284d82f63899520eca999e5a2ccc1bb471ccf1fce2754bbed14ca0eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
