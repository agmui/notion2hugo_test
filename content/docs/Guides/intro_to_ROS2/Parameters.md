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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOGAMIGK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2BXRvoBGIfKTioYV%2Fbpa9r8yyGU0J981gDhSS7eILwIgIIzixxpJ72f6%2FWp9HOwrF24eJGNOoqkIo886dggftmUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJfHlsJEdOUS%2BAXgJircA9YVPnD%2B0rKOgctLZbVpLSkNR2LNJTrmSdse%2Fw7knJgUDWtI9h5MKYs%2FGqVUZ3J2VFlAHXyEcVbwMCa6Z%2Flvtp5slg%2BVC99MgvK4tdRblEX5KhYROkf%2BBFZwFvP1tDZGNN2pctkuJ9KoOxtaKFaEJK7NVbn3rfVKDYSa%2BDF7L2qS3S%2FswBOHWtuPAcYhRiS8MExvzNIFMClJ8fTqf7ynzHAfG%2FGm%2F0jyp0ieqHfS33A%2FgW5eBaqj%2BLUmmnz0tL0mHShf0JjPHzIQrOpG9IOH6V7pOzy%2Fbcs0WM5FAQqNoORzMNd68EUityOiYxrUv66VRKWmRyyA0ZgYT39DFz2wCrSXytF%2Blow9MRoJiLWOBKnqvhDIjb6V8%2BipkKcQ3t%2FPQcICGlUypMGLihuU5tGDaOzW4piiJyfrGZzAs%2BRk%2BYh1hGnnMfwsUVKOTPMboSMSAy5m11hu2c3VnuJch5CfPdWUsTOKa0dq00sAY1u2J%2BaOkLhFr88Qg6GhEsHsJ7VQHeIhbhVXAmFAa8ZKuFgvRcGu3kcoDD%2F4LmY%2Fc85vCtLeu2wmQY1YsIjzwWaVjtm16BDjQyGsJsvh4aNdi64dRHLm9canyafNoKmA%2Br2iFgUFFwQSBv1M8lMa7fsiMN298r0GOqUB42nTSmX7%2F2zRLmmcSpVZXSTSb6ACjfYhF%2ByvvPYeIjSrWDfXesFpqhF73OIvVsf43ElcjcYkC24vfkWQIn7QnuNMi7JFBlMljelV%2Bo3XZGWIRVJ4TuJ8Hh2I1Qnp3fEB7hyvRkhD%2F0rBxClADw27A%2FFpOm2zPHHgHAlhZpE1ecF3pi7pqy3lwgPXS2TgD3Wmgg6JAFeAkaVFF9TtPTFiZIInclYg&X-Amz-Signature=e617233835f1cb8fb8dd05abe7d42dd4976e00ef4e935c4fe253d179b17e2a31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
