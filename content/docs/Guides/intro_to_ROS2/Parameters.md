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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGHCBLZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7U84duY5XbHarwcP%2BEBC0HLMrA9T6Z1fJfPdXrYD1zAiEA0px%2BWIUcr4m9V%2FtgUbcuxcYVr8%2FMZAVbsHwDjAKi6ugqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAT8Fkf35vyQVd3zPCrcA1beatdF2Q8e9Zv7aJwODYjV2K438CSTohrRCe5ogSYc%2B9OQwUP8MC8VdiJ5ZqcmKwepAALb%2BDfj0z2ar%2FZKyqrW5%2FPi3HJP9vs%2FO3icSfH1o8Y4fQH7sY%2BxHufrlEEkv7MEEZHJ%2FzeJ5fdAoyaX6zY59i7XQloaK9i3xrnsi7yN8%2FaKhFNsFm7ter1ZxrRgYByVX7h%2FtdLw2ok2qVSLrMTj%2Bp6TGhMxmmI0wz0AotNsZnwsuiy3sjPC9ZdCxyVuQvzWgJYCpA0Tc%2B1FziMc2OVtrhl3VVgaEwVm6O%2FH35rItD6hEdc31sA%2Fb1KSJE3zPezkXcj8RgQK2qE0bTMtmoKIkdAzP0uBJJMVFG2%2Bf6Il%2F792REQ0BHeMpxxOpbBIm%2BXz%2Bavh5mn8GurKufUXMuslZJktuMjhnlQSj0x7lkC5oANB0tq1N3pzkX8DqGfu0ISLEuhDKERvw4fJ4XzYmIWtvuh49t2FnBfbpTRKrE3UI%2B3ZbbS5RqWrU8%2BEYXD5fUmxr7p8233s2%2Bdt%2FLdNOfAPB6DsdxQn9XlC4agix0Vwi18D8YL886iunpAYS5f9FWXKEbbmef74PQbKBxUiArKmnpaywQeNDfquZpihRHyMmwogtCGkJEcbNqBMMJ%2FA0b4GOqUBgG8uk5mpVp4o4Fh%2BQbllOSeb59hvBOk2uLNTO%2F6MZmZl39nye2lKMKxGUrOHJrBfX3wYp0IH6tte4gun2FO6ll6rgA61YohM5WPsWuo%2F%2B8ggOvs3ZxsqCTog7yAWmAfLFQkFp%2BsTuy8h9OEQcvYUEsZSgNylrLiTY%2FECQVWAdI7IPe2sXUUJ5MtCTRr3bfUHOehutrACD59aMpEPXJF0U7rR7YBu&X-Amz-Signature=c6019acb63f7e2e22f6b44ac381af1921a38d56d8c3b6b29e4678159f42b67ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
