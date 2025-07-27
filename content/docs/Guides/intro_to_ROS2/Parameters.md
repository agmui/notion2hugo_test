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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEEHOVMN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHQQ1mZ4ahgSJzGkgzLSbczhoIPNLHA7iMDmB%2BU5bD52AiBKfebaFXKxz%2F76HGAz46CoRjnp9HUkxqsDdiL4j1DpIir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMehQTQ4Foy2w6J3JoKtwDoq207ZUzcJOFqjRo0uhCGSNNkTrvJOWq3OGYO68TgiCP%2FBG2sOgO6nWXDG1pXBkqg72EC8FEpohxT0WFntAd8UZ%2FIYeTZosNMF3p3M2GuXKnvLuAEb%2BWie6dXo1M1LCj1USKc7skRSAAkGuRqcqAOeATGxEzelQjqnhmJMYAa7K6JKV5Q3lu1SiG%2FPXb9YLg0bx3YH6CXRuvNBnk7a4fsTHUteQyfblAMv%2FbIyvzhnRPFPsOXR2%2F61xtSq08jftXFTsAL1iVCKWaqnE6qEEcmT0NJYxcUz8mkh3CUf96%2BXnUa0nytpYWSoL1edb7%2B%2BOSrnqZiyIVyR7sOJ9H8He%2F1GzLwVwXlXmTkQAs0nfwKGGV9JbfbpgCvc5tQeiXnM1Cs%2F8Jf15poU9U3n8%2Fjxm5cfFT%2FM26b8cpUl8cTz59zxr%2BEa3q15ViNX7nUa1bwvdjWGmX2qP5Glbflv1Umlf%2By8ezM6XKoaM3ZpKOvLCugzBraZ9h4zF9OwgJroxteYA6YIOyx8e6B8O%2B5VOSt%2F5Yls9zafH%2FJ%2BuZ6pf4gUu3LJo8%2BXIInUkZZRNuonKYmp7eG2MogBmhKmYoNGqB9UJucNL5Q%2FamHv7Mlb2tuk84LStvJ1nld5U42ZHcHgEw4v6YxAY6pgEqxQ7xCddL3cF%2FYMYpddOopnTHWzi5SFy4WKKdk%2Bb0%2FoGBLSOHcB33shC%2FIC3t%2FyG8GjHZT2vnvOyZURw%2B49dbF08%2BgFf4vrxB7TVcqH81Ua2cWTGSMCWm6K%2FHoaGhkpuW2wn%2F4VlWN5QUMQo4bjZAvzuWSlOiFJruU5tLSsaRbXlgE5NiY8W2yqSzdLBovk5Hr5IczDIuHPHzvweyRC6IOH78cUMp&X-Amz-Signature=49b5e66eabd0ce990435f75a14ba1c1a284451144d14cd00d8025504a48caca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
