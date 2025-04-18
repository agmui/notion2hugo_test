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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMFQ42R%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfPQm%2BCJgCT%2FuV%2Fytfr%2BIrN%2BvILCpzeYFGh%2BsVJrS19gIhAJQTiD9WHXZtW0s964rg5X3%2Fwf12j6tyuEt8VwE3h%2BdkKv8DCG4QABoMNjM3NDIzMTgzODA1IgwrC4BJ7UxcHbBgHxMq3AMCpSaDmuzyzMp0GoxwkErFADXTVkbv5ff03C%2BAja48M0veRpfU7pEH0m84lpwM6vrSc8A7Nubov90aUnB0EvgLEa%2BXOHqjfzq8ScctiplYE95jsXgOEnbokdjTiHhoAxbbiqn6UIxIFJfLJyHTWem8%2BpT6X6w3QKqR3S3bfsCmH9wyD5gOQkTHiIY9EXRyduI4DyMCF3haK7643%2F5WqP3UVHSZH%2BepQdF1X9PZ6PtmRcN%2F%2Bp9ZJ7p6zKWMVQUnnDkwUjsPSCNUR5pEYrOcp%2B87uZM%2BaIcfDPqlWp06JCZs5XJeLn5GTCEirLwJSRJEtc9zxzKzuoLJP6VbZsi54M5CUz1kf8LQuaG1xsGlMzoD%2BGVly9Zzidy2iYkgaS3lD1WNLIhYMk5AY6%2ByC%2FS8mMYP9KDRgVs5Z0t25dT%2BRnVdhx0kGv4kaZTScBmCTmbAgl%2B9ja4qoaZt1z%2BI2WSC%2BAoBSssvAXJBsIe1hLP7s03PKM9bkkeMdJ7s%2B25DJHq0BbVNKCqen4mWmf2PY1xAZLUR8GdKfV19AE4gPOm6ZsJrK31BRLgaRApVQWCzGR%2FebmkmaAFXLCyA76ELcyaERxljA6ImljIOse6XSjWKOi%2BDROOsuhQmreoMmuIJkDC7qYfABjqkAdCl0sumIjnJFnHD%2BmtuLUq5U3MZFYQmRup%2BIa70UmDGHgqumJA%2BbF8uz9H1FVfcgpVx94b1yhvcDqGgbMP55aPtee9Ya73zaPmgueLaxATdb40zOzZfAe0urMto5QerSZ8SQVmByUHmxQV2%2BlA6BmoQpGgyeSkJKKKvVDhne8U90hvjXW7ViQY1pZ2bviXK0t1jRIwrD%2BhykIBTycp1gSBh4wAQ&X-Amz-Signature=7926fde5f98d6053f884682c47fe865fd9d6b4f8f0a7b631ad7729f304dad69e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
