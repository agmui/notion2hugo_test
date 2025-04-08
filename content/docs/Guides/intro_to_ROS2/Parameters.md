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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVALCIX7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBVpb36ipVBs663nd8TeILa2%2B6wBYGv9ixdxtBPsZo3sAiBsVdFq1obcpH5dQ7D%2BaY8D9PRAgAXSzwhNpYRDEta8lyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMOVz7RnQlNa9%2BOIi1KtwDSSY2s889RnNmLY3MG%2FPDiatPj0qh1zs3WUnp40b5luk0KinZRXIi8NVt7JImOSG9FOrZIdTTncY%2ByWfHBYRusoyW4PwXwLO6BtugLYiiE%2FYLsdMar0cWx27AkGkizKP0Z%2BxZRhTvwu0cvBCP525EMMH1asMy4U%2BSur70SBaeaPW0fnJLe36QGz0SyE0QnjmGvOknSzSvCenNg%2FFzNi7WJZC25Bz1zMuEBiv6yT4xQyLDnAOLSY8m8nH2XFnRcLoG7hhzXXqFg7DsLd0sZ5pauES3VnxszYMyCmXolKboPM3iRx70xToDeVpTuRIJgTW1zkFKsNjUe0KTygkRUBG99ICMz7xU43yLRefJAlV4EQYWeGXAbmlvL%2FkovPBjMvCaECeUnVpkJoMJGlauEPxvl3ZFbeCYT%2FEEKg53A5sIo8nOGR2qvI2o0PyBG5nPofo%2B4nNubzjXznZSquKPY4%2BjYjOxJkKGCLCVq8QQadxMVUPnw5LCOHCsJOW%2FUMuYgbgHLhC5Hftn35O97IngH3eB4lB1EBGEjC4ZJrmjwHx0Agy1wDnwY0%2FRJfXPvEQKO3cPMKP%2BxgHmDQ0cC8d69rcpIq2t%2FTvsKlh81mUk%2F%2BfoS9wMynbTe2r7elUC5kUwuYvWvwY6pgEQ0wKjf9x1UBgg%2B4UGceVL0sdjvsOoKqPkqzvNr5KHSw969jVL9CbzzuKQZfYFTYEIH0JEW58PEzKKJcS6XYrM8nFuq%2BayORDUdkSwvsqUVEkNYDd2azmboucY9Q0yx1%2BztT5Jy8Jo4oaXxWOBUitPNUvTvH5%2FMk0ioDFBINV9ldFvqxszUIEDt2nklZb8%2F88or3hSK7p%2F51nClDCYDfVRU64SsPKb&X-Amz-Signature=717637a0c57f94da558c0ce5e76b8204cbcffb8b4c287b0a31b296bb86d9b76d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
