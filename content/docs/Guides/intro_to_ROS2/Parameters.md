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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IP4NDSO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH%2BjvppmJgE04HiJy7ybRwHOv6Dh%2BreqCBrA3zJIcqmXAiA634k%2Bx5HEcSu3r8UC9BuprcuD5IHWEsPYAtuo%2Bf3EwyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ6y3vZPM9mYJXH%2BxKtwDNGqxvnxrIBKcTiVu3QV7SgqKbg4IcOzBILuTA5HZDl0ADlSwExUklKaiET5QuCsl1qZapp8XjILDattnVT2sY5Mx0Re%2FH00Hv%2BVWMLtZC7koPx%2FZtEdpVwdq7lnNSGcEoWP07351dl%2BAJ7XEvEA2MxPOlng%2B%2FizR6LcVTXQMe%2F9wvgIY%2BCxr1tATPWk96YnBAzxiDxcYDlfDEPI7pJaA4aa87odlo7N3MDb5G9GDDpc9PB0dUwX5F7Yx5Ny1bRq66lYgFFUjHhrgIWqwbsRTCMbLDQzOawnQin6Qk%2BZtkY7LFXt8qh6jFUkedyRAJCt9KArttharu9vE%2B2byEBx2UuRuCM%2BIbs2yNIXZSzkWOv9fI4FanaiSBm9TnTNpzghba6nPJVAplhJyYzDLJpMVmIU3Wu%2FaZkVBsJNykYHqsLEghFvQaqX5thbGwCCyw7PrAW1GpR%2BOpxpLviTW%2FrE%2FM7pJDiIMeso0cHfAgIjsHJ%2FLiDMzjJ%2F4UdbKNdDvWDsTgKCrHlWq5Ev5zINToaaozlgtQx1fAyke7UNjQ6dHM8Aa73Jn%2Ff5%2BhSFoxjPr%2BkF1CAud%2FdXGFr1wAeGG6Xj%2F2kjft34LFWuNbeQ6xWrYdu32WAZY17%2BiEwG5lncwqMXPvQY6pgE3RushyK2dIY7ilg2wpJR3cuTJutxxg7Sg4a2tCSXt10uUgE8U5%2BOIHuTJmYAw3Yy05k8%2BzT2oI9P%2BjQ2f7pTG1rBVYbIUxtIErth%2BQBqvrEX7W3urw3DY6uVMBOiCrYeU%2FZAKjA3HUgaYYvUhA2tfh7VtHjk1txT7HbHp%2FHzz8GhqslPFzdaoGDKOJiW%2FxU9%2FqzGrN0ZnUJUgqFEN3uwdzV0EG%2Fve&X-Amz-Signature=46c4ff486c22cdeca22d8b12701b1d8609fed32ca13854852166483d1433f539&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
