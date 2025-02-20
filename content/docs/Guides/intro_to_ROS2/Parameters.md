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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B6AZYQ4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B1hetX8m%2F%2Fc%2FHNNliU9ompPddEds2%2BTbTp0yi0RJqEAiEAx%2FGfHwxfdAJD5LiBnrmvOLhY6jQkZpUZn0TK75n4V4IqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGkxuJPfmxUsdNvHircAwsWCcnpnFedAwrrsjZ0GSVwQuaIKc%2BY4FpWVOzHLwfj0diEtXtpHb88ZN5PxaSUzKMaQXc3By55iMrR1xe8lAPP1SZNOAEa%2BxzZ%2BXRYkzPi4gXjUTua3RWK5c0NAAOg%2BzgmUWA2WtHfXkbvUYvcSaR7MYICSH8%2FZTSfXr9h9C5%2BhjlYDWH4uDS1Zzl982ur5FJNCFt14ikSSCLkVx79RTV3eb8qbP6BDSby8TpTTOl%2FCp9wX8pFfzBo8Brv9s5pE8xX51I9GcCZHLaAfk5oMdjtOVfCheKhwt9jRZeyujKwu99%2B5%2BkV32RnoSd%2F9WYu%2FOkkL87TXwnzYzDxwgJGs9vM%2FRgpfZ83%2BUO03IY%2F6ocF8O74l1pVzryPAxKKG9kkyzXzVVdvKRgrZJihRzRqNFDw3A7IYrfxMuKmOMpVkIDYsDp3rjHmOG7b%2FWbq8yPkN%2BVP7r0ZnMgrpdXuHS3tdijroQkqxYrhzZmYmD%2BbfJjA0eQdN%2FKbLefFKB673Wqe%2B4LvebxhU3MfVXHMOjQPmhkfXs8euxPRAmcJ8uXeYsToFQVJUZwrz8avlBOB1wnQZLq%2BkvcezkE3IoUmko%2BIzfK%2BDcDCMBRUDZ%2FqeBWPrC1KlY0R3ah3Enm0Ba57MIGO3r0GOqUBz6Jp7FFpg6YwLHHqpI0cIxYGsr0Ojj0CZMjhFVwXF%2B%2BHtjQAj2mkXN7XeQ4H22RItGl8YpmswtqLUGIS4rmsCyAIeK%2FwGyP%2FqrT9nZL9NYH2JgQG%2B0YI9emefSi4qgl7bWOHlsXTtaigmeJ9NwHiHNOQxZodpHh44xaOEBr82Q2kUsU%2BBdOOoeDhqnIJgKnoh8COEF%2BVNX22GwKw5w%2FYafGlAAzF&X-Amz-Signature=1cb2419d5c47b4ee1f4385332c1d4e099fe01a54dc08be6517025c3cbf75816f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
