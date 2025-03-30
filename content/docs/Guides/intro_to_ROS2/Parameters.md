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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PFKVIP5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGBoV8YQwPvBGF9pGOqXIroDGd63xjy40MhawSPorUiaAiAcbHCtIjZrSyMcER3xtrUf07BV%2BiCILWJqnxgp9IIOqiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YRuZT2yiVPgNMn2KtwD8w4KN%2FoqO8Xlfg9mBiHJHDA93VGCu%2BxuixqZsEFvYVZbWbD%2B93QzCxQavfDGMd4wHINAc08iC6ln7%2FccKa5gPREmiI1U9fcjwNBuXue9iY8WFdKa%2BLzxzwFV8V6HPBY6NNaa%2FqB8tnSPmB3GIuNUYnj%2FTXv1oVy5FHamvyvf5LSWvtewaItnwczEVEwhdt9cvP1mKw1BlxRAxJ7B%2Bwp6Gi3ypKwtWXtyCR9WOaIQ8XAnHheBI5HT1yuPExltsBsXj2KyRKIfu7cuWd7dk11FtrssGk6Jxl5ACz3P%2FroZj%2Bb%2F8omUUf5e5UXy7650WnVFnrDtoa0hvicF0sg%2BGpFGsNXtqzoVECCjSzCgSS35rcsy5I%2FWBBEOGI8%2Bt%2F5pjTGFHX1f6pL6TlStdxd8QNVXf%2BLzv86yMhl%2FdT8N9GfW9z2T3MD7sZen4VzB8XJQgLesk1ipbC7%2BC%2BHs7DOuzlfmIQPRbWp3TdYMmIrli8yW16hPdMMxLMWXnkVYxRsEG2nLJO28eNEAHIz2dxZT563yiQ7S6yFCKWPW7gZjADfnquJiLCeFXKwKh4vZ6jmW0xaEcTgM%2Fg1uPW6N7MIwmyuJTUxc6W6WnP2aFkO3PJ1mBQh1ibeEzLhCywARxzwwuO%2BjvwY6pgH9A9UytMbBRj9jFWmjpZYsvESDzqs4oPuIkY4norjYIAiibZ3EyU4cbNbVMDmMYMnExAlkYw1ANHemEC2EDlKt2aKaQlSr0u7nSTJU2mj5qUEhk0OHHMAPZGfRV2j3JPRHZE5QEmntTLSIeLV6tQ0ikq%2Fq1UF4dYG3SyuUUI8oOg0NjStpcnnI7PiwPGU0oie10pMh7x6I7cCFpAU6afeOpxI6HEUO&X-Amz-Signature=37979d870a91c617763b9b1aea422005b4c7308b474337de7997952a4dd3ef49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
