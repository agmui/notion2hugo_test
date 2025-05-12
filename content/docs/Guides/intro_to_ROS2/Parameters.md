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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZWPHRZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC%2FalQmpezt1q5hc6Y%2B56kiO37rPHnVe%2FTisSi9JF7HegIhAMX4amyqFkA%2Fva%2FCnVRbtZvUUOfCCa5L8Hw8Yun5WV6kKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfmeDVMl9EzyO3hxgq3APIMc16yrXt4scrHV%2Ff3SRobMe%2B5NpO4%2BXHUHiwb034BXKiD4Oi%2BpJCE7o2s%2FCByRfIP8cVAEGLwBfAIixP2pr24ph7tuAFfVOrLgikY9btHka27eKzpU8VndWwdc8QlZfoBTrkgbOKySfLduw6n5XaI9vmW66t%2F408uXNvhA1PDfX8etLLsfmiR1K2j1lP5XVvtcEqfbcwwTcsIi81nMysFYTedYoy6gDXeXckTFtmbN9BKvwnxkXuQsk0ff5NG5xzQx5YXGMzM6mlRWmg8fDRyN4o7OJrJfmWRUPv6JbVXoR0EFCKe%2FhZgcQrMXARhg3qiFEE0FGnq7I4r1tVvraF5OLrI6ButGAd3cU2eqKMjVACEqmrp77Lyq9qmK8Qq7xpnwmBID06BLhob6%2FUowJQ5p1zJ7qGctLwE6wRQBiVRpdRTJhwbLzKzFWENg3cJXJq6yvybhHruJSF7eyOWKr05r1uPUPtBYGOK4XfRkPvuE4MHNXuM6yuE6KOR16lNH7DMERpHG8HuLXx5OuyBT26CAYbL1GtGxnq%2FFZwogwZWPN2S4lEhP%2B7zyd5Pr%2Bf%2BSCi4gqEaPi6Zk4JKqW6OomQ3SILue8hE3SMVbB60vpJ2QeRyNs9LzI81atKajDd6oXBBjqkAXG4HNXuneeFlsUwerowVziDqrtKtTu%2FAvi9jgfgtCYUS1pGwolAHQAIH2Jw7udGyhjsl7sRsiSd4itWNRwEwzQxPg69S9Raycv4ZHt1sv61AHT5SSE9Y8uQNjXG2HotNEOaTOuggf%2B4Cfr4z%2BYQmL%2F0sIPocXFTXR%2BP1jTFEpohoH2k0DZ3J0v2TeaCXICjoSiVvBEC6a%2BtfrrCqP5wncfyPFkq&X-Amz-Signature=ed345676d615a83ffdd484ed3de42e2a322220bee80ce98bc78875c7c12de4ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
