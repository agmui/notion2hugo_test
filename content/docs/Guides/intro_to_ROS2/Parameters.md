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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5O3JFN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDY8rnGZnCId96E8hXtH%2FMgzldkRSTc29mLukv4skKjNAiAEu%2FyYjM5eUTMfAjfnrjIEa5ck53gFhLINtODEIu7q1yqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbJbsu4YjV%2F1FD8pbKtwDiDVzIwQp2virWQie5LOHPB6V5z9fYPPIAsJU8Den5POZbves72A%2FEVeA7Yb70wszNCsLHDpaB5KEM10jkVQX8DdO3iLrSDxtQ3kyRODVZOI%2BEPS2tKu4j9kBmMz0Kl1FWOGZtKFZ4a7pUT3ilHT8p0YtrwKVMpxoxBtq6aOrGUBXdK31O1sf7S%2F4Omrc4s%2BjKbFek816MSFKp00b1Q2Ko129TekE5sRSYdDVJ0c6z0SME7ArKgupFEsBi13XL7GEfW408PkOBZvO%2F%2BfBG70TiYY6%2BODh4R4Yxel0w8UFSJQsbNpQB63eoCV07%2FIaNfos4SdAVwE3J4QpwQqB2wakfLILyd4xXS%2FdFA8ETdYGPmi4H014BrXQi6EgH1kds2PMgvNqoZGQAq9iAD2gDy24bxVyAWB4R%2B7fXTn5q9L1FGFQOHFK2csczLJ1Y5e7MZvxj1K9bY4JJTb2p2gQWFSHr%2B8qP1VZDa%2B%2BP3zm5YUl5wRxKbqFSpdOEShKf8yg067ja4Qv4bCD0ma8%2Fo7phCjFKbZjvYj3rE98D90eTBk1AvUG034C%2BAPCwvyl1ntLlWkH0UHmWNst5GZWuzDy%2BQVWFRkJYk6P4dCLI6CoYfAade75dSD933aGM1%2FBptUwnO35wQY6pgE7t2YsoDGMKwoRV1CVICAIsyFBwIHaHESTSnXqxXtIjruXN8k0gmC3azGYbCcNrQ7oxbGAyrj%2FECYOrO7SXt0fjWB5CwJAHK09tfpMWZmTrXXA7V%2F7CL6AdqPFDr5QLw3gW0SouBYuiUXOs6z66POYLzrUGcZiHhYjeDExKhPvgoX3aFCr6RDD6mh7nbaJCXjyfQEJ%2Bq%2F9P6bcRMyG6eCpbk3GFC5V&X-Amz-Signature=1ff94b1214e988ac7642a79fb9a218b60a339a92f4c6063e06bcf53f597bb090&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
