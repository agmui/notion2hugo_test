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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJRIBCD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRNj1xex8EgTX5Mas13VvFJ3dkve4vqZL0YAdAD2MbkAiBAnrd0gdJc9DmR%2Bt1pzDxT9xjtegINc6KQKBVkPODL%2FyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvqV0lRpwqgYCoAmCKtwDsWltiae%2BepikYvAvDZI7vGG8r2GAcPuVy0CJm5wraqmXWckn4lwOOCWXL%2BFX6oOmkKIVcWvVKjUVA3kDcE9hjuSIb7urNWWbq8jBd13GwJPAjPxpJWScXgLN0q6%2F3ITrWqw1tTtMe2ZwGRnZUBhHNP3FQ0OcqAkaIXXHsm3rV1qR3GK7hHbXDW07Da9L2QnSQYL028YPtB6gj7iMEKq14RYVyjDRyDNiddqNHNsdR%2FrEN3TDaOvhv6FV44YdT4KcL68DqQOV2fdlNAO8CKqy%2Bi3WUyoAkElUm81ZOxATLLqJqsKMsUkHyrtSDYa8f%2Bve%2FNiAgThh8eQvJEJTTTbhbeFR1OBvKztypezagIOiyHYwx%2BYcJak87WUeMXNjn1GydGDAhS6aQJEH6xcZF7b0zYzfrFEg8chgFjqS0edfDku9JvFEuFOVYLtBsc9I%2BCiHOwXCe2fHfCfBPwHcZMpx3bwZZE8ojYR3aVkTJWcsUSKSo2OLyRo4Nwj68dFm%2BVmWsY%2F%2BonnhSlK51w1DDuZsO84EsJjnMH%2Bu6zMluaX1b9hJw7g1vH2I%2FXNuWReisDedpDbvlo65P0iDcUCDQ2%2BX5aJV3hMxB30HuZCDMakQWo8OVl1nyswoV1BY6gIwguShvQY6pgFxSpg8CvP46rjaeXkDaGtp5EPUVxNwMhLXSvhMPYRxHYzV746Q2lQ%2BSs9mow4bAqGlCYN5Lygr2tqSQSh3Y8AGSfH%2F5S2KANuoObWTjXP0HpG4Buq6H4nBI1NynnI10Q6kZSzjRqQnIoy54ESeyO%2BgWyMug2l%2FGPMuVgNb6ZiiGYA3%2Bi4XxPWQZHIhklLwn15jLKsCAkd%2Bs46j%2BS740QuiI8m0UoAS&X-Amz-Signature=feb4dba0a64197581fb8125f0137e8d0ce0306424ad82c72d70a96695baa4d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
