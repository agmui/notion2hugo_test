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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6OIJVO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCXSMtXQlEaEVOfiCG84BIohyhZdbZbvTP7IOGCkioNZgIhAMWvG6OH7XMf6uYAp441XTh%2FHn1Z5cIUmS%2FpzGiGfTonKv8DCGYQABoMNjM3NDIzMTgzODA1IgxLUcX1W%2FsrVW%2FR5JAq3AOD1WoSwfhfkyJF%2Fl87dsTKT4EmvEgOe3jTrW3Bz0b1VEkE9rj2lWEXn3GBIbYeD2SSJSlU9%2BmdoyTM5QftavTGi%2FleBWnmTRu76csAbX15cPdVyCvEbmslY6zyVEBf62KxoaviMyfd3po%2FT0V6glPsPv6Aj0J6KighO7qsQytbQpQR2VLOJvKptp%2BfjwceJCa0DBrqS7vbpDDulMBphppJnY8d%2B7xc1%2BhM1EmWpCkCMsnGQuZhyiWBNYUGiwlUHdsPhmtNs1NC8nlEnb4gF2X31kM8KPqkLnQ6Dta4USmU5F78QJOD7HlN%2BMl03DbaPpvg4jEaOmw3N8s80D8t4fy6o9L1uqBggKbUuD7CSLICybaB3LJYuH7oobLTqpAgez6QmhtFdOZPs5m%2F%2BH6178w5GDbuKCjDMNzcj4sCuXIhHEU8CggEjPQMEXczhs4mY7kb7F2Z6x6Wdio7EkjujZfeD9ThVsomYs1gMZkBYOL5vHO91NKIQ3izABVeMR45wk8L39qS07qxWxifLCGh8MquqrOR869SGWh6DN5xfFGays2o%2BZnxl7m1vCwuBJLNjFDKs9SdBVf6PUDApzseaqLHbyT0Chx8Pt085uvhFIlX81UwtMqFZ2%2F7oQr2IzDEsOe%2BBjqkAX0RG%2Fo7KnqKXXrEbimXZjoXHiyVKJ5oveufEaqm0zg9erxBLKys%2BdwG9RSjozpiVhepwB4K%2BocDHA43tJ3afCE6XdJLB2qGjJSxTNZUVswNq7vwyTBSv6AsapkJf05HtMgzqlr8VWr9S21Rph34fjIz1%2BOJEBVTEl8Dc8SLPWIHmyRKrx1s%2F%2FjDQ0PIBSLzI4mEteAy5ycpk45rVvFZO95eotlp&X-Amz-Signature=1a69b30d118f11b7b761954c19f6adc3aa0d23ce334fcc23566f47331fdf6137&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
