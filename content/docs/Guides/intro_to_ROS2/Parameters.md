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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q73MAG37%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F32pHSRtsqeH7slVwG7T41kIm0dEdwv5uQzUwHbiOQwIgS5mvq5k3rWTV1ExDcUbXJuXXhhkjqyw2lP6IsL1sogcqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUgjRJO4wH91UfnLCrcAwYJqjJmJMJaTkoxo8O7DSMFA37Qi76lq3uQAgXDhM%2FJbNKees2rEq3aK2PrZS9wHVrO8dDuJMeeWADTBMPvouVkyZXCvHnKdg8%2FJPOxq3UrnApvbTMMumeDZuPhh4XTzIXt52wuencHxzJsLZ9zIy3vaigKX0UvHUYgktgSAowK5XVscCHsbkAkD5jOtd1oeD5uznNdXlYPVQqWo9zD9xq9aD7yo5WfqP98FfsBnstulyPvtLN%2BLPpojAJe4gCVaXiWDKM5ijIrNMK7Cu8UWUDa6xw84C1HAtHdJ0228TJn%2FAeyow42N028Zi18mt%2BqCsO7Y20mfHOLDOt0ddlN8lZMTF0sZZYhz2FkwCDNLiBCUB2jFQTyMCTZiwtP%2FbHXXA0C0VoDg1Bng1VOJ22ikRjZN%2FhR%2BX3UCjPVGetc6ezfJoytYVr6MBUd9HbWrx346x86RVcjb2EgTbkmgNM0g7bEJDZ2%2FJx%2BXB5W7pG%2BzFoY%2BUWxVi3PM%2BXbNaAUAJ%2FlVL23SKrOQj6LP2jC4BlCS93mpZnHNNW0H72BPldrIIcxjqX%2B1grBbFGWiz9kTdU5%2FeEt3n0p5i5xd4y%2FxE0vNdtASyC4xnSH4J23llNcjpKy5spl2kS1BN%2FKcUVoMK2imMIGOqUBK%2BP69Gz9P1vbeXfpSbKq%2Bs6VkSwZ0n5y%2FMXGJbd9ffJybuZhAbGziZaeBSMQYRgMYjj6dnmG%2BPR4PHPQTzD0IEzMQdZv5ZToEVgz8Ir8QTwMxTnTdxX8GbbmRAkAHjEqvcd%2BYEUt1gNX6dTw%2BgppyXEWbI8iuCA3heCnwFq8ku%2FHpnHNQIlH9KnWJGltoBw7GC7tATbz%2FkzEvzLhuBKksVN5rXLm&X-Amz-Signature=db758ddfc113b3f5b08703f27da5de668e596e523db620868b134368bd6718bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
