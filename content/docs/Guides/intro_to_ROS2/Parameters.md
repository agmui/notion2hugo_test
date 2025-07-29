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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUQDAF7A%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz4Z6FnNErZFDKXpOceNzWNgFpgkzrMIybhHlhzpADDAIgZzVnxnP0lPkbtcvnuhPchsaSfYO4USAbSe0g8wI25ZIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxmUjxM2RlZnAbvpCrcA2Q%2Bj0GCQeBU2Pc2sQ4C2bJqehiT5dUeULzgGpumCdxR0Vy8bEqRdUg5QRIUleE565Yzj%2FV6UQPU8X1p8HQvykpraQvVe9Bs%2FTmB74Y%2BBCMqcidN17wAuvu6D5uJ7BNKuRCw5%2FJ2iuhBTlCvcl%2BxPhZvb9qCL1vhlNYP%2BhOya0Z%2Fblxy9A4ngAUaZE5uanUXPGPs0v4owUxJs55UC5tCnCvBYSJ5jsb9znOcXeF5RvUCrjb%2B1Z%2FikXi8HdElCtKNbA0qfFNd2M7c7FwRWQCHczvZhcQMGnIsIJEsVLrYifKo8clvlYyZTKAe4Gl6KKIuAfflFyDa7iaeeVUfGkPuw8pzRPg3j1b%2BeFWOwrMj4%2BwDqYowO0ZebvDFgf4z4djj3UzYtlQWNMF49XcYgy8%2Bw2YYGbp6px8SCyhvwj4nfj8FGaE9K88jEBwmIpFxwqJm0dnLnSpfzuDB6b6%2BDHfaktVej%2FUPSTDj96ykMATgH9gOjru25XdxLINmSDrJPahG6rW7cg9d6rZFA%2BAMbL8IRXkUjmvhVF74L1BHzm09tjkyZv9KCsE00DePslgG5PBmwUAFGXOvD%2BLDsv8E%2FTRrSlhR0b%2BiNKOM1%2BOPsxHqQZH3NK38OCgkT%2BDyXSTPMJX%2Bo8QGOqUBQVcG6MG6Ju%2FimC4t0MMikrpG78i1m5bAVTPWCdMuMG5KgGD%2FbCS%2F8b93gzDxd5CouWkphjIRplzglPTJyuW3AdA9nSRB3wPzrmTik9s7IPEHrMb5XO7G5z5uNHmvWQsodZqhWAHHH4o80feJEG3Z9TtNwh15UMgS4h9eGRNG%2FMdf3lW%2BY7xElut8lkkfuYxRx2l%2FNJDDnEWA2lLS38RGhM2j1Xjq&X-Amz-Signature=cffd62e629aed447c10d6eb41a6a0c400a73a9d5bde335a8ba8a3cee26a89f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
