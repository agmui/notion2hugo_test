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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTZZK5L%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6yxcMNMUNrahgkK8mS4I9pvTuvXkPgOgsz6fvoY%2FTYgIhAKQk9Pkb7qwTO%2BXYs21mOL%2B85hJM%2BxDxKG3%2B9dSBmH%2FjKv8DCHIQABoMNjM3NDIzMTgzODA1Igz0oM6u%2BLxNbfiGw64q3AMdE4W5q7D8J8UVly%2BvxymQuan0ng09GGReIgMqDW5i%2FtI%2FYBy8gdAeyxtVZOfUydR4T93zGR1pyNNycF8ziwMKi%2BHy2WcBjq5JrS7c3CGRqtHNkRRpV866H21JUL2nvzNJvqNPtqVrtdue5pr8aP01SbYpK28%2BDrImDTPmED9IRhccuHFzN8LnwRrK2G1eGflZjgdqM%2BO6uE7tQyfxlHVcIVLglJYLP7eXSiLjgcS4W6DsnDSsbBkHEOthuD%2B%2F10JnXGMyAlllmHQbPNELmweVQNvNde9AxZO%2F6o7NogijISks3vwjV%2ByIsWc3tvrkPVTX1kbv%2FBc6GZpSrIFYJgjaZ5evA7uy97H3UF%2F3YVwD9D9vLboTFJFke7zxOjjl0zQb97lgmbYNWxnm6VWIE167pUKg16osbPPANH6E%2FSBh4mY9kinuoXkTZaAdVT%2BQV2UCZ49TTEDz8E9qKWwqXi557HYMVL4mfsmiwBp33QO5wqBbOitWaws4AnWCGV8Rn44LPk1ot5Fezgn%2BYCZUh1XHtlFnqmiBi5vhvKA6ELLFrW3JCr0pJ34J1gzwofM0skaoyPzdA6HGy7HY%2BXKNOgvbVzVtfCnrohwEhqHBCHh93mhbrGvso6sfoNEktjCh%2Bo%2FCBjqkAegemuRbfQ0gd1ZK4OYGIvAQpqRp%2BN2hW9gRCwUgZFafmNIWO8sdyXv27YaUqbmAB%2Fr0b4z4tEbJHjz%2B6Ple5E686TmTHdQacnwqVoSRUvUuBocVUaMVAP5OiCfabxTYHNTMnbgJSxBZbXIgBUjjb0elivViDU7zv%2FHgb3H4SZSDLpQJAPHV0%2Fwgi2WAFcmz3IP9Dr%2BBcQqHesw1Emu5%2FiW%2FpFMv&X-Amz-Signature=71605550dbadac66c898a54de1b60d07d0338af2b875e0cf485d93cb3c463180&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
