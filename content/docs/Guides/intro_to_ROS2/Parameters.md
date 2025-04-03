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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXNCHQJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtj2rJABE1UfO4XQYfxKZmXUXTb%2FZdqGdkBPCHARLD%2FgIhAOBJKI%2BuNjrAsbI%2BWxwwn0dopFwQJDcrHoqOYqKZK0SuKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEvCpv36IzA4cc64Mq3APCdZRBk0J2KxSSxsfUTDYG78iLTtm2hVPlPSw2EOBRkOWaiGdzp4x%2BpRTVn8SaOBdLkRhzljj24pkPQqT4yByuETY%2FjmjhMFWw2H%2FbUSDqyR4FCYCYX4y8xJnT%2BCtp1jc5dQd4gifWYHiXSJgmIG5EX7R3cZdkMaqH3kOV7OBHCA5sFkvxKj6EhikaXlhpAwNDTqx9MtLGr%2BiSmcdgTvHZLZGvO9Yb%2Boy6GQNpbEyP2FfjTA4sqh1IdBTUfpN4rlE9VLrljCKQLPXRc%2BMSkJmmDGqnUqLzWPbZQF7OJwwPoIeaf78EcX5AgfY6oRFiK0tHSJD%2FuoAXhSrAdoclMwhrakYyodSxYgwL2wbAueEZuA1StUvcdT%2FZOFvBxjqj4PS1Op%2Ff2AoM5pcIrHX3HRLNDVqBXqc9TaZkKkqjHBee9WZr9BfKkkTkXChnWpTk1CA1bvi0WYOTPfCR8fhNKvoFuydJfcfQkqFTbSkEQLzYT76prt484ljNQKWfQQLB%2BD4DADEhX9mPyM%2BqFXaeGAfqOiyiXP3fpjAxtcfxJmXDQ5S9TiOrPz%2FQTUuBekXHlpL5ZrTzQXX5VPI%2BZfoOvzipjaTVVaGN7663S8zG3%2BOgwnsKNJlo9P9x9GsEjTDEyrm%2FBjqkAQqM8ZlXXvPbtjTaXnfrE35qN73bZnEtjakO1nHJLi0o3OpRehmtt3VC61aSoAOGkLT6dqb6wJhVwB2397df21tTIlGy5k%2Bye40VJGBHSwR7UmKq5bdSRG6RPdnYLS3i0j8IWdH%2FJ%2BOGsKiue8eaWjn018FHQM%2Fh8bqQtZ7sWqsKPedOgjgT8RGU%2FSWziZzv0byIv8P1IqWTKWpmSTy1ZwgimrLn&X-Amz-Signature=679cc5389e57d0f3285d2b3463b61c458ab820c4e771a3fbfe2a2bd61e8255b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
