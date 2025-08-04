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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3NTGWQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCAXGxZipkeetsxoaGhmkmBAK2vysJ2NnckOgkOOQgr1QIhAPV1hA3LH7Pu8bGwEAL9zERT485CGhJ%2BgiuUeaThkrKYKv8DCEwQABoMNjM3NDIzMTgzODA1IgxLczenbHHLYGUjAy8q3AM%2B8Q3PyvzRp%2FDjfPPdE6DvHJ526rhaRcvCSKQMZ1ximhegELC1bFbSDszTy2AgkLfIjogeZqIeVqrZy7BchgsxO9bR0EC9gRN4pgBdh5Zn1TNzQRv0GTJot1rSh9aMFeHaG5H0Bg0odJ6l0tmLJnYudogqSXPbnKEGqbhSZiWRQpBTDnxHBnE067SHIvRKIc3pik5VF8IboETlKHi80%2BL%2BdETi1ptdumI2Gc9s4IS3arut0bNfVabJaOi04DTA00RuzVxyCpeXwQJYjRMVyrFjMhVDtQ0nbRJLRrqd5qQKlNQe%2BVG5N4KFrYUxSjdSSXyS2ggv8utnW4%2Fqt5Oex2H2gt345dkzbGivxdGNMAh0mq%2Fzhr1P2f1RCVNse%2Fy1%2FYF2UlROYXpiRikKhmyI5DQTUHINnqL%2B%2Bl5K4aNaMG0jko1lYhBDb4xKQkuNJI48fOWzU5t6BWGAwn2Mpvob6yMvcy7YeBiiVnMgc4lzZ0lrbQGKJQk8JVzkDj%2FheYa4E%2FMxaS4tk0zbHMm0ZQg525ra6NVB%2Bxvc%2FMcTRHB7pQ7NuoxYm1AKcHsFPM3fqq8Ex%2BkdzXB7RkO9CHdYJ%2Bp8Lm0%2BuHLlJCqUKMumWxJO%2BVUGjpH552NZx%2FDf14wN6jC9%2BcPEBjqkAc4PO%2BFRlQoyUT7cOhn44lHRx2ZLAC%2BEF1%2B8C97CHSHrn7L0CaU6RQ8Q8fqlZMYOTvg9H5vHuC7878RMwoANaUE641pivWkc7xEj92MTCMDDiQqH%2BM%2BhHxF4wyqjgy4v71JD8cuW5oP8Fx%2BYAHpHHQ0wuQUvGD8OXY9F1Bf94iNya3Vyv2ip2KxtdPGP%2BNW3Yj%2FyDAIaF1LDmj2yhrniIwNndZzd&X-Amz-Signature=d6254bb0fae1276cac8af5e78bac30dc8113c99c49f5c7c679622ba4d59bf11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
