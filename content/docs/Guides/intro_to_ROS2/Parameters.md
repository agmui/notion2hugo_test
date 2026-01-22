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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYAOPIS%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCjrF2Dd%2FFOC1UQCJYlSws4QVQPbVv7KVEdFsjpPCN0jwIgbMuDVg6265XcDgtdpgtppKXZscezPOgLmlfXpXajU2MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGwSZ%2FKmZcHMbO1%2FCrcA2Zq6SM4yLPqFbOdrReEUIY2ENgTPncxKl58ScdmbdgqTBiHbww6F4ASk9q51jtdAvuBX%2FCzKeLRumSDllLswhu2OKtC6RB65lAEwfvyLeOatlFZ0attdeVgWOu2wOwXq3XrZeKvR52W%2BukOeOiDjq%2F4lRfnk%2B3Y0kjd3A9KoOlMCbrd5jYHrtxe%2BQiVH0KRYOvnm1f%2BVIRu8JWNCTa8HYGUPBE5XfZzneOqwhll19U4OrnGUXmCnTvC4AKYXEfQrpEeVVP9F9K1YUB3EkN1FVsArhrr6oNy66niAIY%2Biqh58FxwKo1iggrap3wq882tJ%2BOdSRbKtPmN0MJOzmx4iLT%2FTtSSj%2B2rHkzul89LxjvmdWlsdynpQpzxgiKl%2F8dHg%2Fs8TAym18igRKLeWflgH7Kh9xLaqlJDCb6GZUipslN9BW76Ie%2FH%2FkNWsr%2BhbqPvRt%2Bdys7fvUVZw0Mw1szDu3iG9Y9e30BD7oHYhVY1ghVe4l%2BW%2Bt6hDSudAz6%2Btwm5qBQZOFiTo9GhWOCfnlgHgmxTPxv2HrYcr9ImtxoPg3FfEDo7x4CvrxFlUFqQYgz9m%2BOOZI6uhCCEhdzE%2Bs8nejJyEeOkxQD%2B%2F94sGMyiryATYNyu9DKv%2FznqQNYyMKzYxcsGOqUBhzZ808UvisA3DSA3HidFSrpEuU049%2BUbZt2wNrdzUyj%2F%2Br6mbZ1QwKvOgumpeN1GxTduyqssic0bGCEdg5BJ2hIi1XI0HW7Knutbj7DQFLri2BgHZ57As19xT1qR5qRfOaYMiOQ5JekxBAuGUX%2FpR7xDMvS48HJvLwXr1bdC1GsSdzyoRqt7YbJuA7%2F%2FKCw2%2BYa2P3AFVPCfi7AvUIERz4Pq76Gw&X-Amz-Signature=5872a34839b51661f7850ca7dae258b115c5e458d7225fed7e7abf45386bfaa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
