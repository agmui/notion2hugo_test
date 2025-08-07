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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNUKHI26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCg7PuP1EgnlcX%2Fpf4JLefas8D80qWWFQgQL67q678skwIhANaeGLyDKvq0PivehOW%2BDFL1JgEwZHSO%2FRQ7pqqb8nF7KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGB%2B0LP0WtKo%2F9TxIq3AOPlsJOlNJjBCvuvdCo5Kc2kQOgaVrQb4tdxd0n%2Fj472JDDDjMjg4wXwbV1OAPLRjNYJ53rCsoDJtdVL6w%2BcD16VeBE2NUwSmuAekgFQvzNQAINp2xUkaARQdI%2BZEB0vVKu5GICiIn22frnWiIAe9TK0dZj7rbm%2B0smus3pn1aD0HNFTHcYMwIjdX%2F6ZvjjhiJ%2BkcjdsExVZKQfWkwg9uA9iLrKAeJJmjCLn9lA8dbBV1NLzAsiAnbeE0Et%2BhO64HOIDFITqo993J1yXi1cAnSIbKKC2sLn9H61vwRWCoF8RxpSqpnyYlH5d0yhs15rpxcVtJOj9qLU2cCLlt%2FjYD69EHQUf8lHVvCphDcZic5g%2B4v5HMC3qrcGc6v%2F8oxq3ZfwYYVsyfOZBwc4mNsOy06VGjBXw7Tk%2FhpcvqpOnNABmF4zRWTjGbVoVnuAoTZZHVB9Q7%2BHHElodS%2BbhOQ3hSu9I5eaPQ4bPvtNCKGow9ESSxlXE%2BKWGScf%2BG9c1x7jVkvxhGYeGQ%2FrLhl9j5hMD07SSYf8GiHpTYe4re4T2HY1hDA6WtFOtzNliOmd%2BCMN8UXqy1Ne6zuCf%2Fz5eHm8tSveKhZK930oP5BnN1PfMKJANHa2VCn18yeze9KbADCW%2BdLEBjqkAWpXsg4V%2FMJsoGloilxZ6jZMeCRT9cwpTdAjvGKL02GtpHVZhXNDeUUb7fuPCDAkeeXnwzhRx7Q6EJsGs38OTUQMc5xiARzIJf2TgyHsiTgBY5vJkkzCyO2vuv%2Fbq2IsKu4SoSMYI5v3NiCdorroMzaDzPTK%2BhtbtwfV1RuhPl8CXGctLIegszOOFsBE%2BBj7%2FA8WG9ZC6SkTg%2BxwddZzUe92ljnN&X-Amz-Signature=e646ab0c3d87ebd89743797b5e51289837eb33723d4f419cfafb9629b2b098c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
