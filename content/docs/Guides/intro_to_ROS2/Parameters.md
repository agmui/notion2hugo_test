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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGAJVIGT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHIcQeASuntxy9jiSPpE5RC%2BfnBceSFqJGzqdpBi54PVAiAzkQ5M%2F7gsHuI7ahB4xD1xEA%2BqdNx%2F2Tv%2Fc%2FnkhnHJyiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMubplRsoM1cunCQSIKtwDO9tAOkP8VW%2BIszmxpTLn8ZKUZr2FwVSdol8JwVC5WYjfdQHXqzchND4FMYmhfAMeIHtlLGITnQIqgTU2FoIQbmdECcfLKGEGP7QAdtKl3s%2BV0dvlAvZpyBtpqdINsGezNdTcCeP5fSM5iK3xjBievMrR8kGgx3b0qPn%2BTF9InZ5dwso7OXWK88GyzKLxJOp8bpupgzGIuZHmgwt3BKs8quUH%2B5Fw3%2Bnr%2BwXcKUFiIRAY%2F7T8Op5QhfrV%2B0bvP4uciZObYx6VRAO%2BN%2BqZGhUM%2FQOwXMurFMuAlSi0XnVeM3ZuCYto4QAbVDUq6yokpv2yuCawb6ZHgXgFPNf34GAZvsZBtqICY94ATXPplN8P5UoR7BcUuCmmY9frF4ReNukO7Fu7nXMMK4ZT%2B1yD5Q4RUJxcMWXBirADp37fCv1zwwfqlFSBKe%2F5ZOTmraQGRQD3kBA8jlwtQW1s76bv3vsJ8JRcrMSDyvJWkY86t6tFNB85ocTYiz0sQv3fsYRIHfQjE9z0F6JW3GNrKxFT7jv3%2F%2BfmE6WW1Y7WZ2wnKsWB8uo0vd%2FY1pJYI0R77UEKaJ7qNcmmJ21EsuQc6VRt49r%2FRh6YCz7X1ilytNG0yKcKEKiG1E5otXcPnsvPeT0w1rzWvQY6pgGB9SakLQAxgFOAXgMdqAUsdgq47xqjHztgHsaRAc99PBVjyitMG8jP%2B6jQ8cx0WS75OiHlhD%2FRH7fyXI%2FkJsaLE2LyengaKwXEnb8MOgNOUtWv8Y1FUQzjZjA74DJOhj7w5y9WklT4FaRDMMWxXyiYleb9q6a%2FbNELnD%2BfX6RtEgfQ2BvqGFxaBOPth2ZEH0TNC%2BYRblhn%2B4i7D7S5hqRZRf8nrTLc&X-Amz-Signature=8e70163e8d3218ceb609113fc21162325d5409b57783b981f8465e95975c8f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
