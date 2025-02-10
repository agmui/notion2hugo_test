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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPG7ILN4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdxMA%2BSzjST3oXzOI2KhU0ranAF8%2BQ5OnIh3U5SLoUqwIgClMesllT0v0Q1qtIyZFgW0%2F70eu%2BULXWI4h7AubHqMgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMSG8%2FcyzAA0ZZxcCrcA8D%2Bz5FUVC%2B%2FKhXEa9vL6f7C7VXKrj2qy%2F%2FuHxmpYgxqZEqCtkpWen9q8vNpK9jCRlgKg5gqrBj8UoppoGhWNGE0OjrzvDrPMCGB9AyPwiMiIcYcw70%2FyBRm7Z65h7vAneUwlNGXTR3D92nluHCsHxICkFh1d%2FRX%2BpKi2zFvEKezS9pyfoW4UUM9%2FUf31h6RIFnjO7qeoPJFk%2F8mwC%2BzVTFbUebKdtK7gaMxpxfTPbkR0koW0vhA4rHF2osxe8wkNYAUhagqYeWRGmBj3UFD1BIWAL%2BnnjcfLXp7n6ZzLC4rUWMLJ34X0m9cjPPixmoaEkZZP6cTUZ0OLVTmddf5GjQ6ars0CgKhmedeW4REeAyk%2Fs8biVRNizgQxNZ9BmNVbGC%2BfQVGBV0zbDVU3KkAtEI%2FQpR%2BxJwWEk7Dj8UazlSewgw73NzzmbwpqPkCRwhGHAOEFrinqOQCfa5rz71I3ne1IhJ31fIC0fTUzKgi0iTnqq6MTw3%2Fvbtrq%2FBHCbnIQNDhwXTxeRgOwsZ3R%2FV3MVu88dxWO4pQLedoXmisqe4Ea9kW0bDeFVV0GxA5GH7ygywIqb5DoLKypdw3zkhx6k4jIlkuU1r30UeyGsaq9V6py6spbLc4AzjJRGJwMN2bpb0GOqUB4BMdkr2kd1vgTZXLa%2FGtx1B4s8P2qyNSObsivtm%2BxbScdmrAoop1v0hsemOKbrNKNK8fkxtT1keCZSr0DsNIPSuI4JC7xm6OP63p0iJBHgz6vMi9Ih9D5%2FSv5KI9I%2BmZdKfdV7%2BYRI7156i9haAwD8mazyknrNx5l5ENjzClwX3Rm0TE%2FLsM4RfqQp74e78bvRkusUmHGgOm%2FbqC%2FH%2B%2Fh6Us%2Be5T&X-Amz-Signature=6cc83b11d310b249b462db16bef594d8250b6df4cfc4bceadf4d09a48d6c49fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
