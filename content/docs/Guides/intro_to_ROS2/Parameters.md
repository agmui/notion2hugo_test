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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZGFOSK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGwiYH5vqaxWwUKrto1p8P%2FVl7bqWU0qWd8jWSDDoAGzAiBSTzHCjftqwKGceHB5zZ7W8f9dVsTqe0wCLG1Pj9Xe%2BiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWJLokmG%2Bg%2FuRGdXXKtwDqgqtrt5hDCAnQbUjQSq0s%2FNg12rwFB0YqaUeGnn7zFxrs62h%2FjbBicmjlq5l1QWkHFBgQzONARQ7jcrV9MXYgl5GAVGCSBm84%2Bkjd4oeH5JTd7ungeSD3UfHo9A%2FUK5UApFZWuhmeinWgOOHObpVzFc6OCOkWNtOF%2ByL3vcyFMT%2FS%2FhCfYduK1PF0mOkH30BRXRrgJUc9d0EbMyGJi2faNmVPjDSOqEM7MTQpMd2qf89iE15bNtPRr5X1wDB7DMeZxnLLLY7pcy37JjI6PMse9lvrv%2BXmKgcmH5XjEMu7GBNzlr2XsguxSVsmuZLv%2FyDPq7eSEAtx9NS0pT6Tgv7dA4fqK9rX4cU9pugFldQTeluUBuixxxpKznBaHop4V%2BiNHDc%2BiQ5cw96e7Vs4EdK1u6GcObeg%2BVehUNml07Ofl%2BxZlAnZUykYhTQlWdood%2BRi6GtSCwfmg%2FNdEkvrdtzWzLzskifjrOgWobkXxo0Cywt5hGxnglvpAJ3yE89ef4scvzEDkQqjrHMQnKt6gld%2FPV2zsKFAGKj1wjvI28zUwJb7pfcV5aPL3NSD3UbG6lSP5nQQvep02HZSzdVCi2cZFwwm8mBuvY0hfBqk%2F2aveDWa0M4%2BP2vSJRAFAIwlvvVxAY6pgE%2FxmrSxkSFtWcwyb%2BnpXw2ZMVMm28bgPtRILlZRxahGP3wVT3%2FqM8L2nGUG5iOspMh1jipifOq%2BZHV3jX6n1QDtRP72HUlCBMFLo7pmQ8%2ByAbsxksU7AoJqrMQuidmMfXEWNgj%2FPNVd550QUHvr08tC1w0a0bIGm6SHHjbVp%2FQzoZQP182onJt3gXHaFAAplgpSUIv8g%2F59%2B9knJRXQYRyBnRrt4G%2B&X-Amz-Signature=8d98236e5c11ba54e62e7412d8670ecf6b58c7bc4193e5ba735d82b5933ec4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
