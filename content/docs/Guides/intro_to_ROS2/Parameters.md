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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466253FN3XF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM7rBH7rPIRMed7jI17SdQBtWJiK8%2BaE8ap6Y9QtZ2bAiEAkU4CjeWDzOskLa6%2B5Ko28BIfYnj9S5HrMJpUKKZ5tN4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNt%2Fs%2BUEcqPopsaq8yrcAzyWpYDUCtGvFFjX6tk%2F9kKpwl%2FJNuVXOAvNR1OeE0vCbY21ne%2FpIHlah24Yu%2Fp2%2FfaDlKf9rWYM8I1Z4gEVFQXdvAXneOwgcuiyqWGBkOmtiiBXGfoG%2FPjBzp4oIMnshaMQER00a4bnaupjQVyBkeUwbF7HpWyKrTqheE9f0eVCGr1DuoQ0N40oWVWmzXT7B4wGENCuYHzbWkQh3UJnWoNwx%2FlnxIB5eL8qJ8uOKMykMmwQ8Zuo6EWa35IXtmjbYZ%2FEpCHVD4gy7oIyTSmLSh7cqpSw0SQBOhETyRYIlrp%2Bp0mk%2Fmr3FhK3xJfz64MS28rPiV8h3LlDB%2F2f%2FKaweJjKK2nzOvcw3YhEF7FDf72acRpNDjVrZMkZDVobP1IM6QPOK2JuqaUA52LYBLpAx5iKNoB1rjRuCh3yQECty52eWfAZj2U1%2BvKh8EhTQFC9LTGfTe4abEtEe3rfHRMzA33%2FOL8S13QsZhkIlvcS9%2FHN3d3kKebm5nIOHXSzH1X%2F4ukLO9n1Tcs6Y087ocUbFXSqf13qGILxobVxhDVioosHvYG1Fd2PTyHxXK%2BXe7pepC%2B2mGbNmv6CHYcqmyVDCUHXxQVdwkJ7SokfDpDr96ISioP%2BSLVTg4yOvAQQMP2kzcMGOqUBV8ulECbuO%2ByUQ%2FT3KtA2EUz0VTy1oAurBfOEy0CZGIewm7hGf%2FH2owgfQBNarv5cLdgFJ07X0ItquPsZQMk6Wb1STILvi%2BGS2v12csNaz1CuiWk2uKSfDdDViyFpWr%2FDBUAvjkHENuKJjDwh64cQizVttotmei8Oe%2BguXrEzMZGpGsLnco4hN%2F7rRU%2BdjftEa5QXeUQD9usHuvwXRgqe6NcPp1bB&X-Amz-Signature=80a8b18214acf8a36ff5db3e7e2ab72927f70c6749cfbf3e15b3d5ab5093a9b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
