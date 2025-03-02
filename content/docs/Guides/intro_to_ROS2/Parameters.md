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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RLAZBNS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhN2s597joMaf00KNVF0DFCmpNF5qnSR7SaRsLSl%2BCdgIhAIHZ%2FnSAQqF%2FOVomCeRkse6yk4agCYmrM%2FwsoZTOfC8BKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6z%2F%2FOrZ7mpbRdSwIq3AP%2BQVKAEkDIuWvnNZ7RBnGKErfyUd17oScpfQCGVyfE2C6vw9MNAdb2svSHQTFnYiTxln4wewE7pyxr2UlmxnHwC8sLeYhdCOs5FyurU4igvoQ%2FowVbwpP3W4LUAf9HoUpGKV1ZDd7lP%2B18%2B%2BaRW7sUL9mhHuU0pq5P8toZ%2BXL5LTqLQdVPZKb%2Fve23of9VCTBfXzXqYR2gJS1hsvXQBNGP%2FQMazK4Yn%2F0wPuovTlymRCs0zm%2F4Db1CYsZBNjZ477J7KzzjJj8U6VmHOjW7pkKrTKXnjFZKY9w9103Up%2B9UJybVKA6wqaLgRXQzfrDPAJ3%2B3fvr192On%2Fi8nRBk3j%2B3QV%2F4ZatbV7btQaBMS3gvj8lauTYznde0kSXVgAe2x7WEXurP6JvSCsyiQPXa5j3CS0gu0w%2FtZmj3BEigPy%2BEppUZt0isD2XmQ9t8NOzPnnCnzaztTCNdoEfPNKg0vQKPyumTZuN0ZGpbFr4bGsoQLb97R3E00EpQL0jrCo1b8%2Brv47mr6o8XqYl3crs8Ath59bpnwl9D1esOuf136NytLSxldR51HPviJb7O8WY11zrWGJ8J245sllGF%2FSyWqz%2BgD2EoDVU1WmAnvLXwurIWtPkFYv3lwqmeTmb5AzDRnJK%2BBjqkAY5I4VRGQ3JKqEZWknz05NvpF14Gca2rCNtZOzF1iKiIjsWh54SXGI79kVP%2B%2FCu2L22xQ4yAv5szP0Xfd8pBjSl9Qd%2BKP7XBQRN28U69sO3gwlJwBrZ4ZNUiZmMVdtmxQe4%2B0%2FPJV%2Bu2JzxIb2YcZFzTLEhNAj6HyNvIFD%2BYdEXILGiCj1Pt3fgTKwq6Bzd6PzPd0be0IZKsoQyP8HAb%2B%2FbA0U08&X-Amz-Signature=b9ee6ed4864079165d43b26917309b51b0beebe67956d7c4162ece0f687d8f96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
