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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAU2D4JE%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdSgJKUndnAxBAEiaxB0Gzsc96%2BV%2Fg1RAdesBztCPEEAiBJpSJsC3ZLhKdDT83s6bjI1KMkA14k9e5FpKxSg4jA1SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoa6ts%2BjEkbEqMHADKtwDwJaOuElnTEAta1jlcVEkyXuo6r%2FAdJ1OBjgOet4wGdo2WIyT8QeKeS71dDZi5KkTdYoA7qRItvHQliE1gOJPc2%2B%2FANKapQUgh3%2B0IVjR8zWxkGWGNCrRhEHd3n%2BvPGkxZ0fa8LkeWLna5e%2FsvrsPgx7MqsyRYNRRY22plLEWQuWgL2uP7nmh3glOzo2SCtKdQ8pUPVSxKVfO5xca2D6eu%2F%2F8YpLo00JTEvWPvLt%2BTQzneLjVx28h2dpJG4BSjiivQyB83geTnQVeW6sQPYZD%2BrP%2BfjXkqG7Wxr6QuNgD4%2FXTFOqSVF%2FxxE%2F%2FDuy4cBFw9HarluHTYDKOwvUDURDuNnGEPellH73xr0MJHsUBKR%2Bn6ftEI%2Fdn9UWuatOm1ucmTkwSmLflU20fSEhECuRzuBT1kv07%2FJL4CQEYPTvl5qK6NXL8%2B0n5L74GBD1raKZPn4lzecDm2KvjWnob6X7FlmFqmpT4Lrn1is5Wqess%2Fy%2BiFnOSp3p58VQHZaizjVsGELHAIb1hMMmQeKahXuBH6ff%2F03TZrc%2BklF5FFPpikOrXMmHbUnpB2iEC9s5JSm1G3VLYyZpNuDpk5fSAT%2FhB3%2FS9W2%2FK8B6l3%2BuiDVOnpsApfcglC9r%2BtdgEaf8w87HN0QY6pgEbdOxlMSkOcWlPPfbIfBGPVYnc1DNOSOB%2BTy9SJ260nK8v8hbQma6Y11DKLcnYngoZKcE2rblIlWwhir5zQwbCn0yi5aaaD0sgxvb2GyL0dxjB5YHH0%2FN%2B2PsdyUZ%2F3IQRK%2BQ2iEP7mcZD%2Bgd5aSwQgPrWt3GotOJCz8Muo3Y60VnCAxtv6cIM2%2F9wt4aLqrHBI0AmedbcMGYY3kryYb9yA1FzkGOm&X-Amz-Signature=6a4462adde7b116aa1a0c9153e02c2d21af47826d8084a8a2ecb6dcc3e867008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
