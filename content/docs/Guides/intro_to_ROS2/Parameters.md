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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AYPS4JA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXDIbmqb7LB7B2Ti9mqPK50KkygqOMZr0DTh%2BKyR0ilAiB9OkJDDP0zcA56CYgxFDZmRwtSURcypxmx5srWS5X6WyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGbx1gu1TfMBCzye4KtwDczycRstdRi98qoy3S%2Bzf16sU%2Bw%2FgZiG5iwSkzvlAQC5Y%2Fp3Mc7H16YluKizFzBQwUA2vJQ1bCoKnfLKyH1Hx1wK1aVEg7n%2B%2FRtVAo8nTuAJDzrtFf4JYKP3D7PQXsKEoAUSOTTVPPvYk%2BRey38S3Dba2ZbES978Hl6OJdpssPe48XpqVgz1ijPOdZm9yUwFKNXKqIkFHV%2B4QmsYhqLgRlzjwuo8uqSqALOKQ%2B5%2BSqwgx577M3Jv5RGAc41ZwxixbmoOKb74LRpjLD86DI7LxA51Y2Hk%2BMFrBMCsQG95v%2BQxyD%2FZ01nd%2B1x1cj8L5RR%2FW8mTbI4pS3Ghl51nWcXWFb8%2Fpn9jmjdHlhrusPqcCrlaJjSqTtBoohOys5AmhRLJJupoF6xgFldnCCkjmtBD8VM1Qq1g2B%2FHuH%2FEmTNn0AywnZ6DQAVDXlm%2FXH8CrSsPWGjNjDPelbBW5HqVEBd5IwertKv17p7ErsV9PbBc8xyupotT9Wo2Eslf1DBhn%2BPsVD0BP2XDvyEparAb8Z%2BOsxF5%2BBlu82I6oj5lrnTn%2BcT535Ys%2Fw3F5dfxrz0C8vHTk0wfrd%2Bjs04D03YnYRsrwAvPf2GBJqxyH6YOihwoOybKS64MtE0HD3OZJB9IwqcjnvAY6pgEY6K6FV9hUIgqSW4j6eczcZsY0MOp0LwfnfzJ%2BHjD1o%2B3ngf%2B5%2FpScGE7u5dVhYKUNcI9cKiQNGDVBCLz2zLCkdH%2BVLopJxPJy1tFY5sKjPLu18YMU8P9bFYqs3aDxc8GobLNuuybvron4thif2MqqMLJIMPP6bAtmQEyXj6VR3%2FB6WP31N9QpYDDTCNHGmUS5oc%2FLOEeCAxOwfp%2BIAnIDPKr62qum&X-Amz-Signature=743ccee3f7703405c0b0e8a195bcdb7e8929adbcd616b4c4bc8e8ee31bb8add2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
