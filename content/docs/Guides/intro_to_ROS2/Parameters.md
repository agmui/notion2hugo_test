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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G6P5LMZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjsnvjRN9XstREszjKzFd2rjtfgfOlp5R3lRj5F2Z5GwIhAMfYgGkcb92vo2AMFmU4sYQugJEGjU9VlyWniolsUPApKv8DCEoQABoMNjM3NDIzMTgzODA1IgynmwEYNBf%2Fk2Y4yLEq3ANaRSypgsOPDcJJ41%2FBSbwvNVLaISYOo7EXek8AWs5zhsPKTc1jDm%2BlsEP%2BX8%2FHdXOZSzVAZCpVEW5PCZibwqvXR9E%2FmEUC7Dr7nXdni3OJtcomDJ8Gqqb3dM%2F6IhhqvrWMTwj%2F2%2FmnV9fY5S2ob4lZO%2F7esVGDScu%2FpgieMevRDXiF4HV4hKCWuq5DBhPwAxeUIjXPCqn5dXv6KsAwcLscZk6Lapon2zhdW97Cs9ac1w3Tuof47tTLjcjiRwH61O48JtxHx%2Bzc2M%2Fj8znlV00uUuAbBLNaB6RVRlDfCtyLF%2BconFeqD0NAFbwcx9KV83WPHKqxbdZKSzch%2FMGqq2TopQQ4UFcx8FDtwqQkd94b8W8HxX7TWRCwFMAVZemnJrHd4y9AcHWdHIOKha%2BWbuQafoQ4ihWUJO%2BMkiZ%2F9rjE5q%2FepEDN0z02Nht7TlZB9Ty9HIPsRbEvpbRUQuZw7cfU7CHPR9fdN1n9QRkVDMLNs%2FRyTVZp0AdfN%2Bil0BYkL%2BiuJE0JIAHvUaYSsapmsS%2F5PgWMXU3Psi0W8OcjFnR4aCK4sZZQB6SwUOMJRker%2FUnDwTswRQs%2BYCI%2B36%2BSuAHhHNSFn0wYcicA5at4%2FLFOoQln%2Bnh6XYO7EjC0OjDPgOnABjqkAUUXPlF1g6EjiyrcUhlh7FBcgdeSZbxbfv0hX53NaEplWCgQoE%2BhSXcV4uoPUuL2IX6QsjtQbIUVoH8Q65NfOT7srxdgD34Nuo14xqciNuWHaYdXvNtCAvt1455jKaX4hRf5NX43mX8KwBWgjBIpZ%2FXGnCeuLYibGQ1V0DZNVIwie9yKR4WPKsJs8Drra5W8Yy8zW8beZwiLg27IukwW0bYbGx8p&X-Amz-Signature=48f270b3e60939e65412137ed95444d1febb5ab858efaf0ea10a9c859cb1ebcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
