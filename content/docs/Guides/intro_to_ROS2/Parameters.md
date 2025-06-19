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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAGSHNZH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB5uTSK6cBkSBJMz6FjHclZrgybDhpDjtIAn8PtnWhigIhAK11%2B3Id1PAGXINC5OA2wGAMWQKYSY38nEJ0zpQ61yA0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqE6qq7Oe2hhAVaTkq3AMuLS07jMiWBLjh5wVN35bwIYFfiM8UcjGLU6l68Hs6brdh2%2FDTcjAGhFu5lysGU3DdJfG7SUfdR4PCt8UgXyNPUaJoZQ9QMyDlyN5ey7qUjjxQEcG85uowRnPRbDPernu3fJ7LmXougmOLDVu%2Bg0rs56hnYriiXoQijSdvF48yKv87mWBYJCTasMuJ3nqORXv6nQhy89XOTa638ibn4v9Y%2Fvm3fRF1zJf5cCHd3Qc8gLdR%2BBnYQVqtqsb8bCxsJr%2FzdKFixm3HYFTClxgQBmZ52WQlL%2Blc9hJGLCJyhH0pJatgPKvZbBm7sjQJ%2FNeXvZulLmQPZ47QVacIxS%2B2xDB%2F8nQ6K5hYtwjzFm0kFWYeSA66q8%2BzHwt0B1nl4Mc%2FaH8hkMWFBWlcIiiIVmFcLxSNFbdwGmvscJu33aXAUAh1Uua31UCn1zGi8MBLEewTtZfwDo%2FSOTm8EagyhfSVatZCTXxwuIBAZE6Uj5cwctlAhjpYjqgKiLKKk1k3f30isJhQa47XO3CNi1L8xOzKMQz%2F3HISLwIUmloc5eMef29w%2BQkH8dIAtERXe8eHikoyz0o66FYTqOvAT4U5M%2BeTZJiRw3LRtvM5SEVu9NvX5WoBicCPn5YaXfBuISmGpTDq0c%2FCBjqkAUJvhlgSaV3ZHpxFPGI8aMTif7BGZ2gcMBjxptRPSjCE%2BlJSn38Ub%2FlBtndMHjFXN5VMXZ7VoUZNx3Wk%2FJ2PJJ3dPqA7qkpVF0cxOKgZNr2oMZ%2B%2FdM7QUAeZbKXla%2B3EZNqnNSOwj2nszTud1fBkW7zEIVY8qR2hfkVCkLTUJ7dplmiZJR0Qlg6Sxhb42Sr8X5Hy5ltMoMeXyADTxtyZl%2FWvIeEy&X-Amz-Signature=38b4088715689aab31edc4b8884dd69ef95c2203f7dcd480a1bee01f5506ad43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
