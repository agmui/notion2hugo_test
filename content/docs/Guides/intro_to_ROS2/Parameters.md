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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7XWA3D%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3A24Me%2B0KV01PdDNFKIoS5WTsKot88I8H%2FdKmxi0beQIgKaBtuGmr6snjGifwglaWIpPpJwQ4ehHTzEpUo0h%2BuNMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNKbntztJKd916bhCrcA%2B4uYxt%2Ba0UyRwbPdrynWevFfRv8rIa%2BpSKMvQ959zdVQZe%2BCI%2F5CNXpPwL45VTxMhpJcjokJJTIpLYHBoJQtHCe7A6DgrW0jbNOGkaAVBpKC8pGYDsynuadKewlBqC3tgj4nbLoF1HyThjOjv2J%2Bdp3tsP8lHmnjEpU4IXAWEo1lp51sG0BYzW8dyC%2Fu5LEF34yqhDuXxubZXwaWzFA4AAeJPkGRXQm%2F8MUYcs88nxIOvVd1TXPW8pzBIq8Ky8hrNgbWU5BbeActvF%2FZwE2hKMeyXHR5EewYwskNtUndXe7E4IYI3otNEFHa3N5gp45IEl6PCc6xxi9lZRW7hu0onFDyK9m5VCIJf2fFpJvBlrLSWlVVk5l2q23rPgpxZc3UVVXpv1l%2Fn%2BuhVjaZpXDOGX3EBi9LByHpz6VEOoGoBFKmNmXaeYRfloBnuCh%2BsCWRPjhqS7rB8BWfC5tIrI2Wwhwfn4idVe1vvJjYvONS7oZD2kGRhbnhiqrY8ykYTl9XHkynlqsETAe1mFgVaNtBsD0UTuXecWmiw%2FmJ%2F84ZSDWQPXi%2FO%2FE0tVuQHHxNvM8T1Bsjr1wTNkV5WtItDdJWoqs8ZoEWUoXovrHPDVFPIjSqksbJefH18SQs1EdMKb%2Bw8MGOqUB7XNRHaaJEh0rzCXn9oOt%2FHjZvSGIef4oeFLyszJwYbjON9hVn3w9Jn9j6N2zofIr6t3X8SaV5Q5SCXykU4pwUyN5N3%2FTAKjHn4QOcFTLUvJTzLcUoqP%2Fd5o99MDbhjPxxGj4%2BRdhaIDGqi2Yb0GHN%2FxS3b8KHulIRDNPvqb4qOIMnu33brPppvsGt3ux50%2BrPERDuGoj3Q6%2Fs8FvUDv3so9AaftS&X-Amz-Signature=fee02dc930ad5187807d268051105efb299f2a18162b1a08cd6b593871ae05d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
