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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TABIA47%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjNlQGTE75JwtdHmPuwpfOAvc94%2F8yze2VnzsofXfskAiBSj3xF8kSX349pOv%2F1%2BpSmtI%2BO36Q6xvfDG9t8odjzfCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM0YVXRYMQhXfYIU4qKtwDc0QOVRHfpLEybm%2FGapF7aQZ45PFg6BXhz9Hd7I%2FIeipyhGQ7iJBGqNwrymAuuA5dtPBJNJWEziL9gmGi8RUrTRtwZrLx1EPgTaxl3Wdlb899J2kluKSy8VffJMDboZ03QpcaLAAeZL5zTvi4pyk63mn01O37Ykx7p84DGEQ0KaJlgm7heLPmY6aZc4E6M6Xy5S3zxseYNoDTRXPPI3x3gtS0xnX42oQTqTAkGcOoIuNYh7F0pLmM2gweXoX9ynv%2FE4ayGQ5dkE%2BihPKxSD9RMiqOHc2aLEafF%2BYJngUyhyuFi8jJaYwxr%2Bo%2F3qmDSlEHzyCtkfcaf12Y91inNf7Z4Ux3qI7Nszi1CLbdhIHp2SfZcrE9M3V8QwGqBcnuo5EaS6vVrfIuvnHnOwmaz3KdrdS77fuj7dFSYikNEb7mXBAXrByZbzboVOVHFML%2F97vnYLi0wBJjad53FOudRyYA%2Bc7aFPc8t%2FKqWL6l7ER99Q4DM%2B51q5P9UEbz4zGJusWo%2F6pQOYAbfWXXpuWXhYxEme3fKUwEsXbDm07H3l0gb8fXLTjMvp83uVAZvkTu0QW8xcadxFa6q%2FoPKyUx%2BoBnigQRa%2Fcqoo28H%2BUhIennoQArP5deH%2BAFfJsJCkEw%2B42SvwY6pgGJezHHx1Ue2NfavIZMiJE1y6bnoR3i%2FikVs6vCOEEv%2FlPt%2FLBHBrYH5z9OuLF%2FRG06LiV4YefxQiqOI861QWI%2BdUHfjf38w4VUfSTdouWsSW3si3SS%2FZUzW3G3K4kcQVFPJJButzUDJAjbkwWRWCVyoXsZT7qpqB6DudWxa1Z5ESvWUvBmEVQk1heQ9zqnnv4hU41Gm081k4qnKnjFRBSlbq3sJaNe&X-Amz-Signature=47f9658ea3cc16d58dee40edd0f6f11215bcc9bfda4f403a6a1908eee34e7eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
