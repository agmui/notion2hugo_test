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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2UBO22%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHVSIRRhQXRJFJIgpgLdNGAHLky4WZg1qVSpxt6RdxpxAiA6AbzbjcFL6BCVuH2dFO2tuE7X8wxLjZswWn6XTcmfpCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM22swYGgHbRdxY1VIKtwDCUrsQYZ0Mpm7TClQZXbtaFZ5mYOwBSqBd1ZjkH4ecTa8Fh2OLI6U%2BeLTZZrXcDGYNUzGtPJNeLonghPlUI6C1LVFAd9zHYUGNCzyamsUC5iGZnbKswMyN%2FTiWTdwXwvl9O5EEiqj6gdZxRmUeYC%2BDLpn635EutY4HQA1vQVO7His%2BsnpvsZuEwFfQFsehS0sum2FvFriGHQmfyc3I6EmjROJr2HMQEzYm0LUmX1C3yt0zZUJHI2YeR8lVmbcZrN0NffEGdzv%2FJAiQwmmpNoFzajXRZqDICPQaBtWwzw5Dg6OaD%2BXyBrzXQfRhgrluj1NfjeCTXVa315O5ATQ8cGA%2FvhvufgaCnAt15u%2Finln%2B1IIGGQqVyiBF44eOwT96tMPWcHMje2BiyvPNXh1m7x3ooKMQrdrqsDt3hVP0Mo5idQOnfCKKK0vK%2FgYqBNZ1ON0%2FSAJlBbChVrVytYoOEW9xc8RhhkeO46Cs%2F7z9aSwzlrIV55rI8NppgvP5Pvax7dncuN19LBX18qm9jPRlBcG6Mlpy7Jc6NUW%2BcdyPzVxhCfLAk4qx%2BE78Qq23Lcx4fjzrZTI19QMRFC1T59ocuPBfEwRKYshLSEmeHwTBvTt7LLvSTCE%2Bduz%2FkYtwosw0p3JwAY6pgHgE9LJRYFHIn2IakVud5PjT3a%2FvQ7wk4NJfqnDZ9uEiuPkbl8j%2FZTJZzUtpPwuYMH4DFbeqF9T%2FtvBGfzr%2BUXKYYClfMEWJroQsOlIbU30ltw9bFLpqdB74rCrD6jcUNMKh91H%2FE4qCP4%2BbiNz0cy9P8bHHFpC1wiHEwACzAtfV5p1aGhgJ6URp5k7GRweIkVGZSFgMZEV9XWm7ZpnI9Hwuf5KtCXz&X-Amz-Signature=ab6242e55080e2daa50a0f2bf6513551fafec18a46c312e625be3871e19560b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
