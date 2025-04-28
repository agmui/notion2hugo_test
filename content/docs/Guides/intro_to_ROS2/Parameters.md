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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VFZKTQP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T141000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo284KEAbxJPWsy8IXjpY4jNRVA4LjwIgKlBFRxCq8fgIhAIo8kmrfNstqK%2BQOk0dHkRV%2F8HpOGO1ax9LwI5dLm61eKv8DCHYQABoMNjM3NDIzMTgzODA1IgyGs7qY2xBMVdtEZUwq3AM9TDBFEZpCOOoJy6ySPufuTMXn%2FfYbn9JQWHWAnnnrd86b%2Fl65prSwiRBbyZpKC91k9JvjuSlJH9OuqaK8GcOv5DFd%2BXJiUPtS95Ib2hfIU%2F%2B6POgpjSKU8RGUXPM1Xj0ZP5nB7pJaep1P%2F2B%2BJcrOZx%2BS5aPN64g4Ap9UUfz6LcuBgfv72jgyqvvct6ijvtis2NpffetQ%2FNeuRIRdAJmYm5jVOfqxnqeU3qYcqqJw72mhhyjtIsZCaRKPNlPSItopPHM4iIavwVftG5wEpLXGTYHCsaJ3LqtsCE18jZyiLkQOm0h9KAafA%2F%2BFZO%2BNWC0Ue99ZwyFkbR3x8qC5VgwJSn24GBgoaH4tcs1vdRLQfPzmSmMPscTXFLlsTyjNPWH6RGrrYaXOdZNWZ%2BQREmf7aDyEmysC126nDyS%2FhWkekLNQAdWr6eg9xPjFmkZbDsymYYk%2FDnGOX5HAhQe6c86grBVIZknjx1kt5NuKETZCOZcVysJOUeWwUpjBL1lhzsLlUU%2Fbf9nOdJ4570mgZ0u01fkcFXbN7YkA9PWj691MiF3j5JNKKqIkPP8VCGkm%2BOl%2FUOr2bvh4efEQKvBO2Y7AGa4SkYcDTENtCuDP0gKb%2B9StGizWyBNx2oVT2TCgg77ABjqkAdnh1D%2FvMUNtibrZb4hoZ8ACKM26tkviWopzOvNEQMmpw6%2FVgzcRqCgZRYBHTY8tWo9gW4%2B8vuAO7u6fJol6VIlZ%2FN9anVXYfugzbe6W97YC0meR5mU1M7jUiBzyqj5J94ZYytEQWOHb7iy1jNXXb29WgIiCbF0Mo9q%2FRHa0VBtRv9pzZUvfOlNko6FjoT3kq0%2B16pbFatFHkCcJRBZG%2FuHpJnOt&X-Amz-Signature=138e445118b9b00fad57ffed815b94f884c8bc6f5d0b7ca17220d4208294a9d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
