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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQXR2Q6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDviZxadCUWLD6wHHp2Z0Ymo1I7YrS0nnodnOplLxyqyQIhAKeOo3zC0eNFcPclXC46VqG6pe9jZIrj7vWyWyxU3VOvKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY9Ml4c2yKCbJixcoq3AP5MkwN2aZMxcVZ4TA7tqgd5Cg6ByZqFQBquFdlzDwZxunXPKZpOLWX2d6jx5hMkEyqYgsi177FikRdIDPUEz8rEn35CeB5Ae5aEcxBgm6fiiZZdnXmsvUSDxYwaCgFG%2B271T1zS1%2BNckV9TxYnLRhhAicOIAY3PKTCaFj%2FdQ0%2Fu6ZjVpcWKascp9eUctIJ1nRRkwd1Ffzfwr76WLs4m6DirqKqqc8yuM8UoyWC%2Fj8Zznuol2WIcN1cMKddKdW7gw5w%2B9t0Bq6UXG%2BZxJ6aaZ5irJWP1Bzjg4dSjwcyQ%2FuHI8FTGsVam1g%2BrZgqw3HxZzwJnh%2BjpGcRZ8UTGLIszv8RXeo1fFhrEWbHDqNKQcqc0vhOcZbjVuSNEGRN4CYC2mnKz6esv3zwbFHtdEqk1P2BiFzhBs3pQ8FmunLPClU6NuWwF%2F%2Fc5%2FZkDmwx7QG1NX2l1bYBTKfQKW4%2BUjfawBsYKSj%2B1d12ijDoxSBQz%2BCAdH7%2F%2B1dkT5M6w97sdo4MDaAvxhFp3Q5Zgf%2ByZ%2FY4ALUn62ZXOmxDylH7usOgkZ0BWanOQG5x%2Ft4IgvDxpysmydKjyW29TNYMUEgdcsc0Wd6gDCC%2Bl0w4VUUR8lVcWWwccdn2HdOZtqk0BQh10DDf6aK%2FBjqkARAvJBCzDMuLgqKIpFBO7zhDYAh%2FmliE1kEe%2BDTlVXxmzyCTxziPnJaua7wsT7MQwkUyG4T%2F103ZUE8GQC4vL%2Bsyyr6tO1opLANeZX4yIfAJFdO29PmyhEiXim1tJXhrVboPqNHQUxQ%2Bi1TbXqfZ%2FjlfoScAURSmojeDx7Fe7wORMhqZdqOrVy3VFM%2BYJs4XPK4i1JpvQyy3MnB77TW4zhdGfC2H&X-Amz-Signature=6628b0080fe876d3714de20e19dc08465c9ffd4ec64794bd5112e51d32657b15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
