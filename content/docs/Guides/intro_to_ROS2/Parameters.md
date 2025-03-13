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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGX2RDC6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSKiqB7hbvXUEO%2BWWX%2Brjn%2BJ61OsAiv6j2cbh3SVSHaAIhALHuj3madKLinNgQD%2BpRnjfAd1Lp6fLRThqP7sYOzgnoKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa5U0GdTXql0vi1igq3ANxjQd2PCo8XKoFxi5PFZSh%2FMYA6LB1RHvM4r60MOonRztPgMKHzF5rzcnINShE%2BDQDnsctfdh6vfA76s5U3VfcTLm%2Bt9Kj%2F5jlPNitCSxrQ0hQJ7KthUJ6sXzhHHb0jsfpnLBpfZreB1RzdzRb6Cqoq0vf1bLZjLO2H2XFzj4tN6cp4lNyrufrzeDupbRB9BBg%2BxnPj7xM%2FAqPzRFfCVuUnG1PXnAwIEXMG0O6XiFwP%2FDQBooCl14AhC14Y0Pu2iixBEr4N7S7%2BQg2XrItLNEOtI36%2BBBxsUl5yyUsvtC4uCd1EkUZyo%2FNSOfm2zgzyUQk1Ja4kB%2BS%2FGfwRPlvok6WAWEe8GZCCys8loLNyW0O5xA4D2VPNU3Z6u%2BHgHiEJrF5Juy4RUCu%2FSaGmRyQLGWAbrdnnO1WoYiJhxcGVtLzQiipHVhmvO8hD61Mf4CdhKyrmxduJVofsquzMyDgZoLGFMpnKN2B%2BAcBn5WxxjZoi1ocYDL0pOfLuenRGeZi%2FteEBvnaqoBXyXnHMWStkoAjQAxinNoHl%2Bl2ea4vIivGygOSvAqanvG2Ajn8IalukGSn1E4HikqlJgB12FGUzvSYVUYa8Gr%2FrdtGHgjBq5RpYizWGSDovhefZKvveDDok82%2BBjqkAUO5Bt5SWzvS3BIbalHfFh4ldxuvwJFyCDOl0YxGy%2FFxnGE5QLvbhHGWOvODgYCNa1QENdMOiwUzkJmvrRwpuDKtEyPZk2TpGc0iUUGkDNwmvxnICj6baR14mavAJlLXeTPdA%2Fj%2F8VRShYaxO7GyjbW27I%2B02k8BrXtdNNJFNdWYNUbtTbFBPgj0TCXYCKu7QWa0cIDW%2BL5Jxt9ezg3XaIZkboMx&X-Amz-Signature=3f0309f90101654953b18988dbb6a3e9b8ee27ccf63d1fb031527261ab3cc7c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
