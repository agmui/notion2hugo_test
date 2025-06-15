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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2KVIOPN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEuiqNnXYOKZOTt6s431T2X9WkqgjOdNjuehX27bpnMKAiB9hGykEwj1luHnbqQ87SeCVITyg0hg1GvRpTHiE5oqTir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMrkhJzFWWGmE7h8KJKtwDyrqyofbcT%2Fq0iS%2Fdg241MkXTag7rLHLcO0ZYC8GJK3db7bgkSXWoBQuEpNAbCn4%2F%2F2H5F28PWA6IC0XhqqXh%2Fy1KlqNSVp8uubImgYVr%2FtK6vI9XN1gKhQkXBRMEaAfFY5AL9VWo47sjkSQ2oMQiEBTo270%2F8xMYBGB0Msh2p0vMCtSAx%2B2OB26NE0UbXh9jsEDpQGm1idoWOssQ4Uss%2BOss99FKO7EQ4YOIWH%2BihafgIsJ9IHrxuvVbRiQ6npUuBfuytI7ZmPZljg3nll4ZrT14fen9Iw%2BJ8MiM2hs0XmbRLmgeza8nkETF%2FWpX4GYVRiDVGBNMRR9lUClwMeOekRzR8fKyWQnFX7FzfWCq9t%2B633QTavde9JtEqQn7Vqdndh35u0Dpt3SDp5NKgnSFgPbkiwGgyLmBdDUNHt9MBqyByWqu7NDyiYCMtURtCaZ5HtYTuEV5whUBV4cjhFnq%2BH07jXhLTv2xSf2uODunWaTLvDwQnE4zwu%2FiqrlZqQa9h1qHrElkViYwRPF6vAiB%2FOcU%2Bmer1Rp6wmjy1UyABpavW8Xo1pmLmcs7oUQc0Y2%2BQr2wQNk0T7g1GB70GmpXHijqx6Ra%2FVLC4XVNJUd27i5lgAnfPR72UeOO0egw5aa8wgY6pgFqAku77z%2FcGDrjel6Ozn27a3YsFvy3gngf21UenX%2F2fDxsSm9paq4HtM19hVjPdTzgqbeg36V1Vh92FVeYFSp0lqJfZm09VnE7w9NZIECeUC6v4%2B%2FROw8XlQctRdZbTlYyFj5z4H%2BTQGknbfPgKQF0RshTQU%2FCp%2BfnIqNEo30EcJDOZW5GNXMGfatlYUzSO9VCBEeiEdQqvIl9h%2FCH%2B7lt%2FJvmWbIL&X-Amz-Signature=27228ed0cdd5ddef318efdf2392474c95a76e8a4728e5660442d102a23c4e5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
