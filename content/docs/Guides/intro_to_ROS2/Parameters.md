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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ZUDTSY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdEcATeb%2FpztWYoNcYPh84ndc1U%2F6BKWTVs91%2Bj9USMwIhAMFxh%2F7Ncjvm2hQ0eO70ICYaMtuOc6T3tvMbZDYpfxMdKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTST87esF%2B488GDDoq3APrpIXZEccJm8p6jXWriRpaegk7%2FArHc4VXNgbTJNQe%2F%2B5H6I6MZ6hVab1mfOGQt0LTogTI8fvTPE8rJjB%2F%2BvbRfBrLh3aRPzD%2BhEfEzqdIJKLl2N15W04CBaAXlx7abjYSeXJDEE23stCAQQ96fpKygnEJTuVgw7jSiD%2F1rtKM6D0%2Bfjdyjim%2FGJC9iDNPxv8ELexfpQ5kDVeotFyGPEMd6Ny1ucb4eZnbaM%2B4uFJ9lQmduq2HNLEo4%2BO2aHZ99dTgHVKzOU0N1UEzKljiQ02gum40DMcmU%2BSq2ZaR6dk8XG%2FbXz2nXGyazFkaFWbQHWPlJH%2B8vgiN11mc1VB4vqx1thkylckEw1FcDGyn8Li9xvXtoiwyApyo3YPnJD4Q9H9v7IIrsGMej5PzuIV9fAYAQ5NUYajtWbZEe3CY%2BD%2FRlj6znhnTuVcPa%2Bi8yYoV3%2BRGiO7%2FZDhn7%2FqVQdL1U%2BTtRWIj8Z7x%2Fi%2BYDRkNRHVjRByGvkqJ%2F8xkIjLk0dIS96NrQaDj0fhecL0mpq4ep3O9OH9xu0R9yGFMcWhgeuKgBI%2BB8E7Tlj1My5XQyRFus4nptzGdxcfUngXQkAhA8mBdcWi%2FQk6ki5iXnjmlkOMkdYmpykH%2FnSN%2FS%2B%2FF7zCRwcq%2BBjqkATg%2B%2Fuk404KY0ORAGa3Qn62sWE3hF1yKE01V8S11ucWZiZymoymNfKT5MWv3qm6XZD0aWeW%2F8RzatUeSa8HaoSEoHUW6GgVlSK6gfbuC9eS%2FQQZfL3Fy1SlOw7JDg%2F3v4%2FZMFnkNQAALqiIRwB8RBPnRvGkkiLPD%2BVL701J935Aec3tZ8ijQ9ZeGBliMtuqUMIRSAAqEKGv7RDmi%2FM4LWzt9bhC2&X-Amz-Signature=3cb5e56e6562caa556ee2b26dfe82307e58e1e3c8f9eaa7a5ec037544059408f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
