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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPYD2NC3%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkMDFKFxg048Ttxq5Kp8htBv8GiLGOmZpmZV4d9EZEywIhAJLYJceQ%2FZs0G4kNGsuovpMizldezjYc42Oc%2BB9PWc9pKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztsYmCDHYxECeKU7Aq3ANExkvG3L47kBMlmN%2BRjPHXPE6ZP2dkYTFXnMXLMC3kmL3%2FYCMEYr%2BROhGiN%2Bca6lxX6slfEzLo7Ya0TpGpWZ5pO1LXSNIH7Yd7SOwmKB1RdvHZ9KoPFwQ9Ux%2FfNtk2Raxk8lEUyPYQw0I0aCrh%2BoEsp2%2B5FdeKEnvlxM5AIdJLW%2F1xTjJZSyVIlkLgQJ9zKXhStQgbM%2BkWHvi1ek6DReLDTUoCZx9%2BuIttSx8iPHQIKDOLAeTHw85YH7ZeVTFz5LE2RfWn3Q6cfQJc7UeuvLFStDlJwU4MY1pxt5n0c%2FVg1oBpvW494oqe6NF%2FeD23gVxloJfF%2Fy0rYFVRRFbuixldbRjS67qZ9Z31PRvgrrrqdrmt6QSBtF5CvQJwF7FgVtu0s4F5j6uVj2CEJkibKX9XzuJ3X6SSjGjA%2F3L3I7gPLJx6UiQQl0AzNG8usneJqhM97OwBTlXRayLUnR39fhyVAU4OQTaf%2FEndHLGiDLn0cGlrigSPptTgQR3dAtyH4%2BNP3giMJvUxAutJ6ifhlVMqJTV98Od1utEzUHbkh1VkmwRNEl66%2BsOB6yyBVvBdD5kF4rETnq8gbFUM3m8q%2B3kkHR5QGrXYjlMd7THYDm9mYWRwUjSsjSQGiCFeuzD71cXDBjqkAfWqlC4O1gkNY5TQuipcUJroY838vryeaVpC1s6VVCYIjrCezKTa%2BhN7dL9uVEXWeogJrUT1jw%2FdEEvA%2B4%2FwVdjpkC3rh%2BUJAeG2gJ8M9A6I4bTJc5ek%2FCEw5il03umPeLR0L8FcSLEEeCPGe4upPdczYOuB6o1slKUecG7cOFPVjesqpnSh2YuiDFpjJxTbm1x35yf0lL8gZ%2BGdgG3iSbmfZLR0&X-Amz-Signature=71a0e18d64f89638ee4ebf370df7156b9e85d23feb0f1b7128ce6aa8680dc710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
