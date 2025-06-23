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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZEKS6QE%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCGhqi2EfuT%2FDREy9kKM87evBtQSYzPVfKXDd%2Ff0xVa0AIgIE5IfBZZHLmNe6irw3BTeC1WcLPC39pN%2FhkZ1GdML5Iq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIpkMV32xyJKw8%2FXQCrcA0OZCq4ectOqHPEcMZIao0DB13c%2BuLeIZn0w9YY8hcWYdqJvpX%2FF8Wg4e2npxBVh40me4jlOvdKbQKcLlgqFuXWEzN0CzkvgNxYAtAZGTUwfuKM4ZoUKl3b45ayVKY59vbUYZtLqQhHz%2BrFSjjqNc6mkUj20BNFN0AqppginrcU4Xmx90GqxqW4VaEXa0mJX1caaNO0nTE%2B42LkXCfyBQv0Z5dov%2FNlwJ4offYg2Fvm1MjhWaY3PamoE11LJm7%2BOz%2FL1k8zpytWe6Se4%2FAjrYn5H2aG7eSkOywscmSyYwB5RYnXQ8cQ%2BgwxVuD9dPMPZPW6OvZkqUWXK%2BDwk0wMVswMhw5ZWqeMLzX0QQDcrpkQF0ZwhPqOayY8vcBxm7XAAyowR1C34%2FI%2Bg2jlfMw35lD2vlxa7bxpCONmruIjvIbX%2FCrvSNAAOIyG%2FLdW6mTMzX21VEdEEew6z%2FM%2BvxQruOWnmqihV979mr89UXwVdbXdr1XPEAkMRC537OL3OMPum4bV%2BtSz8hswLWBdLseYpED4D1OQIJRaFupR8j4Bcjh%2BeJv8MtNDraTMlFC8hPvSmQ5UWc%2BDvpf9RVTo08Os9HWzA5vy4Y5djVMTTDm%2FrVkESs7ap6vnh9erkGwA6MLuH5sIGOqUBM3fW8KF3mGIZiZxaFLRekEvMD%2FQ%2BJD4aVQkYYYNk82QOcrB5%2FaZMBYue7JQNW4XRg33plqm%2FkPaQooaHDWlGY1JAcYn0PSCML6YujWSePUehwI6oV2g6wm9v1Iriqa%2F8sYSErFy0A6Tnd6csQwkr0%2B0ltFSeIEBw7V%2FUfpjt6L6c25HRZJY4ZQmWDRS5Uf0fUAtVfGeXLOUkdFlzMNrQhheAsl6U&X-Amz-Signature=c2ce765e88effb03e6203fe43e879fd2cb4a196fef420e636c090ec7f3f95f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
