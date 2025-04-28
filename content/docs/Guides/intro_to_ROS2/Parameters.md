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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGMQHBH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAc2c1SS10YonpX3Qyq2%2Fm5lwaMiGUfeUM1IGRbihdRmAiBeDdY1lnimoJKkyjyn2XTTRzf8Il3oSJKQT1IqBDJqayr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM5siuj8CojN%2Bl9NltKtwDWQEer466X9MkPfHTRXb8Rh9h0RNE7Sac3mK5BQYRheTJsmnqw%2BIu%2FjRqy6IOpdA7hEJeF%2BeB6EOdlTIP7Lksj%2FIT6l2gmwXvRsYEeZnlBWNbSKUODjl6oDd%2Fbw13iUoQbR8PE1pO3HWDEwV6vnKn5iIGypxIlo8BpSUGuJGAYeetGR%2BeXHeHwp2eihO9BKgudTCOsVJFpqQpngkO6Eb%2FzwZB69T71oEtOtWnwfzM%2BjO93U2IjFfR2Qx106QE1PgZHgtgkQaDkL2Ux4BSsfUBU9M0phDlvSelJ9rZZy32Crsicd5Ym4XplSCKhL0EyjXRhFttxBfQEQfyJmkyk%2Bt96k6tUWI6yc0YPDV3HZr4osNUi%2BZshvw28l5I52eUqDtYlblzjEzSBcvVnwXt9Ony0wwQAxUmPLrKHXemcHT%2BLPsaTZHrYTv2tP4yTsvG1TlGhFrCCeOaPcr9qxI%2BZVAc9YqzpMt6ILivccI2Dbi0tASl2XWZlIbZGd5Ov6QkYkiLuJt9ZNuEO1Qf8YdsbJPBcq6b%2BmLXK4yt1%2FbnrTcWVw6ruomoYjW0YrMzLg5ORIz6FfZhrcvsP8b3YlCXpuNlp1kaAcYXQrX6VD7yN7hRijib%2BYmsCqiFR5%2B92YIwhqu9wAY6pgE4NaZCvRrIgD14Lg3ekFQzhN3sqYKvYBcNrBnJBrZM6gtgYZoKmG8F1%2FkQaAzbbS4L8Epcu4EML4lOLeARujeZfM%2F%2Br8EncdmVnPdZ%2BemL78xNzXENshAi8VtnvKSp5fG5z9j7KGo23%2F3YzuGFqavSLVXZU%2Bc3eVmv4NAesYMD70XGxobbByPxdoK8EleuED2UEd6KuKtlV5a9PEPgLYYp4L3Cigh2&X-Amz-Signature=909113f5edac8928f8f49235d2fa672a7ce6dcb138d4d65e0b2b1239a623e2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
