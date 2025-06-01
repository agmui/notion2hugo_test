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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2I2RWN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCu1myf7F3S6mqy553yfh5ugRaXBuE3aAKx7iGU7IZE%2BwIhAJvRd%2F7LnnP8QozlkWWF9CKl7yA%2BVjyqJlBe7DumFmBkKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbW%2BXpRnlNCd6nN0Aq3AP5m%2Fu7jDlwCTn0jEFxSCRADp6s1Rz7N2jh9a1%2FX678Kq04rOJhQ6uDbUjKeN6Cgd54YfcbmxJ3DkdSdTQ1FwuzPJ4NB80VGzAENRKjoiV30zmHLraSr3og7cmG6HUd1UOna%2F3FWyNkQe3bPeqDkSXq4Ed7VQ4WSg11BvCmQ75YWVhmJFHpoHBv0s9pQgXyPiEPBzjQP9X3C83QETBpuFCbfmnPEc%2BvdvuquJKIay1WRnkyyosiFE%2BGcZvLwqfBBj%2BWtEe3cinBnU6gruOs0eGrCz2v0kRQCtRXJRT7y4BNUd27XJhJrfOx1qrYzHIv3AEJ4PObxn0KlA%2FdLr4YzZAYYqJ%2By56CQQ5DY1hYVKABJsMVtTCZ3rCohTf6oqDHK9INpeR%2BWLp7SKACkIYFiDerDKVoIPNPmB9LtGFUh5IoyxDXmLdciXGsVsB8QuTy47FBrBjWNearJMhNDdYQ%2BQilHa9SCPKIwl%2BCC1L2tkaUuVQ6wcy5p151YXoeZEgOuPnTXqzSx3%2FYHegg3y0QpboRNLMjCc0f55EfHWe7F0ZlFJRdzlvDYBfQOVbL9eh6QWh4vopj%2FxG%2BKToRQIO4JI2zJwRI%2F1xaCvb%2FnM0BbAxq8uicTVWbwjBoC23yODCHp%2FPBBjqkAQ%2Bia%2FdBycIciSf%2FbXNwOJXFIDJF6XwW1vPM2fZrTWe5vQJ2hQrZFx8TG6U6v6KEWwEquOQhpe0UmjdZxqmyoI2t3TI%2BMxB9oRH0MW5ubDrfBb22pBycFIods5wrYvqEfBBMou6qE5Z75fZvjACfReRCZ2bWcLDFCQ79cyZQJx5ti6h64qtRQXzroGkiXfXnqcewBWhTnUIKlaUvR%2BYU9a%2FdoELC&X-Amz-Signature=f772943f8e1d20ae67441f742900626ee5fda16d5e2e26855b36c01cfdcbb27f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
