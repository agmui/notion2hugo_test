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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2LJSI4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHYGLX2VFXT0%2FGMIhcBXJm3pzV2lZ7RDPKyxNHZzQM0NAiAIjPN0Zv7CtRjm%2B4Pcz7aM7HEDjqUbDIsaDcPnlT9swyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMzi7Dud8L87u6a9NsKtwDVzDUVZQzk%2BA8YuX6HQI4GX155z3Bfjs5JQL9ERoJ4JjrAvmCVrukqrVdF9Y18yz3cub7Qgy5q8jR9JKVWotbfd%2BVoaHvT492vD49NmKFY9wZYKsCsqKSTi34CNGYokW7LQ2V5UdXEQaKBn6UHcByfaZZqQmz6GAq%2Bc0j%2FtIrhjc28%2FhXoxURR1ErX8qPwFvLREPDDiWBdSmH9I3t7%2FX%2FRBP48fTiz2NwnnTU8HwaBcRAy9H2nInyq302EVCf5cEV0lPo1xvmO3SuA8rKQN5K3k%2FopD%2BG2%2FhozgZoYkTP2Wk5eNiWrCzVBClXDlRTV6tbbynV669epYX%2BtlXsltcQO9BCTorMgXucUFHsGWW93dQjhJDsuep24V2FBv97%2B3pqpSxIKO%2Fh58JyBCzVj3f%2BSGHHEAnTJ2I9Um5oUwajvhswskBOJ5AFTaWNioGZVN44z1WxwoWCZJxW0mj2BOIgfpd5mOSFuHj2wM5tdp1wQVH9BlyHal5z8xSZC8z9ys7cHe0FLcbkBEbU8Fc9TY%2BAu7oP75vqdT5thnNCFeiZKnh%2Bd%2B7RRDzYgchRnkWfoJKRRtdTiG6kF3AZXKVFBmiKwODcqPhux8PJ5ijxOCjNTT6U9mEa1ABrDLXV3ewwitnsvgY6pgGgcGrGRdvlv43Hjn7WCoGOanN6NK2OtgthsEKO9SRQNCqGod8eN3%2F6ccsm1HvCKdAPil7IWtOzTIjV%2Fc3hfQjAymvEBU1OOs306QjA%2BS22b3Rshkj%2Fg7DT8eQaEIn5YO7xrr612P91GbCqLt73esHuwLDBxnZay8lnXUcPHsnPg7zXd%2Bi%2F46So%2BSrXTMYJ0O5bhkOo6qtcNy7NkTUESDtxBHMdqNk2&X-Amz-Signature=96c39470cc508b7d6db5298312b213eeb78fa62732009bf09416ba3df72d2043&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
