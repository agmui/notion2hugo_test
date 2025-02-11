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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5X2PNC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp32Yy%2BiB8q1JTlC8DqR6BCuweZGxAe1jvAMKByu78ogIgSMiz3aydBzDnZjCbmiFcQcK2zJpd7sm5UQXxmyP4yPAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpKAfKe9J7PQzj6vCrcA44K94NblDLg80RpTHGOk4AdxdX%2FmaUJziRRl1Ior3%2F3AuWJ2J0YLcw4%2B4frQS0Ldi6aYuQ72bP36nYPcHG%2FdI2SU%2FYcnw8OqWJYopBMlOxF41C7cUVP%2BOokyYhGd4foIzPBeEpq%2FQnwKpQ2InTSR%2Fo6Ycw5bYAkarxbd%2Bf0dApjdDefvFdvSAueHnFyvkg3xKDSon5PokDv99cHEDM2ddeWzCZnKlF9of1hzMERNtXLgGMaxD2rgo6TtEBUuJGX2JesCQB5huVXxHPqu2Cz8o5YwQGpwCTcNLCzll6Y9YtWMUxls6G3qFXwFtP2ztx8TheKnxtupcIrdzSePafePKqYs6ZpRAHu98OUHPa0n6sEj15PM9eODmZjAGzFUtMyUnmLMNa9dx5RE%2FYguV5kpeF2KLYdNZpzHc86OBNv7q1%2BV6kMAyEfSiialz7Cu5m6FyVJsnKfmu3SLQVlQq4FPrENczQQWKAxPIx3xeIyW2rVp0UULqV%2F0cqvdnDe4M6Ib8JmqXXTxaXpBOhZiHMcmJ0i%2BPkSXxHJ%2B%2B4vyvxMn3%2FoN00zuZOEahZCUntD2UIs3MyXuxpy1Vg5hP07aghfZ5apfIcrMCbDjjR6tX5I9ZFyvLvnBk8nnZ%2Bap85DMKCbrL0GOqUBtiRdFyBEWe%2FWyOB1LT0l3S72AwTEMCx8CuoVcLsDkKVcrZsEMxLXwiNtlmnPsSxxgNVC5iJR2rRbrms5k9S57QnoEZdlKJIMlkk4nJq6kOJHNGY6GEAdoozkdpIeigZSZ%2F4QPGKYVvHioEZHws8JkE0sfHBwHSPZ5cztHwOaHL9y6mvvvYKJ8ghWdsVuo%2F50x%2FN3tVcCIpK2F%2BqWLo%2FF6ChjXZE5&X-Amz-Signature=63cb5f1721860c21af46da87e804458b209b43d254cb4d01504fe54488295aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
