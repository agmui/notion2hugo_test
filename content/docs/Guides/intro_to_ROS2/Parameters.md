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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PZVIYK%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPWk6xU7wax0CyRRkgtqzfvLSsmOs3%2FeigOnuEI7fYOAiEApXprG3JKJ8YG2wm%2BKg10a7Uw52ZBfoNSojwjxYhcJlcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgmVjbwW0r2wOKPLCrcA%2BQabAV01p7P53mxiKRcKzgL6a5QiR9lX2F7ww1lnkJVa0yUxO0%2F8lTU%2Fan3qsopwK2hEJ1apjZm2lL2Mu9JWncGknbd6XltEYdavz3v%2Bf%2BfGoDZIZ3vlaPniKvwNWvCRk5UbDF2ehzfuMnDsKVdQO%2Fp%2FaDUkqUJ%2Bhgh9UkqN2t48GPX41P5lhX9FJ0X1jYbNhexFK06cogSA8k6HXGol3zkE8FOcMZvmnj%2BD9T%2Fm1hWymUTRGKCXRVULIoUQPDyjNueK4gUnIUYwCIIAIzmTHBRbWoBin1%2FmPMdi8eSFxTIoA3Aa9weLYP6ymVt39n36yizMES2uyPrDrFAjn8xtCc814m7k1H3MTKOhdFvyf1jg65kjLlISAly50DYPf8Lnt8e40btluksu0YHExl%2BgwoQgBKH%2F18IO0amp%2FHBpPSe3r%2FYqgoURMgTPAvA%2FB%2BjW3xL9ew1mkzpNrGAnepRRT9ODmCCwmcw9LSKpRi12vOkLl9HeQ%2FM33MiyVhqRs7vdkHKWhGMmDFJgR1gtVJlrMM8wJUnUIHwK0Xc%2F6OXHstWg4wipuduTQPetbGe0Pp%2FFu0NoYvSIFdGYW3y%2BA%2FxlWdis%2FhHV84IrB76%2B%2FmRAxSE93Xnapdm2MEQcX%2F7MJ%2BT98MGOqUBe%2BfziaIyYHpS7O4FcfNrqk9RVpz8dfYM8kuw6l%2FprWW2WmXh3bpc06njqvhqzdVYrHVaJkIHSgGmOcNDbehCjatLp6bmlNRMxCNgIICZiQC4Mr8X0dolET25%2FHJbdvWbq1Xw77pebnzgR5jJ9DWyNnd%2FhuM0%2F1u6b%2F6xglrQd6RGVs7v582vKkrMR5JbZV7wjTDfYSjVgrRLOJsUEOpPx%2BtnjY2R&X-Amz-Signature=6b559a802602b2aa6198ad0625f980b613e3f2bac0f2f790616d5bbc921339e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
