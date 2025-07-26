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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCO2LXR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDye0bcHn%2FDgsdDSKlSblAo8NUeLfznuKf6I6QUFwCjRwIhAMT9WMlAjcFRu91vBGb1wIi2iogHj0Pfv7ijC86uDyUCKv8DCF8QABoMNjM3NDIzMTgzODA1IgwYxh%2FEa55pL4uSJVMq3ANRXbWxzA2b%2FaCLwN9LkQknnFX9cKz6V7%2BBXXx9cHBbgMcIgo3cRjH849CqVuKqsFVwHPhES1Qfm%2Fx685%2BoSOhPxhxX%2Fjsh0q3PihT69qbnFJOqIHMuEx9WiWJY4GfmYtQKjcv02U0xv2G3saBg1PV9o5NgzA0eILupO0IcrxRnpPM4%2BbEgcyNoqxWF%2FLiof2e3BGqggcmguwwJsD%2BqZwGdwKDBSYU7kAOsd8qA%2BGWRjCRd5jHfXHyRwEVndxGuEcluD0TCEVzCiq0GJ9yuFIQhbRfJbVHxyZn%2F06wh2KJFAl4%2BzXBrLqfsJWf5hspTVlZ2MK3ve1SzK6127zadXSPSQOiQM%2FvYmK77AqUk6F3KzlC9VCPYn0GnLEB600kCnKVNgd3d4XZuRjFDq0hNUHY2uGPLpfEII4pvClYkxylOc5YKsZbW81s84P0CapXJ1xg03pNlY3lqkNEvmTOyhwgM68a%2FUViTK2eNxZ%2BVD3eLRcg%2FPe%2BezOkeJVSLjriAJfJC4BUKx30gy%2BFiDSRa8hepv2bkC%2FNw92njFIK1Psqrqn3Sz8ZgwzCT8JF%2Fn17jPWn2qXbl5M1Bpr0jwbAJlMgfUDp3JRv%2BTq6Za6PBe1qX0APwBgdvFHAkCP3tMzDGwZPEBjqkATDXkleagUfw1xP4WIY32TDiKf6Fb%2FO2428ApSTUOqFm3jbT8ml6SgbI5izXfqvV%2F9hlYAglx6jmW4yRL%2BqUBjqyWU2q9ZW5NnOhOz6u6VZWzcMOw%2Fk3quaJkOPPvrZolVi2vyFGTz1ZE180YTCWRvOF5mpMph3tGtEBB9OOXaMNw2wIm3iJEyu%2FxalEa5Q20vX%2BNmF6I%2BjP2L0%2F9QQyTje%2Frspk&X-Amz-Signature=736747f9530ad551c974a0487595b3a3ad6490e12c4c8485cb3a353e9934267e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
