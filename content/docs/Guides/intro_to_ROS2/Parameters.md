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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TUSNRF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC11zmAyxKLswkpqjrg6JfNejqaTcKYZ5PyE%2BmzlETc%2BQIhAMKGFaDvKXz1n%2BDPW19D9fzKDLFm%2FlQHSRxL8T7a1U23KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHeMFPGi3SJBAxjU8q3APm0%2B5KuVkbMjBjaGZSQtnRH5GRSkkJGMIVMpXEluq9f70wbxQ4UXGdV%2B0WWcNBG32osauHQhaowj2ysvW64iG2R3FfLq%2Bp%2BsloquTCbyZTDu5WgOHSZmLJsxhACOcJ2m5Fh1F2gXe56qYFq4LfN5uJO%2FwP%2B8K9tCD1gNoX6c%2BCcTrZBUG951D4eOzw96q%2B5XAtni0COgVtzLQ40U7uiBZkMyiGV5kSoWOKc8oLmMe0vJBneUDu66pgsw7XWao5y05sRgdJxS8J1NCAnYDjdpIYjpAsH%2Fc%2Ftm8Xf6C95jSfAe8UYXuoOOdGsxuFbyTSSsrePc%2BpcQnwL8MqYe0b%2Bgq0LYq0ORQ6tXvV%2BTjhrlPF4uRzHDiDZ6eEf%2BOjgzcEi0COmDaCgx%2FeRkOqmZeBGin%2FgNZgqy5VyWrVklM6my2%2FfsFad2CbTOJSSV9sUtPoMxCm%2BeVrNxKc9z7BSRLEFxTY6SIrUdW8%2FB6qCNcMGUBeMZELrGTIhPp%2BjHrtIRF4K7eMbxJgONnnh2W6iAZkbY%2BLYRmfgPPfdReuVF3mvAPO6bK87PRmYHRJsfWIajWLgePW%2FCWAec0jYkBiL3h1FQLg7w4GeveblClFtCJRpIXASJB%2BCuqeXNUE3pzAYzCFgfPBBjqkAc%2FNQPcphwBo9ZeQ2xDm3ugxcBn0RIYx9wOwKGQqUS0HAOh9Hl02GWlAjZRBVU5LWFlK%2FJ2IpYrv8tILNXAdkCZpg1bC8QCmVKk86OZU2f47uzLQF%2BCHTZr2aGc%2Bc8GaIZWBEbVZ9pmAqrgn3ORdtxrroa%2F3NtJb3BJ%2B3QeOaUGOJCjcINtG2%2BHZjFSZrGFqT8ycSG5RDIiS8jqAiDirizVtTez9&X-Amz-Signature=4ab2b18bb85954a623be0e9a92bf488850bf0cb690e07e4324a67301853aff2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
