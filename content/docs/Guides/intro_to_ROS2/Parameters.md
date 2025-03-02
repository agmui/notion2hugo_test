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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPJTVCR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIE8CzWyotCU0wn20OjpJ5XddOerFfHeOqrzLmkCWCbhEAiEAj5uoOsZJsjZkcUPaxfvoeh15161jW8RgcyO0G8TgipcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfmggcG7o1QEVRbwCrcA3ena0OFdzYkEy5R5mDVo5RPx71J%2BiW%2BqV179C0LznJU%2BL6a3HUzOmiQq19gx3PFS9O48FOXq82Ap%2BhG%2B9lbYPnKNaVS5ZXINiPrRaKUfsTezh0bD2BThz8OVTbP0z%2FBPUpVI8g7hwVkIeS53bk%2BzG3u7ovE7dpYMA4NCFah7pHkx2Dh8qKZjAshwWLOdtmKxu3V3HsoJqYx%2BjBJONHIEpt5jxxviZV1Pv826upWWTqCyAIedeCZOwzK4klPfr8S%2Fd0JPI87Mcg7Npwy0FYQ2N%2FlQKf7xT9k82uDhGWcdydamGhEtWLakOV5T6IyeSeJLhQLz2RbQC31hDeo7rkS3TnLch03z7votB91rM9NRdV24UzeL37Ct8VUkmU8HGCnj3isVc7syoVSG%2F9ooHcy1tH7dGazbgJSvoifE4ehXKj0ViZTvX%2BK5sjS0LHqSbdex4ShZC24eHL%2F2MonU3OP8953vx8pyIOY6MKmJ963%2BQGPk49fEx%2F2X635z4tnsF7brlrba5nilk3Xz5FJ8hKgQhQ4nMZ6ED9ZErj6YlOkNDplMfdwcLqLueQZimRDzZx2Ze1dOg%2F4w5W7AUdfWjRHSfikMFL3%2FaAOBOUqwYCu5eIAHTe60nOOf2EYjnN0MPG4jr4GOqUByVsQOLr6eIQ62QHJ%2Bi4Sdgb38lLOnMZQ%2F4K3Yml6NDJgc3HArmO2mNgZTHiCsS5rI8AyvFaUZ5z0iMAlWdeSa6zKIZIpoSAbgP%2FIOjUpQj4b16iC2Vick2W%2FR5Py1Cydk5uxMu%2BohKEWg%2B9%2FzX6sYLuVwBMhQquCXJCtASHe%2FWXZP3WFA9zh36r6Rt%2BoVMnEZhI4pHm%2BFor2wC8f46lnTD4sLPZQ&X-Amz-Signature=7ace8da809c105b14befa6d8bf8bfcc97df41749c7a93055b4861014c7955728&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
