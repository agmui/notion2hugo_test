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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGJAKZAO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD1Pkrexa5wgdOyN%2F9ooAphSFRcsuUIIPFmYv0K4Fr7OAIhAKOx%2FBihUfZvewSyStDOeC58auZ8%2FIU37dXRKFJxSEKuKv8DCDkQABoMNjM3NDIzMTgzODA1IgwdkhkB3yBC9s2e0eAq3ANpjNVdnKKiDN7p67vipFYgoBpGxexpD5M%2BMI30YHTn9JlycsQc0iT5TyNmNsFxBEAj62YjokCkk3I7r0oisOp9YsWjMFCfHcBJaoKYJNNB5gzOWYQEy4AY5a6G%2BfyuwMpBwfePSarl5dvOrlH96P%2By0n5yk8PEpGMQxI8z2CuYbZ37y%2BhZxw5wCVX%2B8ihEexgrbM1ES0LKuElA%2B66vv%2FVIhRV9QiiuZLjo1%2B6BIT0nd%2BbkPK3quL7y5drQMMkUapm4JUQVihADDnXxydsSnJhhJ6ietypPpiavwl7J%2BNNfI3Ol8hfI%2Fy2uRVAfCwk%2FCRcm0eLo8lOlYdhthhNC6vdSgF6XeHmgCG%2BYPnmadfwIHuCxcBpQGEq7Jw1OVTCeGpaWvgJjxoqOZymIjEVh3nAeQsHwEstI3c%2FORYnp4knmFvRVXrQpYNgfiF5uQJ3V0bd6OQi9%2FcbEDvJi3lnCUtFCQgq1SAsaaOo%2Fe9WVbaAYFvfjtqX0Gn8LQ4KJsxTHv6ckNs3kT9rSpE%2BgyipaSnCtLZM0RLKuL0EYQ032JnR6BkzI2k%2FqSzS%2BS0uYsl%2FtpeB0HgW3diNh8SDQxXtEfDO%2Bwn5jBGhVU1K7HMxOAirBK1G6KtpJz7w%2FJNjKVjD0pNbDBjqkARz%2FQal73xjQeTRhY%2BExZSFxSr5CzXbKSYxxcwGjmImJXW9oaux6SSUHzQ33016ecsR0%2FYnxvYbbdK7niY%2FWUOaAnk6oCSjr6JapEk8mv9vapHEwgMkkocmfpQiLo9dcCOtdTOHLlOD0Dk5a3S55fp7t3xt%2FR3Fvdj9ylMQ8I6Y6O%2Fmyh5RH8%2FirSVtoxbIsh1xo%2BTblKnDl%2FHJO5E1s7W%2FhJKpS&X-Amz-Signature=b2eefbfdff61ec3e2e2ff31e3ae44288794340f4a555a7ddd52e11912dcecbab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
