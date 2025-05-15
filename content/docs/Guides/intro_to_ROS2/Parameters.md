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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTLPZDUV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBLU7IBUVbU0M8lLgMa7ztHJnVuTDUZPr3fnlvNsSss1AiBsW0kDYqEBhw6VUdBBeNbRuUrrKA5IgsAirpKqzmKSeir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMMszXwY03%2FTtmrmj%2FKtwDSie%2FcecAd44m7eFhMrJf%2BSkKu6ydFZCFgZpOiYzgpJ3Gr5EanVsUWSfpGDGqchjkC0ZO8qmwLlKyKS3lvY6jTq1jLTJreKyl3QFnCsQbB9yBDoUhy%2FxXwV8B5Uz6P0%2B5fb3LyKCi4LQtvqWAaLWGZ%2FIVkaBSej7hpw3927cZjuAiSQhs45OUIREC0iM2YtkDD5wpjIsiFJ%2FR3tCtP5OVMaBBS4Cfqfn4xitXx%2BZH%2FYK1hajuebX0nxMJLCL0QEt2rs2Sgr4HEsVNHcXCHSxJrQBbo38QwRZD8DBtDKj6btj6k%2F%2FWspHi6ltlyn7nUWf4uXAKJHmRc5WpZBjr1jHnhOoy1BX%2BCd%2Fg97JSxt4lLDv97mGMG6kcq6PYgHpAZObjJpT4qGEdtuWbuNOj1%2BPH0mYVNIsw3WRwhzuYnFFugTqrLoAsnbbkQir7GujlsuKGProFRbeKKqG5S08%2F2xnwd42ubBz1BoH%2FWsOLehIyl93hVE3JfV6knIOVkMdGQMofCYSZI8eHPck6pWcbbHHliMvui9qIS4yR%2B17Mh6KOAPakl7X1Bj3ytz6eu60XZ%2BICNxUPnLxqY147yavs5xa3qn%2B5EriKjCaOQ4%2FzTz%2BIVvqQ96UE%2FS5sC3SQWsMw0bWWwQY6pgHx9QemmWo87s9EfJyEYsYQ2DqsaSD4hnnikONpIb6MOCPfZBCGHUS%2FCi1KfHS44CvXWxzSrRrkoSIlFQdzyGeqSMrZuiTsjhixTHWAntX4OOzJvvnnVuikRllVRHyLf50Qv753pjjIPEfl3J4Nawy2VaDwjjqdBmPycHndyuBRoSKPShB3viIN4N8El%2B3z607VgxUrrgolPckJ7JtDtQME6YsGn%2Bet&X-Amz-Signature=2a80c116d80dc660f540edb9257b948eed0ae7523769d52ad91f40a230fd5af5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
