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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LYVDHD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4fBaxZYxbhGuDH9IjwduHx2camDeYnZpkMlo%2FXPQNAAIgCOdvuLrMSt%2FqMEjgItmGawDhTKU9fSmv7JQ44FAIbmUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBMOl8WXoGOYJFnQCrcA%2BLq3u0mQBcpSPK4MBm3gY%2BlXo%2FbbP59lJUH8GuO%2BuHfkUWS2%2FNdvY73GrH720OCaGIbEvJjyzNVnK4ucwy7oOP0bS%2BFvX731wguwvQUGqBdXcaOFyReuxLY1vHxPgX8IEgCgobeqKsVIG3ZYdcsp%2Bx3BpQO3EeeRDBfHwnCKPHRvyFs5ABhHhgyjWk1viq9j4vk12WBcfJbXLEernIdA8DJfzFRW0gkbohkpoJGBesBxOqCwsPCm8cObN2hPyZeeI5KWOhAm0otiV8jEaAz7VPD4Da6%2Bw9Vr3J68HQfHWl3o28acumGbS4bt2p2t4uo3J9aEKSEDe%2BY2HupBMBA2MM1KnH0J79wMyg%2FsQPBSuuUbcAxdB4Solg5fmu33NOve8pFEnGgmp%2FaS5SJxuPksE0%2FS570wNFeAXjMomSNSqtdZ7spLYSJxXt9aKQV4%2BLmzi9BXEJEvjRl5xnmGn6DLusBs0i5yd67sHdniGnb3WnzsZO996mDpf5%2BFm6kHo41bDRWkW%2FcFzS0AWNNtn4nFTP4ueFaRzHK%2BvUqU2cD4%2F4P%2FqoiqXsr9QYjfKGbwf0P04%2BAncMvRo7E2FQ6E60ln3Lo1p8Cs2Ws6KArmquay8G5sJv8IEvnSPXNKqHzMJ7vuMEGOqUBhn4T9XRBJURsxbNVZUrC6zH%2BGc%2BGd2MTHZy1QWImIxu7RwvQnPF%2FMMzk%2F6UedvwjXI7zs8nLklwrSjIUJvTMoNdRMiLeoLZfpLf5hIqrwFx%2B%2FaaGbukcNJK8upUpGpSzeuHkE5hUvLYT9gvFUrWrMs6jNHHJillonfYPwJ7wu%2BHglTTDG87y1Ui2W1YW9ePeB5Ac6GpADH4KG4DFQHH7dtBXi0Nc&X-Amz-Signature=dbe3d22a503a2f735683255d4e3cb643fee9301bbbf7ffc1a67e42044189de2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
