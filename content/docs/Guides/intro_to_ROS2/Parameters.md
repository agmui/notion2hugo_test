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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGLDLBF%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4n5M41kJRfHwguCzUEdtR9FdahP6x67wHyDEurNDXOgIhAJn6FWRHJ9DGzMy8BwYjg6wjUwcRm7Wu%2B5Tj1YkQta2ZKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuL%2BAu2%2Bbgcunfol8q3AP7t5j4cBdovQJMWjmQh6fipwxWX9SO%2BX2aQbg1QIu7%2BUuQeHKcddCSqbYcHYt73OqrEF1EVWzUUnSRti14ICJKGzI%2FSidA7kR7M7ZNGazv5%2FDmZQbG0ERqRMG53q234LtisfkYZzJTtxthKDVYHCl%2FrcGoJ5NT1V1OU6J2aVlQAIrwV9JYE%2Bvf%2BZrlOQnXzr79KNtXK2Cs0Q8xysIuWQUpyvZCiKxVhct203s%2BG7H3IAGEXm3%2FJIdgSo%2BD57PPBOX5u7hhcISY98I%2Bb2nfEnz9941CR0pjEHL655mvT0GUXngAXMr5bvlrCP6ZhXoiPUxHB%2BZ42wF5fdf6ZPPUaqNf0h%2Byel9Hant4x%2FydrcGjBFaQIqlgyAi2NPkArQMpjp%2BzMtUs8Upc897DkNBz3ZTbgb%2BTzKNJ7Cn9Fu7XiIsjMrzhs1YLNzfVp1J9vEJYADqckADsFbur9dcNK7%2BYd9AmZ%2BJVBRrkqBCvANzrBTfqrYzKcNsqzSzBGAocL3uTSkeWS4wGI7j9TEN6GuOjRRsmEuOF02yeLR0XoaldiHXXu%2BMu%2FFUSGgGTouWIygHEyTmDpk%2B4ryP64W94mCWcg1IikgAs1%2FRNnMPPiYWY8pWzxPfkQrGpU5UpCx6btTDA6e7TBjqkAUhkRICGHxIzKSTDHhagmDT2v%2Bbs9OoRUJ9QMIDsgA3ObO3kK1e2xRSsUZLrKtWyCJJLG0bK6Q97rg0rU5IXoxOpGw%2FcBp8IQS%2ByAjdolcTKO6J84RPp9AUsNNcfliwqKgRUcigJ2UMpeNtPSQtSkCZZ%2BS%2Fq85CTvLNjP3Kz%2F1VZXBRAPOwGoIHrXtmIZEk9WFH5KaBSAPG%2Ff0I0K2Pt96bJ5TtU&X-Amz-Signature=d928411722dcd0632826254123a039aa9d360f883fb8624dca02545a672a7e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
