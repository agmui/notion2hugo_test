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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JEPY5TQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFlveS0Kmsxlw0PUeEF5U6cKfrwKySVwE6PFX80enQjyAiAH54P0Xz0dZkVtTsgZz1VCCv1pgfKWGoohRe44HnyWfyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMvzMvMZsVX4O8hHnFKtwDoL1sfML2OqVHoveYtRFz5Z6UJjwhNB%2B2jGsAAy8oI1S2ZTzUl%2BG%2BdIwmL56HQCrSbmNdV3AdyycQMfYsVH0VyCsUNtkyp%2F7gRwPvK6zooEKgQ2zkImVp%2FkK%2Bzb0GbK6KUzJ5368zG79P%2FFB%2B1EO13hQG9w8QNRvLqXSckIHYVzDYONJAMqCp5vtvz5UR%2BFs6Mup4Ut4oN2M%2Fek7%2Fwo0ZSj6TG5vAHaXWsbwAIKptGe6dSgwKOHcB1B4kzEjj2ec1ccmxJJqT3wIvitAxH2w8e4VtGlc7S77iGi5rbilXFW8KnLVNoX%2BhZQ2IF0ZGUWxrd0GU%2BocEzOijMTMESBHnYboNmTY5ko4xDE9osPM4u2iEekx7U1idSNth3ddzDNKCUDuDRK0bRHkUdRiaKcVd8lyoWH90JRB9ZIuJ0RrqxJnf%2F03%2FAB6V4ybAAbjqhRtUb58k%2FBPPpkVHLY8Dm%2FmAjNW%2FAFnOGefRA1YiB8%2FyZlGQGDSPqwWXfKUv3k5BKl0ipfQezj42LoLgnY7TrNn9WAAmcITQlwLPFtC89JSIpqzY9Fjn6jU5Df0MEwiq1Y0xgr%2B8MCgt8HVV5Q2AcBK5GShzgE9R6%2BapAKNjvvnOc%2B9CrDOouYWO8iJRcNww5KX6wgY6pgEFC8DDzzWALs3LDtNUJIitsv%2FpLncbGWKYSS0VMBpLw1a2cd8U1tXJasv3Lbp0uot%2FIxOII%2FfAknC2nB6drs1h1Zr8gfFTsCy8Kb9Px4LmKPhwFo0HBi9KEf98Ynk0Sg5npiZvqbTKiTDp0lxICiIKnIdP72oFEfF41ASVKTqdqlTZdMXoEos8OxrWS%2BtOKjQDL%2FvDzA1zJh1Ni5VuJtrDwdpQTU5Y&X-Amz-Signature=06c366a2146fdee8207ba33689f8c17b1ef2038dcff1645329fbff78d6f8719d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
