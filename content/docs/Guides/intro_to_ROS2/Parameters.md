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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXEGCV5R%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8er4zvZruSmGnS3lvuvJ544RTnvHU7IhknQ3j2i8d3QIhAKxYY9RJECbqhuXWapH4V37lFj9lkof%2BnTxCJuQmUl2XKv8DCB4QABoMNjM3NDIzMTgzODA1IgwyAcqXuVa6pFRqy5Mq3AOa6ir8Wr%2BPmlz5s4RmlsNGSCu4OR7AGmVeA%2FnHkSzQzOVXmJQsTgAEsJEhf0vjcYMMkHskUOc59gPAqh%2BQXqbPLq27doZubmnSa8m0Mr9cY334JvLv6%2BJkhajjua54AFQIWGdBOgx1bkSKk1Os1jIFzNRoxKXDdVtqSkrwo6obzuE83Ui3DqGBncloM7y3J5IoZW1y2fqajcXIvkWKIZce7uX86RPIF4Dg2faRIep2iav8yiEW7JhkjqZJulhCxYV%2F4x23C8lJ3oYh6HG%2FyLrUkHtkIy6DA12jVDoS8T%2FXR03sk2dhdw1Dy05XG1wKvgtaLklX5XVVJ%2BFW6Idj0hkvjSLKL23Qkq55wnPf7crME8SaiE2v4SItmZClXPtu%2Bd0eQrZshqBaLN%2FAKLN81HBOVYqrTDo8tEP36N6OI062tEQ5BacV04YLngc%2F5GeCQB85ViB4w07FMP6zB4hY74nznG9%2B1k8tRSYMWew3HQpq29KpZ9XXSPX3%2BXQZOHiKMK8Yq7shuVLEiGklKTPe7KZLL6eQ8YfOg0Yr12aXzAaxW4tSAj1SYg77WcFBBVVIMa2OFPBRzsHiXVRn1yQKtB7VFkFJS5wa2ljIR8dz1jU7ogowe0jRKNK0G%2B5FJzC4lO69BjqkAcJ51qb3ZD4q9MN1SgPABWLvIAOwXj4Bri9D1oVo%2ByDqdg5vxTcG8vuE8OUCF0FPnpZHKxMGh3XmuHMS6OBhDvFhOymn%2FSMu%2BSk4Kw18FuHMPBanNpKIOqKfMJK1nBLZVZkOKW2k%2BqKdvQaLjoyEDcD%2Fq%2FlVR61dZWohPAxdptInJrMGrkLZpPdBnzmjC7AsgFuxFojq%2Fp7zCgVMMI5SgDyw8SAY&X-Amz-Signature=cf6fed46bfee2ef8ff45dc753b07aefeec9fbad3b27fba4cfabc3063cbdf7424&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
