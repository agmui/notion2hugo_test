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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDTELO72%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFmmJaeTGub2ZHIJZExylcauyDj5M5mB%2FbvSccU4O%2BZcAiBdxRr4pfZhmDnr9%2F578P0DixLxnHsWyVe1mUWSaVKF5iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3%2B3wR%2F0FXMiWXBZxKtwDqK4aaJLKPt03WFBVmGBd4qyZ5aYaKgZd0S3KWd8p4kF6sJkafxh%2FIMhqfaC5518SHEgr1qnQQEHjyhSSLgw242LbHy1hQunokC3prY75uAb%2Fr7pmUJ%2F3SEhq93gJa9bpZn8%2FnpPOZvW2qvcK0EljFZ0Xx7Ry3S88ARKk1cHFnXxUEtuxsnYgpLTMfZebcNHEQDO9ClmPhD%2BvDQPDI78LC7Tb9JS%2BCJieg2gmiWvAcZCGdSEgTNP9hgQb%2FVNwGOSw8AAnxtaKrK1zdnD%2FwEieJhLJ7Laf0Cvg78792t%2BT3cK4%2BMBcIF2fSJ6bi9Gyu8QquZs0Ls0GOAXjZ7xD50c2GHTcbuZsbQFIrQTmbWt8%2F1u5ZyzEbNzx%2BEWU0LjCmXjmK4OhBMmvuSHBudRoYnCcwvC%2BCn0wPvpDeFFNXtySJq0fyYMvuCGdesxNVzwgPRAcKUzq9zj6LIJaXNUfqaSid9qMLzTgdD5QcFHj3DYKyVGFvT9dhbh36PpkWQPzAZq77EsUrmK8wOi84WEajG%2FX%2FUp0ghrLIOUSz0wyWVibYYTca1dXDjbJxUikxBwGFWM4nNQMMoQVTbdTgIqv2hccDQKq8L02ESD%2FXsYxqiJpG8NSu058Z9OQQukupZgwuO3QxAY6pgGJ%2F%2BZBq2x%2FUpeTz7JW%2BIamUAEKpuh6S36NlGExz7%2B2chHOzw0M4IFWKcO1yWppWeXqdzMZENMcsFtetUWw3pKWVDAuMH%2B7lSXWkg68l%2BDtDP3bzYXadgk8R8taPHxFILUn13xZrTSSvNBNi5LS3%2BUAfaHa3ce4kPbH2vLGbq0EVpV4wVUtEkxVbB6Fa68XkH9j1gV7khfoo7vcDqG3orDMbAqLaVPY&X-Amz-Signature=1183170148703c5bba20bba30acffd18915fdda39e10417f39bebcf5c303a8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
