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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K7UDQDF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1nOjRvVbpWDLSyVVLRMZfniF5YpE9TtfU2WrGExYQGwIgAd6fxiBkgMnhoO85rZnm%2BIBb%2BsW4LEDYbM5%2BxxbUpbsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJXRiyrbsBH0y13KVyrcA5WL4X4u6TBpymjvcgDazVWKeDOcN41%2FiakWboZNPGcskrkF1A0CaXz38Xu%2Bm0maDalqWSUrnVlLpWeD5HJt942dFAxvsUmrOfNB2fMbQ9OjIc0kU%2ByeLGSbkM8If0nc80iMpHlyxLMmj5T1iVz15JX2SCxWBeHlqwQ4SLZbiN2MN4JFTzR8hzGeBw%2FiYqABtt%2B4Awi6kOCBAT6BiqzZPLhSC5oj3ScZkWZU9hfohlkRAHXEo8C6gEhOI1HpPsAV39baJ5OC%2B8TaZC5qg%2BLdRMmofyzxLe2A%2Bj2ygf1Fzi43pztgRV3XaoEqhxS%2BZ%2BKJQhzTNdJtQTkQe0dPYTRFN6jokRBweHMmR%2FdDkyxe68sYZ2qoMCYDQojw1BKjiqJ6yHXI96Oa%2BJGWYbi6LLC7fCUhCDmQN07pAWPok%2FPtQyIG%2B7IlmDM2G3j8J7%2B4A9g%2BvyzjmDUKU2pd1%2FCKGL8Z82I%2FwgT1DGRmcGWP%2FmsSyxiAILPCHWhjF%2FOdrO5WOQ9zGxiy7irbTO1BFHs6X%2F36Zch4bQ%2BsYbJIMLVniHgNSHqkjSaQ865Dyi8TKoS2%2BXZU66ljd%2Frj2lDb0nIKdzQ96kuJ8Fkg%2FPwHGMJpLU2hS2Mc2jsbMkQa4ZMwViGrMJXJvr8GOqUBwrbU7KeMJZBlGn7GeNVJiCvKuo6S22NHqxcz3OMXDGlqmlGK1hX5TpRI4N4KI563dcKK%2FauF%2FJpbmAKcW1BSNiKF8oAlD2xrotgjENbzW40O0r15Z3LR5wvpR%2B7zAJBmQ1csi5utY0ZABA%2FTJ7XNYcanu1BJwQQEaKUOOzTfq6LYpIh1W%2Bi%2B7iK4o4sHlDkXG%2FHesUBwEH%2FXdouU5UyiRQ3wypX2&X-Amz-Signature=8e3b4b943f4d13c474379437e8ae5fe8a3b6702a1865946157d49f079000827c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
