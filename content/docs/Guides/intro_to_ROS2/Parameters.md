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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZWEURAH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESC1wCBQ5nTZ4oOqsuYksxP9IlVW0c4vkfcl46D7ZlXAiEAka2o6ImW14UywoihIom%2F7EsxqpoldyHPey3ds4JHES8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJh4ewTL9xjL%2BhMtSrcA8UsG5JAH1IHJdloKOEMxfzmieDfIE3YOcGNxo5NBIauG4UijfA20Q%2FqCZocA4FiRCh3MbXVXtwp%2BrmCohxKmzlbcU3dFwC7M6xqZgmE5nQqKWjn9j2Eu%2FfXrTFaalDK847dKWe3QM%2Byns%2Fvzm%2BZzR0QKkSZa8qMawHrAdqcD3rEW3wu4cnoa9yq1Rs601zpniD%2FOY8N9cJsDoDe%2F5VVdurimP%2Bmdi%2FrnXhZ8yf1XZ3jo3dhh%2Fhmw%2FvXPmaY3NUiNZApGJ5zTfqOo5jQtA8emaO9yHZCXBML85Kfei1z71%2Flxyd6TdoBiJFchky8jCMxCADsutXmKekW1ptqbiWh7mEIco25eGhY7so4I%2FPrd%2BNXzeDpGPJNGlEQGQ%2FaOMIM7mOe7dY8X1JBCQvdr2QCpEdoCbeAW%2FHfPMfq6UWnZEWvsQypCW5%2ByjvHFXjEZe0cnu3dPXoEJJF7nQlhqJYpQcZ%2FtdBSwso%2Fr7lWB6%2FVWTe%2F19%2Bbek3KQVQLOWUXqhqULhL%2BF8uiBhK3toz9mu8IzCuBRIF%2B%2FteCtAzve1aoOXO57PuCX4RjkTaNEDNTI31Vzs86MC%2Fgu4BctUnJsNzKxyaOjGW3akRvBn%2B1wB4bj2MZvaYtUpB19lj8b5ywMPuG1L4GOqUB1t5wFjVXp8PU2NYpQCaFtrnftPxoniIeh8IGS%2FynuJ7VygvwHLL6RtT6ItuAft1fLQFnRCf47sSrCviS%2BZDy3kCxqXnlz3uUGiwKQl6Sm49M7mdqH4BIPK6bfdbGJ1FORxE%2BNt6iPKvNO2%2FfloL2OrtcsGdnDvdpOObntOWzQ7N9L5G2%2Fv%2BhsQL0YRb%2Bg%2B161PkEs51ZWaCtthd3gXMFRETyD7ML&X-Amz-Signature=bf5fa5276e788899f752496438416ff5b41c56972d795f10700e128b2c6a109c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
