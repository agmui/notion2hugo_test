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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LG3BXCH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpEj%2FiHYlnNXKI6IRvX5QC9YSSzIxhB4sGyYIUPh0JhAiAqXa%2BLZM%2FzuuDSt8rB2AnUFHkBR6j0W5Q7Ab%2FebWVUMyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSAkTkUnf%2FOSb%2FH7xKtwDR459qhEm83RwtpY4O2vFeDozBGW02RE%2Fhvwrdw%2BYjvmymDEsZ%2BVdeclBc4VgOxp3VOq3WQVBXnxnO5GPVUjNG%2FHUfOZ5bieUzu%2F%2FFrFWVGEOZCQ7GqgYrisSxHhUmnFzDgpq6yntohcoapjeVnwfr73z%2Bj0XMF3Huo3Vo3rzcFGOqlAaGEYkpnBDWXu7Xwnsrq4Y8a1dP2pDoSUvXt92V%2B5pyjyZD9A0lVVMOfcOk95yiyZrM3uGXECMyL2b1dY%2Bidpjns90GszCLqwhBX92bFkq4JkYsHJujommwi6m7Crk7HBYtqIj8iuKBQptE3KdO8f41L3RhuIW4XOqPj7w7egI4Kbep3qdue6ivsLpWd%2BodKaqq7e%2F8nSiceuKA7ch4A1OIMT0GJ2f2PBaQIxNSZ0Hdulmu0W92kjHn8lQwllyxrGw2R6UC9BDy9nxKojZSdP4PjBVDUuevL2GsW2c6XnWF1%2FYZw0UU246GXKIMkk%2FpVYdMwP8x3htMTZDA902OlZepE9NJKUrrszaRnsmj3uO2SNelM33znBYu1Ny5h1JGK6YFmiMYOjM0WeIilyinPI7UsbQo1iMqB8zbbazd8y2n8u%2BMT4NI5U69P2G5G2nVRZgq70UuxgiYG8wm5i1vQY6pgF8PX43%2BMXed4imWpJmgUqqtzxOx8OfbPhaq1U5CV%2BOUcWXU1VunJkWS3f7YVu8oHqWZP5N%2BKuFDky61dFoBAqaD9fGs1LFySEn9zJAgFwPTajgdg1pOaWmnrtPWZRqXkI6zx%2F2r4o%2FHNNNFPqU34d5tYY5%2B2y1JVAGXrXo9V8F5QrD%2FGzw6HCbFqpMsBwB%2BdYQ%2Bvkmrg4bcZdG5UkO43ruvhD3oe%2BN&X-Amz-Signature=4b2ff3f5f05455b99c151df1265a867e05af74e452f59dc8c47dee859b0e080c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
