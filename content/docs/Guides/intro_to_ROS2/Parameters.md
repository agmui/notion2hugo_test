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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GD7EASR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDxrDhhCsgwZl%2BKzUP9pQ9S3lq0aDbuyK8q%2Foys6c6F1AIhAPib%2Fg5Z5aiAgLyNZU0gwUJjkpjggK5m4TKrp%2F4y46bKKv8DCDUQABoMNjM3NDIzMTgzODA1IgxXi8MPPVO3jM7UxxIq3ANGR45UnDl9Rz7204DRhNOh5K4nMWA0Y%2FKmDf1pUp2S2X1hCNhpyQbhu1NQBhiBCuYD2uInAT2cz6NKQp01TClHoxlFPiM9LL8xmqXZJYxYOYkUcUApPYt5pw0XYI%2FMedh5wTD4nWyFc%2BLA%2FiACbWHWcmy4GKvifvV3m1psQRSrSzXliumEIz0BIIlN3FJK%2Fm3KFWkIOu8ZgpBxUJ8jQSwDWkZnNeAysWCn2%2BCVG%2B9HrXXvsm%2F1imDO9AzkWdfsputFjq%2Fo446vFtMeU4ihaJzI7qMVASYJgE8e%2FOcJJ6WOyQ%2BMoWoMl8oIh0iRsbelfXuMCyV7xWfKjLJt9ILBikPVXB4NXXNiJv0rGP2ceP3QYSns0xdKRqsIQL4A1Zcu1pDL30SXiW8FI9%2B1IWnDTqBy4xgD7QOPJvIL3EjDAYfIGTOG%2BjRhacZCuJVM%2FrgerWJwkjEzmZXH5T3U42S0GXYijuNpwWR9P4LbR%2FViMvXbo0tSKM9H0YkTq08PO5xkhJVg5%2BxSCwEp85qkwD6m%2FW7qv9XEoIrmLYkAc1vWudDygrBPdP1mQRnHQvoYJ%2FzI%2FHR%2BNA7ugGjf9ZHWZvArjSXBDs29nL91e3M%2BE%2FbGMRQt%2FX8TI%2BVGzIScgocX3zCopLfCBjqkAeAl4KgZgsJHbuVmg1hQJs9tfa0IqaOgQwLW3yoT5%2BCqmVTQDtYtFJowokCirlrNDvqdDrJ2QSBV0V4k1BepiW2G7WjFsMKVcTjXH45h2SIkn7VLu8ZznoHRqs%2FpLrpflGK2YaJAdOYEl%2FztRHfAItfKE3dSrhGQpQdvIpoxxQefTRYiL3A7Tyaxy5ZtDCue1YeUsrLEuWZQZwqSfO2J6%2FrCx%2BY2&X-Amz-Signature=5ee9e158b16dc06e546c3e2c67794ecec71418edf20664e3354dd826b3154ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
