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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJUGIPM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFe%2BVQIUKX5RPOlfiDIxza0KwbrtVBjy3%2FcsVcvenFAoAiEAzbcGFKiLm19nbXUZNQJ%2BJikrgG%2BL5wlrNJM0MyzIGZIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAzGIUdwDYcdinsBCrcA1Cx5crhF9GWwgpbAfn0B6QCxXxL6jURVzCWICo%2FtUx1I5KxbYDaLWu%2BlB8jR2N0Oz2trqeCZe2nYRMrrl8j63x%2BuEWJgxCwAU5UA4%2F6JNW%2Ff3y%2BZCxibfy47I1iMN1gN5s4mr70BAzvZV0d%2BvhcZp4m%2B4b98SARV8QBFQjfFe44s1oVJ3N8AY5FbQcFYVSLf7c8zai6QwBBYHn5ojY1Xn1sQWNR23WWTOQC4XJzbYZnMruH1bGBsNFUqdqD3Qu%2FKr4doIDq2NIaP6RO%2BVFCkQGS41%2FRv7e0plag4VjfhBSMOQmdStvFOK4O6HocEibMpWqwvf7IohLUN%2BztsJu1w7%2FIzLdGLETHrTSKvPtKx7OVr%2FeeoNj79rWqKYTKUYN3O%2FG%2BsVvUU0HD2Isjn18ZORxxuwztyY%2FsA61snNtmtA2rckpRZ7i4TFScW8rwVv9zz7719OAcirnml3cafIj00wI4xXU7mvIQtkFOvoUfLGtCzac2uIfsFpCpfsIlZfgGXvE4hLszwYof6qSYVgUMl6X8M9yEZ4%2FvAEMkKvKOSrMhufGaN7Qr51OIEfNv6boIT5p5AwXCoK9fCLjGIPVlZrulnX3lOFMqtdgNnicM4HRihvyK9NdKUAKMWQkiMKeU0r0GOqUBizPzS9AFzrA1KG2HZt2dKgIwAG%2FKEec7kr9AqTYFoT7Jy%2F8GUi1VqcojPJ7ul5B21TAN5I8OPI3l8FFd1mopmvE6a25EDizNEj4tdz%2FzyYB%2Fn4vdwqmvB0mM6seq4dLKWAON4cLemXoyzw19cdOW9lRmOF%2BsUxUrSQ9NwR%2B0ZiJKPnvzlnN15Ld6qS4P48FnbmbYTLbbkTZJImEENs1urc%2BpS4DP&X-Amz-Signature=8c867f8f4849bb513bba63a2c28d0e805c5a13cb0ce6d6ca010ef3d8d20f296c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
