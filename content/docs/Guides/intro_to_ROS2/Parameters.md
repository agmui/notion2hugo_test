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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ7WVDO5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD8Pfv4rFFiA9xI2MdgpI1FLFCuOM8xUy6VCnA7XKnNKwIgIQRcbKQ7ndlYfljuSGJtN1GYvysIJUOVedzKL7v0iIUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwmzxQaWvqJh%2FE9tCrcA76sjTqrbfzqVxRSlgXhkjxaZODyB%2Bb0n%2FB18Y24WxV%2BhebUmynHtFEWzHrvVxqHTIFh4pE6C52KoItFEU6uOY0DmT%2Fhq9HdSiBCGlFIl40sUZnGZ3rk2fwihciPtexhs79bhdvj%2B5WYLZjDThE8c8D9De23g81O%2FQtBEVrWPztPSTdd4J1xlDRcku%2Bo4Lp8GPN%2BGUqq3hxf5ztg%2B2mEWDb4v4Lv6RQmWiUCPREe9chNf3ka61StCrRM3XH8p%2BGeHjE6tpZWPKs0iUcBvZNhMuoTz%2FVkjKJU3KO2bGs9N4%2BDVDZ0ATWBJ3GfQpRzE00gKGWGg3lnM999mckgQv04y2notvApz0nEvehZad341BPR5j0A76HBoMIZR2CjtX%2FcJvaxPbVrYNF0%2BKEFlz2NevPhaZXKC%2BIC7%2Bht4GR0lsuDvAB3gF%2F%2BMcGVwzXMvqjA50qDd9p35%2FL%2Ff7VRzY7S4fC9PELuFGDgEEXiz%2BagIzgZMe7GCWj3BywHzKNeRsORa1tLsnOIufVjRgOzu8bC7I5oN%2F01xm%2FJVbxV0LshR%2FY7jgFivMiL4spyWbmuQ2t9XZQBSOH3FkMhaiFw1exMBddLWAdpJDiN9MaT%2BrW%2BpWEbOghl6X9ZryURLp1JMKP8tL8GOqUB1TW2CP8ZBGV0I4uUwQPlJwOIaZaO41qx9dSUCugtY3Ts5DC%2BZS87vevwL6DPOiZfaEzevbQqv95wRrXTE8vlEFraY%2BCprPQjnDRMfa92ypvn3kumgn%2FgGSs9PajLUgh%2BQYQMEzWk0lDjdcy4zPl0T865mWAvGakU6bD9orpBeQpMXco35oHDhZB9ZwGjLueFQpJq5bZClfTBfJwZpeut0Fv9pl7F&X-Amz-Signature=59bb3482741220097e5784060d671044728f0c45bf85e9be56338e57faf947e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
