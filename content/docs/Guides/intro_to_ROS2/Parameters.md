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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAEN64II%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEM10y%2Fcjq9%2FCMtSkxx2UymvF%2BnIcj6P1nvMUxE2OhSLAiAidpS1zndFDxShVnG08KAj2TjXTXursgLrBxzkgKstKir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMhlkUOhQroB9bvTneKtwDZv6B0jI4nDSqQGwHVik0QxjwFsurqcEYvRbgLh4pVMMwyMz2Q3ydLKZdH1koogpOHcBJ1Tfswbcfwt3ieRKGhI%2FIPp3koGuVmNYyXPfF7BTE9zJxh9CzDakq%2BAPvZx8bizhR6Qerf51zUX0XIBj%2F0UZ%2BsaxMbGyRPz%2B7y26fzqX5i%2Fpu42ClNzErh%2BQt2mdF1xXDlV1M%2FzL7GxqZGXsrO%2BFhnpg5PuYnB%2FVz%2BblUbqnF2KUzGiZ57u8ZZKWbhZmTEgXT622xXEGtLlaxBPOlw6FfUhCUQ9FnQrtQ0eAYquga3l%2BrQ0EBhYGFj5SXg39h8Q3hL3UqgOvKBigbF8TtFEwBY9SILaDhyzsqbgalX5Jf6UiK09Lq68bZcJfWyGT2APuJqRxiIldH60tZfrcPQx3f91ujW9ZiDB2NwfQTIf2%2FCxupTw9DpqOGB6D%2BLr%2Bzc3OyVmEKg1m%2FDfFhyZKGSURYbs0iO0qwVIKENf5thuggz0MRl6UsEN%2FnYs6t%2F8DIyM8GXPrl7sA0Z0RoRGz03qA27BsaHKdVhRY8JuXYVOIWpNvIOlYFCdpAKooReXW%2BjklviGH%2BZ65p2w5SungMfS6YLwJ5%2FZgAiE6H9Mng2XAPHo5IWLihX6tZUO8w7P3FvQY6pgFIYZ0WAZYsikzeHliWsJabrIdv%2Bc0f5mbGkeCr45NPd0z3Pnm81cMss7FniJhNxqsIoHz7IJEx2hwwcNmFVmj380kpz4qLsnSF%2F21BTwUnk8We05hBJ5pdTNyRTAjbaHtpER2sfq%2Fzv9gi7ljwvvNdu8Fas6Rlu%2BfI%2Fd1rAG158xH%2BgIZgQQNyaHEqlBCiQWFMiTmcfGxSjqkjKxkHsjLFCbgCw7B6&X-Amz-Signature=a44710d755c7036a86a5fa0f10fa4b66b73c55e4f3d9d6abcb09fdc01255ee2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
