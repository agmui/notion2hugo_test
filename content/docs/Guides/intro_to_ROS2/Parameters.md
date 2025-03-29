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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL2UR46Y%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIH1JLI1hivX0gljq6FYkI9lo5lmd7Ki5zteKyfVkLLDQAiBVRjt5OfoHN%2Fq5IJ2wjZ45lZHubdurFNRGhBo0hRrXWyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMUDXjHsRJ6OFKiWW%2FKtwDEBzgi8CLZquP4DJxCmoWaYIA7RRPz1Np4Y51s6EZC7dTUqa%2FZxLHQwTvTBnhDQXoXIhsIs0fUa0%2FL7x060Ubx3gBYtJyVB6%2FA8Y%2BdEKw9a0x%2Bmp3qJx9cET1%2BulE0wNjSBRa12BjdWaH5aIGhcwOlnZItj%2F%2F4tIJ8eD2td0iI3t6mjgkWAmvRL0dzcHgpGBbfVc8%2BWGifZi8ggGnZIa5U8lJGDBOqrd044xWtg4Ww6NBmQ0OHyW8eYr82oMjpF2hoG58dW%2F6nPctnlEHdEzgq8cMJ04Bg%2FXvCAPvqrony3axpffNG2hHA20LfmawuOCWp25EFZeGERt4kW2T%2BSNlzc%2B6aCO8YyqvPelPhy3YNaEXEKaAfzsJi%2F%2FTDHsqAbHqTuGvvT9wYLs7qYI59DfprzkjA13ZQVjfv3QpG17q70FPVM93ePcCnN6YEbowmWN4Mqd0ZGHRYp58iFiUgW%2FdwwGMp%2BbTCvAOnprb1VJa5hqFVrU9GAAEPNQSaVR4dWGW6NRVi%2FeBCjOdso9%2B%2BLOCe54Ciu0PPpQzN54Zk9%2FB14FEtb06pH3YMaNiY%2BcF0ibhT%2BszqpcfiIMroJPqUyjMP71%2BZLND21SP2GZTjivbn0haJTltSVNi6IojWfcwu7WfvwY6pgG7BFLBPU4hr2lcZWS%2FFwau0otvE2bwdwIJPxmO2Mt1QlPu%2B7giI%2Bo0TK16niWD0drVx%2F5nLx%2BBrX0Z0pS%2BwjdzvGSuZ36yyLhFUnLP9g%2FL4wqrmBinZq2pf%2FZ%2B1tATWQCYIv8zlkt8saVAl4LrZHENK7J990NSZ3tZwFOtwfLjfonVpNnYSWXvAJKTTdBmb%2FQdN%2FdQI4F5Ij%2BYpKRRam7g17KmGJ%2Fl&X-Amz-Signature=d034e4693973f461fef8291ea26cb9b4da5299b8eaaed137c40c719481c3e1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
