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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IUPD55E%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqqDom6KTOxA6Hbu4PYgPinjwJxnDbdM%2F509GOLYQOLAIhAKovw%2F2B0Uj2xyXFN64ztpH1PwF580Wex99hW%2Fn%2BTOgMKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE4QnWJB3LHo33ylkq3APNOhTO9cLO9fhYi%2FIwkv8a6pm7CrZOye3F4PUQsu7h5j1XKN4jwVS3ENJ0IZtsKYLjAjoPe1a38iNWAZhpzzaV9SQPMpXq0lHglrkojFn4B8Xc%2Bgrz22kuG7FsfKtxBDtp0d7OGrWaaVqRysWqv3ObcvyMVBn0KLNrOInRBX5JGnTzDwygQ8SsHuzz6%2Bv2Mak1Q7WUm8iF6bsvY2eENPT5XqECElVpyT7GdGQuPTdYP3XXR6Cs121vfnTWomx9a9t2yi0dNQb6djHUft2nuSI1cZrujb9WfAKSDf1XPf5kzG9YhAjrCBsYHxr2R%2FoXNDFLQgOwHIt7fcm7o4FyuWWAQbZXWc5IwTIaEQcJ7DNyr5Y4a1A%2BjUye6jIkMEH5zx78uiYwHGQnC9I9dyORViZEAv8XzG1a6JJG9UjjkFRz59B6FfrxF%2FMjw%2BeH7C3vR%2B9PjXsC3ksENXzOckSlxpC%2BmcugfSBMhsHdRJOed7OhsC%2FHBw6kfHEHOHbXRe5vapVccCTXOLcX6w3GVxZqGKbUu87c5F8sPvA4e0uW9aQWawYSIciNn0EE6OlJ913iYrCS34c8ATOKrGT%2Bi6Jzeg8jGoiDFBJDEWYyaYznnrZtdduw4%2FD6el7BBhoIrzC%2BhvvABjqkASGEQaZa%2BNGewt2qBN3wA0zYfuuUG4tdi%2BH3x7DWRO63fNSSipcjcXHwkiJhehLRkIjcySjHi2RAwtQJO2UPYwCPY3AYEem67iPewLmJMGfsdKfdKGuOiH2%2BCp3oGhk04eMsK4D%2Bbzwyvaqd34wA9579tA6nuo9KianHa5pq9En3f6aFEroHxTWL7daZT0t66klRXjUtYGtdo61gQwqHM3LtzoSJ&X-Amz-Signature=4b1e814c553e3ecb3c9d17b13355a5399198c4b5083e1957400ac799c8d3a662&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
