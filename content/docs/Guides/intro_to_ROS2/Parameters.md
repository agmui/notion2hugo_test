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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RECCA74%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCLl3BL%2BX863TPpSoHaavzMVHUtzxHHrjkXsHncD%2B9B%2BwIhAKkFiBvqCFAB7xaWA5cFPwKD0296ckuhn47IvzntEkSDKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6gxvuLgpb7fo5DUoq3ANEvlzY4J5qkvTEtwOACRsuEJluxi3kBGm4e90kjQ5xtnN704SXftt2ZeeWy348pGnDbpnWlTfs4LNqE1Uwp0wg1soqTT2PtBZmt7B%2F1kb4YqHTrq5mHQ6kj1Tl229ljp9F5S6EPb9vd7kpSMtnePBSpNHrDd1KvSt25VhFFdgSBpbvrj4sowR4Xp8Rg6Mj8DilB1BAGofe5RuuXJvvKn6eOyMGYXG%2F4K3HeroqQoNtJgbiF1DegDn1jUqCu7nVtwiWFMf8fO8832NJgtsrAWipL%2FNOqwp%2B7JjiMFB7iLuv91BX%2F7aGCtf0H5oq5jIvuv19bVavN6vDyCRIg6PLVknCgEKRfUE7eFgLFsy%2BcIXCULrhUMtqxLltBHFTKUz0ZK8fbhztZFleYoPC2MI%2BOs%2FxPD3Z%2BW%2B3KUlIMRwDsY%2FGEV5SZfGURt9PC4GAG8gsvM%2FlcNxEvquUeWH3mP7TA9m9gw%2BWLwYRjBiXQqQUk%2FSufeGzbhqLj%2BmYLuuexjoHR6dFtSGJa6Wx3lpMCrITKB1SVtsKrJuuUGZxgXqcno0iWuZ0AsRyvv%2FlBdfQ8v69geuFFZFllpAfX7DP1zpBytMeutIuISr4JURjDW%2FNN9kfnlh2DanoaZFbX05aUDCq6eW8BjqkAfGN9RPFyY%2BfYAvNfNpGYpqnw54QwlP7esMERM1Jb6O8EoEVYMzn4Ao6CmuXm9nJbpmQfjr0Ngv5tUSEjnNweR%2FOicqlno6gt9rU%2BhQecjfxs5HQ7sWBqyFA7YKbU%2FxQwK3%2B5nhYVg9ArnqTmL9V4sHrHozqbBVTs9lGm5r53C8Ab9VBRu7G%2B1njtDyW8Mx6%2BqrW9pJhFUkXwhrzHv0oC5ERz%2Be3&X-Amz-Signature=8476232650bf0679292cdf4ae6008e57bece1efb456197ca42a25d8b4ba6caff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
