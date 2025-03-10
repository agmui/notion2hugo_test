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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XD4ITNA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCSHRCnzh7Ne5FUmrwiQTCnUCUNXKMX%2FziX7LPfpL%2B70AIhANh8SuBPziRvV%2BwcSbHOfdkyF%2FMsL8ZXUkNJAQ202Kp%2FKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGddg3R0lUdZmZGL8q3AMk7qc6v%2FjCFStqqi7xDojxRqpZO1%2BawH%2BTRQDpbPF9pgtvSu424ZCgB15pr8AiamI4qsM8PbbceCLKEEQ0iBkpb2FOZm9kelyVPputsZRa0sRrLw6H5kk2fk4vuEEBo8HYxThTh4AeDobM7tCLlWGrAYG5HfaRcqFILhtEAoTTSu42RRJv3JB%2FJaCEQS1cwl1KhoZI6JI9pSzFjWJLZKLc9FOMWMsb15dH2gKj5zSXV0vdUv%2FBF4PBL2PnAwI0bopzpfJSl07CvLRlKzUj92bTKWKN61ReZEa2JuunLgnGzb8VMgOACz%2FshQc6rDOukcFKjqDHfxGPsc3Vm0wJ0Gi9xnFMdxXuWyg4W8YJ3YfzRQ82Zth6vGvxvytDnfkJQVG1jcH6eN6ihILXsnP8%2FpLis%2FMU7aghg4D7z3mFgOWTxgC2e4C9vvRlNy2dBbZaCNVXS%2BQ%2BAdoF83Jxo7XeJ9nn3mWbuAQHAJfSgQOB63EWqHg0pKQ54ctetW8Y2KvabWthOjjGnyT21rxrJPWIkKEhJcfp%2B%2FB80Cox7P%2BK0Pm0l2PN%2BZd75bS3vhArGpZCWyMhjw6mMpaEweCUg7exZiFeWpCOF6UrB%2FCN8zCaRU1aHfRJTr56TjOVyro%2FJTCgybq%2BBjqkAY3f6Ddc3Xi%2Bcmq9elkociS4%2FzUeVDQyTxrC3lgnqWo2r0Iv9h5DOr2W3HOCwVDQNhuhKIXE1ctmaJ1u1coeAUJYFRtMPcgX4rwS8BONgGFWshFJqCOt5A%2B%2BSq5YTW1yL%2BtU2Q3VYXnKH%2BI%2BaJhCD6VmxvVhcX849jqNUU1aIEzXvwqQ10XPVSOfK%2BMjerNq4%2BYabc6ppKJhp7mSuEbi4yYsU9XN&X-Amz-Signature=d92cf35d6f6072f99093bf35186b85c637bbae06eb0183dc20ea1eb44c4d2b03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
