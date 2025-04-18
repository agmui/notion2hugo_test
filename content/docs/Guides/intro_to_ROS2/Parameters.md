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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B33NIUB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3itcyvxYg3w5NNO4oabtEi8ifHT%2Bq9P7mUw0Xo2QmEgIhAOdT%2BGtVgeFe%2FFCzfVEyMEJ2x%2BuAPDtrwgkYWfv%2BrjfWKv8DCHoQABoMNjM3NDIzMTgzODA1IgzLdR9uJqpwnuUsQ44q3AP48%2B%2FrXxVTq7inVtsJ3txucDhDCVWsw2nhKbpadWyEYSXeHcixzvDRWkZSFJbvXGOe5lOxhBt6W4NiBWlyXzTysFikF29svLKK4eMoi4GsUX4ZRtwYvs88yIhil0xypFng6Rvv1jDBwUOZz5fY843GOqW36E3eptLtge5tGWzJoajeFWJKvUeoVPgbj0GHxJRhueSQXI3JwHzPqR0a%2BGRfxMf%2Fap1AW1M%2FRryhY457jnIC5ABjKfEmBLLJ9q4KyWlmB20Tb20NS75YEzgxofh3UQIsDrXNV%2Bi5q0AMWB8r8wXVJteq4llpyf3NKiv7kq%2FZ%2Fo7DLa10qKPiq63C351laaKZyMJJT5YMFMRi7juJ5TkMYAugHoARbCtGSHJKF20ULSW0ImJycDCfVSvW6HJRmHdio99pGblzmh8Nju%2BboLk4CfFbftBX8ozT%2BzZMfy5gK98xn5hgAIHFXKZHaCMoK%2FnEYmgtskF7HEMLIjC43Lt0m28cL4bZBgIT9zhY6xLkNPF3qtDI2lfSfgjZgzMT7oEthwQ9Qh%2FFlWJskB2ZroYtoftCP2Gm0uOwN01pSTTkiwVvklw6zUii2sCPi9IHjDdu6wMBjhgO2jaCkbqE589emmW4AnggajxNnTDgk4rABjqkAVLoPg4%2Fm%2BhqvaRx1%2BTlrpe91YwBmyLitj1PERwd9kWm8rUQAzHuCXOVWYCgg7a4HaY73Wh7mHqYut8sGGS0zMijqIQZxU0s8l24hH7lXChIYdkfXTw0opUl3sqdLgKB9UDQNjEtSyXAp23ow0fVTGWmsC%2FOZFYdGvS8V5fnvDggJT17JU4tS7ga1rA6W2n%2FyLLETToTL9coRvqh%2BPUIo9uQzwVp&X-Amz-Signature=44059b92ef7f35b0d2309c2581a3380266aa86ff51ca3b7a316fd53016f1fb0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
