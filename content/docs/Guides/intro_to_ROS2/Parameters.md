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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25JC4A5%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICIGRA0JbM4i04dU9hyd%2BJFXkdgYsMfmcPF7Ha1%2B28jAAiAoTJWM74jhiEXGyK6EW8gTCJslO2ybRUVS06rz8xq5gir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMCMF0jtHSY3NCXOftKtwDwWDgJ3BsruB4FgocJhaTbz4aqtdlzFHwj%2BqGZb6zuwlARdOi%2Bvio83Ajquhvp7Fn9kEGFP0L7X0vhT9o6DuYXGa7bm2yj7uTUSxDZqiiPlFck%2BEcJfBqxBELtiY%2B37gsN724JZHEybrpWqm2d4qKJ0J0O%2FEPK6uoCJI%2FX%2B2oTOo%2BcsNDMmx9twXobZjWyCWxiz50yoCSmj0i8MABe%2FbQgOqLoinnTsUnNGgVuliGBQ4nzYUVauKwnc5dKJdBMZm9kp%2FiJPuBN32QuWjXuhG%2Bk18ei3B4%2FSjUSmV4AeO6FZPMTE053%2Bc3Pc9HznfRuCpy5Niomzrodquq7EP3HotQFI%2BtfYbTxTfIWVFnXgbzVRHu%2F6gje5%2B2yVMx8UYbE%2FRCsC0u2qixM1bWraoyGZBdnf4QgT6VwaFhxPLrWAKuARGsLcGV5QiVChFYvDFxlIDVmNmRo%2F%2FDE4OgKJsjF71bmMJuRpxGnGJEAoxD8XId80zXUgFdCA5S5vgnQRF4xqMNmVFO3V8rhwZqmb3YNOvQG0TUkBEoqywrWsdYjmmq%2Fg2sQauIYd7iXqVHWLyQeMxkkyldLv2%2FcpaTh8pET5Hej1CPP1DVTPhqmagRpH6WqnGlQj%2FWE2KdxgAqsxgwpMnVzwY6pgEufC7DZUwJUEYa66xcitkfTTHLOtyAabo%2BkLRVDCB%2FUdJt9MhZ%2FX2zQj3Dufjtk54nPvUyWgSzAjtO8QFFTy4owtsSow6%2BCeG6q0bprgWjLeDuwVJU05bChDnweDTdQPyzXuuaootQSrmPW0IzgaKTpNxkt0aHnX79i95wN%2FwKqC%2FnJHiR1Q3UdRzMuhsUDOYFK4%2F5SKFL3U%2F0qPfXR50eF%2B7hvF%2B%2F&X-Amz-Signature=c06e0c43af7ce471df8993d636a337728b6246737ecd1a92fc812d95d0b5833c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
