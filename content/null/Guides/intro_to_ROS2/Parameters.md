---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Parameters.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJJ6LVU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGh6VSrszVImCUZH4YZXpFy6ZRg%2FD51OgRiyQBfBi5SXAiEAlmIXuWHc4xwvnRL2F2y3e2sI3tym0T8y%2BYeVO99rXu8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOq7X%2BgP5%2Fi%2BIn9i8CrcA2Wt28NsHgKLqT%2B%2FGjvanMtzjJlj5dEdasME9ANLN%2BZ6txhUcaQlqKGm1un%2BvPNdjL%2BhizopT5ND8PzcMcVLPwqzVbpSdv7OzCVfXGnoGIl5Nq%2BcjIzo%2F1NAqCoDKG%2FBQSB5xNVwjmpTMjoHJDn46l8u8ZoCeqr5OPBccImAoO3gOQqx1aLeAQLYpz5tTOmt64I3IWAvBoAGrneb0CSIChkbqGpUdqyDACz3z6yy2F52v0KN4eIOGToWUIVJb9qv0NNU85Phx1FOjS34FTYBLPJI4IWouaFa4vhgqUIdv34UMbFd7PwN1oslZs2uWdg%2B8E1l%2BjnKimNkKxYRgMUAj5zbEq87kbmSMy8bxL58mkgfzKnx3mVliIEQZOak%2BhFoCev4BRYl1rzh2aVS7wTul3jdDJ61BYjl902y6Nxlm%2B6jhbWHxQAYR9bj063yt1XaWYYTcXVHmDfcn3uysg2L9R5560hKPmr%2Bu8oaxAT9TeMayLQbpuKMGym7EKq%2F2i3kDS39ri6PN8C2X3FezrQ21tlNcg2U43RQ%2FQ9kuWurn5%2FJiiBbrB6ZSEzyk97MaO7KJq0J3xLlIaFCkWZiVbiL1CsmtCtZDiBnMiDARXivHYxDar1fLMERpNdijp6nMKvPir0GOqUBqcbmlI2j9X4db%2Fj5xvgATS0UeU82CXyR2GesQWWw1TwZ7lxjGqnx%2Bdgz9SZCmZAXkL7TyMRtlqfQtMlIafgaOadnx32YMmcfLsWlRcFv55D2uozwkJ0WupGFOV9%2Bl8Glkhczaqu%2FFj23wj8Ofg5QUaL9MW1aYJ8nk22k1d2OBuRe0Nq%2FbZHlfAi6kwMiaQNj2BYiQe50uRH2UhQJ0Zj%2FO3%2Blksi3&X-Amz-Signature=e37c4c1ab5d9c4d24f5363c9a0d43494920d3d1d32c83fd6b0c3347d1da2bf87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
